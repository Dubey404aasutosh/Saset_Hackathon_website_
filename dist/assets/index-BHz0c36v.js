(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function dx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ih={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function DM(){if(ev)return nl;ev=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return nl.Fragment=t,nl.jsx=i,nl.jsxs=i,nl}var tv;function UM(){return tv||(tv=1,ih.exports=DM()),ih.exports}var w=UM(),ah={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function LM(){if(nv)return lt;nv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),M=Symbol.iterator;function T(B){return B===null||typeof B!="object"?null:(B=M&&B[M]||B["@@iterator"],typeof B=="function"?B:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function D(B,me,Te){this.props=B,this.context=me,this.refs=S,this.updater=Te||U}D.prototype.isReactComponent={},D.prototype.setState=function(B,me){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,me,"setState")},D.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function X(){}X.prototype=D.prototype;function C(B,me,Te){this.props=B,this.context=me,this.refs=S,this.updater=Te||U}var L=C.prototype=new X;L.constructor=C,y(L,D.prototype),L.isPureReactComponent=!0;var P=Array.isArray;function I(){}var E={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function F(B,me,Te){var Z=Te.ref;return{$$typeof:o,type:B,key:me,ref:Z!==void 0?Z:null,props:Te}}function G(B,me){return F(B.type,me,B.props)}function Q(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function te(B){var me={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Te){return me[Te]})}var j=/\/+/g;function ee(B,me){return typeof B=="object"&&B!==null&&B.key!=null?te(""+B.key):me.toString(36)}function k(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(I,I):(B.status="pending",B.then(function(me){B.status==="pending"&&(B.status="fulfilled",B.value=me)},function(me){B.status==="pending"&&(B.status="rejected",B.reason=me)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function W(B,me,Te,Z,he){var Ae=typeof B;(Ae==="undefined"||Ae==="boolean")&&(B=null);var De=!1;if(B===null)De=!0;else switch(Ae){case"bigint":case"string":case"number":De=!0;break;case"object":switch(B.$$typeof){case o:case t:De=!0;break;case x:return De=B._init,W(De(B._payload),me,Te,Z,he)}}if(De)return he=he(B),De=Z===""?"."+ee(B,0):Z,P(he)?(Te="",De!=null&&(Te=De.replace(j,"$&/")+"/"),W(he,me,Te,"",function(Vt){return Vt})):he!=null&&(Q(he)&&(he=G(he,Te+(he.key==null||B&&B.key===he.key?"":(""+he.key).replace(j,"$&/")+"/")+De)),me.push(he)),1;De=0;var xe=Z===""?".":Z+":";if(P(B))for(var Ce=0;Ce<B.length;Ce++)Z=B[Ce],Ae=xe+ee(Z,Ce),De+=W(Z,me,Te,Ae,he);else if(Ce=T(B),typeof Ce=="function")for(B=Ce.call(B),Ce=0;!(Z=B.next()).done;)Z=Z.value,Ae=xe+ee(Z,Ce++),De+=W(Z,me,Te,Ae,he);else if(Ae==="object"){if(typeof B.then=="function")return W(k(B),me,Te,Z,he);throw me=String(B),Error("Objects are not valid as a React child (found: "+(me==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":me)+"). If you meant to render a collection of children, use an array instead.")}return De}function ce(B,me,Te){if(B==null)return B;var Z=[],he=0;return W(B,Z,"","",function(Ae){return me.call(Te,Ae,he++)}),Z}function ae(B){if(B._status===-1){var me=B._result,Te=me();Te.then(function(Z){(B._status===0||B._status===-1)&&(B._status=1,B._result=Z,Te.status===void 0&&(Te.status="fulfilled",Te.value=Z))},function(Z){(B._status===0||B._status===-1)&&(B._status=2,B._result=Z,Te.status===void 0&&(Te.status="rejected",Te.reason=Z))}),B._status===-1&&(B._status=0,B._result=Te)}if(B._status===1)return B._result.default;throw B._result}var ue=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var me=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(me))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function ge(B){var me=E.T,Te={};Te.types=me!==null?me.types:null,E.T=Te;try{var Z=B(),he=E.S;he!==null&&he(Te,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(I,ue)}catch(Ae){ue(Ae)}finally{me!==null&&Te.types!==null&&(me.types=Te.types),E.T=me}}function Be(B){var me=E.T;if(me!==null){var Te=me.types;Te===null?me.types=[B]:Te.indexOf(B)===-1&&Te.push(B)}else ge(Be.bind(null,B))}var We={map:ce,forEach:function(B,me,Te){ce(B,function(){me.apply(this,arguments)},Te)},count:function(B){var me=0;return ce(B,function(){me++}),me},toArray:function(B){return ce(B,function(me){return me})||[]},only:function(B){if(!Q(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return lt.Activity=_,lt.Children=We,lt.Component=D,lt.Fragment=i,lt.Profiler=c,lt.PureComponent=C,lt.StrictMode=s,lt.Suspense=g,lt.ViewTransition=v,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,lt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return E.H.useMemoCache(B)}},lt.addTransitionType=Be,lt.cache=function(B){return function(){return B.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(B,me,Te){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Z=y({},B.props),he=B.key;if(me!=null)for(Ae in me.key!==void 0&&(he=""+me.key),me)!N.call(me,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&me.ref===void 0||(Z[Ae]=me[Ae]);var Ae=arguments.length-2;if(Ae===1)Z.children=Te;else if(1<Ae){for(var De=Array(Ae),xe=0;xe<Ae;xe++)De[xe]=arguments[xe+2];Z.children=De}return F(B.type,he,Z)},lt.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},lt.createElement=function(B,me,Te){var Z,he={},Ae=null;if(me!=null)for(Z in me.key!==void 0&&(Ae=""+me.key),me)N.call(me,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(he[Z]=me[Z]);var De=arguments.length-2;if(De===1)he.children=Te;else if(1<De){for(var xe=Array(De),Ce=0;Ce<De;Ce++)xe[Ce]=arguments[Ce+2];he.children=xe}if(B&&B.defaultProps)for(Z in De=B.defaultProps,De)he[Z]===void 0&&(he[Z]=De[Z]);return F(B,Ae,he)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(B){return{$$typeof:h,render:B}},lt.isValidElement=Q,lt.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:ae}},lt.memo=function(B,me){return{$$typeof:p,type:B,compare:me===void 0?null:me}},lt.startTransition=ge,lt.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},lt.use=function(B){return E.H.use(B)},lt.useActionState=function(B,me,Te){return E.H.useActionState(B,me,Te)},lt.useCallback=function(B,me){return E.H.useCallback(B,me)},lt.useContext=function(B){return E.H.useContext(B)},lt.useDebugValue=function(){},lt.useDeferredValue=function(B,me){return E.H.useDeferredValue(B,me)},lt.useEffect=function(B,me){return E.H.useEffect(B,me)},lt.useEffectEvent=function(B){return E.H.useEffectEvent(B)},lt.useId=function(){return E.H.useId()},lt.useImperativeHandle=function(B,me,Te){return E.H.useImperativeHandle(B,me,Te)},lt.useInsertionEffect=function(B,me){return E.H.useInsertionEffect(B,me)},lt.useLayoutEffect=function(B,me){return E.H.useLayoutEffect(B,me)},lt.useMemo=function(B,me){return E.H.useMemo(B,me)},lt.useOptimistic=function(B,me){return E.H.useOptimistic(B,me)},lt.useReducer=function(B,me,Te){return E.H.useReducer(B,me,Te)},lt.useRef=function(B){return E.H.useRef(B)},lt.useState=function(B){return E.H.useState(B)},lt.useSyncExternalStore=function(B,me,Te){return E.H.useSyncExternalStore(B,me,Te)},lt.useTransition=function(){return E.H.useTransition()},lt.version="19.3.1",lt}var iv;function Up(){return iv||(iv=1,ah.exports=LM()),ah.exports}var rt=Up();const hx=dx(rt);var rh={exports:{}},il={},sh={exports:{}},oh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function OM(){return av||(av=1,(function(o){function t(k,W){var ce=k.length;k.push(W);e:for(;0<ce;){var ae=ce-1>>>1,ue=k[ae];if(0<c(ue,W))k[ae]=W,k[ce]=ue,ce=ae;else break e}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var W=k[0],ce=k.pop();if(ce!==W){k[0]=ce;e:for(var ae=0,ue=k.length,ge=ue>>>1;ae<ge;){var Be=2*(ae+1)-1,We=k[Be],B=Be+1,me=k[B];if(0>c(We,ce))B<ue&&0>c(me,We)?(k[ae]=me,k[B]=ce,ae=B):(k[ae]=We,k[Be]=ce,ae=Be);else if(B<ue&&0>c(me,ce))k[ae]=me,k[B]=ce,ae=B;else break e}}return W}function c(k,W){var ce=k.sortIndex-W.sortIndex;return ce!==0?ce:k.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],p=[],x=1,_=null,v=3,M=!1,T=!1,U=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function C(k){for(var W=i(p);W!==null;){if(W.callback===null)s(p);else if(W.startTime<=k)s(p),W.sortIndex=W.expirationTime,t(g,W);else break;W=i(p)}}function L(k){if(U=!1,C(k),!T)if(i(g)!==null)T=!0,P||(P=!0,Q());else{var W=i(p);W!==null&&ee(L,W.startTime-k)}}var P=!1,I=-1,E=5,N=-1;function F(){return y?!0:!(o.unstable_now()-N<E)}function G(){if(y=!1,P){var k=o.unstable_now();N=k;var W=!0;try{e:{T=!1,U&&(U=!1,D(I),I=-1),M=!0;var ce=v;try{t:{for(C(k),_=i(g);_!==null&&!(_.expirationTime>k&&F());){var ae=_.callback;if(typeof ae=="function"){_.callback=null,v=_.priorityLevel;var ue=ae(_.expirationTime<=k);if(k=o.unstable_now(),typeof ue=="function"){_.callback=ue,C(k),W=!0;break t}_===i(g)&&s(g),C(k)}else s(g);_=i(g)}if(_!==null)W=!0;else{var ge=i(p);ge!==null&&ee(L,ge.startTime-k),W=!1}}break e}finally{_=null,v=ce,M=!1}W=void 0}}finally{W?Q():P=!1}}}var Q;if(typeof X=="function")Q=function(){X(G)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,j=te.port2;te.port1.onmessage=G,Q=function(){j.postMessage(null)}}else Q=function(){S(G,0)};function ee(k,W){I=S(function(){k(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(k){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var ce=v;v=W;try{return k()}finally{v=ce}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(k,W){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ce=v;v=k;try{return W()}finally{v=ce}},o.unstable_scheduleCallback=function(k,W,ce){var ae=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ae+ce:ae):ce=ae,k){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=ce+ue,k={id:x++,callback:W,priorityLevel:k,startTime:ce,expirationTime:ue,sortIndex:-1},ce>ae?(k.sortIndex=ce,t(p,k),i(g)===null&&k===i(p)&&(U?(D(I),I=-1):U=!0,ee(L,ce-ae))):(k.sortIndex=ue,t(g,k),T||M||(T=!0,P||(P=!0,Q()))),k},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(k){var W=v;return function(){var ce=v;v=W;try{return k.apply(this,arguments)}finally{v=ce}}}})(oh)),oh}var rv;function PM(){return rv||(rv=1,sh.exports=OM()),sh.exports}var lh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function IM(){if(sv)return Dn;sv=1;var o=Up();function t(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,_,v){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:x,containerInfo:_,implementation:v}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(x){return{$$typeof:f,_reason:x}},Dn.createPortal=function(x,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return h(x,_,null,v)},Dn.flushSync=function(x){var _=g.T,v=s.p;try{if(g.T=null,s.p=2,x)return x()}finally{g.T=_,s.p=v,s.d.f()}},Dn.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(x,_))},Dn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Dn.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var v=_.as,M=p(v,_.crossOrigin),T=typeof _.integrity=="string"?_.integrity:void 0,U=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:M,integrity:T,fetchPriority:U}):v==="script"&&s.d.X(x,{crossOrigin:M,integrity:T,fetchPriority:U,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Dn.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=p(_.as,_.crossOrigin);s.d.M(x,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(x)},Dn.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,M=p(v,_.crossOrigin);s.d.L(x,v,{crossOrigin:M,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Dn.preloadModule=function(x,_){if(typeof x=="string")if(_){var v=p(_.as,_.crossOrigin);s.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(x)},Dn.requestFormReset=function(x){s.d.r(x)},Dn.unstable_batchedUpdates=function(x,_){return x(_)},Dn.useFormState=function(x,_,v){return g.H.useFormState(x,_,v)},Dn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var ov;function zM(){if(ov)return lh.exports;ov=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lh.exports=IM(),lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function BM(){if(lv)return il;lv=1;var o=PM(),t=Up(),i=zM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return g(l),e;if(u===r)return g(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=u;else{for(var m=!1,R=l.child;R;){if(R===a){m=!0,a=l,r=u;break}if(R===r){m=!0,r=l,a=u;break}R=R.sibling}if(!m){for(R=u.child;R;){if(R===a){m=!0,a=u,r=l;break}if(R===r){m=!0,r=u,a=l;break}R=R.sibling}if(!m)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,r,l,u))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=v(e);return a===null||U(n,e,a.child,{foundSelf:!1}),n}function U(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&U(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,D=null;function X(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(S=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,a){for(var r=0,l=e;l;l=a(l))r++;l=0;for(var u=n;u;u=a(u))l++;for(;0<r-l;)e=a(e),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var I=Object.assign,E=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Be=Symbol.for("react.legacy_hidden"),We=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),me=Symbol.for("react.recoverable"),Te=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case te:return"Profiler";case Q:return"StrictMode";case W:return"Suspense";case ce:return"SuspenseList";case ge:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ee:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case ue:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var De=Array.isArray,xe=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt={pending:!1,data:null,method:null,action:null},mt=[],_t=-1;function yt(e){return{current:e}}function tt(e){0>_t||(e.current=mt[_t],mt[_t]=null,_t--)}function it(e,n){_t++,mt[_t]=e.current,e.current=n}var Xt=yt(null),fn=yt(null),Ot=yt(null),en=yt(null);function Y(e,n){switch(it(Ot,n),it(fn,e),it(Xt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=c_(n),e=u_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Xt),it(Xt,e)}function nn(){tt(Xt),tt(fn),tt(Ot)}function Lt(e){var n=e.memoizedState;n!==null&&(Ps._currentValue=n.memoizedState,it(en,e)),n=Xt.current;var a=u_(n,e.type);n!==a&&(it(fn,e),it(Xt,a))}function O(e){fn.current===e&&(tt(Xt),tt(fn)),en.current===e&&(tt(en),Ps._currentValue=Vt)}var b,ne;function le(e){if(b===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);b=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+b+e+ne}var _e=!1;function Re(e,n){if(!e||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(Pe){var K=Pe}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(Pe){K=Pe}ye=!1;try{var oe=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ye=!0,new e}finally{ye&&(oe!==void 0?Object.defineProperty(e.prototype,"props",oe):delete e.prototype.props)}}}else{try{throw Error()}catch(Pe){K=Pe}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(Pe){if(Pe&&K&&typeof Pe.stack=="string")return[Pe.stack,K.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),m=u[0],R=u[1];if(m&&R){var z=m.split(`
`),$=R.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===$.length)for(r=z.length-1,l=$.length-1;1<=r&&0<=l&&z[r]!==$[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==$[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==$[l]){var fe=`
`+z[r].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=r&&0<=l);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==n&&n!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return le("Activity");case 30:return le("ViewTransition");default:return""}}function ve(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ee=Object.prototype.hasOwnProperty,Ne=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,ze=o.unstable_shouldYield,Ie=o.unstable_requestPaint,ke=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,ct=o.unstable_ImmediatePriority,q=o.unstable_UserBlockingPriority,we=o.unstable_NormalPriority,Me=o.unstable_LowPriority,Le=o.unstable_IdlePriority,Xe=o.log,be=o.unstable_setDisableYieldValue,Je=null,Ve=null;function Ct(e){if(typeof Xe=="function"&&be(e),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Je,e)}catch{}}var ut=Math.clz32?Math.clz32:Du,Qn=Math.log,ui=Math.LN2;function Du(e){return e>>>=0,e===0?32:31-(Qn(e)/ui|0)|0}var Qr=256,gr=262144,Pa=4194304;function ua(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _r(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~u,r!==0?l=ua(r):(m&=R,m!==0?l=ua(m):a||(a=R&~e,a!==0&&(l=ua(a))))):(R=r&~u,R!==0?l=ua(R):m!==0?l=ua(m):a||(a=r&~e,a!==0&&(l=ua(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Ia(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Gi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ut(a),l=1<<r;n|=e[r],a&=~l}return n}function oo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lo(){var e=Pa;return Pa<<=1,(Pa&62914560)===0&&(Pa=4194304),e}function Jr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function El(e,n,a,r,l,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=m&~a;0<a;){var fe=31-ut(a),ye=1<<fe;R[fe]=0,z[fe]=-1;var K=$[fe];if(K!==null)for($[fe]=null,fe=0;fe<K.length;fe++){var oe=K[fe];oe!==null&&(oe.lane&=-536870913)}a&=~ye}r!==0&&vr(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~n))}function vr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ut(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function co(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ut(a),l=1<<r;l&n|e[r]&n&&(e[r]|=n),a&=~l}}function uo(e,n){var a=n&-n;return a=(a&42)!==0?1:fo(a),(a&(e.suspendedLanes|n))!==0?0:a}function fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ho(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bl(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:Y_(e.type))}function Tl(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var fi=Math.random().toString(36).slice(2),A="__reactFiber$"+fi,H="__reactProps$"+fi,de="__reactContainer$"+fi,re="__reactEvents$"+fi,se="__reactListeners$"+fi,Fe="__reactHandles$"+fi,qe="__reactResources$"+fi,Oe="__reactMarker$"+fi,Ze="__reactLoad$"+fi;function Ke(e){delete e[A],delete e[H],delete e[se],delete e[Fe]}function st(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[de]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=R_(e);e!==null;){if(a=e[A])return a;e=R_(e)}return n}e=a,a=e.parentNode}return null}function ft(e){if(e=e[A]||e[de]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ye(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Mt(e){var n=e[qe];return n||(n=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Oe]=!0}function jt(e){e[Ze]=void 0}var Ht=new Set,vn={};function He(e,n){rn(e,n),rn(e+"Capture",n)}function rn(e,n){for(vn[e]=n,e=0;e<n.length;e++)Ht.add(n[e])}var wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},Jn={};function Xi(e){return Ee.call(Jn,e)?!0:Ee.call(Bn,e)?!1:wt.test(e)?Jn[e]=!0:(Bn[e]=!0,!1)}var xt=!1;function It(){var e=xt;return xt=!1,e}function Qt(e,n,a){if(Xi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function $n(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Tt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Al(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Uu(e){if(!e._valueTracker){var n=fa(e)?"checked":"value";e._valueTracker=Al(e,n,""+e[n])}}function Qp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var Jx=/[\n"\\]/g;function di(e){return e.replace(Jx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Lu(e,n,a,r,l,u,m,R){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?m==="number"&&e.value==n?Ou(e,sn(e.value)):Ou(e,sn(n)):a!=null?Ou(e,sn(a)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+sn(R):e.removeAttribute("name")}function Jp(e,n,a,r,l,u,m,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Uu(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Uu(e)}function Ou(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function $r(e,n,a,r){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function $p(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function em(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(De(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Uu(e)}function es(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var $x=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||$x.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function nm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",xt=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(tm(e,l,r),xt=!0)}else for(var u in n)n.hasOwnProperty(u)&&tm(e,u,n[u])}function Pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return tS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Iu=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ts=null,ns=null;function im(e){var n=ft(e);if(n&&(e=n.stateNode)){var a=e[H]||null;e:switch(e=n.stateNode,n.type){case"input":if(Lu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var l=r[H]||null;if(!l)throw Error(s(90));Lu(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Qp(r)}break e;case"textarea":$p(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$r(e,!!a.multiple,n,!1)}}}var Bu=!1;function am(e,n,a){if(Bu)return e(n,a);Bu=!0;try{var r=e(n);return r}finally{if(Bu=!1,(ts!==null||ns!==null)&&(Rc(),ts&&(n=ts,e=ns,ns=ts=null,im(n),e)))for(n=0;n<e.length;n++)im(e[n])}}function po(e,n){var a=e.stateNode;if(a===null)return null;var r=a[H]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(da)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Fu=!1}var za=null,Hu=null,Cl=null;function rm(){if(Cl)return Cl;var e,n=Hu,a=n.length,r,l="value"in za?za.value:za.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var m=a-e;for(r=1;r<=m&&n[a-r]===l[u-r];r++);return Cl=l.slice(e,1<r?1-r:void 0)}function wl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function sm(){return!1}function Fn(e){function n(a,r,l,u,m){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Nl:sm,this.isPropagationStopped=sm,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Fn(Ba),go=I({},Ba,{view:0,detail:0}),nS=Fn(go),Gu,Vu,_o,Ul=I({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Gu=e.screenX-_o.screenX,Vu=e.screenY-_o.screenY):Vu=Gu=0,_o=e),Gu)},movementY:function(e){return"movementY"in e?e.movementY:Vu}}),om=Fn(Ul),iS=I({},Ul,{dataTransfer:0}),aS=Fn(iS),rS=I({},go,{relatedTarget:0}),Xu=Fn(rS),sS=I({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=Fn(sS),lS=I({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cS=Fn(lS),uS=I({},Ba,{data:0}),lm=Fn(uS),fS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hS[e])?!!n[e]:!1}function ku(){return pS}var mS=I({},go,{key:function(e){if(e.key){var n=fS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gS=Fn(mS),_S=I({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=Fn(_S),vS=I({},Ba,{submitter:0}),xS=Fn(vS),SS=I({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),yS=Fn(SS),MS=I({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=Fn(MS),bS=I({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=Fn(bS),AS=I({},Ba,{newState:0,oldState:0,source:0}),RS=Fn(AS),CS=[9,13,27,32],Wu=da&&"CompositionEvent"in window,vo=null;da&&"documentMode"in document&&(vo=document.documentMode);var wS=da&&"TextEvent"in window&&!vo,um=da&&(!Wu||vo&&8<vo&&11>=vo),fm=" ",dm=!1;function hm(e,n){switch(e){case"keyup":return CS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function NS(e,n){switch(e){case"compositionend":return pm(n);case"keypress":return n.which!==32?null:(dm=!0,fm);case"textInput":return e=n.data,e===fm&&dm?null:e;default:return null}}function DS(e,n){if(is)return e==="compositionend"||!Wu&&hm(e,n)?(e=rm(),Cl=Hu=za=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return um&&n.locale!=="ko"?null:n.data;default:return null}}var US={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!US[e.type]:n==="textarea"}function gm(e,n,a,r){ts?ns?ns.push(r):ns=[r]:ts=r,n=Lc(n,"onChange"),0<n.length&&(a=new Dl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var xo=null,So=null;function LS(e){i_(e,0)}function Ll(e){var n=Ye(e);if(Qp(n))return e}function _m(e,n){if(e==="change")return n}var vm=!1;if(da){var qu;if(da){var Yu="oninput"in document;if(!Yu){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Yu=typeof xm.oninput=="function"}qu=Yu}else qu=!1;vm=qu&&(!document.documentMode||9<document.documentMode)}function Sm(){xo&&(xo.detachEvent("onpropertychange",ym),So=xo=null)}function ym(e){if(e.propertyName==="value"&&Ll(So)){var n=[];gm(n,So,e,zu(e)),am(LS,n)}}function OS(e,n,a){e==="focusin"?(Sm(),xo=n,So=a,xo.attachEvent("onpropertychange",ym)):e==="focusout"&&Sm()}function PS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(So)}function IS(e,n){if(e==="click")return Ll(n)}function zS(e,n){if(e==="input"||e==="change")return Ll(n)}function BS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:BS;function yo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Ee.call(n,l)||!ei(e[l],n[l]))return!1}return!0}function ju(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Em(e,n){var a=Mm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mm(a)}}function bm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ju(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ju(e.document)}return n}function Zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var FS=da&&"documentMode"in document&&11>=document.documentMode,as=null,Ku=null,Mo=null,Qu=!1;function Am(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||as==null||as!==ju(r)||(r=as,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&yo(Mo,r)||(Mo=r,r=Lc(Ku,"onSelect"),0<r.length&&(n=new Dl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=as)))}function xr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var rs={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},Ju={},Rm={};da&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Sr(e){if(Ju[e])return Ju[e];if(!rs[e])return e;var n=rs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rm)return Ju[e]=n[a];return e}var Cm=Sr("animationend"),wm=Sr("animationiteration"),Nm=Sr("animationstart"),HS=Sr("transitionrun"),GS=Sr("transitionstart"),VS=Sr("transitioncancel"),Dm=Sr("transitionend"),Um=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function Ti(e,n){Um.set(e,n),He(n,[e])}var XS=0;function ha(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=wi.identifierPrefix;var a=XS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Lm(e){if(e==null||typeof e=="string")return e;var n=null,a=Ts;if(a!==null)for(var r=0;r<a.length;r++){var l=e[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function pa(e,n){return e=Lm(e),n=Lm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],ss=0,ef=0;function Pl(){for(var e=ss,n=ef=ss=0;n<e;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var u=hi[n];if(hi[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}u!==0&&Om(a,l,u)}}function Il(e,n,a,r){hi[ss++]=e,hi[ss++]=n,hi[ss++]=a,hi[ss++]=r,ef|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function tf(e,n,a,r){return Il(e,n,a,r),zl(e)}function yr(e,n){return Il(e,null,null,n),zl(e)}function Om(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-ut(a),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=a|536870912),u):null}function zl(e){if(50<ko)throw ko=0,Ac=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var os={};function kS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,r){return new kS(e,n,a,r)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Bl(e,n,a,r,l,u){var m=0;if(r=e,typeof r=="function")nf(r)&&(m=1);else if(typeof r=="string")m=vM(e,a,Xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case ge:return e=kn(31,a,n,l),e.elementType=ge,e.lanes=u,e;case G:return Mr(a.children,l,u,n);case Q:m=8,l|=24;break;case te:return e=kn(12,a,n,l|2),e.elementType=te,e.lanes=u,e;case W:return e=kn(13,a,n,l),e.elementType=W,e.lanes=u,e;case ce:return e=kn(19,a,n,l),e.elementType=ce,e.lanes=u,e;case Be:case B:return e=l|32,e=kn(30,a,n,e),e.elementType=B,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ee:m=10;break e;case j:m=9;break e;case k:m=11;break e;case ae:m=14;break e;case ue:m=16,r=null;break e}m=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=kn(m,a,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function Mr(e,n,a,r){return e=kn(7,e,r,n),e.lanes=a,e}function af(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function Im(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function rf(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=zm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ve(n)},zm.set(e,n),n)}return{value:e,source:n,stack:ve(n)}}var ls=[],cs=0,Fl=null,Eo=0,mi=[],gi=0,Fa=null,Wi=1,qi="";function ga(e,n){ls[cs++]=Eo,ls[cs++]=Fl,Fl=e,Eo=n}function Bm(e,n,a){mi[gi++]=Wi,mi[gi++]=qi,mi[gi++]=Fa,Fa=e;var r=Wi;e=qi;var l=32-ut(r)-1;r&=~(1<<l),a+=1;var u=32-ut(n)+l;if(30<u){var m=l-l%5;u=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Wi=1<<32-ut(n)+l|a<<l|r,qi=u+e}else Wi=1<<u|a<<l|r,qi=e}function Hl(e){e.return!==null&&(ga(e,1),Bm(e,1,0))}function sf(e){for(;e===Fl;)Fl=ls[--cs],ls[cs]=null,Eo=ls[--cs],ls[cs]=null;for(;e===Fa;)Fa=mi[--gi],mi[gi]=null,qi=mi[--gi],mi[gi]=null,Wi=mi[--gi],mi[gi]=null}function Fm(e,n){mi[gi++]=Wi,mi[gi++]=qi,mi[gi++]=Fa,Wi=n.id,qi=n.overflow,Fa=e}var Mn=null,Jt=null,St=!1,Ha=null,_i=!1,of=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(pi(n,e)),of}function Hm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[H]=r,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<qo.length;a++)bt(qo[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Jp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),em(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||o_(n.textContent,a)?(r.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),r.onScroll!=null&&bt("scroll",n),r.onScrollEnd!=null&&bt("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ga(e,!0)}function Gl(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Mn=Mn.return}}function us(e){if(e!==Mn)return!1;if(!St)return Gl(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zd(e.type,e.memoizedProps)),a=!a),a&&Jt&&Ga(e),Gl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Jt=A_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Jt=A_(e)}else n===27?(n=Jt,ir(e.type)?(e=qd,qd=null,Jt=e):Jt=n):Jt=Mn?xi(e.stateNode.nextSibling):null;return!0}function Er(){Jt=Mn=null,St=!1}function lf(){var e=Ha;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ha=null),e}function bo(e){Ha===null?Ha=[e]:Ha.push(e)}var cf=yt(null),br=null,_a=null;function Va(e,n,a){it(cf,n._currentValue),n._currentValue=a}function va(e){e._currentValue=cf.current,tt(cf)}function Vl(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function uf(e,n,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=l;for(var z=0;z<n.length;z++)if(R.context===n[z]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Vl(u.return,a,e),r||(m=null);break e}u=R.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),Vl(m,a,e),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,m=l.alternate,m!==null&&(m.lanes|=a),Vl(l.return,a,e),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Tr(e,n,a,r){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var R=l.type;ei(l.pendingProps.value,m.value)||(e!==null?e.push(R):e=[R])}}else if(l===en.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ps):e=[Ps])}l=l.return}return e!==null&&uf(n,e,a,r),n.flags|=262144,e!==null}function Xl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ar(e){br=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Gm(br,e)}function kl(e,n){return br===null&&Ar(e),Gm(e,n)}function Gm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(s(308));_a=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _a=_a.next=n;return a}var WS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qS=o.unstable_scheduleCallback,YS=o.unstable_NormalPriority,dn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new WS,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&qS(YS,function(){e.controller.abort()})}function Vm(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Ao=null;function jS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Ro=null,df=0,Rr=0,fs=null;function ZS(e,n){if(Ro===null){var a=Ro=[];df=0,Rr=Cd(),fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return df++,n.then(Xm,Xm),n}function Xm(){if(--df===0&&(Ao=null,Ro!==null)){fs!==null&&(fs.status="fulfilled");var e=Ro;Ro=null,Rr=0,fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function KS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var km=xe.S;xe.S=function(e,n){if(I0=ke(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ZS(e,n),Ao!==null)for(var a=ws;a!==null;)Vm(a,Ao),a=a.next;if(a=e.types,a!==null){for(var r=ws;r!==null;)Vm(r,a),r=r.next;if(Rr!==0){r=Ao,r===null&&(r=Ao=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}km!==null&&km(e,n)};var Cr=yt(null);function hf(){var e=Cr.current;return e!==null?e:Kt.pooledCache}function Wl(e,n){n===null?it(Cr,Cr.current):it(Cr,n.pool)}function Wm(){var e=hf();return e===null?null:{parent:dn._currentValue,pool:e}}var ds=Error(s(460)),pf=Error(s(474)),ql=Error(s(542)),Yl={then:function(){}};function qm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zm(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zm(e),e}throw Nr=n,ds}}function wr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,ds):a}}var Nr=null;function jm(){if(Nr===null)throw Error(s(459));var e=Nr;return Nr=null,e}function Zm(e){if(e===ds||e===ql)throw Error(s(483))}var hs=null,Co=0;function jl(e){var n=Co;return Co+=1,hs===null&&(hs=[]),Ym(hs,e,n)}function Xa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Zl(e,n){throw n.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Km(e){function n(J,V){if(e){var ie=J.deletions;ie===null?(J.deletions=[V],J.flags|=16):ie.push(V)}}function a(J,V){if(!e)return null;for(;V!==null;)n(J,V),V=V.sibling;return null}function r(J){for(var V=new Map;J!==null;)J.key===null?V.set(J.index,J):V.set(J.key,J),J=J.sibling;return V}function l(J,V){return J=ma(J,V),J.index=0,J.sibling=null,J}function u(J,V,ie){return J.index=ie,e?(ie=J.alternate,ie!==null?(ie=ie.index,ie<V?(J.flags|=2,V):ie):(J.flags|=134217730,V)):(J.flags|=1048576,V)}function m(J){return e&&J.alternate===null&&(J.flags|=134217730),J}function R(J,V,ie,Se){return V===null||V.tag!==6?(V=af(ie,J.mode,Se),V.return=J,V):(V=l(V,ie),V.return=J,V)}function z(J,V,ie,Se){var je=ie.type;return je===G?(J=fe(J,V,ie.props.children,Se,ie.key),Xa(J,ie),J):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ue&&wr(je)===V.type)?(V=l(V,ie.props),Xa(V,ie),V.return=J,V):(V=Bl(ie.type,ie.key,ie.props,null,J.mode,Se),Xa(V,ie),V.return=J,V)}function $(J,V,ie,Se){return V===null||V.tag!==4||V.stateNode.containerInfo!==ie.containerInfo||V.stateNode.implementation!==ie.implementation?(V=rf(ie,J.mode,Se),V.return=J,V):(V=l(V,ie.children||[]),V.return=J,V)}function fe(J,V,ie,Se,je){return V===null||V.tag!==7?(V=Mr(ie,J.mode,Se,je),V.return=J,V):(V=l(V,ie),V.return=J,V)}function ye(J,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=af(""+V,J.mode,ie),V.return=J,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return ie=Bl(V.type,V.key,V.props,null,J.mode,ie),Xa(ie,V),ie.return=J,ie;case F:return V=rf(V,J.mode,ie),V.return=J,V;case ue:return V=wr(V),ye(J,V,ie)}if(De(V)||Z(V))return V=Mr(V,J.mode,ie,null),V.return=J,V;if(typeof V.then=="function")return ye(J,jl(V),ie);if(V.$$typeof===ee)return ye(J,kl(J,V),ie);Zl(J,V)}return null}function K(J,V,ie,Se){var je=V!==null?V.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return je!==null?null:R(J,V,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:return ie.key===je?z(J,V,ie,Se):null;case F:return ie.key===je?$(J,V,ie,Se):null;case ue:return ie=wr(ie),K(J,V,ie,Se)}if(De(ie)||Z(ie))return je!==null?null:fe(J,V,ie,Se,null);if(typeof ie.then=="function")return K(J,V,jl(ie),Se);if(ie.$$typeof===ee)return K(J,V,kl(J,ie),Se);Zl(J,ie)}return null}function oe(J,V,ie,Se,je){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ie)||null,R(V,J,""+Se,je);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case N:return J=J.get(Se.key===null?ie:Se.key)||null,z(V,J,Se,je);case F:return J=J.get(Se.key===null?ie:Se.key)||null,$(V,J,Se,je);case ue:return Se=wr(Se),oe(J,V,ie,Se,je)}if(De(Se)||Z(Se))return J=J.get(ie)||null,fe(V,J,Se,je,null);if(typeof Se.then=="function")return oe(J,V,ie,jl(Se),je);if(Se.$$typeof===ee)return oe(J,V,ie,kl(V,Se),je);Zl(V,Se)}return null}function Pe(J,V,ie,Se){for(var je=null,Rt=null,et=V,at=V=0,mn=null;et!==null&&at<ie.length;at++){et.index>at?(mn=et,et=null):mn=et.sibling;var Ut=K(J,et,ie[at],Se);if(Ut===null){et===null&&(et=mn);break}e&&et&&Ut.alternate===null&&n(J,et),V=u(Ut,V,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut,et=mn}if(at===ie.length)return a(J,et),St&&ga(J,at),je;if(et===null){for(;at<ie.length;at++)et=ye(J,ie[at],Se),et!==null&&(V=u(et,V,at),Rt===null?je=et:Rt.sibling=et,Rt=et);return St&&ga(J,at),je}for(et=r(et);at<ie.length;at++)mn=oe(et,J,at,ie[at],Se),mn!==null&&(e&&(Ut=mn.alternate,Ut!==null&&et.delete(Ut.key===null?at:Ut.key)),V=u(mn,V,at),Rt===null?je=mn:Rt.sibling=mn,Rt=mn);return e&&et.forEach(function(lr){return n(J,lr)}),St&&ga(J,at),je}function Qe(J,V,ie,Se){if(ie==null)throw Error(s(151));for(var je=null,Rt=null,et=V,at=V=0,mn=null,Ut=ie.next();et!==null&&!Ut.done;at++,Ut=ie.next()){et.index>at?(mn=et,et=null):mn=et.sibling;var lr=K(J,et,Ut.value,Se);if(lr===null){et===null&&(et=mn);break}e&&et&&lr.alternate===null&&n(J,et),V=u(lr,V,at),Rt===null?je=lr:Rt.sibling=lr,Rt=lr,et=mn}if(Ut.done)return a(J,et),St&&ga(J,at),je;if(et===null){for(;!Ut.done;at++,Ut=ie.next())Ut=ye(J,Ut.value,Se),Ut!==null&&(V=u(Ut,V,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut);return St&&ga(J,at),je}for(et=r(et);!Ut.done;at++,Ut=ie.next())Ut=oe(et,J,at,Ut.value,Se),Ut!==null&&(e&&(mn=Ut.alternate,mn!==null&&et.delete(mn.key===null?at:mn.key)),V=u(Ut,V,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut);return e&&et.forEach(function(NM){return n(J,NM)}),St&&ga(J,at),je}function pt(J,V,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===G&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:e:{for(var je=ie.key;V!==null;){if(V.key===je){if(je=ie.type,je===G){if(V.tag===7){a(J,V.sibling),Se=l(V,ie.props.children),Xa(Se,ie),Se.return=J,J=Se;break e}}else if(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ue&&wr(je)===V.type){a(J,V.sibling),Se=l(V,ie.props),Xa(Se,ie),Se.return=J,J=Se;break e}a(J,V);break}else n(J,V);V=V.sibling}ie.type===G?(Se=Mr(ie.props.children,J.mode,Se,ie.key),Xa(Se,ie),Se.return=J,J=Se):(Se=Bl(ie.type,ie.key,ie.props,null,J.mode,Se),Xa(Se,ie),Se.return=J,J=Se)}return m(J);case F:e:{for(je=ie.key;V!==null;){if(V.key===je)if(V.tag===4&&V.stateNode.containerInfo===ie.containerInfo&&V.stateNode.implementation===ie.implementation){a(J,V.sibling),Se=l(V,ie.children||[]),Se.return=J,J=Se;break e}else{a(J,V);break}else n(J,V);V=V.sibling}Se=rf(ie,J.mode,Se),Se.return=J,J=Se}return m(J);case ue:return ie=wr(ie),pt(J,V,ie,Se)}if(De(ie))return Pe(J,V,ie,Se);if(Z(ie)){if(je=Z(ie),typeof je!="function")throw Error(s(150));return ie=je.call(ie),Qe(J,V,ie,Se)}if(typeof ie.then=="function")return pt(J,V,jl(ie),Se);if(ie.$$typeof===ee)return pt(J,V,kl(J,ie),Se);Zl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,V!==null&&V.tag===6?(a(J,V.sibling),Se=l(V,ie),Se.return=J,J=Se):(a(J,V),Se=af(ie,J.mode,Se),Se.return=J,J=Se),m(J)):a(J,V)}return function(J,V,ie,Se){try{Co=0;var je=pt(J,V,ie,Se);return hs=null,je}catch(et){if(et===ds||et===ql)throw et;var Rt=kn(29,et,null,J.mode);return Rt.lanes=Se,Rt.return=J,Rt}finally{}}}var Dr=Km(!0),Qm=Km(!1),ka=!1;function mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zt&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=zl(e),Om(e,null,a),n}return Il(e,r,n,a),zl(e)}function wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,co(e,a)}}function _f(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vf=!1;function No(){if(vf){var e=fs;if(e!==null)throw e}}function Do(e,n,a,r){vf=!1;var l=e.updateQueue;ka=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var z=R,$=z.next;z.next=null,m===null?u=$:m.next=$,m=z;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,R=fe.lastBaseUpdate,R!==m&&(R===null?fe.firstBaseUpdate=$:R.next=$,fe.lastBaseUpdate=z))}if(u!==null){var ye=l.baseState;m=0,fe=$=z=null,R=u;do{var K=R.lane&-536870913,oe=K!==R.lane;if(oe?(At&K)===K:(r&K)===K){K!==0&&K===Rr&&(vf=!0),fe!==null&&(fe=fe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Pe=e,Qe=R;K=n;var pt=a;switch(Qe.tag){case 1:if(Pe=Qe.payload,typeof Pe=="function"){ye=Pe.call(pt,ye,K);break e}ye=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Qe.payload,K=typeof Pe=="function"?Pe.call(pt,ye,K):Pe,K==null)break e;ye=I({},ye,K);break e;case 2:ka=!0}}K=R.callback,K!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=l.callbacks,oe===null?l.callbacks=[K]:oe.push(K))}else oe={lane:K,tag:R.tag,payload:R.payload,callback:R.callback,next:null},fe===null?($=fe=oe,z=ye):fe=fe.next=oe,m|=K;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;oe=R,R=oe.next,oe.next=null,l.lastBaseUpdate=oe,l.shared.pending=null}}while(!0);fe===null&&(z=ye),l.baseState=z,l.firstBaseUpdate=$,l.lastBaseUpdate=fe,u===null&&(l.shared.lanes=0),$a|=m,e.lanes=m,e.memoizedState=ye}}function Jm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function $m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jm(a[e],n)}var Ya=yt(null),Kl=yt(0);function eg(e,n){e=Ea,it(Kl,e),it(Ya,n),Ea=e|n.baseLanes}function xf(){it(Kl,Ea),it(Ya,Ya.current)}function Sf(){Ea=Kl.current,tt(Ya),tt(Kl)}var Rn=yt(null),Ln=null;function ja(e){var n=e.alternate;it(Cn,Cn.current&1),it(Rn,e),Ln===null&&(n===null||Ya.current!==null||n.memoizedState!==null)&&(Ln=e)}function yf(e){it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)}function tg(e){e.tag===22?(it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)):Za()}function Za(){it(Cn,Cn.current),it(Rn,Rn.current)}function ti(e){tt(Rn),Ln===e&&(Ln=null),tt(Cn)}var Cn=yt(0);function Uo(e,n){it(Rn,Rn.current),it(Cn,n)}function Mf(e){tt(Cn),tt(Rn),Ln===e&&(Ln=null)}function Ql(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kd(a)||Wd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,ht=null,Zt=null,hn=null,Jl=!1,ps=!1,Ur=!1,$l=0,Lo=0,ms=null,QS=0;function on(){throw Error(s(321))}function Ef(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function bf(e,n,a,r,l,u){return xa=u,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xe.H=e===null||e.memoizedState===null?Bg:Fg,Ur=!1,u=a(r,l),Ur=!1,ps&&(u=ig(n,a,r,l)),ng(e),u}function ng(e){xe.H=sc;var n=Zt!==null&&Zt.next!==null;if(xa=0,hn=Zt=ht=null,Jl=!1,Lo=0,ms=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Xl(e)&&(pn=!0))}function ig(e,n,a,r){ht=e;var l=0;do{if(ps&&(ms=null),Lo=0,ps=!1,25<=l)throw Error(s(301));if(l+=1,hn=Zt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}xe.H=ry,u=n(a,r)}while(ps);return u}function JS(){var e=xe.H,n=e.useState()[0];return n=typeof n.then=="function"?Oo(n):n,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(ht.flags|=1024),n}function Tf(){var e=$l!==0;return $l=0,e}function Af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Rf(e){if(Jl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Jl=!1}xa=0,hn=Zt=ht=null,ps=!1,Lo=$l=0,ms=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ht.memoizedState=hn=e:hn=hn.next=e,hn}function un(){if(Zt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var n=hn===null?ht.memoizedState:hn.next;if(n!==null)hn=n,Zt=e;else{if(e===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},hn===null?ht.memoizedState=hn=e:hn=hn.next=e}return hn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(e){var n=Lo;return Lo+=1,ms===null&&(ms=[]),e=Ym(ms,e,n),n=ht,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,xe.H=n===null||n.memoizedState===null?Bg:Fg),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oo(e);if(e.$$typeof===me)return;if(e.$$typeof===ee)return An(e)}throw Error(s(438,String(e)))}function Cf(e){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ht.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ec(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=We;return n.index++,a}function Sa(e,n){return typeof n=="function"?n(e):n}function nc(e){var n=un();return wf(n,Zt,e)}function wf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}n.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var R=m=null,z=null,$=n,fe=!1;do{var ye=$.lane&-536870913;if(ye!==$.lane?(At&ye)===ye:(xa&ye)===ye){var K=$.revertLane;if(K===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ye===Rr&&(fe=!0);else if((xa&K)===K){$=$.next,K===Rr&&(fe=!0);continue}else ye={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(R=z=ye,m=u):z=z.next=ye,ht.lanes|=K,$a|=K;ye=$.action,Ur&&a(u,ye),u=$.hasEagerState?$.eagerState:a(u,ye)}else K={lane:ye,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(R=z=K,m=u):z=z.next=K,ht.lanes|=ye,$a|=ye;$=$.next}while($!==null&&$!==n);if(z===null?m=u:z.next=R,!ei(u,e.memoizedState)&&(pn=!0,fe&&(a=fs,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=z,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Nf(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);ei(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function ag(e,n,a){var r=ht,l=un(),u=St;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var m=!ei((Zt||l).memoizedState,a);if(m&&(l.memoizedState=a,pn=!0),l=l.queue,Lf(og.bind(null,r,l,e),[e]),e=l.getSnapshot!==n||m||hn!==null&&(hn.memoizedState.tag&1)!==0,gs(e?9:8,{destroy:void 0},sg.bind(null,r,l,a,n),null),e){if(r.flags|=2048,Kt===null)throw Error(s(349));u||(xa&127)!==0||rg(r,n,a)}return a}function rg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=ec(),ht.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sg(e,n,a,r){n.value=a,n.getSnapshot=r,lg(n)&&cg(e)}function og(e,n,a){return a(function(){lg(n)&&cg(e)})}function lg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function cg(e){var n=yr(e,2);n!==null&&jn(n,e,2)}function Df(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Ur){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n}function ug(e,n,a,r){return e.baseState=a,wf(e,Zt,typeof r=="function"?r:Sa)}function $S(e,n,a,r,l){if(rc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};xe.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,fg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function fg(e,n){var a=n.action,r=n.payload,l=e.state;if(n.isTransition){var u=xe.T,m={};m.types=u!==null?u.types:null,xe.T=m;try{var R=a(l,r),z=xe.S;z!==null&&z(m,R),dg(e,n,R)}catch($){Uf(e,n,$)}finally{u!==null&&m.types!==null&&(u.types=m.types),xe.T=u}}else try{u=a(l,r),dg(e,n,u)}catch($){Uf(e,n,$)}}function dg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){hg(e,n,r)},function(r){return Uf(e,n,r)}):hg(e,n,a)}function hg(e,n,a){n.status="fulfilled",n.value=a,pg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fg(e,a)))}function Uf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,pg(n),n=n.next;while(n!==r)}e.action=null}function pg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mg(e,n){return n}function gg(e,n){if(St){var a=Kt.formState;if(a!==null){e:{var r=ht;if(St){if(Jt){t:{for(var l=Jt,u=_i;l.nodeType!==8;){if(!u){l=null;break t}if(l=xi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Jt=xi(l.nextSibling),r=l.data==="F!";break e}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mg,lastRenderedState:n},a.queue=r,a=Pg.bind(null,ht,r),r.dispatch=a,r=Df(!1),u=Bf.bind(null,ht,!1,r.queue),r=Hn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,a=$S.bind(null,ht,l,u,a),l.dispatch=a,r.memoizedState=e,[n,a,!1]}function _g(e){var n=un();return vg(n,Zt,e)}function vg(e,n,a){if(n=wf(e,n,mg)[0],e=nc(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Oo(n)}catch(m){throw m===ds?ql:m}else r=n;n=un();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,gs(9,{destroy:void 0},ey.bind(null,l,a),null)),[r,u,e]}function ey(e,n){e.action=n}function xg(e){var n=un(),a=Zt;if(a!==null)return vg(n,a,e);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function gs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ht.updateQueue,n===null&&(n=ec(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Sg(){return un().memoizedState}function ic(e,n,a,r){var l=Hn();ht.flags|=e,l.memoizedState=gs(1|n,{destroy:void 0},a,r===void 0?null:r)}function ac(e,n,a,r){var l=un();r=r===void 0?null:r;var u=l.memoizedState.inst;Zt!==null&&r!==null&&Ef(r,Zt.memoizedState.deps)?l.memoizedState=gs(n,u,a,r):(ht.flags|=e,l.memoizedState=gs(1|n,u,a,r))}function yg(e,n){ic(8390656,8,e,n)}function Lf(e,n){ac(2048,8,e,n)}function ty(e){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=ec(),ht.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Mg(e){var n=un().memoizedState;return ty({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Eg(e,n){return ac(4,2,e,n)}function bg(e,n){return ac(4,4,e,n)}function Tg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ag(e,n,a){a=a!=null?a.concat([e]):null,ac(4,4,Tg.bind(null,n,e),a)}function Of(){}function Rg(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ef(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Cg(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ef(n,r[1]))return r[0];if(r=e(),Ur){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r}function Pf(e,n,a){return a===void 0||(xa&1073741824)!==0&&(At&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=B0(),ht.lanes|=e,$a|=e,a)}function wg(e,n,a,r){return ei(a,n)?a:Ya.current!==null?(e=Pf(e,a,r),ei(e,n)||(pn=!0),e):(xa&106)===0||(xa&1073741824)!==0&&(At&261930)===0?(pn=!0,e.memoizedState=a):(e=B0(),ht.lanes|=e,$a|=e,n)}function Ng(e,n,a,r,l){var u=Ce.p;Ce.p=u!==0&&8>u?u:8;var m=xe.T,R={};R.types=m!==null?m.types:null,xe.T=R,Bf(e,!1,n,a);try{var z=l(),$=xe.S;if($!==null&&$(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var fe=KS(z,r);Po(e,n,fe,ri(e))}else Po(e,n,r,ri(e))}catch(ye){Po(e,n,{then:function(){},status:"rejected",reason:ye},ri())}finally{Ce.p=u,m!==null&&R.types!==null&&(m.types=R.types),xe.T=m}}function ny(){}function If(e,n,a,r){if(e.tag!==5)throw Error(s(476));var l=Dg(e).queue;Ng(e,l,n,Vt,a===null?ny:function(){return Ug(e),a(r)})}function Dg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Vt,baseState:Vt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Vt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ug(e){var n=Dg(e);n.next===null&&(n=e.alternate.memoizedState),Po(e,n.next.queue,{},ri())}function zf(){return An(Ps)}function Lg(){return un().memoizedState}function Og(){return un().memoizedState}function iy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Wa(a);var r=qa(n,e,a);r!==null&&(jn(r,n,a),wo(r,n,a)),n={cache:ff()},e.payload=n;return}n=n.return}}function ay(e,n,a){var r=ri();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rc(e)?Ig(n,a):(a=tf(e,n,a,r),a!==null&&(jn(a,e,r),zg(a,n,r)))}function Pg(e,n,a){var r=ri();Po(e,n,a,r)}function Po(e,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(rc(e))Ig(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,R=u(m,a);if(l.hasEagerState=!0,l.eagerState=R,ei(R,m))return Il(e,n,l,0),Kt===null&&Pl(),!1}catch{}finally{}if(a=tf(e,n,l,r),a!==null)return jn(a,e,r),zg(a,n,r),!0}return!1}function Bf(e,n,a,r){if(r={lane:2,revertLane:Cd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(n)throw Error(s(479))}else n=tf(e,a,r,2),n!==null&&jn(n,e,2)}function rc(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function Ig(e,n){ps=Jl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function zg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,co(e,a)}}var sc={readContext:An,use:tc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},Bg={readContext:An,use:tc,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:yg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ic(4194308,4,Tg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ic(4194308,4,e,n)},useInsertionEffect:function(e,n){ic(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var r=e();if(Ur){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Hn();if(a!==void 0){var l=a(n);if(Ur){Ct(!0);try{a(n)}finally{Ct(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=ay.bind(null,ht,e),[r.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Df(e);var n=e.queue,a=Pg.bind(null,ht,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(e,n){var a=Hn();return Pf(a,e,n)},useTransition:function(){var e=Df(!1);return e=Ng.bind(null,ht,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ht,l=Hn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(At&127)!==0||rg(r,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,yg(og.bind(null,r,u,e),[e]),r.flags|=2048,gs(9,{destroy:void 0},sg.bind(null,r,u,a,n),null),a},useId:function(){var e=Hn(),n=Kt.identifierPrefix;if(St){var a=qi,r=Wi;a=(r&~(1<<32-ut(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=QS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:zf,useFormState:gg,useActionState:gg,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bf.bind(null,ht,!0,a),a.dispatch=n,[e,n]},useMemoCache:Cf,useCacheRefresh:function(){return Hn().memoizedState=iy.bind(null,ht)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Fg={readContext:An,use:tc,useCallback:Rg,useContext:An,useEffect:Lf,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:bg,useMemo:Cg,useReducer:nc,useRef:Sg,useState:function(){return nc(Sa)},useDebugValue:Of,useDeferredValue:function(e,n){var a=un();return wg(a,Zt.memoizedState,e,n)},useTransition:function(){var e=nc(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),n]},useSyncExternalStore:ag,useId:Lg,useHostTransitionStatus:zf,useFormState:_g,useActionState:_g,useOptimistic:function(e,n){var a=un();return ug(a,Zt,e,n)},useMemoCache:Cf,useCacheRefresh:Og,useEffectEvent:Mg},ry={readContext:An,use:tc,useCallback:Rg,useContext:An,useEffect:Lf,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:bg,useMemo:Cg,useReducer:Nf,useRef:Sg,useState:function(){return Nf(Sa)},useDebugValue:Of,useDeferredValue:function(e,n){var a=un();return Zt===null?Pf(a,e,n):wg(a,Zt.memoizedState,e,n)},useTransition:function(){var e=Nf(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),n]},useSyncExternalStore:ag,useId:Lg,useHostTransitionStatus:zf,useFormState:xg,useActionState:xg,useOptimistic:function(e,n){var a=un();return Zt!==null?ug(a,Zt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Og,useEffectEvent:Mg};function Ff(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(jn(n,e,r),wo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(jn(n,e,r),wo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),r=Wa(a);r.tag=2,n!=null&&(r.callback=n),n=qa(e,r,a),n!==null&&(jn(n,e,a),wo(n,e,a))}};function Hg(e,n,a,r,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,m):n.prototype&&n.prototype.isPureReactComponent?!yo(a,r)||!yo(l,u):!0}function Gg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Hf.enqueueReplaceState(n,n.state,null)}function Lr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=I({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Vg(e){Ol(e)}function Xg(e){console.error(e)}function kg(e){Ol(e)}function oc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Wg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Gf(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(e,n)},a}function qg(e){return e=Wa(e),e.tag=3,e}function Yg(e,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){Wg(n,a,r)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Wg(n,a,r),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function sy(e,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Tr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Cc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Td(e,r,l)),!1;case 22:return a.flags|=65536,r===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Td(e,r,l)),!1}throw Error(s(435,a.tag))}return Td(e,r,l),Cc(),!1}if(St)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==of&&(e=Error(s(422),{cause:r}),bo(pi(e,a)))):(r!==of&&(n=Error(s(423),{cause:r}),bo(pi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=pi(r,a),l=Gf(e.stateNode,r,l),_f(e,l),ln!==4&&(ln=2)),!1;var u=Error(s(520),{cause:r});if(u=pi(u,a),Xo===null?Xo=[u]:Xo.push(u),ln!==4&&(ln=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Gf(a.stateNode,r,e),_f(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=qg(l),Yg(l,e,a,r),_f(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Vf=Error(s(461)),pn=!1;function xn(e,n,a,r){n.child=e===null?Qm(n,null,a,r):Dr(n,e.child,a,r)}function jg(e,n,a,r,l){a=a.render;var u=n.ref;if("ref"in r){var m={};for(var R in r)R!=="ref"&&(m[R]=r[R])}else m=r;return Ar(n),r=bf(e,n,a,m,u,l),R=Tf(),e!==null&&!pn?(Af(e,n,l),ya(e,n,l)):(St&&R&&Hl(n),n.flags|=1,xn(e,n,r,l),n.child)}function Zg(e,n,a,r,l){if(e===null){var u=a.type;return typeof u=="function"&&!nf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,Kg(e,n,u,r,l)):(e=Bl(a.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!Kf(e,l)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(m,r)&&e.ref===n.ref)return ya(e,n,l)}return n.flags|=1,e=ma(u,r),e.ref=n.ref,e.return=n,n.child=e}function Kg(e,n,a,r,l){if(e!==null){var u=e.memoizedProps;if(yo(u,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=u,Kf(e,l))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ya(e,n,l)}return Xf(e,n,a,r,l)}function Qg(e,n,a,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,n.child=null;return Jg(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wl(n,u!==null?u.cachePool:null),u!==null?eg(n,u):xf(),tg(n);else return r=n.lanes=536870912,Jg(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(Wl(n,u.cachePool),eg(n,u),Za(),n.memoizedState=null):(e!==null&&Wl(n,null),xf(),Za());return xn(e,n,l,a),n.child}function Io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jg(e,n,a,r,l){var u=hf();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Wl(n,null),xf(),tg(n),e!==null&&Tr(e,n,r,!0),n.childLanes=l,null}function lc(e,n){return n=cc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function $g(e,n,a){return Dr(n,e.child,null,a),e=lc(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function oy(e,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(r.mode==="hidden")return e=lc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Io(null,e);if(yf(n),(e=Jt)?(e=T_(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Im(e),a.return=n,n.child=a,Mn=n,Jt=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return lc(n,r)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(yf(n),l)if(n.flags&256)n.flags&=-257,n=$g(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Tr(e,n,a,!1),l=(a&e.childLanes)!==0,pn||l){if(Ya.current===null){if(r=Kt,r!==null&&(m=uo(r,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,yr(e,m),jn(r,e,m),Vf;Cc()}n=$g(e,n,a)}else e=u.treeContext,Jt=xi(m.nextSibling),Mn=n,St=!0,Ha=null,_i=!1,e!==null&&Fm(n,e),n=lc(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function _s(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xf(e,n,a,r,l){return Ar(n),a=bf(e,n,a,r,void 0,l),r=Tf(),e!==null&&!pn?(Af(e,n,l),ya(e,n,l)):(St&&r&&Hl(n),n.flags|=1,xn(e,n,a,l),n.child)}function e0(e,n,a,r,l,u){return Ar(n),n.updateQueue=null,a=ig(n,r,a,l),ng(e),r=Tf(),e!==null&&!pn?(Af(e,n,u),ya(e,n,u)):(St&&r&&Hl(n),n.flags|=1,xn(e,n,a,u),n.child)}function t0(e,n,a,r,l){if(Ar(n),n.stateNode===null){var u=os,m=a.contextType;typeof m=="object"&&m!==null&&(u=An(m)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Hf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},mf(n),m=a.contextType,u.context=typeof m=="object"&&m!==null?An(m):os,u.state=n.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Ff(n,a,m,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Hf.enqueueReplaceState(u,u.state,null),Do(n,r,u,l),No(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var R=n.memoizedProps,z=Lr(a,R);u.props=z;var $=u.context,fe=a.contextType;m=os,typeof fe=="object"&&fe!==null&&(m=An(fe));var ye=a.getDerivedStateFromProps;fe=typeof ye=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,fe||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||$!==m)&&Gg(n,u,r,m),ka=!1;var K=n.memoizedState;u.state=K,Do(n,r,u,l),No(),$=n.memoizedState,R||K!==$||ka?(typeof ye=="function"&&(Ff(n,a,ye,r),$=n.memoizedState),(z=ka||Hg(n,a,z,r,K,$,m))?(fe||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),u.props=r,u.state=$,u.context=m,r=z):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,gf(e,n),m=n.memoizedProps,fe=Lr(a,m),u.props=fe,ye=n.pendingProps,K=u.context,$=a.contextType,z=os,typeof $=="object"&&$!==null&&(z=An($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==ye||K!==z)&&Gg(n,u,r,z),ka=!1,K=n.memoizedState,u.state=K,Do(n,r,u,l),No();var oe=n.memoizedState;m!==ye||K!==oe||ka||e!==null&&e.dependencies!==null&&Xl(e.dependencies)?(typeof R=="function"&&(Ff(n,a,R,r),oe=n.memoizedState),(fe=ka||Hg(n,a,fe,r,K,oe,z)||e!==null&&e.dependencies!==null&&Xl(e.dependencies))?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,oe,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,oe,z)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=oe),u.props=r,u.state=oe,u.context=z,r=fe):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,_s(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Dr(n,e.child,null,l),n.child=Dr(n,null,a,l)):xn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=ya(e,n,l),e}function n0(e,n,a,r){return Er(),n.flags|=256,xn(e,n,a,r),n.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(e){return{baseLanes:e,cachePool:Wm()}}function qf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function i0(e,n,a){var r=n.pendingProps,l=!1,u=(n.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(l?ja(n):Za(),(e=Jt)?(e=T_(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Im(e),a.return=n,n.child=a,Mn=n,Jt=null)):e=null,e===null)throw Ga(n);return Wd(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Za(),l=n.mode,u=cc({mode:"hidden",children:u},l),r=Mr(r,l,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=Wf(a),r.childLanes=qf(e,m,a),n.memoizedState=kf,Io(null,r)):(ja(n),Yf(n,u))}var R=e.memoizedState;if(R!==null){var z=R.dehydrated;if(z!==null)return ly(e,n,u,m,r,z,R,a)}return l?(Za(),l=r.fallback,u=n.mode,R=e.child,z=R.sibling,r=ma(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,z!==null?l=ma(z,l):(l=Mr(l,u,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Io(null,r),r=n.child,l=e.child.memoizedState,l===null?l=Wf(a):(u=l.cachePool,u!==null?(R=dn._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=Wm(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=qf(e,m,a),n.memoizedState=kf,Io(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=a,n.memoizedState=null,a)}function Yf(e,n){return n=cc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function cc(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function uc(e,n,a){return Dr(n,e.child,null,a),e=Yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ly(e,n,a,r,l,u,m,R){if(a)return n.flags&256?(ja(n),n.flags&=-257,uc(e,n,R)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,null):(Za(),u=l.fallback,m=n.mode,l=cc({mode:"visible",children:l.children},m),u=Mr(u,m,R,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Dr(n,e.child,null,R),l=n.child,l.memoizedState=Wf(R),l.childLanes=qf(e,r,R),n.memoizedState=kf,Io(null,l));if(ja(n),Wd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,bo({value:l,source:null,stack:null})),uc(e,n,R)}if(pn||Tr(e,n,R,!1),r=(R&e.childLanes)!==0,pn||r){if(Ya.current!==null)return uc(e,n,R);if(r=Kt,r!==null&&(l=uo(r,R),l!==0&&l!==m.retryLane))throw m.retryLane=l,yr(e,l),jn(r,e,l),Vf;return kd(u)||Cc(),uc(e,n,R)}return kd(u)?(n.flags|=192,n.child=e.child,null):(e=m.treeContext,Jt=xi(u.nextSibling),Mn=n,St=!0,Ha=null,_i=!1,e!==null&&Fm(n,e),n=Yf(n,l.children),n.flags|=134221824,n)}function a0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Vl(e.return,n,a)}function r0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Ql(a)===null&&(n=e),e=e.sibling}return n}function fc(e,n,a,r,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=a,m.tailMode=l,m.treeForkCount=u)}function jf(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Zf(e,n,a){var r=n.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var m=Cn.current;if(n.flags&128)return Uo(n,m),null;var R=(m&2)!==0;if(R?(m=m&1|2,n.flags|=128):m&=1,Uo(n,m),l==="backwards"&&e!==null?(jf(e),xn(e,n,r,a),jf(e)):xn(e,n,r,a),r=St?Eo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a0(e,a,n);else if(e.tag===19)a0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=r0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,jf(n)),fc(n,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ql(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}fc(n,!0,a,null,u,r);break;case"together":fc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=r0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),fc(n,!1,l,a,u,r)}return n.child}function s0(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),xn(e,n,r.children,a),n.child}function ya(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Tr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Kf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Xl(e)))}function cy(e,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Va(n,dn,e.memoizedState.cache),Er();break;case 27:case 5:Lt(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Tr(e,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?i0(e,n,a):(ja(n),e=ya(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return Zf(e,n,a);if(l=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Tr(e,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return Zf(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,Qg(e,n,a,n.pendingProps);case 24:Va(n,dn,e.memoizedState.cache)}return ya(e,n,a)}function o0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Kf(e,a)&&(n.flags&128)===0)return pn=!1,cy(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,St&&(n.flags&1048576)!==0&&Bm(n,Eo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=wr(n.elementType),n.type=e,typeof e=="function")nf(e)?(r=Lr(e,r),n.tag=1,n=t0(null,n,e,r,a)):(n.tag=0,n=Xf(null,n,e,r,a));else{if(e!=null){var l=e.$$typeof;if(l===k){n.tag=11,n=jg(null,n,e,r,a);break e}else if(l===ae){n.tag=14,n=Zg(null,n,e,r,a);break e}else if(l===ee){n.tag=10,n.type=e,n=s0(null,n,a);break e}}throw n=Ae(e)||e,Error(s(306,n,""))}}return n;case 0:return Xf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Lr(r,n.pendingProps),t0(e,n,r,l,a);case 3:e:{if(Y(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;l=u.element,gf(e,n),Do(n,r,null,a);var m=n.memoizedState;if(r=m.cache,Va(n,dn,r),r!==u.cache&&uf(n,[dn],a,!0),No(),r=m.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=n0(e,n,r,a);break e}else if(r!==l){l=pi(Error(s(424)),n),bo(l),n=n0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Jt=xi(e.firstChild),Mn=n,St=!0,Ha=null,_i=!0,a=Qm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Er(),r===l){n=ya(e,n,a);break e}xn(e,n,r,a)}n=n.child}return n;case 26:return _s(e,n),e===null?(a=U_(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(n.stateNode=f_(n.type,n.pendingProps,Ot.current,n)):n.memoizedState=U_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Lt(n),e===null&&St&&(r=n.stateNode=C_(n.type,n.pendingProps,Ot.current),Mn=n,_i=!0,l=Jt,ir(n.type)?(qd=l,Jt=xi(r.firstChild)):Jt=l),xn(e,n,n.pendingProps.children,a),_s(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((l=r=Jt)&&(r=iM(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Mn=n,Jt=xi(r.firstChild),_i=!1,l=!0):l=!1),l||Ga(n)),Lt(n),l=n.type,u=n.pendingProps,m=e!==null?e.memoizedProps:null,r=u.children,zd(l,u)?r=null:m!==null&&zd(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=bf(e,n,JS,null,null,a),Ps._currentValue=l),_s(e,n),xn(e,n,r,a),n.child;case 6:return e===null&&St&&((e=a=Jt)&&(a=aM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Mn=n,Jt=null,e=!0):e=!1),e||Ga(n)),null;case 13:return i0(e,n,a);case 4:return Y(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Dr(n,null,r,a):xn(e,n,r,a),n.child;case 11:return jg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,_s(e,n),xn(e,n,r,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return s0(e,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Ar(n),l=An(l),r=r(l),n.flags|=1,xn(e,n,r,a),n.child;case 14:return Zg(e,n,n.type,n.pendingProps,a);case 15:return Kg(e,n,n.type,n.pendingProps,a);case 19:return Zf(e,n,a);case 31:return oy(e,n,a);case 22:return Qg(e,n,a,n.pendingProps);case 24:return Ar(n),r=An(dn),e===null?(l=hf(),l===null&&(l=Kt,u=ff(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:r,cache:l},mf(n),Va(n,dn,l)):((e.lanes&a)!==0&&(gf(e,n),Do(n,null,null,a),No()),l=e.memoizedState,u=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Va(n,dn,r)):(r=u.cache,Va(n,dn,r),r!==l.cache&&uf(n,[dn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:St&&Hl(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:_s(e,n),xn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function Qf(e,n,a,r,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?I_(n,r):I_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(V0())e.flags|=8192;else throw Nr=Yl,pf}else e.flags&=-16777217}function l0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!z_(n))if(V0())e.flags|=8192;else throw Nr=Yl,pf}function dc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?lo():536870912,e.lanes|=n,Ms|=n)}function zo(e,n){if(!St)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $t(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function uy(e,n,a){var r=n.pendingProps;switch(sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(us(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),$t(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Ma(n),u!==null?($t(n),l0(n,u)):($t(n),Qf(n,l,null,r,a))):u?u!==e.memoizedState?(Ma(n),$t(n),l0(n,u)):($t(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),$t(n),Qf(n,l,e,r,a)),null;case 27:if(O(n),a=Ot.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $t(n),n.subtreeFlags&=-33554433,null}e=Xt.current,us(n)?Hm(n):(e=C_(l,r,a),n.stateNode=e,Ma(n))}return $t(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $t(n),n.subtreeFlags&=-33554433,null}if(u=Xt.current,us(n))Hm(n);else{var m=jo(Ot.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}u[A]=n,u[H]=r;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=u;e:switch(Nn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(n)}}return $t(n),n.subtreeFlags&=-33554433,Qf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ot.current,us(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||o_(e.nodeValue,a)),e||Ga(n,!0)}else e=jo(e).createTextNode(r),e[A]=n,n.stateNode=e}return $t(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=us(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),e=!1}else a=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=us(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[A]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),l=!1}else l=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),dc(n,n.updateQueue),$t(n),null);case 4:return nn(),e===null&&Ud(n.stateNode.containerInfo),n.flags|=67108864,$t(n),null;case 10:return va(n.type),$t(n),null;case 19:if(Mf(n),r=n.memoizedState,r===null)return $t(n),null;if(l=(n.flags&128)!==0,u=r.rendering,u===null)if(l)zo(r,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=Ql(e),u!==null){for(n.flags|=128,zo(r,!1),e=u.updateQueue,n.updateQueue=e,dc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pm(a,e),a=a.sibling;return Uo(n,Cn.current&1|2),St&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&ke()>bc&&(n.flags|=128,l=!0,zo(r,!1),n.lanes=4194304)}else{if(!l)if(e=Ql(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,dc(n,e),zo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!St)return $t(n),null}else 2*ke()-r.renderingStartTime>bc&&a!==536870912&&(n.flags|=128,l=!0,zo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||St?Uo(n,u):(a=u,it(Rn,n),it(Cn,a),Ln===null&&(Ln=n)),St&&ga(n,r.treeForkCount),e}return $t(n),null;case 22:case 23:return ti(n),Sf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&dc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(Cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(dn),$t(n),null;case 25:return null;case 30:return n.flags|=33554432,$t(n),null}throw Error(s(156,n.tag))}function fy(e,n){switch(sf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(dn),nn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Mf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return va(n.type),null;case 22:case 23:return ti(n),Sf(),e!==null&&tt(Cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function c0(e,n){switch(sf(n),n.tag){case 3:va(dn),nn();break;case 26:case 27:case 5:O(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Mf(n);break;case 10:va(n.type);break;case 22:case 23:ti(n),Sf(),e!==null&&tt(Cr);break;case 24:va(dn)}}function Bo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var u=a.create,m=a.inst;r=u(),m.destroy=r}a=a.next}while(a!==l)}}catch(R){Wt(n,n.return,R)}}function Ka(e,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var m=r.inst,R=m.destroy;if(R!==void 0){m.destroy=void 0,l=n;var z=a,$=R;try{$()}catch(fe){Wt(l,z,fe)}}}r=r.next}while(r!==u)}}catch(fe){Wt(n,n.return,fe)}}function u0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$m(n,a)}catch(r){Wt(e,e.return,r)}}}function f0(e,n,a){a.props=Lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Wt(e,n,r)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ha(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=v_(u)),r=l.ref;break;case 7:if(e.stateNode===null){var m=new si(e);_(e.child,!1,tM,m,void 0,void 0),e.stateNode=m}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){Wt(e,n,R)}}function wn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Wt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Wt(e,n,l)}else a.current=null}function hc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)b_(e.stateNode,n[a])}function d0(e){for(var n=e.return;n!==null&&($f(n)&&b_(e.stateNode,n.stateNode),!Jf(n));)n=n.return}function Fo(e){for(var n=e.return;n!==null&&($f(n)&&nM(e.stateNode,n.stateNode),!Jf(n));)n=n.return}function Jf(e){return e.tag===5||e.tag===3||e.tag===27}function $f(e){return e&&e.tag===7&&e.stateNode!==null}function ed(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Wt(e,e.return,l)}}function td(e,n,a){try{var r=e.stateNode;zy(r,e.type,a,n),r[H]=n}catch(l){Wt(e,e.return,l)}}function h0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ir(e.type)||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||h0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),hc(e,r),xt=!0;else if(l!==4&&(l===27&&(hc(e,r),r=null,ir(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(id(e,n,a,r),e=e.sibling;e!==null;)id(e,n,a,r),e=e.sibling}function pc(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),hc(e,r),xt=!0;else if(l!==4&&(l===27&&(hc(e,r),r=null,ir(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(pc(e,n,a,r),e=e.sibling;e!==null;)pc(e,n,a,r),e=e.sibling}function p0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[A]=e,n[H]=a}catch(u){Wt(e,e.return,u)}}var mc=!1,ni=null;function m0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(mc=!0)}var ji=null;function g0(){var e=ji;return ji=null,e}var Wn=0;function vs(e,n,a,r,l){return Wn=0,_0(e.child,n,a,r,l)}function _0(e,n,a,r,l){for(var u=!1;e!==null;){if(e.tag===5){var m=e.stateNode;if(r!==null){var R=Hd(m);r.push(R),R.view&&(u=!0)}else u||Hd(m).view&&(u=!0);mc=!0,g_(m,Wn===0?n:n+"_"+Wn,a),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||_0(e.child,n,a,r,l)&&(u=!0));e=e.sibling}return u}function Zi(e,n){for(;e!==null;)e.tag===5?__(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Zi(e.child,n)),e=e.sibling}function gc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(gc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(vs(e,a,n,null,!1)||Zi(e.child,!1))}e=e.sibling}}function ad(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,l=ha(r,a),u=pa(r.default,a.paired?r.share:r.enter);u!=="none"?vs(e,l,u,null,!1)?(gc(e),a.paired||n||As(e,r.onEnter)):Zi(e.child,!1):gc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ad(e,n),e=e.sibling;else gc(e)}function rd(e){if(ni!==null&&ni.size!==0){var n=ni;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var u=pa(a.default,a.share);if(u!=="none"&&(vs(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,As(e,a.onShare)):Zi(e.child,!1)),n.delete(r),n.size===0)break}}}rd(e)}e=e.sibling}}}function sd(e){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode),r=ni!==null?ni.get(a):void 0,l=pa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(vs(e,a,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ni.delete(a),As(e,n.onShare)):As(e,n.onExit):Zi(e.child,!1)),ni!==null&&rd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)sd(e),e=e.sibling;else ni!==null&&rd(e)}function v0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&vs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&v0(e);e=e.sibling}}function od(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Zi(e.child,!1))}od(e)}e=e.sibling}}function _c(e){if(e.tag===30)e.stateNode.paired=null,Zi(e.child,!1),od(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_c(e),e=e.sibling;else od(e)}function x0(e){for(e=e.child;e!==null;)e.tag===30?Zi(e.child,!1):(e.subtreeFlags&33554432)!==0&&x0(e),e=e.sibling}function ld(e,n,a,r,l,u,m){for(var R=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(u!==null&&Wn<u.length){var $=u[Wn],fe=Hd(z);($.view||fe.view)&&(R=!0);var ye;if(ye=(e.flags&4)===0)if(fe.clip)ye=!0;else{ye=$.rect;var K=fe.rect;ye=ye.y!==K.y||ye.x!==K.x||ye.height!==K.height||ye.width!==K.width}ye&&(e.flags|=4),fe.abs?fe=!$.abs:($=$.rect,fe=fe.rect,fe=$.height!==fe.height||$.width!==fe.width),fe&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&g_(z,Wn===0?a:a+"_"+Wn,l),R&&(e.flags&4)!==0||(ji===null&&(ji=[]),ji.push(z,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?e.flags|=n.flags&32:ld(e,n.child,a,r,l,u,m)&&(R=!0));n=n.sibling}return R}function S0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,l=ha(a,r),u=pa(a.default,a.update),m;m=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;Wn=0,l=ld(r,R,l,l,u,m,!1),(e.flags&4)!==0&&l&&As(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&S0(e);e=e.sibling}}var En=!1,Gt=!1,Ki=!1,cd=!1,y0=typeof WeakSet=="function"?WeakSet:Set,bn=null,Qi=!1,Ho=!1,vc=!1,ud=!1;function dy(e,n,a){if(e=e.containerInfo,Pd=Is,e=Tm(e),Zu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var R=0,z=-1,$=-1,fe=0,ye=0,K=e,oe=null;t:for(;;){for(var Pe;K!==r||u!==0&&K.nodeType!==3||(z=R+u),K!==m||l!==0&&K.nodeType!==3||($=R+l),K.nodeType===3&&(R+=K.nodeValue.length),(Pe=K.firstChild)!==null;)oe=K,K=Pe;for(;;){if(K===e)break t;if(oe===r&&++fe===u&&(z=R),oe===m&&++ye===l&&($=R),(Pe=K.nextSibling)!==null)break;K=oe,oe=K.parentNode}K=Pe}r=z===-1||$===-1?null:{start:z,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(Id={focusedElem:e,selectionRange:r},Is=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(e=bn,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&sd(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&m0(e),xc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&sd(r),xc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&m0(e),xc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,bn=r):(a&&v0(e),xc(a))}}ni=null}function xc(e){for(;bn!==null;){var n=bn,a=e,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var m=Lr(n.type,l);a=u.getSnapshotBeforeUpdate(m,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){Wt(n,n.return,R)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Xd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Xd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ha(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=pa(l.default,l.update),l!=="none"&&vs(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function M0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),r&4&&Bo(5,a);break;case 1:if(Ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(m){Wt(a,a.return,m)}else{var l=Lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Wt(a,a.return,m)}}r&64&&u0(a),r&512&&Yi(a,a.return);break;case 3:if(Ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$m(e,n)}catch(m){Wt(a,a.return,m)}}break;case 27:n===null&&r&4&&p0(a);case 26:case 5:Ji(e,a),n===null&&r&4&&ed(a),r&512&&Yi(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),r&4&&A0(e,a);break;case 13:Ji(e,a),r&4&&R0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=by.bind(null,a),rM(e,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||Gt;n=En,l=Gt,En=r,(Gt=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(e,a,r)):Ji(e,a),En=n,Gt=l}break;case 30:Ji(e,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:Ji(e,a)}}function fd(e,n){for(e=e.child;e!==null;)E0(e,n),e=e.sibling}function E0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,m=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(z){Wt(e,e.return,z)}dd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,xt=!0}catch(z){Wt(e,e.return,z)}break;case 18:try{var R=e.stateNode;n?m_(R,!0):m_(e.stateNode,!1)}catch(z){Wt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&fd(e,n);break;default:fd(e,n)}}function dd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:E0(a,r);break e;case 22:a.memoizedState===null&&dd(a,r);break e;default:dd(a,r)}}e=e.sibling}}function b0(e){var n=e.alternate;n!==null&&(e.alternate=null,b0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ke(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,qn=!1;function Ai(e,n,a){for(a=a.child;a!==null;)T0(e,n,a),a=a.sibling}function T0(e,n,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Gt||wn(a,n),Ai(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Gt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gt||wn(a,n),Fo(a);var r=tn,l=qn;ir(a.type)&&(tn=a.stateNode,qn=!1),Ai(e,n,a),w_(a.stateNode,a.type,a.memoizedProps),tn=r,qn=l;break;case 5:Gt||wn(a,n),Fo(a);case 6:if(a.tag===6&&Fo(a),r=tn,l=qn,tn=null,Ai(e,n,a),tn=r,qn=l,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),xt=!0}catch(u){Wt(a,n,u)}else try{tn.removeChild(a.stateNode),xt=!0}catch(u){Wt(a,n,u)}break;case 18:tn!==null&&(qn?(e=tn,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zs(e)):p_(tn,a.stateNode));break;case 4:r=tn,l=qn,tn=a.stateNode.containerInfo,qn=!0,Ai(e,n,a),tn=r,qn=l;break;case 0:case 11:case 14:case 15:Ka(2,a,n),Gt||Ka(4,a,n),Ai(e,n,a);break;case 1:Gt||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&f0(a,n,r)),Ai(e,n,a);break;case 21:Ai(e,n,a);break;case 22:Gt=(r=Gt)||a.memoizedState!==null,Ai(e,n,a),Gt=r;break;case 30:wn(a,n),Ai(e,n,a);break;case 7:Gt||wn(a,n),Ai(e,n,a);break;default:Ai(e,n,a)}}function A0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zs(e)}catch(a){Wt(n,n.return,a)}}}function R0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zs(e)}catch(a){Wt(n,n.return,a)}}function hy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new y0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new y0),n;default:throw Error(s(435,e.tag))}}function Sc(e,n){var a=hy(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=Ty.bind(null,e,r);r.then(l,l)}})}function Gn(e,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],m=e,R=n,z=R;e:for(;z!==null;){switch(z.tag){case 27:if(ir(z.type)){tn=z.stateNode,qn=!1;break e}break;case 5:tn=z.stateNode,qn=!1;break e;case 3:case 4:tn=z.stateNode.containerInfo,qn=!0;break e}z=z.return}if(tn===null)throw Error(s(160));T0(m,R,u),tn=null,qn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)C0(n,e,a),n=n.sibling}var Ri=null;function C0(e,n,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var m=r[u];m.ref.impl=m.nextImpl}Gn(n,e,a),Vn(e),l&4&&(Ka(3,e,e.return),Bo(3,e),Ka(5,e,e.return));break;case 1:Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ri,Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(En)e.stateNode=f_(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Oe]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[A]=e,vt(r),n=r;break e;case"link":if(u=P_("link","href",l).get(n+(a.href||""))){for(m=0;m<u.length;m++)if(r=u[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(m,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(u=P_("meta","content",l).get(n+(a.content||""))){for(m=0;m<u.length;m++)if(r=u[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(m,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,vt(r),n=r}e.stateNode=n}else En||Kd(u,e.type,e.stateNode);else e.stateNode=O_(u,a,e.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Gt||n.parentNode.removeChild(n)):l.count--,a===null?En||Kd(u,e.type,e.stateNode):O_(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&td(e,e.memoizedProps,r.memoizedProps);break;case 27:Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),r!==null&&l&4&&td(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Ki,Ki=!1,Gn(n,e,a),Ki=u,Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),e.flags&32){n=e.stateNode;try{es(n,""),xt=!0}catch(fe){Wt(e,e.return,fe)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,td(e,n,r!==null?r.memoizedProps:n)),l&1024&&(cd=!0);break;case 6:if(Gn(n,e,a),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,xt=!0}catch(fe){Wt(e,e.return,fe)}}break;case 3:if(xt=!1,Pc=null,u=Ri,Ri=Zo(n.containerInfo),Gn(n,e,a),Ri=u,Vn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(fe){Wt(e,e.return,fe)}cd&&(cd=!1,w0(e)),xt=!1;break;case 4:l=Ki,Ki=En,r=It(),u=Ri,Ri=Zo(e.stateNode.containerInfo),Gn(n,e,a),Vn(e),Ri=u,xt&&Ho&&(vc=!0),xt=r,Ki=l;break;case 12:Gn(n,e,a),Vn(e);break;case 31:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sc(e,n)));break;case 13:Gn(n,e,a),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ec=ke()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sc(e,n)));break;case 22:u=e.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var R=En,z=Gt,$=Ki;En=R||u,Ki=$||u,Gt=z||m,Gn(n,e,a),Gt=z,Ki=$,En=R,Vn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||m||En||Gt||(n=m||Gt,a=En,r=Gt,En=u||En,Gt=n,Qa(e,2),En=a,Gt=r),!u&&Ki||fd(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Sc(e,a))));break;case 19:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sc(e,n)));break;case 30:l&512&&(Gt||r===null||wn(r,r.return)),l=It(),u=Ho,m=(a&335544064)===a,R=e.memoizedProps,Ho=m&&pa(R.default,R.update)!=="none",Gn(n,e,a),Vn(e),m&&r!==null&&xt&&(e.flags|=4),Ho=u,xt=l;break;case 21:break;case 7:l&512&&(Gt||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Gn(n,e,a),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(h0(r)){a=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if($f(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(Jf(l))break;l=l.return}var m=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,z=nd(e);pc(e,z,R,m);break;case 5:var $=a.stateNode;a.flags&32&&(es($,""),a.flags&=-33);var fe=nd(e);pc(e,fe,$,m);break;case 3:case 4:var ye=a.stateNode.containerInfo,K=nd(e);id(e,K,ye,m);break;default:throw Error(s(161))}}catch(oe){Wt(e,e.return,oe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;w0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Is=!0,n.reset(),Is=!1),e=e.sibling}}function xs(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)N0(n,e),n=n.sibling;else S0(n)}function N0(e,n){var a=e.alternate;if(a===null)ad(e,!1);else switch(e.tag){case 3:if(ud=Qi=!1,g0(),xs(n,e),!Qi&&!vc){if(e=ji,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var l=e[r+1];__(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ud=!0}ji=null;break;case 5:xs(n,e);break;case 4:r=Qi,Qi=!1,xs(n,e),Qi&&(vc=!0),Qi=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?ad(e,!1):xs(n,e));break;case 30:r=Qi,l=g0(),Qi=!1,xs(n,e),Qi&&(e.flags|=4);var u=e.memoizedProps,m=e.stateNode;n=ha(u,m),m=ha(a.memoizedProps,m);var R=pa(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Wn=0,n=ld(e,a,n,m,R,u,!0),Wn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(As(e,e.memoizedProps.onUpdate),ji=l):l!==null&&(l.push.apply(l,ji),ji=l),Qi=(e.flags&32)!==0?!0:r;break;default:xs(n,e)}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M0(e,n.alternate,n),n=n.sibling}function Qa(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ka(4,a,a.return),Qa(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&f0(a,a.return,l),Qa(a,r);break;case 27:(r&2)!==0&&w_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Fo(a),Qa(a,r);break;case 6:Fo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Gt||l.parentNode.removeChild(l),Qa(a,r);break;case 22:a.memoizedState===null&&Qa(a,r);break;case 30:wn(a,a.return),Qa(a,r);break;case 7:wn(a,a.return);default:Qa(a,r)}e=e.sibling}}function Ci(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=e,u=n,m=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ci(l,u,a),Bo(4,u);break;case 1:if(Ci(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(fe){Wt(r,r.return,fe)}if(r=u,l=r.updateQueue,l!==null){var z=r.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)Jm($[l],z)}catch(fe){Wt(r,r.return,fe)}}R&&m&64&&u0(u),Yi(u,u.return);break;case 27:(a&2)!==0&&p0(u);case 5:u.tag!==5&&u.tag!==27||d0(u),Ci(l,u,a),R&&r===null&&m&4&&ed(u),Yi(u,u.return);break;case 6:d0(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||En||Kd(Zo(z.ownerDocument),u.type,z),Ci(l,u,a),R&&r===null&&m&4&&ed(u),Yi(u,u.return);break;case 12:Ci(l,u,a);break;case 31:Ci(l,u,a),R&&m&4&&A0(l,u);break;case 13:Ci(l,u,a),R&&m&4&&R0(l,u);break;case 22:u.memoizedState===null&&Ci(l,u,a),Yi(u,u.return);break;case 30:Ci(l,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:Ci(l,u,a)}n=n.sibling}}function hd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&To(a))}function pd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e))}function vi(e,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)D0(e,n,a,r),n=n.sibling;else l&&x0(n)}function D0(e,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&_c(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,r),u&2048&&Bo(9,n);break;case 1:vi(e,n,a,r);break;case 3:vi(e,n,a,r),l&&ud&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&To(u)));break;case 12:if(u&2048){vi(e,n,a,r),u=n.stateNode;try{var m=n.memoizedProps,R=m.id,z=m.onPostCommit;typeof z=="function"&&z(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch($){Wt(n,n.return,$)}}else vi(e,n,a,r);break;case 31:vi(e,n,a,r);break;case 13:vi(e,n,a,r);break;case 23:break;case 22:m=n.stateNode,R=n.alternate,n.memoizedState!==null?(l&&R!==null&&R.memoizedState===null&&_c(R),m._visibility&2?vi(e,n,a,r):Go(e,n)):(l&&R!==null&&R.memoizedState!==null&&_c(n),m._visibility&2?vi(e,n,a,r):(m._visibility|=2,Ss(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&hd(R,n);break;case 24:vi(e,n,a,r),u&2048&&pd(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Zi(u.child,!0),Zi(n.child,!0))),vi(e,n,a,r);break;default:vi(e,n,a,r)}}function Ss(e,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,m=n,R=a,z=r,$=m.flags;switch(m.tag){case 0:case 11:case 15:Ss(u,m,R,z,l),Bo(8,m);break;case 23:break;case 22:var fe=m.stateNode;m.memoizedState!==null?fe._visibility&2?Ss(u,m,R,z,l):Go(u,m):(fe._visibility|=2,Ss(u,m,R,z,l)),l&&$&2048&&hd(m.alternate,m);break;case 24:Ss(u,m,R,z,l),l&&$&2048&&pd(m.alternate,m);break;default:Ss(u,m,R,z,l)}n=n.sibling}}function Go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,l=r.flags;switch(r.tag){case 22:Go(a,r),l&2048&&hd(r.alternate,r);break;case 24:Go(a,r),l&2048&&pd(r.alternate,r);break;default:Go(a,r)}n=n.sibling}}var Or=8192;function Pr(e,n,a){if(e.subtreeFlags&Or)for(e=e.child;e!==null;)U0(e,n,a),e=e.sibling}function U0(e,n,a){switch(e.tag){case 26:Pr(e,n,a),e.flags&Or&&(e.memoizedState!==null?xM(a,Ri,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&F_(a,e)));break;case 5:Pr(e,n,a),e.flags&Or&&(e=e.stateNode,(n&335544128)===n&&F_(a,e));break;case 3:case 4:var r=Ri;Ri=Zo(e.stateNode.containerInfo),Pr(e,n,a),Ri=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Or,Or=16777216,Pr(e,n,a),Or=r):Pr(e,n,a));break;case 30:if((e.flags&Or)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(r,l)}Pr(e,n,a);break;default:Pr(e,n,a)}}function L0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,P0(r,e)}L0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)O0(e),e=e.sibling}function O0(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,yc(e)):Vo(e);break;default:Vo(e)}}function yc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,P0(r,e)}L0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),yc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yc(n));break;default:yc(n)}e=e.sibling}}function P0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:To(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var l=r.sibling,u=r.return;if(b0(r),r===a){bn=null;break e}if(l!==null){l.return=u,bn=l;break e}bn=u}}}var py={getCacheForType:function(e){var n=An(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(dn).controller.signal}},my=typeof WeakMap=="function"?WeakMap:Map,zt=0,Kt=null,Et=null,At=0,kt=0,ii=null,Ja=!1,ys=!1,md=!1,Ea=0,ln=0,$a=0,Ir=0,Mc=0,ai=0,Ms=0,Xo=null,Yn=null,gd=!1,Ec=0,I0=0,bc=1/0,Tc=null,er=null,an=0,wi=null,zr=null,$i=0,_d=0,vd=null,z0=null,Es=null,bs=null,Ts=null,ko=0,Ac=null;function ri(){return(zt&2)!==0&&At!==0?At&-At:xe.T!==null?Cd():bl()}function B0(){if(ai===0)if((At&536870912)===0||St){var e=gr;gr<<=1,(gr&3932160)===0&&(gr=262144),ai=e}else ai=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ai}function As(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=v_(ha(e.memoizedProps,a))),bs===null&&(bs=[]),bs.push(n.bind(null,r))}}function jn(e,n,a){(e===Kt&&(kt===2||kt===9)||e.cancelPendingCommit!==null)&&(Rs(e,0),tr(e,At,ai,!1)),Vi(e,a),((zt&2)===0||e!==Kt)&&(e===Kt&&((zt&2)===0&&(Ir|=a),ln===4&&tr(e,At,ai,!1)),ea(e))}function F0(e,n,a){if((zt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ia(e,n),l=r?vy(e,n):Sd(e,n,!0),u=r;do{if(l===0){ys&&!r&&tr(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!gy(a)){l=Sd(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var R=e;l=Xo;var z=R.current.memoizedState.isDehydrated;if(z&&(Rs(R,m).flags|=256),m=Sd(R,m,!1),m!==2&&m!==6){if(md&&!z){R.errorRecoveryDisabledLanes|=u,Ir|=u,l=4;break e}u=Yn,Yn=l,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){Rs(e,0),tr(e,n,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:tr(r,n,ai,!Ja);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Ec+300-ke(),10<l)){if(tr(r,n,ai,!Ja),_r(r,0,!0)!==0)break e;$i=n,r.timeoutHandle=Fd(H0.bind(null,r,a,Yn,Tc,gd,n,ai,Ir,Ms,Ja,u,"Throttled",-0,0),l);break e}H0(r,a,Yn,Tc,gd,n,ai,Ir,Ms,Ja,u,null,-0,0)}}break}while(!0);ea(e)}function H0(e,n,a,r,l,u,m,R,z,$,fe,ye,K,oe){e.timeoutHandle=-1;var Pe=n.subtreeFlags,Qe=(u&335544064)===u;if(ye=null,(Qe||Pe&8192||(Pe&16785408)===16785408)&&(ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ni=null,U0(n,u,ye),Qe&&(Pe=ye,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(Pe.count++,Pe.waitingForViewTransition=!0,Pe=Jo.bind(Pe),Qe.finished.then(Pe,Pe))),Pe=(u&62914560)===u?Ec-ke():(u&4194048)===u?I0-ke():0,Pe=SM(ye,Pe),Pe!==null)){$i=u,e.cancelPendingCommit=Pe(j0.bind(null,e,n,u,a,r,l,m,R,z,$,fe,ye,null,K,oe)),tr(e,u,m,!$);return}j0(e,n,u,a,r,l,m,R,z,$,fe,ye)}function gy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!ei(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(e,n,a,r){n=Gi(e,n),n&=~Mc,n&=~Ir,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var u=31-ut(l),m=1<<u;r[u]=-1,l&=~m}a!==0&&vr(e,a,n)}function Rc(){return(zt&6)===0?(Wo(0),!1):!0}function xd(){if(Et!==null){if(kt===0)var e=Et.return;else e=Et,_a=br=null,Rf(e),hs=null,Co=0,e=Et;for(;e!==null;)c0(e.alternate,e),e=e.return;Et=null}}function Rs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,xd(),Kt=e,Et=a=ma(e.current,null),At=n,kt=0,ii=null,Ja=!1,ys=Ia(e,n),md=!1,Ms=ai=Mc=Ir=$a=ln=0,Yn=Xo=null,gd=!1,Ea=Gi(e,n),Pl(),a}function G0(e,n){ht=null,xe.H=sc,n===ds||n===ql?(n=jm(),kt=3):n===pf?(n=jm(),kt=4):kt=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Et===null&&(ln=1,oc(e,pi(n,e.current)))}function V0(){var e=Rn.current;return e===null?!0:(At&4194048)===At?Ln===null:(At&62914560)===At||(At&536870912)!==0?e===Ln:!1}function X0(){var e=xe.H;return xe.H=sc,e===null?sc:e}function k0(){var e=xe.A;return xe.A=py,e}function Cc(){ln=4,Ja||(At&4194048)!==At&&Rn.current!==null||(ys=!0),($a&134217727)===0&&(Ir&134217727)===0||Kt===null||tr(Kt,At,ai,!1)}function Sd(e,n,a){var r=zt;zt|=2;var l=X0(),u=k0();(Kt!==e||At!==n)&&(Tc=null,Rs(e,n)),n=!1;var m=ln;e:do try{if(kt!==0&&Et!==null){var R=Et,z=ii;switch(kt){case 8:xd(),m=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var $=kt;if(kt=0,ii=null,Cs(e,R,z,$),a&&ys){m=0;break e}break;default:$=kt,kt=0,ii=null,Cs(e,R,z,$)}}_y(),m=ln;break}catch(fe){G0(e,fe)}while(!0);return n&&e.shellSuspendCounter++,_a=br=null,zt=r,xe.H=l,xe.A=u,Et===null&&(Kt=null,At=0,Pl()),m}function _y(){for(;Et!==null;)W0(Et)}function vy(e,n){var a=zt;zt|=2;var r=X0(),l=k0();Kt!==e||At!==n?(Tc=null,bc=ke()+500,Rs(e,n)):ys=Ia(e,n);e:do try{if(kt!==0&&Et!==null){n=Et;var u=ii;t:switch(kt){case 1:kt=0,ii=null,Cs(e,n,u,1);break;case 2:case 9:if(qm(u)){kt=0,ii=null,q0(n);break}n=function(){kt!==2&&kt!==9||Kt!==e||(kt=7),ea(e)},u.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:qm(u)?(kt=0,ii=null,q0(n)):(kt=0,ii=null,Cs(e,n,u,7));break;case 5:var m=null;switch(Et.tag){case 26:m=Et.memoizedState;case 5:case 27:var R=Et;if(m?z_(m):R.stateNode.complete){kt=0,ii=null;var z=R.sibling;if(z!==null)Et=z;else{var $=R.return;$!==null?(Et=$,wc($)):Et=null}break t}}kt=0,ii=null,Cs(e,n,u,5);break;case 6:kt=0,ii=null,Cs(e,n,u,6);break;case 8:xd(),ln=6;break e;default:throw Error(s(462))}}xy();break}catch(fe){G0(e,fe)}while(!0);return _a=br=null,xe.H=r,xe.A=l,zt=a,Et!==null?0:(Kt=null,At=0,Pl(),ln)}function xy(){for(;Et!==null&&!ze();)W0(Et)}function W0(e){var n=o0(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?wc(e):Et=n}function q0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=e0(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=e0(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Rf(n);var r=n;r===Mn&&(St?(Gl(r),r.tag===5&&r.stateNode!=null&&(Jt=r.stateNode)):(Gl(r),St=!0));default:c0(a,n),n=Et=Pm(n,Ea),n=o0(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?wc(e):Et=n}function Cs(e,n,a,r){_a=br=null,Rf(n),hs=null,Co=0;var l=n.return;try{if(sy(e,l,n,a,At)){ln=1,oc(e,pi(a,e.current)),Et=null;return}}catch(u){if(l!==null)throw Et=l,u;ln=1,oc(e,pi(a,e.current)),Et=null;return}n.flags&32768?(St||r===1?e=!0:ys||(At&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Y0(n,e)):wc(n)}function wc(e){var n=e;do{if((n.flags&32768)!==0){Y0(n,Ja);return}e=n.return;var a=uy(n.alternate,n,Ea);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=e}while(n!==null);ln===0&&(ln=5)}function Y0(e,n){do{var a=fy(e.alternate,e);if(a!==null){a.flags&=32767,Et=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Et=e;return}Et=e=a}while(e!==null);ln=6,Et=null}function j0(e,n,a,r,l,u,m,R,z,$,fe,ye){e.cancelPendingCommit=null;do Nc();while(an!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Kt&&(Et=Kt=null,At=0),zr=n,wi=e,$i=a,vd=l,z0=r,Sy(e,n,a,m,R,z,ye)}}function Sy(e,n,a,r,l,u,m){var R=n.lanes|n.childLanes;if(_d=R,R|=ef,El(e,a,R,r,l,u),bs=null,(a&335544064)===a?(Ts=jS(e),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Ay(we,function(){return bd(),null})):(e.callbackNode=null,e.callbackPriority=0),mc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=xe.T,xe.T=null,l=Ce.p,Ce.p=2,u=zt,zt|=4;try{dy(e,n,a)}finally{zt=u,Ce.p=l,xe.T=r}}an=1,mc?Es=qy(m,e.containerInfo,Ts,yd,Md,My,Ed,bd,yy):(yd(),Md(),Ed())}function yy(e){if(an!==0){var n=wi.onRecoverableError;n(e,{componentStack:null})}}function My(){an===3&&(an=0,N0(zr,wi),an=4)}function yd(){if(an===1){an=0;var e=wi,n=zr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=xe.T,xe.T=null;var l=Ce.p;Ce.p=2;var u=zt;zt|=4;try{Ho=vc=!1,C0(n,e,a),a=Id;var m=Tm(e.containerInfo),R=a.focusedElem,z=a.selectionRange;if(m!==R&&R&&R.ownerDocument&&bm(R.ownerDocument.documentElement,R)){if(z!==null&&Zu(R)){var $=z.start,fe=z.end;if(fe===void 0&&(fe=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(fe,R.value.length);else{var ye=R.ownerDocument||document,K=ye&&ye.defaultView||window;if(K.getSelection){var oe=K.getSelection(),Pe=R.textContent.length,Qe=Math.min(z.start,Pe),pt=z.end===void 0?Qe:Math.min(z.end,Pe);!oe.extend&&Qe>pt&&(m=pt,pt=Qe,Qe=m);var J=Em(R,Qe),V=Em(R,pt);if(J&&V&&(oe.rangeCount!==1||oe.anchorNode!==J.node||oe.anchorOffset!==J.offset||oe.focusNode!==V.node||oe.focusOffset!==V.offset)){var ie=ye.createRange();ie.setStart(J.node,J.offset),oe.removeAllRanges(),Qe>pt?(oe.addRange(ie),oe.extend(V.node,V.offset)):(ie.setEnd(V.node,V.offset),oe.addRange(ie))}}}}for(ye=[],oe=R;oe=oe.parentNode;)oe.nodeType===1&&ye.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Is=!!Pd,Id=Pd=null}finally{zt=u,Ce.p=l,xe.T=r}}e.current=n,an=2}}function Md(){if(an===2){an=0;var e=wi,n=zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xe.T,xe.T=null;var r=Ce.p;Ce.p=2;var l=zt;zt|=4;try{M0(e,n.alternate,n)}finally{zt=l,Ce.p=r,xe.T=a}}an=3}}function Ed(){if(an===4||an===3){an=0;var e=Es;Es=null,Ie();var n=wi,a=zr,r=$i,l=z0,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?an=5:(an=0,zr=wi=null,Z0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(er=null),ho(r),a=a.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=xe.T,u=Ce.p,Ce.p=2,xe.T=null;try{for(var m=n.onRecoverableError,R=0;R<l.length;R++){var z=l[R];m(z.value,{componentStack:z.stack})}}finally{xe.T=a,Ce.p=u}}if(l=bs,m=Ts,Ts=null,l!==null&&(bs=null,m===null&&(m=[]),e!==null))for(z=0;z<l.length;z++)a=(0,l[z])(m),a!==void 0&&e.finished.finally(a);($i&3)!==0&&Nc(),ea(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Ac?ko++:(ko=0,Ac=n):(ko=0,Ac=null),Wo(0)}}function Z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,To(n)))}function Nc(){return Es!==null&&(Es.skipTransition(),Es=null),yd(),Md(),Ed(),bd()}function bd(){if(an!==5)return!1;var e=wi,n=_d;_d=0;var a=ho($i),r=xe.T,l=Ce.p;try{Ce.p=32>a?32:a,xe.T=null,a=vd,vd=null;var u=wi,m=$i;if(an=0,zr=wi=null,$i=0,(zt&6)!==0)throw Error(s(331));var R=zt;if(zt|=4,O0(u.current),D0(u,u.current,m,a),zt=R,Wo(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,u)}catch{}return!0}finally{Ce.p=l,xe.T=r,Z0(e,n)}}function K0(e,n,a){n=pi(a,n),n=Gf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(Vi(e,2),ea(e))}function Wt(e,n,a){if(e.tag===3)K0(e,e,a);else for(;n!==null;){if(n.tag===3){K0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){e=pi(a,e),a=qg(2),r=qa(n,a,2),r!==null&&(Yg(a,r,n,e),Vi(r,2),ea(r));break}}n=n.return}}function Td(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new my;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(md=!0,l.add(a),e=Ey.bind(null,e,n,a),n.then(e,e))}function Ey(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Kt===e&&(At&a)===a&&((ln===4||ln===3&&(At&62914560)===At&&300>ke()-Ec)&&(zt&2)===0?Rs(e,0):Mc|=a,Ms===At&&(Ms=0)),ea(e)}function Q0(e,n){n===0&&(n=lo()),e=yr(e,n),e!==null&&(Vi(e,n),ea(e))}function by(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Q0(e,a)}function Ty(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Q0(e,a)}function Ay(e,n){return Ne(e,n)}var ws=null,Ns=null,Ad=!1,Dc=!1,Rd=!1,nr=0;function ea(e){e!==Ns&&e.next===null&&(Ns===null?ws=Ns=e:Ns=Ns.next=e),Dc=!0,Ad||(Ad=!0,Cy())}function Wo(e,n){if(!Rd&&Dc){Rd=!0;do for(var a=!1,r=ws;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var m=r.suspendedLanes,R=r.pingedLanes;u=(1<<31-ut(42|e)+1)-1,u&=l&~(m&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,t_(r,u))}else u=At,u=_r(r,r===Kt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ia(r,u)||(a=!0,t_(r,u));r=r.next}while(a);Rd=!1}}function Ry(){J0()}function J0(){Dc=Ad=!1;var e=0;nr!==0&&Fy()&&(e=nr);for(var n=ke(),a=null,r=ws;r!==null;){var l=r.next,u=$0(r,n);u===0?(r.next=null,a===null?ws=l:a.next=l,l===null&&(Ns=a)):(a=r,(e!==0||(u&3)!==0)&&(Dc=!0)),r=l}an!==0&&an!==5||Wo(e),nr!==0&&(nr=0)}function $0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-ut(u),R=1<<m,z=l[m];z===-1?((R&a)===0||(R&r)!==0)&&(l[m]=oo(R,n)):z<=n&&(e.expiredLanes|=R),u&=~R}if(n=Kt,a=At,a=_r(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(kt===2||kt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ia(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),ho(a)){case 2:case 8:a=q;break;case 32:a=we;break;case 268435456:a=Le;break;default:a=we}return r=e_.bind(null,e),a=Ne(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nc()&&e.callbackNode!==a)return null;var r=At;return r=_r(e,e===Kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(F0(e,r,n),$0(e,ke()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function t_(e,n){if(Nc())return null;F0(e,n,!0)}function Cy(){Gy(function(){(zt&6)!==0?Ne(ct,Ry):J0()})}function Cd(){if(nr===0){var e=Rr;e===0&&(e=Qr,Qr<<=1,(Qr&261888)===0&&(Qr=256)),nr=e}return nr}function n_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(e)}function wy(e,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var u=n_((l[H]||null).action),m=r.submitter;m&&(n=(n=m[H]||null)?n_(n.formAction):m.getAttribute("formAction"),n!==null&&(u=n,m=null));var R=new Dl("action","action",null,r,l);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nr!==0){var z=new FormData(l,m);If(a,{pending:!0,data:z,method:l.method,action:u},null,z)}}else typeof u=="function"&&(R.preventDefault(),z=new FormData(l,m),If(a,{pending:!0,data:z,method:l.method,action:u},u,z))},currentTarget:l}]})}}for(var wd=0;wd<$u.length;wd++){var Nd=$u[wd],Ny=Nd.toLowerCase(),Dy=Nd[0].toUpperCase()+Nd.slice(1);Ti(Ny,"on"+Dy)}Ti(Cm,"onAnimationEnd"),Ti(wm,"onAnimationIteration"),Ti(Nm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(HS,"onTransitionRun"),Ti(GS,"onTransitionStart"),Ti(VS,"onTransitionCancel"),Ti(Dm,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),He("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),He("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),He("onBeforeInput",["compositionend","keypress","textInput","paste"]),He("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function i_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var m=r.length-1;0<=m;m--){var R=r[m],z=R.instance,$=R.currentTarget;if(R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=$;try{u(l)}catch(fe){Ol(fe)}l.currentTarget=null,u=z}else for(m=0;m<r.length;m++){if(R=r[m],z=R.instance,$=R.currentTarget,R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=$;try{u(l)}catch(fe){Ol(fe)}l.currentTarget=null,u=z}}}}function bt(e,n){var a=n[re];a===void 0&&(a=n[re]=new Set);var r=e+"__bubble";a.has(r)||(a_(n,e,2,!1),a.add(r))}function Dd(e,n,a){var r=0;n&&(r|=4),a_(a,e,r,n)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[Uc]){e[Uc]=!0,Ht.forEach(function(a){a!=="selectionchange"&&(Uy.has(a)||Dd(a,!1,e),Dd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Uc]||(n[Uc]=!0,Dd("selectionchange",!1,n))}}function a_(e,n,a,r){switch(Y_(n)){case 2:var l=bM;break;case 8:l=TM;break;default:l=Jd}a=l.bind(null,n,a,e),l=void 0,!Fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Ld(e,n,a,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var R=r.stateNode.containerInfo;if(R===l)break;if(m===4)for(m=r.return;m!==null;){var z=m.tag;if((z===3||z===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;R!==null;){if(m=st(R),m===null)return;if(z=m.tag,z===5||z===6||z===26||z===27){r=u=m;continue e}R=R.parentNode}}r=r.return}am(function(){var $=u,fe=zu(a),ye=[];e:{var K=Um.get(e);if(K!==void 0){var oe=Dl,Pe=e;switch(e){case"keypress":if(wl(a)===0)break e;case"keydown":case"keyup":oe=gS;break;case"focusin":Pe="focus",oe=Xu;break;case"focusout":Pe="blur",oe=Xu;break;case"beforeblur":case"afterblur":oe=Xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=aS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=yS;break;case Cm:case wm:case Nm:oe=oS;break;case Dm:oe=ES;break;case"scroll":case"scrollend":oe=nS;break;case"wheel":oe=TS;break;case"copy":case"cut":case"paste":oe=cS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=cm;break;case"submit":oe=xS;break;case"toggle":case"beforetoggle":oe=RS}var Qe=(n&4)!==0,pt=!Qe&&(e==="scroll"||e==="scrollend"),J=Qe?K!==null?K+"Capture":null:K;Qe=[];for(var V=$,ie;V!==null;){var Se=V;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||J===null||(Se=po(V,J),Se!=null&&Qe.push(Yo(V,Se,ie))),pt)break;V=V.return}0<Qe.length&&(K=new oe(K,Pe,null,a,fe),ye.push({event:K,listeners:Qe}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",oe&&a!==Iu&&(Pe=a.relatedTarget||a.fromElement)&&(st(Pe)||Pe[de]))break e;(K||oe)&&(Pe=fe.window===fe?fe:(oe=fe.ownerDocument)?oe.defaultView||oe.parentWindow:window,K?(oe=a.relatedTarget||a.toElement,K=$,oe=oe?st(oe):null,oe!==null&&(pt=f(oe),Qe=oe.tag,oe!==pt||Qe!==5&&Qe!==27&&Qe!==6)&&(oe=null)):(K=null,oe=$),K!==oe&&(Qe=om,Se="onMouseLeave",J="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=cm,Se="onPointerLeave",J="onPointerEnter",V="pointer"),pt=K==null?Pe:Ye(K),ie=oe==null?Pe:Ye(oe),Pe=new Qe(Se,V+"leave",K,a,fe),Pe.target=pt,Pe.relatedTarget=ie,Se=null,st(fe)===$&&(Qe=new Qe(J,V+"enter",oe,a,fe),Qe.target=ie,Qe.relatedTarget=pt,Se=Qe),pt=Se,Qe=K&&oe?P(K,oe,Ly):null,K!==null&&r_(ye,Pe,K,Qe,!1),oe!==null&&pt!==null&&r_(ye,pt,oe,Qe,!0)))}e:{if(K=$?Ye($):window,oe=K.nodeName&&K.nodeName.toLowerCase(),oe==="select"||oe==="input"&&K.type==="file")var je=_m;else if(mm(K))if(vm)je=zS;else{je=PS;var Rt=OS}else oe=K.nodeName,!oe||oe.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?$&&Pu($.elementType)&&(je=_m):je=IS;if(je&&(je=je(e,$))){gm(ye,je,a,fe);break e}Rt&&Rt(e,K,$)}switch(Rt=$?Ye($):window,e){case"focusin":(mm(Rt)||Rt.contentEditable==="true")&&(as=Rt,Ku=$,Mo=null);break;case"focusout":Mo=Ku=as=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Am(ye,a,fe);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":Am(ye,a,fe)}var et;if(Wu)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else is?hm(e,a)&&(at="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(um&&a.locale!=="ko"&&(is||at!=="onCompositionStart"?at==="onCompositionEnd"&&is&&(et=rm()):(za=fe,Hu="value"in za?za.value:za.textContent,is=!0)),Rt=Lc($,at),0<Rt.length&&(at=new lm(at,e,null,a,fe),ye.push({event:at,listeners:Rt}),et?at.data=et:(et=pm(a),et!==null&&(at.data=et)))),(et=wS?NS(e,a):DS(e,a))&&(at=Lc($,"onBeforeInput"),0<at.length&&(Rt=new lm("onBeforeInput","beforeinput",null,a,fe),ye.push({event:Rt,listeners:at}),Rt.data=et)),wy(ye,e,$,a,fe)}i_(ye,n)})}function Yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Lc(e,n){for(var a=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=po(e,a),l!=null&&r.unshift(Yo(e,l,u)),l=po(e,n),l!=null&&r.push(Yo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function Ly(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,n,a,r,l){for(var u=n._reactName,m=[];a!==null&&a!==r;){var R=a,z=R.alternate,$=R.stateNode;if(R=R.tag,z!==null&&z===r)break;R!==5&&R!==26&&R!==27||$===null||(z=$,l?($=po(a,u),$!=null&&m.unshift(Yo(a,$,z))):l||($=po(a,u),$!=null&&m.push(Yo(a,$,z)))),a=a.return}m.length!==0&&e.push({event:n,listeners:m})}var Oy=/\r\n?/g,Py=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(Py,"")}function o_(e,n){return n=s_(n),s_(e)===n}function qt(e,n,a,r,l,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||es(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&es(e,""+r);else return;break;case"className":$n(e,"class",r);break;case"tabIndex":$n(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,r);break;case"style":nm(e,r,u);return;case"data":if(n!=="object"){$n(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Rl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&qt(e,n,"name",l.name,l,null),qt(e,n,"formEncType",l.formEncType,l,null),qt(e,n,"formMethod",l.formMethod,l,null),qt(e,n,"formTarget",l.formTarget,l,null)):(qt(e,n,"encType",l.encType,l,null),qt(e,n,"method",l.method,l,null),qt(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Rl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ki);return;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Rl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":bt("beforetoggle",e),bt("toggle",e),Qt(e,"popover",r);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Qt(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=eS.get(a)||a,Qt(e,a,r);else return}xt=!0}function Od(e,n,a,r,l,u){switch(a){case"style":nm(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")es(e,r);else if(typeof r=="number"||typeof r=="bigint")es(e,""+r);else return;break;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,l);break e}xt=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Qt(e,a,r)}return}xt=!0}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",e),bt("load",e);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,u,m,a,null)}}l&&qt(e,n,"srcSet",a.srcSet,a,null),r&&qt(e,n,"src",a.src,a,null);return;case"input":bt("invalid",e);var R=u=m=l=null,z=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var fe=a[r];if(fe!=null)switch(r){case"name":l=fe;break;case"type":m=fe;break;case"checked":z=fe;break;case"defaultChecked":$=fe;break;case"value":u=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:qt(e,n,r,fe,a,null)}}Jp(e,u,R,z,$,m,l,!1);return;case"select":bt("invalid",e),r=m=u=null;for(l in a)if(a.hasOwnProperty(l)&&(R=a[l],R!=null))switch(l){case"value":u=R;break;case"defaultValue":m=R;break;case"multiple":r=R;default:qt(e,n,l,R,a,null)}n=u,a=m,e.multiple=!!r,n!=null?$r(e,!!r,n,!1):a!=null&&$r(e,!!r,a,!0);return;case"textarea":bt("invalid",e),u=l=r=null;for(m in a)if(a.hasOwnProperty(m)&&(R=a[m],R!=null))switch(m){case"value":r=R;break;case"defaultValue":l=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qt(e,n,m,R,a,null)}em(e,r,l,u);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qt(e,n,z,r,a,null)}return;case"dialog":bt("beforetoggle",e),bt("toggle",e),bt("cancel",e),bt("close",e);break;case"iframe":case"object":bt("load",e);break;case"video":case"audio":for(r=0;r<qo.length;r++)bt(qo[r],e);break;case"image":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"embed":case"source":case"link":bt("error",e),bt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,$,r,a,null)}return;default:if(Pu(n)){for(fe in a)a.hasOwnProperty(fe)&&(r=a[fe],r!==void 0&&Od(e,n,fe,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&qt(e,n,R,r,a,null))}var Iy={};function zy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,R=null,z=null,$=null,fe=null;for(oe in a){var ye=a[oe];if(a.hasOwnProperty(oe)&&ye!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":z=ye;default:r.hasOwnProperty(oe)||qt(e,n,oe,null,r,ye)}}for(var K in r){var oe=r[K];if(ye=a[K],r.hasOwnProperty(K)&&(oe!=null||ye!=null))switch(K){case"type":oe!==ye&&(xt=!0),u=oe;break;case"name":oe!==ye&&(xt=!0),l=oe;break;case"checked":oe!==ye&&(xt=!0),$=oe;break;case"defaultChecked":oe!==ye&&(xt=!0),fe=oe;break;case"value":oe!==ye&&(xt=!0),m=oe;break;case"defaultValue":oe!==ye&&(xt=!0),R=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:oe!==ye&&qt(e,n,K,oe,r,ye)}}Lu(e,m,R,z,$,fe,u,l);return;case"select":oe=m=R=K=null;for(u in a)if(z=a[u],a.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":oe=z;default:r.hasOwnProperty(u)||qt(e,n,u,null,r,z)}for(l in r)if(u=r[l],z=a[l],r.hasOwnProperty(l)&&(u!=null||z!=null))switch(l){case"value":u!==z&&(xt=!0),K=u;break;case"defaultValue":u!==z&&(xt=!0),R=u;break;case"multiple":u!==z&&(xt=!0),m=u;default:u!==z&&qt(e,n,l,u,r,z)}n=R,a=m,r=oe,K!=null?$r(e,!!a,K,!1):!!r!=!!a&&(n!=null?$r(e,!!a,n,!0):$r(e,!!a,a?[]:"",!1));return;case"textarea":oe=K=null;for(R in a)if(l=a[R],a.hasOwnProperty(R)&&l!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(e,n,R,null,r,l)}for(m in r)if(l=r[m],u=a[m],r.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":l!==u&&(xt=!0),K=l;break;case"defaultValue":l!==u&&(xt=!0),oe=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&qt(e,n,m,l,r,u)}$p(e,K,oe);return;case"option":for(var Pe in a)if(K=a[Pe],a.hasOwnProperty(Pe)&&K!=null&&!r.hasOwnProperty(Pe))switch(Pe){case"selected":e.selected=!1;break;default:qt(e,n,Pe,null,r,K)}for(z in r)if(K=r[z],oe=a[z],r.hasOwnProperty(z)&&K!==oe&&(K!=null||oe!=null))switch(z){case"selected":K!==oe&&(xt=!0),e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:qt(e,n,z,K,r,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)K=a[Qe],a.hasOwnProperty(Qe)&&K!=null&&!r.hasOwnProperty(Qe)&&qt(e,n,Qe,null,r,K);for($ in r)if(K=r[$],oe=a[$],r.hasOwnProperty($)&&K!==oe&&(K!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,n));break;default:qt(e,n,$,K,r,oe)}return;default:if(Pu(n)){for(var pt in a)K=a[pt],a.hasOwnProperty(pt)&&K!==void 0&&!r.hasOwnProperty(pt)&&Od(e,n,pt,void 0,r,K);for(fe in r)K=r[fe],oe=a[fe],!r.hasOwnProperty(fe)||K===oe||K===void 0&&oe===void 0||Od(e,n,fe,K,r,oe);return}}for(var J in a)K=a[J],a.hasOwnProperty(J)&&K!=null&&!r.hasOwnProperty(J)&&qt(e,n,J,null,r,K);for(ye in r)K=r[ye],oe=a[ye],!r.hasOwnProperty(ye)||K===oe||K==null&&oe==null||qt(e,n,ye,K,r,oe)}function l_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function By(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,m=l.initiatorType,R=l.duration;if(u&&R&&l_(m)){for(m=0,R=l.responseEnd,r+=1;r<a.length;r++){var z=a[r],$=z.startTime;if($>R)break;var fe=z.transferSize,ye=z.initiatorType;fe&&l_(ye)&&(z=z.responseEnd,m+=fe*(z<R?1:(R-$)/(z-$)))}if(--r,n+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pd=null,Id=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function f_(e,n,a,r){return a=jo(a).createElement(e),a[A]=r,a[H]=n,Nn(a,e,n),vt(a),a}function zd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bd=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===Bd?!1:(Bd=e,!0):(Bd=null,!1)}var Fd=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,h_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Fd,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(Vy)}:Fd;function Vy(e){setTimeout(function(){throw e})}function ir(e){return e==="head"}function p_(e,n){var a=n,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(l),zs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Yd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Yd(a);for(var u=a.firstChild;u;){var m=u.nextSibling,R=u.nodeName;u[Oe]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&Yd(e.ownerDocument.body);a=l}while(a);zs(n)}function m_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function g_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function __(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Xy(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Hd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return Xy(n,a,e)}function ky(e){return e.documentElement.clientHeight}function Wy(e){this.addEventListener("load",e),this.addEventListener("error",e)}function qy(e,n,a,r,l,u,m,R,z){var $=n.nodeType===9?n:n.ownerDocument;try{var fe=$.startViewTransition({update:function(){var K=$.defaultView,oe=K.navigation&&K.navigation.transition,Pe=$.fonts.status;r();var Qe=[];if(Pe==="loaded"&&(ky($),$.fonts.status==="loading"&&Qe.push($.fonts.ready)),Pe=Qe.length,e!==null)for(var pt=e.suspenseyImages,J=0,V=0;V<pt.length;V++){var ie=pt[V];if(!ie.complete){var Se=ie.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<K.innerHeight&&Se.left<K.innerWidth){if(J+=B_(ie),J>Ic){Qe.length=Pe;break}ie=new Promise(Wy.bind(ie)),Qe.push(ie)}}}if(0<Qe.length)return K=Promise.race([Promise.all(Qe),new Promise(function(je){return setTimeout(je,500)})]).then(l,l),(oe?Promise.allSettled([oe.finished,K]):K).then(u,u);if(l(),oe)return oe.finished.then(u,u);u()},types:a});$.__reactViewTransition=fe;var ye=[];return fe.ready.then(function(){for(var K=$.documentElement.getAnimations({subtree:!0}),oe=0;oe<K.length;oe++){var Pe=K[oe],Qe=Pe.effect,pt=Qe.pseudoElement;if(pt!=null&&pt.startsWith("::view-transition")){ye.push(Pe),Pe=Qe.getKeyframes();for(var J=pt=void 0,V=!0,ie=0;ie<Pe.length;ie++){var Se=Pe[ie],je=Se.width;if(pt===void 0)pt=je;else if(pt!==je){V=!1;break}if(je=Se.height,J===void 0)J=je;else if(J!==je){V=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}V&&pt!==void 0&&J!==void 0&&(Qe.setKeyframes(Pe),V=getComputedStyle(Qe.target,Qe.pseudoElement),V.width!==pt||V.height!==J)&&(V=Pe[0],V.width=pt,V.height=J,V=Pe[Pe.length-1],V.width=pt,V.height=J,Qe.setKeyframes(Pe))}}m()},function(K){$.__reactViewTransition===fe&&($.__reactViewTransition=null);try{if(typeof K=="object"&&K!==null)switch(K.name){case"InvalidStateError":(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null)}K!==null&&z(K)}finally{r(),l(),m()}}),fe.finished.finally(function(){for(var K=0;K<ye.length;K++)ye[K].cancel();$.__reactViewTransition===fe&&($.__reactViewTransition=null),R()}),fe}catch{return r(),l(),m(),null}}function Br(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Br.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Br.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[l])}return r},Br.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function v_(e){return{name:e,group:new Br("group",e),imagePair:new Br("image-pair",e),old:new Br("old",e),new:new Br("new",e)}}function si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(e,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(S_(u,e,n,a)===-1){var m=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(z){m.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(l=m.removeEventListener.bind(m,e,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ds(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:l}),_(this._fragmentFiber.child,!1,Yy,e,R,r)}this._eventListeners=u}};function Yy(e,n,a,r){return y(e).addEventListener(n,a,r),!1}si.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=S_(r,e,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var u=l.cleanup;l=Ds(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,jy,e,a,l),r.splice(n,1),u!==null&&u()}};function jy(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Ds(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function x_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function S_(e,n,a,r){if(e.length===0)return-1;r=x_(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&x_(u.optionsOrUseCapture)===r)return l}return-1}si.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},si.prototype.focus=function(e){_(this._fragmentFiber.child,!0,y_,e,void 0,void 0)};function y_(e,n){return e.tag===6?!1:(e=y(e),sM(e,n))}si.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,Gd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!y_(n[a],e);a--);};function Gd(e,n){return n.push(e),!1}si.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=y(e),e=jo(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,Zy,e,void 0,void 0))};function Zy(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,Ky,e,void 0,void 0)};function Ky(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}si.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,Qy,e,void 0,void 0);for(var a=n=0;a<Ni.length;a++){var r=Ni[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ni[n++]=r}Ni.length=n}};function Qy(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Ni=[],Vd=!1;function Jy(e,n,a){Ni.push({fragmentInstance:e,observer:n,instance:a}),Vd||(Vd=!0,oM(function(){Vd=!1;var r=Ni;Ni=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}si.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,$y,e,void 0,void 0),e};function $y(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}si.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},si.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Gd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var u=M(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(e),R=l.compareDocumentPosition(e),z=m&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&u&&m&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&l===e||z||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||eM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function eM(e,n,a,r,l){var u=st(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=v(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=P(a,u,L),n===null?n=!1:(_(n,!0,X,u,a),u=S,S=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=P(r,u,L),n===null?n=!1:(_(n,!0,C,u,r),u=S,D=S=null,n=u!==null)),n):!1}function M_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Gd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),M_(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),M_(l,a)):y(l).scrollIntoView(e),r+=a?-1:1}};function tM(e,n){return e=y(e),E_(e,n),!1}function E_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function b_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.addEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var m=0,R=0;R<Ni.length;R++){var z=Ni[R];(z.fragmentInstance!==n||z.observer!==u||z.instance!==e)&&(Ni[m++]=z)}Ni.length=m,u.observe(e)}),E_(e,n))}function nM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.removeEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?Jy(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Xd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xd(a),Ke(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function iM(e,n,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function aM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function T_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function kd(e){return e.data==="$?"||e.data==="$~"}function Wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var qd=null;function A_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function R_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function sM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function oM(e){h_(function(){h_(function(n){return e(n)})})}function C_(e,n,a){switch(n=jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function w_(e,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&qt(e,n,r,null,Iy,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ki&&(e.onclick=null),Ke(e)}function Yd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ke(e)}var Si=new Map,N_=new Set;function Zo(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ba=Ce.d;Ce.d={f:lM,r:cM,D:uM,C:fM,L:dM,m:hM,X:mM,S:pM,M:gM};function lM(){var e=ba.f(),n=Rc();return e||n}function cM(e){var n=ft(e);n!==null&&n.tag===5&&n.type==="form"?Ug(n):ba.r(e)}var Us=typeof document>"u"?null:document;function D_(e,n,a){var r=Us;if(r&&typeof n=="string"&&n){var l=di(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),N_.has(l)||(N_.add(l),e={rel:e,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",e),vt(n),r.head.appendChild(n)))}}function uM(e){ba.D(e),D_("dns-prefetch",e,null)}function fM(e,n){ba.C(e,n),D_("preconnect",e,n)}function dM(e,n,a){ba.L(e,n,a);var r=Us;if(r&&e&&n){var l='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+di(a.imageSizes)+'"]')):l+='[href="'+di(e)+'"]';var u=l;switch(n){case"style":u=Ls(e);break;case"script":u=Os(e)}if(!(Si.has(u)||(e=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(u,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Ko(u))||n==="script"&&r.querySelector(Qo(u))))){var m=r.createElement("link");Nn(m,"link",e),n==="style"&&(m[Ze]=!0,m.onload=m.onerror=function(){jt(m)}),vt(m),r.head.appendChild(m)}}}function hM(e,n){ba.m(e,n);var a=Us;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Os(e)}if(!Si.has(u)&&(e=I({rel:"modulepreload",href:e},n),Si.set(u,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qo(u)))return}r=a.createElement("link"),Nn(r,"link",e),vt(r),a.head.appendChild(r)}}}function pM(e,n,a){ba.S(e,n,a);var r=Us;if(r&&e){var l=Mt(r).hoistableStyles,u=Ls(e);n=n||"default";var m=l.get(u);if(!m){var R={loading:0,preload:null};if(m=r.querySelector(Ko(u)))R.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(u))&&jd(e,a);var z=m=r.createElement("link");vt(z),Nn(z,"link",e),z._p=new Promise(function($,fe){z.onload=$,z.onerror=fe}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Oc(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:R},l.set(u,m)}}}function mM(e,n){ba.X(e,n);var a=Us;if(a&&e){var r=Mt(a).hoistableScripts,l=Os(e),u=r.get(l);u||(u=a.querySelector(Qo(l)),u||(e=I({src:e,async:!0},n),(n=Si.get(l))&&Zd(e,n),u=a.createElement("script"),vt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function gM(e,n){ba.M(e,n);var a=Us;if(a&&e){var r=Mt(a).hoistableScripts,l=Os(e),u=r.get(l);u||(u=a.querySelector(Qo(l)),u||(e=I({src:e,async:!0,type:"module"},n),(n=Si.get(l))&&Zd(e,n),u=a.createElement("script"),vt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function U_(e,n,a,r){var l=(l=Ot.current)?Zo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ls(a.href),n=Mt(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ls(a.href);var u=Mt(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(Ko(e)))?u._p||(m.instance=u,m.state.loading=5):(u=Si.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,u)),_M(l,e,u,m.state))),n&&r===null)throw Error(s(528,""));return m}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Os(a),n=Mt(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ls(e){return'href="'+di(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function _M(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ze]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Ze]=!0,n.onload=n.onerror=jt.bind(null,n),Nn(n,"link",a),vt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Os(e){return'[src="'+di(e)+'"]'}function Qo(e){return"script[async]"+e}function O_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+di(a.href)+'"]');if(r)return n.instance=r,vt(r),r;var l=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),Nn(r,"style",l),Oc(r,a.precedence,e),n.instance=r;case"stylesheet":l=Ls(a.href);var u=e.querySelector(Ko(l));if(u)return n.state.loading|=4,n.instance=u,vt(u),u;r=L_(a),(l=Si.get(l))&&jd(r,l),u=(e.ownerDocument||e).createElement("link"),vt(u);var m=u;return m._p=new Promise(function(R,z){m.onload=R,m.onerror=z}),Nn(u,"link",r),n.state.loading|=4,Oc(u,a.precedence,e),n.instance=u;case"script":return u=Os(a.src),(l=e.querySelector(Qo(u)))?(n.instance=l,vt(l),l):(r=a,(l=Si.get(u))&&(r=I({},a),Zd(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),vt(l),Nn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Oc(r,a.precedence,e));return n.instance}function Oc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,m=0;m<r.length;m++){var R=r[m];if(R.dataset.precedence===n)u=R;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pc=null;function P_(e,n,a){if(Pc===null){var r=new Map,l=Pc=new Map;l.set(a,r)}else l=Pc,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Oe]||u[A]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(n)||"";m=e+m;var R=r.get(m);R?R.push(u):r.set(m,[u])}}return r}function Kd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function I_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function z_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function F_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=B_(n),e.suspenseyImages.push(n)),e=yM.bind(e),n.decode().then(e,e))}function xM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ls(r.href),u=n.querySelector(Ko(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,vt(u);return}u=n.ownerDocument||n,r=L_(r),(l=Si.get(l))&&jd(r,l),u=u.createElement("link"),vt(u);var m=u;m._p=new Promise(function(R,z){m.onload=R,m.onerror=z}),Nn(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ic=0;function SM(e,n){return e.stylesheets&&e.count===0&&Bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Ic===0&&(Ic=62500*By());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ic?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function H_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Bc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Jo(){this.count--,H_(this)}function yM(){this.imgCount--,H_(this)}var zc=null;function Bc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zc=new Map,n.forEach(MM,e),zc=null,Jo.call(e))}function MM(e,n){if(!(n.state.loading&4)){var a=zc.get(e);if(a)var r=a.get(null);else{a=new Map,zc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),r=m)}r&&a.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),u=a.get(m)||r,u===r&&a.set(null,l),a.set(m,l),this.count++,r=Jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Ps={$$typeof:ee,Provider:null,Consumer:null,_currentValue:Vt,_currentValue2:Vt,_threadCount:0};function EM(e,n,a,r,l,u,m,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.hiddenUpdates=Jr(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function G_(e,n,a,r,l,u,m,R,z,$,fe,ye){return e=new EM(e,n,a,m,z,$,fe,ye,R),n=1,u===!0&&(n|=24),u=kn(3,null,null,n),e.current=u,u.stateNode=e,n=ff(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},mf(u),e}function V_(e){return e?(e=os,e):os}function X_(e,n,a,r,l,u){l=V_(l),r.context===null?r.context=l:r.pendingContext=l,r=Wa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=qa(e,r,n),a!==null&&(jn(a,e,n),wo(a,e,n))}function k_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Qd(e,n){k_(e,n),(e=e.alternate)&&k_(e,n)}function W_(e){if(e.tag===13||e.tag===31){var n=yr(e,67108864);n!==null&&jn(n,e,67108864),Qd(e,67108864)}}function q_(e){if(e.tag===13||e.tag===31){var n=ri();n=fo(n);var a=yr(e,n);a!==null&&jn(a,e,n),Qd(e,n)}}var Is=!0;function bM(e,n,a,r){var l=xe.T;xe.T=null;var u=Ce.p;try{Ce.p=2,Jd(e,n,a,r)}finally{Ce.p=u,xe.T=l}}function TM(e,n,a,r){var l=xe.T;xe.T=null;var u=Ce.p;try{Ce.p=8,Jd(e,n,a,r)}finally{Ce.p=u,xe.T=l}}function Jd(e,n,a,r){if(Is){var l=$d(r);if(l===null)Ld(e,n,r,Fc,a),j_(e,r);else if(RM(l,e,n,a,r))r.stopPropagation();else if(j_(e,r),n&4&&-1<AM.indexOf(e)){for(;l!==null;){var u=ft(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ua(u.pendingLanes);if(m!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;m;){var z=1<<31-ut(m);R.entanglements[1]|=z,m&=~z}ea(u),(zt&6)===0&&(bc=ke()+500,Wo(0))}}break;case 31:case 13:R=yr(u,2),R!==null&&jn(R,u,2),Rc(),Qd(u,2)}if(u=$d(r),u===null&&Ld(e,n,r,Fc,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else Ld(e,n,r,null,a)}}function $d(e){return e=zu(e),eh(e)}var Fc=null;function eh(e){if(Fc=null,e=st(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fc=e,null}function Y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case ct:return 2;case q:return 8;case we:case Me:return 32;case Le:return 268435456;default:return 32}default:return 32}}var th=!1,ar=null,rr=null,sr=null,$o=new Map,el=new Map,or=[],AM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function tl(e,n,a,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=ft(n),n!==null&&W_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function RM(e,n,a,r,l){switch(n){case"focusin":return ar=tl(ar,e,n,a,r,l),!0;case"dragenter":return rr=tl(rr,e,n,a,r,l),!0;case"mouseover":return sr=tl(sr,e,n,a,r,l),!0;case"pointerover":var u=l.pointerId;return $o.set(u,tl($o.get(u)||null,e,n,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,el.set(u,tl(el.get(u)||null,e,n,a,r,l)),!0}return!1}function Z_(e){var n=st(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Tl(e.priority,function(){q_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Tl(e.priority,function(){q_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=$d(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Iu=r,a.target.dispatchEvent(r),Iu=null}else return n=ft(a),n!==null&&W_(n),e.blockedOn=a,!1;n.shift()}return!0}function K_(e,n,a){Hc(e)&&a.delete(n)}function CM(){th=!1,ar!==null&&Hc(ar)&&(ar=null),rr!==null&&Hc(rr)&&(rr=null),sr!==null&&Hc(sr)&&(sr=null),$o.forEach(K_),el.forEach(K_)}function Gc(e,n){e.blockedOn===n&&(e.blockedOn=null,th||(th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,CM)))}var Vc=null;function Q_(e){Vc!==e&&(Vc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vc===e&&(Vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(eh(r||a)===null)continue;break}var u=ft(a);u!==null&&(e.splice(n,3),n-=3,If(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function zs(e){function n(z){return Gc(z,e)}ar!==null&&Gc(ar,e),rr!==null&&Gc(rr,e),sr!==null&&Gc(sr,e),$o.forEach(n),el.forEach(n);for(var a=0;a<or.length;a++){var r=or[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<or.length&&(a=or[0],a.blockedOn===null);)Z_(a),a.blockedOn===null&&or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],m=l[H]||null;if(typeof u=="function")m||Q_(a);else if(m){var R=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[H]||null)R=m.formAction;else if(eh(l)!==null)continue}else R=m.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Q_(a)}}}function J_(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function nh(e){this._internalRoot=e}Xc.prototype.render=nh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ri();X_(a,r,e,n,null,null)},Xc.prototype.unmount=nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;X_(e.current,2,null,e,null,null),Rc(),n[de]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=bl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<or.length&&n!==0&&n<or[a].priority;a++);or.splice(a,0,e),a===0&&Z_(e)}};var $_=t.version;if($_!=="19.3.1")throw Error(s(527,$_,"19.3.1"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var wM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xe,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{Je=kc.inject(wM),Ve=kc}catch{}}return il.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",l=Vg,u=Xg,m=kg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=G_(e,1,!1,null,null,a,r,null,l,u,m,J_),e[de]=n.current,Ud(e),new nh(n)},il.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,l="",u=Vg,m=Xg,R=kg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=G_(e,1,!0,n,a??null,r,l,z,u,m,R,J_),n.context=V_(null),a=n.current,r=ri(),r=fo(r),l=Wa(r),l.callback=null,qa(a,l,r),a=r,n.current.lanes=a,Vi(n,a),ea(n),e[de]=n.current,Ud(e),new Xc(n)},il.version="19.3.1",il}var cv;function FM(){if(cv)return rh.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rh.exports=BM(),rh.exports}var HM=FM();const GM=dx(HM);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="186",VM=0,uv=1,XM=2,mu=1,kM=2,fl=3,qr=0,Kn=1,aa=2,Na=0,hl=1,fv=2,dv=3,hv=4,WM=5,Js=100,qM=101,YM=102,jM=103,ZM=104,KM=200,QM=201,JM=202,$M=203,px=204,mx=205,eE=206,tE=207,nE=208,iE=209,aE=210,rE=211,sE=212,oE=213,lE=214,kh=0,Wh=1,qh=2,pl=3,Yh=4,jh=5,Zh=6,Kh=7,gx=0,cE=1,uE=2,oa=0,_x=1,vx=2,xx=3,Sx=4,yx=5,Mx=6,Ex=7,bx=300,Yr=301,no=302,ch=303,uh=304,Ru=306,Qh=1e3,Pi=1001,Jh=1002,Un=1003,fE=1004,Wc=1005,In=1006,fh=1007,kr=1008,bi=1009,Tx=1010,Ax=1011,ml=1012,Op=1013,la=1014,ra=1015,ca=1016,Pp=1017,Ip=1018,gl=1020,Rx=35902,Cx=35899,wx=1021,Nx=1022,Ii=1023,La=1026,Wr=1027,Dx=1028,zp=1029,jr=1030,Bp=1031,Fp=1033,gu=33776,_u=33777,vu=33778,xu=33779,$h=35840,ep=35841,tp=35842,np=35843,ip=36196,ap=37492,rp=37496,sp=37488,op=37489,yu=37490,lp=37491,cp=37808,up=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,Sp=37819,yp=37820,Mp=37821,Ep=36492,bp=36494,Tp=36495,Ap=36283,Rp=36284,Mu=36285,Cp=36286,dE=3200,pv=0,hE=1,mr="",Mi="srgb",Eu="srgb-linear",bu="linear",Yt="srgb",dh=7680,pE=519,mE=512,gE=513,_E=514,Hp=515,vE=516,xE=517,Gp=518,SE=519,yE=35044,mv="300 es",sa=2e3,Tu=2001;function ME(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function _l(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function EE(){const o=_l("canvas");return o.style.display="block",o}const gv={};function _v(...o){const t="THREE."+o.shift();console.log(t,...o)}function Ux(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ot(...o){o=Ux(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Pt(...o){o=Ux(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function eo(...o){const t=o.join(" ");t in gv||(gv[t]=!0,ot(...o))}function bE(o,t,i){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const TE={[kh]:Wh,[qh]:Zh,[Yh]:Kh,[pl]:jh,[Wh]:kh,[Zh]:qh,[Kh]:Yh,[jh]:pl};class Kr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const c=s[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,wp=180/Math.PI;function Sl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Dt(o,t,i){return Math.max(t,Math.min(i,o))}function AE(o,t){return(o%t+t)%t}function ph(o,t,i){return(1-i)*o+i*t}function al(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qp=class qp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*c+t.x,this.y=f*c+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qp.prototype.isVector2=!0;let Ft=qp;class ro{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,f,d,h){let g=s[c+0],p=s[c+1],x=s[c+2],_=s[c+3],v=f[d+0],M=f[d+1],T=f[d+2],U=f[d+3];if(_!==U||g!==v||p!==M||x!==T){let y=g*v+p*M+x*T+_*U;y<0&&(v=-v,M=-M,T=-T,U=-U,y=-y);let S=1-h;if(y<.9995){const D=Math.acos(y),X=Math.sin(D);S=Math.sin(S*D)/X,h=Math.sin(h*D)/X,g=g*S+v*h,p=p*S+M*h,x=x*S+T*h,_=_*S+U*h}else{g=g*S+v*h,p=p*S+M*h,x=x*S+T*h,_=_*S+U*h;const D=1/Math.sqrt(g*g+p*p+x*x+_*_);g*=D,p*=D,x*=D,_*=D}}t[i]=g,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,c,f,d){const h=s[c],g=s[c+1],p=s[c+2],x=s[c+3],_=f[d],v=f[d+1],M=f[d+2],T=f[d+3];return t[i]=h*T+x*_+g*M-p*v,t[i+1]=g*T+x*v+p*_-h*M,t[i+2]=p*T+x*M+h*v-g*_,t[i+3]=x*T-h*_-g*v-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,g=Math.sin,p=h(s/2),x=h(c/2),_=h(f/2),v=g(s/2),M=g(c/2),T=g(f/2);switch(d){case"XYZ":this._x=v*x*_+p*M*T,this._y=p*M*_-v*x*T,this._z=p*x*T+v*M*_,this._w=p*x*_-v*M*T;break;case"YXZ":this._x=v*x*_+p*M*T,this._y=p*M*_-v*x*T,this._z=p*x*T-v*M*_,this._w=p*x*_+v*M*T;break;case"ZXY":this._x=v*x*_-p*M*T,this._y=p*M*_+v*x*T,this._z=p*x*T+v*M*_,this._w=p*x*_-v*M*T;break;case"ZYX":this._x=v*x*_-p*M*T,this._y=p*M*_+v*x*T,this._z=p*x*T-v*M*_,this._w=p*x*_+v*M*T;break;case"YZX":this._x=v*x*_+p*M*T,this._y=p*M*_+v*x*T,this._z=p*x*T-v*M*_,this._w=p*x*_-v*M*T;break;case"XZY":this._x=v*x*_-p*M*T,this._y=p*M*_-v*x*T,this._z=p*x*T+v*M*_,this._w=p*x*_+v*M*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],f=i[8],d=i[1],h=i[5],g=i[9],p=i[2],x=i[6],_=i[10],v=s+h+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(x-g)*M,this._y=(f-p)*M,this._z=(d-c)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(x-g)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(f-p)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(g+x)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(d-c)/M,this._x=(f+p)/M,this._y=(g+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,f=t._z,d=t._w,h=i._x,g=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+c*p-f*g,this._y=c*x+d*g+f*h-s*p,this._z=f*x+d*p+s*g-c*h,this._w=d*x-s*h-c*g-f*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,c=-c,f=-f,d=-d,h=-h);let g=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);g=Math.sin(g*p)/x,i=Math.sin(i*p)/x,this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yp=class Yp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,f=t.x,d=t.y,h=t.z,g=t.w,p=2*(d*c-h*s),x=2*(h*i-f*c),_=2*(f*s-d*i);return this.x=i+g*p+d*_-h*x,this.y=s+g*x+h*p-f*_,this.z=c+g*_+f*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,f=t.z,d=i.x,h=i.y,g=i.z;return this.x=c*g-f*h,this.y=f*d-s*g,this.z=s*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return mh.copy(this).projectOnVector(t),this.sub(mh)}reflect(t){return this.sub(mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yp.prototype.isVector3=!0;let pe=Yp;const mh=new pe,vv=new ro,jp=class jp{constructor(t,i,s,c,f,d,h,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,g,p)}set(t,i,s,c,f,d,h,g,p){const x=this.elements;return x[0]=t,x[1]=c,x[2]=h,x[3]=i,x[4]=f,x[5]=g,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[3],g=s[6],p=s[1],x=s[4],_=s[7],v=s[2],M=s[5],T=s[8],U=c[0],y=c[3],S=c[6],D=c[1],X=c[4],C=c[7],L=c[2],P=c[5],I=c[8];return f[0]=d*U+h*D+g*L,f[3]=d*y+h*X+g*P,f[6]=d*S+h*C+g*I,f[1]=p*U+x*D+_*L,f[4]=p*y+x*X+_*P,f[7]=p*S+x*C+_*I,f[2]=v*U+M*D+T*L,f[5]=v*y+M*X+T*P,f[8]=v*S+M*C+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-s*f*x+s*h*g+c*f*p-c*d*g}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],p=t[7],x=t[8],_=x*d-h*p,v=h*g-x*f,M=p*f-d*g,T=i*_+s*v+c*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/T;return t[0]=_*U,t[1]=(c*p-x*s)*U,t[2]=(h*s-c*d)*U,t[3]=v*U,t[4]=(x*i-c*g)*U,t[5]=(c*f-h*i)*U,t[6]=M*U,t[7]=(s*g-p*i)*U,t[8]=(d*i-s*f)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,f,d,h){const g=Math.cos(f),p=Math.sin(f);return this.set(s*g,s*p,-s*(g*d+p*h)+d+t,-c*p,c*g,-c*(-p*d+g*h)+h+i,0,0,1),this}scale(t,i){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gh.makeScale(t,i)),this}rotate(t){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gh.makeRotation(-t)),this}translate(t,i){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jp.prototype.isMatrix3=!0;let dt=jp;const gh=new dt,xv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RE(){const o={enabled:!0,workingColorSpace:Eu,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Yt&&(c.r=Da(c.r),c.g=Da(c.g),c.b=Da(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Yt&&(c.r=to(c.r),c.g=to(c.g),c.b=to(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===mr?bu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Eu]:{primaries:t,whitePoint:s,transfer:bu,toXYZ:xv,fromXYZ:Sv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Yt,toXYZ:xv,fromXYZ:Sv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Nt=RE();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function to(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class CE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Bs===void 0&&(Bs=_l("canvas")),Bs.width=t.width,Bs.height=t.height;const c=Bs.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),s=Bs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=_l("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Da(f[d]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wE=0;class Vp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(_h(c[d].image)):f.push(_h(c[d]))}else f=_h(c);s.url=f}return i||(t.images[this.uuid]=s),s}}function _h(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?CE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let NE=0;const vh=new pe;class zn extends Kr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Pi,c=Pi,f=In,d=kr,h=Ii,g=bi,p=zn.DEFAULT_ANISOTROPY,x=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Sl(),this.name="",this.source=new Vp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qh:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qh:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=bx;zn.DEFAULT_ANISOTROPY=1;const Zp=class Zp{constructor(t=0,i=0,s=0,c=1){this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,f;const g=t.elements,p=g[0],x=g[4],_=g[8],v=g[1],M=g[5],T=g[9],U=g[2],y=g[6],S=g[10];if(Math.abs(x-v)<.01&&Math.abs(_-U)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(_+U)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const X=(p+1)/2,C=(M+1)/2,L=(S+1)/2,P=(x+v)/4,I=(_+U)/4,E=(T+y)/4;return X>C&&X>L?X<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(X),c=P/s,f=I/s):C>L?C<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(C),s=P/c,f=E/c):L<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(L),s=I/f,c=E/f),this.set(s,c,f,i),this}let D=Math.sqrt((y-T)*(y-T)+(_-U)*(_-U)+(v-x)*(v-x));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(_-U)/D,this.z=(v-x)/D,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this.w=Dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this.w=Dt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zp.prototype.isVector4=!0;let cn=Zp;class DE extends Kr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:s.depth},f=new zn(c),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new Vp(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends DE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Lx extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class UE extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Au=class Au{constructor(t,i,s,c,f,d,h,g,p,x,_,v,M,T,U,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,g,p,x,_,v,M,T,U,y)}set(t,i,s,c,f,d,h,g,p,x,_,v,M,T,U,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=c,S[1]=f,S[5]=d,S[9]=h,S[13]=g,S[2]=p,S[6]=x,S[10]=_,S[14]=v,S[3]=M,S[7]=T,S[11]=U,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Au().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,c=1/Fs.setFromMatrixColumn(t,0).length(),f=1/Fs.setFromMatrixColumn(t,1).length(),d=1/Fs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,f=t.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(c),p=Math.sin(c),x=Math.cos(f),_=Math.sin(f);if(t.order==="XYZ"){const v=d*x,M=d*_,T=h*x,U=h*_;i[0]=g*x,i[4]=-g*_,i[8]=p,i[1]=M+T*p,i[5]=v-U*p,i[9]=-h*g,i[2]=U-v*p,i[6]=T+M*p,i[10]=d*g}else if(t.order==="YXZ"){const v=g*x,M=g*_,T=p*x,U=p*_;i[0]=v+U*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=M*h-T,i[6]=U+v*h,i[10]=d*g}else if(t.order==="ZXY"){const v=g*x,M=g*_,T=p*x,U=p*_;i[0]=v-U*h,i[4]=-d*_,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*x,i[9]=U-v*h,i[2]=-d*p,i[6]=h,i[10]=d*g}else if(t.order==="ZYX"){const v=d*x,M=d*_,T=h*x,U=h*_;i[0]=g*x,i[4]=T*p-M,i[8]=v*p+U,i[1]=g*_,i[5]=U*p+v,i[9]=M*p-T,i[2]=-p,i[6]=h*g,i[10]=d*g}else if(t.order==="YZX"){const v=d*g,M=d*p,T=h*g,U=h*p;i[0]=g*x,i[4]=U-v*_,i[8]=T*_+M,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*_+T,i[10]=v-U*_}else if(t.order==="XZY"){const v=d*g,M=d*p,T=h*g,U=h*p;i[0]=g*x,i[4]=-_,i[8]=p*x,i[1]=v*_+U,i[5]=d*x,i[9]=M*_-T,i[2]=T*_-M,i[6]=h*x,i[10]=U*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LE,t,OE)}lookAt(t,i,s){const c=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),cr.crossVectors(s,oi),cr.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),cr.crossVectors(s,oi)),cr.normalize(),qc.crossVectors(oi,cr),c[0]=cr.x,c[4]=qc.x,c[8]=oi.x,c[1]=cr.y,c[5]=qc.y,c[9]=oi.y,c[2]=cr.z,c[6]=qc.z,c[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[4],g=s[8],p=s[12],x=s[1],_=s[5],v=s[9],M=s[13],T=s[2],U=s[6],y=s[10],S=s[14],D=s[3],X=s[7],C=s[11],L=s[15],P=c[0],I=c[4],E=c[8],N=c[12],F=c[1],G=c[5],Q=c[9],te=c[13],j=c[2],ee=c[6],k=c[10],W=c[14],ce=c[3],ae=c[7],ue=c[11],ge=c[15];return f[0]=d*P+h*F+g*j+p*ce,f[4]=d*I+h*G+g*ee+p*ae,f[8]=d*E+h*Q+g*k+p*ue,f[12]=d*N+h*te+g*W+p*ge,f[1]=x*P+_*F+v*j+M*ce,f[5]=x*I+_*G+v*ee+M*ae,f[9]=x*E+_*Q+v*k+M*ue,f[13]=x*N+_*te+v*W+M*ge,f[2]=T*P+U*F+y*j+S*ce,f[6]=T*I+U*G+y*ee+S*ae,f[10]=T*E+U*Q+y*k+S*ue,f[14]=T*N+U*te+y*W+S*ge,f[3]=D*P+X*F+C*j+L*ce,f[7]=D*I+X*G+C*ee+L*ae,f[11]=D*E+X*Q+C*k+L*ue,f[15]=D*N+X*te+C*W+L*ge,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[12],d=t[1],h=t[5],g=t[9],p=t[13],x=t[2],_=t[6],v=t[10],M=t[14],T=t[3],U=t[7],y=t[11],S=t[15],D=g*M-p*v,X=h*M-p*_,C=h*v-g*_,L=d*M-p*x,P=d*v-g*x,I=d*_-h*x;return i*(U*D-y*X+S*C)-s*(T*D-y*L+S*P)+c*(T*X-U*L+S*I)-f*(T*C-U*P+y*I)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[1],d=t[5],h=t[9],g=t[2],p=t[6],x=t[10];return i*(d*x-h*p)-s*(f*x-h*g)+c*(f*p-d*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],p=t[7],x=t[8],_=t[9],v=t[10],M=t[11],T=t[12],U=t[13],y=t[14],S=t[15],D=i*h-s*d,X=i*g-c*d,C=i*p-f*d,L=s*g-c*h,P=s*p-f*h,I=c*p-f*g,E=x*U-_*T,N=x*y-v*T,F=x*S-M*T,G=_*y-v*U,Q=_*S-M*U,te=v*S-M*y,j=D*te-X*Q+C*G+L*F-P*N+I*E;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/j;return t[0]=(h*te-g*Q+p*G)*ee,t[1]=(c*Q-s*te-f*G)*ee,t[2]=(U*I-y*P+S*L)*ee,t[3]=(v*P-_*I-M*L)*ee,t[4]=(g*F-d*te-p*N)*ee,t[5]=(i*te-c*F+f*N)*ee,t[6]=(y*C-T*I-S*X)*ee,t[7]=(x*I-v*C+M*X)*ee,t[8]=(d*Q-h*F+p*E)*ee,t[9]=(s*F-i*Q-f*E)*ee,t[10]=(T*P-U*C+S*D)*ee,t[11]=(_*C-x*P-M*D)*ee,t[12]=(h*N-d*G-g*E)*ee,t[13]=(i*G-s*N+c*E)*ee,t[14]=(U*X-T*L-y*D)*ee,t[15]=(x*L-_*X+v*D)*ee,this}scale(t){const i=this.elements,s=t.x,c=t.y,f=t.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,d=t.x,h=t.y,g=t.z,p=f*d,x=f*h;return this.set(p*d+s,p*h-c*g,p*g+c*h,0,p*h+c*g,x*h+s,x*g-c*d,0,p*g-c*h,x*g+c*d,f*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,f,d){return this.set(1,s,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,f=i._x,d=i._y,h=i._z,g=i._w,p=f+f,x=d+d,_=h+h,v=f*p,M=f*x,T=f*_,U=d*x,y=d*_,S=h*_,D=g*p,X=g*x,C=g*_,L=s.x,P=s.y,I=s.z;return c[0]=(1-(U+S))*L,c[1]=(M+C)*L,c[2]=(T-X)*L,c[3]=0,c[4]=(M-C)*P,c[5]=(1-(v+S))*P,c[6]=(y+D)*P,c[7]=0,c[8]=(T+X)*I,c[9]=(y-D)*I,c[10]=(1-(v+U))*I,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Fs.set(c[0],c[1],c[2]).length();const h=Fs.set(c[4],c[5],c[6]).length(),g=Fs.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Di.copy(this);const p=1/d,x=1/h,_=1/g;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,i.setFromRotationMatrix(Di),s.x=d,s.y=h,s.z=g,this}makePerspective(t,i,s,c,f,d,h=sa,g=!1){const p=this.elements,x=2*f/(i-t),_=2*f/(s-c),v=(i+t)/(i-t),M=(s+c)/(s-c);let T,U;if(g)T=f/(d-f),U=d*f/(d-f);else if(h===sa)T=-(d+f)/(d-f),U=-2*d*f/(d-f);else if(h===Tu)T=-d/(d-f),U=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,c,f,d,h=sa,g=!1){const p=this.elements,x=2/(i-t),_=2/(s-c),v=-(i+t)/(i-t),M=-(s+c)/(s-c);let T,U;if(g)T=1/(d-f),U=d/(d-f);else if(h===sa)T=-2/(d-f),U=-(d+f)/(d-f);else if(h===Tu)T=-1/(d-f),U=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Au.prototype.isMatrix4=!0;let _n=Au;const Fs=new pe,Di=new _n,LE=new pe(0,0,0),OE=new pe(1,1,1),cr=new pe,qc=new pe,oi=new pe,yv=new _n,Mv=new ro;class Zr{constructor(t=0,i=0,s=0,c=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],g=c[1],p=c[5],x=c[9],_=c[2],v=c[6],M=c[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Dt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return yv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Mv.setFromEuler(this),this.setFromQuaternion(Mv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class Ox{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let PE=0;const Ev=new pe,Hs=new ro,Ta=new _n,Yc=new pe,rl=new pe,IE=new pe,zE=new ro,bv=new pe(1,0,0),Tv=new pe(0,1,0),Av=new pe(0,0,1),Rv={type:"added"},BE={type:"removed"},Gs={type:"childadded",child:null},xh={type:"childremoved",child:null};class ci extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new pe,i=new Zr,s=new ro,c=new pe(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new _n},normalMatrix:{value:new dt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(bv,t)}rotateY(t){return this.rotateOnAxis(Tv,t)}rotateZ(t){return this.rotateOnAxis(Av,t)}translateOnAxis(t,i){return Ev.copy(t).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bv,t)}translateY(t){return this.translateOnAxis(Tv,t)}translateZ(t){return this.translateOnAxis(Av,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Yc.copy(t):Yc.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(rl,Yc,this.up):Ta.lookAt(Yc,rl,this.up),this.quaternion.setFromRotationMatrix(Ta),c&&(Ta.extractRotation(c.matrixWorld),Hs.setFromRotationMatrix(Ta),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rv),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(BE),xh.child=t,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rv),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,t,IE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,zE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*c,f[13]+=s-f[1]*i-f[5]*s-f[9]*c,f[14]+=c-f[2]*i-f[6]*s-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let p=0,x=g.length;p<x;p++){const _=g[p];f(t.shapes,_)}else f(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,p=this.material.length;g<p;g++)h.push(f(t.materials,this.material[g]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];c.animations.push(f(t.animations,g))}}if(i){const h=d(t.geometries),g=d(t.materials),p=d(t.textures),x=d(t.images),_=d(t.shapes),v=d(t.skeletons),M=d(t.animations),T=d(t.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=c,s;function d(h){const g=[];for(const p in h){const x=h[p];delete x.metadata,g.push(x)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ci.DEFAULT_UP=new pe(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jc extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FE={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,f=null,d=null;const h=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const U of t.hand.values()){const y=i.getJointPose(U,s),S=this._getHandJoint(p,U);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=x.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&v>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return h!==null&&(h.visible=c!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new jc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function yh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,c=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,c),this}setHSL(t,i,s,c=Nt.workingColorSpace){if(t=AE(t,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=yh(d,f,t+1/3),this.g=yh(d,f,t),this.b=yh(d,f,t-1/3)}return Nt.colorSpaceToWorking(this,c),this}setStyle(t,i=Mi){function s(f){f!==void 0&&parseFloat(f)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=Px[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Nt.workingToColorSpace(Pn.copy(this),t),Math.round(Dt(Pn.r*255,0,255))*65536+Math.round(Dt(Pn.g*255,0,255))*256+Math.round(Dt(Pn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let g,p;const x=(h+d)/2;if(h===d)g=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case s:g=(c-f)/_+(c<f?6:0);break;case c:g=(f-s)/_+2;break;case f:g=(s-c)/_+4;break}g/=6}return t.h=g,t.s=p,t.l=x,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Mi){Nt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,c=Pn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Zc);const s=ph(ur.h,Zc.h,i),c=ph(ur.s,Zc.s,i),f=ph(ur.l,Zc.l,i);return this.setHSL(s,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Bt;Bt.NAMES=Px;class HE extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new pe,Aa=new pe,Mh=new pe,Ra=new pe,Vs=new pe,Xs=new pe,Cv=new pe,Eh=new pe,bh=new pe,Th=new pe,Ah=new cn,Rh=new cn,Ch=new cn;class Oi{constructor(t=new pe,i=new pe,s=new pe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),Ui.subVectors(t,i),c.cross(Ui);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,s,c,f){Ui.subVectors(c,i),Aa.subVectors(s,i),Mh.subVectors(t,i);const d=Ui.dot(Ui),h=Ui.dot(Aa),g=Ui.dot(Mh),p=Aa.dot(Aa),x=Aa.dot(Mh),_=d*p-h*h;if(_===0)return f.set(0,0,0),null;const v=1/_,M=(p*g-h*x)*v,T=(d*x-h*g)*v;return f.set(1-M-T,T,M)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,i,s,c,f,d,h,g){return this.getBarycoord(t,i,s,c,Ra)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Ra.x),g.addScaledVector(d,Ra.y),g.addScaledVector(h,Ra.z),g)}static getInterpolatedAttribute(t,i,s,c,f,d){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(t,i),Rh.fromBufferAttribute(t,s),Ch.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Ah,f.x),d.addScaledVector(Rh,f.y),d.addScaledVector(Ch,f.z),d}static isFrontFacing(t,i,s,c){return Ui.subVectors(s,i),Aa.subVectors(t,i),Ui.cross(Aa).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ui.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,f){return Oi.getInterpolation(t,this.a,this.b,this.c,i,s,c,f)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,f=this.c;let d,h;Vs.subVectors(c,s),Xs.subVectors(f,s),Eh.subVectors(t,s);const g=Vs.dot(Eh),p=Xs.dot(Eh);if(g<=0&&p<=0)return i.copy(s);bh.subVectors(t,c);const x=Vs.dot(bh),_=Xs.dot(bh);if(x>=0&&_<=x)return i.copy(c);const v=g*_-x*p;if(v<=0&&g>=0&&x<=0)return d=g/(g-x),i.copy(s).addScaledVector(Vs,d);Th.subVectors(t,f);const M=Vs.dot(Th),T=Xs.dot(Th);if(T>=0&&M<=T)return i.copy(f);const U=M*p-g*T;if(U<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(Xs,h);const y=x*T-M*_;if(y<=0&&_-x>=0&&M-T>=0)return Cv.subVectors(f,c),h=(_-x)/(_-x+(M-T)),i.copy(c).addScaledVector(Cv,h);const S=1/(y+U+v);return d=U*S,h=v*S,i.copy(s).addScaledVector(Vs,d).addScaledVector(Xs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class yl{constructor(t=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Li):Li.fromBufferAttribute(f,d),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Kc.copy(s.boundingBox)),Kc.applyMatrix4(t.matrixWorld),this.union(Kc)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),Qc.subVectors(this.max,sl),ks.subVectors(t.a,sl),Ws.subVectors(t.b,sl),qs.subVectors(t.c,sl),fr.subVectors(Ws,ks),dr.subVectors(qs,Ws),Fr.subVectors(ks,qs);let i=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Fr.z,Fr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Fr.z,0,-Fr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Fr.y,Fr.x,0];return!wh(i,ks,Ws,qs,Qc)||(i=[1,0,0,0,1,0,0,0,1],!wh(i,ks,Ws,qs,Qc))?!1:(Jc.crossVectors(fr,dr),i=[Jc.x,Jc.y,Jc.z],wh(i,ks,Ws,qs,Qc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Li=new pe,Kc=new yl,ks=new pe,Ws=new pe,qs=new pe,fr=new pe,dr=new pe,Fr=new pe,sl=new pe,Qc=new pe,Jc=new pe,Hr=new pe;function wh(o,t,i,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Hr.fromArray(o,f);const h=c.x*Math.abs(Hr.x)+c.y*Math.abs(Hr.y)+c.z*Math.abs(Hr.z),g=t.dot(Hr),p=i.dot(Hr),x=s.dot(Hr);if(Math.max(-Math.max(g,p,x),Math.min(g,p,x))>h)return!1}return!0}const gn=new pe,$c=new Ft;let GE=0;class Bi extends Kr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=yE,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)$c.fromBufferAttribute(this,i),$c.applyMatrix3(t),this.setXY(i,$c.x,$c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=al(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=al(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=al(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=al(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=al(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,f){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array),f=Zn(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ix extends Bi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class zx extends Bi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ua extends Bi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const VE=new yl,ol=new pe,Nh=new pe;class Xp{constructor(t=new pe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):VE.setFromPoints(t).getCenter(s);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(ol,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(Nh)),this.expandByPoint(ol.copy(t.center).sub(Nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let XE=0;const yi=new _n,Dh=new ci,Ys=new pe,li=new yl,ll=new yl,Tn=new pe;class Oa extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ME(t)?zx:Ix)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new dt().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Dh.lookAt(t),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ua(s,3))}else{const s=Math.min(t.length,i.count);for(let c=0;c<s;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];ll.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(li.min,ll.min),li.expandByPoint(Tn),Tn.addVectors(li.max,ll.max),li.expandByPoint(Tn)):(li.expandByPoint(ll.min),li.expandByPoint(ll.max))}li.getCenter(s);let c=0;for(let f=0,d=t.count;f<d;f++)Tn.fromBufferAttribute(t,f),c=Math.max(c,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],g=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Tn.fromBufferAttribute(h,p),g&&(Ys.fromBufferAttribute(t,p),Tn.add(Ys)),c=Math.max(c,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Bi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],g=[];for(let E=0;E<s.count;E++)h[E]=new pe,g[E]=new pe;const p=new pe,x=new pe,_=new pe,v=new Ft,M=new Ft,T=new Ft,U=new pe,y=new pe;function S(E,N,F){p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,N),_.fromBufferAttribute(s,F),v.fromBufferAttribute(f,E),M.fromBufferAttribute(f,N),T.fromBufferAttribute(f,F),x.sub(p),_.sub(p),M.sub(v),T.sub(v);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(U.copy(x).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(G),h[E].add(U),h[N].add(U),h[F].add(U),g[E].add(y),g[N].add(y),g[F].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let E=0,N=D.length;E<N;++E){const F=D[E],G=F.start,Q=F.count;for(let te=G,j=G+Q;te<j;te+=3)S(t.getX(te+0),t.getX(te+1),t.getX(te+2))}const X=new pe,C=new pe,L=new pe,P=new pe;function I(E){L.fromBufferAttribute(c,E),P.copy(L);const N=h[E];X.copy(N),X.sub(L.multiplyScalar(L.dot(N))).normalize(),C.crossVectors(P,N);const G=C.dot(g[E])<0?-1:1;d.setXYZW(E,X.x,X.y,X.z,G)}for(let E=0,N=D.length;E<N;++E){const F=D[E],G=F.start,Q=F.count;for(let te=G,j=G+Q;te<j;te+=3)I(t.getX(te+0)),I(t.getX(te+1)),I(t.getX(te+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const c=new pe,f=new pe,d=new pe,h=new pe,g=new pe,p=new pe,x=new pe,_=new pe;if(t)for(let v=0,M=t.count;v<M;v+=3){const T=t.getX(v+0),U=t.getX(v+1),y=t.getX(v+2);c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,U),d.fromBufferAttribute(i,y),x.subVectors(d,f),_.subVectors(c,f),x.cross(_),h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,U),p.fromBufferAttribute(s,y),h.add(x),g.add(x),p.add(x),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(U,g.x,g.y,g.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)c.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,f),_.subVectors(c,f),x.cross(_),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,g){const p=h.array,x=h.itemSize,_=h.normalized,v=new p.constructor(g.length*x);let M=0,T=0;for(let U=0,y=g.length;U<y;U++){h.isInterleavedBufferAttribute?M=g[U]*h.data.stride+h.offset:M=g[U]*x;for(let S=0;S<x;S++)v[T++]=p[M++]}return new Bi(v,x,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oa,s=this.index.array,c=this.attributes;for(const h in c){const g=c[h],p=t(g,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const g=[],p=f[h];for(let x=0,_=p.length;x<_;x++){const v=p[x],M=t(v,s);g.push(M)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const c={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],x=[];for(let _=0,v=p.length;_<v;_++){const M=p[_];x.push(M.toJSON(t.data))}x.length>0&&(c[g]=x,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const c=t.attributes;for(const p in c){const x=c[p];this.setAttribute(p,x.clone(i))}const f=t.morphAttributes;for(const p in f){const x=[],_=f[p];for(let v=0,M=_.length;v<M;v++)x.push(_[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new pe,kE=new pe,WE=new dt;class pr{constructor(t=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=Uh.subVectors(s,i).cross(kE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const c=t.delta(Uh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||WE.getNormalMatrix(t),c=this.coplanarPoint(Uh).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let qE=0;class Cu extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=hl,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=px,this.blendDst=mx,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dh,this.stencilZFail=dh,this.stencilZPass=dh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new pr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ft().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new pe,Lh=new pe,eu=new pe,tu=new pe;class YE{constructor(t=new pe,i=new pe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=wa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){Lh.copy(t).add(i).multiplyScalar(.5),eu.copy(i).sub(t).normalize(),tu.copy(this.origin).sub(Lh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(eu),h=tu.dot(this.direction),g=-tu.dot(eu),p=tu.lengthSq(),x=Math.abs(1-d*d);let _,v,M,T;if(x>0)if(_=d*g-h,v=d*h-g,T=f*x,_>=0)if(v>=-T)if(v<=T){const U=1/x;_*=U,v*=U,M=_*(_+d*v+2*h)+v*(d*_+v+2*g)+p}else v=f,_=Math.max(0,-(d*v+h)),M=-_*_+v*(v+2*g)+p;else v=-f,_=Math.max(0,-(d*v+h)),M=-_*_+v*(v+2*g)+p;else v<=-T?(_=Math.max(0,-(-d*f+h)),v=_>0?-f:Math.min(Math.max(-f,-g),f),M=-_*_+v*(v+2*g)+p):v<=T?(_=0,v=Math.min(Math.max(-f,-g),f),M=v*(v+2*g)+p):(_=Math.max(0,-(d*f+h)),v=_>0?f:Math.min(Math.max(-f,-g),f),M=-_*_+v*(v+2*g)+p);else v=d>0?-f:f,_=Math.max(0,-(d*v+h)),M=-_*_+v*(v+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),c&&c.copy(Lh).addScaledVector(eu,v),M}intersectSphere(t,i){if(t.radius<0)return null;wa.subVectors(t.center,this.origin);const s=wa.dot(this.direction),c=wa.dot(wa)-s*s,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,f,d,h,g;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,c=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,c=(t.min.x-v.x)*p),x>=0?(f=(t.min.y-v.y)*x,d=(t.max.y-v.y)*x):(f=(t.max.y-v.y)*x,d=(t.min.y-v.y)*x),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),_>=0?(h=(t.min.z-v.z)*_,g=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,g=(t.min.z-v.z)*_),s>g||h>c)||((h>s||s!==s)&&(s=h),(g<c||c!==c)&&(c=g),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,i,s,c,f){const d=this.origin,h=this.direction,g=h.x,p=h.y,x=h.z,_=t.x-d.x,v=t.y-d.y,M=t.z-d.z,T=i.x-d.x,U=i.y-d.y,y=i.z-d.z,S=s.x-d.x,D=s.y-d.y,X=s.z-d.z,C=Math.abs(g),L=Math.abs(p),P=Math.abs(x);let I,E,N,F,G,Q,te,j,ee,k,W,ce;if(C>=L&&C>=P?(N=g,Q=_,ee=T,ce=S,g>=0?(I=p,E=x,F=v,G=M,te=U,j=y,k=D,W=X):(I=x,E=p,F=M,G=v,te=y,j=U,k=X,W=D)):L>=P?(N=p,Q=v,ee=U,ce=D,p>=0?(I=x,E=g,F=M,G=_,te=y,j=T,k=X,W=S):(I=g,E=x,F=_,G=M,te=T,j=y,k=S,W=X)):(N=x,Q=M,ee=y,ce=X,x>=0?(I=g,E=p,F=_,G=v,te=T,j=U,k=S,W=D):(I=p,E=g,F=v,G=_,te=U,j=T,k=D,W=S)),N===0)return null;const ae=I/N,ue=E/N,ge=1/N,Be=F-ae*Q,We=G-ue*Q,B=te-ae*ee,me=j-ue*ee,Te=k-ae*ce,Z=W-ue*ce,he=Te*me-Z*B,Ae=Be*Z-We*Te,De=B*We-me*Be;if(c){if(he<0||Ae<0||De<0)return null}else if((he<0||Ae<0||De<0)&&(he>0||Ae>0||De>0))return null;const xe=he+Ae+De;if(xe===0)return null;const Ce=ge*(he*Q+Ae*ee+De*ce);return(xe>0?Ce<0:Ce>0)?null:this.at(Ce/xe,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kp extends Cu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wv=new _n,Gr=new YE,nu=new Xp,Nv=new pe,iu=new pe,au=new pe,ru=new pe,Oh=new pe,su=new pe,Dv=new pe,ou=new pe;class Fi extends ci{constructor(t=new Oa,i=new kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){su.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const x=h[g],_=f[g];x!==0&&(Oh.fromBufferAttribute(_,t),d?su.addScaledVector(Oh,x):su.addScaledVector(Oh.sub(i),x))}i.add(su)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nu.copy(s.boundingSphere),nu.applyMatrix4(f),Gr.copy(t.ray).recast(t.near),!(nu.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(nu,Nv)===null||Gr.origin.distanceToSquared(Nv)>(t.far-t.near)**2))&&(wv.copy(f).invert(),Gr.copy(t.ray).applyMatrix4(wv),!(s.boundingBox!==null&&Gr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Gr)))}_computeIntersections(t,i,s){let c;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,p=f.attributes.uv,x=f.attributes.uv1,_=f.attributes.normal,v=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,U=v.length;T<U;T++){const y=v[T],S=d[y.materialIndex],D=Math.max(y.start,M.start),X=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,L=X;C<L;C+=3){const P=h.getX(C),I=h.getX(C+1),E=h.getX(C+2);c=lu(this,S,t,s,p,x,_,P,I,E),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const T=Math.max(0,M.start),U=Math.min(h.count,M.start+M.count);for(let y=T,S=U;y<S;y+=3){const D=h.getX(y),X=h.getX(y+1),C=h.getX(y+2);c=lu(this,d,t,s,p,x,_,D,X,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(d))for(let T=0,U=v.length;T<U;T++){const y=v[T],S=d[y.materialIndex],D=Math.max(y.start,M.start),X=Math.min(g.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,L=X;C<L;C+=3){const P=C,I=C+1,E=C+2;c=lu(this,S,t,s,p,x,_,P,I,E),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const T=Math.max(0,M.start),U=Math.min(g.count,M.start+M.count);for(let y=T,S=U;y<S;y+=3){const D=y,X=y+1,C=y+2;c=lu(this,d,t,s,p,x,_,D,X,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}}}function jE(o,t,i,s,c,f,d,h){let g;if(t.side===Kn?g=s.intersectTriangle(d,f,c,!0,h):g=s.intersectTriangle(c,f,d,t.side===qr,h),g===null)return null;ou.copy(h),ou.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ou);return p<i.near||p>i.far?null:{distance:p,point:ou.clone(),object:o}}function lu(o,t,i,s,c,f,d,h,g,p){o.getVertexPosition(h,iu),o.getVertexPosition(g,au),o.getVertexPosition(p,ru);const x=jE(o,t,i,s,iu,au,ru,Dv);if(x){const _=new pe;Oi.getBarycoord(Dv,iu,au,ru,_),c&&(x.uv=Oi.getInterpolatedAttribute(c,h,g,p,_,new Ft)),f&&(x.uv1=Oi.getInterpolatedAttribute(f,h,g,p,_,new Ft)),d&&(x.normal=Oi.getInterpolatedAttribute(d,h,g,p,_,new pe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:g,c:p,normal:new pe,materialIndex:0};Oi.getNormal(iu,au,ru,v.normal),x.face=v,x.barycoord=_}return x}class ZE extends zn{constructor(t=null,i=1,s=1,c,f,d,h,g,p=Un,x=Un,_,v){super(null,d,h,g,p,x,c,f,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vr=new Xp,KE=new Ft(.5,.5),cu=new pe;class Bx{constructor(t=new pr,i=new pr,s=new pr,c=new pr,f=new pr,d=new pr){this.planes=[t,i,s,c,f,d]}set(t,i,s,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],g=f[2],p=f[3],x=f[4],_=f[5],v=f[6],M=f[7],T=f[8],U=f[9],y=f[10],S=f[11],D=f[12],X=f[13],C=f[14],L=f[15];if(c[0].setComponents(p-d,M-x,S-T,L-D).normalize(),c[1].setComponents(p+d,M+x,S+T,L+D).normalize(),c[2].setComponents(p+h,M+_,S+U,L+X).normalize(),c[3].setComponents(p-h,M-_,S-U,L-X).normalize(),s)c[4].setComponents(g,v,y,C).normalize(),c[5].setComponents(p-g,M-v,S-y,L-C).normalize();else if(c[4].setComponents(p-g,M-v,S-y,L-C).normalize(),i===sa)c[5].setComponents(p+g,M+v,S+y,L+C).normalize();else if(i===Tu)c[5].setComponents(g,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){Vr.center.set(0,0,0);const i=KE.distanceTo(t.center);return Vr.radius=.7071067811865476+i,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(cu.x=c.normal.x>0?t.max.x:t.min.x,cu.y=c.normal.y>0?t.max.y:t.min.y,cu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fx extends zn{constructor(t=[],i=Yr,s,c,f,d,h,g,p,x){super(t,i,s,c,f,d,h,g,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vl extends zn{constructor(t,i,s=la,c,f,d,h=Un,g=Un,p,x=La,_=1){if(x!==La&&x!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,c,f,d,h,g,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class QE extends vl{constructor(t,i=la,s=Yr,c,f,d=Un,h=Un,g,p=La){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,s,c,f,d,h,g,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hx extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ml extends Oa{constructor(t=1,i=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const g=[],p=[],x=[],_=[];let v=0,M=0;T("z","y","x",-1,-1,s,i,t,d,f,0),T("z","y","x",1,-1,s,i,-t,d,f,1),T("x","z","y",1,1,t,s,i,c,d,2),T("x","z","y",1,-1,t,s,-i,c,d,3),T("x","y","z",1,-1,t,i,s,c,f,4),T("x","y","z",-1,-1,t,i,-s,c,f,5),this.setIndex(g),this.setAttribute("position",new Ua(p,3)),this.setAttribute("normal",new Ua(x,3)),this.setAttribute("uv",new Ua(_,2));function T(U,y,S,D,X,C,L,P,I,E,N){const F=C/I,G=L/E,Q=C/2,te=L/2,j=P/2,ee=I+1,k=E+1;let W=0,ce=0;const ae=new pe;for(let ue=0;ue<k;ue++){const ge=ue*G-te;for(let Be=0;Be<ee;Be++){const We=Be*F-Q;ae[U]=We*D,ae[y]=ge*X,ae[S]=j,p.push(ae.x,ae.y,ae.z),ae[U]=0,ae[y]=0,ae[S]=P>0?1:-1,x.push(ae.x,ae.y,ae.z),_.push(Be/I),_.push(1-ue/E),W+=1}}for(let ue=0;ue<E;ue++)for(let ge=0;ge<I;ge++){const Be=v+ge+ee*ue,We=v+ge+ee*(ue+1),B=v+(ge+1)+ee*(ue+1),me=v+(ge+1)+ee*ue;g.push(Be,We,me),g.push(We,B,me),ce+=6}h.addGroup(M,ce,N),M+=ce,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class io extends Oa{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(s),g=Math.floor(c),p=h+1,x=g+1,_=t/h,v=i/g,M=[],T=[],U=[],y=[];for(let S=0;S<x;S++){const D=S*v-d;for(let X=0;X<p;X++){const C=X*_-f;T.push(C,-D,0),U.push(0,0,1),y.push(X/h),y.push(1-S/g)}}for(let S=0;S<g;S++)for(let D=0;D<h;D++){const X=D+p*S,C=D+p*(S+1),L=D+1+p*(S+1),P=D+1+p*S;M.push(X,C,P),M.push(C,L,P)}this.setIndex(M),this.setAttribute("position",new Ua(T,3)),this.setAttribute("normal",new Ua(U,3)),this.setAttribute("uv",new Ua(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.widthSegments,t.heightSegments)}}function ao(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const c=o[i][s];if(Uv(c))c.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone();else if(Array.isArray(c))if(Uv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][s]=f}else t[i][s]=c.slice();else t[i][s]=c}}return t}function Xn(o){const t={};for(let i=0;i<o.length;i++){const s=ao(o[i]);for(const c in s)t[c]=s[c]}return t}function Uv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function JE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Gx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const $E={clone:ao,merge:Xn};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Cu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=JE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const c=t.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new Bt().setHex(c.value);break;case"v2":this.uniforms[s].value=new Ft().fromArray(c.value);break;case"v3":this.uniforms[s].value=new pe().fromArray(c.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(c.value);break;case"m3":this.uniforms[s].value=new dt().fromArray(c.value);break;case"m4":this.uniforms[s].value=new _n().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class nb extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ib extends Cu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ab extends Cu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ph={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Lv(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Lv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Lv(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class rb{constructor(t,i,s){const c=this;let f=!1,d=0,h=0,g;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(x){h++,f===!1&&c.onStart!==void 0&&c.onStart(x,d,h),f=!0},this.itemEnd=function(x){d++,c.onProgress!==void 0&&c.onProgress(x,d,h),d===h&&(f=!1,c.onLoad!==void 0&&c.onLoad())},this.itemError=function(x){c.onError!==void 0&&c.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),g?g(x):x},this.setURLModifier=function(x){return g=x,this},this.addHandler=function(x,_){return p.push(x,_),this},this.removeHandler=function(x){const _=p.indexOf(x);return _!==-1&&p.splice(_,2),this},this.getHandler=function(x){for(let _=0,v=p.length;_<v;_+=2){const M=p[_],T=p[_+1];if(M.global&&(M.lastIndex=0),M.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sb=new rb;class Wp{constructor(t){this.manager=t!==void 0?t:sb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(c,f){s.load(t,c,i,f)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Wp.DEFAULT_MATERIAL_NAME="__DEFAULT";const js=new WeakMap;class ob extends Wp{constructor(t){super(t)}load(t,i,s,c){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const f=this,d=Ph.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(t),setTimeout(function(){i&&i(d),f.manager.itemEnd(t)},0);else{let _=js.get(d);_===void 0&&(_=[],js.set(d,_)),_.push({onLoad:i,onError:c})}return d}const h=_l("img");function g(){x(),i&&i(this);const _=js.get(this)||[];for(let v=0;v<_.length;v++){const M=_[v];M.onLoad&&M.onLoad(this)}js.delete(this),f.manager.itemEnd(t)}function p(_){x(),c&&c(_),Ph.remove(`image:${t}`);const v=js.get(this)||[];for(let M=0;M<v.length;M++){const T=v[M];T.onError&&T.onError(_)}js.delete(this),f.manager.itemError(t),f.manager.itemEnd(t)}function x(){h.removeEventListener("load",g,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",g,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ph.add(`image:${t}`,h),f.manager.itemStart(t),h.src=t,h}}class lb extends Wp{constructor(t){super(t)}load(t,i,s,c){const f=new zn,d=new ob(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},s,c),f}}const uu=new pe,fu=new ro,ta=new pe;class Vx extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uu,fu,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,fu,ta.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(uu,fu,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,fu,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new pe,Ov=new Ft,Pv=new Ft;class Ei extends Vx{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=wp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,i){return this.getViewBounds(t,Ov,Pv),i.subVectors(Pv,Ov)}setViewOffset(t,i,s,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(hh*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;f+=d.offsetX*c/g,i-=d.offsetY*s/p,c*=d.width/g,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Xx extends Vx{constructor(t=-1,i=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-t,d=s+t,h=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=x*this.view.offsetY,g=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Zs=-90,Ks=1;class cb extends ci{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Ei(Zs,Ks,t,i);c.layers=this.layers,this.add(c);const f=new Ei(Zs,Ks,t,i);f.layers=this.layers,this.add(f);const d=new Ei(Zs,Ks,t,i);d.layers=this.layers,this.add(d);const h=new Ei(Zs,Ks,t,i);h.layers=this.layers,this.add(h);const g=new Ei(Zs,Ks,t,i);g.layers=this.layers,this.add(g);const p=new Ei(Zs,Ks,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,f,d,h,g]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,p,x]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(_,v,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class ub extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const Kp=class Kp{constructor(t,i,s,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=c,this}};Kp.prototype.isMatrix2=!0;let Iv=Kp;function zv(o,t,i,s){const c=db(s);switch(i){case wx:return o*t;case Dx:return o*t/c.components*c.byteLength;case zp:return o*t/c.components*c.byteLength;case jr:return o*t*2/c.components*c.byteLength;case Bp:return o*t*2/c.components*c.byteLength;case Nx:return o*t*3/c.components*c.byteLength;case Ii:return o*t*4/c.components*c.byteLength;case Fp:return o*t*4/c.components*c.byteLength;case gu:case _u:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case vu:case xu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ep:case np:return Math.max(o,16)*Math.max(t,8)/4;case $h:case tp:return Math.max(o,8)*Math.max(t,8)/2;case ip:case ap:case sp:case op:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rp:case yu:case lp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case cp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case up:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case fp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case dp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case hp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case pp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case mp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case gp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case _p:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case vp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case xp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case yp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Mp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ep:case bp:case Tp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ap:case Rp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mu:case Cp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function db(o){switch(o){case bi:case Tx:return{byteLength:1,components:1};case ml:case Ax:case ca:return{byteLength:2,components:1};case Pp:case Ip:return{byteLength:2,components:4};case la:case Op:case ra:return{byteLength:4,components:1};case Rx:case Cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kx(){let o=null,t=!1,i=null,s=null;function c(f,d){s=o.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function hb(o){const t=new WeakMap;function i(h,g){const p=h.array,x=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(g,v),o.bufferData(g,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,g,p){const x=g.array,_=g.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((M,T)=>M.start-T.start);let v=0;for(let M=1;M<_.length;M++){const T=_[v],U=_[M];U.start<=T.start+T.count+1?T.count=Math.max(T.count,U.start+U.count-T.start):(++v,_[v]=U)}_.length=v+1;for(let M=0,T=_.length;M<T;M++){const U=_[M];o.bufferSubData(p,U.start*x.BYTES_PER_ELEMENT,x,U.start,U.count)}g.clearUpdateRanges()}g.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=t.get(h);g&&(o.deleteBuffer(g.buffer),t.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,g));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,g),p.version=h.version}}return{get:c,remove:f,update:d}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,oT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ET=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$T=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:_b,alphatest_fragment:vb,alphatest_pars_fragment:xb,aomap_fragment:Sb,aomap_pars_fragment:yb,batching_pars_vertex:Mb,batching_vertex:Eb,begin_vertex:bb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Ub,color_fragment:Lb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:Ib,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Gb,emissivemap_fragment:Vb,emissivemap_pars_fragment:Xb,colorspace_fragment:kb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:sT,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:eT,gradientmap_pars_fragment:tT,lightmap_pars_fragment:nT,lights_lambert_fragment:iT,lights_lambert_pars_fragment:aT,lights_pars_begin:rT,lights_toon_fragment:oT,lights_toon_pars_fragment:lT,lights_phong_fragment:cT,lights_phong_pars_fragment:uT,lights_physical_fragment:fT,lights_physical_pars_fragment:dT,lights_fragment_begin:hT,lights_fragment_maps:pT,lights_fragment_end:mT,lightprobes_pars_fragment:gT,logdepthbuf_fragment:_T,logdepthbuf_pars_fragment:vT,logdepthbuf_pars_vertex:xT,logdepthbuf_vertex:ST,map_fragment:yT,map_pars_fragment:MT,map_particle_fragment:ET,map_particle_pars_fragment:bT,metalnessmap_fragment:TT,metalnessmap_pars_fragment:AT,morphinstance_vertex:RT,morphcolor_vertex:CT,morphnormal_vertex:wT,morphtarget_pars_vertex:NT,morphtarget_vertex:DT,normal_fragment_begin:UT,normal_fragment_maps:LT,normal_pars_fragment:OT,normal_pars_vertex:PT,normal_vertex:IT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:GT,opaque_fragment:VT,packing:XT,premultiplied_alpha_fragment:kT,project_vertex:WT,dithering_fragment:qT,dithering_pars_fragment:YT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:$T,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:a1,specularmap_pars_fragment:r1,tonemapping_fragment:s1,tonemapping_pars_fragment:o1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:u1,uv_pars_vertex:f1,uv_vertex:d1,worldpos_vertex:h1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:_1,cube_vert:v1,cube_frag:x1,depth_vert:S1,depth_frag:y1,distance_vert:M1,distance_frag:E1,equirect_vert:b1,equirect_frag:T1,linedashed_vert:A1,linedashed_frag:R1,meshbasic_vert:C1,meshbasic_frag:w1,meshlambert_vert:N1,meshlambert_frag:D1,meshmatcap_vert:U1,meshmatcap_frag:L1,meshnormal_vert:O1,meshnormal_frag:P1,meshphong_vert:I1,meshphong_frag:z1,meshphysical_vert:B1,meshphysical_frag:F1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:V1,points_frag:X1,shadow_vert:k1,shadow_frag:W1,sprite_vert:q1,sprite_frag:Y1},Ge={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new pe},probesMax:{value:new pe},probesResolution:{value:new pe}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ia={basic:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Xn([Ge.points,Ge.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Xn([Ge.common,Ge.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Xn([Ge.sprite,Ge.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Xn([Ge.lights,Ge.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ia.physical={uniforms:Xn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const du={r:0,b:0,g:0},j1=new _n,Wx=new dt;Wx.set(-1,0,0,0,1,0,0,0,1);function Z1(o,t,i,s,c,f){const d=new Bt(0);let h=c===!0?0:1,g,p,x=null,_=0,v=null;function M(D){let X=D.isScene===!0?D.background:null;if(X&&X.isTexture){const C=D.backgroundBlurriness>0;X=t.get(X,C)}return X}function T(D){let X=!1;const C=M(D);C===null?y(d,h):C&&C.isColor&&(y(C,1),X=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||X)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function U(D,X){const C=M(X);C&&(C.isCubeTexture||C.mapping===Ru)?(p===void 0&&(p=new Fi(new Ml(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ao(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(X.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Wx),p.material.toneMapped=Nt.getTransfer(C.colorSpace)!==Yt,(x!==C||_!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,_=C.version,v=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(g===void 0&&(g=new Fi(new io(2,2),new Hi({name:"BackgroundMaterial",uniforms:ao(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=C,g.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,g.material.toneMapped=Nt.getTransfer(C.colorSpace)!==Yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),g.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||_!==C.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,x=C,_=C.version,v=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function y(D,X){D.getRGB(du,Gx(o)),i.buffers.color.setClear(du.r,du.g,du.b,X,f)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,X=1){d.set(D),h=X,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,y(d,h)},render:T,addToRenderList:U,dispose:S}}function K1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=v(null);let f=c,d=!1;function h(G,Q,te,j,ee){let k=!1;const W=_(G,j,te,Q);f!==W&&(f=W,p(f.object)),k=M(G,j,te,ee),k&&T(G,j,te,ee),ee!==null&&t.update(ee,o.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,C(G,Q,te,j),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function g(){return o.createVertexArray()}function p(G){return o.bindVertexArray(G)}function x(G){return o.deleteVertexArray(G)}function _(G,Q,te,j){const ee=j.wireframe===!0;let k=s[Q.id];k===void 0&&(k={},s[Q.id]=k);const W=G.isInstancedMesh===!0?G.id:0;let ce=k[W];ce===void 0&&(ce={},k[W]=ce);let ae=ce[te.id];ae===void 0&&(ae={},ce[te.id]=ae);let ue=ae[ee];return ue===void 0&&(ue=v(g()),ae[ee]=ue),ue}function v(G){const Q=[],te=[],j=[];for(let ee=0;ee<i;ee++)Q[ee]=0,te[ee]=0,j[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:te,attributeDivisors:j,object:G,attributes:{},index:null}}function M(G,Q,te,j){const ee=f.attributes,k=Q.attributes;let W=0;const ce=te.getAttributes();for(const ae in ce)if(ce[ae].location>=0){const ge=ee[ae];let Be=k[ae];if(Be===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(Be=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(Be=G.instanceColor)),ge===void 0||ge.attribute!==Be||Be&&ge.data!==Be.data)return!0;W++}return f.attributesNum!==W||f.index!==j}function T(G,Q,te,j){const ee={},k=Q.attributes;let W=0;const ce=te.getAttributes();for(const ae in ce)if(ce[ae].location>=0){let ge=k[ae];ge===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor));const Be={};Be.attribute=ge,ge&&ge.data&&(Be.data=ge.data),ee[ae]=Be,W++}f.attributes=ee,f.attributesNum=W,f.index=j}function U(){const G=f.newAttributes;for(let Q=0,te=G.length;Q<te;Q++)G[Q]=0}function y(G){S(G,0)}function S(G,Q){const te=f.newAttributes,j=f.enabledAttributes,ee=f.attributeDivisors;te[G]=1,j[G]===0&&(o.enableVertexAttribArray(G),j[G]=1),ee[G]!==Q&&(o.vertexAttribDivisor(G,Q),ee[G]=Q)}function D(){const G=f.newAttributes,Q=f.enabledAttributes;for(let te=0,j=Q.length;te<j;te++)Q[te]!==G[te]&&(o.disableVertexAttribArray(te),Q[te]=0)}function X(G,Q,te,j,ee,k,W){W===!0?o.vertexAttribIPointer(G,Q,te,ee,k):o.vertexAttribPointer(G,Q,te,j,ee,k)}function C(G,Q,te,j){U();const ee=j.attributes,k=te.getAttributes(),W=Q.defaultAttributeValues;for(const ce in k){const ae=k[ce];if(ae.location>=0){let ue=ee[ce];if(ue===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(ue=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(ue=G.instanceColor)),ue!==void 0){const ge=ue.normalized,Be=ue.itemSize,We=t.get(ue);if(We===void 0)continue;const B=We.buffer,me=We.type,Te=We.bytesPerElement,Z=me===o.INT||me===o.UNSIGNED_INT||ue.gpuType===Op;if(ue.isInterleavedBufferAttribute){const he=ue.data,Ae=he.stride,De=ue.offset;if(he.isInstancedInterleavedBuffer){for(let xe=0;xe<ae.locationSize;xe++)S(ae.location+xe,he.meshPerAttribute);G.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let xe=0;xe<ae.locationSize;xe++)y(ae.location+xe);o.bindBuffer(o.ARRAY_BUFFER,B);for(let xe=0;xe<ae.locationSize;xe++)X(ae.location+xe,Be/ae.locationSize,me,ge,Ae*Te,(De+Be/ae.locationSize*xe)*Te,Z)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<ae.locationSize;he++)S(ae.location+he,ue.meshPerAttribute);G.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<ae.locationSize;he++)y(ae.location+he);o.bindBuffer(o.ARRAY_BUFFER,B);for(let he=0;he<ae.locationSize;he++)X(ae.location+he,Be/ae.locationSize,me,ge,Be*Te,Be/ae.locationSize*he*Te,Z)}}else if(W!==void 0){const ge=W[ce];if(ge!==void 0)switch(ge.length){case 2:o.vertexAttrib2fv(ae.location,ge);break;case 3:o.vertexAttrib3fv(ae.location,ge);break;case 4:o.vertexAttrib4fv(ae.location,ge);break;default:o.vertexAttrib1fv(ae.location,ge)}}}}D()}function L(){N();for(const G in s){const Q=s[G];for(const te in Q){const j=Q[te];for(const ee in j){const k=j[ee];for(const W in k)x(k[W].object),delete k[W];delete j[ee]}}delete s[G]}}function P(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const te in Q){const j=Q[te];for(const ee in j){const k=j[ee];for(const W in k)x(k[W].object),delete k[W];delete j[ee]}}delete s[G.id]}function I(G){for(const Q in s){const te=s[Q];for(const j in te){const ee=te[j];if(ee[G.id]===void 0)continue;const k=ee[G.id];for(const W in k)x(k[W].object),delete k[W];delete ee[G.id]}}}function E(G){for(const Q in s){const te=s[Q],j=G.isInstancedMesh===!0?G.id:0,ee=te[j];if(ee!==void 0){for(const k in ee){const W=ee[k];for(const ce in W)x(W[ce].object),delete W[ce];delete ee[k]}delete te[j],Object.keys(te).length===0&&delete s[Q]}}}function N(){F(),d=!0,f!==c&&(f=c,p(f.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:N,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:U,enableAttribute:y,disableUnusedAttributes:D}}function Q1(o,t,i){let s;function c(g){s=g}function f(g,p){o.drawArrays(s,g,p),i.update(p,s,1)}function d(g,p,x){x!==0&&(o.drawArraysInstanced(s,g,p,x),i.update(p,s,x))}function h(g,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,x);let v=0;for(let M=0;M<x;M++)v+=p[M];i.update(v,s,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function J1(o,t,i,s){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(I){return!(I!==Ii&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const E=I===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==bi&&I!==ra&&!E&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=g(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),X=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:T,maxTextureSize:U,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:X,maxFragmentUniforms:C,maxSamples:L,samples:P}}function $1(o){const t=this;let i=null,s=0,c=!1,f=!1;const d=new pr,h=new dt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||s!==0||c;return c=v,s=_.length,M},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,v){i=x(_,v,0)},this.setState=function(_,v,M){const T=_.clippingPlanes,U=_.clipIntersection,y=_.clipShadows,S=o.get(_);if(!c||T===null||T.length===0||f&&!y)f?x(null):p();else{const D=f?0:s,X=D*4;let C=S.clippingState||null;g.value=C,C=x(T,v,X,M);for(let L=0;L!==X;++L)C[L]=i[L];S.clippingState=C,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=D}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(_,v,M,T){const U=_!==null?_.length:0;let y=null;if(U!==0){if(y=g.value,T!==!0||y===null){const S=M+U*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let X=0,C=M;X!==U;++X,C+=4)d.copy(_[X]).applyMatrix4(D,h),d.normal.toArray(y,C),y[C+3]=d.constant}g.value=y,g.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,y}}const $s=4,eA=6,tA=20,nA=256,cl=new Xx,Bv=new Bt;let Ih=null,zh=0,Bh=0,Fh=!1;const iA=new pe,Xr=new pe;class Fv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,c=100,f={}){const{size:d=256,position:h=iA}=f;Ih=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,c,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ih,zh,Bh),this._renderer.xr.enabled=Fh,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Yr||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ih=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ca,format:Ii,colorSpace:Eu,depthBuffer:!1},c=Hv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=aA(f)),this._blurMaterial=sA(f,t,i),this._ggxMaterial=rA(f,t,i)}return c}_compileMaterial(t){const i=new Fi(new Oa,t);this._renderer.compile(i,cl)}_sceneToCubeUV(t,i,s,c,f){const g=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(Bv),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(c),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new Ml,new kp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,y=U.material;let S=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,S=!0):(y.color.copy(Bv),S=!0);for(let X=0;X<6;X++){const C=X%3;C===0?(g.up.set(0,p[X],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+x[X],f.y,f.z)):C===1?(g.up.set(0,0,p[X]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+x[X],f.z)):(g.up.set(0,p[X],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+x[X]));const L=this._cubeSize;Qs(c,C*L,X>2?L:0,L,L),_.setRenderTarget(c),S&&_.render(U,g),_.render(t,g)}_.toneMapping=M,_.autoClear=v,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===Yr||t.mapping===no;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const g=this._cubeSize;Qs(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,cl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),v=p*1.25,M=_*v,{_lodMax:T}=this,U=this._sizeLods[s],y=3*U*(s>T-$s?s-T+$s:0),S=4*(this._cubeSize-U);g.envMap.value=t.texture,g.roughness.value=M,g.mipInt.value=T-i,Qs(f,y,S,3*U,2*U),c.setRenderTarget(f),c.render(h,cl),g.envMap.value=f.texture,g.roughness.value=0,g.mipInt.value=T-s,Qs(t,y,S,3*U,2*U),c.setRenderTarget(t),c.render(h,cl)}_blur(t,i,s,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,s,d),this._blurPass(f,t,s,s,d)}_blurPass(t,i,s,c,f){const d=this._renderer,h=this._blurMaterial,g=this._lodMeshes[c];g.material=h;const p=h.uniforms;p.envMap.value=t.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const x=this._sizeLods[c],_=3*x*(c>this._lodMax-$s?c-this._lodMax+$s:0),v=4*(this._cubeSize-x);Qs(i,_,v,3*x,2*x),d.setRenderTarget(i),d.render(g,cl)}}function aA(o){const t=[],i=[];let s=o;const c=o-$s+1+eA;for(let f=0;f<c;f++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),g=-h,p=1+h,x=[g,g,p,g,p,p,g,g,p,p,g,p],_=6,v=6,M=3,T=new Float32Array(M*v*_),U=new Float32Array(M*v*_);for(let S=0;S<_;S++){const D=S%3*2/3-1,X=S>2?0:-1,C=[D,X,0,D+2/3,X,0,D+2/3,X+1,0,D,X,0,D+2/3,X+1,0,D,X+1,0];T.set(C,M*v*S);for(let L=0;L<v;L++){const P=x[L*2]*2-1,I=x[L*2+1]*2-1;S===0?Xr.set(1,I,P):S===1?Xr.set(-P,1,-I):S===2?Xr.set(-P,I,1):S===3?Xr.set(-1,I,-P):S===4?Xr.set(-P,-1,I):Xr.set(P,I,-1),Xr.toArray(U,(S*v+L)*M)}}const y=new Oa;y.setAttribute("position",new Bi(T,M)),y.setAttribute("outputDirection",new Bi(U,M)),i.push(new Fi(y,null)),s>$s&&s--}return{lodMeshes:i,sizeLods:t}}function Hv(o,t,i){const s=new zi(o,t,i);return s.texture.mapping=Ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qs(o,t,i,s,c){o.viewport.set(t,i,s,c),o.scissor.set(t,i,s,c)}function rA(o,t,i){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function sA(o,t,i){return new Hi({name:"SphericalGaussianBlur",defines:{SAMPLES:tA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Gv(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Vv(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function wu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class qx extends zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new Fx(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new Ml(5,5,5),f=new Hi({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Na});f.uniforms.tEquirect.value=i;const d=new Fi(c,f),h=i.minFilter;return i.minFilter===kr&&(i.minFilter=In),new cb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,c);t.setRenderTarget(f)}}function oA(o){let t=new WeakMap,i=new WeakMap,s=null;function c(v,M=!1){return v==null?null:M?d(v):f(v)}function f(v){if(v&&v.isTexture){const M=v.mapping;if(M===ch||M===uh)if(t.has(v)){const T=t.get(v).texture;return h(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const U=new qx(T.height);return U.fromEquirectangularTexture(o,v),t.set(v,U),v.addEventListener("dispose",p),h(U.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const M=v.mapping,T=M===ch||M===uh,U=M===Yr||M===no;if(T||U){let y=i.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new Fv(o)),y=T?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const D=v.image;return T&&D&&D.height>0||U&&D&&g(D)?(s===null&&(s=new Fv(o)),y=T?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",x),y.texture):null}}}return v}function h(v,M){return M===ch?v.mapping=Yr:M===uh&&(v.mapping=no),v}function g(v){let M=0;const T=6;for(let U=0;U<T;U++)v[U]!==void 0&&M++;return M===T}function p(v){const M=v.target;M.removeEventListener("dispose",p);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function x(v){const M=v.target;M.removeEventListener("dispose",x);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:_}}function lA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const c=o.getExtension(s);return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&eo("WebGLRenderer: "+s+" extension not supported."),c}}}function cA(o,t,i,s){const c={},f=new WeakMap;function d(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete c[v.id];const M=f.get(v);M&&(t.remove(M),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return c[v.id]===!0||(v.addEventListener("dispose",d),c[v.id]=!0,i.memory.geometries++),v}function g(_){const v=_.attributes;for(const M in v)t.update(v[M],o.ARRAY_BUFFER)}function p(_){const v=[],M=_.index,T=_.attributes.position;let U=0;if(T===void 0)return;if(M!==null){const D=M.array;U=M.version;for(let X=0,C=D.length;X<C;X+=3){const L=D[X+0],P=D[X+1],I=D[X+2];v.push(L,P,P,I,I,L)}}else{const D=T.array;U=T.version;for(let X=0,C=D.length/3-1;X<C;X+=3){const L=X+0,P=X+1,I=X+2;v.push(L,P,P,I,I,L)}}const y=new(T.count>=65535?zx:Ix)(v,1);y.version=U;const S=f.get(_);S&&t.remove(S),f.set(_,y)}function x(_){const v=f.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&p(_)}else p(_);return f.get(_)}return{get:h,update:g,getWireframeAttribute:x}}function uA(o,t,i){let s;function c(_){s=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function g(_,v){o.drawElements(s,v,f,_*d),i.update(v,s,1)}function p(_,v,M){M!==0&&(o.drawElementsInstanced(s,v,f,_*d,M),i.update(v,s,M))}function x(_,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,_,0,M);let U=0;for(let y=0;y<M;y++)U+=v[y];i.update(U,s,1)}this.setMode=c,this.setIndex=h,this.render=g,this.renderInstances=p,this.renderMultiDraw=x}function fA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Pt("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function dA(o,t,i){const s=new WeakMap,c=new cn;function f(d,h,g){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let F=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var M=F;v!==void 0&&v.texture.dispose();const T=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),U===!0&&(C=2),y===!0&&(C=3);let L=h.attributes.position.count*C,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const I=new Float32Array(L*P*4*_),E=new Lx(I,L,P,_);E.type=ra,E.needsUpdate=!0;const N=C*4;for(let G=0;G<_;G++){const Q=S[G],te=D[G],j=X[G],ee=L*P*4*G;for(let k=0;k<Q.count;k++){const W=k*N;T===!0&&(c.fromBufferAttribute(Q,k),I[ee+W+0]=c.x,I[ee+W+1]=c.y,I[ee+W+2]=c.z,I[ee+W+3]=0),U===!0&&(c.fromBufferAttribute(te,k),I[ee+W+4]=c.x,I[ee+W+5]=c.y,I[ee+W+6]=c.z,I[ee+W+7]=0),y===!0&&(c.fromBufferAttribute(j,k),I[ee+W+8]=c.x,I[ee+W+9]=c.y,I[ee+W+10]=c.z,I[ee+W+11]=j.itemSize===4?c.w:1)}}v={count:_,texture:E,size:new Ft(L,P)},s.set(h,v),h.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const U=h.morphTargetsRelative?1:1-T;g.getUniforms().setValue(o,"morphTargetBaseInfluence",U),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function hA(o,t,i,s,c){let f=new WeakMap;function d(p){const x=c.render.frame,_=p.geometry,v=t.get(p,_);if(f.get(v)!==x&&(t.update(v),f.set(v,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),f.get(p)!==x&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;f.get(M)!==x&&(M.update(),f.set(M,x))}return v}function h(){f=new WeakMap}function g(p){const x=p.target;x.removeEventListener("dispose",g),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const pA={[_x]:"LINEAR_TONE_MAPPING",[vx]:"REINHARD_TONE_MAPPING",[xx]:"CINEON_TONE_MAPPING",[Sx]:"ACES_FILMIC_TONE_MAPPING",[Mx]:"AGX_TONE_MAPPING",[Ex]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function mA(o,t,i,s,c,f){const d=new zi(t,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,g=null;const p=new Oa;p.setAttribute("position",new Ua([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ua([0,2,0,0,2,0],2));const x=new nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Fi(p,x),v=new Xx(-1,1,1,-1,0,1);let M=null,T=null,U=!1,y,S=null,D=[],X=!1;this.setSize=function(C,L){d.setSize(C,L),h!==null&&h.setSize(C,L),g!==null&&g.setSize(C,L);for(let P=0;P<D.length;P++){const I=D[P];I.setSize&&I.setSize(C,L)}},this.setEffects=function(C){D=C,X=D.length>0&&D[0].isRenderPass===!0;const L=d.width,P=d.height;D.length>0&&h===null&&(h=new zi(L,P,{type:ca,depthBuffer:!1,stencilBuffer:!1}),g=new zi(L,P,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<D.length;I++){const E=D[I];E.setSize&&E.setSize(L,P)}},this.begin=function(C,L){if(U||C.toneMapping===oa&&D.length===0)return!1;if(S=L,L!==null){const P=L.width,I=L.height;(d.width!==P||d.height!==I)&&this.setSize(P,I)}return X===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return X},this.end=function(C,L){C.toneMapping=y,U=!0;let P=d,I=h;for(let E=0;E<D.length;E++){const N=D[E];N.enabled!==!1&&(N.render(C,I,P,L),N.needsSwap!==!1&&(P=I,I=I===h?g:h))}if(M!==C.outputColorSpace||T!==C.toneMapping){M=C.outputColorSpace,T=C.toneMapping,x.defines={},Nt.getTransfer(M)===Yt&&(x.defines.SRGB_TRANSFER="");const E=pA[T];E&&(x.defines[E]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(S),C.render(_,v),S=null,U=!1},this.isCompositing=function(){return U},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),g!==null&&g.dispose(),p.dispose(),x.dispose()}}const Yx=new zn,Np=new vl(1,1),jx=new Lx,Zx=new UE,Kx=new Fx,Xv=[],kv=[],Wv=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function so(o,t,i){const s=o[0];if(s<=0||s>0)return o;const c=t*i;let f=Xv[c];if(f===void 0&&(f=new Float32Array(c),Xv[c]=f),t!==0){s.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function yn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Nu(o,t){let i=kv[t];i===void 0&&(i=new Int32Array(t),kv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function gA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function _A(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2fv(this.addr,t),yn(i,t)}}function vA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;o.uniform3fv(this.addr,t),yn(i,t)}}function xA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4fv(this.addr,t),yn(i,t)}}function SA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Yv.set(s),o.uniformMatrix2fv(this.addr,!1,Yv),yn(i,s)}}function yA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;qv.set(s),o.uniformMatrix3fv(this.addr,!1,qv),yn(i,s)}}function MA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Wv.set(s),o.uniformMatrix4fv(this.addr,!1,Wv),yn(i,s)}}function EA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function bA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2iv(this.addr,t),yn(i,t)}}function TA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3iv(this.addr,t),yn(i,t)}}function AA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4iv(this.addr,t),yn(i,t)}}function RA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function CA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2uiv(this.addr,t),yn(i,t)}}function wA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3uiv(this.addr,t),yn(i,t)}}function NA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4uiv(this.addr,t),yn(i,t)}}function DA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Np.compareFunction=i.isReversedDepthBuffer()?Gp:Hp,f=Np):f=Yx,i.setTexture2D(t||f,c)}function UA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||Zx,c)}function LA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||Kx,c)}function OA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||jx,c)}function PA(o){switch(o){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return SA;case 35675:return yA;case 35676:return MA;case 5124:case 35670:return EA;case 35667:case 35671:return bA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return RA;case 36294:return CA;case 36295:return wA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return OA}}function IA(o,t){o.uniform1fv(this.addr,t)}function zA(o,t){const i=so(t,this.size,2);o.uniform2fv(this.addr,i)}function BA(o,t){const i=so(t,this.size,3);o.uniform3fv(this.addr,i)}function FA(o,t){const i=so(t,this.size,4);o.uniform4fv(this.addr,i)}function HA(o,t){const i=so(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function GA(o,t){const i=so(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function VA(o,t){const i=so(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function XA(o,t){o.uniform1iv(this.addr,t)}function kA(o,t){o.uniform2iv(this.addr,t)}function WA(o,t){o.uniform3iv(this.addr,t)}function qA(o,t){o.uniform4iv(this.addr,t)}function YA(o,t){o.uniform1uiv(this.addr,t)}function jA(o,t){o.uniform2uiv(this.addr,t)}function ZA(o,t){o.uniform3uiv(this.addr,t)}function KA(o,t){o.uniform4uiv(this.addr,t)}function QA(o,t,i){const s=this.cache,c=t.length,f=Nu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Np:d=Yx;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function JA(o,t,i){const s=this.cache,c=t.length,f=Nu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||Zx,f[d])}function $A(o,t,i){const s=this.cache,c=t.length,f=Nu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||Kx,f[d])}function eR(o,t,i){const s=this.cache,c=t.length,f=Nu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||jx,f[d])}function tR(o){switch(o){case 5126:return IA;case 35664:return zA;case 35665:return BA;case 35666:return FA;case 35674:return HA;case 35675:return GA;case 35676:return VA;case 5124:case 35670:return XA;case 35667:case 35671:return kA;case 35668:case 35672:return WA;case 35669:case 35673:return qA;case 5125:return YA;case 36294:return jA;case 36295:return ZA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return eR}}class nR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=PA(i.type)}}class iR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tR(i.type)}}class aR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],s)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function jv(o,t){o.seq.push(t),o.map[t.id]=t}function rR(o,t,i){const s=o.name,c=s.length;for(Hh.lastIndex=0;;){const f=Hh.exec(s),d=Hh.lastIndex;let h=f[1];const g=f[2]==="]",p=f[3];if(g&&(h=h|0),p===void 0||p==="["&&d+2===c){jv(i,p===void 0?new nR(h,o,t):new iR(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new aR(h),jv(i,_)),i=_}}}class Su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),g=t.getUniformLocation(i,h.name);rR(h,g,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],g=s[h.id];g.needsUpdate!==!1&&h.setValue(t,g.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&s.push(d)}return s}}function Zv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const sR=37297;let oR=0;function lR(o,t){const i=o.split(`
`),s=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Kv=new dt;function cR(o){Nt._getMatrix(Kv,Nt.workingColorSpace,o);const t=`mat3( ${Kv.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(o)){case bu:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Qv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+lR(o.getShaderSource(t),h)}else return f}function uR(o,t){const i=cR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const fR={[_x]:"Linear",[vx]:"Reinhard",[xx]:"Cineon",[Sx]:"ACESFilmic",[Mx]:"AgX",[Ex]:"Neutral",[yx]:"Custom"};function dR(o,t){const i=fR[t];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hu=new pe;function hR(){Nt.getLuminanceCoefficients(hu);const o=hu.x.toFixed(4),t=hu.y.toFixed(4),i=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function mR(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gR(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(t,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function dl(o){return o!==""}function Jv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $v(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _R=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(o){return o.replace(_R,xR)}const vR=new Map;function xR(o,t){let i=gt[t];if(i===void 0){const s=vR.get(t);if(s!==void 0)i=gt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dp(i)}const SR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ex(o){return o.replace(SR,yR)}function yR(o,t,i,s){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function tx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const MR={[mu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function ER(o){return MR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bR={[Yr]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function TR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":bR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const AR={[no]:"ENVMAP_MODE_REFRACTION"};function RR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":AR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CR={[gx]:"ENVMAP_BLENDING_MULTIPLY",[cE]:"ENVMAP_BLENDING_MIX",[uE]:"ENVMAP_BLENDING_ADD"};function wR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":CR[o.combine]||"ENVMAP_BLENDING_NONE"}function NR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function DR(o,t,i,s){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=ER(i),p=TR(i),x=RR(i),_=wR(i),v=NR(i),M=pR(i),T=mR(f),U=c.createProgram();let y,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(dl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(dl).join(`
`),S.length>0&&(S+=`
`)):(y=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),S=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?gt.tonemapping_pars_fragment:"",i.toneMapping!==oa?dR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,uR("linearToOutputTexel",i.outputColorSpace),hR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),d=Dp(d),d=Jv(d,i),d=$v(d,i),h=Dp(h),h=Jv(h,i),h=$v(h,i),d=ex(d),h=ex(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const X=D+y+d,C=D+S+h,L=Zv(c,c.VERTEX_SHADER,X),P=Zv(c,c.FRAGMENT_SHADER,C);c.attachShader(U,L),c.attachShader(U,P),i.index0AttributeName!==void 0?c.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(U,0,"position"),c.linkProgram(U);function I(G){if(o.debug.checkShaderErrors){const Q=c.getProgramInfoLog(U)||"",te=c.getShaderInfoLog(L)||"",j=c.getShaderInfoLog(P)||"",ee=Q.trim(),k=te.trim(),W=j.trim();let ce=!0,ae=!0;if(c.getProgramParameter(U,c.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,U,L,P);else{const ue=Qv(c,L,"vertex"),ge=Qv(c,P,"fragment");Pt("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(U,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ee+`
`+ue+`
`+ge)}else ee!==""?ot("WebGLProgram: Program Info Log:",ee):(k===""||W==="")&&(ae=!1);ae&&(G.diagnostics={runnable:ce,programLog:ee,vertexShader:{log:k,prefix:y},fragmentShader:{log:W,prefix:S}})}c.deleteShader(L),c.deleteShader(P),E=new Su(c,U),N=gR(c,U)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=c.getProgramParameter(U,sR)),F},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oR++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=L,this.fragmentShader=P,this}let UR=0;class LR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new OR(t),i.set(t,s)),s}}class OR{constructor(t){this.id=UR++,this.code=t,this.usedTimes=0}}function PR(o){return o===jr||o===yu||o===Mu}function IR(o,t,i,s,c,f){const d=new Ox,h=new LR,g=new Set,p=[],x=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return g.add(E),E===0?"uv":`uv${E}`}function U(E,N,F,G,Q,te){const j=G.fog,ee=Q.geometry,k=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ce=t.get(E.envMap||k,W),ae=ce&&ce.mapping===Ru?ce.image.height:null,ue=M[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const ge=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Be=ge!==void 0?ge.length:0;let We=0;ee.morphAttributes.position!==void 0&&(We=1),ee.morphAttributes.normal!==void 0&&(We=2),ee.morphAttributes.color!==void 0&&(We=3);let B,me,Te,Z;if(ue){const Ct=ia[ue];B=Ct.vertexShader,me=Ct.fragmentShader}else{B=E.vertexShader,me=E.fragmentShader;const Ct=h.getVertexShaderStage(E),ut=h.getFragmentShaderStage(E);h.update(E,Ct,ut),Te=Ct.id,Z=ut.id}const he=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),De=Q.isInstancedMesh===!0,xe=Q.isBatchedMesh===!0,Ce=!!E.map,Vt=!!E.matcap,mt=!!ce,_t=!!E.aoMap,yt=!!E.lightMap,tt=!!E.bumpMap&&E.wireframe===!1,it=!!E.normalMap,Xt=!!E.displacementMap,fn=!!E.emissiveMap,Ot=!!E.metalnessMap,en=!!E.roughnessMap,Y=E.anisotropy>0,nn=E.clearcoat>0,Lt=E.dispersion>0,O=E.retroreflectivity>0,b=E.iridescence>0,ne=E.sheen>0,le=E.transmission>0,_e=Y&&!!E.anisotropyMap,Re=nn&&!!E.clearcoatMap,Ue=nn&&!!E.clearcoatNormalMap,ve=nn&&!!E.clearcoatRoughnessMap,Ee=b&&!!E.iridescenceMap,Ne=b&&!!E.iridescenceThicknessMap,$e=ne&&!!E.sheenColorMap,ze=ne&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,ke=!!E.specularColorMap,nt=!!E.specularIntensityMap,ct=le&&!!E.transmissionMap,q=le&&!!E.thicknessMap,we=!!E.gradientMap,Me=!!E.alphaMap,Le=E.alphaTest>0,Xe=!!E.alphaHash,be=!!E.extensions;let Je=oa;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Je=o.toneMapping);const Ve={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:me,defines:E.defines,customVertexShaderID:Te,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:xe,batchingColor:xe&&Q._colorsTexture!==null,instancing:De,instancingColor:De&&Q.instanceColor!==null,instancingMorph:De&&Q.morphTexture!==null,outputColorSpace:he===null?o.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ce,matcap:Vt,envMap:mt,envMapMode:mt&&ce.mapping,envMapCubeUVHeight:ae,aoMap:_t,lightMap:yt,bumpMap:tt,normalMap:it,displacementMap:Xt,emissiveMap:fn,normalMapObjectSpace:it&&E.normalMapType===hE,normalMapTangentSpace:it&&E.normalMapType===pv,packedNormalMap:it&&E.normalMapType===pv&&PR(E.normalMap.format),metalnessMap:Ot,roughnessMap:en,anisotropy:Y,anisotropyMap:_e,clearcoat:nn,clearcoatMap:Re,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ve,dispersion:Lt,retroreflection:O,iridescence:b,iridescenceMap:Ee,iridescenceThicknessMap:Ne,sheen:ne,sheenColorMap:$e,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:ke,specularIntensityMap:nt,transmission:le,transmissionMap:ct,thicknessMap:q,gradientMap:we,opaque:E.transparent===!1&&E.blending===hl&&E.alphaToCoverage===!1,alphaMap:Me,alphaTest:Le,alphaHash:Xe,combine:E.combine,mapUv:Ce&&T(E.map.channel),aoMapUv:_t&&T(E.aoMap.channel),lightMapUv:yt&&T(E.lightMap.channel),bumpMapUv:tt&&T(E.bumpMap.channel),normalMapUv:it&&T(E.normalMap.channel),displacementMapUv:Xt&&T(E.displacementMap.channel),emissiveMapUv:fn&&T(E.emissiveMap.channel),metalnessMapUv:Ot&&T(E.metalnessMap.channel),roughnessMapUv:en&&T(E.roughnessMap.channel),anisotropyMapUv:_e&&T(E.anisotropyMap.channel),clearcoatMapUv:Re&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(E.sheenRoughnessMap.channel),specularMapUv:Ie&&T(E.specularMap.channel),specularColorMapUv:ke&&T(E.specularColorMap.channel),specularIntensityMapUv:nt&&T(E.specularIntensityMap.channel),transmissionMapUv:ct&&T(E.transmissionMap.channel),thicknessMapUv:q&&T(E.thicknessMap.channel),alphaMapUv:Me&&T(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(it||Y),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ee.attributes.uv&&(Ce||Me),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&it===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:We,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&Nt.getTransfer(E.map.colorSpace)===Yt,decodeVideoTextureEmissive:fn&&E.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(E.emissiveMap.colorSpace)===Yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===aa,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&E.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ve.vertexUv1s=g.has(1),Ve.vertexUv2s=g.has(2),Ve.vertexUv3s=g.has(3),g.clear(),Ve}function y(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)N.push(F),N.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(S(N,E),D(N,E),N.push(o.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function S(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numSunLights),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numSunLightShadows),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function D(E,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function X(E){const N=M[E.type];let F;if(N){const G=ia[N];F=$E.clone(G.uniforms)}else F=E.uniforms;return F}function C(E,N){let F=x.get(N);return F!==void 0?++F.usedTimes:(F=new DR(o,N,E,c),p.push(F),x.set(N,F)),F}function L(E){if(--E.usedTimes===0){const N=p.indexOf(E);p[N]=p[p.length-1],p.pop(),x.delete(E.cacheKey),E.destroy()}}function P(E){h.remove(E)}function I(){h.dispose()}return{getParameters:U,getProgramCacheKey:y,getUniforms:X,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:p,dispose:I}}function zR(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,g){o.get(d)[h]=g}function f(){o=new WeakMap}return{has:t,get:i,remove:s,update:c,dispose:f}}function BR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function nx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ix(){const o=[];let t=0;const i=[],s=[],c=[];function f(){t=0,i.length=0,s.length=0,c.length=0}function d(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function h(v,M,T,U,y,S){let D=o[t];return D===void 0?(D={id:v.id,object:v,geometry:M,material:T,materialVariant:d(v),groupOrder:U,renderOrder:v.renderOrder,z:y,group:S},o[t]=D):(D.id=v.id,D.object=v,D.geometry=M,D.material=T,D.materialVariant=d(v),D.groupOrder=U,D.renderOrder=v.renderOrder,D.z=y,D.group=S),t++,D}function g(v,M,T,U,y,S,D){D.reversedDepth===!0&&(y=-y);const X=h(v,M,T,U,y,S);T.transmission>0?s.push(X):T.transparent===!0?c.push(X):i.push(X)}function p(v,M,T,U,y,S){const D=h(v,M,T,U,y,S);T.transmission>0?s.unshift(D):T.transparent===!0?c.unshift(D):i.unshift(D)}function x(v,M){i.length>1&&i.sort(v||BR),s.length>1&&s.sort(M||nx),c.length>1&&c.sort(M||nx)}function _(){for(let v=t,M=o.length;v<M;v++){const T=o[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:g,unshift:p,finish:_,sort:x}}function FR(){let o=new WeakMap;function t(s,c){const f=o.get(s);let d;return f===void 0?(d=new ix,o.set(s,[d])):c>=f.length?(d=new ix,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function HR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new pe,color:new Bt};break;case"SpotLight":i={position:new pe,direction:new pe,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return o[t.id]=i,i}}}function GR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let VR=0;function XR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kR(o){const t=new HR,i=GR(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new pe);const c=new pe,f=new _n,d=new _n;function h(p){let x=0,_=0,v=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let M=0,T=0,U=0,y=0,S=0,D=0,X=0,C=0,L=0,P=0,I=0,E=0,N=0,F=0;p.sort(XR);for(let Q=0,te=p.length;Q<te;Q++){const j=p[Q],ee=j.color,k=j.intensity,W=j.distance;let ce=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===jr?ce=j.shadow.map.texture:ce=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)x+=ee.r*k,_+=ee.g*k,v+=ee.b*k;else if(j.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(j.sh.coefficients[ae],k);F++}else if(j.isSunLight){const ae=t.get(j);if(ae.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const ue=j.shadow,ge=i.get(j);ge.shadowIntensity=ue.intensity,ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize.copy(ue.mapSize).multiply(ue.getFrameExtents()),s.sunShadow[T]=ge,s.sunShadowMap[T]=ce;const Be=ue.getViewportCount();for(let We=0;We<Be;We++)s.sunShadowMatrix[U+We]=ue.getMatrix(We),s.sunShadowCascade[U+We]=ue._cascadeData[We];U+=Be,T++}s.sun[M]=ae,M++}else if(j.isDirectionalLight){const ae=t.get(j);if(ae.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const ue=j.shadow,ge=i.get(j);ge.shadowIntensity=ue.intensity,ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,s.directionalShadow[y]=ge,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=j.shadow.matrix,L++}s.directional[y]=ae,y++}else if(j.isSpotLight){const ae=t.get(j);ae.position.setFromMatrixPosition(j.matrixWorld),ae.color.copy(ee).multiplyScalar(k),ae.distance=W,ae.coneCos=Math.cos(j.angle),ae.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ae.decay=j.decay,s.spot[D]=ae;const ue=j.shadow;if(j.map&&(s.spotLightMap[E]=j.map,E++,ue.updateMatrices(j),j.castShadow&&N++),s.spotLightMatrix[D]=ue.matrix,j.castShadow){const ge=i.get(j);ge.shadowIntensity=ue.intensity,ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,s.spotShadow[D]=ge,s.spotShadowMap[D]=ce,I++}D++}else if(j.isRectAreaLight){const ae=t.get(j);ae.color.copy(ee).multiplyScalar(k),ae.halfWidth.set(j.width*.5,0,0),ae.halfHeight.set(0,j.height*.5,0),s.rectArea[X]=ae,X++}else if(j.isPointLight){const ae=t.get(j);if(ae.color.copy(j.color).multiplyScalar(j.intensity),ae.distance=j.distance,ae.decay=j.decay,j.castShadow){const ue=j.shadow,ge=i.get(j);ge.shadowIntensity=ue.intensity,ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,ge.shadowCameraNear=ue.camera.near,ge.shadowCameraFar=ue.camera.far,s.pointShadow[S]=ge,s.pointShadowMap[S]=ce,s.pointShadowMatrix[S]=j.shadow.matrix,P++}s.point[S]=ae,S++}else if(j.isHemisphereLight){const ae=t.get(j);ae.skyColor.copy(j.color).multiplyScalar(k),ae.groundColor.copy(j.groundColor).multiplyScalar(k),s.hemi[C]=ae,C++}}X>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=v;const G=s.hash;(G.sunLength!==M||G.directionalLength!==y||G.pointLength!==S||G.spotLength!==D||G.rectAreaLength!==X||G.hemiLength!==C||G.numSunShadows!==T||G.numDirectionalShadows!==L||G.numPointShadows!==P||G.numSpotShadows!==I||G.numSpotMaps!==E||G.numLightProbes!==F)&&(s.sun.length=M,s.directional.length=y,s.spot.length=D,s.rectArea.length=X,s.point.length=S,s.hemi.length=C,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=U,s.sunShadowCascade.length=U,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.pointShadowMatrix.length=P,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+E-N,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,G.sunLength=M,G.directionalLength=y,G.pointLength=S,G.spotLength=D,G.rectAreaLength=X,G.hemiLength=C,G.numSunShadows=T,G.numDirectionalShadows=L,G.numPointShadows=P,G.numSpotShadows=I,G.numSpotMaps=E,G.numLightProbes=F,s.version=VR++)}function g(p,x){let _=0,v=0,M=0,T=0,U=0,y=0;const S=x.matrixWorldInverse;for(let D=0,X=p.length;D<X;D++){const C=p[D];if(C.isSunLight){const L=s.sun[_];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),_++}else if(C.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(S),v++}else if(C.isSpotLight){const L=s.spot[T];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(S),T++}else if(C.isRectAreaLight){const L=s.rectArea[U];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),d.identity(),f.copy(C.matrixWorld),f.premultiply(S),d.extractRotation(f),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),U++}else if(C.isPointLight){const L=s.point[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),M++}else if(C.isHemisphereLight){const L=s.hemi[y];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),y++}}}return{setup:h,setupView:g,state:s}}function ax(o){const t=new kR(o),i=[],s=[],c=[];function f(v){_.camera=v,i.length=0,s.length=0,c.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function g(v){c.push(v)}function p(){t.setup(i)}function x(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:g}}function WR(o){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new ax(o),t.set(c,[h])):f>=d.length?(h=new ax(o),d.push(h)):h=d[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const qR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jR=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],ZR=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],rx=new _n,ul=new pe,Gh=new pe;function KR(o,t,i){let s=new Bx;const c=new Ft,f=new Ft,d=new cn,h=new ib,g=new ab,p={},x=i.maxTextureSize,_={[qr]:Kn,[Kn]:qr,[aa]:aa},v=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:qR,fragmentShader:YR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new Oa;T.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Fi(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let S=this.type;this.render=function(P,I,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===kM&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mu);const N=o.getRenderTarget(),F=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Na),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const te=S!==this.type;te&&I.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(ee=>ee.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,ee=P.length;j<ee;j++){const k=P[j],W=k.shadow;if(W===void 0){ot("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;c.copy(W.mapSize);const ce=W.getFrameExtents();c.multiply(ce),f.copy(W.mapSize),(c.x>x||c.y>x)&&(c.x>x&&(f.x=Math.floor(x/ce.x),c.x=f.x*ce.x,W.mapSize.x=f.x),c.y>x&&(f.y=Math.floor(x/ce.y),c.y=f.y*ce.y,W.mapSize.y=f.y));const ae=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ae,W.map===null||te===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===fl){if(k.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new zi(c.x,c.y,{format:jr,type:ca,minFilter:In,magFilter:In,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new vl(c.x,c.y,ra),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=La,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un}else k.isPointLight?(W.map=new qx(c.x),W.map.depthTexture=new QE(c.x,la)):(W.map=new zi(c.x,c.y),W.map.depthTexture=new vl(c.x,c.y,la)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=La,this.type===mu?(W.map.depthTexture.compareFunction=ae?Gp:Hp,W.map.depthTexture.minFilter=In,W.map.depthTexture.magFilter=In):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==c.x||W.map.height!==c.y)&&W.map.setSize(c.x,c.y);const ue=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,E);for(let ge=0;ge<ue;ge++){const Be=W.getCamera(ge);if(k.isPointLight){const We=W.camera,B=W.matrix,me=k.distance||We.far;me!==We.far&&(We.far=me,We.updateProjectionMatrix()),ul.setFromMatrixPosition(k.matrixWorld),We.position.copy(ul),Gh.copy(We.position),Gh.add(jR[ge]),We.up.copy(ZR[ge]),We.lookAt(Gh),We.updateMatrixWorld(),B.makeTranslation(-ul.x,-ul.y,-ul.z),rx.multiplyMatrices(We.projectionMatrix,We.matrixWorldInverse),W._frustum.setFromProjectionMatrix(rx,We.coordinateSystem,We.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,ge),o.clear();else{ge===0&&(o.setRenderTarget(W.map),o.clear());const We=W.getViewport(ge);d.set(f.x*We.x,f.y*We.y,f.x*We.z,f.y*We.w),Q.viewport(d)}s=W.getFrustum(ge),C(I,E,Be,k,this.type)}W.isPointLightShadow!==!0&&this.type===fl&&D(W,E),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(N,F,G)};function D(P,I){const E=t.update(U);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new zi(c.x,c.y,{format:jr,type:ca}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value.set(P.map.width,P.map.height),v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(I,null,E,v,U,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(I,null,E,M,U,null)}function X(P,I,E,N){let F=null;const G=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)F=G;else if(F=E.isPointLight===!0?g:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=F.uuid,te=I.uuid;let j=p[Q];j===void 0&&(j={},p[Q]=j);let ee=j[te];ee===void 0&&(ee=F.clone(),j[te]=ee,I.addEventListener("dispose",L)),F=ee}if(F.visible=I.visible,F.wireframe=I.wireframe,N===fl?F.side=I.shadowSide!==null?I.shadowSide:I.side:F.side=I.shadowSide!==null?I.shadowSide:_[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Q=o.properties.get(F);Q.light=E}return F}function C(P,I,E,N,F){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&F===fl)&&(!P.frustumCulled||P.intersectsFrustum(s))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const te=t.update(P),j=P.material;if(Array.isArray(j)){const ee=te.groups;for(let k=0,W=ee.length;k<W;k++){const ce=ee[k],ae=j[ce.materialIndex];if(ae&&ae.visible){const ue=X(P,ae,N,F);P.onBeforeShadow(o,P,I,E,te,ue,ce),o.renderBufferDirect(E,null,te,ue,P,ce),P.onAfterShadow(o,P,I,E,te,ue,ce)}}}else if(j.visible){const ee=X(P,j,N,F);P.onBeforeShadow(o,P,I,E,te,ee,null),o.renderBufferDirect(E,null,te,ee,P,null),P.onAfterShadow(o,P,I,E,te,ee,null)}}const Q=P.children;for(let te=0,j=Q.length;te<j;te++)C(Q[te],I,E,N,F)}function L(P){P.target.removeEventListener("dispose",L);for(const E in p){const N=p[E],F=P.target.uuid;F in N&&(N[F].dispose(),delete N[F])}}}function QR(o,t){function i(){let q=!1;const we=new cn;let Me=null;const Le=new cn(0,0,0,0);return{setMask:function(Xe){Me!==Xe&&!q&&(o.colorMask(Xe,Xe,Xe,Xe),Me=Xe)},setLocked:function(Xe){q=Xe},setClear:function(Xe,be,Je,Ve,Ct){Ct===!0&&(Xe*=Ve,be*=Ve,Je*=Ve),we.set(Xe,be,Je,Ve),Le.equals(we)===!1&&(o.clearColor(Xe,be,Je,Ve),Le.copy(we))},reset:function(){q=!1,Me=null,Le.set(-1,0,0,0)}}}function s(){let q=!1,we=!1,Me=null,Le=null,Xe=null;return{setReversed:function(be){if(we!==be){const Je=t.get("EXT_clip_control");be?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),we=be;const Ve=Xe;Xe=null,this.setClear(Ve)}},getReversed:function(){return we},setTest:function(be){be?he(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(be){Me!==be&&!q&&(o.depthMask(be),Me=be)},setFunc:function(be){if(we&&(be=TE[be]),Le!==be){switch(be){case kh:o.depthFunc(o.NEVER);break;case Wh:o.depthFunc(o.ALWAYS);break;case qh:o.depthFunc(o.LESS);break;case pl:o.depthFunc(o.LEQUAL);break;case Yh:o.depthFunc(o.EQUAL);break;case jh:o.depthFunc(o.GEQUAL);break;case Zh:o.depthFunc(o.GREATER);break;case Kh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=be}},setLocked:function(be){q=be},setClear:function(be){Xe!==be&&(Xe=be,we&&(be=1-be),o.clearDepth(be))},reset:function(){q=!1,Me=null,Le=null,Xe=null,we=!1}}}function c(){let q=!1,we=null,Me=null,Le=null,Xe=null,be=null,Je=null,Ve=null,Ct=null;return{setTest:function(ut){q||(ut?he(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(ut){we!==ut&&!q&&(o.stencilMask(ut),we=ut)},setFunc:function(ut,Qn,ui){(Me!==ut||Le!==Qn||Xe!==ui)&&(o.stencilFunc(ut,Qn,ui),Me=ut,Le=Qn,Xe=ui)},setOp:function(ut,Qn,ui){(be!==ut||Je!==Qn||Ve!==ui)&&(o.stencilOp(ut,Qn,ui),be=ut,Je=Qn,Ve=ui)},setLocked:function(ut){q=ut},setClear:function(ut){Ct!==ut&&(o.clearStencil(ut),Ct=ut)},reset:function(){q=!1,we=null,Me=null,Le=null,Xe=null,be=null,Je=null,Ve=null,Ct=null}}}const f=new i,d=new s,h=new c,g=new WeakMap,p=new WeakMap;let x={},_={},v={},M=new WeakMap,T=[],U=null,y=!1,S=null,D=null,X=null,C=null,L=null,P=null,I=null,E=new Bt(0,0,0),N=0,F=!1,G=null,Q=null,te=null,j=null,ee=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ce=0;const ae=o.getParameter(o.VERSION);ae.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ae)[1]),W=ce>=1):ae.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),W=ce>=2);let ue=null,ge={};const Be=o.getParameter(o.SCISSOR_BOX),We=o.getParameter(o.VIEWPORT),B=new cn().fromArray(Be),me=new cn().fromArray(We);function Te(q,we,Me,Le){const Xe=new Uint8Array(4),be=o.createTexture();o.bindTexture(q,be),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Je=0;Je<Me;Je++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,Xe):o.texImage2D(we+Je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xe);return be}const Z={};Z[o.TEXTURE_2D]=Te(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=Te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=Te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=Te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),he(o.DEPTH_TEST),d.setFunc(pl),tt(!1),it(uv),he(o.CULL_FACE),_t(Na);function he(q){x[q]!==!0&&(o.enable(q),x[q]=!0)}function Ae(q){x[q]!==!1&&(o.disable(q),x[q]=!1)}function De(q,we){return v[q]!==we?(o.bindFramebuffer(q,we),v[q]=we,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=we),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=we),!0):!1}function xe(q,we){let Me=T,Le=!1;if(q){Me=M.get(we),Me===void 0&&(Me=[],M.set(we,Me));const Xe=q.textures;if(Me.length!==Xe.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let be=0,Je=Xe.length;be<Je;be++)Me[be]=o.COLOR_ATTACHMENT0+be;Me.length=Xe.length,Le=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Le=!0);Le&&o.drawBuffers(Me)}function Ce(q){return U!==q?(o.useProgram(q),U=q,!0):!1}const Vt={[Js]:o.FUNC_ADD,[qM]:o.FUNC_SUBTRACT,[YM]:o.FUNC_REVERSE_SUBTRACT};Vt[jM]=o.MIN,Vt[ZM]=o.MAX;const mt={[KM]:o.ZERO,[QM]:o.ONE,[JM]:o.SRC_COLOR,[px]:o.SRC_ALPHA,[aE]:o.SRC_ALPHA_SATURATE,[nE]:o.DST_COLOR,[eE]:o.DST_ALPHA,[$M]:o.ONE_MINUS_SRC_COLOR,[mx]:o.ONE_MINUS_SRC_ALPHA,[iE]:o.ONE_MINUS_DST_COLOR,[tE]:o.ONE_MINUS_DST_ALPHA,[rE]:o.CONSTANT_COLOR,[sE]:o.ONE_MINUS_CONSTANT_COLOR,[oE]:o.CONSTANT_ALPHA,[lE]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(q,we,Me,Le,Xe,be,Je,Ve,Ct,ut){if(q===Na){y===!0&&(Ae(o.BLEND),y=!1);return}if(y===!1&&(he(o.BLEND),y=!0),q!==WM){if(q!==S||ut!==F){if((D!==Js||L!==Js)&&(o.blendEquation(o.FUNC_ADD),D=Js,L=Js),ut)switch(q){case hl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fv:o.blendFunc(o.ONE,o.ONE);break;case dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Pt("WebGLState: Invalid blending: ",q);break}else switch(q){case hl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dv:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hv:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",q);break}X=null,C=null,P=null,I=null,E.set(0,0,0),N=0,S=q,F=ut}return}Xe=Xe||we,be=be||Me,Je=Je||Le,(we!==D||Xe!==L)&&(o.blendEquationSeparate(Vt[we],Vt[Xe]),D=we,L=Xe),(Me!==X||Le!==C||be!==P||Je!==I)&&(o.blendFuncSeparate(mt[Me],mt[Le],mt[be],mt[Je]),X=Me,C=Le,P=be,I=Je),(Ve.equals(E)===!1||Ct!==N)&&(o.blendColor(Ve.r,Ve.g,Ve.b,Ct),E.copy(Ve),N=Ct),S=q,F=!1}function yt(q,we){q.side===aa?Ae(o.CULL_FACE):he(o.CULL_FACE);let Me=q.side===Kn;we&&(Me=!Me),tt(Me),q.blending===hl&&q.transparent===!1?_t(Na):_t(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),f.setMask(q.colorWrite);const Le=q.stencilWrite;h.setTest(Le),Le&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),fn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function tt(q){G!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),G=q)}function it(q){q!==VM?(he(o.CULL_FACE),q!==Q&&(q===uv?o.cullFace(o.BACK):q===XM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),Q=q}function Xt(q){q!==te&&(W&&o.lineWidth(q),te=q)}function fn(q,we,Me){q?(he(o.POLYGON_OFFSET_FILL),(j!==we||ee!==Me)&&(j=we,ee=Me,d.getReversed()&&(we=-we),o.polygonOffset(we,Me))):Ae(o.POLYGON_OFFSET_FILL)}function Ot(q){q?he(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function en(q){q===void 0&&(q=o.TEXTURE0+k-1),ue!==q&&(o.activeTexture(q),ue=q)}function Y(q,we,Me){Me===void 0&&(ue===null?Me=o.TEXTURE0+k-1:Me=ue);let Le=ge[Me];Le===void 0&&(Le={type:void 0,texture:void 0},ge[Me]=Le),(Le.type!==q||Le.texture!==we)&&(ue!==Me&&(o.activeTexture(Me),ue=Me),o.bindTexture(q,we||Z[q]),Le.type=q,Le.texture=we)}function nn(){const q=ge[ue];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Lt(){try{o.compressedTexImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function b(){try{o.texSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function ne(){try{o.texSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function _e(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Re(){try{o.texStorage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ue(){try{o.texStorage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function ve(){try{o.texImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ee(){try{o.texImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ne(q){return _[q]!==void 0?_[q]:o.getParameter(q)}function $e(q,we){_[q]!==we&&(o.pixelStorei(q,we),_[q]=we)}function ze(q){B.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),B.copy(q))}function Ie(q){me.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),me.copy(q))}function ke(q,we){let Me=p.get(we);Me===void 0&&(Me=new WeakMap,p.set(we,Me));let Le=Me.get(q);Le===void 0&&(Le=o.getUniformBlockIndex(we,q.name),Me.set(q,Le))}function nt(q,we){const Le=p.get(we).get(q);g.get(we)!==Le&&(o.uniformBlockBinding(we,Le,q.__bindingPointIndex),g.set(we,Le))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},_={},ue=null,ge={},v={},M=new WeakMap,T=[],U=null,y=!1,S=null,D=null,X=null,C=null,L=null,P=null,I=null,E=new Bt(0,0,0),N=0,F=!1,G=null,Q=null,te=null,j=null,ee=null,B.set(0,0,o.canvas.width,o.canvas.height),me.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:he,disable:Ae,bindFramebuffer:De,drawBuffers:xe,useProgram:Ce,setBlending:_t,setMaterial:yt,setFlipSided:tt,setCullFace:it,setLineWidth:Xt,setPolygonOffset:fn,setScissorTest:Ot,activeTexture:en,bindTexture:Y,unbindTexture:nn,compressedTexImage2D:Lt,compressedTexImage3D:O,texImage2D:ve,texImage3D:Ee,pixelStorei:$e,getParameter:Ne,updateUBOMapping:ke,uniformBlockBinding:nt,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:b,texSubImage3D:ne,compressedTexSubImage2D:le,compressedTexSubImage3D:_e,scissor:ze,viewport:Ie,reset:ct}}function JR(o,t,i,s,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,x=new WeakMap,_=new Set;let v;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(O,b){return T?new OffscreenCanvas(O,b):_l("canvas")}function y(O,b,ne){let le=1;const _e=Lt(O);if((_e.width>ne||_e.height>ne)&&(le=ne/Math.max(_e.width,_e.height)),le<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Re=Math.floor(le*_e.width),Ue=Math.floor(le*_e.height);v===void 0&&(v=U(Re,Ue));const ve=b?U(Re,Ue):v;return ve.width=Re,ve.height=Ue,ve.getContext("2d").drawImage(O,0,0,Re,Ue),ot("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Re+"x"+Ue+")."),ve}else return"data"in O&&ot("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),O;return O}function S(O){return O.generateMipmaps}function D(O){o.generateMipmap(O)}function X(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,b,ne,le,_e,Re=!1){if(O!==null){if(o[O]!==void 0)return o[O];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ue;le&&(Ue=t.get("EXT_texture_norm16"),Ue||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=b;if(b===o.RED&&(ne===o.FLOAT&&(ve=o.R32F),ne===o.HALF_FLOAT&&(ve=o.R16F),ne===o.UNSIGNED_BYTE&&(ve=o.R8),ne===o.UNSIGNED_SHORT&&Ue&&(ve=Ue.R16_EXT),ne===o.SHORT&&Ue&&(ve=Ue.R16_SNORM_EXT)),b===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.R8UI),ne===o.UNSIGNED_SHORT&&(ve=o.R16UI),ne===o.UNSIGNED_INT&&(ve=o.R32UI),ne===o.BYTE&&(ve=o.R8I),ne===o.SHORT&&(ve=o.R16I),ne===o.INT&&(ve=o.R32I)),b===o.RG&&(ne===o.FLOAT&&(ve=o.RG32F),ne===o.HALF_FLOAT&&(ve=o.RG16F),ne===o.UNSIGNED_BYTE&&(ve=o.RG8),ne===o.UNSIGNED_SHORT&&Ue&&(ve=Ue.RG16_EXT),ne===o.SHORT&&Ue&&(ve=Ue.RG16_SNORM_EXT)),b===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.RG8UI),ne===o.UNSIGNED_SHORT&&(ve=o.RG16UI),ne===o.UNSIGNED_INT&&(ve=o.RG32UI),ne===o.BYTE&&(ve=o.RG8I),ne===o.SHORT&&(ve=o.RG16I),ne===o.INT&&(ve=o.RG32I)),b===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(ve=o.RGB16UI),ne===o.UNSIGNED_INT&&(ve=o.RGB32UI),ne===o.BYTE&&(ve=o.RGB8I),ne===o.SHORT&&(ve=o.RGB16I),ne===o.INT&&(ve=o.RGB32I)),b===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(ve=o.RGBA16UI),ne===o.UNSIGNED_INT&&(ve=o.RGBA32UI),ne===o.BYTE&&(ve=o.RGBA8I),ne===o.SHORT&&(ve=o.RGBA16I),ne===o.INT&&(ve=o.RGBA32I)),b===o.RGB&&(ne===o.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGB16_EXT),ne===o.SHORT&&Ue&&(ve=Ue.RGB16_SNORM_EXT),ne===o.UNSIGNED_INT_5_9_9_9_REV&&(ve=o.RGB9_E5),ne===o.UNSIGNED_INT_10F_11F_11F_REV&&(ve=o.R11F_G11F_B10F)),b===o.RGBA){const Ee=Re?bu:Nt.getTransfer(_e);ne===o.FLOAT&&(ve=o.RGBA32F),ne===o.HALF_FLOAT&&(ve=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(ve=Ee===Yt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGBA16_EXT),ne===o.SHORT&&Ue&&(ve=Ue.RGBA16_SNORM_EXT),ne===o.UNSIGNED_SHORT_4_4_4_4&&(ve=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(ve=o.RGB5_A1)}return(ve===o.R16F||ve===o.R32F||ve===o.RG16F||ve===o.RG32F||ve===o.RGBA16F||ve===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function L(O,b){let ne;return O?b===null||b===la||b===gl?ne=o.DEPTH24_STENCIL8:b===ra?ne=o.DEPTH32F_STENCIL8:b===ml&&(ne=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===la||b===gl?ne=o.DEPTH_COMPONENT24:b===ra?ne=o.DEPTH_COMPONENT32F:b===ml&&(ne=o.DEPTH_COMPONENT16),ne}function P(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function I(O){const b=O.target;b.removeEventListener("dispose",I),N(b),b.isVideoTexture&&x.delete(b),b.isHTMLTexture&&_.delete(b)}function E(O){const b=O.target;b.removeEventListener("dispose",E),G(b)}function N(O){const b=s.get(O);if(b.__webglInit===void 0)return;const ne=O.source,le=M.get(ne);if(le){const _e=le[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&F(O),Object.keys(le).length===0&&M.delete(ne)}s.remove(O)}function F(O){const b=s.get(O);o.deleteTexture(b.__webglTexture);const ne=O.source,le=M.get(ne);delete le[b.__cacheKey],d.memory.textures--}function G(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let _e=0;_e<b.__webglFramebuffer[le].length;_e++)o.deleteFramebuffer(b.__webglFramebuffer[le][_e]);else o.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)o.deleteFramebuffer(b.__webglFramebuffer[le]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=O.textures;for(let le=0,_e=ne.length;le<_e;le++){const Re=s.get(ne[le]);Re.__webglTexture&&(o.deleteTexture(Re.__webglTexture),d.memory.textures--),s.remove(ne[le])}s.remove(O)}let Q=0;function te(){Q=0}function j(){return Q}function ee(O){Q=O}function k(){const O=Q;return O>=c.maxTextures&&ot("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+c.maxTextures),Q+=1,O}function W(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function ce(O,b){const ne=s.get(O);if(O.isVideoTexture&&Y(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ne.__version!==O.version){const le=O.image;if(le===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ne,O,b);return}}else O.isExternalTexture&&(ne.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+b)}function ae(O,b){const ne=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){Ae(ne,O,b);return}else O.isExternalTexture&&(ne.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+b)}function ue(O,b){const ne=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){Ae(ne,O,b);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+b)}function ge(O,b){const ne=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&ne.__version!==O.version){De(ne,O,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+b)}const Be={[Qh]:o.REPEAT,[Pi]:o.CLAMP_TO_EDGE,[Jh]:o.MIRRORED_REPEAT},We={[Un]:o.NEAREST,[fE]:o.NEAREST_MIPMAP_NEAREST,[Wc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[fh]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},B={[mE]:o.NEVER,[SE]:o.ALWAYS,[gE]:o.LESS,[Hp]:o.LEQUAL,[_E]:o.EQUAL,[Gp]:o.GEQUAL,[vE]:o.GREATER,[xE]:o.NOTEQUAL};function me(O,b){if(b.type===ra&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===fh||b.magFilter===Wc||b.magFilter===kr||b.minFilter===In||b.minFilter===fh||b.minFilter===Wc||b.minFilter===kr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Be[b.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Be[b.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Be[b.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,We[b.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,We[b.minFilter]),b.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,B[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==Wc&&b.minFilter!==kr||b.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const ne=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,c.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Te(O,b){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",I));const le=b.source;let _e=M.get(le);_e===void 0&&(_e={},M.set(le,_e));const Re=W(b);if(Re!==O.__cacheKey){_e[Re]===void 0&&(_e[Re]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),_e[Re].usedTimes++;const Ue=_e[O.__cacheKey];Ue!==void 0&&(_e[O.__cacheKey].usedTimes--,Ue.usedTimes===0&&F(b)),O.__cacheKey=Re,O.__webglTexture=_e[Re].texture}return ne}function Z(O,b,ne){return Math.floor(Math.floor(O/ne)/b)}function he(O,b,ne,le){const Re=O.updateRanges;if(Re.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,ne,le,b.data);else{Re.sort(($e,ze)=>$e.start-ze.start);let Ue=0;for(let $e=1;$e<Re.length;$e++){const ze=Re[Ue],Ie=Re[$e],ke=ze.start+ze.count,nt=Z(Ie.start,b.width,4),ct=Z(ze.start,b.width,4);Ie.start<=ke+1&&nt===ct&&Z(Ie.start+Ie.count-1,b.width,4)===nt?ze.count=Math.max(ze.count,Ie.start+Ie.count-ze.start):(++Ue,Re[Ue]=Ie)}Re.length=Ue+1;const ve=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),Ne=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let $e=0,ze=Re.length;$e<ze;$e++){const Ie=Re[$e],ke=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),ct=ke%b.width,q=Math.floor(ke/b.width),we=nt,Me=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ct,q,we,Me,ne,le,b.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ve),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ne)}}function Ae(O,b,ne){let le=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=o.TEXTURE_3D);const _e=Te(O,b),Re=b.source;i.bindTexture(le,O.__webglTexture,o.TEXTURE0+ne);const Ue=s.get(Re);if(Re.version!==Ue.__version||_e===!0){if(i.activeTexture(o.TEXTURE0+ne),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Me=Nt.getPrimaries(Nt.workingColorSpace),Le=b.colorSpace===mr?null:Nt.getPrimaries(b.colorSpace),Xe=b.colorSpace===mr||Me===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment);let Ee=y(b.image,!1,c.maxTextureSize);Ee=nn(b,Ee);const Ne=f.convert(b.format,b.colorSpace),$e=f.convert(b.type);let ze=C(b.internalFormat,Ne,$e,b.normalized,b.colorSpace,b.isVideoTexture);me(le,b);let Ie;const ke=b.mipmaps,nt=b.isVideoTexture!==!0,ct=Ue.__version===void 0||_e===!0,q=Re.dataReady,we=P(b,Ee);if(b.isDepthTexture)ze=L(b.format===Wr,b.type),ct&&(nt?i.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ne,$e,null));else if(b.isDataTexture)if(ke.length>0){nt&&ct&&i.texStorage2D(o.TEXTURE_2D,we,ze,ke[0].width,ke[0].height);for(let Me=0,Le=ke.length;Me<Le;Me++)Ie=ke[Me],nt?q&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ne,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ne,$e,Ie.data);b.generateMipmaps=!1}else nt?(ct&&i.texStorage2D(o.TEXTURE_2D,we,ze,Ee.width,Ee.height),q&&he(b,Ee,Ne,$e)):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ne,$e,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,ze,ke[0].width,ke[0].height,Ee.depth);for(let Me=0,Le=ke.length;Me<Le;Me++)if(Ie=ke[Me],b.format!==Ii)if(Ne!==null)if(nt){if(q)if(b.layerUpdates.size>0){const Xe=zv(Ie.width,Ie.height,b.format,b.type);for(const be of b.layerUpdates){const Je=Ie.data.subarray(be*Xe/Ie.data.BYTES_PER_ELEMENT,(be+1)*Xe/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,be,Ie.width,Ie.height,1,Ne,Je)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,Ne,Ie.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,Ne,$e,Ie.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,Ne,$e,Ie.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{nt&&ct&&i.texStorage2D(o.TEXTURE_2D,we,ze,ke[0].width,ke[0].height);for(let Me=0,Le=ke.length;Me<Le;Me++)Ie=ke[Me],b.format!==Ii?Ne!==null?nt?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ne,Ie.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?q&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ne,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ne,$e,Ie.data)}else if(b.isDataArrayTexture)if(nt){if(ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,ze,Ee.width,Ee.height,Ee.depth),q)if(b.layerUpdates.size>0){const Me=zv(Ee.width,Ee.height,b.format,b.type);for(const Le of b.layerUpdates){const Xe=Ee.data.subarray(Le*Me/Ee.data.BYTES_PER_ELEMENT,(Le+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Le,Ee.width,Ee.height,1,Ne,$e,Xe)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,$e,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Ne,$e,Ee.data);else if(b.isData3DTexture)nt?(ct&&i.texStorage3D(o.TEXTURE_3D,we,ze,Ee.width,Ee.height,Ee.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,$e,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Ne,$e,Ee.data);else if(b.isFramebufferTexture){if(ct)if(nt)i.texStorage2D(o.TEXTURE_2D,we,ze,Ee.width,Ee.height);else{let Me=Ee.width,Le=Ee.height;for(let Xe=0;Xe<we;Xe++)i.texImage2D(o.TEXTURE_2D,Xe,ze,Me,Le,0,Ne,$e,null),Me>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Ee.parentNode!==Me){Me.appendChild(Ee),_.add(b),Me.onpaint=Le=>{const Xe=Le.changedElements;for(const be of _)Xe.includes(be.image)&&(be.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const Xe=o.RGBA,be=o.RGBA,Je=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xe,be,Je,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ke.length>0){if(nt&&ct){const Me=Lt(ke[0]);i.texStorage2D(o.TEXTURE_2D,we,ze,Me.width,Me.height)}for(let Me=0,Le=ke.length;Me<Le;Me++)Ie=ke[Me],nt?q&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ne,$e,Ie):i.texImage2D(o.TEXTURE_2D,Me,ze,Ne,$e,Ie);b.generateMipmaps=!1}else if(nt){if(ct){const Me=Lt(Ee);i.texStorage2D(o.TEXTURE_2D,we,ze,Me.width,Me.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ne,$e,Ee)}else i.texImage2D(o.TEXTURE_2D,0,ze,Ne,$e,Ee);S(b)&&D(le),Ue.__version=Re.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function De(O,b,ne){if(b.image.length!==6)return;const le=Te(O,b),_e=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ne);const Re=s.get(_e);if(_e.version!==Re.__version||le===!0){i.activeTexture(o.TEXTURE0+ne);const Ue=Nt.getPrimaries(Nt.workingColorSpace),ve=b.colorSpace===mr?null:Nt.getPrimaries(b.colorSpace),Ee=b.colorSpace===mr||Ue===ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,$e=b.image[0]&&b.image[0].isDataTexture,ze=[];for(let be=0;be<6;be++)!Ne&&!$e?ze[be]=y(b.image[be],!0,c.maxCubemapSize):ze[be]=$e?b.image[be].image:b.image[be],ze[be]=nn(b,ze[be]);const Ie=ze[0],ke=f.convert(b.format,b.colorSpace),nt=f.convert(b.type),ct=C(b.internalFormat,ke,nt,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,we=Re.__version===void 0||le===!0,Me=_e.dataReady;let Le=P(b,Ie);me(o.TEXTURE_CUBE_MAP,b);let Xe;if(Ne){q&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ct,Ie.width,Ie.height);for(let be=0;be<6;be++){Xe=ze[be].mipmaps;for(let Je=0;Je<Xe.length;Je++){const Ve=Xe[Je];b.format!==Ii?ke!==null?q?Me&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ve.width,Ve.height,ke,Ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,ct,Ve.width,Ve.height,0,Ve.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ve.width,Ve.height,ke,nt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,ct,Ve.width,Ve.height,0,ke,nt,Ve.data)}}}else{if(Xe=b.mipmaps,q&&we){Xe.length>0&&Le++;const be=Lt(ze[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ct,be.width,be.height)}for(let be=0;be<6;be++)if($e){q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze[be].width,ze[be].height,ke,nt,ze[be].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,ze[be].width,ze[be].height,0,ke,nt,ze[be].data);for(let Je=0;Je<Xe.length;Je++){const Ct=Xe[Je].image[be].image;q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,Ct.width,Ct.height,ke,nt,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,ct,Ct.width,Ct.height,0,ke,nt,Ct.data)}}else{q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ke,nt,ze[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,ke,nt,ze[be]);for(let Je=0;Je<Xe.length;Je++){const Ve=Xe[Je];q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,ke,nt,Ve.image[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,ct,ke,nt,Ve.image[be])}}}S(b)&&D(o.TEXTURE_CUBE_MAP),Re.__version=_e.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function xe(O,b,ne,le,_e,Re){const Ue=f.convert(ne.format,ne.colorSpace),ve=f.convert(ne.type),Ee=C(ne.internalFormat,Ue,ve,ne.normalized,ne.colorSpace),Ne=s.get(b),$e=s.get(ne);if($e.__renderTarget=b,!Ne.__hasExternalTextures){const ze=Math.max(1,b.width>>Re),Ie=Math.max(1,b.height>>Re);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?i.texImage3D(_e,Re,Ee,ze,Ie,b.depth,0,Ue,ve,null):i.texImage2D(_e,Re,Ee,ze,Ie,0,Ue,ve,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),en(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,le,_e,$e.__webglTexture,0,Ot(b)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,le,_e,$e.__webglTexture,Re),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(O,b,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,O),b.depthBuffer){const le=b.depthTexture,_e=le&&le.isDepthTexture?le.type:null,Re=L(b.stencilBuffer,_e),Ue=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;en(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot(b),Re,b.width,b.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot(b),Re,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Re,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ue,o.RENDERBUFFER,O)}else{const le=b.textures;for(let _e=0;_e<le.length;_e++){const Re=le[_e],Ue=f.convert(Re.format,Re.colorSpace),ve=f.convert(Re.type),Ee=C(Re.internalFormat,Ue,ve,Re.normalized,Re.colorSpace);en(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot(b),Ee,b.width,b.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot(b),Ee,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(O,b,ne){const le=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=s.get(b.depthTexture);if(_e.__renderTarget=b,(!_e.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),le){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),_e.__webglTexture===void 0){_e.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),me(o.TEXTURE_CUBE_MAP,b.depthTexture);const Ne=f.convert(b.depthTexture.format),$e=f.convert(b.depthTexture.type);let ze;b.depthTexture.format===La?ze=o.DEPTH_COMPONENT24:b.depthTexture.format===Wr&&(ze=o.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ze,b.width,b.height,0,Ne,$e,null)}}else ce(b.depthTexture,0);const Re=_e.__webglTexture,Ue=Ot(b),ve=le?o.TEXTURE_CUBE_MAP_POSITIVE_X+ne:o.TEXTURE_2D,Ee=b.depthTexture.format===Wr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===La)en(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ve,Re,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ve,Re,0);else if(b.depthTexture.format===Wr)en(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ve,Re,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ve,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(O){const b=s.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const le=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),le){const _e=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,le.removeEventListener("dispose",_e)};le.addEventListener("dispose",_e),b.__depthDisposeCallback=_e}b.__boundDepthTexture=le}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(ne)for(let le=0;le<6;le++)Vt(b.__webglFramebuffer[le],O,le);else{const le=O.texture.mipmaps;le&&le.length>0?Vt(b.__webglFramebuffer[0],O,0):Vt(b.__webglFramebuffer,O,0)}else if(ne){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]===void 0)b.__webglDepthbuffer[le]=o.createRenderbuffer(),Ce(b.__webglDepthbuffer[le],O,!1);else{const _e=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=b.__webglDepthbuffer[le];o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,Re)}}else{const le=O.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ce(b.__webglDepthbuffer,O,!1);else{const _e=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,Re)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _t(O,b,ne){const le=s.get(O);b!==void 0&&xe(le.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&mt(O)}function yt(O){const b=O.texture,ne=s.get(O),le=s.get(b);O.addEventListener("dispose",E);const _e=O.textures,Re=O.isWebGLCubeRenderTarget===!0,Ue=_e.length>1;if(Ue||(le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture()),le.__version=b.version,d.memory.textures++),Re){ne.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)ne.__webglFramebuffer[ve][Ee]=o.createFramebuffer()}else ne.__webglFramebuffer[ve]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)ne.__webglFramebuffer[ve]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Ue)for(let ve=0,Ee=_e.length;ve<Ee;ve++){const Ne=s.get(_e[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&en(O)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ve=0;ve<_e.length;ve++){const Ee=_e[ve];ne.__webglColorRenderbuffer[ve]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const Ne=f.convert(Ee.format,Ee.colorSpace),$e=f.convert(Ee.type),ze=C(Ee.internalFormat,Ne,$e,Ee.normalized,Ee.colorSpace,O.isXRRenderTarget===!0),Ie=Ot(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,ze,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,ne.__webglColorRenderbuffer[ve])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),Ce(ne.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Re){i.bindTexture(o.TEXTURE_CUBE_MAP,le.__webglTexture),me(o.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)xe(ne.__webglFramebuffer[ve][Ee],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else xe(ne.__webglFramebuffer[ve],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);S(b)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ve=0,Ee=_e.length;ve<Ee;ve++){const Ne=_e[ve],$e=s.get(Ne);let ze=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ze=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,$e.__webglTexture),me(ze,Ne),xe(ne.__webglFramebuffer,O,Ne,o.COLOR_ATTACHMENT0+ve,ze,0),S(Ne)&&D(ze)}i.unbindTexture()}else{let ve=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ve=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ve,le.__webglTexture),me(ve,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)xe(ne.__webglFramebuffer[Ee],O,b,o.COLOR_ATTACHMENT0,ve,Ee);else xe(ne.__webglFramebuffer,O,b,o.COLOR_ATTACHMENT0,ve,0);S(b)&&D(ve),i.unbindTexture()}O.depthBuffer&&mt(O)}function tt(O){const b=O.textures;for(let ne=0,le=b.length;ne<le;ne++){const _e=b[ne];if(S(_e)){const Re=X(O),Ue=s.get(_e).__webglTexture;i.bindTexture(Re,Ue),D(Re),i.unbindTexture()}}}const it=[],Xt=[];function fn(O){if(O.samples>0){if(en(O)===!1){const b=O.textures,ne=O.width,le=O.height;let _e=o.COLOR_BUFFER_BIT;const Re=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=s.get(O),ve=b.length>1;if(ve)for(let Ne=0;Ne<b.length;Ne++)i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ee=O.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<b.length;Ne++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),ve){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const $e=s.get(b[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$e,0)}o.blitFramebuffer(0,0,ne,le,0,0,ne,le,_e,o.NEAREST),g===!0&&(it.length=0,Xt.length=0,it.push(o.COLOR_ATTACHMENT0+Ne),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(it.push(Re),Xt.push(Re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ve)for(let Ne=0;Ne<b.length;Ne++){i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const $e=s.get(b[Ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,$e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&g){const b=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ot(O){return Math.min(c.maxSamples,O.samples)}function en(O){const b=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(O){const b=d.render.frame;x.get(O)!==b&&(x.set(O,b),O.update())}function nn(O,b){const ne=O.colorSpace,le=O.format,_e=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==Eu&&ne!==mr&&(Nt.getTransfer(ne)===Yt?(le!==Ii||_e!==bi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ne)),b}function Lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=k,this.resetTextureUnits=te,this.getTextureUnits=j,this.setTextureUnits=ee,this.setTexture2D=ce,this.setTexture2DArray=ae,this.setTexture3D=ue,this.setTextureCube=ge,this.rebindTextures=_t,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $R(o,t){function i(s,c=mr){let f;const d=Nt.getTransfer(c);if(s===bi)return o.UNSIGNED_BYTE;if(s===Pp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ip)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Rx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Cx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Tx)return o.BYTE;if(s===Ax)return o.SHORT;if(s===ml)return o.UNSIGNED_SHORT;if(s===Op)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ca)return o.HALF_FLOAT;if(s===wx)return o.ALPHA;if(s===Nx)return o.RGB;if(s===Ii)return o.RGBA;if(s===La)return o.DEPTH_COMPONENT;if(s===Wr)return o.DEPTH_STENCIL;if(s===Dx)return o.RED;if(s===zp)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===Bp)return o.RG_INTEGER;if(s===Fp)return o.RGBA_INTEGER;if(s===gu||s===_u||s===vu||s===xu)if(d===Yt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===gu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_u)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===gu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_u)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$h||s===ep||s===tp||s===np)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===$h)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ep)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===np)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ip||s===ap||s===rp||s===sp||s===op||s===yu||s===lp)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===ip||s===ap)return d===Yt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===rp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===sp)return f.COMPRESSED_R11_EAC;if(s===op)return f.COMPRESSED_SIGNED_R11_EAC;if(s===yu)return f.COMPRESSED_RG11_EAC;if(s===lp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===cp||s===up||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp||s===Mp)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===cp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===up)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_p)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ep||s===bp||s===Tp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Ep)return d===Yt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ap||s===Rp||s===Mu||s===Cp)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ap)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Rp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const e3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Hx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Hi({vertexShader:e3,fragmentShader:t3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fi(new io(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i3 extends Kr{constructor(t,i){super();const s=this;let c=null,f=1,d=null,h="local-floor",g=1,p=null,x=null,_=null,v=null,M=null,T=null;const U=typeof XRWebGLBinding<"u",y=new n3,S={},D=i.getContextAttributes();let X=null,C=null;const L=[],P=[],I=new Ft;let E=null,N=null;const F=new Ei;F.viewport=new cn;const G=new Ei;G.viewport=new cn;const Q=[F,G],te=new ub;let j=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=L[Z];return he===void 0&&(he=new Sh,L[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=L[Z];return he===void 0&&(he=new Sh,L[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=L[Z];return he===void 0&&(he=new Sh,L[Z]=he),he.getHandSpace()};function k(Z){const he=P.indexOf(Z.inputSource);if(he===-1)return;const Ae=L[he];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,p||d),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){c.removeEventListener("select",k),c.removeEventListener("selectstart",k),c.removeEventListener("selectend",k),c.removeEventListener("squeeze",k),c.removeEventListener("squeezestart",k),c.removeEventListener("squeezeend",k),c.removeEventListener("end",W),c.removeEventListener("inputsourceschange",ce);for(let Z=0;Z<L.length;Z++){const he=P[Z];he!==null&&(P[Z]=null,L[Z].disconnect(he))}j=null,ee=null,y.reset();for(const Z in S)delete S[Z];if(t.setRenderTarget(X),M=null,v=null,_=null,c=null,C=null,Te.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),N!==null){const Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(c,i)),_},this.getFrame=function(){return T},this.getSession=function(){return c},this.setSession=async function(Z){if(c=Z,c!==null){if(X=t.getRenderTarget(),c.addEventListener("select",k),c.addEventListener("selectstart",k),c.addEventListener("selectend",k),c.addEventListener("squeeze",k),c.addEventListener("squeezestart",k),c.addEventListener("squeezeend",k),c.addEventListener("end",W),c.addEventListener("inputsourceschange",ce),D.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,De=null,xe=null;D.depth&&(xe=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=D.stencil?Wr:La,De=D.stencil?gl:la);const Ce={colorFormat:i.RGBA8,depthFormat:xe,scaleFactor:f};_=this.getBinding(),v=_.createProjectionLayer(Ce),c.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new zi(v.textureWidth,v.textureHeight,{format:Ii,type:bi,depthTexture:new vl(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,i,Ae),c.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new zi(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await c.requestReferenceSpace(h),Te.setContext(c),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ce(Z){for(let he=0;he<Z.removed.length;he++){const Ae=Z.removed[he],De=P.indexOf(Ae);De>=0&&(P[De]=null,L[De].disconnect(Ae))}for(let he=0;he<Z.added.length;he++){const Ae=Z.added[he];let De=P.indexOf(Ae);if(De===-1){for(let Ce=0;Ce<L.length;Ce++)if(Ce>=P.length){P.push(Ae),De=Ce;break}else if(P[Ce]===null){P[Ce]=Ae,De=Ce;break}if(De===-1)break}const xe=L[De];xe&&xe.connect(Ae)}}const ae=new pe,ue=new pe;function ge(Z,he,Ae){ae.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(Ae.matrixWorld);const De=ae.distanceTo(ue),xe=he.projectionMatrix.elements,Ce=Ae.projectionMatrix.elements,Vt=xe[14]/(xe[10]-1),mt=xe[14]/(xe[10]+1),_t=(xe[9]+1)/xe[5],yt=(xe[9]-1)/xe[5],tt=(xe[8]-1)/xe[0],it=(Ce[8]+1)/Ce[0],Xt=Vt*tt,fn=Vt*it,Ot=De/(-tt+it),en=Ot*-tt;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(en),Z.translateZ(Ot),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Y=Vt+Ot,nn=mt+Ot,Lt=Xt-en,O=fn+(De-en),b=_t*mt/nn*Y,ne=yt*mt/nn*Y;Z.projectionMatrix.makePerspective(Lt,O,b,ne,Y,nn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Be(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(c===null)return;let he=Z.near,Ae=Z.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),te.near=G.near=F.near=he,te.far=G.far=F.far=Ae,(j!==te.near||ee!==te.far)&&(c.updateRenderState({depthNear:te.near,depthFar:te.far}),j=te.near,ee=te.far),te.layers.mask=Z.layers.mask|6,F.layers.mask=te.layers.mask&-5,G.layers.mask=te.layers.mask&-3;const De=Z.parent,xe=te.cameras;Be(te,De);for(let Ce=0;Ce<xe.length;Ce++)Be(xe[Ce],De);xe.length===2?ge(te,F,G):te.projectionMatrix.copy(F.projectionMatrix),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),We(Z,te,De)};function We(Z,he,Ae){Ae===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(v===null&&M===null))return g},this.setFoveation=function(Z){g=Z,v!==null&&(v.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(Z){return S[Z]};let B=null;function me(Z,he){if(x=he.getViewerPose(p||d),T=he,x!==null){const Ae=x.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let De=!1;Ae.length!==te.cameras.length&&(te.cameras.length=0,De=!0);for(let mt=0;mt<Ae.length;mt++){const _t=Ae[mt];let yt=null;if(M!==null)yt=M.getViewport(_t);else{const it=_.getViewSubImage(v,_t);yt=it.viewport,mt===0&&(t.setRenderTargetTextures(C,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(C))}let tt=Q[mt];tt===void 0&&(tt=new Ei,tt.layers.enable(mt),tt.viewport=new cn,Q[mt]=tt),tt.matrix.fromArray(_t.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(_t.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(yt.x,yt.y,yt.width,yt.height),mt===0&&(te.matrix.copy(tt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),De===!0&&te.cameras.push(tt)}const xe=c.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const mt=_.getDepthInformation(Ae[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,c.renderState)}if(xe&&xe.includes("camera-access")&&U){t.state.unbindTexture(),_=s.getBinding();for(let mt=0;mt<Ae.length;mt++){const _t=Ae[mt].camera;if(_t){let yt=S[_t];yt||(yt=new Hx,S[_t]=yt);const tt=_.getCameraImage(_t);yt.sourceTexture=tt}}}}for(let Ae=0;Ae<L.length;Ae++){const De=P[Ae],xe=L[Ae];De!==null&&xe!==void 0&&xe.update(De,he,p||d)}B&&B(Z,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),T=null}const Te=new kx;Te.setAnimationLoop(me),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}}const a3=new _n,Qx=new dt;Qx.set(-1,0,0,0,1,0,0,0,1);function r3(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Gx(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function c(y,S,D,X,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(y,S):S.isMeshLambertMaterial?(f(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(y,S),_(y,S)):S.isMeshPhongMaterial?(f(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(y,S),v(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(f(y,S),T(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),U(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?g(y,S,D,X):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=t.get(S),X=D.envMap,C=D.envMapRotation;X&&(y.envMap.value=X,y.envMapRotation.value.setFromMatrix4(a3.makeRotationFromEuler(C)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Qx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function g(y,S,D,X){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=X*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function U(y,S){const D=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function s3(o,t,i,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(C,L){const P=L.program;s.uniformBlockBinding(C,P)}function p(C,L){let P=c[C.id];P===void 0&&(y(C),P=x(C),c[C.id]=P,C.addEventListener("dispose",D));const I=L.program;s.updateUBOMapping(C,I);const E=t.render.frame;f[C.id]!==E&&(v(C),f[C.id]=E)}function x(C){const L=_();C.__bindingPointIndex=L;const P=o.createBuffer(),I=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,I,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,P),P}function _(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const L=c[C.id],P=C.uniforms,I=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let E=0,N=P.length;E<N;E++){const F=P[E];if(Array.isArray(F))for(let G=0,Q=F.length;G<Q;G++)M(F[G],E,G,I);else M(F,E,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(C,L,P,I){if(U(C,L,P,I)===!0){const E=C.__offset,N=C.value;if(Array.isArray(N)){let F=0;for(let G=0;G<N.length;G++){const Q=N[G],te=S(Q);T(Q,C.__data,F),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(F+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function T(C,L,P){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,P)}function U(C,L,P,I){const E=C.value,N=L+"_"+P;if(I[N]===void 0)return typeof E=="number"||typeof E=="boolean"?I[N]=E:ArrayBuffer.isView(E)?I[N]=E.slice():I[N]=E.clone(),!0;{const F=I[N];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return I[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(F.equals(E)===!1)return F.copy(E),!0}}return!1}function y(C){const L=C.uniforms;let P=0;const I=16;for(let N=0,F=L.length;N<F;N++){const G=Array.isArray(L[N])?L[N]:[L[N]];for(let Q=0,te=G.length;Q<te;Q++){const j=G[Q],ee=Array.isArray(j.value)?j.value:[j.value];for(let k=0,W=ee.length;k<W;k++){const ce=ee[k],ae=S(ce),ue=P%I,ge=ue%ae.boundary,Be=ue+ge;P+=ge,Be!==0&&I-Be<ae.storage&&(P+=I-Be),j.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=P,P+=ae.storage}}}const E=P%I;return E>0&&(P+=I-E),C.__size=P,C.__cache={},this}function S(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",C),L}function D(C){const L=C.target;L.removeEventListener("dispose",D);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(c[L.id]),delete c[L.id],delete f[L.id]}function X(){for(const C in c)o.deleteBuffer(c[C]);d=[],c={},f={}}return{bind:g,update:p,dispose:X}}const o3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function l3(){return na===null&&(na=new ZE(o3,16,16,jr,ca),na.name="DFG_LUT",na.minFilter=In,na.magFilter=In,na.wrapS=Pi,na.wrapT=Pi,na.generateMipmaps=!1,na.needsUpdate=!0),na}class c3{constructor(t={}){const{canvas:i=EE(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:M=bi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const U=M,y=new Set([Fp,Bp,zp]),S=new Set([bi,la,ml,gl,Pp,Ip]),D=new Uint32Array(4),X=new Int32Array(4),C=new pe;let L=null,P=null;const I=[],E=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1,Q=null,te=null,j=null,ee=null;this._outputColorSpace=Mi;let k=0,W=0,ce=null,ae=-1,ue=null;const ge=new cn,Be=new cn;let We=null;const B=new Bt(0);let me=0,Te=i.width,Z=i.height,he=1,Ae=null,De=null;const xe=new cn(0,0,Te,Z),Ce=new cn(0,0,Te,Z);let Vt=!1;const mt=new Bx;let _t=!1,yt=!1;const tt=new _n,it=new pe,Xt=new cn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function en(){return ce===null?he:1}let Y=s;function nn(A,H){return i.getContext(A,H)}let Lt,O,b,ne,le,_e,Re,Ue,ve,Ee,Ne,$e,ze,Ie,ke,nt,ct,q,we,Me,Le,Xe,be;try{const A={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Lp}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),Y===null){const H="webgl2";if(Y=nn(H,A),Y===null)throw nn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(A){throw i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),Pt("WebGLRenderer: "+A.message),A}function Je(){Lt=new lA(Y),Lt.init(),Le=new $R(Y,Lt),O=new J1(Y,Lt,t,Le),b=new QR(Y,Lt),O.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),te=Y.createFramebuffer(),j=Y.createFramebuffer(),ee=Y.createFramebuffer(),ne=new fA(Y),le=new zR,_e=new JR(Y,Lt,b,le,O,Le,ne),Re=new oA(F),Ue=new hb(Y),Xe=new K1(Y,Ue),ve=new cA(Y,Ue,ne,Xe),Ee=new hA(Y,ve,Ue,Xe,ne),q=new dA(Y,O,_e),ke=new $1(le),Ne=new IR(F,Re,Lt,O,Xe,ke),$e=new r3(F,le),ze=new FR,Ie=new WR(Lt),ct=new Z1(F,Re,b,Ee,T,g),nt=new KR(F,Ee,O),be=new s3(Y,ne,O,b),we=new Q1(Y,Lt,ne),Me=new uA(Y,Lt,ne),ne.programs=Ne.programs,F.capabilities=O,F.extensions=Lt,F.properties=le,F.renderLists=ze,F.shadowMap=nt,F.state=b,F.info=ne}U!==bi&&(N=new mA(U,i.width,i.height,h,c,f));const Ve=new i3(F,Y);this.xr=Ve,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(Te,Z,!1))},this.getSize=function(A){return A.set(Te,Z)},this.setSize=function(A,H,de=!0){if(Ve.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=A,Z=H,i.width=Math.floor(A*he),i.height=Math.floor(H*he),de===!0&&(i.style.width=A+"px",i.style.height=H+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Te*he,Z*he).floor()},this.setDrawingBufferSize=function(A,H,de){Te=A,Z=H,he=de,i.width=Math.floor(A*de),i.height=Math.floor(H*de),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(U===bi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ge)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,H,de,re){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,H,de,re),b.viewport(ge.copy(xe).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,H,de,re){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,H,de,re),b.scissor(Be.copy(Ce).multiplyScalar(he).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(A){b.setScissorTest(Vt=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){De=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,de=!0){let re=0;if(A){let se=!1;if(ce!==null){const Fe=ce.texture.format;se=y.has(Fe)}if(se){const Fe=ce.texture.type,qe=S.has(Fe),Oe=ct.getClearColor(),Ze=ct.getClearAlpha(),Ke=Oe.r,st=Oe.g,ft=Oe.b;qe?(D[0]=Ke,D[1]=st,D[2]=ft,D[3]=Ze,Y.clearBufferuiv(Y.COLOR,0,D)):(X[0]=Ke,X[1]=st,X[2]=ft,X[3]=Ze,Y.clearBufferiv(Y.COLOR,0,X))}else re|=Y.COLOR_BUFFER_BIT}H&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),ct.dispose(),ze.dispose(),Ie.dispose(),le.dispose(),Re.dispose(),Ee.dispose(),Xe.dispose(),be.dispose(),Ne.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",_r),Ve.removeEventListener("sessionend",Ia),Gi.stop()};function Ct(A){A.preventDefault(),_v("WebGLRenderer: Context Lost."),G=!0}function ut(){_v("WebGLRenderer: Context Restored."),G=!1;const A=ne.autoReset,H=nt.enabled,de=nt.autoUpdate,re=nt.needsUpdate,se=nt.type;Je(),ne.autoReset=A,nt.enabled=H,nt.autoUpdate=de,nt.needsUpdate=re,nt.type=se}function Qn(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ui(A){const H=A.target;H.removeEventListener("dispose",ui),Du(H)}function Du(A){Qr(A),le.remove(A)}function Qr(A){const H=le.get(A).programs;H!==void 0&&(H.forEach(function(de){Ne.releaseProgram(de)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,de,re,se,Fe){H===null&&(H=fn);const qe=se.isMesh&&se.matrixWorld.determinantAffine()<0,Oe=ho(A,H,de,re,se);b.setMaterial(re,qe);let Ze=de.index,Ke=1;if(re.wireframe===!0){if(Ze=ve.getWireframeAttribute(de),Ze===void 0)return;Ke=2}const st=de.drawRange,ft=de.attributes.position;let Ye=st.start*Ke,Mt=(st.start+st.count)*Ke;Fe!==null&&(Ye=Math.max(Ye,Fe.start*Ke),Mt=Math.min(Mt,(Fe.start+Fe.count)*Ke)),Ze!==null?(Ye=Math.max(Ye,0),Mt=Math.min(Mt,Ze.count)):ft!=null&&(Ye=Math.max(Ye,0),Mt=Math.min(Mt,ft.count));const vt=Mt-Ye;if(vt<0||vt===1/0)return;Xe.setup(se,re,Oe,de,Ze);let jt,Ht=we;if(Ze!==null&&(jt=Ue.get(Ze),Ht=Me,Ht.setIndex(jt)),se.isMesh)re.wireframe===!0?(b.setLineWidth(re.wireframeLinewidth*en()),Ht.setMode(Y.LINES)):Ht.setMode(Y.TRIANGLES);else if(se.isLine){let vn=re.linewidth;vn===void 0&&(vn=1),b.setLineWidth(vn*en()),se.isLineSegments?Ht.setMode(Y.LINES):se.isLineLoop?Ht.setMode(Y.LINE_LOOP):Ht.setMode(Y.LINE_STRIP)}else se.isPoints?Ht.setMode(Y.POINTS):se.isSprite&&Ht.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const vn=se._multiDrawStarts,He=se._multiDrawCounts,rn=se._multiDrawCount,wt=Ze?Ue.get(Ze).bytesPerElement:1,Bn=le.get(re).currentProgram.getUniforms();for(let Jn=0;Jn<rn;Jn++)Bn.setValue(Y,"_gl_DrawID",Jn),Ht.render(vn[Jn]/wt,He[Jn])}else if(se.isInstancedMesh)Ht.renderInstances(Ye,vt,se.count);else if(de.isInstancedBufferGeometry){const vn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,He=Math.min(de.instanceCount,vn);Ht.renderInstances(Ye,vt,He)}else Ht.render(Ye,vt)};function gr(A,H,de,re){Q!==null&&A.isNodeMaterial&&Q.setObject(re,A),_t===!0&&ke.setState(A,de,!1),A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,vr(A,H,re),A.side=qr,A.needsUpdate=!0,vr(A,H,re),A.side=aa):vr(A,H,re)}this.compile=function(A,H,de=null){de===null&&(de=A),Q!==null&&Q.renderStart(A,H,de),P=Ie.get(de),P.init(H),E.push(P),de.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),A!==de&&A.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights(),Q!==null&&Q.updateLights(P.state.lightsArray),yt=this.localClippingEnabled,_t=ke.init(this.clippingPlanes,yt),_t===!0&&ke.setGlobalState(this.clippingPlanes,H),Q!==null&&nt.render(P.state.shadowsArray,de,H);const re=new Set;return A.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Fe=se.material;if(Fe)if(Array.isArray(Fe))for(let qe=0;qe<Fe.length;qe++){const Oe=Fe[qe];gr(Oe,de,H,se),re.add(Oe)}else gr(Fe,de,H,se),re.add(Fe)}),P=E.pop(),Q!==null&&Q.renderEnd(),re},this.compileAsync=function(A,H,de=null){const re=this.compile(A,H,de);return new Promise(se=>{function Fe(){if(re.forEach(function(qe){const Ze=le.get(qe).currentProgram;(Ze===void 0||Ze.isReady())&&re.delete(qe)}),re.size===0){se(A);return}setTimeout(Fe,10)}Lt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Pa=null;function ua(A){Pa&&Pa(A)}function _r(){Gi.stop()}function Ia(){Gi.start()}const Gi=new kx;Gi.setAnimationLoop(ua),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(A){Pa=A,Ve.setAnimationLoop(A),A===null?Gi.stop():Gi.start()},Ve.addEventListener("sessionstart",_r),Ve.addEventListener("sessionend",Ia),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(A,H);const de=Ve.enabled===!0&&Ve.isPresenting===!0,re=N!==null&&(ce===null||de)&&N.begin(F,ce);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(H),H=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,H,ce),P=Ie.get(A,E.length),P.init(H),P.state.textureUnits=_e.getTextureUnits(),E.push(P),tt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),mt.setFromProjectionMatrix(tt,sa,H.reversedDepth),yt=this.localClippingEnabled,_t=ke.init(this.clippingPlanes,yt),L=ze.get(A,I.length),L.init(),I.push(L),Ve.enabled===!0&&Ve.isPresenting===!0){const qe=F.xr.getDepthSensingMesh();qe!==null&&oo(qe,H,-1/0,F.sortObjects)}oo(A,H,0,F.sortObjects),L.finish(),Q!==null&&Q.updateLights(P.state.lightsArray),F.sortObjects===!0&&L.sort(Ae,De),Ot=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ot&&ct.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&ke.beginShadows();const se=P.state.shadowsArray;if(nt.render(se,A,H),_t===!0&&ke.endShadows(),(re&&N.hasRenderPass())===!1){const qe=L.opaque,Oe=L.transmissive;if(P.setupLights(),H.isArrayCamera){const Ze=H.cameras;if(Oe.length>0)for(let Ke=0,st=Ze.length;Ke<st;Ke++){const ft=Ze[Ke];Jr(qe,Oe,A,ft)}Ot&&ct.render(A);for(let Ke=0,st=Ze.length;Ke<st;Ke++){const ft=Ze[Ke];lo(L,A,ft,ft.viewport)}}else Oe.length>0&&Jr(qe,Oe,A,H),Ot&&ct.render(A),lo(L,A,H)}ce!==null&&W===0&&(_e.updateMultisampleRenderTarget(ce),_e.updateRenderTargetMipmap(ce)),re&&N.end(F),A.isScene===!0&&A.onAfterRender(F,A,H),Xe.resetDefaultState(),ae=-1,ue=null,E.pop(),E.length>0?(P=E[E.length-1],_e.setTextureUnits(P.state.textureUnits),_t===!0&&ke.setGlobalState(F.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,Q!==null&&Q.renderEnd()};function oo(A,H,de,re){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)de=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(mt)){re&&Xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(tt);const qe=Ee.update(A),Oe=A.material;Oe.visible&&L.push(A,qe,Oe,de,Xt.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(mt))){const qe=Ee.update(A),Oe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xt.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Xt.copy(qe.boundingSphere.center)),Xt.applyMatrix4(A.matrixWorld).applyMatrix4(tt)),Array.isArray(Oe)){const Ze=qe.groups;for(let Ke=0,st=Ze.length;Ke<st;Ke++){const ft=Ze[Ke],Ye=Oe[ft.materialIndex];Ye&&Ye.visible&&L.push(A,qe,Ye,de,Xt.z,ft,H)}}else Oe.visible&&L.push(A,qe,Oe,de,Xt.z,null,H)}}const Fe=A.children;for(let qe=0,Oe=Fe.length;qe<Oe;qe++)oo(Fe[qe],H,de,re)}function lo(A,H,de,re){const{opaque:se,transmissive:Fe,transparent:qe}=A;P.setupLightsView(de),_t===!0&&ke.setGlobalState(F.clippingPlanes,de),re&&b.viewport(ge.copy(re)),se.length>0&&Vi(se,H,de),Fe.length>0&&Vi(Fe,H,de),qe.length>0&&Vi(qe,H,de),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Jr(A,H,de,re){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const Ye=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new zi(1,1,{generateMipmaps:!0,type:Ye?ca:bi,minFilter:kr,samples:Math.max(4,O.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Fe=P.state.transmissionRenderTarget[re.id],qe=re.viewport||ge;Fe.setSize(qe.z*F.transmissionResolutionScale,qe.w*F.transmissionResolutionScale);const Oe=F.getRenderTarget(),Ze=F.getActiveCubeFace(),Ke=F.getActiveMipmapLevel();F.setRenderTarget(Fe),F.getClearColor(B),me=F.getClearAlpha(),me<1&&F.setClearColor(16777215,.5),F.clear(),Ot&&ct.render(de);const st=F.toneMapping;F.toneMapping=oa;const ft=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),_t===!0&&ke.setGlobalState(F.clippingPlanes,re),Vi(A,de,re),_e.updateMultisampleRenderTarget(Fe),_e.updateRenderTargetMipmap(Fe),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Mt=0,vt=H.length;Mt<vt;Mt++){const jt=H[Mt],{object:Ht,geometry:vn,material:He,group:rn}=jt;if(He.side===aa&&Ht.layers.test(re.layers)){const wt=He.side;He.side=Kn,He.needsUpdate=!0,El(Ht,de,re,vn,He,rn),He.side=wt,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(_e.updateMultisampleRenderTarget(Fe),_e.updateRenderTargetMipmap(Fe))}F.setRenderTarget(Oe,Ze,Ke),F.setClearColor(B,me),ft!==void 0&&(re.viewport=ft),F.toneMapping=st}function Vi(A,H,de){const re=H.isScene===!0?H.overrideMaterial:null;for(let se=0,Fe=A.length;se<Fe;se++){const qe=A[se],{object:Oe,geometry:Ze,group:Ke}=qe;let st=qe.material;st.allowOverride===!0&&re!==null&&(st=re),Oe.layers.test(de.layers)&&El(Oe,H,de,Ze,st,Ke)}}function El(A,H,de,re,se,Fe){Q!==null&&se.isNodeMaterial&&Q.setObject(A,se),A.onBeforeRender(F,H,de,re,se,Fe),A.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(F,H,de,re,A,Fe),se.transparent===!0&&se.side===aa&&se.forceSinglePass===!1?(se.side=Kn,se.needsUpdate=!0,F.renderBufferDirect(de,H,re,se,A,Fe),se.side=qr,se.needsUpdate=!0,F.renderBufferDirect(de,H,re,se,A,Fe),se.side=aa):F.renderBufferDirect(de,H,re,se,A,Fe),A.onAfterRender(F,H,de,re,se,Fe)}function vr(A,H,de){H.isScene!==!0&&(H=fn);const re=le.get(A),se=P.state.lights,Fe=P.state.shadowsArray,qe=se.state.version,Oe=Ne.getParameters(A,se.state,Fe,H,de,P.state.lightProbeGridArray),Ze=Ne.getProgramCacheKey(Oe);let Ke=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,re.fog=H.fog;const st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Re.get(A.envMap||re.environment,st),re.envMapRotation=re.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",ui),Ke=new Map,re.programs=Ke);let ft=Ke.get(Ze);if(ft!==void 0){if(re.currentProgram===ft&&re.lightsStateVersion===qe)return uo(A,Oe),ft}else Oe.uniforms=Ne.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,de,Oe),A.onBeforeCompile(Oe,F),ft=Ne.acquireProgram(Oe,Ze),Ke.set(Ze,ft),re.uniforms=Oe.uniforms;const Ye=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=ke.uniform),uo(A,Oe),re.needsLights=Tl(A),re.lightsStateVersion=qe,re.needsLights&&(Ye.ambientLightColor.value=se.state.ambient,Ye.lightProbe.value=se.state.probe,Ye.sunLights.value=se.state.sun,Ye.sunLightShadows.value=se.state.sunShadow,Ye.directionalLights.value=se.state.directional,Ye.directionalLightShadows.value=se.state.directionalShadow,Ye.spotLights.value=se.state.spot,Ye.spotLightShadows.value=se.state.spotShadow,Ye.rectAreaLights.value=se.state.rectArea,Ye.ltc_1.value=se.state.rectAreaLTC1,Ye.ltc_2.value=se.state.rectAreaLTC2,Ye.pointLights.value=se.state.point,Ye.pointLightShadows.value=se.state.pointShadow,Ye.hemisphereLights.value=se.state.hemi,Ye.sunShadowMatrix.value=se.state.sunShadowMatrix,Ye.sunShadowCascade.value=se.state.sunShadowCascade,Ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ye.spotLightMatrix.value=se.state.spotLightMatrix,Ye.spotLightMap.value=se.state.spotLightMap,Ye.pointShadowMatrix.value=se.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=ft,re.uniformsList=null,ft}function co(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Su.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function uo(A,H){const de=le.get(A);de.outputColorSpace=H.outputColorSpace,de.batching=H.batching,de.batchingColor=H.batchingColor,de.instancing=H.instancing,de.instancingColor=H.instancingColor,de.instancingMorph=H.instancingMorph,de.skinning=H.skinning,de.morphTargets=H.morphTargets,de.morphNormals=H.morphNormals,de.morphColors=H.morphColors,de.morphTargetsCount=H.morphTargetsCount,de.numClippingPlanes=H.numClippingPlanes,de.numIntersection=H.numClipIntersection,de.vertexAlphas=H.vertexAlphas,de.vertexTangents=H.vertexTangents,de.toneMapping=H.toneMapping}function fo(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let de=0,re=A.length;de<re;de++){const se=A[de];if(se.texture!==null&&se.boundingBox.containsPoint(C))return se}return null}function ho(A,H,de,re,se){H.isScene!==!0&&(H=fn),_e.resetTextureUnits();const Fe=H.fog,qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?H.environment:null,Oe=ce===null?F.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Nt.workingColorSpace,Ze=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ke=Re.get(re.envMap||qe,Ze),st=re.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ft=!!de.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!de.morphAttributes.position,Mt=!!de.morphAttributes.normal,vt=!!de.morphAttributes.color;let jt=oa;re.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(jt=F.toneMapping);const Ht=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,vn=Ht!==void 0?Ht.length:0,He=le.get(re),rn=P.state.lights;if(_t===!0&&(yt===!0||A!==ue)){const Tt=A===ue&&re.id===ae;ke.setState(re,A,Tt)}let wt=!1;re.version===He.__version?(He.needsLights&&He.lightsStateVersion!==rn.state.version||He.outputColorSpace!==Oe||se.isBatchedMesh&&He.batching===!1||!se.isBatchedMesh&&He.batching===!0||se.isBatchedMesh&&He.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&He.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&He.instancing===!1||!se.isInstancedMesh&&He.instancing===!0||se.isSkinnedMesh&&He.skinning===!1||!se.isSkinnedMesh&&He.skinning===!0||se.isInstancedMesh&&He.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&He.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&He.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&He.instancingMorph===!1&&se.morphTexture!==null||He.envMap!==Ke||re.fog===!0&&He.fog!==Fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ke.numPlanes||He.numIntersection!==ke.numIntersection)||He.vertexAlphas!==st||He.vertexTangents!==ft||He.morphTargets!==Ye||He.morphNormals!==Mt||He.morphColors!==vt||He.toneMapping!==jt||He.morphTargetsCount!==vn||!!He.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,He.__version=re.version);let Bn=He.currentProgram;wt===!0&&(Bn=vr(re,H,se),Q&&re.isNodeMaterial&&Q.onUpdateProgram(re,Bn,He));let Jn=!1,Xi=!1,xt=!1;const It=Bn.getUniforms(),Qt=He.uniforms;if(b.useProgram(Bn.program)&&(Jn=!0,Xi=!0,xt=!0),re.id!==ae&&(ae=re.id,Xi=!0),He.needsLights){const Tt=fo(P.state.lightProbeGridArray,se);He.lightProbeGrid!==Tt&&(He.lightProbeGrid=Tt,Xi=!0)}if(Jn||ue!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(Y,"projectionMatrix",A.projectionMatrix),It.setValue(Y,"viewMatrix",A.matrixWorldInverse);const sn=It.map.cameraPosition;sn!==void 0&&sn.setValue(Y,it.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&It.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),ue!==A&&(ue=A,Xi=!0,xt=!0)}if(He.needsLights&&(rn.state.sunShadowMap.length>0&&It.setValue(Y,"sunShadowMap",rn.state.sunShadowMap,_e),rn.state.directionalShadowMap.length>0&&It.setValue(Y,"directionalShadowMap",rn.state.directionalShadowMap,_e),rn.state.spotShadowMap.length>0&&It.setValue(Y,"spotShadowMap",rn.state.spotShadowMap,_e),rn.state.pointShadowMap.length>0&&It.setValue(Y,"pointShadowMap",rn.state.pointShadowMap,_e)),se.isSkinnedMesh){It.setOptional(Y,se,"bindMatrix"),It.setOptional(Y,se,"bindMatrixInverse");const Tt=se.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),It.setValue(Y,"boneTexture",Tt.boneTexture,_e))}se.isBatchedMesh&&(It.setOptional(Y,se,"batchingTexture"),It.setValue(Y,"batchingTexture",se._matricesTexture,_e),It.setOptional(Y,se,"batchingIdTexture"),It.setValue(Y,"batchingIdTexture",se._indirectTexture,_e),It.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&It.setValue(Y,"batchingColorTexture",se._colorsTexture,_e));const $n=de.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&q.update(se,de,Bn),(Xi||He.receiveShadow!==se.receiveShadow)&&(He.receiveShadow=se.receiveShadow,It.setValue(Y,"receiveShadow",se.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&H.environment!==null&&(Qt.envMapIntensity.value=H.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=l3()),Xi){if(It.setValue(Y,"toneMappingExposure",F.toneMappingExposure),He.needsLights&&bl(Qt,xt),Fe&&re.fog===!0&&$e.refreshFogUniforms(Qt,Fe),$e.refreshMaterialUniforms(Qt,re,he,Z,P.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Tt=He.lightProbeGrid;Qt.probesSH.value=Tt.texture,Qt.probesMin.value.copy(Tt.boundingBox.min),Qt.probesMax.value.copy(Tt.boundingBox.max),Qt.probesResolution.value.copy(Tt.resolution)}Su.upload(Y,co(He),Qt,_e)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Su.upload(Y,co(He),Qt,_e),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(Y,"center",se.center),It.setValue(Y,"modelViewMatrix",se.modelViewMatrix),It.setValue(Y,"normalMatrix",se.normalMatrix),It.setValue(Y,"modelMatrix",se.matrixWorld),re.uniformsGroups!==void 0){const Tt=re.uniformsGroups;for(let sn=0,fa=Tt.length;sn<fa;sn++){const Al=Tt[sn];be.update(Al,Bn),be.bind(Al,Bn)}}return Bn}function bl(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Tl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(A,H,de){const re=le.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),le.get(A.texture).__webglTexture=H,le.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:de,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const de=le.get(A);de.__webglFramebuffer=H,de.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,de=0){ce=A,k=H,W=de;let re=null,se=!1,Fe=!1;if(A){const Oe=le.get(A);if(Oe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),ge.copy(A.viewport),Be.copy(A.scissor),We=A.scissorTest,b.viewport(ge),b.scissor(Be),b.setScissorTest(We),ae=-1;return}else if(Oe.__webglFramebuffer===void 0)_e.setupRenderTarget(A);else if(Oe.__hasExternalTextures)_e.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if(Oe.__boundDepthTexture!==st){if(st!==null&&le.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Fe=!0);const Ke=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?re=Ke[H][de]:re=Ke[H],se=!0):A.samples>0&&_e.useMultisampledRTT(A)===!1?re=le.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?re=Ke[de]:re=Ke,ge.copy(A.viewport),Be.copy(A.scissor),We=A.scissorTest}else ge.copy(xe).multiplyScalar(he).floor(),Be.copy(Ce).multiplyScalar(he).floor(),We=Vt;if(de!==0&&(re=te),b.bindFramebuffer(Y.FRAMEBUFFER,re)&&b.drawBuffers(A,re),b.viewport(ge),b.scissor(Be),b.setScissorTest(We),se){const Oe=le.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,de)}else if(Fe){const Oe=H;for(let Ze=0;Ze<A.textures.length;Ze++){const Ke=le.get(A.textures[Ze]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ze,Ke.__webglTexture,de,Oe)}}else if(A!==null&&de!==0){const Oe=le.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,de)}ae=-1};function fi(A){const H=le.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=O.textureFormatReadable(A.format),H.__typeReadable=O.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,de,re,se,Fe,qe,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze){b.bindFramebuffer(Y.FRAMEBUFFER,Ze);try{const Ke=A.textures[Oe],st=Ke.format,ft=Ke.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const Ye=fi(Ke);if(Ye.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-re&&de>=0&&de<=A.height-se&&Y.readPixels(H,de,re,se,Le.convert(st),Le.convert(ft),Fe)}finally{const Ke=ce!==null?le.get(ce).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,H,de,re,se,Fe,qe,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze)if(H>=0&&H<=A.width-re&&de>=0&&de<=A.height-se){b.bindFramebuffer(Y.FRAMEBUFFER,Ze);const Ke=A.textures[Oe],st=Ke.format,ft=Ke.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const Ye=fi(Ke);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Fe.byteLength,Y.STREAM_READ),Y.readPixels(H,de,re,se,Le.convert(st),Le.convert(ft),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const vt=ce!==null?le.get(ce).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,vt);const jt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await bE(Y,jt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Fe),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Mt),Y.deleteSync(jt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,de=0){const re=Math.pow(2,-de),se=Math.floor(A.image.width*re),Fe=Math.floor(A.image.height*re),qe=H!==null?H.x:0,Oe=H!==null?H.y:0;_e.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,de,0,0,qe,Oe,se,Fe),b.unbindTexture()},this.copyTextureToTexture=function(A,H,de=null,re=null,se=0,Fe=0){let qe,Oe,Ze,Ke,st,ft,Ye,Mt,vt;const jt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(de!==null)qe=de.max.x-de.min.x,Oe=de.max.y-de.min.y,Ze=de.isBox3?de.max.z-de.min.z:1,Ke=de.min.x,st=de.min.y,ft=de.isBox3?de.min.z:0;else{const Qt=Math.pow(2,-se);qe=Math.floor(jt.width*Qt),Oe=Math.floor(jt.height*Qt),A.isDataArrayTexture?Ze=jt.depth:A.isData3DTexture?Ze=Math.floor(jt.depth*Qt):Ze=1,Ke=0,st=0,ft=0}re!==null?(Ye=re.x,Mt=re.y,vt=re.z):(Ye=0,Mt=0,vt=0);const Ht=Le.convert(H.format),vn=Le.convert(H.type);let He;H.isData3DTexture?(_e.setTexture3D(H,0),He=Y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(_e.setTexture2DArray(H,0),He=Y.TEXTURE_2D_ARRAY):(_e.setTexture2D(H,0),He=Y.TEXTURE_2D),b.activeTexture(Y.TEXTURE0),b.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(Y.UNPACK_ALIGNMENT,H.unpackAlignment);const rn=b.getParameter(Y.UNPACK_ROW_LENGTH),wt=b.getParameter(Y.UNPACK_IMAGE_HEIGHT),Bn=b.getParameter(Y.UNPACK_SKIP_PIXELS),Jn=b.getParameter(Y.UNPACK_SKIP_ROWS),Xi=b.getParameter(Y.UNPACK_SKIP_IMAGES);b.pixelStorei(Y.UNPACK_ROW_LENGTH,jt.width),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,jt.height),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ke),b.pixelStorei(Y.UNPACK_SKIP_ROWS,st),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,ft);const xt=A.isDataArrayTexture||A.isData3DTexture,It=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Qt=le.get(A),$n=le.get(H),Tt=le.get(Qt.__renderTarget),sn=le.get($n.__renderTarget);b.bindFramebuffer(Y.READ_FRAMEBUFFER,Tt.__webglFramebuffer),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let fa=0;fa<Ze;fa++)xt&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(A).__webglTexture,se,ft+fa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(H).__webglTexture,Fe,vt+fa)),Y.blitFramebuffer(Ke,st,qe,Oe,Ye,Mt,qe,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||A.isRenderTargetTexture||le.has(A)){const Qt=le.get(A),$n=le.get(H);b.bindFramebuffer(Y.READ_FRAMEBUFFER,j),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ee);for(let Tt=0;Tt<Ze;Tt++)xt?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qt.__webglTexture,se,ft+Tt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Qt.__webglTexture,se),It?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$n.__webglTexture,Fe,vt+Tt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$n.__webglTexture,Fe),se!==0?Y.blitFramebuffer(Ke,st,qe,Oe,Ye,Mt,qe,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):It?Y.copyTexSubImage3D(He,Fe,Ye,Mt,vt+Tt,Ke,st,qe,Oe):Y.copyTexSubImage2D(He,Fe,Ye,Mt,Ke,st,qe,Oe);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(He,Fe,Ye,Mt,vt,qe,Oe,Ze,Ht,vn,jt.data):H.isCompressedArrayTexture?Y.compressedTexSubImage3D(He,Fe,Ye,Mt,vt,qe,Oe,Ze,Ht,jt.data):Y.texSubImage3D(He,Fe,Ye,Mt,vt,qe,Oe,Ze,Ht,vn,jt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Fe,Ye,Mt,qe,Oe,Ht,vn,jt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Fe,Ye,Mt,jt.width,jt.height,Ht,jt.data):Y.texSubImage2D(Y.TEXTURE_2D,Fe,Ye,Mt,qe,Oe,Ht,vn,jt);b.pixelStorei(Y.UNPACK_ROW_LENGTH,rn),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,Bn),b.pixelStorei(Y.UNPACK_SKIP_ROWS,Jn),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,Xi),Fe===0&&H.generateMipmaps&&Y.generateMipmap(He),b.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&_e.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?_e.setTextureCube(A,0):A.isData3DTexture?_e.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?_e.setTexture2DArray(A,0):_e.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){k=0,W=0,ce=null,b.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}const u3=`
varying vec2 vUv;
varying vec3 vVariation;
varying float vTreatment;
varying float vWorldY;

attribute vec3 aVariation;
attribute float aTreatment;

void main() {
  vUv = uv;
  vVariation = aVariation;
  vTreatment = aTreatment;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldY = worldPos.y;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,f3=`
precision highp float;

uniform sampler2D uTexture;
uniform vec3 uTint;
uniform float uOpacity;
uniform float uDotStrength;
uniform float uDotSize;
uniform float uTime;
uniform float uGroundY;
uniform float uGroundFade;

varying vec2 vUv;
varying vec3 vVariation;
varying float vTreatment;
varying float vWorldY;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);
  float a = hash(cell);
  float b = hash(cell + vec2(1.0, 0.0));
  float c = hash(cell + vec2(0.0, 1.0));
  float d = hash(cell + vec2(1.0, 1.0));
  return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
}

void main() {
  vec4 sampleColor = texture2D(uTexture, vUv);
  if (sampleColor.a < 0.01) discard;

  float edgeNoise = noise(vUv * vec2(42.0, 22.0) + vec2(uTime * 0.04, uTime * -0.015));
  float edgeThreshold = mix(0.03, 0.12, edgeNoise);
  float alpha = smoothstep(edgeThreshold, 0.44, sampleColor.a);

  float luminance = dot(sampleColor.rgb, vec3(0.299, 0.587, 0.114));
  float edgeLight = smoothstep(0.08, 0.45, luminance + sampleColor.a * 0.2);
  alpha *= mix(0.65, 1.0, edgeLight);

  float posterized = floor(clamp(luminance, 0.0, 1.0) * 5.0 + 0.5) / 5.0;
  float vaporLight = smoothstep(0.02, 0.96, posterized);
  vec3 normalized = mix(vec3(0.78, 0.85, 0.90), vec3(1.0), vaporLight);

  // Applied Imagination halftone dot cell algorithm
  float dotSize = uDotSize * mix(0.85, 1.25, vVariation.z);
  vec2 dotCell = mod(gl_FragCoord.xy, dotSize) - dotSize * 0.5;
  float darkness = 1.0 - posterized;
  float dotRadius = dotSize * mix(0.08, 0.42, smoothstep(0.04, 0.85, darkness));
  float dotShape = 1.0 - smoothstep(max(0.0, dotRadius - 0.7), dotRadius + 0.7, length(dotCell));

  vec3 dotInk = mix(normalized * 0.55, vec3(1.0), vTreatment);
  normalized = mix(normalized, dotInk, dotShape * uDotStrength);
  alpha *= mix(0.85, 1.0, dotShape * uDotStrength * 0.5);
  alpha *= uOpacity * mix(0.7, 1.0, vVariation.x);
  alpha *= smoothstep(uGroundY, uGroundY + uGroundFade, vWorldY);

  if (alpha < 0.02) discard;
  gl_FragColor = vec4(normalized, alpha);
}
`;function d3(){const o=rt.useRef(null);return rt.useEffect(()=>{const t=o.current;if(!t)return;let i,s,c,f,d=[],h,g;try{i=new c3({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),s=new HE,c=new Ei(48,window.innerWidth/window.innerHeight,.1,1e3),c.position.set(0,15,35),c.lookAt(0,5,-50);const D=new lb,X=D.load("/brand/gpc/clouds/cloud-bank-a.png"),C=D.load("/brand/gpc/clouds/cloud-bank-b.png"),L=D.load("/brand/gpc/flight/mountain-ground-cutout.png");X.wrapS=X.wrapT=Pi,C.wrapS=C.wrapT=Pi;const P={uTint:{value:new Bt("#faf5ee")},uOpacity:{value:.95},uDotStrength:{value:.75},uDotSize:{value:5.5},uTime:{value:0},uGroundY:{value:-120},uGroundFade:{value:45}},I=Q=>new Hi({vertexShader:u3,fragmentShader:f3,uniforms:{...P,uTexture:{value:Q}},transparent:!0,depthWrite:!1,side:aa});h=I(X),g=I(C),[{x:-35,y:18,z:-25,scale:65,mat:h,speed:.008},{x:38,y:14,z:-35,scale:75,mat:g,speed:-.006},{x:-10,y:22,z:-55,scale:85,mat:h,speed:.005},{x:45,y:6,z:-70,scale:95,mat:g,speed:-.007},{x:-40,y:-5,z:-40,scale:70,mat:g,speed:.009},{x:25,y:-12,z:-50,scale:80,mat:h,speed:-.005},{x:-30,y:-22,z:-65,scale:90,mat:h,speed:.006},{x:35,y:-30,z:-60,scale:85,mat:g,speed:-.008},{x:-20,y:-45,z:-45,scale:80,mat:g,speed:.007},{x:30,y:-55,z:-55,scale:90,mat:h,speed:-.006},{x:-35,y:-68,z:-70,scale:95,mat:h,speed:.005},{x:20,y:-80,z:-65,scale:85,mat:g,speed:-.008}].forEach(Q=>{const te=new io(Q.scale,Q.scale*.55),j=te.attributes.position.count,ee=new Float32Array(j*3),k=new Float32Array(j),W=Math.random(),ce=Math.random(),ae=Math.random(),ue=Math.random()>.4?1:0;for(let Be=0;Be<j;Be++)ee[Be*3]=W,ee[Be*3+1]=ce,ee[Be*3+2]=ae,k[Be]=ue;te.setAttribute("aVariation",new Bi(ee,3)),te.setAttribute("aTreatment",new Bi(k,1));const ge=new Fi(te,Q.mat);ge.position.set(Q.x,Q.y,Q.z),s.add(ge),d.push({mesh:ge,baseX:Q.x,speed:Q.speed,minX:-80,maxX:80})});const N=new io(160,70),F=new kp({map:L,transparent:!0,opacity:.75,depthWrite:!1}),G=new Fi(N,F);G.position.set(0,-115,-60),s.add(G)}catch(D){console.error("WebGL flight canvas init failed:",D);return}let p=15,x=35;const _=()=>{const D=window.scrollY,X=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),C=Math.min(Math.max(D/X,0),1);p=15-C*120,x=35-C*25};window.addEventListener("scroll",_,{passive:!0}),_();let v=0,M=0;const T=D=>{v=(D.clientX/window.innerWidth-.5)*5,M=(D.clientY/window.innerHeight-.5)*2.5};window.addEventListener("mousemove",T,{passive:!0});const U=()=>{!i||!c||(c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",U);let y=new fb;const S=()=>{f=requestAnimationFrame(S);const D=y.getDelta(),X=y.getElapsedTime();h&&(h.uniforms.uTime.value=X),g&&(g.uniforms.uTime.value=X),c.position.x+=(v-c.position.x)*.05,c.position.y+=(p-M-c.position.y)*.08,c.position.z+=(x-c.position.z)*.08,c.lookAt(v*.3,c.position.y-10,-50),d.forEach(C=>{C.mesh.position.x+=C.speed*(D*60),C.mesh.position.x>C.maxX&&(C.mesh.position.x=C.minX),C.mesh.position.x<C.minX&&(C.mesh.position.x=C.maxX)}),i.render(s,c)};return S(),()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",_),window.removeEventListener("resize",U),window.removeEventListener("mousemove",T),i&&i.dispose()}},[]),w.jsxs("div",{className:"canvas-container","aria-hidden":"true",children:[w.jsx("div",{className:"flight-canvas flight-canvas--background"}),w.jsx("canvas",{ref:o,className:"flight-canvas flight-canvas--webgl"}),w.jsx("div",{className:"flight-canvas-halftone"}),w.jsx("div",{className:"flight-canvas-vignette"})]})}function h3(){const[o,t]=rt.useState(3e4),[i,s]=rt.useState("30,000 FT"),[c,f]=rt.useState(4.2),[d,h]=rt.useState(100);rt.useEffect(()=>{const p=[];window.scrollY>10?s(null):[[300,"29,800 FT"],[600,"30,250 FT"],[900,"29,950 FT"],[1200,null]].forEach(([M,T])=>{p.push(window.setTimeout(()=>{window.scrollY<=10&&s(T)},M))});const _=()=>{const v=window.scrollY,M=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),T=Math.min(Math.max(v/M,0),1),U=Math.round(3e4*(1-T));t(U);const y=(4.2-T*1.35).toFixed(2);f(y),h(Math.round((1-T)*100)),document.documentElement.style.setProperty("--altitude-remaining",(U/3e4).toFixed(4))};return window.addEventListener("scroll",_,{passive:!0}),_(),()=>{p.forEach(v=>clearTimeout(v)),window.removeEventListener("scroll",_)}},[]);const g=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return w.jsxs("aside",{className:"altitude-hud","aria-label":"Current story elevation & cell telemetry",children:[w.jsx("div",{className:"altitude-hud__track","aria-hidden":"true",children:w.jsx("span",{})}),w.jsxs("div",{className:"altitude-hud__readout",children:[w.jsx("span",{className:"altitude-hud__label",children:"Altitude"}),w.jsx("output",{className:"altitude-hud__value",children:i??`${g.format(o)} FT`}),w.jsxs("div",{className:"altitude-hud__battery-gauge",children:[w.jsxs("span",{children:["⚡ ",c,"V"]}),w.jsx("span",{children:"·"}),w.jsxs("span",{children:[d,"% SoC"]})]})]})]})}const sx=["var(--color-red)","var(--color-orange)","var(--color-purple)","var(--color-yellow)"];function p3(){const[o,t]=rt.useState(0),i=rt.useCallback(()=>{t(s=>(s+1)%sx.length)},[]);return w.jsx("header",{className:"masthead",id:"top",children:w.jsxs("div",{className:"masthead__frame",children:[w.jsxs("div",{className:"masthead__nav",children:[w.jsxs("a",{className:"masthead__brand",href:"#top","aria-label":"Battery Cell 4.0 home",onPointerEnter:i,onFocus:i,style:{"--brand-mark-hue":sx[o]},children:[w.jsx("svg",{viewBox:"0 0 357 197",role:"img","aria-label":"IBC 4.0 Brand Mark",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z",fill:"currentColor"})}),w.jsx("span",{className:"masthead__brand-tag",children:"CELL 4.0 / INDIA HACKATHON 2026"})]}),w.jsxs("nav",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[[{label:"Themes",href:"#themes"},{label:"Architecture",href:"#architecture"},{label:"Dates",href:"#timeline"},{label:"Prizes",href:"#fees"},{label:"FAQ",href:"#faq"}].map(s=>w.jsx("a",{href:s.href,className:"masthead__nav-link",children:s.label},s.label)),w.jsxs("a",{href:"#register",className:"masthead__action-btn",children:[w.jsx("span",{className:"cut-button__box"}),w.jsx("span",{children:"Register EOI"})]})]})]}),w.jsxs("div",{className:"masthead__content",children:[w.jsxs("div",{className:"masthead__badge-row",children:[w.jsx("span",{className:"masthead__badge masthead__badge--live",children:"EOI Floated (Live Now)"}),w.jsx("span",{className:"masthead__badge",children:"National Security Domain"}),w.jsx("span",{className:"masthead__badge",children:"Up to ₹2,00,000 Cash Prizes"}),w.jsx("span",{className:"masthead__badge",children:"Lab Incubation"})]}),w.jsxs("h1",{className:"masthead__title-semantic",children:[w.jsx("span",{children:"Intelligent"}),w.jsx("span",{children:"Battery Cell 4.0"}),w.jsx("em",{children:"Hackathon 2026"})]}),w.jsx("p",{className:"masthead__dek",children:"Bringing together India's sharpest students, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology using Artificial Intelligence."})]}),w.jsx("div",{className:"masthead__footer",children:w.jsxs("p",{className:"masthead__meta",children:[w.jsx("span",{children:"Registration Opens: 09 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Deadline: 30 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Grand Finale: 01 Dec 2026"})]})}),w.jsx("p",{className:"scroll-cue","aria-hidden":"true",children:w.jsx("span",{className:"scroll-cue__word",children:"Scroll".split("").map((s,c)=>w.jsx("span",{className:"scroll-cue__letter",style:{"--i":c},children:w.jsx("span",{className:"scroll-cue__glyph",children:s})},c))})})]})})}const m3=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,g3=`
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_mistColor;
uniform vec3 u_coreColor;
uniform float u_speed;
uniform float u_progress;
uniform float u_density;
uniform float u_planeXNorm;
uniform float u_planeYNorm;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p, float t) {
  float v = 0.0;
  float a = 0.5;
  float fi = 0.0;
  mat2 rot = mat2(0.86, 0.51, -0.51, 0.86);
  
  for (int i = 0; i < 6; i++) {
    vec2 morph = vec2(sin(t * 0.45 + fi), cos(t * 0.28 - fi)) * 0.05;
    v += a * noise(p + morph);
    p = rot * p * 2.0;
    a *= 0.5;
    fi += 1.0;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * u_speed;
  vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
  vec2 p = (uv - 0.5) * aspect;

  // Turbulent aircraft wake drift rushing gently leftwards
  vec2 wind = vec2(t * 0.12, t * 0.025);

  float zoom = 1.0 + u_progress * 0.9;
  float pattern = fbm((p / zoom) * 2.15 - wind, t);

  // Wake front trails the aircraft: everything left of the plane fills with mist
  float wakeNoise = (pattern - 0.5) * 0.30;
  float wakeLead = smoothstep(u_planeXNorm + 0.06, u_planeXNorm - 0.30, uv.x + wakeNoise);

  // Plume blooms vertically from engine height, reaching full viewport height
  float distX = max(0.0, u_planeXNorm - uv.x);
  float plumeRadius = 0.18 + distX * 1.6;
  float dy = abs(uv.y - u_planeYNorm) + wakeNoise * 0.5;
  float verticalWake = 1.0 - smoothstep(plumeRadius * 0.6, plumeRadius + 0.25, dy);

  // Once the plane exits right, the blanket is complete and uniform
  float fullCoverage = smoothstep(0.85, 1.25, u_planeXNorm);
  float directionalMask = mix(wakeLead * verticalWake, 1.0, fullCoverage);

  float localDensity = u_density * directionalMask;

  if (localDensity < 0.005) {
    discard;
  }

  // Blanket ramp for 100% screen immersion at peak
  float blanket = smoothstep(0.38, 0.82, localDensity);

  float lowThresh = mix(0.46, 0.02, localDensity);
  float highThresh = mix(0.78, 0.36, localDensity);

  float cloudPattern = smoothstep(lowThresh, lowThresh + 0.32, pattern);
  float cloudAlpha = mix(cloudPattern, 1.0, blanket);
  float finalAlpha = clamp(cloudAlpha * localDensity * 1.5, 0.0, 1.0);

  if (finalAlpha < 0.005) {
    discard;
  }

  // Color gradient: soft #8DC0DD mist at thin edges, crisp pure white at core
  float coreIntensity = smoothstep(highThresh - 0.08, highThresh + 0.22, pattern);
  vec3 color = mix(u_mistColor, u_coreColor, coreIntensity);

  // Luminous white cloud core at maximum blanket
  color = mix(color, vec3(0.97, 0.985, 1.0), blanket * 0.5);

  gl_FragColor = vec4(color, finalAlpha);
}
`,_3=/^#?[0-9a-fA-F]{6}$/;function v3(o,t){const i=(o||"").trim();return _3.test(i)?i.startsWith("#")?i:`#${i}`:t}function ox(o){const t=v3(o,"#8DC0DD").replace("#",""),i=parseInt(t.slice(0,2),16)/255,s=parseInt(t.slice(2,4),16)/255,c=parseInt(t.slice(4,6),16)/255;return[i,s,c]}function x3({mistColor:o="#8DC0DD",coreColor:t="#ffffff",speed:i=2.2}){const s=rt.useRef(null),c=rt.useRef(null),f=rt.useRef(null),d=rt.useRef(0),h=rt.useRef(0),g=rt.useRef(-.4),p=rt.useRef(.68),x=rt.useRef(null),_=rt.useMemo(()=>({mistColor:o,coreColor:t,speed:i}),[o,t,i]);return rt.useEffect(()=>{let v=0;const M=()=>{v||(v=requestAnimationFrame(()=>{v=0;const T=s.current;if(!T)return;const U=T.getBoundingClientRect(),y=window.innerHeight,S=Math.max(1,U.height-y),D=-U.top,X=Math.max(0,Math.min(1,D/S)),C=G=>G*G*(3-2*G),L=Math.max(0,Math.min(1,(X-.05)/.55)),P=-45+L*160,I=30+L*8,E=P/100+.2;let N;X<.6?N=.8+.2*C(X/.6):X<.7?N=1:N=1-C(Math.min(1,(X-.7)/.25)),d.current=X,h.current=N,g.current=E,p.current=1-I/100-.06;const F=x.current;if(F){const G=L>0&&L<1;F.style.transform=`translate3d(${P}vw, ${I}vh, 0) translateY(-50%) rotate(1.6deg)`,F.style.visibility=G?"visible":"hidden"}}))};return window.addEventListener("scroll",M,{passive:!0}),M(),()=>{window.removeEventListener("scroll",M),v&&cancelAnimationFrame(v)}},[]),rt.useEffect(()=>{const v=c.current,M=f.current;if(!v||!M)return;const T=v.getContext("webgl",{antialias:!0,alpha:!0});if(!T){console.warn("WebGL not supported for Cloudscape");return}T.enable(T.BLEND),T.blendFunc(T.SRC_ALPHA,T.ONE_MINUS_SRC_ALPHA);const U=(ae,ue)=>{const ge=T.createShader(ae);return ge?(T.shaderSource(ge,ue),T.compileShader(ge),T.getShaderParameter(ge,T.COMPILE_STATUS)?ge:(console.error("Shader compile error:",T.getShaderInfoLog(ge)),T.deleteShader(ge),null)):null},y=U(T.VERTEX_SHADER,m3),S=U(T.FRAGMENT_SHADER,g3);if(!y||!S)return;const D=T.createProgram();if(!D)return;if(T.attachShader(D,y),T.attachShader(D,S),T.linkProgram(D),!T.getProgramParameter(D,T.LINK_STATUS)){console.error("Program link error:",T.getProgramInfoLog(D)),T.deleteProgram(D),T.deleteShader(y),T.deleteShader(S);return}T.useProgram(D);const X=T.getAttribLocation(D,"position"),C=T.createBuffer();T.bindBuffer(T.ARRAY_BUFFER,C),T.bufferData(T.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),T.STATIC_DRAW),T.enableVertexAttribArray(X),T.vertexAttribPointer(X,2,T.FLOAT,!1,0,0);const L=T.getUniformLocation(D,"u_resolution"),P=T.getUniformLocation(D,"u_time"),I=T.getUniformLocation(D,"u_mistColor"),E=T.getUniformLocation(D,"u_coreColor"),N=T.getUniformLocation(D,"u_speed"),F=T.getUniformLocation(D,"u_progress"),G=T.getUniformLocation(D,"u_density"),Q=T.getUniformLocation(D,"u_planeXNorm"),te=T.getUniformLocation(D,"u_planeYNorm"),j=()=>{const ae=Math.min(window.devicePixelRatio||1,2),{width:ue,height:ge}=M.getBoundingClientRect();v.width=Math.max(1,Math.floor(ue*ae)),v.height=Math.max(1,Math.floor(ge*ae)),T.viewport(0,0,v.width,v.height),L&&T.uniform2f(L,v.width,v.height)};j();const ee=new ResizeObserver(j);ee.observe(M);let k=0;const W=performance.now(),ce=ae=>{const ue=(ae-W)/1e3,ge=h.current,Be=d.current,We=g.current,B=p.current;if(T.clearColor(0,0,0,0),T.clear(T.COLOR_BUFFER_BIT),ge>.005){const me=ox(_.mistColor),Te=ox(_.coreColor);P&&T.uniform1f(P,ue),I&&T.uniform3f(I,me[0],me[1],me[2]),E&&T.uniform3f(E,Te[0],Te[1],Te[2]),N&&T.uniform1f(N,_.speed),F&&T.uniform1f(F,Be),G&&T.uniform1f(G,ge),Q&&T.uniform1f(Q,We),te&&T.uniform1f(te,B),T.drawArrays(T.TRIANGLE_STRIP,0,4)}k=requestAnimationFrame(ce)};return k=requestAnimationFrame(ce),()=>{cancelAnimationFrame(k),ee.disconnect(),T.deleteBuffer(C),T.deleteProgram(D),T.deleteShader(y),T.deleteShader(S)}},[_]),w.jsx("div",{ref:s,className:"cloud-transition-zone","aria-hidden":"true",children:w.jsxs("div",{ref:f,className:"cloud-transition-zone__sticky",children:[w.jsx("canvas",{ref:c,className:"cloud-transition-canvas"}),w.jsxs("div",{ref:x,className:"cloud-transition-flight",style:{visibility:"hidden"},children:[w.jsx("div",{className:"cloud-transition-trail-wrapper",children:w.jsx("img",{src:"/brand/gpc/flight/jet-stream-magnific.png",className:"cloud-transition-trail",alt:""})}),w.jsx("img",{src:"/brand/gpc/airliner-gpc-color-block.png",className:"cloud-transition-plane",alt:"Intelligent Battery Cell 4.0 Airliner"})]})]})})}function Vh({text:o="",as:t="p",className:i="",highlightWord:s=""}){const c=rt.useRef(null),f=rt.useMemo(()=>o.trim().split(/\s+/),[o]);return rt.useEffect(()=>{const d=c.current;if(!d)return;const h=Array.from(d.querySelectorAll(".scroll-reveal-word"));if(!h.length)return;let g=[],p=null;const x=()=>{const T=window.scrollY,U=h.map(D=>D.getBoundingClientRect().top+T);let y=NaN,S=0;g=h.map((D,X)=>{const C=U[X];return Number.isNaN(y)||Math.abs(C-y)>3?(S=0,y=C):S+=1,{element:D,documentTop:C,wordInLine:S,lastProgress:-1}}),_()},_=()=>{const T=window.innerHeight,U=window.scrollY;g.forEach(y=>{const S=y.documentTop-U,D=.98*T-4*y.wordInLine,X=.72*T-y.wordInLine,C=Math.min(Math.max((D-S)/Math.max(D-X,1),0),1);Math.abs(C-y.lastProgress)>=.002&&(y.lastProgress=C,y.element.style.opacity=C.toFixed(4),y.element.style.filter=C>.99?"none":`blur(${((1-C)*6).toFixed(2)}px)`)})},v=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(_)},M=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(x)};return x(),window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",M),()=>{cancelAnimationFrame(p),window.removeEventListener("scroll",v),window.removeEventListener("resize",M)}},[f]),w.jsx(t,{ref:c,className:i,children:f.map((d,h)=>{const g=s&&d.toLowerCase().includes(s.toLowerCase());return w.jsxs(hx.Fragment,{children:[w.jsx("span",{className:"scroll-reveal-word",style:{display:"inline-block",marginRight:h<f.length-1?"0.28em":void 0,opacity:.15,filter:"blur(4px)",color:g?"var(--color-red)":void 0,fontWeight:g?500:void 0},children:d}),h<f.length-1?" ":""]},`${d}-${h}`)})})}function S3(){return w.jsx("section",{className:"statement","aria-label":"The bottleneck of modern battery development",children:w.jsx("div",{className:"statement__sticky",children:w.jsxs("div",{className:"statement__inner",style:{textAlign:"center"},children:[w.jsx("h2",{className:"statement__heading",children:"Most battery innovations never survive past academic journals."}),w.jsx("h2",{className:"statement__heading",style:{color:"var(--color-red)",marginTop:"0.4em"},children:"They stall in prototype cells before reaching gigawatt scale."}),w.jsxs("div",{className:"statement__tags-row",children:[w.jsx("p",{className:"statement__tag statement__tag--cost",children:"Thermal Runaway Risk"}),w.jsx("p",{className:"statement__tag statement__tag--effort",children:"Black-Box Cell Degradation"}),w.jsx("p",{className:"statement__tag statement__tag--tech",children:"Foreign Chemistry Dependency"})]})]})})})}const Xh=[{word:"Thermal Safety",prob:45,color:"var(--color-red)",desc:"Mitigating micro-dendrite thermal runaway before catastrophic failure."},{word:"Digital Twins",prob:31,color:"var(--color-orange)",desc:"Real-time electrochemical physics simulation running on IoT edge nodes."},{word:"Second-Life Reuse",prob:17,color:"var(--color-purple)",desc:"Cascading EV battery packs into grid-scale renewable energy storage."},{word:"Indigenous Tech",prob:7,color:"var(--color-yellow)",desc:"Sovereign sodium-ion and national security storage independent of global supply."}];function y3(){const[o,t]=rt.useState(0);return w.jsx("section",{className:"probability","aria-labelledby":"prob-heading",children:w.jsx("div",{className:"probability__sticky",children:w.jsxs("div",{className:"probability__inner",children:[w.jsx("p",{className:"probability__eyebrow",children:"Electrochemical Paradigm Shift"}),w.jsxs("h2",{id:"prob-heading",className:"probability__heading",children:["The future of battery technology is"," ",w.jsxs("em",{style:{color:Xh[o].color,fontStyle:"italic"},children:[Xh[o].word,"."]})]}),w.jsx("ol",{className:"probability__candidates",children:Xh.map((i,s)=>w.jsxs("li",{className:`probability__candidate ${o===s?"is-active":""}`,style:{"--cand-color":i.color,"--cand-fill":o===s?"1":`${i.prob/100}`},onPointerEnter:()=>t(s),onClick:()=>t(s),tabIndex:0,role:"button",children:[w.jsx("div",{className:"probability__candidate-bar"}),w.jsxs("div",{children:[w.jsx("span",{className:"probability__candidate-word",children:i.word}),w.jsx("p",{className:"probability__candidate-desc",children:i.desc})]}),w.jsxs("span",{className:"probability__candidate-value",children:[i.prob,"%"]})]},i.word))}),w.jsx("p",{className:"probability__takeaway",children:'"The conventional engineering choice is rarely the breakthrough that reimagines an industry."'})]})})})}function M3(){const[o,t]=rt.useState(!1),[i,s]=rt.useState(!1);return w.jsx("section",{className:"prompt-split",id:"architecture","aria-label":"Two approaches to battery innovation",children:w.jsxs("div",{className:"prompt-split__grid",children:[w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--one",children:"Group 1: Incremental Patch"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Add an external temperature thermistor to an unmonitored lithium pack."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The legacy way: relying on surface-level sensors that detect heat only after catastrophic internal chemical breakdown has already started."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/conventional-battery-schematic.svg",alt:"Conventional battery schematic with blind thermal core",className:`prompt-split__sketch-img ${o?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>t(!o),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-fountain-pen.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:o?"Inspect Normal View":"Highlight Thermal Hotspot"})]})]})]}),w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--two",children:"Group 2: Intelligent Cell 4.0"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Embed in-situ optical sensors and edge neural physics directly inside the cell."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The Hackathon 2026 challenge: predicting micro-dendrite nucleation, impedance shifts, and mechanical strain in real-time before temperature rises."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/intelligent-cell-schematic.svg",alt:"Intelligent Cell 4.0 schematic with optical fiber and edge BMS",className:`prompt-split__sketch-img ${i?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>s(!i),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-scissors.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:i?"Default Blueprint":"Activate AI Sensor Spine"})]})]})]})]})})}const pu=[{id:"01",code:"BMS-AI",title:"Intelligent Battery Management Systems (BMS)",subtitle:"Edge AI State Estimation & Embedded Microcontrollers",desc:"Next-generation algorithmic state estimation (SoC, SoH, SoP) with adaptive machine learning models on edge microcontrollers.",tag:"Core AI Track",badgeColor:"#f94e2a",metricLabel:"TARGET ACCURACY",metricVal:"> 98.8% SoC",schematicType:"bms"},{id:"02",code:"THM-RUN",title:"Battery Safety & Thermal Runaway Mitigation",subtitle:"Multi-Physics Early Warning & Gas Vent Detection",desc:"Multi-physics early-warning detection systems, vapor pressure venting triggers, and passive/active propagation barriers.",tag:"Safety Critical",badgeColor:"#f66f00",metricLabel:"VENT DETECTION",metricVal:"< 250ms",schematicType:"safety"},{id:"03",code:"CHG-CYC",title:"Smart Charging & Second-Life Cascading",subtitle:"Dynamic Pulse Protocols & Stationary Storage",desc:"Dynamic pulse charging protocols, health-conscious fast charging, and algorithmic sorting of retired EV modules for stationary storage.",tag:"Circular Economy",badgeColor:"#9b338f",metricLabel:"CYCLE LIFE GAIN",metricVal:"+35% Life",schematicType:"charging"},{id:"04",code:"GRD-STG",title:"Renewable Energy Grid Storage",subtitle:"High-Inertia Buffer Storage & Microgrid Integration",desc:"High-inertia buffer storage algorithms, microgrid coordination, and utility-scale integration with solar and wind variability.",tag:"Grid Infrastructure",badgeColor:"#ffc013",metricLabel:"FREQUENCY LOCK",metricVal:"50.00 Hz",schematicType:"grid"},{id:"05",code:"DIG-TWN",title:"Battery Diagnostics & Physics Digital Twins",subtitle:"Electrochemical PDE Coupling & Neural Surrogates",desc:"Coupling electrochemical partial differential equations with neural surrogate models for non-invasive degradation mapping.",tag:"Digital Twin",badgeColor:"#f94e2a",metricLabel:"SOLVER SPEEDUP",metricVal:"10,000x",schematicType:"twin"},{id:"06",code:"IOT-EIS",title:"IoT-Enabled Wireless Monitoring",subtitle:"Cell-Level EIS & Ultra-Low Power Sensor Mesh",desc:"Cell-level impedance spectroscopy, ultra-low power wireless sensor mesh networks, and cloud telemetry pipelines.",tag:"Hardware & IoT",badgeColor:"#f66f00",metricLabel:"MESH LATENCY",metricVal:"< 12ms",schematicType:"iot"},{id:"07",code:"NAT-MAT",title:"Indigenous Battery Chemistries",subtitle:"Domestic Sodium-Ion & Non-Critical Supply Chains",desc:"Sodium-ion, iron-redox, and zinc-air architectures built entirely using domestic, non-critical raw material supply chains.",tag:"Atmanirbhar R&D",badgeColor:"#9b338f",metricLabel:"DOMESTIC SOURCING",metricVal:"100% India",schematicType:"chem"},{id:"08",code:"DEF-EMP",title:"National Security & Defense Storage",subtitle:"Sub-Zero Combat Packs & Tactical EMP Shielding",desc:"Sub-zero military drone propulsion, resilient combat vehicle packs, and tactical EMP-hardened energy repositories.",tag:"Strategic Defense",badgeColor:"#f94e2a",metricLabel:"OPERATING RANGE",metricVal:"-40°C to +65°C",schematicType:"defense"}];function xl(o,t,i){return Math.min(i,Math.max(t,o))}function E3(o,t,i,s){const c=xl(o/t,0,1);return i+4*s*c*(1-c)}function b3(o,t,i,s,c=70){const f=2*Math.sqrt(c),d=t+(c*(i-o)-f*t)*s;return[o+d*s,d]}function T3(o,t,i,s,c=1){const f=t+(-38*o-4.2*t+i*.0034*c)*s;return[xl(o+f*s,-.45,.45),f]}function lx(o,t,i){return xl(Math.round(o/t),0,Math.max(0,i-1))}function cx(o){return o<10?"0"+o:String(o)}function A3(){const o=pu.length,[t,i]=rt.useState(0),[s,c]=rt.useState(!1),[f,d]=rt.useState({w:1200,h:640,cw:330}),h=rt.useRef(null),g=rt.useRef(null),p=rt.useRef([]),x=rt.useRef({off:0,vel:0,target:0,a:[],w:[]}),_=rt.useRef(null),v=rt.useRef(0),M=rt.useRef(0),T=34,U=1,y=f.cw*1.14,S=rt.useCallback(E=>{x.current.target=xl(E,0,o-1)*y},[o,y]);rt.useEffect(()=>{const E=h.current;if(!E)return;const N=new ResizeObserver(()=>{const F=E.getBoundingClientRect(),G=Math.round(Math.max(280,Math.min(350,F.width*.42,F.height*.54)));d({w:F.width,h:F.height,cw:G})});return N.observe(E),()=>N.disconnect()},[]),rt.useEffect(()=>{x.current.target=M.current*y,x.current.off=M.current*y},[y]),rt.useEffect(()=>{const E=h.current;if(!E)return;const N=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let F=!0,G=0,Q=performance.now();const te=x.current,j=k=>{if(G=0,!F)return;const W=Math.min(.033,(k-Q)/1e3);Q=k;const{w:ce,h:ae,cw:ue}=f,ge=Math.max(50,ae*.14),Be=_.current;let We=0;if(Be&&Be.moved)We=Be.v*1e3;else{const Te=te.off;[te.off,te.vel]=b3(te.off,te.vel,te.target,W),We=-(te.off-Te)/Math.max(W,.001)}const B=N?0:U,me=lx(te.off,y,o);for(let Te=0;Te<o;Te++){const Z=p.current[Te];if(!Z)continue;const he=ce/2+Te*y-te.off;if(he<-ue*1.5||he>ce+ue*1.5){Z.style.visibility="hidden";continue}Z.style.visibility="visible";let Ae=te.a[Te]||0,De=te.w[Te]||0;[Ae,De]=T3(Ae,De,We,W,B),B&&(Ae+=Math.sin(k/1300+Te*1.7)*9e-4*B),te.a[Te]=Ae,te.w[Te]=De;const xe=E3(he,ce,ge,T)-6,Ce=Te===me;Z.style.transform=`translate(${(he-ue/2).toFixed(1)}px, ${xe.toFixed(1)}px) rotate(${Ae.toFixed(4)}rad)`,Z.style.zIndex=String(Ce?o+2:o-Math.abs(Te-me))}g.current&&g.current.setAttribute("d",`M 0 ${ge} Q ${ce/2} ${ge+2*T} ${ce} ${ge}`),me!==M.current&&(M.current=me,i(me)),G=requestAnimationFrame(j)},ee=new IntersectionObserver(([k])=>{F=k.isIntersecting,F&&!G&&(Q=performance.now(),G=requestAnimationFrame(j))});return ee.observe(E),G=requestAnimationFrame(j),()=>{cancelAnimationFrame(G),ee.disconnect()}},[f,y,o]),rt.useEffect(()=>{const E=setInterval(()=>{document.hidden||_.current||performance.now()-v.current<5e3||S(M.current>=o-1?0:M.current+1)},5500);return()=>clearInterval(E)},[o,S]);const D=E=>{E.target.closest(".plc-bar")||E.target.closest("button")||E.target.closest("a")||(v.current=performance.now(),_.current={x:E.clientX,off:x.current.off,lx:E.clientX,lt:E.timeStamp,v:0,moved:!1})},X=E=>{var j;const N=_.current;if(!N)return;const F=E.clientX-N.x;if(!N.moved&&Math.abs(F)>4&&(N.moved=!0,c(!0),(j=h.current)==null||j.setPointerCapture(E.pointerId)),!N.moved)return;const G=Math.max(1,E.timeStamp-N.lt);N.v=.7*((E.clientX-N.lx)/G)+.3*N.v,N.lx=E.clientX,N.lt=E.timeStamp;const Q=(o-1)*y;let te=N.off-F;te<0&&(te*=.35),te>Q&&(te=Q+(te-Q)*.35),x.current.off=te},C=E=>{const N=_.current;if(_.current=null,v.current=performance.now(),!N)return;if(N.moved){c(!1),x.current.vel=-N.v*1e3,S(lx(x.current.off-N.v*180,y,o));return}const F=E.target.closest("[data-i]");F&&S(Number(F.getAttribute("data-i")))},L=E=>{v.current=performance.now(),S(xl(M.current+E,0,o-1))},P=E=>{if(E.key==="ArrowRight")L(1);else if(E.key==="ArrowLeft")L(-1);else return;E.preventDefault()},I=pu[t]||pu[0];return w.jsxs("section",{className:"themes-section",id:"themes",children:[w.jsxs("div",{className:"themes-section__intro",children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / Core Problem Statements"}),w.jsx("h2",{className:"article-block__heading",children:"Eight strategic domains shaping the next energy century."}),w.jsx("p",{className:"themes-section__subhead",children:"Drag the suspended dossier line or use navigation arrows to explore all 8 official hackathon challenges. All submissions are benchmarked against these engineering pillars."})]}),w.jsxs("div",{ref:h,className:"plc-root","data-drag":s?"1":"0",role:"region","aria-roledescription":"carousel","aria-label":"Hackathon Problem Statements Carousel",tabIndex:0,onKeyDown:P,onPointerDown:D,onPointerMove:X,onPointerUp:C,onPointerCancel:C,style:{"--pl-cw":`${f.cw}px`},children:[w.jsx("svg",{className:"plc-string","aria-hidden":"true",children:w.jsx("path",{ref:g,fill:"none",stroke:"var(--color-ink, #232424)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.32"})}),pu.map((E,N)=>{const F=N===t;return w.jsxs("div",{className:"plc-card","data-i":N,"data-on":F?"1":"0",ref:G=>p.current[N]=G,"aria-hidden":F?void 0:!0,children:[w.jsx("div",{className:"plc-peg","aria-hidden":"true",children:w.jsx("div",{className:"plc-peg__groove"})}),w.jsxs("div",{className:"plc-print",children:[w.jsxs("div",{className:"plc-print__header",children:[w.jsxs("span",{className:"plc-print__tag",style:{background:E.badgeColor},children:[E.id," / THEME"]}),w.jsxs("span",{className:"plc-print__serial",children:["CELL 4.0 · DOMAIN ",E.id]})]}),w.jsx("h3",{className:"plc-print__title",children:E.title}),w.jsxs("div",{className:"plc-print__metric-line",children:[w.jsxs("span",{className:"plc-print__metric-label",children:[E.metricLabel,":"]}),w.jsx("b",{className:"plc-print__metric-val",children:E.metricVal})]}),w.jsx("p",{className:"plc-print__desc",children:E.desc}),w.jsxs("div",{className:"plc-print__footer",children:[w.jsx("span",{className:"plc-print__category",children:E.tag}),w.jsx("a",{href:"#register",className:"plc-print__action",onClick:G=>G.stopPropagation(),children:"SELECT THEME →"})]})]})]},E.id)}),w.jsxs("div",{className:"plc-bar",children:[w.jsxs("div",{className:"plc-cap","aria-hidden":"true",children:[w.jsxs("div",{className:"plc-cap__meta",children:[w.jsxs("span",{className:"plc-cap__tag",style:{background:I.badgeColor},children:[I.id," / ",I.tag]}),w.jsxs("span",{className:"plc-cap__metric",children:["BENCHMARK: ",w.jsx("b",{children:I.metricVal})]})]}),w.jsx("span",{className:"plc-title",children:I.title}),w.jsx("span",{className:"plc-sub",children:I.desc})]},t),w.jsxs("div",{className:"plc-controls",children:[w.jsxs("span",{className:"plc-count","aria-hidden":"true",children:[w.jsx("b",{children:cx(t+1)})," / ",cx(o)]}),w.jsxs("div",{className:"plc-nav-btns",children:[w.jsx("button",{type:"button",className:"plc-btn","aria-label":"Previous Theme",onClick:()=>L(-1),children:w.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:w.jsx("path",{d:"M10 3 5 8l5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),w.jsx("button",{type:"button",className:"plc-btn","aria-label":"Next Theme",onClick:()=>L(1),children:w.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:w.jsx("path",{d:"m6 3 5 5-5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})}const ux=[{label:"18650 Legacy Li-ion Cell",note:"Commodity cell with high thermal hotspot risk"},{label:"Lead-Acid Heavy Block",note:"Low energy density, toxic electrolyte"},{label:"Rule-Based Relay BMS",note:"Rigid voltage thresholds, blind to impedance shifts"},{label:"Standard LiFePO4 Prism",note:"Safe but passive; no predictive digital twin"}],fx=[{label:"Intelligent Cell 4.0",note:"In-situ optical fiber sensor with edge AI BMS"},{label:"AI Neural Digital Twin",note:"Predicts micro-dendrites at atomic layer in real time"},{label:"Sovereign Sodium-Ion",note:"Indigenous non-lithium domestic supply chain"},{label:"Solid-State Ceramic",note:"High density but difficult to mass manufacture"}];function R3(){const[o,t]=rt.useState(50),[i,s]=rt.useState([{...ux[2],key:"init-1",isRadical:!1},{...fx[0],key:"init-2",isRadical:!0}]),c=rt.useRef(o),f=rt.useCallback(d=>{const h=Number(d.target.value);if(t(h),Math.abs(h-c.current)>=12){c.current=h;const g=h>50,p=g?fx:ux,x=p[Math.floor(Math.random()*p.length)];s(_=>[..._.slice(-4),{...x,key:`${Date.now()}-${Math.random()}`,isRadical:g}])}},[]);return w.jsx("section",{className:"loewy-maya",id:"spectrum",children:w.jsxs("div",{className:"loewy-maya__inner",children:[w.jsxs("div",{className:"loewy-maya__copy",children:[w.jsx("p",{className:"loewy-maya__label",children:"THE MAYA DESIGN PRINCIPLE IN ENERGY R&D"}),w.jsxs("h2",{className:"loewy-maya__heading",children:[w.jsx("span",{children:"Most advanced"}),w.jsxs("span",{children:[w.jsx("em",{children:"yet"})," acceptable."]})]}),w.jsx("p",{className:"loewy-maya__dek",children:"If your hackathon concept is too familiar, it creates no breakthrough. If it is too radical, it cannot be manufactured. Intelligent Battery Cell 4.0 lives precisely at the threshold of practical engineering and radical imagination."})]}),w.jsxs("section",{className:"maya-spectrum","aria-label":"Innovation spectrum slider",children:[w.jsxs("div",{className:"maya-spectrum__inner",children:[w.jsxs("div",{className:"maya-spectrum__labels",children:[w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--familiar",children:"← Too Conventional"}),w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--radical",children:"Too Radical →"})]}),w.jsxs("div",{className:"maya-spectrum__control",children:[w.jsx("div",{className:"maya-spectrum__track","aria-hidden":"true"}),w.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:f,className:"maya-spectrum__range","aria-label":"Spectrum from conventional to radical battery tech"})]}),w.jsx("p",{className:"maya-spectrum__drag-cue","aria-hidden":"true",children:"← Drag to explore →"})]}),w.jsx("div",{className:"maya-spectrum__stage",children:i.map(d=>w.jsxs("div",{className:`maya-spawn-card ${d.isRadical?"maya-spawn-card--radical":""}`,style:{"--spawn-rotation":`${(Math.random()-.5)*16}deg`,"--spawn-drift-x":`${(Math.random()-.5)*30}px`,"--spawn-lift-y":`${-8-Math.random()*12}px`,"--spawn-fall-y":`${20+Math.random()*15}px`},children:[w.jsx("div",{className:"maya-spawn-card__backdrop","aria-hidden":"true"}),w.jsxs("div",{className:"maya-spawn-card__image",children:[w.jsx("div",{style:{width:"100%",height:"90px",background:d.isRadical?"linear-gradient(135deg, #f94e2a22, #f66f0022)":"linear-gradient(135deg, #9b338f22, #8cb8d122)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"},"aria-hidden":"true",children:d.isRadical?"⚡":"🔋"}),w.jsx("div",{className:"maya-spawn-card__halftone","aria-hidden":"true"})]}),w.jsx("span",{children:d.label})]},d.key))})]})]})})}const C3=[{phase:"PHASE 01",date:"09 OCT 2026",status:"ACTIVE NOW",title:"Registration & EOI Opens",desc:"Expression of Interest (EOI) is officially floated across national universities, research labs, and startups. Portal open for team submissions."},{phase:"PHASE 02",date:"30 OCT 2026",status:"HARD DEADLINE",title:"Registration Deadline",desc:"Final cutoff for initial abstract proposals, team rosters, and theme domain selections. Screening of applications begins immediately."},{phase:"PHASE 03",date:"NOV 2026",status:"INCUBATION & DEV",title:"Mentoring & Rapid Prototyping",desc:"Shortlisted applicants receive technical mentoring from leading battery scientists, digital twin architects, and electrochemical patent holders."},{phase:"PHASE 04",date:"01 DEC 2026",status:"TENTATIVE ANNOUNCEMENT",title:"Grand Finale Showcase",desc:"Final live prototype evaluation, investor jury pitches, award of ₹2 Lakh prize money, and incubation partner onboarding."}];function w3(){return w.jsxs("section",{className:"timeline-section",id:"timeline",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"02 / Important Milestones"}),w.jsx("h2",{className:"article-block__heading",children:"Critical Timeline & Roadmap"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Mark these mandatory deadlines to ensure your team qualifies for mentorship and finale consideration."})]}),w.jsx("div",{className:"timeline-grid",children:C3.map(o=>w.jsxs("div",{className:"timeline-card",children:[w.jsxs("span",{className:"timeline-card__phase",children:[o.phase," · ",o.status]}),w.jsx("h3",{className:"timeline-card__date",children:o.date}),w.jsx("h4",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:500,marginBottom:"0.6rem",color:"var(--color-neutral-500)"},children:o.title}),w.jsx("p",{className:"timeline-card__desc",children:o.desc})]},o.phase))})]})}const N3=[{icon:"🏆",title:"Up to ₹2,00,000 Cash Prizes",desc:"Direct grant-style cash prize pool distributed across top category winners, alongside official national certificates."},{icon:"🔬",title:"Pre-Finale Scientist Mentorship",desc:"Dedicated 1-on-1 weekly mentoring sessions with premier battery researchers, simulation engineers, and hardware builders."},{icon:"🚀",title:"Incubation & Lab Access Opportunities",desc:"Fast-track incubation support, venture funding introductions, and access to advanced battery cycler & testing infrastructure."}],D3=[{tier:"STUDENTS & SCHOLARS",fee:"₹500",desc:"Enrolled undergraduate, postgraduate, and PhD scholars from accredited academic institutions."},{tier:"STUDENT START-UPS",fee:"₹1,500",desc:"Early-stage venture teams founded and driven by currently enrolled university students.",highlight:!0},{tier:"MSMEs & REGISTERED ENTITIES",fee:"₹2,000",desc:"Registered micro, small, and medium enterprises, spin-offs, and commercial technology companies."}];function U3(){return w.jsxs("section",{className:"fees-section",id:"fees",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"03 / Value & Investment"}),w.jsx("h2",{className:"article-block__heading",children:"Prizes, Incubation & Registration Tiers"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.05rem",lineHeight:1.5,fontFamily:"var(--font-body)"},children:"Transparent fee structure dedicated to fueling world-class jury evaluation, compute grants, and cash prize distribution."})]}),w.jsx("div",{className:"benefits-row",children:N3.map(o=>w.jsxs("div",{className:"benefit-card",children:[w.jsx("div",{className:"benefit-card__icon",children:o.icon}),w.jsx("h3",{className:"benefit-card__title",children:o.title}),w.jsx("p",{className:"benefit-card__desc",children:o.desc})]},o.title))}),w.jsx("div",{className:"fees-grid",children:D3.map(o=>w.jsxs("div",{className:`fee-card ${o.highlight?"fee-card--highlight":""}`,children:[w.jsxs("div",{children:[w.jsx("span",{className:"fee-card__tier",children:o.tier}),w.jsx("div",{className:"fee-card__amount",children:o.fee}),w.jsx("p",{className:"fee-card__desc",children:o.desc})]}),w.jsxs("a",{href:"#register",className:"cut-button",style:{textDecoration:"none",width:"auto",alignSelf:"flex-start"},children:[w.jsx("span",{className:"cut-button__box",style:{"--cut-fill":o.highlight?"var(--color-red)":"var(--color-yellow)"}}),w.jsx("span",{className:"cut-button__label",style:{color:o.highlight?"var(--color-neutral-100)":"var(--color-ink)"},children:"Select & Register"})]})]},o.tier))})]})}const L3=[{step:"ROUND 01",title:"Abstract & Feasibility Screening",dates:"Submission by 30 Oct 2026",weight:"30% Weightage",criteria:["Originality & depth of understanding of electrochemical bottlenecks","Clear choice and mapping to one of the 8 Hackathon themes","Realistic technical feasibility and domestic supply chain awareness","Competency and interdisciplinary balance of the applicant team"]},{step:"ROUND 02",title:"Pre-Finale Mentoring & Prototyping Sprint",dates:"Completed throughout November 2026",weight:"35% Weightage",criteria:["Active participation in weekly 1-on-1 scientist mentoring sessions","Implementation of AI/ML digital twin models or embedded BMS code","Progress on hardware simulation, battery cycler data, or physical cell assembly","Response to technical jury checkpoints and edge-case stress testing"]},{step:"ROUND 03",title:"Grand Finale & National Jury Pitch",dates:"Grand Finale on 01 Dec 2026",weight:"35% Weightage",criteria:["Live functional demonstration of the software, algorithm, or hardware prototype","Validation of safety enhancements (thermal mitigation, state estimation accuracy)","Potential for commercial incubation, patentability, and defense deployment","Jury defense on unit economics, manufacturing scalability, and second-life viability"]}];function O3(){return w.jsxs("section",{className:"article-block",id:"evaluation",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"04 / Rigorous Evaluation"}),w.jsx("h2",{className:"article-block__heading",children:"Evaluation Criteria & Hackathon Stages"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Every submission is evaluated against rigorous academic, industrial, and national security benchmarks by leading battery electrochemists."})]}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem"},children:L3.map(o=>w.jsx("div",{className:"theme-card",style:{padding:"2.5rem"},children:w.jsxs("div",{children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[w.jsx("span",{className:"theme-card__idx",children:o.step}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--color-red)"},children:o.weight})]}),w.jsx("h3",{className:"theme-card__title",style:{fontSize:"1.4rem"},children:o.title}),w.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"var(--color-orange)",marginBottom:"1.5rem"},children:o.dates}),w.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.75rem"},children:o.criteria.map((t,i)=>w.jsxs("li",{style:{display:"flex",gap:"0.5rem",fontSize:"0.9rem",color:"var(--color-ink-muted)",lineHeight:1.5},children:[w.jsx("span",{style:{color:"var(--color-red)",fontWeight:"bold"},children:"✓"}),w.jsx("span",{children:t})]},i))})]})},o.step))})]})}const P3=[{q:"Who is eligible to participate in this Hackathon?",a:"Participation is open across three categories: (1) Students & Research Scholars enrolled in undergraduate, postgraduate, or doctoral programs; (2) Student Start-ups led by enrolled students; and (3) Registered MSMEs and deeptech startups. Cross-institutional and multidisciplinary teams (chemists + computer scientists + electrical engineers) are strongly encouraged."},{q:"Is a physical cell hardware prototype strictly mandatory?",a:"No. Submissions can be purely software algorithms (e.g. edge AI BMS firmware, SoC/SoH neural networks), physics-based digital twins, CAD/simulation models, or physical hardware setups. Teams working on hardware will be provided guidance and lab testing protocols during the November mentoring phase."},{q:"What is the exact registration fee structure?",a:"Registration fees are tiered to ensure equitable access: Students & Research Scholars pay ₹500/-; Student Start-ups pay ₹1,500/-; and MSMEs/Registered Start-ups pay ₹2,000/-. Fees are payable upon abstract shortlisting and directly support compute grants, laboratory testing infrastructure, and prize disbursals."},{q:"What are the key dates and milestones?",a:"Registration & Expression of Interest (EOI) opened on 9 October 2026. The final deadline for abstract submissions is 30 October 2026. During November 2026, shortlisted applicants undergo intensive technical mentoring, screening, and product development. The Grand Finale is tentatively announced for 1 December 2026."},{q:"Who owns the Intellectual Property (IP) developed during the event?",a:"All intellectual property, patents, source code, and hardware designs developed by participants remain 100% their own exclusive property. Organizers and incubation partners provide acceleration support without taking premature equity or non-consensual IP rights."},{q:"How will the ₹2,00,000 cash prize and incubation be disbursed?",a:"Cash prizes totaling up to ₹2,00,000 will be awarded directly to the top winning teams across student, startup, and technical domain categories during the Grand Finale on 1 December 2026, accompanied by official certificates of achievement and fast-track incubation offers."}];function I3(){const[o,t]=rt.useState(0);return w.jsxs("section",{className:"article-block",id:"faq",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"05 / Participant Clarifications"}),w.jsx("h2",{className:"article-block__heading",children:"Frequently Asked Questions"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Everything you need to know about team eligibility, submission requirements, mentoring, and prizes."})]}),w.jsx("div",{style:{maxWidth:"56rem",margin:"0 auto",display:"flex",flexDirection:"column",gap:"1.2rem"},children:P3.map((i,s)=>{const c=o===s;return w.jsxs("div",{style:{background:"rgba(250, 245, 238, 0.90)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",border:"1px solid var(--color-border)",borderRadius:"2px",overflow:"hidden",transition:"border-color 0.2s ease, box-shadow 0.2s ease",boxShadow:"0 4px 16px rgba(35, 36, 36, 0.04)"},children:[w.jsxs("button",{type:"button",onClick:()=>t(c?-1:s),style:{width:"100%",padding:"1.6rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontFamily:"var(--font-serif)",fontSize:"1.25rem",color:"var(--color-neutral-500)"},children:[w.jsx("span",{children:i.q}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",color:"var(--color-red)"},children:c?"—":"+"})]}),c&&w.jsx("div",{style:{padding:"0 2rem 1.8rem",borderTop:"1px dashed var(--color-border)"},children:w.jsx("p",{style:{marginTop:"1.2rem",fontSize:"1rem",lineHeight:1.7,color:"var(--color-ink-muted)",fontFamily:"var(--font-sans)"},children:i.a})})]},s)})})]})}function z3(){const[o,t]=rt.useState(!1),[i,s]=rt.useState({name:"",email:"",category:"students",theme:"bms",message:""}),c=f=>{f.preventDefault(),!(!i.name||!i.email)&&t(!0)};return w.jsxs("div",{className:"ground",id:"register",children:[w.jsx("div",{className:"ground__contact",children:w.jsxs("form",{className:`ground-form ${o?"ground-form--sent":""}`,onSubmit:c,children:[o&&w.jsxs("div",{className:"ground-form__success",children:[w.jsx("p",{className:"ground-form__success-label",children:"Confirmed"}),w.jsx("h3",{className:"ground-form__success-heading",children:"Expression of Interest Received"}),w.jsxs("p",{className:"ground-form__success-copy",children:["Thank you, ",i.name,". Your preliminary registration for the Intelligent Battery Cell 4.0 Hackathon has been logged. Our technical screening committee will reach out to ",i.email," with next steps before October 30, 2026."]}),w.jsxs("button",{type:"button",className:"cut-button",style:{width:"auto"},onClick:()=>t(!1),children:[w.jsx("span",{className:"cut-button__box",style:{"--cut-fill":"var(--color-yellow)"}}),w.jsx("span",{className:"cut-button__label",style:{color:"var(--color-ink)"},children:"Register Another Team"})]})]}),w.jsxs("div",{className:"ground-form__content",children:[w.jsxs("div",{className:"ground-form__lede",children:[w.jsx("h2",{className:"ground-form__heading",children:"Ready to deploy your battery innovation at national scale?"}),w.jsx("p",{className:"ground-form__intro",children:"Submit your team's Expression of Interest (EOI). Open to students, research scholars, student startups, and registered MSMEs."})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"lead-name",children:"Lead Applicant Name / Team Leader"}),w.jsx("input",{id:"lead-name",type:"text",required:!0,placeholder:"e.g. Dr. A. Sharma / Alex Mercer",className:"ground-form__input",value:i.name,onChange:f=>s({...i,name:f.target.value})})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"lead-email",children:"Institutional / Corporate Email"}),w.jsx("input",{id:"lead-email",type:"email",required:!0,placeholder:"you@university.edu or founder@startup.in",className:"ground-form__input",value:i.email,onChange:f=>s({...i,email:f.target.value})})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"category-select",children:"Registration Category"}),w.jsxs("select",{id:"category-select",className:"ground-form__input ground-form__input--select",value:i.category,onChange:f=>s({...i,category:f.target.value}),children:[w.jsx("option",{value:"students",children:"Students & Research Scholars — ₹500/-"}),w.jsx("option",{value:"student-startups",children:"Student Start-ups (Enrolled) — ₹1,500/-"}),w.jsx("option",{value:"msme",children:"MSMEs & Registered Start-ups — ₹2,000/-"})]})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"theme-select",children:"Primary Hackathon Theme"}),w.jsxs("select",{id:"theme-select",className:"ground-form__input ground-form__input--select",value:i.theme,onChange:f=>s({...i,theme:f.target.value}),children:[w.jsx("option",{value:"bms",children:"Intelligent Battery Management Systems (BMS)"}),w.jsx("option",{value:"safety",children:"Battery Safety & Thermal Runaway Mitigation"}),w.jsx("option",{value:"second-life",children:"Smart Charging & Second-Life Storage"}),w.jsx("option",{value:"renewable",children:"Renewable Energy Grid Integration"}),w.jsx("option",{value:"digital-twin",children:"Battery Diagnostics & AI Digital Twins"}),w.jsx("option",{value:"iot",children:"IoT-Enabled Wireless Monitoring"}),w.jsx("option",{value:"indigenous",children:"Indigenous Battery Chemistries"}),w.jsx("option",{value:"defense",children:"National Security & Strategic Storage"})]})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsxs("label",{className:"ground-form__label",htmlFor:"note-message",children:["Abstract / Proposed Technical Approach",w.jsx("span",{className:"ground-form__optional",children:"(Optional)"})]}),w.jsx("textarea",{id:"note-message",rows:3,placeholder:"Summarize your cell chemistry, algorithm, or hardware prototype concept...",className:"ground-form__input ground-form__input--area",value:i.message,onChange:f=>s({...i,message:f.target.value})})]}),w.jsx("div",{className:"ground-form__trap","aria-hidden":"true",children:w.jsx("input",{id:"note-website",type:"text",tabIndex:-1,autoComplete:"off"})}),w.jsxs("button",{type:"submit",className:"cut-button ground-form__submit",style:{"--cut-fill":"var(--color-red)","--cut-fill-hover":"var(--color-orange)"},children:[w.jsx("span",{className:"cut-button__box"}),w.jsx("span",{className:"cut-button__label",children:"Submit Expression of Interest (EOI)"})]})]})]})}),w.jsxs("footer",{className:"ground__footer",children:[w.jsx("a",{className:"ground__maker",href:"#top",children:w.jsx("span",{children:"Built for India's Battery Future — Hackathon 2026"})}),w.jsxs("p",{className:"ground__copyright",children:[w.jsx("span",{children:"© 2026 Intelligent Battery Cell 4.0 Hackathon"}),w.jsx("a",{className:"ground__privacy",href:"#top",children:"Back to Altitude"})]})]})]})}function B3(){return w.jsxs("div",{className:"page-shell",children:[w.jsx(d3,{}),w.jsx(h3,{}),w.jsx(p3,{}),w.jsx(x3,{}),w.jsx("section",{className:"article-intro","aria-label":"Hackathon introduction",children:w.jsxs("div",{className:"article-intro__inner",children:[w.jsx(Vh,{as:"p",className:"article-intro__lead",text:"Intelligent Battery Cell 4.0 Hackathon 2026 brings together India's sharpest students, research scholars, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology.",highlightWord:"innovative"}),w.jsx(Vh,{as:"p",className:"article-intro__copy",text:"The event is focused on using Artificial Intelligence to advance battery safety, sustainability, and indigenous innovation. From mitigating thermal runaway hazards in electric vehicles to building gigawatt-hour grid storage and extreme-climate defense energy systems, the era of passive chemical batteries is over."}),w.jsx(Vh,{as:"p",className:"article-intro__copy",text:"Whether you are writing AI neural digital twin algorithms, engineering embedded firmware for edge BMS microcontrollers, testing sodium-ion cathode formulations, or designing circular second-life cascading models — this is the premier national platform to showcase your breakthrough."})]})}),w.jsx(S3,{}),w.jsx(A3,{}),w.jsx(y3,{}),w.jsx(M3,{}),w.jsx(R3,{}),w.jsx(w3,{}),w.jsx(U3,{}),w.jsx(O3,{}),w.jsx(I3,{}),w.jsx(z3,{})]})}GM.createRoot(document.getElementById("root")).render(w.jsx(hx.StrictMode,{children:w.jsx(B3,{})}));
