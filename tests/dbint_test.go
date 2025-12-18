package tests_test

import (
	"context"
	"database/sql"
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"regexp"
	"strings"
	"testing"

	"github.com/dosco/graphjin/core/v3"
	"github.com/orlangure/gnomock"
	"github.com/orlangure/gnomock/preset/cockroachdb"
	"github.com/orlangure/gnomock/preset/mssql"
	"github.com/orlangure/gnomock/preset/mysql"
	"github.com/orlangure/gnomock/preset/postgres"

	_ "github.com/go-sql-driver/mysql"
	_ "github.com/lib/pq"
	"github.com/mattn/go-sqlite3"
)

type dbinfo struct {
	name    string
	driver  string
	connstr string
	disable bool
	preset  gnomock.Preset
	startFn func(context.Context) (func(context.Context) error, string, error)
}

var (
	dbParam string
	dbType  string
	db      *sql.DB
)

func init() {
	sql.Register("sqlite3_regexp", &sqlite3.SQLiteDriver{
		ConnectHook: func(conn *sqlite3.SQLiteConn) error {
			if err := conn.RegisterFunc("REGEXP", func(re, s string) (bool, error) {
				return regexp.MatchString(re, s)
			}, true); err != nil {
				return err
			}
			return conn.RegisterFunc("regexp", func(re, s string) (bool, error) {
				return regexp.MatchString(re, s)
			}, true)
		},
	})

	flag.StringVar(&dbParam, "db", "", "database type")
}

func TestMain(m *testing.M) {
	flag.Parse()

	if dbParam == "none" {
		res := m.Run()
		os.Exit(res)
	}

	dbinfoList := []dbinfo{
		{
			name:    "postgres",
			driver:  "postgres",
			connstr: "postgres://tester:tester@%s/db?sslmode=disable",
			preset: postgres.Preset(
				postgres.WithUser("tester", "tester"),
				postgres.WithDatabase("db"),
				postgres.WithQueriesFile("./postgres.sql"),
				postgres.WithVersion("12.5"),
			),
		},
		{
			disable: true,
			name:    "cockroach",
			driver:  "postgres",
			connstr: "postgres://root:@%s/db?sslmode=disable",
			preset: cockroachdb.Preset(
				cockroachdb.WithDatabase("db"),
				cockroachdb.WithQueriesFile("./cockroach.sql"),
				cockroachdb.WithVersion("v20.1.10"),
			),
		},
		{
			name:    "mysql",
			driver:  "mysql",
			connstr: "user:user@tcp(%s)/db",
			preset: mysql.Preset(
				mysql.WithUser("user", "user"),
				mysql.WithDatabase("db"),
				mysql.WithQueriesFile("./mysql.sql"),
				mysql.WithVersion("8.0.22"),
			),
		},
		{
			disable: true,
			name:    "mssql",
			driver:  "sqlserver",
			connstr: "sqlserver://sa:password@%s?database=db",
			preset: mssql.Preset(
				mssql.WithLicense(true),
				mssql.WithVersion("2019-latest"),
				mssql.WithAdminPassword("YourStrong!Passw0rd"),
				mssql.WithDatabase("db"),
				mssql.WithQueriesFile("./mssql.sql"),
			),
		},
		{
			name:    "sqlite",
			driver:  "sqlite3_regexp",
			connstr: "",
			startFn: func(ctx context.Context) (func(context.Context) error, string, error) {
				// Use shared in-memory DB
				connStr := "file:memdb1?mode=memory&cache=shared"

				// Initialize DB
				sdb, err := sql.Open("sqlite3_regexp", connStr)
				if err != nil {
					return nil, "", err
				}

				script, err := os.ReadFile("./sqlite.sql")
				if err != nil {
					sdb.Close()
					return nil, "", err
				}

				if _, err := sdb.Exec(string(script)); err != nil {
					sdb.Close()
					return nil, "", fmt.Errorf("failed to init sqlite: %w", err)
				}

				// Keep the DB open for the shared in-memory DB to persist
				cleanup := func(context.Context) error { return sdb.Close() }
				return cleanup, connStr, nil
			},
		},
	}

	for _, v := range dbinfoList {
		disable := v.disable

		if dbParam != "" {
			if dbParam != v.name {
				continue
			} else {
				disable = false
			}
		}

		if disable {
			continue
		}

		var con *gnomock.Container
		var err error
		var connStr string

		if v.startFn != nil {
			var cleanup func(context.Context) error
			cleanup, connStr, err = v.startFn(context.Background())
			_ = cleanup
		} else {
			con, err = gnomock.Start(
				v.preset,
				gnomock.WithLogWriter(os.Stdout))
			if err == nil {
				connStr = fmt.Sprintf(v.connstr, con.DefaultAddress())
			}
		}

		if err != nil {
			panic(err)
		}

		db, err = sql.Open(v.driver, connStr)
		if err != nil {
			if con != nil {
				_ = gnomock.Stop(con)
			}
			panic(err)
		}
		db.SetMaxIdleConns(300)
		db.SetMaxOpenConns(600)
		dbType = v.name

		res := m.Run()
		if con != nil {
			_ = gnomock.Stop(con)
		}
		os.Exit(res)
	}
	os.Exit(0)
}

func newConfig(c *core.Config) *core.Config {
	c.DBSchemaPollDuration = -1
	return c
}

func stdJSON(val []byte) string {
	var m map[string]interface{}

	if err := json.Unmarshal(val, &m); err != nil {
		panic(err)
	}

	if v, err := json.Marshal(m); err == nil {
		return string(v)
	} else {
		panic(err)
	}
}

func printJSON(val []byte) {
	fmt.Println(stdJSON(val))
}

var re = regexp.MustCompile(`([:,])\s|`)

func printJSONString(val string) {
	v := re.ReplaceAllString(val, `$1`)
	fmt.Println(v)
}
