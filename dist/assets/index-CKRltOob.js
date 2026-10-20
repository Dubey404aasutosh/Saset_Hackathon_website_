(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function Ex(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sh={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function XM(){if(lv)return il;lv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return il.Fragment=t,il.jsx=i,il.jsxs=i,il}var cv;function WM(){return cv||(cv=1,sh.exports=XM()),sh.exports}var w=WM(),oh={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function qM(){if(uv)return ht;uv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function T(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,y={};function P(F,ue,be){this.props=F,this.context=ue,this.refs=y,this.updater=be||N}P.prototype.isReactComponent={},P.prototype.setState=function(F,ue){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ue,"setState")},P.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function X(){}X.prototype=P.prototype;function C(F,ue,be){this.props=F,this.context=ue,this.refs=y,this.updater=be||N}var U=C.prototype=new X;U.constructor=C,S(U,P.prototype),U.isPureReactComponent=!0;var O=Array.isArray;function I(){}var E={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function B(F,ue,be){var K=be.ref;return{$$typeof:o,type:F,key:ue,ref:K!==void 0?K:null,props:be}}function H(F,ue){return B(F.type,ue,F.props)}function Q(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function j(F){var ue={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(be){return ue[be]})}var Y=/\/+/g;function ee(F,ue){return typeof F=="object"&&F!==null&&F.key!=null?j(""+F.key):ue.toString(36)}function G(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(I,I):(F.status="pending",F.then(function(ue){F.status==="pending"&&(F.status="fulfilled",F.value=ue)},function(ue){F.status==="pending"&&(F.status="rejected",F.reason=ue)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function V(F,ue,be,K,de){var Ae=typeof F;(Ae==="undefined"||Ae==="boolean")&&(F=null);var Ie=!1;if(F===null)Ie=!0;else switch(Ae){case"bigint":case"string":case"number":Ie=!0;break;case"object":switch(F.$$typeof){case o:case t:Ie=!0;break;case g:return Ie=F._init,V(Ie(F._payload),ue,be,K,de)}}if(Ie)return de=de(F),Ie=K===""?"."+ee(F,0):K,O(de)?(be="",Ie!=null&&(be=Ie.replace(Y,"$&/")+"/"),V(de,ue,be,"",function(Ht){return Ht})):de!=null&&(Q(de)&&(de=H(de,be+(de.key==null||F&&F.key===de.key?"":(""+de.key).replace(Y,"$&/")+"/")+Ie)),ue.push(de)),1;Ie=0;var xe=K===""?".":K+":";if(O(F))for(var De=0;De<F.length;De++)K=F[De],Ae=xe+ee(K,De),Ie+=V(K,ue,be,Ae,de);else if(De=T(F),typeof De=="function")for(F=De.call(F),De=0;!(K=F.next()).done;)K=K.value,Ae=xe+ee(K,De++),Ie+=V(K,ue,be,Ae,de);else if(Ae==="object"){if(typeof F.then=="function")return V(G(F),ue,be,K,de);throw ue=String(F),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.")}return Ie}function re(F,ue,be){if(F==null)return F;var K=[],de=0;return V(F,K,"","",function(Ae){return ue.call(be,Ae,de++)}),K}function ae(F){if(F._status===-1){var ue=F._result,be=ue();be.then(function(K){(F._status===0||F._status===-1)&&(F._status=1,F._result=K,be.status===void 0&&(be.status="fulfilled",be.value=K))},function(K){(F._status===0||F._status===-1)&&(F._status=2,F._result=K,be.status===void 0&&(be.status="rejected",be.reason=K))}),F._status===-1&&(F._status=0,F._result=be)}if(F._status===1)return F._result.default;throw F._result}var fe=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ue=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ue))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function _e(F){var ue=E.T,be={};be.types=ue!==null?ue.types:null,E.T=be;try{var K=F(),de=E.S;de!==null&&de(be,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(I,fe)}catch(Ae){fe(Ae)}finally{ue!==null&&be.types!==null&&(ue.types=be.types),E.T=ue}}function ke(F){var ue=E.T;if(ue!==null){var be=ue.types;be===null?ue.types=[F]:be.indexOf(F)===-1&&be.push(F)}else _e(ke.bind(null,F))}var we={map:re,forEach:function(F,ue,be){re(F,function(){ue.apply(this,arguments)},be)},count:function(F){var ue=0;return re(F,function(){ue++}),ue},toArray:function(F){return re(F,function(ue){return ue})||[]},only:function(F){if(!Q(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ht.Activity=_,ht.Children=we,ht.Component=P,ht.Fragment=i,ht.Profiler=c,ht.PureComponent=C,ht.StrictMode=s,ht.Suspense=m,ht.ViewTransition=x,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,ht.__COMPILER_RUNTIME={__proto__:null,c:function(F){return E.H.useMemoCache(F)}},ht.addTransitionType=ke,ht.cache=function(F){return function(){return F.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(F,ue,be){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var K=S({},F.props),de=F.key;if(ue!=null)for(Ae in ue.key!==void 0&&(de=""+ue.key),ue)!D.call(ue,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ue.ref===void 0||(K[Ae]=ue[Ae]);var Ae=arguments.length-2;if(Ae===1)K.children=be;else if(1<Ae){for(var Ie=Array(Ae),xe=0;xe<Ae;xe++)Ie[xe]=arguments[xe+2];K.children=Ie}return B(F.type,de,K)},ht.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},ht.createElement=function(F,ue,be){var K,de={},Ae=null;if(ue!=null)for(K in ue.key!==void 0&&(Ae=""+ue.key),ue)D.call(ue,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(de[K]=ue[K]);var Ie=arguments.length-2;if(Ie===1)de.children=be;else if(1<Ie){for(var xe=Array(Ie),De=0;De<Ie;De++)xe[De]=arguments[De+2];de.children=xe}if(F&&F.defaultProps)for(K in Ie=F.defaultProps,Ie)de[K]===void 0&&(de[K]=Ie[K]);return B(F,Ae,de)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:h,render:F}},ht.isValidElement=Q,ht.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ae}},ht.memo=function(F,ue){return{$$typeof:p,type:F,compare:ue===void 0?null:ue}},ht.startTransition=_e,ht.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},ht.use=function(F){return E.H.use(F)},ht.useActionState=function(F,ue,be){return E.H.useActionState(F,ue,be)},ht.useCallback=function(F,ue){return E.H.useCallback(F,ue)},ht.useContext=function(F){return E.H.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F,ue){return E.H.useDeferredValue(F,ue)},ht.useEffect=function(F,ue){return E.H.useEffect(F,ue)},ht.useEffectEvent=function(F){return E.H.useEffectEvent(F)},ht.useId=function(){return E.H.useId()},ht.useImperativeHandle=function(F,ue,be){return E.H.useImperativeHandle(F,ue,be)},ht.useInsertionEffect=function(F,ue){return E.H.useInsertionEffect(F,ue)},ht.useLayoutEffect=function(F,ue){return E.H.useLayoutEffect(F,ue)},ht.useMemo=function(F,ue){return E.H.useMemo(F,ue)},ht.useOptimistic=function(F,ue){return E.H.useOptimistic(F,ue)},ht.useReducer=function(F,ue,be){return E.H.useReducer(F,ue,be)},ht.useRef=function(F){return E.H.useRef(F)},ht.useState=function(F){return E.H.useState(F)},ht.useSyncExternalStore=function(F,ue,be){return E.H.useSyncExternalStore(F,ue,be)},ht.useTransition=function(){return E.H.useTransition()},ht.version="19.3.1",ht}var fv;function Hp(){return fv||(fv=1,oh.exports=qM()),oh.exports}var je=Hp();const bx=Ex(je);var lh={exports:{}},al={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function YM(){return dv||(dv=1,(function(o){function t(G,V){var re=G.length;G.push(V);e:for(;0<re;){var ae=re-1>>>1,fe=G[ae];if(0<c(fe,V))G[ae]=V,G[re]=fe,re=ae;else break e}}function i(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var V=G[0],re=G.pop();if(re!==V){G[0]=re;e:for(var ae=0,fe=G.length,_e=fe>>>1;ae<_e;){var ke=2*(ae+1)-1,we=G[ke],F=ke+1,ue=G[F];if(0>c(we,re))F<fe&&0>c(ue,we)?(G[ae]=ue,G[F]=re,ae=F):(G[ae]=we,G[ke]=re,ae=ke);else if(F<fe&&0>c(ue,re))G[ae]=ue,G[F]=re,ae=F;else break e}}return V}function c(G,V){var re=G.sortIndex-V.sortIndex;return re!==0?re:G.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,_=null,x=3,M=!1,T=!1,N=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function C(G){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=G)s(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=i(p)}}function U(G){if(N=!1,C(G),!T)if(i(m)!==null)T=!0,O||(O=!0,Q());else{var V=i(p);V!==null&&ee(U,V.startTime-G)}}var O=!1,I=-1,E=5,D=-1;function B(){return S?!0:!(o.unstable_now()-D<E)}function H(){if(S=!1,O){var G=o.unstable_now();D=G;var V=!0;try{e:{T=!1,N&&(N=!1,P(I),I=-1),M=!0;var re=x;try{t:{for(C(G),_=i(m);_!==null&&!(_.expirationTime>G&&B());){var ae=_.callback;if(typeof ae=="function"){_.callback=null,x=_.priorityLevel;var fe=ae(_.expirationTime<=G);if(G=o.unstable_now(),typeof fe=="function"){_.callback=fe,C(G),V=!0;break t}_===i(m)&&s(m),C(G)}else s(m);_=i(m)}if(_!==null)V=!0;else{var _e=i(p);_e!==null&&ee(U,_e.startTime-G),V=!1}}break e}finally{_=null,x=re,M=!1}V=void 0}}finally{V?Q():O=!1}}}var Q;if(typeof X=="function")Q=function(){X(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=H,Q=function(){Y.postMessage(null)}}else Q=function(){y(H,0)};function ee(G,V){I=y(function(){G(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(G){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var re=x;x=V;try{return G()}finally{x=re}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(G,V){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var re=x;x=G;try{return V()}finally{x=re}},o.unstable_scheduleCallback=function(G,V,re){var ae=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ae+re:ae):re=ae,G){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=re+fe,G={id:g++,callback:V,priorityLevel:G,startTime:re,expirationTime:fe,sortIndex:-1},re>ae?(G.sortIndex=re,t(p,G),i(m)===null&&G===i(p)&&(N?(P(I),I=-1):N=!0,ee(U,re-ae))):(G.sortIndex=fe,t(m,G),T||M||(T=!0,O||(O=!0,Q()))),G},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(G){var V=x;return function(){var re=x;x=V;try{return G.apply(this,arguments)}finally{x=re}}}})(uh)),uh}var hv;function ZM(){return hv||(hv=1,ch.exports=YM()),ch.exports}var fh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function jM(){if(pv)return Dn;pv=1;var o=Hp();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)_+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(g,_,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:g,containerInfo:_,implementation:x}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(g){return{$$typeof:f,_reason:g}},Dn.createPortal=function(g,_){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return h(g,_,null,x)},Dn.flushSync=function(g){var _=m.T,x=s.p;try{if(m.T=null,s.p=2,g)return g()}finally{m.T=_,s.p=x,s.d.f()}},Dn.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Dn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Dn.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var x=_.as,M=p(x,_.crossOrigin),T=typeof _.integrity=="string"?_.integrity:void 0,N=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;x==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:M,integrity:T,fetchPriority:N}):x==="script"&&s.d.X(g,{crossOrigin:M,integrity:T,fetchPriority:N,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Dn.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var x=p(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(g)},Dn.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var x=_.as,M=p(x,_.crossOrigin);s.d.L(g,x,{crossOrigin:M,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Dn.preloadModule=function(g,_){if(typeof g=="string")if(_){var x=p(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(g)},Dn.requestFormReset=function(g){s.d.r(g)},Dn.unstable_batchedUpdates=function(g,_){return g(_)},Dn.useFormState=function(g,_,x){return m.H.useFormState(g,_,x)},Dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var mv;function KM(){if(mv)return fh.exports;mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),fh.exports=jM(),fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function QM(){if(gv)return al;gv=1;var o=ZM(),t=Hp(),i=KM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return m(l),e;if(u===r)return m(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=u;else{for(var v=!1,R=l.child;R;){if(R===a){v=!0,a=l,r=u;break}if(R===r){v=!0,r=l,a=u;break}R=R.sibling}if(!v){for(R=u.child;R;){if(R===a){v=!0,a=u,r=l;break}if(R===r){v=!0,r=u,a=l;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,r,l,u))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=x(e);return a===null||N(n,e,a.child,{foundSelf:!1}),n}function N(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(e,n,a.child,r))return!0;a=a.sibling}return!1}function S(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,P=null;function X(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function C(e,n,a){return e===a?(P=e,!1):e===n?(P!==null&&(y=e),!0):!1}function U(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function O(e,n,a){for(var r=0,l=e;l;l=a(l))r++;l=0;for(var u=n;u;u=a(u))l++;for(;0<r-l;)e=a(e),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var I=Object.assign,E=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),ke=Symbol.for("react.legacy_hidden"),we=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),ue=Symbol.for("react.recoverable"),be=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=be&&e[be]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case j:return"Profiler";case Q:return"StrictMode";case V:return"Suspense";case re:return"SuspenseList";case _e:return"Activity";case F:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ee:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case G:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case fe:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Ie=Array.isArray,xe=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ht={pending:!1,data:null,method:null,action:null},_t=[],vt=-1;function He(e){return{current:e}}function Re(e){0>vt||(e.current=_t[vt],_t[vt]=null,vt--)}function Ce(e,n){vt++,_t[vt]=e.current,e.current=n}var ot=He(null),xt=He(null),ft=He(null),St=He(null);function q(e,n){switch(Ce(ft,n),Ce(xt,e),Ce(ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?__(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=__(n),e=v_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Re(ot),Ce(ot,e)}function Et(){Re(ot),Re(xt),Re(ft)}function ct(e){var n=e.memoizedState;n!==null&&(Ps._currentValue=n.memoizedState,Ce(St,e)),n=ot.current;var a=v_(n,e.type);n!==a&&(Ce(xt,e),Ce(ot,a))}function L(e){xt.current===e&&(Re(ot),Re(xt)),St.current===e&&(Re(St),Ps._currentValue=Ht)}var b,J;function ie(e){if(b===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);b=n&&n[1]||"",J=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+b+e+J}var ge=!1;function Ne(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(Ve){var $=Ve}Reflect.construct(e,[],Ee)}else{try{Ee.call()}catch(Ve){$=Ve}Ee=!1;try{var ce=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ee=!0,new e}finally{Ee&&(ce!==void 0?Object.defineProperty(e.prototype,"props",ce):delete e.prototype.props)}}}else{try{throw Error()}catch(Ve){$=Ve}(Ee=e())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(Ve){if(Ve&&$&&typeof Ve.stack=="string")return[Ve.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),v=u[0],R=u[1];if(v&&R){var z=v.split(`
`),ne=R.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<ne.length&&!ne[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===ne.length)for(r=z.length-1,l=ne.length-1;1<=r&&0<=l&&z[r]!==ne[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==ne[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==ne[l]){var he=`
`+z[r].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=r&&0<=l);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ie(a):""}function ze(e,n){switch(e.tag){case 26:case 27:case 5:return ie(e.type);case 16:return ie("Lazy");case 13:return e.child!==n&&n!==null?ie("Suspense Fallback"):ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return ie("Activity");case 30:return ie("ViewTransition");default:return""}}function ve(e){try{var n="",a=null;do n+=ze(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ye=Object.prototype.hasOwnProperty,Oe=o.unstable_scheduleCallback,nt=o.unstable_cancelCallback,Fe=o.unstable_shouldYield,Pe=o.unstable_requestPaint,Be=o.unstable_now,rt=o.unstable_getCurrentPriorityLevel,it=o.unstable_ImmediatePriority,Z=o.unstable_UserBlockingPriority,Ue=o.unstable_NormalPriority,Se=o.unstable_LowPriority,Le=o.unstable_IdlePriority,Xe=o.log,Te=o.unstable_setDisableYieldValue,at=null,Ze=null;function Ot(e){if(typeof Xe=="function"&&Te(e),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(at,e)}catch{}}var pt=Math.clz32?Math.clz32:Ou,Qn=Math.log,ui=Math.LN2;function Ou(e){return e>>>=0,e===0?32:31-(Qn(e)/ui|0)|0}var Qr=256,gr=262144,Pa=4194304;function ua(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _r(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~u,r!==0?l=ua(r):(v&=R,v!==0?l=ua(v):a||(a=R&~e,a!==0&&(l=ua(a))))):(R=r&~u,R!==0?l=ua(R):v!==0?l=ua(v):a||(a=r&~e,a!==0&&(l=ua(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Ia(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Gi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-pt(a),l=1<<r;n|=e[r],a&=~l}return n}function lo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var e=Pa;return Pa<<=1,(Pa&62914560)===0&&(Pa=4194304),e}function Jr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tl(e,n,a,r,l,u){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,ne=e.hiddenUpdates;for(a=v&~a;0<a;){var he=31-pt(a),Ee=1<<he;R[he]=0,z[he]=-1;var $=ne[he];if($!==null)for(ne[he]=null,he=0;he<$.length;he++){var ce=$[he];ce!==null&&(ce.lane&=-536870913)}a&=~Ee}r!==0&&vr(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(v&~n))}function vr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-pt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function uo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-pt(a),l=1<<r;l&n|e[r]&n&&(e[r]|=n),a&=~l}}function fo(e,n){var a=n&-n;return a=(a&42)!==0?1:ho(a),(a&(e.suspendedLanes|n))!==0?0:a}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function po(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Al(){var e=De.p;return e!==0?e:(e=window.event,e===void 0?32:tv(e.type))}function Rl(e,n){var a=De.p;try{return De.p=e,n()}finally{De.p=a}}var fi=Math.random().toString(36).slice(2),A="__reactFiber$"+fi,k="__reactProps$"+fi,pe="__reactContainer$"+fi,oe="__reactEvents$"+fi,le="__reactListeners$"+fi,We="__reactHandles$"+fi,Ke="__reactResources$"+fi,Ge="__reactMarker$"+fi,$e="__reactLoad$"+fi;function et(e){delete e[A],delete e[k],delete e[le],delete e[We]}function ut(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[pe]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=P_(e);e!==null;){if(a=e[A])return a;e=P_(e)}return n}e=a,a=e.parentNode}return null}function mt(e){if(e=e[A]||e[pe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Qe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ct(e){var n=e[Ke];return n||(n=e[Ke]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Tt(e){e[Ge]=!0}function Qt(e){e[$e]=void 0}var Wt=new Set,vn={};function qe(e,n){sn(e,n),sn(e+"Capture",n)}function sn(e,n){for(vn[e]=n,e=0;e<n.length;e++)Wt.add(n[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fn={},Jn={};function ki(e){return ye.call(Jn,e)?!0:ye.call(Fn,e)?!1:Pt.test(e)?Jn[e]=!0:(Fn[e]=!0,!1)}var At=!1;function Gt(){var e=At;return At=!1,e}function en(e,n,a){if(ki(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function $n(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Dt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function on(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(v){a=""+v,u.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pu(e){if(!e._valueTracker){var n=fa(e)?"checked":"value";e._valueTracker=Cl(e,n,""+e[n])}}function rm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var fS=/[\n"\\]/g;function di(e){return e.replace(fS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Iu(e,n,a,r,l,u,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+on(n)):e.value!==""+on(n)&&(e.value=""+on(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?v==="number"&&e.value==n?zu(e,on(e.value)):zu(e,on(n)):a!=null?zu(e,on(a)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+on(R):e.removeAttribute("name")}function sm(e,n,a,r,l,u,v,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Pu(e);return}a=a!=null?""+on(a):"",n=n!=null?""+on(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Pu(e)}function zu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function $r(e,n,a,r){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+on(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function om(e,n,a){if(n!=null&&(n=""+on(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+on(a):""}function lm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ie(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=on(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Pu(e)}function es(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var dS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||dS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function um(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",At=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(cm(e,l,r),At=!0)}else for(var u in n)n.hasOwnProperty(u)&&cm(e,u,n[u])}function Fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(e){return pS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var Bu=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ts=null,ns=null;function fm(e){var n=mt(e);if(n&&(e=n.stateNode)){var a=e[k]||null;e:switch(e=n.stateNode,n.type){case"input":if(Iu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var l=r[k]||null;if(!l)throw Error(s(90));Iu(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&rm(r)}break e;case"textarea":om(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$r(e,!!a.multiple,n,!1)}}}var Gu=!1;function dm(e,n,a){if(Gu)return e(n,a);Gu=!0;try{var r=e(n);return r}finally{if(Gu=!1,(ts!==null||ns!==null)&&(wc(),ts&&(n=ts,e=ns,ns=ts=null,fm(n),e)))for(n=0;n<e.length;n++)fm(e[n])}}function mo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[k]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(da)try{var go={};Object.defineProperty(go,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Vu=!1}var za=null,ku=null,Nl=null;function hm(){if(Nl)return Nl;var e,n=ku,a=n.length,r,l="value"in za?za.value:za.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===l[u-r];r++);return Nl=l.slice(e,1<r?1-r:void 0)}function Dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function pm(){return!1}function Bn(e){function n(a,r,l,u,v){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ul:pm,this.isPropagationStopped=pm,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Bn(Fa),_o=I({},Fa,{view:0,detail:0}),mS=Bn(_o),Xu,Wu,vo,Ol=I({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Xu=e.screenX-vo.screenX,Wu=e.screenY-vo.screenY):Wu=Xu=0,vo=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:Wu}}),mm=Bn(Ol),gS=I({},Ol,{dataTransfer:0}),_S=Bn(gS),vS=I({},_o,{relatedTarget:0}),qu=Bn(vS),xS=I({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),SS=Bn(xS),yS=I({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),MS=Bn(yS),ES=I({},Fa,{data:0}),gm=Bn(ES),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=AS[e])?!!n[e]:!1}function Yu(){return RS}var CS=I({},_o,{key:function(e){if(e.key){var n=bS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?TS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?Dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wS=Bn(CS),NS=I({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=Bn(NS),DS=I({},Fa,{submitter:0}),US=Bn(DS),LS=I({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),OS=Bn(LS),PS=I({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),IS=Bn(PS),zS=I({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Bn(zS),BS=I({},Fa,{newState:0,oldState:0,source:0}),HS=Bn(BS),GS=[9,13,27,32],Zu=da&&"CompositionEvent"in window,xo=null;da&&"documentMode"in document&&(xo=document.documentMode);var VS=da&&"TextEvent"in window&&!xo,vm=da&&(!Zu||xo&&8<xo&&11>=xo),xm=" ",Sm=!1;function ym(e,n){switch(e){case"keyup":return GS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function kS(e,n){switch(e){case"compositionend":return Mm(n);case"keypress":return n.which!==32?null:(Sm=!0,xm);case"textInput":return e=n.data,e===xm&&Sm?null:e;default:return null}}function XS(e,n){if(is)return e==="compositionend"||!Zu&&ym(e,n)?(e=hm(),Nl=ku=za=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vm&&n.locale!=="ko"?null:n.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!WS[e.type]:n==="textarea"}function bm(e,n,a,r){ts?ns?ns.push(r):ns=[r]:ts=r,n=Pc(n,"onChange"),0<n.length&&(a=new Ll("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var So=null,yo=null;function qS(e){f_(e,0)}function Pl(e){var n=Qe(e);if(rm(n))return e}function Tm(e,n){if(e==="change")return n}var Am=!1;if(da){var ju;if(da){var Ku="oninput"in document;if(!Ku){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),Ku=typeof Rm.oninput=="function"}ju=Ku}else ju=!1;Am=ju&&(!document.documentMode||9<document.documentMode)}function Cm(){So&&(So.detachEvent("onpropertychange",wm),yo=So=null)}function wm(e){if(e.propertyName==="value"&&Pl(yo)){var n=[];bm(n,yo,e,Hu(e)),dm(qS,n)}}function YS(e,n,a){e==="focusin"?(Cm(),So=n,yo=a,So.attachEvent("onpropertychange",wm)):e==="focusout"&&Cm()}function ZS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(yo)}function jS(e,n){if(e==="click")return Pl(n)}function KS(e,n){if(e==="input"||e==="change")return Pl(n)}function QS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:QS;function Mo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!ye.call(n,l)||!ei(e[l],n[l]))return!1}return!0}function Qu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dm(e,n){var a=Nm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nm(a)}}function Um(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Um(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qu(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qu(e.document)}return n}function Ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var JS=da&&"documentMode"in document&&11>=document.documentMode,as=null,$u=null,Eo=null,ef=!1;function Om(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ef||as==null||as!==Qu(r)||(r=as,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Mo(Eo,r)||(Eo=r,r=Pc($u,"onSelect"),0<r.length&&(n=new Ll("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=as)))}function xr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var rs={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},tf={},Pm={};da&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Sr(e){if(tf[e])return tf[e];if(!rs[e])return e;var n=rs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pm)return tf[e]=n[a];return e}var Im=Sr("animationend"),zm=Sr("animationiteration"),Fm=Sr("animationstart"),$S=Sr("transitionrun"),ey=Sr("transitionstart"),ty=Sr("transitioncancel"),Bm=Sr("transitionend"),Hm=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Ti(e,n){Hm.set(e,n),qe(n,[e])}var ny=0;function ha(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=wi.identifierPrefix;var a=ny++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Gm(e){if(e==null||typeof e=="string")return e;var n=null,a=Ts;if(a!==null)for(var r=0;r<a.length;r++){var l=e[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function pa(e,n){return e=Gm(e),n=Gm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],ss=0,af=0;function zl(){for(var e=ss,n=af=ss=0;n<e;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var u=hi[n];if(hi[n++]=null,r!==null&&l!==null){var v=r.pending;v===null?l.next=l:(l.next=v.next,v.next=l),r.pending=l}u!==0&&Vm(a,l,u)}}function Fl(e,n,a,r){hi[ss++]=e,hi[ss++]=n,hi[ss++]=a,hi[ss++]=r,af|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function rf(e,n,a,r){return Fl(e,n,a,r),Bl(e)}function yr(e,n){return Fl(e,null,null,n),Bl(e)}function Vm(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-pt(a),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=a|536870912),u):null}function Bl(e){if(50<Wo)throw Wo=0,Cc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var os={};function iy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,r){return new iy(e,n,a,r)}function sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function km(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Hl(e,n,a,r,l,u){var v=0;if(r=e,typeof r=="function")sf(r)&&(v=1);else if(typeof r=="string")v=DM(e,a,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case _e:return e=Xn(31,a,n,l),e.elementType=_e,e.lanes=u,e;case H:return Mr(a.children,l,u,n);case Q:v=8,l|=24;break;case j:return e=Xn(12,a,n,l|2),e.elementType=j,e.lanes=u,e;case V:return e=Xn(13,a,n,l),e.elementType=V,e.lanes=u,e;case re:return e=Xn(19,a,n,l),e.elementType=re,e.lanes=u,e;case ke:case F:return e=l|32,e=Xn(30,a,n,e),e.elementType=F,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ee:v=10;break e;case Y:v=9;break e;case G:v=11;break e;case ae:v=14;break e;case fe:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Xn(v,a,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function Mr(e,n,a,r){return e=Xn(7,e,r,n),e.lanes=a,e}function of(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function Xm(e){var n=Xn(18,null,null,0);return n.stateNode=e,n}function lf(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Wm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=Wm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ve(n)},Wm.set(e,n),n)}return{value:e,source:n,stack:ve(n)}}var ls=[],cs=0,Gl=null,bo=0,mi=[],gi=0,Ba=null,Wi=1,qi="";function ga(e,n){ls[cs++]=bo,ls[cs++]=Gl,Gl=e,bo=n}function qm(e,n,a){mi[gi++]=Wi,mi[gi++]=qi,mi[gi++]=Ba,Ba=e;var r=Wi;e=qi;var l=32-pt(r)-1;r&=~(1<<l),a+=1;var u=32-pt(n)+l;if(30<u){var v=l-l%5;u=(r&(1<<v)-1).toString(32),r>>=v,l-=v,Wi=1<<32-pt(n)+l|a<<l|r,qi=u+e}else Wi=1<<u|a<<l|r,qi=e}function Vl(e){e.return!==null&&(ga(e,1),qm(e,1,0))}function cf(e){for(;e===Gl;)Gl=ls[--cs],ls[cs]=null,bo=ls[--cs],ls[cs]=null;for(;e===Ba;)Ba=mi[--gi],mi[gi]=null,qi=mi[--gi],mi[gi]=null,Wi=mi[--gi],mi[gi]=null}function Ym(e,n){mi[gi++]=Wi,mi[gi++]=qi,mi[gi++]=Ba,Wi=n.id,qi=n.overflow,Ba=e}var Mn=null,tn=null,Rt=!1,Ha=null,_i=!1,uf=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw To(pi(n,e)),uf}function Zm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[k]=r,a){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(a=0;a<Yo.length;a++)Nt(Yo[a],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Nt("invalid",n),sm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Nt("invalid",n);break;case"textarea":Nt("invalid",n),lm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||m_(n.textContent,a)?(r.popover!=null&&(Nt("beforetoggle",n),Nt("toggle",n)),r.onScroll!=null&&Nt("scroll",n),r.onScrollEnd!=null&&Nt("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ga(e,!0)}function kl(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Mn=Mn.return}}function us(e){if(e!==Mn)return!1;if(!Rt)return kl(e),Rt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hd(e.type,e.memoizedProps)),a=!a),a&&tn&&Ga(e),kl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=O_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=O_(e)}else n===27?(n=tn,ir(e.type)?(e=jd,jd=null,tn=e):tn=n):tn=Mn?xi(e.stateNode.nextSibling):null;return!0}function Er(){tn=Mn=null,Rt=!1}function ff(){var e=Ha;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ha=null),e}function To(e){Ha===null?Ha=[e]:Ha.push(e)}var df=He(null),br=null,_a=null;function Va(e,n,a){Ce(df,n._currentValue),n._currentValue=a}function va(e){e._currentValue=df.current,Re(df)}function Xl(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function hf(e,n,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var v=l.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=l;for(var z=0;z<n.length;z++)if(R.context===n[z]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Xl(u.return,a,e),r||(v=null);break e}u=R.next}}else if(l.tag===18){if(v=l.return,v===null)throw Error(s(341));v.lanes|=a,u=v.alternate,u!==null&&(u.lanes|=a),Xl(v,a,e),v=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,v=l.alternate,v!==null&&(v.lanes|=a),Xl(l.return,a,e),v=l.child,v=v!==null?v.sibling:null):v=l.child;if(v!==null)v.return=l;else for(v=l;v!==null;){if(v===e){v=null;break}if(l=v.sibling,l!==null){l.return=v.return,v=l;break}v=v.return}l=v}}function Tr(e,n,a,r){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var v=l.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=l.type;ei(l.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(l===St.current){if(v=l.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ps):e=[Ps])}l=l.return}return e!==null&&hf(n,e,a,r),n.flags|=262144,e!==null}function Wl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ar(e){br=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return jm(br,e)}function ql(e,n){return br===null&&Ar(e),jm(e,n)}function jm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(s(308));_a=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _a=_a.next=n;return a}var ay=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ry=o.unstable_scheduleCallback,sy=o.unstable_NormalPriority,dn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new ay,data:new Map,refCount:0}}function Ao(e){e.refCount--,e.refCount===0&&ry(sy,function(){e.controller.abort()})}function Km(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Ro=null;function oy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Co=null,mf=0,Rr=0,fs=null;function ly(e,n){if(Co===null){var a=Co=[];mf=0,Rr=Dd(),fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return mf++,n.then(Qm,Qm),n}function Qm(){if(--mf===0&&(Ro=null,Co!==null)){fs!==null&&(fs.status="fulfilled");var e=Co;Co=null,Rr=0,fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function cy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Jm=xe.S;xe.S=function(e,n){if(Xg=Be(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ly(e,n),Ro!==null)for(var a=ws;a!==null;)Km(a,Ro),a=a.next;if(a=e.types,a!==null){for(var r=ws;r!==null;)Km(r,a),r=r.next;if(Rr!==0){r=Ro,r===null&&(r=Ro=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}Jm!==null&&Jm(e,n)};var Cr=He(null);function gf(){var e=Cr.current;return e!==null?e:$t.pooledCache}function Yl(e,n){n===null?Ce(Cr,Cr.current):Ce(Cr,n.pool)}function $m(){var e=gf();return e===null?null:{parent:dn._currentValue,pool:e}}var ds=Error(s(460)),_f=Error(s(474)),Zl=Error(s(542)),jl={then:function(){}};function e0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function t0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=$t,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e}throw Nr=n,ds}}function wr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,ds):a}}var Nr=null;function n0(){if(Nr===null)throw Error(s(459));var e=Nr;return Nr=null,e}function i0(e){if(e===ds||e===Zl)throw Error(s(483))}var hs=null,wo=0;function Kl(e){var n=wo;return wo+=1,hs===null&&(hs=[]),t0(hs,e,n)}function ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ql(e,n){throw n.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function a0(e){function n(te,W){if(e){var se=te.deletions;se===null?(te.deletions=[W],te.flags|=16):se.push(W)}}function a(te,W){if(!e)return null;for(;W!==null;)n(te,W),W=W.sibling;return null}function r(te){for(var W=new Map;te!==null;)te.key===null?W.set(te.index,te):W.set(te.key,te),te=te.sibling;return W}function l(te,W){return te=ma(te,W),te.index=0,te.sibling=null,te}function u(te,W,se){return te.index=se,e?(se=te.alternate,se!==null?(se=se.index,se<W?(te.flags|=2,W):se):(te.flags|=134217730,W)):(te.flags|=1048576,W)}function v(te){return e&&te.alternate===null&&(te.flags|=134217730),te}function R(te,W,se,Me){return W===null||W.tag!==6?(W=of(se,te.mode,Me),W.return=te,W):(W=l(W,se),W.return=te,W)}function z(te,W,se,Me){var Je=se.type;return Je===H?(te=he(te,W,se.props.children,Me,se.key),ka(te,se),te):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===fe&&wr(Je)===W.type)?(W=l(W,se.props),ka(W,se),W.return=te,W):(W=Hl(se.type,se.key,se.props,null,te.mode,Me),ka(W,se),W.return=te,W)}function ne(te,W,se,Me){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=lf(se,te.mode,Me),W.return=te,W):(W=l(W,se.children||[]),W.return=te,W)}function he(te,W,se,Me,Je){return W===null||W.tag!==7?(W=Mr(se,te.mode,Me,Je),W.return=te,W):(W=l(W,se),W.return=te,W)}function Ee(te,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=of(""+W,te.mode,se),W.return=te,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return se=Hl(W.type,W.key,W.props,null,te.mode,se),ka(se,W),se.return=te,se;case B:return W=lf(W,te.mode,se),W.return=te,W;case fe:return W=wr(W),Ee(te,W,se)}if(Ie(W)||K(W))return W=Mr(W,te.mode,se,null),W.return=te,W;if(typeof W.then=="function")return Ee(te,Kl(W),se);if(W.$$typeof===ee)return Ee(te,ql(te,W),se);Ql(te,W)}return null}function $(te,W,se,Me){var Je=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return Je!==null?null:R(te,W,""+se,Me);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case D:return se.key===Je?z(te,W,se,Me):null;case B:return se.key===Je?ne(te,W,se,Me):null;case fe:return se=wr(se),$(te,W,se,Me)}if(Ie(se)||K(se))return Je!==null?null:he(te,W,se,Me,null);if(typeof se.then=="function")return $(te,W,Kl(se),Me);if(se.$$typeof===ee)return $(te,W,ql(te,se),Me);Ql(te,se)}return null}function ce(te,W,se,Me,Je){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return te=te.get(se)||null,R(W,te,""+Me,Je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case D:return te=te.get(Me.key===null?se:Me.key)||null,z(W,te,Me,Je);case B:return te=te.get(Me.key===null?se:Me.key)||null,ne(W,te,Me,Je);case fe:return Me=wr(Me),ce(te,W,se,Me,Je)}if(Ie(Me)||K(Me))return te=te.get(se)||null,he(W,te,Me,Je,null);if(typeof Me.then=="function")return ce(te,W,se,Kl(Me),Je);if(Me.$$typeof===ee)return ce(te,W,se,ql(W,Me),Je);Ql(W,Me)}return null}function Ve(te,W,se,Me){for(var Je=null,Lt=null,st=W,lt=W=0,mn=null;st!==null&&lt<se.length;lt++){st.index>lt?(mn=st,st=null):mn=st.sibling;var Ft=$(te,st,se[lt],Me);if(Ft===null){st===null&&(st=mn);break}e&&st&&Ft.alternate===null&&n(te,st),W=u(Ft,W,lt),Lt===null?Je=Ft:Lt.sibling=Ft,Lt=Ft,st=mn}if(lt===se.length)return a(te,st),Rt&&ga(te,lt),Je;if(st===null){for(;lt<se.length;lt++)st=Ee(te,se[lt],Me),st!==null&&(W=u(st,W,lt),Lt===null?Je=st:Lt.sibling=st,Lt=st);return Rt&&ga(te,lt),Je}for(st=r(st);lt<se.length;lt++)mn=ce(st,te,lt,se[lt],Me),mn!==null&&(e&&(Ft=mn.alternate,Ft!==null&&st.delete(Ft.key===null?lt:Ft.key)),W=u(mn,W,lt),Lt===null?Je=mn:Lt.sibling=mn,Lt=mn);return e&&st.forEach(function(lr){return n(te,lr)}),Rt&&ga(te,lt),Je}function tt(te,W,se,Me){if(se==null)throw Error(s(151));for(var Je=null,Lt=null,st=W,lt=W=0,mn=null,Ft=se.next();st!==null&&!Ft.done;lt++,Ft=se.next()){st.index>lt?(mn=st,st=null):mn=st.sibling;var lr=$(te,st,Ft.value,Me);if(lr===null){st===null&&(st=mn);break}e&&st&&lr.alternate===null&&n(te,st),W=u(lr,W,lt),Lt===null?Je=lr:Lt.sibling=lr,Lt=lr,st=mn}if(Ft.done)return a(te,st),Rt&&ga(te,lt),Je;if(st===null){for(;!Ft.done;lt++,Ft=se.next())Ft=Ee(te,Ft.value,Me),Ft!==null&&(W=u(Ft,W,lt),Lt===null?Je=Ft:Lt.sibling=Ft,Lt=Ft);return Rt&&ga(te,lt),Je}for(st=r(st);!Ft.done;lt++,Ft=se.next())Ft=ce(st,te,lt,Ft.value,Me),Ft!==null&&(e&&(mn=Ft.alternate,mn!==null&&st.delete(mn.key===null?lt:mn.key)),W=u(Ft,W,lt),Lt===null?Je=Ft:Lt.sibling=Ft,Lt=Ft);return e&&st.forEach(function(kM){return n(te,kM)}),Rt&&ga(te,lt),Je}function Mt(te,W,se,Me){if(typeof se=="object"&&se!==null&&se.type===H&&se.key===null&&se.props.ref===void 0&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case D:e:{for(var Je=se.key;W!==null;){if(W.key===Je){if(Je=se.type,Je===H){if(W.tag===7){a(te,W.sibling),Me=l(W,se.props.children),ka(Me,se),Me.return=te,te=Me;break e}}else if(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===fe&&wr(Je)===W.type){a(te,W.sibling),Me=l(W,se.props),ka(Me,se),Me.return=te,te=Me;break e}a(te,W);break}else n(te,W);W=W.sibling}se.type===H?(Me=Mr(se.props.children,te.mode,Me,se.key),ka(Me,se),Me.return=te,te=Me):(Me=Hl(se.type,se.key,se.props,null,te.mode,Me),ka(Me,se),Me.return=te,te=Me)}return v(te);case B:e:{for(Je=se.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){a(te,W.sibling),Me=l(W,se.children||[]),Me.return=te,te=Me;break e}else{a(te,W);break}else n(te,W);W=W.sibling}Me=lf(se,te.mode,Me),Me.return=te,te=Me}return v(te);case fe:return se=wr(se),Mt(te,W,se,Me)}if(Ie(se))return Ve(te,W,se,Me);if(K(se)){if(Je=K(se),typeof Je!="function")throw Error(s(150));return se=Je.call(se),tt(te,W,se,Me)}if(typeof se.then=="function")return Mt(te,W,Kl(se),Me);if(se.$$typeof===ee)return Mt(te,W,ql(te,se),Me);Ql(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(a(te,W.sibling),Me=l(W,se),Me.return=te,te=Me):(a(te,W),Me=of(se,te.mode,Me),Me.return=te,te=Me),v(te)):a(te,W)}return function(te,W,se,Me){try{wo=0;var Je=Mt(te,W,se,Me);return hs=null,Je}catch(st){if(st===ds||st===Zl)throw st;var Lt=Xn(29,st,null,te.mode);return Lt.lanes=Me,Lt.return=te,Lt}finally{}}}var Dr=a0(!0),r0=a0(!1),Xa=!1;function vf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Vt&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Bl(e),Vm(e,null,a),n}return Fl(e,r,n,a),Bl(e)}function No(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,uo(e,a)}}function Sf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=v:u=u.next=v,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var yf=!1;function Do(){if(yf){var e=fs;if(e!==null)throw e}}function Uo(e,n,a,r){yf=!1;var l=e.updateQueue;Xa=!1;var u=l.firstBaseUpdate,v=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var z=R,ne=z.next;z.next=null,v===null?u=ne:v.next=ne,v=z;var he=e.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==v&&(R===null?he.firstBaseUpdate=ne:R.next=ne,he.lastBaseUpdate=z))}if(u!==null){var Ee=l.baseState;v=0,he=ne=z=null,R=u;do{var $=R.lane&-536870913,ce=$!==R.lane;if(ce?(Ut&$)===$:(r&$)===$){$!==0&&$===Rr&&(yf=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ve=e,tt=R;$=n;var Mt=a;switch(tt.tag){case 1:if(Ve=tt.payload,typeof Ve=="function"){Ee=Ve.call(Mt,Ee,$);break e}Ee=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=tt.payload,$=typeof Ve=="function"?Ve.call(Mt,Ee,$):Ve,$==null)break e;Ee=I({},Ee,$);break e;case 2:Xa=!0}}$=R.callback,$!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=l.callbacks,ce===null?l.callbacks=[$]:ce.push($))}else ce={lane:$,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ne=he=ce,z=Ee):he=he.next=ce,v|=$;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,l.lastBaseUpdate=ce,l.shared.pending=null}}while(!0);he===null&&(z=Ee),l.baseState=z,l.firstBaseUpdate=ne,l.lastBaseUpdate=he,u===null&&(l.shared.lanes=0),$a|=v,e.lanes=v,e.memoizedState=Ee}}function s0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function o0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)s0(a[e],n)}var Ya=He(null),Jl=He(0);function l0(e,n){e=Ea,Ce(Jl,e),Ce(Ya,n),Ea=e|n.baseLanes}function Mf(){Ce(Jl,Ea),Ce(Ya,Ya.current)}function Ef(){Ea=Jl.current,Re(Ya),Re(Jl)}var Rn=He(null),Ln=null;function Za(e){var n=e.alternate;Ce(Cn,Cn.current&1),Ce(Rn,e),Ln===null&&(n===null||Ya.current!==null||n.memoizedState!==null)&&(Ln=e)}function bf(e){Ce(Cn,Cn.current),Ce(Rn,e),Ln===null&&(Ln=e)}function c0(e){e.tag===22?(Ce(Cn,Cn.current),Ce(Rn,e),Ln===null&&(Ln=e)):ja()}function ja(){Ce(Cn,Cn.current),Ce(Rn,Rn.current)}function ti(e){Re(Rn),Ln===e&&(Ln=null),Re(Cn)}var Cn=He(0);function Lo(e,n){Ce(Rn,Rn.current),Ce(Cn,n)}function Tf(e){Re(Cn),Re(Rn),Ln===e&&(Ln=null)}function $l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yd(a)||Zd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,yt=null,Jt=null,hn=null,ec=!1,ps=!1,Ur=!1,tc=0,Oo=0,ms=null,uy=0;function ln(){throw Error(s(321))}function Af(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Rf(e,n,a,r,l,u){return xa=u,yt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xe.H=e===null||e.memoizedState===null?q0:Y0,Ur=!1,u=a(r,l),Ur=!1,ps&&(u=f0(n,a,r,l)),u0(e),u}function u0(e){xe.H=lc;var n=Jt!==null&&Jt.next!==null;if(xa=0,hn=Jt=yt=null,ec=!1,Oo=0,ms=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Wl(e)&&(pn=!0))}function f0(e,n,a,r){yt=e;var l=0;do{if(ps&&(ms=null),Oo=0,ps=!1,25<=l)throw Error(s(301));if(l+=1,hn=Jt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}xe.H=vy,u=n(a,r)}while(ps);return u}function fy(){var e=xe.H,n=e.useState()[0];return n=typeof n.then=="function"?Po(n):n,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(yt.flags|=1024),n}function Cf(){var e=tc!==0;return tc=0,e}function wf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Nf(e){if(ec){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ec=!1}xa=0,hn=Jt=yt=null,ps=!1,Oo=tc=0,ms=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?yt.memoizedState=hn=e:hn=hn.next=e,hn}function fn(){if(Jt===null){var e=yt.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var n=hn===null?yt.memoizedState:hn.next;if(n!==null)hn=n,Jt=e;else{if(e===null)throw yt.alternate===null?Error(s(467)):Error(s(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},hn===null?yt.memoizedState=hn=e:hn=hn.next=e}return hn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var n=Oo;return Oo+=1,ms===null&&(ms=[]),e=t0(ms,e,n),n=yt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,xe.H=n===null||n.memoizedState===null?q0:Y0),e}function ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===ue)return;if(e.$$typeof===ee)return An(e)}throw Error(s(438,String(e)))}function Df(e){var n=null,a=yt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=yt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=nc(),yt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=we;return n.index++,a}function Sa(e,n){return typeof n=="function"?n(e):n}function ac(e){var n=fn();return Uf(n,Jt,e)}function Uf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var v=l.next;l.next=u.next,u.next=v}n.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var R=v=null,z=null,ne=n,he=!1;do{var Ee=ne.lane&-536870913;if(Ee!==ne.lane?(Ut&Ee)===Ee:(xa&Ee)===Ee){var $=ne.revertLane;if($===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Ee===Rr&&(he=!0);else if((xa&$)===$){ne=ne.next,$===Rr&&(he=!0);continue}else Ee={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=Ee,v=u):z=z.next=Ee,yt.lanes|=$,$a|=$;Ee=ne.action,Ur&&a(u,Ee),u=ne.hasEagerState?ne.eagerState:a(u,Ee)}else $={lane:Ee,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=$,v=u):z=z.next=$,yt.lanes|=Ee,$a|=Ee;ne=ne.next}while(ne!==null&&ne!==n);if(z===null?v=u:z.next=R,!ei(u,e.memoizedState)&&(pn=!0,he&&(a=fs,a!==null)))throw a;e.memoizedState=u,e.baseState=v,e.baseQueue=z,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lf(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var v=l=l.next;do u=e(u,v.action),v=v.next;while(v!==l);ei(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function d0(e,n,a){var r=yt,l=fn(),u=Rt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ei((Jt||l).memoizedState,a);if(v&&(l.memoizedState=a,pn=!0),l=l.queue,If(m0.bind(null,r,l,e),[e]),e=l.getSnapshot!==n||v||hn!==null&&(hn.memoizedState.tag&1)!==0,gs(e?9:8,{destroy:void 0},p0.bind(null,r,l,a,n),null),e){if(r.flags|=2048,$t===null)throw Error(s(349));u||(xa&127)!==0||h0(r,n,a)}return a}function h0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=yt.updateQueue,n===null?(n=nc(),yt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function p0(e,n,a,r){n.value=a,n.getSnapshot=r,g0(n)&&_0(e)}function m0(e,n,a){return a(function(){g0(n)&&_0(e)})}function g0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function _0(e){var n=yr(e,2);n!==null&&Zn(n,e,2)}function Of(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Ur){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n}function v0(e,n,a,r){return e.baseState=a,Uf(e,Jt,typeof r=="function"?r:Sa)}function dy(e,n,a,r,l){if(oc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){u.listeners.push(v)}};xe.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,x0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function x0(e,n){var a=n.action,r=n.payload,l=e.state;if(n.isTransition){var u=xe.T,v={};v.types=u!==null?u.types:null,xe.T=v;try{var R=a(l,r),z=xe.S;z!==null&&z(v,R),S0(e,n,R)}catch(ne){Pf(e,n,ne)}finally{u!==null&&v.types!==null&&(u.types=v.types),xe.T=u}}else try{u=a(l,r),S0(e,n,u)}catch(ne){Pf(e,n,ne)}}function S0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){y0(e,n,r)},function(r){return Pf(e,n,r)}):y0(e,n,a)}function y0(e,n,a){n.status="fulfilled",n.value=a,M0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,x0(e,a)))}function Pf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,M0(n),n=n.next;while(n!==r)}e.action=null}function M0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function E0(e,n){return n}function b0(e,n){if(Rt){var a=$t.formState;if(a!==null){e:{var r=yt;if(Rt){if(tn){t:{for(var l=tn,u=_i;l.nodeType!==8;){if(!u){l=null;break t}if(l=xi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){tn=xi(l.nextSibling),r=l.data==="F!";break e}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E0,lastRenderedState:n},a.queue=r,a=k0.bind(null,yt,r),r.dispatch=a,r=Of(!1),u=Gf.bind(null,yt,!1,r.queue),r=Hn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,a=dy.bind(null,yt,l,u,a),l.dispatch=a,r.memoizedState=e,[n,a,!1]}function T0(e){var n=fn();return A0(n,Jt,e)}function A0(e,n,a){if(n=Uf(e,n,E0)[0],e=ac(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Po(n)}catch(v){throw v===ds?Zl:v}else r=n;n=fn();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(yt.flags|=2048,gs(9,{destroy:void 0},hy.bind(null,l,a),null)),[r,u,e]}function hy(e,n){e.action=n}function R0(e){var n=fn(),a=Jt;if(a!==null)return A0(n,a,e);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function gs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=yt.updateQueue,n===null&&(n=nc(),yt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function C0(){return fn().memoizedState}function rc(e,n,a,r){var l=Hn();yt.flags|=e,l.memoizedState=gs(1|n,{destroy:void 0},a,r===void 0?null:r)}function sc(e,n,a,r){var l=fn();r=r===void 0?null:r;var u=l.memoizedState.inst;Jt!==null&&r!==null&&Af(r,Jt.memoizedState.deps)?l.memoizedState=gs(n,u,a,r):(yt.flags|=e,l.memoizedState=gs(1|n,u,a,r))}function w0(e,n){rc(8390656,8,e,n)}function If(e,n){sc(2048,8,e,n)}function py(e){yt.flags|=4;var n=yt.updateQueue;if(n===null)n=nc(),yt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function N0(e){var n=fn().memoizedState;return py({ref:n,nextImpl:e}),function(){if((Vt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function D0(e,n){return sc(4,2,e,n)}function U0(e,n){return sc(4,4,e,n)}function L0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function O0(e,n,a){a=a!=null?a.concat([e]):null,sc(4,4,L0.bind(null,n,e),a)}function zf(){}function P0(e,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Af(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function I0(e,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Af(n,r[1]))return r[0];if(r=e(),Ur){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Ff(e,n,a){return a===void 0||(xa&1073741824)!==0&&(Ut&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=qg(),yt.lanes|=e,$a|=e,a)}function z0(e,n,a,r){return ei(a,n)?a:Ya.current!==null?(e=Ff(e,a,r),ei(e,n)||(pn=!0),e):(xa&106)===0||(xa&1073741824)!==0&&(Ut&261930)===0?(pn=!0,e.memoizedState=a):(e=qg(),yt.lanes|=e,$a|=e,n)}function F0(e,n,a,r,l){var u=De.p;De.p=u!==0&&8>u?u:8;var v=xe.T,R={};R.types=v!==null?v.types:null,xe.T=R,Gf(e,!1,n,a);try{var z=l(),ne=xe.S;if(ne!==null&&ne(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var he=cy(z,r);Io(e,n,he,ri(e))}else Io(e,n,r,ri(e))}catch(Ee){Io(e,n,{then:function(){},status:"rejected",reason:Ee},ri())}finally{De.p=u,v!==null&&R.types!==null&&(v.types=R.types),xe.T=v}}function my(){}function Bf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var l=B0(e).queue;F0(e,l,n,Ht,a===null?my:function(){return H0(e),a(r)})}function B0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Ht,baseState:Ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Ht},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function H0(e){var n=B0(e);n.next===null&&(n=e.alternate.memoizedState),Io(e,n.next.queue,{},ri())}function Hf(){return An(Ps)}function G0(){return fn().memoizedState}function V0(){return fn().memoizedState}function gy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Wa(a);var r=qa(n,e,a);r!==null&&(Zn(r,n,a),No(r,n,a)),n={cache:pf()},e.payload=n;return}n=n.return}}function _y(e,n,a){var r=ri();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oc(e)?X0(n,a):(a=rf(e,n,a,r),a!==null&&(Zn(a,e,r),W0(a,n,r)))}function k0(e,n,a){var r=ri();Io(e,n,a,r)}function Io(e,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(oc(e))X0(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var v=n.lastRenderedState,R=u(v,a);if(l.hasEagerState=!0,l.eagerState=R,ei(R,v))return Fl(e,n,l,0),$t===null&&zl(),!1}catch{}finally{}if(a=rf(e,n,l,r),a!==null)return Zn(a,e,r),W0(a,n,r),!0}return!1}function Gf(e,n,a,r){if(r={lane:2,revertLane:Dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oc(e)){if(n)throw Error(s(479))}else n=rf(e,a,r,2),n!==null&&Zn(n,e,2)}function oc(e){var n=e.alternate;return e===yt||n!==null&&n===yt}function X0(e,n){ps=ec=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function W0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,uo(e,a)}}var lc={readContext:An,use:ic,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},q0={readContext:An,use:ic,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:w0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,rc(4194308,4,L0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return rc(4194308,4,e,n)},useInsertionEffect:function(e,n){rc(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var r=e();if(Ur){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Hn();if(a!==void 0){var l=a(n);if(Ur){Ot(!0);try{a(n)}finally{Ot(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=_y.bind(null,yt,e),[r.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Of(e);var n=e.queue,a=k0.bind(null,yt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zf,useDeferredValue:function(e,n){var a=Hn();return Ff(a,e,n)},useTransition:function(){var e=Of(!1);return e=F0.bind(null,yt,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=yt,l=Hn();if(Rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$t===null)throw Error(s(349));(Ut&127)!==0||h0(r,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,w0(m0.bind(null,r,u,e),[e]),r.flags|=2048,gs(9,{destroy:void 0},p0.bind(null,r,u,a,n),null),a},useId:function(){var e=Hn(),n=$t.identifierPrefix;if(Rt){var a=qi,r=Wi;a=(r&~(1<<32-pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=tc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=uy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Hf,useFormState:b0,useActionState:b0,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gf.bind(null,yt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Df,useCacheRefresh:function(){return Hn().memoizedState=gy.bind(null,yt)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Vt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Y0={readContext:An,use:ic,useCallback:P0,useContext:An,useEffect:If,useImperativeHandle:O0,useInsertionEffect:D0,useLayoutEffect:U0,useMemo:I0,useReducer:ac,useRef:C0,useState:function(){return ac(Sa)},useDebugValue:zf,useDeferredValue:function(e,n){var a=fn();return z0(a,Jt.memoizedState,e,n)},useTransition:function(){var e=ac(Sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:d0,useId:G0,useHostTransitionStatus:Hf,useFormState:T0,useActionState:T0,useOptimistic:function(e,n){var a=fn();return v0(a,Jt,e,n)},useMemoCache:Df,useCacheRefresh:V0,useEffectEvent:N0},vy={readContext:An,use:ic,useCallback:P0,useContext:An,useEffect:If,useImperativeHandle:O0,useInsertionEffect:D0,useLayoutEffect:U0,useMemo:I0,useReducer:Lf,useRef:C0,useState:function(){return Lf(Sa)},useDebugValue:zf,useDeferredValue:function(e,n){var a=fn();return Jt===null?Ff(a,e,n):z0(a,Jt.memoizedState,e,n)},useTransition:function(){var e=Lf(Sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:d0,useId:G0,useHostTransitionStatus:Hf,useFormState:R0,useActionState:R0,useOptimistic:function(e,n){var a=fn();return Jt!==null?v0(a,Jt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Df,useCacheRefresh:V0,useEffectEvent:N0};function Vf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(Zn(n,e,r),No(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(Zn(n,e,r),No(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),r=Wa(a);r.tag=2,n!=null&&(r.callback=n),n=qa(e,r,a),n!==null&&(Zn(n,e,a),No(n,e,a))}};function Z0(e,n,a,r,l,u,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,v):n.prototype&&n.prototype.isPureReactComponent?!Mo(a,r)||!Mo(l,u):!0}function j0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&kf.enqueueReplaceState(n,n.state,null)}function Lr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=I({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function K0(e){Il(e)}function Q0(e){console.error(e)}function J0(e){Il(e)}function cc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function $0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xf(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){cc(e,n)},a}function eg(e){return e=Wa(e),e.tag=3,e}function tg(e,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){$0(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){$0(n,a,r),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function xy(e,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Tr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Nc():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cd(e,r,l)),!1;case 22:return a.flags|=65536,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cd(e,r,l)),!1}throw Error(s(435,a.tag))}return Cd(e,r,l),Nc(),!1}if(Rt)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==uf&&(e=Error(s(422),{cause:r}),To(pi(e,a)))):(r!==uf&&(n=Error(s(423),{cause:r}),To(pi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=pi(r,a),l=Xf(e.stateNode,r,l),Sf(e,l),cn!==4&&(cn=2)),!1;var u=Error(s(520),{cause:r});if(u=pi(u,a),Xo===null?Xo=[u]:Xo.push(u),cn!==4&&(cn=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Xf(a.stateNode,r,e),Sf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=eg(l),tg(l,e,a,r),Sf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Wf=Error(s(461)),pn=!1;function xn(e,n,a,r){n.child=e===null?r0(n,null,a,r):Dr(n,e.child,a,r)}function ng(e,n,a,r,l){a=a.render;var u=n.ref;if("ref"in r){var v={};for(var R in r)R!=="ref"&&(v[R]=r[R])}else v=r;return Ar(n),r=Rf(e,n,a,v,u,l),R=Cf(),e!==null&&!pn?(wf(e,n,l),ya(e,n,l)):(Rt&&R&&Vl(n),n.flags|=1,xn(e,n,r,l),n.child)}function ig(e,n,a,r,l){if(e===null){var u=a.type;return typeof u=="function"&&!sf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,ag(e,n,u,r,l)):(e=Hl(a.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!$f(e,l)){var v=u.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(v,r)&&e.ref===n.ref)return ya(e,n,l)}return n.flags|=1,e=ma(u,r),e.ref=n.ref,e.return=n,n.child=e}function ag(e,n,a,r,l){if(e!==null){var u=e.memoizedProps;if(Mo(u,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=u,$f(e,l))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ya(e,n,l)}return qf(e,n,a,r,l)}function rg(e,n,a,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,n.child=null;return sg(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yl(n,u!==null?u.cachePool:null),u!==null?l0(n,u):Mf(),c0(n);else return r=n.lanes=536870912,sg(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(Yl(n,u.cachePool),l0(n,u),ja(),n.memoizedState=null):(e!==null&&Yl(n,null),Mf(),ja());return xn(e,n,l,a),n.child}function zo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function sg(e,n,a,r,l){var u=gf();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Yl(n,null),Mf(),c0(n),e!==null&&Tr(e,n,r,!0),n.childLanes=l,null}function uc(e,n){return n=fc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function og(e,n,a){return Dr(n,e.child,null,a),e=uc(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Sy(e,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Rt){if(r.mode==="hidden")return e=uc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},zo(null,e);if(bf(n),(e=tn)?(e=L_(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Xm(e),a.return=n,n.child=a,Mn=n,tn=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return uc(n,r)}var u=e.memoizedState;if(u!==null){var v=u.dehydrated;if(bf(n),l)if(n.flags&256)n.flags&=-257,n=og(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Tr(e,n,a,!1),l=(a&e.childLanes)!==0,pn||l){if(Ya.current===null){if(r=$t,r!==null&&(v=fo(r,a),v!==0&&v!==u.retryLane))throw u.retryLane=v,yr(e,v),Zn(r,e,v),Wf;Nc()}n=og(e,n,a)}else e=u.treeContext,tn=xi(v.nextSibling),Mn=n,Rt=!0,Ha=null,_i=!1,e!==null&&Ym(n,e),n=uc(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function _s(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function qf(e,n,a,r,l){return Ar(n),a=Rf(e,n,a,r,void 0,l),r=Cf(),e!==null&&!pn?(wf(e,n,l),ya(e,n,l)):(Rt&&r&&Vl(n),n.flags|=1,xn(e,n,a,l),n.child)}function lg(e,n,a,r,l,u){return Ar(n),n.updateQueue=null,a=f0(n,r,a,l),u0(e),r=Cf(),e!==null&&!pn?(wf(e,n,u),ya(e,n,u)):(Rt&&r&&Vl(n),n.flags|=1,xn(e,n,a,u),n.child)}function cg(e,n,a,r,l){if(Ar(n),n.stateNode===null){var u=os,v=a.contextType;typeof v=="object"&&v!==null&&(u=An(v)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=kf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},vf(n),v=a.contextType,u.context=typeof v=="object"&&v!==null?An(v):os,u.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Vf(n,a,v,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(v=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),v!==u.state&&kf.enqueueReplaceState(u,u.state,null),Uo(n,r,u,l),Do(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var R=n.memoizedProps,z=Lr(a,R);u.props=z;var ne=u.context,he=a.contextType;v=os,typeof he=="object"&&he!==null&&(v=An(he));var Ee=a.getDerivedStateFromProps;he=typeof Ee=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||ne!==v)&&j0(n,u,r,v),Xa=!1;var $=n.memoizedState;u.state=$,Uo(n,r,u,l),Do(),ne=n.memoizedState,R||$!==ne||Xa?(typeof Ee=="function"&&(Vf(n,a,Ee,r),ne=n.memoizedState),(z=Xa||Z0(n,a,z,r,$,ne,v))?(he||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ne),u.props=r,u.state=ne,u.context=v,r=z):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,xf(e,n),v=n.memoizedProps,he=Lr(a,v),u.props=he,Ee=n.pendingProps,$=u.context,ne=a.contextType,z=os,typeof ne=="object"&&ne!==null&&(z=An(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v!==Ee||$!==z)&&j0(n,u,r,z),Xa=!1,$=n.memoizedState,u.state=$,Uo(n,r,u,l),Do();var ce=n.memoizedState;v!==Ee||$!==ce||Xa||e!==null&&e.dependencies!==null&&Wl(e.dependencies)?(typeof R=="function"&&(Vf(n,a,R,r),ce=n.memoizedState),(he=Xa||Z0(n,a,he,r,$,ce,z)||e!==null&&e.dependencies!==null&&Wl(e.dependencies))?(ne||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ce,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ce,z)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ce),u.props=r,u.state=ce,u.context=z,r=he):(typeof u.componentDidUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,_s(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Dr(n,e.child,null,l),n.child=Dr(n,null,a,l)):xn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=ya(e,n,l),e}function ug(e,n,a,r){return Er(),n.flags|=256,xn(e,n,a,r),n.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(e){return{baseLanes:e,cachePool:$m()}}function jf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function fg(e,n,a){var r=n.pendingProps,l=!1,u=(n.flags&128)!==0,v;if((v=u)||(v=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),v&&(l=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Rt){if(l?Za(n):ja(),(e=tn)?(e=L_(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Xm(e),a.return=n,n.child=a,Mn=n,tn=null)):e=null,e===null)throw Ga(n);return Zd(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,l?(ja(),l=n.mode,u=fc({mode:"hidden",children:u},l),r=Mr(r,l,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=Zf(a),r.childLanes=jf(e,v,a),n.memoizedState=Yf,zo(null,r)):(Za(n),Kf(n,u))}var R=e.memoizedState;if(R!==null){var z=R.dehydrated;if(z!==null)return yy(e,n,u,v,r,z,R,a)}return l?(ja(),l=r.fallback,u=n.mode,R=e.child,z=R.sibling,r=ma(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,z!==null?l=ma(z,l):(l=Mr(l,u,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,zo(null,r),r=n.child,l=e.child.memoizedState,l===null?l=Zf(a):(u=l.cachePool,u!==null?(R=dn._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=$m(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=jf(e,v,a),n.memoizedState=Yf,zo(e.child,r)):(Za(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Kf(e,n){return n=fc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function fc(e,n){return e=Xn(22,e,null,n),e.lanes=0,e}function dc(e,n,a){return Dr(n,e.child,null,a),e=Kf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function yy(e,n,a,r,l,u,v,R){if(a)return n.flags&256?(Za(n),n.flags&=-257,dc(e,n,R)):n.memoizedState!==null?(ja(),n.child=e.child,n.flags|=128,null):(ja(),u=l.fallback,v=n.mode,l=fc({mode:"visible",children:l.children},v),u=Mr(u,v,R,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Dr(n,e.child,null,R),l=n.child,l.memoizedState=Zf(R),l.childLanes=jf(e,r,R),n.memoizedState=Yf,zo(null,l));if(Za(n),Zd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,To({value:l,source:null,stack:null})),dc(e,n,R)}if(pn||Tr(e,n,R,!1),r=(R&e.childLanes)!==0,pn||r){if(Ya.current!==null)return dc(e,n,R);if(r=$t,r!==null&&(l=fo(r,R),l!==0&&l!==v.retryLane))throw v.retryLane=l,yr(e,l),Zn(r,e,l),Wf;return Yd(u)||Nc(),dc(e,n,R)}return Yd(u)?(n.flags|=192,n.child=e.child,null):(e=v.treeContext,tn=xi(u.nextSibling),Mn=n,Rt=!0,Ha=null,_i=!1,e!==null&&Ym(n,e),n=Kf(n,l.children),n.flags|=134221824,n)}function dg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Xl(e.return,n,a)}function hg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&$l(a)===null&&(n=e),e=e.sibling}return n}function hc(e,n,a,r,l,u){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=l,v.treeForkCount=u)}function Qf(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Jf(e,n,a){var r=n.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var v=Cn.current;if(n.flags&128)return Lo(n,v),null;var R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Lo(n,v),l==="backwards"&&e!==null?(Qf(e),xn(e,n,r,a),Qf(e)):xn(e,n,r,a),r=Rt?bo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,a,n);else if(e.tag===19)dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=hg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Qf(n)),hc(n,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&$l(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}hc(n,!0,a,null,u,r);break;case"together":hc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=hg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),hc(n,!1,l,a,u,r)}return n.child}function pg(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),xn(e,n,r.children,a),n.child}function ya(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Tr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Wl(e)))}function My(e,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),Va(n,dn,e.memoizedState.cache),Er();break;case 27:case 5:ct(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Za(n),n.flags|=128,null;r=Tr(e,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?fg(e,n,a):(Za(n),e=ya(e,n,a),e!==null?e.sibling:null)}Za(n);break;case 19:if(n.flags&128)return Jf(e,n,a);if(l=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Tr(e,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return Jf(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Lo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,rg(e,n,a,n.pendingProps);case 24:Va(n,dn,e.memoizedState.cache)}return ya(e,n,a)}function mg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!$f(e,a)&&(n.flags&128)===0)return pn=!1,My(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Rt&&(n.flags&1048576)!==0&&qm(n,bo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=wr(n.elementType),n.type=e,typeof e=="function")sf(e)?(r=Lr(e,r),n.tag=1,n=cg(null,n,e,r,a)):(n.tag=0,n=qf(null,n,e,r,a));else{if(e!=null){var l=e.$$typeof;if(l===G){n.tag=11,n=ng(null,n,e,r,a);break e}else if(l===ae){n.tag=14,n=ig(null,n,e,r,a);break e}else if(l===ee){n.tag=10,n.type=e,n=pg(null,n,a);break e}}throw n=Ae(e)||e,Error(s(306,n,""))}}return n;case 0:return qf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Lr(r,n.pendingProps),cg(e,n,r,l,a);case 3:e:{if(q(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;l=u.element,xf(e,n),Uo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Va(n,dn,r),r!==u.cache&&hf(n,[dn],a,!0),Do(),r=v.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=ug(e,n,r,a);break e}else if(r!==l){l=pi(Error(s(424)),n),To(l),n=ug(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=xi(e.firstChild),Mn=n,Rt=!0,Ha=null,_i=!0,a=r0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Er(),r===l){n=ya(e,n,a);break e}xn(e,n,r,a)}n=n.child}return n;case 26:return _s(e,n),e===null?(a=H_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(n.stateNode=x_(n.type,n.pendingProps,ft.current,n)):n.memoizedState=H_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ct(n),e===null&&Rt&&(r=n.stateNode=I_(n.type,n.pendingProps,ft.current),Mn=n,_i=!0,l=tn,ir(n.type)?(jd=l,tn=xi(r.firstChild)):tn=l),xn(e,n,n.pendingProps.children,a),_s(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Rt&&((l=r=tn)&&(r=gM(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Mn=n,tn=xi(r.firstChild),_i=!1,l=!0):l=!1),l||Ga(n)),ct(n),l=n.type,u=n.pendingProps,v=e!==null?e.memoizedProps:null,r=u.children,Hd(l,u)?r=null:v!==null&&Hd(l,v)&&(n.flags|=32),n.memoizedState!==null&&(l=Rf(e,n,fy,null,null,a),Ps._currentValue=l),_s(e,n),xn(e,n,r,a),n.child;case 6:return e===null&&Rt&&((e=a=tn)&&(a=_M(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Mn=n,tn=null,e=!0):e=!1),e||Ga(n)),null;case 13:return fg(e,n,a);case 4:return q(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Dr(n,null,r,a):xn(e,n,r,a),n.child;case 11:return ng(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,_s(e,n),xn(e,n,r,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return pg(e,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Ar(n),l=An(l),r=r(l),n.flags|=1,xn(e,n,r,a),n.child;case 14:return ig(e,n,n.type,n.pendingProps,a);case 15:return ag(e,n,n.type,n.pendingProps,a);case 19:return Jf(e,n,a);case 31:return Sy(e,n,a);case 22:return rg(e,n,a,n.pendingProps);case 24:return Ar(n),r=An(dn),e===null?(l=gf(),l===null&&(l=$t,u=pf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:r,cache:l},vf(n),Va(n,dn,l)):((e.lanes&a)!==0&&(xf(e,n),Uo(n,null,null,a),Do()),l=e.memoizedState,u=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Va(n,dn,r)):(r=u.cache,Va(n,dn,r),r!==l.cache&&hf(n,[dn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Rt&&Vl(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:_s(e,n),xn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function ed(e,n,a,r,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?X_(n,r):X_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw Nr=jl,_f}else e.flags&=-16777217}function gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W_(n))if(Kg())e.flags|=8192;else throw Nr=jl,_f}function pc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?co():536870912,e.lanes|=n,Ms|=n)}function Fo(e,n){if(!Rt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Ey(e,n,a){var r=n.pendingProps;switch(cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),Et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(us(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ff())),nn(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Ma(n),u!==null?(nn(n),gg(n,u)):(nn(n),ed(n,l,null,r,a))):u?u!==e.memoizedState?(Ma(n),nn(n),gg(n,u)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),nn(n),ed(n,l,e,r,a)),null;case 27:if(L(n),a=ft.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}e=ot.current,us(n)?Zm(n):(e=I_(l,r,a),n.stateNode=e,Ma(n))}return nn(n),n.subtreeFlags&=-33554433,null;case 5:if(L(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}if(u=ot.current,us(n))Zm(n);else{var v=jo(ft.current);switch(u){case 1:u=v.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=v.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=v.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=v.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=v.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?v.createElement(l,{is:r.is}):v.createElement(l)}}u[A]=n,u[k]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)u.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=u;e:switch(Nn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(n)}}return nn(n),n.subtreeFlags&=-33554433,ed(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ft.current,us(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||m_(e.nodeValue,a)),e||Ga(n,!0)}else e=jo(e).createTextNode(r),e[A]=n,n.stateNode=e}return nn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=us(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else a=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return nn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=us(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[A]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),l=!1}else l=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),pc(n,n.updateQueue),nn(n),null);case 4:return Et(),e===null&&Pd(n.stateNode.containerInfo),n.flags|=67108864,nn(n),null;case 10:return va(n.type),nn(n),null;case 19:if(Tf(n),r=n.memoizedState,r===null)return nn(n),null;if(l=(n.flags&128)!==0,u=r.rendering,u===null)if(l)Fo(r,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=$l(e),u!==null){for(n.flags|=128,Fo(r,!1),e=u.updateQueue,n.updateQueue=e,pc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)km(a,e),a=a.sibling;return Lo(n,Cn.current&1|2),Rt&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Be()>Ac&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304)}else{if(!l)if(e=$l(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,pc(n,e),Fo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!Rt)return nn(n),null}else 2*Be()-r.renderingStartTime>Ac&&a!==536870912&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Be(),e.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Rt?Lo(n,u):(a=u,Ce(Rn,n),Ce(Cn,a),Ln===null&&(Ln=n)),Rt&&ga(n,r.treeForkCount),e}return nn(n),null;case 22:case 23:return ti(n),Ef(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&pc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Re(Cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(dn),nn(n),null;case 25:return null;case 30:return n.flags|=33554432,nn(n),null}throw Error(s(156,n.tag))}function by(e,n){switch(cf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(dn),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return L(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Tf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Et(),null;case 10:return va(n.type),null;case 22:case 23:return ti(n),Ef(),e!==null&&Re(Cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function _g(e,n){switch(cf(n),n.tag){case 3:va(dn),Et();break;case 26:case 27:case 5:L(n);break;case 4:Et();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Tf(n);break;case 10:va(n.type);break;case 22:case 23:ti(n),Ef(),e!==null&&Re(Cr);break;case 24:va(dn)}}function Bo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var u=a.create,v=a.inst;r=u(),v.destroy=r}a=a.next}while(a!==l)}}catch(R){Zt(n,n.return,R)}}function Ka(e,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var v=r.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,l=n;var z=a,ne=R;try{ne()}catch(he){Zt(l,z,he)}}}r=r.next}while(r!==u)}}catch(he){Zt(n,n.return,he)}}function vg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{o0(n,a)}catch(r){Zt(e,e.return,r)}}}function xg(e,n,a){a.props=Lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Zt(e,n,r)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ha(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=A_(u)),r=l.ref;break;case 7:if(e.stateNode===null){var v=new si(e);_(e.child,!1,pM,v,void 0,void 0),e.stateNode=v}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){Zt(e,n,R)}}function wn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Zt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Zt(e,n,l)}else a.current=null}function mc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)U_(e.stateNode,n[a])}function Sg(e){for(var n=e.return;n!==null&&(nd(n)&&U_(e.stateNode,n.stateNode),!td(n));)n=n.return}function Ho(e){for(var n=e.return;n!==null&&(nd(n)&&mM(e.stateNode,n.stateNode),!td(n));)n=n.return}function td(e){return e.tag===5||e.tag===3||e.tag===27}function nd(e){return e&&e.tag===7&&e.stateNode!==null}function id(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Zt(e,e.return,l)}}function ad(e,n,a){try{var r=e.stateNode;Ky(r,e.type,a,n),r[k]=n}catch(l){Zt(e,e.return,l)}}function yg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ir(e.type)||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),mc(e,r),At=!0;else if(l!==4&&(l===27&&(mc(e,r),r=null,ir(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(sd(e,n,a,r),e=e.sibling;e!==null;)sd(e,n,a,r),e=e.sibling}function gc(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),mc(e,r),At=!0;else if(l!==4&&(l===27&&(mc(e,r),r=null,ir(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(gc(e,n,a,r),e=e.sibling;e!==null;)gc(e,n,a,r),e=e.sibling}function Mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[A]=e,n[k]=a}catch(u){Zt(e,e.return,u)}}var _c=!1,ni=null;function Eg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(_c=!0)}var Zi=null;function bg(){var e=Zi;return Zi=null,e}var Wn=0;function vs(e,n,a,r,l){return Wn=0,Tg(e.child,n,a,r,l)}function Tg(e,n,a,r,l){for(var u=!1;e!==null;){if(e.tag===5){var v=e.stateNode;if(r!==null){var R=kd(v);r.push(R),R.view&&(u=!0)}else u||kd(v).view&&(u=!0);_c=!0,b_(v,Wn===0?n:n+"_"+Wn,a),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Tg(e.child,n,a,r,l)&&(u=!0));e=e.sibling}return u}function ji(e,n){for(;e!==null;)e.tag===5?T_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ji(e.child,n)),e=e.sibling}function vc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(vc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(vs(e,a,n,null,!1)||ji(e.child,!1))}e=e.sibling}}function od(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,l=ha(r,a),u=pa(r.default,a.paired?r.share:r.enter);u!=="none"?vs(e,l,u,null,!1)?(vc(e),a.paired||n||As(e,r.onEnter)):ji(e.child,!1):vc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)od(e,n),e=e.sibling;else vc(e)}function ld(e){if(ni!==null&&ni.size!==0){var n=ni;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var u=pa(a.default,a.share);if(u!=="none"&&(vs(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,As(e,a.onShare)):ji(e.child,!1)),n.delete(r),n.size===0)break}}}ld(e)}e=e.sibling}}}function cd(e){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode),r=ni!==null?ni.get(a):void 0,l=pa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(vs(e,a,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ni.delete(a),As(e,n.onShare)):As(e,n.onExit):ji(e.child,!1)),ni!==null&&ld(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)cd(e),e=e.sibling;else ni!==null&&ld(e)}function Ag(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&vs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Ag(e);e=e.sibling}}function ud(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ji(e.child,!1))}ud(e)}e=e.sibling}}function xc(e){if(e.tag===30)e.stateNode.paired=null,ji(e.child,!1),ud(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xc(e),e=e.sibling;else ud(e)}function Rg(e){for(e=e.child;e!==null;)e.tag===30?ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&Rg(e),e=e.sibling}function fd(e,n,a,r,l,u,v){for(var R=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(u!==null&&Wn<u.length){var ne=u[Wn],he=kd(z);(ne.view||he.view)&&(R=!0);var Ee;if(Ee=(e.flags&4)===0)if(he.clip)Ee=!0;else{Ee=ne.rect;var $=he.rect;Ee=Ee.y!==$.y||Ee.x!==$.x||Ee.height!==$.height||Ee.width!==$.width}Ee&&(e.flags|=4),he.abs?he=!ne.abs:(ne=ne.rect,he=he.rect,he=ne.height!==he.height||ne.width!==he.width),he&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&b_(z,Wn===0?a:a+"_"+Wn,l),R&&(e.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(z,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?e.flags|=n.flags&32:fd(e,n.child,a,r,l,u,v)&&(R=!0));n=n.sibling}return R}function Cg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,l=ha(a,r),u=pa(a.default,a.update),v;v=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;Wn=0,l=fd(r,R,l,l,u,v,!1),(e.flags&4)!==0&&l&&As(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Cg(e);e=e.sibling}}var En=!1,qt=!1,Ki=!1,dd=!1,wg=typeof WeakSet=="function"?WeakSet:Set,bn=null,Qi=!1,Go=!1,Sc=!1,hd=!1;function Ty(e,n,a){if(e=e.containerInfo,Fd=Is,e=Lm(e),Ju(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,v=l.focusNode;l=l.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break e}var R=0,z=-1,ne=-1,he=0,Ee=0,$=e,ce=null;t:for(;;){for(var Ve;$!==r||u!==0&&$.nodeType!==3||(z=R+u),$!==v||l!==0&&$.nodeType!==3||(ne=R+l),$.nodeType===3&&(R+=$.nodeValue.length),(Ve=$.firstChild)!==null;)ce=$,$=Ve;for(;;){if($===e)break t;if(ce===r&&++he===u&&(z=R),ce===v&&++Ee===l&&(ne=R),(Ve=$.nextSibling)!==null)break;$=ce,ce=$.parentNode}$=Ve}r=z===-1||ne===-1?null:{start:z,end:ne}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bd={focusedElem:e,selectionRange:r},Is=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(e=bn,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&cd(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&Eg(e),yc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&cd(r),yc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Eg(e),yc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,bn=r):(a&&Ag(e),yc(a))}}ni=null}function yc(e){for(;bn!==null;){var n=bn,a=e,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var v=Lr(n.type,l);a=u.getSnapshotBeforeUpdate(v,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){Zt(n,n.return,R)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)qd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":qd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ha(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=pa(l.default,l.update),l!=="none"&&vs(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function Ng(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),r&4&&Bo(5,a);break;case 1:if(Ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var l=Lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}r&64&&vg(a),r&512&&Yi(a,a.return);break;case 3:if(Ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{o0(e,n)}catch(v){Zt(a,a.return,v)}}break;case 27:n===null&&r&4&&Mg(a);case 26:case 5:Ji(e,a),n===null&&r&4&&id(a),r&512&&Yi(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),r&4&&Og(e,a);break;case 13:Ji(e,a),r&4&&Pg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zy.bind(null,a),vM(e,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||qt;n=En,l=qt,En=r,(qt=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(e,a,r)):Ji(e,a),En=n,qt=l}break;case 30:Ji(e,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:Ji(e,a)}}function pd(e,n){for(e=e.child;e!==null;)Dg(e,n),e=e.sibling}function Dg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,v=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(z){Zt(e,e.return,z)}md(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,At=!0}catch(z){Zt(e,e.return,z)}break;case 18:try{var R=e.stateNode;n?E_(R,!0):E_(e.stateNode,!1)}catch(z){Zt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&pd(e,n);break;default:pd(e,n)}}function md(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:Dg(a,r);break e;case 22:a.memoizedState===null&&md(a,r);break e;default:md(a,r)}}e=e.sibling}}function Ug(e){var n=e.alternate;n!==null&&(e.alternate=null,Ug(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&et(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,qn=!1;function Ai(e,n,a){for(a=a.child;a!==null;)Lg(e,n,a),a=a.sibling}function Lg(e,n,a){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(at,a)}catch{}switch(a.tag){case 26:qt||wn(a,n),Ai(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qt||wn(a,n),Ho(a);var r=an,l=qn;ir(a.type)&&(an=a.stateNode,qn=!1),Ai(e,n,a),z_(a.stateNode,a.type,a.memoizedProps),an=r,qn=l;break;case 5:qt||wn(a,n),Ho(a);case 6:if(a.tag===6&&Ho(a),r=an,l=qn,an=null,Ai(e,n,a),an=r,qn=l,an!==null)if(qn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),At=!0}catch(u){Zt(a,n,u)}else try{an.removeChild(a.stateNode),At=!0}catch(u){Zt(a,n,u)}break;case 18:an!==null&&(qn?(e=an,M_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zs(e)):M_(an,a.stateNode));break;case 4:r=an,l=qn,an=a.stateNode.containerInfo,qn=!0,Ai(e,n,a),an=r,qn=l;break;case 0:case 11:case 14:case 15:Ka(2,a,n),qt||Ka(4,a,n),Ai(e,n,a);break;case 1:qt||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&xg(a,n,r)),Ai(e,n,a);break;case 21:Ai(e,n,a);break;case 22:qt=(r=qt)||a.memoizedState!==null,Ai(e,n,a),qt=r;break;case 30:wn(a,n),Ai(e,n,a);break;case 7:qt||wn(a,n),Ai(e,n,a);break;default:Ai(e,n,a)}}function Og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zs(e)}catch(a){Zt(n,n.return,a)}}}function Pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zs(e)}catch(a){Zt(n,n.return,a)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new wg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new wg),n;default:throw Error(s(435,e.tag))}}function Mc(e,n){var a=Ay(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=Fy.bind(null,e,r);r.then(l,l)}})}function Gn(e,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],v=e,R=n,z=R;e:for(;z!==null;){switch(z.tag){case 27:if(ir(z.type)){an=z.stateNode,qn=!1;break e}break;case 5:an=z.stateNode,qn=!1;break e;case 3:case 4:an=z.stateNode.containerInfo,qn=!0;break e}z=z.return}if(an===null)throw Error(s(160));Lg(v,R,u),an=null,qn=!1,v=u.alternate,v!==null&&(v.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ig(n,e,a),n=n.sibling}var Ri=null;function Ig(e,n,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var v=r[u];v.ref.impl=v.nextImpl}Gn(n,e,a),Vn(e),l&4&&(Ka(3,e,e.return),Bo(3,e),Ka(5,e,e.return));break;case 1:Gn(n,e,a),Vn(e),l&512&&(qt||r===null||wn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ri,Gn(n,e,a),Vn(e),l&512&&(qt||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(En)e.stateNode=x_(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ge]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[A]=e,Tt(r),n=r;break e;case"link":if(u=k_("link","href",l).get(n+(a.href||""))){for(v=0;v<u.length;v++)if(r=u[v],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(v,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(u=k_("meta","content",l).get(n+(a.content||""))){for(v=0;v<u.length;v++)if(r=u[v],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(v,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,Tt(r),n=r}e.stateNode=n}else En||$d(u,e.type,e.stateNode);else e.stateNode=V_(u,a,e.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||qt||n.parentNode.removeChild(n)):l.count--,a===null?En||$d(u,e.type,e.stateNode):V_(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ad(e,e.memoizedProps,r.memoizedProps);break;case 27:Gn(n,e,a),Vn(e),l&512&&(qt||r===null||wn(r,r.return)),r!==null&&l&4&&ad(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Ki,Ki=!1,Gn(n,e,a),Ki=u,Vn(e),l&512&&(qt||r===null||wn(r,r.return)),e.flags&32){n=e.stateNode;try{es(n,""),At=!0}catch(he){Zt(e,e.return,he)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,ad(e,n,r!==null?r.memoizedProps:n)),l&1024&&(dd=!0);break;case 6:if(Gn(n,e,a),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,At=!0}catch(he){Zt(e,e.return,he)}}break;case 3:if(At=!1,zc=null,u=Ri,Ri=Ko(n.containerInfo),Gn(n,e,a),Ri=u,Vn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(he){Zt(e,e.return,he)}dd&&(dd=!1,zg(e)),At=!1;break;case 4:l=Ki,Ki=En,r=Gt(),u=Ri,Ri=Ko(e.stateNode.containerInfo),Gn(n,e,a),Vn(e),Ri=u,At&&Go&&(Sc=!0),At=r,Ki=l;break;case 12:Gn(n,e,a),Vn(e);break;case 31:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Mc(e,n)));break;case 13:Gn(n,e,a),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Tc=Be()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Mc(e,n)));break;case 22:u=e.memoizedState!==null,v=r!==null&&r.memoizedState!==null;var R=En,z=qt,ne=Ki;En=R||u,Ki=ne||u,qt=z||v,Gn(n,e,a),qt=z,Ki=ne,En=R,Vn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||v||En||qt||(n=v||qt,a=En,r=qt,En=u||En,qt=n,Qa(e,2),En=a,qt=r),!u&&Ki||pd(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Mc(e,a))));break;case 19:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Mc(e,n)));break;case 30:l&512&&(qt||r===null||wn(r,r.return)),l=Gt(),u=Go,v=(a&335544064)===a,R=e.memoizedProps,Go=v&&pa(R.default,R.update)!=="none",Gn(n,e,a),Vn(e),v&&r!==null&&At&&(e.flags|=4),Go=u,At=l;break;case 21:break;case 7:l&512&&(qt||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Gn(n,e,a),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(yg(r)){a=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(nd(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(td(l))break;l=l.return}var v=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,z=rd(e);gc(e,z,R,v);break;case 5:var ne=a.stateNode;a.flags&32&&(es(ne,""),a.flags&=-33);var he=rd(e);gc(e,he,ne,v);break;case 3:case 4:var Ee=a.stateNode.containerInfo,$=rd(e);sd(e,$,Ee,v);break;default:throw Error(s(161))}}catch(ce){Zt(e,e.return,ce)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Is=!0,n.reset(),Is=!1),e=e.sibling}}function xs(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Fg(n,e),n=n.sibling;else Cg(n)}function Fg(e,n){var a=e.alternate;if(a===null)od(e,!1);else switch(e.tag){case 3:if(hd=Qi=!1,bg(),xs(n,e),!Qi&&!Sc){if(e=Zi,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var l=e[r+1];T_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),hd=!0}Zi=null;break;case 5:xs(n,e);break;case 4:r=Qi,Qi=!1,xs(n,e),Qi&&(Sc=!0),Qi=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?od(e,!1):xs(n,e));break;case 30:r=Qi,l=bg(),Qi=!1,xs(n,e),Qi&&(e.flags|=4);var u=e.memoizedProps,v=e.stateNode;n=ha(u,v),v=ha(a.memoizedProps,v);var R=pa(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Wn=0,n=fd(e,a,n,v,R,u,!0),Wn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(As(e,e.memoizedProps.onUpdate),Zi=l):l!==null&&(l.push.apply(l,Zi),Zi=l),Qi=(e.flags&32)!==0?!0:r;break;default:xs(n,e)}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(e,n.alternate,n),n=n.sibling}function Qa(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ka(4,a,a.return),Qa(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&xg(a,a.return,l),Qa(a,r);break;case 27:(r&2)!==0&&z_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Ho(a),Qa(a,r);break;case 6:Ho(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||qt||l.parentNode.removeChild(l),Qa(a,r);break;case 22:a.memoizedState===null&&Qa(a,r);break;case 30:wn(a,a.return),Qa(a,r);break;case 7:wn(a,a.return);default:Qa(a,r)}e=e.sibling}}function Ci(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=e,u=n,v=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ci(l,u,a),Bo(4,u);break;case 1:if(Ci(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(he){Zt(r,r.return,he)}if(r=u,l=r.updateQueue,l!==null){var z=r.stateNode;try{var ne=l.shared.hiddenCallbacks;if(ne!==null)for(l.shared.hiddenCallbacks=null,l=0;l<ne.length;l++)s0(ne[l],z)}catch(he){Zt(r,r.return,he)}}R&&v&64&&vg(u),Yi(u,u.return);break;case 27:(a&2)!==0&&Mg(u);case 5:u.tag!==5&&u.tag!==27||Sg(u),Ci(l,u,a),R&&r===null&&v&4&&id(u),Yi(u,u.return);break;case 6:Sg(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||En||$d(Ko(z.ownerDocument),u.type,z),Ci(l,u,a),R&&r===null&&v&4&&id(u),Yi(u,u.return);break;case 12:Ci(l,u,a);break;case 31:Ci(l,u,a),R&&v&4&&Og(l,u);break;case 13:Ci(l,u,a),R&&v&4&&Pg(l,u);break;case 22:u.memoizedState===null&&Ci(l,u,a),Yi(u,u.return);break;case 30:Ci(l,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:Ci(l,u,a)}n=n.sibling}}function gd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ao(a))}function _d(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ao(e))}function vi(e,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Bg(e,n,a,r),n=n.sibling;else l&&Rg(n)}function Bg(e,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,r),u&2048&&Bo(9,n);break;case 1:vi(e,n,a,r);break;case 3:vi(e,n,a,r),l&&hd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Ao(u)));break;case 12:if(u&2048){vi(e,n,a,r),u=n.stateNode;try{var v=n.memoizedProps,R=v.id,z=v.onPostCommit;typeof z=="function"&&z(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(ne){Zt(n,n.return,ne)}}else vi(e,n,a,r);break;case 31:vi(e,n,a,r);break;case 13:vi(e,n,a,r);break;case 23:break;case 22:v=n.stateNode,R=n.alternate,n.memoizedState!==null?(l&&R!==null&&R.memoizedState===null&&xc(R),v._visibility&2?vi(e,n,a,r):Vo(e,n)):(l&&R!==null&&R.memoizedState!==null&&xc(n),v._visibility&2?vi(e,n,a,r):(v._visibility|=2,Ss(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&gd(R,n);break;case 24:vi(e,n,a,r),u&2048&&_d(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(ji(u.child,!0),ji(n.child,!0))),vi(e,n,a,r);break;default:vi(e,n,a,r)}}function Ss(e,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,v=n,R=a,z=r,ne=v.flags;switch(v.tag){case 0:case 11:case 15:Ss(u,v,R,z,l),Bo(8,v);break;case 23:break;case 22:var he=v.stateNode;v.memoizedState!==null?he._visibility&2?Ss(u,v,R,z,l):Vo(u,v):(he._visibility|=2,Ss(u,v,R,z,l)),l&&ne&2048&&gd(v.alternate,v);break;case 24:Ss(u,v,R,z,l),l&&ne&2048&&_d(v.alternate,v);break;default:Ss(u,v,R,z,l)}n=n.sibling}}function Vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,l=r.flags;switch(r.tag){case 22:Vo(a,r),l&2048&&gd(r.alternate,r);break;case 24:Vo(a,r),l&2048&&_d(r.alternate,r);break;default:Vo(a,r)}n=n.sibling}}var Or=8192;function Pr(e,n,a){if(e.subtreeFlags&Or)for(e=e.child;e!==null;)Hg(e,n,a),e=e.sibling}function Hg(e,n,a){switch(e.tag){case 26:Pr(e,n,a),e.flags&Or&&(e.memoizedState!==null?UM(a,Ri,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Y_(a,e)));break;case 5:Pr(e,n,a),e.flags&Or&&(e=e.stateNode,(n&335544128)===n&&Y_(a,e));break;case 3:case 4:var r=Ri;Ri=Ko(e.stateNode.containerInfo),Pr(e,n,a),Ri=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Or,Or=16777216,Pr(e,n,a),Or=r):Pr(e,n,a));break;case 30:if((e.flags&Or)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(r,l)}Pr(e,n,a);break;default:Pr(e,n,a)}}function Gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ko(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,kg(r,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:ko(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:ko(e);break;case 12:ko(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ec(e)):ko(e);break;default:ko(e)}}function Ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,kg(r,e)}Gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),Ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ec(n));break;default:Ec(n)}e=e.sibling}}function kg(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var l=r.sibling,u=r.return;if(Ug(r),r===a){bn=null;break e}if(l!==null){l.return=u,bn=l;break e}bn=u}}}var Ry={getCacheForType:function(e){var n=An(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(dn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Vt=0,$t=null,wt=null,Ut=0,Yt=0,ii=null,Ja=!1,ys=!1,vd=!1,Ea=0,cn=0,$a=0,Ir=0,bc=0,ai=0,Ms=0,Xo=null,Yn=null,xd=!1,Tc=0,Xg=0,Ac=1/0,Rc=null,er=null,rn=0,wi=null,zr=null,$i=0,Sd=0,yd=null,Wg=null,Es=null,bs=null,Ts=null,Wo=0,Cc=null;function ri(){return(Vt&2)!==0&&Ut!==0?Ut&-Ut:xe.T!==null?Dd():Al()}function qg(){if(ai===0)if((Ut&536870912)===0||Rt){var e=gr;gr<<=1,(gr&3932160)===0&&(gr=262144),ai=e}else ai=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ai}function As(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=A_(ha(e.memoizedProps,a))),bs===null&&(bs=[]),bs.push(n.bind(null,r))}}function Zn(e,n,a){(e===$t&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(Rs(e,0),tr(e,Ut,ai,!1)),Vi(e,a),((Vt&2)===0||e!==$t)&&(e===$t&&((Vt&2)===0&&(Ir|=a),cn===4&&tr(e,Ut,ai,!1)),ea(e))}function Yg(e,n,a){if((Vt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ia(e,n),l=r?Dy(e,n):Ed(e,n,!0),u=r;do{if(l===0){ys&&!r&&tr(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!wy(a)){l=Ed(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=e;l=Xo;var z=R.current.memoizedState.isDehydrated;if(z&&(Rs(R,v).flags|=256),v=Ed(R,v,!1),v!==2&&v!==6){if(vd&&!z){R.errorRecoveryDisabledLanes|=u,Ir|=u,l=4;break e}u=Yn,Yn=l,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}l=v}if(u=!1,l!==2)continue}}if(l===1){Rs(e,0),tr(e,n,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:tr(r,n,ai,!Ja);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Tc+300-Be(),10<l)){if(tr(r,n,ai,!Ja),_r(r,0,!0)!==0)break e;$i=n,r.timeoutHandle=Vd(Zg.bind(null,r,a,Yn,Rc,xd,n,ai,Ir,Ms,Ja,u,"Throttled",-0,0),l);break e}Zg(r,a,Yn,Rc,xd,n,ai,Ir,Ms,Ja,u,null,-0,0)}}break}while(!0);ea(e)}function Zg(e,n,a,r,l,u,v,R,z,ne,he,Ee,$,ce){e.timeoutHandle=-1;var Ve=n.subtreeFlags,tt=(u&335544064)===u;if(Ee=null,(tt||Ve&8192||(Ve&16785408)===16785408)&&(Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ni=null,Hg(n,u,Ee),tt&&(Ve=Ee,tt=e.containerInfo,tt=(tt.nodeType===9?tt:tt.ownerDocument).__reactViewTransition,tt!=null&&(Ve.count++,Ve.waitingForViewTransition=!0,Ve=$o.bind(Ve),tt.finished.then(Ve,Ve))),Ve=(u&62914560)===u?Tc-Be():(u&4194048)===u?Xg-Be():0,Ve=LM(Ee,Ve),Ve!==null)){$i=u,e.cancelPendingCommit=Ve(n_.bind(null,e,n,u,a,r,l,v,R,z,ne,he,Ee,null,$,ce)),tr(e,u,v,!ne);return}n_(e,n,u,a,r,l,v,R,z,ne,he,Ee)}function wy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!ei(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(e,n,a,r){n=Gi(e,n),n&=~bc,n&=~Ir,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var u=31-pt(l),v=1<<u;r[u]=-1,l&=~v}a!==0&&vr(e,a,n)}function wc(){return(Vt&6)===0?(qo(0),!1):!0}function Md(){if(wt!==null){if(Yt===0)var e=wt.return;else e=wt,_a=br=null,Nf(e),hs=null,wo=0,e=wt;for(;e!==null;)_g(e.alternate,e),e=e.return;wt=null}}function Rs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,$y(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,Md(),$t=e,wt=a=ma(e.current,null),Ut=n,Yt=0,ii=null,Ja=!1,ys=Ia(e,n),vd=!1,Ms=ai=bc=Ir=$a=cn=0,Yn=Xo=null,xd=!1,Ea=Gi(e,n),zl(),a}function jg(e,n){yt=null,xe.H=lc,n===ds||n===Zl?(n=n0(),Yt=3):n===_f?(n=n0(),Yt=4):Yt=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,wt===null&&(cn=1,cc(e,pi(n,e.current)))}function Kg(){var e=Rn.current;return e===null?!0:(Ut&4194048)===Ut?Ln===null:(Ut&62914560)===Ut||(Ut&536870912)!==0?e===Ln:!1}function Qg(){var e=xe.H;return xe.H=lc,e===null?lc:e}function Jg(){var e=xe.A;return xe.A=Ry,e}function Nc(){cn=4,Ja||(Ut&4194048)!==Ut&&Rn.current!==null||(ys=!0),($a&134217727)===0&&(Ir&134217727)===0||$t===null||tr($t,Ut,ai,!1)}function Ed(e,n,a){var r=Vt;Vt|=2;var l=Qg(),u=Jg();($t!==e||Ut!==n)&&(Rc=null,Rs(e,n)),n=!1;var v=cn;e:do try{if(Yt!==0&&wt!==null){var R=wt,z=ii;switch(Yt){case 8:Md(),v=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var ne=Yt;if(Yt=0,ii=null,Cs(e,R,z,ne),a&&ys){v=0;break e}break;default:ne=Yt,Yt=0,ii=null,Cs(e,R,z,ne)}}Ny(),v=cn;break}catch(he){jg(e,he)}while(!0);return n&&e.shellSuspendCounter++,_a=br=null,Vt=r,xe.H=l,xe.A=u,wt===null&&($t=null,Ut=0,zl()),v}function Ny(){for(;wt!==null;)$g(wt)}function Dy(e,n){var a=Vt;Vt|=2;var r=Qg(),l=Jg();$t!==e||Ut!==n?(Rc=null,Ac=Be()+500,Rs(e,n)):ys=Ia(e,n);e:do try{if(Yt!==0&&wt!==null){n=wt;var u=ii;t:switch(Yt){case 1:Yt=0,ii=null,Cs(e,n,u,1);break;case 2:case 9:if(e0(u)){Yt=0,ii=null,e_(n);break}n=function(){Yt!==2&&Yt!==9||$t!==e||(Yt=7),ea(e)},u.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:e0(u)?(Yt=0,ii=null,e_(n)):(Yt=0,ii=null,Cs(e,n,u,7));break;case 5:var v=null;switch(wt.tag){case 26:v=wt.memoizedState;case 5:case 27:var R=wt;if(v?W_(v):R.stateNode.complete){Yt=0,ii=null;var z=R.sibling;if(z!==null)wt=z;else{var ne=R.return;ne!==null?(wt=ne,Dc(ne)):wt=null}break t}}Yt=0,ii=null,Cs(e,n,u,5);break;case 6:Yt=0,ii=null,Cs(e,n,u,6);break;case 8:Md(),cn=6;break e;default:throw Error(s(462))}}Uy();break}catch(he){jg(e,he)}while(!0);return _a=br=null,xe.H=r,xe.A=l,Vt=a,wt!==null?0:($t=null,Ut=0,zl(),cn)}function Uy(){for(;wt!==null&&!Fe();)$g(wt)}function $g(e){var n=mg(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?Dc(e):wt=n}function e_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=lg(a,n,n.pendingProps,n.type,void 0,Ut);break;case 11:n=lg(a,n,n.pendingProps,n.type.render,n.ref,Ut);break;case 5:Nf(n);var r=n;r===Mn&&(Rt?(kl(r),r.tag===5&&r.stateNode!=null&&(tn=r.stateNode)):(kl(r),Rt=!0));default:_g(a,n),n=wt=km(n,Ea),n=mg(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?Dc(e):wt=n}function Cs(e,n,a,r){_a=br=null,Nf(n),hs=null,wo=0;var l=n.return;try{if(xy(e,l,n,a,Ut)){cn=1,cc(e,pi(a,e.current)),wt=null;return}}catch(u){if(l!==null)throw wt=l,u;cn=1,cc(e,pi(a,e.current)),wt=null;return}n.flags&32768?(Rt||r===1?e=!0:ys||(Ut&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),t_(n,e)):Dc(n)}function Dc(e){var n=e;do{if((n.flags&32768)!==0){t_(n,Ja);return}e=n.return;var a=Ey(n.alternate,n,Ea);if(a!==null){wt=a;return}if(n=n.sibling,n!==null){wt=n;return}wt=n=e}while(n!==null);cn===0&&(cn=5)}function t_(e,n){do{var a=by(e.alternate,e);if(a!==null){a.flags&=32767,wt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){wt=e;return}wt=e=a}while(e!==null);cn=6,wt=null}function n_(e,n,a,r,l,u,v,R,z,ne,he,Ee){e.cancelPendingCommit=null;do Uc();while(rn!==0);if((Vt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===$t&&(wt=$t=null,Ut=0),zr=n,wi=e,$i=a,yd=l,Wg=r,Ly(e,n,a,v,R,z,Ee)}}function Ly(e,n,a,r,l,u,v){var R=n.lanes|n.childLanes;if(Sd=R,R|=af,Tl(e,a,R,r,l,u),bs=null,(a&335544064)===a?(Ts=oy(e),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,By(Ue,function(){return Rd(),null})):(e.callbackNode=null,e.callbackPriority=0),_c=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=xe.T,xe.T=null,l=De.p,De.p=2,u=Vt,Vt|=4;try{Ty(e,n,a)}finally{Vt=u,De.p=l,xe.T=r}}rn=1,_c?Es=rM(v,e.containerInfo,Ts,bd,Td,Py,Ad,Rd,Oy):(bd(),Td(),Ad())}function Oy(e){if(rn!==0){var n=wi.onRecoverableError;n(e,{componentStack:null})}}function Py(){rn===3&&(rn=0,Fg(zr,wi),rn=4)}function bd(){if(rn===1){rn=0;var e=wi,n=zr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=xe.T,xe.T=null;var l=De.p;De.p=2;var u=Vt;Vt|=4;try{Go=Sc=!1,Ig(n,e,a),a=Bd;var v=Lm(e.containerInfo),R=a.focusedElem,z=a.selectionRange;if(v!==R&&R&&R.ownerDocument&&Um(R.ownerDocument.documentElement,R)){if(z!==null&&Ju(R)){var ne=z.start,he=z.end;if(he===void 0&&(he=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(he,R.value.length);else{var Ee=R.ownerDocument||document,$=Ee&&Ee.defaultView||window;if($.getSelection){var ce=$.getSelection(),Ve=R.textContent.length,tt=Math.min(z.start,Ve),Mt=z.end===void 0?tt:Math.min(z.end,Ve);!ce.extend&&tt>Mt&&(v=Mt,Mt=tt,tt=v);var te=Dm(R,tt),W=Dm(R,Mt);if(te&&W&&(ce.rangeCount!==1||ce.anchorNode!==te.node||ce.anchorOffset!==te.offset||ce.focusNode!==W.node||ce.focusOffset!==W.offset)){var se=Ee.createRange();se.setStart(te.node,te.offset),ce.removeAllRanges(),tt>Mt?(ce.addRange(se),ce.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),ce.addRange(se))}}}}for(Ee=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Ee.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var Me=Ee[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Is=!!Fd,Bd=Fd=null}finally{Vt=u,De.p=l,xe.T=r}}e.current=n,rn=2}}function Td(){if(rn===2){rn=0;var e=wi,n=zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xe.T,xe.T=null;var r=De.p;De.p=2;var l=Vt;Vt|=4;try{Ng(e,n.alternate,n)}finally{Vt=l,De.p=r,xe.T=a}}rn=3}}function Ad(){if(rn===4||rn===3){rn=0;var e=Es;Es=null,Pe();var n=wi,a=zr,r=$i,l=Wg,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?rn=5:(rn=0,zr=wi=null,i_(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(er=null),po(r),a=a.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(at,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=xe.T,u=De.p,De.p=2,xe.T=null;try{for(var v=n.onRecoverableError,R=0;R<l.length;R++){var z=l[R];v(z.value,{componentStack:z.stack})}}finally{xe.T=a,De.p=u}}if(l=bs,v=Ts,Ts=null,l!==null&&(bs=null,v===null&&(v=[]),e!==null))for(z=0;z<l.length;z++)a=(0,l[z])(v),a!==void 0&&e.finished.finally(a);($i&3)!==0&&Uc(),ea(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Cc?Wo++:(Wo=0,Cc=n):(Wo=0,Cc=null),qo(0)}}function i_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ao(n)))}function Uc(){return Es!==null&&(Es.skipTransition(),Es=null),bd(),Td(),Ad(),Rd()}function Rd(){if(rn!==5)return!1;var e=wi,n=Sd;Sd=0;var a=po($i),r=xe.T,l=De.p;try{De.p=32>a?32:a,xe.T=null,a=yd,yd=null;var u=wi,v=$i;if(rn=0,zr=wi=null,$i=0,(Vt&6)!==0)throw Error(s(331));var R=Vt;if(Vt|=4,Vg(u.current),Bg(u,u.current,v,a),Vt=R,qo(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(at,u)}catch{}return!0}finally{De.p=l,xe.T=r,i_(e,n)}}function a_(e,n,a){n=pi(a,n),n=Xf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(Vi(e,2),ea(e))}function Zt(e,n,a){if(e.tag===3)a_(e,e,a);else for(;n!==null;){if(n.tag===3){a_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){e=pi(a,e),a=eg(2),r=qa(n,a,2),r!==null&&(tg(a,r,n,e),Vi(r,2),ea(r));break}}n=n.return}}function Cd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Cy;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(vd=!0,l.add(a),e=Iy.bind(null,e,n,a),n.then(e,e))}function Iy(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$t===e&&(Ut&a)===a&&((cn===4||cn===3&&(Ut&62914560)===Ut&&300>Be()-Tc)&&(Vt&2)===0?Rs(e,0):bc|=a,Ms===Ut&&(Ms=0)),ea(e)}function r_(e,n){n===0&&(n=co()),e=yr(e,n),e!==null&&(Vi(e,n),ea(e))}function zy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),r_(e,a)}function Fy(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),r_(e,a)}function By(e,n){return Oe(e,n)}var ws=null,Ns=null,wd=!1,Lc=!1,Nd=!1,nr=0;function ea(e){e!==Ns&&e.next===null&&(Ns===null?ws=Ns=e:Ns=Ns.next=e),Lc=!0,wd||(wd=!0,Gy())}function qo(e,n){if(!Nd&&Lc){Nd=!0;do for(var a=!1,r=ws;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var v=r.suspendedLanes,R=r.pingedLanes;u=(1<<31-pt(42|e)+1)-1,u&=l&~(v&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,c_(r,u))}else u=Ut,u=_r(r,r===$t?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ia(r,u)||(a=!0,c_(r,u));r=r.next}while(a);Nd=!1}}function Hy(){s_()}function s_(){Lc=wd=!1;var e=0;nr!==0&&Jy()&&(e=nr);for(var n=Be(),a=null,r=ws;r!==null;){var l=r.next,u=o_(r,n);u===0?(r.next=null,a===null?ws=l:a.next=l,l===null&&(Ns=a)):(a=r,(e!==0||(u&3)!==0)&&(Lc=!0)),r=l}rn!==0&&rn!==5||qo(e),nr!==0&&(nr=0)}function o_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var v=31-pt(u),R=1<<v,z=l[v];z===-1?((R&a)===0||(R&r)!==0)&&(l[v]=lo(R,n)):z<=n&&(e.expiredLanes|=R),u&=~R}if(n=$t,a=Ut,a=_r(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&nt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ia(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&nt(r),po(a)){case 2:case 8:a=Z;break;case 32:a=Ue;break;case 268435456:a=Le;break;default:a=Ue}return r=l_.bind(null,e),a=Oe(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&nt(r),e.callbackPriority=2,e.callbackNode=null,2}function l_(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Uc()&&e.callbackNode!==a)return null;var r=Ut;return r=_r(e,e===$t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Yg(e,r,n),o_(e,Be()),e.callbackNode!=null&&e.callbackNode===a?l_.bind(null,e):null)}function c_(e,n){if(Uc())return null;Yg(e,n,!0)}function Gy(){eM(function(){(Vt&6)!==0?Oe(it,Hy):s_()})}function Dd(){if(nr===0){var e=Rr;e===0&&(e=Qr,Qr<<=1,(Qr&261888)===0&&(Qr=256)),nr=e}return nr}function u_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wl(e)}function Vy(e,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var u=u_((l[k]||null).action),v=r.submitter;v&&(n=(n=v[k]||null)?u_(n.formAction):v.getAttribute("formAction"),n!==null&&(u=n,v=null));var R=new Ll("action","action",null,r,l);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nr!==0){var z=new FormData(l,v);Bf(a,{pending:!0,data:z,method:l.method,action:u},null,z)}}else typeof u=="function"&&(R.preventDefault(),z=new FormData(l,v),Bf(a,{pending:!0,data:z,method:l.method,action:u},u,z))},currentTarget:l}]})}}for(var Ud=0;Ud<nf.length;Ud++){var Ld=nf[Ud],ky=Ld.toLowerCase(),Xy=Ld[0].toUpperCase()+Ld.slice(1);Ti(ky,"on"+Xy)}Ti(Im,"onAnimationEnd"),Ti(zm,"onAnimationIteration"),Ti(Fm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti($S,"onTransitionRun"),Ti(ey,"onTransitionStart"),Ti(ty,"onTransitionCancel"),Ti(Bm,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function f_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var v=r.length-1;0<=v;v--){var R=r[v],z=R.instance,ne=R.currentTarget;if(R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=ne;try{u(l)}catch(he){Il(he)}l.currentTarget=null,u=z}else for(v=0;v<r.length;v++){if(R=r[v],z=R.instance,ne=R.currentTarget,R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=ne;try{u(l)}catch(he){Il(he)}l.currentTarget=null,u=z}}}}function Nt(e,n){var a=n[oe];a===void 0&&(a=n[oe]=new Set);var r=e+"__bubble";a.has(r)||(d_(n,e,2,!1),a.add(r))}function Od(e,n,a){var r=0;n&&(r|=4),d_(a,e,r,n)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Pd(e){if(!e[Oc]){e[Oc]=!0,Wt.forEach(function(a){a!=="selectionchange"&&(Wy.has(a)||Od(a,!1,e),Od(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Oc]||(n[Oc]=!0,Od("selectionchange",!1,n))}}function d_(e,n,a,r){switch(tv(n)){case 2:var l=zM;break;case 8:l=FM;break;default:l=th}a=l.bind(null,n,a,e),l=void 0,!Vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Id(e,n,a,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var R=r.stateNode.containerInfo;if(R===l)break;if(v===4)for(v=r.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===l)return;v=v.return}for(;R!==null;){if(v=ut(R),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){r=u=v;continue e}R=R.parentNode}}r=r.return}dm(function(){var ne=u,he=Hu(a),Ee=[];e:{var $=Hm.get(e);if($!==void 0){var ce=Ll,Ve=e;switch(e){case"keypress":if(Dl(a)===0)break e;case"keydown":case"keyup":ce=wS;break;case"focusin":Ve="focus",ce=qu;break;case"focusout":Ve="blur",ce=qu;break;case"beforeblur":case"afterblur":ce=qu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=_S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=OS;break;case Im:case zm:case Fm:ce=SS;break;case Bm:ce=IS;break;case"scroll":case"scrollend":ce=mS;break;case"wheel":ce=FS;break;case"copy":case"cut":case"paste":ce=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=_m;break;case"submit":ce=US;break;case"toggle":case"beforetoggle":ce=HS}var tt=(n&4)!==0,Mt=!tt&&(e==="scroll"||e==="scrollend"),te=tt?$!==null?$+"Capture":null:$;tt=[];for(var W=ne,se;W!==null;){var Me=W;if(se=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||se===null||te===null||(Me=mo(W,te),Me!=null&&tt.push(Zo(W,Me,se))),Mt)break;W=W.return}0<tt.length&&($=new ce($,Ve,null,a,he),Ee.push({event:$,listeners:tt}))}}if((n&7)===0){e:{if(ce=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",ce&&a!==Bu&&(Ve=a.relatedTarget||a.fromElement)&&(ut(Ve)||Ve[pe]))break e;($||ce)&&(Ve=he.window===he?he:(ce=he.ownerDocument)?ce.defaultView||ce.parentWindow:window,$?(ce=a.relatedTarget||a.toElement,$=ne,ce=ce?ut(ce):null,ce!==null&&(Mt=f(ce),tt=ce.tag,ce!==Mt||tt!==5&&tt!==27&&tt!==6)&&(ce=null)):($=null,ce=ne),$!==ce&&(tt=mm,Me="onMouseLeave",te="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(tt=_m,Me="onPointerLeave",te="onPointerEnter",W="pointer"),Mt=$==null?Ve:Qe($),se=ce==null?Ve:Qe(ce),Ve=new tt(Me,W+"leave",$,a,he),Ve.target=Mt,Ve.relatedTarget=se,Me=null,ut(he)===ne&&(tt=new tt(te,W+"enter",ce,a,he),tt.target=se,tt.relatedTarget=Mt,Me=tt),Mt=Me,tt=$&&ce?O($,ce,qy):null,$!==null&&h_(Ee,Ve,$,tt,!1),ce!==null&&Mt!==null&&h_(Ee,Mt,ce,tt,!0)))}e:{if($=ne?Qe(ne):window,ce=$.nodeName&&$.nodeName.toLowerCase(),ce==="select"||ce==="input"&&$.type==="file")var Je=Tm;else if(Em($))if(Am)Je=KS;else{Je=ZS;var Lt=YS}else ce=$.nodeName,!ce||ce.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?ne&&Fu(ne.elementType)&&(Je=Tm):Je=jS;if(Je&&(Je=Je(e,ne))){bm(Ee,Je,a,he);break e}Lt&&Lt(e,$,ne)}switch(Lt=ne?Qe(ne):window,e){case"focusin":(Em(Lt)||Lt.contentEditable==="true")&&(as=Lt,$u=ne,Eo=null);break;case"focusout":Eo=$u=as=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Om(Ee,a,he);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":Om(Ee,a,he)}var st;if(Zu)e:{switch(e){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else is?ym(e,a)&&(lt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(vm&&a.locale!=="ko"&&(is||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&is&&(st=hm()):(za=he,ku="value"in za?za.value:za.textContent,is=!0)),Lt=Pc(ne,lt),0<Lt.length&&(lt=new gm(lt,e,null,a,he),Ee.push({event:lt,listeners:Lt}),st?lt.data=st:(st=Mm(a),st!==null&&(lt.data=st)))),(st=VS?kS(e,a):XS(e,a))&&(lt=Pc(ne,"onBeforeInput"),0<lt.length&&(Lt=new gm("onBeforeInput","beforeinput",null,a,he),Ee.push({event:Lt,listeners:lt}),Lt.data=st)),Vy(Ee,e,ne,a,he)}f_(Ee,n)})}function Zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pc(e,n){for(var a=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=mo(e,a),l!=null&&r.unshift(Zo(e,l,u)),l=mo(e,n),l!=null&&r.push(Zo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function h_(e,n,a,r,l){for(var u=n._reactName,v=[];a!==null&&a!==r;){var R=a,z=R.alternate,ne=R.stateNode;if(R=R.tag,z!==null&&z===r)break;R!==5&&R!==26&&R!==27||ne===null||(z=ne,l?(ne=mo(a,u),ne!=null&&v.unshift(Zo(a,ne,z))):l||(ne=mo(a,u),ne!=null&&v.push(Zo(a,ne,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function p_(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Zy,"")}function m_(e,n){return n=p_(n),p_(e)===n}function jt(e,n,a,r,l,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||es(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&es(e,""+r);else return;break;case"className":$n(e,"class",r);break;case"tabIndex":$n(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,r);break;case"style":um(e,r,u);return;case"data":if(n!=="object"){$n(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=wl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&jt(e,n,"name",l.name,l,null),jt(e,n,"formEncType",l.formEncType,l,null),jt(e,n,"formMethod",l.formMethod,l,null),jt(e,n,"formTarget",l.formTarget,l,null)):(jt(e,n,"encType",l.encType,l,null),jt(e,n,"method",l.method,l,null),jt(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=wl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Xi);return;case"onScroll":r!=null&&Nt("scroll",e);return;case"onScrollEnd":r!=null&&Nt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=wl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),en(e,"popover",r);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":en(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=hS.get(a)||a,en(e,a,r);else return}At=!0}function zd(e,n,a,r,l,u){switch(a){case"style":um(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")es(e,r);else if(typeof r=="number"||typeof r=="bigint")es(e,""+r);else return;break;case"onScroll":r!=null&&Nt("scroll",e);return;case"onScrollEnd":r!=null&&Nt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[k]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,l);break e}At=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):en(e,a,r)}return}At=!0}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var v=a[u];if(v!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(e,n,u,v,a,null)}}l&&jt(e,n,"srcSet",a.srcSet,a,null),r&&jt(e,n,"src",a.src,a,null);return;case"input":Nt("invalid",e);var R=u=v=l=null,z=null,ne=null;for(r in a)if(a.hasOwnProperty(r)){var he=a[r];if(he!=null)switch(r){case"name":l=he;break;case"type":v=he;break;case"checked":z=he;break;case"defaultChecked":ne=he;break;case"value":u=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:jt(e,n,r,he,a,null)}}sm(e,u,R,z,ne,v,l,!1);return;case"select":Nt("invalid",e),r=v=u=null;for(l in a)if(a.hasOwnProperty(l)&&(R=a[l],R!=null))switch(l){case"value":u=R;break;case"defaultValue":v=R;break;case"multiple":r=R;default:jt(e,n,l,R,a,null)}n=u,a=v,e.multiple=!!r,n!=null?$r(e,!!r,n,!1):a!=null&&$r(e,!!r,a,!0);return;case"textarea":Nt("invalid",e),u=l=r=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":r=R;break;case"defaultValue":l=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:jt(e,n,v,R,a,null)}lm(e,r,l,u);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:jt(e,n,z,r,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(r=0;r<Yo.length;r++)Nt(Yo[r],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(r=a[ne],r!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(e,n,ne,r,a,null)}return;default:if(Fu(n)){for(he in a)a.hasOwnProperty(he)&&(r=a[he],r!==void 0&&zd(e,n,he,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&jt(e,n,R,r,a,null))}var jy={};function Ky(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,v=null,R=null,z=null,ne=null,he=null;for(ce in a){var Ee=a[ce];if(a.hasOwnProperty(ce)&&Ee!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=Ee;default:r.hasOwnProperty(ce)||jt(e,n,ce,null,r,Ee)}}for(var $ in r){var ce=r[$];if(Ee=a[$],r.hasOwnProperty($)&&(ce!=null||Ee!=null))switch($){case"type":ce!==Ee&&(At=!0),u=ce;break;case"name":ce!==Ee&&(At=!0),l=ce;break;case"checked":ce!==Ee&&(At=!0),ne=ce;break;case"defaultChecked":ce!==Ee&&(At=!0),he=ce;break;case"value":ce!==Ee&&(At=!0),v=ce;break;case"defaultValue":ce!==Ee&&(At=!0),R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Ee&&jt(e,n,$,ce,r,Ee)}}Iu(e,v,R,z,ne,he,u,l);return;case"select":ce=v=R=$=null;for(u in a)if(z=a[u],a.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":ce=z;default:r.hasOwnProperty(u)||jt(e,n,u,null,r,z)}for(l in r)if(u=r[l],z=a[l],r.hasOwnProperty(l)&&(u!=null||z!=null))switch(l){case"value":u!==z&&(At=!0),$=u;break;case"defaultValue":u!==z&&(At=!0),R=u;break;case"multiple":u!==z&&(At=!0),v=u;default:u!==z&&jt(e,n,l,u,r,z)}n=R,a=v,r=ce,$!=null?$r(e,!!a,$,!1):!!r!=!!a&&(n!=null?$r(e,!!a,n,!0):$r(e,!!a,a?[]:"",!1));return;case"textarea":ce=$=null;for(R in a)if(l=a[R],a.hasOwnProperty(R)&&l!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:jt(e,n,R,null,r,l)}for(v in r)if(l=r[v],u=a[v],r.hasOwnProperty(v)&&(l!=null||u!=null))switch(v){case"value":l!==u&&(At=!0),$=l;break;case"defaultValue":l!==u&&(At=!0),ce=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&jt(e,n,v,l,r,u)}om(e,$,ce);return;case"option":for(var Ve in a)if($=a[Ve],a.hasOwnProperty(Ve)&&$!=null&&!r.hasOwnProperty(Ve))switch(Ve){case"selected":e.selected=!1;break;default:jt(e,n,Ve,null,r,$)}for(z in r)if($=r[z],ce=a[z],r.hasOwnProperty(z)&&$!==ce&&($!=null||ce!=null))switch(z){case"selected":$!==ce&&(At=!0),e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:jt(e,n,z,$,r,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)$=a[tt],a.hasOwnProperty(tt)&&$!=null&&!r.hasOwnProperty(tt)&&jt(e,n,tt,null,r,$);for(ne in r)if($=r[ne],ce=a[ne],r.hasOwnProperty(ne)&&$!==ce&&($!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:jt(e,n,ne,$,r,ce)}return;default:if(Fu(n)){for(var Mt in a)$=a[Mt],a.hasOwnProperty(Mt)&&$!==void 0&&!r.hasOwnProperty(Mt)&&zd(e,n,Mt,void 0,r,$);for(he in r)$=r[he],ce=a[he],!r.hasOwnProperty(he)||$===ce||$===void 0&&ce===void 0||zd(e,n,he,$,r,ce);return}}for(var te in a)$=a[te],a.hasOwnProperty(te)&&$!=null&&!r.hasOwnProperty(te)&&jt(e,n,te,null,r,$);for(Ee in r)$=r[Ee],ce=a[Ee],!r.hasOwnProperty(Ee)||$===ce||$==null&&ce==null||jt(e,n,Ee,$,r,ce)}function g_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,v=l.initiatorType,R=l.duration;if(u&&R&&g_(v)){for(v=0,R=l.responseEnd,r+=1;r<a.length;r++){var z=a[r],ne=z.startTime;if(ne>R)break;var he=z.transferSize,Ee=z.initiatorType;he&&g_(Ee)&&(z=z.responseEnd,v+=he*(z<R?1:(R-ne)/(z-ne)))}if(--r,n+=8*(u+v)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fd=null,Bd=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function __(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function x_(e,n,a,r){return a=jo(a).createElement(e),a[A]=r,a[k]=n,Nn(a,e,n),Tt(a),a}function Hd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Jy(){var e=window.event;return e&&e.type==="popstate"?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,y_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Vd,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(e){return S_.resolve(null).then(e).catch(tM)}:Vd;function tM(e){setTimeout(function(){throw e})}function ir(e){return e==="head"}function M_(e,n){var a=n,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(l),zs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Kd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Kd(a);for(var u=a.firstChild;u;){var v=u.nextSibling,R=u.nodeName;u[Ge]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=v}}else a==="body"&&Kd(e.ownerDocument.body);a=l}while(a);zs(n)}function E_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function b_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function T_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function nM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function kd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return nM(n,a,e)}function iM(e){return e.documentElement.clientHeight}function aM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function rM(e,n,a,r,l,u,v,R,z){var ne=n.nodeType===9?n:n.ownerDocument;try{var he=ne.startViewTransition({update:function(){var $=ne.defaultView,ce=$.navigation&&$.navigation.transition,Ve=ne.fonts.status;r();var tt=[];if(Ve==="loaded"&&(iM(ne),ne.fonts.status==="loading"&&tt.push(ne.fonts.ready)),Ve=tt.length,e!==null)for(var Mt=e.suspenseyImages,te=0,W=0;W<Mt.length;W++){var se=Mt[W];if(!se.complete){var Me=se.getBoundingClientRect();if(0<Me.bottom&&0<Me.right&&Me.top<$.innerHeight&&Me.left<$.innerWidth){if(te+=q_(se),te>Fc){tt.length=Ve;break}se=new Promise(aM.bind(se)),tt.push(se)}}}if(0<tt.length)return $=Promise.race([Promise.all(tt),new Promise(function(Je){return setTimeout(Je,500)})]).then(l,l),(ce?Promise.allSettled([ce.finished,$]):$).then(u,u);if(l(),ce)return ce.finished.then(u,u);u()},types:a});ne.__reactViewTransition=he;var Ee=[];return he.ready.then(function(){for(var $=ne.documentElement.getAnimations({subtree:!0}),ce=0;ce<$.length;ce++){var Ve=$[ce],tt=Ve.effect,Mt=tt.pseudoElement;if(Mt!=null&&Mt.startsWith("::view-transition")){Ee.push(Ve),Ve=tt.getKeyframes();for(var te=Mt=void 0,W=!0,se=0;se<Ve.length;se++){var Me=Ve[se],Je=Me.width;if(Mt===void 0)Mt=Je;else if(Mt!==Je){W=!1;break}if(Je=Me.height,te===void 0)te=Je;else if(te!==Je){W=!1;break}delete Me.width,delete Me.height,Me.transform==="none"&&delete Me.transform}W&&Mt!==void 0&&te!==void 0&&(tt.setKeyframes(Ve),W=getComputedStyle(tt.target,tt.pseudoElement),W.width!==Mt||W.height!==te)&&(W=Ve[0],W.width=Mt,W.height=te,W=Ve[Ve.length-1],W.width=Mt,W.height=te,tt.setKeyframes(Ve))}}v()},function($){ne.__reactViewTransition===he&&(ne.__reactViewTransition=null);try{if(typeof $=="object"&&$!==null)switch($.name){case"InvalidStateError":($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null)}$!==null&&z($)}finally{r(),l(),v()}}),he.finished.finally(function(){for(var $=0;$<Ee.length;$++)Ee[$].cancel();ne.__reactViewTransition===he&&(ne.__reactViewTransition=null),R()}),he}catch{return r(),l(),v(),null}}function Fr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Fr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Fr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[l])}return r},Fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function A_(e){return{name:e,group:new Fr("group",e),imagePair:new Fr("image-pair",e),old:new Fr("old",e),new:new Fr("new",e)}}function si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(e,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(C_(u,e,n,a)===-1){var v=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(z){v.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(l=v.removeEventListener.bind(v,e,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ds(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:l}),_(this._fragmentFiber.child,!1,sM,e,R,r)}this._eventListeners=u}};function sM(e,n,a,r){return S(e).addEventListener(n,a,r),!1}si.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=C_(r,e,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var u=l.cleanup;l=Ds(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,oM,e,a,l),r.splice(n,1),u!==null&&u()}};function oM(e,n,a,r){return S(e).removeEventListener(n,a,r),!1}function Ds(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function R_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function C_(e,n,a,r){if(e.length===0)return-1;r=R_(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&R_(u.optionsOrUseCapture)===r)return l}return-1}si.prototype.dispatchEvent=function(e){var n=x(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},si.prototype.focus=function(e){_(this._fragmentFiber.child,!0,w_,e,void 0,void 0)};function w_(e,n){return e.tag===6?!1:(e=S(e),xM(e,n))}si.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,Xd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!w_(n[a],e);a--);};function Xd(e,n){return n.push(e),!1}si.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=S(e),e=jo(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,lM,e,void 0,void 0))};function lM(e,n){return e.tag===6?!1:(e=S(e),e===n||e.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,cM,e,void 0,void 0)};function cM(e,n){return e.tag===6||(e=S(e),n.observe(e)),!1}si.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,uM,e,void 0,void 0);for(var a=n=0;a<Ni.length;a++){var r=Ni[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ni[n++]=r}Ni.length=n}};function uM(e,n){return e.tag===6||(e=S(e),n.unobserve(e)),!1}var Ni=[],Wd=!1;function fM(e,n,a){Ni.push({fragmentInstance:e,observer:n,instance:a}),Wd||(Wd=!0,SM(function(){Wd=!1;var r=Ni;Ni=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}si.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,dM,e,void 0,void 0),e};function dM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=S(e),n.push.apply(n,e.getClientRects());return!1}si.prototype.getRootNode=function(e){var n=x(this._fragmentFiber);return n===null?this:S(n).getRootNode(e)},si.prototype.compareDocumentPosition=function(e){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Xd,a,void 0,void 0);var r=S(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=S(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),l=S(a[a.length-1]);var u=M(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(e),R=l.compareDocumentPosition(e),z=v&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&u&&v&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&l===e||z||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||hM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function hM(e,n,a,r,l){var u=ut(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=x(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=O(a,u,U),n===null?n=!1:(_(n,!0,X,u,a),u=y,y=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=O(r,u,U),n===null?n=!1:(_(n,!0,C,u,r),u=y,P=y=null,n=u!==null)),n):!1}function N_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Xd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=S(r),N_(e,a);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=S(l),N_(l,a)):S(l).scrollIntoView(e),r+=a?-1:1}};function pM(e,n){return e=S(e),D_(e,n),!1}function D_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function U_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.addEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var v=0,R=0;R<Ni.length;R++){var z=Ni[R];(z.fragmentInstance!==n||z.observer!==u||z.instance!==e)&&(Ni[v++]=z)}Ni.length=v,u.observe(e)}),D_(e,n))}function mM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.removeEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?fM(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function qd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qd(a),et(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gM(e,n,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ge])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function _M(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function L_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function Yd(e){return e.data==="$?"||e.data==="$~"}function Zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jd=null;function O_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function P_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function xM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function SM(e){y_(function(){y_(function(n){return e(n)})})}function I_(e,n,a){switch(n=jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function z_(e,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&jt(e,n,r,null,jy,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Xi&&(e.onclick=null),et(e)}function Kd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);et(e)}var Si=new Map,F_=new Set;function Ko(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ba=De.d;De.d={f:yM,r:MM,D:EM,C:bM,L:TM,m:AM,X:CM,S:RM,M:wM};function yM(){var e=ba.f(),n=wc();return e||n}function MM(e){var n=mt(e);n!==null&&n.tag===5&&n.type==="form"?H0(n):ba.r(e)}var Us=typeof document>"u"?null:document;function B_(e,n,a){var r=Us;if(r&&typeof n=="string"&&n){var l=di(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),F_.has(l)||(F_.add(l),e={rel:e,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",e),Tt(n),r.head.appendChild(n)))}}function EM(e){ba.D(e),B_("dns-prefetch",e,null)}function bM(e,n){ba.C(e,n),B_("preconnect",e,n)}function TM(e,n,a){ba.L(e,n,a);var r=Us;if(r&&e&&n){var l='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+di(a.imageSizes)+'"]')):l+='[href="'+di(e)+'"]';var u=l;switch(n){case"style":u=Ls(e);break;case"script":u=Os(e)}if(!(Si.has(u)||(e=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(u,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Qo(u))||n==="script"&&r.querySelector(Jo(u))))){var v=r.createElement("link");Nn(v,"link",e),n==="style"&&(v[$e]=!0,v.onload=v.onerror=function(){Qt(v)}),Tt(v),r.head.appendChild(v)}}}function AM(e,n){ba.m(e,n);var a=Us;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Os(e)}if(!Si.has(u)&&(e=I({rel:"modulepreload",href:e},n),Si.set(u,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jo(u)))return}r=a.createElement("link"),Nn(r,"link",e),Tt(r),a.head.appendChild(r)}}}function RM(e,n,a){ba.S(e,n,a);var r=Us;if(r&&e){var l=Ct(r).hoistableStyles,u=Ls(e);n=n||"default";var v=l.get(u);if(!v){var R={loading:0,preload:null};if(v=r.querySelector(Qo(u)))R.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(u))&&Qd(e,a);var z=v=r.createElement("link");Tt(z),Nn(z,"link",e),z._p=new Promise(function(ne,he){z.onload=ne,z.onerror=he}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ic(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:R},l.set(u,v)}}}function CM(e,n){ba.X(e,n);var a=Us;if(a&&e){var r=Ct(a).hoistableScripts,l=Os(e),u=r.get(l);u||(u=a.querySelector(Jo(l)),u||(e=I({src:e,async:!0},n),(n=Si.get(l))&&Jd(e,n),u=a.createElement("script"),Tt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function wM(e,n){ba.M(e,n);var a=Us;if(a&&e){var r=Ct(a).hoistableScripts,l=Os(e),u=r.get(l);u||(u=a.querySelector(Jo(l)),u||(e=I({src:e,async:!0,type:"module"},n),(n=Si.get(l))&&Jd(e,n),u=a.createElement("script"),Tt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function H_(e,n,a,r){var l=(l=ft.current)?Ko(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ls(a.href),n=Ct(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ls(a.href);var u=Ct(l).hoistableStyles,v=u.get(e);if(v||(l=l.ownerDocument||l,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,v),(u=l.querySelector(Qo(e)))?u._p||(v.instance=u,v.state.loading=5):(u=Si.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,u)),NM(l,e,u,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Os(a),n=Ct(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ls(e){return'href="'+di(e)+'"'}function Qo(e){return'link[rel="stylesheet"]['+e+"]"}function G_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function NM(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[$e]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[$e]=!0,n.onload=n.onerror=Qt.bind(null,n),Nn(n,"link",a),Tt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Os(e){return'[src="'+di(e)+'"]'}function Jo(e){return"script[async]"+e}function V_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+di(a.href)+'"]');if(r)return n.instance=r,Tt(r),r;var l=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Tt(r),Nn(r,"style",l),Ic(r,a.precedence,e),n.instance=r;case"stylesheet":l=Ls(a.href);var u=e.querySelector(Qo(l));if(u)return n.state.loading|=4,n.instance=u,Tt(u),u;r=G_(a),(l=Si.get(l))&&Qd(r,l),u=(e.ownerDocument||e).createElement("link"),Tt(u);var v=u;return v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Nn(u,"link",r),n.state.loading|=4,Ic(u,a.precedence,e),n.instance=u;case"script":return u=Os(a.src),(l=e.querySelector(Jo(u)))?(n.instance=l,Tt(l),l):(r=a,(l=Si.get(u))&&(r=I({},a),Jd(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Tt(l),Nn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ic(r,a.precedence,e));return n.instance}function Ic(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,v=0;v<r.length;v++){var R=r[v];if(R.dataset.precedence===n)u=R;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var zc=null;function k_(e,n,a){if(zc===null){var r=new Map,l=zc=new Map;l.set(a,r)}else l=zc,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Ge]||u[A]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var v=u.getAttribute(n)||"";v=e+v;var R=r.get(v);R?R.push(u):r.set(v,[u])}}return r}function $d(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function DM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function X_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function W_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function q_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Y_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=q_(n),e.suspenseyImages.push(n)),e=OM.bind(e),n.decode().then(e,e))}function UM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ls(r.href),u=n.querySelector(Qo(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$o.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,Tt(u);return}u=n.ownerDocument||n,r=G_(r),(l=Si.get(l))&&Qd(r,l),u=u.createElement("link"),Tt(u);var v=u;v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Nn(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$o.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Fc=0;function LM(e,n){return e.stylesheets&&e.count===0&&Hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Fc===0&&(Fc=62500*Qy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Fc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Z_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Hc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function $o(){this.count--,Z_(this)}function OM(){this.imgCount--,Z_(this)}var Bc=null;function Hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,n.forEach(PM,e),Bc=null,$o.call(e))}function PM(e,n){if(!(n.state.loading&4)){var a=Bc.get(e);if(a)var r=a.get(null);else{a=new Map,Bc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var v=l[u];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}l=n.instance,v=l.getAttribute("data-precedence"),u=a.get(v)||r,u===r&&a.set(null,l),a.set(v,l),this.count++,r=$o.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Ps={$$typeof:ee,Provider:null,Consumer:null,_currentValue:Ht,_currentValue2:Ht,_threadCount:0};function IM(e,n,a,r,l,u,v,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.hiddenUpdates=Jr(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function j_(e,n,a,r,l,u,v,R,z,ne,he,Ee){return e=new IM(e,n,a,v,z,ne,he,Ee,R),n=1,u===!0&&(n|=24),u=Xn(3,null,null,n),e.current=u,u.stateNode=e,n=pf(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},vf(u),e}function K_(e){return e?(e=os,e):os}function Q_(e,n,a,r,l,u){l=K_(l),r.context===null?r.context=l:r.pendingContext=l,r=Wa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=qa(e,r,n),a!==null&&(Zn(a,e,n),No(a,e,n))}function J_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function eh(e,n){J_(e,n),(e=e.alternate)&&J_(e,n)}function $_(e){if(e.tag===13||e.tag===31){var n=yr(e,67108864);n!==null&&Zn(n,e,67108864),eh(e,67108864)}}function ev(e){if(e.tag===13||e.tag===31){var n=ri();n=ho(n);var a=yr(e,n);a!==null&&Zn(a,e,n),eh(e,n)}}var Is=!0;function zM(e,n,a,r){var l=xe.T;xe.T=null;var u=De.p;try{De.p=2,th(e,n,a,r)}finally{De.p=u,xe.T=l}}function FM(e,n,a,r){var l=xe.T;xe.T=null;var u=De.p;try{De.p=8,th(e,n,a,r)}finally{De.p=u,xe.T=l}}function th(e,n,a,r){if(Is){var l=nh(r);if(l===null)Id(e,n,r,Gc,a),nv(e,r);else if(HM(l,e,n,a,r))r.stopPropagation();else if(nv(e,r),n&4&&-1<BM.indexOf(e)){for(;l!==null;){var u=mt(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var v=ua(u.pendingLanes);if(v!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var z=1<<31-pt(v);R.entanglements[1]|=z,v&=~z}ea(u),(Vt&6)===0&&(Ac=Be()+500,qo(0))}}break;case 31:case 13:R=yr(u,2),R!==null&&Zn(R,u,2),wc(),eh(u,2)}if(u=nh(r),u===null&&Id(e,n,r,Gc,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else Id(e,n,r,null,a)}}function nh(e){return e=Hu(e),ih(e)}var Gc=null;function ih(e){if(Gc=null,e=ut(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gc=e,null}function tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case it:return 2;case Z:return 8;case Ue:case Se:return 32;case Le:return 268435456;default:return 32}default:return 32}}var ah=!1,ar=null,rr=null,sr=null,el=new Map,tl=new Map,or=[],BM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nv(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(n.pointerId)}}function nl(e,n,a,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=mt(n),n!==null&&$_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function HM(e,n,a,r,l){switch(n){case"focusin":return ar=nl(ar,e,n,a,r,l),!0;case"dragenter":return rr=nl(rr,e,n,a,r,l),!0;case"mouseover":return sr=nl(sr,e,n,a,r,l),!0;case"pointerover":var u=l.pointerId;return el.set(u,nl(el.get(u)||null,e,n,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,tl.set(u,nl(tl.get(u)||null,e,n,a,r,l)),!0}return!1}function iv(e){var n=ut(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Rl(e.priority,function(){ev(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Rl(e.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Bu=r,a.target.dispatchEvent(r),Bu=null}else return n=mt(a),n!==null&&$_(n),e.blockedOn=a,!1;n.shift()}return!0}function av(e,n,a){Vc(e)&&a.delete(n)}function GM(){ah=!1,ar!==null&&Vc(ar)&&(ar=null),rr!==null&&Vc(rr)&&(rr=null),sr!==null&&Vc(sr)&&(sr=null),el.forEach(av),tl.forEach(av)}function kc(e,n){e.blockedOn===n&&(e.blockedOn=null,ah||(ah=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,GM)))}var Xc=null;function rv(e){Xc!==e&&(Xc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xc===e&&(Xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(ih(r||a)===null)continue;break}var u=mt(a);u!==null&&(e.splice(n,3),n-=3,Bf(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function zs(e){function n(z){return kc(z,e)}ar!==null&&kc(ar,e),rr!==null&&kc(rr,e),sr!==null&&kc(sr,e),el.forEach(n),tl.forEach(n);for(var a=0;a<or.length;a++){var r=or[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<or.length&&(a=or[0],a.blockedOn===null);)iv(a),a.blockedOn===null&&or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],v=l[k]||null;if(typeof u=="function")v||rv(a);else if(v){var R=null;if(u&&u.hasAttribute("formAction")){if(l=u,v=u[k]||null)R=v.formAction;else if(ih(l)!==null)continue}else R=v.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),rv(a)}}}function sv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(v){return l=v})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function rh(e){this._internalRoot=e}Wc.prototype.render=rh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ri();Q_(a,r,e,n,null,null)},Wc.prototype.unmount=rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Q_(e.current,2,null,e,null,null),wc(),n[pe]=null}};function Wc(e){this._internalRoot=e}Wc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Al();e={blockedOn:null,target:e,priority:n};for(var a=0;a<or.length&&n!==0&&n<or[a].priority;a++);or.splice(a,0,e),a===0&&iv(e)}};var ov=t.version;if(ov!=="19.3.1")throw Error(s(527,ov,"19.3.1"));De.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var VM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xe,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{at=qc.inject(VM),Ze=qc}catch{}}return al.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",l=K0,u=Q0,v=J0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=j_(e,1,!1,null,null,a,r,null,l,u,v,sv),e[pe]=n.current,Pd(e),new rh(n)},al.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,l="",u=K0,v=Q0,R=J0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=j_(e,1,!0,n,a??null,r,l,z,u,v,R,sv),n.context=K_(null),a=n.current,r=ri(),r=ho(r),l=Wa(r),l.callback=null,qa(a,l,r),a=r,n.current.lanes=a,Vi(n,a),ea(n),e[pe]=n.current,Pd(e),new Wc(n)},al.version="19.3.1",al}var _v;function JM(){if(_v)return lh.exports;_v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lh.exports=QM(),lh.exports}var $M=JM();const eE=Ex($M);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="186",tE=0,vv=1,nE=2,_u=1,iE=2,hl=3,qr=0,Kn=1,aa=2,Na=0,ml=1,xv=2,Sv=3,yv=4,aE=5,Js=100,rE=101,sE=102,oE=103,lE=104,cE=200,uE=201,fE=202,dE=203,Tx=204,Ax=205,hE=206,pE=207,mE=208,gE=209,_E=210,vE=211,xE=212,SE=213,yE=214,Kh=0,Qh=1,Jh=2,gl=3,$h=4,ep=5,tp=6,np=7,Rx=0,ME=1,EE=2,oa=0,Cx=1,wx=2,Nx=3,Dx=4,Ux=5,Lx=6,Ox=7,Px=300,Yr=301,io=302,dh=303,hh=304,Nu=306,ip=1e3,Pi=1001,ap=1002,Un=1003,bE=1004,Yc=1005,In=1006,ph=1007,Xr=1008,bi=1009,Ix=1010,zx=1011,_l=1012,Vp=1013,la=1014,ra=1015,ca=1016,kp=1017,Xp=1018,vl=1020,Fx=35902,Bx=35899,Hx=1021,Gx=1022,Ii=1023,La=1026,Wr=1027,Vx=1028,Wp=1029,Zr=1030,qp=1031,Yp=1033,vu=33776,xu=33777,Su=33778,yu=33779,rp=35840,sp=35841,op=35842,lp=35843,cp=36196,up=37492,fp=37496,dp=37488,hp=37489,bu=37490,pp=37491,mp=37808,gp=37809,_p=37810,vp=37811,xp=37812,Sp=37813,yp=37814,Mp=37815,Ep=37816,bp=37817,Tp=37818,Ap=37819,Rp=37820,Cp=37821,wp=36492,Np=36494,Dp=36495,Up=36283,Lp=36284,Tu=36285,Op=36286,TE=3200,Mv=0,AE=1,mr="",Mi="srgb",Au="srgb-linear",Ru="linear",Kt="srgb",mh=7680,RE=519,CE=512,wE=513,NE=514,Zp=515,DE=516,UE=517,jp=518,LE=519,OE=35044,Ev="300 es",sa=2e3,Cu=2001;function PE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function xl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IE(){const o=xl("canvas");return o.style.display="block",o}const bv={};function Tv(...o){const t="THREE."+o.shift();console.log(t,...o)}function kx(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function dt(...o){o=kx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Bt(...o){o=kx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function to(...o){const t=o.join(" ");t in bv||(bv[t]=!0,dt(...o))}function zE(o,t,i){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const FE={[Kh]:Qh,[Jh]:tp,[$h]:np,[gl]:ep,[Qh]:Kh,[tp]:Jh,[np]:$h,[ep]:gl};class Kr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const c=s[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=Math.PI/180,Pp=180/Math.PI;function Ml(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function zt(o,t,i){return Math.max(t,Math.min(i,o))}function BE(o,t){return(o%t+t)%t}function _h(o,t,i){return(1-i)*o+i*t}function rl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const em=class em{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(zt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*c+t.x,this.y=f*c+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};em.prototype.isVector2=!0;let Xt=em;class so{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,f,d,h){let m=s[c+0],p=s[c+1],g=s[c+2],_=s[c+3],x=f[d+0],M=f[d+1],T=f[d+2],N=f[d+3];if(_!==N||m!==x||p!==M||g!==T){let S=m*x+p*M+g*T+_*N;S<0&&(x=-x,M=-M,T=-T,N=-N,S=-S);let y=1-h;if(S<.9995){const P=Math.acos(S),X=Math.sin(P);y=Math.sin(y*P)/X,h=Math.sin(h*P)/X,m=m*y+x*h,p=p*y+M*h,g=g*y+T*h,_=_*y+N*h}else{m=m*y+x*h,p=p*y+M*h,g=g*y+T*h,_=_*y+N*h;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,c,f,d){const h=s[c],m=s[c+1],p=s[c+2],g=s[c+3],_=f[d],x=f[d+1],M=f[d+2],T=f[d+3];return t[i]=h*T+g*_+m*M-p*x,t[i+1]=m*T+g*x+p*_-h*M,t[i+2]=p*T+g*M+h*x-m*_,t[i+3]=g*T-h*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(c/2),_=h(f/2),x=m(s/2),M=m(c/2),T=m(f/2);switch(d){case"XYZ":this._x=x*g*_+p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_+x*M*T;break;case"YZX":this._x=x*g*_+p*M*T,this._y=p*M*_+x*g*T,this._z=p*g*T-x*M*_,this._w=p*g*_-x*M*T;break;case"XZY":this._x=x*g*_-p*M*T,this._y=p*M*_-x*g*T,this._z=p*g*T+x*M*_,this._w=p*g*_+x*M*T;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],f=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(f-p)*M,this._z=(d-c)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(g-m)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(f-p)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(d-c)/M,this._x=(f+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,f=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+c*p-f*m,this._y=c*g+d*m+f*h-s*p,this._z=f*g+d*p+s*m-c*h,this._w=d*g-s*h-c*m-f*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,c=-c,f=-f,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+c*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tm=class tm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Av.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Av.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,f=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*c-h*s),g=2*(h*i-f*c),_=2*(f*s-d*i);return this.x=i+m*p+d*_-h*g,this.y=s+m*g+h*p-f*_,this.z=c+m*_+f*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this.z=zt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this.z=zt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,f=t.z,d=i.x,h=i.y,m=i.z;return this.x=c*m-f*h,this.y=f*d-s*m,this.z=s*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(zt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tm.prototype.isVector3=!0;let me=tm;const vh=new me,Av=new so,nm=class nm{constructor(t,i,s,c,f,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,m,p)}set(t,i,s,c,f,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=c,g[2]=h,g[3]=i,g[4]=f,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],M=s[5],T=s[8],N=c[0],S=c[3],y=c[6],P=c[1],X=c[4],C=c[7],U=c[2],O=c[5],I=c[8];return f[0]=d*N+h*P+m*U,f[3]=d*S+h*X+m*O,f[6]=d*y+h*C+m*I,f[1]=p*N+g*P+_*U,f[4]=p*S+g*X+_*O,f[7]=p*y+g*C+_*I,f[2]=x*N+M*P+T*U,f[5]=x*S+M*X+T*O,f[8]=x*y+M*C+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-s*f*g+s*h*m+c*f*p-c*d*m}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*d-h*p,x=h*m-g*f,M=p*f-d*m,T=i*_+s*x+c*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return t[0]=_*N,t[1]=(c*p-g*s)*N,t[2]=(h*s-c*d)*N,t[3]=x*N,t[4]=(g*i-c*m)*N,t[5]=(c*f-h*i)*N,t[6]=M*N,t[7]=(s*m-p*i)*N,t[8]=(d*i-s*f)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-c*p,c*m,-c*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return to("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(t,i)),this}rotate(t){return to("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-t)),this}translate(t,i){return to("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nm.prototype.isMatrix3=!0;let gt=nm;const xh=new gt,Rv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const o={enabled:!0,workingColorSpace:Au,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Kt&&(c.r=Da(c.r),c.g=Da(c.g),c.b=Da(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Kt&&(c.r=no(c.r),c.g=no(c.g),c.b=no(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===mr?Ru:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Au]:{primaries:t,whitePoint:s,transfer:Ru,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Kt,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const It=HE();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Fs;class GE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Fs===void 0&&(Fs=xl("canvas")),Fs.width=t.width,Fs.height=t.height;const c=Fs.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),s=Fs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=xl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Da(f[d]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VE=0;class Kp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Ml(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(Sh(c[d].image)):f.push(Sh(c[d]))}else f=Sh(c);s.url=f}return i||(t.images[this.uuid]=s),s}}function Sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let kE=0;const yh=new me;class zn extends Kr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Pi,c=Pi,f=In,d=Xr,h=Ii,m=bi,p=zn.DEFAULT_ANISOTROPY,g=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Ml(),this.name="",this.source=new Kp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Px)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ip:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case ap:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ip:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case ap:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Px;zn.DEFAULT_ANISOTROPY=1;const im=class im{constructor(t=0,i=0,s=0,c=1){this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,f;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],T=m[9],N=m[2],S=m[6],y=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-N)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+N)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const X=(p+1)/2,C=(M+1)/2,U=(y+1)/2,O=(g+x)/4,I=(_+N)/4,E=(T+S)/4;return X>C&&X>U?X<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(X),c=O/s,f=I/s):C>U?C<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(C),s=O/c,f=E/c):U<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(U),s=I/f,c=E/f),this.set(s,c,f,i),this}let P=Math.sqrt((S-T)*(S-T)+(_-N)*(_-N)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(S-T)/P,this.y=(_-N)/P,this.z=(x-g)/P,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this.z=zt(this.z,t.z,i.z),this.w=zt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this.z=zt(this.z,t,i),this.w=zt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};im.prototype.isVector4=!0;let un=im;class XE extends Kr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,t,i),this.scissorTest=!1,this.viewport=new un(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:s.depth},f=new zn(c),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new Kp(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends XE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Xx extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const wu=class wu{constructor(t,i,s,c,f,d,h,m,p,g,_,x,M,T,N,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,m,p,g,_,x,M,T,N,S)}set(t,i,s,c,f,d,h,m,p,g,_,x,M,T,N,S){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=c,y[1]=f,y[5]=d,y[9]=h,y[13]=m,y[2]=p,y[6]=g,y[10]=_,y[14]=x,y[3]=M,y[7]=T,y[11]=N,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,c=1/Bs.setFromMatrixColumn(t,0).length(),f=1/Bs.setFromMatrixColumn(t,1).length(),d=1/Bs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,f=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(c),p=Math.sin(c),g=Math.cos(f),_=Math.sin(f);if(t.order==="XYZ"){const x=d*g,M=d*_,T=h*g,N=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=x-N*p,i[9]=-h*m,i[2]=N-x*p,i[6]=T+M*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,T=p*g,N=p*_;i[0]=x+N*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=M*h-T,i[6]=N+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,T=p*g,N=p*_;i[0]=x-N*h,i[4]=-d*_,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*g,i[9]=N-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,M=d*_,T=h*g,N=h*_;i[0]=m*g,i[4]=T*p-M,i[8]=x*p+N,i[1]=m*_,i[5]=N*p+x,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,M=d*p,T=h*m,N=h*p;i[0]=m*g,i[4]=N-x*_,i[8]=T*_+M,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*_+T,i[10]=x-N*_}else if(t.order==="XZY"){const x=d*m,M=d*p,T=h*m,N=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+N,i[5]=d*g,i[9]=M*_-T,i[2]=T*_-M,i[6]=h*g,i[10]=N*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qE,t,YE)}lookAt(t,i,s){const c=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),cr.crossVectors(s,oi),cr.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),cr.crossVectors(s,oi)),cr.normalize(),Zc.crossVectors(oi,cr),c[0]=cr.x,c[4]=Zc.x,c[8]=oi.x,c[1]=cr.y,c[5]=Zc.y,c[9]=oi.y,c[2]=cr.z,c[6]=Zc.z,c[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],M=s[13],T=s[2],N=s[6],S=s[10],y=s[14],P=s[3],X=s[7],C=s[11],U=s[15],O=c[0],I=c[4],E=c[8],D=c[12],B=c[1],H=c[5],Q=c[9],j=c[13],Y=c[2],ee=c[6],G=c[10],V=c[14],re=c[3],ae=c[7],fe=c[11],_e=c[15];return f[0]=d*O+h*B+m*Y+p*re,f[4]=d*I+h*H+m*ee+p*ae,f[8]=d*E+h*Q+m*G+p*fe,f[12]=d*D+h*j+m*V+p*_e,f[1]=g*O+_*B+x*Y+M*re,f[5]=g*I+_*H+x*ee+M*ae,f[9]=g*E+_*Q+x*G+M*fe,f[13]=g*D+_*j+x*V+M*_e,f[2]=T*O+N*B+S*Y+y*re,f[6]=T*I+N*H+S*ee+y*ae,f[10]=T*E+N*Q+S*G+y*fe,f[14]=T*D+N*j+S*V+y*_e,f[3]=P*O+X*B+C*Y+U*re,f[7]=P*I+X*H+C*ee+U*ae,f[11]=P*E+X*Q+C*G+U*fe,f[15]=P*D+X*j+C*V+U*_e,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],T=t[3],N=t[7],S=t[11],y=t[15],P=m*M-p*x,X=h*M-p*_,C=h*x-m*_,U=d*M-p*g,O=d*x-m*g,I=d*_-h*g;return i*(N*P-S*X+y*C)-s*(T*P-S*U+y*O)+c*(T*X-N*U+y*I)-f*(T*C-N*O+S*I)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[1],d=t[5],h=t[9],m=t[2],p=t[6],g=t[10];return i*(d*g-h*p)-s*(f*g-h*m)+c*(f*p-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],T=t[12],N=t[13],S=t[14],y=t[15],P=i*h-s*d,X=i*m-c*d,C=i*p-f*d,U=s*m-c*h,O=s*p-f*h,I=c*p-f*m,E=g*N-_*T,D=g*S-x*T,B=g*y-M*T,H=_*S-x*N,Q=_*y-M*N,j=x*y-M*S,Y=P*j-X*Q+C*H+U*B-O*D+I*E;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/Y;return t[0]=(h*j-m*Q+p*H)*ee,t[1]=(c*Q-s*j-f*H)*ee,t[2]=(N*I-S*O+y*U)*ee,t[3]=(x*O-_*I-M*U)*ee,t[4]=(m*B-d*j-p*D)*ee,t[5]=(i*j-c*B+f*D)*ee,t[6]=(S*C-T*I-y*X)*ee,t[7]=(g*I-x*C+M*X)*ee,t[8]=(d*Q-h*B+p*E)*ee,t[9]=(s*B-i*Q-f*E)*ee,t[10]=(T*O-N*C+y*P)*ee,t[11]=(_*C-g*O-M*P)*ee,t[12]=(h*D-d*H-m*E)*ee,t[13]=(i*H-s*D+c*E)*ee,t[14]=(N*X-T*U-S*P)*ee,t[15]=(g*U-_*X+x*P)*ee,this}scale(t){const i=this.elements,s=t.x,c=t.y,f=t.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,d=t.x,h=t.y,m=t.z,p=f*d,g=f*h;return this.set(p*d+s,p*h-c*m,p*m+c*h,0,p*h+c*m,g*h+s,g*m-c*d,0,p*m-c*h,g*m+c*d,f*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,f,d){return this.set(1,s,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,p=f+f,g=d+d,_=h+h,x=f*p,M=f*g,T=f*_,N=d*g,S=d*_,y=h*_,P=m*p,X=m*g,C=m*_,U=s.x,O=s.y,I=s.z;return c[0]=(1-(N+y))*U,c[1]=(M+C)*U,c[2]=(T-X)*U,c[3]=0,c[4]=(M-C)*O,c[5]=(1-(x+y))*O,c[6]=(S+P)*O,c[7]=0,c[8]=(T+X)*I,c[9]=(S-P)*I,c[10]=(1-(x+N))*I,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Bs.set(c[0],c[1],c[2]).length();const h=Bs.set(c[4],c[5],c[6]).length(),m=Bs.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Di.copy(this);const p=1/d,g=1/h,_=1/m;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,i.setFromRotationMatrix(Di),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,c,f,d,h=sa,m=!1){const p=this.elements,g=2*f/(i-t),_=2*f/(s-c),x=(i+t)/(i-t),M=(s+c)/(s-c);let T,N;if(m)T=f/(d-f),N=d*f/(d-f);else if(h===sa)T=-(d+f)/(d-f),N=-2*d*f/(d-f);else if(h===Cu)T=-d/(d-f),N=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,c,f,d,h=sa,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-c),x=-(i+t)/(i-t),M=-(s+c)/(s-c);let T,N;if(m)T=1/(d-f),N=d/(d-f);else if(h===sa)T=-2/(d-f),N=-(d+f)/(d-f);else if(h===Cu)T=-1/(d-f),N=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};wu.prototype.isMatrix4=!0;let _n=wu;const Bs=new me,Di=new _n,qE=new me(0,0,0),YE=new me(1,1,1),cr=new me,Zc=new me,oi=new me,wv=new _n,Nv=new so;class jr{constructor(t=0,i=0,s=0,c=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],m=c[1],p=c[5],g=c[9],_=c[2],x=c[6],M=c[10];switch(i){case"XYZ":this._y=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(zt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-zt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(zt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-g,M),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return wv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Nv.setFromEuler(this),this.setFromQuaternion(Nv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class Wx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZE=0;const Dv=new me,Hs=new so,Ta=new _n,jc=new me,sl=new me,jE=new me,KE=new so,Uv=new me(1,0,0),Lv=new me(0,1,0),Ov=new me(0,0,1),Pv={type:"added"},QE={type:"removed"},Gs={type:"childadded",child:null},Mh={type:"childremoved",child:null};class ci extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new me,i=new jr,s=new so,c=new me(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new _n},normalMatrix:{value:new gt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,i){return Hs.setFromAxisAngle(t,i),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Uv,t)}rotateY(t){return this.rotateOnAxis(Lv,t)}rotateZ(t){return this.rotateOnAxis(Ov,t)}translateOnAxis(t,i){return Dv.copy(t).applyQuaternion(this.quaternion),this.position.add(Dv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Uv,t)}translateY(t){return this.translateOnAxis(Lv,t)}translateZ(t){return this.translateOnAxis(Ov,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?jc.copy(t):jc.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(sl,jc,this.up):Ta.lookAt(jc,sl,this.up),this.quaternion.setFromRotationMatrix(Ta),c&&(Ta.extractRotation(c.matrixWorld),Hs.setFromRotationMatrix(Ta),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pv),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QE),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pv),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,jE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,KE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*c,f[13]+=s-f[1]*i-f[5]*s-f[9]*c,f[14]+=c-f[2]*i-f[6]*s-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];f(t.shapes,_)}else f(t.shapes,m)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(t.materials,this.material[m]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];c.animations.push(f(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),_=d(t.shapes),x=d(t.skeletons),M=d(t.animations),T=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=c,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ci.DEFAULT_UP=new me(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kc extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JE={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const N of t.hand.values()){const S=i.getJointPose(N,s),y=this._getHandJoint(p,N);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(JE)))}return h!==null&&(h.visible=c!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Kc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function bh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class kt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,It.colorSpaceToWorking(this,i),this}setRGB(t,i,s,c=It.workingColorSpace){return this.r=t,this.g=i,this.b=s,It.colorSpaceToWorking(this,c),this}setHSL(t,i,s,c=It.workingColorSpace){if(t=BE(t,1),i=zt(i,0,1),s=zt(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=bh(d,f,t+1/3),this.g=bh(d,f,t),this.b=bh(d,f,t-1/3)}return It.colorSpaceToWorking(this,c),this}setStyle(t,i=Mi){function s(f){f!==void 0&&parseFloat(f)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:dt("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=qx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return It.workingToColorSpace(Pn.copy(this),t),Math.round(zt(Pn.r*255,0,255))*65536+Math.round(zt(Pn.g*255,0,255))*256+Math.round(zt(Pn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=It.workingColorSpace){It.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=g<=.5?_/(d+h):_/(2-d-h),d){case s:m=(c-f)/_+(c<f?6:0);break;case c:m=(f-s)/_+2;break;case f:m=(s-c)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=It.workingColorSpace){return It.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Mi){It.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,c=Pn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Qc);const s=_h(ur.h,Qc.h,i),c=_h(ur.s,Qc.s,i),f=_h(ur.l,Qc.l,i);return this.setHSL(s,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new kt;kt.NAMES=qx;class $E extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new me,Aa=new me,Th=new me,Ra=new me,Vs=new me,ks=new me,Iv=new me,Ah=new me,Rh=new me,Ch=new me,wh=new un,Nh=new un,Dh=new un;class Oi{constructor(t=new me,i=new me,s=new me){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),Ui.subVectors(t,i),c.cross(Ui);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,s,c,f){Ui.subVectors(c,i),Aa.subVectors(s,i),Th.subVectors(t,i);const d=Ui.dot(Ui),h=Ui.dot(Aa),m=Ui.dot(Th),p=Aa.dot(Aa),g=Aa.dot(Th),_=d*p-h*h;if(_===0)return f.set(0,0,0),null;const x=1/_,M=(p*m-h*g)*x,T=(d*g-h*m)*x;return f.set(1-M-T,T,M)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,i,s,c,f,d,h,m){return this.getBarycoord(t,i,s,c,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ra.x),m.addScaledVector(d,Ra.y),m.addScaledVector(h,Ra.z),m)}static getInterpolatedAttribute(t,i,s,c,f,d){return wh.setScalar(0),Nh.setScalar(0),Dh.setScalar(0),wh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(wh,f.x),d.addScaledVector(Nh,f.y),d.addScaledVector(Dh,f.z),d}static isFrontFacing(t,i,s,c){return Ui.subVectors(s,i),Aa.subVectors(t,i),Ui.cross(Aa).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ui.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,f){return Oi.getInterpolation(t,this.a,this.b,this.c,i,s,c,f)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,f=this.c;let d,h;Vs.subVectors(c,s),ks.subVectors(f,s),Ah.subVectors(t,s);const m=Vs.dot(Ah),p=ks.dot(Ah);if(m<=0&&p<=0)return i.copy(s);Rh.subVectors(t,c);const g=Vs.dot(Rh),_=ks.dot(Rh);if(g>=0&&_<=g)return i.copy(c);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(Vs,d);Ch.subVectors(t,f);const M=Vs.dot(Ch),T=ks.dot(Ch);if(T>=0&&M<=T)return i.copy(f);const N=M*p-m*T;if(N<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(ks,h);const S=g*T-M*_;if(S<=0&&_-g>=0&&M-T>=0)return Iv.subVectors(f,c),h=(_-g)/(_-g+(M-T)),i.copy(c).addScaledVector(Iv,h);const y=1/(S+N+x);return d=N*y,h=x*y,i.copy(s).addScaledVector(Vs,d).addScaledVector(ks,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class El{constructor(t=new me(1/0,1/0,1/0),i=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Li):Li.fromBufferAttribute(f,d),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jc.copy(s.boundingBox)),Jc.applyMatrix4(t.matrixWorld),this.union(Jc)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ol),$c.subVectors(this.max,ol),Xs.subVectors(t.a,ol),Ws.subVectors(t.b,ol),qs.subVectors(t.c,ol),fr.subVectors(Ws,Xs),dr.subVectors(qs,Ws),Br.subVectors(Xs,qs);let i=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Br.z,Br.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Br.z,0,-Br.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Br.y,Br.x,0];return!Uh(i,Xs,Ws,qs,$c)||(i=[1,0,0,0,1,0,0,0,1],!Uh(i,Xs,Ws,qs,$c))?!1:(eu.crossVectors(fr,dr),i=[eu.x,eu.y,eu.z],Uh(i,Xs,Ws,qs,$c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new me,new me,new me,new me,new me,new me,new me,new me],Li=new me,Jc=new El,Xs=new me,Ws=new me,qs=new me,fr=new me,dr=new me,Br=new me,ol=new me,$c=new me,eu=new me,Hr=new me;function Uh(o,t,i,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Hr.fromArray(o,f);const h=c.x*Math.abs(Hr.x)+c.y*Math.abs(Hr.y)+c.z*Math.abs(Hr.z),m=t.dot(Hr),p=i.dot(Hr),g=s.dot(Hr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const gn=new me,tu=new Xt;let e1=0;class Fi extends Kr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=OE,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)tu.fromBufferAttribute(this,i),tu.applyMatrix3(t),this.setXY(i,tu.x,tu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=rl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,f){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),c=jn(c,this.array),f=jn(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Yx extends Fi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Zx extends Fi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ua extends Fi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const t1=new El,ll=new me,Lh=new me;class Qp{constructor(t=new me,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):t1.setFromPoints(t).getCenter(s);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);const i=ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(ll,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(Lh)),this.expandByPoint(ll.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let n1=0;const yi=new _n,Oh=new ci,Ys=new me,li=new El,cl=new El,Tn=new me;class Oa extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(PE(t)?Zx:Yx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new gt().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ua(s,3))}else{const s=Math.min(t.length,i.count);for(let c=0;c<s;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new me,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];cl.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(li.min,cl.min),li.expandByPoint(Tn),Tn.addVectors(li.max,cl.max),li.expandByPoint(Tn)):(li.expandByPoint(cl.min),li.expandByPoint(cl.max))}li.getCenter(s);let c=0;for(let f=0,d=t.count;f<d;f++)Tn.fromBufferAttribute(t,f),c=Math.max(c,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),m&&(Ys.fromBufferAttribute(t,p),Tn.add(Ys)),c=Math.max(c,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Fi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let E=0;E<s.count;E++)h[E]=new me,m[E]=new me;const p=new me,g=new me,_=new me,x=new Xt,M=new Xt,T=new Xt,N=new me,S=new me;function y(E,D,B){p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,B),x.fromBufferAttribute(f,E),M.fromBufferAttribute(f,D),T.fromBufferAttribute(f,B),g.sub(p),_.sub(p),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(N.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(H),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(H),h[E].add(N),h[D].add(N),h[B].add(N),m[E].add(S),m[D].add(S),m[B].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let E=0,D=P.length;E<D;++E){const B=P[E],H=B.start,Q=B.count;for(let j=H,Y=H+Q;j<Y;j+=3)y(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const X=new me,C=new me,U=new me,O=new me;function I(E){U.fromBufferAttribute(c,E),O.copy(U);const D=h[E];X.copy(D),X.sub(U.multiplyScalar(U.dot(D))).normalize(),C.crossVectors(O,D);const H=C.dot(m[E])<0?-1:1;d.setXYZW(E,X.x,X.y,X.z,H)}for(let E=0,D=P.length;E<D;++E){const B=P[E],H=B.start,Q=B.count;for(let j=H,Y=H+Q;j<Y;j+=3)I(t.getX(j+0)),I(t.getX(j+1)),I(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const c=new me,f=new me,d=new me,h=new me,m=new me,p=new me,g=new me,_=new me;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),N=t.getX(x+1),S=t.getX(x+2);c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,N),d.fromBufferAttribute(i,S),g.subVectors(d,f),_.subVectors(c,f),g.cross(_),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,N),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)c.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,f),_.subVectors(c,f),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let M=0,T=0;for(let N=0,S=m.length;N<S;N++){h.isInterleavedBufferAttribute?M=m[N]*h.data.stride+h.offset:M=m[N]*g;for(let y=0;y<g;y++)x[T++]=p[M++]}return new Fi(x,g,_)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oa,s=this.index.array,c=this.attributes;for(const h in c){const m=c[h],p=t(m,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const c={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(c[m]=g,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const c=t.attributes;for(const p in c){const g=c[p];this.setAttribute(p,g.clone(i))}const f=t.morphAttributes;for(const p in f){const g=[],_=f[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new me,i1=new me,a1=new gt;class pr{constructor(t=new me(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=Ph.subVectors(s,i).cross(i1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const c=t.delta(Ph),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||a1.getNormalMatrix(t),c=this.coplanarPoint(Ph).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let r1=0;class Du extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=ml,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tx,this.blendDst=Ax,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mh,this.stencilZFail=mh,this.stencilZPass=mh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new pr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Xt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new me,Ih=new me,nu=new me,iu=new me;class s1{constructor(t=new me,i=new me(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=wa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){Ih.copy(t).add(i).multiplyScalar(.5),nu.copy(i).sub(t).normalize(),iu.copy(this.origin).sub(Ih);const f=t.distanceTo(i)*.5,d=-this.direction.dot(nu),h=iu.dot(this.direction),m=-iu.dot(nu),p=iu.lengthSq(),g=Math.abs(1-d*d);let _,x,M,T;if(g>0)if(_=d*m-h,x=d*h-m,T=f*g,_>=0)if(x>=-T)if(x<=T){const N=1/g;_*=N,x*=N,M=_*(_+d*x+2*h)+x*(d*_+x+2*m)+p}else x=f,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*m)+p;else x=-f,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-d*f+h)),x=_>0?-f:Math.min(Math.max(-f,-m),f),M=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-f,-m),f),M=x*(x+2*m)+p):(_=Math.max(0,-(d*f+h)),x=_>0?f:Math.min(Math.max(-f,-m),f),M=-_*_+x*(x+2*m)+p);else x=d>0?-f:f,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),c&&c.copy(Ih).addScaledVector(nu,x),M}intersectSphere(t,i){if(t.radius<0)return null;wa.subVectors(t.center,this.origin);const s=wa.dot(this.direction),c=wa.dot(wa)-s*s,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,f,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,c=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,c=(t.min.x-x.x)*p),g>=0?(f=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(f=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||h>c)||((h>s||s!==s)&&(s=h),(m<c||c!==c)&&(c=m),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,i,s,c,f){const d=this.origin,h=this.direction,m=h.x,p=h.y,g=h.z,_=t.x-d.x,x=t.y-d.y,M=t.z-d.z,T=i.x-d.x,N=i.y-d.y,S=i.z-d.z,y=s.x-d.x,P=s.y-d.y,X=s.z-d.z,C=Math.abs(m),U=Math.abs(p),O=Math.abs(g);let I,E,D,B,H,Q,j,Y,ee,G,V,re;if(C>=U&&C>=O?(D=m,Q=_,ee=T,re=y,m>=0?(I=p,E=g,B=x,H=M,j=N,Y=S,G=P,V=X):(I=g,E=p,B=M,H=x,j=S,Y=N,G=X,V=P)):U>=O?(D=p,Q=x,ee=N,re=P,p>=0?(I=g,E=m,B=M,H=_,j=S,Y=T,G=X,V=y):(I=m,E=g,B=_,H=M,j=T,Y=S,G=y,V=X)):(D=g,Q=M,ee=S,re=X,g>=0?(I=m,E=p,B=_,H=x,j=T,Y=N,G=y,V=P):(I=p,E=m,B=x,H=_,j=N,Y=T,G=P,V=y)),D===0)return null;const ae=I/D,fe=E/D,_e=1/D,ke=B-ae*Q,we=H-fe*Q,F=j-ae*ee,ue=Y-fe*ee,be=G-ae*re,K=V-fe*re,de=be*ue-K*F,Ae=ke*K-we*be,Ie=F*we-ue*ke;if(c){if(de<0||Ae<0||Ie<0)return null}else if((de<0||Ae<0||Ie<0)&&(de>0||Ae>0||Ie>0))return null;const xe=de+Ae+Ie;if(xe===0)return null;const De=_e*(de*Q+Ae*ee+Ie*re);return(xe>0?De<0:De>0)?null:this.at(De/xe,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jp extends Du{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=Rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zv=new _n,Gr=new s1,au=new Qp,Fv=new me,ru=new me,su=new me,ou=new me,zh=new me,lu=new me,Bv=new me,cu=new me;class Bi extends ci{constructor(t=new Oa,i=new Jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){lu.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const g=h[m],_=f[m];g!==0&&(zh.fromBufferAttribute(_,t),d?lu.addScaledVector(zh,g):lu.addScaledVector(zh.sub(i),g))}i.add(lu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),au.copy(s.boundingSphere),au.applyMatrix4(f),Gr.copy(t.ray).recast(t.near),!(au.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(au,Fv)===null||Gr.origin.distanceToSquared(Fv)>(t.far-t.near)**2))&&(zv.copy(f).invert(),Gr.copy(t.ray).applyMatrix4(zv),!(s.boundingBox!==null&&Gr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Gr)))}_computeIntersections(t,i,s){let c;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,g=f.attributes.uv1,_=f.attributes.normal,x=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,N=x.length;T<N;T++){const S=x[T],y=d[S.materialIndex],P=Math.max(S.start,M.start),X=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let C=P,U=X;C<U;C+=3){const O=h.getX(C),I=h.getX(C+1),E=h.getX(C+2);c=uu(this,y,t,s,p,g,_,O,I,E),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=S.materialIndex,i.push(c))}}else{const T=Math.max(0,M.start),N=Math.min(h.count,M.start+M.count);for(let S=T,y=N;S<y;S+=3){const P=h.getX(S),X=h.getX(S+1),C=h.getX(S+2);c=uu(this,d,t,s,p,g,_,P,X,C),c&&(c.faceIndex=Math.floor(S/3),i.push(c))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,N=x.length;T<N;T++){const S=x[T],y=d[S.materialIndex],P=Math.max(S.start,M.start),X=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let C=P,U=X;C<U;C+=3){const O=C,I=C+1,E=C+2;c=uu(this,y,t,s,p,g,_,O,I,E),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=S.materialIndex,i.push(c))}}else{const T=Math.max(0,M.start),N=Math.min(m.count,M.start+M.count);for(let S=T,y=N;S<y;S+=3){const P=S,X=S+1,C=S+2;c=uu(this,d,t,s,p,g,_,P,X,C),c&&(c.faceIndex=Math.floor(S/3),i.push(c))}}}}function o1(o,t,i,s,c,f,d,h){let m;if(t.side===Kn?m=s.intersectTriangle(d,f,c,!0,h):m=s.intersectTriangle(c,f,d,t.side===qr,h),m===null)return null;cu.copy(h),cu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cu);return p<i.near||p>i.far?null:{distance:p,point:cu.clone(),object:o}}function uu(o,t,i,s,c,f,d,h,m,p){o.getVertexPosition(h,ru),o.getVertexPosition(m,su),o.getVertexPosition(p,ou);const g=o1(o,t,i,s,ru,su,ou,Bv);if(g){const _=new me;Oi.getBarycoord(Bv,ru,su,ou,_),c&&(g.uv=Oi.getInterpolatedAttribute(c,h,m,p,_,new Xt)),f&&(g.uv1=Oi.getInterpolatedAttribute(f,h,m,p,_,new Xt)),d&&(g.normal=Oi.getInterpolatedAttribute(d,h,m,p,_,new me),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new me,materialIndex:0};Oi.getNormal(ru,su,ou,x.normal),g.face=x,g.barycoord=_}return g}class l1 extends zn{constructor(t=null,i=1,s=1,c,f,d,h,m,p=Un,g=Un,_,x){super(null,d,h,m,p,g,c,f,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vr=new Qp,c1=new Xt(.5,.5),fu=new me;class jx{constructor(t=new pr,i=new pr,s=new pr,c=new pr,f=new pr,d=new pr){this.planes=[t,i,s,c,f,d]}set(t,i,s,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],m=f[2],p=f[3],g=f[4],_=f[5],x=f[6],M=f[7],T=f[8],N=f[9],S=f[10],y=f[11],P=f[12],X=f[13],C=f[14],U=f[15];if(c[0].setComponents(p-d,M-g,y-T,U-P).normalize(),c[1].setComponents(p+d,M+g,y+T,U+P).normalize(),c[2].setComponents(p+h,M+_,y+N,U+X).normalize(),c[3].setComponents(p-h,M-_,y-N,U-X).normalize(),s)c[4].setComponents(m,x,S,C).normalize(),c[5].setComponents(p-m,M-x,y-S,U-C).normalize();else if(c[4].setComponents(p-m,M-x,y-S,U-C).normalize(),i===sa)c[5].setComponents(p+m,M+x,y+S,U+C).normalize();else if(i===Cu)c[5].setComponents(m,x,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){Vr.center.set(0,0,0);const i=c1.distanceTo(t.center);return Vr.radius=.7071067811865476+i,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(fu.x=c.normal.x>0?t.max.x:t.min.x,fu.y=c.normal.y>0?t.max.y:t.min.y,fu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(fu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kx extends zn{constructor(t=[],i=Yr,s,c,f,d,h,m,p,g){super(t,i,s,c,f,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sl extends zn{constructor(t,i,s=la,c,f,d,h=Un,m=Un,p,g=La,_=1){if(g!==La&&g!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,c,f,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class u1 extends Sl{constructor(t,i=la,s=Yr,c,f,d=Un,h=Un,m,p=La){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,c,f,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qx extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bl extends Oa{constructor(t=1,i=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,s,i,t,d,f,0),T("z","y","x",1,-1,s,i,-t,d,f,1),T("x","z","y",1,1,t,s,i,c,d,2),T("x","z","y",1,-1,t,s,-i,c,d,3),T("x","y","z",1,-1,t,i,s,c,f,4),T("x","y","z",-1,-1,t,i,-s,c,f,5),this.setIndex(m),this.setAttribute("position",new Ua(p,3)),this.setAttribute("normal",new Ua(g,3)),this.setAttribute("uv",new Ua(_,2));function T(N,S,y,P,X,C,U,O,I,E,D){const B=C/I,H=U/E,Q=C/2,j=U/2,Y=O/2,ee=I+1,G=E+1;let V=0,re=0;const ae=new me;for(let fe=0;fe<G;fe++){const _e=fe*H-j;for(let ke=0;ke<ee;ke++){const we=ke*B-Q;ae[N]=we*P,ae[S]=_e*X,ae[y]=Y,p.push(ae.x,ae.y,ae.z),ae[N]=0,ae[S]=0,ae[y]=O>0?1:-1,g.push(ae.x,ae.y,ae.z),_.push(ke/I),_.push(1-fe/E),V+=1}}for(let fe=0;fe<E;fe++)for(let _e=0;_e<I;_e++){const ke=x+_e+ee*fe,we=x+_e+ee*(fe+1),F=x+(_e+1)+ee*(fe+1),ue=x+(_e+1)+ee*fe;m.push(ke,we,ue),m.push(we,F,ue),re+=6}h.addGroup(M,re,D),M+=re,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ao extends Oa{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(s),m=Math.floor(c),p=h+1,g=m+1,_=t/h,x=i/m,M=[],T=[],N=[],S=[];for(let y=0;y<g;y++){const P=y*x-d;for(let X=0;X<p;X++){const C=X*_-f;T.push(C,-P,0),N.push(0,0,1),S.push(X/h),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<h;P++){const X=P+p*y,C=P+p*(y+1),U=P+1+p*(y+1),O=P+1+p*y;M.push(X,C,O),M.push(C,U,O)}this.setIndex(M),this.setAttribute("position",new Ua(T,3)),this.setAttribute("normal",new Ua(N,3)),this.setAttribute("uv",new Ua(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.width,t.height,t.widthSegments,t.heightSegments)}}function ro(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const c=o[i][s];if(Hv(c))c.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone();else if(Array.isArray(c))if(Hv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][s]=f}else t[i][s]=c.slice();else t[i][s]=c}}return t}function kn(o){const t={};for(let i=0;i<o.length;i++){const s=ro(o[i]);for(const c in s)t[c]=s[c]}return t}function Hv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function f1(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Jx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:It.workingColorSpace}const d1={clone:ro,merge:kn};var h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Du{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=f1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const c=t.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new kt().setHex(c.value);break;case"v2":this.uniforms[s].value=new Xt().fromArray(c.value);break;case"v3":this.uniforms[s].value=new me().fromArray(c.value);break;case"v4":this.uniforms[s].value=new un().fromArray(c.value);break;case"m3":this.uniforms[s].value=new gt().fromArray(c.value);break;case"m4":this.uniforms[s].value=new _n().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class m1 extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class g1 extends Du{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _1 extends Du{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Gv(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Gv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Gv(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class v1{constructor(t,i,s){const c=this;let f=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){h++,f===!1&&c.onStart!==void 0&&c.onStart(g,d,h),f=!0},this.itemEnd=function(g){d++,c.onProgress!==void 0&&c.onProgress(g,d,h),d===h&&(f=!1,c.onLoad!==void 0&&c.onLoad())},this.itemError=function(g){c.onError!==void 0&&c.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const M=p[_],T=p[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const x1=new v1;class $p{constructor(t){this.manager=t!==void 0?t:x1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(c,f){s.load(t,c,i,f)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}$p.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zs=new WeakMap;class S1 extends $p{constructor(t){super(t)}load(t,i,s,c){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const f=this,d=Fh.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(t),setTimeout(function(){i&&i(d),f.manager.itemEnd(t)},0);else{let _=Zs.get(d);_===void 0&&(_=[],Zs.set(d,_)),_.push({onLoad:i,onError:c})}return d}const h=xl("img");function m(){g(),i&&i(this);const _=Zs.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onLoad&&M.onLoad(this)}Zs.delete(this),f.manager.itemEnd(t)}function p(_){g(),c&&c(_),Fh.remove(`image:${t}`);const x=Zs.get(this)||[];for(let M=0;M<x.length;M++){const T=x[M];T.onError&&T.onError(_)}Zs.delete(this),f.manager.itemError(t),f.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Fh.add(`image:${t}`,h),f.manager.itemStart(t),h.src=t,h}}class y1 extends $p{constructor(t){super(t)}load(t,i,s,c){const f=new zn,d=new S1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},s,c),f}}const du=new me,hu=new so,ta=new me;class $x extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(du,hu,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(du,hu,ta.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(du,hu,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(du,hu,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new me,Vv=new Xt,kv=new Xt;class Ei extends $x{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,i){return this.getViewBounds(t,Vv,kv),i.subVectors(kv,Vv)}setViewOffset(t,i,s,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(gh*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*c/m,i-=d.offsetY*s/p,c*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class eS extends $x{constructor(t=-1,i=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-t,d=s+t,h=c+i,m=c-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const js=-90,Ks=1;class M1 extends ci{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Ei(js,Ks,t,i);c.layers=this.layers,this.add(c);const f=new Ei(js,Ks,t,i);f.layers=this.layers,this.add(f);const d=new Ei(js,Ks,t,i);d.layers=this.layers,this.add(d);const h=new Ei(js,Ks,t,i);h.layers=this.layers,this.add(h);const m=new Ei(js,Ks,t,i);m.layers=this.layers,this.add(m);const p=new Ei(js,Ks,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,f,d,h,m]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,c),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,c),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,c),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,c),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,c),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,c),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class E1 extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class b1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const am=class am{constructor(t,i,s,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=c,this}};am.prototype.isMatrix2=!0;let Xv=am;function Wv(o,t,i,s){const c=T1(s);switch(i){case Hx:return o*t;case Vx:return o*t/c.components*c.byteLength;case Wp:return o*t/c.components*c.byteLength;case Zr:return o*t*2/c.components*c.byteLength;case qp:return o*t*2/c.components*c.byteLength;case Gx:return o*t*3/c.components*c.byteLength;case Ii:return o*t*4/c.components*c.byteLength;case Yp:return o*t*4/c.components*c.byteLength;case vu:case xu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Su:case yu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sp:case lp:return Math.max(o,16)*Math.max(t,8)/4;case rp:case op:return Math.max(o,8)*Math.max(t,8)/2;case cp:case up:case dp:case hp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case fp:case bu:case pp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case mp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case vp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case xp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case yp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case bp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Cp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case wp:case Np:case Dp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Up:case Lp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Tu:case Op:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function T1(o){switch(o){case bi:case Ix:return{byteLength:1,components:1};case _l:case zx:case ca:return{byteLength:2,components:1};case kp:case Xp:return{byteLength:2,components:4};case la:case Vp:case ra:return{byteLength:4,components:1};case Fx:case Bx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tS(){let o=null,t=!1,i=null,s=null;function c(f,d){s=o.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function A1(o){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],N=_[M];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++x,_[x]=N)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const N=_[M];o.bufferSubData(p,N.start*g.BYTES_PER_ELEMENT,g,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:c,remove:f,update:d}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C1=`#ifdef USE_ALPHAHASH
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
#endif`,w1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L1=`#ifdef USE_AOMAP
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
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
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
#endif`,I1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H1=`#ifdef USE_IRIDESCENCE
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
#endif`,G1=`#ifdef USE_BUMPMAP
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K1=`#define PI 3.141592653589793
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
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J1=`vec3 transformedNormal = objectNormal;
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
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rb=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
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
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
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
#endif`,Tb=`uniform sampler2D dfgLUT;
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
}`,Ab=`
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zb=`#if defined( USE_POINTS_UV )
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
#endif`,Fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dT=`float getShadowMask() {
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
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
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
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,_T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,MT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
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
}`,OT=`#if DEPTH_PACKING == 3200
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
}`,PT=`#define DISTANCE
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
}`,IT=`#define DISTANCE
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
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
}`,HT=`uniform vec3 diffuse;
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
}`,GT=`#include <common>
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
}`,VT=`uniform vec3 diffuse;
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
}`,kT=`#define LAMBERT
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
}`,XT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
}`,qT=`#define MATCAP
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
}`,YT=`#define NORMAL
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
}`,ZT=`#define NORMAL
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
}`,jT=`#define PHONG
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
}`,KT=`#define PHONG
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
}`,QT=`#define STANDARD
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
}`,JT=`#define STANDARD
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
}`,$T=`#define TOON
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
}`,eA=`#define TOON
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
}`,tA=`uniform float size;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 color;
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
}`,rA=`uniform float rotation;
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
}`,sA=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:R1,alphahash_pars_fragment:C1,alphamap_fragment:w1,alphamap_pars_fragment:N1,alphatest_fragment:D1,alphatest_pars_fragment:U1,aomap_fragment:L1,aomap_pars_fragment:O1,batching_pars_vertex:P1,batching_vertex:I1,begin_vertex:z1,beginnormal_vertex:F1,bsdfs:B1,iridescence_fragment:H1,bumpmap_pars_fragment:G1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:k1,clipping_planes_pars_vertex:X1,clipping_planes_vertex:W1,color_fragment:q1,color_pars_fragment:Y1,color_pars_vertex:Z1,color_vertex:j1,common:K1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:J1,displacementmap_pars_vertex:$1,displacementmap_vertex:eb,emissivemap_fragment:tb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:ab,envmap_fragment:rb,envmap_common_pars_fragment:sb,envmap_pars_fragment:ob,envmap_pars_vertex:lb,envmap_physical_pars_fragment:xb,envmap_vertex:cb,fog_vertex:ub,fog_pars_vertex:fb,fog_fragment:db,fog_pars_fragment:hb,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:_b,lights_pars_begin:vb,lights_toon_fragment:Sb,lights_toon_pars_fragment:yb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Eb,lights_physical_fragment:bb,lights_physical_pars_fragment:Tb,lights_fragment_begin:Ab,lights_fragment_maps:Rb,lights_fragment_end:Cb,lightprobes_pars_fragment:wb,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Lb,map_fragment:Ob,map_pars_fragment:Pb,map_particle_fragment:Ib,map_particle_pars_fragment:zb,metalnessmap_fragment:Fb,metalnessmap_pars_fragment:Bb,morphinstance_vertex:Hb,morphcolor_vertex:Gb,morphnormal_vertex:Vb,morphtarget_pars_vertex:kb,morphtarget_vertex:Xb,normal_fragment_begin:Wb,normal_fragment_maps:qb,normal_pars_fragment:Yb,normal_pars_vertex:Zb,normal_vertex:jb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:eT,opaque_fragment:tT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:aT,dithering_fragment:rT,dithering_pars_fragment:sT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:fT,shadowmask_pars_fragment:dT,skinbase_vertex:hT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:vT,tonemapping_fragment:xT,tonemapping_pars_fragment:ST,transmission_fragment:yT,transmission_pars_fragment:MT,uv_pars_fragment:ET,uv_pars_vertex:bT,uv_vertex:TT,worldpos_vertex:AT,background_vert:RT,background_frag:CT,backgroundCube_vert:wT,backgroundCube_frag:NT,cube_vert:DT,cube_frag:UT,depth_vert:LT,depth_frag:OT,distance_vert:PT,distance_frag:IT,equirect_vert:zT,equirect_frag:FT,linedashed_vert:BT,linedashed_frag:HT,meshbasic_vert:GT,meshbasic_frag:VT,meshlambert_vert:kT,meshlambert_frag:XT,meshmatcap_vert:WT,meshmatcap_frag:qT,meshnormal_vert:YT,meshnormal_frag:ZT,meshphong_vert:jT,meshphong_frag:KT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:$T,meshtoon_frag:eA,points_vert:tA,points_frag:nA,shadow_vert:iA,shadow_frag:aA,sprite_vert:rA,sprite_frag:sA},Ye={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new me},probesMax:{value:new me},probesResolution:{value:new me}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ia={basic:{uniforms:kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:kn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:kn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new kt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:kn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:kn([Ye.points,Ye.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:kn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:kn([Ye.common,Ye.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:kn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:kn([Ye.sprite,Ye.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:kn([Ye.common,Ye.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:kn([Ye.lights,Ye.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};ia.physical={uniforms:kn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const pu={r:0,b:0,g:0},oA=new _n,nS=new gt;nS.set(-1,0,0,0,1,0,0,0,1);function lA(o,t,i,s,c,f){const d=new kt(0);let h=c===!0?0:1,m,p,g=null,_=0,x=null;function M(P){let X=P.isScene===!0?P.background:null;if(X&&X.isTexture){const C=P.backgroundBlurriness>0;X=t.get(X,C)}return X}function T(P){let X=!1;const C=M(P);C===null?S(d,h):C&&C.isColor&&(S(C,1),X=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||X)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(P,X){const C=M(X);C&&(C.isCubeTexture||C.mapping===Nu)?(p===void 0&&(p=new Bi(new bl(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ro(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(oA.makeRotationFromEuler(X.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(nS),p.material.toneMapped=It.getTransfer(C.colorSpace)!==Kt,(g!==C||_!==C.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,x=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Bi(new ao(2,2),new Hi({name:"BackgroundMaterial",uniforms:ro(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,m.material.toneMapped=It.getTransfer(C.colorSpace)!==Kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,x=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function S(P,X){P.getRGB(pu,Jx(o)),i.buffers.color.setClear(pu.r,pu.g,pu.b,X,f)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,X=1){d.set(P),h=X,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,S(d,h)},render:T,addToRenderList:N,dispose:y}}function cA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=x(null);let f=c,d=!1;function h(H,Q,j,Y,ee){let G=!1;const V=_(H,Y,j,Q);f!==V&&(f=V,p(f.object)),G=M(H,Y,j,ee),G&&T(H,Y,j,ee),ee!==null&&t.update(ee,o.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,C(H,Q,j,Y),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function m(){return o.createVertexArray()}function p(H){return o.bindVertexArray(H)}function g(H){return o.deleteVertexArray(H)}function _(H,Q,j,Y){const ee=Y.wireframe===!0;let G=s[Q.id];G===void 0&&(G={},s[Q.id]=G);const V=H.isInstancedMesh===!0?H.id:0;let re=G[V];re===void 0&&(re={},G[V]=re);let ae=re[j.id];ae===void 0&&(ae={},re[j.id]=ae);let fe=ae[ee];return fe===void 0&&(fe=x(m()),ae[ee]=fe),fe}function x(H){const Q=[],j=[],Y=[];for(let ee=0;ee<i;ee++)Q[ee]=0,j[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:j,attributeDivisors:Y,object:H,attributes:{},index:null}}function M(H,Q,j,Y){const ee=f.attributes,G=Q.attributes;let V=0;const re=j.getAttributes();for(const ae in re)if(re[ae].location>=0){const _e=ee[ae];let ke=G[ae];if(ke===void 0&&(ae==="instanceMatrix"&&H.instanceMatrix&&(ke=H.instanceMatrix),ae==="instanceColor"&&H.instanceColor&&(ke=H.instanceColor)),_e===void 0||_e.attribute!==ke||ke&&_e.data!==ke.data)return!0;V++}return f.attributesNum!==V||f.index!==Y}function T(H,Q,j,Y){const ee={},G=Q.attributes;let V=0;const re=j.getAttributes();for(const ae in re)if(re[ae].location>=0){let _e=G[ae];_e===void 0&&(ae==="instanceMatrix"&&H.instanceMatrix&&(_e=H.instanceMatrix),ae==="instanceColor"&&H.instanceColor&&(_e=H.instanceColor));const ke={};ke.attribute=_e,_e&&_e.data&&(ke.data=_e.data),ee[ae]=ke,V++}f.attributes=ee,f.attributesNum=V,f.index=Y}function N(){const H=f.newAttributes;for(let Q=0,j=H.length;Q<j;Q++)H[Q]=0}function S(H){y(H,0)}function y(H,Q){const j=f.newAttributes,Y=f.enabledAttributes,ee=f.attributeDivisors;j[H]=1,Y[H]===0&&(o.enableVertexAttribArray(H),Y[H]=1),ee[H]!==Q&&(o.vertexAttribDivisor(H,Q),ee[H]=Q)}function P(){const H=f.newAttributes,Q=f.enabledAttributes;for(let j=0,Y=Q.length;j<Y;j++)Q[j]!==H[j]&&(o.disableVertexAttribArray(j),Q[j]=0)}function X(H,Q,j,Y,ee,G,V){V===!0?o.vertexAttribIPointer(H,Q,j,ee,G):o.vertexAttribPointer(H,Q,j,Y,ee,G)}function C(H,Q,j,Y){N();const ee=Y.attributes,G=j.getAttributes(),V=Q.defaultAttributeValues;for(const re in G){const ae=G[re];if(ae.location>=0){let fe=ee[re];if(fe===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(fe=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(fe=H.instanceColor)),fe!==void 0){const _e=fe.normalized,ke=fe.itemSize,we=t.get(fe);if(we===void 0)continue;const F=we.buffer,ue=we.type,be=we.bytesPerElement,K=ue===o.INT||ue===o.UNSIGNED_INT||fe.gpuType===Vp;if(fe.isInterleavedBufferAttribute){const de=fe.data,Ae=de.stride,Ie=fe.offset;if(de.isInstancedInterleavedBuffer){for(let xe=0;xe<ae.locationSize;xe++)y(ae.location+xe,de.meshPerAttribute);H.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<ae.locationSize;xe++)S(ae.location+xe);o.bindBuffer(o.ARRAY_BUFFER,F);for(let xe=0;xe<ae.locationSize;xe++)X(ae.location+xe,ke/ae.locationSize,ue,_e,Ae*be,(Ie+ke/ae.locationSize*xe)*be,K)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<ae.locationSize;de++)y(ae.location+de,fe.meshPerAttribute);H.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<ae.locationSize;de++)S(ae.location+de);o.bindBuffer(o.ARRAY_BUFFER,F);for(let de=0;de<ae.locationSize;de++)X(ae.location+de,ke/ae.locationSize,ue,_e,ke*be,ke/ae.locationSize*de*be,K)}}else if(V!==void 0){const _e=V[re];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(ae.location,_e);break;case 3:o.vertexAttrib3fv(ae.location,_e);break;case 4:o.vertexAttrib4fv(ae.location,_e);break;default:o.vertexAttrib1fv(ae.location,_e)}}}}P()}function U(){D();for(const H in s){const Q=s[H];for(const j in Q){const Y=Q[j];for(const ee in Y){const G=Y[ee];for(const V in G)g(G[V].object),delete G[V];delete Y[ee]}}delete s[H]}}function O(H){if(s[H.id]===void 0)return;const Q=s[H.id];for(const j in Q){const Y=Q[j];for(const ee in Y){const G=Y[ee];for(const V in G)g(G[V].object),delete G[V];delete Y[ee]}}delete s[H.id]}function I(H){for(const Q in s){const j=s[Q];for(const Y in j){const ee=j[Y];if(ee[H.id]===void 0)continue;const G=ee[H.id];for(const V in G)g(G[V].object),delete G[V];delete ee[H.id]}}}function E(H){for(const Q in s){const j=s[Q],Y=H.isInstancedMesh===!0?H.id:0,ee=j[Y];if(ee!==void 0){for(const G in ee){const V=ee[G];for(const re in V)g(V[re].object),delete V[re];delete ee[G]}delete j[Y],Object.keys(j).length===0&&delete s[Q]}}}function D(){B(),d=!0,f!==c&&(f=c,p(f.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:D,resetDefaultState:B,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:N,enableAttribute:S,disableUnusedAttributes:P}}function uA(o,t,i){let s;function c(m){s=m}function f(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,g){g!==0&&(o.drawArraysInstanced(s,m,p,g),i.update(p,s,g))}function h(m,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,g);let x=0;for(let M=0;M<g;M++)x+=p[M];i.update(x,s,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function fA(o,t,i,s){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(I){return!(I!==Ii&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const E=I===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==bi&&I!==ra&&!E&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(dt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),X=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:X,maxFragmentUniforms:C,maxSamples:U,samples:O}}function dA(o){const t=this;let i=null,s=0,c=!1,f=!1;const d=new pr,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||c;return c=x,s=_.length,M},this.beginShadows=function(){f=!0,g(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,N=_.clipIntersection,S=_.clipShadows,y=o.get(_);if(!c||T===null||T.length===0||f&&!S)f?g(null):p();else{const P=f?0:s,X=P*4;let C=y.clippingState||null;m.value=C,C=g(T,x,X,M);for(let U=0;U!==X;++U)C[U]=i[U];y.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,T){const N=_!==null?_.length:0;let S=null;if(N!==0){if(S=m.value,T!==!0||S===null){const y=M+N*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let X=0,C=M;X!==N;++X,C+=4)d.copy(_[X]).applyMatrix4(P,h),d.normal.toArray(S,C),S[C+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,S}}const $s=4,hA=6,pA=20,mA=256,ul=new eS,qv=new kt;let Bh=null,Hh=0,Gh=0,Vh=!1;const gA=new me,kr=new me;class Yv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,c=100,f={}){const{size:d=256,position:h=gA}=f;Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,c,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,Hh,Gh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Yr||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ca,format:Ii,colorSpace:Au,depthBuffer:!1},c=Zv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_A(f)),this._blurMaterial=xA(f,t,i),this._ggxMaterial=vA(f,t,i)}return c}_compileMaterial(t){const i=new Bi(new Oa,t);this._renderer.compile(i,ul)}_sceneToCubeUV(t,i,s,c,f){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(qv),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(c),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new bl,new Jp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,S=N.material;let y=!1;const P=t.background;P?P.isColor&&(S.color.copy(P),t.background=null,y=!0):(S.color.copy(qv),y=!0);for(let X=0;X<6;X++){const C=X%3;C===0?(m.up.set(0,p[X],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+g[X],f.y,f.z)):C===1?(m.up.set(0,0,p[X]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+g[X],f.z)):(m.up.set(0,p[X],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+g[X]));const U=this._cubeSize;Qs(c,C*U,X>2?U:0,U,U),_.setRenderTarget(c),y&&_.render(N,m),_.render(t,m)}_.toneMapping=M,_.autoClear=x,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===Yr||t.mapping===io;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jv());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const m=this._cubeSize;Qs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ul)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=p*1.25,M=_*x,{_lodMax:T}=this,N=this._sizeLods[s],S=3*N*(s>T-$s?s-T+$s:0),y=4*(this._cubeSize-N);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Qs(f,S,y,3*N,2*N),c.setRenderTarget(f),c.render(h,ul),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=T-s,Qs(t,S,y,3*N,2*N),c.setRenderTarget(t),c.render(h,ul)}_blur(t,i,s,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,s,d),this._blurPass(f,t,s,s,d)}_blurPass(t,i,s,c,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[c];m.material=h;const p=h.uniforms;p.envMap.value=t.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const g=this._sizeLods[c],_=3*g*(c>this._lodMax-$s?c-this._lodMax+$s:0),x=4*(this._cubeSize-g);Qs(i,_,x,3*g,2*g),d.setRenderTarget(i),d.render(m,ul)}}function _A(o){const t=[],i=[];let s=o;const c=o-$s+1+hA;for(let f=0;f<c;f++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),m=-h,p=1+h,g=[m,m,p,m,p,p,m,m,p,p,m,p],_=6,x=6,M=3,T=new Float32Array(M*x*_),N=new Float32Array(M*x*_);for(let y=0;y<_;y++){const P=y%3*2/3-1,X=y>2?0:-1,C=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];T.set(C,M*x*y);for(let U=0;U<x;U++){const O=g[U*2]*2-1,I=g[U*2+1]*2-1;y===0?kr.set(1,I,O):y===1?kr.set(-O,1,-I):y===2?kr.set(-O,I,1):y===3?kr.set(-1,I,-O):y===4?kr.set(-O,-1,I):kr.set(O,I,-1),kr.toArray(N,(y*x+U)*M)}}const S=new Oa;S.setAttribute("position",new Fi(T,M)),S.setAttribute("outputDirection",new Fi(N,M)),i.push(new Bi(S,null)),s>$s&&s--}return{lodMeshes:i,sizeLods:t}}function Zv(o,t,i){const s=new zi(o,t,i);return s.texture.mapping=Nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qs(o,t,i,s,c){o.viewport.set(t,i,s,c),o.scissor.set(t,i,s,c)}function vA(o,t,i){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function xA(o,t,i){return new Hi({name:"SphericalGaussianBlur",defines:{SAMPLES:pA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function jv(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Kv(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class iS extends zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new Kx(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new bl(5,5,5),f=new Hi({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Na});f.uniforms.tEquirect.value=i;const d=new Bi(c,f),h=i.minFilter;return i.minFilter===Xr&&(i.minFilter=In),new M1(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,c);t.setRenderTarget(f)}}function SA(o){let t=new WeakMap,i=new WeakMap,s=null;function c(x,M=!1){return x==null?null:M?d(x):f(x)}function f(x){if(x&&x.isTexture){const M=x.mapping;if(M===dh||M===hh)if(t.has(x)){const T=t.get(x).texture;return h(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const N=new iS(T.height);return N.fromEquirectangularTexture(o,x),t.set(x,N),x.addEventListener("dispose",p),h(N.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const M=x.mapping,T=M===dh||M===hh,N=M===Yr||M===io;if(T||N){let S=i.get(x);const y=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new Yv(o)),S=T?s.fromEquirectangular(x,S):s.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),S.texture;if(S!==void 0)return S.texture;{const P=x.image;return T&&P&&P.height>0||N&&P&&m(P)?(s===null&&(s=new Yv(o)),S=T?s.fromEquirectangular(x):s.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),x.addEventListener("dispose",g),S.texture):null}}}return x}function h(x,M){return M===dh?x.mapping=Yr:M===hh&&(x.mapping=io),x}function m(x){let M=0;const T=6;for(let N=0;N<T;N++)x[N]!==void 0&&M++;return M===T}function p(x){const M=x.target;M.removeEventListener("dispose",p);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function g(x){const M=x.target;M.removeEventListener("dispose",g);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:_}}function yA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const c=o.getExtension(s);return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&to("WebGLRenderer: "+s+" extension not supported."),c}}}function MA(o,t,i,s){const c={},f=new WeakMap;function d(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete c[x.id];const M=f.get(x);M&&(t.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return c[x.id]===!0||(x.addEventListener("dispose",d),c[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,T=_.attributes.position;let N=0;if(T===void 0)return;if(M!==null){const P=M.array;N=M.version;for(let X=0,C=P.length;X<C;X+=3){const U=P[X+0],O=P[X+1],I=P[X+2];x.push(U,O,O,I,I,U)}}else{const P=T.array;N=T.version;for(let X=0,C=P.length/3-1;X<C;X+=3){const U=X+0,O=X+1,I=X+2;x.push(U,O,O,I,I,U)}}const S=new(T.count>=65535?Zx:Yx)(x,1);S.version=N;const y=f.get(_);y&&t.remove(y),f.set(_,S)}function g(_){const x=f.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return f.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function EA(o,t,i){let s;function c(_){s=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function m(_,x){o.drawElements(s,x,f,_*d),i.update(x,s,1)}function p(_,x,M){M!==0&&(o.drawElementsInstanced(s,x,f,_*d,M),i.update(x,s,M))}function g(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,f,_,0,M);let N=0;for(let S=0;S<M;S++)N+=x[S];i.update(N,s,1)}this.setMode=c,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function bA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function TA(o,t,i){const s=new WeakMap,c=new un;function f(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let B=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var M=B;x!==void 0&&x.texture.dispose();const T=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),N===!0&&(C=2),S===!0&&(C=3);let U=h.attributes.position.count*C,O=1;U>t.maxTextureSize&&(O=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const I=new Float32Array(U*O*4*_),E=new Xx(I,U,O,_);E.type=ra,E.needsUpdate=!0;const D=C*4;for(let H=0;H<_;H++){const Q=y[H],j=P[H],Y=X[H],ee=U*O*4*H;for(let G=0;G<Q.count;G++){const V=G*D;T===!0&&(c.fromBufferAttribute(Q,G),I[ee+V+0]=c.x,I[ee+V+1]=c.y,I[ee+V+2]=c.z,I[ee+V+3]=0),N===!0&&(c.fromBufferAttribute(j,G),I[ee+V+4]=c.x,I[ee+V+5]=c.y,I[ee+V+6]=c.z,I[ee+V+7]=0),S===!0&&(c.fromBufferAttribute(Y,G),I[ee+V+8]=c.x,I[ee+V+9]=c.y,I[ee+V+10]=c.z,I[ee+V+11]=Y.itemSize===4?c.w:1)}}x={count:_,texture:E,size:new Xt(U,O)},s.set(h,x),h.addEventListener("dispose",B)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const N=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",N),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function AA(o,t,i,s,c){let f=new WeakMap;function d(p){const g=c.render.frame,_=p.geometry,x=t.get(p,_);if(f.get(x)!==g&&(t.update(x),f.set(x,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;f.get(M)!==g&&(M.update(),f.set(M,g))}return x}function h(){f=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:d,dispose:h}}const RA={[Cx]:"LINEAR_TONE_MAPPING",[wx]:"REINHARD_TONE_MAPPING",[Nx]:"CINEON_TONE_MAPPING",[Dx]:"ACES_FILMIC_TONE_MAPPING",[Lx]:"AGX_TONE_MAPPING",[Ox]:"NEUTRAL_TONE_MAPPING",[Ux]:"CUSTOM_TONE_MAPPING"};function CA(o,t,i,s,c,f){const d=new zi(t,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Oa;p.setAttribute("position",new Ua([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ua([0,2,0,0,2,0],2));const g=new m1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Bi(p,g),x=new eS(-1,1,1,-1,0,1);let M=null,T=null,N=!1,S,y=null,P=[],X=!1;this.setSize=function(C,U){d.setSize(C,U),h!==null&&h.setSize(C,U),m!==null&&m.setSize(C,U);for(let O=0;O<P.length;O++){const I=P[O];I.setSize&&I.setSize(C,U)}},this.setEffects=function(C){P=C,X=P.length>0&&P[0].isRenderPass===!0;const U=d.width,O=d.height;P.length>0&&h===null&&(h=new zi(U,O,{type:ca,depthBuffer:!1,stencilBuffer:!1}),m=new zi(U,O,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<P.length;I++){const E=P[I];E.setSize&&E.setSize(U,O)}},this.begin=function(C,U){if(N||C.toneMapping===oa&&P.length===0)return!1;if(y=U,U!==null){const O=U.width,I=U.height;(d.width!==O||d.height!==I)&&this.setSize(O,I)}return X===!1&&C.setRenderTarget(d),S=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return X},this.end=function(C,U){C.toneMapping=S,N=!0;let O=d,I=h;for(let E=0;E<P.length;E++){const D=P[E];D.enabled!==!1&&(D.render(C,I,O,U),D.needsSwap!==!1&&(O=I,I=I===h?m:h))}if(M!==C.outputColorSpace||T!==C.toneMapping){M=C.outputColorSpace,T=C.toneMapping,g.defines={},It.getTransfer(M)===Kt&&(g.defines.SRGB_TRANSFER="");const E=RA[T];E&&(g.defines[E]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=O.texture,C.setRenderTarget(y),C.render(_,x),y=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),g.dispose()}}const aS=new zn,Ip=new Sl(1,1),rS=new Xx,sS=new WE,oS=new Kx,Qv=[],Jv=[],$v=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function oo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const c=t*i;let f=Qv[c];if(f===void 0&&(f=new Float32Array(c),Qv[c]=f),t!==0){s.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function yn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Lu(o,t){let i=Jv[t];i===void 0&&(i=new Int32Array(t),Jv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function wA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function NA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2fv(this.addr,t),yn(i,t)}}function DA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;o.uniform3fv(this.addr,t),yn(i,t)}}function UA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4fv(this.addr,t),yn(i,t)}}function LA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;tx.set(s),o.uniformMatrix2fv(this.addr,!1,tx),yn(i,s)}}function OA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;ex.set(s),o.uniformMatrix3fv(this.addr,!1,ex),yn(i,s)}}function PA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;$v.set(s),o.uniformMatrix4fv(this.addr,!1,$v),yn(i,s)}}function IA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function zA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2iv(this.addr,t),yn(i,t)}}function FA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3iv(this.addr,t),yn(i,t)}}function BA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4iv(this.addr,t),yn(i,t)}}function HA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function GA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2uiv(this.addr,t),yn(i,t)}}function VA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3uiv(this.addr,t),yn(i,t)}}function kA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4uiv(this.addr,t),yn(i,t)}}function XA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Ip.compareFunction=i.isReversedDepthBuffer()?jp:Zp,f=Ip):f=aS,i.setTexture2D(t||f,c)}function WA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||sS,c)}function qA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||oS,c)}function YA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||rS,c)}function ZA(o){switch(o){case 5126:return wA;case 35664:return NA;case 35665:return DA;case 35666:return UA;case 35674:return LA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return zA;case 35668:case 35672:return FA;case 35669:case 35673:return BA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}function jA(o,t){o.uniform1fv(this.addr,t)}function KA(o,t){const i=oo(t,this.size,2);o.uniform2fv(this.addr,i)}function QA(o,t){const i=oo(t,this.size,3);o.uniform3fv(this.addr,i)}function JA(o,t){const i=oo(t,this.size,4);o.uniform4fv(this.addr,i)}function $A(o,t){const i=oo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function e2(o,t){const i=oo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function t2(o,t){const i=oo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function n2(o,t){o.uniform1iv(this.addr,t)}function i2(o,t){o.uniform2iv(this.addr,t)}function a2(o,t){o.uniform3iv(this.addr,t)}function r2(o,t){o.uniform4iv(this.addr,t)}function s2(o,t){o.uniform1uiv(this.addr,t)}function o2(o,t){o.uniform2uiv(this.addr,t)}function l2(o,t){o.uniform3uiv(this.addr,t)}function c2(o,t){o.uniform4uiv(this.addr,t)}function u2(o,t,i){const s=this.cache,c=t.length,f=Lu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ip:d=aS;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function f2(o,t,i){const s=this.cache,c=t.length,f=Lu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||sS,f[d])}function d2(o,t,i){const s=this.cache,c=t.length,f=Lu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||oS,f[d])}function h2(o,t,i){const s=this.cache,c=t.length,f=Lu(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||rS,f[d])}function p2(o){switch(o){case 5126:return jA;case 35664:return KA;case 35665:return QA;case 35666:return JA;case 35674:return $A;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return a2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return h2}}class m2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ZA(i.type)}}class g2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=p2(i.type)}}class _2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],s)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function nx(o,t){o.seq.push(t),o.map[t.id]=t}function v2(o,t,i){const s=o.name,c=s.length;for(kh.lastIndex=0;;){const f=kh.exec(s),d=kh.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===c){nx(i,p===void 0?new m2(h,o,t):new g2(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new _2(h),nx(i,_)),i=_}}}class Mu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);v2(h,m,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&s.push(d)}return s}}function ix(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const x2=37297;let S2=0;function y2(o,t){const i=o.split(`
`),s=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const ax=new gt;function M2(o){It._getMatrix(ax,It.workingColorSpace,o);const t=`mat3( ${ax.elements.map(i=>i.toFixed(4))} )`;switch(It.getTransfer(o)){case Ru:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function rx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+y2(o.getShaderSource(t),h)}else return f}function E2(o,t){const i=M2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const b2={[Cx]:"Linear",[wx]:"Reinhard",[Nx]:"Cineon",[Dx]:"ACESFilmic",[Lx]:"AgX",[Ox]:"Neutral",[Ux]:"Custom"};function T2(o,t){const i=b2[t];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mu=new me;function A2(){It.getLuminanceCoefficients(mu);const o=mu.x.toFixed(4),t=mu.y.toFixed(4),i=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function C2(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function w2(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(t,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function pl(o){return o!==""}function sx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ox(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(o){return o.replace(N2,U2)}const D2=new Map;function U2(o,t){let i=bt[t];if(i===void 0){const s=D2.get(t);if(s!==void 0)i=bt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zp(i)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(o){return o.replace(L2,O2)}function O2(o,t,i,s){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function cx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const P2={[_u]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function I2(o){return P2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z2={[Yr]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Nu]:"ENVMAP_TYPE_CUBE_UV"};function F2(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":z2[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const B2={[io]:"ENVMAP_MODE_REFRACTION"};function H2(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":B2[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G2={[Rx]:"ENVMAP_BLENDING_MULTIPLY",[ME]:"ENVMAP_BLENDING_MIX",[EE]:"ENVMAP_BLENDING_ADD"};function V2(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":G2[o.combine]||"ENVMAP_BLENDING_NONE"}function k2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function X2(o,t,i,s){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=I2(i),p=F2(i),g=H2(i),_=V2(i),x=k2(i),M=R2(i),T=C2(f),N=c.createProgram();let S,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(pl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(pl).join(`
`),y.length>0&&(y+=`
`)):(S=[cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),y=[cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?bt.tonemapping_pars_fragment:"",i.toneMapping!==oa?T2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,E2("linearToOutputTexel",i.outputColorSpace),A2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),d=zp(d),d=sx(d,i),d=ox(d,i),h=zp(h),h=sx(h,i),h=ox(h,i),d=lx(d),h=lx(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===Ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const X=P+S+d,C=P+y+h,U=ix(c,c.VERTEX_SHADER,X),O=ix(c,c.FRAGMENT_SHADER,C);c.attachShader(N,U),c.attachShader(N,O),i.index0AttributeName!==void 0?c.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(N,0,"position"),c.linkProgram(N);function I(H){if(o.debug.checkShaderErrors){const Q=c.getProgramInfoLog(N)||"",j=c.getShaderInfoLog(U)||"",Y=c.getShaderInfoLog(O)||"",ee=Q.trim(),G=j.trim(),V=Y.trim();let re=!0,ae=!0;if(c.getProgramParameter(N,c.LINK_STATUS)===!1)if(re=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,N,U,O);else{const fe=rx(c,U,"vertex"),_e=rx(c,O,"fragment");Bt("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(N,c.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ee+`
`+fe+`
`+_e)}else ee!==""?dt("WebGLProgram: Program Info Log:",ee):(G===""||V==="")&&(ae=!1);ae&&(H.diagnostics={runnable:re,programLog:ee,vertexShader:{log:G,prefix:S},fragmentShader:{log:V,prefix:y}})}c.deleteShader(U),c.deleteShader(O),E=new Mu(c,N),D=w2(c,N)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let B=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=c.getProgramParameter(N,x2)),B},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=S2++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=U,this.fragmentShader=O,this}let W2=0;class q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Y2(t),i.set(t,s)),s}}class Y2{constructor(t){this.id=W2++,this.code=t,this.usedTimes=0}}function Z2(o){return o===Zr||o===bu||o===Tu}function j2(o,t,i,s,c,f){const d=new Wx,h=new q2,m=new Set,p=[],g=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function N(E,D,B,H,Q,j){const Y=H.fog,ee=Q.geometry,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,re=t.get(E.envMap||G,V),ae=re&&re.mapping===Nu?re.image.height:null,fe=M[E.type];E.precision!==null&&(x=s.getMaxPrecision(E.precision),x!==E.precision&&dt("WebGLProgram.getParameters:",E.precision,"not supported, using",x,"instead."));const _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ke=_e!==void 0?_e.length:0;let we=0;ee.morphAttributes.position!==void 0&&(we=1),ee.morphAttributes.normal!==void 0&&(we=2),ee.morphAttributes.color!==void 0&&(we=3);let F,ue,be,K;if(fe){const Ot=ia[fe];F=Ot.vertexShader,ue=Ot.fragmentShader}else{F=E.vertexShader,ue=E.fragmentShader;const Ot=h.getVertexShaderStage(E),pt=h.getFragmentShaderStage(E);h.update(E,Ot,pt),be=Ot.id,K=pt.id}const de=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),Ie=Q.isInstancedMesh===!0,xe=Q.isBatchedMesh===!0,De=!!E.map,Ht=!!E.matcap,_t=!!re,vt=!!E.aoMap,He=!!E.lightMap,Re=!!E.bumpMap&&E.wireframe===!1,Ce=!!E.normalMap,ot=!!E.displacementMap,xt=!!E.emissiveMap,ft=!!E.metalnessMap,St=!!E.roughnessMap,q=E.anisotropy>0,Et=E.clearcoat>0,ct=E.dispersion>0,L=E.retroreflectivity>0,b=E.iridescence>0,J=E.sheen>0,ie=E.transmission>0,ge=q&&!!E.anisotropyMap,Ne=Et&&!!E.clearcoatMap,ze=Et&&!!E.clearcoatNormalMap,ve=Et&&!!E.clearcoatRoughnessMap,ye=b&&!!E.iridescenceMap,Oe=b&&!!E.iridescenceThicknessMap,nt=J&&!!E.sheenColorMap,Fe=J&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Be=!!E.specularColorMap,rt=!!E.specularIntensityMap,it=ie&&!!E.transmissionMap,Z=ie&&!!E.thicknessMap,Ue=!!E.gradientMap,Se=!!E.alphaMap,Le=E.alphaTest>0,Xe=!!E.alphaHash,Te=!!E.extensions;let at=oa;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(at=o.toneMapping);const Ze={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:F,fragmentShader:ue,defines:E.defines,customVertexShaderID:be,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:x,batching:xe,batchingColor:xe&&Q._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Q.instanceColor!==null,instancingMorph:Ie&&Q.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:Ht,envMap:_t,envMapMode:_t&&re.mapping,envMapCubeUVHeight:ae,aoMap:vt,lightMap:He,bumpMap:Re,normalMap:Ce,displacementMap:ot,emissiveMap:xt,normalMapObjectSpace:Ce&&E.normalMapType===AE,normalMapTangentSpace:Ce&&E.normalMapType===Mv,packedNormalMap:Ce&&E.normalMapType===Mv&&Z2(E.normalMap.format),metalnessMap:ft,roughnessMap:St,anisotropy:q,anisotropyMap:ge,clearcoat:Et,clearcoatMap:Ne,clearcoatNormalMap:ze,clearcoatRoughnessMap:ve,dispersion:ct,retroreflection:L,iridescence:b,iridescenceMap:ye,iridescenceThicknessMap:Oe,sheen:J,sheenColorMap:nt,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Be,specularIntensityMap:rt,transmission:ie,transmissionMap:it,thicknessMap:Z,gradientMap:Ue,opaque:E.transparent===!1&&E.blending===ml&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:Le,alphaHash:Xe,combine:E.combine,mapUv:De&&T(E.map.channel),aoMapUv:vt&&T(E.aoMap.channel),lightMapUv:He&&T(E.lightMap.channel),bumpMapUv:Re&&T(E.bumpMap.channel),normalMapUv:Ce&&T(E.normalMap.channel),displacementMapUv:ot&&T(E.displacementMap.channel),emissiveMapUv:xt&&T(E.emissiveMap.channel),metalnessMapUv:ft&&T(E.metalnessMap.channel),roughnessMapUv:St&&T(E.roughnessMap.channel),anisotropyMapUv:ge&&T(E.anisotropyMap.channel),clearcoatMapUv:Ne&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(E.sheenRoughnessMap.channel),specularMapUv:Pe&&T(E.specularMap.channel),specularColorMapUv:Be&&T(E.specularColorMap.channel),specularIntensityMapUv:rt&&T(E.specularIntensityMap.channel),transmissionMapUv:it&&T(E.transmissionMap.channel),thicknessMapUv:Z&&T(E.thicknessMap.channel),alphaMapUv:Se&&T(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ce||q),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ee.attributes.uv&&(De||Se),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&Ce===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:we,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&It.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:xt&&E.emissiveMap.isVideoTexture===!0&&It.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===aa,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Te&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&E.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)D.push(B),D.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(y(D,E),P(D,E),D.push(o.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function y(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function P(E,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.retroreflection&&d.enable(24),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function X(E){const D=M[E.type];let B;if(D){const H=ia[D];B=d1.clone(H.uniforms)}else B=E.uniforms;return B}function C(E,D){let B=g.get(D);return B!==void 0?++B.usedTimes:(B=new X2(o,D,E,c),p.push(B),g.set(D,B)),B}function U(E){if(--E.usedTimes===0){const D=p.indexOf(E);p[D]=p[p.length-1],p.pop(),g.delete(E.cacheKey),E.destroy()}}function O(E){h.remove(E)}function I(){h.dispose()}return{getParameters:N,getProgramCacheKey:S,getUniforms:X,acquireProgram:C,releaseProgram:U,releaseShaderCache:O,programs:p,dispose:I}}function K2(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:t,get:i,remove:s,update:c,dispose:f}}function Q2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function ux(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function fx(){const o=[];let t=0;const i=[],s=[],c=[];function f(){t=0,i.length=0,s.length=0,c.length=0}function d(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function h(x,M,T,N,S,y){let P=o[t];return P===void 0?(P={id:x.id,object:x,geometry:M,material:T,materialVariant:d(x),groupOrder:N,renderOrder:x.renderOrder,z:S,group:y},o[t]=P):(P.id=x.id,P.object=x,P.geometry=M,P.material=T,P.materialVariant=d(x),P.groupOrder=N,P.renderOrder=x.renderOrder,P.z=S,P.group=y),t++,P}function m(x,M,T,N,S,y,P){P.reversedDepth===!0&&(S=-S);const X=h(x,M,T,N,S,y);T.transmission>0?s.push(X):T.transparent===!0?c.push(X):i.push(X)}function p(x,M,T,N,S,y){const P=h(x,M,T,N,S,y);T.transmission>0?s.unshift(P):T.transparent===!0?c.unshift(P):i.unshift(P)}function g(x,M){i.length>1&&i.sort(x||Q2),s.length>1&&s.sort(M||ux),c.length>1&&c.sort(M||ux)}function _(){for(let x=t,M=o.length;x<M;x++){const T=o[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:m,unshift:p,finish:_,sort:g}}function J2(){let o=new WeakMap;function t(s,c){const f=o.get(s);let d;return f===void 0?(d=new fx,o.set(s,[d])):c>=f.length?(d=new fx,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function $2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new me,color:new kt};break;case"SpotLight":i={position:new me,direction:new me,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new me,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new me,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new me,halfWidth:new me,halfHeight:new me};break}return o[t.id]=i,i}}}function e3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let t3=0;function n3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function i3(o){const t=new $2,i=e3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new me);const c=new me,f=new _n,d=new _n;function h(p){let g=0,_=0,x=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let M=0,T=0,N=0,S=0,y=0,P=0,X=0,C=0,U=0,O=0,I=0,E=0,D=0,B=0;p.sort(n3);for(let Q=0,j=p.length;Q<j;Q++){const Y=p[Q],ee=Y.color,G=Y.intensity,V=Y.distance;let re=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===Zr?re=Y.shadow.map.texture:re=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)g+=ee.r*G,_+=ee.g*G,x+=ee.b*G;else if(Y.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(Y.sh.coefficients[ae],G);B++}else if(Y.isSunLight){const ae=t.get(Y);if(ae.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const fe=Y.shadow,_e=i.get(Y);_e.shadowIntensity=fe.intensity,_e.shadowBias=fe.bias,_e.shadowNormalBias=fe.normalBias,_e.shadowRadius=fe.radius,_e.shadowMapSize.copy(fe.mapSize).multiply(fe.getFrameExtents()),s.sunShadow[T]=_e,s.sunShadowMap[T]=re;const ke=fe.getViewportCount();for(let we=0;we<ke;we++)s.sunShadowMatrix[N+we]=fe.getMatrix(we),s.sunShadowCascade[N+we]=fe._cascadeData[we];N+=ke,T++}s.sun[M]=ae,M++}else if(Y.isDirectionalLight){const ae=t.get(Y);if(ae.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const fe=Y.shadow,_e=i.get(Y);_e.shadowIntensity=fe.intensity,_e.shadowBias=fe.bias,_e.shadowNormalBias=fe.normalBias,_e.shadowRadius=fe.radius,_e.shadowMapSize=fe.mapSize,s.directionalShadow[S]=_e,s.directionalShadowMap[S]=re,s.directionalShadowMatrix[S]=Y.shadow.matrix,U++}s.directional[S]=ae,S++}else if(Y.isSpotLight){const ae=t.get(Y);ae.position.setFromMatrixPosition(Y.matrixWorld),ae.color.copy(ee).multiplyScalar(G),ae.distance=V,ae.coneCos=Math.cos(Y.angle),ae.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ae.decay=Y.decay,s.spot[P]=ae;const fe=Y.shadow;if(Y.map&&(s.spotLightMap[E]=Y.map,E++,fe.updateMatrices(Y),Y.castShadow&&D++),s.spotLightMatrix[P]=fe.matrix,Y.castShadow){const _e=i.get(Y);_e.shadowIntensity=fe.intensity,_e.shadowBias=fe.bias,_e.shadowNormalBias=fe.normalBias,_e.shadowRadius=fe.radius,_e.shadowMapSize=fe.mapSize,s.spotShadow[P]=_e,s.spotShadowMap[P]=re,I++}P++}else if(Y.isRectAreaLight){const ae=t.get(Y);ae.color.copy(ee).multiplyScalar(G),ae.halfWidth.set(Y.width*.5,0,0),ae.halfHeight.set(0,Y.height*.5,0),s.rectArea[X]=ae,X++}else if(Y.isPointLight){const ae=t.get(Y);if(ae.color.copy(Y.color).multiplyScalar(Y.intensity),ae.distance=Y.distance,ae.decay=Y.decay,Y.castShadow){const fe=Y.shadow,_e=i.get(Y);_e.shadowIntensity=fe.intensity,_e.shadowBias=fe.bias,_e.shadowNormalBias=fe.normalBias,_e.shadowRadius=fe.radius,_e.shadowMapSize=fe.mapSize,_e.shadowCameraNear=fe.camera.near,_e.shadowCameraFar=fe.camera.far,s.pointShadow[y]=_e,s.pointShadowMap[y]=re,s.pointShadowMatrix[y]=Y.shadow.matrix,O++}s.point[y]=ae,y++}else if(Y.isHemisphereLight){const ae=t.get(Y);ae.skyColor.copy(Y.color).multiplyScalar(G),ae.groundColor.copy(Y.groundColor).multiplyScalar(G),s.hemi[C]=ae,C++}}X>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const H=s.hash;(H.sunLength!==M||H.directionalLength!==S||H.pointLength!==y||H.spotLength!==P||H.rectAreaLength!==X||H.hemiLength!==C||H.numSunShadows!==T||H.numDirectionalShadows!==U||H.numPointShadows!==O||H.numSpotShadows!==I||H.numSpotMaps!==E||H.numLightProbes!==B)&&(s.sun.length=M,s.directional.length=S,s.spot.length=P,s.rectArea.length=X,s.point.length=y,s.hemi.length=C,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=N,s.sunShadowCascade.length=N,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=O,s.pointShadowMap.length=O,s.pointShadowMatrix.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+E-D,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=B,H.sunLength=M,H.directionalLength=S,H.pointLength=y,H.spotLength=P,H.rectAreaLength=X,H.hemiLength=C,H.numSunShadows=T,H.numDirectionalShadows=U,H.numPointShadows=O,H.numSpotShadows=I,H.numSpotMaps=E,H.numLightProbes=B,s.version=t3++)}function m(p,g){let _=0,x=0,M=0,T=0,N=0,S=0;const y=g.matrixWorldInverse;for(let P=0,X=p.length;P<X;P++){const C=p[P];if(C.isSunLight){const U=s.sun[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(y),_++}else if(C.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(y),x++}else if(C.isSpotLight){const U=s.spot[T];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(y),T++}else if(C.isRectAreaLight){const U=s.rectArea[N];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),d.identity(),f.copy(C.matrixWorld),f.premultiply(y),d.extractRotation(f),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),N++}else if(C.isPointLight){const U=s.point[M];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),M++}else if(C.isHemisphereLight){const U=s.hemi[S];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(y),S++}}}return{setup:h,setupView:m,state:s}}function dx(o){const t=new i3(o),i=[],s=[],c=[];function f(x){_.camera=x,i.length=0,s.length=0,c.length=0}function d(x){i.push(x)}function h(x){s.push(x)}function m(x){c.push(x)}function p(){t.setup(i)}function g(x){t.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:p,setupLightsView:g,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function a3(o){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new dx(o),t.set(c,[h])):f>=d.length?(h=new dx(o),d.push(h)):h=d[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s3=`uniform sampler2D shadow_pass;
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
}`,o3=[new me(1,0,0),new me(-1,0,0),new me(0,1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1)],l3=[new me(0,-1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1),new me(0,-1,0),new me(0,-1,0)],hx=new _n,fl=new me,Xh=new me;function c3(o,t,i){let s=new jx;const c=new Xt,f=new Xt,d=new un,h=new g1,m=new _1,p={},g=i.maxTextureSize,_={[qr]:Kn,[Kn]:qr,[aa]:aa},x=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:r3,fragmentShader:s3}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Oa;T.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Bi(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let y=this.type;this.render=function(O,I,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===iE&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_u);const D=o.getRenderTarget(),B=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Na),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const j=y!==this.type;j&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(ee=>ee.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,ee=O.length;Y<ee;Y++){const G=O[Y],V=G.shadow;if(V===void 0){dt("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;c.copy(V.mapSize);const re=V.getFrameExtents();c.multiply(re),f.copy(V.mapSize),(c.x>g||c.y>g)&&(c.x>g&&(f.x=Math.floor(g/re.x),c.x=f.x*re.x,V.mapSize.x=f.x),c.y>g&&(f.y=Math.floor(g/re.y),c.y=f.y*re.y,V.mapSize.y=f.y));const ae=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ae,V.map===null||j===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===hl){if(G.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new zi(c.x,c.y,{format:Zr,type:ca,minFilter:In,magFilter:In,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new Sl(c.x,c.y,ra),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=La,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un}else G.isPointLight?(V.map=new iS(c.x),V.map.depthTexture=new u1(c.x,la)):(V.map=new zi(c.x,c.y),V.map.depthTexture=new Sl(c.x,c.y,la)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=La,this.type===_u?(V.map.depthTexture.compareFunction=ae?jp:Zp,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==c.x||V.map.height!==c.y)&&V.map.setSize(c.x,c.y);const fe=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,E);for(let _e=0;_e<fe;_e++){const ke=V.getCamera(_e);if(G.isPointLight){const we=V.camera,F=V.matrix,ue=G.distance||we.far;ue!==we.far&&(we.far=ue,we.updateProjectionMatrix()),fl.setFromMatrixPosition(G.matrixWorld),we.position.copy(fl),Xh.copy(we.position),Xh.add(o3[_e]),we.up.copy(l3[_e]),we.lookAt(Xh),we.updateMatrixWorld(),F.makeTranslation(-fl.x,-fl.y,-fl.z),hx.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),V._frustum.setFromProjectionMatrix(hx,we.coordinateSystem,we.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,_e),o.clear();else{_e===0&&(o.setRenderTarget(V.map),o.clear());const we=V.getViewport(_e);d.set(f.x*we.x,f.y*we.y,f.x*we.z,f.y*we.w),Q.viewport(d)}s=V.getFrustum(_e),C(I,E,ke,G,this.type)}V.isPointLightShadow!==!0&&this.type===hl&&P(V,E),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(D,B,H)};function P(O,I){const E=t.update(N);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null?O.mapPass=new zi(c.x,c.y,{format:Zr,type:ca}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value.set(O.map.width,O.map.height),x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(I,null,E,x,N,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value.set(O.map.width,O.map.height),M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(I,null,E,M,N,null)}function X(O,I,E,D){let B=null;const H=E.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)B=H;else if(B=E.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=B.uuid,j=I.uuid;let Y=p[Q];Y===void 0&&(Y={},p[Q]=Y);let ee=Y[j];ee===void 0&&(ee=B.clone(),Y[j]=ee,I.addEventListener("dispose",U)),B=ee}if(B.visible=I.visible,B.wireframe=I.wireframe,D===hl?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:_[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Q=o.properties.get(B);Q.light=E}return B}function C(O,I,E,D,B){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&B===hl)&&(!O.frustumCulled||O.intersectsFrustum(s))){O.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,O.matrixWorld);const j=t.update(O),Y=O.material;if(Array.isArray(Y)){const ee=j.groups;for(let G=0,V=ee.length;G<V;G++){const re=ee[G],ae=Y[re.materialIndex];if(ae&&ae.visible){const fe=X(O,ae,D,B);O.onBeforeShadow(o,O,I,E,j,fe,re),o.renderBufferDirect(E,null,j,fe,O,re),O.onAfterShadow(o,O,I,E,j,fe,re)}}}else if(Y.visible){const ee=X(O,Y,D,B);O.onBeforeShadow(o,O,I,E,j,ee,null),o.renderBufferDirect(E,null,j,ee,O,null),O.onAfterShadow(o,O,I,E,j,ee,null)}}const Q=O.children;for(let j=0,Y=Q.length;j<Y;j++)C(Q[j],I,E,D,B)}function U(O){O.target.removeEventListener("dispose",U);for(const E in p){const D=p[E],B=O.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function u3(o,t){function i(){let Z=!1;const Ue=new un;let Se=null;const Le=new un(0,0,0,0);return{setMask:function(Xe){Se!==Xe&&!Z&&(o.colorMask(Xe,Xe,Xe,Xe),Se=Xe)},setLocked:function(Xe){Z=Xe},setClear:function(Xe,Te,at,Ze,Ot){Ot===!0&&(Xe*=Ze,Te*=Ze,at*=Ze),Ue.set(Xe,Te,at,Ze),Le.equals(Ue)===!1&&(o.clearColor(Xe,Te,at,Ze),Le.copy(Ue))},reset:function(){Z=!1,Se=null,Le.set(-1,0,0,0)}}}function s(){let Z=!1,Ue=!1,Se=null,Le=null,Xe=null;return{setReversed:function(Te){if(Ue!==Te){const at=t.get("EXT_clip_control");Te?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Ue=Te;const Ze=Xe;Xe=null,this.setClear(Ze)}},getReversed:function(){return Ue},setTest:function(Te){Te?de(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(Te){Se!==Te&&!Z&&(o.depthMask(Te),Se=Te)},setFunc:function(Te){if(Ue&&(Te=FE[Te]),Le!==Te){switch(Te){case Kh:o.depthFunc(o.NEVER);break;case Qh:o.depthFunc(o.ALWAYS);break;case Jh:o.depthFunc(o.LESS);break;case gl:o.depthFunc(o.LEQUAL);break;case $h:o.depthFunc(o.EQUAL);break;case ep:o.depthFunc(o.GEQUAL);break;case tp:o.depthFunc(o.GREATER);break;case np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=Te}},setLocked:function(Te){Z=Te},setClear:function(Te){Xe!==Te&&(Xe=Te,Ue&&(Te=1-Te),o.clearDepth(Te))},reset:function(){Z=!1,Se=null,Le=null,Xe=null,Ue=!1}}}function c(){let Z=!1,Ue=null,Se=null,Le=null,Xe=null,Te=null,at=null,Ze=null,Ot=null;return{setTest:function(pt){Z||(pt?de(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(pt){Ue!==pt&&!Z&&(o.stencilMask(pt),Ue=pt)},setFunc:function(pt,Qn,ui){(Se!==pt||Le!==Qn||Xe!==ui)&&(o.stencilFunc(pt,Qn,ui),Se=pt,Le=Qn,Xe=ui)},setOp:function(pt,Qn,ui){(Te!==pt||at!==Qn||Ze!==ui)&&(o.stencilOp(pt,Qn,ui),Te=pt,at=Qn,Ze=ui)},setLocked:function(pt){Z=pt},setClear:function(pt){Ot!==pt&&(o.clearStencil(pt),Ot=pt)},reset:function(){Z=!1,Ue=null,Se=null,Le=null,Xe=null,Te=null,at=null,Ze=null,Ot=null}}}const f=new i,d=new s,h=new c,m=new WeakMap,p=new WeakMap;let g={},_={},x={},M=new WeakMap,T=[],N=null,S=!1,y=null,P=null,X=null,C=null,U=null,O=null,I=null,E=new kt(0,0,0),D=0,B=!1,H=null,Q=null,j=null,Y=null,ee=null;const G=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,re=0;const ae=o.getParameter(o.VERSION);ae.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ae)[1]),V=re>=1):ae.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),V=re>=2);let fe=null,_e={};const ke=o.getParameter(o.SCISSOR_BOX),we=o.getParameter(o.VIEWPORT),F=new un().fromArray(ke),ue=new un().fromArray(we);function be(Z,Ue,Se,Le){const Xe=new Uint8Array(4),Te=o.createTexture();o.bindTexture(Z,Te),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let at=0;at<Se;at++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,Xe):o.texImage2D(Ue+at,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xe);return Te}const K={};K[o.TEXTURE_2D]=be(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),de(o.DEPTH_TEST),d.setFunc(gl),Re(!1),Ce(vv),de(o.CULL_FACE),vt(Na);function de(Z){g[Z]!==!0&&(o.enable(Z),g[Z]=!0)}function Ae(Z){g[Z]!==!1&&(o.disable(Z),g[Z]=!1)}function Ie(Z,Ue){return x[Z]!==Ue?(o.bindFramebuffer(Z,Ue),x[Z]=Ue,Z===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ue),Z===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function xe(Z,Ue){let Se=T,Le=!1;if(Z){Se=M.get(Ue),Se===void 0&&(Se=[],M.set(Ue,Se));const Xe=Z.textures;if(Se.length!==Xe.length||Se[0]!==o.COLOR_ATTACHMENT0){for(let Te=0,at=Xe.length;Te<at;Te++)Se[Te]=o.COLOR_ATTACHMENT0+Te;Se.length=Xe.length,Le=!0}}else Se[0]!==o.BACK&&(Se[0]=o.BACK,Le=!0);Le&&o.drawBuffers(Se)}function De(Z){return N!==Z?(o.useProgram(Z),N=Z,!0):!1}const Ht={[Js]:o.FUNC_ADD,[rE]:o.FUNC_SUBTRACT,[sE]:o.FUNC_REVERSE_SUBTRACT};Ht[oE]=o.MIN,Ht[lE]=o.MAX;const _t={[cE]:o.ZERO,[uE]:o.ONE,[fE]:o.SRC_COLOR,[Tx]:o.SRC_ALPHA,[_E]:o.SRC_ALPHA_SATURATE,[mE]:o.DST_COLOR,[hE]:o.DST_ALPHA,[dE]:o.ONE_MINUS_SRC_COLOR,[Ax]:o.ONE_MINUS_SRC_ALPHA,[gE]:o.ONE_MINUS_DST_COLOR,[pE]:o.ONE_MINUS_DST_ALPHA,[vE]:o.CONSTANT_COLOR,[xE]:o.ONE_MINUS_CONSTANT_COLOR,[SE]:o.CONSTANT_ALPHA,[yE]:o.ONE_MINUS_CONSTANT_ALPHA};function vt(Z,Ue,Se,Le,Xe,Te,at,Ze,Ot,pt){if(Z===Na){S===!0&&(Ae(o.BLEND),S=!1);return}if(S===!1&&(de(o.BLEND),S=!0),Z!==aE){if(Z!==y||pt!==B){if((P!==Js||U!==Js)&&(o.blendEquation(o.FUNC_ADD),P=Js,U=Js),pt)switch(Z){case ml:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xv:o.blendFunc(o.ONE,o.ONE);break;case Sv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Bt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case ml:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sv:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yv:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",Z);break}X=null,C=null,O=null,I=null,E.set(0,0,0),D=0,y=Z,B=pt}return}Xe=Xe||Ue,Te=Te||Se,at=at||Le,(Ue!==P||Xe!==U)&&(o.blendEquationSeparate(Ht[Ue],Ht[Xe]),P=Ue,U=Xe),(Se!==X||Le!==C||Te!==O||at!==I)&&(o.blendFuncSeparate(_t[Se],_t[Le],_t[Te],_t[at]),X=Se,C=Le,O=Te,I=at),(Ze.equals(E)===!1||Ot!==D)&&(o.blendColor(Ze.r,Ze.g,Ze.b,Ot),E.copy(Ze),D=Ot),y=Z,B=!1}function He(Z,Ue){Z.side===aa?Ae(o.CULL_FACE):de(o.CULL_FACE);let Se=Z.side===Kn;Ue&&(Se=!Se),Re(Se),Z.blending===ml&&Z.transparent===!1?vt(Na):vt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),d.setFunc(Z.depthFunc),d.setTest(Z.depthTest),d.setMask(Z.depthWrite),f.setMask(Z.colorWrite);const Le=Z.stencilWrite;h.setTest(Le),Le&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),xt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function Re(Z){H!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),H=Z)}function Ce(Z){Z!==tE?(de(o.CULL_FACE),Z!==Q&&(Z===vv?o.cullFace(o.BACK):Z===nE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),Q=Z}function ot(Z){Z!==j&&(V&&o.lineWidth(Z),j=Z)}function xt(Z,Ue,Se){Z?(de(o.POLYGON_OFFSET_FILL),(Y!==Ue||ee!==Se)&&(Y=Ue,ee=Se,d.getReversed()&&(Ue=-Ue),o.polygonOffset(Ue,Se))):Ae(o.POLYGON_OFFSET_FILL)}function ft(Z){Z?de(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function St(Z){Z===void 0&&(Z=o.TEXTURE0+G-1),fe!==Z&&(o.activeTexture(Z),fe=Z)}function q(Z,Ue,Se){Se===void 0&&(fe===null?Se=o.TEXTURE0+G-1:Se=fe);let Le=_e[Se];Le===void 0&&(Le={type:void 0,texture:void 0},_e[Se]=Le),(Le.type!==Z||Le.texture!==Ue)&&(fe!==Se&&(o.activeTexture(Se),fe=Se),o.bindTexture(Z,Ue||K[Z]),Le.type=Z,Le.texture=Ue)}function Et(){const Z=_e[fe];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ct(){try{o.compressedTexImage2D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function L(){try{o.compressedTexImage3D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function b(){try{o.texSubImage2D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function J(){try{o.texSubImage3D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function ie(){try{o.compressedTexSubImage2D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function ge(){try{o.compressedTexSubImage3D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function Ne(){try{o.texStorage2D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function ze(){try{o.texStorage3D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function ve(){try{o.texImage2D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function ye(){try{o.texImage3D(...arguments)}catch(Z){Bt("WebGLState:",Z)}}function Oe(Z){return _[Z]!==void 0?_[Z]:o.getParameter(Z)}function nt(Z,Ue){_[Z]!==Ue&&(o.pixelStorei(Z,Ue),_[Z]=Ue)}function Fe(Z){F.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),F.copy(Z))}function Pe(Z){ue.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),ue.copy(Z))}function Be(Z,Ue){let Se=p.get(Ue);Se===void 0&&(Se=new WeakMap,p.set(Ue,Se));let Le=Se.get(Z);Le===void 0&&(Le=o.getUniformBlockIndex(Ue,Z.name),Se.set(Z,Le))}function rt(Z,Ue){const Le=p.get(Ue).get(Z);m.get(Ue)!==Le&&(o.uniformBlockBinding(Ue,Le,Z.__bindingPointIndex),m.set(Ue,Le))}function it(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),g={},_={},fe=null,_e={},x={},M=new WeakMap,T=[],N=null,S=!1,y=null,P=null,X=null,C=null,U=null,O=null,I=null,E=new kt(0,0,0),D=0,B=!1,H=null,Q=null,j=null,Y=null,ee=null,F.set(0,0,o.canvas.width,o.canvas.height),ue.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:de,disable:Ae,bindFramebuffer:Ie,drawBuffers:xe,useProgram:De,setBlending:vt,setMaterial:He,setFlipSided:Re,setCullFace:Ce,setLineWidth:ot,setPolygonOffset:xt,setScissorTest:ft,activeTexture:St,bindTexture:q,unbindTexture:Et,compressedTexImage2D:ct,compressedTexImage3D:L,texImage2D:ve,texImage3D:ye,pixelStorei:nt,getParameter:Oe,updateUBOMapping:Be,uniformBlockBinding:rt,texStorage2D:Ne,texStorage3D:ze,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:Fe,viewport:Pe,reset:it}}function f3(o,t,i,s,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,g=new WeakMap,_=new Set;let x;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(L,b){return T?new OffscreenCanvas(L,b):xl("canvas")}function S(L,b,J){let ie=1;const ge=ct(L);if((ge.width>J||ge.height>J)&&(ie=J/Math.max(ge.width,ge.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ne=Math.floor(ie*ge.width),ze=Math.floor(ie*ge.height);x===void 0&&(x=N(Ne,ze));const ve=b?N(Ne,ze):x;return ve.width=Ne,ve.height=ze,ve.getContext("2d").drawImage(L,0,0,Ne,ze),dt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ne+"x"+ze+")."),ve}else return"data"in L&&dt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function P(L){o.generateMipmap(L)}function X(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(L,b,J,ie,ge,Ne=!1){if(L!==null){if(o[L]!==void 0)return o[L];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ze;ie&&(ze=t.get("EXT_texture_norm16"),ze||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=b;if(b===o.RED&&(J===o.FLOAT&&(ve=o.R32F),J===o.HALF_FLOAT&&(ve=o.R16F),J===o.UNSIGNED_BYTE&&(ve=o.R8),J===o.UNSIGNED_SHORT&&ze&&(ve=ze.R16_EXT),J===o.SHORT&&ze&&(ve=ze.R16_SNORM_EXT)),b===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ve=o.R8UI),J===o.UNSIGNED_SHORT&&(ve=o.R16UI),J===o.UNSIGNED_INT&&(ve=o.R32UI),J===o.BYTE&&(ve=o.R8I),J===o.SHORT&&(ve=o.R16I),J===o.INT&&(ve=o.R32I)),b===o.RG&&(J===o.FLOAT&&(ve=o.RG32F),J===o.HALF_FLOAT&&(ve=o.RG16F),J===o.UNSIGNED_BYTE&&(ve=o.RG8),J===o.UNSIGNED_SHORT&&ze&&(ve=ze.RG16_EXT),J===o.SHORT&&ze&&(ve=ze.RG16_SNORM_EXT)),b===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ve=o.RG8UI),J===o.UNSIGNED_SHORT&&(ve=o.RG16UI),J===o.UNSIGNED_INT&&(ve=o.RG32UI),J===o.BYTE&&(ve=o.RG8I),J===o.SHORT&&(ve=o.RG16I),J===o.INT&&(ve=o.RG32I)),b===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ve=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ve=o.RGB16UI),J===o.UNSIGNED_INT&&(ve=o.RGB32UI),J===o.BYTE&&(ve=o.RGB8I),J===o.SHORT&&(ve=o.RGB16I),J===o.INT&&(ve=o.RGB32I)),b===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ve=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ve=o.RGBA16UI),J===o.UNSIGNED_INT&&(ve=o.RGBA32UI),J===o.BYTE&&(ve=o.RGBA8I),J===o.SHORT&&(ve=o.RGBA16I),J===o.INT&&(ve=o.RGBA32I)),b===o.RGB&&(J===o.UNSIGNED_SHORT&&ze&&(ve=ze.RGB16_EXT),J===o.SHORT&&ze&&(ve=ze.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(ve=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ve=o.R11F_G11F_B10F)),b===o.RGBA){const ye=Ne?Ru:It.getTransfer(ge);J===o.FLOAT&&(ve=o.RGBA32F),J===o.HALF_FLOAT&&(ve=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ve=ye===Kt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&ze&&(ve=ze.RGBA16_EXT),J===o.SHORT&&ze&&(ve=ze.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(ve=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ve=o.RGB5_A1)}return(ve===o.R16F||ve===o.R32F||ve===o.RG16F||ve===o.RG32F||ve===o.RGBA16F||ve===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function U(L,b){let J;return L?b===null||b===la||b===vl?J=o.DEPTH24_STENCIL8:b===ra?J=o.DEPTH32F_STENCIL8:b===_l&&(J=o.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===la||b===vl?J=o.DEPTH_COMPONENT24:b===ra?J=o.DEPTH_COMPONENT32F:b===_l&&(J=o.DEPTH_COMPONENT16),J}function O(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Un&&L.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){const b=L.target;b.removeEventListener("dispose",I),D(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function E(L){const b=L.target;b.removeEventListener("dispose",E),H(b)}function D(L){const b=s.get(L);if(b.__webglInit===void 0)return;const J=L.source,ie=M.get(J);if(ie){const ge=ie[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&B(L),Object.keys(ie).length===0&&M.delete(J)}s.remove(L)}function B(L){const b=s.get(L);o.deleteTexture(b.__webglTexture);const J=L.source,ie=M.get(J);delete ie[b.__cacheKey],d.memory.textures--}function H(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let ge=0;ge<b.__webglFramebuffer[ie].length;ge++)o.deleteFramebuffer(b.__webglFramebuffer[ie][ge]);else o.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)o.deleteFramebuffer(b.__webglFramebuffer[ie]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=L.textures;for(let ie=0,ge=J.length;ie<ge;ie++){const Ne=s.get(J[ie]);Ne.__webglTexture&&(o.deleteTexture(Ne.__webglTexture),d.memory.textures--),s.remove(J[ie])}s.remove(L)}let Q=0;function j(){Q=0}function Y(){return Q}function ee(L){Q=L}function G(){const L=Q;return L>=c.maxTextures&&dt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+c.maxTextures),Q+=1,L}function V(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function re(L,b){const J=s.get(L);if(L.isVideoTexture&&q(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ie=L.image;if(ie===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(J,L,b);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+b)}function ae(L,b){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ae(J,L,b);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+b)}function fe(L,b){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ae(J,L,b);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+b)}function _e(L,b){const J=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){Ie(J,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+b)}const ke={[ip]:o.REPEAT,[Pi]:o.CLAMP_TO_EDGE,[ap]:o.MIRRORED_REPEAT},we={[Un]:o.NEAREST,[bE]:o.NEAREST_MIPMAP_NEAREST,[Yc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[ph]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},F={[CE]:o.NEVER,[LE]:o.ALWAYS,[wE]:o.LESS,[Zp]:o.LEQUAL,[NE]:o.EQUAL,[jp]:o.GEQUAL,[DE]:o.GREATER,[UE]:o.NOTEQUAL};function ue(L,b){if(b.type===ra&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===ph||b.magFilter===Yc||b.magFilter===Xr||b.minFilter===In||b.minFilter===ph||b.minFilter===Yc||b.minFilter===Xr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ke[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ke[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ke[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,we[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,we[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==Yc&&b.minFilter!==Xr||b.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,c.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function be(L,b){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const ie=b.source;let ge=M.get(ie);ge===void 0&&(ge={},M.set(ie,ge));const Ne=V(b);if(Ne!==L.__cacheKey){ge[Ne]===void 0&&(ge[Ne]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),ge[Ne].usedTimes++;const ze=ge[L.__cacheKey];ze!==void 0&&(ge[L.__cacheKey].usedTimes--,ze.usedTimes===0&&B(b)),L.__cacheKey=Ne,L.__webglTexture=ge[Ne].texture}return J}function K(L,b,J){return Math.floor(Math.floor(L/J)/b)}function de(L,b,J,ie){const Ne=L.updateRanges;if(Ne.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,J,ie,b.data);else{Ne.sort((nt,Fe)=>nt.start-Fe.start);let ze=0;for(let nt=1;nt<Ne.length;nt++){const Fe=Ne[ze],Pe=Ne[nt],Be=Fe.start+Fe.count,rt=K(Pe.start,b.width,4),it=K(Fe.start,b.width,4);Pe.start<=Be+1&&rt===it&&K(Pe.start+Pe.count-1,b.width,4)===rt?Fe.count=Math.max(Fe.count,Pe.start+Pe.count-Fe.start):(++ze,Ne[ze]=Pe)}Ne.length=ze+1;const ve=i.getParameter(o.UNPACK_ROW_LENGTH),ye=i.getParameter(o.UNPACK_SKIP_PIXELS),Oe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let nt=0,Fe=Ne.length;nt<Fe;nt++){const Pe=Ne[nt],Be=Math.floor(Pe.start/4),rt=Math.ceil(Pe.count/4),it=Be%b.width,Z=Math.floor(Be/b.width),Ue=rt,Se=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,it),i.pixelStorei(o.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(o.TEXTURE_2D,0,it,Z,Ue,Se,J,ie,b.data)}L.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ve),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(o.UNPACK_SKIP_ROWS,Oe)}}function Ae(L,b,J){let ie=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=o.TEXTURE_3D);const ge=be(L,b),Ne=b.source;i.bindTexture(ie,L.__webglTexture,o.TEXTURE0+J);const ze=s.get(Ne);if(Ne.version!==ze.__version||ge===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Se=It.getPrimaries(It.workingColorSpace),Le=b.colorSpace===mr?null:It.getPrimaries(b.colorSpace),Xe=b.colorSpace===mr||Se===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment);let ye=S(b.image,!1,c.maxTextureSize);ye=Et(b,ye);const Oe=f.convert(b.format,b.colorSpace),nt=f.convert(b.type);let Fe=C(b.internalFormat,Oe,nt,b.normalized,b.colorSpace,b.isVideoTexture);ue(ie,b);let Pe;const Be=b.mipmaps,rt=b.isVideoTexture!==!0,it=ze.__version===void 0||ge===!0,Z=Ne.dataReady,Ue=O(b,ye);if(b.isDepthTexture)Fe=U(b.format===Wr,b.type),it&&(rt?i.texStorage2D(o.TEXTURE_2D,1,Fe,ye.width,ye.height):i.texImage2D(o.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Oe,nt,null));else if(b.isDataTexture)if(Be.length>0){rt&&it&&i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Be[0].width,Be[0].height);for(let Se=0,Le=Be.length;Se<Le;Se++)Pe=Be[Se],rt?Z&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Oe,nt,Pe.data):i.texImage2D(o.TEXTURE_2D,Se,Fe,Pe.width,Pe.height,0,Oe,nt,Pe.data);b.generateMipmaps=!1}else rt?(it&&i.texStorage2D(o.TEXTURE_2D,Ue,Fe,ye.width,ye.height),Z&&de(b,ye,Oe,nt)):i.texImage2D(o.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Oe,nt,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&it&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Fe,Be[0].width,Be[0].height,ye.depth);for(let Se=0,Le=Be.length;Se<Le;Se++)if(Pe=Be[Se],b.format!==Ii)if(Oe!==null)if(rt){if(Z)if(b.layerUpdates.size>0){const Xe=Wv(Pe.width,Pe.height,b.format,b.type);for(const Te of b.layerUpdates){const at=Pe.data.subarray(Te*Xe/Pe.data.BYTES_PER_ELEMENT,(Te+1)*Xe/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,Te,Pe.width,Pe.height,1,Oe,at)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,ye.depth,Oe,Pe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Fe,Pe.width,Pe.height,ye.depth,0,Pe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Z&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,ye.depth,Oe,nt,Pe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Se,Fe,Pe.width,Pe.height,ye.depth,0,Oe,nt,Pe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{rt&&it&&i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Be[0].width,Be[0].height);for(let Se=0,Le=Be.length;Se<Le;Se++)Pe=Be[Se],b.format!==Ii?Oe!==null?rt?Z&&i.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Oe,Pe.data):i.compressedTexImage2D(o.TEXTURE_2D,Se,Fe,Pe.width,Pe.height,0,Pe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Z&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Oe,nt,Pe.data):i.texImage2D(o.TEXTURE_2D,Se,Fe,Pe.width,Pe.height,0,Oe,nt,Pe.data)}else if(b.isDataArrayTexture)if(rt){if(it&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Fe,ye.width,ye.height,ye.depth),Z)if(b.layerUpdates.size>0){const Se=Wv(ye.width,ye.height,b.format,b.type);for(const Le of b.layerUpdates){const Xe=ye.data.subarray(Le*Se/ye.data.BYTES_PER_ELEMENT,(Le+1)*Se/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Le,ye.width,ye.height,1,Oe,nt,Xe)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Oe,nt,ye.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,Oe,nt,ye.data);else if(b.isData3DTexture)rt?(it&&i.texStorage3D(o.TEXTURE_3D,Ue,Fe,ye.width,ye.height,ye.depth),Z&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Oe,nt,ye.data)):i.texImage3D(o.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,Oe,nt,ye.data);else if(b.isFramebufferTexture){if(it)if(rt)i.texStorage2D(o.TEXTURE_2D,Ue,Fe,ye.width,ye.height);else{let Se=ye.width,Le=ye.height;for(let Xe=0;Xe<Ue;Xe++)i.texImage2D(o.TEXTURE_2D,Xe,Fe,Se,Le,0,Oe,nt,null),Se>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in o){const Se=o.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),ye.parentNode!==Se){Se.appendChild(ye),_.add(b),Se.onpaint=Le=>{const Xe=Le.changedElements;for(const Te of _)Xe.includes(Te.image)&&(Te.needsUpdate=!0)},Se.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,ye);else{const Xe=o.RGBA,Te=o.RGBA,at=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xe,Te,at,ye)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Be.length>0){if(rt&&it){const Se=ct(Be[0]);i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Se.width,Se.height)}for(let Se=0,Le=Be.length;Se<Le;Se++)Pe=Be[Se],rt?Z&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Oe,nt,Pe):i.texImage2D(o.TEXTURE_2D,Se,Fe,Oe,nt,Pe);b.generateMipmaps=!1}else if(rt){if(it){const Se=ct(ye);i.texStorage2D(o.TEXTURE_2D,Ue,Fe,Se.width,Se.height)}Z&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,nt,ye)}else i.texImage2D(o.TEXTURE_2D,0,Fe,Oe,nt,ye);y(b)&&P(ie),ze.__version=Ne.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ie(L,b,J){if(b.image.length!==6)return;const ie=be(L,b),ge=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+J);const Ne=s.get(ge);if(ge.version!==Ne.__version||ie===!0){i.activeTexture(o.TEXTURE0+J);const ze=It.getPrimaries(It.workingColorSpace),ve=b.colorSpace===mr?null:It.getPrimaries(b.colorSpace),ye=b.colorSpace===mr||ze===ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let Te=0;Te<6;Te++)!Oe&&!nt?Fe[Te]=S(b.image[Te],!0,c.maxCubemapSize):Fe[Te]=nt?b.image[Te].image:b.image[Te],Fe[Te]=Et(b,Fe[Te]);const Pe=Fe[0],Be=f.convert(b.format,b.colorSpace),rt=f.convert(b.type),it=C(b.internalFormat,Be,rt,b.normalized,b.colorSpace),Z=b.isVideoTexture!==!0,Ue=Ne.__version===void 0||ie===!0,Se=ge.dataReady;let Le=O(b,Pe);ue(o.TEXTURE_CUBE_MAP,b);let Xe;if(Oe){Z&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,it,Pe.width,Pe.height);for(let Te=0;Te<6;Te++){Xe=Fe[Te].mipmaps;for(let at=0;at<Xe.length;at++){const Ze=Xe[at];b.format!==Ii?Be!==null?Z?Se&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,0,0,Ze.width,Ze.height,Be,Ze.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,it,Ze.width,Ze.height,0,Ze.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,0,0,Ze.width,Ze.height,Be,rt,Ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,it,Ze.width,Ze.height,0,Be,rt,Ze.data)}}}else{if(Xe=b.mipmaps,Z&&Ue){Xe.length>0&&Le++;const Te=ct(Fe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,it,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(nt){Z?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Fe[Te].width,Fe[Te].height,Be,rt,Fe[Te].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,Fe[Te].width,Fe[Te].height,0,Be,rt,Fe[Te].data);for(let at=0;at<Xe.length;at++){const Ot=Xe[at].image[Te].image;Z?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,0,0,Ot.width,Ot.height,Be,rt,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,it,Ot.width,Ot.height,0,Be,rt,Ot.data)}}else{Z?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Be,rt,Fe[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,Be,rt,Fe[Te]);for(let at=0;at<Xe.length;at++){const Ze=Xe[at];Z?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,0,0,Be,rt,Ze.image[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,it,Be,rt,Ze.image[Te])}}}y(b)&&P(o.TEXTURE_CUBE_MAP),Ne.__version=ge.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function xe(L,b,J,ie,ge,Ne){const ze=f.convert(J.format,J.colorSpace),ve=f.convert(J.type),ye=C(J.internalFormat,ze,ve,J.normalized,J.colorSpace),Oe=s.get(b),nt=s.get(J);if(nt.__renderTarget=b,!Oe.__hasExternalTextures){const Fe=Math.max(1,b.width>>Ne),Pe=Math.max(1,b.height>>Ne);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?i.texImage3D(ge,Ne,ye,Fe,Pe,b.depth,0,ze,ve,null):i.texImage2D(ge,Ne,ye,Fe,Pe,0,ze,ve,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),St(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ie,ge,nt.__webglTexture,0,ft(b)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ie,ge,nt.__webglTexture,Ne),i.bindFramebuffer(o.FRAMEBUFFER,null)}function De(L,b,J){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const ie=b.depthTexture,ge=ie&&ie.isDepthTexture?ie.type:null,Ne=U(b.stencilBuffer,ge),ze=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;St(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft(b),Ne,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft(b),Ne,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ze,o.RENDERBUFFER,L)}else{const ie=b.textures;for(let ge=0;ge<ie.length;ge++){const Ne=ie[ge],ze=f.convert(Ne.format,Ne.colorSpace),ve=f.convert(Ne.type),ye=C(Ne.internalFormat,ze,ve,Ne.normalized,Ne.colorSpace);St(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft(b),ye,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft(b),ye,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ye,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(L,b,J){const ie=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(b.depthTexture);if(ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),ue(o.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=f.convert(b.depthTexture.format),nt=f.convert(b.depthTexture.type);let Fe;b.depthTexture.format===La?Fe=o.DEPTH_COMPONENT24:b.depthTexture.format===Wr&&(Fe=o.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Fe,b.width,b.height,0,Oe,nt,null)}}else re(b.depthTexture,0);const Ne=ge.__webglTexture,ze=ft(b),ve=ie?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,ye=b.depthTexture.format===Wr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===La)St(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,ve,Ne,0,ze):o.framebufferTexture2D(o.FRAMEBUFFER,ye,ve,Ne,0);else if(b.depthTexture.format===Wr)St(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,ve,Ne,0,ze):o.framebufferTexture2D(o.FRAMEBUFFER,ye,ve,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(L){const b=s.get(L),J=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",ge)};ie.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=ie}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let ie=0;ie<6;ie++)Ht(b.__webglFramebuffer[ie],L,ie);else{const ie=L.texture.mipmaps;ie&&ie.length>0?Ht(b.__webglFramebuffer[0],L,0):Ht(b.__webglFramebuffer,L,0)}else if(J){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=o.createRenderbuffer(),De(b.__webglDepthbuffer[ie],L,!1);else{const ge=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer[ie];o.bindRenderbuffer(o.RENDERBUFFER,Ne),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ne)}}else{const ie=L.texture.mipmaps;if(ie&&ie.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),De(b.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ne),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ne)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(L,b,J){const ie=s.get(L);b!==void 0&&xe(ie.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&_t(L)}function He(L){const b=L.texture,J=s.get(L),ie=s.get(b);L.addEventListener("dispose",E);const ge=L.textures,Ne=L.isWebGLCubeRenderTarget===!0,ze=ge.length>1;if(ze||(ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture()),ie.__version=b.version,d.memory.textures++),Ne){J.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ve]=[];for(let ye=0;ye<b.mipmaps.length;ye++)J.__webglFramebuffer[ve][ye]=o.createFramebuffer()}else J.__webglFramebuffer[ve]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)J.__webglFramebuffer[ve]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(ze)for(let ve=0,ye=ge.length;ve<ye;ve++){const Oe=s.get(ge[ve]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&St(L)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ve=0;ve<ge.length;ve++){const ye=ge[ve];J.__webglColorRenderbuffer[ve]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ve]);const Oe=f.convert(ye.format,ye.colorSpace),nt=f.convert(ye.type),Fe=C(ye.internalFormat,Oe,nt,ye.normalized,ye.colorSpace,L.isXRRenderTarget===!0),Pe=ft(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe,Fe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,J.__webglColorRenderbuffer[ve])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),De(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ne){i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture),ue(o.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)xe(J.__webglFramebuffer[ve][ye],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ye);else xe(J.__webglFramebuffer[ve],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);y(b)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let ve=0,ye=ge.length;ve<ye;ve++){const Oe=ge[ve],nt=s.get(Oe);let Fe=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Fe=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Fe,nt.__webglTexture),ue(Fe,Oe),xe(J.__webglFramebuffer,L,Oe,o.COLOR_ATTACHMENT0+ve,Fe,0),y(Oe)&&P(Fe)}i.unbindTexture()}else{let ve=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ve,ie.__webglTexture),ue(ve,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)xe(J.__webglFramebuffer[ye],L,b,o.COLOR_ATTACHMENT0,ve,ye);else xe(J.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,ve,0);y(b)&&P(ve),i.unbindTexture()}L.depthBuffer&&_t(L)}function Re(L){const b=L.textures;for(let J=0,ie=b.length;J<ie;J++){const ge=b[J];if(y(ge)){const Ne=X(L),ze=s.get(ge).__webglTexture;i.bindTexture(Ne,ze),P(Ne),i.unbindTexture()}}}const Ce=[],ot=[];function xt(L){if(L.samples>0){if(St(L)===!1){const b=L.textures,J=L.width,ie=L.height;let ge=o.COLOR_BUFFER_BIT;const Ne=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ze=s.get(L),ve=b.length>1;if(ve)for(let Oe=0;Oe<b.length;Oe++)i.bindFramebuffer(o.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const ye=L.texture.mipmaps;ye&&ye.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),ve){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ze.__webglColorRenderbuffer[Oe]);const nt=s.get(b[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,nt,0)}o.blitFramebuffer(0,0,J,ie,0,0,J,ie,ge,o.NEAREST),m===!0&&(Ce.length=0,ot.length=0,Ce.push(o.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Ce.push(Ne),ot.push(Ne),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ve)for(let Oe=0;Oe<b.length;Oe++){i.bindFramebuffer(o.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,ze.__webglColorRenderbuffer[Oe]);const nt=s.get(b[Oe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,nt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&m){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ft(L){return Math.min(c.maxSamples,L.samples)}function St(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function q(L){const b=d.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Et(L,b){const J=L.colorSpace,ie=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Au&&J!==mr&&(It.getTransfer(J)===Kt?(ie!==Ii||ge!==bi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",J)),b}function ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.getTextureUnits=Y,this.setTextureUnits=ee,this.setTexture2D=re,this.setTexture2DArray=ae,this.setTexture3D=fe,this.setTextureCube=_e,this.rebindTextures=vt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function d3(o,t){function i(s,c=mr){let f;const d=It.getTransfer(c);if(s===bi)return o.UNSIGNED_BYTE;if(s===kp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Xp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Fx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Bx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ix)return o.BYTE;if(s===zx)return o.SHORT;if(s===_l)return o.UNSIGNED_SHORT;if(s===Vp)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ca)return o.HALF_FLOAT;if(s===Hx)return o.ALPHA;if(s===Gx)return o.RGB;if(s===Ii)return o.RGBA;if(s===La)return o.DEPTH_COMPONENT;if(s===Wr)return o.DEPTH_STENCIL;if(s===Vx)return o.RED;if(s===Wp)return o.RED_INTEGER;if(s===Zr)return o.RG;if(s===qp)return o.RG_INTEGER;if(s===Yp)return o.RGBA_INTEGER;if(s===vu||s===xu||s===Su||s===yu)if(d===Kt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===vu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===vu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rp||s===sp||s===op||s===lp)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===rp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===op)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cp||s===up||s===fp||s===dp||s===hp||s===bu||s===pp)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===cp||s===up)return d===Kt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===fp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===dp)return f.COMPRESSED_R11_EAC;if(s===hp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===bu)return f.COMPRESSED_RG11_EAC;if(s===pp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===bp||s===Tp||s===Ap||s===Rp||s===Cp)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===mp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_p)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ep)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ap)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cp)return d===Kt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wp||s===Np||s===Dp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===wp)return d===Kt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Np)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Up||s===Lp||s===Tu||s===Op)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Up)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Lp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Op)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const h3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p3=`
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

}`;class m3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Qx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Hi({vertexShader:h3,fragmentShader:p3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bi(new ao(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g3 extends Kr{constructor(t,i){super();const s=this;let c=null,f=1,d=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,T=null;const N=typeof XRWebGLBinding<"u",S=new m3,y={},P=i.getContextAttributes();let X=null,C=null;const U=[],O=[],I=new Xt;let E=null,D=null;const B=new Ei;B.viewport=new un;const H=new Ei;H.viewport=new un;const Q=[B,H],j=new E1;let Y=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=U[K];return de===void 0&&(de=new Eh,U[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=U[K];return de===void 0&&(de=new Eh,U[K]=de),de.getGripSpace()},this.getHand=function(K){let de=U[K];return de===void 0&&(de=new Eh,U[K]=de),de.getHandSpace()};function G(K){const de=O.indexOf(K.inputSource);if(de===-1)return;const Ae=U[de];Ae!==void 0&&(Ae.update(K.inputSource,K.frame,p||d),Ae.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){c.removeEventListener("select",G),c.removeEventListener("selectstart",G),c.removeEventListener("selectend",G),c.removeEventListener("squeeze",G),c.removeEventListener("squeezestart",G),c.removeEventListener("squeezeend",G),c.removeEventListener("end",V),c.removeEventListener("inputsourceschange",re);for(let K=0;K<U.length;K++){const de=O[K];de!==null&&(O[K]=null,U[K].disconnect(de))}Y=null,ee=null,S.reset();for(const K in y)delete y[K];if(t.setRenderTarget(X),M=null,x=null,_=null,c=null,C=null,be.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),D!==null){const K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){f=K,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(c,i)),_},this.getFrame=function(){return T},this.getSession=function(){return c},this.setSession=async function(K){if(c=K,c!==null){if(X=t.getRenderTarget(),c.addEventListener("select",G),c.addEventListener("selectstart",G),c.addEventListener("selectend",G),c.addEventListener("squeeze",G),c.addEventListener("squeezestart",G),c.addEventListener("squeezeend",G),c.addEventListener("end",V),c.addEventListener("inputsourceschange",re),P.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ie=null,xe=null;P.depth&&(xe=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=P.stencil?Wr:La,Ie=P.stencil?vl:la);const De={colorFormat:i.RGBA8,depthFormat:xe,scaleFactor:f};_=this.getBinding(),x=_.createProjectionLayer(De),c.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),C=new zi(x.textureWidth,x.textureHeight,{format:Ii,type:bi,depthTexture:new Sl(x.textureWidth,x.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Ae={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,i,Ae),c.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new zi(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await c.requestReferenceSpace(h),be.setContext(c),be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function re(K){for(let de=0;de<K.removed.length;de++){const Ae=K.removed[de],Ie=O.indexOf(Ae);Ie>=0&&(O[Ie]=null,U[Ie].disconnect(Ae))}for(let de=0;de<K.added.length;de++){const Ae=K.added[de];let Ie=O.indexOf(Ae);if(Ie===-1){for(let De=0;De<U.length;De++)if(De>=O.length){O.push(Ae),Ie=De;break}else if(O[De]===null){O[De]=Ae,Ie=De;break}if(Ie===-1)break}const xe=U[Ie];xe&&xe.connect(Ae)}}const ae=new me,fe=new me;function _e(K,de,Ae){ae.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(Ae.matrixWorld);const Ie=ae.distanceTo(fe),xe=de.projectionMatrix.elements,De=Ae.projectionMatrix.elements,Ht=xe[14]/(xe[10]-1),_t=xe[14]/(xe[10]+1),vt=(xe[9]+1)/xe[5],He=(xe[9]-1)/xe[5],Re=(xe[8]-1)/xe[0],Ce=(De[8]+1)/De[0],ot=Ht*Re,xt=Ht*Ce,ft=Ie/(-Re+Ce),St=ft*-Re;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const q=Ht+ft,Et=_t+ft,ct=ot-St,L=xt+(Ie-St),b=vt*_t/Et*q,J=He*_t/Et*q;K.projectionMatrix.makePerspective(ct,L,b,J,q,Et),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ke(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(c===null)return;let de=K.near,Ae=K.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),j.near=H.near=B.near=de,j.far=H.far=B.far=Ae,(Y!==j.near||ee!==j.far)&&(c.updateRenderState({depthNear:j.near,depthFar:j.far}),Y=j.near,ee=j.far),j.layers.mask=K.layers.mask|6,B.layers.mask=j.layers.mask&-5,H.layers.mask=j.layers.mask&-3;const Ie=K.parent,xe=j.cameras;ke(j,Ie);for(let De=0;De<xe.length;De++)ke(xe[De],Ie);xe.length===2?_e(j,B,H):j.projectionMatrix.copy(B.projectionMatrix),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),we(K,j,Ie)};function we(K,de,Ae){Ae===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(Ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Pp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(K){m=K,x!==null&&(x.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(K){return y[K]};let F=null;function ue(K,de){if(g=de.getViewerPose(p||d),T=de,g!==null){const Ae=g.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let Ie=!1;Ae.length!==j.cameras.length&&(j.cameras.length=0,Ie=!0);for(let _t=0;_t<Ae.length;_t++){const vt=Ae[_t];let He=null;if(M!==null)He=M.getViewport(vt);else{const Ce=_.getViewSubImage(x,vt);He=Ce.viewport,_t===0&&(t.setRenderTargetTextures(C,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(C))}let Re=Q[_t];Re===void 0&&(Re=new Ei,Re.layers.enable(_t),Re.viewport=new un,Q[_t]=Re),Re.matrix.fromArray(vt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(vt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(He.x,He.y,He.width,He.height),_t===0&&(j.matrix.copy(Re.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ie===!0&&j.cameras.push(Re)}const xe=c.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&N){_=s.getBinding();const _t=_.getDepthInformation(Ae[0]);_t&&_t.isValid&&_t.texture&&S.init(_t,c.renderState)}if(xe&&xe.includes("camera-access")&&N){t.state.unbindTexture(),_=s.getBinding();for(let _t=0;_t<Ae.length;_t++){const vt=Ae[_t].camera;if(vt){let He=y[vt];He||(He=new Qx,y[vt]=He);const Re=_.getCameraImage(vt);He.sourceTexture=Re}}}}for(let Ae=0;Ae<U.length;Ae++){const Ie=O[Ae],xe=U[Ae];Ie!==null&&xe!==void 0&&xe.update(Ie,de,p||d)}F&&F(K,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),T=null}const be=new tS;be.setAnimationLoop(ue),this.setAnimationLoop=function(K){F=K},this.dispose=function(){}}}const _3=new _n,lS=new gt;lS.set(-1,0,0,0,1,0,0,0,1);function v3(o,t){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,Jx(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function c(S,y,P,X,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?f(S,y):y.isMeshLambertMaterial?(f(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(f(S,y),_(S,y)):y.isMeshPhongMaterial?(f(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(f(S,y),x(S,y),y.isMeshPhysicalMaterial&&M(S,y,C)):y.isMeshMatcapMaterial?(f(S,y),T(S,y)):y.isMeshDepthMaterial?f(S,y):y.isMeshDistanceMaterial?(f(S,y),N(S,y)):y.isMeshNormalMaterial?f(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?m(S,y,P,X):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Kn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Kn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=t.get(y),X=P.envMap,C=P.envMapRotation;X&&(S.envMap.value=X,S.envMapRotation.value.setFromMatrix4(_3.makeRotationFromEuler(C)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(lS),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,P,X){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=X*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function x(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function N(S,y){const P=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function x3(o,t,i,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const O=U.program;s.uniformBlockBinding(C,O)}function p(C,U){let O=c[C.id];O===void 0&&(S(C),O=g(C),c[C.id]=O,C.addEventListener("dispose",P));const I=U.program;s.updateUBOMapping(C,I);const E=t.render.frame;f[C.id]!==E&&(x(C),f[C.id]=E)}function g(C){const U=_();C.__bindingPointIndex=U;const O=o.createBuffer(),I=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,I,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,O),O}function _(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const U=c[C.id],O=C.uniforms,I=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let E=0,D=O.length;E<D;E++){const B=O[E];if(Array.isArray(B))for(let H=0,Q=B.length;H<Q;H++)M(B[H],E,H,I);else M(B,E,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(C,U,O,I){if(N(C,U,O,I)===!0){const E=C.__offset,D=C.value;if(Array.isArray(D)){let B=0;for(let H=0;H<D.length;H++){const Q=D[H],j=y(Q);T(Q,C.__data,B),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function T(C,U,O){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,O)}function N(C,U,O,I){const E=C.value,D=U+"_"+O;if(I[D]===void 0)return typeof E=="number"||typeof E=="boolean"?I[D]=E:ArrayBuffer.isView(E)?I[D]=E.slice():I[D]=E.clone(),!0;{const B=I[D];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return I[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(C){const U=C.uniforms;let O=0;const I=16;for(let D=0,B=U.length;D<B;D++){const H=Array.isArray(U[D])?U[D]:[U[D]];for(let Q=0,j=H.length;Q<j;Q++){const Y=H[Q],ee=Array.isArray(Y.value)?Y.value:[Y.value];for(let G=0,V=ee.length;G<V;G++){const re=ee[G],ae=y(re),fe=O%I,_e=fe%ae.boundary,ke=fe+_e;O+=_e,ke!==0&&I-ke<ae.storage&&(O+=I-ke),Y.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=O,O+=ae.storage}}}const E=O%I;return E>0&&(O+=I-E),C.__size=O,C.__cache={},this}function y(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",C),U}function P(C){const U=C.target;U.removeEventListener("dispose",P);const O=d.indexOf(U.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(c[U.id]),delete c[U.id],delete f[U.id]}function X(){for(const C in c)o.deleteBuffer(c[C]);d=[],c={},f={}}return{bind:m,update:p,dispose:X}}const S3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function y3(){return na===null&&(na=new l1(S3,16,16,Zr,ca),na.name="DFG_LUT",na.minFilter=In,na.magFilter=In,na.wrapS=Pi,na.wrapT=Pi,na.generateMipmaps=!1,na.needsUpdate=!0),na}class M3{constructor(t={}){const{canvas:i=IE(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=bi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const N=M,S=new Set([Yp,qp,Wp]),y=new Set([bi,la,_l,vl,kp,Xp]),P=new Uint32Array(4),X=new Int32Array(4),C=new me;let U=null,O=null;const I=[],E=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let H=!1,Q=null,j=null,Y=null,ee=null;this._outputColorSpace=Mi;let G=0,V=0,re=null,ae=-1,fe=null;const _e=new un,ke=new un;let we=null;const F=new kt(0);let ue=0,be=i.width,K=i.height,de=1,Ae=null,Ie=null;const xe=new un(0,0,be,K),De=new un(0,0,be,K);let Ht=!1;const _t=new jx;let vt=!1,He=!1;const Re=new _n,Ce=new me,ot=new un,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function St(){return re===null?de:1}let q=s;function Et(A,k){return i.getContext(A,k)}let ct,L,b,J,ie,ge,Ne,ze,ve,ye,Oe,nt,Fe,Pe,Be,rt,it,Z,Ue,Se,Le,Xe,Te;try{const A={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gp}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",pt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),q===null){const k="webgl2";if(q=Et(k,A),q===null)throw Et(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(A){throw i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),Bt("WebGLRenderer: "+A.message),A}function at(){ct=new yA(q),ct.init(),Le=new d3(q,ct),L=new fA(q,ct,t,Le),b=new u3(q,ct),L.reversedDepthBuffer&&x&&b.buffers.depth.setReversed(!0),j=q.createFramebuffer(),Y=q.createFramebuffer(),ee=q.createFramebuffer(),J=new bA(q),ie=new K2,ge=new f3(q,ct,b,ie,L,Le,J),Ne=new SA(B),ze=new A1(q),Xe=new cA(q,ze),ve=new MA(q,ze,J,Xe),ye=new AA(q,ve,ze,Xe,J),Z=new TA(q,L,ge),Be=new dA(ie),Oe=new j2(B,Ne,ct,L,Xe,Be),nt=new v3(B,ie),Fe=new J2,Pe=new a3(ct),it=new lA(B,Ne,b,ye,T,m),rt=new c3(B,ye,L),Te=new x3(q,J,L,b),Ue=new uA(q,ct,J),Se=new EA(q,ct,J),J.programs=Oe.programs,B.capabilities=L,B.extensions=ct,B.properties=ie,B.renderLists=Fe,B.shadowMap=rt,B.state=b,B.info=J}N!==bi&&(D=new CA(N,i.width,i.height,h,c,f));const Ze=new g3(B,q);this.xr=Ze,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(be,K,!1))},this.getSize=function(A){return A.set(be,K)},this.setSize=function(A,k,pe=!0){if(Ze.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}be=A,K=k,i.width=Math.floor(A*de),i.height=Math.floor(k*de),pe===!0&&(i.style.width=A+"px",i.style.height=k+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(be*de,K*de).floor()},this.setDrawingBufferSize=function(A,k,pe){be=A,K=k,de=pe,i.width=Math.floor(A*pe),i.height=Math.floor(k*pe),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(N===bi){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(_e)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,k,pe,oe){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,k,pe,oe),b.viewport(_e.copy(xe).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,k,pe,oe){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,k,pe,oe),b.scissor(ke.copy(De).multiplyScalar(de).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(A){b.setScissorTest(Ht=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){Ie=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,pe=!0){let oe=0;if(A){let le=!1;if(re!==null){const We=re.texture.format;le=S.has(We)}if(le){const We=re.texture.type,Ke=y.has(We),Ge=it.getClearColor(),$e=it.getClearAlpha(),et=Ge.r,ut=Ge.g,mt=Ge.b;Ke?(P[0]=et,P[1]=ut,P[2]=mt,P[3]=$e,q.clearBufferuiv(q.COLOR,0,P)):(X[0]=et,X[1]=ut,X[2]=mt,X[3]=$e,q.clearBufferiv(q.COLOR,0,X))}else oe|=q.COLOR_BUFFER_BIT}k&&(oe|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(oe|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),it.dispose(),Fe.dispose(),Pe.dispose(),ie.dispose(),Ne.dispose(),ye.dispose(),Xe.dispose(),Te.dispose(),Oe.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",_r),Ze.removeEventListener("sessionend",Ia),Gi.stop()};function Ot(A){A.preventDefault(),Tv("WebGLRenderer: Context Lost."),H=!0}function pt(){Tv("WebGLRenderer: Context Restored."),H=!1;const A=J.autoReset,k=rt.enabled,pe=rt.autoUpdate,oe=rt.needsUpdate,le=rt.type;at(),J.autoReset=A,rt.enabled=k,rt.autoUpdate=pe,rt.needsUpdate=oe,rt.type=le}function Qn(A){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ui(A){const k=A.target;k.removeEventListener("dispose",ui),Ou(k)}function Ou(A){Qr(A),ie.remove(A)}function Qr(A){const k=ie.get(A).programs;k!==void 0&&(k.forEach(function(pe){Oe.releaseProgram(pe)}),A.isShaderMaterial&&Oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,pe,oe,le,We){k===null&&(k=xt);const Ke=le.isMesh&&le.matrixWorld.determinantAffine()<0,Ge=po(A,k,pe,oe,le);b.setMaterial(oe,Ke);let $e=pe.index,et=1;if(oe.wireframe===!0){if($e=ve.getWireframeAttribute(pe),$e===void 0)return;et=2}const ut=pe.drawRange,mt=pe.attributes.position;let Qe=ut.start*et,Ct=(ut.start+ut.count)*et;We!==null&&(Qe=Math.max(Qe,We.start*et),Ct=Math.min(Ct,(We.start+We.count)*et)),$e!==null?(Qe=Math.max(Qe,0),Ct=Math.min(Ct,$e.count)):mt!=null&&(Qe=Math.max(Qe,0),Ct=Math.min(Ct,mt.count));const Tt=Ct-Qe;if(Tt<0||Tt===1/0)return;Xe.setup(le,oe,Ge,pe,$e);let Qt,Wt=Ue;if($e!==null&&(Qt=ze.get($e),Wt=Se,Wt.setIndex(Qt)),le.isMesh)oe.wireframe===!0?(b.setLineWidth(oe.wireframeLinewidth*St()),Wt.setMode(q.LINES)):Wt.setMode(q.TRIANGLES);else if(le.isLine){let vn=oe.linewidth;vn===void 0&&(vn=1),b.setLineWidth(vn*St()),le.isLineSegments?Wt.setMode(q.LINES):le.isLineLoop?Wt.setMode(q.LINE_LOOP):Wt.setMode(q.LINE_STRIP)}else le.isPoints?Wt.setMode(q.POINTS):le.isSprite&&Wt.setMode(q.TRIANGLES);if(le.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Wt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const vn=le._multiDrawStarts,qe=le._multiDrawCounts,sn=le._multiDrawCount,Pt=$e?ze.get($e).bytesPerElement:1,Fn=ie.get(oe).currentProgram.getUniforms();for(let Jn=0;Jn<sn;Jn++)Fn.setValue(q,"_gl_DrawID",Jn),Wt.render(vn[Jn]/Pt,qe[Jn])}else if(le.isInstancedMesh)Wt.renderInstances(Qe,Tt,le.count);else if(pe.isInstancedBufferGeometry){const vn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,qe=Math.min(pe.instanceCount,vn);Wt.renderInstances(Qe,Tt,qe)}else Wt.render(Qe,Tt)};function gr(A,k,pe,oe){Q!==null&&A.isNodeMaterial&&Q.setObject(oe,A),vt===!0&&Be.setState(A,pe,!1),A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,vr(A,k,oe),A.side=qr,A.needsUpdate=!0,vr(A,k,oe),A.side=aa):vr(A,k,oe)}this.compile=function(A,k,pe=null){pe===null&&(pe=A),Q!==null&&Q.renderStart(A,k,pe),O=Pe.get(pe),O.init(k),E.push(O),pe.traverseVisible(function(le){le.isLight&&le.layers.test(k.layers)&&(O.pushLight(le),le.castShadow&&O.pushShadow(le))}),A!==pe&&A.traverseVisible(function(le){le.isLight&&le.layers.test(k.layers)&&(O.pushLight(le),le.castShadow&&O.pushShadow(le))}),O.setupLights(),Q!==null&&Q.updateLights(O.state.lightsArray),He=this.localClippingEnabled,vt=Be.init(this.clippingPlanes,He),vt===!0&&Be.setGlobalState(this.clippingPlanes,k),Q!==null&&rt.render(O.state.shadowsArray,pe,k);const oe=new Set;return A.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const We=le.material;if(We)if(Array.isArray(We))for(let Ke=0;Ke<We.length;Ke++){const Ge=We[Ke];gr(Ge,pe,k,le),oe.add(Ge)}else gr(We,pe,k,le),oe.add(We)}),O=E.pop(),Q!==null&&Q.renderEnd(),oe},this.compileAsync=function(A,k,pe=null){const oe=this.compile(A,k,pe);return new Promise(le=>{function We(){if(oe.forEach(function(Ke){const $e=ie.get(Ke).currentProgram;($e===void 0||$e.isReady())&&oe.delete(Ke)}),oe.size===0){le(A);return}setTimeout(We,10)}ct.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Pa=null;function ua(A){Pa&&Pa(A)}function _r(){Gi.stop()}function Ia(){Gi.start()}const Gi=new tS;Gi.setAnimationLoop(ua),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(A){Pa=A,Ze.setAnimationLoop(A),A===null?Gi.stop():Gi.start()},Ze.addEventListener("sessionstart",_r),Ze.addEventListener("sessionend",Ia),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Q!==null&&Q.renderStart(A,k);const pe=Ze.enabled===!0&&Ze.isPresenting===!0,oe=D!==null&&(re===null||pe)&&D.begin(B,re);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(k),k=Ze.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,k,re),O=Pe.get(A,E.length),O.init(k),O.state.textureUnits=ge.getTextureUnits(),E.push(O),Re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),_t.setFromProjectionMatrix(Re,sa,k.reversedDepth),He=this.localClippingEnabled,vt=Be.init(this.clippingPlanes,He),U=Fe.get(A,I.length),U.init(),I.push(U),Ze.enabled===!0&&Ze.isPresenting===!0){const Ke=B.xr.getDepthSensingMesh();Ke!==null&&lo(Ke,k,-1/0,B.sortObjects)}lo(A,k,0,B.sortObjects),U.finish(),Q!==null&&Q.updateLights(O.state.lightsArray),B.sortObjects===!0&&U.sort(Ae,Ie),ft=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,ft&&it.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Be.beginShadows();const le=O.state.shadowsArray;if(rt.render(le,A,k),vt===!0&&Be.endShadows(),(oe&&D.hasRenderPass())===!1){const Ke=U.opaque,Ge=U.transmissive;if(O.setupLights(),k.isArrayCamera){const $e=k.cameras;if(Ge.length>0)for(let et=0,ut=$e.length;et<ut;et++){const mt=$e[et];Jr(Ke,Ge,A,mt)}ft&&it.render(A);for(let et=0,ut=$e.length;et<ut;et++){const mt=$e[et];co(U,A,mt,mt.viewport)}}else Ge.length>0&&Jr(Ke,Ge,A,k),ft&&it.render(A),co(U,A,k)}re!==null&&V===0&&(ge.updateMultisampleRenderTarget(re),ge.updateRenderTargetMipmap(re)),oe&&D.end(B),A.isScene===!0&&A.onAfterRender(B,A,k),Xe.resetDefaultState(),ae=-1,fe=null,E.pop(),E.length>0?(O=E[E.length-1],ge.setTextureUnits(O.state.textureUnits),vt===!0&&Be.setGlobalState(B.clippingPlanes,O.state.camera)):O=null,I.pop(),I.length>0?U=I[I.length-1]:U=null,Q!==null&&Q.renderEnd()};function lo(A,k,pe,oe){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)pe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(_t)){oe&&ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const Ke=ye.update(A),Ge=A.material;Ge.visible&&U.push(A,Ke,Ge,pe,ot.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(_t))){const Ke=ye.update(A),Ge=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ot.copy(A.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),ot.copy(Ke.boundingSphere.center)),ot.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Ge)){const $e=Ke.groups;for(let et=0,ut=$e.length;et<ut;et++){const mt=$e[et],Qe=Ge[mt.materialIndex];Qe&&Qe.visible&&U.push(A,Ke,Qe,pe,ot.z,mt,k)}}else Ge.visible&&U.push(A,Ke,Ge,pe,ot.z,null,k)}}const We=A.children;for(let Ke=0,Ge=We.length;Ke<Ge;Ke++)lo(We[Ke],k,pe,oe)}function co(A,k,pe,oe){const{opaque:le,transmissive:We,transparent:Ke}=A;O.setupLightsView(pe),vt===!0&&Be.setGlobalState(B.clippingPlanes,pe),oe&&b.viewport(_e.copy(oe)),le.length>0&&Vi(le,k,pe),We.length>0&&Vi(We,k,pe),Ke.length>0&&Vi(Ke,k,pe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Jr(A,k,pe,oe){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[oe.id]===void 0){const Qe=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[oe.id]=new zi(1,1,{generateMipmaps:!0,type:Qe?ca:bi,minFilter:Xr,samples:Math.max(4,L.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const We=O.state.transmissionRenderTarget[oe.id],Ke=oe.viewport||_e;We.setSize(Ke.z*B.transmissionResolutionScale,Ke.w*B.transmissionResolutionScale);const Ge=B.getRenderTarget(),$e=B.getActiveCubeFace(),et=B.getActiveMipmapLevel();B.setRenderTarget(We),B.getClearColor(F),ue=B.getClearAlpha(),ue<1&&B.setClearColor(16777215,.5),B.clear(),ft&&it.render(pe);const ut=B.toneMapping;B.toneMapping=oa;const mt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),O.setupLightsView(oe),vt===!0&&Be.setGlobalState(B.clippingPlanes,oe),Vi(A,pe,oe),ge.updateMultisampleRenderTarget(We),ge.updateRenderTargetMipmap(We),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ct=0,Tt=k.length;Ct<Tt;Ct++){const Qt=k[Ct],{object:Wt,geometry:vn,material:qe,group:sn}=Qt;if(qe.side===aa&&Wt.layers.test(oe.layers)){const Pt=qe.side;qe.side=Kn,qe.needsUpdate=!0,Tl(Wt,pe,oe,vn,qe,sn),qe.side=Pt,qe.needsUpdate=!0,Qe=!0}}Qe===!0&&(ge.updateMultisampleRenderTarget(We),ge.updateRenderTargetMipmap(We))}B.setRenderTarget(Ge,$e,et),B.setClearColor(F,ue),mt!==void 0&&(oe.viewport=mt),B.toneMapping=ut}function Vi(A,k,pe){const oe=k.isScene===!0?k.overrideMaterial:null;for(let le=0,We=A.length;le<We;le++){const Ke=A[le],{object:Ge,geometry:$e,group:et}=Ke;let ut=Ke.material;ut.allowOverride===!0&&oe!==null&&(ut=oe),Ge.layers.test(pe.layers)&&Tl(Ge,k,pe,$e,ut,et)}}function Tl(A,k,pe,oe,le,We){Q!==null&&le.isNodeMaterial&&Q.setObject(A,le),A.onBeforeRender(B,k,pe,oe,le,We),A.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),le.onBeforeRender(B,k,pe,oe,A,We),le.transparent===!0&&le.side===aa&&le.forceSinglePass===!1?(le.side=Kn,le.needsUpdate=!0,B.renderBufferDirect(pe,k,oe,le,A,We),le.side=qr,le.needsUpdate=!0,B.renderBufferDirect(pe,k,oe,le,A,We),le.side=aa):B.renderBufferDirect(pe,k,oe,le,A,We),A.onAfterRender(B,k,pe,oe,le,We)}function vr(A,k,pe){k.isScene!==!0&&(k=xt);const oe=ie.get(A),le=O.state.lights,We=O.state.shadowsArray,Ke=le.state.version,Ge=Oe.getParameters(A,le.state,We,k,pe,O.state.lightProbeGridArray),$e=Oe.getProgramCacheKey(Ge);let et=oe.programs;oe.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,oe.fog=k.fog;const ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;oe.envMap=Ne.get(A.envMap||oe.environment,ut),oe.envMapRotation=oe.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",ui),et=new Map,oe.programs=et);let mt=et.get($e);if(mt!==void 0){if(oe.currentProgram===mt&&oe.lightsStateVersion===Ke)return fo(A,Ge),mt}else Ge.uniforms=Oe.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,pe,Ge),A.onBeforeCompile(Ge,B),mt=Oe.acquireProgram(Ge,$e),et.set($e,mt),oe.uniforms=Ge.uniforms;const Qe=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=Be.uniform),fo(A,Ge),oe.needsLights=Rl(A),oe.lightsStateVersion=Ke,oe.needsLights&&(Qe.ambientLightColor.value=le.state.ambient,Qe.lightProbe.value=le.state.probe,Qe.sunLights.value=le.state.sun,Qe.sunLightShadows.value=le.state.sunShadow,Qe.directionalLights.value=le.state.directional,Qe.directionalLightShadows.value=le.state.directionalShadow,Qe.spotLights.value=le.state.spot,Qe.spotLightShadows.value=le.state.spotShadow,Qe.rectAreaLights.value=le.state.rectArea,Qe.ltc_1.value=le.state.rectAreaLTC1,Qe.ltc_2.value=le.state.rectAreaLTC2,Qe.pointLights.value=le.state.point,Qe.pointLightShadows.value=le.state.pointShadow,Qe.hemisphereLights.value=le.state.hemi,Qe.sunShadowMatrix.value=le.state.sunShadowMatrix,Qe.sunShadowCascade.value=le.state.sunShadowCascade,Qe.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Qe.spotLightMatrix.value=le.state.spotLightMatrix,Qe.spotLightMap.value=le.state.spotLightMap,Qe.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=O.state.lightProbeGridArray.length>0,oe.currentProgram=mt,oe.uniformsList=null,mt}function uo(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Mu.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function fo(A,k){const pe=ie.get(A);pe.outputColorSpace=k.outputColorSpace,pe.batching=k.batching,pe.batchingColor=k.batchingColor,pe.instancing=k.instancing,pe.instancingColor=k.instancingColor,pe.instancingMorph=k.instancingMorph,pe.skinning=k.skinning,pe.morphTargets=k.morphTargets,pe.morphNormals=k.morphNormals,pe.morphColors=k.morphColors,pe.morphTargetsCount=k.morphTargetsCount,pe.numClippingPlanes=k.numClippingPlanes,pe.numIntersection=k.numClipIntersection,pe.vertexAlphas=k.vertexAlphas,pe.vertexTangents=k.vertexTangents,pe.toneMapping=k.toneMapping}function ho(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let pe=0,oe=A.length;pe<oe;pe++){const le=A[pe];if(le.texture!==null&&le.boundingBox.containsPoint(C))return le}return null}function po(A,k,pe,oe,le){k.isScene!==!0&&(k=xt),ge.resetTextureUnits();const We=k.fog,Ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?k.environment:null,Ge=re===null?B.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:It.workingColorSpace,$e=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,et=Ne.get(oe.envMap||Ke,$e),ut=oe.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,mt=!!pe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Qe=!!pe.morphAttributes.position,Ct=!!pe.morphAttributes.normal,Tt=!!pe.morphAttributes.color;let Qt=oa;oe.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qt=B.toneMapping);const Wt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,vn=Wt!==void 0?Wt.length:0,qe=ie.get(oe),sn=O.state.lights;if(vt===!0&&(He===!0||A!==fe)){const Dt=A===fe&&oe.id===ae;Be.setState(oe,A,Dt)}let Pt=!1;oe.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==sn.state.version||qe.outputColorSpace!==Ge||le.isBatchedMesh&&qe.batching===!1||!le.isBatchedMesh&&qe.batching===!0||le.isBatchedMesh&&qe.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&qe.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&qe.instancing===!1||!le.isInstancedMesh&&qe.instancing===!0||le.isSkinnedMesh&&qe.skinning===!1||!le.isSkinnedMesh&&qe.skinning===!0||le.isInstancedMesh&&qe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&qe.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&qe.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&qe.instancingMorph===!1&&le.morphTexture!==null||qe.envMap!==et||oe.fog===!0&&qe.fog!==We||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Be.numPlanes||qe.numIntersection!==Be.numIntersection)||qe.vertexAlphas!==ut||qe.vertexTangents!==mt||qe.morphTargets!==Qe||qe.morphNormals!==Ct||qe.morphColors!==Tt||qe.toneMapping!==Qt||qe.morphTargetsCount!==vn||!!qe.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,qe.__version=oe.version);let Fn=qe.currentProgram;Pt===!0&&(Fn=vr(oe,k,le),Q&&oe.isNodeMaterial&&Q.onUpdateProgram(oe,Fn,qe));let Jn=!1,ki=!1,At=!1;const Gt=Fn.getUniforms(),en=qe.uniforms;if(b.useProgram(Fn.program)&&(Jn=!0,ki=!0,At=!0),oe.id!==ae&&(ae=oe.id,ki=!0),qe.needsLights){const Dt=ho(O.state.lightProbeGridArray,le);qe.lightProbeGrid!==Dt&&(qe.lightProbeGrid=Dt,ki=!0)}if(Jn||fe!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(q,"projectionMatrix",A.projectionMatrix),Gt.setValue(q,"viewMatrix",A.matrixWorldInverse);const on=Gt.map.cameraPosition;on!==void 0&&on.setValue(q,Ce.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Gt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Gt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,ki=!0,At=!0)}if(qe.needsLights&&(sn.state.sunShadowMap.length>0&&Gt.setValue(q,"sunShadowMap",sn.state.sunShadowMap,ge),sn.state.directionalShadowMap.length>0&&Gt.setValue(q,"directionalShadowMap",sn.state.directionalShadowMap,ge),sn.state.spotShadowMap.length>0&&Gt.setValue(q,"spotShadowMap",sn.state.spotShadowMap,ge),sn.state.pointShadowMap.length>0&&Gt.setValue(q,"pointShadowMap",sn.state.pointShadowMap,ge)),le.isSkinnedMesh){Gt.setOptional(q,le,"bindMatrix"),Gt.setOptional(q,le,"bindMatrixInverse");const Dt=le.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Gt.setValue(q,"boneTexture",Dt.boneTexture,ge))}le.isBatchedMesh&&(Gt.setOptional(q,le,"batchingTexture"),Gt.setValue(q,"batchingTexture",le._matricesTexture,ge),Gt.setOptional(q,le,"batchingIdTexture"),Gt.setValue(q,"batchingIdTexture",le._indirectTexture,ge),Gt.setOptional(q,le,"batchingColorTexture"),le._colorsTexture!==null&&Gt.setValue(q,"batchingColorTexture",le._colorsTexture,ge));const $n=pe.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Z.update(le,pe,Fn),(ki||qe.receiveShadow!==le.receiveShadow)&&(qe.receiveShadow=le.receiveShadow,Gt.setValue(q,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=y3()),ki){if(Gt.setValue(q,"toneMappingExposure",B.toneMappingExposure),qe.needsLights&&Al(en,At),We&&oe.fog===!0&&nt.refreshFogUniforms(en,We),nt.refreshMaterialUniforms(en,oe,de,K,O.state.transmissionRenderTarget[A.id]),qe.needsLights&&qe.lightProbeGrid){const Dt=qe.lightProbeGrid;en.probesSH.value=Dt.texture,en.probesMin.value.copy(Dt.boundingBox.min),en.probesMax.value.copy(Dt.boundingBox.max),en.probesResolution.value.copy(Dt.resolution)}Mu.upload(q,uo(qe),en,ge)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Mu.upload(q,uo(qe),en,ge),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Gt.setValue(q,"center",le.center),Gt.setValue(q,"modelViewMatrix",le.modelViewMatrix),Gt.setValue(q,"normalMatrix",le.normalMatrix),Gt.setValue(q,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Dt=oe.uniformsGroups;for(let on=0,fa=Dt.length;on<fa;on++){const Cl=Dt[on];Te.update(Cl,Fn),Te.bind(Cl,Fn)}}return Fn}function Al(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Rl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(A,k,pe){const oe=ie.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ie.get(A.texture).__webglTexture=k,ie.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:pe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const pe=ie.get(A);pe.__webglFramebuffer=k,pe.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,pe=0){re=A,G=k,V=pe;let oe=null,le=!1,We=!1;if(A){const Ge=ie.get(A);if(Ge.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(q.FRAMEBUFFER,Ge.__webglFramebuffer),_e.copy(A.viewport),ke.copy(A.scissor),we=A.scissorTest,b.viewport(_e),b.scissor(ke),b.setScissorTest(we),ae=-1;return}else if(Ge.__webglFramebuffer===void 0)ge.setupRenderTarget(A);else if(Ge.__hasExternalTextures)ge.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ut=A.depthTexture;if(Ge.__boundDepthTexture!==ut){if(ut!==null&&ie.has(ut)&&(A.width!==ut.image.width||A.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(We=!0);const et=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[k])?oe=et[k][pe]:oe=et[k],le=!0):A.samples>0&&ge.useMultisampledRTT(A)===!1?oe=ie.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?oe=et[pe]:oe=et,_e.copy(A.viewport),ke.copy(A.scissor),we=A.scissorTest}else _e.copy(xe).multiplyScalar(de).floor(),ke.copy(De).multiplyScalar(de).floor(),we=Ht;if(pe!==0&&(oe=j),b.bindFramebuffer(q.FRAMEBUFFER,oe)&&b.drawBuffers(A,oe),b.viewport(_e),b.scissor(ke),b.setScissorTest(we),le){const Ge=ie.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ge.__webglTexture,pe)}else if(We){const Ge=k;for(let $e=0;$e<A.textures.length;$e++){const et=ie.get(A.textures[$e]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+$e,et.__webglTexture,pe,Ge)}}else if(A!==null&&pe!==0){const Ge=ie.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ge.__webglTexture,pe)}ae=-1};function fi(A){const k=ie.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=L.textureFormatReadable(A.format),k.__typeReadable=L.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,pe,oe,le,We,Ke,Ge=0){if(!(A&&A.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e){b.bindFramebuffer(q.FRAMEBUFFER,$e);try{const et=A.textures[Ge],ut=et.format,mt=et.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ge);const Qe=fi(et);if(Qe.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-oe&&pe>=0&&pe<=A.height-le&&q.readPixels(k,pe,oe,le,Le.convert(ut),Le.convert(mt),We)}finally{const et=re!==null?ie.get(re).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,k,pe,oe,le,We,Ke,Ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e)if(k>=0&&k<=A.width-oe&&pe>=0&&pe<=A.height-le){b.bindFramebuffer(q.FRAMEBUFFER,$e);const et=A.textures[Ge],ut=et.format,mt=et.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ge);const Qe=fi(et);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ct),q.bufferData(q.PIXEL_PACK_BUFFER,We.byteLength,q.STREAM_READ),q.readPixels(k,pe,oe,le,Le.convert(ut),Le.convert(mt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Tt=re!==null?ie.get(re).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Tt);const Qt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await zE(q,Qt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ct),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,We),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Ct),q.deleteSync(Qt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,pe=0){const oe=Math.pow(2,-pe),le=Math.floor(A.image.width*oe),We=Math.floor(A.image.height*oe),Ke=k!==null?k.x:0,Ge=k!==null?k.y:0;ge.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,pe,0,0,Ke,Ge,le,We),b.unbindTexture()},this.copyTextureToTexture=function(A,k,pe=null,oe=null,le=0,We=0){let Ke,Ge,$e,et,ut,mt,Qe,Ct,Tt;const Qt=A.isCompressedTexture?A.mipmaps[We]:A.image;if(pe!==null)Ke=pe.max.x-pe.min.x,Ge=pe.max.y-pe.min.y,$e=pe.isBox3?pe.max.z-pe.min.z:1,et=pe.min.x,ut=pe.min.y,mt=pe.isBox3?pe.min.z:0;else{const en=Math.pow(2,-le);Ke=Math.floor(Qt.width*en),Ge=Math.floor(Qt.height*en),A.isDataArrayTexture?$e=Qt.depth:A.isData3DTexture?$e=Math.floor(Qt.depth*en):$e=1,et=0,ut=0,mt=0}oe!==null?(Qe=oe.x,Ct=oe.y,Tt=oe.z):(Qe=0,Ct=0,Tt=0);const Wt=Le.convert(k.format),vn=Le.convert(k.type);let qe;k.isData3DTexture?(ge.setTexture3D(k,0),qe=q.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ge.setTexture2DArray(k,0),qe=q.TEXTURE_2D_ARRAY):(ge.setTexture2D(k,0),qe=q.TEXTURE_2D),b.activeTexture(q.TEXTURE0),b.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(q.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=b.getParameter(q.UNPACK_ROW_LENGTH),Pt=b.getParameter(q.UNPACK_IMAGE_HEIGHT),Fn=b.getParameter(q.UNPACK_SKIP_PIXELS),Jn=b.getParameter(q.UNPACK_SKIP_ROWS),ki=b.getParameter(q.UNPACK_SKIP_IMAGES);b.pixelStorei(q.UNPACK_ROW_LENGTH,Qt.width),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Qt.height),b.pixelStorei(q.UNPACK_SKIP_PIXELS,et),b.pixelStorei(q.UNPACK_SKIP_ROWS,ut),b.pixelStorei(q.UNPACK_SKIP_IMAGES,mt);const At=A.isDataArrayTexture||A.isData3DTexture,Gt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const en=ie.get(A),$n=ie.get(k),Dt=ie.get(en.__renderTarget),on=ie.get($n.__renderTarget);b.bindFramebuffer(q.READ_FRAMEBUFFER,Dt.__webglFramebuffer),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let fa=0;fa<$e;fa++)At&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(A).__webglTexture,le,mt+fa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(k).__webglTexture,We,Tt+fa)),q.blitFramebuffer(et,ut,Ke,Ge,Qe,Ct,Ke,Ge,q.DEPTH_BUFFER_BIT,q.NEAREST);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(le!==0||A.isRenderTargetTexture||ie.has(A)){const en=ie.get(A),$n=ie.get(k);b.bindFramebuffer(q.READ_FRAMEBUFFER,Y),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,ee);for(let Dt=0;Dt<$e;Dt++)At?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,en.__webglTexture,le,mt+Dt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,en.__webglTexture,le),Gt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$n.__webglTexture,We,Tt+Dt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$n.__webglTexture,We),le!==0?q.blitFramebuffer(et,ut,Ke,Ge,Qe,Ct,Ke,Ge,q.COLOR_BUFFER_BIT,q.NEAREST):Gt?q.copyTexSubImage3D(qe,We,Qe,Ct,Tt+Dt,et,ut,Ke,Ge):q.copyTexSubImage2D(qe,We,Qe,Ct,et,ut,Ke,Ge);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(qe,We,Qe,Ct,Tt,Ke,Ge,$e,Wt,vn,Qt.data):k.isCompressedArrayTexture?q.compressedTexSubImage3D(qe,We,Qe,Ct,Tt,Ke,Ge,$e,Wt,Qt.data):q.texSubImage3D(qe,We,Qe,Ct,Tt,Ke,Ge,$e,Wt,vn,Qt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,We,Qe,Ct,Ke,Ge,Wt,vn,Qt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,We,Qe,Ct,Qt.width,Qt.height,Wt,Qt.data):q.texSubImage2D(q.TEXTURE_2D,We,Qe,Ct,Ke,Ge,Wt,vn,Qt);b.pixelStorei(q.UNPACK_ROW_LENGTH,sn),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pt),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Fn),b.pixelStorei(q.UNPACK_SKIP_ROWS,Jn),b.pixelStorei(q.UNPACK_SKIP_IMAGES,ki),We===0&&k.generateMipmaps&&q.generateMipmap(qe),b.unbindTexture()},this.initRenderTarget=function(A){ie.get(A).__webglFramebuffer===void 0&&ge.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ge.setTextureCube(A,0):A.isData3DTexture?ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ge.setTexture2DArray(A,0):ge.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){G=0,V=0,re=null,b.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=It._getDrawingBufferColorSpace(t),i.unpackColorSpace=It._getUnpackColorSpace()}}const E3=`
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
`,b3=`
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
`;function T3(){const o=je.useRef(null);return je.useEffect(()=>{const t=o.current;if(!t)return;let i,s,c,f,d=[],h,m;try{i=new M3({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),s=new $E,c=new Ei(48,window.innerWidth/window.innerHeight,.1,1e3),c.position.set(0,15,35),c.lookAt(0,5,-50);const X=new y1,C=X.load("/brand/gpc/clouds/cloud-bank-a.png"),U=X.load("/brand/gpc/clouds/cloud-bank-b.png"),O=X.load("/brand/gpc/flight/mountain-ground-cutout.png");C.wrapS=C.wrapT=Pi,U.wrapS=U.wrapT=Pi;const I={uTint:{value:new kt("#faf5ee")},uOpacity:{value:.95},uDotStrength:{value:.75},uDotSize:{value:5.5},uTime:{value:0},uGroundY:{value:-120},uGroundFade:{value:45}},E=j=>new Hi({vertexShader:E3,fragmentShader:b3,uniforms:{...I,uTexture:{value:j}},transparent:!0,depthWrite:!1,side:aa});h=E(C),m=E(U),[{x:-35,y:18,z:-25,scale:65,mat:h,speed:.008},{x:38,y:14,z:-35,scale:75,mat:m,speed:-.006},{x:-10,y:22,z:-55,scale:85,mat:h,speed:.005},{x:45,y:6,z:-70,scale:95,mat:m,speed:-.007},{x:-40,y:-5,z:-40,scale:70,mat:m,speed:.009},{x:25,y:-12,z:-50,scale:80,mat:h,speed:-.005},{x:-30,y:-22,z:-65,scale:90,mat:h,speed:.006},{x:35,y:-30,z:-60,scale:85,mat:m,speed:-.008},{x:-20,y:-45,z:-45,scale:80,mat:m,speed:.007},{x:30,y:-55,z:-55,scale:90,mat:h,speed:-.006},{x:-35,y:-68,z:-70,scale:95,mat:h,speed:.005},{x:20,y:-80,z:-65,scale:85,mat:m,speed:-.008}].forEach(j=>{const Y=new ao(j.scale,j.scale*.55),ee=Y.attributes.position.count,G=new Float32Array(ee*3),V=new Float32Array(ee),re=Math.random(),ae=Math.random(),fe=Math.random(),_e=Math.random()>.4?1:0;for(let we=0;we<ee;we++)G[we*3]=re,G[we*3+1]=ae,G[we*3+2]=fe,V[we]=_e;Y.setAttribute("aVariation",new Fi(G,3)),Y.setAttribute("aTreatment",new Fi(V,1));const ke=new Bi(Y,j.mat);ke.position.set(j.x,j.y,j.z),s.add(ke),d.push({mesh:ke,baseX:j.x,speed:j.speed,minX:-80,maxX:80})});const B=new ao(160,70),H=new Jp({map:O,transparent:!0,opacity:.75,depthWrite:!1}),Q=new Bi(B,H);Q.position.set(0,-115,-60),s.add(Q)}catch(X){console.error("WebGL flight canvas init failed:",X);return}let p=15,g=35;const _=()=>{const X=window.scrollY,C=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),U=Math.min(Math.max(X/C,0),1);p=15-U*120,g=35-U*25};window.addEventListener("scroll",_,{passive:!0}),_();let x=0,M=0;const T=X=>{x=(X.clientX/window.innerWidth-.5)*5,M=(X.clientY/window.innerHeight-.5)*2.5};window.addEventListener("mousemove",T,{passive:!0});const N=()=>{!i||!c||(c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",N);let S=new b1,y=0;const P=()=>{if(f=requestAnimationFrame(P),document.documentElement.dataset.preloading&&y++%30!==0)return;const X=S.getDelta(),C=S.getElapsedTime();h&&(h.uniforms.uTime.value=C),m&&(m.uniforms.uTime.value=C),c.position.x+=(x-c.position.x)*.05,c.position.y+=(p-M-c.position.y)*.08,c.position.z+=(g-c.position.z)*.08,c.lookAt(x*.3,c.position.y-10,-50),d.forEach(U=>{U.mesh.position.x+=U.speed*(X*60),U.mesh.position.x>U.maxX&&(U.mesh.position.x=U.minX),U.mesh.position.x<U.minX&&(U.mesh.position.x=U.maxX)}),i.render(s,c)};return P(),()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",_),window.removeEventListener("resize",N),window.removeEventListener("mousemove",T),i&&i.dispose()}},[]),w.jsxs("div",{className:"canvas-container","aria-hidden":"true",children:[w.jsx("div",{className:"flight-canvas flight-canvas--background"}),w.jsx("canvas",{ref:o,className:"flight-canvas flight-canvas--webgl"}),w.jsx("div",{className:"flight-canvas-halftone"}),w.jsx("div",{className:"flight-canvas-vignette"})]})}function A3(){const[o,t]=je.useState(3e4),[i,s]=je.useState("30,000 FT"),[c,f]=je.useState(4.2),[d,h]=je.useState(100);je.useEffect(()=>{const p=[];window.scrollY>10?s(null):[[300,"29,800 FT"],[600,"30,250 FT"],[900,"29,950 FT"],[1200,null]].forEach(([M,T])=>{p.push(window.setTimeout(()=>{window.scrollY<=10&&s(T)},M))});const _=()=>{const x=window.scrollY,M=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),T=Math.min(Math.max(x/M,0),1),N=Math.round(3e4*(1-T));t(N);const S=(4.2-T*1.35).toFixed(2);f(S),h(Math.round((1-T)*100)),document.documentElement.style.setProperty("--altitude-remaining",(N/3e4).toFixed(4))};return window.addEventListener("scroll",_,{passive:!0}),_(),()=>{p.forEach(x=>clearTimeout(x)),window.removeEventListener("scroll",_)}},[]);const m=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return w.jsxs("aside",{className:"altitude-hud","aria-label":"Current story elevation & cell telemetry",children:[w.jsx("div",{className:"altitude-hud__track","aria-hidden":"true",children:w.jsx("span",{})}),w.jsxs("div",{className:"altitude-hud__readout",children:[w.jsx("span",{className:"altitude-hud__label",children:"Altitude"}),w.jsx("output",{className:"altitude-hud__value",children:i??`${m.format(o)} FT`}),w.jsxs("div",{className:"altitude-hud__battery-gauge",children:[w.jsxs("span",{children:["⚡ ",c,"V"]}),w.jsx("span",{children:"·"}),w.jsxs("span",{children:[d,"% SoC"]})]})]})]})}const px=["var(--color-red)","var(--color-orange)","var(--color-purple)","var(--color-yellow)"];function R3(){const[o,t]=je.useState(0),i=je.useCallback(()=>{t(s=>(s+1)%px.length)},[]);return w.jsx("header",{className:"masthead",id:"top",children:w.jsxs("div",{className:"masthead__frame",children:[w.jsxs("div",{className:"masthead__nav",children:[w.jsxs("a",{className:"masthead__brand",href:"#top","aria-label":"Battery Cell 4.0 home",onPointerEnter:i,onFocus:i,style:{"--brand-mark-hue":px[o]},children:[w.jsx("svg",{viewBox:"0 0 357 197",role:"img","aria-label":"IBC 4.0 Brand Mark",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z",fill:"currentColor"})}),w.jsx("span",{className:"masthead__brand-tag",children:"CELL 4.0 / INDIA HACKATHON 2026"})]}),w.jsxs("nav",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[[{label:"Themes",href:"#themes"},{label:"Architecture",href:"#architecture"},{label:"Dates",href:"#timeline"},{label:"Prizes",href:"#fees"},{label:"FAQ",href:"#faq"}].map(s=>w.jsx("a",{href:s.href,className:"masthead__nav-link",children:s.label},s.label)),w.jsxs("a",{href:"#register",className:"masthead__action-btn",children:[w.jsx("span",{className:"cut-button__box"}),w.jsx("span",{children:"Register EOI"})]})]})]}),w.jsxs("div",{className:"masthead__content",children:[w.jsxs("div",{className:"masthead__badge-row",children:[w.jsx("span",{className:"masthead__badge masthead__badge--live",children:"EOI Floated (Live Now)"}),w.jsx("span",{className:"masthead__badge",children:"8 Themes"}),w.jsx("span",{className:"masthead__badge",children:"Up to ₹2 Lakh Cash Prizes"}),w.jsx("span",{className:"masthead__badge",children:"Mentoring & Incubation"})]}),w.jsxs("h1",{className:"masthead__title-semantic",children:[w.jsx("span",{children:"Intelligent"}),w.jsx("span",{children:"Battery Cell 4.0"}),w.jsx("em",{children:"Hackathon 2026"})]}),w.jsx("p",{className:"masthead__dek",children:"Bringing participants together to develop innovative solutions for the future of battery technology, using AI to advance battery safety, sustainability, and indigenous innovation."})]}),w.jsx("div",{className:"masthead__footer",children:w.jsxs("p",{className:"masthead__meta",children:[w.jsx("span",{children:"Registration Opens: 09 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Deadline: 30 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Grand Finale Announcement: 01 Dec 2026 (Tentative)"})]})}),w.jsx("p",{className:"scroll-cue","aria-hidden":"true",children:w.jsx("span",{className:"scroll-cue__word",children:"Scroll".split("").map((s,c)=>w.jsx("span",{className:"scroll-cue__letter",style:{"--i":c},children:w.jsx("span",{className:"scroll-cue__glyph",children:s})},c))})})]})})}const C3=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,w3=`
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
`,N3=/^#?[0-9a-fA-F]{6}$/;function mx(o,t){const s=(N3.test((o||"").trim())?o.trim():t).replace("#","");return[0,2,4].map(c=>parseInt(s.slice(c,c+2),16)/255)}const Fp=o=>Math.max(0,Math.min(1,o)),D3=o=>o*o*(3-2*o),dl=(o,t,i)=>D3(Fp((o-t)/(i-t))),Wh=.06,U3=.6,gx=.5;function L3({mistColor:o="#8DC0DD",coreColor:t="#ffffff"}){const i=je.useRef(null),s=je.useRef(null),c=je.useRef(null),f=je.useRef(null),d=je.useRef({scroll:0,cover:0,wake:0,part:0,plane:[-1,.6],visible:!1});return je.useEffect(()=>{let h=0;const m=()=>{h=0;const g=i.current;if(!g)return;const _=window.innerWidth,x=window.innerHeight,M=g.getBoundingClientRect(),T=Fp(-M.top/Math.max(1,M.height-x)),N=Fp((T-Wh)/(U3-Wh)),S=Math.min(620,Math.max(380,_*.42)),y=-S*1.1+N*(_+S*1.4),P=x*(.34+N*.1),X=f.current;if(X){const U=.88+N*.22,O=2.5-N*4;X.style.transform=`translate3d(${y}px, ${P}px, 0) translateY(-50%) rotate(${O}deg) scale(${U})`,X.style.visibility=N>0&&N<1?"visible":"hidden"}const C=d.current;C.scroll=T,C.plane=[(y+S*.18)/_,1-(P+S*.04)/x],C.wake=dl(T,Wh,.16)*(1-dl(T,.62,.72)),C.cover=dl(T,.28,.6)*(1-dl(T,.7,.97)),C.part=dl(T,.7,.97)},p=()=>{h||(h=requestAnimationFrame(m))};return window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),m(),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p),h&&cancelAnimationFrame(h)}},[]),je.useEffect(()=>{const h=s.current,m=c.current,p=i.current;if(!h||!m||!p)return;const g=h.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!g){console.warn("WebGL not supported for Cloudscape");return}g.enable(g.BLEND),g.blendFunc(g.ONE,g.ONE_MINUS_SRC_ALPHA);const _=(G,V)=>{const re=g.createShader(G);return g.shaderSource(re,V),g.compileShader(re),g.getShaderParameter(re,g.COMPILE_STATUS)?re:(console.error("Shader compile error:",g.getShaderInfoLog(re)),g.deleteShader(re),null)},x=_(g.VERTEX_SHADER,C3),M=_(g.FRAGMENT_SHADER,w3);if(!x||!M)return;const T=g.createProgram();if(g.attachShader(T,x),g.attachShader(T,M),g.linkProgram(T),!g.getProgramParameter(T,g.LINK_STATUS)){console.error("Program link error:",g.getProgramInfoLog(T));return}g.useProgram(T);const N=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,N),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),g.STATIC_DRAW);const S=g.getAttribLocation(T,"position");g.enableVertexAttribArray(S),g.vertexAttribPointer(S,2,g.FLOAT,!1,0,0);const y=G=>g.getUniformLocation(T,G),P=y("u_resolution"),X=y("u_time"),C=y("u_scroll"),U=y("u_cover"),O=y("u_wake"),I=y("u_part"),E=y("u_plane");g.uniform3fv(y("u_mistColor"),mx(o,"#8DC0DD")),g.uniform3fv(y("u_coreColor"),mx(t,"#ffffff"));const D=()=>{const{width:G,height:V}=m.getBoundingClientRect();h.width=Math.max(1,Math.round(G*gx)),h.height=Math.max(1,Math.round(V*gx)),g.viewport(0,0,h.width,h.height),g.uniform2f(P,h.width,h.height)};D();const B=new ResizeObserver(D);B.observe(m);let H=0,Q=!1;const j=performance.now(),Y=G=>{H=requestAnimationFrame(Y);const V=d.current;g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),!(V.cover<.002&&V.wake<.002)&&(g.uniform1f(X,(G-j)/1e3),g.uniform1f(C,V.scroll),g.uniform1f(U,V.cover),g.uniform1f(O,V.wake),g.uniform1f(I,V.part),g.uniform2f(E,V.plane[0],V.plane[1]),g.drawArrays(g.TRIANGLE_STRIP,0,4))},ee=new IntersectionObserver(([G])=>{G.isIntersecting&&!Q?(Q=!0,H=requestAnimationFrame(Y)):!G.isIntersecting&&Q&&(Q=!1,cancelAnimationFrame(H),g.clear(g.COLOR_BUFFER_BIT))});return ee.observe(p),()=>{ee.disconnect(),cancelAnimationFrame(H),B.disconnect(),g.deleteBuffer(N),g.deleteProgram(T),g.deleteShader(x),g.deleteShader(M)}},[o,t]),w.jsx("div",{ref:i,className:"cloud-transition-zone","aria-hidden":"true",children:w.jsxs("div",{ref:c,className:"cloud-transition-zone__sticky",children:[w.jsx("canvas",{ref:s,className:"cloud-transition-canvas"}),w.jsxs("div",{ref:f,className:"cloud-transition-flight",style:{visibility:"hidden"},children:[w.jsx("div",{className:"cloud-transition-trail-wrapper",children:w.jsx("img",{src:"/brand/gpc/flight/jet-stream-magnific.png",className:"cloud-transition-trail",alt:""})}),w.jsx("img",{src:"/brand/gpc/airliner-gpc-color-block.png",className:"cloud-transition-plane",alt:""})]})]})})}function qh({text:o="",as:t="p",className:i="",highlightWord:s=""}){const c=je.useRef(null),f=je.useMemo(()=>o.trim().split(/\s+/),[o]);return je.useEffect(()=>{const d=c.current;if(!d)return;const h=Array.from(d.querySelectorAll(".scroll-reveal-word"));if(!h.length)return;let m=[],p=null;const g=()=>{const T=window.scrollY,N=h.map(P=>P.getBoundingClientRect().top+T);let S=NaN,y=0;m=h.map((P,X)=>{const C=N[X];return Number.isNaN(S)||Math.abs(C-S)>3?(y=0,S=C):y+=1,{element:P,documentTop:C,wordInLine:y,lastProgress:-1}}),_()},_=()=>{const T=window.innerHeight,N=window.scrollY;m.forEach(S=>{const y=S.documentTop-N,P=.98*T-4*S.wordInLine,X=.72*T-S.wordInLine,C=Math.min(Math.max((P-y)/Math.max(P-X,1),0),1);Math.abs(C-S.lastProgress)>=.002&&(S.lastProgress=C,S.element.style.opacity=C.toFixed(4),S.element.style.filter=C>.99?"none":`blur(${((1-C)*6).toFixed(2)}px)`)})},x=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(_)},M=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(g)};return g(),window.addEventListener("scroll",x,{passive:!0}),window.addEventListener("resize",M),()=>{cancelAnimationFrame(p),window.removeEventListener("scroll",x),window.removeEventListener("resize",M)}},[f]),w.jsx(t,{ref:c,className:i,children:f.map((d,h)=>{const m=s&&d.toLowerCase().includes(s.toLowerCase());return w.jsxs(bx.Fragment,{children:[w.jsx("span",{className:"scroll-reveal-word",style:{display:"inline-block",marginRight:h<f.length-1?"0.28em":void 0,opacity:.15,filter:"blur(4px)",color:m?"var(--color-red)":void 0,fontWeight:m?500:void 0},children:d}),h<f.length-1?" ":""]},`${d}-${h}`)})})}function O3(){return w.jsx("section",{className:"statement","aria-label":"The bottleneck of modern battery development",children:w.jsx("div",{className:"statement__sticky",children:w.jsxs("div",{className:"statement__inner",style:{textAlign:"center"},children:[w.jsx("h2",{className:"statement__heading",children:"Most battery innovations never survive past academic journals."}),w.jsx("h2",{className:"statement__heading",style:{color:"var(--color-red)",marginTop:"0.4em"},children:"They stall in prototype cells before reaching gigawatt scale."}),w.jsxs("div",{className:"statement__tags-row",children:[w.jsx("p",{className:"statement__tag statement__tag--cost",children:"Thermal Runaway Risk"}),w.jsx("p",{className:"statement__tag statement__tag--effort",children:"Black-Box Cell Degradation"}),w.jsx("p",{className:"statement__tag statement__tag--tech",children:"Foreign Chemistry Dependency"})]})]})})})}const Yh=[{word:"Thermal Safety",prob:45,color:"var(--color-red)",desc:"Mitigating micro-dendrite thermal runaway before catastrophic failure."},{word:"Digital Twins",prob:31,color:"var(--color-orange)",desc:"Real-time electrochemical physics simulation running on IoT edge nodes."},{word:"Second-Life Reuse",prob:17,color:"var(--color-purple)",desc:"Cascading EV battery packs into grid-scale renewable energy storage."},{word:"Indigenous Tech",prob:7,color:"var(--color-yellow)",desc:"Sovereign sodium-ion and national security storage independent of global supply."}];function P3(){const[o,t]=je.useState(0);return w.jsx("section",{className:"probability","aria-labelledby":"prob-heading",children:w.jsx("div",{className:"probability__sticky",children:w.jsxs("div",{className:"probability__inner",children:[w.jsx("p",{className:"probability__eyebrow",children:"Electrochemical Paradigm Shift"}),w.jsxs("h2",{id:"prob-heading",className:"probability__heading",children:["The future of battery technology is"," ",w.jsxs("em",{style:{color:Yh[o].color,fontStyle:"italic"},children:[Yh[o].word,"."]})]}),w.jsx("ol",{className:"probability__candidates",children:Yh.map((i,s)=>w.jsxs("li",{className:`probability__candidate ${o===s?"is-active":""}`,style:{"--cand-color":i.color,"--cand-fill":o===s?"1":`${i.prob/100}`},onPointerEnter:()=>t(s),onClick:()=>t(s),tabIndex:0,role:"button",children:[w.jsx("div",{className:"probability__candidate-bar"}),w.jsxs("div",{children:[w.jsx("span",{className:"probability__candidate-word",children:i.word}),w.jsx("p",{className:"probability__candidate-desc",children:i.desc})]}),w.jsxs("span",{className:"probability__candidate-value",children:[i.prob,"%"]})]},i.word))}),w.jsx("p",{className:"probability__takeaway",children:'"The conventional engineering choice is rarely the breakthrough that reimagines an industry."'})]})})})}function I3(){const[o,t]=je.useState(!1),[i,s]=je.useState(!1);return w.jsx("section",{className:"prompt-split",id:"architecture","aria-label":"Two approaches to battery innovation",children:w.jsxs("div",{className:"prompt-split__grid",children:[w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--one",children:"Group 1: Incremental Patch"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Add an external temperature thermistor to an unmonitored lithium pack."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The legacy way: relying on surface-level sensors that detect heat only after catastrophic internal chemical breakdown has already started."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/conventional-battery-schematic.svg",alt:"Conventional battery schematic with blind thermal core",className:`prompt-split__sketch-img ${o?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>t(!o),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-fountain-pen.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:o?"Inspect Normal View":"Highlight Thermal Hotspot"})]})]})]}),w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--two",children:"Group 2: Intelligent Cell 4.0"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Embed in-situ optical sensors and edge neural physics directly inside the cell."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The Hackathon 2026 challenge: predicting micro-dendrite nucleation, impedance shifts, and mechanical strain in real-time before temperature rises."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/intelligent-cell-schematic.svg",alt:"Intelligent Cell 4.0 schematic with optical fiber and edge BMS",className:`prompt-split__sketch-img ${i?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>s(!i),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-scissors.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:i?"Default Blueprint":"Activate AI Sensor Spine"})]})]})]})]})})}const gu=[{id:"01",code:"BMS",title:"Intelligent Battery Management Systems",desc:"Using AI to build intelligent battery management systems.",tag:"Battery Management",badgeColor:"#f94e2a",schematicType:"bms"},{id:"02",code:"SAFETY",title:"Battery Safety",desc:"Using AI to advance battery safety.",tag:"Safety",badgeColor:"#f66f00",schematicType:"safety"},{id:"03",code:"CHARGE",title:"Smart Charging & Second-Life Applications",desc:"Using AI for smart charging and second-life applications of batteries.",tag:"Charging & Second Life",badgeColor:"#9b338f",schematicType:"charging"},{id:"04",code:"STORAGE",title:"Renewable Energy Storage",desc:"Using AI to advance battery-based renewable energy storage.",tag:"Energy Storage",badgeColor:"#ffc013",schematicType:"grid"},{id:"05",code:"TWIN",title:"Battery Diagnostics & Digital Twins",desc:"Using AI for battery diagnostics and digital twins.",tag:"Diagnostics",badgeColor:"#f94e2a",schematicType:"twin"},{id:"06",code:"IOT",title:"IoT-Enabled Monitoring",desc:"Using AI with IoT-enabled monitoring of batteries.",tag:"IoT Monitoring",badgeColor:"#f66f00",schematicType:"iot"},{id:"07",code:"INDIGENOUS",title:"Indigenous Battery Technologies",desc:"Using AI to advance indigenous battery technologies and innovation.",tag:"Indigenous Innovation",badgeColor:"#9b338f",schematicType:"chem"},{id:"08",code:"OTHER",title:"Other Relevant Themes",desc:"Other relevant themes, including those related to the national security domain.",tag:"Open Theme",badgeColor:"#f94e2a",schematicType:"defense"}];function yl(o,t,i){return Math.min(i,Math.max(t,o))}function z3(o,t,i,s){const c=yl(o/t,0,1);return i+4*s*c*(1-c)}function F3(o,t,i,s,c=70){const f=2*Math.sqrt(c),d=t+(c*(i-o)-f*t)*s;return[o+d*s,d]}function B3(o,t,i,s,c=1){const f=t+(-38*o-4.2*t+i*.0034*c)*s;return[yl(o+f*s,-.45,.45),f]}function _x(o,t,i){return yl(Math.round(o/t),0,Math.max(0,i-1))}function vx(o){return o<10?"0"+o:String(o)}function H3(){const o=gu.length,[t,i]=je.useState(0),[s,c]=je.useState(!1),[f,d]=je.useState({w:1200,h:640,cw:330}),h=je.useRef(null),m=je.useRef(null),p=je.useRef([]),g=je.useRef({off:0,vel:0,target:0,a:[],w:[]}),_=je.useRef(null),x=je.useRef(0),M=je.useRef(0),T=34,N=1,S=f.cw*1.14,y=je.useCallback(E=>{g.current.target=yl(E,0,o-1)*S},[o,S]);je.useEffect(()=>{const E=h.current;if(!E)return;const D=new ResizeObserver(()=>{const B=E.getBoundingClientRect(),H=Math.round(Math.max(280,Math.min(350,B.width*.42,B.height*.54)));d({w:B.width,h:B.height,cw:H})});return D.observe(E),()=>D.disconnect()},[]),je.useEffect(()=>{g.current.target=M.current*S,g.current.off=M.current*S},[S]),je.useEffect(()=>{const E=h.current;if(!E)return;const D=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let B=!0,H=0,Q=performance.now();const j=g.current,Y=G=>{if(H=0,!B)return;const V=Math.min(.033,(G-Q)/1e3);Q=G;const{w:re,h:ae,cw:fe}=f,_e=Math.max(50,ae*.14),ke=_.current;let we=0;if(ke&&ke.moved)we=ke.v*1e3;else{const be=j.off;[j.off,j.vel]=F3(j.off,j.vel,j.target,V),we=-(j.off-be)/Math.max(V,.001)}const F=D?0:N,ue=_x(j.off,S,o);for(let be=0;be<o;be++){const K=p.current[be];if(!K)continue;const de=re/2+be*S-j.off;if(de<-fe*1.5||de>re+fe*1.5){K.style.visibility="hidden";continue}K.style.visibility="visible";let Ae=j.a[be]||0,Ie=j.w[be]||0;[Ae,Ie]=B3(Ae,Ie,we,V,F),F&&(Ae+=Math.sin(G/1300+be*1.7)*9e-4*F),j.a[be]=Ae,j.w[be]=Ie;const xe=z3(de,re,_e,T)-6,De=be===ue;K.style.transform=`translate(${(de-fe/2).toFixed(1)}px, ${xe.toFixed(1)}px) rotate(${Ae.toFixed(4)}rad)`,K.style.zIndex=String(De?o+2:o-Math.abs(be-ue))}m.current&&m.current.setAttribute("d",`M 0 ${_e} Q ${re/2} ${_e+2*T} ${re} ${_e}`),ue!==M.current&&(M.current=ue,i(ue)),H=requestAnimationFrame(Y)},ee=new IntersectionObserver(([G])=>{B=G.isIntersecting,B&&!H&&(Q=performance.now(),H=requestAnimationFrame(Y))});return ee.observe(E),H=requestAnimationFrame(Y),()=>{cancelAnimationFrame(H),ee.disconnect()}},[f,S,o]),je.useEffect(()=>{const E=setInterval(()=>{document.hidden||_.current||performance.now()-x.current<5e3||y(M.current>=o-1?0:M.current+1)},5500);return()=>clearInterval(E)},[o,y]);const P=E=>{E.target.closest(".plc-bar")||E.target.closest("button")||E.target.closest("a")||(x.current=performance.now(),_.current={x:E.clientX,off:g.current.off,lx:E.clientX,lt:E.timeStamp,v:0,moved:!1})},X=E=>{var Y;const D=_.current;if(!D)return;const B=E.clientX-D.x;if(!D.moved&&Math.abs(B)>4&&(D.moved=!0,c(!0),(Y=h.current)==null||Y.setPointerCapture(E.pointerId)),!D.moved)return;const H=Math.max(1,E.timeStamp-D.lt);D.v=.7*((E.clientX-D.lx)/H)+.3*D.v,D.lx=E.clientX,D.lt=E.timeStamp;const Q=(o-1)*S;let j=D.off-B;j<0&&(j*=.35),j>Q&&(j=Q+(j-Q)*.35),g.current.off=j},C=E=>{const D=_.current;if(_.current=null,x.current=performance.now(),!D)return;if(D.moved){c(!1),g.current.vel=-D.v*1e3,y(_x(g.current.off-D.v*180,S,o));return}const B=E.target.closest("[data-i]");B&&y(Number(B.getAttribute("data-i")))},U=E=>{x.current=performance.now(),y(yl(M.current+E,0,o-1))},O=E=>{if(E.key==="ArrowRight")U(1);else if(E.key==="ArrowLeft")U(-1);else return;E.preventDefault()},I=gu[t]||gu[0];return w.jsxs("section",{className:"themes-section",id:"themes",children:[w.jsxs("div",{className:"themes-section__intro",children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / Hackathon Themes"}),w.jsx("h2",{className:"article-block__heading",children:"Using AI to advance battery safety, sustainability, and indigenous innovation."}),w.jsx("p",{className:"themes-section__subhead",children:"Drag the line or use the arrows to explore all 8 hackathon themes."})]}),w.jsxs("div",{ref:h,className:"plc-root","data-drag":s?"1":"0",role:"region","aria-roledescription":"carousel","aria-label":"Hackathon Themes Carousel",tabIndex:0,onKeyDown:O,onPointerDown:P,onPointerMove:X,onPointerUp:C,onPointerCancel:C,style:{"--pl-cw":`${f.cw}px`},children:[w.jsx("svg",{className:"plc-string","aria-hidden":"true",children:w.jsx("path",{ref:m,fill:"none",stroke:"var(--color-ink, #232424)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.32"})}),gu.map((E,D)=>{const B=D===t;return w.jsxs("div",{className:"plc-card","data-i":D,"data-on":B?"1":"0",ref:H=>p.current[D]=H,"aria-hidden":B?void 0:!0,children:[w.jsx("div",{className:"plc-peg","aria-hidden":"true",children:w.jsx("div",{className:"plc-peg__groove"})}),w.jsxs("div",{className:"plc-print",children:[w.jsxs("div",{className:"plc-print__header",children:[w.jsxs("span",{className:"plc-print__tag",style:{background:E.badgeColor},children:[E.id," / THEME"]}),w.jsxs("span",{className:"plc-print__serial",children:["CELL 4.0 · DOMAIN ",E.id]})]}),w.jsx("h3",{className:"plc-print__title",children:E.title}),w.jsx("p",{className:"plc-print__desc",children:E.desc}),w.jsxs("div",{className:"plc-print__footer",children:[w.jsx("span",{className:"plc-print__category",children:E.tag}),w.jsx("a",{href:"#register",className:"plc-print__action",onClick:H=>H.stopPropagation(),children:"SELECT THEME →"})]})]})]},E.id)}),w.jsxs("div",{className:"plc-bar",children:[w.jsxs("div",{className:"plc-cap","aria-hidden":"true",children:[w.jsx("div",{className:"plc-cap__meta",children:w.jsxs("span",{className:"plc-cap__tag",style:{background:I.badgeColor},children:[I.id," / ",I.tag]})}),w.jsx("span",{className:"plc-title",children:I.title}),w.jsx("span",{className:"plc-sub",children:I.desc})]},t),w.jsxs("div",{className:"plc-controls",children:[w.jsxs("span",{className:"plc-count","aria-hidden":"true",children:[w.jsx("b",{children:vx(t+1)})," / ",vx(o)]}),w.jsxs("div",{className:"plc-nav-btns",children:[w.jsx("button",{type:"button",className:"plc-btn","aria-label":"Previous Theme",onClick:()=>U(-1),children:w.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:w.jsx("path",{d:"M10 3 5 8l5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),w.jsx("button",{type:"button",className:"plc-btn","aria-label":"Next Theme",onClick:()=>U(1),children:w.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:w.jsx("path",{d:"m6 3 5 5-5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})}const xx=[{label:"18650 Legacy Li-ion Cell",note:"Commodity cell with high thermal hotspot risk"},{label:"Lead-Acid Heavy Block",note:"Low energy density, toxic electrolyte"},{label:"Rule-Based Relay BMS",note:"Rigid voltage thresholds, blind to impedance shifts"},{label:"Standard LiFePO4 Prism",note:"Safe but passive; no predictive digital twin"}],Sx=[{label:"Intelligent Cell 4.0",note:"In-situ optical fiber sensor with edge AI BMS"},{label:"AI Neural Digital Twin",note:"Predicts micro-dendrites at atomic layer in real time"},{label:"Sovereign Sodium-Ion",note:"Indigenous non-lithium domestic supply chain"},{label:"Solid-State Ceramic",note:"High density but difficult to mass manufacture"}];function G3(){const[o,t]=je.useState(50),[i,s]=je.useState([{...xx[2],key:"init-1",isRadical:!1},{...Sx[0],key:"init-2",isRadical:!0}]),c=je.useRef(o),f=je.useCallback(d=>{const h=Number(d.target.value);if(t(h),Math.abs(h-c.current)>=12){c.current=h;const m=h>50,p=m?Sx:xx,g=p[Math.floor(Math.random()*p.length)];s(_=>[..._.slice(-4),{...g,key:`${Date.now()}-${Math.random()}`,isRadical:m}])}},[]);return w.jsx("section",{className:"loewy-maya",id:"spectrum",children:w.jsxs("div",{className:"loewy-maya__inner",children:[w.jsxs("div",{className:"loewy-maya__copy",children:[w.jsx("p",{className:"loewy-maya__label",children:"THE MAYA DESIGN PRINCIPLE IN ENERGY R&D"}),w.jsxs("h2",{className:"loewy-maya__heading",children:[w.jsx("span",{children:"Most advanced"}),w.jsxs("span",{children:[w.jsx("em",{children:"yet"})," acceptable."]})]}),w.jsx("p",{className:"loewy-maya__dek",children:"If your hackathon concept is too familiar, it creates no breakthrough. If it is too radical, it cannot be manufactured. Intelligent Battery Cell 4.0 lives precisely at the threshold of practical engineering and radical imagination."})]}),w.jsxs("section",{className:"maya-spectrum","aria-label":"Innovation spectrum slider",children:[w.jsxs("div",{className:"maya-spectrum__inner",children:[w.jsxs("div",{className:"maya-spectrum__labels",children:[w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--familiar",children:"← Too Conventional"}),w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--radical",children:"Too Radical →"})]}),w.jsxs("div",{className:"maya-spectrum__control",children:[w.jsx("div",{className:"maya-spectrum__track","aria-hidden":"true"}),w.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:f,className:"maya-spectrum__range","aria-label":"Spectrum from conventional to radical battery tech"})]}),w.jsx("p",{className:"maya-spectrum__drag-cue","aria-hidden":"true",children:"← Drag to explore →"})]}),w.jsx("div",{className:"maya-spectrum__stage",children:i.map(d=>w.jsxs("div",{className:`maya-spawn-card ${d.isRadical?"maya-spawn-card--radical":""}`,style:{"--spawn-rotation":`${(Math.random()-.5)*16}deg`,"--spawn-drift-x":`${(Math.random()-.5)*30}px`,"--spawn-lift-y":`${-8-Math.random()*12}px`,"--spawn-fall-y":`${20+Math.random()*15}px`},children:[w.jsx("div",{className:"maya-spawn-card__backdrop","aria-hidden":"true"}),w.jsxs("div",{className:"maya-spawn-card__image",children:[w.jsx("div",{style:{width:"100%",height:"90px",background:d.isRadical?"linear-gradient(135deg, #f94e2a22, #f66f0022)":"linear-gradient(135deg, #9b338f22, #8cb8d122)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"},"aria-hidden":"true",children:d.isRadical?"⚡":"🔋"}),w.jsx("div",{className:"maya-spawn-card__halftone","aria-hidden":"true"})]}),w.jsx("span",{children:d.label})]},d.key))})]})]})})}const V3=[{phase:"STEP 01",date:"09 OCT 2026",status:"OPEN NOW",title:"Registration Opens",desc:"Registration is open. The Expression of Interest (EOI) has been floated."},{phase:"STEP 02",date:"30 OCT 2026",status:"DEADLINE",title:"Registration Deadline",desc:"Last date to register for the hackathon."},{phase:"STEP 03",date:"IN BETWEEN",status:"BEFORE GRAND FINALE",title:"Mentoring, Product Development & Screening",desc:"Mentoring, product development and screening will be completed before the Grand Finale. Mentoring sessions are for shortlisted applicants."},{phase:"STEP 04",date:"01 DEC 2026",status:"TENTATIVE",title:"Grand Finale Announcement",desc:"The final Grand Finale will be announced on 1 December 2026 (tentative)."}];function k3(){return w.jsxs("section",{className:"timeline-section",id:"timeline",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"02 / Important Dates"}),w.jsx("h2",{className:"article-block__heading",children:"Important Dates"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Register before 30 October 2026."})]}),w.jsx("div",{className:"timeline-grid",children:V3.map(o=>w.jsxs("div",{className:"timeline-card",children:[w.jsxs("span",{className:"timeline-card__phase",children:[o.phase," · ",o.status]}),w.jsx("h3",{className:"timeline-card__date",children:o.date}),w.jsx("h4",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:500,marginBottom:"0.6rem",color:"var(--color-neutral-500)"},children:o.title}),w.jsx("p",{className:"timeline-card__desc",children:o.desc})]},o.phase))})]})}const X3=[{icon:"🏆",title:"Up to ₹2 Lakh Cash Prizes",desc:"Attractive cash prizes and certificates for the winners, with up to ₹2 lakh in prize money."},{icon:"🔬",title:"Mentoring Sessions",desc:"Mentoring sessions for shortlisted applicants before the Grand Finale."},{icon:"🚀",title:"Incubation Opportunities",desc:"Incubation opportunities for participants."}],W3=[{tier:"STUDENTS & RESEARCH SCHOLARS",fee:"₹500/-",desc:"For students and research scholars."},{tier:"STUDENT START-UPS",fee:"₹1,500/-",desc:"For student start-ups with university/college-enrolled students.",highlight:!0},{tier:"MSMEs & REGISTERED START-UPS",fee:"₹2,000/-",desc:"For MSMEs and registered start-ups."}];function q3(){return w.jsxs("section",{className:"fees-section",id:"fees",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"03 / Benefits & Fees"}),w.jsx("h2",{className:"article-block__heading",children:"Participant Benefits & Registration Fees"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.05rem",lineHeight:1.5,fontFamily:"var(--font-body)"},children:"Registration fee depends on your participant category."})]}),w.jsx("div",{className:"benefits-row",children:X3.map(o=>w.jsxs("div",{className:"benefit-card",children:[w.jsx("div",{className:"benefit-card__icon",children:o.icon}),w.jsx("h3",{className:"benefit-card__title",children:o.title}),w.jsx("p",{className:"benefit-card__desc",children:o.desc})]},o.title))}),w.jsx("div",{className:"fees-grid",children:W3.map(o=>w.jsxs("div",{className:`fee-card ${o.highlight?"fee-card--highlight":""}`,children:[w.jsxs("div",{children:[w.jsx("span",{className:"fee-card__tier",children:o.tier}),w.jsx("div",{className:"fee-card__amount",children:o.fee}),w.jsx("p",{className:"fee-card__desc",children:o.desc})]}),w.jsxs("a",{href:"#register",className:"cut-button",style:{textDecoration:"none",width:"auto",alignSelf:"flex-start"},children:[w.jsx("span",{className:"cut-button__box",style:{"--cut-fill":o.highlight?"var(--color-red)":"var(--color-yellow)"}}),w.jsx("span",{className:"cut-button__label",style:{color:o.highlight?"var(--color-neutral-100)":"var(--color-ink)"},children:"Select & Register"})]})]},o.tier))})]})}const Y3=[{step:"STAGE 01",title:"Registration",dates:"09 Oct – 30 Oct 2026",criteria:["Registration opens on 9 October 2026 (EOI has been floated)","Registration deadline is 30 October 2026","Registration fee as per participant category (₹500/-, ₹1,500/- or ₹2,000/-)"]},{step:"STAGE 02",title:"Mentoring, Product Development & Screening",dates:"Before the Grand Finale",criteria:["Screening of applicants","Mentoring sessions for shortlisted applicants","Product development"]},{step:"STAGE 03",title:"Grand Finale",dates:"To be announced on 1 Dec 2026 (tentative)",criteria:["Cash prizes of up to ₹2 lakh for the winners","Certificates for the winners","Incubation opportunities for participants"]}];function Z3(){return w.jsxs("section",{className:"article-block split-section",id:"evaluation",children:[w.jsxs("header",{className:"split-section__intro",children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"04 / How It Works"}),w.jsxs("h2",{className:"split-section__heading",children:["Hackathon ",w.jsx("em",{children:"Stages"})]}),w.jsx("p",{className:"split-section__lede",children:"From registration to the Grand Finale: mentoring, product development and screening happen in between."}),w.jsxs("div",{className:"split-section__telemetry",children:[w.jsxs("div",{className:"split-section__metric",children:[w.jsx("span",{className:"split-section__metric-val",children:"03"}),w.jsx("span",{className:"split-section__metric-lbl",children:"Stages"})]}),w.jsxs("div",{className:"split-section__metric",children:[w.jsx("span",{className:"split-section__metric-val",children:"08"}),w.jsx("span",{className:"split-section__metric-lbl",children:"Themes"})]}),w.jsxs("div",{className:"split-section__metric",children:[w.jsx("span",{className:"split-section__metric-val",children:"₹2L"}),w.jsx("span",{className:"split-section__metric-lbl",children:"Prize Money"})]})]})]}),w.jsx("div",{className:"split-section__body",children:Y3.map(o=>w.jsx("div",{className:"theme-card",style:{padding:"2.5rem"},children:w.jsxs("div",{children:[w.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:w.jsx("span",{className:"theme-card__idx",children:o.step})}),w.jsx("h3",{className:"theme-card__title",style:{fontSize:"1.4rem"},children:o.title}),w.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"var(--color-orange)",marginBottom:"1.5rem"},children:o.dates}),w.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.75rem"},children:o.criteria.map((t,i)=>w.jsxs("li",{style:{display:"flex",gap:"0.5rem",fontSize:"0.9rem",color:"var(--color-ink-muted)",lineHeight:1.5},children:[w.jsx("span",{style:{color:"var(--color-red)",fontWeight:"bold"},children:"✓"}),w.jsx("span",{children:t})]},i))})]})},o.step))})]})}const j3=[{q:"Who can participate in this Hackathon?",a:"Three participant categories can register: (1) Students and research scholars; (2) Student start-ups (with university/college-enrolled students); and (3) MSMEs and registered start-ups."},{q:"What is the focus of the event?",a:"Intelligent Battery Cell 4.0 Hackathon 2026 will bring participants together to develop innovative solutions for the future of battery technology. The event focuses on using AI to advance battery safety, sustainability, and indigenous innovation."},{q:"What are the hackathon themes?",a:"Intelligent battery management systems; Battery safety; Smart charging and second-life applications; Renewable energy storage; Battery diagnostics and digital twins; IoT-enabled monitoring; Indigenous battery technologies; and Other relevant themes, including those related to the national security domain."},{q:"What is the registration fee?",a:"Students and research scholars: ₹500/-. Student start-ups (with university/college-enrolled students): ₹1,500/-. MSMEs and registered start-ups: ₹2,000/-."},{q:"What are the important dates?",a:"Registration opens on 9 October 2026 (EOI has been floated). The registration deadline is 30 October 2026. The final Grand Finale will be announced on 1 December 2026 (tentative). Mentoring, product development and screening will be completed in between."},{q:"What do participants get?",a:"Attractive cash prizes and certificates for the winners, with up to ₹2 lakh in cash prize money; mentoring sessions for shortlisted applicants before the Grand Finale; and incubation opportunities for participants."}];function K3(){const[o,t]=je.useState(0);return w.jsxs("section",{className:"article-block split-section",id:"faq",children:[w.jsxs("header",{className:"split-section__intro",children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"05 / Participant Clarifications"}),w.jsxs("h2",{className:"split-section__heading",children:["Frequently Asked ",w.jsx("em",{children:"Questions"})]}),w.jsx("p",{className:"split-section__lede",children:"Eligibility, themes, fees, dates and participant benefits."})]}),w.jsx("div",{className:"split-section__body faq-list",children:j3.map((i,s)=>{const c=o===s;return w.jsxs("div",{className:`faq-card${c?" is-open":""}`,children:[w.jsxs("button",{type:"button",onClick:()=>t(c?-1:s),style:{width:"100%",padding:"1.6rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontFamily:"var(--font-serif)",fontSize:"1.25rem",color:"var(--color-neutral-500)"},children:[w.jsx("span",{children:i.q}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",color:"var(--color-red)"},children:c?"—":"+"})]}),c&&w.jsx("div",{style:{padding:"0 2rem 1.8rem",borderTop:"1px dashed var(--color-border)"},children:w.jsx("p",{style:{marginTop:"1.2rem",fontSize:"1rem",lineHeight:1.7,color:"var(--color-ink-muted)",fontFamily:"var(--font-sans)"},children:i.a})})]},s)})})]})}function Q3(){return w.jsx("div",{className:"ground",id:"register",children:w.jsxs("footer",{className:"ground__footer",children:[w.jsx("a",{className:"ground__maker",href:"#top",children:w.jsx("span",{children:"Built for India's Battery Future — Hackathon 2026"})}),w.jsxs("p",{className:"ground__copyright",children:[w.jsx("span",{children:"© 2026 Intelligent Battery Cell 4.0 Hackathon"}),w.jsx("a",{className:"ground__privacy",href:"#top",children:"Back to Altitude"})]})]})})}const J3={paper:"#f4e7df",ink:"#0b215d",sun:"#2f5090",core:"#0f2662",glow:"#f4e7df"},$3='"Fraunces", "Playfair Display", "Iowan Old Style", Georgia, "Times New Roman", serif',eR='"JetBrains Mono", "SF Mono", ui-monospace, Menlo, Consolas, monospace',Zh={" ":[44,[]],A:[86,["M14 88 C20 62 30 30 43 12 C56 30 66 62 72 88","M27 62 C38 60 50 60 60 62"]],B:[74,["M17 88 V12","M17 12 H35 C51 12 57 21 57 31 C57 42 48 48 33 48 H17","M17 48 H39 C55 48 62 58 62 68 C62 81 52 88 37 88 H17"]],C:[78,["M65 23 C58 15 50 12 42 12 C24 12 13 29 13 50 C13 72 25 88 43 88 C53 88 61 84 67 76"]],D:[82,["M17 88 V12","M17 12 H33 C57 12 70 29 70 50 C70 72 56 88 33 88 H17"]],E:[66,["M55 12 H17 V88 H56","M17 49 H47"]],F:[62,["M53 12 H17 V88","M17 49 H45"]],G:[84,["M67 24 C59 15 51 12 42 12 C24 12 13 29 13 50 C13 72 25 88 44 88 C61 88 71 77 71 60 V53 H47"]],H:[80,["M15 12 V88","M65 12 V88","M15 50 H65"]],I:[36,["M18 12 V88"]],J:[62,["M49 12 V63 C49 79 41 88 30 88 C21 88 14 83 12 73"]],K:[76,["M17 12 V88","M61 12 L19 55","M31 44 L63 88"]],L:[62,["M17 12 V88 H53"]],M:[100,["M14 88 C15 62 17 34 21 13 L50 57 L79 13 C83 34 85 62 86 88"]],N:[82,["M15 88 V13 L67 87 V12"]],O:[88,["M44 12 C64 12 76 29 76 50 C76 72 63 88 44 88 C25 88 12 72 12 50 C12 29 25 12 44 12 Z"]],P:[72,["M17 88 V12 H35 C52 12 60 22 60 34 C60 47 51 56 35 56 H17"]],Q:[88,["M44 12 C64 12 76 29 76 50 C76 72 63 88 44 88 C25 88 12 72 12 50 C12 29 25 12 44 12 Z","M53 65 L77 89"]],R:[76,["M17 88 V12 H35 C52 12 60 22 60 33 C60 46 51 54 35 54 H19","M37 54 C46 64 56 76 63 88"]],S:[70,["M58 22 C52 15 45 12 36 12 C23 12 14 20 14 30 C14 42 24 46 36 50 C50 54 58 59 58 70 C58 82 48 88 36 88 C26 88 17 84 12 76"]],T:[76,["M12 14 C28 13 46 13 64 14","M38 14 V88"]],U:[80,["M14 12 V57 C14 77 25 88 40 88 C56 88 66 77 66 57 V12"]],V:[80,["M12 12 C22 40 32 66 40 88 C48 66 58 40 68 12"]],W:[110,["M12 12 L30 88 L55 31 L80 88 L98 12"]],X:[76,["M14 12 L62 88","M62 12 L14 88"]],Y:[76,["M12 12 L38 50 L64 12","M38 50 V88"]],Z:[72,["M14 13 H58 L14 87 H59"]],0:[70,["M35 12 C50 12 58 28 58 50 C58 72 50 88 35 88 C20 88 12 72 12 50 C12 28 20 12 35 12 Z"]],1:[50,["M14 27 L31 12 V88"]],2:[68,["M14 28 C16 18 24 12 34 12 C46 12 56 20 56 32 C56 46 44 56 14 88 H58"]],3:[66,["M14 20 C20 14 27 12 34 12 C46 12 54 20 54 30 C54 42 44 48 30 48 C46 48 56 56 56 68 C56 80 46 88 32 88 C24 88 16 84 12 78"]],4:[70,["M45 88 V12 L12 64 H60"]],5:[66,["M54 12 H21 L17 46 C22 42 28 40 34 40 C48 40 56 50 56 64 C56 78 46 88 32 88 C24 88 16 84 12 78"]],6:[68,["M52 16 C46 13 41 12 36 12 C20 12 12 30 12 54 C12 76 22 88 36 88 C48 88 56 80 56 66 C56 52 48 44 36 44 C24 44 14 52 12 60"]],7:[66,["M12 12 H56 L26 88"]],8:[66,["M33 48 C20 48 14 40 14 30 C14 20 22 12 33 12 C44 12 52 20 52 30 C52 40 46 48 33 48 C18 48 12 58 12 68 C12 80 22 88 33 88 C44 88 54 80 54 68 C54 58 48 48 33 48 Z"]],9:[68,["M56 40 C54 50 46 56 34 56 C20 56 12 46 12 34 C12 20 22 12 34 12 C48 12 56 24 56 44 C56 70 46 88 30 88 C24 88 18 86 14 82"]],"%":[74,["M60 14 L14 86","M18 18 V21","M56 79 V82"]],"!":[36,["M18 12 V60","M18 86 V88"]],"?":[64,["M14 26 C16 16 24 12 33 12 C45 12 51 20 51 29 C51 41 33 45 33 61","M33 86 V88"]],".":[36,["M18 86 V88"]],",":[36,["M19 84 L14 96"]],"'":[32,["M16 12 V30"]],"-":[60,["M14 52 H46"]],"♥":[92,["M46 86 C30 72 12 58 12 36 C12 20 22 12 33 12 C41 12 45 18 46 27 C47 18 51 12 59 12 C70 12 80 20 80 36 C80 58 62 72 46 86 Z"]]};function cS(o){const t=o.normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase();return Zh[t]??Zh[o]??Zh[" "]}const eo=o=>o<=0?0:o>=1?1:o,jh=[[0,0],[.22,.28],[.33,.31],[.6,.7],[.7,.73],[1,1]];function tR(o){if(o<=0)return 0;if(o>=1)return 1;for(let t=0;t<jh.length-1;t++){const i=jh[t],s=jh[t+1];if(o<=s[0]){const c=(o-i[0])/(s[0]-i[0]);return i[1]+(s[1]-i[1])*(1-Math.pow(1-c,3))}}return 1}function nR(o,t,i){return eo(eo(o)*i-t)}function iR(o){return String(Math.round(Math.min(100,Math.max(0,o))))+"%"}function Bp(o){const t=Math.sin(o*12.9898+78.233)*43758.5453;return t-Math.floor(t)}function Eu(o,t,i,s){const c=o.match(/[MLHVCZ]|-?\d*\.?\d+/g)||[];let f="",d="",h=0,m=0;const p=(_,x)=>{h=_,m=x;let M=t[0]*_+t[2]*x+t[4],T=t[1]*_+t[3]*x+t[5];if(i){const N=_*7.13+x*3.71+s*17.9;M+=(Bp(N)-.5)*2*i,T+=(Bp(N+41.3)-.5)*2*i}return M.toFixed(1)+" "+T.toFixed(1)};let g=0;for(;g<c.length;){const _=c[g];if(/[MLHVCZ]/.test(_)){d=_,g++,_==="Z"&&(f+="Z");continue}const x=M=>parseFloat(c[g+M]);if(d==="M"||d==="L")f+=(f?" ":"")+(d==="M"?"M":"L")+p(x(0),x(1)),d==="M"&&(d="L"),g+=2;else if(d==="H")f+=" L"+p(x(0),m),g+=1;else if(d==="V")f+=" L"+p(h,x(0)),g+=1;else if(d==="C"){const M=p(x(0),x(1)),T=p(x(2),x(3));f+=" C"+M+" "+T+" "+p(x(4),x(5)),g+=6}else g++}return f}function yx(o,t,i,s){const c=s/76,f=Array.from(o).map(cS),d=f.reduce((p,g)=>p+g[0],0)*c;let h=t-d/2,m="";for(const p of f){for(const g of p[1])m+=(m?" ":"")+Eu(g,[c,0,0,c,h,i-50*c],0,0);h+=p[0]*c}return{d:m,width:d}}function aR(o,t,i,s,c){const f=Math.max(1,o.length),d=Math.min(i,Math.max(t*1.6,260)),h=i-d,m=Math.min(d*.6,t*(i>t*1.1?.66:.46)),p=Math.max(3.6,Math.min(4.8,d/t*2.6)),g=t/2,_=i+m*.02,x=t*.035,M=4,T=o.reduce((O,I)=>O+I,0)+M*(f-1),N=Math.max(.05,Math.min((t-x*2)/T,d/210)),S=22*N*s,y=T*N,P=m+d*.045,X=i-d*.035,C=[];let U=g-y/2;for(let O=0;O<f;O++){const I=o[O]*N,E=U+I/2;U+=I+M*N;const D=(E-g)/(t/2),B=h+d*(.05+.04*D*D);let H=E,Q=X,j=0,Y=0;for(let we=0;we<4;we++){const F=H-g,ue=Math.asin(Math.max(-1,Math.min(1,F/P)));j=Math.max(-.62,Math.min(.62,ue*.42*c));const be=I/2*Math.abs(Math.sin(ue-j));Q=Math.min(_-Math.sqrt(Math.max(0,P*P-F*F))-be,X),Y=(Q-B)/Math.cos(j),Y=Math.max(S+76*N*.6,Math.min(S+76*N*p,Y)),H+=E-(H+Math.sin(j)*Y/2)}const ee=(Y-S)/76,G=H+Math.sin(j)*Y/2,V=Q-Math.cos(j)*Y/2,re=Math.cos(j),ae=Math.sin(j),fe=-o[O]/2*N,_e=-88*ee-S/2,ke=[N*re,N*ae,-ee*ae,ee*re,H+fe*re-_e*ae,Q+fe*ae+_e*re];C.push({bx:H,by:Q,t:j,sy:ee,L:Y,mx:G,my:V,m:ke})}return{cx:g,cy:_,R:m,sx:N,stroke:S,top:h,F:d,letters:C}}const rR=`
.amr-root {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--amr-paper);
  color: var(--amr-ink);
  -webkit-tap-highlight-color: transparent;
}
.amr-gate *, .amr-gate *::before, .amr-gate *::after { box-sizing: border-box; }
.amr-dest {
  position: absolute;
  inset: 0;
  overflow-y: auto;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.7s ease 0.1s;
}
.amr-dest[data-active="true"] { opacity: 1; pointer-events: auto; }

.amr-gate {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: var(--amr-paper);
  cursor: pointer;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  transition: opacity 0.4s ease 1.05s;
}
.amr-gate:focus-visible .amr-frame { box-shadow: inset 0 0 0 2px var(--amr-ink); }
.amr-root[data-phase="lift"] .amr-gate { opacity: 0; pointer-events: none; }
.amr-frame { position: absolute; inset: 0; pointer-events: none; }

.amr-stage, .amr-grain {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  display: block;
  overflow: visible;
}
.amr-grain {
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: 0.32;
}
.amr-blush {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse 80% 70% at 50% 42%, transparent 55%, rgba(80, 40, 20, 0.07) 100%);
}

/* ---- the sun ---- */
.amr-rise {
  transform: translateY(calc((1 - var(--amr-rise)) * var(--amr-r) * 1.04));
}
.amr-sun-scale {
  transform: scale(1);
  transition: transform 0.95s cubic-bezier(0.55, 0, 0.2, 1) 0.05s;
}
.amr-root[data-phase="bloom"] .amr-sun-scale { animation: amr-swell 1.1s cubic-bezier(0.3, 1.6, 0.4, 1) 0.1s; }
.amr-root[data-phase="lift"] .amr-sun-scale { transform: scale(var(--amr-cover)); }
.amr-sun { transition: filter 0.4s ease; }
.amr-gate:hover .amr-sun { filter: brightness(1.04) saturate(1.05); }
.amr-ring {
  fill: none;
  stroke: var(--amr-ink);
  opacity: 0;
}
.amr-root[data-phase="bloom"] .amr-ring {
  animation: amr-ring 1.8s cubic-bezier(0.15, 0.6, 0.3, 1) both;
}
.amr-ring-2 { animation-delay: 0.22s !important; }
.amr-ring-3 { animation-delay: 0.44s !important; }

/* ---- inside the sun ---- */
.amr-count {
  fill: none;
  stroke: var(--amr-glow);
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-box: fill-box;
  transform-origin: center;
  transition: opacity 0.35s ease, transform 0.5s cubic-bezier(0.5, 0, 0.75, 0);
}
.amr-root:not([data-phase="load"]) .amr-count { opacity: 0; transform: scale(0.4) rotate(-12deg); }
.amr-heart {
  fill: var(--amr-glow);
  fill-opacity: 0;
  stroke: var(--amr-glow);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 1;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: 50% 60%;
}
.amr-root[data-phase="bloom"] .amr-heart,
.amr-root[data-phase="hold"] .amr-heart,
.amr-root[data-phase="lift"] .amr-heart {
  opacity: 1;
  animation: amr-ink 0.9s cubic-bezier(0.45, 0, 0.2, 1) 0.25s forwards, amr-fill 0.5s ease 1s forwards;
}
.amr-root[data-phase="hold"] .amr-heart {
  stroke-dashoffset: 0;
  fill-opacity: 1;
  animation: amr-beat 1.1s cubic-bezier(0.3, 0, 0.3, 1) infinite;
}
.amr-root[data-phase="lift"] .amr-heart { stroke-dashoffset: 0; fill-opacity: 1; animation: none; }
.amr-root[data-phase="set"] .amr-heart { opacity: 0; stroke-dashoffset: 0; fill-opacity: 1; transition: opacity 0.4s ease; }
.amr-caption {
  fill: var(--amr-glow);
  font-family: var(--amr-serif);
  font-style: italic;
  letter-spacing: 0.04em;
  opacity: 0.88;
}
.amr-hint {
  fill: var(--amr-glow);
  font-family: var(--amr-mono);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.amr-root[data-phase="hold"] .amr-hint { opacity: 0.62; animation: amr-blink 2.4s ease-in-out 0.6s infinite; }

/* ---- the letters ---- */
.amr-word path {
  fill: none;
  stroke: var(--amr-ink);
  stroke-linecap: round;
  stroke-linejoin: round;
}
.amr-letter { cursor: pointer; }
.amr-fly {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.7, 0.4), opacity 0.5s ease 0.2s;
}
.amr-root[data-phase="lift"] .amr-fly { transform: translate(var(--fx), var(--fy)) rotate(var(--fr)); opacity: 0; }
.amr-word .amr-hit { fill: none; stroke: transparent; }

.amr-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@keyframes amr-swell {
  0% { transform: scale(1); }
  35% { transform: scale(1.045); }
  100% { transform: scale(1); }
}
@keyframes amr-ring {
  0% { opacity: 0; transform: scale(1); }
  12% { opacity: 0.5; }
  100% { opacity: 0; transform: scale(1.5); }
}
@keyframes amr-ink { to { stroke-dashoffset: 0; } }
@keyframes amr-fill { to { fill-opacity: 1; } }
@keyframes amr-beat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.14); }
  28% { transform: scale(0.98); }
  42% { transform: scale(1.08); }
  70% { transform: scale(1); }
}
@keyframes amr-blink {
  0%, 100% { opacity: 0.62; }
  50% { opacity: 0.25; }
}

@media (prefers-reduced-motion: reduce) {
  .amr-rise { transform: none; }
  .amr-root[data-phase="bloom"] .amr-sun-scale, .amr-root[data-phase="bloom"] .amr-ring { animation: none; }
  .amr-root[data-phase="lift"] .amr-sun-scale { transform: none; }
  .amr-sun-scale, .amr-fly, .amr-count { transition: opacity 0.4s ease; }
  .amr-root[data-phase="lift"] .amr-fly { transform: none; }
  .amr-root:not([data-phase="load"]) .amr-count { transform: none; }
  .amr-root[data-phase="bloom"] .amr-heart, .amr-root[data-phase="hold"] .amr-heart {
    animation: none;
    stroke-dashoffset: 0;
    fill-opacity: 1;
    transition: opacity 0.5s ease;
  }
  .amr-root[data-phase="hold"] .amr-hint { animation: none; }
  .amr-gate { transition: opacity 0.5s ease 0.2s; }
}
`,sR=1700,oR=2800,lR=1500,cR=1500,uR=900,fR=125,Mx=o=>o*180/Math.PI;function dR({children:o,loop:t=!1,progress:i,durationMs:s=4200,word:c="AMOUR",caption:f="loading, with love",palette:d,weight:h=1,fan:m=1,boil:p=1,sway:g=1,counter:_=!0,fontFamily:x=$3,height:M="100svh",onComplete:T,className:N=""}){const[S,y]=je.useState("load"),[P,X]=je.useState(0),[C,U]=je.useState(0),[O,I]=je.useState({w:1280,h:800}),E=je.useId().replace(/[^a-zA-Z0-9_-]/g,""),D=je.useRef(null),B=je.useRef(null),H=je.useRef([]),Q=je.useRef([]),j=je.useRef(null),Y=je.useRef([]),ee=je.useRef(0),G=je.useRef(!1),V=je.useRef(i);V.current=i;const re=je.useRef(T);re.current=T;const ae={...J3,...d},fe=je.useMemo(()=>Array.from(c.trim()||" "),[c]),_e=O.w,ke=O.h,we=je.useMemo(()=>{const He=fe.map(cS),Re=aR(He.map(xt=>xt[0]),_e,ke,Math.max(.2,h),Math.max(0,m)),Ce=Re.letters.map((xt,ft)=>{const St=xt.mx-Re.cx,q=xt.my-Re.cy,Et=Math.hypot(St,q)||1,ct=Math.max(_e,ke)*.75;return{...xt,strokes:He[ft][1],fx:St/Et*ct,fy:q/Et*ct,fr:Mx(xt.t)*1.6}}),ot=Math.hypot(Math.max(Re.cx,_e-Re.cx),Re.cy);return{...Re,letters:Ce,cover:ot/Re.R*1.04}},[fe,_e,ke,h,m]),F=je.useRef(we);F.current=we,we.letters.length;const ue=we.R;je.useEffect(()=>{const He=D.current;if(!He)return;const Re=()=>{const ot=He.getBoundingClientRect();ot.width>0&&ot.height>0&&I({w:Math.round(ot.width),h:Math.round(ot.height)})};if(Re(),typeof ResizeObserver>"u")return;const Ce=new ResizeObserver(Re);return Ce.observe(He),()=>Ce.disconnect()},[]);const be=je.useCallback(He=>{ee.current=He;const Re=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Ce=F.current;Ce.letters.forEach((ot,xt)=>{const ft=nR(He,xt,Ce.letters.length),St=Q.current[xt]||[],q=Math.max(1,ot.strokes.length);St.forEach((Et,ct)=>{if(!Et)return;if(Re){Et.style.strokeDashoffset="0",Et.style.opacity=ft>0?(.25+ft*.75).toFixed(3):"0";return}const L=eo(ft*q-ct);Et.style.strokeDashoffset=(1-L).toFixed(4),Et.style.opacity=L>.002?"1":"0"})})},[]);je.useEffect(()=>{be(ee.current)},[we,be]),je.useEffect(()=>{if(S!=="load"&&S!=="set")return;const He=D.current;let Re=0,Ce=S==="load"?0:1,ot=performance.now();const xt=ot,ft=C===0&&S==="load";let St=-1;G.current=!1;const q=Et=>{const ct=Math.min(64,Et-ot);if(ot=Et,S==="set")Ce=1-eo((Et-xt)/cR),Ce=Ce*Ce*(3-2*Ce);else{const ie=V.current;let ge=ie!==void 0?eo(ie/100):tR((Et-xt)/Math.max(400,s));G.current&&(ge=1);const Ne=G.current?.14:ie!==void 0?.1:1;Ce+=(ge-Ce)*Math.min(1,Ne*(ct/16.7)),ge-Ce<.002&&(Ce=ge)}be(Ce);const L=ft?eo((Et-xt)/uR):1,b=(1-Math.pow(1-L,3))*(.5+.5*(1-Math.pow(1-Ce,2)));He==null||He.style.setProperty("--amr-rise",b.toFixed(4));const J=Math.round(Ce*100);if(J!==St&&(St=J,X(J)),S==="load"&&Ce>=1&&L>=1){y("bloom");return}if(S==="set"&&Ce<=0){U(ie=>ie+1),y("load");return}Re=requestAnimationFrame(q)};return Re=requestAnimationFrame(q),()=>cancelAnimationFrame(Re)},[S,C,s,be]),je.useEffect(()=>{if(S==="bloom"){const He=setTimeout(()=>y("hold"),sR);return()=>clearTimeout(He)}if(S==="hold"){const He=setTimeout(()=>y(t?"set":"lift"),oR);return()=>clearTimeout(He)}if(S==="lift"){const He=setTimeout(()=>{var Re;y("done"),(Re=re.current)==null||Re.call(re)},lR);return()=>clearTimeout(He)}},[S,t]);const K=je.useCallback((He,Re)=>{const Ce=Y.current[He];Ce&&(Ce.vs+=7*Re,Ce.va+=(Bp(He*3.1+performance.now())-.5)*160*Re)},[]);je.useEffect(()=>{if(S!=="bloom")return;const He=F.current.letters.map((Re,Ce)=>setTimeout(()=>K(Ce,1),80+Ce*85));return()=>He.forEach(clearTimeout)},[S,K]),je.useEffect(()=>{const He=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let Re=0,Ce=performance.now(),ot=0,xt=0,ft=0,St=0,q=0;const Et=ct=>{var Oe;const L=Math.min(.033,(ct-Ce)/1e3);Ce=ct;const b=F.current,J=j.current,ie=(Oe=D.current)==null?void 0:Oe.getBoundingClientRect(),ge=(ie==null?void 0:ie.width)||1,Ne=(ie==null?void 0:ie.height)||1,ze=J?J.x/ge*2-1:He?0:Math.sin(ct/2600)*.35,ve=J?J.y/Ne*2-1:0;ot+=(ze-ot)*.06,xt+=(ve-xt)*.06;const ye=B.current;if(ye&&(ye.setAttribute("fx",(.5-ot*.16).toFixed(4)),ye.setAttribute("fy",(.5-Math.max(-1,xt)*.08).toFixed(4))),!He){const nt=J&&ct-J.t<120?J.vx:0;ft+=(Math.max(-1,Math.min(1,nt/2400))-ft)*.12;const Fe=Math.min(ge,Ne)*.24,Pe=Math.max(0,g);for(;Y.current.length<b.letters.length;)Y.current.push({a:0,va:0,s:0,vs:0});if(b.letters.forEach((Be,rt)=>{const it=Y.current[rt];let Z=Math.sin(ct/900+rt*.8)*1.4*Pe;if(J){const Le=J.x-Be.mx,Xe=J.y-Be.my;Z=-(Le/Fe)*Math.exp(-(Le*Le+Xe*Xe)/(2*Fe*Fe))*16*Pe}Z+=ft*9*Pe,it.va+=(-(it.a-Z)*70-it.va*7.5)*L,it.a+=it.va*L,it.vs+=(-it.s*210-it.vs*8)*L,it.s=Math.max(-.35,Math.min(.35,it.s+it.vs*L));const Ue=H.current[rt];if(!Ue)return;const Se=Mx(Be.t);Ue.setAttribute("transform","translate("+Be.bx.toFixed(1)+" "+Be.by.toFixed(1)+") rotate("+(Se+it.a).toFixed(2)+") scale("+(1+it.s*.5).toFixed(4)+" "+(1-it.s).toFixed(4)+") rotate("+(-Se).toFixed(2)+") translate("+(-Be.bx).toFixed(1)+" "+(-Be.by).toFixed(1)+")")}),p>0&&ct-St>fR){St=ct,q=(q+1)%3;const Be=b.stroke*.05*p;b.letters.forEach((rt,it)=>{const Z=Q.current[it]||[];rt.strokes.forEach((Ue,Se)=>{var Le;(Le=Z[Se])==null||Le.setAttribute("d",Eu(Ue,rt.m,Be,q*7+1+it))})})}}Re=requestAnimationFrame(Et)};return Re=requestAnimationFrame(Et),()=>cancelAnimationFrame(Re)},[p,g]);const de=()=>{S==="load"?G.current=!0:S==="bloom"?y("hold"):S==="hold"&&y(t?"set":"lift")},Ae=He=>{const Re=D.current;if(!Re)return;const Ce=Re.getBoundingClientRect(),ot=He.clientX-Ce.left,xt=He.clientY-Ce.top,ft=performance.now(),St=j.current,q=St?(ot-St.x)/Math.max(1,ft-St.t)*1e3:0;j.current={x:ot,y:xt,vx:St?St.vx*.5+q*.5:0,t:ft}},Ie=()=>{j.current=null},xe=S==="load",De=we.stroke*.05*p,Ht=yx(iR(P),0,-ue*.6,ue*.25),_t=yx("♥",0,-ue*.6,ue*.34),vt=c.trim()||"Page";return w.jsxs("div",{ref:D,className:"amr-root "+N,"data-phase":S,style:{height:M,"--amr-rise":0,"--amr-r":ue.toFixed(1)+"px","--amr-cover":we.cover.toFixed(3),"--amr-paper":ae.paper,"--amr-ink":ae.ink,"--amr-glow":ae.glow,"--amr-serif":x,"--amr-mono":eR},onPointerMove:Ae,onPointerLeave:Ie,children:[w.jsx("style",{children:rR}),!t&&o?w.jsx("div",{className:"amr-dest","data-active":S==="done","aria-hidden":S!=="done",children:o}):null,S!=="done"?w.jsxs("div",{className:"amr-gate",role:"progressbar","aria-label":vt+" is loading","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":P,"aria-valuetext":xe?P+"%":"Loaded. Press Enter to continue.",tabIndex:0,onClick:de,onKeyDown:He=>{(He.key==="Enter"||He.key===" ")&&(He.preventDefault(),de())},children:[w.jsx("div",{className:"amr-blush"}),w.jsxs("svg",{className:"amr-stage",viewBox:"0 0 "+_e+" "+ke,preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:[w.jsx("defs",{children:w.jsxs("radialGradient",{id:E+"-sun",ref:B,cx:"0.5",cy:"0.5",r:"0.5",fx:"0.5",fy:"0.5",children:[w.jsx("stop",{offset:"0",stopColor:ae.core}),w.jsx("stop",{offset:"0.55",stopColor:ae.core,stopOpacity:"0.55"}),w.jsx("stop",{offset:"1",stopColor:ae.core,stopOpacity:"0"})]})}),w.jsx("g",{transform:"translate("+we.cx.toFixed(1)+" "+we.cy.toFixed(1)+")",children:w.jsxs("g",{className:"amr-rise",children:[w.jsxs("g",{className:"amr-sun-scale",children:[w.jsx("circle",{className:"amr-ring",r:ue,strokeWidth:Math.max(1.5,we.stroke*.12)}),w.jsx("circle",{className:"amr-ring amr-ring-2",r:ue,strokeWidth:Math.max(1.5,we.stroke*.09)}),w.jsx("circle",{className:"amr-ring amr-ring-3",r:ue,strokeWidth:Math.max(1,we.stroke*.06)}),w.jsxs("g",{className:"amr-sun",children:[w.jsx("circle",{r:ue,fill:ae.sun}),w.jsx("circle",{r:ue,fill:"url(#"+E+"-sun)"})]})]}),_?w.jsx("path",{className:"amr-count",d:Ht.d,strokeWidth:Math.max(3,ue*.25*.24)}):null,w.jsx("path",{className:"amr-heart",d:_t.d,pathLength:1,strokeWidth:Math.max(3,ue*.34*.2)}),f?w.jsx("text",{className:"amr-caption",x:0,y:-ue*.25,textAnchor:"middle",fontSize:Math.max(12,ue*.075),children:f}):null,w.jsx("text",{className:"amr-hint",x:0,y:-ue*.12,textAnchor:"middle",fontSize:Math.max(9,ue*.036),children:t?"click to replay":"click to enter"})]})}),w.jsx("g",{className:"amr-word",strokeWidth:we.stroke.toFixed(2),children:we.letters.map((He,Re)=>w.jsx("g",{className:"amr-fly",style:{"--fx":He.fx.toFixed(1)+"px","--fy":He.fy.toFixed(1)+"px","--fr":He.fr.toFixed(1)+"deg"},children:w.jsxs("g",{ref:Ce=>{H.current[Re]=Ce},className:"amr-letter",onPointerEnter:()=>K(Re,.5),onClick:Ce=>{Ce.stopPropagation(),K(Re,1.1)},children:[He.strokes.map((Ce,ot)=>w.jsx("path",{ref:xt=>{Q.current[Re]||(Q.current[Re]=[]),Q.current[Re][ot]=xt},d:Eu(Ce,He.m,De,1+Re),pathLength:1,strokeDasharray:"1 1",style:{strokeDashoffset:1,opacity:0}},ot)),He.strokes.map((Ce,ot)=>w.jsx("path",{className:"amr-hit",d:Eu(Ce,He.m,0,0),strokeWidth:we.stroke*1.6},"hit"+ot))]})},Re))},C)]}),w.jsxs("svg",{className:"amr-grain","aria-hidden":"true",children:[w.jsxs("filter",{id:E+"-grain",children:[w.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.85",numOctaves:2,stitchTiles:"stitch"}),w.jsx("feColorMatrix",{type:"saturate",values:"0"})]}),w.jsx("rect",{width:"100%",height:"100%",filter:"url(#"+E+"-grain)"})]}),w.jsx("div",{className:"amr-frame"}),w.jsx("span",{className:"amr-sr","aria-live":"polite",children:xe?"":vt+" — "+f})]}):null]})}const uS="ibc4-preloader-seen";function hR(){try{return sessionStorage.getItem(uS)==="1"}catch{return!1}}function pR(){const[o,t]=je.useState(()=>!hR());if(je.useEffect(()=>{if(!o)return;const s=document.documentElement,c=s.style.overflow;return s.style.overflow="hidden",s.dataset.preloading="1",()=>{s.style.overflow=c,delete s.dataset.preloading}},[o]),!o)return null;const i=()=>{try{sessionStorage.setItem(uS,"1")}catch{}t(!1)};return w.jsx("div",{className:"site-preloader",children:w.jsx(dR,{className:"site-preloader__poster",word:"CELL 4.0",caption:"Intelligent Battery Hackathon 2026",durationMs:2600,palette:{paper:"#faf5ee",ink:"#232424",sun:"#8DC0DE",core:"#3d7aa3",glow:"#faf5ee"},fontFamily:"'Playfair Display', Georgia, serif",height:"100svh",onComplete:i})})}function mR(){return w.jsxs("div",{className:"page-shell",children:[w.jsx(pR,{}),w.jsx(T3,{}),w.jsx(A3,{}),w.jsx(R3,{}),w.jsx(L3,{}),w.jsx("section",{className:"article-intro","aria-label":"Hackathon introduction",children:w.jsxs("div",{className:"article-intro__inner",children:[w.jsx(qh,{as:"p",className:"article-intro__lead",text:"Intelligent Battery Cell 4.0 Hackathon 2026 will bring participants together to develop innovative solutions for the future of battery technology.",highlightWord:"innovative"}),w.jsx(qh,{as:"p",className:"article-intro__copy",text:"The event is focused on using AI to advance battery safety, sustainability, and indigenous innovation."}),w.jsx(qh,{as:"p",className:"article-intro__copy",text:"Open to students and research scholars, student start-ups, and MSMEs and registered start-ups. Shortlisted applicants receive mentoring before the Grand Finale, with cash prizes of up to ₹2 lakh, certificates for the winners, and incubation opportunities for participants."})]})}),w.jsx(O3,{}),w.jsx(H3,{}),w.jsx(P3,{}),w.jsx(I3,{}),w.jsx(G3,{}),w.jsx(k3,{}),w.jsx(q3,{}),w.jsx(Z3,{}),w.jsx(K3,{}),w.jsx(Q3,{})]})}eE.createRoot(document.getElementById("root")).render(w.jsx(bx.StrictMode,{children:w.jsx(mR,{})}));
