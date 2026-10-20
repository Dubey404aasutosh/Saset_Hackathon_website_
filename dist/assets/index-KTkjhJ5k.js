(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function gx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ah={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function PM(){if(iv)return nl;iv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return nl.Fragment=t,nl.jsx=i,nl.jsxs=i,nl}var av;function IM(){return av||(av=1,ah.exports=PM()),ah.exports}var w=IM(),rh={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function zM(){if(rv)return ot;rv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function R(B){return B===null||typeof B!="object"?null:(B=M&&B[M]||B["@@iterator"],typeof B=="function"?B:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function P(B,me,Ae){this.props=B,this.context=me,this.refs=S,this.updater=Ae||D}P.prototype.isReactComponent={},P.prototype.setState=function(B,me){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,me,"setState")},P.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function W(){}W.prototype=P.prototype;function C(B,me,Ae){this.props=B,this.context=me,this.refs=S,this.updater=Ae||D}var L=C.prototype=new W;L.constructor=C,y(L,P.prototype),L.isPureReactComponent=!0;var O=Array.isArray;function I(){}var b={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function F(B,me,Ae){var K=Ae.ref;return{$$typeof:o,type:B,key:me,ref:K!==void 0?K:null,props:Ae}}function V(B,me){return F(B.type,me,B.props)}function Z(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function te(B){var me={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ae){return me[Ae]})}var j=/\/+/g;function ee(B,me){return typeof B=="object"&&B!==null&&B.key!=null?te(""+B.key):me.toString(36)}function X(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(I,I):(B.status="pending",B.then(function(me){B.status==="pending"&&(B.status="fulfilled",B.value=me)},function(me){B.status==="pending"&&(B.status="rejected",B.reason=me)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function k(B,me,Ae,K,de){var Te=typeof B;(Te==="undefined"||Te==="boolean")&&(B=null);var De=!1;if(B===null)De=!0;else switch(Te){case"bigint":case"string":case"number":De=!0;break;case"object":switch(B.$$typeof){case o:case t:De=!0;break;case _:return De=B._init,k(De(B._payload),me,Ae,K,de)}}if(De)return de=de(B),De=K===""?"."+ee(B,0):K,O(de)?(Ae="",De!=null&&(Ae=De.replace(j,"$&/")+"/"),k(de,me,Ae,"",function(Vt){return Vt})):de!=null&&(Z(de)&&(de=V(de,Ae+(de.key==null||B&&B.key===de.key?"":(""+de.key).replace(j,"$&/")+"/")+De)),me.push(de)),1;De=0;var ve=K===""?".":K+":";if(O(B))for(var Ce=0;Ce<B.length;Ce++)K=B[Ce],Te=ve+ee(K,Ce),De+=k(K,me,Ae,Te,de);else if(Ce=R(B),typeof Ce=="function")for(B=Ce.call(B),Ce=0;!(K=B.next()).done;)K=K.value,Te=ve+ee(K,Ce++),De+=k(K,me,Ae,Te,de);else if(Te==="object"){if(typeof B.then=="function")return k(X(B),me,Ae,K,de);throw me=String(B),Error("Objects are not valid as a React child (found: "+(me==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":me)+"). If you meant to render a collection of children, use an array instead.")}return De}function re(B,me,Ae){if(B==null)return B;var K=[],de=0;return k(B,K,"","",function(Te){return me.call(Ae,Te,de++)}),K}function ce(B){if(B._status===-1){var me=B._result,Ae=me();Ae.then(function(K){(B._status===0||B._status===-1)&&(B._status=1,B._result=K,Ae.status===void 0&&(Ae.status="fulfilled",Ae.value=K))},function(K){(B._status===0||B._status===-1)&&(B._status=2,B._result=K,Ae.status===void 0&&(Ae.status="rejected",Ae.reason=K))}),B._status===-1&&(B._status=0,B._result=Ae)}if(B._status===1)return B._result.default;throw B._result}var he=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var me=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(me))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function xe(B){var me=b.T,Ae={};Ae.types=me!==null?me.types:null,b.T=Ae;try{var K=B(),de=b.S;de!==null&&de(Ae,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(I,he)}catch(Te){he(Te)}finally{me!==null&&Ae.types!==null&&(me.types=Ae.types),b.T=me}}function Ge(B){var me=b.T;if(me!==null){var Ae=me.types;Ae===null?me.types=[B]:Ae.indexOf(B)===-1&&Ae.push(B)}else xe(Ge.bind(null,B))}var qe={map:re,forEach:function(B,me,Ae){re(B,function(){me.apply(this,arguments)},Ae)},count:function(B){var me=0;return re(B,function(){me++}),me},toArray:function(B){return re(B,function(me){return me})||[]},only:function(B){if(!Z(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ot.Activity=v,ot.Children=qe,ot.Component=P,ot.Fragment=i,ot.Profiler=c,ot.PureComponent=C,ot.StrictMode=s,ot.Suspense=m,ot.ViewTransition=x,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,ot.__COMPILER_RUNTIME={__proto__:null,c:function(B){return b.H.useMemoCache(B)}},ot.addTransitionType=Ge,ot.cache=function(B){return function(){return B.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(B,me,Ae){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var K=y({},B.props),de=B.key;if(me!=null)for(Te in me.key!==void 0&&(de=""+me.key),me)!N.call(me,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&me.ref===void 0||(K[Te]=me[Te]);var Te=arguments.length-2;if(Te===1)K.children=Ae;else if(1<Te){for(var De=Array(Te),ve=0;ve<Te;ve++)De[ve]=arguments[ve+2];K.children=De}return F(B.type,de,K)},ot.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},ot.createElement=function(B,me,Ae){var K,de={},Te=null;if(me!=null)for(K in me.key!==void 0&&(Te=""+me.key),me)N.call(me,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(de[K]=me[K]);var De=arguments.length-2;if(De===1)de.children=Ae;else if(1<De){for(var ve=Array(De),Ce=0;Ce<De;Ce++)ve[Ce]=arguments[Ce+2];de.children=ve}if(B&&B.defaultProps)for(K in De=B.defaultProps,De)de[K]===void 0&&(de[K]=De[K]);return F(B,Te,de)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(B){return{$$typeof:h,render:B}},ot.isValidElement=Z,ot.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:ce}},ot.memo=function(B,me){return{$$typeof:p,type:B,compare:me===void 0?null:me}},ot.startTransition=xe,ot.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},ot.use=function(B){return b.H.use(B)},ot.useActionState=function(B,me,Ae){return b.H.useActionState(B,me,Ae)},ot.useCallback=function(B,me){return b.H.useCallback(B,me)},ot.useContext=function(B){return b.H.useContext(B)},ot.useDebugValue=function(){},ot.useDeferredValue=function(B,me){return b.H.useDeferredValue(B,me)},ot.useEffect=function(B,me){return b.H.useEffect(B,me)},ot.useEffectEvent=function(B){return b.H.useEffectEvent(B)},ot.useId=function(){return b.H.useId()},ot.useImperativeHandle=function(B,me,Ae){return b.H.useImperativeHandle(B,me,Ae)},ot.useInsertionEffect=function(B,me){return b.H.useInsertionEffect(B,me)},ot.useLayoutEffect=function(B,me){return b.H.useLayoutEffect(B,me)},ot.useMemo=function(B,me){return b.H.useMemo(B,me)},ot.useOptimistic=function(B,me){return b.H.useOptimistic(B,me)},ot.useReducer=function(B,me,Ae){return b.H.useReducer(B,me,Ae)},ot.useRef=function(B){return b.H.useRef(B)},ot.useState=function(B){return b.H.useState(B)},ot.useSyncExternalStore=function(B,me,Ae){return b.H.useSyncExternalStore(B,me,Ae)},ot.useTransition=function(){return b.H.useTransition()},ot.version="19.3.1",ot}var sv;function Pp(){return sv||(sv=1,rh.exports=zM()),rh.exports}var ct=Pp();const _x=gx(ct);var sh={exports:{}},il={},oh={exports:{}},lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function BM(){return ov||(ov=1,(function(o){function t(X,k){var re=X.length;X.push(k);e:for(;0<re;){var ce=re-1>>>1,he=X[ce];if(0<c(he,k))X[ce]=k,X[re]=he,re=ce;else break e}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var k=X[0],re=X.pop();if(re!==k){X[0]=re;e:for(var ce=0,he=X.length,xe=he>>>1;ce<xe;){var Ge=2*(ce+1)-1,qe=X[Ge],B=Ge+1,me=X[B];if(0>c(qe,re))B<he&&0>c(me,qe)?(X[ce]=me,X[B]=re,ce=B):(X[ce]=qe,X[Ge]=re,ce=Ge);else if(B<he&&0>c(me,re))X[ce]=me,X[B]=re,ce=B;else break e}}return k}function c(X,k){var re=X.sortIndex-k.sortIndex;return re!==0?re:X.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,v=null,x=3,M=!1,R=!1,D=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=X)s(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function L(X){if(D=!1,C(X),!R)if(i(m)!==null)R=!0,O||(O=!0,Z());else{var k=i(p);k!==null&&ee(L,k.startTime-X)}}var O=!1,I=-1,b=5,N=-1;function F(){return y?!0:!(o.unstable_now()-N<b)}function V(){if(y=!1,O){var X=o.unstable_now();N=X;var k=!0;try{e:{R=!1,D&&(D=!1,P(I),I=-1),M=!0;var re=x;try{t:{for(C(X),v=i(m);v!==null&&!(v.expirationTime>X&&F());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,x=v.priorityLevel;var he=ce(v.expirationTime<=X);if(X=o.unstable_now(),typeof he=="function"){v.callback=he,C(X),k=!0;break t}v===i(m)&&s(m),C(X)}else s(m);v=i(m)}if(v!==null)k=!0;else{var xe=i(p);xe!==null&&ee(L,xe.startTime-X),k=!1}}break e}finally{v=null,x=re,M=!1}k=void 0}}finally{k?Z():O=!1}}}var Z;if(typeof W=="function")Z=function(){W(V)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,j=te.port2;te.port1.onmessage=V,Z=function(){j.postMessage(null)}}else Z=function(){S(V,0)};function ee(X,k){I=S(function(){X(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(X){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var re=x;x=k;try{return X()}finally{x=re}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(X,k){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var re=x;x=X;try{return k()}finally{x=re}},o.unstable_scheduleCallback=function(X,k,re){var ce=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ce+re:ce):re=ce,X){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=re+he,X={id:_++,callback:k,priorityLevel:X,startTime:re,expirationTime:he,sortIndex:-1},re>ce?(X.sortIndex=re,t(p,X),i(m)===null&&X===i(p)&&(D?(P(I),I=-1):D=!0,ee(L,re-ce))):(X.sortIndex=he,t(m,X),R||M||(R=!0,O||(O=!0,Z()))),X},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(X){var k=x;return function(){var re=x;x=k;try{return X.apply(this,arguments)}finally{x=re}}}})(lh)),lh}var lv;function FM(){return lv||(lv=1,oh.exports=BM()),oh.exports}var ch={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function HM(){if(cv)return Dn;cv=1;var o=Pp();function t(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)v+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,v,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:_,containerInfo:v,implementation:x}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(_){return{$$typeof:f,_reason:_}},Dn.createPortal=function(_,v){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(_,v,null,x)},Dn.flushSync=function(_){var v=m.T,x=s.p;try{if(m.T=null,s.p=2,_)return _()}finally{m.T=v,s.p=x,s.d.f()}},Dn.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(_,v))},Dn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Dn.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var x=v.as,M=p(x,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,D=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;x==="style"?s.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:M,integrity:R,fetchPriority:D}):x==="script"&&s.d.X(_,{crossOrigin:M,integrity:R,fetchPriority:D,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Dn.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var x=p(v.as,v.crossOrigin);s.d.M(_,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(_)},Dn.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var x=v.as,M=p(x,v.crossOrigin);s.d.L(_,x,{crossOrigin:M,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Dn.preloadModule=function(_,v){if(typeof _=="string")if(v){var x=p(v.as,v.crossOrigin);s.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(_)},Dn.requestFormReset=function(_){s.d.r(_)},Dn.unstable_batchedUpdates=function(_,v){return _(v)},Dn.useFormState=function(_,v,x){return m.H.useFormState(_,v,x)},Dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var uv;function GM(){if(uv)return ch.exports;uv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ch.exports=HM(),ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function VM(){if(fv)return il;fv=1;var o=FM(),t=Pp(),i=GM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return m(l),e;if(u===r)return m(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=u;else{for(var g=!1,A=l.child;A;){if(A===a){g=!0,a=l,r=u;break}if(A===r){g=!0,r=l,a=u;break}A=A.sibling}if(!g){for(A=u.child;A;){if(A===a){g=!0,a=u,r=l;break}if(A===r){g=!0,r=u,a=l;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,r,l,u))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function R(e){var n=[null,null],a=x(e);return a===null||D(n,e,a.child,{foundSelf:!1}),n}function D(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,P=null;function W(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(P=e,!1):e===n?(P!==null&&(S=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function O(e,n,a){for(var r=0,l=e;l;l=a(l))r++;l=0;for(var u=n;u;u=a(u))l++;for(;0<r-l;)e=a(e),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var I=Object.assign,b=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),Ge=Symbol.for("react.legacy_hidden"),qe=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),me=Symbol.for("react.recoverable"),Ae=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=Ae&&e[Ae]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case te:return"Profiler";case Z:return"StrictMode";case k:return"Suspense";case re:return"SuspenseList";case xe:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ee:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case he:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}var De=Array.isArray,ve=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt={pending:!1,data:null,method:null,action:null},mt=[],_t=-1;function yt(e){return{current:e}}function tt(e){0>_t||(e.current=mt[_t],mt[_t]=null,_t--)}function it(e,n){_t++,mt[_t]=e.current,e.current=n}var Xt=yt(null),fn=yt(null),Ot=yt(null),en=yt(null);function Y(e,n){switch(it(Ot,n),it(fn,e),it(Xt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?d_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=d_(n),e=h_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Xt),it(Xt,e)}function nn(){tt(Xt),tt(fn),tt(Ot)}function Lt(e){var n=e.memoizedState;n!==null&&(Ps._currentValue=n.memoizedState,it(en,e)),n=Xt.current;var a=h_(n,e.type);n!==a&&(it(fn,e),it(Xt,a))}function U(e){fn.current===e&&(tt(Xt),tt(fn)),en.current===e&&(tt(en),Ps._currentValue=Vt)}var E,ne;function le(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+ne}var ge=!1;function Re(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(Pe){var Q=Pe}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(Pe){Q=Pe}ye=!1;try{var oe=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ye=!0,new e}finally{ye&&(oe!==void 0?Object.defineProperty(e.prototype,"props",oe):delete e.prototype.props)}}}else{try{throw Error()}catch(Pe){Q=Pe}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(Pe){if(Pe&&Q&&typeof Pe.stack=="string")return[Pe.stack,Q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],A=u[1];if(g&&A){var z=g.split(`
`),$=A.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===$.length)for(r=z.length-1,l=$.length-1;1<=r&&0<=l&&z[r]!==$[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==$[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==$[l]){var ue=`
`+z[r].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=r&&0<=l);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==n&&n!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return le("Activity");case 30:return le("ViewTransition");default:return""}}function _e(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ee=Object.prototype.hasOwnProperty,Ne=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,ze=o.unstable_shouldYield,Ie=o.unstable_requestPaint,ke=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,q=o.unstable_UserBlockingPriority,we=o.unstable_NormalPriority,Me=o.unstable_LowPriority,Le=o.unstable_IdlePriority,Xe=o.log,be=o.unstable_setDisableYieldValue,Je=null,Ve=null;function Ct(e){if(typeof Xe=="function"&&be(e),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Je,e)}catch{}}var ut=Math.clz32?Math.clz32:Uu,Qn=Math.log,ui=Math.LN2;function Uu(e){return e>>>=0,e===0?32:31-(Qn(e)/ui|0)|0}var Qr=256,gr=262144,Pa=4194304;function ua(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _r(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~u,r!==0?l=ua(r):(g&=A,g!==0?l=ua(g):a||(a=A&~e,a!==0&&(l=ua(a))))):(A=r&~u,A!==0?l=ua(A):g!==0?l=ua(g):a||(a=r&~e,a!==0&&(l=ua(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Ia(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Gi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ut(a),l=1<<r;n|=e[r],a&=~l}return n}function oo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lo(){var e=Pa;return Pa<<=1,(Pa&62914560)===0&&(Pa=4194304),e}function Jr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bl(e,n,a,r,l,u){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var ue=31-ut(a),ye=1<<ue;A[ue]=0,z[ue]=-1;var Q=$[ue];if(Q!==null)for($[ue]=null,ue=0;ue<Q.length;ue++){var oe=Q[ue];oe!==null&&(oe.lane&=-536870913)}a&=~ye}r!==0&&vr(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(g&~n))}function vr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ut(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function co(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ut(a),l=1<<r;l&n|e[r]&n&&(e[r]|=n),a&=~l}}function uo(e,n){var a=n&-n;return a=(a&42)!==0?1:fo(a),(a&(e.suspendedLanes|n))!==0?0:a}function fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ho(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tl(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:K_(e.type))}function Al(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var fi=Math.random().toString(36).slice(2),T="__reactFiber$"+fi,H="__reactProps$"+fi,fe="__reactContainer$"+fi,ae="__reactEvents$"+fi,se="__reactListeners$"+fi,Be="__reactHandles$"+fi,We="__reactResources$"+fi,Oe="__reactMarker$"+fi,Ze="__reactLoad$"+fi;function Ke(e){delete e[T],delete e[H],delete e[se],delete e[Be]}function rt(e){var n;if(n=e[T])return n;for(var a=e.parentNode;a;){if(n=a[fe]||a[T]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=N_(e);e!==null;){if(a=e[T])return a;e=N_(e)}return n}e=a,a=e.parentNode}return null}function ft(e){if(e=e[T]||e[fe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ye(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Mt(e){var n=e[We];return n||(n=e[We]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Oe]=!0}function jt(e){e[Ze]=void 0}var Ht=new Set,vn={};function Fe(e,n){rn(e,n),rn(e+"Capture",n)}function rn(e,n){for(vn[e]=n,e=0;e<n.length;e++)Ht.add(n[e])}var wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},Jn={};function Xi(e){return Ee.call(Jn,e)?!0:Ee.call(Bn,e)?!1:wt.test(e)?Jn[e]=!0:(Bn[e]=!0,!1)}var xt=!1;function It(){var e=xt;return xt=!1,e}function Qt(e,n,a){if(Xi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function $n(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Tt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,u.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Lu(e){if(!e._valueTracker){var n=fa(e)?"checked":"value";e._valueTracker=Rl(e,n,""+e[n])}}function em(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var nS=/[\n"\\]/g;function di(e){return e.replace(nS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ou(e,n,a,r,l,u,g,A){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?g==="number"&&e.value==n?Pu(e,sn(e.value)):Pu(e,sn(n)):a!=null?Pu(e,sn(a)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+sn(A):e.removeAttribute("name")}function tm(e,n,a,r,l,u,g,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Lu(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Lu(e)}function Pu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function $r(e,n,a,r){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function nm(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function im(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(De(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Lu(e)}function es(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var iS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function am(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||iS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function rm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",xt=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(am(e,l,r),xt=!0)}else for(var u in n)n.hasOwnProperty(u)&&am(e,u,n[u])}function Iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(e){return rS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var zu=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ts=null,ns=null;function sm(e){var n=ft(e);if(n&&(e=n.stateNode)){var a=e[H]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ou(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var l=r[H]||null;if(!l)throw Error(s(90));Ou(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&em(r)}break e;case"textarea":nm(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$r(e,!!a.multiple,n,!1)}}}var Fu=!1;function om(e,n,a){if(Fu)return e(n,a);Fu=!0;try{var r=e(n);return r}finally{if(Fu=!1,(ts!==null||ns!==null)&&(Cc(),ts&&(n=ts,e=ns,ns=ts=null,sm(n),e)))for(n=0;n<e.length;n++)sm(e[n])}}function po(e,n){var a=e.stateNode;if(a===null)return null;var r=a[H]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=!1;if(da)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Hu=!1}var za=null,Gu=null,wl=null;function lm(){if(wl)return wl;var e,n=Gu,a=n.length,r,l="value"in za?za.value:za.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===l[u-r];r++);return wl=l.slice(e,1<r?1-r:void 0)}function Nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function cm(){return!1}function Fn(e){function n(a,r,l,u,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Dl:cm,this.isPropagationStopped=cm,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Fn(Ba),go=I({},Ba,{view:0,detail:0}),sS=Fn(go),Vu,Xu,_o,Ll=I({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Vu=e.screenX-_o.screenX,Xu=e.screenY-_o.screenY):Xu=Vu=0,_o=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:Xu}}),um=Fn(Ll),oS=I({},Ll,{dataTransfer:0}),lS=Fn(oS),cS=I({},go,{relatedTarget:0}),ku=Fn(cS),uS=I({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=Fn(uS),dS=I({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hS=Fn(dS),pS=I({},Ba,{data:0}),fm=Fn(pS),mS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_S[e])?!!n[e]:!1}function Wu(){return vS}var xS=I({},go,{key:function(e){if(e.key){var n=mS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),SS=Fn(xS),yS=I({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Fn(yS),MS=I({},Ba,{submitter:0}),ES=Fn(MS),bS=I({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),TS=Fn(bS),AS=I({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),RS=Fn(AS),CS=I({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=Fn(CS),NS=I({},Ba,{newState:0,oldState:0,source:0}),DS=Fn(NS),US=[9,13,27,32],qu=da&&"CompositionEvent"in window,vo=null;da&&"documentMode"in document&&(vo=document.documentMode);var LS=da&&"TextEvent"in window&&!vo,hm=da&&(!qu||vo&&8<vo&&11>=vo),pm=" ",mm=!1;function gm(e,n){switch(e){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _m(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function OS(e,n){switch(e){case"compositionend":return _m(n);case"keypress":return n.which!==32?null:(mm=!0,pm);case"textInput":return e=n.data,e===pm&&mm?null:e;default:return null}}function PS(e,n){if(is)return e==="compositionend"||!qu&&gm(e,n)?(e=lm(),wl=Gu=za=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hm&&n.locale!=="ko"?null:n.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!IS[e.type]:n==="textarea"}function xm(e,n,a,r){ts?ns?ns.push(r):ns=[r]:ts=r,n=Oc(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var xo=null,So=null;function zS(e){s_(e,0)}function Ol(e){var n=Ye(e);if(em(n))return e}function Sm(e,n){if(e==="change")return n}var ym=!1;if(da){var Yu;if(da){var ju="oninput"in document;if(!ju){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),ju=typeof Mm.oninput=="function"}Yu=ju}else Yu=!1;ym=Yu&&(!document.documentMode||9<document.documentMode)}function Em(){xo&&(xo.detachEvent("onpropertychange",bm),So=xo=null)}function bm(e){if(e.propertyName==="value"&&Ol(So)){var n=[];xm(n,So,e,Bu(e)),om(zS,n)}}function BS(e,n,a){e==="focusin"?(Em(),xo=n,So=a,xo.attachEvent("onpropertychange",bm)):e==="focusout"&&Em()}function FS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ol(So)}function HS(e,n){if(e==="click")return Ol(n)}function GS(e,n){if(e==="input"||e==="change")return Ol(n)}function VS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:VS;function yo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Ee.call(n,l)||!ei(e[l],n[l]))return!1}return!0}function Zu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Am(e,n){var a=Tm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tm(a)}}function Rm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zu(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zu(e.document)}return n}function Ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var XS=da&&"documentMode"in document&&11>=document.documentMode,as=null,Qu=null,Mo=null,Ju=!1;function wm(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ju||as==null||as!==Zu(r)||(r=as,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&yo(Mo,r)||(Mo=r,r=Oc(Qu,"onSelect"),0<r.length&&(n=new Ul("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=as)))}function xr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var rs={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},$u={},Nm={};da&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Sr(e){if($u[e])return $u[e];if(!rs[e])return e;var n=rs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Nm)return $u[e]=n[a];return e}var Dm=Sr("animationend"),Um=Sr("animationiteration"),Lm=Sr("animationstart"),kS=Sr("transitionrun"),WS=Sr("transitionstart"),qS=Sr("transitioncancel"),Om=Sr("transitionend"),Pm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Ti(e,n){Pm.set(e,n),Fe(n,[e])}var YS=0;function ha(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=wi.identifierPrefix;var a=YS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Im(e){if(e==null||typeof e=="string")return e;var n=null,a=Ts;if(a!==null)for(var r=0;r<a.length;r++){var l=e[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function pa(e,n){return e=Im(e),n=Im(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],ss=0,tf=0;function Il(){for(var e=ss,n=tf=ss=0;n<e;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var u=hi[n];if(hi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}u!==0&&zm(a,l,u)}}function zl(e,n,a,r){hi[ss++]=e,hi[ss++]=n,hi[ss++]=a,hi[ss++]=r,tf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function nf(e,n,a,r){return zl(e,n,a,r),Bl(e)}function yr(e,n){return zl(e,null,null,n),Bl(e)}function zm(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-ut(a),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=a|536870912),u):null}function Bl(e){if(50<ko)throw ko=0,Rc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var os={};function jS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,r){return new jS(e,n,a,r)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Fl(e,n,a,r,l,u){var g=0;if(r=e,typeof r=="function")af(r)&&(g=1);else if(typeof r=="string")g=MM(e,a,Xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case xe:return e=kn(31,a,n,l),e.elementType=xe,e.lanes=u,e;case V:return Mr(a.children,l,u,n);case Z:g=8,l|=24;break;case te:return e=kn(12,a,n,l|2),e.elementType=te,e.lanes=u,e;case k:return e=kn(13,a,n,l),e.elementType=k,e.lanes=u,e;case re:return e=kn(19,a,n,l),e.elementType=re,e.lanes=u,e;case Ge:case B:return e=l|32,e=kn(30,a,n,e),e.elementType=B,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ee:g=10;break e;case j:g=9;break e;case X:g=11;break e;case ce:g=14;break e;case he:g=16,r=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=kn(g,a,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function Mr(e,n,a,r){return e=kn(7,e,r,n),e.lanes=a,e}function rf(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function Fm(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function sf(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Hm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=Hm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:_e(n)},Hm.set(e,n),n)}return{value:e,source:n,stack:_e(n)}}var ls=[],cs=0,Hl=null,Eo=0,mi=[],gi=0,Fa=null,Wi=1,qi="";function ga(e,n){ls[cs++]=Eo,ls[cs++]=Hl,Hl=e,Eo=n}function Gm(e,n,a){mi[gi++]=Wi,mi[gi++]=qi,mi[gi++]=Fa,Fa=e;var r=Wi;e=qi;var l=32-ut(r)-1;r&=~(1<<l),a+=1;var u=32-ut(n)+l;if(30<u){var g=l-l%5;u=(r&(1<<g)-1).toString(32),r>>=g,l-=g,Wi=1<<32-ut(n)+l|a<<l|r,qi=u+e}else Wi=1<<u|a<<l|r,qi=e}function Gl(e){e.return!==null&&(ga(e,1),Gm(e,1,0))}function of(e){for(;e===Hl;)Hl=ls[--cs],ls[cs]=null,Eo=ls[--cs],ls[cs]=null;for(;e===Fa;)Fa=mi[--gi],mi[gi]=null,qi=mi[--gi],mi[gi]=null,Wi=mi[--gi],mi[gi]=null}function Vm(e,n){mi[gi++]=Wi,mi[gi++]=qi,mi[gi++]=Fa,Wi=n.id,qi=n.overflow,Fa=e}var Mn=null,Jt=null,St=!1,Ha=null,_i=!1,lf=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(pi(n,e)),lf}function Xm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[T]=e,n[H]=r,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<qo.length;a++)bt(qo[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),tm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),im(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||u_(n.textContent,a)?(r.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),r.onScroll!=null&&bt("scroll",n),r.onScrollEnd!=null&&bt("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ga(e,!0)}function Vl(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Mn=Mn.return}}function us(e){if(e!==Mn)return!1;if(!St)return Vl(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bd(e.type,e.memoizedProps)),a=!a),a&&Jt&&Ga(e),Vl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Jt=w_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Jt=w_(e)}else n===27?(n=Jt,ir(e.type)?(e=Yd,Yd=null,Jt=e):Jt=n):Jt=Mn?xi(e.stateNode.nextSibling):null;return!0}function Er(){Jt=Mn=null,St=!1}function cf(){var e=Ha;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ha=null),e}function bo(e){Ha===null?Ha=[e]:Ha.push(e)}var uf=yt(null),br=null,_a=null;function Va(e,n,a){it(uf,n._currentValue),n._currentValue=a}function va(e){e._currentValue=uf.current,tt(uf)}function Xl(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function ff(e,n,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var g=l.child;u=u.firstContext;e:for(;u!==null;){var A=u;u=l;for(var z=0;z<n.length;z++)if(A.context===n[z]){u.lanes|=a,A=u.alternate,A!==null&&(A.lanes|=a),Xl(u.return,a,e),r||(g=null);break e}u=A.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,u=g.alternate,u!==null&&(u.lanes|=a),Xl(g,a,e),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),Xl(l.return,a,e),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Tr(e,n,a,r){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=l.type;ei(l.pendingProps.value,g.value)||(e!==null?e.push(A):e=[A])}}else if(l===en.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ps):e=[Ps])}l=l.return}return e!==null&&ff(n,e,a,r),n.flags|=262144,e!==null}function kl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ar(e){br=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return km(br,e)}function Wl(e,n){return br===null&&Ar(e),km(e,n)}function km(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(s(308));_a=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _a=_a.next=n;return a}var ZS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},KS=o.unstable_scheduleCallback,QS=o.unstable_NormalPriority,dn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new ZS,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&KS(QS,function(){e.controller.abort()})}function Wm(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Ao=null;function JS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Ro=null,hf=0,Rr=0,fs=null;function $S(e,n){if(Ro===null){var a=Ro=[];hf=0,Rr=wd(),fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return hf++,n.then(qm,qm),n}function qm(){if(--hf===0&&(Ao=null,Ro!==null)){fs!==null&&(fs.status="fulfilled");var e=Ro;Ro=null,Rr=0,fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ey(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Ym=ve.S;ve.S=function(e,n){if(F0=ke(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$S(e,n),Ao!==null)for(var a=ws;a!==null;)Wm(a,Ao),a=a.next;if(a=e.types,a!==null){for(var r=ws;r!==null;)Wm(r,a),r=r.next;if(Rr!==0){r=Ao,r===null&&(r=Ao=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}Ym!==null&&Ym(e,n)};var Cr=yt(null);function pf(){var e=Cr.current;return e!==null?e:Kt.pooledCache}function ql(e,n){n===null?it(Cr,Cr.current):it(Cr,n.pool)}function jm(){var e=pf();return e===null?null:{parent:dn._currentValue,pool:e}}var ds=Error(s(460)),mf=Error(s(474)),Yl=Error(s(542)),jl={then:function(){}};function Zm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Km(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Jm(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Jm(e),e}throw Nr=n,ds}}function wr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,ds):a}}var Nr=null;function Qm(){if(Nr===null)throw Error(s(459));var e=Nr;return Nr=null,e}function Jm(e){if(e===ds||e===Yl)throw Error(s(483))}var hs=null,Co=0;function Zl(e){var n=Co;return Co+=1,hs===null&&(hs=[]),Km(hs,e,n)}function Xa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Kl(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $m(e){function n(J,G){if(e){var ie=J.deletions;ie===null?(J.deletions=[G],J.flags|=16):ie.push(G)}}function a(J,G){if(!e)return null;for(;G!==null;)n(J,G),G=G.sibling;return null}function r(J){for(var G=new Map;J!==null;)J.key===null?G.set(J.index,J):G.set(J.key,J),J=J.sibling;return G}function l(J,G){return J=ma(J,G),J.index=0,J.sibling=null,J}function u(J,G,ie){return J.index=ie,e?(ie=J.alternate,ie!==null?(ie=ie.index,ie<G?(J.flags|=2,G):ie):(J.flags|=134217730,G)):(J.flags|=1048576,G)}function g(J){return e&&J.alternate===null&&(J.flags|=134217730),J}function A(J,G,ie,Se){return G===null||G.tag!==6?(G=rf(ie,J.mode,Se),G.return=J,G):(G=l(G,ie),G.return=J,G)}function z(J,G,ie,Se){var je=ie.type;return je===V?(J=ue(J,G,ie.props.children,Se,ie.key),Xa(J,ie),J):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===he&&wr(je)===G.type)?(G=l(G,ie.props),Xa(G,ie),G.return=J,G):(G=Fl(ie.type,ie.key,ie.props,null,J.mode,Se),Xa(G,ie),G.return=J,G)}function $(J,G,ie,Se){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=sf(ie,J.mode,Se),G.return=J,G):(G=l(G,ie.children||[]),G.return=J,G)}function ue(J,G,ie,Se,je){return G===null||G.tag!==7?(G=Mr(ie,J.mode,Se,je),G.return=J,G):(G=l(G,ie),G.return=J,G)}function ye(J,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=rf(""+G,J.mode,ie),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return ie=Fl(G.type,G.key,G.props,null,J.mode,ie),Xa(ie,G),ie.return=J,ie;case F:return G=sf(G,J.mode,ie),G.return=J,G;case he:return G=wr(G),ye(J,G,ie)}if(De(G)||K(G))return G=Mr(G,J.mode,ie,null),G.return=J,G;if(typeof G.then=="function")return ye(J,Zl(G),ie);if(G.$$typeof===ee)return ye(J,Wl(J,G),ie);Kl(J,G)}return null}function Q(J,G,ie,Se){var je=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return je!==null?null:A(J,G,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:return ie.key===je?z(J,G,ie,Se):null;case F:return ie.key===je?$(J,G,ie,Se):null;case he:return ie=wr(ie),Q(J,G,ie,Se)}if(De(ie)||K(ie))return je!==null?null:ue(J,G,ie,Se,null);if(typeof ie.then=="function")return Q(J,G,Zl(ie),Se);if(ie.$$typeof===ee)return Q(J,G,Wl(J,ie),Se);Kl(J,ie)}return null}function oe(J,G,ie,Se,je){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ie)||null,A(G,J,""+Se,je);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case N:return J=J.get(Se.key===null?ie:Se.key)||null,z(G,J,Se,je);case F:return J=J.get(Se.key===null?ie:Se.key)||null,$(G,J,Se,je);case he:return Se=wr(Se),oe(J,G,ie,Se,je)}if(De(Se)||K(Se))return J=J.get(ie)||null,ue(G,J,Se,je,null);if(typeof Se.then=="function")return oe(J,G,ie,Zl(Se),je);if(Se.$$typeof===ee)return oe(J,G,ie,Wl(G,Se),je);Kl(G,Se)}return null}function Pe(J,G,ie,Se){for(var je=null,Rt=null,et=G,at=G=0,mn=null;et!==null&&at<ie.length;at++){et.index>at?(mn=et,et=null):mn=et.sibling;var Ut=Q(J,et,ie[at],Se);if(Ut===null){et===null&&(et=mn);break}e&&et&&Ut.alternate===null&&n(J,et),G=u(Ut,G,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut,et=mn}if(at===ie.length)return a(J,et),St&&ga(J,at),je;if(et===null){for(;at<ie.length;at++)et=ye(J,ie[at],Se),et!==null&&(G=u(et,G,at),Rt===null?je=et:Rt.sibling=et,Rt=et);return St&&ga(J,at),je}for(et=r(et);at<ie.length;at++)mn=oe(et,J,at,ie[at],Se),mn!==null&&(e&&(Ut=mn.alternate,Ut!==null&&et.delete(Ut.key===null?at:Ut.key)),G=u(mn,G,at),Rt===null?je=mn:Rt.sibling=mn,Rt=mn);return e&&et.forEach(function(lr){return n(J,lr)}),St&&ga(J,at),je}function Qe(J,G,ie,Se){if(ie==null)throw Error(s(151));for(var je=null,Rt=null,et=G,at=G=0,mn=null,Ut=ie.next();et!==null&&!Ut.done;at++,Ut=ie.next()){et.index>at?(mn=et,et=null):mn=et.sibling;var lr=Q(J,et,Ut.value,Se);if(lr===null){et===null&&(et=mn);break}e&&et&&lr.alternate===null&&n(J,et),G=u(lr,G,at),Rt===null?je=lr:Rt.sibling=lr,Rt=lr,et=mn}if(Ut.done)return a(J,et),St&&ga(J,at),je;if(et===null){for(;!Ut.done;at++,Ut=ie.next())Ut=ye(J,Ut.value,Se),Ut!==null&&(G=u(Ut,G,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut);return St&&ga(J,at),je}for(et=r(et);!Ut.done;at++,Ut=ie.next())Ut=oe(et,J,at,Ut.value,Se),Ut!==null&&(e&&(mn=Ut.alternate,mn!==null&&et.delete(mn.key===null?at:mn.key)),G=u(Ut,G,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut);return e&&et.forEach(function(OM){return n(J,OM)}),St&&ga(J,at),je}function pt(J,G,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===V&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:e:{for(var je=ie.key;G!==null;){if(G.key===je){if(je=ie.type,je===V){if(G.tag===7){a(J,G.sibling),Se=l(G,ie.props.children),Xa(Se,ie),Se.return=J,J=Se;break e}}else if(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===he&&wr(je)===G.type){a(J,G.sibling),Se=l(G,ie.props),Xa(Se,ie),Se.return=J,J=Se;break e}a(J,G);break}else n(J,G);G=G.sibling}ie.type===V?(Se=Mr(ie.props.children,J.mode,Se,ie.key),Xa(Se,ie),Se.return=J,J=Se):(Se=Fl(ie.type,ie.key,ie.props,null,J.mode,Se),Xa(Se,ie),Se.return=J,J=Se)}return g(J);case F:e:{for(je=ie.key;G!==null;){if(G.key===je)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){a(J,G.sibling),Se=l(G,ie.children||[]),Se.return=J,J=Se;break e}else{a(J,G);break}else n(J,G);G=G.sibling}Se=sf(ie,J.mode,Se),Se.return=J,J=Se}return g(J);case he:return ie=wr(ie),pt(J,G,ie,Se)}if(De(ie))return Pe(J,G,ie,Se);if(K(ie)){if(je=K(ie),typeof je!="function")throw Error(s(150));return ie=je.call(ie),Qe(J,G,ie,Se)}if(typeof ie.then=="function")return pt(J,G,Zl(ie),Se);if(ie.$$typeof===ee)return pt(J,G,Wl(J,ie),Se);Kl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,G!==null&&G.tag===6?(a(J,G.sibling),Se=l(G,ie),Se.return=J,J=Se):(a(J,G),Se=rf(ie,J.mode,Se),Se.return=J,J=Se),g(J)):a(J,G)}return function(J,G,ie,Se){try{Co=0;var je=pt(J,G,ie,Se);return hs=null,je}catch(et){if(et===ds||et===Yl)throw et;var Rt=kn(29,et,null,J.mode);return Rt.lanes=Se,Rt.return=J,Rt}finally{}}}var Dr=$m(!0),eg=$m(!1),ka=!1;function gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zt&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Bl(e),zm(e,null,a),n}return zl(e,r,n,a),Bl(e)}function wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,co(e,a)}}function vf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xf=!1;function No(){if(xf){var e=fs;if(e!==null)throw e}}function Do(e,n,a,r){xf=!1;var l=e.updateQueue;ka=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var z=A,$=z.next;z.next=null,g===null?u=$:g.next=$,g=z;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,A=ue.lastBaseUpdate,A!==g&&(A===null?ue.firstBaseUpdate=$:A.next=$,ue.lastBaseUpdate=z))}if(u!==null){var ye=l.baseState;g=0,ue=$=z=null,A=u;do{var Q=A.lane&-536870913,oe=Q!==A.lane;if(oe?(At&Q)===Q:(r&Q)===Q){Q!==0&&Q===Rr&&(xf=!0),ue!==null&&(ue=ue.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Pe=e,Qe=A;Q=n;var pt=a;switch(Qe.tag){case 1:if(Pe=Qe.payload,typeof Pe=="function"){ye=Pe.call(pt,ye,Q);break e}ye=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Qe.payload,Q=typeof Pe=="function"?Pe.call(pt,ye,Q):Pe,Q==null)break e;ye=I({},ye,Q);break e;case 2:ka=!0}}Q=A.callback,Q!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=l.callbacks,oe===null?l.callbacks=[Q]:oe.push(Q))}else oe={lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ue===null?($=ue=oe,z=ye):ue=ue.next=oe,g|=Q;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,l.lastBaseUpdate=oe,l.shared.pending=null}}while(!0);ue===null&&(z=ye),l.baseState=z,l.firstBaseUpdate=$,l.lastBaseUpdate=ue,u===null&&(l.shared.lanes=0),$a|=g,e.lanes=g,e.memoizedState=ye}}function tg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ng(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tg(a[e],n)}var Ya=yt(null),Ql=yt(0);function ig(e,n){e=Ea,it(Ql,e),it(Ya,n),Ea=e|n.baseLanes}function Sf(){it(Ql,Ea),it(Ya,Ya.current)}function yf(){Ea=Ql.current,tt(Ya),tt(Ql)}var Rn=yt(null),Ln=null;function ja(e){var n=e.alternate;it(Cn,Cn.current&1),it(Rn,e),Ln===null&&(n===null||Ya.current!==null||n.memoizedState!==null)&&(Ln=e)}function Mf(e){it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)}function ag(e){e.tag===22?(it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)):Za()}function Za(){it(Cn,Cn.current),it(Rn,Rn.current)}function ti(e){tt(Rn),Ln===e&&(Ln=null),tt(Cn)}var Cn=yt(0);function Uo(e,n){it(Rn,Rn.current),it(Cn,n)}function Ef(e){tt(Cn),tt(Rn),Ln===e&&(Ln=null)}function Jl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wd(a)||qd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,ht=null,Zt=null,hn=null,$l=!1,ps=!1,Ur=!1,ec=0,Lo=0,ms=null,ty=0;function on(){throw Error(s(321))}function bf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Tf(e,n,a,r,l,u){return xa=u,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ve.H=e===null||e.memoizedState===null?Gg:Vg,Ur=!1,u=a(r,l),Ur=!1,ps&&(u=sg(n,a,r,l)),rg(e),u}function rg(e){ve.H=oc;var n=Zt!==null&&Zt.next!==null;if(xa=0,hn=Zt=ht=null,$l=!1,Lo=0,ms=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&kl(e)&&(pn=!0))}function sg(e,n,a,r){ht=e;var l=0;do{if(ps&&(ms=null),Lo=0,ps=!1,25<=l)throw Error(s(301));if(l+=1,hn=Zt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}ve.H=cy,u=n(a,r)}while(ps);return u}function ny(){var e=ve.H,n=e.useState()[0];return n=typeof n.then=="function"?Oo(n):n,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(ht.flags|=1024),n}function Af(){var e=ec!==0;return ec=0,e}function Rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cf(e){if($l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}$l=!1}xa=0,hn=Zt=ht=null,ps=!1,Lo=ec=0,ms=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ht.memoizedState=hn=e:hn=hn.next=e,hn}function un(){if(Zt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var n=hn===null?ht.memoizedState:hn.next;if(n!==null)hn=n,Zt=e;else{if(e===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},hn===null?ht.memoizedState=hn=e:hn=hn.next=e}return hn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(e){var n=Lo;return Lo+=1,ms===null&&(ms=[]),e=Km(ms,e,n),n=ht,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,ve.H=n===null||n.memoizedState===null?Gg:Vg),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oo(e);if(e.$$typeof===me)return;if(e.$$typeof===ee)return An(e)}throw Error(s(438,String(e)))}function wf(e){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ht.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tc(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=qe;return n.index++,a}function Sa(e,n){return typeof n=="function"?n(e):n}function ic(e){var n=un();return Nf(n,Zt,e)}function Nf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}n.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var A=g=null,z=null,$=n,ue=!1;do{var ye=$.lane&-536870913;if(ye!==$.lane?(At&ye)===ye:(xa&ye)===ye){var Q=$.revertLane;if(Q===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ye===Rr&&(ue=!0);else if((xa&Q)===Q){$=$.next,Q===Rr&&(ue=!0);continue}else ye={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=ye,g=u):z=z.next=ye,ht.lanes|=Q,$a|=Q;ye=$.action,Ur&&a(u,ye),u=$.hasEagerState?$.eagerState:a(u,ye)}else Q={lane:ye,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=Q,g=u):z=z.next=Q,ht.lanes|=ye,$a|=ye;$=$.next}while($!==null&&$!==n);if(z===null?g=u:z.next=A,!ei(u,e.memoizedState)&&(pn=!0,ue&&(a=fs,a!==null)))throw a;e.memoizedState=u,e.baseState=g,e.baseQueue=z,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Df(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do u=e(u,g.action),g=g.next;while(g!==l);ei(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function og(e,n,a){var r=ht,l=un(),u=St;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ei((Zt||l).memoizedState,a);if(g&&(l.memoizedState=a,pn=!0),l=l.queue,Of(ug.bind(null,r,l,e),[e]),e=l.getSnapshot!==n||g||hn!==null&&(hn.memoizedState.tag&1)!==0,gs(e?9:8,{destroy:void 0},cg.bind(null,r,l,a,n),null),e){if(r.flags|=2048,Kt===null)throw Error(s(349));u||(xa&127)!==0||lg(r,n,a)}return a}function lg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=tc(),ht.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function cg(e,n,a,r){n.value=a,n.getSnapshot=r,fg(n)&&dg(e)}function ug(e,n,a){return a(function(){fg(n)&&dg(e)})}function fg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function dg(e){var n=yr(e,2);n!==null&&jn(n,e,2)}function Uf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Ur){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n}function hg(e,n,a,r){return e.baseState=a,Nf(e,Zt,typeof r=="function"?r:Sa)}function iy(e,n,a,r,l){if(sc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};ve.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,pg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function pg(e,n){var a=n.action,r=n.payload,l=e.state;if(n.isTransition){var u=ve.T,g={};g.types=u!==null?u.types:null,ve.T=g;try{var A=a(l,r),z=ve.S;z!==null&&z(g,A),mg(e,n,A)}catch($){Lf(e,n,$)}finally{u!==null&&g.types!==null&&(u.types=g.types),ve.T=u}}else try{u=a(l,r),mg(e,n,u)}catch($){Lf(e,n,$)}}function mg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){gg(e,n,r)},function(r){return Lf(e,n,r)}):gg(e,n,a)}function gg(e,n,a){n.status="fulfilled",n.value=a,_g(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,pg(e,a)))}function Lf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,_g(n),n=n.next;while(n!==r)}e.action=null}function _g(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vg(e,n){return n}function xg(e,n){if(St){var a=Kt.formState;if(a!==null){e:{var r=ht;if(St){if(Jt){t:{for(var l=Jt,u=_i;l.nodeType!==8;){if(!u){l=null;break t}if(l=xi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Jt=xi(l.nextSibling),r=l.data==="F!";break e}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vg,lastRenderedState:n},a.queue=r,a=Bg.bind(null,ht,r),r.dispatch=a,r=Uf(!1),u=Ff.bind(null,ht,!1,r.queue),r=Hn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,a=iy.bind(null,ht,l,u,a),l.dispatch=a,r.memoizedState=e,[n,a,!1]}function Sg(e){var n=un();return yg(n,Zt,e)}function yg(e,n,a){if(n=Nf(e,n,vg)[0],e=ic(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Oo(n)}catch(g){throw g===ds?Yl:g}else r=n;n=un();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,gs(9,{destroy:void 0},ay.bind(null,l,a),null)),[r,u,e]}function ay(e,n){e.action=n}function Mg(e){var n=un(),a=Zt;if(a!==null)return yg(n,a,e);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function gs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ht.updateQueue,n===null&&(n=tc(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Eg(){return un().memoizedState}function ac(e,n,a,r){var l=Hn();ht.flags|=e,l.memoizedState=gs(1|n,{destroy:void 0},a,r===void 0?null:r)}function rc(e,n,a,r){var l=un();r=r===void 0?null:r;var u=l.memoizedState.inst;Zt!==null&&r!==null&&bf(r,Zt.memoizedState.deps)?l.memoizedState=gs(n,u,a,r):(ht.flags|=e,l.memoizedState=gs(1|n,u,a,r))}function bg(e,n){ac(8390656,8,e,n)}function Of(e,n){rc(2048,8,e,n)}function ry(e){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=tc(),ht.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Tg(e){var n=un().memoizedState;return ry({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ag(e,n){return rc(4,2,e,n)}function Rg(e,n){return rc(4,4,e,n)}function Cg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wg(e,n,a){a=a!=null?a.concat([e]):null,rc(4,4,Cg.bind(null,n,e),a)}function Pf(){}function Ng(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&bf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Dg(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&bf(n,r[1]))return r[0];if(r=e(),Ur){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r}function If(e,n,a){return a===void 0||(xa&1073741824)!==0&&(At&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=G0(),ht.lanes|=e,$a|=e,a)}function Ug(e,n,a,r){return ei(a,n)?a:Ya.current!==null?(e=If(e,a,r),ei(e,n)||(pn=!0),e):(xa&106)===0||(xa&1073741824)!==0&&(At&261930)===0?(pn=!0,e.memoizedState=a):(e=G0(),ht.lanes|=e,$a|=e,n)}function Lg(e,n,a,r,l){var u=Ce.p;Ce.p=u!==0&&8>u?u:8;var g=ve.T,A={};A.types=g!==null?g.types:null,ve.T=A,Ff(e,!1,n,a);try{var z=l(),$=ve.S;if($!==null&&$(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=ey(z,r);Po(e,n,ue,ri(e))}else Po(e,n,r,ri(e))}catch(ye){Po(e,n,{then:function(){},status:"rejected",reason:ye},ri())}finally{Ce.p=u,g!==null&&A.types!==null&&(g.types=A.types),ve.T=g}}function sy(){}function zf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var l=Og(e).queue;Lg(e,l,n,Vt,a===null?sy:function(){return Pg(e),a(r)})}function Og(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Vt,baseState:Vt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Vt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Pg(e){var n=Og(e);n.next===null&&(n=e.alternate.memoizedState),Po(e,n.next.queue,{},ri())}function Bf(){return An(Ps)}function Ig(){return un().memoizedState}function zg(){return un().memoizedState}function oy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Wa(a);var r=qa(n,e,a);r!==null&&(jn(r,n,a),wo(r,n,a)),n={cache:df()},e.payload=n;return}n=n.return}}function ly(e,n,a){var r=ri();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sc(e)?Fg(n,a):(a=nf(e,n,a,r),a!==null&&(jn(a,e,r),Hg(a,n,r)))}function Bg(e,n,a){var r=ri();Po(e,n,a,r)}function Po(e,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sc(e))Fg(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var g=n.lastRenderedState,A=u(g,a);if(l.hasEagerState=!0,l.eagerState=A,ei(A,g))return zl(e,n,l,0),Kt===null&&Il(),!1}catch{}finally{}if(a=nf(e,n,l,r),a!==null)return jn(a,e,r),Hg(a,n,r),!0}return!1}function Ff(e,n,a,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(n)throw Error(s(479))}else n=nf(e,a,r,2),n!==null&&jn(n,e,2)}function sc(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function Fg(e,n){ps=$l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Hg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,co(e,a)}}var oc={readContext:An,use:nc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},Gg={readContext:An,use:nc,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:bg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ac(4194308,4,Cg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ac(4194308,4,e,n)},useInsertionEffect:function(e,n){ac(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var r=e();if(Ur){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Hn();if(a!==void 0){var l=a(n);if(Ur){Ct(!0);try{a(n)}finally{Ct(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=ly.bind(null,ht,e),[r.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Uf(e);var n=e.queue,a=Bg.bind(null,ht,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pf,useDeferredValue:function(e,n){var a=Hn();return If(a,e,n)},useTransition:function(){var e=Uf(!1);return e=Lg.bind(null,ht,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ht,l=Hn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(At&127)!==0||lg(r,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,bg(ug.bind(null,r,u,e),[e]),r.flags|=2048,gs(9,{destroy:void 0},cg.bind(null,r,u,a,n),null),a},useId:function(){var e=Hn(),n=Kt.identifierPrefix;if(St){var a=qi,r=Wi;a=(r&~(1<<32-ut(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ty++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bf,useFormState:xg,useActionState:xg,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ff.bind(null,ht,!0,a),a.dispatch=n,[e,n]},useMemoCache:wf,useCacheRefresh:function(){return Hn().memoizedState=oy.bind(null,ht)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Vg={readContext:An,use:nc,useCallback:Ng,useContext:An,useEffect:Of,useImperativeHandle:wg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Dg,useReducer:ic,useRef:Eg,useState:function(){return ic(Sa)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=un();return Ug(a,Zt.memoizedState,e,n)},useTransition:function(){var e=ic(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),n]},useSyncExternalStore:og,useId:Ig,useHostTransitionStatus:Bf,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,n){var a=un();return hg(a,Zt,e,n)},useMemoCache:wf,useCacheRefresh:zg,useEffectEvent:Tg},cy={readContext:An,use:nc,useCallback:Ng,useContext:An,useEffect:Of,useImperativeHandle:wg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Dg,useReducer:Df,useRef:Eg,useState:function(){return Df(Sa)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=un();return Zt===null?If(a,e,n):Ug(a,Zt.memoizedState,e,n)},useTransition:function(){var e=Df(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),n]},useSyncExternalStore:og,useId:Ig,useHostTransitionStatus:Bf,useFormState:Mg,useActionState:Mg,useOptimistic:function(e,n){var a=un();return Zt!==null?hg(a,Zt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wf,useCacheRefresh:zg,useEffectEvent:Tg};function Hf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(jn(n,e,r),wo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(jn(n,e,r),wo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),r=Wa(a);r.tag=2,n!=null&&(r.callback=n),n=qa(e,r,a),n!==null&&(jn(n,e,a),wo(n,e,a))}};function Xg(e,n,a,r,l,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,g):n.prototype&&n.prototype.isPureReactComponent?!yo(a,r)||!yo(l,u):!0}function kg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Gf.enqueueReplaceState(n,n.state,null)}function Lr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=I({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Wg(e){Pl(e)}function qg(e){console.error(e)}function Yg(e){Pl(e)}function lc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function jg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Vf(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){lc(e,n)},a}function Zg(e){return e=Wa(e),e.tag=3,e}function Kg(e,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){jg(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){jg(n,a,r),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function uy(e,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Tr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?wc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ad(e,r,l)),!1;case 22:return a.flags|=65536,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ad(e,r,l)),!1}throw Error(s(435,a.tag))}return Ad(e,r,l),wc(),!1}if(St)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==lf&&(e=Error(s(422),{cause:r}),bo(pi(e,a)))):(r!==lf&&(n=Error(s(423),{cause:r}),bo(pi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=pi(r,a),l=Vf(e.stateNode,r,l),vf(e,l),ln!==4&&(ln=2)),!1;var u=Error(s(520),{cause:r});if(u=pi(u,a),Xo===null?Xo=[u]:Xo.push(u),ln!==4&&(ln=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Vf(a.stateNode,r,e),vf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Zg(l),Kg(l,e,a,r),vf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Xf=Error(s(461)),pn=!1;function xn(e,n,a,r){n.child=e===null?eg(n,null,a,r):Dr(n,e.child,a,r)}function Qg(e,n,a,r,l){a=a.render;var u=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return Ar(n),r=Tf(e,n,a,g,u,l),A=Af(),e!==null&&!pn?(Rf(e,n,l),ya(e,n,l)):(St&&A&&Gl(n),n.flags|=1,xn(e,n,r,l),n.child)}function Jg(e,n,a,r,l){if(e===null){var u=a.type;return typeof u=="function"&&!af(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,$g(e,n,u,r,l)):(e=Fl(a.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!Qf(e,l)){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(g,r)&&e.ref===n.ref)return ya(e,n,l)}return n.flags|=1,e=ma(u,r),e.ref=n.ref,e.return=n,n.child=e}function $g(e,n,a,r,l){if(e!==null){var u=e.memoizedProps;if(yo(u,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=u,Qf(e,l))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ya(e,n,l)}return kf(e,n,a,r,l)}function e0(e,n,a,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,n.child=null;return t0(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ql(n,u!==null?u.cachePool:null),u!==null?ig(n,u):Sf(),ag(n);else return r=n.lanes=536870912,t0(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(ql(n,u.cachePool),ig(n,u),Za(),n.memoizedState=null):(e!==null&&ql(n,null),Sf(),Za());return xn(e,n,l,a),n.child}function Io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function t0(e,n,a,r,l){var u=pf();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ql(n,null),Sf(),ag(n),e!==null&&Tr(e,n,r,!0),n.childLanes=l,null}function cc(e,n){return n=uc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function n0(e,n,a){return Dr(n,e.child,null,a),e=cc(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function fy(e,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(r.mode==="hidden")return e=cc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Io(null,e);if(Mf(n),(e=Jt)?(e=C_(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(e),a.return=n,n.child=a,Mn=n,Jt=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return cc(n,r)}var u=e.memoizedState;if(u!==null){var g=u.dehydrated;if(Mf(n),l)if(n.flags&256)n.flags&=-257,n=n0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Tr(e,n,a,!1),l=(a&e.childLanes)!==0,pn||l){if(Ya.current===null){if(r=Kt,r!==null&&(g=uo(r,a),g!==0&&g!==u.retryLane))throw u.retryLane=g,yr(e,g),jn(r,e,g),Xf;wc()}n=n0(e,n,a)}else e=u.treeContext,Jt=xi(g.nextSibling),Mn=n,St=!0,Ha=null,_i=!1,e!==null&&Vm(n,e),n=cc(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function _s(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function kf(e,n,a,r,l){return Ar(n),a=Tf(e,n,a,r,void 0,l),r=Af(),e!==null&&!pn?(Rf(e,n,l),ya(e,n,l)):(St&&r&&Gl(n),n.flags|=1,xn(e,n,a,l),n.child)}function i0(e,n,a,r,l,u){return Ar(n),n.updateQueue=null,a=sg(n,r,a,l),rg(e),r=Af(),e!==null&&!pn?(Rf(e,n,u),ya(e,n,u)):(St&&r&&Gl(n),n.flags|=1,xn(e,n,a,u),n.child)}function a0(e,n,a,r,l){if(Ar(n),n.stateNode===null){var u=os,g=a.contextType;typeof g=="object"&&g!==null&&(u=An(g)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Gf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},gf(n),g=a.contextType,u.context=typeof g=="object"&&g!==null?An(g):os,u.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Hf(n,a,g,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Gf.enqueueReplaceState(u,u.state,null),Do(n,r,u,l),No(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var A=n.memoizedProps,z=Lr(a,A);u.props=z;var $=u.context,ue=a.contextType;g=os,typeof ue=="object"&&ue!==null&&(g=An(ue));var ye=a.getDerivedStateFromProps;ue=typeof ye=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ue||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||$!==g)&&kg(n,u,r,g),ka=!1;var Q=n.memoizedState;u.state=Q,Do(n,r,u,l),No(),$=n.memoizedState,A||Q!==$||ka?(typeof ye=="function"&&(Hf(n,a,ye,r),$=n.memoizedState),(z=ka||Xg(n,a,z,r,Q,$,g))?(ue||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),u.props=r,u.state=$,u.context=g,r=z):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,_f(e,n),g=n.memoizedProps,ue=Lr(a,g),u.props=ue,ye=n.pendingProps,Q=u.context,$=a.contextType,z=os,typeof $=="object"&&$!==null&&(z=An($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==ye||Q!==z)&&kg(n,u,r,z),ka=!1,Q=n.memoizedState,u.state=Q,Do(n,r,u,l),No();var oe=n.memoizedState;g!==ye||Q!==oe||ka||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof A=="function"&&(Hf(n,a,A,r),oe=n.memoizedState),(ue=ka||Xg(n,a,ue,r,Q,oe,z)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,oe,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,oe,z)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=oe),u.props=r,u.state=oe,u.context=z,r=ue):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,_s(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Dr(n,e.child,null,l),n.child=Dr(n,null,a,l)):xn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=ya(e,n,l),e}function r0(e,n,a,r){return Er(),n.flags|=256,xn(e,n,a,r),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(e){return{baseLanes:e,cachePool:jm()}}function Yf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function s0(e,n,a){var r=n.pendingProps,l=!1,u=(n.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(l?ja(n):Za(),(e=Jt)?(e=C_(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(e),a.return=n,n.child=a,Mn=n,Jt=null)):e=null,e===null)throw Ga(n);return qd(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Za(),l=n.mode,u=uc({mode:"hidden",children:u},l),r=Mr(r,l,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=qf(a),r.childLanes=Yf(e,g,a),n.memoizedState=Wf,Io(null,r)):(ja(n),jf(n,u))}var A=e.memoizedState;if(A!==null){var z=A.dehydrated;if(z!==null)return dy(e,n,u,g,r,z,A,a)}return l?(Za(),l=r.fallback,u=n.mode,A=e.child,z=A.sibling,r=ma(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,z!==null?l=ma(z,l):(l=Mr(l,u,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Io(null,r),r=n.child,l=e.child.memoizedState,l===null?l=qf(a):(u=l.cachePool,u!==null?(A=dn._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=jm(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=Yf(e,g,a),n.memoizedState=Wf,Io(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function jf(e,n){return n=uc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function uc(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function fc(e,n,a){return Dr(n,e.child,null,a),e=jf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dy(e,n,a,r,l,u,g,A){if(a)return n.flags&256?(ja(n),n.flags&=-257,fc(e,n,A)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,null):(Za(),u=l.fallback,g=n.mode,l=uc({mode:"visible",children:l.children},g),u=Mr(u,g,A,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Dr(n,e.child,null,A),l=n.child,l.memoizedState=qf(A),l.childLanes=Yf(e,r,A),n.memoizedState=Wf,Io(null,l));if(ja(n),qd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,bo({value:l,source:null,stack:null})),fc(e,n,A)}if(pn||Tr(e,n,A,!1),r=(A&e.childLanes)!==0,pn||r){if(Ya.current!==null)return fc(e,n,A);if(r=Kt,r!==null&&(l=uo(r,A),l!==0&&l!==g.retryLane))throw g.retryLane=l,yr(e,l),jn(r,e,l),Xf;return Wd(u)||wc(),fc(e,n,A)}return Wd(u)?(n.flags|=192,n.child=e.child,null):(e=g.treeContext,Jt=xi(u.nextSibling),Mn=n,St=!0,Ha=null,_i=!1,e!==null&&Vm(n,e),n=jf(n,l.children),n.flags|=134221824,n)}function o0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Xl(e.return,n,a)}function l0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Jl(a)===null&&(n=e),e=e.sibling}return n}function dc(e,n,a,r,l,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=l,g.treeForkCount=u)}function Zf(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Kf(e,n,a){var r=n.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return Uo(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Uo(n,g),l==="backwards"&&e!==null?(Zf(e),xn(e,n,r,a),Zf(e)):xn(e,n,r,a),r=St?Eo:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&o0(e,a,n);else if(e.tag===19)o0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=l0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Zf(n)),dc(n,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Jl(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}dc(n,!0,a,null,u,r);break;case"together":dc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=l0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),dc(n,!1,l,a,u,r)}return n.child}function c0(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),xn(e,n,r.children,a),n.child}function ya(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Tr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function hy(e,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Va(n,dn,e.memoizedState.cache),Er();break;case 27:case 5:Lt(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Tr(e,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?s0(e,n,a):(ja(n),e=ya(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return Kf(e,n,a);if(l=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Tr(e,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return Kf(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,e0(e,n,a,n.pendingProps);case 24:Va(n,dn,e.memoizedState.cache)}return ya(e,n,a)}function u0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Qf(e,a)&&(n.flags&128)===0)return pn=!1,hy(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,St&&(n.flags&1048576)!==0&&Gm(n,Eo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=wr(n.elementType),n.type=e,typeof e=="function")af(e)?(r=Lr(e,r),n.tag=1,n=a0(null,n,e,r,a)):(n.tag=0,n=kf(null,n,e,r,a));else{if(e!=null){var l=e.$$typeof;if(l===X){n.tag=11,n=Qg(null,n,e,r,a);break e}else if(l===ce){n.tag=14,n=Jg(null,n,e,r,a);break e}else if(l===ee){n.tag=10,n.type=e,n=c0(null,n,a);break e}}throw n=Te(e)||e,Error(s(306,n,""))}}return n;case 0:return kf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Lr(r,n.pendingProps),a0(e,n,r,l,a);case 3:e:{if(Y(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;l=u.element,_f(e,n),Do(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Va(n,dn,r),r!==u.cache&&ff(n,[dn],a,!0),No(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=r0(e,n,r,a);break e}else if(r!==l){l=pi(Error(s(424)),n),bo(l),n=r0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Jt=xi(e.firstChild),Mn=n,St=!0,Ha=null,_i=!0,a=eg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Er(),r===l){n=ya(e,n,a);break e}xn(e,n,r,a)}n=n.child}return n;case 26:return _s(e,n),e===null?(a=P_(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(n.stateNode=p_(n.type,n.pendingProps,Ot.current,n)):n.memoizedState=P_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Lt(n),e===null&&St&&(r=n.stateNode=D_(n.type,n.pendingProps,Ot.current),Mn=n,_i=!0,l=Jt,ir(n.type)?(Yd=l,Jt=xi(r.firstChild)):Jt=l),xn(e,n,n.pendingProps.children,a),_s(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((l=r=Jt)&&(r=oM(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Mn=n,Jt=xi(r.firstChild),_i=!1,l=!0):l=!1),l||Ga(n)),Lt(n),l=n.type,u=n.pendingProps,g=e!==null?e.memoizedProps:null,r=u.children,Bd(l,u)?r=null:g!==null&&Bd(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Tf(e,n,ny,null,null,a),Ps._currentValue=l),_s(e,n),xn(e,n,r,a),n.child;case 6:return e===null&&St&&((e=a=Jt)&&(a=lM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Mn=n,Jt=null,e=!0):e=!1),e||Ga(n)),null;case 13:return s0(e,n,a);case 4:return Y(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Dr(n,null,r,a):xn(e,n,r,a),n.child;case 11:return Qg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,_s(e,n),xn(e,n,r,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return c0(e,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Ar(n),l=An(l),r=r(l),n.flags|=1,xn(e,n,r,a),n.child;case 14:return Jg(e,n,n.type,n.pendingProps,a);case 15:return $g(e,n,n.type,n.pendingProps,a);case 19:return Kf(e,n,a);case 31:return fy(e,n,a);case 22:return e0(e,n,a,n.pendingProps);case 24:return Ar(n),r=An(dn),e===null?(l=pf(),l===null&&(l=Kt,u=df(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:r,cache:l},gf(n),Va(n,dn,l)):((e.lanes&a)!==0&&(_f(e,n),Do(n,null,null,a),No()),l=e.memoizedState,u=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Va(n,dn,r)):(r=u.cache,Va(n,dn,r),r!==l.cache&&ff(n,[dn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:St&&Gl(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:_s(e,n),xn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function Jf(e,n,a,r,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?F_(n,r):F_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(W0())e.flags|=8192;else throw Nr=jl,mf}else e.flags&=-16777217}function f0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H_(n))if(W0())e.flags|=8192;else throw Nr=jl,mf}function hc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?lo():536870912,e.lanes|=n,Ms|=n)}function zo(e,n){if(!St)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $t(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function py(e,n,a){var r=n.pendingProps;switch(of(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(us(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),$t(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Ma(n),u!==null?($t(n),f0(n,u)):($t(n),Jf(n,l,null,r,a))):u?u!==e.memoizedState?(Ma(n),$t(n),f0(n,u)):($t(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),$t(n),Jf(n,l,e,r,a)),null;case 27:if(U(n),a=Ot.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $t(n),n.subtreeFlags&=-33554433,null}e=Xt.current,us(n)?Xm(n):(e=D_(l,r,a),n.stateNode=e,Ma(n))}return $t(n),n.subtreeFlags&=-33554433,null;case 5:if(U(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $t(n),n.subtreeFlags&=-33554433,null}if(u=Xt.current,us(n))Xm(n);else{var g=jo(Ot.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}u[T]=n,u[H]=r;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=u;e:switch(Nn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(n)}}return $t(n),n.subtreeFlags&=-33554433,Jf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ot.current,us(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[T]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||u_(e.nodeValue,a)),e||Ga(n,!0)}else e=jo(e).createTextNode(r),e[T]=n,n.stateNode=e}return $t(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=us(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[T]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),e=!1}else a=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=us(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[T]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),l=!1}else l=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),hc(n,n.updateQueue),$t(n),null);case 4:return nn(),e===null&&Ld(n.stateNode.containerInfo),n.flags|=67108864,$t(n),null;case 10:return va(n.type),$t(n),null;case 19:if(Ef(n),r=n.memoizedState,r===null)return $t(n),null;if(l=(n.flags&128)!==0,u=r.rendering,u===null)if(l)zo(r,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=Jl(e),u!==null){for(n.flags|=128,zo(r,!1),e=u.updateQueue,n.updateQueue=e,hc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Bm(a,e),a=a.sibling;return Uo(n,Cn.current&1|2),St&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&ke()>Tc&&(n.flags|=128,l=!0,zo(r,!1),n.lanes=4194304)}else{if(!l)if(e=Jl(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,hc(n,e),zo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!St)return $t(n),null}else 2*ke()-r.renderingStartTime>Tc&&a!==536870912&&(n.flags|=128,l=!0,zo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||St?Uo(n,u):(a=u,it(Rn,n),it(Cn,a),Ln===null&&(Ln=n)),St&&ga(n,r.treeForkCount),e}return $t(n),null;case 22:case 23:return ti(n),yf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&hc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(Cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(dn),$t(n),null;case 25:return null;case 30:return n.flags|=33554432,$t(n),null}throw Error(s(156,n.tag))}function my(e,n){switch(of(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(dn),nn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return U(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ef(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return va(n.type),null;case 22:case 23:return ti(n),yf(),e!==null&&tt(Cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function d0(e,n){switch(of(n),n.tag){case 3:va(dn),nn();break;case 26:case 27:case 5:U(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Ef(n);break;case 10:va(n.type);break;case 22:case 23:ti(n),yf(),e!==null&&tt(Cr);break;case 24:va(dn)}}function Bo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var u=a.create,g=a.inst;r=u(),g.destroy=r}a=a.next}while(a!==l)}}catch(A){Wt(n,n.return,A)}}function Ka(e,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,l=n;var z=a,$=A;try{$()}catch(ue){Wt(l,z,ue)}}}r=r.next}while(r!==u)}}catch(ue){Wt(n,n.return,ue)}}function h0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ng(n,a)}catch(r){Wt(e,e.return,r)}}}function p0(e,n,a){a.props=Lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Wt(e,n,r)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ha(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=y_(u)),r=l.ref;break;case 7:if(e.stateNode===null){var g=new si(e);v(e.child,!1,rM,g,void 0,void 0),e.stateNode=g}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(A){Wt(e,n,A)}}function wn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Wt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Wt(e,n,l)}else a.current=null}function pc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)R_(e.stateNode,n[a])}function m0(e){for(var n=e.return;n!==null&&(ed(n)&&R_(e.stateNode,n.stateNode),!$f(n));)n=n.return}function Fo(e){for(var n=e.return;n!==null&&(ed(n)&&sM(e.stateNode,n.stateNode),!$f(n));)n=n.return}function $f(e){return e.tag===5||e.tag===3||e.tag===27}function ed(e){return e&&e.tag===7&&e.stateNode!==null}function td(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Wt(e,e.return,l)}}function nd(e,n,a){try{var r=e.stateNode;Gy(r,e.type,a,n),r[H]=n}catch(l){Wt(e,e.return,l)}}function g0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ir(e.type)||e.tag===4}function id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||g0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),pc(e,r),xt=!0;else if(l!==4&&(l===27&&(pc(e,r),r=null,ir(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(ad(e,n,a,r),e=e.sibling;e!==null;)ad(e,n,a,r),e=e.sibling}function mc(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),pc(e,r),xt=!0;else if(l!==4&&(l===27&&(pc(e,r),r=null,ir(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(mc(e,n,a,r),e=e.sibling;e!==null;)mc(e,n,a,r),e=e.sibling}function _0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[T]=e,n[H]=a}catch(u){Wt(e,e.return,u)}}var gc=!1,ni=null;function v0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(gc=!0)}var ji=null;function x0(){var e=ji;return ji=null,e}var Wn=0;function vs(e,n,a,r,l){return Wn=0,S0(e.child,n,a,r,l)}function S0(e,n,a,r,l){for(var u=!1;e!==null;){if(e.tag===5){var g=e.stateNode;if(r!==null){var A=Gd(g);r.push(A),A.view&&(u=!0)}else u||Gd(g).view&&(u=!0);gc=!0,x_(g,Wn===0?n:n+"_"+Wn,a),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||S0(e.child,n,a,r,l)&&(u=!0));e=e.sibling}return u}function Zi(e,n){for(;e!==null;)e.tag===5?S_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Zi(e.child,n)),e=e.sibling}function _c(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(_c(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(vs(e,a,n,null,!1)||Zi(e.child,!1))}e=e.sibling}}function rd(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,l=ha(r,a),u=pa(r.default,a.paired?r.share:r.enter);u!=="none"?vs(e,l,u,null,!1)?(_c(e),a.paired||n||As(e,r.onEnter)):Zi(e.child,!1):_c(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)rd(e,n),e=e.sibling;else _c(e)}function sd(e){if(ni!==null&&ni.size!==0){var n=ni;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var u=pa(a.default,a.share);if(u!=="none"&&(vs(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,As(e,a.onShare)):Zi(e.child,!1)),n.delete(r),n.size===0)break}}}sd(e)}e=e.sibling}}}function od(e){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode),r=ni!==null?ni.get(a):void 0,l=pa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(vs(e,a,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ni.delete(a),As(e,n.onShare)):As(e,n.onExit):Zi(e.child,!1)),ni!==null&&sd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)od(e),e=e.sibling;else ni!==null&&sd(e)}function y0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&vs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&y0(e);e=e.sibling}}function ld(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Zi(e.child,!1))}ld(e)}e=e.sibling}}function vc(e){if(e.tag===30)e.stateNode.paired=null,Zi(e.child,!1),ld(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)vc(e),e=e.sibling;else ld(e)}function M0(e){for(e=e.child;e!==null;)e.tag===30?Zi(e.child,!1):(e.subtreeFlags&33554432)!==0&&M0(e),e=e.sibling}function cd(e,n,a,r,l,u,g){for(var A=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(u!==null&&Wn<u.length){var $=u[Wn],ue=Gd(z);($.view||ue.view)&&(A=!0);var ye;if(ye=(e.flags&4)===0)if(ue.clip)ye=!0;else{ye=$.rect;var Q=ue.rect;ye=ye.y!==Q.y||ye.x!==Q.x||ye.height!==Q.height||ye.width!==Q.width}ye&&(e.flags|=4),ue.abs?ue=!$.abs:($=$.rect,ue=ue.rect,ue=$.height!==ue.height||$.width!==ue.width),ue&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&x_(z,Wn===0?a:a+"_"+Wn,l),A&&(e.flags&4)!==0||(ji===null&&(ji=[]),ji.push(z,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?e.flags|=n.flags&32:cd(e,n.child,a,r,l,u,g)&&(A=!0));n=n.sibling}return A}function E0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,l=ha(a,r),u=pa(a.default,a.update),g;g=e.memoizedState,e.memoizedState=null,r=e;var A=e.child;Wn=0,l=cd(r,A,l,l,u,g,!1),(e.flags&4)!==0&&l&&As(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&E0(e);e=e.sibling}}var En=!1,Gt=!1,Ki=!1,ud=!1,b0=typeof WeakSet=="function"?WeakSet:Set,bn=null,Qi=!1,Ho=!1,xc=!1,fd=!1;function gy(e,n,a){if(e=e.containerInfo,Id=Is,e=Cm(e),Ku(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break e}var A=0,z=-1,$=-1,ue=0,ye=0,Q=e,oe=null;t:for(;;){for(var Pe;Q!==r||u!==0&&Q.nodeType!==3||(z=A+u),Q!==g||l!==0&&Q.nodeType!==3||($=A+l),Q.nodeType===3&&(A+=Q.nodeValue.length),(Pe=Q.firstChild)!==null;)oe=Q,Q=Pe;for(;;){if(Q===e)break t;if(oe===r&&++ue===u&&(z=A),oe===g&&++ye===l&&($=A),(Pe=Q.nextSibling)!==null)break;Q=oe,oe=Q.parentNode}Q=Pe}r=z===-1||$===-1?null:{start:z,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(zd={focusedElem:e,selectionRange:r},Is=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(e=bn,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&od(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&v0(e),Sc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&od(r),Sc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&v0(e),Sc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,bn=r):(a&&y0(e),Sc(a))}}ni=null}function Sc(e){for(;bn!==null;){var n=bn,a=e,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var g=Lr(n.type,l);a=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(A){Wt(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)kd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":kd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ha(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=pa(l.default,l.update),l!=="none"&&vs(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function T0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),r&4&&Bo(5,a);break;case 1:if(Ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Wt(a,a.return,g)}else{var l=Lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Wt(a,a.return,g)}}r&64&&h0(a),r&512&&Yi(a,a.return);break;case 3:if(Ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ng(e,n)}catch(g){Wt(a,a.return,g)}}break;case 27:n===null&&r&4&&_0(a);case 26:case 5:Ji(e,a),n===null&&r&4&&td(a),r&512&&Yi(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),r&4&&w0(e,a);break;case 13:Ji(e,a),r&4&&N0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Cy.bind(null,a),cM(e,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||Gt;n=En,l=Gt,En=r,(Gt=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(e,a,r)):Ji(e,a),En=n,Gt=l}break;case 30:Ji(e,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:Ji(e,a)}}function dd(e,n){for(e=e.child;e!==null;)A0(e,n),e=e.sibling}function A0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(z){Wt(e,e.return,z)}hd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,xt=!0}catch(z){Wt(e,e.return,z)}break;case 18:try{var A=e.stateNode;n?v_(A,!0):v_(e.stateNode,!1)}catch(z){Wt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&dd(e,n);break;default:dd(e,n)}}function hd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:A0(a,r);break e;case 22:a.memoizedState===null&&hd(a,r);break e;default:hd(a,r)}}e=e.sibling}}function R0(e){var n=e.alternate;n!==null&&(e.alternate=null,R0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ke(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,qn=!1;function Ai(e,n,a){for(a=a.child;a!==null;)C0(e,n,a),a=a.sibling}function C0(e,n,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Gt||wn(a,n),Ai(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Gt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gt||wn(a,n),Fo(a);var r=tn,l=qn;ir(a.type)&&(tn=a.stateNode,qn=!1),Ai(e,n,a),U_(a.stateNode,a.type,a.memoizedProps),tn=r,qn=l;break;case 5:Gt||wn(a,n),Fo(a);case 6:if(a.tag===6&&Fo(a),r=tn,l=qn,tn=null,Ai(e,n,a),tn=r,qn=l,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),xt=!0}catch(u){Wt(a,n,u)}else try{tn.removeChild(a.stateNode),xt=!0}catch(u){Wt(a,n,u)}break;case 18:tn!==null&&(qn?(e=tn,__(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zs(e)):__(tn,a.stateNode));break;case 4:r=tn,l=qn,tn=a.stateNode.containerInfo,qn=!0,Ai(e,n,a),tn=r,qn=l;break;case 0:case 11:case 14:case 15:Ka(2,a,n),Gt||Ka(4,a,n),Ai(e,n,a);break;case 1:Gt||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&p0(a,n,r)),Ai(e,n,a);break;case 21:Ai(e,n,a);break;case 22:Gt=(r=Gt)||a.memoizedState!==null,Ai(e,n,a),Gt=r;break;case 30:wn(a,n),Ai(e,n,a);break;case 7:Gt||wn(a,n),Ai(e,n,a);break;default:Ai(e,n,a)}}function w0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zs(e)}catch(a){Wt(n,n.return,a)}}}function N0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zs(e)}catch(a){Wt(n,n.return,a)}}function _y(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new b0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new b0),n;default:throw Error(s(435,e.tag))}}function yc(e,n){var a=_y(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=wy.bind(null,e,r);r.then(l,l)}})}function Gn(e,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],g=e,A=n,z=A;e:for(;z!==null;){switch(z.tag){case 27:if(ir(z.type)){tn=z.stateNode,qn=!1;break e}break;case 5:tn=z.stateNode,qn=!1;break e;case 3:case 4:tn=z.stateNode.containerInfo,qn=!0;break e}z=z.return}if(tn===null)throw Error(s(160));C0(g,A,u),tn=null,qn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)D0(n,e,a),n=n.sibling}var Ri=null;function D0(e,n,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}Gn(n,e,a),Vn(e),l&4&&(Ka(3,e,e.return),Bo(3,e),Ka(5,e,e.return));break;case 1:Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ri,Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(En)e.stateNode=p_(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Oe]||r[T]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[T]=e,vt(r),n=r;break e;case"link":if(u=B_("link","href",l).get(n+(a.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(g,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(u=B_("meta","content",l).get(n+(a.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(g,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[T]=e,vt(r),n=r}e.stateNode=n}else En||Qd(u,e.type,e.stateNode);else e.stateNode=z_(u,a,e.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Gt||n.parentNode.removeChild(n)):l.count--,a===null?En||Qd(u,e.type,e.stateNode):z_(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&nd(e,e.memoizedProps,r.memoizedProps);break;case 27:Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),r!==null&&l&4&&nd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Ki,Ki=!1,Gn(n,e,a),Ki=u,Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),e.flags&32){n=e.stateNode;try{es(n,""),xt=!0}catch(ue){Wt(e,e.return,ue)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,nd(e,n,r!==null?r.memoizedProps:n)),l&1024&&(ud=!0);break;case 6:if(Gn(n,e,a),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,xt=!0}catch(ue){Wt(e,e.return,ue)}}break;case 3:if(xt=!1,Ic=null,u=Ri,Ri=Zo(n.containerInfo),Gn(n,e,a),Ri=u,Vn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(ue){Wt(e,e.return,ue)}ud&&(ud=!1,U0(e)),xt=!1;break;case 4:l=Ki,Ki=En,r=It(),u=Ri,Ri=Zo(e.stateNode.containerInfo),Gn(n,e,a),Vn(e),Ri=u,xt&&Ho&&(xc=!0),xt=r,Ki=l;break;case 12:Gn(n,e,a),Vn(e);break;case 31:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 13:Gn(n,e,a),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(bc=ke()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 22:u=e.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var A=En,z=Gt,$=Ki;En=A||u,Ki=$||u,Gt=z||g,Gn(n,e,a),Gt=z,Ki=$,En=A,Vn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||g||En||Gt||(n=g||Gt,a=En,r=Gt,En=u||En,Gt=n,Qa(e,2),En=a,Gt=r),!u&&Ki||dd(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,yc(e,a))));break;case 19:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 30:l&512&&(Gt||r===null||wn(r,r.return)),l=It(),u=Ho,g=(a&335544064)===a,A=e.memoizedProps,Ho=g&&pa(A.default,A.update)!=="none",Gn(n,e,a),Vn(e),g&&r!==null&&xt&&(e.flags|=4),Ho=u,xt=l;break;case 21:break;case 7:l&512&&(Gt||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Gn(n,e,a),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(g0(r)){a=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(ed(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if($f(l))break;l=l.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,z=id(e);mc(e,z,A,g);break;case 5:var $=a.stateNode;a.flags&32&&(es($,""),a.flags&=-33);var ue=id(e);mc(e,ue,$,g);break;case 3:case 4:var ye=a.stateNode.containerInfo,Q=id(e);ad(e,Q,ye,g);break;default:throw Error(s(161))}}catch(oe){Wt(e,e.return,oe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function U0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;U0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Is=!0,n.reset(),Is=!1),e=e.sibling}}function xs(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)L0(n,e),n=n.sibling;else E0(n)}function L0(e,n){var a=e.alternate;if(a===null)rd(e,!1);else switch(e.tag){case 3:if(fd=Qi=!1,x0(),xs(n,e),!Qi&&!xc){if(e=ji,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var l=e[r+1];S_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),fd=!0}ji=null;break;case 5:xs(n,e);break;case 4:r=Qi,Qi=!1,xs(n,e),Qi&&(xc=!0),Qi=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?rd(e,!1):xs(n,e));break;case 30:r=Qi,l=x0(),Qi=!1,xs(n,e),Qi&&(e.flags|=4);var u=e.memoizedProps,g=e.stateNode;n=ha(u,g),g=ha(a.memoizedProps,g);var A=pa(u.default,u.update);A==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Wn=0,n=cd(e,a,n,g,A,u,!0),Wn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(As(e,e.memoizedProps.onUpdate),ji=l):l!==null&&(l.push.apply(l,ji),ji=l),Qi=(e.flags&32)!==0?!0:r;break;default:xs(n,e)}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)T0(e,n.alternate,n),n=n.sibling}function Qa(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ka(4,a,a.return),Qa(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&p0(a,a.return,l),Qa(a,r);break;case 27:(r&2)!==0&&U_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Fo(a),Qa(a,r);break;case 6:Fo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Gt||l.parentNode.removeChild(l),Qa(a,r);break;case 22:a.memoizedState===null&&Qa(a,r);break;case 30:wn(a,a.return),Qa(a,r);break;case 7:wn(a,a.return);default:Qa(a,r)}e=e.sibling}}function Ci(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=e,u=n,g=u.flags,A=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ci(l,u,a),Bo(4,u);break;case 1:if(Ci(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ue){Wt(r,r.return,ue)}if(r=u,l=r.updateQueue,l!==null){var z=r.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)tg($[l],z)}catch(ue){Wt(r,r.return,ue)}}A&&g&64&&h0(u),Yi(u,u.return);break;case 27:(a&2)!==0&&_0(u);case 5:u.tag!==5&&u.tag!==27||m0(u),Ci(l,u,a),A&&r===null&&g&4&&td(u),Yi(u,u.return);break;case 6:m0(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||En||Qd(Zo(z.ownerDocument),u.type,z),Ci(l,u,a),A&&r===null&&g&4&&td(u),Yi(u,u.return);break;case 12:Ci(l,u,a);break;case 31:Ci(l,u,a),A&&g&4&&w0(l,u);break;case 13:Ci(l,u,a),A&&g&4&&N0(l,u);break;case 22:u.memoizedState===null&&Ci(l,u,a),Yi(u,u.return);break;case 30:Ci(l,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:Ci(l,u,a)}n=n.sibling}}function pd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&To(a))}function md(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e))}function vi(e,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)O0(e,n,a,r),n=n.sibling;else l&&M0(n)}function O0(e,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&vc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,r),u&2048&&Bo(9,n);break;case 1:vi(e,n,a,r);break;case 3:vi(e,n,a,r),l&&fd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&To(u)));break;case 12:if(u&2048){vi(e,n,a,r),u=n.stateNode;try{var g=n.memoizedProps,A=g.id,z=g.onPostCommit;typeof z=="function"&&z(A,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch($){Wt(n,n.return,$)}}else vi(e,n,a,r);break;case 31:vi(e,n,a,r);break;case 13:vi(e,n,a,r);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&vc(A),g._visibility&2?vi(e,n,a,r):Go(e,n)):(l&&A!==null&&A.memoizedState!==null&&vc(n),g._visibility&2?vi(e,n,a,r):(g._visibility|=2,Ss(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&pd(A,n);break;case 24:vi(e,n,a,r),u&2048&&md(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Zi(u.child,!0),Zi(n.child,!0))),vi(e,n,a,r);break;default:vi(e,n,a,r)}}function Ss(e,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,g=n,A=a,z=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:Ss(u,g,A,z,l),Bo(8,g);break;case 23:break;case 22:var ue=g.stateNode;g.memoizedState!==null?ue._visibility&2?Ss(u,g,A,z,l):Go(u,g):(ue._visibility|=2,Ss(u,g,A,z,l)),l&&$&2048&&pd(g.alternate,g);break;case 24:Ss(u,g,A,z,l),l&&$&2048&&md(g.alternate,g);break;default:Ss(u,g,A,z,l)}n=n.sibling}}function Go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,l=r.flags;switch(r.tag){case 22:Go(a,r),l&2048&&pd(r.alternate,r);break;case 24:Go(a,r),l&2048&&md(r.alternate,r);break;default:Go(a,r)}n=n.sibling}}var Or=8192;function Pr(e,n,a){if(e.subtreeFlags&Or)for(e=e.child;e!==null;)P0(e,n,a),e=e.sibling}function P0(e,n,a){switch(e.tag){case 26:Pr(e,n,a),e.flags&Or&&(e.memoizedState!==null?EM(a,Ri,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&V_(a,e)));break;case 5:Pr(e,n,a),e.flags&Or&&(e=e.stateNode,(n&335544128)===n&&V_(a,e));break;case 3:case 4:var r=Ri;Ri=Zo(e.stateNode.containerInfo),Pr(e,n,a),Ri=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Or,Or=16777216,Pr(e,n,a),Or=r):Pr(e,n,a));break;case 30:if((e.flags&Or)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(r,l)}Pr(e,n,a);break;default:Pr(e,n,a)}}function I0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,B0(r,e)}I0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)z0(e),e=e.sibling}function z0(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Mc(e)):Vo(e);break;default:Vo(e)}}function Mc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,B0(r,e)}I0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),Mc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Mc(n));break;default:Mc(n)}e=e.sibling}}function B0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:To(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var l=r.sibling,u=r.return;if(R0(r),r===a){bn=null;break e}if(l!==null){l.return=u,bn=l;break e}bn=u}}}var vy={getCacheForType:function(e){var n=An(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(dn).controller.signal}},xy=typeof WeakMap=="function"?WeakMap:Map,zt=0,Kt=null,Et=null,At=0,kt=0,ii=null,Ja=!1,ys=!1,gd=!1,Ea=0,ln=0,$a=0,Ir=0,Ec=0,ai=0,Ms=0,Xo=null,Yn=null,_d=!1,bc=0,F0=0,Tc=1/0,Ac=null,er=null,an=0,wi=null,zr=null,$i=0,vd=0,xd=null,H0=null,Es=null,bs=null,Ts=null,ko=0,Rc=null;function ri(){return(zt&2)!==0&&At!==0?At&-At:ve.T!==null?wd():Tl()}function G0(){if(ai===0)if((At&536870912)===0||St){var e=gr;gr<<=1,(gr&3932160)===0&&(gr=262144),ai=e}else ai=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ai}function As(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=y_(ha(e.memoizedProps,a))),bs===null&&(bs=[]),bs.push(n.bind(null,r))}}function jn(e,n,a){(e===Kt&&(kt===2||kt===9)||e.cancelPendingCommit!==null)&&(Rs(e,0),tr(e,At,ai,!1)),Vi(e,a),((zt&2)===0||e!==Kt)&&(e===Kt&&((zt&2)===0&&(Ir|=a),ln===4&&tr(e,At,ai,!1)),ea(e))}function V0(e,n,a){if((zt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ia(e,n),l=r?My(e,n):yd(e,n,!0),u=r;do{if(l===0){ys&&!r&&tr(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!Sy(a)){l=yd(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var A=e;l=Xo;var z=A.current.memoizedState.isDehydrated;if(z&&(Rs(A,g).flags|=256),g=yd(A,g,!1),g!==2&&g!==6){if(gd&&!z){A.errorRecoveryDisabledLanes|=u,Ir|=u,l=4;break e}u=Yn,Yn=l,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}l=g}if(u=!1,l!==2)continue}}if(l===1){Rs(e,0),tr(e,n,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:tr(r,n,ai,!Ja);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=bc+300-ke(),10<l)){if(tr(r,n,ai,!Ja),_r(r,0,!0)!==0)break e;$i=n,r.timeoutHandle=Hd(X0.bind(null,r,a,Yn,Ac,_d,n,ai,Ir,Ms,Ja,u,"Throttled",-0,0),l);break e}X0(r,a,Yn,Ac,_d,n,ai,Ir,Ms,Ja,u,null,-0,0)}}break}while(!0);ea(e)}function X0(e,n,a,r,l,u,g,A,z,$,ue,ye,Q,oe){e.timeoutHandle=-1;var Pe=n.subtreeFlags,Qe=(u&335544064)===u;if(ye=null,(Qe||Pe&8192||(Pe&16785408)===16785408)&&(ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ni=null,P0(n,u,ye),Qe&&(Pe=ye,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(Pe.count++,Pe.waitingForViewTransition=!0,Pe=Jo.bind(Pe),Qe.finished.then(Pe,Pe))),Pe=(u&62914560)===u?bc-ke():(u&4194048)===u?F0-ke():0,Pe=bM(ye,Pe),Pe!==null)){$i=u,e.cancelPendingCommit=Pe(Q0.bind(null,e,n,u,a,r,l,g,A,z,$,ue,ye,null,Q,oe)),tr(e,u,g,!$);return}Q0(e,n,u,a,r,l,g,A,z,$,ue,ye)}function Sy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!ei(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(e,n,a,r){n=Gi(e,n),n&=~Ec,n&=~Ir,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var u=31-ut(l),g=1<<u;r[u]=-1,l&=~g}a!==0&&vr(e,a,n)}function Cc(){return(zt&6)===0?(Wo(0),!1):!0}function Sd(){if(Et!==null){if(kt===0)var e=Et.return;else e=Et,_a=br=null,Cf(e),hs=null,Co=0,e=Et;for(;e!==null;)d0(e.alternate,e),e=e.return;Et=null}}function Rs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,ky(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,Sd(),Kt=e,Et=a=ma(e.current,null),At=n,kt=0,ii=null,Ja=!1,ys=Ia(e,n),gd=!1,Ms=ai=Ec=Ir=$a=ln=0,Yn=Xo=null,_d=!1,Ea=Gi(e,n),Il(),a}function k0(e,n){ht=null,ve.H=oc,n===ds||n===Yl?(n=Qm(),kt=3):n===mf?(n=Qm(),kt=4):kt=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Et===null&&(ln=1,lc(e,pi(n,e.current)))}function W0(){var e=Rn.current;return e===null?!0:(At&4194048)===At?Ln===null:(At&62914560)===At||(At&536870912)!==0?e===Ln:!1}function q0(){var e=ve.H;return ve.H=oc,e===null?oc:e}function Y0(){var e=ve.A;return ve.A=vy,e}function wc(){ln=4,Ja||(At&4194048)!==At&&Rn.current!==null||(ys=!0),($a&134217727)===0&&(Ir&134217727)===0||Kt===null||tr(Kt,At,ai,!1)}function yd(e,n,a){var r=zt;zt|=2;var l=q0(),u=Y0();(Kt!==e||At!==n)&&(Ac=null,Rs(e,n)),n=!1;var g=ln;e:do try{if(kt!==0&&Et!==null){var A=Et,z=ii;switch(kt){case 8:Sd(),g=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var $=kt;if(kt=0,ii=null,Cs(e,A,z,$),a&&ys){g=0;break e}break;default:$=kt,kt=0,ii=null,Cs(e,A,z,$)}}yy(),g=ln;break}catch(ue){k0(e,ue)}while(!0);return n&&e.shellSuspendCounter++,_a=br=null,zt=r,ve.H=l,ve.A=u,Et===null&&(Kt=null,At=0,Il()),g}function yy(){for(;Et!==null;)j0(Et)}function My(e,n){var a=zt;zt|=2;var r=q0(),l=Y0();Kt!==e||At!==n?(Ac=null,Tc=ke()+500,Rs(e,n)):ys=Ia(e,n);e:do try{if(kt!==0&&Et!==null){n=Et;var u=ii;t:switch(kt){case 1:kt=0,ii=null,Cs(e,n,u,1);break;case 2:case 9:if(Zm(u)){kt=0,ii=null,Z0(n);break}n=function(){kt!==2&&kt!==9||Kt!==e||(kt=7),ea(e)},u.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Zm(u)?(kt=0,ii=null,Z0(n)):(kt=0,ii=null,Cs(e,n,u,7));break;case 5:var g=null;switch(Et.tag){case 26:g=Et.memoizedState;case 5:case 27:var A=Et;if(g?H_(g):A.stateNode.complete){kt=0,ii=null;var z=A.sibling;if(z!==null)Et=z;else{var $=A.return;$!==null?(Et=$,Nc($)):Et=null}break t}}kt=0,ii=null,Cs(e,n,u,5);break;case 6:kt=0,ii=null,Cs(e,n,u,6);break;case 8:Sd(),ln=6;break e;default:throw Error(s(462))}}Ey();break}catch(ue){k0(e,ue)}while(!0);return _a=br=null,ve.H=r,ve.A=l,zt=a,Et!==null?0:(Kt=null,At=0,Il(),ln)}function Ey(){for(;Et!==null&&!ze();)j0(Et)}function j0(e){var n=u0(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?Nc(e):Et=n}function Z0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=i0(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=i0(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Cf(n);var r=n;r===Mn&&(St?(Vl(r),r.tag===5&&r.stateNode!=null&&(Jt=r.stateNode)):(Vl(r),St=!0));default:d0(a,n),n=Et=Bm(n,Ea),n=u0(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?Nc(e):Et=n}function Cs(e,n,a,r){_a=br=null,Cf(n),hs=null,Co=0;var l=n.return;try{if(uy(e,l,n,a,At)){ln=1,lc(e,pi(a,e.current)),Et=null;return}}catch(u){if(l!==null)throw Et=l,u;ln=1,lc(e,pi(a,e.current)),Et=null;return}n.flags&32768?(St||r===1?e=!0:ys||(At&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),K0(n,e)):Nc(n)}function Nc(e){var n=e;do{if((n.flags&32768)!==0){K0(n,Ja);return}e=n.return;var a=py(n.alternate,n,Ea);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=e}while(n!==null);ln===0&&(ln=5)}function K0(e,n){do{var a=my(e.alternate,e);if(a!==null){a.flags&=32767,Et=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Et=e;return}Et=e=a}while(e!==null);ln=6,Et=null}function Q0(e,n,a,r,l,u,g,A,z,$,ue,ye){e.cancelPendingCommit=null;do Dc();while(an!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Kt&&(Et=Kt=null,At=0),zr=n,wi=e,$i=a,xd=l,H0=r,by(e,n,a,g,A,z,ye)}}function by(e,n,a,r,l,u,g){var A=n.lanes|n.childLanes;if(vd=A,A|=tf,bl(e,a,A,r,l,u),bs=null,(a&335544064)===a?(Ts=JS(e),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Ny(we,function(){return Td(),null})):(e.callbackNode=null,e.callbackPriority=0),gc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null,l=Ce.p,Ce.p=2,u=zt,zt|=4;try{gy(e,n,a)}finally{zt=u,Ce.p=l,ve.T=r}}an=1,gc?Es=Ky(g,e.containerInfo,Ts,Md,Ed,Ay,bd,Td,Ty):(Md(),Ed(),bd())}function Ty(e){if(an!==0){var n=wi.onRecoverableError;n(e,{componentStack:null})}}function Ay(){an===3&&(an=0,L0(zr,wi),an=4)}function Md(){if(an===1){an=0;var e=wi,n=zr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null;var l=Ce.p;Ce.p=2;var u=zt;zt|=4;try{Ho=xc=!1,D0(n,e,a),a=zd;var g=Cm(e.containerInfo),A=a.focusedElem,z=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&Rm(A.ownerDocument.documentElement,A)){if(z!==null&&Ku(A)){var $=z.start,ue=z.end;if(ue===void 0&&(ue=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ue,A.value.length);else{var ye=A.ownerDocument||document,Q=ye&&ye.defaultView||window;if(Q.getSelection){var oe=Q.getSelection(),Pe=A.textContent.length,Qe=Math.min(z.start,Pe),pt=z.end===void 0?Qe:Math.min(z.end,Pe);!oe.extend&&Qe>pt&&(g=pt,pt=Qe,Qe=g);var J=Am(A,Qe),G=Am(A,pt);if(J&&G&&(oe.rangeCount!==1||oe.anchorNode!==J.node||oe.anchorOffset!==J.offset||oe.focusNode!==G.node||oe.focusOffset!==G.offset)){var ie=ye.createRange();ie.setStart(J.node,J.offset),oe.removeAllRanges(),Qe>pt?(oe.addRange(ie),oe.extend(G.node,G.offset)):(ie.setEnd(G.node,G.offset),oe.addRange(ie))}}}}for(ye=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&ye.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ye.length;A++){var Se=ye[A];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Is=!!Id,zd=Id=null}finally{zt=u,Ce.p=l,ve.T=r}}e.current=n,an=2}}function Ed(){if(an===2){an=0;var e=wi,n=zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ve.T,ve.T=null;var r=Ce.p;Ce.p=2;var l=zt;zt|=4;try{T0(e,n.alternate,n)}finally{zt=l,Ce.p=r,ve.T=a}}an=3}}function bd(){if(an===4||an===3){an=0;var e=Es;Es=null,Ie();var n=wi,a=zr,r=$i,l=H0,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?an=5:(an=0,zr=wi=null,J0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(er=null),ho(r),a=a.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=ve.T,u=Ce.p,Ce.p=2,ve.T=null;try{for(var g=n.onRecoverableError,A=0;A<l.length;A++){var z=l[A];g(z.value,{componentStack:z.stack})}}finally{ve.T=a,Ce.p=u}}if(l=bs,g=Ts,Ts=null,l!==null&&(bs=null,g===null&&(g=[]),e!==null))for(z=0;z<l.length;z++)a=(0,l[z])(g),a!==void 0&&e.finished.finally(a);($i&3)!==0&&Dc(),ea(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Rc?ko++:(ko=0,Rc=n):(ko=0,Rc=null),Wo(0)}}function J0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,To(n)))}function Dc(){return Es!==null&&(Es.skipTransition(),Es=null),Md(),Ed(),bd(),Td()}function Td(){if(an!==5)return!1;var e=wi,n=vd;vd=0;var a=ho($i),r=ve.T,l=Ce.p;try{Ce.p=32>a?32:a,ve.T=null,a=xd,xd=null;var u=wi,g=$i;if(an=0,zr=wi=null,$i=0,(zt&6)!==0)throw Error(s(331));var A=zt;if(zt|=4,z0(u.current),O0(u,u.current,g,a),zt=A,Wo(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,u)}catch{}return!0}finally{Ce.p=l,ve.T=r,J0(e,n)}}function $0(e,n,a){n=pi(a,n),n=Vf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(Vi(e,2),ea(e))}function Wt(e,n,a){if(e.tag===3)$0(e,e,a);else for(;n!==null;){if(n.tag===3){$0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){e=pi(a,e),a=Zg(2),r=qa(n,a,2),r!==null&&(Kg(a,r,n,e),Vi(r,2),ea(r));break}}n=n.return}}function Ad(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new xy;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(gd=!0,l.add(a),e=Ry.bind(null,e,n,a),n.then(e,e))}function Ry(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Kt===e&&(At&a)===a&&((ln===4||ln===3&&(At&62914560)===At&&300>ke()-bc)&&(zt&2)===0?Rs(e,0):Ec|=a,Ms===At&&(Ms=0)),ea(e)}function e_(e,n){n===0&&(n=lo()),e=yr(e,n),e!==null&&(Vi(e,n),ea(e))}function Cy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(e,a)}function wy(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),e_(e,a)}function Ny(e,n){return Ne(e,n)}var ws=null,Ns=null,Rd=!1,Uc=!1,Cd=!1,nr=0;function ea(e){e!==Ns&&e.next===null&&(Ns===null?ws=Ns=e:Ns=Ns.next=e),Uc=!0,Rd||(Rd=!0,Uy())}function Wo(e,n){if(!Cd&&Uc){Cd=!0;do for(var a=!1,r=ws;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var g=r.suspendedLanes,A=r.pingedLanes;u=(1<<31-ut(42|e)+1)-1,u&=l&~(g&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,a_(r,u))}else u=At,u=_r(r,r===Kt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ia(r,u)||(a=!0,a_(r,u));r=r.next}while(a);Cd=!1}}function Dy(){t_()}function t_(){Uc=Rd=!1;var e=0;nr!==0&&Xy()&&(e=nr);for(var n=ke(),a=null,r=ws;r!==null;){var l=r.next,u=n_(r,n);u===0?(r.next=null,a===null?ws=l:a.next=l,l===null&&(Ns=a)):(a=r,(e!==0||(u&3)!==0)&&(Uc=!0)),r=l}an!==0&&an!==5||Wo(e),nr!==0&&(nr=0)}function n_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var g=31-ut(u),A=1<<g,z=l[g];z===-1?((A&a)===0||(A&r)!==0)&&(l[g]=oo(A,n)):z<=n&&(e.expiredLanes|=A),u&=~A}if(n=Kt,a=At,a=_r(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(kt===2||kt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ia(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),ho(a)){case 2:case 8:a=q;break;case 32:a=we;break;case 268435456:a=Le;break;default:a=we}return r=i_.bind(null,e),a=Ne(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function i_(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dc()&&e.callbackNode!==a)return null;var r=At;return r=_r(e,e===Kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(V0(e,r,n),n_(e,ke()),e.callbackNode!=null&&e.callbackNode===a?i_.bind(null,e):null)}function a_(e,n){if(Dc())return null;V0(e,n,!0)}function Uy(){Wy(function(){(zt&6)!==0?Ne(lt,Dy):t_()})}function wd(){if(nr===0){var e=Rr;e===0&&(e=Qr,Qr<<=1,(Qr&261888)===0&&(Qr=256)),nr=e}return nr}function r_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cl(e)}function Ly(e,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var u=r_((l[H]||null).action),g=r.submitter;g&&(n=(n=g[H]||null)?r_(n.formAction):g.getAttribute("formAction"),n!==null&&(u=n,g=null));var A=new Ul("action","action",null,r,l);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nr!==0){var z=new FormData(l,g);zf(a,{pending:!0,data:z,method:l.method,action:u},null,z)}}else typeof u=="function"&&(A.preventDefault(),z=new FormData(l,g),zf(a,{pending:!0,data:z,method:l.method,action:u},u,z))},currentTarget:l}]})}}for(var Nd=0;Nd<ef.length;Nd++){var Dd=ef[Nd],Oy=Dd.toLowerCase(),Py=Dd[0].toUpperCase()+Dd.slice(1);Ti(Oy,"on"+Py)}Ti(Dm,"onAnimationEnd"),Ti(Um,"onAnimationIteration"),Ti(Lm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(kS,"onTransitionRun"),Ti(WS,"onTransitionStart"),Ti(qS,"onTransitionCancel"),Ti(Om,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function s_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],z=A.instance,$=A.currentTarget;if(A=A.listener,z!==u&&l.isPropagationStopped())break e;u=A,l.currentTarget=$;try{u(l)}catch(ue){Pl(ue)}l.currentTarget=null,u=z}else for(g=0;g<r.length;g++){if(A=r[g],z=A.instance,$=A.currentTarget,A=A.listener,z!==u&&l.isPropagationStopped())break e;u=A,l.currentTarget=$;try{u(l)}catch(ue){Pl(ue)}l.currentTarget=null,u=z}}}}function bt(e,n){var a=n[ae];a===void 0&&(a=n[ae]=new Set);var r=e+"__bubble";a.has(r)||(o_(n,e,2,!1),a.add(r))}function Ud(e,n,a){var r=0;n&&(r|=4),o_(a,e,r,n)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Ld(e){if(!e[Lc]){e[Lc]=!0,Ht.forEach(function(a){a!=="selectionchange"&&(Iy.has(a)||Ud(a,!1,e),Ud(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lc]||(n[Lc]=!0,Ud("selectionchange",!1,n))}}function o_(e,n,a,r){switch(K_(n)){case 2:var l=CM;break;case 8:l=wM;break;default:l=$d}a=l.bind(null,n,a,e),l=void 0,!Hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Od(e,n,a,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===l)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;A!==null;){if(g=rt(A),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=u=g;continue e}A=A.parentNode}}r=r.return}om(function(){var $=u,ue=Bu(a),ye=[];e:{var Q=Pm.get(e);if(Q!==void 0){var oe=Ul,Pe=e;switch(e){case"keypress":if(Nl(a)===0)break e;case"keydown":case"keyup":oe=SS;break;case"focusin":Pe="focus",oe=ku;break;case"focusout":Pe="blur",oe=ku;break;case"beforeblur":case"afterblur":oe=ku;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=lS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=TS;break;case Dm:case Um:case Lm:oe=fS;break;case Om:oe=RS;break;case"scroll":case"scrollend":oe=sS;break;case"wheel":oe=wS;break;case"copy":case"cut":case"paste":oe=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=dm;break;case"submit":oe=ES;break;case"toggle":case"beforetoggle":oe=DS}var Qe=(n&4)!==0,pt=!Qe&&(e==="scroll"||e==="scrollend"),J=Qe?Q!==null?Q+"Capture":null:Q;Qe=[];for(var G=$,ie;G!==null;){var Se=G;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||J===null||(Se=po(G,J),Se!=null&&Qe.push(Yo(G,Se,ie))),pt)break;G=G.return}0<Qe.length&&(Q=new oe(Q,Pe,null,a,ue),ye.push({event:Q,listeners:Qe}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",oe&&a!==zu&&(Pe=a.relatedTarget||a.fromElement)&&(rt(Pe)||Pe[fe]))break e;(Q||oe)&&(Pe=ue.window===ue?ue:(oe=ue.ownerDocument)?oe.defaultView||oe.parentWindow:window,Q?(oe=a.relatedTarget||a.toElement,Q=$,oe=oe?rt(oe):null,oe!==null&&(pt=f(oe),Qe=oe.tag,oe!==pt||Qe!==5&&Qe!==27&&Qe!==6)&&(oe=null)):(Q=null,oe=$),Q!==oe&&(Qe=um,Se="onMouseLeave",J="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=dm,Se="onPointerLeave",J="onPointerEnter",G="pointer"),pt=Q==null?Pe:Ye(Q),ie=oe==null?Pe:Ye(oe),Pe=new Qe(Se,G+"leave",Q,a,ue),Pe.target=pt,Pe.relatedTarget=ie,Se=null,rt(ue)===$&&(Qe=new Qe(J,G+"enter",oe,a,ue),Qe.target=ie,Qe.relatedTarget=pt,Se=Qe),pt=Se,Qe=Q&&oe?O(Q,oe,zy):null,Q!==null&&l_(ye,Pe,Q,Qe,!1),oe!==null&&pt!==null&&l_(ye,pt,oe,Qe,!0)))}e:{if(Q=$?Ye($):window,oe=Q.nodeName&&Q.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Q.type==="file")var je=Sm;else if(vm(Q))if(ym)je=GS;else{je=FS;var Rt=BS}else oe=Q.nodeName,!oe||oe.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?$&&Iu($.elementType)&&(je=Sm):je=HS;if(je&&(je=je(e,$))){xm(ye,je,a,ue);break e}Rt&&Rt(e,Q,$)}switch(Rt=$?Ye($):window,e){case"focusin":(vm(Rt)||Rt.contentEditable==="true")&&(as=Rt,Qu=$,Mo=null);break;case"focusout":Mo=Qu=as=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,wm(ye,a,ue);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":wm(ye,a,ue)}var et;if(qu)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else is?gm(e,a)&&(at="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(hm&&a.locale!=="ko"&&(is||at!=="onCompositionStart"?at==="onCompositionEnd"&&is&&(et=lm()):(za=ue,Gu="value"in za?za.value:za.textContent,is=!0)),Rt=Oc($,at),0<Rt.length&&(at=new fm(at,e,null,a,ue),ye.push({event:at,listeners:Rt}),et?at.data=et:(et=_m(a),et!==null&&(at.data=et)))),(et=LS?OS(e,a):PS(e,a))&&(at=Oc($,"onBeforeInput"),0<at.length&&(Rt=new fm("onBeforeInput","beforeinput",null,a,ue),ye.push({event:Rt,listeners:at}),Rt.data=et)),Ly(ye,e,$,a,ue)}s_(ye,n)})}function Yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Oc(e,n){for(var a=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=po(e,a),l!=null&&r.unshift(Yo(e,l,u)),l=po(e,n),l!=null&&r.push(Yo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function l_(e,n,a,r,l){for(var u=n._reactName,g=[];a!==null&&a!==r;){var A=a,z=A.alternate,$=A.stateNode;if(A=A.tag,z!==null&&z===r)break;A!==5&&A!==26&&A!==27||$===null||(z=$,l?($=po(a,u),$!=null&&g.unshift(Yo(a,$,z))):l||($=po(a,u),$!=null&&g.push(Yo(a,$,z)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var By=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function c_(e){return(typeof e=="string"?e:""+e).replace(By,`
`).replace(Fy,"")}function u_(e,n){return n=c_(n),c_(e)===n}function qt(e,n,a,r,l,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||es(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&es(e,""+r);else return;break;case"className":$n(e,"class",r);break;case"tabIndex":$n(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,r);break;case"style":rm(e,r,u);return;case"data":if(n!=="object"){$n(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Cl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&qt(e,n,"name",l.name,l,null),qt(e,n,"formEncType",l.formEncType,l,null),qt(e,n,"formMethod",l.formMethod,l,null),qt(e,n,"formTarget",l.formTarget,l,null)):(qt(e,n,"encType",l.encType,l,null),qt(e,n,"method",l.method,l,null),qt(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Cl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ki);return;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Cl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":bt("beforetoggle",e),bt("toggle",e),Qt(e,"popover",r);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Qt(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=aS.get(a)||a,Qt(e,a,r);else return}xt=!0}function Pd(e,n,a,r,l,u){switch(a){case"style":rm(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")es(e,r);else if(typeof r=="number"||typeof r=="bigint")es(e,""+r);else return;break;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,l);break e}xt=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Qt(e,a,r)}return}xt=!0}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",e),bt("load",e);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var g=a[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,u,g,a,null)}}l&&qt(e,n,"srcSet",a.srcSet,a,null),r&&qt(e,n,"src",a.src,a,null);return;case"input":bt("invalid",e);var A=u=g=l=null,z=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ue=a[r];if(ue!=null)switch(r){case"name":l=ue;break;case"type":g=ue;break;case"checked":z=ue;break;case"defaultChecked":$=ue;break;case"value":u=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:qt(e,n,r,ue,a,null)}}tm(e,u,A,z,$,g,l,!1);return;case"select":bt("invalid",e),r=g=u=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":u=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:qt(e,n,l,A,a,null)}n=u,a=g,e.multiple=!!r,n!=null?$r(e,!!r,n,!1):a!=null&&$r(e,!!r,a,!0);return;case"textarea":bt("invalid",e),u=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":l=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:qt(e,n,g,A,a,null)}im(e,r,l,u);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qt(e,n,z,r,a,null)}return;case"dialog":bt("beforetoggle",e),bt("toggle",e),bt("cancel",e),bt("close",e);break;case"iframe":case"object":bt("load",e);break;case"video":case"audio":for(r=0;r<qo.length;r++)bt(qo[r],e);break;case"image":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"embed":case"source":case"link":bt("error",e),bt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,$,r,a,null)}return;default:if(Iu(n)){for(ue in a)a.hasOwnProperty(ue)&&(r=a[ue],r!==void 0&&Pd(e,n,ue,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&qt(e,n,A,r,a,null))}var Hy={};function Gy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,g=null,A=null,z=null,$=null,ue=null;for(oe in a){var ye=a[oe];if(a.hasOwnProperty(oe)&&ye!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":z=ye;default:r.hasOwnProperty(oe)||qt(e,n,oe,null,r,ye)}}for(var Q in r){var oe=r[Q];if(ye=a[Q],r.hasOwnProperty(Q)&&(oe!=null||ye!=null))switch(Q){case"type":oe!==ye&&(xt=!0),u=oe;break;case"name":oe!==ye&&(xt=!0),l=oe;break;case"checked":oe!==ye&&(xt=!0),$=oe;break;case"defaultChecked":oe!==ye&&(xt=!0),ue=oe;break;case"value":oe!==ye&&(xt=!0),g=oe;break;case"defaultValue":oe!==ye&&(xt=!0),A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:oe!==ye&&qt(e,n,Q,oe,r,ye)}}Ou(e,g,A,z,$,ue,u,l);return;case"select":oe=g=A=Q=null;for(u in a)if(z=a[u],a.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":oe=z;default:r.hasOwnProperty(u)||qt(e,n,u,null,r,z)}for(l in r)if(u=r[l],z=a[l],r.hasOwnProperty(l)&&(u!=null||z!=null))switch(l){case"value":u!==z&&(xt=!0),Q=u;break;case"defaultValue":u!==z&&(xt=!0),A=u;break;case"multiple":u!==z&&(xt=!0),g=u;default:u!==z&&qt(e,n,l,u,r,z)}n=A,a=g,r=oe,Q!=null?$r(e,!!a,Q,!1):!!r!=!!a&&(n!=null?$r(e,!!a,n,!0):$r(e,!!a,a?[]:"",!1));return;case"textarea":oe=Q=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qt(e,n,A,null,r,l)}for(g in r)if(l=r[g],u=a[g],r.hasOwnProperty(g)&&(l!=null||u!=null))switch(g){case"value":l!==u&&(xt=!0),Q=l;break;case"defaultValue":l!==u&&(xt=!0),oe=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&qt(e,n,g,l,r,u)}nm(e,Q,oe);return;case"option":for(var Pe in a)if(Q=a[Pe],a.hasOwnProperty(Pe)&&Q!=null&&!r.hasOwnProperty(Pe))switch(Pe){case"selected":e.selected=!1;break;default:qt(e,n,Pe,null,r,Q)}for(z in r)if(Q=r[z],oe=a[z],r.hasOwnProperty(z)&&Q!==oe&&(Q!=null||oe!=null))switch(z){case"selected":Q!==oe&&(xt=!0),e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:qt(e,n,z,Q,r,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)Q=a[Qe],a.hasOwnProperty(Qe)&&Q!=null&&!r.hasOwnProperty(Qe)&&qt(e,n,Qe,null,r,Q);for($ in r)if(Q=r[$],oe=a[$],r.hasOwnProperty($)&&Q!==oe&&(Q!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:qt(e,n,$,Q,r,oe)}return;default:if(Iu(n)){for(var pt in a)Q=a[pt],a.hasOwnProperty(pt)&&Q!==void 0&&!r.hasOwnProperty(pt)&&Pd(e,n,pt,void 0,r,Q);for(ue in r)Q=r[ue],oe=a[ue],!r.hasOwnProperty(ue)||Q===oe||Q===void 0&&oe===void 0||Pd(e,n,ue,Q,r,oe);return}}for(var J in a)Q=a[J],a.hasOwnProperty(J)&&Q!=null&&!r.hasOwnProperty(J)&&qt(e,n,J,null,r,Q);for(ye in r)Q=r[ye],oe=a[ye],!r.hasOwnProperty(ye)||Q===oe||Q==null&&oe==null||qt(e,n,ye,Q,r,oe)}function f_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,g=l.initiatorType,A=l.duration;if(u&&A&&f_(g)){for(g=0,A=l.responseEnd,r+=1;r<a.length;r++){var z=a[r],$=z.startTime;if($>A)break;var ue=z.transferSize,ye=z.initiatorType;ue&&f_(ye)&&(z=z.responseEnd,g+=ue*(z<A?1:(A-$)/(z-$)))}if(--r,n+=8*(u+g)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Id=null,zd=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function d_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function p_(e,n,a,r){return a=jo(a).createElement(e),a[T]=r,a[H]=n,Nn(a,e,n),vt(a),a}function Bd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fd=null;function Xy(){var e=window.event;return e&&e.type==="popstate"?e===Fd?!1:(Fd=e,!0):(Fd=null,!1)}var Hd=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,g_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hd,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(e){return m_.resolve(null).then(e).catch(qy)}:Hd;function qy(e){setTimeout(function(){throw e})}function ir(e){return e==="head"}function __(e,n){var a=n,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(l),zs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")jd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,jd(a);for(var u=a.firstChild;u;){var g=u.nextSibling,A=u.nodeName;u[Oe]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=g}}else a==="body"&&jd(e.ownerDocument.body);a=l}while(a);zs(n)}function v_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function x_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function S_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Yy(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Gd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return Yy(n,a,e)}function jy(e){return e.documentElement.clientHeight}function Zy(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Ky(e,n,a,r,l,u,g,A,z){var $=n.nodeType===9?n:n.ownerDocument;try{var ue=$.startViewTransition({update:function(){var Q=$.defaultView,oe=Q.navigation&&Q.navigation.transition,Pe=$.fonts.status;r();var Qe=[];if(Pe==="loaded"&&(jy($),$.fonts.status==="loading"&&Qe.push($.fonts.ready)),Pe=Qe.length,e!==null)for(var pt=e.suspenseyImages,J=0,G=0;G<pt.length;G++){var ie=pt[G];if(!ie.complete){var Se=ie.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<Q.innerHeight&&Se.left<Q.innerWidth){if(J+=G_(ie),J>zc){Qe.length=Pe;break}ie=new Promise(Zy.bind(ie)),Qe.push(ie)}}}if(0<Qe.length)return Q=Promise.race([Promise.all(Qe),new Promise(function(je){return setTimeout(je,500)})]).then(l,l),(oe?Promise.allSettled([oe.finished,Q]):Q).then(u,u);if(l(),oe)return oe.finished.then(u,u);u()},types:a});$.__reactViewTransition=ue;var ye=[];return ue.ready.then(function(){for(var Q=$.documentElement.getAnimations({subtree:!0}),oe=0;oe<Q.length;oe++){var Pe=Q[oe],Qe=Pe.effect,pt=Qe.pseudoElement;if(pt!=null&&pt.startsWith("::view-transition")){ye.push(Pe),Pe=Qe.getKeyframes();for(var J=pt=void 0,G=!0,ie=0;ie<Pe.length;ie++){var Se=Pe[ie],je=Se.width;if(pt===void 0)pt=je;else if(pt!==je){G=!1;break}if(je=Se.height,J===void 0)J=je;else if(J!==je){G=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}G&&pt!==void 0&&J!==void 0&&(Qe.setKeyframes(Pe),G=getComputedStyle(Qe.target,Qe.pseudoElement),G.width!==pt||G.height!==J)&&(G=Pe[0],G.width=pt,G.height=J,G=Pe[Pe.length-1],G.width=pt,G.height=J,Qe.setKeyframes(Pe))}}g()},function(Q){$.__reactViewTransition===ue&&($.__reactViewTransition=null);try{if(typeof Q=="object"&&Q!==null)switch(Q.name){case"InvalidStateError":(Q.message==="View transition was skipped because document visibility state is hidden."||Q.message==="Skipping view transition because document visibility state has become hidden."||Q.message==="Skipping view transition because viewport size changed."||Q.message==="Transition was aborted because of invalid state")&&(Q=null)}Q!==null&&z(Q)}finally{r(),l(),g()}}),ue.finished.finally(function(){for(var Q=0;Q<ye.length;Q++)ye[Q].cancel();$.__reactViewTransition===ue&&($.__reactViewTransition=null),A()}),ue}catch{return r(),l(),g(),null}}function Br(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Br.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Br.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[l])}return r},Br.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function y_(e){return{name:e,group:new Br("group",e),imagePair:new Br("image-pair",e),old:new Br("old",e),new:new Br("new",e)}}function si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(e,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(E_(u,e,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(z){g.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(l=g.removeEventListener.bind(g,e,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ds(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),v(this._fragmentFiber.child,!1,Qy,e,A,r)}this._eventListeners=u}};function Qy(e,n,a,r){return y(e).addEventListener(n,a,r),!1}si.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=E_(r,e,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var u=l.cleanup;l=Ds(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,Jy,e,a,l),r.splice(n,1),u!==null&&u()}};function Jy(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Ds(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function M_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function E_(e,n,a,r){if(e.length===0)return-1;r=M_(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&M_(u.optionsOrUseCapture)===r)return l}return-1}si.prototype.dispatchEvent=function(e){var n=x(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},si.prototype.focus=function(e){v(this._fragmentFiber.child,!0,b_,e,void 0,void 0)};function b_(e,n){return e.tag===6?!1:(e=y(e),uM(e,n))}si.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,Vd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!b_(n[a],e);a--);};function Vd(e,n){return n.push(e),!1}si.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=y(e),e=jo(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,$y,e,void 0,void 0))};function $y(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,eM,e,void 0,void 0)};function eM(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}si.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,tM,e,void 0,void 0);for(var a=n=0;a<Ni.length;a++){var r=Ni[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ni[n++]=r}Ni.length=n}};function tM(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Ni=[],Xd=!1;function nM(e,n,a){Ni.push({fragmentInstance:e,observer:n,instance:a}),Xd||(Xd=!0,fM(function(){Xd=!1;var r=Ni;Ni=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}si.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,iM,e,void 0,void 0),e};function iM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}si.prototype.getRootNode=function(e){var n=x(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},si.prototype.compareDocumentPosition=function(e){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Vd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var u=M(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(e),A=l.compareDocumentPosition(e),z=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&l===e||z||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||aM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function aM(e,n,a,r,l){var u=rt(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=x(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=O(a,u,L),n===null?n=!1:(v(n,!0,W,u,a),u=S,S=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=O(r,u,L),n===null?n=!1:(v(n,!0,C,u,r),u=S,P=S=null,n=u!==null)),n):!1}function T_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Vd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),T_(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),T_(l,a)):y(l).scrollIntoView(e),r+=a?-1:1}};function rM(e,n){return e=y(e),A_(e,n),!1}function A_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function R_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.addEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var g=0,A=0;A<Ni.length;A++){var z=Ni[A];(z.fragmentInstance!==n||z.observer!==u||z.instance!==e)&&(Ni[g++]=z)}Ni.length=g,u.observe(e)}),A_(e,n))}function sM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.removeEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?nM(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function kd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kd(a),Ke(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function oM(e,n,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function lM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function C_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function Wd(e){return e.data==="$?"||e.data==="$~"}function qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yd=null;function w_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function N_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function uM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function fM(e){g_(function(){g_(function(n){return e(n)})})}function D_(e,n,a){switch(n=jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function U_(e,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&qt(e,n,r,null,Hy,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ki&&(e.onclick=null),Ke(e)}function jd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ke(e)}var Si=new Map,L_=new Set;function Zo(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ba=Ce.d;Ce.d={f:dM,r:hM,D:pM,C:mM,L:gM,m:_M,X:xM,S:vM,M:SM};function dM(){var e=ba.f(),n=Cc();return e||n}function hM(e){var n=ft(e);n!==null&&n.tag===5&&n.type==="form"?Pg(n):ba.r(e)}var Us=typeof document>"u"?null:document;function O_(e,n,a){var r=Us;if(r&&typeof n=="string"&&n){var l=di(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),L_.has(l)||(L_.add(l),e={rel:e,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",e),vt(n),r.head.appendChild(n)))}}function pM(e){ba.D(e),O_("dns-prefetch",e,null)}function mM(e,n){ba.C(e,n),O_("preconnect",e,n)}function gM(e,n,a){ba.L(e,n,a);var r=Us;if(r&&e&&n){var l='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+di(a.imageSizes)+'"]')):l+='[href="'+di(e)+'"]';var u=l;switch(n){case"style":u=Ls(e);break;case"script":u=Os(e)}if(!(Si.has(u)||(e=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(u,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Ko(u))||n==="script"&&r.querySelector(Qo(u))))){var g=r.createElement("link");Nn(g,"link",e),n==="style"&&(g[Ze]=!0,g.onload=g.onerror=function(){jt(g)}),vt(g),r.head.appendChild(g)}}}function _M(e,n){ba.m(e,n);var a=Us;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Os(e)}if(!Si.has(u)&&(e=I({rel:"modulepreload",href:e},n),Si.set(u,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qo(u)))return}r=a.createElement("link"),Nn(r,"link",e),vt(r),a.head.appendChild(r)}}}function vM(e,n,a){ba.S(e,n,a);var r=Us;if(r&&e){var l=Mt(r).hoistableStyles,u=Ls(e);n=n||"default";var g=l.get(u);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(Ko(u)))A.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(u))&&Zd(e,a);var z=g=r.createElement("link");vt(z),Nn(z,"link",e),z._p=new Promise(function($,ue){z.onload=$,z.onerror=ue}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Pc(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},l.set(u,g)}}}function xM(e,n){ba.X(e,n);var a=Us;if(a&&e){var r=Mt(a).hoistableScripts,l=Os(e),u=r.get(l);u||(u=a.querySelector(Qo(l)),u||(e=I({src:e,async:!0},n),(n=Si.get(l))&&Kd(e,n),u=a.createElement("script"),vt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function SM(e,n){ba.M(e,n);var a=Us;if(a&&e){var r=Mt(a).hoistableScripts,l=Os(e),u=r.get(l);u||(u=a.querySelector(Qo(l)),u||(e=I({src:e,async:!0,type:"module"},n),(n=Si.get(l))&&Kd(e,n),u=a.createElement("script"),vt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function P_(e,n,a,r){var l=(l=Ot.current)?Zo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ls(a.href),n=Mt(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ls(a.href);var u=Mt(l).hoistableStyles,g=u.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,g),(u=l.querySelector(Ko(e)))?u._p||(g.instance=u,g.state.loading=5):(u=Si.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,u)),yM(l,e,u,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Os(a),n=Mt(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ls(e){return'href="'+di(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function I_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function yM(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ze]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Ze]=!0,n.onload=n.onerror=jt.bind(null,n),Nn(n,"link",a),vt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Os(e){return'[src="'+di(e)+'"]'}function Qo(e){return"script[async]"+e}function z_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+di(a.href)+'"]');if(r)return n.instance=r,vt(r),r;var l=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),Nn(r,"style",l),Pc(r,a.precedence,e),n.instance=r;case"stylesheet":l=Ls(a.href);var u=e.querySelector(Ko(l));if(u)return n.state.loading|=4,n.instance=u,vt(u),u;r=I_(a),(l=Si.get(l))&&Zd(r,l),u=(e.ownerDocument||e).createElement("link"),vt(u);var g=u;return g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),Nn(u,"link",r),n.state.loading|=4,Pc(u,a.precedence,e),n.instance=u;case"script":return u=Os(a.src),(l=e.querySelector(Qo(u)))?(n.instance=l,vt(l),l):(r=a,(l=Si.get(u))&&(r=I({},a),Kd(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),vt(l),Nn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Pc(r,a.precedence,e));return n.instance}function Pc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)u=A;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ic=null;function B_(e,n,a){if(Ic===null){var r=new Map,l=Ic=new Map;l.set(a,r)}else l=Ic,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Oe]||u[T]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(n)||"";g=e+g;var A=r.get(g);A?A.push(u):r.set(g,[u])}}return r}function Qd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function MM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function H_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function G_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function V_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=G_(n),e.suspenseyImages.push(n)),e=TM.bind(e),n.decode().then(e,e))}function EM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ls(r.href),u=n.querySelector(Ko(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,vt(u);return}u=n.ownerDocument||n,r=I_(r),(l=Si.get(l))&&Zd(r,l),u=u.createElement("link"),vt(u);var g=u;g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),Nn(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zc=0;function bM(e,n){return e.stylesheets&&e.count===0&&Fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&zc===0&&(zc=62500*Vy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>zc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function X_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Fc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Jo(){this.count--,X_(this)}function TM(){this.imgCount--,X_(this)}var Bc=null;function Fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,n.forEach(AM,e),Bc=null,Jo.call(e))}function AM(e,n){if(!(n.state.loading&4)){var a=Bc.get(e);if(a)var r=a.get(null);else{a=new Map,Bc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var g=l[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),u=a.get(g)||r,u===r&&a.set(null,l),a.set(g,l),this.count++,r=Jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Ps={$$typeof:ee,Provider:null,Consumer:null,_currentValue:Vt,_currentValue2:Vt,_threadCount:0};function RM(e,n,a,r,l,u,g,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.hiddenUpdates=Jr(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function k_(e,n,a,r,l,u,g,A,z,$,ue,ye){return e=new RM(e,n,a,g,z,$,ue,ye,A),n=1,u===!0&&(n|=24),u=kn(3,null,null,n),e.current=u,u.stateNode=e,n=df(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},gf(u),e}function W_(e){return e?(e=os,e):os}function q_(e,n,a,r,l,u){l=W_(l),r.context===null?r.context=l:r.pendingContext=l,r=Wa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=qa(e,r,n),a!==null&&(jn(a,e,n),wo(a,e,n))}function Y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jd(e,n){Y_(e,n),(e=e.alternate)&&Y_(e,n)}function j_(e){if(e.tag===13||e.tag===31){var n=yr(e,67108864);n!==null&&jn(n,e,67108864),Jd(e,67108864)}}function Z_(e){if(e.tag===13||e.tag===31){var n=ri();n=fo(n);var a=yr(e,n);a!==null&&jn(a,e,n),Jd(e,n)}}var Is=!0;function CM(e,n,a,r){var l=ve.T;ve.T=null;var u=Ce.p;try{Ce.p=2,$d(e,n,a,r)}finally{Ce.p=u,ve.T=l}}function wM(e,n,a,r){var l=ve.T;ve.T=null;var u=Ce.p;try{Ce.p=8,$d(e,n,a,r)}finally{Ce.p=u,ve.T=l}}function $d(e,n,a,r){if(Is){var l=eh(r);if(l===null)Od(e,n,r,Hc,a),Q_(e,r);else if(DM(l,e,n,a,r))r.stopPropagation();else if(Q_(e,r),n&4&&-1<NM.indexOf(e)){for(;l!==null;){var u=ft(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=ua(u.pendingLanes);if(g!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var z=1<<31-ut(g);A.entanglements[1]|=z,g&=~z}ea(u),(zt&6)===0&&(Tc=ke()+500,Wo(0))}}break;case 31:case 13:A=yr(u,2),A!==null&&jn(A,u,2),Cc(),Jd(u,2)}if(u=eh(r),u===null&&Od(e,n,r,Hc,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else Od(e,n,r,null,a)}}function eh(e){return e=Bu(e),th(e)}var Hc=null;function th(e){if(Hc=null,e=rt(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hc=e,null}function K_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case lt:return 2;case q:return 8;case we:case Me:return 32;case Le:return 268435456;default:return 32}default:return 32}}var nh=!1,ar=null,rr=null,sr=null,$o=new Map,el=new Map,or=[],NM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q_(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function tl(e,n,a,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=ft(n),n!==null&&j_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function DM(e,n,a,r,l){switch(n){case"focusin":return ar=tl(ar,e,n,a,r,l),!0;case"dragenter":return rr=tl(rr,e,n,a,r,l),!0;case"mouseover":return sr=tl(sr,e,n,a,r,l),!0;case"pointerover":var u=l.pointerId;return $o.set(u,tl($o.get(u)||null,e,n,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,el.set(u,tl(el.get(u)||null,e,n,a,r,l)),!0}return!1}function J_(e){var n=rt(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Al(e.priority,function(){Z_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Al(e.priority,function(){Z_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);zu=r,a.target.dispatchEvent(r),zu=null}else return n=ft(a),n!==null&&j_(n),e.blockedOn=a,!1;n.shift()}return!0}function $_(e,n,a){Gc(e)&&a.delete(n)}function UM(){nh=!1,ar!==null&&Gc(ar)&&(ar=null),rr!==null&&Gc(rr)&&(rr=null),sr!==null&&Gc(sr)&&(sr=null),$o.forEach($_),el.forEach($_)}function Vc(e,n){e.blockedOn===n&&(e.blockedOn=null,nh||(nh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,UM)))}var Xc=null;function ev(e){Xc!==e&&(Xc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xc===e&&(Xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(th(r||a)===null)continue;break}var u=ft(a);u!==null&&(e.splice(n,3),n-=3,zf(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function zs(e){function n(z){return Vc(z,e)}ar!==null&&Vc(ar,e),rr!==null&&Vc(rr,e),sr!==null&&Vc(sr,e),$o.forEach(n),el.forEach(n);for(var a=0;a<or.length;a++){var r=or[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<or.length&&(a=or[0],a.blockedOn===null);)J_(a),a.blockedOn===null&&or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],g=l[H]||null;if(typeof u=="function")g||ev(a);else if(g){var A=null;if(u&&u.hasAttribute("formAction")){if(l=u,g=u[H]||null)A=g.formAction;else if(th(l)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),ev(a)}}}function tv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ih(e){this._internalRoot=e}kc.prototype.render=ih.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ri();q_(a,r,e,n,null,null)},kc.prototype.unmount=ih.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;q_(e.current,2,null,e,null,null),Cc(),n[fe]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<or.length&&n!==0&&n<or[a].priority;a++);or.splice(a,0,e),a===0&&J_(e)}};var nv=t.version;if(nv!=="19.3.1")throw Error(s(527,nv,"19.3.1"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var LM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ve,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{Je=Wc.inject(LM),Ve=Wc}catch{}}return il.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",l=Wg,u=qg,g=Yg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=k_(e,1,!1,null,null,a,r,null,l,u,g,tv),e[fe]=n.current,Ld(e),new ih(n)},il.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,l="",u=Wg,g=qg,A=Yg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=k_(e,1,!0,n,a??null,r,l,z,u,g,A,tv),n.context=W_(null),a=n.current,r=ri(),r=fo(r),l=Wa(r),l.callback=null,qa(a,l,r),a=r,n.current.lanes=a,Vi(n,a),ea(n),e[fe]=n.current,Ld(e),new kc(n)},il.version="19.3.1",il}var dv;function XM(){if(dv)return sh.exports;dv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),sh.exports=VM(),sh.exports}var kM=XM();const WM=gx(kM);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="186",qM=0,hv=1,YM=2,gu=1,jM=2,dl=3,qr=0,Kn=1,aa=2,Na=0,pl=1,pv=2,mv=3,gv=4,ZM=5,Js=100,KM=101,QM=102,JM=103,$M=104,eE=200,tE=201,nE=202,iE=203,vx=204,xx=205,aE=206,rE=207,sE=208,oE=209,lE=210,cE=211,uE=212,fE=213,dE=214,qh=0,Yh=1,jh=2,ml=3,Zh=4,Kh=5,Qh=6,Jh=7,Sx=0,hE=1,pE=2,oa=0,yx=1,Mx=2,Ex=3,bx=4,Tx=5,Ax=6,Rx=7,Cx=300,Yr=301,no=302,uh=303,fh=304,Cu=306,$h=1e3,Pi=1001,ep=1002,Un=1003,mE=1004,qc=1005,In=1006,dh=1007,kr=1008,bi=1009,wx=1010,Nx=1011,gl=1012,zp=1013,la=1014,ra=1015,ca=1016,Bp=1017,Fp=1018,_l=1020,Dx=35902,Ux=35899,Lx=1021,Ox=1022,Ii=1023,La=1026,Wr=1027,Px=1028,Hp=1029,jr=1030,Gp=1031,Vp=1033,_u=33776,vu=33777,xu=33778,Su=33779,tp=35840,np=35841,ip=35842,ap=35843,rp=36196,sp=37492,op=37496,lp=37488,cp=37489,Mu=37490,up=37491,fp=37808,dp=37809,hp=37810,pp=37811,mp=37812,gp=37813,_p=37814,vp=37815,xp=37816,Sp=37817,yp=37818,Mp=37819,Ep=37820,bp=37821,Tp=36492,Ap=36494,Rp=36495,Cp=36283,wp=36284,Eu=36285,Np=36286,gE=3200,_v=0,_E=1,mr="",Mi="srgb",bu="srgb-linear",Tu="linear",Yt="srgb",hh=7680,vE=519,xE=512,SE=513,yE=514,Xp=515,ME=516,EE=517,kp=518,bE=519,TE=35044,vv="300 es",sa=2e3,Au=2001;function AE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function vl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function RE(){const o=vl("canvas");return o.style.display="block",o}const xv={};function Sv(...o){const t="THREE."+o.shift();console.log(t,...o)}function Ix(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function st(...o){o=Ix(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Pt(...o){o=Ix(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function eo(...o){const t=o.join(" ");t in xv||(xv[t]=!0,st(...o))}function CE(o,t,i){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const wE={[qh]:Yh,[jh]:Qh,[Zh]:Jh,[ml]:Kh,[Yh]:qh,[Qh]:jh,[Jh]:Zh,[Kh]:ml};class Kr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const c=s[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,Dp=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Dt(o,t,i){return Math.max(t,Math.min(i,o))}function NE(o,t){return(o%t+t)%t}function mh(o,t,i){return(1-i)*o+i*t}function al(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zp=class Zp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*c+t.x,this.y=f*c+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let Ft=Zp;class ro{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,f,d,h){let m=s[c+0],p=s[c+1],_=s[c+2],v=s[c+3],x=f[d+0],M=f[d+1],R=f[d+2],D=f[d+3];if(v!==D||m!==x||p!==M||_!==R){let y=m*x+p*M+_*R+v*D;y<0&&(x=-x,M=-M,R=-R,D=-D,y=-y);let S=1-h;if(y<.9995){const P=Math.acos(y),W=Math.sin(P);S=Math.sin(S*P)/W,h=Math.sin(h*P)/W,m=m*S+x*h,p=p*S+M*h,_=_*S+R*h,v=v*S+D*h}else{m=m*S+x*h,p=p*S+M*h,_=_*S+R*h,v=v*S+D*h;const P=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=P,p*=P,_*=P,v*=P}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,c,f,d){const h=s[c],m=s[c+1],p=s[c+2],_=s[c+3],v=f[d],x=f[d+1],M=f[d+2],R=f[d+3];return t[i]=h*R+_*v+m*M-p*x,t[i+1]=m*R+_*x+p*v-h*M,t[i+2]=p*R+_*M+h*x-m*v,t[i+3]=_*R-h*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(c/2),v=h(f/2),x=m(s/2),M=m(c/2),R=m(f/2);switch(d){case"XYZ":this._x=x*_*v+p*M*R,this._y=p*M*v-x*_*R,this._z=p*_*R+x*M*v,this._w=p*_*v-x*M*R;break;case"YXZ":this._x=x*_*v+p*M*R,this._y=p*M*v-x*_*R,this._z=p*_*R-x*M*v,this._w=p*_*v+x*M*R;break;case"ZXY":this._x=x*_*v-p*M*R,this._y=p*M*v+x*_*R,this._z=p*_*R+x*M*v,this._w=p*_*v-x*M*R;break;case"ZYX":this._x=x*_*v-p*M*R,this._y=p*M*v+x*_*R,this._z=p*_*R-x*M*v,this._w=p*_*v+x*M*R;break;case"YZX":this._x=x*_*v+p*M*R,this._y=p*M*v+x*_*R,this._z=p*_*R-x*M*v,this._w=p*_*v-x*M*R;break;case"XZY":this._x=x*_*v-p*M*R,this._y=p*M*v-x*_*R,this._z=p*_*R+x*M*v,this._w=p*_*v+x*M*R;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],f=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=s+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(f-p)*M,this._z=(d-c)*M}else if(s>h&&s>v){const M=2*Math.sqrt(1+s-h-v);this._w=(_-m)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-s-v);this._w=(f-p)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-h);this._w=(d-c)/M,this._x=(f+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,f=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+c*p-f*m,this._y=c*_+d*m+f*h-s*p,this._z=f*_+d*p+s*m-c*h,this._w=d*_-s*h-c*m-f*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,c=-c,f=-f,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kp=class Kp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(yv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(yv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,f=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*c-h*s),_=2*(h*i-f*c),v=2*(f*s-d*i);return this.x=i+m*p+d*v-h*_,this.y=s+m*_+h*p-f*v,this.z=c+m*v+f*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,f=t.z,d=i.x,h=i.y,m=i.z;return this.x=c*m-f*h,this.y=f*d-s*m,this.z=s*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return gh.copy(this).projectOnVector(t),this.sub(gh)}reflect(t){return this.sub(gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kp.prototype.isVector3=!0;let pe=Kp;const gh=new pe,yv=new ro,Qp=class Qp{constructor(t,i,s,c,f,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,m,p)}set(t,i,s,c,f,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=c,_[2]=h,_[3]=i,_[4]=f,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],x=s[2],M=s[5],R=s[8],D=c[0],y=c[3],S=c[6],P=c[1],W=c[4],C=c[7],L=c[2],O=c[5],I=c[8];return f[0]=d*D+h*P+m*L,f[3]=d*y+h*W+m*O,f[6]=d*S+h*C+m*I,f[1]=p*D+_*P+v*L,f[4]=p*y+_*W+v*O,f[7]=p*S+_*C+v*I,f[2]=x*D+M*P+R*L,f[5]=x*y+M*W+R*O,f[8]=x*S+M*C+R*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*f*_+s*h*m+c*f*p-c*d*m}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*d-h*p,x=h*m-_*f,M=p*f-d*m,R=i*v+s*x+c*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/R;return t[0]=v*D,t[1]=(c*p-_*s)*D,t[2]=(h*s-c*d)*D,t[3]=x*D,t[4]=(_*i-c*m)*D,t[5]=(c*f-h*i)*D,t[6]=M*D,t[7]=(s*m-p*i)*D,t[8]=(d*i-s*f)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-c*p,c*m,-c*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_h.makeScale(t,i)),this}rotate(t){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qp.prototype.isMatrix3=!0;let dt=Qp;const _h=new dt,Mv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const o={enabled:!0,workingColorSpace:bu,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Yt&&(c.r=Da(c.r),c.g=Da(c.g),c.b=Da(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Yt&&(c.r=to(c.r),c.g=to(c.g),c.b=to(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===mr?Tu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[bu]:{primaries:t,whitePoint:s,transfer:Tu,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Yt,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Nt=DE();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function to(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class UE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Bs===void 0&&(Bs=vl("canvas")),Bs.width=t.width,Bs.height=t.height;const c=Bs.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),s=Bs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=vl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Da(f[d]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LE=0;class Wp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=yl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(vh(c[d].image)):f.push(vh(c[d]))}else f=vh(c);s.url=f}return i||(t.images[this.uuid]=s),s}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?UE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let OE=0;const xh=new pe;class zn extends Kr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Pi,c=Pi,f=In,d=kr,h=Ii,m=bi,p=zn.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=yl(),this.name="",this.source=new Wp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case ep:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case ep:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Cx;zn.DEFAULT_ANISOTROPY=1;const Jp=class Jp{constructor(t=0,i=0,s=0,c=1){this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,f;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],M=m[5],R=m[9],D=m[2],y=m[6],S=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-D)<.01&&Math.abs(R-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+D)<.1&&Math.abs(R+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const W=(p+1)/2,C=(M+1)/2,L=(S+1)/2,O=(_+x)/4,I=(v+D)/4,b=(R+y)/4;return W>C&&W>L?W<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(W),c=O/s,f=I/s):C>L?C<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(C),s=O/c,f=b/c):L<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(L),s=I/f,c=b/f),this.set(s,c,f,i),this}let P=Math.sqrt((y-R)*(y-R)+(v-D)*(v-D)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(y-R)/P,this.y=(v-D)/P,this.z=(x-_)/P,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this.w=Dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this.w=Dt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jp.prototype.isVector4=!0;let cn=Jp;class PE extends Kr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:s.depth},f=new zn(c),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new Wp(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends PE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class zx extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IE extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ru=class Ru{constructor(t,i,s,c,f,d,h,m,p,_,v,x,M,R,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,m,p,_,v,x,M,R,D,y)}set(t,i,s,c,f,d,h,m,p,_,v,x,M,R,D,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=c,S[1]=f,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=x,S[3]=M,S[7]=R,S[11]=D,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,c=1/Fs.setFromMatrixColumn(t,0).length(),f=1/Fs.setFromMatrixColumn(t,1).length(),d=1/Fs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,f=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(c),p=Math.sin(c),_=Math.cos(f),v=Math.sin(f);if(t.order==="XYZ"){const x=d*_,M=d*v,R=h*_,D=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+R*p,i[5]=x-D*p,i[9]=-h*m,i[2]=D-x*p,i[6]=R+M*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*_,M=m*v,R=p*_,D=p*v;i[0]=x+D*h,i[4]=R*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*_,i[9]=-h,i[2]=M*h-R,i[6]=D+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*_,M=m*v,R=p*_,D=p*v;i[0]=x-D*h,i[4]=-d*v,i[8]=R+M*h,i[1]=M+R*h,i[5]=d*_,i[9]=D-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*_,M=d*v,R=h*_,D=h*v;i[0]=m*_,i[4]=R*p-M,i[8]=x*p+D,i[1]=m*v,i[5]=D*p+x,i[9]=M*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,M=d*p,R=h*m,D=h*p;i[0]=m*_,i[4]=D-x*v,i[8]=R*v+M,i[1]=v,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*v+R,i[10]=x-D*v}else if(t.order==="XZY"){const x=d*m,M=d*p,R=h*m,D=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+D,i[5]=d*_,i[9]=M*v-R,i[2]=R*v-M,i[6]=h*_,i[10]=D*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zE,t,BE)}lookAt(t,i,s){const c=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),cr.crossVectors(s,oi),cr.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),cr.crossVectors(s,oi)),cr.normalize(),Yc.crossVectors(oi,cr),c[0]=cr.x,c[4]=Yc.x,c[8]=oi.x,c[1]=cr.y,c[5]=Yc.y,c[9]=oi.y,c[2]=cr.z,c[6]=Yc.z,c[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],x=s[9],M=s[13],R=s[2],D=s[6],y=s[10],S=s[14],P=s[3],W=s[7],C=s[11],L=s[15],O=c[0],I=c[4],b=c[8],N=c[12],F=c[1],V=c[5],Z=c[9],te=c[13],j=c[2],ee=c[6],X=c[10],k=c[14],re=c[3],ce=c[7],he=c[11],xe=c[15];return f[0]=d*O+h*F+m*j+p*re,f[4]=d*I+h*V+m*ee+p*ce,f[8]=d*b+h*Z+m*X+p*he,f[12]=d*N+h*te+m*k+p*xe,f[1]=_*O+v*F+x*j+M*re,f[5]=_*I+v*V+x*ee+M*ce,f[9]=_*b+v*Z+x*X+M*he,f[13]=_*N+v*te+x*k+M*xe,f[2]=R*O+D*F+y*j+S*re,f[6]=R*I+D*V+y*ee+S*ce,f[10]=R*b+D*Z+y*X+S*he,f[14]=R*N+D*te+y*k+S*xe,f[3]=P*O+W*F+C*j+L*re,f[7]=P*I+W*V+C*ee+L*ce,f[11]=P*b+W*Z+C*X+L*he,f[15]=P*N+W*te+C*k+L*xe,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],M=t[14],R=t[3],D=t[7],y=t[11],S=t[15],P=m*M-p*x,W=h*M-p*v,C=h*x-m*v,L=d*M-p*_,O=d*x-m*_,I=d*v-h*_;return i*(D*P-y*W+S*C)-s*(R*P-y*L+S*O)+c*(R*W-D*L+S*I)-f*(R*C-D*O+y*I)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[1],d=t[5],h=t[9],m=t[2],p=t[6],_=t[10];return i*(d*_-h*p)-s*(f*_-h*m)+c*(f*p-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],M=t[11],R=t[12],D=t[13],y=t[14],S=t[15],P=i*h-s*d,W=i*m-c*d,C=i*p-f*d,L=s*m-c*h,O=s*p-f*h,I=c*p-f*m,b=_*D-v*R,N=_*y-x*R,F=_*S-M*R,V=v*y-x*D,Z=v*S-M*D,te=x*S-M*y,j=P*te-W*Z+C*V+L*F-O*N+I*b;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/j;return t[0]=(h*te-m*Z+p*V)*ee,t[1]=(c*Z-s*te-f*V)*ee,t[2]=(D*I-y*O+S*L)*ee,t[3]=(x*O-v*I-M*L)*ee,t[4]=(m*F-d*te-p*N)*ee,t[5]=(i*te-c*F+f*N)*ee,t[6]=(y*C-R*I-S*W)*ee,t[7]=(_*I-x*C+M*W)*ee,t[8]=(d*Z-h*F+p*b)*ee,t[9]=(s*F-i*Z-f*b)*ee,t[10]=(R*O-D*C+S*P)*ee,t[11]=(v*C-_*O-M*P)*ee,t[12]=(h*N-d*V-m*b)*ee,t[13]=(i*V-s*N+c*b)*ee,t[14]=(D*W-R*L-y*P)*ee,t[15]=(_*L-v*W+x*P)*ee,this}scale(t){const i=this.elements,s=t.x,c=t.y,f=t.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,d=t.x,h=t.y,m=t.z,p=f*d,_=f*h;return this.set(p*d+s,p*h-c*m,p*m+c*h,0,p*h+c*m,_*h+s,_*m-c*d,0,p*m-c*h,_*m+c*d,f*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,f,d){return this.set(1,s,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,p=f+f,_=d+d,v=h+h,x=f*p,M=f*_,R=f*v,D=d*_,y=d*v,S=h*v,P=m*p,W=m*_,C=m*v,L=s.x,O=s.y,I=s.z;return c[0]=(1-(D+S))*L,c[1]=(M+C)*L,c[2]=(R-W)*L,c[3]=0,c[4]=(M-C)*O,c[5]=(1-(x+S))*O,c[6]=(y+P)*O,c[7]=0,c[8]=(R+W)*I,c[9]=(y-P)*I,c[10]=(1-(x+D))*I,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Fs.set(c[0],c[1],c[2]).length();const h=Fs.set(c[4],c[5],c[6]).length(),m=Fs.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Di.copy(this);const p=1/d,_=1/h,v=1/m;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,i.setFromRotationMatrix(Di),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,c,f,d,h=sa,m=!1){const p=this.elements,_=2*f/(i-t),v=2*f/(s-c),x=(i+t)/(i-t),M=(s+c)/(s-c);let R,D;if(m)R=f/(d-f),D=d*f/(d-f);else if(h===sa)R=-(d+f)/(d-f),D=-2*d*f/(d-f);else if(h===Au)R=-d/(d-f),D=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,c,f,d,h=sa,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-c),x=-(i+t)/(i-t),M=-(s+c)/(s-c);let R,D;if(m)R=1/(d-f),D=d/(d-f);else if(h===sa)R=-2/(d-f),D=-(d+f)/(d-f);else if(h===Au)R=-1/(d-f),D=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=R,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Ru.prototype.isMatrix4=!0;let _n=Ru;const Fs=new pe,Di=new _n,zE=new pe(0,0,0),BE=new pe(1,1,1),cr=new pe,Yc=new pe,oi=new pe,bv=new _n,Tv=new ro;class Zr{constructor(t=0,i=0,s=0,c=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],m=c[1],p=c[5],_=c[9],v=c[2],x=c[6],M=c[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return bv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class Bx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FE=0;const Av=new pe,Hs=new ro,Ta=new _n,jc=new pe,rl=new pe,HE=new pe,GE=new ro,Rv=new pe(1,0,0),Cv=new pe(0,1,0),wv=new pe(0,0,1),Nv={type:"added"},VE={type:"removed"},Gs={type:"childadded",child:null},Sh={type:"childremoved",child:null};class ci extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new pe,i=new Zr,s=new ro,c=new pe(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new _n},normalMatrix:{value:new dt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Rv,t)}rotateY(t){return this.rotateOnAxis(Cv,t)}rotateZ(t){return this.rotateOnAxis(wv,t)}translateOnAxis(t,i){return Av.copy(t).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Rv,t)}translateY(t){return this.translateOnAxis(Cv,t)}translateZ(t){return this.translateOnAxis(wv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?jc.copy(t):jc.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(rl,jc,this.up):Ta.lookAt(jc,rl,this.up),this.quaternion.setFromRotationMatrix(Ta),c&&(Ta.extractRotation(c.matrixWorld),Hs.setFromRotationMatrix(Ta),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nv),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VE),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nv),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,t,HE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,GE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*c,f[13]+=s-f[1]*i-f[5]*s-f[9]*c,f[14]+=c-f[2]*i-f[6]*s-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];f(t.shapes,v)}else f(t.shapes,m)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(t.materials,this.material[m]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];c.animations.push(f(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),v=d(t.shapes),x=d(t.skeletons),M=d(t.animations),R=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),R.length>0&&(s.nodes=R)}return s.object=c,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ci.DEFAULT_UP=new pe(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zc extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const D of t.hand.values()){const y=i.getJointPose(D,s),S=this._getHandJoint(p,D);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,R=.005;p.inputState.pinching&&x>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return h!==null&&(h.visible=c!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Zc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Mh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,c=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,c),this}setHSL(t,i,s,c=Nt.workingColorSpace){if(t=NE(t,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Mh(d,f,t+1/3),this.g=Mh(d,f,t),this.b=Mh(d,f,t-1/3)}return Nt.colorSpaceToWorking(this,c),this}setStyle(t,i=Mi){function s(f){f!==void 0&&parseFloat(f)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=Fx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Nt.workingToColorSpace(Pn.copy(this),t),Math.round(Dt(Pn.r*255,0,255))*65536+Math.round(Dt(Pn.g*255,0,255))*256+Math.round(Dt(Pn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=_<=.5?v/(d+h):v/(2-d-h),d){case s:m=(c-f)/v+(c<f?6:0);break;case c:m=(f-s)/v+2;break;case f:m=(s-c)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Mi){Nt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,c=Pn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Kc);const s=mh(ur.h,Kc.h,i),c=mh(ur.s,Kc.s,i),f=mh(ur.l,Kc.l,i);return this.setHSL(s,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Bt;Bt.NAMES=Fx;class kE extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new pe,Aa=new pe,Eh=new pe,Ra=new pe,Vs=new pe,Xs=new pe,Dv=new pe,bh=new pe,Th=new pe,Ah=new pe,Rh=new cn,Ch=new cn,wh=new cn;class Oi{constructor(t=new pe,i=new pe,s=new pe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),Ui.subVectors(t,i),c.cross(Ui);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,s,c,f){Ui.subVectors(c,i),Aa.subVectors(s,i),Eh.subVectors(t,i);const d=Ui.dot(Ui),h=Ui.dot(Aa),m=Ui.dot(Eh),p=Aa.dot(Aa),_=Aa.dot(Eh),v=d*p-h*h;if(v===0)return f.set(0,0,0),null;const x=1/v,M=(p*m-h*_)*x,R=(d*_-h*m)*x;return f.set(1-M-R,R,M)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,i,s,c,f,d,h,m){return this.getBarycoord(t,i,s,c,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ra.x),m.addScaledVector(d,Ra.y),m.addScaledVector(h,Ra.z),m)}static getInterpolatedAttribute(t,i,s,c,f,d){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,s),wh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Rh,f.x),d.addScaledVector(Ch,f.y),d.addScaledVector(wh,f.z),d}static isFrontFacing(t,i,s,c){return Ui.subVectors(s,i),Aa.subVectors(t,i),Ui.cross(Aa).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ui.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,f){return Oi.getInterpolation(t,this.a,this.b,this.c,i,s,c,f)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,f=this.c;let d,h;Vs.subVectors(c,s),Xs.subVectors(f,s),bh.subVectors(t,s);const m=Vs.dot(bh),p=Xs.dot(bh);if(m<=0&&p<=0)return i.copy(s);Th.subVectors(t,c);const _=Vs.dot(Th),v=Xs.dot(Th);if(_>=0&&v<=_)return i.copy(c);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Vs,d);Ah.subVectors(t,f);const M=Vs.dot(Ah),R=Xs.dot(Ah);if(R>=0&&M<=R)return i.copy(f);const D=M*p-m*R;if(D<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(s).addScaledVector(Xs,h);const y=_*R-M*v;if(y<=0&&v-_>=0&&M-R>=0)return Dv.subVectors(f,c),h=(v-_)/(v-_+(M-R)),i.copy(c).addScaledVector(Dv,h);const S=1/(y+D+x);return d=D*S,h=x*S,i.copy(s).addScaledVector(Vs,d).addScaledVector(Xs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ml{constructor(t=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Li):Li.fromBufferAttribute(f,d),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Qc.copy(s.boundingBox)),Qc.applyMatrix4(t.matrixWorld),this.union(Qc)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),Jc.subVectors(this.max,sl),ks.subVectors(t.a,sl),Ws.subVectors(t.b,sl),qs.subVectors(t.c,sl),fr.subVectors(Ws,ks),dr.subVectors(qs,Ws),Fr.subVectors(ks,qs);let i=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Fr.z,Fr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Fr.z,0,-Fr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Fr.y,Fr.x,0];return!Nh(i,ks,Ws,qs,Jc)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,ks,Ws,qs,Jc))?!1:($c.crossVectors(fr,dr),i=[$c.x,$c.y,$c.z],Nh(i,ks,Ws,qs,Jc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Li=new pe,Qc=new Ml,ks=new pe,Ws=new pe,qs=new pe,fr=new pe,dr=new pe,Fr=new pe,sl=new pe,Jc=new pe,$c=new pe,Hr=new pe;function Nh(o,t,i,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Hr.fromArray(o,f);const h=c.x*Math.abs(Hr.x)+c.y*Math.abs(Hr.y)+c.z*Math.abs(Hr.z),m=t.dot(Hr),p=i.dot(Hr),_=s.dot(Hr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const gn=new pe,eu=new Ft;let WE=0;class Bi extends Kr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=TE,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(t),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=al(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=al(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=al(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=al(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=al(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,f){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array),f=Zn(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Hx extends Bi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Gx extends Bi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ua extends Bi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const qE=new Ml,ol=new pe,Dh=new pe;class qp{constructor(t=new pe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):qE.setFromPoints(t).getCenter(s);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(ol,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(Dh)),this.expandByPoint(ol.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let YE=0;const yi=new _n,Uh=new ci,Ys=new pe,li=new Ml,ll=new Ml,Tn=new pe;class Oa extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(AE(t)?Gx:Hx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new dt().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ua(s,3))}else{const s=Math.min(t.length,i.count);for(let c=0;c<s;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];ll.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(li.min,ll.min),li.expandByPoint(Tn),Tn.addVectors(li.max,ll.max),li.expandByPoint(Tn)):(li.expandByPoint(ll.min),li.expandByPoint(ll.max))}li.getCenter(s);let c=0;for(let f=0,d=t.count;f<d;f++)Tn.fromBufferAttribute(t,f),c=Math.max(c,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Tn.fromBufferAttribute(h,p),m&&(Ys.fromBufferAttribute(t,p),Tn.add(Ys)),c=Math.max(c,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Bi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new pe,m[b]=new pe;const p=new pe,_=new pe,v=new pe,x=new Ft,M=new Ft,R=new Ft,D=new pe,y=new pe;function S(b,N,F){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,F),x.fromBufferAttribute(f,b),M.fromBufferAttribute(f,N),R.fromBufferAttribute(f,F),_.sub(p),v.sub(p),M.sub(x),R.sub(x);const V=1/(M.x*R.y-R.x*M.y);isFinite(V)&&(D.copy(_).multiplyScalar(R.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-R.x).multiplyScalar(V),h[b].add(D),h[N].add(D),h[F].add(D),m[b].add(y),m[N].add(y),m[F].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let b=0,N=P.length;b<N;++b){const F=P[b],V=F.start,Z=F.count;for(let te=V,j=V+Z;te<j;te+=3)S(t.getX(te+0),t.getX(te+1),t.getX(te+2))}const W=new pe,C=new pe,L=new pe,O=new pe;function I(b){L.fromBufferAttribute(c,b),O.copy(L);const N=h[b];W.copy(N),W.sub(L.multiplyScalar(L.dot(N))).normalize(),C.crossVectors(O,N);const V=C.dot(m[b])<0?-1:1;d.setXYZW(b,W.x,W.y,W.z,V)}for(let b=0,N=P.length;b<N;++b){const F=P[b],V=F.start,Z=F.count;for(let te=V,j=V+Z;te<j;te+=3)I(t.getX(te+0)),I(t.getX(te+1)),I(t.getX(te+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const c=new pe,f=new pe,d=new pe,h=new pe,m=new pe,p=new pe,_=new pe,v=new pe;if(t)for(let x=0,M=t.count;x<M;x+=3){const R=t.getX(x+0),D=t.getX(x+1),y=t.getX(x+2);c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),_.subVectors(d,f),v.subVectors(c,f),_.cross(v),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)c.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),_.subVectors(d,f),v.subVectors(c,f),_.cross(v),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,x=new p.constructor(m.length*_);let M=0,R=0;for(let D=0,y=m.length;D<y;D++){h.isInterleavedBufferAttribute?M=m[D]*h.data.stride+h.offset:M=m[D]*_;for(let S=0;S<_;S++)x[R++]=p[M++]}return new Bi(x,_,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oa,s=this.index.array,c=this.attributes;for(const h in c){const m=c[h],p=t(m,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let _=0,v=p.length;_<v;_++){const x=p[_],M=t(x,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const c={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(c[m]=_,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const c=t.attributes;for(const p in c){const _=c[p];this.setAttribute(p,_.clone(i))}const f=t.morphAttributes;for(const p in f){const _=[],v=f[p];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new pe,jE=new pe,ZE=new dt;class pr{constructor(t=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=Lh.subVectors(s,i).cross(jE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const c=t.delta(Lh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ZE.getNormalMatrix(t),c=this.coplanarPoint(Lh).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let KE=0;class wu extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=pl,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vx,this.blendDst=xx,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hh,this.stencilZFail=hh,this.stencilZPass=hh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new pr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ft().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new pe,Oh=new pe,tu=new pe,nu=new pe;class QE{constructor(t=new pe,i=new pe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=wa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){Oh.copy(t).add(i).multiplyScalar(.5),tu.copy(i).sub(t).normalize(),nu.copy(this.origin).sub(Oh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(tu),h=nu.dot(this.direction),m=-nu.dot(tu),p=nu.lengthSq(),_=Math.abs(1-d*d);let v,x,M,R;if(_>0)if(v=d*m-h,x=d*h-m,R=f*_,v>=0)if(x>=-R)if(x<=R){const D=1/_;v*=D,x*=D,M=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=f,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x=-f,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x<=-R?(v=Math.max(0,-(-d*f+h)),x=v>0?-f:Math.min(Math.max(-f,-m),f),M=-v*v+x*(x+2*m)+p):x<=R?(v=0,x=Math.min(Math.max(-f,-m),f),M=x*(x+2*m)+p):(v=Math.max(0,-(d*f+h)),x=v>0?f:Math.min(Math.max(-f,-m),f),M=-v*v+x*(x+2*m)+p);else x=d>0?-f:f,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),c&&c.copy(Oh).addScaledVector(tu,x),M}intersectSphere(t,i){if(t.radius<0)return null;wa.subVectors(t.center,this.origin);const s=wa.dot(this.direction),c=wa.dot(wa)-s*s,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,f,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,c=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,c=(t.min.x-x.x)*p),_>=0?(f=(t.min.y-x.y)*_,d=(t.max.y-x.y)*_):(f=(t.max.y-x.y)*_,d=(t.min.y-x.y)*_),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||h>c)||((h>s||s!==s)&&(s=h),(m<c||c!==c)&&(c=m),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,i,s,c,f){const d=this.origin,h=this.direction,m=h.x,p=h.y,_=h.z,v=t.x-d.x,x=t.y-d.y,M=t.z-d.z,R=i.x-d.x,D=i.y-d.y,y=i.z-d.z,S=s.x-d.x,P=s.y-d.y,W=s.z-d.z,C=Math.abs(m),L=Math.abs(p),O=Math.abs(_);let I,b,N,F,V,Z,te,j,ee,X,k,re;if(C>=L&&C>=O?(N=m,Z=v,ee=R,re=S,m>=0?(I=p,b=_,F=x,V=M,te=D,j=y,X=P,k=W):(I=_,b=p,F=M,V=x,te=y,j=D,X=W,k=P)):L>=O?(N=p,Z=x,ee=D,re=P,p>=0?(I=_,b=m,F=M,V=v,te=y,j=R,X=W,k=S):(I=m,b=_,F=v,V=M,te=R,j=y,X=S,k=W)):(N=_,Z=M,ee=y,re=W,_>=0?(I=m,b=p,F=v,V=x,te=R,j=D,X=S,k=P):(I=p,b=m,F=x,V=v,te=D,j=R,X=P,k=S)),N===0)return null;const ce=I/N,he=b/N,xe=1/N,Ge=F-ce*Z,qe=V-he*Z,B=te-ce*ee,me=j-he*ee,Ae=X-ce*re,K=k-he*re,de=Ae*me-K*B,Te=Ge*K-qe*Ae,De=B*qe-me*Ge;if(c){if(de<0||Te<0||De<0)return null}else if((de<0||Te<0||De<0)&&(de>0||Te>0||De>0))return null;const ve=de+Te+De;if(ve===0)return null;const Ce=xe*(de*Z+Te*ee+De*re);return(ve>0?Ce<0:Ce>0)?null:this.at(Ce/ve,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yp extends wu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Uv=new _n,Gr=new QE,iu=new qp,Lv=new pe,au=new pe,ru=new pe,su=new pe,Ph=new pe,ou=new pe,Ov=new pe,lu=new pe;class Fi extends ci{constructor(t=new Oa,i=new Yp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){ou.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const _=h[m],v=f[m];_!==0&&(Ph.fromBufferAttribute(v,t),d?ou.addScaledVector(Ph,_):ou.addScaledVector(Ph.sub(i),_))}i.add(ou)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(f),Gr.copy(t.ray).recast(t.near),!(iu.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(iu,Lv)===null||Gr.origin.distanceToSquared(Lv)>(t.far-t.near)**2))&&(Uv.copy(f).invert(),Gr.copy(t.ray).applyMatrix4(Uv),!(s.boundingBox!==null&&Gr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Gr)))}_computeIntersections(t,i,s){let c;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,_=f.attributes.uv1,v=f.attributes.normal,x=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,D=x.length;R<D;R++){const y=x[R],S=d[y.materialIndex],P=Math.max(y.start,M.start),W=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=P,L=W;C<L;C+=3){const O=h.getX(C),I=h.getX(C+1),b=h.getX(C+2);c=cu(this,S,t,s,p,_,v,O,I,b),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const R=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=R,S=D;y<S;y+=3){const P=h.getX(y),W=h.getX(y+1),C=h.getX(y+2);c=cu(this,d,t,s,p,_,v,P,W,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,D=x.length;R<D;R++){const y=x[R],S=d[y.materialIndex],P=Math.max(y.start,M.start),W=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=P,L=W;C<L;C+=3){const O=C,I=C+1,b=C+2;c=cu(this,S,t,s,p,_,v,O,I,b),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const R=Math.max(0,M.start),D=Math.min(m.count,M.start+M.count);for(let y=R,S=D;y<S;y+=3){const P=y,W=y+1,C=y+2;c=cu(this,d,t,s,p,_,v,P,W,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}}}function JE(o,t,i,s,c,f,d,h){let m;if(t.side===Kn?m=s.intersectTriangle(d,f,c,!0,h):m=s.intersectTriangle(c,f,d,t.side===qr,h),m===null)return null;lu.copy(h),lu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lu);return p<i.near||p>i.far?null:{distance:p,point:lu.clone(),object:o}}function cu(o,t,i,s,c,f,d,h,m,p){o.getVertexPosition(h,au),o.getVertexPosition(m,ru),o.getVertexPosition(p,su);const _=JE(o,t,i,s,au,ru,su,Ov);if(_){const v=new pe;Oi.getBarycoord(Ov,au,ru,su,v),c&&(_.uv=Oi.getInterpolatedAttribute(c,h,m,p,v,new Ft)),f&&(_.uv1=Oi.getInterpolatedAttribute(f,h,m,p,v,new Ft)),d&&(_.normal=Oi.getInterpolatedAttribute(d,h,m,p,v,new pe),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new pe,materialIndex:0};Oi.getNormal(au,ru,su,x.normal),_.face=x,_.barycoord=v}return _}class $E extends zn{constructor(t=null,i=1,s=1,c,f,d,h,m,p=Un,_=Un,v,x){super(null,d,h,m,p,_,c,f,v,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vr=new qp,eb=new Ft(.5,.5),uu=new pe;class Vx{constructor(t=new pr,i=new pr,s=new pr,c=new pr,f=new pr,d=new pr){this.planes=[t,i,s,c,f,d]}set(t,i,s,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],m=f[2],p=f[3],_=f[4],v=f[5],x=f[6],M=f[7],R=f[8],D=f[9],y=f[10],S=f[11],P=f[12],W=f[13],C=f[14],L=f[15];if(c[0].setComponents(p-d,M-_,S-R,L-P).normalize(),c[1].setComponents(p+d,M+_,S+R,L+P).normalize(),c[2].setComponents(p+h,M+v,S+D,L+W).normalize(),c[3].setComponents(p-h,M-v,S-D,L-W).normalize(),s)c[4].setComponents(m,x,y,C).normalize(),c[5].setComponents(p-m,M-x,S-y,L-C).normalize();else if(c[4].setComponents(p-m,M-x,S-y,L-C).normalize(),i===sa)c[5].setComponents(p+m,M+x,S+y,L+C).normalize();else if(i===Au)c[5].setComponents(m,x,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){Vr.center.set(0,0,0);const i=eb.distanceTo(t.center);return Vr.radius=.7071067811865476+i,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(uu.x=c.normal.x>0?t.max.x:t.min.x,uu.y=c.normal.y>0?t.max.y:t.min.y,uu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(uu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xx extends zn{constructor(t=[],i=Yr,s,c,f,d,h,m,p,_){super(t,i,s,c,f,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xl extends zn{constructor(t,i,s=la,c,f,d,h=Un,m=Un,p,_=La,v=1){if(_!==La&&_!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,c,f,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class tb extends xl{constructor(t,i=la,s=Yr,c,f,d=Un,h=Un,m,p=La){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,c,f,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class kx extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class El extends Oa{constructor(t=1,i=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],_=[],v=[];let x=0,M=0;R("z","y","x",-1,-1,s,i,t,d,f,0),R("z","y","x",1,-1,s,i,-t,d,f,1),R("x","z","y",1,1,t,s,i,c,d,2),R("x","z","y",1,-1,t,s,-i,c,d,3),R("x","y","z",1,-1,t,i,s,c,f,4),R("x","y","z",-1,-1,t,i,-s,c,f,5),this.setIndex(m),this.setAttribute("position",new Ua(p,3)),this.setAttribute("normal",new Ua(_,3)),this.setAttribute("uv",new Ua(v,2));function R(D,y,S,P,W,C,L,O,I,b,N){const F=C/I,V=L/b,Z=C/2,te=L/2,j=O/2,ee=I+1,X=b+1;let k=0,re=0;const ce=new pe;for(let he=0;he<X;he++){const xe=he*V-te;for(let Ge=0;Ge<ee;Ge++){const qe=Ge*F-Z;ce[D]=qe*P,ce[y]=xe*W,ce[S]=j,p.push(ce.x,ce.y,ce.z),ce[D]=0,ce[y]=0,ce[S]=O>0?1:-1,_.push(ce.x,ce.y,ce.z),v.push(Ge/I),v.push(1-he/b),k+=1}}for(let he=0;he<b;he++)for(let xe=0;xe<I;xe++){const Ge=x+xe+ee*he,qe=x+xe+ee*(he+1),B=x+(xe+1)+ee*(he+1),me=x+(xe+1)+ee*he;m.push(Ge,qe,me),m.push(qe,B,me),re+=6}h.addGroup(M,re,N),M+=re,x+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class io extends Oa{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(s),m=Math.floor(c),p=h+1,_=m+1,v=t/h,x=i/m,M=[],R=[],D=[],y=[];for(let S=0;S<_;S++){const P=S*x-d;for(let W=0;W<p;W++){const C=W*v-f;R.push(C,-P,0),D.push(0,0,1),y.push(W/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let P=0;P<h;P++){const W=P+p*S,C=P+p*(S+1),L=P+1+p*(S+1),O=P+1+p*S;M.push(W,C,O),M.push(C,L,O)}this.setIndex(M),this.setAttribute("position",new Ua(R,3)),this.setAttribute("normal",new Ua(D,3)),this.setAttribute("uv",new Ua(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.widthSegments,t.heightSegments)}}function ao(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const c=o[i][s];if(Pv(c))c.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone();else if(Array.isArray(c))if(Pv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][s]=f}else t[i][s]=c.slice();else t[i][s]=c}}return t}function Xn(o){const t={};for(let i=0;i<o.length;i++){const s=ao(o[i]);for(const c in s)t[c]=s[c]}return t}function Pv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function nb(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Wx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const ib={clone:ao,merge:Xn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends wu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const c=t.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new Bt().setHex(c.value);break;case"v2":this.uniforms[s].value=new Ft().fromArray(c.value);break;case"v3":this.uniforms[s].value=new pe().fromArray(c.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(c.value);break;case"m3":this.uniforms[s].value=new dt().fromArray(c.value);break;case"m4":this.uniforms[s].value=new _n().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class sb extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ob extends wu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lb extends wu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ih={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Iv(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Iv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Iv(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class cb{constructor(t,i,s){const c=this;let f=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){h++,f===!1&&c.onStart!==void 0&&c.onStart(_,d,h),f=!0},this.itemEnd=function(_){d++,c.onProgress!==void 0&&c.onProgress(_,d,h),d===h&&(f=!1,c.onLoad!==void 0&&c.onLoad())},this.itemError=function(_){c.onError!==void 0&&c.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=p.length;v<x;v+=2){const M=p[v],R=p[v+1];if(M.global&&(M.lastIndex=0),M.test(_))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ub=new cb;class jp{constructor(t){this.manager=t!==void 0?t:ub,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(c,f){s.load(t,c,i,f)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}jp.DEFAULT_MATERIAL_NAME="__DEFAULT";const js=new WeakMap;class fb extends jp{constructor(t){super(t)}load(t,i,s,c){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const f=this,d=Ih.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(t),setTimeout(function(){i&&i(d),f.manager.itemEnd(t)},0);else{let v=js.get(d);v===void 0&&(v=[],js.set(d,v)),v.push({onLoad:i,onError:c})}return d}const h=vl("img");function m(){_(),i&&i(this);const v=js.get(this)||[];for(let x=0;x<v.length;x++){const M=v[x];M.onLoad&&M.onLoad(this)}js.delete(this),f.manager.itemEnd(t)}function p(v){_(),c&&c(v),Ih.remove(`image:${t}`);const x=js.get(this)||[];for(let M=0;M<x.length;M++){const R=x[M];R.onError&&R.onError(v)}js.delete(this),f.manager.itemError(t),f.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ih.add(`image:${t}`,h),f.manager.itemStart(t),h.src=t,h}}class db extends jp{constructor(t){super(t)}load(t,i,s,c){const f=new zn,d=new fb(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},s,c),f}}const fu=new pe,du=new ro,ta=new pe;class qx extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fu,du,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,ta.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(fu,du,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new pe,zv=new Ft,Bv=new Ft;class Ei extends qx{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dp*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,i){return this.getViewBounds(t,zv,Bv),i.subVectors(Bv,zv)}setViewOffset(t,i,s,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ph*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*c/m,i-=d.offsetY*s/p,c*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Yx extends qx{constructor(t=-1,i=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-t,d=s+t,h=c+i,m=c-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Zs=-90,Ks=1;class hb extends ci{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Ei(Zs,Ks,t,i);c.layers=this.layers,this.add(c);const f=new Ei(Zs,Ks,t,i);f.layers=this.layers,this.add(f);const d=new Ei(Zs,Ks,t,i);d.layers=this.layers,this.add(d);const h=new Ei(Zs,Ks,t,i);h.layers=this.layers,this.add(h);const m=new Ei(Zs,Ks,t,i);m.layers=this.layers,this.add(m);const p=new Ei(Zs,Ks,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,f,d,h,m]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Au)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,x,M),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class pb extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class mb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const $p=class $p{constructor(t,i,s,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=c,this}};$p.prototype.isMatrix2=!0;let Fv=$p;function Hv(o,t,i,s){const c=gb(s);switch(i){case Lx:return o*t;case Px:return o*t/c.components*c.byteLength;case Hp:return o*t/c.components*c.byteLength;case jr:return o*t*2/c.components*c.byteLength;case Gp:return o*t*2/c.components*c.byteLength;case Ox:return o*t*3/c.components*c.byteLength;case Ii:return o*t*4/c.components*c.byteLength;case Vp:return o*t*4/c.components*c.byteLength;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xu:case Su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case np:case ap:return Math.max(o,16)*Math.max(t,8)/4;case tp:case ip:return Math.max(o,8)*Math.max(t,8)/2;case rp:case sp:case lp:case cp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case op:case Mu:case up:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case dp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case hp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case pp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case mp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case gp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _p:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case yp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ep:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case bp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tp:case Ap:case Rp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Cp:case wp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Eu:case Np:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gb(o){switch(o){case bi:case wx:return{byteLength:1,components:1};case gl:case Nx:case ca:return{byteLength:2,components:1};case Bp:case Fp:return{byteLength:2,components:4};case la:case zp:case ra:return{byteLength:4,components:1};case Dx:case Ux:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let o=null,t=!1,i=null,s=null;function c(f,d){s=o.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function _b(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,R)=>M.start-R.start);let x=0;for(let M=1;M<v.length;M++){const R=v[x],D=v[M];D.start<=R.start+R.count+1?R.count=Math.max(R.count,D.start+D.count-R.start):(++x,v[x]=D)}v.length=x+1;for(let M=0,R=v.length;M<R;M++){const D=v[M];o.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:c,remove:f,update:d}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xb=`#ifdef USE_ALPHAHASH
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
#endif`,Sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
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
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
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
#endif`,Rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Db=`#ifdef USE_IRIDESCENCE
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
#endif`,Ub=`#ifdef USE_BUMPMAP
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gb=`#define PI 3.141592653589793
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
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xb=`vec3 transformedNormal = objectNormal;
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
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rT=`#ifdef USE_GRADIENTMAP
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
}`,sT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
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
#endif`,gT=`uniform sampler2D dfgLUT;
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
}`,_T=`
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
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
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ST=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CT=`#if defined( USE_POINTS_UV )
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
#endif`,wT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`#ifdef USE_MORPHTARGETS
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
#endif`,PT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,GT=`#ifdef USE_NORMALMAP
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
#endif`,VT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
}`,A1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,L1=`uniform vec3 diffuse;
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
}`,O1=`#define LAMBERT
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
}`,P1=`#define LAMBERT
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
}`,I1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,B1=`#define NORMAL
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
}`,F1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,G1=`#define PHONG
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
}`,V1=`#define STANDARD
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
}`,X1=`#define STANDARD
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
}`,k1=`#define TOON
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
}`,W1=`#define TOON
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
}`,q1=`uniform float size;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,j1=`#include <common>
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
}`,Z1=`uniform vec3 color;
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
}`,K1=`uniform float rotation;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:vb,alphahash_pars_fragment:xb,alphamap_fragment:Sb,alphamap_pars_fragment:yb,alphatest_fragment:Mb,alphatest_pars_fragment:Eb,aomap_fragment:bb,aomap_pars_fragment:Tb,batching_pars_vertex:Ab,batching_vertex:Rb,begin_vertex:Cb,beginnormal_vertex:wb,bsdfs:Nb,iridescence_fragment:Db,bumpmap_pars_fragment:Ub,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:Pb,clipping_planes_vertex:Ib,color_fragment:zb,color_pars_fragment:Bb,color_pars_vertex:Fb,color_vertex:Hb,common:Gb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:Xb,displacementmap_pars_vertex:kb,displacementmap_vertex:Wb,emissivemap_fragment:qb,emissivemap_pars_fragment:Yb,colorspace_fragment:jb,colorspace_pars_fragment:Zb,envmap_fragment:Kb,envmap_common_pars_fragment:Qb,envmap_pars_fragment:Jb,envmap_pars_vertex:$b,envmap_physical_pars_fragment:uT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:aT,gradientmap_pars_fragment:rT,lightmap_pars_fragment:sT,lights_lambert_fragment:oT,lights_lambert_pars_fragment:lT,lights_pars_begin:cT,lights_toon_fragment:fT,lights_toon_pars_fragment:dT,lights_phong_fragment:hT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:gT,lights_fragment_begin:_T,lights_fragment_maps:vT,lights_fragment_end:xT,lightprobes_pars_fragment:ST,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:MT,logdepthbuf_pars_vertex:ET,logdepthbuf_vertex:bT,map_fragment:TT,map_pars_fragment:AT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:wT,metalnessmap_pars_fragment:NT,morphinstance_vertex:DT,morphcolor_vertex:UT,morphnormal_vertex:LT,morphtarget_pars_vertex:OT,morphtarget_vertex:PT,normal_fragment_begin:IT,normal_fragment_maps:zT,normal_pars_fragment:BT,normal_pars_vertex:FT,normal_vertex:HT,normalmap_pars_fragment:GT,clearcoat_normal_fragment_begin:VT,clearcoat_normal_fragment_maps:XT,clearcoat_pars_fragment:kT,iridescence_pars_fragment:WT,opaque_fragment:qT,packing:YT,premultiplied_alpha_fragment:jT,project_vertex:ZT,dithering_fragment:KT,dithering_pars_fragment:QT,roughnessmap_fragment:JT,roughnessmap_pars_fragment:$T,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:t1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:a1,skinning_pars_vertex:r1,skinning_vertex:s1,skinnormal_vertex:o1,specularmap_fragment:l1,specularmap_pars_fragment:c1,tonemapping_fragment:u1,tonemapping_pars_fragment:f1,transmission_fragment:d1,transmission_pars_fragment:h1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:g1,worldpos_vertex:_1,background_vert:v1,background_frag:x1,backgroundCube_vert:S1,backgroundCube_frag:y1,cube_vert:M1,cube_frag:E1,depth_vert:b1,depth_frag:T1,distance_vert:A1,distance_frag:R1,equirect_vert:C1,equirect_frag:w1,linedashed_vert:N1,linedashed_frag:D1,meshbasic_vert:U1,meshbasic_frag:L1,meshlambert_vert:O1,meshlambert_frag:P1,meshmatcap_vert:I1,meshmatcap_frag:z1,meshnormal_vert:B1,meshnormal_frag:F1,meshphong_vert:H1,meshphong_frag:G1,meshphysical_vert:V1,meshphysical_frag:X1,meshtoon_vert:k1,meshtoon_frag:W1,points_vert:q1,points_frag:Y1,shadow_vert:j1,shadow_frag:Z1,sprite_vert:K1,sprite_frag:Q1},He={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new pe},probesMax:{value:new pe},probesResolution:{value:new pe}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ia={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Bt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ia.physical={uniforms:Xn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const hu={r:0,b:0,g:0},J1=new _n,Zx=new dt;Zx.set(-1,0,0,0,1,0,0,0,1);function $1(o,t,i,s,c,f){const d=new Bt(0);let h=c===!0?0:1,m,p,_=null,v=0,x=null;function M(P){let W=P.isScene===!0?P.background:null;if(W&&W.isTexture){const C=P.backgroundBlurriness>0;W=t.get(W,C)}return W}function R(P){let W=!1;const C=M(P);C===null?y(d,h):C&&C.isColor&&(y(C,1),W=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||W)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(P,W){const C=M(W);C&&(C.isCubeTexture||C.mapping===Cu)?(p===void 0&&(p=new Fi(new El(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ao(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=W.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(W.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Zx),p.material.toneMapped=Nt.getTransfer(C.colorSpace)!==Yt,(_!==C||v!==C.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,x=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Fi(new io(2,2),new Hi({name:"BackgroundMaterial",uniforms:ao(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(C.colorSpace)!==Yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,_=C,v=C.version,x=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function y(P,W){P.getRGB(hu,Wx(o)),i.buffers.color.setClear(hu.r,hu.g,hu.b,W,f)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,W=1){d.set(P),h=W,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,y(d,h)},render:R,addToRenderList:D,dispose:S}}function eA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=x(null);let f=c,d=!1;function h(V,Z,te,j,ee){let X=!1;const k=v(V,j,te,Z);f!==k&&(f=k,p(f.object)),X=M(V,j,te,ee),X&&R(V,j,te,ee),ee!==null&&t.update(ee,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,C(V,Z,te,j),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function m(){return o.createVertexArray()}function p(V){return o.bindVertexArray(V)}function _(V){return o.deleteVertexArray(V)}function v(V,Z,te,j){const ee=j.wireframe===!0;let X=s[Z.id];X===void 0&&(X={},s[Z.id]=X);const k=V.isInstancedMesh===!0?V.id:0;let re=X[k];re===void 0&&(re={},X[k]=re);let ce=re[te.id];ce===void 0&&(ce={},re[te.id]=ce);let he=ce[ee];return he===void 0&&(he=x(m()),ce[ee]=he),he}function x(V){const Z=[],te=[],j=[];for(let ee=0;ee<i;ee++)Z[ee]=0,te[ee]=0,j[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:te,attributeDivisors:j,object:V,attributes:{},index:null}}function M(V,Z,te,j){const ee=f.attributes,X=Z.attributes;let k=0;const re=te.getAttributes();for(const ce in re)if(re[ce].location>=0){const xe=ee[ce];let Ge=X[ce];if(Ge===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(Ge=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(Ge=V.instanceColor)),xe===void 0||xe.attribute!==Ge||Ge&&xe.data!==Ge.data)return!0;k++}return f.attributesNum!==k||f.index!==j}function R(V,Z,te,j){const ee={},X=Z.attributes;let k=0;const re=te.getAttributes();for(const ce in re)if(re[ce].location>=0){let xe=X[ce];xe===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(xe=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(xe=V.instanceColor));const Ge={};Ge.attribute=xe,xe&&xe.data&&(Ge.data=xe.data),ee[ce]=Ge,k++}f.attributes=ee,f.attributesNum=k,f.index=j}function D(){const V=f.newAttributes;for(let Z=0,te=V.length;Z<te;Z++)V[Z]=0}function y(V){S(V,0)}function S(V,Z){const te=f.newAttributes,j=f.enabledAttributes,ee=f.attributeDivisors;te[V]=1,j[V]===0&&(o.enableVertexAttribArray(V),j[V]=1),ee[V]!==Z&&(o.vertexAttribDivisor(V,Z),ee[V]=Z)}function P(){const V=f.newAttributes,Z=f.enabledAttributes;for(let te=0,j=Z.length;te<j;te++)Z[te]!==V[te]&&(o.disableVertexAttribArray(te),Z[te]=0)}function W(V,Z,te,j,ee,X,k){k===!0?o.vertexAttribIPointer(V,Z,te,ee,X):o.vertexAttribPointer(V,Z,te,j,ee,X)}function C(V,Z,te,j){D();const ee=j.attributes,X=te.getAttributes(),k=Z.defaultAttributeValues;for(const re in X){const ce=X[re];if(ce.location>=0){let he=ee[re];if(he===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(he=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(he=V.instanceColor)),he!==void 0){const xe=he.normalized,Ge=he.itemSize,qe=t.get(he);if(qe===void 0)continue;const B=qe.buffer,me=qe.type,Ae=qe.bytesPerElement,K=me===o.INT||me===o.UNSIGNED_INT||he.gpuType===zp;if(he.isInterleavedBufferAttribute){const de=he.data,Te=de.stride,De=he.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<ce.locationSize;ve++)S(ce.location+ve,de.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<ce.locationSize;ve++)y(ce.location+ve);o.bindBuffer(o.ARRAY_BUFFER,B);for(let ve=0;ve<ce.locationSize;ve++)W(ce.location+ve,Ge/ce.locationSize,me,xe,Te*Ae,(De+Ge/ce.locationSize*ve)*Ae,K)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<ce.locationSize;de++)S(ce.location+de,he.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<ce.locationSize;de++)y(ce.location+de);o.bindBuffer(o.ARRAY_BUFFER,B);for(let de=0;de<ce.locationSize;de++)W(ce.location+de,Ge/ce.locationSize,me,xe,Ge*Ae,Ge/ce.locationSize*de*Ae,K)}}else if(k!==void 0){const xe=k[re];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(ce.location,xe);break;case 3:o.vertexAttrib3fv(ce.location,xe);break;case 4:o.vertexAttrib4fv(ce.location,xe);break;default:o.vertexAttrib1fv(ce.location,xe)}}}}P()}function L(){N();for(const V in s){const Z=s[V];for(const te in Z){const j=Z[te];for(const ee in j){const X=j[ee];for(const k in X)_(X[k].object),delete X[k];delete j[ee]}}delete s[V]}}function O(V){if(s[V.id]===void 0)return;const Z=s[V.id];for(const te in Z){const j=Z[te];for(const ee in j){const X=j[ee];for(const k in X)_(X[k].object),delete X[k];delete j[ee]}}delete s[V.id]}function I(V){for(const Z in s){const te=s[Z];for(const j in te){const ee=te[j];if(ee[V.id]===void 0)continue;const X=ee[V.id];for(const k in X)_(X[k].object),delete X[k];delete ee[V.id]}}}function b(V){for(const Z in s){const te=s[Z],j=V.isInstancedMesh===!0?V.id:0,ee=te[j];if(ee!==void 0){for(const X in ee){const k=ee[X];for(const re in k)_(k[re].object),delete k[re];delete ee[X]}delete te[j],Object.keys(te).length===0&&delete s[Z]}}}function N(){F(),d=!0,f!==c&&(f=c,p(f.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:N,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:y,disableUnusedAttributes:P}}function tA(o,t,i){let s;function c(m){s=m}function f(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,_){_!==0&&(o.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function h(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let x=0;for(let M=0;M<_;M++)x+=p[M];i.update(x,s,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function nA(o,t,i,s){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(I){return!(I!==Ii&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const b=I===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==bi&&I!==ra&&!b&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),W=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:R,maxTextureSize:D,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:P,maxVaryings:W,maxFragmentUniforms:C,maxSamples:L,samples:O}}function iA(o){const t=this;let i=null,s=0,c=!1,f=!1;const d=new pr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||c;return c=x,s=v.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,M){const R=v.clippingPlanes,D=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!c||R===null||R.length===0||f&&!y)f?_(null):p();else{const P=f?0:s,W=P*4;let C=S.clippingState||null;m.value=C,C=_(R,x,W,M);for(let L=0;L!==W;++L)C[L]=i[L];S.clippingState=C,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,x,M,R){const D=v!==null?v.length:0;let y=null;if(D!==0){if(y=m.value,R!==!0||y===null){const S=M+D*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<S)&&(y=new Float32Array(S));for(let W=0,C=M;W!==D;++W,C+=4)d.copy(v[W]).applyMatrix4(P,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,y}}const $s=4,aA=6,rA=20,sA=256,cl=new Yx,Gv=new Bt;let zh=null,Bh=0,Fh=0,Hh=!1;const oA=new pe,Xr=new pe;class Vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,c=100,f={}){const{size:d=256,position:h=oA}=f;zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,c,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Bh,Fh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Yr||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ca,format:Ii,colorSpace:bu,depthBuffer:!1},c=Xv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lA(f)),this._blurMaterial=uA(f,t,i),this._ggxMaterial=cA(f,t,i)}return c}_compileMaterial(t){const i=new Fi(new Oa,t);this._renderer.compile(i,cl)}_sceneToCubeUV(t,i,s,c,f){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(Gv),v.toneMapping=oa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(c),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new El,new Yp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let S=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,S=!0):(y.color.copy(Gv),S=!0);for(let W=0;W<6;W++){const C=W%3;C===0?(m.up.set(0,p[W],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+_[W],f.y,f.z)):C===1?(m.up.set(0,0,p[W]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+_[W],f.z)):(m.up.set(0,p[W],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+_[W]));const L=this._cubeSize;Qs(c,C*L,W>2?L:0,L,L),v.setRenderTarget(c),S&&v.render(D,m),v.render(t,m)}v.toneMapping=M,v.autoClear=x,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===Yr||t.mapping===no;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const m=this._cubeSize;Qs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,cl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),x=p*1.25,M=v*x,{_lodMax:R}=this,D=this._sizeLods[s],y=3*D*(s>R-$s?s-R+$s:0),S=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=R-i,Qs(f,y,S,3*D,2*D),c.setRenderTarget(f),c.render(h,cl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=R-s,Qs(t,y,S,3*D,2*D),c.setRenderTarget(t),c.render(h,cl)}_blur(t,i,s,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,s,d),this._blurPass(f,t,s,s,d)}_blurPass(t,i,s,c,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[c];m.material=h;const p=h.uniforms;p.envMap.value=t.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const _=this._sizeLods[c],v=3*_*(c>this._lodMax-$s?c-this._lodMax+$s:0),x=4*(this._cubeSize-_);Qs(i,v,x,3*_,2*_),d.setRenderTarget(i),d.render(m,cl)}}function lA(o){const t=[],i=[];let s=o;const c=o-$s+1+aA;for(let f=0;f<c;f++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),m=-h,p=1+h,_=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,x=6,M=3,R=new Float32Array(M*x*v),D=new Float32Array(M*x*v);for(let S=0;S<v;S++){const P=S%3*2/3-1,W=S>2?0:-1,C=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];R.set(C,M*x*S);for(let L=0;L<x;L++){const O=_[L*2]*2-1,I=_[L*2+1]*2-1;S===0?Xr.set(1,I,O):S===1?Xr.set(-O,1,-I):S===2?Xr.set(-O,I,1):S===3?Xr.set(-1,I,-O):S===4?Xr.set(-O,-1,I):Xr.set(O,I,-1),Xr.toArray(D,(S*x+L)*M)}}const y=new Oa;y.setAttribute("position",new Bi(R,M)),y.setAttribute("outputDirection",new Bi(D,M)),i.push(new Fi(y,null)),s>$s&&s--}return{lodMeshes:i,sizeLods:t}}function Xv(o,t,i){const s=new zi(o,t,i);return s.texture.mapping=Cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qs(o,t,i,s,c){o.viewport.set(t,i,s,c),o.scissor.set(t,i,s,c)}function cA(o,t,i){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function uA(o,t,i){return new Hi({name:"SphericalGaussianBlur",defines:{SAMPLES:rA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function kv(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Wv(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Nu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kx extends zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new Xx(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new El(5,5,5),f=new Hi({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Na});f.uniforms.tEquirect.value=i;const d=new Fi(c,f),h=i.minFilter;return i.minFilter===kr&&(i.minFilter=In),new hb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,c);t.setRenderTarget(f)}}function fA(o){let t=new WeakMap,i=new WeakMap,s=null;function c(x,M=!1){return x==null?null:M?d(x):f(x)}function f(x){if(x&&x.isTexture){const M=x.mapping;if(M===uh||M===fh)if(t.has(x)){const R=t.get(x).texture;return h(R,x.mapping)}else{const R=x.image;if(R&&R.height>0){const D=new Kx(R.height);return D.fromEquirectangularTexture(o,x),t.set(x,D),x.addEventListener("dispose",p),h(D.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const M=x.mapping,R=M===uh||M===fh,D=M===Yr||M===no;if(R||D){let y=i.get(x);const S=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==S)return s===null&&(s=new Vv(o)),y=R?s.fromEquirectangular(x,y):s.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,i.set(x,y),y.texture;if(y!==void 0)return y.texture;{const P=x.image;return R&&P&&P.height>0||D&&P&&m(P)?(s===null&&(s=new Vv(o)),y=R?s.fromEquirectangular(x):s.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,i.set(x,y),x.addEventListener("dispose",_),y.texture):null}}}return x}function h(x,M){return M===uh?x.mapping=Yr:M===fh&&(x.mapping=no),x}function m(x){let M=0;const R=6;for(let D=0;D<R;D++)x[D]!==void 0&&M++;return M===R}function p(x){const M=x.target;M.removeEventListener("dispose",p);const R=t.get(M);R!==void 0&&(t.delete(M),R.dispose())}function _(x){const M=x.target;M.removeEventListener("dispose",_);const R=i.get(M);R!==void 0&&(i.delete(M),R.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:v}}function dA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const c=o.getExtension(s);return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&eo("WebGLRenderer: "+s+" extension not supported."),c}}}function hA(o,t,i,s){const c={},f=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const R in x.attributes)t.remove(x.attributes[R]);x.removeEventListener("dispose",d),delete c[x.id];const M=f.get(x);M&&(t.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return c[x.id]===!0||(x.addEventListener("dispose",d),c[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,R=v.attributes.position;let D=0;if(R===void 0)return;if(M!==null){const P=M.array;D=M.version;for(let W=0,C=P.length;W<C;W+=3){const L=P[W+0],O=P[W+1],I=P[W+2];x.push(L,O,O,I,I,L)}}else{const P=R.array;D=R.version;for(let W=0,C=P.length/3-1;W<C;W+=3){const L=W+0,O=W+1,I=W+2;x.push(L,O,O,I,I,L)}}const y=new(R.count>=65535?Gx:Hx)(x,1);y.version=D;const S=f.get(v);S&&t.remove(S),f.set(v,y)}function _(v){const x=f.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return f.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function pA(o,t,i){let s;function c(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function m(v,x){o.drawElements(s,x,f,v*d),i.update(x,s,1)}function p(v,x,M){M!==0&&(o.drawElementsInstanced(s,x,f,v*d,M),i.update(x,s,M))}function _(v,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,f,v,0,M);let D=0;for(let y=0;y<M;y++)D+=x[y];i.update(D,s,1)}this.setMode=c,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function mA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Pt("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function gA(o,t,i){const s=new WeakMap,c=new cn;function f(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let x=s.get(h);if(x===void 0||x.count!==v){let F=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var M=F;x!==void 0&&x.texture.dispose();const R=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),D===!0&&(C=2),y===!0&&(C=3);let L=h.attributes.position.count*C,O=1;L>t.maxTextureSize&&(O=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const I=new Float32Array(L*O*4*v),b=new zx(I,L,O,v);b.type=ra,b.needsUpdate=!0;const N=C*4;for(let V=0;V<v;V++){const Z=S[V],te=P[V],j=W[V],ee=L*O*4*V;for(let X=0;X<Z.count;X++){const k=X*N;R===!0&&(c.fromBufferAttribute(Z,X),I[ee+k+0]=c.x,I[ee+k+1]=c.y,I[ee+k+2]=c.z,I[ee+k+3]=0),D===!0&&(c.fromBufferAttribute(te,X),I[ee+k+4]=c.x,I[ee+k+5]=c.y,I[ee+k+6]=c.z,I[ee+k+7]=0),y===!0&&(c.fromBufferAttribute(j,X),I[ee+k+8]=c.x,I[ee+k+9]=c.y,I[ee+k+10]=c.z,I[ee+k+11]=j.itemSize===4?c.w:1)}}x={count:v,texture:b,size:new Ft(L,O)},s.set(h,x),h.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const D=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function _A(o,t,i,s,c){let f=new WeakMap;function d(p){const _=c.render.frame,v=p.geometry,x=t.get(p,v);if(f.get(x)!==_&&(t.update(x),f.set(x,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;f.get(M)!==_&&(M.update(),f.set(M,_))}return x}function h(){f=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:h}}const vA={[yx]:"LINEAR_TONE_MAPPING",[Mx]:"REINHARD_TONE_MAPPING",[Ex]:"CINEON_TONE_MAPPING",[bx]:"ACES_FILMIC_TONE_MAPPING",[Ax]:"AGX_TONE_MAPPING",[Rx]:"NEUTRAL_TONE_MAPPING",[Tx]:"CUSTOM_TONE_MAPPING"};function xA(o,t,i,s,c,f){const d=new zi(t,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Oa;p.setAttribute("position",new Ua([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ua([0,2,0,0,2,0],2));const _=new sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Fi(p,_),x=new Yx(-1,1,1,-1,0,1);let M=null,R=null,D=!1,y,S=null,P=[],W=!1;this.setSize=function(C,L){d.setSize(C,L),h!==null&&h.setSize(C,L),m!==null&&m.setSize(C,L);for(let O=0;O<P.length;O++){const I=P[O];I.setSize&&I.setSize(C,L)}},this.setEffects=function(C){P=C,W=P.length>0&&P[0].isRenderPass===!0;const L=d.width,O=d.height;P.length>0&&h===null&&(h=new zi(L,O,{type:ca,depthBuffer:!1,stencilBuffer:!1}),m=new zi(L,O,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<P.length;I++){const b=P[I];b.setSize&&b.setSize(L,O)}},this.begin=function(C,L){if(D||C.toneMapping===oa&&P.length===0)return!1;if(S=L,L!==null){const O=L.width,I=L.height;(d.width!==O||d.height!==I)&&this.setSize(O,I)}return W===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return W},this.end=function(C,L){C.toneMapping=y,D=!0;let O=d,I=h;for(let b=0;b<P.length;b++){const N=P[b];N.enabled!==!1&&(N.render(C,I,O,L),N.needsSwap!==!1&&(O=I,I=I===h?m:h))}if(M!==C.outputColorSpace||R!==C.toneMapping){M=C.outputColorSpace,R=C.toneMapping,_.defines={},Nt.getTransfer(M)===Yt&&(_.defines.SRGB_TRANSFER="");const b=vA[R];b&&(_.defines[b]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=O.texture,C.setRenderTarget(S),C.render(v,x),S=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),_.dispose()}}const Qx=new zn,Up=new xl(1,1),Jx=new zx,$x=new IE,eS=new Xx,qv=[],Yv=[],jv=new Float32Array(16),Zv=new Float32Array(9),Kv=new Float32Array(4);function so(o,t,i){const s=o[0];if(s<=0||s>0)return o;const c=t*i;let f=qv[c];if(f===void 0&&(f=new Float32Array(c),qv[c]=f),t!==0){s.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function yn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Du(o,t){let i=Yv[t];i===void 0&&(i=new Int32Array(t),Yv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function SA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function yA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2fv(this.addr,t),yn(i,t)}}function MA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;o.uniform3fv(this.addr,t),yn(i,t)}}function EA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4fv(this.addr,t),yn(i,t)}}function bA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Kv.set(s),o.uniformMatrix2fv(this.addr,!1,Kv),yn(i,s)}}function TA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Zv.set(s),o.uniformMatrix3fv(this.addr,!1,Zv),yn(i,s)}}function AA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;jv.set(s),o.uniformMatrix4fv(this.addr,!1,jv),yn(i,s)}}function RA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function CA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2iv(this.addr,t),yn(i,t)}}function wA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3iv(this.addr,t),yn(i,t)}}function NA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4iv(this.addr,t),yn(i,t)}}function DA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function UA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2uiv(this.addr,t),yn(i,t)}}function LA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3uiv(this.addr,t),yn(i,t)}}function OA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4uiv(this.addr,t),yn(i,t)}}function PA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Up.compareFunction=i.isReversedDepthBuffer()?kp:Xp,f=Up):f=Qx,i.setTexture2D(t||f,c)}function IA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||$x,c)}function zA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||eS,c)}function BA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||Jx,c)}function FA(o){switch(o){case 5126:return SA;case 35664:return yA;case 35665:return MA;case 35666:return EA;case 35674:return bA;case 35675:return TA;case 35676:return AA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return wA;case 35669:case 35673:return NA;case 5125:return DA;case 36294:return UA;case 36295:return LA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return PA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return BA}}function HA(o,t){o.uniform1fv(this.addr,t)}function GA(o,t){const i=so(t,this.size,2);o.uniform2fv(this.addr,i)}function VA(o,t){const i=so(t,this.size,3);o.uniform3fv(this.addr,i)}function XA(o,t){const i=so(t,this.size,4);o.uniform4fv(this.addr,i)}function kA(o,t){const i=so(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WA(o,t){const i=so(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function qA(o,t){const i=so(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function YA(o,t){o.uniform1iv(this.addr,t)}function jA(o,t){o.uniform2iv(this.addr,t)}function ZA(o,t){o.uniform3iv(this.addr,t)}function KA(o,t){o.uniform4iv(this.addr,t)}function QA(o,t){o.uniform1uiv(this.addr,t)}function JA(o,t){o.uniform2uiv(this.addr,t)}function $A(o,t){o.uniform3uiv(this.addr,t)}function eR(o,t){o.uniform4uiv(this.addr,t)}function tR(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Up:d=Qx;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function nR(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||$x,f[d])}function iR(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||eS,f[d])}function aR(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||Jx,f[d])}function rR(o){switch(o){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return XA;case 35674:return kA;case 35675:return WA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return jA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return $A;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return aR}}class sR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=FA(i.type)}}class oR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rR(i.type)}}class lR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],s)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Qv(o,t){o.seq.push(t),o.map[t.id]=t}function cR(o,t,i){const s=o.name,c=s.length;for(Gh.lastIndex=0;;){const f=Gh.exec(s),d=Gh.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===c){Qv(i,p===void 0?new sR(h,o,t):new oR(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new lR(h),Qv(i,v)),i=v}}}class yu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);cR(h,m,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&s.push(d)}return s}}function Jv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const uR=37297;let fR=0;function dR(o,t){const i=o.split(`
`),s=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const $v=new dt;function hR(o){Nt._getMatrix($v,Nt.workingColorSpace,o);const t=`mat3( ${$v.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(o)){case Tu:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ex(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+dR(o.getShaderSource(t),h)}else return f}function pR(o,t){const i=hR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const mR={[yx]:"Linear",[Mx]:"Reinhard",[Ex]:"Cineon",[bx]:"ACESFilmic",[Ax]:"AgX",[Rx]:"Neutral",[Tx]:"Custom"};function gR(o,t){const i=mR[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pu=new pe;function _R(){Nt.getLuminanceCoefficients(pu);const o=pu.x.toFixed(4),t=pu.y.toFixed(4),i=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function xR(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function SR(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(t,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function hl(o){return o!==""}function tx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lp(o){return o.replace(yR,ER)}const MR=new Map;function ER(o,t){let i=gt[t];if(i===void 0){const s=MR.get(t);if(s!==void 0)i=gt[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lp(i)}const bR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ix(o){return o.replace(bR,TR)}function TR(o,t,i,s){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function ax(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const AR={[gu]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function RR(o){return AR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CR={[Yr]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function wR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":CR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const NR={[no]:"ENVMAP_MODE_REFRACTION"};function DR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":NR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UR={[Sx]:"ENVMAP_BLENDING_MULTIPLY",[hE]:"ENVMAP_BLENDING_MIX",[pE]:"ENVMAP_BLENDING_ADD"};function LR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":UR[o.combine]||"ENVMAP_BLENDING_NONE"}function OR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function PR(o,t,i,s){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=RR(i),p=wR(i),_=DR(i),v=LR(i),x=OR(i),M=vR(i),R=xR(f),D=c.createProgram();let y,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(hl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(hl).join(`
`),S.length>0&&(S+=`
`)):(y=[ax(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),S=[ax(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?gt.tonemapping_pars_fragment:"",i.toneMapping!==oa?gR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,pR("linearToOutputTexel",i.outputColorSpace),_R(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),d=Lp(d),d=tx(d,i),d=nx(d,i),h=Lp(h),h=tx(h,i),h=nx(h,i),d=ix(d),h=ix(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const W=P+y+d,C=P+S+h,L=Jv(c,c.VERTEX_SHADER,W),O=Jv(c,c.FRAGMENT_SHADER,C);c.attachShader(D,L),c.attachShader(D,O),i.index0AttributeName!==void 0?c.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(D,0,"position"),c.linkProgram(D);function I(V){if(o.debug.checkShaderErrors){const Z=c.getProgramInfoLog(D)||"",te=c.getShaderInfoLog(L)||"",j=c.getShaderInfoLog(O)||"",ee=Z.trim(),X=te.trim(),k=j.trim();let re=!0,ce=!0;if(c.getProgramParameter(D,c.LINK_STATUS)===!1)if(re=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,D,L,O);else{const he=ex(c,L,"vertex"),xe=ex(c,O,"fragment");Pt("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(D,c.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ee+`
`+he+`
`+xe)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(X===""||k==="")&&(ce=!1);ce&&(V.diagnostics={runnable:re,programLog:ee,vertexShader:{log:X,prefix:y},fragmentShader:{log:k,prefix:S}})}c.deleteShader(L),c.deleteShader(O),b=new yu(c,D),N=SR(c,D)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=c.getProgramParameter(D,uR)),F},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fR++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=L,this.fragmentShader=O,this}let IR=0;class zR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new BR(t),i.set(t,s)),s}}class BR{constructor(t){this.id=IR++,this.code=t,this.usedTimes=0}}function FR(o){return o===jr||o===Mu||o===Eu}function HR(o,t,i,s,c,f){const d=new Bx,h=new zR,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,N,F,V,Z,te){const j=V.fog,ee=Z.geometry,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,re=t.get(b.envMap||X,k),ce=re&&re.mapping===Cu?re.image.height:null,he=M[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&st("WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const xe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ge=xe!==void 0?xe.length:0;let qe=0;ee.morphAttributes.position!==void 0&&(qe=1),ee.morphAttributes.normal!==void 0&&(qe=2),ee.morphAttributes.color!==void 0&&(qe=3);let B,me,Ae,K;if(he){const Ct=ia[he];B=Ct.vertexShader,me=Ct.fragmentShader}else{B=b.vertexShader,me=b.fragmentShader;const Ct=h.getVertexShaderStage(b),ut=h.getFragmentShaderStage(b);h.update(b,Ct,ut),Ae=Ct.id,K=ut.id}const de=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),De=Z.isInstancedMesh===!0,ve=Z.isBatchedMesh===!0,Ce=!!b.map,Vt=!!b.matcap,mt=!!re,_t=!!b.aoMap,yt=!!b.lightMap,tt=!!b.bumpMap&&b.wireframe===!1,it=!!b.normalMap,Xt=!!b.displacementMap,fn=!!b.emissiveMap,Ot=!!b.metalnessMap,en=!!b.roughnessMap,Y=b.anisotropy>0,nn=b.clearcoat>0,Lt=b.dispersion>0,U=b.retroreflectivity>0,E=b.iridescence>0,ne=b.sheen>0,le=b.transmission>0,ge=Y&&!!b.anisotropyMap,Re=nn&&!!b.clearcoatMap,Ue=nn&&!!b.clearcoatNormalMap,_e=nn&&!!b.clearcoatRoughnessMap,Ee=E&&!!b.iridescenceMap,Ne=E&&!!b.iridescenceThicknessMap,$e=ne&&!!b.sheenColorMap,ze=ne&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,ke=!!b.specularColorMap,nt=!!b.specularIntensityMap,lt=le&&!!b.transmissionMap,q=le&&!!b.thicknessMap,we=!!b.gradientMap,Me=!!b.alphaMap,Le=b.alphaTest>0,Xe=!!b.alphaHash,be=!!b.extensions;let Je=oa;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=o.toneMapping);const Ve={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:B,fragmentShader:me,defines:b.defines,customVertexShaderID:Ae,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:ve,batchingColor:ve&&Z._colorsTexture!==null,instancing:De,instancingColor:De&&Z.instanceColor!==null,instancingMorph:De&&Z.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:Vt,envMap:mt,envMapMode:mt&&re.mapping,envMapCubeUVHeight:ce,aoMap:_t,lightMap:yt,bumpMap:tt,normalMap:it,displacementMap:Xt,emissiveMap:fn,normalMapObjectSpace:it&&b.normalMapType===_E,normalMapTangentSpace:it&&b.normalMapType===_v,packedNormalMap:it&&b.normalMapType===_v&&FR(b.normalMap.format),metalnessMap:Ot,roughnessMap:en,anisotropy:Y,anisotropyMap:ge,clearcoat:nn,clearcoatMap:Re,clearcoatNormalMap:Ue,clearcoatRoughnessMap:_e,dispersion:Lt,retroreflection:U,iridescence:E,iridescenceMap:Ee,iridescenceThicknessMap:Ne,sheen:ne,sheenColorMap:$e,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:ke,specularIntensityMap:nt,transmission:le,transmissionMap:lt,thicknessMap:q,gradientMap:we,opaque:b.transparent===!1&&b.blending===pl&&b.alphaToCoverage===!1,alphaMap:Me,alphaTest:Le,alphaHash:Xe,combine:b.combine,mapUv:Ce&&R(b.map.channel),aoMapUv:_t&&R(b.aoMap.channel),lightMapUv:yt&&R(b.lightMap.channel),bumpMapUv:tt&&R(b.bumpMap.channel),normalMapUv:it&&R(b.normalMap.channel),displacementMapUv:Xt&&R(b.displacementMap.channel),emissiveMapUv:fn&&R(b.emissiveMap.channel),metalnessMapUv:Ot&&R(b.metalnessMap.channel),roughnessMapUv:en&&R(b.roughnessMap.channel),anisotropyMapUv:ge&&R(b.anisotropyMap.channel),clearcoatMapUv:Re&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&R(b.sheenRoughnessMap.channel),specularMapUv:Ie&&R(b.specularMap.channel),specularColorMapUv:ke&&R(b.specularColorMap.channel),specularIntensityMapUv:nt&&R(b.specularIntensityMap.channel),transmissionMapUv:lt&&R(b.transmissionMap.channel),thicknessMapUv:q&&R(b.thicknessMap.channel),alphaMapUv:Me&&R(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(it||Y),vertexNormals:!!ee.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ee.attributes.uv&&(Ce||Me),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ee.attributes.normal===void 0&&it===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:qe,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===Yt,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(b.emissiveMap.colorSpace)===Yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===aa,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function y(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)N.push(F),N.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(S(N,b),P(N,b),N.push(o.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function S(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numSunLights),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numSunLightShadows),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function P(b,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function W(b){const N=M[b.type];let F;if(N){const V=ia[N];F=ib.clone(V.uniforms)}else F=b.uniforms;return F}function C(b,N){let F=_.get(N);return F!==void 0?++F.usedTimes:(F=new PR(o,N,b,c),p.push(F),_.set(N,F)),F}function L(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function O(b){h.remove(b)}function I(){h.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:W,acquireProgram:C,releaseProgram:L,releaseShaderCache:O,programs:p,dispose:I}}function GR(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:t,get:i,remove:s,update:c,dispose:f}}function VR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function rx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function sx(){const o=[];let t=0;const i=[],s=[],c=[];function f(){t=0,i.length=0,s.length=0,c.length=0}function d(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function h(x,M,R,D,y,S){let P=o[t];return P===void 0?(P={id:x.id,object:x,geometry:M,material:R,materialVariant:d(x),groupOrder:D,renderOrder:x.renderOrder,z:y,group:S},o[t]=P):(P.id=x.id,P.object=x,P.geometry=M,P.material=R,P.materialVariant=d(x),P.groupOrder=D,P.renderOrder=x.renderOrder,P.z=y,P.group=S),t++,P}function m(x,M,R,D,y,S,P){P.reversedDepth===!0&&(y=-y);const W=h(x,M,R,D,y,S);R.transmission>0?s.push(W):R.transparent===!0?c.push(W):i.push(W)}function p(x,M,R,D,y,S){const P=h(x,M,R,D,y,S);R.transmission>0?s.unshift(P):R.transparent===!0?c.unshift(P):i.unshift(P)}function _(x,M){i.length>1&&i.sort(x||VR),s.length>1&&s.sort(M||rx),c.length>1&&c.sort(M||rx)}function v(){for(let x=t,M=o.length;x<M;x++){const R=o[x];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:m,unshift:p,finish:v,sort:_}}function XR(){let o=new WeakMap;function t(s,c){const f=o.get(s);let d;return f===void 0?(d=new sx,o.set(s,[d])):c>=f.length?(d=new sx,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function kR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new pe,color:new Bt};break;case"SpotLight":i={position:new pe,direction:new pe,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return o[t.id]=i,i}}}function WR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let qR=0;function YR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function jR(o){const t=new kR,i=WR(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new pe);const c=new pe,f=new _n,d=new _n;function h(p){let _=0,v=0,x=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let M=0,R=0,D=0,y=0,S=0,P=0,W=0,C=0,L=0,O=0,I=0,b=0,N=0,F=0;p.sort(YR);for(let Z=0,te=p.length;Z<te;Z++){const j=p[Z],ee=j.color,X=j.intensity,k=j.distance;let re=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===jr?re=j.shadow.map.texture:re=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)_+=ee.r*X,v+=ee.g*X,x+=ee.b*X;else if(j.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(j.sh.coefficients[ce],X);F++}else if(j.isSunLight){const ce=t.get(j);if(ce.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const he=j.shadow,xe=i.get(j);xe.shadowIntensity=he.intensity,xe.shadowBias=he.bias,xe.shadowNormalBias=he.normalBias,xe.shadowRadius=he.radius,xe.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),s.sunShadow[R]=xe,s.sunShadowMap[R]=re;const Ge=he.getViewportCount();for(let qe=0;qe<Ge;qe++)s.sunShadowMatrix[D+qe]=he.getMatrix(qe),s.sunShadowCascade[D+qe]=he._cascadeData[qe];D+=Ge,R++}s.sun[M]=ce,M++}else if(j.isDirectionalLight){const ce=t.get(j);if(ce.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const he=j.shadow,xe=i.get(j);xe.shadowIntensity=he.intensity,xe.shadowBias=he.bias,xe.shadowNormalBias=he.normalBias,xe.shadowRadius=he.radius,xe.shadowMapSize=he.mapSize,s.directionalShadow[y]=xe,s.directionalShadowMap[y]=re,s.directionalShadowMatrix[y]=j.shadow.matrix,L++}s.directional[y]=ce,y++}else if(j.isSpotLight){const ce=t.get(j);ce.position.setFromMatrixPosition(j.matrixWorld),ce.color.copy(ee).multiplyScalar(X),ce.distance=k,ce.coneCos=Math.cos(j.angle),ce.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ce.decay=j.decay,s.spot[P]=ce;const he=j.shadow;if(j.map&&(s.spotLightMap[b]=j.map,b++,he.updateMatrices(j),j.castShadow&&N++),s.spotLightMatrix[P]=he.matrix,j.castShadow){const xe=i.get(j);xe.shadowIntensity=he.intensity,xe.shadowBias=he.bias,xe.shadowNormalBias=he.normalBias,xe.shadowRadius=he.radius,xe.shadowMapSize=he.mapSize,s.spotShadow[P]=xe,s.spotShadowMap[P]=re,I++}P++}else if(j.isRectAreaLight){const ce=t.get(j);ce.color.copy(ee).multiplyScalar(X),ce.halfWidth.set(j.width*.5,0,0),ce.halfHeight.set(0,j.height*.5,0),s.rectArea[W]=ce,W++}else if(j.isPointLight){const ce=t.get(j);if(ce.color.copy(j.color).multiplyScalar(j.intensity),ce.distance=j.distance,ce.decay=j.decay,j.castShadow){const he=j.shadow,xe=i.get(j);xe.shadowIntensity=he.intensity,xe.shadowBias=he.bias,xe.shadowNormalBias=he.normalBias,xe.shadowRadius=he.radius,xe.shadowMapSize=he.mapSize,xe.shadowCameraNear=he.camera.near,xe.shadowCameraFar=he.camera.far,s.pointShadow[S]=xe,s.pointShadowMap[S]=re,s.pointShadowMatrix[S]=j.shadow.matrix,O++}s.point[S]=ce,S++}else if(j.isHemisphereLight){const ce=t.get(j);ce.skyColor.copy(j.color).multiplyScalar(X),ce.groundColor.copy(j.groundColor).multiplyScalar(X),s.hemi[C]=ce,C++}}W>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=x;const V=s.hash;(V.sunLength!==M||V.directionalLength!==y||V.pointLength!==S||V.spotLength!==P||V.rectAreaLength!==W||V.hemiLength!==C||V.numSunShadows!==R||V.numDirectionalShadows!==L||V.numPointShadows!==O||V.numSpotShadows!==I||V.numSpotMaps!==b||V.numLightProbes!==F)&&(s.sun.length=M,s.directional.length=y,s.spot.length=P,s.rectArea.length=W,s.point.length=S,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=D,s.sunShadowCascade.length=D,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=O,s.pointShadowMap.length=O,s.pointShadowMatrix.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+b-N,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,V.sunLength=M,V.directionalLength=y,V.pointLength=S,V.spotLength=P,V.rectAreaLength=W,V.hemiLength=C,V.numSunShadows=R,V.numDirectionalShadows=L,V.numPointShadows=O,V.numSpotShadows=I,V.numSpotMaps=b,V.numLightProbes=F,s.version=qR++)}function m(p,_){let v=0,x=0,M=0,R=0,D=0,y=0;const S=_.matrixWorldInverse;for(let P=0,W=p.length;P<W;P++){const C=p[P];if(C.isSunLight){const L=s.sun[v];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),v++}else if(C.isDirectionalLight){const L=s.directional[x];L.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(S),x++}else if(C.isSpotLight){const L=s.spot[R];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(S),R++}else if(C.isRectAreaLight){const L=s.rectArea[D];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),d.identity(),f.copy(C.matrixWorld),f.premultiply(S),d.extractRotation(f),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),D++}else if(C.isPointLight){const L=s.point[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),M++}else if(C.isHemisphereLight){const L=s.hemi[y];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),y++}}}return{setup:h,setupView:m,state:s}}function ox(o){const t=new jR(o),i=[],s=[],c=[];function f(x){v.camera=x,i.length=0,s.length=0,c.length=0}function d(x){i.push(x)}function h(x){s.push(x)}function m(x){c.push(x)}function p(){t.setup(i)}function _(x){t.setupView(i,x)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:p,setupLightsView:_,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function ZR(o){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new ox(o),t.set(c,[h])):f>=d.length?(h=new ox(o),d.push(h)):h=d[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
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
}`,JR=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],$R=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],lx=new _n,ul=new pe,Vh=new pe;function e3(o,t,i){let s=new Vx;const c=new Ft,f=new Ft,d=new cn,h=new ob,m=new lb,p={},_=i.maxTextureSize,v={[qr]:Kn,[Kn]:qr,[aa]:aa},x=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:KR,fragmentShader:QR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const R=new Oa;R.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Fi(R,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let S=this.type;this.render=function(O,I,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===jM&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gu);const N=o.getRenderTarget(),F=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Na),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const te=S!==this.type;te&&I.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(ee=>ee.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,ee=O.length;j<ee;j++){const X=O[j],k=X.shadow;if(k===void 0){st("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;c.copy(k.mapSize);const re=k.getFrameExtents();c.multiply(re),f.copy(k.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/re.x),c.x=f.x*re.x,k.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/re.y),c.y=f.y*re.y,k.mapSize.y=f.y));const ce=o.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ce,k.map===null||te===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===dl){if(X.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new zi(c.x,c.y,{format:jr,type:ca,minFilter:In,magFilter:In,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new xl(c.x,c.y,ra),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=La,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Un,k.map.depthTexture.magFilter=Un}else X.isPointLight?(k.map=new Kx(c.x),k.map.depthTexture=new tb(c.x,la)):(k.map=new zi(c.x,c.y),k.map.depthTexture=new xl(c.x,c.y,la)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=La,this.type===gu?(k.map.depthTexture.compareFunction=ce?kp:Xp,k.map.depthTexture.minFilter=In,k.map.depthTexture.magFilter=In):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Un,k.map.depthTexture.magFilter=Un);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==c.x||k.map.height!==c.y)&&k.map.setSize(c.x,c.y);const he=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,b);for(let xe=0;xe<he;xe++){const Ge=k.getCamera(xe);if(X.isPointLight){const qe=k.camera,B=k.matrix,me=X.distance||qe.far;me!==qe.far&&(qe.far=me,qe.updateProjectionMatrix()),ul.setFromMatrixPosition(X.matrixWorld),qe.position.copy(ul),Vh.copy(qe.position),Vh.add(JR[xe]),qe.up.copy($R[xe]),qe.lookAt(Vh),qe.updateMatrixWorld(),B.makeTranslation(-ul.x,-ul.y,-ul.z),lx.multiplyMatrices(qe.projectionMatrix,qe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(lx,qe.coordinateSystem,qe.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,xe),o.clear();else{xe===0&&(o.setRenderTarget(k.map),o.clear());const qe=k.getViewport(xe);d.set(f.x*qe.x,f.y*qe.y,f.x*qe.z,f.y*qe.w),Z.viewport(d)}s=k.getFrustum(xe),C(I,b,Ge,X,this.type)}k.isPointLightShadow!==!0&&this.type===dl&&P(k,b),k.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(N,F,V)};function P(O,I){const b=t.update(D);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null?O.mapPass=new zi(c.x,c.y,{format:jr,type:ca}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value.set(O.map.width,O.map.height),x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(I,null,b,x,D,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value.set(O.map.width,O.map.height),M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(I,null,b,M,D,null)}function W(O,I,b,N){let F=null;const V=b.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)F=V;else if(F=b.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Z=F.uuid,te=I.uuid;let j=p[Z];j===void 0&&(j={},p[Z]=j);let ee=j[te];ee===void 0&&(ee=F.clone(),j[te]=ee,I.addEventListener("dispose",L)),F=ee}if(F.visible=I.visible,F.wireframe=I.wireframe,N===dl?F.side=I.shadowSide!==null?I.shadowSide:I.side:F.side=I.shadowSide!==null?I.shadowSide:v[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Z=o.properties.get(F);Z.light=b}return F}function C(O,I,b,N,F){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&F===dl)&&(!O.frustumCulled||O.intersectsFrustum(s))){O.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,O.matrixWorld);const te=t.update(O),j=O.material;if(Array.isArray(j)){const ee=te.groups;for(let X=0,k=ee.length;X<k;X++){const re=ee[X],ce=j[re.materialIndex];if(ce&&ce.visible){const he=W(O,ce,N,F);O.onBeforeShadow(o,O,I,b,te,he,re),o.renderBufferDirect(b,null,te,he,O,re),O.onAfterShadow(o,O,I,b,te,he,re)}}}else if(j.visible){const ee=W(O,j,N,F);O.onBeforeShadow(o,O,I,b,te,ee,null),o.renderBufferDirect(b,null,te,ee,O,null),O.onAfterShadow(o,O,I,b,te,ee,null)}}const Z=O.children;for(let te=0,j=Z.length;te<j;te++)C(Z[te],I,b,N,F)}function L(O){O.target.removeEventListener("dispose",L);for(const b in p){const N=p[b],F=O.target.uuid;F in N&&(N[F].dispose(),delete N[F])}}}function t3(o,t){function i(){let q=!1;const we=new cn;let Me=null;const Le=new cn(0,0,0,0);return{setMask:function(Xe){Me!==Xe&&!q&&(o.colorMask(Xe,Xe,Xe,Xe),Me=Xe)},setLocked:function(Xe){q=Xe},setClear:function(Xe,be,Je,Ve,Ct){Ct===!0&&(Xe*=Ve,be*=Ve,Je*=Ve),we.set(Xe,be,Je,Ve),Le.equals(we)===!1&&(o.clearColor(Xe,be,Je,Ve),Le.copy(we))},reset:function(){q=!1,Me=null,Le.set(-1,0,0,0)}}}function s(){let q=!1,we=!1,Me=null,Le=null,Xe=null;return{setReversed:function(be){if(we!==be){const Je=t.get("EXT_clip_control");be?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),we=be;const Ve=Xe;Xe=null,this.setClear(Ve)}},getReversed:function(){return we},setTest:function(be){be?de(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(be){Me!==be&&!q&&(o.depthMask(be),Me=be)},setFunc:function(be){if(we&&(be=wE[be]),Le!==be){switch(be){case qh:o.depthFunc(o.NEVER);break;case Yh:o.depthFunc(o.ALWAYS);break;case jh:o.depthFunc(o.LESS);break;case ml:o.depthFunc(o.LEQUAL);break;case Zh:o.depthFunc(o.EQUAL);break;case Kh:o.depthFunc(o.GEQUAL);break;case Qh:o.depthFunc(o.GREATER);break;case Jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=be}},setLocked:function(be){q=be},setClear:function(be){Xe!==be&&(Xe=be,we&&(be=1-be),o.clearDepth(be))},reset:function(){q=!1,Me=null,Le=null,Xe=null,we=!1}}}function c(){let q=!1,we=null,Me=null,Le=null,Xe=null,be=null,Je=null,Ve=null,Ct=null;return{setTest:function(ut){q||(ut?de(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(ut){we!==ut&&!q&&(o.stencilMask(ut),we=ut)},setFunc:function(ut,Qn,ui){(Me!==ut||Le!==Qn||Xe!==ui)&&(o.stencilFunc(ut,Qn,ui),Me=ut,Le=Qn,Xe=ui)},setOp:function(ut,Qn,ui){(be!==ut||Je!==Qn||Ve!==ui)&&(o.stencilOp(ut,Qn,ui),be=ut,Je=Qn,Ve=ui)},setLocked:function(ut){q=ut},setClear:function(ut){Ct!==ut&&(o.clearStencil(ut),Ct=ut)},reset:function(){q=!1,we=null,Me=null,Le=null,Xe=null,be=null,Je=null,Ve=null,Ct=null}}}const f=new i,d=new s,h=new c,m=new WeakMap,p=new WeakMap;let _={},v={},x={},M=new WeakMap,R=[],D=null,y=!1,S=null,P=null,W=null,C=null,L=null,O=null,I=null,b=new Bt(0,0,0),N=0,F=!1,V=null,Z=null,te=null,j=null,ee=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,re=0;const ce=o.getParameter(o.VERSION);ce.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ce)[1]),k=re>=1):ce.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),k=re>=2);let he=null,xe={};const Ge=o.getParameter(o.SCISSOR_BOX),qe=o.getParameter(o.VIEWPORT),B=new cn().fromArray(Ge),me=new cn().fromArray(qe);function Ae(q,we,Me,Le){const Xe=new Uint8Array(4),be=o.createTexture();o.bindTexture(q,be),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Je=0;Je<Me;Je++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,Xe):o.texImage2D(we+Je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xe);return be}const K={};K[o.TEXTURE_2D]=Ae(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Ae(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Ae(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Ae(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),de(o.DEPTH_TEST),d.setFunc(ml),tt(!1),it(hv),de(o.CULL_FACE),_t(Na);function de(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function Te(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function De(q,we){return x[q]!==we?(o.bindFramebuffer(q,we),x[q]=we,q===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=we),q===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=we),!0):!1}function ve(q,we){let Me=R,Le=!1;if(q){Me=M.get(we),Me===void 0&&(Me=[],M.set(we,Me));const Xe=q.textures;if(Me.length!==Xe.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let be=0,Je=Xe.length;be<Je;be++)Me[be]=o.COLOR_ATTACHMENT0+be;Me.length=Xe.length,Le=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Le=!0);Le&&o.drawBuffers(Me)}function Ce(q){return D!==q?(o.useProgram(q),D=q,!0):!1}const Vt={[Js]:o.FUNC_ADD,[KM]:o.FUNC_SUBTRACT,[QM]:o.FUNC_REVERSE_SUBTRACT};Vt[JM]=o.MIN,Vt[$M]=o.MAX;const mt={[eE]:o.ZERO,[tE]:o.ONE,[nE]:o.SRC_COLOR,[vx]:o.SRC_ALPHA,[lE]:o.SRC_ALPHA_SATURATE,[sE]:o.DST_COLOR,[aE]:o.DST_ALPHA,[iE]:o.ONE_MINUS_SRC_COLOR,[xx]:o.ONE_MINUS_SRC_ALPHA,[oE]:o.ONE_MINUS_DST_COLOR,[rE]:o.ONE_MINUS_DST_ALPHA,[cE]:o.CONSTANT_COLOR,[uE]:o.ONE_MINUS_CONSTANT_COLOR,[fE]:o.CONSTANT_ALPHA,[dE]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(q,we,Me,Le,Xe,be,Je,Ve,Ct,ut){if(q===Na){y===!0&&(Te(o.BLEND),y=!1);return}if(y===!1&&(de(o.BLEND),y=!0),q!==ZM){if(q!==S||ut!==F){if((P!==Js||L!==Js)&&(o.blendEquation(o.FUNC_ADD),P=Js,L=Js),ut)switch(q){case pl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pv:o.blendFunc(o.ONE,o.ONE);break;case mv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case gv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Pt("WebGLState: Invalid blending: ",q);break}else switch(q){case pl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mv:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gv:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",q);break}W=null,C=null,O=null,I=null,b.set(0,0,0),N=0,S=q,F=ut}return}Xe=Xe||we,be=be||Me,Je=Je||Le,(we!==P||Xe!==L)&&(o.blendEquationSeparate(Vt[we],Vt[Xe]),P=we,L=Xe),(Me!==W||Le!==C||be!==O||Je!==I)&&(o.blendFuncSeparate(mt[Me],mt[Le],mt[be],mt[Je]),W=Me,C=Le,O=be,I=Je),(Ve.equals(b)===!1||Ct!==N)&&(o.blendColor(Ve.r,Ve.g,Ve.b,Ct),b.copy(Ve),N=Ct),S=q,F=!1}function yt(q,we){q.side===aa?Te(o.CULL_FACE):de(o.CULL_FACE);let Me=q.side===Kn;we&&(Me=!Me),tt(Me),q.blending===pl&&q.transparent===!1?_t(Na):_t(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),f.setMask(q.colorWrite);const Le=q.stencilWrite;h.setTest(Le),Le&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),fn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function tt(q){V!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),V=q)}function it(q){q!==qM?(de(o.CULL_FACE),q!==Z&&(q===hv?o.cullFace(o.BACK):q===YM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),Z=q}function Xt(q){q!==te&&(k&&o.lineWidth(q),te=q)}function fn(q,we,Me){q?(de(o.POLYGON_OFFSET_FILL),(j!==we||ee!==Me)&&(j=we,ee=Me,d.getReversed()&&(we=-we),o.polygonOffset(we,Me))):Te(o.POLYGON_OFFSET_FILL)}function Ot(q){q?de(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function en(q){q===void 0&&(q=o.TEXTURE0+X-1),he!==q&&(o.activeTexture(q),he=q)}function Y(q,we,Me){Me===void 0&&(he===null?Me=o.TEXTURE0+X-1:Me=he);let Le=xe[Me];Le===void 0&&(Le={type:void 0,texture:void 0},xe[Me]=Le),(Le.type!==q||Le.texture!==we)&&(he!==Me&&(o.activeTexture(Me),he=Me),o.bindTexture(q,we||K[q]),Le.type=q,Le.texture=we)}function nn(){const q=xe[he];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Lt(){try{o.compressedTexImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function E(){try{o.texSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function ne(){try{o.texSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function ge(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Re(){try{o.texStorage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ue(){try{o.texStorage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function _e(){try{o.texImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ee(){try{o.texImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ne(q){return v[q]!==void 0?v[q]:o.getParameter(q)}function $e(q,we){v[q]!==we&&(o.pixelStorei(q,we),v[q]=we)}function ze(q){B.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),B.copy(q))}function Ie(q){me.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),me.copy(q))}function ke(q,we){let Me=p.get(we);Me===void 0&&(Me=new WeakMap,p.set(we,Me));let Le=Me.get(q);Le===void 0&&(Le=o.getUniformBlockIndex(we,q.name),Me.set(q,Le))}function nt(q,we){const Le=p.get(we).get(q);m.get(we)!==Le&&(o.uniformBlockBinding(we,Le,q.__bindingPointIndex),m.set(we,Le))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},he=null,xe={},x={},M=new WeakMap,R=[],D=null,y=!1,S=null,P=null,W=null,C=null,L=null,O=null,I=null,b=new Bt(0,0,0),N=0,F=!1,V=null,Z=null,te=null,j=null,ee=null,B.set(0,0,o.canvas.width,o.canvas.height),me.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:de,disable:Te,bindFramebuffer:De,drawBuffers:ve,useProgram:Ce,setBlending:_t,setMaterial:yt,setFlipSided:tt,setCullFace:it,setLineWidth:Xt,setPolygonOffset:fn,setScissorTest:Ot,activeTexture:en,bindTexture:Y,unbindTexture:nn,compressedTexImage2D:Lt,compressedTexImage3D:U,texImage2D:_e,texImage3D:Ee,pixelStorei:$e,getParameter:Ne,updateUBOMapping:ke,uniformBlockBinding:nt,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:ne,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:ze,viewport:Ie,reset:lt}}function n3(o,t,i,s,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,_=new WeakMap,v=new Set;let x;const M=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(U,E){return R?new OffscreenCanvas(U,E):vl("canvas")}function y(U,E,ne){let le=1;const ge=Lt(U);if((ge.width>ne||ge.height>ne)&&(le=ne/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Re=Math.floor(le*ge.width),Ue=Math.floor(le*ge.height);x===void 0&&(x=D(Re,Ue));const _e=E?D(Re,Ue):x;return _e.width=Re,_e.height=Ue,_e.getContext("2d").drawImage(U,0,0,Re,Ue),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Re+"x"+Ue+")."),_e}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function S(U){return U.generateMipmaps}function P(U){o.generateMipmap(U)}function W(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(U,E,ne,le,ge,Re=!1){if(U!==null){if(o[U]!==void 0)return o[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ue;le&&(Ue=t.get("EXT_texture_norm16"),Ue||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=E;if(E===o.RED&&(ne===o.FLOAT&&(_e=o.R32F),ne===o.HALF_FLOAT&&(_e=o.R16F),ne===o.UNSIGNED_BYTE&&(_e=o.R8),ne===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.R16_EXT),ne===o.SHORT&&Ue&&(_e=Ue.R16_SNORM_EXT)),E===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(_e=o.R8UI),ne===o.UNSIGNED_SHORT&&(_e=o.R16UI),ne===o.UNSIGNED_INT&&(_e=o.R32UI),ne===o.BYTE&&(_e=o.R8I),ne===o.SHORT&&(_e=o.R16I),ne===o.INT&&(_e=o.R32I)),E===o.RG&&(ne===o.FLOAT&&(_e=o.RG32F),ne===o.HALF_FLOAT&&(_e=o.RG16F),ne===o.UNSIGNED_BYTE&&(_e=o.RG8),ne===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RG16_EXT),ne===o.SHORT&&Ue&&(_e=Ue.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(_e=o.RG8UI),ne===o.UNSIGNED_SHORT&&(_e=o.RG16UI),ne===o.UNSIGNED_INT&&(_e=o.RG32UI),ne===o.BYTE&&(_e=o.RG8I),ne===o.SHORT&&(_e=o.RG16I),ne===o.INT&&(_e=o.RG32I)),E===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(_e=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(_e=o.RGB16UI),ne===o.UNSIGNED_INT&&(_e=o.RGB32UI),ne===o.BYTE&&(_e=o.RGB8I),ne===o.SHORT&&(_e=o.RGB16I),ne===o.INT&&(_e=o.RGB32I)),E===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(_e=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(_e=o.RGBA16UI),ne===o.UNSIGNED_INT&&(_e=o.RGBA32UI),ne===o.BYTE&&(_e=o.RGBA8I),ne===o.SHORT&&(_e=o.RGBA16I),ne===o.INT&&(_e=o.RGBA32I)),E===o.RGB&&(ne===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGB16_EXT),ne===o.SHORT&&Ue&&(_e=Ue.RGB16_SNORM_EXT),ne===o.UNSIGNED_INT_5_9_9_9_REV&&(_e=o.RGB9_E5),ne===o.UNSIGNED_INT_10F_11F_11F_REV&&(_e=o.R11F_G11F_B10F)),E===o.RGBA){const Ee=Re?Tu:Nt.getTransfer(ge);ne===o.FLOAT&&(_e=o.RGBA32F),ne===o.HALF_FLOAT&&(_e=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(_e=Ee===Yt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGBA16_EXT),ne===o.SHORT&&Ue&&(_e=Ue.RGBA16_SNORM_EXT),ne===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function L(U,E){let ne;return U?E===null||E===la||E===_l?ne=o.DEPTH24_STENCIL8:E===ra?ne=o.DEPTH32F_STENCIL8:E===gl&&(ne=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===_l?ne=o.DEPTH_COMPONENT24:E===ra?ne=o.DEPTH_COMPONENT32F:E===gl&&(ne=o.DEPTH_COMPONENT16),ne}function O(U,E){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),N(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function b(U){const E=U.target;E.removeEventListener("dispose",b),V(E)}function N(U){const E=s.get(U);if(E.__webglInit===void 0)return;const ne=U.source,le=M.get(ne);if(le){const ge=le[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&F(U),Object.keys(le).length===0&&M.delete(ne)}s.remove(U)}function F(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const ne=U.source,le=M.get(ne);delete le[E.__cacheKey],d.memory.textures--}function V(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let ge=0;ge<E.__webglFramebuffer[le].length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[le][ge]);else o.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)o.deleteFramebuffer(E.__webglFramebuffer[le]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ne=U.textures;for(let le=0,ge=ne.length;le<ge;le++){const Re=s.get(ne[le]);Re.__webglTexture&&(o.deleteTexture(Re.__webglTexture),d.memory.textures--),s.remove(ne[le])}s.remove(U)}let Z=0;function te(){Z=0}function j(){return Z}function ee(U){Z=U}function X(){const U=Z;return U>=c.maxTextures&&st("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+c.maxTextures),Z+=1,U}function k(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function re(U,E){const ne=s.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ne.__version!==U.version){const le=U.image;if(le===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(ne,U,E);return}}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+E)}function ce(U,E){const ne=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){Te(ne,U,E);return}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+E)}function he(U,E){const ne=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){Te(ne,U,E);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+E)}function xe(U,E){const ne=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ne.__version!==U.version){De(ne,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+E)}const Ge={[$h]:o.REPEAT,[Pi]:o.CLAMP_TO_EDGE,[ep]:o.MIRRORED_REPEAT},qe={[Un]:o.NEAREST,[mE]:o.NEAREST_MIPMAP_NEAREST,[qc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[dh]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},B={[xE]:o.NEVER,[bE]:o.ALWAYS,[SE]:o.LESS,[Xp]:o.LEQUAL,[yE]:o.EQUAL,[kp]:o.GEQUAL,[ME]:o.GREATER,[EE]:o.NOTEQUAL};function me(U,E){if(E.type===ra&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===dh||E.magFilter===qc||E.magFilter===kr||E.minFilter===In||E.minFilter===dh||E.minFilter===qc||E.minFilter===kr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Ge[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Ge[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Ge[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,qe[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,qe[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==qc&&E.minFilter!==kr||E.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const ne=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,c.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(U,E){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const le=E.source;let ge=M.get(le);ge===void 0&&(ge={},M.set(le,ge));const Re=k(E);if(Re!==U.__cacheKey){ge[Re]===void 0&&(ge[Re]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),ge[Re].usedTimes++;const Ue=ge[U.__cacheKey];Ue!==void 0&&(ge[U.__cacheKey].usedTimes--,Ue.usedTimes===0&&F(E)),U.__cacheKey=Re,U.__webglTexture=ge[Re].texture}return ne}function K(U,E,ne){return Math.floor(Math.floor(U/ne)/E)}function de(U,E,ne,le){const Re=U.updateRanges;if(Re.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,ne,le,E.data);else{Re.sort(($e,ze)=>$e.start-ze.start);let Ue=0;for(let $e=1;$e<Re.length;$e++){const ze=Re[Ue],Ie=Re[$e],ke=ze.start+ze.count,nt=K(Ie.start,E.width,4),lt=K(ze.start,E.width,4);Ie.start<=ke+1&&nt===lt&&K(Ie.start+Ie.count-1,E.width,4)===nt?ze.count=Math.max(ze.count,Ie.start+Ie.count-ze.start):(++Ue,Re[Ue]=Ie)}Re.length=Ue+1;const _e=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),Ne=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let $e=0,ze=Re.length;$e<ze;$e++){const Ie=Re[$e],ke=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),lt=ke%E.width,q=Math.floor(ke/E.width),we=nt,Me=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,lt,q,we,Me,ne,le,E.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_e),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ne)}}function Te(U,E,ne){let le=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=o.TEXTURE_3D);const ge=Ae(U,E),Re=E.source;i.bindTexture(le,U.__webglTexture,o.TEXTURE0+ne);const Ue=s.get(Re);if(Re.version!==Ue.__version||ge===!0){if(i.activeTexture(o.TEXTURE0+ne),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Me=Nt.getPrimaries(Nt.workingColorSpace),Le=E.colorSpace===mr?null:Nt.getPrimaries(E.colorSpace),Xe=E.colorSpace===mr||Me===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Ee=y(E.image,!1,c.maxTextureSize);Ee=nn(E,Ee);const Ne=f.convert(E.format,E.colorSpace),$e=f.convert(E.type);let ze=C(E.internalFormat,Ne,$e,E.normalized,E.colorSpace,E.isVideoTexture);me(le,E);let Ie;const ke=E.mipmaps,nt=E.isVideoTexture!==!0,lt=Ue.__version===void 0||ge===!0,q=Re.dataReady,we=O(E,Ee);if(E.isDepthTexture)ze=L(E.format===Wr,E.type),lt&&(nt?i.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ne,$e,null));else if(E.isDataTexture)if(ke.length>0){nt&&lt&&i.texStorage2D(o.TEXTURE_2D,we,ze,ke[0].width,ke[0].height);for(let Me=0,Le=ke.length;Me<Le;Me++)Ie=ke[Me],nt?q&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ne,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ne,$e,Ie.data);E.generateMipmaps=!1}else nt?(lt&&i.texStorage2D(o.TEXTURE_2D,we,ze,Ee.width,Ee.height),q&&de(E,Ee,Ne,$e)):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ne,$e,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,ze,ke[0].width,ke[0].height,Ee.depth);for(let Me=0,Le=ke.length;Me<Le;Me++)if(Ie=ke[Me],E.format!==Ii)if(Ne!==null)if(nt){if(q)if(E.layerUpdates.size>0){const Xe=Hv(Ie.width,Ie.height,E.format,E.type);for(const be of E.layerUpdates){const Je=Ie.data.subarray(be*Xe/Ie.data.BYTES_PER_ELEMENT,(be+1)*Xe/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,be,Ie.width,Ie.height,1,Ne,Je)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,Ne,Ie.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,Ie.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,Ne,$e,Ie.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,Ne,$e,Ie.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{nt&&lt&&i.texStorage2D(o.TEXTURE_2D,we,ze,ke[0].width,ke[0].height);for(let Me=0,Le=ke.length;Me<Le;Me++)Ie=ke[Me],E.format!==Ii?Ne!==null?nt?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ne,Ie.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ie.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?q&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ne,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ne,$e,Ie.data)}else if(E.isDataArrayTexture)if(nt){if(lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,ze,Ee.width,Ee.height,Ee.depth),q)if(E.layerUpdates.size>0){const Me=Hv(Ee.width,Ee.height,E.format,E.type);for(const Le of E.layerUpdates){const Xe=Ee.data.subarray(Le*Me/Ee.data.BYTES_PER_ELEMENT,(Le+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Le,Ee.width,Ee.height,1,Ne,$e,Xe)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,$e,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Ne,$e,Ee.data);else if(E.isData3DTexture)nt?(lt&&i.texStorage3D(o.TEXTURE_3D,we,ze,Ee.width,Ee.height,Ee.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,$e,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Ne,$e,Ee.data);else if(E.isFramebufferTexture){if(lt)if(nt)i.texStorage2D(o.TEXTURE_2D,we,ze,Ee.width,Ee.height);else{let Me=Ee.width,Le=Ee.height;for(let Xe=0;Xe<we;Xe++)i.texImage2D(o.TEXTURE_2D,Xe,ze,Me,Le,0,Ne,$e,null),Me>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Ee.parentNode!==Me){Me.appendChild(Ee),v.add(E),Me.onpaint=Le=>{const Xe=Le.changedElements;for(const be of v)Xe.includes(be.image)&&(be.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const Xe=o.RGBA,be=o.RGBA,Je=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xe,be,Je,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ke.length>0){if(nt&&lt){const Me=Lt(ke[0]);i.texStorage2D(o.TEXTURE_2D,we,ze,Me.width,Me.height)}for(let Me=0,Le=ke.length;Me<Le;Me++)Ie=ke[Me],nt?q&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ne,$e,Ie):i.texImage2D(o.TEXTURE_2D,Me,ze,Ne,$e,Ie);E.generateMipmaps=!1}else if(nt){if(lt){const Me=Lt(Ee);i.texStorage2D(o.TEXTURE_2D,we,ze,Me.width,Me.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ne,$e,Ee)}else i.texImage2D(o.TEXTURE_2D,0,ze,Ne,$e,Ee);S(E)&&P(le),Ue.__version=Re.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function De(U,E,ne){if(E.image.length!==6)return;const le=Ae(U,E),ge=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+ne);const Re=s.get(ge);if(ge.version!==Re.__version||le===!0){i.activeTexture(o.TEXTURE0+ne);const Ue=Nt.getPrimaries(Nt.workingColorSpace),_e=E.colorSpace===mr?null:Nt.getPrimaries(E.colorSpace),Ee=E.colorSpace===mr||Ue===_e?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,$e=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let be=0;be<6;be++)!Ne&&!$e?ze[be]=y(E.image[be],!0,c.maxCubemapSize):ze[be]=$e?E.image[be].image:E.image[be],ze[be]=nn(E,ze[be]);const Ie=ze[0],ke=f.convert(E.format,E.colorSpace),nt=f.convert(E.type),lt=C(E.internalFormat,ke,nt,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,we=Re.__version===void 0||le===!0,Me=ge.dataReady;let Le=O(E,Ie);me(o.TEXTURE_CUBE_MAP,E);let Xe;if(Ne){q&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,lt,Ie.width,Ie.height);for(let be=0;be<6;be++){Xe=ze[be].mipmaps;for(let Je=0;Je<Xe.length;Je++){const Ve=Xe[Je];E.format!==Ii?ke!==null?q?Me&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ve.width,Ve.height,ke,Ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,lt,Ve.width,Ve.height,0,Ve.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ve.width,Ve.height,ke,nt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,lt,Ve.width,Ve.height,0,ke,nt,Ve.data)}}}else{if(Xe=E.mipmaps,q&&we){Xe.length>0&&Le++;const be=Lt(ze[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,lt,be.width,be.height)}for(let be=0;be<6;be++)if($e){q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze[be].width,ze[be].height,ke,nt,ze[be].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,ze[be].width,ze[be].height,0,ke,nt,ze[be].data);for(let Je=0;Je<Xe.length;Je++){const Ct=Xe[Je].image[be].image;q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,Ct.width,Ct.height,ke,nt,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,lt,Ct.width,Ct.height,0,ke,nt,Ct.data)}}else{q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ke,nt,ze[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,ke,nt,ze[be]);for(let Je=0;Je<Xe.length;Je++){const Ve=Xe[Je];q?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,ke,nt,Ve.image[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,lt,ke,nt,Ve.image[be])}}}S(E)&&P(o.TEXTURE_CUBE_MAP),Re.__version=ge.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ve(U,E,ne,le,ge,Re){const Ue=f.convert(ne.format,ne.colorSpace),_e=f.convert(ne.type),Ee=C(ne.internalFormat,Ue,_e,ne.normalized,ne.colorSpace),Ne=s.get(E),$e=s.get(ne);if($e.__renderTarget=E,!Ne.__hasExternalTextures){const ze=Math.max(1,E.width>>Re),Ie=Math.max(1,E.height>>Re);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?i.texImage3D(ge,Re,Ee,ze,Ie,E.depth,0,Ue,_e,null):i.texImage2D(ge,Re,Ee,ze,Ie,0,Ue,_e,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),en(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,le,ge,$e.__webglTexture,0,Ot(E)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,le,ge,$e.__webglTexture,Re),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(U,E,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const le=E.depthTexture,ge=le&&le.isDepthTexture?le.type:null,Re=L(E.stencilBuffer,ge),Ue=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;en(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot(E),Re,E.width,E.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot(E),Re,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Re,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ue,o.RENDERBUFFER,U)}else{const le=E.textures;for(let ge=0;ge<le.length;ge++){const Re=le[ge],Ue=f.convert(Re.format,Re.colorSpace),_e=f.convert(Re.type),Ee=C(Re.internalFormat,Ue,_e,Re.normalized,Re.colorSpace);en(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot(E),Ee,E.width,E.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot(E),Ee,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(U,E,ne){const le=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),me(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ne=f.convert(E.depthTexture.format),$e=f.convert(E.depthTexture.type);let ze;E.depthTexture.format===La?ze=o.DEPTH_COMPONENT24:E.depthTexture.format===Wr&&(ze=o.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ze,E.width,E.height,0,Ne,$e,null)}}else re(E.depthTexture,0);const Re=ge.__webglTexture,Ue=Ot(E),_e=le?o.TEXTURE_CUBE_MAP_POSITIVE_X+ne:o.TEXTURE_2D,Ee=E.depthTexture.format===Wr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===La)en(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,_e,Re,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,_e,Re,0);else if(E.depthTexture.format===Wr)en(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,_e,Re,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,_e,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(U){const E=s.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const le=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",ge)};le.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=le}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(ne)for(let le=0;le<6;le++)Vt(E.__webglFramebuffer[le],U,le);else{const le=U.texture.mipmaps;le&&le.length>0?Vt(E.__webglFramebuffer[0],U,0):Vt(E.__webglFramebuffer,U,0)}else if(ne){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=o.createRenderbuffer(),Ce(E.__webglDepthbuffer[le],U,!1);else{const ge=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[le];o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Re)}}else{const le=U.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ce(E.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Re)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _t(U,E,ne){const le=s.get(U);E!==void 0&&ve(le.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&mt(U)}function yt(U){const E=U.texture,ne=s.get(U),le=s.get(E);U.addEventListener("dispose",b);const ge=U.textures,Re=U.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture()),le.__version=E.version,d.memory.textures++),Re){ne.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)ne.__webglFramebuffer[_e][Ee]=o.createFramebuffer()}else ne.__webglFramebuffer[_e]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)ne.__webglFramebuffer[_e]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Ue)for(let _e=0,Ee=ge.length;_e<Ee;_e++){const Ne=s.get(ge[_e]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&en(U)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const Ee=ge[_e];ne.__webglColorRenderbuffer[_e]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[_e]);const Ne=f.convert(Ee.format,Ee.colorSpace),$e=f.convert(Ee.type),ze=C(Ee.internalFormat,Ne,$e,Ee.normalized,Ee.colorSpace,U.isXRRenderTarget===!0),Ie=Ot(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,ze,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,ne.__webglColorRenderbuffer[_e])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),Ce(ne.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Re){i.bindTexture(o.TEXTURE_CUBE_MAP,le.__webglTexture),me(o.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)ve(ne.__webglFramebuffer[_e][Ee],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else ve(ne.__webglFramebuffer[_e],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(E)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let _e=0,Ee=ge.length;_e<Ee;_e++){const Ne=ge[_e],$e=s.get(Ne);let ze=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ze=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,$e.__webglTexture),me(ze,Ne),ve(ne.__webglFramebuffer,U,Ne,o.COLOR_ATTACHMENT0+_e,ze,0),S(Ne)&&P(ze)}i.unbindTexture()}else{let _e=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(_e=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_e,le.__webglTexture),me(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)ve(ne.__webglFramebuffer[Ee],U,E,o.COLOR_ATTACHMENT0,_e,Ee);else ve(ne.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,_e,0);S(E)&&P(_e),i.unbindTexture()}U.depthBuffer&&mt(U)}function tt(U){const E=U.textures;for(let ne=0,le=E.length;ne<le;ne++){const ge=E[ne];if(S(ge)){const Re=W(U),Ue=s.get(ge).__webglTexture;i.bindTexture(Re,Ue),P(Re),i.unbindTexture()}}}const it=[],Xt=[];function fn(U){if(U.samples>0){if(en(U)===!1){const E=U.textures,ne=U.width,le=U.height;let ge=o.COLOR_BUFFER_BIT;const Re=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=s.get(U),_e=E.length>1;if(_e)for(let Ne=0;Ne<E.length;Ne++)i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ee=U.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),_e){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const $e=s.get(E[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$e,0)}o.blitFramebuffer(0,0,ne,le,0,0,ne,le,ge,o.NEAREST),m===!0&&(it.length=0,Xt.length=0,it.push(o.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(it.push(Re),Xt.push(Re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_e)for(let Ne=0;Ne<E.length;Ne++){i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const $e=s.get(E[Ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,$e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ot(U){return Math.min(c.maxSamples,U.samples)}function en(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(U){const E=d.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function nn(U,E){const ne=U.colorSpace,le=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==bu&&ne!==mr&&(Nt.getTransfer(ne)===Yt?(le!==Ii||ge!==bi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ne)),E}function Lt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=te,this.getTextureUnits=j,this.setTextureUnits=ee,this.setTexture2D=re,this.setTexture2DArray=ce,this.setTexture3D=he,this.setTextureCube=xe,this.rebindTextures=_t,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function i3(o,t){function i(s,c=mr){let f;const d=Nt.getTransfer(c);if(s===bi)return o.UNSIGNED_BYTE;if(s===Bp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Fp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Dx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ux)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===wx)return o.BYTE;if(s===Nx)return o.SHORT;if(s===gl)return o.UNSIGNED_SHORT;if(s===zp)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ca)return o.HALF_FLOAT;if(s===Lx)return o.ALPHA;if(s===Ox)return o.RGB;if(s===Ii)return o.RGBA;if(s===La)return o.DEPTH_COMPONENT;if(s===Wr)return o.DEPTH_STENCIL;if(s===Px)return o.RED;if(s===Hp)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===Gp)return o.RG_INTEGER;if(s===Vp)return o.RGBA_INTEGER;if(s===_u||s===vu||s===xu||s===Su)if(d===Yt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===_u)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Su)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===_u)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Su)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tp||s===np||s===ip||s===ap)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===tp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===np)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ip)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ap)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rp||s===sp||s===op||s===lp||s===cp||s===Mu||s===up)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===rp||s===sp)return d===Yt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===op)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===lp)return f.COMPRESSED_R11_EAC;if(s===cp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Mu)return f.COMPRESSED_RG11_EAC;if(s===up)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===bp)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===fp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_p)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ep)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tp||s===Ap||s===Rp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Tp)return d===Yt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ap)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cp||s===wp||s===Eu||s===Np)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Cp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===wp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Np)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_l?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const a3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r3=`
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

}`;class s3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new kx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Hi({vertexShader:a3,fragmentShader:r3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fi(new io(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o3 extends Kr{constructor(t,i){super();const s=this;let c=null,f=1,d=null,h="local-floor",m=1,p=null,_=null,v=null,x=null,M=null,R=null;const D=typeof XRWebGLBinding<"u",y=new s3,S={},P=i.getContextAttributes();let W=null,C=null;const L=[],O=[],I=new Ft;let b=null,N=null;const F=new Ei;F.viewport=new cn;const V=new Ei;V.viewport=new cn;const Z=[F,V],te=new pb;let j=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=L[K];return de===void 0&&(de=new yh,L[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=L[K];return de===void 0&&(de=new yh,L[K]=de),de.getGripSpace()},this.getHand=function(K){let de=L[K];return de===void 0&&(de=new yh,L[K]=de),de.getHandSpace()};function X(K){const de=O.indexOf(K.inputSource);if(de===-1)return;const Te=L[de];Te!==void 0&&(Te.update(K.inputSource,K.frame,p||d),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){c.removeEventListener("select",X),c.removeEventListener("selectstart",X),c.removeEventListener("selectend",X),c.removeEventListener("squeeze",X),c.removeEventListener("squeezestart",X),c.removeEventListener("squeezeend",X),c.removeEventListener("end",k),c.removeEventListener("inputsourceschange",re);for(let K=0;K<L.length;K++){const de=O[K];de!==null&&(O[K]=null,L[K].disconnect(de))}j=null,ee=null,y.reset();for(const K in S)delete S[K];if(t.setRenderTarget(W),M=null,x=null,v=null,c=null,C=null,Ae.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(I.width,I.height,!1),N!==null){const K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){f=K,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(c,i)),v},this.getFrame=function(){return R},this.getSession=function(){return c},this.setSession=async function(K){if(c=K,c!==null){if(W=t.getRenderTarget(),c.addEventListener("select",X),c.addEventListener("selectstart",X),c.addEventListener("selectend",X),c.addEventListener("squeeze",X),c.addEventListener("squeezestart",X),c.addEventListener("squeezeend",X),c.addEventListener("end",k),c.addEventListener("inputsourceschange",re),P.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,De=null,ve=null;P.depth&&(ve=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=P.stencil?Wr:La,De=P.stencil?_l:la);const Ce={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:f};v=this.getBinding(),x=v.createProjectionLayer(Ce),c.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),C=new zi(x.textureWidth,x.textureHeight,{format:Ii,type:bi,depthTexture:new xl(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,i,Te),c.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new zi(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await c.requestReferenceSpace(h),Ae.setContext(c),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function re(K){for(let de=0;de<K.removed.length;de++){const Te=K.removed[de],De=O.indexOf(Te);De>=0&&(O[De]=null,L[De].disconnect(Te))}for(let de=0;de<K.added.length;de++){const Te=K.added[de];let De=O.indexOf(Te);if(De===-1){for(let Ce=0;Ce<L.length;Ce++)if(Ce>=O.length){O.push(Te),De=Ce;break}else if(O[Ce]===null){O[Ce]=Te,De=Ce;break}if(De===-1)break}const ve=L[De];ve&&ve.connect(Te)}}const ce=new pe,he=new pe;function xe(K,de,Te){ce.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(Te.matrixWorld);const De=ce.distanceTo(he),ve=de.projectionMatrix.elements,Ce=Te.projectionMatrix.elements,Vt=ve[14]/(ve[10]-1),mt=ve[14]/(ve[10]+1),_t=(ve[9]+1)/ve[5],yt=(ve[9]-1)/ve[5],tt=(ve[8]-1)/ve[0],it=(Ce[8]+1)/Ce[0],Xt=Vt*tt,fn=Vt*it,Ot=De/(-tt+it),en=Ot*-tt;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(en),K.translateZ(Ot),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ve[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Y=Vt+Ot,nn=mt+Ot,Lt=Xt-en,U=fn+(De-en),E=_t*mt/nn*Y,ne=yt*mt/nn*Y;K.projectionMatrix.makePerspective(Lt,U,E,ne,Y,nn),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ge(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(c===null)return;let de=K.near,Te=K.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),te.near=V.near=F.near=de,te.far=V.far=F.far=Te,(j!==te.near||ee!==te.far)&&(c.updateRenderState({depthNear:te.near,depthFar:te.far}),j=te.near,ee=te.far),te.layers.mask=K.layers.mask|6,F.layers.mask=te.layers.mask&-5,V.layers.mask=te.layers.mask&-3;const De=K.parent,ve=te.cameras;Ge(te,De);for(let Ce=0;Ce<ve.length;Ce++)Ge(ve[Ce],De);ve.length===2?xe(te,F,V):te.projectionMatrix.copy(F.projectionMatrix),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),qe(K,te,De)};function qe(K,de,Te){Te===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Dp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(K){m=K,x!==null&&(x.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(K){return S[K]};let B=null;function me(K,de){if(_=de.getViewerPose(p||d),R=de,_!==null){const Te=_.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let De=!1;Te.length!==te.cameras.length&&(te.cameras.length=0,De=!0);for(let mt=0;mt<Te.length;mt++){const _t=Te[mt];let yt=null;if(M!==null)yt=M.getViewport(_t);else{const it=v.getViewSubImage(x,_t);yt=it.viewport,mt===0&&(t.setRenderTargetTextures(C,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(C))}let tt=Z[mt];tt===void 0&&(tt=new Ei,tt.layers.enable(mt),tt.viewport=new cn,Z[mt]=tt),tt.matrix.fromArray(_t.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(_t.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(yt.x,yt.y,yt.width,yt.height),mt===0&&(te.matrix.copy(tt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),De===!0&&te.cameras.push(tt)}const ve=c.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const mt=v.getDepthInformation(Te[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,c.renderState)}if(ve&&ve.includes("camera-access")&&D){t.state.unbindTexture(),v=s.getBinding();for(let mt=0;mt<Te.length;mt++){const _t=Te[mt].camera;if(_t){let yt=S[_t];yt||(yt=new kx,S[_t]=yt);const tt=v.getCameraImage(_t);yt.sourceTexture=tt}}}}for(let Te=0;Te<L.length;Te++){const De=O[Te],ve=L[Te];De!==null&&ve!==void 0&&ve.update(De,de,p||d)}B&&B(K,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),R=null}const Ae=new jx;Ae.setAnimationLoop(me),this.setAnimationLoop=function(K){B=K},this.dispose=function(){}}}const l3=new _n,tS=new dt;tS.set(-1,0,0,0,1,0,0,0,1);function c3(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Wx(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function c(y,S,P,W,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(y,S):S.isMeshLambertMaterial?(f(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(y,S),v(y,S)):S.isMeshPhongMaterial?(f(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(y,S),x(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(f(y,S),R(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),D(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,P,W):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const P=t.get(S),W=P.envMap,C=P.envMapRotation;W&&(y.envMap.value=W,y.envMapRotation.value.setFromMatrix4(l3.makeRotationFromEuler(C)).transpose(),W.isCubeTexture&&W.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,P,W){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*P,y.scale.value=W*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,P){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,S){S.matcap&&(y.matcap.value=S.matcap)}function D(y,S){const P=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function u3(o,t,i,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const O=L.program;s.uniformBlockBinding(C,O)}function p(C,L){let O=c[C.id];O===void 0&&(y(C),O=_(C),c[C.id]=O,C.addEventListener("dispose",P));const I=L.program;s.updateUBOMapping(C,I);const b=t.render.frame;f[C.id]!==b&&(x(C),f[C.id]=b)}function _(C){const L=v();C.__bindingPointIndex=L;const O=o.createBuffer(),I=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,I,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,O),O}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const L=c[C.id],O=C.uniforms,I=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let b=0,N=O.length;b<N;b++){const F=O[b];if(Array.isArray(F))for(let V=0,Z=F.length;V<Z;V++)M(F[V],b,V,I);else M(F,b,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(C,L,O,I){if(D(C,L,O,I)===!0){const b=C.__offset,N=C.value;if(Array.isArray(N)){let F=0;for(let V=0;V<N.length;V++){const Z=N[V],te=S(Z);R(Z,C.__data,F),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(F+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(N,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function R(C,L,O){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,O)}function D(C,L,O,I){const b=C.value,N=L+"_"+O;if(I[N]===void 0)return typeof b=="number"||typeof b=="boolean"?I[N]=b:ArrayBuffer.isView(b)?I[N]=b.slice():I[N]=b.clone(),!0;{const F=I[N];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return I[N]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function y(C){const L=C.uniforms;let O=0;const I=16;for(let N=0,F=L.length;N<F;N++){const V=Array.isArray(L[N])?L[N]:[L[N]];for(let Z=0,te=V.length;Z<te;Z++){const j=V[Z],ee=Array.isArray(j.value)?j.value:[j.value];for(let X=0,k=ee.length;X<k;X++){const re=ee[X],ce=S(re),he=O%I,xe=he%ce.boundary,Ge=he+xe;O+=xe,Ge!==0&&I-Ge<ce.storage&&(O+=I-Ge),j.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=O,O+=ce.storage}}}const b=O%I;return b>0&&(O+=I-b),C.__size=O,C.__cache={},this}function S(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),L}function P(C){const L=C.target;L.removeEventListener("dispose",P);const O=d.indexOf(L.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(c[L.id]),delete c[L.id],delete f[L.id]}function W(){for(const C in c)o.deleteBuffer(c[C]);d=[],c={},f={}}return{bind:m,update:p,dispose:W}}const f3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function d3(){return na===null&&(na=new $E(f3,16,16,jr,ca),na.name="DFG_LUT",na.minFilter=In,na.magFilter=In,na.wrapS=Pi,na.wrapT=Pi,na.generateMipmaps=!1,na.needsUpdate=!0),na}class h3{constructor(t={}){const{canvas:i=RE(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:M=bi}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const D=M,y=new Set([Vp,Gp,Hp]),S=new Set([bi,la,gl,_l,Bp,Fp]),P=new Uint32Array(4),W=new Int32Array(4),C=new pe;let L=null,O=null;const I=[],b=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let V=!1,Z=null,te=null,j=null,ee=null;this._outputColorSpace=Mi;let X=0,k=0,re=null,ce=-1,he=null;const xe=new cn,Ge=new cn;let qe=null;const B=new Bt(0);let me=0,Ae=i.width,K=i.height,de=1,Te=null,De=null;const ve=new cn(0,0,Ae,K),Ce=new cn(0,0,Ae,K);let Vt=!1;const mt=new Vx;let _t=!1,yt=!1;const tt=new _n,it=new pe,Xt=new cn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function en(){return re===null?de:1}let Y=s;function nn(T,H){return i.getContext(T,H)}let Lt,U,E,ne,le,ge,Re,Ue,_e,Ee,Ne,$e,ze,Ie,ke,nt,lt,q,we,Me,Le,Xe,be;try{const T={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ip}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),Y===null){const H="webgl2";if(Y=nn(H,T),Y===null)throw nn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(T){throw i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),Pt("WebGLRenderer: "+T.message),T}function Je(){Lt=new dA(Y),Lt.init(),Le=new i3(Y,Lt),U=new nA(Y,Lt,t,Le),E=new t3(Y,Lt),U.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),te=Y.createFramebuffer(),j=Y.createFramebuffer(),ee=Y.createFramebuffer(),ne=new mA(Y),le=new GR,ge=new n3(Y,Lt,E,le,U,Le,ne),Re=new fA(F),Ue=new _b(Y),Xe=new eA(Y,Ue),_e=new hA(Y,Ue,ne,Xe),Ee=new _A(Y,_e,Ue,Xe,ne),q=new gA(Y,U,ge),ke=new iA(le),Ne=new HR(F,Re,Lt,U,Xe,ke),$e=new c3(F,le),ze=new XR,Ie=new ZR(Lt),lt=new $1(F,Re,E,Ee,R,m),nt=new e3(F,Ee,U),be=new u3(Y,ne,U,E),we=new tA(Y,Lt,ne),Me=new pA(Y,Lt,ne),ne.programs=Ne.programs,F.capabilities=U,F.extensions=Lt,F.properties=le,F.renderLists=ze,F.shadowMap=nt,F.state=E,F.info=ne}D!==bi&&(N=new xA(D,i.width,i.height,h,c,f));const Ve=new o3(F,Y);this.xr=Ve,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=Lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(T){T!==void 0&&(de=T,this.setSize(Ae,K,!1))},this.getSize=function(T){return T.set(Ae,K)},this.setSize=function(T,H,fe=!0){if(Ve.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=T,K=H,i.width=Math.floor(T*de),i.height=Math.floor(H*de),fe===!0&&(i.style.width=T+"px",i.style.height=H+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Ae*de,K*de).floor()},this.setDrawingBufferSize=function(T,H,fe){Ae=T,K=H,de=fe,i.width=Math.floor(T*fe),i.height=Math.floor(H*fe),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(D===bi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(xe)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,H,fe,ae){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,H,fe,ae),E.viewport(xe.copy(ve).multiplyScalar(de).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,H,fe,ae){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,H,fe,ae),E.scissor(Ge.copy(Ce).multiplyScalar(de).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(T){E.setScissorTest(Vt=T)},this.setOpaqueSort=function(T){Te=T},this.setTransparentSort=function(T){De=T},this.getClearColor=function(T){return T.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,fe=!0){let ae=0;if(T){let se=!1;if(re!==null){const Be=re.texture.format;se=y.has(Be)}if(se){const Be=re.texture.type,We=S.has(Be),Oe=lt.getClearColor(),Ze=lt.getClearAlpha(),Ke=Oe.r,rt=Oe.g,ft=Oe.b;We?(P[0]=Ke,P[1]=rt,P[2]=ft,P[3]=Ze,Y.clearBufferuiv(Y.COLOR,0,P)):(W[0]=Ke,W[1]=rt,W[2]=ft,W[3]=Ze,Y.clearBufferiv(Y.COLOR,0,W))}else ae|=Y.COLOR_BUFFER_BIT}H&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Z=T},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),lt.dispose(),ze.dispose(),Ie.dispose(),le.dispose(),Re.dispose(),Ee.dispose(),Xe.dispose(),be.dispose(),Ne.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",_r),Ve.removeEventListener("sessionend",Ia),Gi.stop()};function Ct(T){T.preventDefault(),Sv("WebGLRenderer: Context Lost."),V=!0}function ut(){Sv("WebGLRenderer: Context Restored."),V=!1;const T=ne.autoReset,H=nt.enabled,fe=nt.autoUpdate,ae=nt.needsUpdate,se=nt.type;Je(),ne.autoReset=T,nt.enabled=H,nt.autoUpdate=fe,nt.needsUpdate=ae,nt.type=se}function Qn(T){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ui(T){const H=T.target;H.removeEventListener("dispose",ui),Uu(H)}function Uu(T){Qr(T),le.remove(T)}function Qr(T){const H=le.get(T).programs;H!==void 0&&(H.forEach(function(fe){Ne.releaseProgram(fe)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,fe,ae,se,Be){H===null&&(H=fn);const We=se.isMesh&&se.matrixWorld.determinantAffine()<0,Oe=ho(T,H,fe,ae,se);E.setMaterial(ae,We);let Ze=fe.index,Ke=1;if(ae.wireframe===!0){if(Ze=_e.getWireframeAttribute(fe),Ze===void 0)return;Ke=2}const rt=fe.drawRange,ft=fe.attributes.position;let Ye=rt.start*Ke,Mt=(rt.start+rt.count)*Ke;Be!==null&&(Ye=Math.max(Ye,Be.start*Ke),Mt=Math.min(Mt,(Be.start+Be.count)*Ke)),Ze!==null?(Ye=Math.max(Ye,0),Mt=Math.min(Mt,Ze.count)):ft!=null&&(Ye=Math.max(Ye,0),Mt=Math.min(Mt,ft.count));const vt=Mt-Ye;if(vt<0||vt===1/0)return;Xe.setup(se,ae,Oe,fe,Ze);let jt,Ht=we;if(Ze!==null&&(jt=Ue.get(Ze),Ht=Me,Ht.setIndex(jt)),se.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*en()),Ht.setMode(Y.LINES)):Ht.setMode(Y.TRIANGLES);else if(se.isLine){let vn=ae.linewidth;vn===void 0&&(vn=1),E.setLineWidth(vn*en()),se.isLineSegments?Ht.setMode(Y.LINES):se.isLineLoop?Ht.setMode(Y.LINE_LOOP):Ht.setMode(Y.LINE_STRIP)}else se.isPoints?Ht.setMode(Y.POINTS):se.isSprite&&Ht.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const vn=se._multiDrawStarts,Fe=se._multiDrawCounts,rn=se._multiDrawCount,wt=Ze?Ue.get(Ze).bytesPerElement:1,Bn=le.get(ae).currentProgram.getUniforms();for(let Jn=0;Jn<rn;Jn++)Bn.setValue(Y,"_gl_DrawID",Jn),Ht.render(vn[Jn]/wt,Fe[Jn])}else if(se.isInstancedMesh)Ht.renderInstances(Ye,vt,se.count);else if(fe.isInstancedBufferGeometry){const vn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Fe=Math.min(fe.instanceCount,vn);Ht.renderInstances(Ye,vt,Fe)}else Ht.render(Ye,vt)};function gr(T,H,fe,ae){Z!==null&&T.isNodeMaterial&&Z.setObject(ae,T),_t===!0&&ke.setState(T,fe,!1),T.transparent===!0&&T.side===aa&&T.forceSinglePass===!1?(T.side=Kn,T.needsUpdate=!0,vr(T,H,ae),T.side=qr,T.needsUpdate=!0,vr(T,H,ae),T.side=aa):vr(T,H,ae)}this.compile=function(T,H,fe=null){fe===null&&(fe=T),Z!==null&&Z.renderStart(T,H,fe),O=Ie.get(fe),O.init(H),b.push(O),fe.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(O.pushLight(se),se.castShadow&&O.pushShadow(se))}),T!==fe&&T.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(O.pushLight(se),se.castShadow&&O.pushShadow(se))}),O.setupLights(),Z!==null&&Z.updateLights(O.state.lightsArray),yt=this.localClippingEnabled,_t=ke.init(this.clippingPlanes,yt),_t===!0&&ke.setGlobalState(this.clippingPlanes,H),Z!==null&&nt.render(O.state.shadowsArray,fe,H);const ae=new Set;return T.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Be=se.material;if(Be)if(Array.isArray(Be))for(let We=0;We<Be.length;We++){const Oe=Be[We];gr(Oe,fe,H,se),ae.add(Oe)}else gr(Be,fe,H,se),ae.add(Be)}),O=b.pop(),Z!==null&&Z.renderEnd(),ae},this.compileAsync=function(T,H,fe=null){const ae=this.compile(T,H,fe);return new Promise(se=>{function Be(){if(ae.forEach(function(We){const Ze=le.get(We).currentProgram;(Ze===void 0||Ze.isReady())&&ae.delete(We)}),ae.size===0){se(T);return}setTimeout(Be,10)}Lt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Pa=null;function ua(T){Pa&&Pa(T)}function _r(){Gi.stop()}function Ia(){Gi.start()}const Gi=new jx;Gi.setAnimationLoop(ua),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(T){Pa=T,Ve.setAnimationLoop(T),T===null?Gi.stop():Gi.start()},Ve.addEventListener("sessionstart",_r),Ve.addEventListener("sessionend",Ia),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(T,H);const fe=Ve.enabled===!0&&Ve.isPresenting===!0,ae=N!==null&&(re===null||fe)&&N.begin(F,re);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(H),H=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(F,T,H,re),O=Ie.get(T,b.length),O.init(H),O.state.textureUnits=ge.getTextureUnits(),b.push(O),tt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),mt.setFromProjectionMatrix(tt,sa,H.reversedDepth),yt=this.localClippingEnabled,_t=ke.init(this.clippingPlanes,yt),L=ze.get(T,I.length),L.init(),I.push(L),Ve.enabled===!0&&Ve.isPresenting===!0){const We=F.xr.getDepthSensingMesh();We!==null&&oo(We,H,-1/0,F.sortObjects)}oo(T,H,0,F.sortObjects),L.finish(),Z!==null&&Z.updateLights(O.state.lightsArray),F.sortObjects===!0&&L.sort(Te,De),Ot=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ot&&lt.addToRenderList(L,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&ke.beginShadows();const se=O.state.shadowsArray;if(nt.render(se,T,H),_t===!0&&ke.endShadows(),(ae&&N.hasRenderPass())===!1){const We=L.opaque,Oe=L.transmissive;if(O.setupLights(),H.isArrayCamera){const Ze=H.cameras;if(Oe.length>0)for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ft=Ze[Ke];Jr(We,Oe,T,ft)}Ot&&lt.render(T);for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ft=Ze[Ke];lo(L,T,ft,ft.viewport)}}else Oe.length>0&&Jr(We,Oe,T,H),Ot&&lt.render(T),lo(L,T,H)}re!==null&&k===0&&(ge.updateMultisampleRenderTarget(re),ge.updateRenderTargetMipmap(re)),ae&&N.end(F),T.isScene===!0&&T.onAfterRender(F,T,H),Xe.resetDefaultState(),ce=-1,he=null,b.pop(),b.length>0?(O=b[b.length-1],ge.setTextureUnits(O.state.textureUnits),_t===!0&&ke.setGlobalState(F.clippingPlanes,O.state.camera)):O=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,Z!==null&&Z.renderEnd()};function oo(T,H,fe,ae){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)fe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)O.pushLightProbeGrid(T);else if(T.isLight)O.pushLight(T),T.castShadow&&O.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(mt)){ae&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);const We=Ee.update(T),Oe=T.material;Oe.visible&&L.push(T,We,Oe,fe,Xt.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(mt))){const We=Ee.update(T),Oe=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Xt.copy(We.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(Oe)){const Ze=We.groups;for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ft=Ze[Ke],Ye=Oe[ft.materialIndex];Ye&&Ye.visible&&L.push(T,We,Ye,fe,Xt.z,ft,H)}}else Oe.visible&&L.push(T,We,Oe,fe,Xt.z,null,H)}}const Be=T.children;for(let We=0,Oe=Be.length;We<Oe;We++)oo(Be[We],H,fe,ae)}function lo(T,H,fe,ae){const{opaque:se,transmissive:Be,transparent:We}=T;O.setupLightsView(fe),_t===!0&&ke.setGlobalState(F.clippingPlanes,fe),ae&&E.viewport(xe.copy(ae)),se.length>0&&Vi(se,H,fe),Be.length>0&&Vi(Be,H,fe),We.length>0&&Vi(We,H,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Jr(T,H,fe,ae){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ae.id]===void 0){const Ye=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ae.id]=new zi(1,1,{generateMipmaps:!0,type:Ye?ca:bi,minFilter:kr,samples:Math.max(4,U.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Be=O.state.transmissionRenderTarget[ae.id],We=ae.viewport||xe;Be.setSize(We.z*F.transmissionResolutionScale,We.w*F.transmissionResolutionScale);const Oe=F.getRenderTarget(),Ze=F.getActiveCubeFace(),Ke=F.getActiveMipmapLevel();F.setRenderTarget(Be),F.getClearColor(B),me=F.getClearAlpha(),me<1&&F.setClearColor(16777215,.5),F.clear(),Ot&&lt.render(fe);const rt=F.toneMapping;F.toneMapping=oa;const ft=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),O.setupLightsView(ae),_t===!0&&ke.setGlobalState(F.clippingPlanes,ae),Vi(T,fe,ae),ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Mt=0,vt=H.length;Mt<vt;Mt++){const jt=H[Mt],{object:Ht,geometry:vn,material:Fe,group:rn}=jt;if(Fe.side===aa&&Ht.layers.test(ae.layers)){const wt=Fe.side;Fe.side=Kn,Fe.needsUpdate=!0,bl(Ht,fe,ae,vn,Fe,rn),Fe.side=wt,Fe.needsUpdate=!0,Ye=!0}}Ye===!0&&(ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be))}F.setRenderTarget(Oe,Ze,Ke),F.setClearColor(B,me),ft!==void 0&&(ae.viewport=ft),F.toneMapping=rt}function Vi(T,H,fe){const ae=H.isScene===!0?H.overrideMaterial:null;for(let se=0,Be=T.length;se<Be;se++){const We=T[se],{object:Oe,geometry:Ze,group:Ke}=We;let rt=We.material;rt.allowOverride===!0&&ae!==null&&(rt=ae),Oe.layers.test(fe.layers)&&bl(Oe,H,fe,Ze,rt,Ke)}}function bl(T,H,fe,ae,se,Be){Z!==null&&se.isNodeMaterial&&Z.setObject(T,se),T.onBeforeRender(F,H,fe,ae,se,Be),T.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),se.onBeforeRender(F,H,fe,ae,T,Be),se.transparent===!0&&se.side===aa&&se.forceSinglePass===!1?(se.side=Kn,se.needsUpdate=!0,F.renderBufferDirect(fe,H,ae,se,T,Be),se.side=qr,se.needsUpdate=!0,F.renderBufferDirect(fe,H,ae,se,T,Be),se.side=aa):F.renderBufferDirect(fe,H,ae,se,T,Be),T.onAfterRender(F,H,fe,ae,se,Be)}function vr(T,H,fe){H.isScene!==!0&&(H=fn);const ae=le.get(T),se=O.state.lights,Be=O.state.shadowsArray,We=se.state.version,Oe=Ne.getParameters(T,se.state,Be,H,fe,O.state.lightProbeGridArray),Ze=Ne.getProgramCacheKey(Oe);let Ke=ae.programs;ae.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,ae.fog=H.fog;const rt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ae.envMap=Re.get(T.envMap||ae.environment,rt),ae.envMapRotation=ae.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",ui),Ke=new Map,ae.programs=Ke);let ft=Ke.get(Ze);if(ft!==void 0){if(ae.currentProgram===ft&&ae.lightsStateVersion===We)return uo(T,Oe),ft}else Oe.uniforms=Ne.getUniforms(T),Z!==null&&T.isNodeMaterial&&Z.build(T,fe,Oe),T.onBeforeCompile(Oe,F),ft=Ne.acquireProgram(Oe,Ze),Ke.set(Ze,ft),ae.uniforms=Oe.uniforms;const Ye=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=ke.uniform),uo(T,Oe),ae.needsLights=Al(T),ae.lightsStateVersion=We,ae.needsLights&&(Ye.ambientLightColor.value=se.state.ambient,Ye.lightProbe.value=se.state.probe,Ye.sunLights.value=se.state.sun,Ye.sunLightShadows.value=se.state.sunShadow,Ye.directionalLights.value=se.state.directional,Ye.directionalLightShadows.value=se.state.directionalShadow,Ye.spotLights.value=se.state.spot,Ye.spotLightShadows.value=se.state.spotShadow,Ye.rectAreaLights.value=se.state.rectArea,Ye.ltc_1.value=se.state.rectAreaLTC1,Ye.ltc_2.value=se.state.rectAreaLTC2,Ye.pointLights.value=se.state.point,Ye.pointLightShadows.value=se.state.pointShadow,Ye.hemisphereLights.value=se.state.hemi,Ye.sunShadowMatrix.value=se.state.sunShadowMatrix,Ye.sunShadowCascade.value=se.state.sunShadowCascade,Ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ye.spotLightMatrix.value=se.state.spotLightMatrix,Ye.spotLightMap.value=se.state.spotLightMap,Ye.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=O.state.lightProbeGridArray.length>0,ae.currentProgram=ft,ae.uniformsList=null,ft}function co(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=yu.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function uo(T,H){const fe=le.get(T);fe.outputColorSpace=H.outputColorSpace,fe.batching=H.batching,fe.batchingColor=H.batchingColor,fe.instancing=H.instancing,fe.instancingColor=H.instancingColor,fe.instancingMorph=H.instancingMorph,fe.skinning=H.skinning,fe.morphTargets=H.morphTargets,fe.morphNormals=H.morphNormals,fe.morphColors=H.morphColors,fe.morphTargetsCount=H.morphTargetsCount,fe.numClippingPlanes=H.numClippingPlanes,fe.numIntersection=H.numClipIntersection,fe.vertexAlphas=H.vertexAlphas,fe.vertexTangents=H.vertexTangents,fe.toneMapping=H.toneMapping}function fo(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let fe=0,ae=T.length;fe<ae;fe++){const se=T[fe];if(se.texture!==null&&se.boundingBox.containsPoint(C))return se}return null}function ho(T,H,fe,ae,se){H.isScene!==!0&&(H=fn),ge.resetTextureUnits();const Be=H.fog,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?H.environment:null,Oe=re===null?F.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Nt.workingColorSpace,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ke=Re.get(ae.envMap||We,Ze),rt=ae.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ft=!!fe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!fe.morphAttributes.position,Mt=!!fe.morphAttributes.normal,vt=!!fe.morphAttributes.color;let jt=oa;ae.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(jt=F.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,vn=Ht!==void 0?Ht.length:0,Fe=le.get(ae),rn=O.state.lights;if(_t===!0&&(yt===!0||T!==he)){const Tt=T===he&&ae.id===ce;ke.setState(ae,T,Tt)}let wt=!1;ae.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rn.state.version||Fe.outputColorSpace!==Oe||se.isBatchedMesh&&Fe.batching===!1||!se.isBatchedMesh&&Fe.batching===!0||se.isBatchedMesh&&Fe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Fe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Fe.instancing===!1||!se.isInstancedMesh&&Fe.instancing===!0||se.isSkinnedMesh&&Fe.skinning===!1||!se.isSkinnedMesh&&Fe.skinning===!0||se.isInstancedMesh&&Fe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Fe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Fe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Fe.instancingMorph===!1&&se.morphTexture!==null||Fe.envMap!==Ke||ae.fog===!0&&Fe.fog!==Be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ke.numPlanes||Fe.numIntersection!==ke.numIntersection)||Fe.vertexAlphas!==rt||Fe.vertexTangents!==ft||Fe.morphTargets!==Ye||Fe.morphNormals!==Mt||Fe.morphColors!==vt||Fe.toneMapping!==jt||Fe.morphTargetsCount!==vn||!!Fe.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Fe.__version=ae.version);let Bn=Fe.currentProgram;wt===!0&&(Bn=vr(ae,H,se),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Bn,Fe));let Jn=!1,Xi=!1,xt=!1;const It=Bn.getUniforms(),Qt=Fe.uniforms;if(E.useProgram(Bn.program)&&(Jn=!0,Xi=!0,xt=!0),ae.id!==ce&&(ce=ae.id,Xi=!0),Fe.needsLights){const Tt=fo(O.state.lightProbeGridArray,se);Fe.lightProbeGrid!==Tt&&(Fe.lightProbeGrid=Tt,Xi=!0)}if(Jn||he!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),It.setValue(Y,"projectionMatrix",T.projectionMatrix),It.setValue(Y,"viewMatrix",T.matrixWorldInverse);const sn=It.map.cameraPosition;sn!==void 0&&sn.setValue(Y,it.setFromMatrixPosition(T.matrixWorld)),U.logarithmicDepthBuffer&&It.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),he!==T&&(he=T,Xi=!0,xt=!0)}if(Fe.needsLights&&(rn.state.sunShadowMap.length>0&&It.setValue(Y,"sunShadowMap",rn.state.sunShadowMap,ge),rn.state.directionalShadowMap.length>0&&It.setValue(Y,"directionalShadowMap",rn.state.directionalShadowMap,ge),rn.state.spotShadowMap.length>0&&It.setValue(Y,"spotShadowMap",rn.state.spotShadowMap,ge),rn.state.pointShadowMap.length>0&&It.setValue(Y,"pointShadowMap",rn.state.pointShadowMap,ge)),se.isSkinnedMesh){It.setOptional(Y,se,"bindMatrix"),It.setOptional(Y,se,"bindMatrixInverse");const Tt=se.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),It.setValue(Y,"boneTexture",Tt.boneTexture,ge))}se.isBatchedMesh&&(It.setOptional(Y,se,"batchingTexture"),It.setValue(Y,"batchingTexture",se._matricesTexture,ge),It.setOptional(Y,se,"batchingIdTexture"),It.setValue(Y,"batchingIdTexture",se._indirectTexture,ge),It.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&It.setValue(Y,"batchingColorTexture",se._colorsTexture,ge));const $n=fe.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&q.update(se,fe,Bn),(Xi||Fe.receiveShadow!==se.receiveShadow)&&(Fe.receiveShadow=se.receiveShadow,It.setValue(Y,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&H.environment!==null&&(Qt.envMapIntensity.value=H.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=d3()),Xi){if(It.setValue(Y,"toneMappingExposure",F.toneMappingExposure),Fe.needsLights&&Tl(Qt,xt),Be&&ae.fog===!0&&$e.refreshFogUniforms(Qt,Be),$e.refreshMaterialUniforms(Qt,ae,de,K,O.state.transmissionRenderTarget[T.id]),Fe.needsLights&&Fe.lightProbeGrid){const Tt=Fe.lightProbeGrid;Qt.probesSH.value=Tt.texture,Qt.probesMin.value.copy(Tt.boundingBox.min),Qt.probesMax.value.copy(Tt.boundingBox.max),Qt.probesResolution.value.copy(Tt.resolution)}yu.upload(Y,co(Fe),Qt,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(yu.upload(Y,co(Fe),Qt,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(Y,"center",se.center),It.setValue(Y,"modelViewMatrix",se.modelViewMatrix),It.setValue(Y,"normalMatrix",se.normalMatrix),It.setValue(Y,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Tt=ae.uniformsGroups;for(let sn=0,fa=Tt.length;sn<fa;sn++){const Rl=Tt[sn];be.update(Rl,Bn),be.bind(Rl,Bn)}}return Bn}function Tl(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Al(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(T,H,fe){const ae=le.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=H,le.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:fe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const fe=le.get(T);fe.__webglFramebuffer=H,fe.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,fe=0){re=T,X=H,k=fe;let ae=null,se=!1,Be=!1;if(T){const Oe=le.get(T);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),xe.copy(T.viewport),Ge.copy(T.scissor),qe=T.scissorTest,E.viewport(xe),E.scissor(Ge),E.setScissorTest(qe),ce=-1;return}else if(Oe.__webglFramebuffer===void 0)ge.setupRenderTarget(T);else if(Oe.__hasExternalTextures)ge.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const rt=T.depthTexture;if(Oe.__boundDepthTexture!==rt){if(rt!==null&&le.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(T)}}const Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Be=!0);const Ke=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?ae=Ke[H][fe]:ae=Ke[H],se=!0):T.samples>0&&ge.useMultisampledRTT(T)===!1?ae=le.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?ae=Ke[fe]:ae=Ke,xe.copy(T.viewport),Ge.copy(T.scissor),qe=T.scissorTest}else xe.copy(ve).multiplyScalar(de).floor(),Ge.copy(Ce).multiplyScalar(de).floor(),qe=Vt;if(fe!==0&&(ae=te),E.bindFramebuffer(Y.FRAMEBUFFER,ae)&&E.drawBuffers(T,ae),E.viewport(xe),E.scissor(Ge),E.setScissorTest(qe),se){const Oe=le.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,fe)}else if(Be){const Oe=H;for(let Ze=0;Ze<T.textures.length;Ze++){const Ke=le.get(T.textures[Ze]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ze,Ke.__webglTexture,fe,Oe)}}else if(T!==null&&fe!==0){const Oe=le.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,fe)}ce=-1};function fi(T){const H=le.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=U.textureFormatReadable(T.format),H.__typeReadable=U.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,fe,ae,se,Be,We,Oe=0){if(!(T&&T.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze){E.bindFramebuffer(Y.FRAMEBUFFER,Ze);try{const Ke=T.textures[Oe],rt=Ke.format,ft=Ke.type;T.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const Ye=fi(Ke);if(Ye.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ae&&fe>=0&&fe<=T.height-se&&Y.readPixels(H,fe,ae,se,Le.convert(rt),Le.convert(ft),Be)}finally{const Ke=re!==null?le.get(re).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,H,fe,ae,se,Be,We,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze)if(H>=0&&H<=T.width-ae&&fe>=0&&fe<=T.height-se){E.bindFramebuffer(Y.FRAMEBUFFER,Ze);const Ke=T.textures[Oe],rt=Ke.format,ft=Ke.type;T.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const Ye=fi(Ke);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Be.byteLength,Y.STREAM_READ),Y.readPixels(H,fe,ae,se,Le.convert(rt),Le.convert(ft),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const vt=re!==null?le.get(re).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,vt);const jt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await CE(Y,jt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Be),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Mt),Y.deleteSync(jt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,fe=0){const ae=Math.pow(2,-fe),se=Math.floor(T.image.width*ae),Be=Math.floor(T.image.height*ae),We=H!==null?H.x:0,Oe=H!==null?H.y:0;ge.setTexture2D(T,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,fe,0,0,We,Oe,se,Be),E.unbindTexture()},this.copyTextureToTexture=function(T,H,fe=null,ae=null,se=0,Be=0){let We,Oe,Ze,Ke,rt,ft,Ye,Mt,vt;const jt=T.isCompressedTexture?T.mipmaps[Be]:T.image;if(fe!==null)We=fe.max.x-fe.min.x,Oe=fe.max.y-fe.min.y,Ze=fe.isBox3?fe.max.z-fe.min.z:1,Ke=fe.min.x,rt=fe.min.y,ft=fe.isBox3?fe.min.z:0;else{const Qt=Math.pow(2,-se);We=Math.floor(jt.width*Qt),Oe=Math.floor(jt.height*Qt),T.isDataArrayTexture?Ze=jt.depth:T.isData3DTexture?Ze=Math.floor(jt.depth*Qt):Ze=1,Ke=0,rt=0,ft=0}ae!==null?(Ye=ae.x,Mt=ae.y,vt=ae.z):(Ye=0,Mt=0,vt=0);const Ht=Le.convert(H.format),vn=Le.convert(H.type);let Fe;H.isData3DTexture?(ge.setTexture3D(H,0),Fe=Y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ge.setTexture2DArray(H,0),Fe=Y.TEXTURE_2D_ARRAY):(ge.setTexture2D(H,0),Fe=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,H.unpackAlignment);const rn=E.getParameter(Y.UNPACK_ROW_LENGTH),wt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(Y.UNPACK_SKIP_PIXELS),Jn=E.getParameter(Y.UNPACK_SKIP_ROWS),Xi=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,jt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,jt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ke),E.pixelStorei(Y.UNPACK_SKIP_ROWS,rt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,ft);const xt=T.isDataArrayTexture||T.isData3DTexture,It=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Qt=le.get(T),$n=le.get(H),Tt=le.get(Qt.__renderTarget),sn=le.get($n.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Tt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let fa=0;fa<Ze;fa++)xt&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(T).__webglTexture,se,ft+fa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(H).__webglTexture,Be,vt+fa)),Y.blitFramebuffer(Ke,rt,We,Oe,Ye,Mt,We,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||T.isRenderTargetTexture||le.has(T)){const Qt=le.get(T),$n=le.get(H);E.bindFramebuffer(Y.READ_FRAMEBUFFER,j),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ee);for(let Tt=0;Tt<Ze;Tt++)xt?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qt.__webglTexture,se,ft+Tt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Qt.__webglTexture,se),It?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$n.__webglTexture,Be,vt+Tt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$n.__webglTexture,Be),se!==0?Y.blitFramebuffer(Ke,rt,We,Oe,Ye,Mt,We,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):It?Y.copyTexSubImage3D(Fe,Be,Ye,Mt,vt+Tt,Ke,rt,We,Oe):Y.copyTexSubImage2D(Fe,Be,Ye,Mt,Ke,rt,We,Oe);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else It?T.isDataTexture||T.isData3DTexture?Y.texSubImage3D(Fe,Be,Ye,Mt,vt,We,Oe,Ze,Ht,vn,jt.data):H.isCompressedArrayTexture?Y.compressedTexSubImage3D(Fe,Be,Ye,Mt,vt,We,Oe,Ze,Ht,jt.data):Y.texSubImage3D(Fe,Be,Ye,Mt,vt,We,Oe,Ze,Ht,vn,jt):T.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Be,Ye,Mt,We,Oe,Ht,vn,jt.data):T.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Be,Ye,Mt,jt.width,jt.height,Ht,jt.data):Y.texSubImage2D(Y.TEXTURE_2D,Be,Ye,Mt,We,Oe,Ht,vn,jt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,rn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,wt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,Jn),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Xi),Be===0&&H.generateMipmaps&&Y.generateMipmap(Fe),E.unbindTexture()},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ge.setTextureCube(T,0):T.isData3DTexture?ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ge.setTexture2DArray(T,0):ge.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){X=0,k=0,re=null,E.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}const p3=`
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
`,m3=`
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
`;function g3(){const o=ct.useRef(null);return ct.useEffect(()=>{const t=o.current;if(!t)return;let i,s,c,f,d=[],h,m;try{i=new h3({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),s=new kE,c=new Ei(48,window.innerWidth/window.innerHeight,.1,1e3),c.position.set(0,15,35),c.lookAt(0,5,-50);const P=new db,W=P.load("/brand/gpc/clouds/cloud-bank-a.png"),C=P.load("/brand/gpc/clouds/cloud-bank-b.png"),L=P.load("/brand/gpc/flight/mountain-ground-cutout.png");W.wrapS=W.wrapT=Pi,C.wrapS=C.wrapT=Pi;const O={uTint:{value:new Bt("#faf5ee")},uOpacity:{value:.95},uDotStrength:{value:.75},uDotSize:{value:5.5},uTime:{value:0},uGroundY:{value:-120},uGroundFade:{value:45}},I=Z=>new Hi({vertexShader:p3,fragmentShader:m3,uniforms:{...O,uTexture:{value:Z}},transparent:!0,depthWrite:!1,side:aa});h=I(W),m=I(C),[{x:-35,y:18,z:-25,scale:65,mat:h,speed:.008},{x:38,y:14,z:-35,scale:75,mat:m,speed:-.006},{x:-10,y:22,z:-55,scale:85,mat:h,speed:.005},{x:45,y:6,z:-70,scale:95,mat:m,speed:-.007},{x:-40,y:-5,z:-40,scale:70,mat:m,speed:.009},{x:25,y:-12,z:-50,scale:80,mat:h,speed:-.005},{x:-30,y:-22,z:-65,scale:90,mat:h,speed:.006},{x:35,y:-30,z:-60,scale:85,mat:m,speed:-.008},{x:-20,y:-45,z:-45,scale:80,mat:m,speed:.007},{x:30,y:-55,z:-55,scale:90,mat:h,speed:-.006},{x:-35,y:-68,z:-70,scale:95,mat:h,speed:.005},{x:20,y:-80,z:-65,scale:85,mat:m,speed:-.008}].forEach(Z=>{const te=new io(Z.scale,Z.scale*.55),j=te.attributes.position.count,ee=new Float32Array(j*3),X=new Float32Array(j),k=Math.random(),re=Math.random(),ce=Math.random(),he=Math.random()>.4?1:0;for(let Ge=0;Ge<j;Ge++)ee[Ge*3]=k,ee[Ge*3+1]=re,ee[Ge*3+2]=ce,X[Ge]=he;te.setAttribute("aVariation",new Bi(ee,3)),te.setAttribute("aTreatment",new Bi(X,1));const xe=new Fi(te,Z.mat);xe.position.set(Z.x,Z.y,Z.z),s.add(xe),d.push({mesh:xe,baseX:Z.x,speed:Z.speed,minX:-80,maxX:80})});const N=new io(160,70),F=new Yp({map:L,transparent:!0,opacity:.75,depthWrite:!1}),V=new Fi(N,F);V.position.set(0,-115,-60),s.add(V)}catch(P){console.error("WebGL flight canvas init failed:",P);return}let p=15,_=35;const v=()=>{const P=window.scrollY,W=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),C=Math.min(Math.max(P/W,0),1);p=15-C*120,_=35-C*25};window.addEventListener("scroll",v,{passive:!0}),v();let x=0,M=0;const R=P=>{x=(P.clientX/window.innerWidth-.5)*5,M=(P.clientY/window.innerHeight-.5)*2.5};window.addEventListener("mousemove",R,{passive:!0});const D=()=>{!i||!c||(c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",D);let y=new mb;const S=()=>{f=requestAnimationFrame(S);const P=y.getDelta(),W=y.getElapsedTime();h&&(h.uniforms.uTime.value=W),m&&(m.uniforms.uTime.value=W),c.position.x+=(x-c.position.x)*.05,c.position.y+=(p-M-c.position.y)*.08,c.position.z+=(_-c.position.z)*.08,c.lookAt(x*.3,c.position.y-10,-50),d.forEach(C=>{C.mesh.position.x+=C.speed*(P*60),C.mesh.position.x>C.maxX&&(C.mesh.position.x=C.minX),C.mesh.position.x<C.minX&&(C.mesh.position.x=C.maxX)}),i.render(s,c)};return S(),()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",v),window.removeEventListener("resize",D),window.removeEventListener("mousemove",R),i&&i.dispose()}},[]),w.jsxs("div",{className:"canvas-container","aria-hidden":"true",children:[w.jsx("div",{className:"flight-canvas flight-canvas--background"}),w.jsx("canvas",{ref:o,className:"flight-canvas flight-canvas--webgl"}),w.jsx("div",{className:"flight-canvas-halftone"}),w.jsx("div",{className:"flight-canvas-vignette"})]})}function _3(){const[o,t]=ct.useState(3e4),[i,s]=ct.useState("30,000 FT"),[c,f]=ct.useState(4.2),[d,h]=ct.useState(100);ct.useEffect(()=>{const p=[];window.scrollY>10?s(null):[[300,"29,800 FT"],[600,"30,250 FT"],[900,"29,950 FT"],[1200,null]].forEach(([M,R])=>{p.push(window.setTimeout(()=>{window.scrollY<=10&&s(R)},M))});const v=()=>{const x=window.scrollY,M=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),R=Math.min(Math.max(x/M,0),1),D=Math.round(3e4*(1-R));t(D);const y=(4.2-R*1.35).toFixed(2);f(y),h(Math.round((1-R)*100)),document.documentElement.style.setProperty("--altitude-remaining",(D/3e4).toFixed(4))};return window.addEventListener("scroll",v,{passive:!0}),v(),()=>{p.forEach(x=>clearTimeout(x)),window.removeEventListener("scroll",v)}},[]);const m=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return w.jsxs("aside",{className:"altitude-hud","aria-label":"Current story elevation & cell telemetry",children:[w.jsx("div",{className:"altitude-hud__track","aria-hidden":"true",children:w.jsx("span",{})}),w.jsxs("div",{className:"altitude-hud__readout",children:[w.jsx("span",{className:"altitude-hud__label",children:"Altitude"}),w.jsx("output",{className:"altitude-hud__value",children:i??`${m.format(o)} FT`}),w.jsxs("div",{className:"altitude-hud__battery-gauge",children:[w.jsxs("span",{children:["⚡ ",c,"V"]}),w.jsx("span",{children:"·"}),w.jsxs("span",{children:[d,"% SoC"]})]})]})]})}const cx=["var(--color-red)","var(--color-orange)","var(--color-purple)","var(--color-yellow)"];function v3(){const[o,t]=ct.useState(0),i=ct.useCallback(()=>{t(s=>(s+1)%cx.length)},[]);return w.jsx("header",{className:"masthead",id:"top",children:w.jsxs("div",{className:"masthead__frame",children:[w.jsxs("div",{className:"masthead__nav",children:[w.jsxs("a",{className:"masthead__brand",href:"#top","aria-label":"Battery Cell 4.0 home",onPointerEnter:i,onFocus:i,style:{"--brand-mark-hue":cx[o]},children:[w.jsx("svg",{viewBox:"0 0 357 197",role:"img","aria-label":"IBC 4.0 Brand Mark",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z",fill:"currentColor"})}),w.jsx("span",{className:"masthead__brand-tag",children:"CELL 4.0 / INDIA HACKATHON 2026"})]}),w.jsxs("nav",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[[{label:"Themes",href:"#themes"},{label:"Architecture",href:"#architecture"},{label:"Dates",href:"#timeline"},{label:"Prizes",href:"#fees"},{label:"FAQ",href:"#faq"}].map(s=>w.jsx("a",{href:s.href,className:"masthead__nav-link",children:s.label},s.label)),w.jsxs("a",{href:"#register",className:"masthead__action-btn",children:[w.jsx("span",{className:"cut-button__box"}),w.jsx("span",{children:"Register EOI"})]})]})]}),w.jsxs("div",{className:"masthead__content",children:[w.jsxs("div",{className:"masthead__badge-row",children:[w.jsx("span",{className:"masthead__badge masthead__badge--live",children:"EOI Floated (Live Now)"}),w.jsx("span",{className:"masthead__badge",children:"National Security Domain"}),w.jsx("span",{className:"masthead__badge",children:"Up to ₹2,00,000 Cash Prizes"}),w.jsx("span",{className:"masthead__badge",children:"Lab Incubation"})]}),w.jsxs("h1",{className:"masthead__title-semantic",children:[w.jsx("span",{children:"Intelligent"}),w.jsx("span",{children:"Battery Cell 4.0"}),w.jsx("em",{children:"Hackathon 2026"})]}),w.jsx("p",{className:"masthead__dek",children:"Bringing together India's sharpest students, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology using Artificial Intelligence."})]}),w.jsx("div",{className:"masthead__footer",children:w.jsxs("p",{className:"masthead__meta",children:[w.jsx("span",{children:"Registration Opens: 09 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Deadline: 30 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Grand Finale: 01 Dec 2026"})]})}),w.jsx("p",{className:"scroll-cue","aria-hidden":"true",children:w.jsx("span",{className:"scroll-cue__word",children:"Scroll".split("").map((s,c)=>w.jsx("span",{className:"scroll-cue__letter",style:{"--i":c},children:w.jsx("span",{className:"scroll-cue__glyph",children:s})},c))})})]})})}const x3=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,S3=`
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_mistColor;
uniform vec3 u_coreColor;
uniform float u_scroll;  // 0..1 progress through the transition zone
uniform float u_cover;   // 0..1 global cloud coverage
uniform float u_wake;    // 0..1 strength of the aircraft wake
uniform float u_part;    // 0..1 punch-through: clouds open from the centre
uniform vec2 u_plane;    // aircraft tail position in uv space

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.03 + 17.1;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  float t = u_time * 0.035;

  // Flying into the cloud bank: zoom in and stream past as the user scrolls
  float zoom = 1.0 + u_scroll * 0.7;
  vec2 c = (uv - 0.5) * aspect;
  vec2 q = (c / zoom) * 1.25 + vec2(u_scroll * 2.4 + t, t * 0.35);

  // Domain-warped fbm gives billowing, cauliflower-like cloud forms
  vec2 w = vec2(fbm(q + vec2(0.0, t)), fbm(q + vec2(5.2, 1.3) - t));
  vec2 qw = q + w * 0.45;
  float n = fbm(qw);

  // Aircraft wake: a plume that starts tight at the tail and widens behind it
  float behind = u_plane.x - uv.x;
  float spread = 0.09 + max(behind, 0.0) * 0.9;
  float dy = (uv.y - u_plane.y) / spread;
  float wake = smoothstep(-0.04, 0.18, behind) * exp(-dy * dy * 1.4);

  // Punch-through: the centre opens first, edges linger
  float radial = length(c * vec2(0.8, 1.0));
  float part = u_part * (0.2 + (0.9 - radial) * 0.35);

  float field = n * 0.9 + wake * u_wake * 0.8 + (u_cover * 1.25 - 0.62) - part;
  float alpha = smoothstep(0.40, 0.62, field);
  if (alpha < 0.004) discard;

  // Fake top-left sun lighting from the noise gradient
  float nl = fbm(qw + vec2(-0.05, 0.07));
  float lit = clamp((nl - n) * 5.0 + 0.6, 0.0, 1.0);
  float core = smoothstep(0.55, 0.95, field);

  vec3 shadow = mix(u_mistColor, vec3(0.62, 0.74, 0.84), 0.25);
  vec3 col = mix(shadow, u_coreColor, 0.35 + 0.65 * lit);
  col = mix(col, u_coreColor, core * 0.45);
  // Edges pick up the sky tint so the cloud melts into the background
  col = mix(u_mistColor, col, smoothstep(0.0, 0.6, alpha));

  gl_FragColor = vec4(col * alpha, alpha);
}
`,y3=/^#?[0-9a-fA-F]{6}$/;function ux(o,t){const s=(y3.test((o||"").trim())?o.trim():t).replace("#","");return[0,2,4].map(c=>parseInt(s.slice(c,c+2),16)/255)}const Op=o=>Math.max(0,Math.min(1,o)),M3=o=>o*o*(3-2*o),fl=(o,t,i)=>M3(Op((o-t)/(i-t))),Xh=.06,E3=.6,fx=.5;function b3({mistColor:o="#8DC0DD",coreColor:t="#ffffff"}){const i=ct.useRef(null),s=ct.useRef(null),c=ct.useRef(null),f=ct.useRef(null),d=ct.useRef({scroll:0,cover:0,wake:0,part:0,plane:[-1,.6],visible:!1});return ct.useEffect(()=>{let h=0;const m=()=>{h=0;const _=i.current;if(!_)return;const v=window.innerWidth,x=window.innerHeight,M=_.getBoundingClientRect(),R=Op(-M.top/Math.max(1,M.height-x)),D=Op((R-Xh)/(E3-Xh)),y=Math.min(620,Math.max(380,v*.42)),S=-y*1.1+D*(v+y*1.4),P=x*(.34+D*.1),W=f.current;if(W){const L=.88+D*.22,O=2.5-D*4;W.style.transform=`translate3d(${S}px, ${P}px, 0) translateY(-50%) rotate(${O}deg) scale(${L})`,W.style.visibility=D>0&&D<1?"visible":"hidden"}const C=d.current;C.scroll=R,C.plane=[(S+y*.18)/v,1-(P+y*.04)/x],C.wake=fl(R,Xh,.16)*(1-fl(R,.62,.72)),C.cover=fl(R,.28,.6)*(1-fl(R,.7,.97)),C.part=fl(R,.7,.97)},p=()=>{h||(h=requestAnimationFrame(m))};return window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),m(),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p),h&&cancelAnimationFrame(h)}},[]),ct.useEffect(()=>{const h=s.current,m=c.current,p=i.current;if(!h||!m||!p)return;const _=h.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!_){console.warn("WebGL not supported for Cloudscape");return}_.enable(_.BLEND),_.blendFunc(_.ONE,_.ONE_MINUS_SRC_ALPHA);const v=(X,k)=>{const re=_.createShader(X);return _.shaderSource(re,k),_.compileShader(re),_.getShaderParameter(re,_.COMPILE_STATUS)?re:(console.error("Shader compile error:",_.getShaderInfoLog(re)),_.deleteShader(re),null)},x=v(_.VERTEX_SHADER,x3),M=v(_.FRAGMENT_SHADER,S3);if(!x||!M)return;const R=_.createProgram();if(_.attachShader(R,x),_.attachShader(R,M),_.linkProgram(R),!_.getProgramParameter(R,_.LINK_STATUS)){console.error("Program link error:",_.getProgramInfoLog(R));return}_.useProgram(R);const D=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,D),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),_.STATIC_DRAW);const y=_.getAttribLocation(R,"position");_.enableVertexAttribArray(y),_.vertexAttribPointer(y,2,_.FLOAT,!1,0,0);const S=X=>_.getUniformLocation(R,X),P=S("u_resolution"),W=S("u_time"),C=S("u_scroll"),L=S("u_cover"),O=S("u_wake"),I=S("u_part"),b=S("u_plane");_.uniform3fv(S("u_mistColor"),ux(o,"#8DC0DD")),_.uniform3fv(S("u_coreColor"),ux(t,"#ffffff"));const N=()=>{const{width:X,height:k}=m.getBoundingClientRect();h.width=Math.max(1,Math.round(X*fx)),h.height=Math.max(1,Math.round(k*fx)),_.viewport(0,0,h.width,h.height),_.uniform2f(P,h.width,h.height)};N();const F=new ResizeObserver(N);F.observe(m);let V=0,Z=!1;const te=performance.now(),j=X=>{V=requestAnimationFrame(j);const k=d.current;_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),!(k.cover<.002&&k.wake<.002)&&(_.uniform1f(W,(X-te)/1e3),_.uniform1f(C,k.scroll),_.uniform1f(L,k.cover),_.uniform1f(O,k.wake),_.uniform1f(I,k.part),_.uniform2f(b,k.plane[0],k.plane[1]),_.drawArrays(_.TRIANGLE_STRIP,0,4))},ee=new IntersectionObserver(([X])=>{X.isIntersecting&&!Z?(Z=!0,V=requestAnimationFrame(j)):!X.isIntersecting&&Z&&(Z=!1,cancelAnimationFrame(V),_.clear(_.COLOR_BUFFER_BIT))});return ee.observe(p),()=>{ee.disconnect(),cancelAnimationFrame(V),F.disconnect(),_.deleteBuffer(D),_.deleteProgram(R),_.deleteShader(x),_.deleteShader(M)}},[o,t]),w.jsx("div",{ref:i,className:"cloud-transition-zone","aria-hidden":"true",children:w.jsxs("div",{ref:c,className:"cloud-transition-zone__sticky",children:[w.jsx("canvas",{ref:s,className:"cloud-transition-canvas"}),w.jsxs("div",{ref:f,className:"cloud-transition-flight",style:{visibility:"hidden"},children:[w.jsx("div",{className:"cloud-transition-trail-wrapper",children:w.jsx("img",{src:"/brand/gpc/flight/jet-stream-magnific.png",className:"cloud-transition-trail",alt:""})}),w.jsx("img",{src:"/brand/gpc/airliner-gpc-color-block.png",className:"cloud-transition-plane",alt:""})]})]})})}function kh({text:o="",as:t="p",className:i="",highlightWord:s=""}){const c=ct.useRef(null),f=ct.useMemo(()=>o.trim().split(/\s+/),[o]);return ct.useEffect(()=>{const d=c.current;if(!d)return;const h=Array.from(d.querySelectorAll(".scroll-reveal-word"));if(!h.length)return;let m=[],p=null;const _=()=>{const R=window.scrollY,D=h.map(P=>P.getBoundingClientRect().top+R);let y=NaN,S=0;m=h.map((P,W)=>{const C=D[W];return Number.isNaN(y)||Math.abs(C-y)>3?(S=0,y=C):S+=1,{element:P,documentTop:C,wordInLine:S,lastProgress:-1}}),v()},v=()=>{const R=window.innerHeight,D=window.scrollY;m.forEach(y=>{const S=y.documentTop-D,P=.98*R-4*y.wordInLine,W=.72*R-y.wordInLine,C=Math.min(Math.max((P-S)/Math.max(P-W,1),0),1);Math.abs(C-y.lastProgress)>=.002&&(y.lastProgress=C,y.element.style.opacity=C.toFixed(4),y.element.style.filter=C>.99?"none":`blur(${((1-C)*6).toFixed(2)}px)`)})},x=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(v)},M=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(_)};return _(),window.addEventListener("scroll",x,{passive:!0}),window.addEventListener("resize",M),()=>{cancelAnimationFrame(p),window.removeEventListener("scroll",x),window.removeEventListener("resize",M)}},[f]),w.jsx(t,{ref:c,className:i,children:f.map((d,h)=>{const m=s&&d.toLowerCase().includes(s.toLowerCase());return w.jsxs(_x.Fragment,{children:[w.jsx("span",{className:"scroll-reveal-word",style:{display:"inline-block",marginRight:h<f.length-1?"0.28em":void 0,opacity:.15,filter:"blur(4px)",color:m?"var(--color-red)":void 0,fontWeight:m?500:void 0},children:d}),h<f.length-1?" ":""]},`${d}-${h}`)})})}function T3(){return w.jsx("section",{className:"statement","aria-label":"The bottleneck of modern battery development",children:w.jsx("div",{className:"statement__sticky",children:w.jsxs("div",{className:"statement__inner",style:{textAlign:"center"},children:[w.jsx("h2",{className:"statement__heading",children:"Most battery innovations never survive past academic journals."}),w.jsx("h2",{className:"statement__heading",style:{color:"var(--color-red)",marginTop:"0.4em"},children:"They stall in prototype cells before reaching gigawatt scale."}),w.jsxs("div",{className:"statement__tags-row",children:[w.jsx("p",{className:"statement__tag statement__tag--cost",children:"Thermal Runaway Risk"}),w.jsx("p",{className:"statement__tag statement__tag--effort",children:"Black-Box Cell Degradation"}),w.jsx("p",{className:"statement__tag statement__tag--tech",children:"Foreign Chemistry Dependency"})]})]})})})}const Wh=[{word:"Thermal Safety",prob:45,color:"var(--color-red)",desc:"Mitigating micro-dendrite thermal runaway before catastrophic failure."},{word:"Digital Twins",prob:31,color:"var(--color-orange)",desc:"Real-time electrochemical physics simulation running on IoT edge nodes."},{word:"Second-Life Reuse",prob:17,color:"var(--color-purple)",desc:"Cascading EV battery packs into grid-scale renewable energy storage."},{word:"Indigenous Tech",prob:7,color:"var(--color-yellow)",desc:"Sovereign sodium-ion and national security storage independent of global supply."}];function A3(){const[o,t]=ct.useState(0);return w.jsx("section",{className:"probability","aria-labelledby":"prob-heading",children:w.jsx("div",{className:"probability__sticky",children:w.jsxs("div",{className:"probability__inner",children:[w.jsx("p",{className:"probability__eyebrow",children:"Electrochemical Paradigm Shift"}),w.jsxs("h2",{id:"prob-heading",className:"probability__heading",children:["The future of battery technology is"," ",w.jsxs("em",{style:{color:Wh[o].color,fontStyle:"italic"},children:[Wh[o].word,"."]})]}),w.jsx("ol",{className:"probability__candidates",children:Wh.map((i,s)=>w.jsxs("li",{className:`probability__candidate ${o===s?"is-active":""}`,style:{"--cand-color":i.color,"--cand-fill":o===s?"1":`${i.prob/100}`},onPointerEnter:()=>t(s),onClick:()=>t(s),tabIndex:0,role:"button",children:[w.jsx("div",{className:"probability__candidate-bar"}),w.jsxs("div",{children:[w.jsx("span",{className:"probability__candidate-word",children:i.word}),w.jsx("p",{className:"probability__candidate-desc",children:i.desc})]}),w.jsxs("span",{className:"probability__candidate-value",children:[i.prob,"%"]})]},i.word))}),w.jsx("p",{className:"probability__takeaway",children:'"The conventional engineering choice is rarely the breakthrough that reimagines an industry."'})]})})})}function R3(){const[o,t]=ct.useState(!1),[i,s]=ct.useState(!1);return w.jsx("section",{className:"prompt-split",id:"architecture","aria-label":"Two approaches to battery innovation",children:w.jsxs("div",{className:"prompt-split__grid",children:[w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--one",children:"Group 1: Incremental Patch"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Add an external temperature thermistor to an unmonitored lithium pack."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The legacy way: relying on surface-level sensors that detect heat only after catastrophic internal chemical breakdown has already started."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/conventional-battery-schematic.svg",alt:"Conventional battery schematic with blind thermal core",className:`prompt-split__sketch-img ${o?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>t(!o),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-fountain-pen.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:o?"Inspect Normal View":"Highlight Thermal Hotspot"})]})]})]}),w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--two",children:"Group 2: Intelligent Cell 4.0"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Embed in-situ optical sensors and edge neural physics directly inside the cell."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The Hackathon 2026 challenge: predicting micro-dendrite nucleation, impedance shifts, and mechanical strain in real-time before temperature rises."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/intelligent-cell-schematic.svg",alt:"Intelligent Cell 4.0 schematic with optical fiber and edge BMS",className:`prompt-split__sketch-img ${i?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>s(!i),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-scissors.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:i?"Default Blueprint":"Activate AI Sensor Spine"})]})]})]})]})})}const mu=[{id:"01",code:"BMS-AI",title:"Intelligent Battery Management Systems (BMS)",subtitle:"Edge AI State Estimation & Embedded Microcontrollers",desc:"Next-generation algorithmic state estimation (SoC, SoH, SoP) with adaptive machine learning models on edge microcontrollers.",tag:"Core AI Track",badgeColor:"#f94e2a",metricLabel:"TARGET ACCURACY",metricVal:"> 98.8% SoC",schematicType:"bms"},{id:"02",code:"THM-RUN",title:"Battery Safety & Thermal Runaway Mitigation",subtitle:"Multi-Physics Early Warning & Gas Vent Detection",desc:"Multi-physics early-warning detection systems, vapor pressure venting triggers, and passive/active propagation barriers.",tag:"Safety Critical",badgeColor:"#f66f00",metricLabel:"VENT DETECTION",metricVal:"< 250ms",schematicType:"safety"},{id:"03",code:"CHG-CYC",title:"Smart Charging & Second-Life Cascading",subtitle:"Dynamic Pulse Protocols & Stationary Storage",desc:"Dynamic pulse charging protocols, health-conscious fast charging, and algorithmic sorting of retired EV modules for stationary storage.",tag:"Circular Economy",badgeColor:"#9b338f",metricLabel:"CYCLE LIFE GAIN",metricVal:"+35% Life",schematicType:"charging"},{id:"04",code:"GRD-STG",title:"Renewable Energy Grid Storage",subtitle:"High-Inertia Buffer Storage & Microgrid Integration",desc:"High-inertia buffer storage algorithms, microgrid coordination, and utility-scale integration with solar and wind variability.",tag:"Grid Infrastructure",badgeColor:"#ffc013",metricLabel:"FREQUENCY LOCK",metricVal:"50.00 Hz",schematicType:"grid"},{id:"05",code:"DIG-TWN",title:"Battery Diagnostics & Physics Digital Twins",subtitle:"Electrochemical PDE Coupling & Neural Surrogates",desc:"Coupling electrochemical partial differential equations with neural surrogate models for non-invasive degradation mapping.",tag:"Digital Twin",badgeColor:"#f94e2a",metricLabel:"SOLVER SPEEDUP",metricVal:"10,000x",schematicType:"twin"},{id:"06",code:"IOT-EIS",title:"IoT-Enabled Wireless Monitoring",subtitle:"Cell-Level EIS & Ultra-Low Power Sensor Mesh",desc:"Cell-level impedance spectroscopy, ultra-low power wireless sensor mesh networks, and cloud telemetry pipelines.",tag:"Hardware & IoT",badgeColor:"#f66f00",metricLabel:"MESH LATENCY",metricVal:"< 12ms",schematicType:"iot"},{id:"07",code:"NAT-MAT",title:"Indigenous Battery Chemistries",subtitle:"Domestic Sodium-Ion & Non-Critical Supply Chains",desc:"Sodium-ion, iron-redox, and zinc-air architectures built entirely using domestic, non-critical raw material supply chains.",tag:"Atmanirbhar R&D",badgeColor:"#9b338f",metricLabel:"DOMESTIC SOURCING",metricVal:"100% India",schematicType:"chem"},{id:"08",code:"DEF-EMP",title:"National Security & Defense Storage",subtitle:"Sub-Zero Combat Packs & Tactical EMP Shielding",desc:"Sub-zero military drone propulsion, resilient combat vehicle packs, and tactical EMP-hardened energy repositories.",tag:"Strategic Defense",badgeColor:"#f94e2a",metricLabel:"OPERATING RANGE",metricVal:"-40°C to +65°C",schematicType:"defense"}];function Sl(o,t,i){return Math.min(i,Math.max(t,o))}function C3(o,t,i,s){const c=Sl(o/t,0,1);return i+4*s*c*(1-c)}function w3(o,t,i,s,c=70){const f=2*Math.sqrt(c),d=t+(c*(i-o)-f*t)*s;return[o+d*s,d]}function N3(o,t,i,s,c=1){const f=t+(-38*o-4.2*t+i*.0034*c)*s;return[Sl(o+f*s,-.45,.45),f]}function dx(o,t,i){return Sl(Math.round(o/t),0,Math.max(0,i-1))}function hx(o){return o<10?"0"+o:String(o)}function D3(){const o=mu.length,[t,i]=ct.useState(0),[s,c]=ct.useState(!1),[f,d]=ct.useState({w:1200,h:640,cw:330}),h=ct.useRef(null),m=ct.useRef(null),p=ct.useRef([]),_=ct.useRef({off:0,vel:0,target:0,a:[],w:[]}),v=ct.useRef(null),x=ct.useRef(0),M=ct.useRef(0),R=34,D=1,y=f.cw*1.14,S=ct.useCallback(b=>{_.current.target=Sl(b,0,o-1)*y},[o,y]);ct.useEffect(()=>{const b=h.current;if(!b)return;const N=new ResizeObserver(()=>{const F=b.getBoundingClientRect(),V=Math.round(Math.max(280,Math.min(350,F.width*.42,F.height*.54)));d({w:F.width,h:F.height,cw:V})});return N.observe(b),()=>N.disconnect()},[]),ct.useEffect(()=>{_.current.target=M.current*y,_.current.off=M.current*y},[y]),ct.useEffect(()=>{const b=h.current;if(!b)return;const N=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let F=!0,V=0,Z=performance.now();const te=_.current,j=X=>{if(V=0,!F)return;const k=Math.min(.033,(X-Z)/1e3);Z=X;const{w:re,h:ce,cw:he}=f,xe=Math.max(50,ce*.14),Ge=v.current;let qe=0;if(Ge&&Ge.moved)qe=Ge.v*1e3;else{const Ae=te.off;[te.off,te.vel]=w3(te.off,te.vel,te.target,k),qe=-(te.off-Ae)/Math.max(k,.001)}const B=N?0:D,me=dx(te.off,y,o);for(let Ae=0;Ae<o;Ae++){const K=p.current[Ae];if(!K)continue;const de=re/2+Ae*y-te.off;if(de<-he*1.5||de>re+he*1.5){K.style.visibility="hidden";continue}K.style.visibility="visible";let Te=te.a[Ae]||0,De=te.w[Ae]||0;[Te,De]=N3(Te,De,qe,k,B),B&&(Te+=Math.sin(X/1300+Ae*1.7)*9e-4*B),te.a[Ae]=Te,te.w[Ae]=De;const ve=C3(de,re,xe,R)-6,Ce=Ae===me;K.style.transform=`translate(${(de-he/2).toFixed(1)}px, ${ve.toFixed(1)}px) rotate(${Te.toFixed(4)}rad)`,K.style.zIndex=String(Ce?o+2:o-Math.abs(Ae-me))}m.current&&m.current.setAttribute("d",`M 0 ${xe} Q ${re/2} ${xe+2*R} ${re} ${xe}`),me!==M.current&&(M.current=me,i(me)),V=requestAnimationFrame(j)},ee=new IntersectionObserver(([X])=>{F=X.isIntersecting,F&&!V&&(Z=performance.now(),V=requestAnimationFrame(j))});return ee.observe(b),V=requestAnimationFrame(j),()=>{cancelAnimationFrame(V),ee.disconnect()}},[f,y,o]),ct.useEffect(()=>{const b=setInterval(()=>{document.hidden||v.current||performance.now()-x.current<5e3||S(M.current>=o-1?0:M.current+1)},5500);return()=>clearInterval(b)},[o,S]);const P=b=>{b.target.closest(".plc-bar")||b.target.closest("button")||b.target.closest("a")||(x.current=performance.now(),v.current={x:b.clientX,off:_.current.off,lx:b.clientX,lt:b.timeStamp,v:0,moved:!1})},W=b=>{var j;const N=v.current;if(!N)return;const F=b.clientX-N.x;if(!N.moved&&Math.abs(F)>4&&(N.moved=!0,c(!0),(j=h.current)==null||j.setPointerCapture(b.pointerId)),!N.moved)return;const V=Math.max(1,b.timeStamp-N.lt);N.v=.7*((b.clientX-N.lx)/V)+.3*N.v,N.lx=b.clientX,N.lt=b.timeStamp;const Z=(o-1)*y;let te=N.off-F;te<0&&(te*=.35),te>Z&&(te=Z+(te-Z)*.35),_.current.off=te},C=b=>{const N=v.current;if(v.current=null,x.current=performance.now(),!N)return;if(N.moved){c(!1),_.current.vel=-N.v*1e3,S(dx(_.current.off-N.v*180,y,o));return}const F=b.target.closest("[data-i]");F&&S(Number(F.getAttribute("data-i")))},L=b=>{x.current=performance.now(),S(Sl(M.current+b,0,o-1))},O=b=>{if(b.key==="ArrowRight")L(1);else if(b.key==="ArrowLeft")L(-1);else return;b.preventDefault()},I=mu[t]||mu[0];return w.jsxs("section",{className:"themes-section",id:"themes",children:[w.jsxs("div",{className:"themes-section__intro",children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / Core Problem Statements"}),w.jsx("h2",{className:"article-block__heading",children:"Eight strategic domains shaping the next energy century."}),w.jsx("p",{className:"themes-section__subhead",children:"Drag the suspended dossier line or use navigation arrows to explore all 8 official hackathon challenges. All submissions are benchmarked against these engineering pillars."})]}),w.jsxs("div",{ref:h,className:"plc-root","data-drag":s?"1":"0",role:"region","aria-roledescription":"carousel","aria-label":"Hackathon Problem Statements Carousel",tabIndex:0,onKeyDown:O,onPointerDown:P,onPointerMove:W,onPointerUp:C,onPointerCancel:C,style:{"--pl-cw":`${f.cw}px`},children:[w.jsx("svg",{className:"plc-string","aria-hidden":"true",children:w.jsx("path",{ref:m,fill:"none",stroke:"var(--color-ink, #232424)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.32"})}),mu.map((b,N)=>{const F=N===t;return w.jsxs("div",{className:"plc-card","data-i":N,"data-on":F?"1":"0",ref:V=>p.current[N]=V,"aria-hidden":F?void 0:!0,children:[w.jsx("div",{className:"plc-peg","aria-hidden":"true",children:w.jsx("div",{className:"plc-peg__groove"})}),w.jsxs("div",{className:"plc-print",children:[w.jsxs("div",{className:"plc-print__header",children:[w.jsxs("span",{className:"plc-print__tag",style:{background:b.badgeColor},children:[b.id," / THEME"]}),w.jsxs("span",{className:"plc-print__serial",children:["CELL 4.0 · DOMAIN ",b.id]})]}),w.jsx("h3",{className:"plc-print__title",children:b.title}),w.jsxs("div",{className:"plc-print__metric-line",children:[w.jsxs("span",{className:"plc-print__metric-label",children:[b.metricLabel,":"]}),w.jsx("b",{className:"plc-print__metric-val",children:b.metricVal})]}),w.jsx("p",{className:"plc-print__desc",children:b.desc}),w.jsxs("div",{className:"plc-print__footer",children:[w.jsx("span",{className:"plc-print__category",children:b.tag}),w.jsx("a",{href:"#register",className:"plc-print__action",onClick:V=>V.stopPropagation(),children:"SELECT THEME →"})]})]})]},b.id)}),w.jsxs("div",{className:"plc-bar",children:[w.jsxs("div",{className:"plc-cap","aria-hidden":"true",children:[w.jsxs("div",{className:"plc-cap__meta",children:[w.jsxs("span",{className:"plc-cap__tag",style:{background:I.badgeColor},children:[I.id," / ",I.tag]}),w.jsxs("span",{className:"plc-cap__metric",children:["BENCHMARK: ",w.jsx("b",{children:I.metricVal})]})]}),w.jsx("span",{className:"plc-title",children:I.title}),w.jsx("span",{className:"plc-sub",children:I.desc})]},t),w.jsxs("div",{className:"plc-controls",children:[w.jsxs("span",{className:"plc-count","aria-hidden":"true",children:[w.jsx("b",{children:hx(t+1)})," / ",hx(o)]}),w.jsxs("div",{className:"plc-nav-btns",children:[w.jsx("button",{type:"button",className:"plc-btn","aria-label":"Previous Theme",onClick:()=>L(-1),children:w.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:w.jsx("path",{d:"M10 3 5 8l5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),w.jsx("button",{type:"button",className:"plc-btn","aria-label":"Next Theme",onClick:()=>L(1),children:w.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:w.jsx("path",{d:"m6 3 5 5-5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})}const px=[{label:"18650 Legacy Li-ion Cell",note:"Commodity cell with high thermal hotspot risk"},{label:"Lead-Acid Heavy Block",note:"Low energy density, toxic electrolyte"},{label:"Rule-Based Relay BMS",note:"Rigid voltage thresholds, blind to impedance shifts"},{label:"Standard LiFePO4 Prism",note:"Safe but passive; no predictive digital twin"}],mx=[{label:"Intelligent Cell 4.0",note:"In-situ optical fiber sensor with edge AI BMS"},{label:"AI Neural Digital Twin",note:"Predicts micro-dendrites at atomic layer in real time"},{label:"Sovereign Sodium-Ion",note:"Indigenous non-lithium domestic supply chain"},{label:"Solid-State Ceramic",note:"High density but difficult to mass manufacture"}];function U3(){const[o,t]=ct.useState(50),[i,s]=ct.useState([{...px[2],key:"init-1",isRadical:!1},{...mx[0],key:"init-2",isRadical:!0}]),c=ct.useRef(o),f=ct.useCallback(d=>{const h=Number(d.target.value);if(t(h),Math.abs(h-c.current)>=12){c.current=h;const m=h>50,p=m?mx:px,_=p[Math.floor(Math.random()*p.length)];s(v=>[...v.slice(-4),{..._,key:`${Date.now()}-${Math.random()}`,isRadical:m}])}},[]);return w.jsx("section",{className:"loewy-maya",id:"spectrum",children:w.jsxs("div",{className:"loewy-maya__inner",children:[w.jsxs("div",{className:"loewy-maya__copy",children:[w.jsx("p",{className:"loewy-maya__label",children:"THE MAYA DESIGN PRINCIPLE IN ENERGY R&D"}),w.jsxs("h2",{className:"loewy-maya__heading",children:[w.jsx("span",{children:"Most advanced"}),w.jsxs("span",{children:[w.jsx("em",{children:"yet"})," acceptable."]})]}),w.jsx("p",{className:"loewy-maya__dek",children:"If your hackathon concept is too familiar, it creates no breakthrough. If it is too radical, it cannot be manufactured. Intelligent Battery Cell 4.0 lives precisely at the threshold of practical engineering and radical imagination."})]}),w.jsxs("section",{className:"maya-spectrum","aria-label":"Innovation spectrum slider",children:[w.jsxs("div",{className:"maya-spectrum__inner",children:[w.jsxs("div",{className:"maya-spectrum__labels",children:[w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--familiar",children:"← Too Conventional"}),w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--radical",children:"Too Radical →"})]}),w.jsxs("div",{className:"maya-spectrum__control",children:[w.jsx("div",{className:"maya-spectrum__track","aria-hidden":"true"}),w.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:f,className:"maya-spectrum__range","aria-label":"Spectrum from conventional to radical battery tech"})]}),w.jsx("p",{className:"maya-spectrum__drag-cue","aria-hidden":"true",children:"← Drag to explore →"})]}),w.jsx("div",{className:"maya-spectrum__stage",children:i.map(d=>w.jsxs("div",{className:`maya-spawn-card ${d.isRadical?"maya-spawn-card--radical":""}`,style:{"--spawn-rotation":`${(Math.random()-.5)*16}deg`,"--spawn-drift-x":`${(Math.random()-.5)*30}px`,"--spawn-lift-y":`${-8-Math.random()*12}px`,"--spawn-fall-y":`${20+Math.random()*15}px`},children:[w.jsx("div",{className:"maya-spawn-card__backdrop","aria-hidden":"true"}),w.jsxs("div",{className:"maya-spawn-card__image",children:[w.jsx("div",{style:{width:"100%",height:"90px",background:d.isRadical?"linear-gradient(135deg, #f94e2a22, #f66f0022)":"linear-gradient(135deg, #9b338f22, #8cb8d122)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"},"aria-hidden":"true",children:d.isRadical?"⚡":"🔋"}),w.jsx("div",{className:"maya-spawn-card__halftone","aria-hidden":"true"})]}),w.jsx("span",{children:d.label})]},d.key))})]})]})})}const L3=[{phase:"PHASE 01",date:"09 OCT 2026",status:"ACTIVE NOW",title:"Registration & EOI Opens",desc:"Expression of Interest (EOI) is officially floated across national universities, research labs, and startups. Portal open for team submissions."},{phase:"PHASE 02",date:"30 OCT 2026",status:"HARD DEADLINE",title:"Registration Deadline",desc:"Final cutoff for initial abstract proposals, team rosters, and theme domain selections. Screening of applications begins immediately."},{phase:"PHASE 03",date:"NOV 2026",status:"INCUBATION & DEV",title:"Mentoring & Rapid Prototyping",desc:"Shortlisted applicants receive technical mentoring from leading battery scientists, digital twin architects, and electrochemical patent holders."},{phase:"PHASE 04",date:"01 DEC 2026",status:"TENTATIVE ANNOUNCEMENT",title:"Grand Finale Showcase",desc:"Final live prototype evaluation, investor jury pitches, award of ₹2 Lakh prize money, and incubation partner onboarding."}];function O3(){return w.jsxs("section",{className:"timeline-section",id:"timeline",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"02 / Important Milestones"}),w.jsx("h2",{className:"article-block__heading",children:"Critical Timeline & Roadmap"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Mark these mandatory deadlines to ensure your team qualifies for mentorship and finale consideration."})]}),w.jsx("div",{className:"timeline-grid",children:L3.map(o=>w.jsxs("div",{className:"timeline-card",children:[w.jsxs("span",{className:"timeline-card__phase",children:[o.phase," · ",o.status]}),w.jsx("h3",{className:"timeline-card__date",children:o.date}),w.jsx("h4",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:500,marginBottom:"0.6rem",color:"var(--color-neutral-500)"},children:o.title}),w.jsx("p",{className:"timeline-card__desc",children:o.desc})]},o.phase))})]})}const P3=[{icon:"🏆",title:"Up to ₹2,00,000 Cash Prizes",desc:"Direct grant-style cash prize pool distributed across top category winners, alongside official national certificates."},{icon:"🔬",title:"Pre-Finale Scientist Mentorship",desc:"Dedicated 1-on-1 weekly mentoring sessions with premier battery researchers, simulation engineers, and hardware builders."},{icon:"🚀",title:"Incubation & Lab Access Opportunities",desc:"Fast-track incubation support, venture funding introductions, and access to advanced battery cycler & testing infrastructure."}],I3=[{tier:"STUDENTS & SCHOLARS",fee:"₹500",desc:"Enrolled undergraduate, postgraduate, and PhD scholars from accredited academic institutions."},{tier:"STUDENT START-UPS",fee:"₹1,500",desc:"Early-stage venture teams founded and driven by currently enrolled university students.",highlight:!0},{tier:"MSMEs & REGISTERED ENTITIES",fee:"₹2,000",desc:"Registered micro, small, and medium enterprises, spin-offs, and commercial technology companies."}];function z3(){return w.jsxs("section",{className:"fees-section",id:"fees",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"03 / Value & Investment"}),w.jsx("h2",{className:"article-block__heading",children:"Prizes, Incubation & Registration Tiers"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.05rem",lineHeight:1.5,fontFamily:"var(--font-body)"},children:"Transparent fee structure dedicated to fueling world-class jury evaluation, compute grants, and cash prize distribution."})]}),w.jsx("div",{className:"benefits-row",children:P3.map(o=>w.jsxs("div",{className:"benefit-card",children:[w.jsx("div",{className:"benefit-card__icon",children:o.icon}),w.jsx("h3",{className:"benefit-card__title",children:o.title}),w.jsx("p",{className:"benefit-card__desc",children:o.desc})]},o.title))}),w.jsx("div",{className:"fees-grid",children:I3.map(o=>w.jsxs("div",{className:`fee-card ${o.highlight?"fee-card--highlight":""}`,children:[w.jsxs("div",{children:[w.jsx("span",{className:"fee-card__tier",children:o.tier}),w.jsx("div",{className:"fee-card__amount",children:o.fee}),w.jsx("p",{className:"fee-card__desc",children:o.desc})]}),w.jsxs("a",{href:"#register",className:"cut-button",style:{textDecoration:"none",width:"auto",alignSelf:"flex-start"},children:[w.jsx("span",{className:"cut-button__box",style:{"--cut-fill":o.highlight?"var(--color-red)":"var(--color-yellow)"}}),w.jsx("span",{className:"cut-button__label",style:{color:o.highlight?"var(--color-neutral-100)":"var(--color-ink)"},children:"Select & Register"})]})]},o.tier))})]})}const B3=[{step:"ROUND 01",title:"Abstract & Feasibility Screening",dates:"Submission by 30 Oct 2026",weight:"30% Weightage",criteria:["Originality & depth of understanding of electrochemical bottlenecks","Clear choice and mapping to one of the 8 Hackathon themes","Realistic technical feasibility and domestic supply chain awareness","Competency and interdisciplinary balance of the applicant team"]},{step:"ROUND 02",title:"Pre-Finale Mentoring & Prototyping Sprint",dates:"Completed throughout November 2026",weight:"35% Weightage",criteria:["Active participation in weekly 1-on-1 scientist mentoring sessions","Implementation of AI/ML digital twin models or embedded BMS code","Progress on hardware simulation, battery cycler data, or physical cell assembly","Response to technical jury checkpoints and edge-case stress testing"]},{step:"ROUND 03",title:"Grand Finale & National Jury Pitch",dates:"Grand Finale on 01 Dec 2026",weight:"35% Weightage",criteria:["Live functional demonstration of the software, algorithm, or hardware prototype","Validation of safety enhancements (thermal mitigation, state estimation accuracy)","Potential for commercial incubation, patentability, and defense deployment","Jury defense on unit economics, manufacturing scalability, and second-life viability"]}];function F3(){return w.jsxs("section",{className:"article-block",id:"evaluation",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"04 / Rigorous Evaluation"}),w.jsx("h2",{className:"article-block__heading",children:"Evaluation Criteria & Hackathon Stages"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Every submission is evaluated against rigorous academic, industrial, and national security benchmarks by leading battery electrochemists."})]}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem"},children:B3.map(o=>w.jsx("div",{className:"theme-card",style:{padding:"2.5rem"},children:w.jsxs("div",{children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[w.jsx("span",{className:"theme-card__idx",children:o.step}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--color-red)"},children:o.weight})]}),w.jsx("h3",{className:"theme-card__title",style:{fontSize:"1.4rem"},children:o.title}),w.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"var(--color-orange)",marginBottom:"1.5rem"},children:o.dates}),w.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.75rem"},children:o.criteria.map((t,i)=>w.jsxs("li",{style:{display:"flex",gap:"0.5rem",fontSize:"0.9rem",color:"var(--color-ink-muted)",lineHeight:1.5},children:[w.jsx("span",{style:{color:"var(--color-red)",fontWeight:"bold"},children:"✓"}),w.jsx("span",{children:t})]},i))})]})},o.step))})]})}const H3=[{q:"Who is eligible to participate in this Hackathon?",a:"Participation is open across three categories: (1) Students & Research Scholars enrolled in undergraduate, postgraduate, or doctoral programs; (2) Student Start-ups led by enrolled students; and (3) Registered MSMEs and deeptech startups. Cross-institutional and multidisciplinary teams (chemists + computer scientists + electrical engineers) are strongly encouraged."},{q:"Is a physical cell hardware prototype strictly mandatory?",a:"No. Submissions can be purely software algorithms (e.g. edge AI BMS firmware, SoC/SoH neural networks), physics-based digital twins, CAD/simulation models, or physical hardware setups. Teams working on hardware will be provided guidance and lab testing protocols during the November mentoring phase."},{q:"What is the exact registration fee structure?",a:"Registration fees are tiered to ensure equitable access: Students & Research Scholars pay ₹500/-; Student Start-ups pay ₹1,500/-; and MSMEs/Registered Start-ups pay ₹2,000/-. Fees are payable upon abstract shortlisting and directly support compute grants, laboratory testing infrastructure, and prize disbursals."},{q:"What are the key dates and milestones?",a:"Registration & Expression of Interest (EOI) opened on 9 October 2026. The final deadline for abstract submissions is 30 October 2026. During November 2026, shortlisted applicants undergo intensive technical mentoring, screening, and product development. The Grand Finale is tentatively announced for 1 December 2026."},{q:"Who owns the Intellectual Property (IP) developed during the event?",a:"All intellectual property, patents, source code, and hardware designs developed by participants remain 100% their own exclusive property. Organizers and incubation partners provide acceleration support without taking premature equity or non-consensual IP rights."},{q:"How will the ₹2,00,000 cash prize and incubation be disbursed?",a:"Cash prizes totaling up to ₹2,00,000 will be awarded directly to the top winning teams across student, startup, and technical domain categories during the Grand Finale on 1 December 2026, accompanied by official certificates of achievement and fast-track incubation offers."}];function G3(){const[o,t]=ct.useState(0);return w.jsxs("section",{className:"article-block",id:"faq",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"05 / Participant Clarifications"}),w.jsx("h2",{className:"article-block__heading",children:"Frequently Asked Questions"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Everything you need to know about team eligibility, submission requirements, mentoring, and prizes."})]}),w.jsx("div",{style:{maxWidth:"56rem",margin:"0 auto",display:"flex",flexDirection:"column",gap:"1.2rem"},children:H3.map((i,s)=>{const c=o===s;return w.jsxs("div",{style:{background:"rgba(250, 245, 238, 0.90)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",border:"1px solid var(--color-border)",borderRadius:"2px",overflow:"hidden",transition:"border-color 0.2s ease, box-shadow 0.2s ease",boxShadow:"0 4px 16px rgba(35, 36, 36, 0.04)"},children:[w.jsxs("button",{type:"button",onClick:()=>t(c?-1:s),style:{width:"100%",padding:"1.6rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontFamily:"var(--font-serif)",fontSize:"1.25rem",color:"var(--color-neutral-500)"},children:[w.jsx("span",{children:i.q}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",color:"var(--color-red)"},children:c?"—":"+"})]}),c&&w.jsx("div",{style:{padding:"0 2rem 1.8rem",borderTop:"1px dashed var(--color-border)"},children:w.jsx("p",{style:{marginTop:"1.2rem",fontSize:"1rem",lineHeight:1.7,color:"var(--color-ink-muted)",fontFamily:"var(--font-sans)"},children:i.a})})]},s)})})]})}function V3(){const[o,t]=ct.useState(!1),[i,s]=ct.useState({name:"",email:"",category:"students",theme:"bms",message:""}),c=f=>{f.preventDefault(),!(!i.name||!i.email)&&t(!0)};return w.jsxs("div",{className:"ground",id:"register",children:[w.jsx("div",{className:"ground__contact",children:w.jsxs("form",{className:`ground-form ${o?"ground-form--sent":""}`,onSubmit:c,children:[o&&w.jsxs("div",{className:"ground-form__success",children:[w.jsx("p",{className:"ground-form__success-label",children:"Confirmed"}),w.jsx("h3",{className:"ground-form__success-heading",children:"Expression of Interest Received"}),w.jsxs("p",{className:"ground-form__success-copy",children:["Thank you, ",i.name,". Your preliminary registration for the Intelligent Battery Cell 4.0 Hackathon has been logged. Our technical screening committee will reach out to ",i.email," with next steps before October 30, 2026."]}),w.jsxs("button",{type:"button",className:"cut-button",style:{width:"auto"},onClick:()=>t(!1),children:[w.jsx("span",{className:"cut-button__box",style:{"--cut-fill":"var(--color-yellow)"}}),w.jsx("span",{className:"cut-button__label",style:{color:"var(--color-ink)"},children:"Register Another Team"})]})]}),w.jsxs("div",{className:"ground-form__content",children:[w.jsxs("div",{className:"ground-form__lede",children:[w.jsx("h2",{className:"ground-form__heading",children:"Ready to deploy your battery innovation at national scale?"}),w.jsx("p",{className:"ground-form__intro",children:"Submit your team's Expression of Interest (EOI). Open to students, research scholars, student startups, and registered MSMEs."})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"lead-name",children:"Lead Applicant Name / Team Leader"}),w.jsx("input",{id:"lead-name",type:"text",required:!0,placeholder:"e.g. Dr. A. Sharma / Alex Mercer",className:"ground-form__input",value:i.name,onChange:f=>s({...i,name:f.target.value})})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"lead-email",children:"Institutional / Corporate Email"}),w.jsx("input",{id:"lead-email",type:"email",required:!0,placeholder:"you@university.edu or founder@startup.in",className:"ground-form__input",value:i.email,onChange:f=>s({...i,email:f.target.value})})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"category-select",children:"Registration Category"}),w.jsxs("select",{id:"category-select",className:"ground-form__input ground-form__input--select",value:i.category,onChange:f=>s({...i,category:f.target.value}),children:[w.jsx("option",{value:"students",children:"Students & Research Scholars — ₹500/-"}),w.jsx("option",{value:"student-startups",children:"Student Start-ups (Enrolled) — ₹1,500/-"}),w.jsx("option",{value:"msme",children:"MSMEs & Registered Start-ups — ₹2,000/-"})]})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"theme-select",children:"Primary Hackathon Theme"}),w.jsxs("select",{id:"theme-select",className:"ground-form__input ground-form__input--select",value:i.theme,onChange:f=>s({...i,theme:f.target.value}),children:[w.jsx("option",{value:"bms",children:"Intelligent Battery Management Systems (BMS)"}),w.jsx("option",{value:"safety",children:"Battery Safety & Thermal Runaway Mitigation"}),w.jsx("option",{value:"second-life",children:"Smart Charging & Second-Life Storage"}),w.jsx("option",{value:"renewable",children:"Renewable Energy Grid Integration"}),w.jsx("option",{value:"digital-twin",children:"Battery Diagnostics & AI Digital Twins"}),w.jsx("option",{value:"iot",children:"IoT-Enabled Wireless Monitoring"}),w.jsx("option",{value:"indigenous",children:"Indigenous Battery Chemistries"}),w.jsx("option",{value:"defense",children:"National Security & Strategic Storage"})]})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsxs("label",{className:"ground-form__label",htmlFor:"note-message",children:["Abstract / Proposed Technical Approach",w.jsx("span",{className:"ground-form__optional",children:"(Optional)"})]}),w.jsx("textarea",{id:"note-message",rows:3,placeholder:"Summarize your cell chemistry, algorithm, or hardware prototype concept...",className:"ground-form__input ground-form__input--area",value:i.message,onChange:f=>s({...i,message:f.target.value})})]}),w.jsx("div",{className:"ground-form__trap","aria-hidden":"true",children:w.jsx("input",{id:"note-website",type:"text",tabIndex:-1,autoComplete:"off"})}),w.jsxs("button",{type:"submit",className:"cut-button ground-form__submit",style:{"--cut-fill":"var(--color-red)","--cut-fill-hover":"var(--color-orange)"},children:[w.jsx("span",{className:"cut-button__box"}),w.jsx("span",{className:"cut-button__label",children:"Submit Expression of Interest (EOI)"})]})]})]})}),w.jsxs("footer",{className:"ground__footer",children:[w.jsx("a",{className:"ground__maker",href:"#top",children:w.jsx("span",{children:"Built for India's Battery Future — Hackathon 2026"})}),w.jsxs("p",{className:"ground__copyright",children:[w.jsx("span",{children:"© 2026 Intelligent Battery Cell 4.0 Hackathon"}),w.jsx("a",{className:"ground__privacy",href:"#top",children:"Back to Altitude"})]})]})]})}function X3(){return w.jsxs("div",{className:"page-shell",children:[w.jsx(g3,{}),w.jsx(_3,{}),w.jsx(v3,{}),w.jsx(b3,{}),w.jsx("section",{className:"article-intro","aria-label":"Hackathon introduction",children:w.jsxs("div",{className:"article-intro__inner",children:[w.jsx(kh,{as:"p",className:"article-intro__lead",text:"Intelligent Battery Cell 4.0 Hackathon 2026 brings together India's sharpest students, research scholars, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology.",highlightWord:"innovative"}),w.jsx(kh,{as:"p",className:"article-intro__copy",text:"The event is focused on using Artificial Intelligence to advance battery safety, sustainability, and indigenous innovation. From mitigating thermal runaway hazards in electric vehicles to building gigawatt-hour grid storage and extreme-climate defense energy systems, the era of passive chemical batteries is over."}),w.jsx(kh,{as:"p",className:"article-intro__copy",text:"Whether you are writing AI neural digital twin algorithms, engineering embedded firmware for edge BMS microcontrollers, testing sodium-ion cathode formulations, or designing circular second-life cascading models — this is the premier national platform to showcase your breakthrough."})]})}),w.jsx(T3,{}),w.jsx(D3,{}),w.jsx(A3,{}),w.jsx(R3,{}),w.jsx(U3,{}),w.jsx(O3,{}),w.jsx(z3,{}),w.jsx(F3,{}),w.jsx(G3,{}),w.jsx(V3,{})]})}WM.createRoot(document.getElementById("root")).render(w.jsx(_x.StrictMode,{children:w.jsx(X3,{})}));
