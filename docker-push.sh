#!/bin/bash
set -e
version=`git tag --sort=committerdate | tail -1`
inspect=`docker images -q aquaticcalf/graphjin:$version 2> /dev/null`

# if [[ "$inspect" == "" ]]; then
#   docker build --rm -t aquaticcalf/graphjin:$version -t aquaticcalf/graphjin:latest .
# fi

# docker login  
env KO_DOCKER_REPO=aquaticcalf/graphjin ko build --bare --tags=$version,latest --platform=linux/amd64,linux/arm64 ./cmd
