"use strict";(self.webpackChunkweb_ui=self.webpackChunkweb_ui||[]).push([[311,889,186],{9087:function(e,n,t){t.d(n,{a:function(){return d},b:function(){return p},c:function(){return m},d:function(){return s},e:function(){return v},g:function(){return c}});var r=t(2572),i=t(8979),o=t(2269),a=Object.defineProperty,u=function(e,n){return a(e,"name",{value:n,configurable:!0})};function c(e,n){var t={schema:e,type:null,parentType:null,inputType:null,directiveDef:null,fieldDef:null,argDef:null,argDefs:null,objectFieldDefs:null};return(0,o.f)(n,(function(n){var i,o;switch(n.kind){case"Query":case"ShortQuery":t.type=e.getQueryType();break;case"Mutation":t.type=e.getMutationType();break;case"Subscription":t.type=e.getSubscriptionType();break;case"InlineFragment":case"FragmentDefinition":n.type&&(t.type=e.getType(n.type));break;case"Field":case"AliasedField":t.fieldDef=t.type&&n.name?l(e,t.parentType,n.name):null,t.type=null===(i=t.fieldDef)||void 0===i?void 0:i.type;break;case"SelectionSet":t.parentType=t.type?(0,r.xC)(t.type):null;break;case"Directive":t.directiveDef=n.name?e.getDirective(n.name):null;break;case"Arguments":var a=n.prevState?"Field"===n.prevState.kind?t.fieldDef:"Directive"===n.prevState.kind?t.directiveDef:"AliasedField"===n.prevState.kind?n.prevState.name&&l(e,t.parentType,n.prevState.name):null:null;t.argDefs=a?a.args:null;break;case"Argument":if(t.argDef=null,t.argDefs)for(var u=0;u<t.argDefs.length;u++)if(t.argDefs[u].name===n.name){t.argDef=t.argDefs[u];break}t.inputType=null===(o=t.argDef)||void 0===o?void 0:o.type;break;case"EnumValue":var c=t.inputType?(0,r.xC)(t.inputType):null;t.enumValue=c instanceof r.mR?f(c.getValues(),(function(e){return e.value===n.name})):null;break;case"ListValue":var d=t.inputType?(0,r.tf)(t.inputType):null;t.inputType=d instanceof r.p2?d.ofType:null;break;case"ObjectValue":var p=t.inputType?(0,r.xC)(t.inputType):null;t.objectFieldDefs=p instanceof r.sR?p.getFields():null;break;case"ObjectField":var m=n.name&&t.objectFieldDefs?t.objectFieldDefs[n.name]:null;t.inputType=null==m?void 0:m.type;break;case"NamedType":t.type=n.name?e.getType(n.name):null}})),t}function l(e,n,t){return t===i.Az.name&&e.getQueryType()===n?i.Az:t===i.tF.name&&e.getQueryType()===n?i.tF:t===i.hU.name&&(0,r.Gv)(n)?i.hU:n&&n.getFields?n.getFields()[t]:void 0}function f(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return e[t]}function d(e){return{kind:"Field",schema:e.schema,field:e.fieldDef,type:g(e.fieldDef)?null:e.parentType}}function p(e){return{kind:"Directive",schema:e.schema,directive:e.directiveDef}}function m(e){return e.directiveDef?{kind:"Argument",schema:e.schema,argument:e.argDef,directive:e.directiveDef}:{kind:"Argument",schema:e.schema,argument:e.argDef,field:e.fieldDef,type:g(e.fieldDef)?null:e.parentType}}function s(e){return{kind:"EnumValue",value:e.enumValue||void 0,type:e.inputType?(0,r.xC)(e.inputType):void 0}}function v(e,n){return{kind:"Type",schema:e.schema,type:n||e.type}}function g(e){return"__"===e.name.slice(0,2)}u(c,"getTypeInfo"),u(l,"getFieldDef"),u(f,"find"),u(d,"getFieldReference"),u(p,"getDirectiveReference"),u(m,"getArgumentReference"),u(s,"getEnumValueReference"),u(v,"getTypeReference"),u(g,"isMetaField")},889:function(e,n,t){t.r(n),t.d(n,{C:function(){return a},c:function(){return u}});var r=t(8308);function i(e,n){for(var t=function(){var t=n[r];if("string"!=typeof t&&!Array.isArray(t)){var i=function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}};for(var o in t)i(o)}},r=0;r<n.length;r++)t();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(0,Object.defineProperty)(i,"name",{value:"_mergeNamespaces",configurable:!0});var o=(0,r.r)(),a=(0,r.g)(o),u=i({__proto__:null,default:a},[o])},2269:function(e,n,t){t.d(n,{f:function(){return r}});function r(e,n){for(var t=[],r=e;null!=r&&r.kind;)t.push(r),r=r.prevState;for(var i=t.length-1;i>=0;i--)n(t[i])}(0,Object.defineProperty)(r,"name",{value:"forEachState",configurable:!0})},9186:function(e,n,t){t.r(n);var r=t(889),i=(t(8308),Object.defineProperty),o=function(e,n){return i(e,"name",{value:n,configurable:!0})};function a(e){return{options:e instanceof Function?{render:e}:!0===e?{}:e}}function u(e){var n=e.state.info.options;return(null==n?void 0:n.hoverTime)||500}function c(e,n){var t=e.state.info,i=n.target||n.srcElement;if(i instanceof HTMLElement&&"SPAN"===i.nodeName&&void 0===t.hoverTimeout){var a=i.getBoundingClientRect(),c=o((function(){clearTimeout(t.hoverTimeout),t.hoverTimeout=setTimeout(d,p)}),"onMouseMove"),f=o((function(){r.C.off(document,"mousemove",c),r.C.off(e.getWrapperElement(),"mouseout",f),clearTimeout(t.hoverTimeout),t.hoverTimeout=void 0}),"onMouseOut"),d=o((function(){r.C.off(document,"mousemove",c),r.C.off(e.getWrapperElement(),"mouseout",f),t.hoverTimeout=void 0,l(e,a)}),"onHover"),p=u(e);t.hoverTimeout=setTimeout(d,p),r.C.on(document,"mousemove",c),r.C.on(e.getWrapperElement(),"mouseout",f)}}function l(e,n){var t=e.coordsChar({left:(n.left+n.right)/2,top:(n.top+n.bottom)/2},"window"),r=e.state.info.options,i=r.render||e.getHelper(t,"info");if(i){var o=e.getTokenAt(t,!0);if(o){var a=i(o,r,e,t);a&&f(e,n,a)}}}function f(e,n,t){var i=document.createElement("div");i.className="CodeMirror-info",i.append(t),document.body.append(i);var a=i.getBoundingClientRect(),u=window.getComputedStyle(i),c=a.right-a.left+parseFloat(u.marginLeft)+parseFloat(u.marginRight),l=a.bottom-a.top+parseFloat(u.marginTop)+parseFloat(u.marginBottom),f=n.bottom;l>window.innerHeight-n.bottom-15&&n.top>window.innerHeight-n.bottom&&(f=n.top-l),f<0&&(f=n.bottom);var d,p=Math.max(0,window.innerWidth-c-15);p>n.left&&(p=n.left),i.style.opacity="1",i.style.top=f+"px",i.style.left=p+"px";var m=o((function(){clearTimeout(d)}),"onMouseOverPopup"),s=o((function(){clearTimeout(d),d=setTimeout(v,200)}),"onMouseOut"),v=o((function(){r.C.off(i,"mouseover",m),r.C.off(i,"mouseout",s),r.C.off(e.getWrapperElement(),"mouseout",s),i.style.opacity?(i.style.opacity="0",setTimeout((function(){i.parentNode&&i.remove()}),600)):i.parentNode&&i.remove()}),"hidePopup");r.C.on(i,"mouseover",m),r.C.on(i,"mouseout",s),r.C.on(e.getWrapperElement(),"mouseout",s)}r.C.defineOption("info",!1,(function(e,n,t){if(t&&t!==r.C.Init){var i=e.state.info.onMouseOver;r.C.off(e.getWrapperElement(),"mouseover",i),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(n){var o=e.state.info=a(n);o.onMouseOver=c.bind(null,e),r.C.on(e.getWrapperElement(),"mouseover",o.onMouseOver)}})),o(a,"createState"),o(u,"getHoverTime"),o(c,"onMouseOver"),o(l,"onMouseHover"),o(f,"showPopup")},311:function(e,n,t){t.r(n);var r=t(2572),i=t(889),o=t(9087),a=(t(9186),t(8308),t(2269),Object.defineProperty),u=function(e,n){return a(e,"name",{value:n,configurable:!0})};function c(e,n,t){l(e,n,t),m(e,n,t,n.type)}function l(e,n,t){var r;y(e,(null===(r=n.fieldDef)||void 0===r?void 0:r.name)||"","field-name",t,(0,o.a)(n))}function f(e,n,t){var r;y(e,"@"+((null===(r=n.directiveDef)||void 0===r?void 0:r.name)||""),"directive-name",t,(0,o.b)(n))}function d(e,n,t){var r;y(e,(null===(r=n.argDef)||void 0===r?void 0:r.name)||"","arg-name",t,(0,o.c)(n)),m(e,n,t,n.inputType)}function p(e,n,t){var r,i=(null===(r=n.enumValue)||void 0===r?void 0:r.name)||"";s(e,n,t,n.inputType),y(e,"."),y(e,i,"enum-value",t,(0,o.d)(n))}function m(e,n,t,i){var a=document.createElement("span");a.className="type-name-pill",i instanceof r.bM?(s(a,n,t,i.ofType),y(a,"!")):i instanceof r.p2?(y(a,"["),s(a,n,t,i.ofType),y(a,"]")):y(a,(null==i?void 0:i.name)||"","type-name",t,(0,o.e)(n,i)),e.append(a)}function s(e,n,t,i){i instanceof r.bM?(s(e,n,t,i.ofType),y(e,"!")):i instanceof r.p2?(y(e,"["),s(e,n,t,i.ofType),y(e,"]")):y(e,(null==i?void 0:i.name)||"","type-name",t,(0,o.e)(n,i))}function v(e,n,t){var r=t.description;if(r){var i=document.createElement("div");i.className="info-description",n.renderDescription?i.innerHTML=n.renderDescription(r):i.append(document.createTextNode(r)),e.append(i)}g(e,n,t)}function g(e,n,t){var r=t.deprecationReason;if(r){var i=document.createElement("div");i.className="info-deprecation",e.append(i);var o=document.createElement("span");o.className="info-deprecation-label",o.append(document.createTextNode("Deprecated")),i.append(o);var a=document.createElement("div");a.className="info-deprecation-reason",n.renderDescription?a.innerHTML=n.renderDescription(r):a.append(document.createTextNode(r)),i.append(a)}}function y(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{onClick:null},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t){var o,a=r.onClick;a?((o=document.createElement("a")).href="javascript:void 0",o.addEventListener("click",(function(e){a(i,e)}))):o=document.createElement("span"),o.className=t,o.append(document.createTextNode(n)),e.append(o)}else e.append(document.createTextNode(n))}i.C.registerHelper("info","graphql",(function(e,n){if(n.schema&&e.state){var t=e.state,r=t.kind,i=t.step,a=(0,o.g)(n.schema,e.state);if("Field"===r&&0===i&&a.fieldDef||"AliasedField"===r&&2===i&&a.fieldDef){var u=document.createElement("div");u.className="CodeMirror-info-header",c(u,a,n);var l=document.createElement("div");return l.append(u),v(l,n,a.fieldDef),l}if("Directive"===r&&1===i&&a.directiveDef){var m=document.createElement("div");m.className="CodeMirror-info-header",f(m,a,n);var g=document.createElement("div");return g.append(m),v(g,n,a.directiveDef),g}if("Argument"===r&&0===i&&a.argDef){var y=document.createElement("div");y.className="CodeMirror-info-header",d(y,a,n);var T=document.createElement("div");return T.append(y),v(T,n,a.argDef),T}if("EnumValue"===r&&a.enumValue&&a.enumValue.description){var D=document.createElement("div");D.className="CodeMirror-info-header",p(D,a,n);var b=document.createElement("div");return b.append(D),v(b,n,a.enumValue),b}if("NamedType"===r&&a.type&&a.type.description){var h=document.createElement("div");h.className="CodeMirror-info-header",s(h,a,n,a.type);var C=document.createElement("div");return C.append(h),v(C,n,a.type),C}}})),u(c,"renderField"),u(l,"renderQualifiedField"),u(f,"renderDirective"),u(d,"renderArg"),u(p,"renderEnumValue"),u(m,"renderTypeAnnotation"),u(s,"renderType"),u(v,"renderDescription"),u(g,"renderDeprecation"),u(y,"text")}}]);
//# sourceMappingURL=311.5b6cf101.chunk.js.map