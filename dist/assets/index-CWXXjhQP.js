(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function eb(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var W0={exports:{}},wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iM;function kC(){if(iM)return wu;iM=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var d in s)d!=="key"&&(c[d]=s[d])}else c=s;return s=c.ref,{$$typeof:o,type:a,key:u,ref:s!==void 0?s:null,props:c}}return wu.Fragment=e,wu.jsx=n,wu.jsxs=n,wu}var aM;function XC(){return aM||(aM=1,W0.exports=kC()),W0.exports}var F=XC(),Y0={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rM;function WC(){if(rM)return bt;rM=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),x=Symbol.iterator;function E(k){return k===null||typeof k!="object"?null:(k=x&&k[x]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,y={};function L(k,le,Ee){this.props=k,this.context=le,this.refs=y,this.updater=Ee||b}L.prototype.isReactComponent={},L.prototype.setState=function(k,le){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,le,"setState")},L.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function z(){}z.prototype=L.prototype;function C(k,le,Ee){this.props=k,this.context=le,this.refs=y,this.updater=Ee||b}var R=C.prototype=new z;R.constructor=C,S(R,L.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function I(k,le,Ee){var J=Ee.ref;return{$$typeof:o,type:k,key:le,ref:J!==void 0?J:null,props:Ee}}function V(k,le){return I(k.type,le,k.props)}function H(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function q(k){var le={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ee){return le[Ee]})}var W=/\/+/g;function j(k,le){return typeof k=="object"&&k!==null&&k.key!=null?q(""+k.key):le.toString(36)}function X(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(w,w):(k.status="pending",k.then(function(le){k.status==="pending"&&(k.status="fulfilled",k.value=le)},function(le){k.status==="pending"&&(k.status="rejected",k.reason=le)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function G(k,le,Ee,J,ce){var Ce=typeof k;(Ce==="undefined"||Ce==="boolean")&&(k=null);var Ge=!1;if(k===null)Ge=!0;else switch(Ce){case"bigint":case"string":case"number":Ge=!0;break;case"object":switch(k.$$typeof){case o:case e:Ge=!0;break;case _:return Ge=k._init,G(Ge(k._payload),le,Ee,J,ce)}}if(Ge)return ce=ce(k),Ge=J===""?"."+j(k,0):J,O(ce)?(Ee="",Ge!=null&&(Ee=Ge.replace(W,"$&/")+"/"),G(ce,le,Ee,"",function(lt){return lt})):ce!=null&&(H(ce)&&(ce=V(ce,Ee+(ce.key==null||k&&k.key===ce.key?"":(""+ce.key).replace(W,"$&/")+"/")+Ge)),le.push(ce)),1;Ge=0;var ve=J===""?".":J+":";if(O(k))for(var Ue=0;Ue<k.length;Ue++)J=k[Ue],Ce=ve+j(J,Ue),Ge+=G(J,le,Ee,Ce,ce);else if(Ue=E(k),typeof Ue=="function")for(k=Ue.call(k),Ue=0;!(J=k.next()).done;)J=J.value,Ce=ve+j(J,Ue++),Ge+=G(J,le,Ee,Ce,ce);else if(Ce==="object"){if(typeof k.then=="function")return G(X(k),le,Ee,J,ce);throw le=String(k),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.")}return Ge}function te(k,le,Ee){if(k==null)return k;var J=[],ce=0;return G(k,J,"","",function(Ce){return le.call(Ee,Ce,ce++)}),J}function ne(k){if(k._status===-1){var le=k._result,Ee=le();Ee.then(function(J){(k._status===0||k._status===-1)&&(k._status=1,k._result=J,Ee.status===void 0&&(Ee.status="fulfilled",Ee.value=J))},function(J){(k._status===0||k._status===-1)&&(k._status=2,k._result=J,Ee.status===void 0&&(Ee.status="rejected",Ee.reason=J))}),k._status===-1&&(k._status=0,k._result=Ee)}if(k._status===1)return k._result.default;throw k._result}var P=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var le=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(le))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function me(k){var le=T.T,Ee={};Ee.types=le!==null?le.types:null,T.T=Ee;try{var J=k(),ce=T.S;ce!==null&&ce(Ee,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(w,P)}catch(Ce){P(Ce)}finally{le!==null&&Ee.types!==null&&(le.types=Ee.types),T.T=le}}function Fe(k){var le=T.T;if(le!==null){var Ee=le.types;Ee===null?le.types=[k]:Ee.indexOf(k)===-1&&Ee.push(k)}else me(Fe.bind(null,k))}var Le={map:te,forEach:function(k,le,Ee){te(k,function(){le.apply(this,arguments)},Ee)},count:function(k){var le=0;return te(k,function(){le++}),le},toArray:function(k){return te(k,function(le){return le})||[]},only:function(k){if(!H(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return bt.Activity=g,bt.Children=Le,bt.Component=L,bt.Fragment=n,bt.Profiler=s,bt.PureComponent=C,bt.StrictMode=a,bt.Suspense=p,bt.ViewTransition=v,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,bt.__COMPILER_RUNTIME={__proto__:null,c:function(k){return T.H.useMemoCache(k)}},bt.addTransitionType=Fe,bt.cache=function(k){return function(){return k.apply(null,arguments)}},bt.cacheSignal=function(){return null},bt.cloneElement=function(k,le,Ee){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var J=S({},k.props),ce=k.key;if(le!=null)for(Ce in le.key!==void 0&&(ce=""+le.key),le)!D.call(le,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&le.ref===void 0||(J[Ce]=le[Ce]);var Ce=arguments.length-2;if(Ce===1)J.children=Ee;else if(1<Ce){for(var Ge=Array(Ce),ve=0;ve<Ce;ve++)Ge[ve]=arguments[ve+2];J.children=Ge}return I(k.type,ce,J)},bt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:c,_context:k},k},bt.createElement=function(k,le,Ee){var J,ce={},Ce=null;if(le!=null)for(J in le.key!==void 0&&(Ce=""+le.key),le)D.call(le,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ce[J]=le[J]);var Ge=arguments.length-2;if(Ge===1)ce.children=Ee;else if(1<Ge){for(var ve=Array(Ge),Ue=0;Ue<Ge;Ue++)ve[Ue]=arguments[Ue+2];ce.children=ve}if(k&&k.defaultProps)for(J in Ge=k.defaultProps,Ge)ce[J]===void 0&&(ce[J]=Ge[J]);return I(k,Ce,ce)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(k){return{$$typeof:d,render:k}},bt.isValidElement=H,bt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:ne}},bt.memo=function(k,le){return{$$typeof:m,type:k,compare:le===void 0?null:le}},bt.startTransition=me,bt.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},bt.use=function(k){return T.H.use(k)},bt.useActionState=function(k,le,Ee){return T.H.useActionState(k,le,Ee)},bt.useCallback=function(k,le){return T.H.useCallback(k,le)},bt.useContext=function(k){return T.H.useContext(k)},bt.useDebugValue=function(){},bt.useDeferredValue=function(k,le){return T.H.useDeferredValue(k,le)},bt.useEffect=function(k,le){return T.H.useEffect(k,le)},bt.useEffectEvent=function(k){return T.H.useEffectEvent(k)},bt.useId=function(){return T.H.useId()},bt.useImperativeHandle=function(k,le,Ee){return T.H.useImperativeHandle(k,le,Ee)},bt.useInsertionEffect=function(k,le){return T.H.useInsertionEffect(k,le)},bt.useLayoutEffect=function(k,le){return T.H.useLayoutEffect(k,le)},bt.useMemo=function(k,le){return T.H.useMemo(k,le)},bt.useOptimistic=function(k,le){return T.H.useOptimistic(k,le)},bt.useReducer=function(k,le,Ee){return T.H.useReducer(k,le,Ee)},bt.useRef=function(k){return T.H.useRef(k)},bt.useState=function(k){return T.H.useState(k)},bt.useSyncExternalStore=function(k,le,Ee){return T.H.useSyncExternalStore(k,le,Ee)},bt.useTransition=function(){return T.H.useTransition()},bt.version="19.3.1",bt}var sM;function cv(){return sM||(sM=1,Y0.exports=WC()),Y0.exports}var qe=cv();const tb=eb(qe);var q0={exports:{}},Du={},Z0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oM;function YC(){return oM||(oM=1,(function(o){function e(X,G){var te=X.length;X.push(G);e:for(;0<te;){var ne=te-1>>>1,P=X[ne];if(0<s(P,G))X[ne]=G,X[te]=P,te=ne;else break e}}function n(X){return X.length===0?null:X[0]}function a(X){if(X.length===0)return null;var G=X[0],te=X.pop();if(te!==G){X[0]=te;e:for(var ne=0,P=X.length,me=P>>>1;ne<me;){var Fe=2*(ne+1)-1,Le=X[Fe],k=Fe+1,le=X[k];if(0>s(Le,te))k<P&&0>s(le,Le)?(X[ne]=le,X[k]=te,ne=k):(X[ne]=Le,X[Fe]=te,ne=Fe);else if(k<P&&0>s(le,te))X[ne]=le,X[k]=te,ne=k;else break e}}return G}function s(X,G){var te=X.sortIndex-G.sortIndex;return te!==0?te:X.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();o.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,g=null,v=3,x=!1,E=!1,b=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var G=n(m);G!==null;){if(G.callback===null)a(m);else if(G.startTime<=X)a(m),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(m)}}function R(X){if(b=!1,C(X),!E)if(n(p)!==null)E=!0,O||(O=!0,H());else{var G=n(m);G!==null&&j(R,G.startTime-X)}}var O=!1,w=-1,T=5,D=-1;function I(){return S?!0:!(o.unstable_now()-D<T)}function V(){if(S=!1,O){var X=o.unstable_now();D=X;var G=!0;try{e:{E=!1,b&&(b=!1,L(w),w=-1),x=!0;var te=v;try{t:{for(C(X),g=n(p);g!==null&&!(g.expirationTime>X&&I());){var ne=g.callback;if(typeof ne=="function"){g.callback=null,v=g.priorityLevel;var P=ne(g.expirationTime<=X);if(X=o.unstable_now(),typeof P=="function"){g.callback=P,C(X),G=!0;break t}g===n(p)&&a(p),C(X)}else a(p);g=n(p)}if(g!==null)G=!0;else{var me=n(m);me!==null&&j(R,me.startTime-X),G=!1}}break e}finally{g=null,v=te,x=!1}G=void 0}}finally{G?H():O=!1}}}var H;if(typeof z=="function")H=function(){z(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,W=q.port2;q.port1.onmessage=V,H=function(){W.postMessage(null)}}else H=function(){y(V,0)};function j(X,G){w=y(function(){X(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var te=v;v=G;try{return X()}finally{v=te}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(X,G){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var te=v;v=X;try{return G()}finally{v=te}},o.unstable_scheduleCallback=function(X,G,te){var ne=o.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ne+te:ne):te=ne,X){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=te+P,X={id:_++,callback:G,priorityLevel:X,startTime:te,expirationTime:P,sortIndex:-1},te>ne?(X.sortIndex=te,e(m,X),n(p)===null&&X===n(m)&&(b?(L(w),w=-1):b=!0,j(R,te-ne))):(X.sortIndex=P,e(p,X),E||x||(E=!0,O||(O=!0,H()))),X},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(X){var G=v;return function(){var te=v;v=G;try{return X.apply(this,arguments)}finally{v=te}}}})(j0)),j0}var lM;function qC(){return lM||(lM=1,Z0.exports=YC()),Z0.exports}var K0={exports:{}},Si={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cM;function ZC(){if(cM)return Si;cM=1;var o=cv();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),u=Symbol.for("react.optimistic_key");function d(_,g,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:x===u?u:""+x,children:_,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Si.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Si.browser=function(_){return{$$typeof:c,_reason:_}},Si.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(_,g,null,v)},Si.flushSync=function(_){var g=p.T,v=a.p;try{if(p.T=null,a.p=2,_)return _()}finally{p.T=g,a.p=v,a.d.f()}},Si.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(_,g))},Si.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},Si.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,x=m(v,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,b=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:b}):v==="script"&&a.d.X(_,{crossOrigin:x,integrity:E,fetchPriority:b,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Si.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);a.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&a.d.M(_)},Si.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,x=m(v,g.crossOrigin);a.d.L(_,v,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Si.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);a.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else a.d.m(_)},Si.requestFormReset=function(_){a.d.r(_)},Si.unstable_batchedUpdates=function(_,g){return _(g)},Si.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},Si.useFormStatus=function(){return p.H.useHostTransitionStatus()},Si.version="19.3.1",Si}var uM;function jC(){if(uM)return K0.exports;uM=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),K0.exports=ZC(),K0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fM;function KC(){if(fM)return Du;fM=1;var o=qC(),e=cv(),n=jC();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var i=t,r=i;r&&!r.alternate;)i=r,(i.flags&4098)!==0&&(t=i.return),r=i.return;for(;i.return;)i=i.return;return i.tag===3?t:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===r)return p(f),t;if(h===l)return p(f),i;h=h.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=h;else{for(var M=!1,U=f.child;U;){if(U===r){M=!0,r=f,l=h;break}if(U===l){M=!0,l=f,r=h;break}U=U.sibling}if(!M){for(U=h.child;U;){if(U===r){M=!0,r=h,l=f;break}if(U===l){M=!0,l=h,r=f;break}U=U.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}function g(t,i,r,l,f,h){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&r(t,l,f,h)||(t.tag!==22||t.memoizedState===null)&&(i||t.tag!==5&&t.tag!==27)&&g(t.child,i,r,l,f,h))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function x(t){var i=!1;for(t=t.return;t!==null&&(t.tag===4&&(i=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return i}function E(t){var i=[null,null],r=v(t);return r===null||b(i,t,r.child,{foundSelf:!1}),i}function b(t,i,r,l){for(;r!==null;){if(r===i)l.foundSelf=!0;else if(r.tag===5||r.tag===27||r.tag===6){if(l.foundSelf)return t[1]=r,!0;t[0]=r}else if((r.tag!==22||r.memoizedState===null)&&b(t,i,r.child,l))return!0;r=r.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(a(559))}}var y=null,L=null;function z(t,i,r){return t===r?!0:t===i?(y=t,!0):!1}function C(t,i,r){return t===r?(L=t,!1):t===i?(L!==null&&(y=t),!0):!1}function R(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,i,r){for(var l=0,f=t;f;f=r(f))l++;f=0;for(var h=i;h;h=r(h))f++;for(;0<l-f;)t=r(t),l--;for(;0<f-l;)i=r(i),f--;for(;l--;){if(t===i||i!==null&&t===i.alternate)return t;t=r(t),i=r(i)}return null}var w=Object.assign,T=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),j=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),Fe=Symbol.for("react.legacy_hidden"),Le=Symbol.for("react.memo_cache_sentinel"),k=Symbol.for("react.view_transition"),le=Symbol.for("react.recoverable"),Ee=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=Ee&&t[Ee]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function Ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case q:return"Profiler";case H:return"StrictMode";case G:return"Suspense";case te:return"SuspenseList";case me:return"Activity";case k:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case j:return t.displayName||"Context";case W:return(t._context.displayName||"Context")+".Consumer";case X:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ne:return i=t.displayName||null,i!==null?i:Ce(t.type)||"Memo";case P:i=t._payload,t=t._init;try{return Ce(t(i))}catch{}}return null}var Ge=Array.isArray,ve=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ue=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},ct=[],mt=-1;function Be(t){return{current:t}}function Z(t){0>mt||(t.current=ct[mt],ct[mt]=null,mt--)}function Ne(t,i){mt++,ct[mt]=t.current,t.current=i}var dt=Be(null),xt=Be(null),$e=Be(null),vt=Be(null);function Q(t,i){switch(Ne($e,i),Ne(xt,t),Ne(dt,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?d1(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=d1(i),t=h1(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(dt),Ne(dt,t)}function yt(){Z(dt),Z(xt),Z($e)}function rt(t){var i=t.memoizedState;i!==null&&(Yl._currentValue=i.memoizedState,Ne(vt,t)),i=dt.current;var r=h1(i,t.type);i!==r&&(Ne(xt,t),Ne(dt,r))}function B(t){xt.current===t&&(Z(dt),Z(xt)),vt.current===t&&(Z(vt),Yl._currentValue=lt)}var A,ie;function re(t){if(A===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);A=i&&i[1]||"",ie=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+A+t+ie}var ge=!1;function Ie(t,i){if(!t||ge)return"";ge=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(je){var ae=je}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(je){ae=je}Ae=!1;try{var pe=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ae=!0,new t}finally{Ae&&(pe!==void 0?Object.defineProperty(t.prototype,"props",pe):delete t.prototype.props)}}}else{try{throw Error()}catch(je){ae=je}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(je){if(je&&ae&&typeof je.stack=="string")return[je.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),M=h[0],U=h[1];if(M&&U){var Y=M.split(`
`),oe=U.split(`
`);for(f=l=0;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===Y.length||f===oe.length)for(l=Y.length-1,f=oe.length-1;1<=l&&0<=f&&Y[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(Y[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||Y[l]!==oe[f]){var _e=`
`+Y[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{ge=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?re(r):""}function Pe(t,i){switch(t.tag){case 26:case 27:case 5:return re(t.type);case 16:return re("Lazy");case 13:return t.child!==i&&i!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return Ie(t.type,!1);case 11:return Ie(t.type.render,!1);case 1:return Ie(t.type,!0);case 31:return re("Activity");case 30:return re("ViewTransition");default:return""}}function Se(t){try{var i="",r=null;do i+=Pe(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ye=Object.prototype.hasOwnProperty,Ve=o.unstable_scheduleCallback,et=o.unstable_cancelCallback,Xe=o.unstable_shouldYield,ke=o.unstable_requestPaint,Re=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,Ke=o.unstable_ImmediatePriority,$=o.unstable_UserBlockingPriority,ze=o.unstable_NormalPriority,Me=o.unstable_LowPriority,He=o.unstable_IdlePriority,We=o.log,De=o.unstable_setDisableYieldValue,Oe=null,be=null;function st(t){if(typeof We=="function"&&De(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Oe,t)}catch{}}var we=Math.clz32?Math.clz32:Et,_t=Math.log,ut=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(_t(t)/ut|0)|0}var bn=256,Rt=262144,an=4194304;function Sn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function rn(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var U=l&134217727;return U!==0?(l=U&~h,l!==0?f=Sn(l):(M&=U,M!==0?f=Sn(M):r||(r=U&~t,r!==0&&(f=Sn(r))))):(U=l&~h,U!==0?f=Sn(U):M!==0?f=Sn(M):r||(r=l&~t,r!==0&&(f=Sn(r)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,r=i&-i,h>=r||h===32&&(r&4194048)!==0)?i:f}function Qt(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function It(t,i){(i&8)!==0&&(i|=i&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=i;0<r;){var l=31-we(r),f=1<<l;i|=t[l],r&=~f}return i}function pi(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var t=an;return an<<=1,(an&62914560)===0&&(an=4194304),t}function Yn(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Vn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Un(t,i,r,l,f,h){var M=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var U=t.entanglements,Y=t.expirationTimes,oe=t.hiddenUpdates;for(r=M&~r;0<r;){var _e=31-we(r),Ae=1<<_e;U[_e]=0,Y[_e]=-1;var ae=oe[_e];if(ae!==null)for(oe[_e]=null,_e=0;_e<ae.length;_e++){var pe=ae[_e];pe!==null&&(pe.lane&=-536870913)}r&=~Ae}l!==0&&Tn(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~i))}function Tn(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-we(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function On(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-we(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function la(t,i){var r=i&-i;return r=(r&42)!==0?1:pr(r),(r&(t.suspendedLanes|i))!==0?0:r}function pr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function An(){var t=Ue.p;return t!==0?t:(t=window.event,t===void 0?32:K1(t.type))}function Pi(t,i){var r=Ue.p;try{return Ue.p=t,i()}finally{Ue.p=r}}var bi=Math.random().toString(36).slice(2),N="__reactFiber$"+bi,K="__reactProps$"+bi,he="__reactContainer$"+bi,ue="__reactEvents$"+bi,de="__reactListeners$"+bi,Ye="__reactHandles$"+bi,tt="__reactResources$"+bi,Ze="__reactMarker$"+bi,ot="__reactLoad$"+bi;function ht(t){delete t[N],delete t[K],delete t[de],delete t[Ye]}function Mt(t){var i;if(i=t[N])return i;for(var r=t.parentNode;r;){if(i=r[he]||r[N]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=D1(t);t!==null;){if(r=t[N])return r;t=D1(t)}return i}t=r,r=t.parentNode}return null}function At(t){if(t=t[N]||t[he]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function it(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ht(t){var i=t[tt];return i||(i=t[tt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Lt(t){t[Ze]=!0}function mn(t){t[ot]=void 0}var sn=new Set,ti={};function Qe(t,i){In(t,i),In(t+"Capture",i)}function In(t,i){for(ti[t]=i,t=0;t<i.length;t++)sn.add(i[t])}var Yt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ii={},ca={};function mr(t){return ye.call(ca,t)?!0:ye.call(Ii,t)?!1:Yt.test(t)?ca[t]=!0:(Ii[t]=!0,!1)}var Ut=!1;function $t(){var t=Ut;return Ut=!1,t}function yn(t,i,r){if(mr(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,r)}}function ua(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,r)}}function kt(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,l)}}function zn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kr(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Nf(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){r=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function yp(t){if(!t._valueTracker){var i=kr(t)?"checked":"value";t._valueTracker=Nf(t,i,""+t[i])}}function ex(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=kr(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}var uA=/[\n"\\]/g;function La(t){return t.replace(uA,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Mp(t,i,r,l,f,h,M,U){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+zn(i)):t.value!==""+zn(i)&&(t.value=""+zn(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?M==="number"&&t.value==i?Ep(t,zn(t.value)):Ep(t,zn(i)):r!=null?Ep(t,zn(r)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+zn(U):t.removeAttribute("name")}function tx(t,i,r,l,f,h,M,U){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){yp(t);return}r=r!=null?""+zn(r):"",i=i!=null?""+zn(i):r,U||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=U?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),yp(t)}function Ep(t,i){t.defaultValue!==""+i&&(t.defaultValue=""+i)}function ul(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+zn(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function nx(t,i,r){if(i!=null&&(i=""+zn(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+zn(r):""}function ix(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(Ge(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=zn(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),yp(t)}function fl(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var fA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ax(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||fA.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function rx(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="",Ut=!0);for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&(ax(t,f,l),Ut=!0)}else for(var h in i)i.hasOwnProperty(h)&&ax(t,h,i[h])}function bp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lf(t){return hA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _r(){}var Tp=null;function Ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dl=null,hl=null;function sx(t){var i=At(t);if(i&&(t=i.stateNode)){var r=t[K]||null;e:switch(t=i.stateNode,i.type){case"input":if(Mp(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+La(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[K]||null;if(!f)throw Error(a(90));Mp(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&ex(l)}break e;case"textarea":nx(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&ul(t,!!r.multiple,i,!1)}}}var Cp=!1;function ox(t,i,r){if(Cp)return t(i,r);Cp=!0;try{var l=t(i);return l}finally{if(Cp=!1,(dl!==null||hl!==null)&&(Ld(),dl&&(i=dl,t=hl,hl=dl=null,sx(i),t)))for(i=0;i<t.length;i++)sx(t[i])}}function Gc(t,i){var r=t.stateNode;if(r===null)return null;var l=r[K]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=!1;if(Xr)try{var Vc={};Object.defineProperty(Vc,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",Vc,Vc),window.removeEventListener("test",Vc,Vc)}catch{Rp=!1}var Ss=null,wp=null,Uf=null;function lx(){if(Uf)return Uf;var t,i=wp,r=i.length,l,f="value"in Ss?Ss.value:Ss.textContent,h=f.length;for(t=0;t<r&&i[t]===f[t];t++);var M=r-t;for(l=1;l<=M&&i[r-l]===f[h-l];l++);return Uf=f.slice(t,1<l?1-l:void 0)}function Of(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Pf(){return!0}function cx(){return!1}function zi(t){function i(r,l,f,h,M){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(r=t[U],this[U]=r?r(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Pf:cx,this.isPropagationStopped=cx,this}return w(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pf)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pf)},persist:function(){},isPersistent:Pf}),i}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},If=zi(ys),kc=w({},ys,{view:0,detail:0}),pA=zi(kc),Dp,Np,Xc,zf=w({},kc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xc&&(Xc&&t.type==="mousemove"?(Dp=t.screenX-Xc.screenX,Np=t.screenY-Xc.screenY):Np=Dp=0,Xc=t),Dp)},movementY:function(t){return"movementY"in t?t.movementY:Np}}),ux=zi(zf),mA=w({},zf,{dataTransfer:0}),_A=zi(mA),gA=w({},kc,{relatedTarget:0}),Lp=zi(gA),vA=w({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),xA=zi(vA),SA=w({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yA=zi(SA),MA=w({},ys,{data:0}),fx=zi(MA),EA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AA(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=TA[t])?!!i[t]:!1}function Up(){return AA}var CA=w({},kc,{key:function(t){if(t.key){var i=EA[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Of(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(t){return t.type==="keypress"?Of(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Of(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RA=zi(CA),wA=w({},zf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dx=zi(wA),DA=w({},ys,{submitter:0}),NA=zi(DA),LA=w({},kc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),UA=zi(LA),OA=w({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),PA=zi(OA),IA=w({},zf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zA=zi(IA),FA=w({},ys,{newState:0,oldState:0,source:0}),BA=zi(FA),HA=[9,13,27,32],Op=Xr&&"CompositionEvent"in window,Wc=null;Xr&&"documentMode"in document&&(Wc=document.documentMode);var GA=Xr&&"TextEvent"in window&&!Wc,hx=Xr&&(!Op||Wc&&8<Wc&&11>=Wc),px=" ",mx=!1;function _x(t,i){switch(t){case"keyup":return HA.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pl=!1;function VA(t,i){switch(t){case"compositionend":return gx(i);case"keypress":return i.which!==32?null:(mx=!0,px);case"textInput":return t=i.data,t===px&&mx?null:t;default:return null}}function kA(t,i){if(pl)return t==="compositionend"||!Op&&_x(t,i)?(t=lx(),Uf=wp=Ss=null,pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hx&&i.locale!=="ko"?null:i.data;default:return null}}var XA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vx(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!XA[t.type]:i==="textarea"}function xx(t,i,r,l){dl?hl?hl.push(l):hl=[l]:dl=l,i=Fd(i,"onChange"),0<i.length&&(r=new If("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var Yc=null,qc=null;function WA(t){s1(t,0)}function Ff(t){var i=it(t);if(ex(i))return t}function Sx(t,i){if(t==="change")return i}var yx=!1;if(Xr){var Pp;if(Xr){var Ip="oninput"in document;if(!Ip){var Mx=document.createElement("div");Mx.setAttribute("oninput","return;"),Ip=typeof Mx.oninput=="function"}Pp=Ip}else Pp=!1;yx=Pp&&(!document.documentMode||9<document.documentMode)}function Ex(){Yc&&(Yc.detachEvent("onpropertychange",bx),qc=Yc=null)}function bx(t){if(t.propertyName==="value"&&Ff(qc)){var i=[];xx(i,qc,t,Ap(t)),ox(WA,i)}}function YA(t,i,r){t==="focusin"?(Ex(),Yc=i,qc=r,Yc.attachEvent("onpropertychange",bx)):t==="focusout"&&Ex()}function qA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ff(qc)}function ZA(t,i){if(t==="click")return Ff(i)}function jA(t,i){if(t==="input"||t==="change")return Ff(i)}function KA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fa=typeof Object.is=="function"?Object.is:KA;function Zc(t,i){if(fa(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!ye.call(i,f)||!fa(t[f],i[f]))return!1}return!0}function zp(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ax(t,i){var r=Tx(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Tx(r)}}function Cx(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Cx(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Rx(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=zp(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=zp(t.document)}return i}function Fp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var QA=Xr&&"documentMode"in document&&11>=document.documentMode,ml=null,Bp=null,jc=null,Hp=!1;function wx(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hp||ml==null||ml!==zp(l)||(l=ml,"selectionStart"in l&&Fp(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jc&&Zc(jc,l)||(jc=l,l=Fd(Bp,"onSelect"),0<l.length&&(i=new If("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=ml)))}function po(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var _l={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionrun:po("Transition","TransitionRun"),transitionstart:po("Transition","TransitionStart"),transitioncancel:po("Transition","TransitionCancel"),transitionend:po("Transition","TransitionEnd")},Gp={},Dx={};Xr&&(Dx=document.createElement("div").style,"AnimationEvent"in window||(delete _l.animationend.animation,delete _l.animationiteration.animation,delete _l.animationstart.animation),"TransitionEvent"in window||delete _l.transitionend.transition);function mo(t){if(Gp[t])return Gp[t];if(!_l[t])return t;var i=_l[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Dx)return Gp[t]=i[r];return t}var Nx=mo("animationend"),Lx=mo("animationiteration"),Ux=mo("animationstart"),JA=mo("transitionrun"),$A=mo("transitionstart"),e2=mo("transitioncancel"),Ox=mo("transitionend"),Px=new Map,Vp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vp.push("scrollEnd");function Qa(t,i){Px.set(t,i),Qe(i,[t])}var t2=0;function Wr(t,i){if(t.name!=null&&t.name!=="auto")return t.name;if(i.autoName!==null)return i.autoName;t=tr.identifierPrefix;var r=t2++;return t="_"+t+"t_"+r.toString(32)+"_",i.autoName=t}function Ix(t){if(t==null||typeof t=="string")return t;var i=null,r=Il;if(r!==null)for(var l=0;l<r.length;l++){var f=t[r[l]];if(f!=null){if(f==="none")return"none";i=i==null?f:i+(" "+f)}}return i??t.default}function Yr(t,i){return t=Ix(t),i=Ix(i),i==null?t==="auto"?null:t:i==="auto"?null:i}var Bf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ua=[],gl=0,kp=0;function Hf(){for(var t=gl,i=kp=gl=0;i<t;){var r=Ua[i];Ua[i++]=null;var l=Ua[i];Ua[i++]=null;var f=Ua[i];Ua[i++]=null;var h=Ua[i];if(Ua[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}h!==0&&zx(r,f,h)}}function Gf(t,i,r,l){Ua[gl++]=t,Ua[gl++]=i,Ua[gl++]=r,Ua[gl++]=l,kp|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Xp(t,i,r,l){return Gf(t,i,r,l),Vf(t)}function _o(t,i){return Gf(t,null,null,i),Vf(t)}function zx(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,h=t.return;h!==null;)h.childLanes|=r,l=h.alternate,l!==null&&(l.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-we(r),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),h):null}function Vf(t){if(50<gu)throw gu=0,Nd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var vl={};function n2(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zi(t,i,r,l){return new n2(t,i,r,l)}function Wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qr(t,i){var r=t.alternate;return r===null?(r=Zi(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&1206910976,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Fx(t,i){t.flags&=1206910978;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function kf(t,i,r,l,f,h){var M=0;if(l=t,typeof l=="function")Wp(l)&&(M=1);else if(typeof l=="string")M=DC(t,r,dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(l){case me:return t=Zi(31,r,i,f),t.elementType=me,t.lanes=h,t;case V:return go(r.children,f,h,i);case H:M=8,f|=24;break;case q:return t=Zi(12,r,i,f|2),t.elementType=q,t.lanes=h,t;case G:return t=Zi(13,r,i,f),t.elementType=G,t.lanes=h,t;case te:return t=Zi(19,r,i,f),t.elementType=te,t.lanes=h,t;case Fe:case k:return t=f|32,t=Zi(30,r,i,t),t.elementType=k,t.lanes=h,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case j:M=10;break e;case W:M=9;break e;case X:M=11;break e;case ne:M=14;break e;case P:M=16,l=null;break e}M=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Zi(M,r,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function go(t,i,r,l){return t=Zi(7,t,l,i),t.lanes=r,t}function Yp(t,i,r){return t=Zi(6,t,null,i),t.lanes=r,t}function Bx(t){var i=Zi(18,null,null,0);return i.stateNode=t,i}function qp(t,i,r){return i=Zi(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Hx=new WeakMap;function Oa(t,i){if(typeof t=="object"&&t!==null){var r=Hx.get(t);return r!==void 0?r:(i={value:t,source:i,stack:Se(i)},Hx.set(t,i),i)}return{value:t,source:i,stack:Se(i)}}var xl=[],Sl=0,Xf=null,Kc=0,Pa=[],Ia=0,Ms=null,gr=1,vr="";function Zr(t,i){xl[Sl++]=Kc,xl[Sl++]=Xf,Xf=t,Kc=i}function Gx(t,i,r){Pa[Ia++]=gr,Pa[Ia++]=vr,Pa[Ia++]=Ms,Ms=t;var l=gr;t=vr;var f=32-we(l)-1;l&=~(1<<f),r+=1;var h=32-we(i)+f;if(30<h){var M=f-f%5;h=(l&(1<<M)-1).toString(32),l>>=M,f-=M,gr=1<<32-we(i)+f|r<<f|l,vr=h+t}else gr=1<<h|r<<f|l,vr=t}function Wf(t){t.return!==null&&(Zr(t,1),Gx(t,1,0))}function Zp(t){for(;t===Xf;)Xf=xl[--Sl],xl[Sl]=null,Kc=xl[--Sl],xl[Sl]=null;for(;t===Ms;)Ms=Pa[--Ia],Pa[Ia]=null,vr=Pa[--Ia],Pa[Ia]=null,gr=Pa[--Ia],Pa[Ia]=null}function Vx(t,i){Pa[Ia++]=gr,Pa[Ia++]=vr,Pa[Ia++]=Ms,gr=i.id,vr=i.overflow,Ms=t}var oi=null,Mn=null,Ot=!1,Es=null,za=!1,jp=Error(a(519));function bs(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qc(Oa(i,t)),jp}function kx(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[N]=t,i[K]=l,r){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(r=0;r<xu.length;r++)Vt(xu[r],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Vt("invalid",i),tx(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Vt("invalid",i);break;case"textarea":Vt("invalid",i),ix(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||u1(i.textContent,r)?(l.popover!=null&&(Vt("beforetoggle",i),Vt("toggle",i)),l.onScroll!=null&&Vt("scroll",i),l.onScrollEnd!=null&&Vt("scrollend",i),l.onClick!=null&&(i.onclick=_r),i=!0):i=!1,i||bs(t,!0)}function Yf(t){for(oi=t.return;oi;)switch(oi.tag){case 5:case 31:case 13:za=!1;return;case 27:case 3:za=!0;return;default:oi=oi.return}}function yl(t){if(t!==oi)return!1;if(!Ot)return Yf(t),Ot=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||T0(t.type,t.memoizedProps)),r=!r),r&&Mn&&bs(t),Yf(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Mn=w1(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Mn=w1(t)}else i===27?(i=Mn,Hs(t.type)?(t=O0,O0=null,Mn=t):Mn=i):Mn=oi?Ba(t.stateNode.nextSibling):null;return!0}function vo(){Mn=oi=null,Ot=!1}function Kp(){var t=Es;return t!==null&&(Qi===null?Qi=t:Qi.push.apply(Qi,t),Es=null),t}function Qc(t){Es===null?Es=[t]:Es.push(t)}var Qp=Be(null),xo=null,jr=null;function Ts(t,i,r){Ne(Qp,i._currentValue),i._currentValue=r}function Kr(t){t._currentValue=Qp.current,Z(Qp)}function qf(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function Jp(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var M=f.child;h=h.firstContext;e:for(;h!==null;){var U=h;h=f;for(var Y=0;Y<i.length;Y++)if(U.context===i[Y]){h.lanes|=r,U=h.alternate,U!==null&&(U.lanes|=r),qf(h.return,r,t),l||(M=null);break e}h=U.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=r,h=M.alternate,h!==null&&(h.lanes|=r),qf(M,r,t),M=null}else f.tag===13&&f.memoizedState!==null&&f.memoizedState.dehydrated===null?(f.lanes|=r,M=f.alternate,M!==null&&(M.lanes|=r),qf(f.return,r,t),M=f.child,M=M!==null?M.sibling:null):M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function So(t,i,r,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var U=f.type;fa(f.pendingProps.value,M.value)||(t!==null?t.push(U):t=[U])}}else if(f===vt.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Yl):t=[Yl])}f=f.return}return t!==null&&Jp(i,t,r,l),i.flags|=262144,t!==null}function Zf(t){for(t=t.firstContext;t!==null;){if(!fa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yo(t){xo=t,jr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function mi(t){return Xx(xo,t)}function jf(t,i){return xo===null&&yo(t),Xx(t,i)}function Xx(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},jr===null){if(t===null)throw Error(a(308));jr=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else jr=jr.next=i;return r}var i2=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},a2=o.unstable_scheduleCallback,r2=o.unstable_NormalPriority,qn={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $p(){return{controller:new i2,data:new Map,refCount:0}}function Jc(t){t.refCount--,t.refCount===0&&a2(r2,function(){t.controller.abort()})}function Wx(t,i){if((t.pendingLanes&4194048)!==0){var r=t.transitionTypes;for(r===null&&(r=t.transitionTypes=[]),t=0;t<i.length;t++){var l=i[t];r.indexOf(l)===-1&&r.push(l)}}}var $c=null;function s2(t){var i=t.transitionTypes;return t.transitionTypes=null,i}var eu=null,em=0,Mo=0,Ml=null;function o2(t,i){if(eu===null){var r=eu=[];em=0,Mo=_0(),Ml={status:"pending",value:void 0,then:function(l){r.push(l)}}}return em++,i.then(Yx,Yx),i}function Yx(){if(--em===0&&($c=null,eu!==null)){Ml!==null&&(Ml.status="fulfilled");var t=eu;eu=null,Mo=0,Ml=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function l2(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var qx=ve.S;ve.S=function(t,i){if(By=Re(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&o2(t,i),$c!==null)for(var r=Hl;r!==null;)Wx(r,$c),r=r.next;if(r=t.types,r!==null){for(var l=Hl;l!==null;)Wx(l,r),l=l.next;if(Mo!==0){l=$c,l===null&&(l=$c=[]);for(var f=0;f<r.length;f++){var h=r[f];l.indexOf(h)===-1&&l.push(h)}}}qx!==null&&qx(t,i)};var Eo=Be(null);function tm(){var t=Eo.current;return t!==null?t:gn.pooledCache}function Kf(t,i){i===null?Ne(Eo,Eo.current):Ne(Eo,i.pool)}function Zx(){var t=tm();return t===null?null:{parent:qn._currentValue,pool:t}}var El=Error(a(460)),nm=Error(a(474)),Qf=Error(a(542)),Jf={then:function(){}};function jx(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kx(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(_r,_r),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jx(t),t===void 0&&!("reason"in i)?Error(a(600)):t;default:if(typeof i.status=="string")i.then(_r,_r);else{if(t=gn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jx(t),t}throw To=i,El}}function bo(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(To=r,El):r}}var To=null;function Qx(){if(To===null)throw Error(a(459));var t=To;return To=null,t}function Jx(t){if(t===El||t===Qf)throw Error(a(483))}var bl=null,tu=0;function $f(t){var i=tu;return tu+=1,bl===null&&(bl=[]),Kx(bl,t,i)}function As(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ed(t,i){throw i.$$typeof===T?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function $x(t){function i(se,ee){if(t){var fe=se.deletions;fe===null?(se.deletions=[ee],se.flags|=16):fe.push(ee)}}function r(se,ee){if(!t)return null;for(;ee!==null;)i(se,ee),ee=ee.sibling;return null}function l(se){for(var ee=new Map;se!==null;)se.key===null?ee.set(se.index,se):ee.set(se.key,se),se=se.sibling;return ee}function f(se,ee){return se=qr(se,ee),se.index=0,se.sibling=null,se}function h(se,ee,fe){return se.index=fe,t?(fe=se.alternate,fe!==null?(fe=fe.index,fe<ee?(se.flags|=2,ee):fe):(se.flags|=134217730,ee)):(se.flags|=1048576,ee)}function M(se){return t&&se.alternate===null&&(se.flags|=134217730),se}function U(se,ee,fe,Te){return ee===null||ee.tag!==6?(ee=Yp(fe,se.mode,Te),ee.return=se,ee):(ee=f(ee,fe),ee.return=se,ee)}function Y(se,ee,fe,Te){var at=fe.type;return at===V?(se=_e(se,ee,fe.props.children,Te,fe.key),As(se,fe),se):ee!==null&&(ee.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===P&&bo(at)===ee.type)?(ee=f(ee,fe.props),As(ee,fe),ee.return=se,ee):(ee=kf(fe.type,fe.key,fe.props,null,se.mode,Te),As(ee,fe),ee.return=se,ee)}function oe(se,ee,fe,Te){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==fe.containerInfo||ee.stateNode.implementation!==fe.implementation?(ee=qp(fe,se.mode,Te),ee.return=se,ee):(ee=f(ee,fe.children||[]),ee.return=se,ee)}function _e(se,ee,fe,Te,at){return ee===null||ee.tag!==7?(ee=go(fe,se.mode,Te,at),ee.return=se,ee):(ee=f(ee,fe),ee.return=se,ee)}function Ae(se,ee,fe){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ee=Yp(""+ee,se.mode,fe),ee.return=se,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:return fe=kf(ee.type,ee.key,ee.props,null,se.mode,fe),As(fe,ee),fe.return=se,fe;case I:return ee=qp(ee,se.mode,fe),ee.return=se,ee;case P:return ee=bo(ee),Ae(se,ee,fe)}if(Ge(ee)||J(ee))return ee=go(ee,se.mode,fe,null),ee.return=se,ee;if(typeof ee.then=="function")return Ae(se,$f(ee),fe);if(ee.$$typeof===j)return Ae(se,jf(se,ee),fe);ed(se,ee)}return null}function ae(se,ee,fe,Te){var at=ee!==null?ee.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return at!==null?null:U(se,ee,""+fe,Te);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case D:return fe.key===at?Y(se,ee,fe,Te):null;case I:return fe.key===at?oe(se,ee,fe,Te):null;case P:return fe=bo(fe),ae(se,ee,fe,Te)}if(Ge(fe)||J(fe))return at!==null?null:_e(se,ee,fe,Te,null);if(typeof fe.then=="function")return ae(se,ee,$f(fe),Te);if(fe.$$typeof===j)return ae(se,ee,jf(se,fe),Te);ed(se,fe)}return null}function pe(se,ee,fe,Te,at){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return se=se.get(fe)||null,U(ee,se,""+Te,at);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return se=se.get(Te.key===null?fe:Te.key)||null,Y(ee,se,Te,at);case I:return se=se.get(Te.key===null?fe:Te.key)||null,oe(ee,se,Te,at);case P:return Te=bo(Te),pe(se,ee,fe,Te,at)}if(Ge(Te)||J(Te))return se=se.get(fe)||null,_e(ee,se,Te,at,null);if(typeof Te.then=="function")return pe(se,ee,fe,$f(Te),at);if(Te.$$typeof===j)return pe(se,ee,fe,jf(ee,Te),at);ed(ee,Te)}return null}function je(se,ee,fe,Te){for(var at=null,Wt=null,gt=ee,St=ee=0,Kn=null;gt!==null&&St<fe.length;St++){gt.index>St?(Kn=gt,gt=null):Kn=gt.sibling;var Kt=ae(se,gt,fe[St],Te);if(Kt===null){gt===null&&(gt=Kn);break}t&&gt&&Kt.alternate===null&&i(se,gt),ee=h(Kt,ee,St),Wt===null?at=Kt:Wt.sibling=Kt,Wt=Kt,gt=Kn}if(St===fe.length)return r(se,gt),Ot&&Zr(se,St),at;if(gt===null){for(;St<fe.length;St++)gt=Ae(se,fe[St],Te),gt!==null&&(ee=h(gt,ee,St),Wt===null?at=gt:Wt.sibling=gt,Wt=gt);return Ot&&Zr(se,St),at}for(gt=l(gt);St<fe.length;St++)Kn=pe(gt,se,St,fe[St],Te),Kn!==null&&(t&&(Kt=Kn.alternate,Kt!==null&&gt.delete(Kt.key===null?St:Kt.key)),ee=h(Kn,ee,St),Wt===null?at=Kn:Wt.sibling=Kn,Wt=Kn);return t&&gt.forEach(function(Ws){return i(se,Ws)}),Ot&&Zr(se,St),at}function pt(se,ee,fe,Te){if(fe==null)throw Error(a(151));for(var at=null,Wt=null,gt=ee,St=ee=0,Kn=null,Kt=fe.next();gt!==null&&!Kt.done;St++,Kt=fe.next()){gt.index>St?(Kn=gt,gt=null):Kn=gt.sibling;var Ws=ae(se,gt,Kt.value,Te);if(Ws===null){gt===null&&(gt=Kn);break}t&&gt&&Ws.alternate===null&&i(se,gt),ee=h(Ws,ee,St),Wt===null?at=Ws:Wt.sibling=Ws,Wt=Ws,gt=Kn}if(Kt.done)return r(se,gt),Ot&&Zr(se,St),at;if(gt===null){for(;!Kt.done;St++,Kt=fe.next())Kt=Ae(se,Kt.value,Te),Kt!==null&&(ee=h(Kt,ee,St),Wt===null?at=Kt:Wt.sibling=Kt,Wt=Kt);return Ot&&Zr(se,St),at}for(gt=l(gt);!Kt.done;St++,Kt=fe.next())Kt=pe(gt,se,St,Kt.value,Te),Kt!==null&&(t&&(Kn=Kt.alternate,Kn!==null&&gt.delete(Kn.key===null?St:Kn.key)),ee=h(Kt,ee,St),Wt===null?at=Kt:Wt.sibling=Kt,Wt=Kt);return t&&gt.forEach(function(VC){return i(se,VC)}),Ot&&Zr(se,St),at}function Dt(se,ee,fe,Te){if(typeof fe=="object"&&fe!==null&&fe.type===V&&fe.key===null&&fe.props.ref===void 0&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case D:e:{for(var at=fe.key;ee!==null;){if(ee.key===at){if(at=fe.type,at===V){if(ee.tag===7){r(se,ee.sibling),Te=f(ee,fe.props.children),As(Te,fe),Te.return=se,se=Te;break e}}else if(ee.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===P&&bo(at)===ee.type){r(se,ee.sibling),Te=f(ee,fe.props),As(Te,fe),Te.return=se,se=Te;break e}r(se,ee);break}else i(se,ee);ee=ee.sibling}fe.type===V?(Te=go(fe.props.children,se.mode,Te,fe.key),As(Te,fe),Te.return=se,se=Te):(Te=kf(fe.type,fe.key,fe.props,null,se.mode,Te),As(Te,fe),Te.return=se,se=Te)}return M(se);case I:e:{for(at=fe.key;ee!==null;){if(ee.key===at)if(ee.tag===4&&ee.stateNode.containerInfo===fe.containerInfo&&ee.stateNode.implementation===fe.implementation){r(se,ee.sibling),Te=f(ee,fe.children||[]),Te.return=se,se=Te;break e}else{r(se,ee);break}else i(se,ee);ee=ee.sibling}Te=qp(fe,se.mode,Te),Te.return=se,se=Te}return M(se);case P:return fe=bo(fe),Dt(se,ee,fe,Te)}if(Ge(fe))return je(se,ee,fe,Te);if(J(fe)){if(at=J(fe),typeof at!="function")throw Error(a(150));return fe=at.call(fe),pt(se,ee,fe,Te)}if(typeof fe.then=="function")return Dt(se,ee,$f(fe),Te);if(fe.$$typeof===j)return Dt(se,ee,jf(se,fe),Te);ed(se,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint"?(fe=""+fe,ee!==null&&ee.tag===6?(r(se,ee.sibling),Te=f(ee,fe),Te.return=se,se=Te):(r(se,ee),Te=Yp(fe,se.mode,Te),Te.return=se,se=Te),M(se)):r(se,ee)}return function(se,ee,fe,Te){try{tu=0;var at=Dt(se,ee,fe,Te);return bl=null,at}catch(gt){if(gt===El||gt===Qf)throw gt;var Wt=Zi(29,gt,null,se.mode);return Wt.lanes=Te,Wt.return=se,Wt}finally{}}}var Ao=$x(!0),eS=$x(!1),Cs=!1;function im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function am(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ws(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(en&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Vf(t),zx(t,null,r),i}return Gf(t,l,i,r),Vf(t)}function nu(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,On(t,r)}}function rm(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?f=h=M:h=h.next=M,r=r.next}while(r!==null);h===null?f=h=i:h=h.next=i}else f=h=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var sm=!1;function iu(){if(sm){var t=Ml;if(t!==null)throw t}}function au(t,i,r,l){sm=!1;var f=t.updateQueue;Cs=!1;var h=f.firstBaseUpdate,M=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var Y=U,oe=Y.next;Y.next=null,M===null?h=oe:M.next=oe,M=Y;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==M&&(U===null?_e.firstBaseUpdate=oe:U.next=oe,_e.lastBaseUpdate=Y))}if(h!==null){var Ae=f.baseState;M=0,_e=oe=Y=null,U=h;do{var ae=U.lane&-536870913,pe=ae!==U.lane;if(pe?(Xt&ae)===ae:(l&ae)===ae){ae!==0&&ae===Mo&&(sm=!0),_e!==null&&(_e=_e.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var je=t,pt=U;ae=i;var Dt=r;switch(pt.tag){case 1:if(je=pt.payload,typeof je=="function"){Ae=je.call(Dt,Ae,ae);break e}Ae=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=pt.payload,ae=typeof je=="function"?je.call(Dt,Ae,ae):je,ae==null)break e;Ae=w({},Ae,ae);break e;case 2:Cs=!0}}ae=U.callback,ae!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[ae]:pe.push(ae))}else pe={lane:ae,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(oe=_e=pe,Y=Ae):_e=_e.next=pe,M|=ae;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;pe=U,U=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);_e===null&&(Y=Ae),f.baseState=Y,f.firstBaseUpdate=oe,f.lastBaseUpdate=_e,h===null&&(f.shared.lanes=0),Is|=M,t.lanes=M,t.memoizedState=Ae}}function tS(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function nS(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)tS(r[t],i)}var Ds=Be(null),td=Be(0);function iS(t,i){t=ts,Ne(td,t),Ne(Ds,i),ts=t|i.baseLanes}function om(){Ne(td,ts),Ne(Ds,Ds.current)}function lm(){ts=td.current,Z(Ds),Z(td)}var _i=Be(null),Ti=null;function Ns(t){var i=t.alternate;Ne(gi,gi.current&1),Ne(_i,t),Ti===null&&(i===null||Ds.current!==null||i.memoizedState!==null)&&(Ti=t)}function cm(t){Ne(gi,gi.current),Ne(_i,t),Ti===null&&(Ti=t)}function aS(t){t.tag===22?(Ne(gi,gi.current),Ne(_i,t),Ti===null&&(Ti=t)):Ls()}function Ls(){Ne(gi,gi.current),Ne(_i,_i.current)}function da(t){Z(_i),Ti===t&&(Ti=null),Z(gi)}var gi=Be(0);function ru(t,i){Ne(_i,_i.current),Ne(gi,i)}function um(t){Z(gi),Z(_i),Ti===t&&(Ti=null)}function nd(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||L0(r)||U0(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!=="independent"){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qr=0,wt=null,_n=null,Zn=null,id=!1,Tl=!1,Co=!1,ad=0,su=0,Al=null,c2=0;function Fn(){throw Error(a(321))}function fm(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!fa(t[r],i[r]))return!1;return!0}function dm(t,i,r,l,f,h){return Qr=h,wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ve.H=t===null||t.memoizedState===null?GS:VS,Co=!1,h=r(l,f),Co=!1,Tl&&(h=sS(i,r,l,f)),rS(t),h}function rS(t){ve.H=fd;var i=_n!==null&&_n.next!==null;if(Qr=0,Zn=_n=wt=null,id=!1,su=0,Al=null,i)throw Error(a(300));t===null||jn||(t=t.dependencies,t!==null&&Zf(t)&&(jn=!0))}function sS(t,i,r,l){wt=t;var f=0;do{if(Tl&&(Al=null),su=0,Tl=!1,25<=f)throw Error(a(301));if(f+=1,Zn=_n=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}ve.H=g2,h=i(r,l)}while(Tl);return h}function u2(){var t=ve.H,i=t.useState()[0];return i=typeof i.then=="function"?ou(i):i,t=t.useState()[0],(_n!==null?_n.memoizedState:null)!==t&&(wt.flags|=1024),i}function hm(){var t=ad!==0;return ad=0,t}function pm(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function mm(t){if(id){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}id=!1}Qr=0,Zn=_n=wt=null,Tl=!1,su=ad=0,Al=null}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zn===null?wt.memoizedState=Zn=t:Zn=Zn.next=t,Zn}function kn(){if(_n===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=_n.next;var i=Zn===null?wt.memoizedState:Zn.next;if(i!==null)Zn=i,_n=t;else{if(t===null)throw wt.alternate===null?Error(a(467)):Error(a(310));_n=t,t={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},Zn===null?wt.memoizedState=Zn=t:Zn=Zn.next=t}return Zn}function rd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ou(t){var i=su;return su+=1,Al===null&&(Al=[]),t=Kx(Al,t,i),i=wt,(Zn===null?i.memoizedState:Zn.next)===null&&(i=i.alternate,ve.H=i===null||i.memoizedState===null?GS:VS),t}function sd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ou(t);if(t.$$typeof===le)return;if(t.$$typeof===j)return mi(t)}throw Error(a(438,String(t)))}function _m(t){var i=null,r=wt.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=wt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=rd(),wt.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=Le;return i.index++,r}function Jr(t,i){return typeof i=="function"?i(t):i}function od(t){var i=kn();return gm(i,_n,t)}function gm(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var M=f.next;f.next=h.next,h.next=M}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var U=M=null,Y=null,oe=i,_e=!1;do{var Ae=oe.lane&-536870913;if(Ae!==oe.lane?(Xt&Ae)===Ae:(Qr&Ae)===Ae){var ae=oe.revertLane;if(ae===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Ae===Mo&&(_e=!0);else if((Qr&ae)===ae){oe=oe.next,ae===Mo&&(_e=!0);continue}else Ae={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},Y===null?(U=Y=Ae,M=h):Y=Y.next=Ae,wt.lanes|=ae,Is|=ae;Ae=oe.action,Co&&r(h,Ae),h=oe.hasEagerState?oe.eagerState:r(h,Ae)}else ae={lane:Ae,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},Y===null?(U=Y=ae,M=h):Y=Y.next=ae,wt.lanes|=Ae,Is|=Ae;oe=oe.next}while(oe!==null&&oe!==i);if(Y===null?M=h:Y.next=U,!fa(h,t.memoizedState)&&(jn=!0,_e&&(r=Ml,r!==null)))throw r;t.memoizedState=h,t.baseState=M,t.baseQueue=Y,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function vm(t){var i=kn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,h=i.memoizedState;if(f!==null){r.pending=null;var M=f=f.next;do h=t(h,M.action),M=M.next;while(M!==f);fa(h,i.memoizedState)||(jn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,l]}function oS(t,i,r){var l=wt,f=kn(),h=Ot;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=i();var M=!fa((_n||f).memoizedState,r);if(M&&(f.memoizedState=r,jn=!0),f=f.queue,ym(uS.bind(null,l,f,t),[t]),t=f.getSnapshot!==i||M||Zn!==null&&(Zn.memoizedState.tag&1)!==0,Cl(t?9:8,{destroy:void 0},cS.bind(null,l,f,r,i),null),t){if(l.flags|=2048,gn===null)throw Error(a(349));h||(Qr&127)!==0||lS(l,i,r)}return r}function lS(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=wt.updateQueue,i===null?(i=rd(),wt.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function cS(t,i,r,l){i.value=r,i.getSnapshot=l,fS(i)&&dS(t)}function uS(t,i,r){return r(function(){fS(i)&&dS(t)})}function fS(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!fa(t,r)}catch{return!0}}function dS(t){var i=_o(t,2);i!==null&&Ji(i,t,2)}function xm(t){var i=Fi();if(typeof t=="function"){var r=t;if(t=r(),Co){st(!0);try{r()}finally{st(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:t},i}function hS(t,i,r,l){return t.baseState=r,gm(t,_n,typeof l=="function"?l:Jr)}function f2(t,i,r,l,f){if(ud(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};ve.T!==null?r(!0):h.isTransition=!1,l(h),r=i.pending,r===null?(h.next=i.pending=h,pS(i,h)):(h.next=r.next,i.pending=r.next=h)}}function pS(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=ve.T,M={};M.types=h!==null?h.types:null,ve.T=M;try{var U=r(f,l),Y=ve.S;Y!==null&&Y(M,U),mS(t,i,U)}catch(oe){Sm(t,i,oe)}finally{h!==null&&M.types!==null&&(h.types=M.types),ve.T=h}}else try{h=r(f,l),mS(t,i,h)}catch(oe){Sm(t,i,oe)}}function mS(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){_S(t,i,l)},function(l){return Sm(t,i,l)}):_S(t,i,r)}function _S(t,i,r){i.status="fulfilled",i.value=r,gS(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,pS(t,r)))}function Sm(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,gS(i),i=i.next;while(i!==l)}t.action=null}function gS(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function vS(t,i){return i}function xS(t,i){if(Ot){var r=gn.formState;if(r!==null){e:{var l=wt;if(Ot){if(Mn){t:{for(var f=Mn,h=za;f.nodeType!==8;){if(!h){f=null;break t}if(f=Ba(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){Mn=Ba(f.nextSibling),l=f.data==="F!";break e}}bs(l)}l=!1}l&&(i=r[0])}}return r=Fi(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vS,lastRenderedState:i},r.queue=l,r=FS.bind(null,wt,l),l.dispatch=r,l=xm(!1),h=Am.bind(null,wt,!1,l.queue),l=Fi(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=f2.bind(null,wt,f,h,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function SS(t){var i=kn();return yS(i,_n,t)}function yS(t,i,r){if(i=gm(t,i,vS)[0],t=od(Jr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ou(i)}catch(M){throw M===El?Qf:M}else l=i;i=kn();var f=i.queue,h=f.dispatch;return r!==i.memoizedState&&(wt.flags|=2048,Cl(9,{destroy:void 0},d2.bind(null,f,r),null)),[l,h,t]}function d2(t,i){t.action=i}function MS(t){var i=kn(),r=_n;if(r!==null)return yS(i,r,t);kn(),i=i.memoizedState,r=kn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function Cl(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=wt.updateQueue,i===null&&(i=rd(),wt.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function ES(){return kn().memoizedState}function ld(t,i,r,l){var f=Fi();wt.flags|=t,f.memoizedState=Cl(1|i,{destroy:void 0},r,l===void 0?null:l)}function cd(t,i,r,l){var f=kn();l=l===void 0?null:l;var h=f.memoizedState.inst;_n!==null&&l!==null&&fm(l,_n.memoizedState.deps)?f.memoizedState=Cl(i,h,r,l):(wt.flags|=t,f.memoizedState=Cl(1|i,h,r,l))}function bS(t,i){ld(8390656,8,t,i)}function ym(t,i){cd(2048,8,t,i)}function h2(t){wt.flags|=4;var i=wt.updateQueue;if(i===null)i=rd(),wt.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function TS(t){var i=kn().memoizedState;return h2({ref:i,nextImpl:t}),function(){if((en&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function AS(t,i){return cd(4,2,t,i)}function CS(t,i){return cd(4,4,t,i)}function RS(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wS(t,i,r){r=r!=null?r.concat([t]):null,cd(4,4,RS.bind(null,i,t),r)}function Mm(){}function DS(t,i){var r=kn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&fm(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function NS(t,i){var r=kn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&fm(i,l[1]))return l[0];if(l=t(),Co){st(!0);try{t()}finally{st(!1)}}return r.memoizedState=[l,i],l}function Em(t,i,r){return r===void 0||(Qr&1073741824)!==0&&(Xt&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=Gy(),wt.lanes|=t,Is|=t,r)}function LS(t,i,r,l){return fa(r,i)?r:Ds.current!==null?(t=Em(t,r,l),fa(t,i)||(jn=!0),t):(Qr&106)===0||(Qr&1073741824)!==0&&(Xt&261930)===0?(jn=!0,t.memoizedState=r):(t=Gy(),wt.lanes|=t,Is|=t,i)}function US(t,i,r,l,f){var h=Ue.p;Ue.p=h!==0&&8>h?h:8;var M=ve.T,U={};U.types=M!==null?M.types:null,ve.T=U,Am(t,!1,i,r);try{var Y=f(),oe=ve.S;if(oe!==null&&oe(U,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var _e=l2(Y,l);lu(t,i,_e,_a(t))}else lu(t,i,l,_a(t))}catch(Ae){lu(t,i,{then:function(){},status:"rejected",reason:Ae},_a())}finally{Ue.p=h,M!==null&&U.types!==null&&(M.types=U.types),ve.T=M}}function p2(){}function bm(t,i,r,l){if(t.tag!==5)throw Error(a(476));var f=OS(t).queue;US(t,f,i,lt,r===null?p2:function(){return PS(t),r(l)})}function OS(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:lt},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function PS(t){var i=OS(t);i.next===null&&(i=t.alternate.memoizedState),lu(t,i.next.queue,{},_a())}function Tm(){return mi(Yl)}function IS(){return kn().memoizedState}function zS(){return kn().memoizedState}function m2(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=_a();t=Rs(r);var l=ws(i,t,r);l!==null&&(Ji(l,i,r),nu(l,i,r)),i={cache:$p()},t.payload=i;return}i=i.return}}function _2(t,i,r){var l=_a();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ud(t)?BS(i,r):(r=Xp(t,i,r,l),r!==null&&(Ji(r,t,l),HS(r,i,l)))}function FS(t,i,r){var l=_a();lu(t,i,r,l)}function lu(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(ud(t))BS(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,U=h(M,r);if(f.hasEagerState=!0,f.eagerState=U,fa(U,M))return Gf(t,i,f,0),gn===null&&Hf(),!1}catch{}finally{}if(r=Xp(t,i,f,l),r!==null)return Ji(r,t,l),HS(r,i,l),!0}return!1}function Am(t,i,r,l){if(l={lane:2,revertLane:_0(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ud(t)){if(i)throw Error(a(479))}else i=Xp(t,r,l,2),i!==null&&Ji(i,t,2)}function ud(t){var i=t.alternate;return t===wt||i!==null&&i===wt}function BS(t,i){Tl=id=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function HS(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,On(t,r)}}var fd={readContext:mi,use:sd,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useLayoutEffect:Fn,useInsertionEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useSyncExternalStore:Fn,useId:Fn,useHostTransitionStatus:Fn,useFormState:Fn,useActionState:Fn,useOptimistic:Fn,useMemoCache:Fn,useCacheRefresh:Fn,useEffectEvent:Fn},GS={readContext:mi,use:sd,useCallback:function(t,i){return Fi().memoizedState=[t,i===void 0?null:i],t},useContext:mi,useEffect:bS,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,ld(4194308,4,RS.bind(null,i,t),r)},useLayoutEffect:function(t,i){return ld(4194308,4,t,i)},useInsertionEffect:function(t,i){ld(4,2,t,i)},useMemo:function(t,i){var r=Fi();i=i===void 0?null:i;var l=t();if(Co){st(!0);try{t()}finally{st(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=Fi();if(r!==void 0){var f=r(i);if(Co){st(!0);try{r(i)}finally{st(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=_2.bind(null,wt,t),[l.memoizedState,t]},useRef:function(t){var i=Fi();return t={current:t},i.memoizedState=t},useState:function(t){t=xm(t);var i=t.queue,r=FS.bind(null,wt,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Mm,useDeferredValue:function(t,i){var r=Fi();return Em(r,t,i)},useTransition:function(){var t=xm(!1);return t=US.bind(null,wt,t.queue,!0,!1),Fi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=wt,f=Fi();if(Ot){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),gn===null)throw Error(a(349));(Xt&127)!==0||lS(l,i,r)}f.memoizedState=r;var h={value:r,getSnapshot:i};return f.queue=h,bS(uS.bind(null,l,h,t),[t]),l.flags|=2048,Cl(9,{destroy:void 0},cS.bind(null,l,h,r,i),null),r},useId:function(){var t=Fi(),i=gn.identifierPrefix;if(Ot){var r=vr,l=gr;r=(l&~(1<<32-we(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=ad++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=c2++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Tm,useFormState:xS,useActionState:xS,useOptimistic:function(t){var i=Fi();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Am.bind(null,wt,!0,r),r.dispatch=i,[t,i]},useMemoCache:_m,useCacheRefresh:function(){return Fi().memoizedState=m2.bind(null,wt)},useEffectEvent:function(t){var i=Fi(),r={impl:t};return i.memoizedState=r,function(){if((en&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},VS={readContext:mi,use:sd,useCallback:DS,useContext:mi,useEffect:ym,useImperativeHandle:wS,useInsertionEffect:AS,useLayoutEffect:CS,useMemo:NS,useReducer:od,useRef:ES,useState:function(){return od(Jr)},useDebugValue:Mm,useDeferredValue:function(t,i){var r=kn();return LS(r,_n.memoizedState,t,i)},useTransition:function(){var t=od(Jr)[0],i=kn().memoizedState;return[typeof t=="boolean"?t:ou(t),i]},useSyncExternalStore:oS,useId:IS,useHostTransitionStatus:Tm,useFormState:SS,useActionState:SS,useOptimistic:function(t,i){var r=kn();return hS(r,_n,t,i)},useMemoCache:_m,useCacheRefresh:zS,useEffectEvent:TS},g2={readContext:mi,use:sd,useCallback:DS,useContext:mi,useEffect:ym,useImperativeHandle:wS,useInsertionEffect:AS,useLayoutEffect:CS,useMemo:NS,useReducer:vm,useRef:ES,useState:function(){return vm(Jr)},useDebugValue:Mm,useDeferredValue:function(t,i){var r=kn();return _n===null?Em(r,t,i):LS(r,_n.memoizedState,t,i)},useTransition:function(){var t=vm(Jr)[0],i=kn().memoizedState;return[typeof t=="boolean"?t:ou(t),i]},useSyncExternalStore:oS,useId:IS,useHostTransitionStatus:Tm,useFormState:MS,useActionState:MS,useOptimistic:function(t,i){var r=kn();return _n!==null?hS(r,_n,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:_m,useCacheRefresh:zS,useEffectEvent:TS};function Cm(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:w({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Rm={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=_a(),f=Rs(l);f.payload=i,r!=null&&(f.callback=r),i=ws(t,f,l),i!==null&&(Ji(i,t,l),nu(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=_a(),f=Rs(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=ws(t,f,l),i!==null&&(Ji(i,t,l),nu(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=_a(),l=Rs(r);l.tag=2,i!=null&&(l.callback=i),i=ws(t,l,r),i!==null&&(Ji(i,t,r),nu(i,t,r))}};function kS(t,i,r,l,f,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!Zc(r,l)||!Zc(f,h):!0}function XS(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Rm.enqueueReplaceState(i,i.state,null)}function Ro(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=w({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function WS(t){Bf(t)}function YS(t){console.error(t)}function qS(t){Bf(t)}function dd(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ZS(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function wm(t,i,r){return r=Rs(r),r.tag=3,r.payload={element:null},r.callback=function(){dd(t,i)},r}function jS(t){return t=Rs(t),t.tag=3,t}function KS(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){ZS(i,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){ZS(i,r,l),typeof f!="function"&&(zs===null?zs=new Set([this]):zs.add(this));var U=l.stack;this.componentDidCatch(l.value,{componentStack:U!==null?U:""})})}function v2(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&So(i,r,f,!0),r=_i.current,r!==null){switch(r.tag){case 31:case 13:case 19:return Ti===null?Ud():r.alternate===null&&Bn===0&&(Bn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Jf?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),h0(t,l,f)),!1;case 22:return r.flags|=65536,l===Jf?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),h0(t,l,f)),!1}throw Error(a(435,r.tag))}return h0(t,l,f),Ud(),!1}if(Ot)return i=_i.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==jp&&(t=Error(a(422),{cause:l}),Qc(Oa(t,r)))):(l!==jp&&(i=Error(a(423),{cause:l}),Qc(Oa(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Oa(l,r),f=wm(t.stateNode,l,f),rm(t,f),Bn!==4&&(Bn=2)),!1;var h=Error(a(520),{cause:l});if(h=Oa(h,r),_u===null?_u=[h]:_u.push(h),Bn!==4&&(Bn=2),i===null)return!0;l=Oa(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=wm(r.stateNode,l,t),rm(r,t),!1;case 1:if(i=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(zs===null||!zs.has(h))))return r.flags|=65536,f&=-f,r.lanes|=f,f=jS(f),KS(f,t,r,l),rm(r,f),!1;break;case 22:if(r.memoizedState!==null)return r.flags|=65536,!1}r=r.return}while(r!==null);return!1}var Dm=Error(a(461)),jn=!1;function ni(t,i,r,l){i.child=t===null?eS(i,null,r,l):Ao(i,t.child,r,l)}function QS(t,i,r,l,f){r=r.render;var h=i.ref;if("ref"in l){var M={};for(var U in l)U!=="ref"&&(M[U]=l[U])}else M=l;return yo(i),l=dm(t,i,r,M,h,f),U=hm(),t!==null&&!jn?(pm(t,i,f),$r(t,i,f)):(Ot&&U&&Wf(i),i.flags|=1,ni(t,i,l,f),i.child)}function JS(t,i,r,l,f){if(t===null){var h=r.type;return typeof h=="function"&&!Wp(h)&&h.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=h,$S(t,i,h,l,f)):(t=kf(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Fm(t,f)){var M=h.memoizedProps;if(r=r.compare,r=r!==null?r:Zc,r(M,l)&&t.ref===i.ref)return $r(t,i,f)}return i.flags|=1,t=qr(h,l),t.ref=i.ref,t.return=i,i.child=t}function $S(t,i,r,l,f){if(t!==null){var h=t.memoizedProps;if(Zc(h,l)&&t.ref===i.ref)if(jn=!1,i.pendingProps=l=h,Fm(t,f))(t.flags&131072)!==0&&(jn=!0);else return i.lanes=t.lanes,$r(t,i,f)}return Nm(t,i,r,l,f)}function ey(t,i,r,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return ty(t,i,h,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kf(i,h!==null?h.cachePool:null),h!==null?iS(i,h):om(),aS(i);else return l=i.lanes=536870912,ty(t,i,h!==null?h.baseLanes|r:r,r,l)}else h!==null?(Kf(i,h.cachePool),iS(i,h),Ls(),i.memoizedState=null):(t!==null&&Kf(i,null),om(),Ls());return ni(t,i,f,r),i.child}function cu(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ty(t,i,r,l,f){var h=tm();return h=h===null?null:{parent:qn._currentValue,pool:h},i.memoizedState={baseLanes:r,cachePool:h},t!==null&&Kf(i,null),om(),aS(i),t!==null&&So(t,i,l,!0),i.childLanes=f,null}function hd(t,i){return i=pd({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function ny(t,i,r){return Ao(i,t.child,null,r),t=hd(i,i.pendingProps),t.flags|=2,da(i),i.memoizedState=null,t}function x2(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ot){if(l.mode==="hidden")return t=hd(i,l),i.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},cu(null,t);if(cm(i),(t=Mn)?(t=R1(t,za),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ms!==null?{id:gr,overflow:vr}:null,retryLane:536870912,hydrationErrors:null},r=Bx(t),r.return=i,i.child=r,oi=i,Mn=null)):t=null,t===null)throw bs(i);return i.lanes=536870912,null}return hd(i,l)}var h=t.memoizedState;if(h!==null){var M=h.dehydrated;if(cm(i),f)if(i.flags&256)i.flags&=-257,i=ny(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(jn||So(t,i,r,!1),f=(r&t.childLanes)!==0,jn||f){if(Ds.current===null){if(l=gn,l!==null&&(M=la(l,r),M!==0&&M!==h.retryLane))throw h.retryLane=M,_o(t,M),Ji(l,t,M),Dm;Ud()}i=ny(t,i,r)}else t=h.treeContext,Mn=Ba(M.nextSibling),oi=i,Ot=!0,Es=null,za=!1,t!==null&&Vx(i,t),i=hd(i,l),i.flags|=134221824;return i}return t=qr(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Rl(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Nm(t,i,r,l,f){return yo(i),r=dm(t,i,r,l,void 0,f),l=hm(),t!==null&&!jn?(pm(t,i,f),$r(t,i,f)):(Ot&&l&&Wf(i),i.flags|=1,ni(t,i,r,f),i.child)}function iy(t,i,r,l,f,h){return yo(i),i.updateQueue=null,r=sS(i,l,r,f),rS(t),l=hm(),t!==null&&!jn?(pm(t,i,h),$r(t,i,h)):(Ot&&l&&Wf(i),i.flags|=1,ni(t,i,r,h),i.child)}function ay(t,i,r,l,f){if(yo(i),i.stateNode===null){var h=vl,M=r.contextType;typeof M=="object"&&M!==null&&(h=mi(M)),h=new r(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Rm,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},im(i),M=r.contextType,h.context=typeof M=="object"&&M!==null?mi(M):vl,h.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Cm(i,r,M,l),h.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Rm.enqueueReplaceState(h,h.state,null),au(i,l,h,f),iu(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var U=i.memoizedProps,Y=Ro(r,U);h.props=Y;var oe=h.context,_e=r.contextType;M=vl,typeof _e=="object"&&_e!==null&&(M=mi(_e));var Ae=r.getDerivedStateFromProps;_e=typeof Ae=="function"||typeof h.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,_e||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(U||oe!==M)&&XS(i,h,l,M),Cs=!1;var ae=i.memoizedState;h.state=ae,au(i,l,h,f),iu(),oe=i.memoizedState,U||ae!==oe||Cs?(typeof Ae=="function"&&(Cm(i,r,Ae,l),oe=i.memoizedState),(Y=Cs||kS(i,r,Y,l,ae,oe,M))?(_e||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),h.props=l,h.state=oe,h.context=M,l=Y):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,am(t,i),M=i.memoizedProps,_e=Ro(r,M),h.props=_e,Ae=i.pendingProps,ae=h.context,oe=r.contextType,Y=vl,typeof oe=="object"&&oe!==null&&(Y=mi(oe)),U=r.getDerivedStateFromProps,(oe=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==Ae||ae!==Y)&&XS(i,h,l,Y),Cs=!1,ae=i.memoizedState,h.state=ae,au(i,l,h,f),iu();var pe=i.memoizedState;M!==Ae||ae!==pe||Cs||t!==null&&t.dependencies!==null&&Zf(t.dependencies)?(typeof U=="function"&&(Cm(i,r,U,l),pe=i.memoizedState),(_e=Cs||kS(i,r,_e,l,ae,pe,Y)||t!==null&&t.dependencies!==null&&Zf(t.dependencies))?(oe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,pe,Y),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,pe,Y)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=pe),h.props=l,h.state=pe,h.context=Y,l=_e):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Rl(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Ao(i,t.child,null,f),i.child=Ao(i,null,r,f)):ni(t,i,r,f),i.memoizedState=h.state,t=i.child):t=$r(t,i,f),t}function ry(t,i,r,l){return vo(),i.flags|=256,ni(t,i,r,l),i.child}var Lm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Um(t){return{baseLanes:t,cachePool:Zx()}}function Om(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=ma),t}function sy(t,i,r){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(gi.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ot){if(f?Ns(i):Ls(),(t=Mn)?(t=R1(t,za),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ms!==null?{id:gr,overflow:vr}:null,retryLane:536870912,hydrationErrors:null},r=Bx(t),r.return=i,i.child=r,oi=i,Mn=null)):t=null,t===null)throw bs(i);return U0(t)?i.lanes=32:i.lanes=536870912,null}return h=l.children,l=l.fallback,f?(Ls(),f=i.mode,h=pd({mode:"hidden",children:h},f),l=go(l,f,r,null),h.return=i,l.return=i,h.sibling=l,i.child=h,l=i.child,l.memoizedState=Um(r),l.childLanes=Om(t,M,r),i.memoizedState=Lm,cu(null,l)):(Ns(i),Pm(i,h))}var U=t.memoizedState;if(U!==null){var Y=U.dehydrated;if(Y!==null)return S2(t,i,h,M,l,Y,U,r)}return f?(Ls(),f=l.fallback,h=i.mode,U=t.child,Y=U.sibling,l=qr(U,{mode:"hidden",children:l.children}),l.subtreeFlags=U.subtreeFlags&1206910976,Y!==null?f=qr(Y,f):(f=go(f,h,r,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,cu(null,l),l=i.child,f=t.child.memoizedState,f===null?f=Um(r):(h=f.cachePool,h!==null?(U=qn._currentValue,h=h.parent!==U?{parent:U,pool:U}:h):h=Zx(),f={baseLanes:f.baseLanes|r,cachePool:h}),l.memoizedState=f,l.childLanes=Om(t,M,r),i.memoizedState=Lm,cu(t.child,l)):(Ns(i),r=t.child,t=r.sibling,r=qr(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=r,i.memoizedState=null,r)}function Pm(t,i){return i=pd({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function pd(t,i){return t=Zi(22,t,null,i),t.lanes=0,t}function md(t,i,r){return Ao(i,t.child,null,r),t=Pm(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function S2(t,i,r,l,f,h,M,U){if(r)return i.flags&256?(Ns(i),i.flags&=-257,md(t,i,U)):i.memoizedState!==null?(Ls(),i.child=t.child,i.flags|=128,null):(Ls(),h=f.fallback,M=i.mode,f=pd({mode:"visible",children:f.children},M),h=go(h,M,U,null),h.flags|=2,f.return=i,h.return=i,f.sibling=h,i.child=f,Ao(i,t.child,null,U),f=i.child,f.memoizedState=Um(U),f.childLanes=Om(t,l,U),i.memoizedState=Lm,cu(null,f));if(Ns(i),U0(h)){if(l=h.nextSibling&&h.nextSibling.dataset,l)var Y=l.dgst;return l=Y,l!==""&&(f=Error(a(419)),f.stack="",f.digest=l,Qc({value:f,source:null,stack:null})),md(t,i,U)}if(jn||So(t,i,U,!1),l=(U&t.childLanes)!==0,jn||l){if(Ds.current!==null)return md(t,i,U);if(l=gn,l!==null&&(f=la(l,U),f!==0&&f!==M.retryLane))throw M.retryLane=f,_o(t,f),Ji(l,t,f),Dm;return L0(h)||Ud(),md(t,i,U)}return L0(h)?(i.flags|=192,i.child=t.child,null):(t=M.treeContext,Mn=Ba(h.nextSibling),oi=i,Ot=!0,Es=null,za=!1,t!==null&&Vx(i,t),i=Pm(i,f.children),i.flags|=134221824,i)}function oy(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),qf(t.return,i,r)}function ly(t){for(var i=null;t!==null;){var r=t.alternate;r!==null&&nd(r)===null&&(i=t),t=t.sibling}return i}function _d(t,i,r,l,f,h){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:h}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=f,M.treeForkCount=h)}function Im(t){var i=t.child;for(t.child=null;i!==null;){var r=i.sibling;i.sibling=t.child,t.child=i,i=r}}function zm(t,i,r){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var M=gi.current;if(i.flags&128)return ru(i,M),null;var U=(M&2)!==0;if(U?(M=M&1|2,i.flags|=128):M&=1,ru(i,M),f==="backwards"&&t!==null?(Im(t),ni(t,i,l,r),Im(t)):ni(t,i,l,r),l=Ot?Kc:0,!U&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&oy(t,r,i);else if(t.tag===19)oy(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"backwards":r=ly(i.child),r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null,Im(i)),_d(i,!0,f,null,h,l);break;case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&nd(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}_d(i,!0,r,null,h,l);break;case"together":_d(i,!1,null,null,void 0,l);break;case"independent":i.memoizedState=null;break;default:r=ly(i.child),r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),_d(i,!1,f,r,h,l)}return i.child}function cy(t,i,r){var l=i.pendingProps;return Ts(i,i.type,l.value),ni(t,i,l.children,r),i.child}function $r(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Is|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(So(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=qr(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=qr(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Fm(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Zf(t)))}function y2(t,i,r){switch(i.tag){case 3:Q(i,i.stateNode.containerInfo),Ts(i,qn,t.memoizedState.cache),vo();break;case 27:case 5:rt(i);break;case 4:Q(i,i.stateNode.containerInfo);break;case 10:Ts(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,cm(i),null;break;case 13:var l=i.memoizedState;if(l!==null){if(l.dehydrated!==null)return Ns(i),i.flags|=128,null;l=So(t,i,r,!1);var f=i.child.childLanes;return l||(r&f)!==0?sy(t,i,r):(Ns(i),t=$r(t,i,r),t!==null?t.sibling:null)}Ns(i);break;case 19:if(i.flags&128)return zm(t,i,r);if(f=(t.flags&128)!==0,l=(r&i.childLanes)!==0,l||(So(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return zm(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ru(i,gi.current),l)break;return null;case 22:return i.lanes=0,ey(t,i,r,i.pendingProps);case 24:Ts(i,qn,t.memoizedState.cache)}return $r(t,i,r)}function uy(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)jn=!0;else{if(!Fm(t,r)&&(i.flags&128)===0)return jn=!1,y2(t,i,r);jn=(t.flags&131072)!==0}else jn=!1,Ot&&(i.flags&1048576)!==0&&Gx(i,Kc,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=bo(i.elementType),i.type=t,typeof t=="function")Wp(t)?(l=Ro(t,l),i.tag=1,i=ay(null,i,t,l,r)):(i.tag=0,i=Nm(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===X){i.tag=11,i=QS(null,i,t,l,r);break e}else if(f===ne){i.tag=14,i=JS(null,i,t,l,r);break e}else if(f===j){i.tag=10,i.type=t,i=cy(null,i,r);break e}}throw i=Ce(t)||t,Error(a(306,i,""))}}return i;case 0:return Nm(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=Ro(l,i.pendingProps),ay(t,i,l,f,r);case 3:e:{if(Q(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,am(t,i),au(i,l,null,r);var M=i.memoizedState;if(l=M.cache,Ts(i,qn,l),l!==h.cache&&Jp(i,[qn],r,!0),iu(),l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=ry(t,i,l,r);break e}else if(l!==f){f=Oa(Error(a(424)),i),Qc(f),i=ry(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mn=Ba(t.firstChild),oi=i,Ot=!0,Es=null,za=!0,r=eS(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|134221824,r=r.sibling}else{if(vo(),l===f){i=$r(t,i,r);break e}ni(t,i,l,r)}i=i.child}return i;case 26:return Rl(t,i),t===null?(r=P1(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ot||(i.stateNode=p1(i.type,i.pendingProps,$e.current,i)):i.memoizedState=P1(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return rt(i),t===null&&Ot&&(l=i.stateNode=N1(i.type,i.pendingProps,$e.current),oi=i,za=!0,f=Mn,Hs(i.type)?(O0=f,Mn=Ba(l.firstChild)):Mn=f),ni(t,i,i.pendingProps.children,r),Rl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ot&&((f=l=Mn)&&(l=mC(l,i.type,i.pendingProps,za),l!==null?(i.stateNode=l,oi=i,Mn=Ba(l.firstChild),za=!1,f=!0):f=!1),f||bs(i)),rt(i),f=i.type,h=i.pendingProps,M=t!==null?t.memoizedProps:null,l=h.children,T0(f,h)?l=null:M!==null&&T0(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=dm(t,i,u2,null,null,r),Yl._currentValue=f),Rl(t,i),ni(t,i,l,r),i.child;case 6:return t===null&&Ot&&((t=r=Mn)&&(r=_C(r,i.pendingProps,za),r!==null?(i.stateNode=r,oi=i,Mn=null,t=!0):t=!1),t||bs(i)),null;case 13:return sy(t,i,r);case 4:return Q(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ao(i,null,l,r):ni(t,i,l,r),i.child;case 11:return QS(t,i,i.type,i.pendingProps,r);case 7:return l=i.pendingProps,Rl(t,i),ni(t,i,l,r),i.child;case 8:return ni(t,i,i.pendingProps.children,r),i.child;case 12:return ni(t,i,i.pendingProps.children,r),i.child;case 10:return cy(t,i,r);case 9:return f=i.type._context,l=i.pendingProps.children,yo(i),f=mi(f),l=l(f),i.flags|=1,ni(t,i,l,r),i.child;case 14:return JS(t,i,i.type,i.pendingProps,r);case 15:return $S(t,i,i.type,i.pendingProps,r);case 19:return zm(t,i,r);case 31:return x2(t,i,r);case 22:return ey(t,i,r,i.pendingProps);case 24:return yo(i),l=mi(qn),t===null?(f=tm(),f===null&&(f=gn,h=$p(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=r),f=h),i.memoizedState={parent:l,cache:f},im(i),Ts(i,qn,f)):((t.lanes&r)!==0&&(am(t,i),au(i,null,null,r),iu()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ts(i,qn,l)):(l=h.cache,Ts(i,qn,l),l!==f.cache&&Jp(i,[qn],r,!0))),ni(t,i,i.pendingProps.children,r),i.child;case 30:return i.stateNode===null&&(i.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=i.pendingProps,l.name!=null&&l.name!=="auto"?i.flags|=t===null?18882560:18874368:Ot&&Wf(i),t!==null&&t.memoizedProps.name!==l.name?i.flags|=4194816:Rl(t,i),ni(t,i,l.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function es(t){t.flags|=4}function Bm(t,i,r,l,f){var h;if((h=(t.mode&32)!==0)&&(h=r===null?B1(i,l):B1(i,l)&&(l.src!==r.src||l.srcSet!==r.srcSet)),h){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Wy())t.flags|=8192;else throw To=Jf,nm}else t.flags&=-16777217}function fy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H1(i))if(Wy())t.flags|=8192;else throw To=Jf,nm}function gd(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?cn():536870912,t.lanes|=i,Ul|=i)}function uu(t,i){if(!Ot)switch(t.tailMode){case"visible":break;case"collapsed":for(var r=t.tail,l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null;break;default:for(i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null}}function En(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&1206910976,l|=f.flags&1206910976,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function M2(t,i,r){var l=i.pendingProps;switch(Zp(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return En(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Kr(qn),yt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(i)?es(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kp())),En(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(es(i),h!==null?(En(i),fy(i,h)):(En(i),Bm(i,f,null,l,r))):h?h!==t.memoizedState?(es(i),En(i),fy(i,h)):(En(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&es(i),En(i),Bm(i,f,t,l,r)),null;case 27:if(B(i),r=$e.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&es(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return En(i),i.subtreeFlags&=-33554433,null}t=dt.current,yl(i)?kx(i):(t=N1(f,l,r),i.stateNode=t,es(i))}return En(i),i.subtreeFlags&=-33554433,null;case 5:if(B(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&es(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return En(i),i.subtreeFlags&=-33554433,null}if(h=dt.current,yl(i))kx(i);else{var M=yu($e.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}h[N]=i,h[K]=l;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=h;e:switch(xi(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&es(i)}}return En(i),i.subtreeFlags&=-33554433,Bm(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&es(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=$e.current,yl(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=oi,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[N]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||u1(t.nodeValue,r)),t||bs(i,!0)}else t=yu(t).createTextNode(l),t[N]=i,i.stateNode=t}return En(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=yl(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[N]=i}else vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),t=!1}else r=Kp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(da(i),i):(da(i),null);if((i.flags&128)!==0)throw Error(a(558))}return En(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=yl(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[N]=i}else vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),f=!1}else f=Kp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(da(i),i):(da(i),null)}return da(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),gd(i,i.updateQueue),En(i),null);case 4:return yt(),t===null&&S0(i.stateNode.containerInfo),i.flags|=67108864,En(i),null;case 10:return Kr(i.type),En(i),null;case 19:if(um(i),l=i.memoizedState,l===null)return En(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)uu(l,!1);else{if(Bn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=nd(t),h!==null){for(i.flags|=128,uu(l,!1),t=h.updateQueue,i.updateQueue=t,gd(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Fx(r,t),r=r.sibling;return ru(i,gi.current&1|2),Ot&&Zr(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Re()>wd&&(i.flags|=128,f=!0,uu(l,!1),i.lanes=4194304)}else{if(!f)if(t=nd(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,gd(i,t),uu(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!h.alternate&&!Ot)return En(i),null}else 2*Re()-l.renderingStartTime>wd&&r!==536870912&&(i.flags|=128,f=!0,uu(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}if(l.tail!==null){t=l.tail;e:{for(r=t;r!==null;){if(r.alternate!==null){r=!1;break e}r=r.sibling}r=!0}return l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Re(),t.sibling=null,h=gi.current,h=f?h&1|2:h&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!r||Ot?ru(i,h):(r=h,Ne(_i,i),Ne(gi,r),Ti===null&&(Ti=i)),Ot&&Zr(i,l.treeForkCount),t}return En(i),null;case 22:case 23:return da(i),lm(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),r=i.updateQueue,r!==null&&gd(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&Z(Eo),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Kr(qn),En(i),null;case 25:return null;case 30:return i.flags|=33554432,En(i),null}throw Error(a(156,i.tag))}function E2(t,i){switch(Zp(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Kr(qn),yt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return B(i),null;case 31:if(i.memoizedState!==null){if(da(i),i.alternate===null)throw Error(a(340));vo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(da(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));vo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return um(i),t=i.flags,t&65536?(i.flags=t&-65537|128,t=i.memoizedState,t!==null&&(t.rendering=null,t.tail=null),i.flags|=4,i):null;case 4:return yt(),null;case 10:return Kr(i.type),null;case 22:case 23:return da(i),lm(),t!==null&&Z(Eo),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Kr(qn),null;case 25:return null;default:return null}}function dy(t,i){switch(Zp(i),i.tag){case 3:Kr(qn),yt();break;case 26:case 27:case 5:B(i);break;case 4:yt();break;case 31:i.memoizedState!==null&&da(i);break;case 13:da(i);break;case 19:um(i);break;case 10:Kr(i.type);break;case 22:case 23:da(i),lm(),t!==null&&Z(Eo);break;case 24:Kr(qn)}}function fu(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var h=r.create,M=r.inst;l=h(),M.destroy=l}r=r.next}while(r!==f)}}catch(U){fn(i,i.return,U)}}function Us(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var M=l.inst,U=M.destroy;if(U!==void 0){M.destroy=void 0,f=i;var Y=r,oe=U;try{oe()}catch(_e){fn(f,Y,_e)}}}l=l.next}while(l!==h)}}catch(_e){fn(i,i.return,_e)}}function hy(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{nS(i,r)}catch(l){fn(t,t.return,l)}}}function py(t,i,r){r.props=Ro(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){fn(t,i,l)}}function xr(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:var f=t.stateNode,h=Wr(t.memoizedProps,f);(f.ref===null||f.ref.name!==h)&&(f.ref=y1(h)),l=f.ref;break;case 7:if(t.stateNode===null){var M=new ga(t);g(t.child,!1,hC,M,void 0,void 0),t.stateNode=M}l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(U){fn(t,i,U)}}function vi(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){fn(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){fn(t,i,f)}else r.current=null}function vd(t,i){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&i!==null)for(var r=0;r<i.length;r++)C1(t.stateNode,i[r])}function my(t){for(var i=t.return;i!==null&&(Gm(i)&&C1(t.stateNode,i.stateNode),!Hm(i));)i=i.return}function du(t){for(var i=t.return;i!==null&&(Gm(i)&&pC(t.stateNode,i.stateNode),!Hm(i));)i=i.return}function Hm(t){return t.tag===5||t.tag===3||t.tag===27}function Gm(t){return t&&t.tag===7&&t.stateNode!==null}function Vm(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){fn(t,t.return,f)}}function km(t,i,r){try{var l=t.stateNode;j2(l,t.type,r,i),l[K]=i}catch(f){fn(t,t.return,f)}}function _y(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Hs(t.type)||t.tag===4}function Xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Hs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wm(t,i,r,l){var f=t.tag;if(f===5||f===6)f=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(f,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(f),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=_r)),vd(t,l),Ut=!0;else if(f!==4&&(f===27&&(vd(t,l),l=null,Hs(t.type)&&(r=t.stateNode,i=null)),t=t.child,t!==null))for(Wm(t,i,r,l),t=t.sibling;t!==null;)Wm(t,i,r,l),t=t.sibling}function xd(t,i,r,l){var f=t.tag;if(f===5||f===6)f=t.stateNode,i?r.insertBefore(f,i):r.appendChild(f),vd(t,l),Ut=!0;else if(f!==4&&(f===27&&(vd(t,l),l=null,Hs(t.type)&&(r=t.stateNode)),t=t.child,t!==null))for(xd(t,i,r,l),t=t.sibling;t!==null;)xd(t,i,r,l),t=t.sibling}function gy(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);xi(i,l,r),i[N]=t,i[K]=r}catch(h){fn(t,t.return,h)}}var Sd=!1,ha=null;function vy(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Sd=!0)}var Sr=null;function xy(){var t=Sr;return Sr=null,t}var ji=0;function wl(t,i,r,l,f){return ji=0,Sy(t.child,i,r,l,f)}function Sy(t,i,r,l,f){for(var h=!1;t!==null;){if(t.tag===5){var M=t.stateNode;if(l!==null){var U=R0(M);l.push(U),U.view&&(h=!0)}else h||R0(M).view&&(h=!0);Sd=!0,x1(M,ji===0?i:i+"_"+ji,r),ji++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&f||Sy(t.child,i,r,l,f)&&(h=!0));t=t.sibling}return h}function yr(t,i){for(;t!==null;)t.tag===5?S1(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i||yr(t.child,i)),t=t.sibling}function yd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(yd(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var i=t.memoizedProps;if(i.name==null||i.name==="auto")throw Error(a(544));var r=i.name;i=Yr(i.default,i.share),i!=="none"&&(wl(t,r,i,null,!1)||yr(t.child,!1))}t=t.sibling}}function Ym(t,i){if(t.tag===30){var r=t.stateNode,l=t.memoizedProps,f=Wr(l,r),h=Yr(l.default,r.paired?l.share:l.enter);h!=="none"?wl(t,f,h,null,!1)?(yd(t),r.paired||i||zl(t,l.onEnter)):yr(t.child,!1):yd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ym(t,i),t=t.sibling;else yd(t)}function qm(t){if(ha!==null&&ha.size!==0){var i=ha;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var r=t.memoizedProps,l=r.name;if(l!=null&&l!=="auto"){var f=i.get(l);if(f!==void 0){var h=Yr(r.default,r.share);if(h!=="none"&&(wl(t,l,h,null,!1)?(h=t.stateNode,f.paired=h,h.paired=f,zl(t,r.onShare)):yr(t.child,!1)),i.delete(l),i.size===0)break}}}qm(t)}t=t.sibling}}}function Zm(t){if(t.tag===30){var i=t.memoizedProps,r=Wr(i,t.stateNode),l=ha!==null?ha.get(r):void 0,f=Yr(i.default,l!==void 0?i.share:i.exit);f!=="none"&&(wl(t,r,f,null,!1)?l!==void 0?(f=t.stateNode,l.paired=f,f.paired=l,ha.delete(r),zl(t,i.onShare)):zl(t,i.onExit):yr(t.child,!1)),ha!==null&&qm(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Zm(t),t=t.sibling;else ha!==null&&qm(t)}function yy(t){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=Wr(i,t.stateNode);i=Yr(i.default,i.update),t.flags&=-5,i!=="none"&&wl(t,r,i,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&yy(t);t=t.sibling}}function jm(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.stateNode;i.paired!==null&&(i.paired=null,yr(t.child,!1))}jm(t)}t=t.sibling}}function Md(t){if(t.tag===30)t.stateNode.paired=null,yr(t.child,!1),jm(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Md(t),t=t.sibling;else jm(t)}function My(t){for(t=t.child;t!==null;)t.tag===30?yr(t.child,!1):(t.subtreeFlags&33554432)!==0&&My(t),t=t.sibling}function Km(t,i,r,l,f,h,M){for(var U=!1;i!==null;){if(i.tag===5){var Y=i.stateNode;if(h!==null&&ji<h.length){var oe=h[ji],_e=R0(Y);(oe.view||_e.view)&&(U=!0);var Ae;if(Ae=(t.flags&4)===0)if(_e.clip)Ae=!0;else{Ae=oe.rect;var ae=_e.rect;Ae=Ae.y!==ae.y||Ae.x!==ae.x||Ae.height!==ae.height||Ae.width!==ae.width}Ae&&(t.flags|=4),_e.abs?_e=!oe.abs:(oe=oe.rect,_e=_e.rect,_e=oe.height!==_e.height||oe.width!==_e.width),_e&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&x1(Y,ji===0?r:r+"_"+ji,f),U&&(t.flags&4)!==0||(Sr===null&&(Sr=[]),Sr.push(Y,ji===0?l:l+"_"+ji,i.memoizedProps)),ji++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&M?t.flags|=i.flags&32:Km(t,i.child,r,l,f,h,M)&&(U=!0));i=i.sibling}return U}function Ey(t,i){for(t=t.child;t!==null;){if(t.tag===30){var r=t.memoizedProps,l=t.stateNode,f=Wr(r,l),h=Yr(r.default,r.update),M;M=t.memoizedState,t.memoizedState=null,l=t;var U=t.child;ji=0,f=Km(l,U,f,f,h,M,!1),(t.flags&4)!==0&&f&&zl(t,r.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Ey(t);t=t.sibling}}var li=!1,on=!1,Mr=!1,Qm=!1,by=typeof WeakSet=="function"?WeakSet:Set,ci=null,Er=!1,hu=!1,Ed=!1,Jm=!1;function b2(t,i,r){if(t=t.containerInfo,E0=ql,t=Rx(t),Fp(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else e:{l=(l=t.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var h=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var U=0,Y=-1,oe=-1,_e=0,Ae=0,ae=t,pe=null;t:for(;;){for(var je;ae!==l||h!==0&&ae.nodeType!==3||(Y=U+h),ae!==M||f!==0&&ae.nodeType!==3||(oe=U+f),ae.nodeType===3&&(U+=ae.nodeValue.length),(je=ae.firstChild)!==null;)pe=ae,ae=je;for(;;){if(ae===t)break t;if(pe===l&&++_e===h&&(Y=U),pe===M&&++Ae===f&&(oe=U),(je=ae.nextSibling)!==null)break;ae=pe,pe=ae.parentNode}ae=je}l=Y===-1||oe===-1?null:{start:Y,end:oe}}else l=null}l=l||{start:0,end:0}}else l=null;for(b0={focusedElem:t,selectionRange:l},ql=!1,r=(r&335544064)===r,ci=i,i=r?9270:1024;ci!==null;){if(t=ci,r&&(l=t.deletions,l!==null))for(h=0;h<l.length;h++)r&&Zm(l[h]);if(t.alternate===null&&(t.flags&2)!==0)r&&vy(t),bd(r);else{if(t.tag===22){if(l=t.alternate,t.memoizedState!==null){l!==null&&l.memoizedState===null&&r&&Zm(l),bd(r);continue}else if(l!==null&&l.memoizedState!==null){r&&vy(t),bd(r);continue}}l=t.child,(t.subtreeFlags&i)!==0&&l!==null?(l.return=t,ci=l):(r&&yy(t),bd(r))}}ha=null}function bd(t){for(;ci!==null;){var i=ci,r=t,l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 15:break;case 1:if((f&1024)!==0&&l!==null){r=void 0,f=l.memoizedProps,l=l.memoizedState;var h=i.stateNode;try{var M=Ro(i.type,f);r=h.getSnapshotBeforeUpdate(M,l),h.__reactInternalSnapshotBeforeUpdate=r}catch(U){fn(i,i.return,U)}}break;case 3:if((f&1024)!==0){if(l=i.stateNode.containerInfo,r=l.nodeType,r===9)N0(l);else if(r===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":N0(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&l!==null&&(r=Wr(l.memoizedProps,l.stateNode),f=i.memoizedProps,f=Yr(f.default,f.update),f!=="none"&&wl(l,r,f,l.memoizedState=[],!0));break;default:if((f&1024)!==0)throw Error(a(163))}if(l=i.sibling,l!==null){l.return=i.return,ci=l;break}ci=i.return}}function Ty(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:br(t,r),l&4&&fu(5,r);break;case 1:if(br(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(M){fn(r,r.return,M)}else{var f=Ro(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){fn(r,r.return,M)}}l&64&&hy(r),l&512&&xr(r,r.return);break;case 3:if(br(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{nS(t,i)}catch(M){fn(r,r.return,M)}}break;case 27:i===null&&l&4&&gy(r);case 26:case 5:br(t,r),i===null&&l&4&&Vm(r),l&512&&xr(r,r.return);break;case 12:br(t,r);break;case 31:br(t,r),l&4&&wy(t,r);break;case 13:br(t,r),l&4&&Dy(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=I2.bind(null,r),gC(t,r))));break;case 22:if(l=r.memoizedState!==null||li,!l){var h=i!==null&&i.memoizedState!==null||on;i=li,f=on,li=l,(on=h)&&!f?(l=2,(r.subtreeFlags&8772)!==0&&(l|=1),er(t,r,l)):br(t,r),li=i,on=f}break;case 30:br(t,r),l&512&&xr(r,r.return);break;case 7:l&512&&xr(r,r.return);default:br(t,r)}}function $m(t,i){for(t=t.child;t!==null;)Ay(t,i),t=t.sibling}function Ay(t,i){switch(t.tag){case 5:case 26:try{var r=t.stateNode;if(i){var l=r.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var f=t.stateNode,h=t.memoizedProps.style,M=h!=null&&h.hasOwnProperty("display")?h.display:null;f.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(Y){fn(t,t.return,Y)}e0(t,i);break;case 6:try{t.stateNode.nodeValue=i?"":t.memoizedProps,Ut=!0}catch(Y){fn(t,t.return,Y)}break;case 18:try{var U=t.stateNode;i?v1(U,!0):v1(t.stateNode,!1)}catch(Y){fn(t,t.return,Y)}break;case 22:case 23:t.memoizedState===null&&$m(t,i);break;default:$m(t,i)}}function e0(t,i){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var r=t,l=i;switch(r.tag){case 4:Ay(r,l);break e;case 22:r.memoizedState===null&&e0(r,l);break e;default:e0(r,l)}}t=t.sibling}}function Cy(t){var i=t.alternate;i!==null&&(t.alternate=null,Cy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ht(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Cn=null,Ki=!1;function Ja(t,i,r){for(r=r.child;r!==null;)Ry(t,i,r),r=r.sibling}function Ry(t,i,r){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Oe,r)}catch{}switch(r.tag){case 26:on||vi(r,i),Ja(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&!on&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:on||vi(r,i),du(r);var l=Cn,f=Ki;Hs(r.type)&&(Cn=r.stateNode,Ki=!1),Ja(t,i,r),L1(r.stateNode,r.type,r.memoizedProps),Cn=l,Ki=f;break;case 5:on||vi(r,i),du(r);case 6:if(r.tag===6&&du(r),l=Cn,f=Ki,Cn=null,Ja(t,i,r),Cn=l,Ki=f,Cn!==null)if(Ki)try{(Cn.nodeType===9?Cn.body:Cn.nodeName==="HTML"?Cn.ownerDocument.body:Cn).removeChild(r.stateNode),Ut=!0}catch(h){fn(r,i,h)}else try{Cn.removeChild(r.stateNode),Ut=!0}catch(h){fn(r,i,h)}break;case 18:Cn!==null&&(Ki?(t=Cn,g1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Zl(t)):g1(Cn,r.stateNode));break;case 4:l=Cn,f=Ki,Cn=r.stateNode.containerInfo,Ki=!0,Ja(t,i,r),Cn=l,Ki=f;break;case 0:case 11:case 14:case 15:Us(2,r,i),on||Us(4,r,i),Ja(t,i,r);break;case 1:on||(vi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&py(r,i,l)),Ja(t,i,r);break;case 21:Ja(t,i,r);break;case 22:on=(l=on)||r.memoizedState!==null,Ja(t,i,r),on=l;break;case 30:vi(r,i),Ja(t,i,r);break;case 7:on||vi(r,i),Ja(t,i,r);break;default:Ja(t,i,r)}}function wy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Zl(t)}catch(r){fn(i,i.return,r)}}}function Dy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zl(t)}catch(r){fn(i,i.return,r)}}function T2(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new by),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new by),i;default:throw Error(a(435,t.tag))}}function Td(t,i){var r=T2(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=z2.bind(null,t,l);l.then(f,f)}})}function Bi(t,i,r){var l=i.deletions;if(l!==null)for(var f=0;f<l.length;f++){var h=l[f],M=t,U=i,Y=U;e:for(;Y!==null;){switch(Y.tag){case 27:if(Hs(Y.type)){Cn=Y.stateNode,Ki=!1;break e}break;case 5:Cn=Y.stateNode,Ki=!1;break e;case 3:case 4:Cn=Y.stateNode.containerInfo,Ki=!0;break e}Y=Y.return}if(Cn===null)throw Error(a(160));Ry(M,U,h),Cn=null,Ki=!1,M=h.alternate,M!==null&&(M.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ny(i,t,r),i=i.sibling}var $a=null;function Ny(t,i,r){var l=t.alternate,f=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(f&4&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(var h=0;h<l.length;h++){var M=l[h];M.ref.impl=M.nextImpl}Bi(i,t,r),Hi(t),f&4&&(Us(3,t,t.return),fu(3,t),Us(5,t,t.return));break;case 1:Bi(i,t,r),Hi(t),f&512&&(on||l===null||vi(l,l.return)),f&64&&li&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?i:r.concat(i))));break;case 26:if(h=$a,Bi(i,t,r),Hi(t),f&512&&(on||l===null||vi(l,l.return)),f&4)if(f=l!==null?l.memoizedState:null,r=t.memoizedState,l===null)if(r===null)if(t.stateNode===null)if(li)t.stateNode=p1(t.type,t.memoizedProps,i.containerInfo,t);else{e:{i=t.type,r=t.memoizedProps,f=h.ownerDocument||h;t:switch(i){case"title":l=f.getElementsByTagName("title")[0],(!l||l[Ze]||l[N]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=f.createElement(i),f.head.insertBefore(l,f.querySelector("head > title"))),xi(l,i,r),l[N]=t,Lt(l),i=l;break e;case"link":if(h=F1("link","href",f).get(i+(r.href||""))){for(M=0;M<h.length;M++)if(l=h[M],l.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&l.getAttribute("rel")===(r.rel==null?null:r.rel)&&l.getAttribute("title")===(r.title==null?null:r.title)&&l.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){h.splice(M,1);break t}}l=f.createElement(i),xi(l,i,r),f.head.appendChild(l);break;case"meta":if(h=F1("meta","content",f).get(i+(r.content||""))){for(M=0;M<h.length;M++)if(l=h[M],l.getAttribute("content")===(r.content==null?null:""+r.content)&&l.getAttribute("name")===(r.name==null?null:r.name)&&l.getAttribute("property")===(r.property==null?null:r.property)&&l.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&l.getAttribute("charset")===(r.charSet==null?null:r.charSet)){h.splice(M,1);break t}}l=f.createElement(i),xi(l,i,r),f.head.appendChild(l);break;default:throw Error(a(468,i))}l[N]=t,Lt(l),i=l}t.stateNode=i}else li||F0(h,t.type,t.stateNode);else t.stateNode=z1(h,r,t.memoizedProps);else f!==r?(f===null?(i=l.stateNode,i===null||on||i.parentNode.removeChild(i)):f.count--,r===null?li||F0(h,t.type,t.stateNode):z1(h,r,t.memoizedProps)):r===null&&t.stateNode!==null&&km(t,t.memoizedProps,l.memoizedProps);break;case 27:Bi(i,t,r),Hi(t),f&512&&(on||l===null||vi(l,l.return)),l!==null&&f&4&&km(t,t.memoizedProps,l.memoizedProps);break;case 5:if(h=Mr,Mr=!1,Bi(i,t,r),Mr=h,Hi(t),f&512&&(on||l===null||vi(l,l.return)),t.flags&32){i=t.stateNode;try{fl(i,""),Ut=!0}catch(_e){fn(t,t.return,_e)}}f&4&&t.stateNode!=null&&(i=t.memoizedProps,km(t,i,l!==null?l.memoizedProps:i)),f&1024&&(Qm=!0);break;case 6:if(Bi(i,t,r),Hi(t),f&4){if(t.stateNode===null)throw Error(a(162));i=t.memoizedProps,r=t.stateNode;try{r.nodeValue=i,Ut=!0}catch(_e){fn(t,t.return,_e)}}break;case 3:if(Ut=!1,Hd=null,h=$a,$a=Mu(i.containerInfo),Bi(i,t,r),$a=h,Hi(t),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Zl(i.containerInfo)}catch(_e){fn(t,t.return,_e)}Qm&&(Qm=!1,Ly(t)),Ut=!1;break;case 4:f=Mr,Mr=li,l=$t(),h=$a,$a=Mu(t.stateNode.containerInfo),Bi(i,t,r),Hi(t),$a=h,Ut&&hu&&(Ed=!0),Ut=l,Mr=f;break;case 12:Bi(i,t,r),Hi(t);break;case 31:Bi(i,t,r),Hi(t),f&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Td(t,i)));break;case 13:Bi(i,t,r),Hi(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Rd=Re()),f&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Td(t,i)));break;case 22:h=t.memoizedState!==null,M=l!==null&&l.memoizedState!==null;var U=li,Y=on,oe=Mr;li=U||h,Mr=oe||h,on=Y||M,Bi(i,t,r),on=Y,Mr=oe,li=U,Hi(t),f&8192&&(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,!h||l===null||M||li||on||(i=M||on,r=li,l=on,li=h||li,on=i,Os(t,2),li=r,on=l),!h&&Mr||$m(t,h)),f&4&&(i=t.updateQueue,i!==null&&(r=i.retryQueue,r!==null&&(i.retryQueue=null,Td(t,r))));break;case 19:Bi(i,t,r),Hi(t),f&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Td(t,i)));break;case 30:f&512&&(on||l===null||vi(l,l.return)),f=$t(),h=hu,M=(r&335544064)===r,U=t.memoizedProps,hu=M&&Yr(U.default,U.update)!=="none",Bi(i,t,r),Hi(t),M&&l!==null&&Ut&&(t.flags|=4),hu=h,Ut=f;break;case 21:break;case 7:f&512&&(on||l===null||vi(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=t);default:Bi(i,t,r),Hi(t)}}function Hi(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(_y(l)){r=l;break}l=l.return}l=null;for(var f=t.return;f!==null;){if(Gm(f)){var h=f.stateNode;l===null?l=[h]:l.push(h)}if(Hm(f))break;f=f.return}var M=l;if(r==null)throw Error(a(160));switch(r.tag){case 27:var U=r.stateNode,Y=Xm(t);xd(t,Y,U,M);break;case 5:var oe=r.stateNode;r.flags&32&&(fl(oe,""),r.flags&=-33);var _e=Xm(t);xd(t,_e,oe,M);break;case 3:case 4:var Ae=r.stateNode.containerInfo,ae=Xm(t);Wm(t,ae,Ae,M);break;default:throw Error(a(161))}}catch(pe){fn(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ly(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Ly(i),i.tag===5&&i.flags&1024&&(i=i.stateNode,ql=!0,i.reset(),ql=!1),t=t.sibling}}function Dl(t,i){if(i.subtreeFlags&9270)for(i=i.child;i!==null;)Uy(i,t),i=i.sibling;else Ey(i)}function Uy(t,i){var r=t.alternate;if(r===null)Ym(t,!1);else switch(t.tag){case 3:if(Jm=Er=!1,xy(),Dl(i,t),!Er&&!Ed){if(t=Sr,t!==null)for(var l=0;l<t.length;l+=3){r=t[l];var f=t[l+1];S1(r,t[l+2]),r=r.ownerDocument.documentElement,r!==null&&r.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+f+")"})}t=i.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jm=!0}Sr=null;break;case 5:Dl(i,t);break;case 4:l=Er,Er=!1,Dl(i,t),Er&&(Ed=!0),Er=l;break;case 22:t.memoizedState===null&&(r.memoizedState!==null?Ym(t,!1):Dl(i,t));break;case 30:l=Er,f=xy(),Er=!1,Dl(i,t),Er&&(t.flags|=4);var h=t.memoizedProps,M=t.stateNode;i=Wr(h,M),M=Wr(r.memoizedProps,M);var U=Yr(h.default,h.update);U==="none"?i=!1:(h=r.memoizedState,r.memoizedState=null,r=t.child,ji=0,i=Km(t,r,i,M,U,h,!0),ji!==(h===null?0:h.length)&&(t.flags|=32)),(t.flags&4)!==0&&i?(zl(t,t.memoizedProps.onUpdate),Sr=f):f!==null&&(f.push.apply(f,Sr),Sr=f),Er=(t.flags&32)!==0?!0:l;break;default:Dl(i,t)}}function br(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ty(t,i.alternate,i),i=i.sibling}function Os(t,i){for(t=t.child;t!==null;){var r=t,l=i;switch(r.tag){case 0:case 11:case 14:case 15:Us(4,r,r.return),Os(r,l);break;case 1:vi(r,r.return);var f=r.stateNode;typeof f.componentWillUnmount=="function"&&py(r,r.return,f),Os(r,l);break;case 27:(l&2)!==0&&L1(r.stateNode,r.type,r.memoizedProps);case 5:vi(r,r.return),r.tag!==5&&r.tag!==27||du(r),Os(r,l);break;case 6:du(r);break;case 26:vi(r,r.return),f=r.stateNode,r.memoizedState!==null||f===null||on||f.parentNode.removeChild(f),Os(r,l);break;case 22:r.memoizedState===null&&Os(r,l);break;case 30:vi(r,r.return),Os(r,l);break;case 7:vi(r,r.return);default:Os(r,l)}t=t.sibling}}function er(t,i,r){for(r=(i.subtreeFlags&8772)!==0?r:r&-2,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,M=h.flags,U=(r&1)!==0;switch(h.tag){case 0:case 11:case 15:er(f,h,r),fu(4,h);break;case 1:if(er(f,h,r),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(_e){fn(l,l.return,_e)}if(l=h,f=l.updateQueue,f!==null){var Y=l.stateNode;try{var oe=f.shared.hiddenCallbacks;if(oe!==null)for(f.shared.hiddenCallbacks=null,f=0;f<oe.length;f++)tS(oe[f],Y)}catch(_e){fn(l,l.return,_e)}}U&&M&64&&hy(h),xr(h,h.return);break;case 27:(r&2)!==0&&gy(h);case 5:h.tag!==5&&h.tag!==27||my(h),er(f,h,r),U&&l===null&&M&4&&Vm(h),xr(h,h.return);break;case 6:my(h);break;case 26:Y=h.stateNode,h.memoizedState!==null||Y===null||li||F0(Mu(Y.ownerDocument),h.type,Y),er(f,h,r),U&&l===null&&M&4&&Vm(h),xr(h,h.return);break;case 12:er(f,h,r);break;case 31:er(f,h,r),U&&M&4&&wy(f,h);break;case 13:er(f,h,r),U&&M&4&&Dy(f,h);break;case 22:h.memoizedState===null&&er(f,h,r),xr(h,h.return);break;case 30:er(f,h,r),xr(h,h.return);break;case 7:xr(h,h.return);default:er(f,h,r)}i=i.sibling}}function t0(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Jc(r))}function n0(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Jc(t))}function Fa(t,i,r,l){var f=(r&335544064)===r;if(i.subtreeFlags&(f?10262:10256))for(i=i.child;i!==null;)Oy(t,i,r,l),i=i.sibling;else f&&My(i)}function Oy(t,i,r,l){var f=(r&335544064)===r;f&&i.alternate===null&&i.return!==null&&i.return.alternate!==null&&Md(i);var h=i.flags;switch(i.tag){case 0:case 11:case 15:Fa(t,i,r,l),h&2048&&fu(9,i);break;case 1:Fa(t,i,r,l);break;case 3:Fa(t,i,r,l),f&&Jm&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),h&2048&&(h=null,i.alternate!==null&&(h=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==h&&(i.refCount++,h!=null&&Jc(h)));break;case 12:if(h&2048){Fa(t,i,r,l),h=i.stateNode;try{var M=i.memoizedProps,U=M.id,Y=M.onPostCommit;typeof Y=="function"&&Y(U,i.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(oe){fn(i,i.return,oe)}}else Fa(t,i,r,l);break;case 31:Fa(t,i,r,l);break;case 13:Fa(t,i,r,l);break;case 23:break;case 22:M=i.stateNode,U=i.alternate,i.memoizedState!==null?(f&&U!==null&&U.memoizedState===null&&Md(U),M._visibility&2?Fa(t,i,r,l):pu(t,i)):(f&&U!==null&&U.memoizedState!==null&&Md(i),M._visibility&2?Fa(t,i,r,l):(M._visibility|=2,Nl(t,i,r,l,(i.subtreeFlags&10256)!==0||!1))),h&2048&&t0(U,i);break;case 24:Fa(t,i,r,l),h&2048&&n0(i.alternate,i);break;case 30:f&&(h=i.alternate,h!==null&&(yr(h.child,!0),yr(i.child,!0))),Fa(t,i,r,l);break;default:Fa(t,i,r,l)}}function Nl(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,M=i,U=r,Y=l,oe=M.flags;switch(M.tag){case 0:case 11:case 15:Nl(h,M,U,Y,f),fu(8,M);break;case 23:break;case 22:var _e=M.stateNode;M.memoizedState!==null?_e._visibility&2?Nl(h,M,U,Y,f):pu(h,M):(_e._visibility|=2,Nl(h,M,U,Y,f)),f&&oe&2048&&t0(M.alternate,M);break;case 24:Nl(h,M,U,Y,f),f&&oe&2048&&n0(M.alternate,M);break;default:Nl(h,M,U,Y,f)}i=i.sibling}}function pu(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:pu(r,l),f&2048&&t0(l.alternate,l);break;case 24:pu(r,l),f&2048&&n0(l.alternate,l);break;default:pu(r,l)}i=i.sibling}}var wo=8192;function Do(t,i,r){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)Py(t,i,r),t=t.sibling}function Py(t,i,r){switch(t.tag){case 26:Do(t,i,r),t.flags&wo&&(t.memoizedState!==null?NC(r,$a,t.memoizedState,t.memoizedProps):(t=t.stateNode,(i&335544128)===i&&V1(r,t)));break;case 5:Do(t,i,r),t.flags&wo&&(t=t.stateNode,(i&335544128)===i&&V1(r,t));break;case 3:case 4:var l=$a;$a=Mu(t.stateNode.containerInfo),Do(t,i,r),$a=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=wo,wo=16777216,Do(t,i,r),wo=l):Do(t,i,r));break;case 30:if((t.flags&wo)!==0&&(l=t.memoizedProps.name,l!=null&&l!=="auto")){var f=t.stateNode;f.paired=null,ha===null&&(ha=new Map),ha.set(l,f)}Do(t,i,r);break;default:Do(t,i,r)}}function Iy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function mu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];ci=l,Fy(l,t)}Iy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zy(t),t=t.sibling}function zy(t){switch(t.tag){case 0:case 11:case 15:mu(t),t.flags&2048&&Us(9,t,t.return);break;case 3:mu(t);break;case 12:mu(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ad(t)):mu(t);break;default:mu(t)}}function Ad(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];ci=l,Fy(l,t)}Iy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Us(8,i,i.return),Ad(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Ad(i));break;default:Ad(i)}t=t.sibling}}function Fy(t,i){for(;ci!==null;){var r=ci;switch(r.tag){case 0:case 11:case 15:Us(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jc(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,ci=l;else e:for(r=t;ci!==null;){l=ci;var f=l.sibling,h=l.return;if(Cy(l),l===r){ci=null;break e}if(f!==null){f.return=h,ci=f;break e}ci=h}}}var A2={getCacheForType:function(t){var i=mi(qn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return mi(qn).controller.signal}},C2=typeof WeakMap=="function"?WeakMap:Map,en=0,gn=null,Gt=null,Xt=0,un=0,pa=null,Ps=!1,Ll=!1,i0=!1,ts=0,Bn=0,Is=0,No=0,Cd=0,ma=0,Ul=0,_u=null,Qi=null,a0=!1,Rd=0,By=0,wd=1/0,Dd=null,zs=null,wn=0,tr=null,Lo=null,Tr=0,r0=0,s0=null,Hy=null,Ol=null,Pl=null,Il=null,gu=0,Nd=null;function _a(){return(en&2)!==0&&Xt!==0?Xt&-Xt:ve.T!==null?_0():An()}function Gy(){if(ma===0)if((Xt&536870912)===0||Ot){var t=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ma=t}else ma=536870912;return t=_i.current,t!==null&&(t.flags|=32),ma}function zl(t,i){if(i!=null){var r=t.stateNode,l=r.ref;l===null&&(l=r.ref=y1(Wr(t.memoizedProps,r))),Pl===null&&(Pl=[]),Pl.push(i.bind(null,l))}}function Ji(t,i,r){(t===gn&&(un===2||un===9)||t.cancelPendingCommit!==null)&&(Fl(t,0),Fs(t,Xt,ma,!1)),Vn(t,r),((en&2)===0||t!==gn)&&(t===gn&&((en&2)===0&&(No|=r),Bn===4&&Fs(t,Xt,ma,!1)),Ar(t))}function Vy(t,i,r){if((en&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Qt(t,i),f=l?D2(t,i):l0(t,i,!0),h=l;do{if(f===0){Ll&&!l&&Fs(t,i,0,!1);break}else{if(r=t.current.alternate,h&&!R2(r)){f=l0(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var U=t;f=_u;var Y=U.current.memoizedState.isDehydrated;if(Y&&(Fl(U,M).flags|=256),M=l0(U,M,!1),M!==2&&M!==6){if(i0&&!Y){U.errorRecoveryDisabledLanes|=h,No|=h,f=4;break e}h=Qi,Qi=f,h!==null&&(Qi===null?Qi=h:Qi.push.apply(Qi,h))}f=M}if(h=!1,f!==2)continue}}if(f===1){Fl(t,0),Fs(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i&&(i&62914560)!==i)break;case 6:Fs(l,i,ma,!Ps);break e;case 2:Qi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Rd+300-Re(),10<f)){if(Fs(l,i,ma,!Ps),rn(l,0,!0)!==0)break e;Tr=i,l.timeoutHandle=C0(ky.bind(null,l,r,Qi,Dd,a0,i,ma,No,Ul,Ps,h,"Throttled",-0,0),f);break e}ky(l,r,Qi,Dd,a0,i,ma,No,Ul,Ps,h,null,-0,0)}}break}while(!0);Ar(t)}function ky(t,i,r,l,f,h,M,U,Y,oe,_e,Ae,ae,pe){t.timeoutHandle=-1;var je=i.subtreeFlags,pt=(h&335544064)===h;if(Ae=null,(pt||je&8192||(je&16785408)===16785408)&&(Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_r},ha=null,Py(i,h,Ae),pt&&(je=Ae,pt=t.containerInfo,pt=(pt.nodeType===9?pt:pt.ownerDocument).__reactViewTransition,pt!=null&&(je.count++,je.waitingForViewTransition=!0,je=Tu.bind(je),pt.finished.then(je,je))),je=(h&62914560)===h?Rd-Re():(h&4194048)===h?By-Re():0,je=LC(Ae,je),je!==null)){Tr=h,t.cancelPendingCommit=je(Qy.bind(null,t,i,h,r,l,f,M,U,Y,oe,_e,Ae,null,ae,pe)),Fs(t,h,M,!oe);return}Qy(t,i,h,r,l,f,M,U,Y,oe,_e,Ae)}function R2(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],h=f.getSnapshot;f=f.value;try{if(!fa(h(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fs(t,i,r,l){i=It(t,i),i&=~Cd,i&=~No,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-we(f),M=1<<h;l[h]=-1,f&=~M}r!==0&&Tn(t,r,i)}function Ld(){return(en&6)===0?(vu(0),!1):!0}function o0(){if(Gt!==null){if(un===0)var t=Gt.return;else t=Gt,jr=xo=null,mm(t),bl=null,tu=0,t=Gt;for(;t!==null;)dy(t.alternate,t),t=t.return;Gt=null}}function Fl(t,i){var r=t.timeoutHandle;return r!==-1&&(t.timeoutHandle=-1,J2(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Tr=0,o0(),gn=t,Gt=r=qr(t.current,null),Xt=i,un=0,pa=null,Ps=!1,Ll=Qt(t,i),i0=!1,Ul=ma=Cd=No=Is=Bn=0,Qi=_u=null,a0=!1,ts=It(t,i),Hf(),r}function Xy(t,i){wt=null,ve.H=fd,i===El||i===Qf?(i=Qx(),un=3):i===nm?(i=Qx(),un=4):un=i===Dm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pa=i,Gt===null&&(Bn=1,dd(t,Oa(i,t.current)))}function Wy(){var t=_i.current;return t===null?!0:(Xt&4194048)===Xt?Ti===null:(Xt&62914560)===Xt||(Xt&536870912)!==0?t===Ti:!1}function Yy(){var t=ve.H;return ve.H=fd,t===null?fd:t}function qy(){var t=ve.A;return ve.A=A2,t}function Ud(){Bn=4,Ps||(Xt&4194048)!==Xt&&_i.current!==null||(Ll=!0),(Is&134217727)===0&&(No&134217727)===0||gn===null||Fs(gn,Xt,ma,!1)}function l0(t,i,r){var l=en;en|=2;var f=Yy(),h=qy();(gn!==t||Xt!==i)&&(Dd=null,Fl(t,i)),i=!1;var M=Bn;e:do try{if(un!==0&&Gt!==null){var U=Gt,Y=pa;switch(un){case 8:o0(),M=6;break e;case 3:case 2:case 9:case 6:_i.current===null&&(i=!0);var oe=un;if(un=0,pa=null,Bl(t,U,Y,oe),r&&Ll){M=0;break e}break;default:oe=un,un=0,pa=null,Bl(t,U,Y,oe)}}w2(),M=Bn;break}catch(_e){Xy(t,_e)}while(!0);return i&&t.shellSuspendCounter++,jr=xo=null,en=l,ve.H=f,ve.A=h,Gt===null&&(gn=null,Xt=0,Hf()),M}function w2(){for(;Gt!==null;)Zy(Gt)}function D2(t,i){var r=en;en|=2;var l=Yy(),f=qy();gn!==t||Xt!==i?(Dd=null,wd=Re()+500,Fl(t,i)):Ll=Qt(t,i);e:do try{if(un!==0&&Gt!==null){i=Gt;var h=pa;t:switch(un){case 1:un=0,pa=null,Bl(t,i,h,1);break;case 2:case 9:if(jx(h)){un=0,pa=null,jy(i);break}i=function(){un!==2&&un!==9||gn!==t||(un=7),Ar(t)},h.then(i,i);break e;case 3:un=7;break e;case 4:un=5;break e;case 7:jx(h)?(un=0,pa=null,jy(i)):(un=0,pa=null,Bl(t,i,h,7));break;case 5:var M=null;switch(Gt.tag){case 26:M=Gt.memoizedState;case 5:case 27:var U=Gt;if(M?H1(M):U.stateNode.complete){un=0,pa=null;var Y=U.sibling;if(Y!==null)Gt=Y;else{var oe=U.return;oe!==null?(Gt=oe,Od(oe)):Gt=null}break t}}un=0,pa=null,Bl(t,i,h,5);break;case 6:un=0,pa=null,Bl(t,i,h,6);break;case 8:o0(),Bn=6;break e;default:throw Error(a(462))}}N2();break}catch(_e){Xy(t,_e)}while(!0);return jr=xo=null,ve.H=l,ve.A=f,en=r,Gt!==null?0:(gn=null,Xt=0,Hf(),Bn)}function N2(){for(;Gt!==null&&!Xe();)Zy(Gt)}function Zy(t){var i=uy(t.alternate,t,ts);t.memoizedProps=t.pendingProps,i===null?Od(t):Gt=i}function jy(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=iy(r,i,i.pendingProps,i.type,void 0,Xt);break;case 11:i=iy(r,i,i.pendingProps,i.type.render,i.ref,Xt);break;case 5:mm(i);var l=i;l===oi&&(Ot?(Yf(l),l.tag===5&&l.stateNode!=null&&(Mn=l.stateNode)):(Yf(l),Ot=!0));default:dy(r,i),i=Gt=Fx(i,ts),i=uy(r,i,ts)}t.memoizedProps=t.pendingProps,i===null?Od(t):Gt=i}function Bl(t,i,r,l){jr=xo=null,mm(i),bl=null,tu=0;var f=i.return;try{if(v2(t,f,i,r,Xt)){Bn=1,dd(t,Oa(r,t.current)),Gt=null;return}}catch(h){if(f!==null)throw Gt=f,h;Bn=1,dd(t,Oa(r,t.current)),Gt=null;return}i.flags&32768?(Ot||l===1?t=!0:Ll||(Xt&536870912)!==0?t=!1:(Ps=t=!0,(l===2||l===9||l===3||l===6)&&(l=_i.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ky(i,t)):Od(i)}function Od(t){var i=t;do{if((i.flags&32768)!==0){Ky(i,Ps);return}t=i.return;var r=M2(i.alternate,i,ts);if(r!==null){Gt=r;return}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);Bn===0&&(Bn=5)}function Ky(t,i){do{var r=E2(t.alternate,t);if(r!==null){r.flags&=32767,Gt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){Gt=t;return}Gt=t=r}while(t!==null);Bn=6,Gt=null}function Qy(t,i,r,l,f,h,M,U,Y,oe,_e,Ae){t.cancelPendingCommit=null;do Pd();while(wn!==0);if((en&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));t===gn&&(Gt=gn=null,Xt=0),Lo=i,tr=t,Tr=r,s0=f,Hy=l,L2(t,i,r,M,U,Y,Ae)}}function L2(t,i,r,l,f,h,M){var U=i.lanes|i.childLanes;if(r0=U,U|=kp,Un(t,r,U,l,f,h),Pl=null,(r&335544064)===r?(Il=s2(t),l=10262):(Il=null,l=10256),(i.subtreeFlags&l)!==0||(i.flags&l)!==0?(t.callbackNode=null,t.callbackPriority=0,F2(ze,function(){return d0(),null})):(t.callbackNode=null,t.callbackPriority=0),Sd=!1,l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=ve.T,ve.T=null,f=Ue.p,Ue.p=2,h=en,en|=4;try{b2(t,i,r)}finally{en=h,Ue.p=f,ve.T=l}}wn=1,Sd?Ol=aC(M,t.containerInfo,Il,c0,u0,O2,f0,d0,U2):(c0(),u0(),f0())}function U2(t){if(wn!==0){var i=tr.onRecoverableError;i(t,{componentStack:null})}}function O2(){wn===3&&(wn=0,Uy(Lo,tr),wn=4)}function c0(){if(wn===1){wn=0;var t=tr,i=Lo,r=Tr,l=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||l){l=ve.T,ve.T=null;var f=Ue.p;Ue.p=2;var h=en;en|=4;try{hu=Ed=!1,Ny(i,t,r),r=b0;var M=Rx(t.containerInfo),U=r.focusedElem,Y=r.selectionRange;if(M!==U&&U&&U.ownerDocument&&Cx(U.ownerDocument.documentElement,U)){if(Y!==null&&Fp(U)){var oe=Y.start,_e=Y.end;if(_e===void 0&&(_e=oe),"selectionStart"in U)U.selectionStart=oe,U.selectionEnd=Math.min(_e,U.value.length);else{var Ae=U.ownerDocument||document,ae=Ae&&Ae.defaultView||window;if(ae.getSelection){var pe=ae.getSelection(),je=U.textContent.length,pt=Math.min(Y.start,je),Dt=Y.end===void 0?pt:Math.min(Y.end,je);!pe.extend&&pt>Dt&&(M=Dt,Dt=pt,pt=M);var se=Ax(U,pt),ee=Ax(U,Dt);if(se&&ee&&(pe.rangeCount!==1||pe.anchorNode!==se.node||pe.anchorOffset!==se.offset||pe.focusNode!==ee.node||pe.focusOffset!==ee.offset)){var fe=Ae.createRange();fe.setStart(se.node,se.offset),pe.removeAllRanges(),pt>Dt?(pe.addRange(fe),pe.extend(ee.node,ee.offset)):(fe.setEnd(ee.node,ee.offset),pe.addRange(fe))}}}}for(Ae=[],pe=U;pe=pe.parentNode;)pe.nodeType===1&&Ae.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Ae.length;U++){var Te=Ae[U];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}ql=!!E0,b0=E0=null}finally{en=h,Ue.p=f,ve.T=l}}t.current=i,wn=2}}function u0(){if(wn===2){wn=0;var t=tr,i=Lo,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=ve.T,ve.T=null;var l=Ue.p;Ue.p=2;var f=en;en|=4;try{Ty(t,i.alternate,i)}finally{en=f,Ue.p=l,ve.T=r}}wn=3}}function f0(){if(wn===4||wn===3){wn=0;var t=Ol;Ol=null,ke();var i=tr,r=Lo,l=Tr,f=Hy,h=(l&335544064)===l?10262:10256;if((r.subtreeFlags&h)!==0||(r.flags&h)!==0?wn=5:(wn=0,Lo=tr=null,Jy(i,i.pendingLanes)),h=i.pendingLanes,h===0&&(zs=null),Pn(l),r=r.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Oe,r,void 0,(r.current.flags&128)===128)}catch{}if(f!==null){r=ve.T,h=Ue.p,Ue.p=2,ve.T=null;try{for(var M=i.onRecoverableError,U=0;U<f.length;U++){var Y=f[U];M(Y.value,{componentStack:Y.stack})}}finally{ve.T=r,Ue.p=h}}if(f=Pl,M=Il,Il=null,f!==null&&(Pl=null,M===null&&(M=[]),t!==null))for(Y=0;Y<f.length;Y++)r=(0,f[Y])(M),r!==void 0&&t.finished.finally(r);(Tr&3)!==0&&Pd(),Ar(i),h=i.pendingLanes,(l&261930)!==0&&(h&42)!==0?i===Nd?gu++:(gu=0,Nd=i):(gu=0,Nd=null),vu(0)}}function Jy(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Jc(i)))}function Pd(){return Ol!==null&&(Ol.skipTransition(),Ol=null),c0(),u0(),f0(),d0()}function d0(){if(wn!==5)return!1;var t=tr,i=r0;r0=0;var r=Pn(Tr),l=ve.T,f=Ue.p;try{Ue.p=32>r?32:r,ve.T=null,r=s0,s0=null;var h=tr,M=Tr;if(wn=0,Lo=tr=null,Tr=0,(en&6)!==0)throw Error(a(331));var U=en;if(en|=4,zy(h.current),Oy(h,h.current,M,r),en=U,vu(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Oe,h)}catch{}return!0}finally{Ue.p=f,ve.T=l,Jy(t,i)}}function $y(t,i,r){i=Oa(r,i),i=wm(t.stateNode,i,2),t=ws(t,i,2),t!==null&&(Vn(t,2),Ar(t))}function fn(t,i,r){if(t.tag===3)$y(t,t,r);else for(;i!==null;){if(i.tag===3){$y(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(zs===null||!zs.has(l))){t=Oa(r,t),r=jS(2),l=ws(i,r,2),l!==null&&(KS(r,l,i,t),Vn(l,2),Ar(l));break}}i=i.return}}function h0(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new C2;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(i0=!0,f.add(r),t=P2.bind(null,t,i,r),i.then(t,t))}function P2(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,gn===t&&(Xt&r)===r&&((Bn===4||Bn===3&&(Xt&62914560)===Xt&&300>Re()-Rd)&&(en&2)===0?Fl(t,0):Cd|=r,Ul===Xt&&(Ul=0)),Ar(t)}function e1(t,i){i===0&&(i=cn()),t=_o(t,i),t!==null&&(Vn(t,i),Ar(t))}function I2(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),e1(t,r)}function z2(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),e1(t,r)}function F2(t,i){return Ve(t,i)}var Hl=null,Gl=null,p0=!1,Id=!1,m0=!1,Bs=0;function Ar(t){t!==Gl&&t.next===null&&(Gl===null?Hl=Gl=t:Gl=Gl.next=t),Id=!0,p0||(p0=!0,H2())}function vu(t,i){if(!m0&&Id){m0=!0;do for(var r=!1,l=Hl;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var M=l.suspendedLanes,U=l.pingedLanes;h=(1<<31-we(42|t)+1)-1,h&=f&~(M&~U),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,a1(l,h))}else h=Xt,h=rn(l,l===gn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Qt(l,h)||(r=!0,a1(l,h));l=l.next}while(r);m0=!1}}function B2(){t1()}function t1(){Id=p0=!1;var t=0;Bs!==0&&Q2()&&(t=Bs);for(var i=Re(),r=null,l=Hl;l!==null;){var f=l.next,h=n1(l,i);h===0?(l.next=null,r===null?Hl=f:r.next=f,f===null&&(Gl=r)):(r=l,(t!==0||(h&3)!==0)&&(Id=!0)),l=f}wn!==0&&wn!==5||vu(t),Bs!==0&&(Bs=0)}function n1(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-we(h),U=1<<M,Y=f[M];Y===-1?((U&r)===0||(U&l)!==0)&&(f[M]=pi(U,i)):Y<=i&&(t.expiredLanes|=U),h&=~U}if(i=gn,r=Xt,r=rn(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(un===2||un===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&et(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Qt(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&et(l),Pn(r)){case 2:case 8:r=$;break;case 32:r=ze;break;case 268435456:r=He;break;default:r=ze}return l=i1.bind(null,t),r=Ve(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&et(l),t.callbackPriority=2,t.callbackNode=null,2}function i1(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Pd()&&t.callbackNode!==r)return null;var l=Xt;return l=rn(t,t===gn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Vy(t,l,i),n1(t,Re()),t.callbackNode!=null&&t.callbackNode===r?i1.bind(null,t):null)}function a1(t,i){if(Pd())return null;Vy(t,i,!0)}function H2(){$2(function(){(en&6)!==0?Ve(Ke,B2):t1()})}function _0(){if(Bs===0){var t=Mo;t===0&&(t=bn,bn<<=1,(bn&261888)===0&&(bn=256)),Bs=t}return Bs}function r1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Lf(t)}function G2(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var h=r1((f[K]||null).action),M=l.submitter;M&&(i=(i=M[K]||null)?r1(i.formAction):M.getAttribute("formAction"),i!==null&&(h=i,M=null));var U=new If("action","action",null,l,f);t.push({event:U,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Bs!==0){var Y=new FormData(f,M);bm(r,{pending:!0,data:Y,method:f.method,action:h},null,Y)}}else typeof h=="function"&&(U.preventDefault(),Y=new FormData(f,M),bm(r,{pending:!0,data:Y,method:f.method,action:h},h,Y))},currentTarget:f}]})}}for(var g0=0;g0<Vp.length;g0++){var v0=Vp[g0],V2=v0.toLowerCase(),k2=v0[0].toUpperCase()+v0.slice(1);Qa(V2,"on"+k2)}Qa(Nx,"onAnimationEnd"),Qa(Lx,"onAnimationIteration"),Qa(Ux,"onAnimationStart"),Qa("dblclick","onDoubleClick"),Qa("focusin","onFocus"),Qa("focusout","onBlur"),Qa(JA,"onTransitionRun"),Qa($A,"onTransitionStart"),Qa(e2,"onTransitionCancel"),Qa(Ox,"onTransitionEnd"),In("onMouseEnter",["mouseout","mouseover"]),In("onMouseLeave",["mouseout","mouseover"]),In("onPointerEnter",["pointerout","pointerover"]),In("onPointerLeave",["pointerout","pointerover"]),Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xu));function s1(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],Y=U.instance,oe=U.currentTarget;if(U=U.listener,Y!==h&&f.isPropagationStopped())break e;h=U,f.currentTarget=oe;try{h(f)}catch(_e){Bf(_e)}f.currentTarget=null,h=Y}else for(M=0;M<l.length;M++){if(U=l[M],Y=U.instance,oe=U.currentTarget,U=U.listener,Y!==h&&f.isPropagationStopped())break e;h=U,f.currentTarget=oe;try{h(f)}catch(_e){Bf(_e)}f.currentTarget=null,h=Y}}}}function Vt(t,i){var r=i[ue];r===void 0&&(r=i[ue]=new Set);var l=t+"__bubble";r.has(l)||(o1(i,t,2,!1),r.add(l))}function x0(t,i,r){var l=0;i&&(l|=4),o1(r,t,l,i)}var zd="_reactListening"+Math.random().toString(36).slice(2);function S0(t){if(!t[zd]){t[zd]=!0,sn.forEach(function(r){r!=="selectionchange"&&(X2.has(r)||x0(r,!1,t),x0(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[zd]||(i[zd]=!0,x0("selectionchange",!1,i))}}function o1(t,i,r,l){switch(K1(i)){case 2:var f=IC;break;case 8:f=zC;break;default:f=H0}r=f.bind(null,i,r,t),f=void 0,!Rp||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function y0(t,i,r,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===f)break;if(M===4)for(M=l.return;M!==null;){var Y=M.tag;if((Y===3||Y===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;U!==null;){if(M=Mt(U),M===null)return;if(Y=M.tag,Y===5||Y===6||Y===26||Y===27){l=h=M;continue e}U=U.parentNode}}l=l.return}ox(function(){var oe=h,_e=Ap(r),Ae=[];e:{var ae=Px.get(t);if(ae!==void 0){var pe=If,je=t;switch(t){case"keypress":if(Of(r)===0)break e;case"keydown":case"keyup":pe=RA;break;case"focusin":je="focus",pe=Lp;break;case"focusout":je="blur",pe=Lp;break;case"beforeblur":case"afterblur":pe=Lp;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=ux;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=_A;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=UA;break;case Nx:case Lx:case Ux:pe=xA;break;case Ox:pe=PA;break;case"scroll":case"scrollend":pe=pA;break;case"wheel":pe=zA;break;case"copy":case"cut":case"paste":pe=yA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=dx;break;case"submit":pe=NA;break;case"toggle":case"beforetoggle":pe=BA}var pt=(i&4)!==0,Dt=!pt&&(t==="scroll"||t==="scrollend"),se=pt?ae!==null?ae+"Capture":null:ae;pt=[];for(var ee=oe,fe;ee!==null;){var Te=ee;if(fe=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||fe===null||se===null||(Te=Gc(ee,se),Te!=null&&pt.push(Su(ee,Te,fe))),Dt)break;ee=ee.return}0<pt.length&&(ae=new pe(ae,je,null,r,_e),Ae.push({event:ae,listeners:pt}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",pe&&r!==Tp&&(je=r.relatedTarget||r.fromElement)&&(Mt(je)||je[he]))break e;(ae||pe)&&(je=_e.window===_e?_e:(pe=_e.ownerDocument)?pe.defaultView||pe.parentWindow:window,ae?(pe=r.relatedTarget||r.toElement,ae=oe,pe=pe?Mt(pe):null,pe!==null&&(Dt=c(pe),pt=pe.tag,pe!==Dt||pt!==5&&pt!==27&&pt!==6)&&(pe=null)):(ae=null,pe=oe),ae!==pe&&(pt=ux,Te="onMouseLeave",se="onMouseEnter",ee="mouse",(t==="pointerout"||t==="pointerover")&&(pt=dx,Te="onPointerLeave",se="onPointerEnter",ee="pointer"),Dt=ae==null?je:it(ae),fe=pe==null?je:it(pe),je=new pt(Te,ee+"leave",ae,r,_e),je.target=Dt,je.relatedTarget=fe,Te=null,Mt(_e)===oe&&(pt=new pt(se,ee+"enter",pe,r,_e),pt.target=fe,pt.relatedTarget=Dt,Te=pt),Dt=Te,pt=ae&&pe?O(ae,pe,W2):null,ae!==null&&l1(Ae,je,ae,pt,!1),pe!==null&&Dt!==null&&l1(Ae,Dt,pe,pt,!0)))}e:{if(ae=oe?it(oe):window,pe=ae.nodeName&&ae.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ae.type==="file")var at=Sx;else if(vx(ae))if(yx)at=jA;else{at=qA;var Wt=YA}else pe=ae.nodeName,!pe||pe.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?oe&&bp(oe.elementType)&&(at=Sx):at=ZA;if(at&&(at=at(t,oe))){xx(Ae,at,r,_e);break e}Wt&&Wt(t,ae,oe)}switch(Wt=oe?it(oe):window,t){case"focusin":(vx(Wt)||Wt.contentEditable==="true")&&(ml=Wt,Bp=oe,jc=null);break;case"focusout":jc=Bp=ml=null;break;case"mousedown":Hp=!0;break;case"contextmenu":case"mouseup":case"dragend":Hp=!1,wx(Ae,r,_e);break;case"selectionchange":if(QA)break;case"keydown":case"keyup":wx(Ae,r,_e)}var gt;if(Op)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else pl?_x(t,r)&&(St="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(St="onCompositionStart");St&&(hx&&r.locale!=="ko"&&(pl||St!=="onCompositionStart"?St==="onCompositionEnd"&&pl&&(gt=lx()):(Ss=_e,wp="value"in Ss?Ss.value:Ss.textContent,pl=!0)),Wt=Fd(oe,St),0<Wt.length&&(St=new fx(St,t,null,r,_e),Ae.push({event:St,listeners:Wt}),gt?St.data=gt:(gt=gx(r),gt!==null&&(St.data=gt)))),(gt=GA?VA(t,r):kA(t,r))&&(St=Fd(oe,"onBeforeInput"),0<St.length&&(Wt=new fx("onBeforeInput","beforeinput",null,r,_e),Ae.push({event:Wt,listeners:St}),Wt.data=gt)),G2(Ae,t,oe,r,_e)}s1(Ae,i)})}function Su(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Fd(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Gc(t,r),f!=null&&l.unshift(Su(t,f,h)),f=Gc(t,i),f!=null&&l.push(Su(t,f,h))),t.tag===3)return l;t=t.return}return[]}function W2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function l1(t,i,r,l,f){for(var h=i._reactName,M=[];r!==null&&r!==l;){var U=r,Y=U.alternate,oe=U.stateNode;if(U=U.tag,Y!==null&&Y===l)break;U!==5&&U!==26&&U!==27||oe===null||(Y=oe,f?(oe=Gc(r,h),oe!=null&&M.unshift(Su(r,oe,Y))):f||(oe=Gc(r,h),oe!=null&&M.push(Su(r,oe,Y)))),r=r.return}M.length!==0&&t.push({event:i,listeners:M})}var Y2=/\r\n?/g,q2=/\u0000|\uFFFD/g;function c1(t){return(typeof t=="string"?t:""+t).replace(Y2,`
`).replace(q2,"")}function u1(t,i){return i=c1(i),c1(t)===i}function dn(t,i,r,l,f,h){switch(r){case"children":if(typeof l=="string")i==="body"||i==="textarea"&&l===""||fl(t,l);else if(typeof l=="number"||typeof l=="bigint")i!=="body"&&fl(t,""+l);else return;break;case"className":ua(t,"class",l);break;case"tabIndex":ua(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ua(t,r,l);break;case"style":rx(t,l,h);return;case"data":if(i!=="object"){ua(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Lf(l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(i!=="input"&&dn(t,i,"name",f.name,f,null),dn(t,i,"formEncType",f.formEncType,f,null),dn(t,i,"formMethod",f.formMethod,f,null),dn(t,i,"formTarget",f.formTarget,f,null)):(dn(t,i,"encType",f.encType,f,null),dn(t,i,"method",f.method,f,null),dn(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Lf(l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=_r);return;case"onScroll":l!=null&&Vt("scroll",t);return;case"onScrollEnd":l!=null&&Vt("scrollend",t);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));(h!=null?h.__html:void 0)!==r&&(t.innerHTML=r)}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Lf(l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Vt("beforetoggle",t),Vt("toggle",t),yn(t,"popover",l);break;case"xlinkActuate":kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yn(t,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")r=dA.get(r)||r,yn(t,r,l);else return}Ut=!0}function M0(t,i,r,l,f,h){switch(r){case"style":rx(t,l,h);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));(h!=null?h.__html:void 0)!==r&&(t.innerHTML=r)}}break;case"children":if(typeof l=="string")fl(t,l);else if(typeof l=="number"||typeof l=="bigint")fl(t,""+l);else return;break;case"onScroll":l!=null&&Vt("scroll",t);return;case"onScrollEnd":l!=null&&Vt("scrollend",t);return;case"onClick":l!=null&&(t.onclick=_r);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ti.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),h=r.slice(2,f?r.length-7:void 0),i=t[K]||null,i=i!=null?i[r]:null,typeof i=="function"&&t.removeEventListener(h,i,f),typeof l=="function")){typeof i!="function"&&i!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(h,l,f);break e}Ut=!0,r in t?t[r]=l:l===!0?t.setAttribute(r,""):yn(t,r,l)}return}Ut=!0}function xi(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",t),Vt("load",t);var l=!1,f=!1,h;for(h in r)if(r.hasOwnProperty(h)){var M=r[h];if(M!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:dn(t,i,h,M,r,null)}}f&&dn(t,i,"srcSet",r.srcSet,r,null),l&&dn(t,i,"src",r.src,r,null);return;case"input":Vt("invalid",t);var U=h=M=f=null,Y=null,oe=null;for(l in r)if(r.hasOwnProperty(l)){var _e=r[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":M=_e;break;case"checked":Y=_e;break;case"defaultChecked":oe=_e;break;case"value":h=_e;break;case"defaultValue":U=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,i));break;default:dn(t,i,l,_e,r,null)}}tx(t,h,U,Y,oe,M,f,!1);return;case"select":Vt("invalid",t),l=M=h=null;for(f in r)if(r.hasOwnProperty(f)&&(U=r[f],U!=null))switch(f){case"value":h=U;break;case"defaultValue":M=U;break;case"multiple":l=U;default:dn(t,i,f,U,r,null)}i=h,r=M,t.multiple=!!l,i!=null?ul(t,!!l,i,!1):r!=null&&ul(t,!!l,r,!0);return;case"textarea":Vt("invalid",t),h=f=l=null;for(M in r)if(r.hasOwnProperty(M)&&(U=r[M],U!=null))switch(M){case"value":l=U;break;case"defaultValue":f=U;break;case"children":h=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:dn(t,i,M,U,r,null)}ix(t,l,f,h);return;case"option":for(Y in r)if(r.hasOwnProperty(Y)&&(l=r[Y],l!=null))switch(Y){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:dn(t,i,Y,l,r,null)}return;case"dialog":Vt("beforetoggle",t),Vt("toggle",t),Vt("cancel",t),Vt("close",t);break;case"iframe":case"object":Vt("load",t);break;case"video":case"audio":for(l=0;l<xu.length;l++)Vt(xu[l],t);break;case"image":Vt("error",t),Vt("load",t);break;case"details":Vt("toggle",t);break;case"embed":case"source":case"link":Vt("error",t),Vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in r)if(r.hasOwnProperty(oe)&&(l=r[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:dn(t,i,oe,l,r,null)}return;default:if(bp(i)){for(_e in r)r.hasOwnProperty(_e)&&(l=r[_e],l!==void 0&&M0(t,i,_e,l,r,void 0));return}}for(U in r)r.hasOwnProperty(U)&&(l=r[U],l!=null&&dn(t,i,U,l,r,null))}var Z2={};function j2(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,M=null,U=null,Y=null,oe=null,_e=null;for(pe in r){var Ae=r[pe];if(r.hasOwnProperty(pe)&&Ae!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":Y=Ae;default:l.hasOwnProperty(pe)||dn(t,i,pe,null,l,Ae)}}for(var ae in l){var pe=l[ae];if(Ae=r[ae],l.hasOwnProperty(ae)&&(pe!=null||Ae!=null))switch(ae){case"type":pe!==Ae&&(Ut=!0),h=pe;break;case"name":pe!==Ae&&(Ut=!0),f=pe;break;case"checked":pe!==Ae&&(Ut=!0),oe=pe;break;case"defaultChecked":pe!==Ae&&(Ut=!0),_e=pe;break;case"value":pe!==Ae&&(Ut=!0),M=pe;break;case"defaultValue":pe!==Ae&&(Ut=!0),U=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:pe!==Ae&&dn(t,i,ae,pe,l,Ae)}}Mp(t,M,U,Y,oe,_e,h,f);return;case"select":pe=M=U=ae=null;for(h in r)if(Y=r[h],r.hasOwnProperty(h)&&Y!=null)switch(h){case"value":break;case"multiple":pe=Y;default:l.hasOwnProperty(h)||dn(t,i,h,null,l,Y)}for(f in l)if(h=l[f],Y=r[f],l.hasOwnProperty(f)&&(h!=null||Y!=null))switch(f){case"value":h!==Y&&(Ut=!0),ae=h;break;case"defaultValue":h!==Y&&(Ut=!0),U=h;break;case"multiple":h!==Y&&(Ut=!0),M=h;default:h!==Y&&dn(t,i,f,h,l,Y)}i=U,r=M,l=pe,ae!=null?ul(t,!!r,ae,!1):!!l!=!!r&&(i!=null?ul(t,!!r,i,!0):ul(t,!!r,r?[]:"",!1));return;case"textarea":pe=ae=null;for(U in r)if(f=r[U],r.hasOwnProperty(U)&&f!=null&&!l.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:dn(t,i,U,null,l,f)}for(M in l)if(f=l[M],h=r[M],l.hasOwnProperty(M)&&(f!=null||h!=null))switch(M){case"value":f!==h&&(Ut=!0),ae=f;break;case"defaultValue":f!==h&&(Ut=!0),pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&dn(t,i,M,f,l,h)}nx(t,ae,pe);return;case"option":for(var je in r)if(ae=r[je],r.hasOwnProperty(je)&&ae!=null&&!l.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:dn(t,i,je,null,l,ae)}for(Y in l)if(ae=l[Y],pe=r[Y],l.hasOwnProperty(Y)&&ae!==pe&&(ae!=null||pe!=null))switch(Y){case"selected":ae!==pe&&(Ut=!0),t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:dn(t,i,Y,ae,l,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in r)ae=r[pt],r.hasOwnProperty(pt)&&ae!=null&&!l.hasOwnProperty(pt)&&dn(t,i,pt,null,l,ae);for(oe in l)if(ae=l[oe],pe=r[oe],l.hasOwnProperty(oe)&&ae!==pe&&(ae!=null||pe!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:dn(t,i,oe,ae,l,pe)}return;default:if(bp(i)){for(var Dt in r)ae=r[Dt],r.hasOwnProperty(Dt)&&ae!==void 0&&!l.hasOwnProperty(Dt)&&M0(t,i,Dt,void 0,l,ae);for(_e in l)ae=l[_e],pe=r[_e],!l.hasOwnProperty(_e)||ae===pe||ae===void 0&&pe===void 0||M0(t,i,_e,ae,l,pe);return}}for(var se in r)ae=r[se],r.hasOwnProperty(se)&&ae!=null&&!l.hasOwnProperty(se)&&dn(t,i,se,null,l,ae);for(Ae in l)ae=l[Ae],pe=r[Ae],!l.hasOwnProperty(Ae)||ae===pe||ae==null&&pe==null||dn(t,i,Ae,ae,l,pe)}function f1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function K2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],h=f.transferSize,M=f.initiatorType,U=f.duration;if(h&&U&&f1(M)){for(M=0,U=f.responseEnd,l+=1;l<r.length;l++){var Y=r[l],oe=Y.startTime;if(oe>U)break;var _e=Y.transferSize,Ae=Y.initiatorType;_e&&f1(Ae)&&(Y=Y.responseEnd,M+=_e*(Y<U?1:(U-oe)/(Y-oe)))}if(--l,i+=8*(h+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var E0=null,b0=null;function yu(t){return t.nodeType===9?t:t.ownerDocument}function d1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h1(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function p1(t,i,r,l){return r=yu(r).createElement(t),r[N]=l,r[K]=i,xi(r,t,i),Lt(r),r}function T0(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var A0=null;function Q2(){var t=window.event;return t&&t.type==="popstate"?t===A0?!1:(A0=t,!0):(A0=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,J2=typeof clearTimeout=="function"?clearTimeout:void 0,m1=typeof Promise=="function"?Promise:void 0,_1=typeof requestAnimationFrame=="function"?requestAnimationFrame:C0,$2=typeof queueMicrotask=="function"?queueMicrotask:typeof m1<"u"?function(t){return m1.resolve(null).then(t).catch(eC)}:C0;function eC(t){setTimeout(function(){throw t})}function Hs(t){return t==="head"}function g1(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),Zl(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")P0(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,P0(r);for(var h=r.firstChild;h;){var M=h.nextSibling,U=h.nodeName;h[Ze]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=M}}else r==="body"&&P0(t.ownerDocument.body);r=f}while(r);Zl(i)}function v1(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function x1(t,i,r){if(i=CSS.escape(i)!==i?"r-"+btoa(i).replace(/=/g,""):i,t.style.viewTransitionName=i,r!=null&&(t.style.viewTransitionClass=r),r=getComputedStyle(t),r.display==="inline"){if(i=t.getClientRects(),i.length===1)var l=1;else for(var f=l=0;f<i.length;f++){var h=i[f];0<h.width&&0<h.height&&l++}l===1&&(t=t.style,t.display=i.length===1?"inline-block":"block",t.marginTop="-"+r.paddingTop,t.marginBottom="-"+r.paddingBottom)}}function S1(t,i){t=t.style,i=i.style;var r=i!=null?i.hasOwnProperty("viewTransitionName")?i.viewTransitionName:i.hasOwnProperty("view-transition-name")?i["view-transition-name"]:null:null;t.viewTransitionName=r==null||typeof r=="boolean"?"":(""+r).trim(),r=i!=null?i.hasOwnProperty("viewTransitionClass")?i.viewTransitionClass:i.hasOwnProperty("view-transition-class")?i["view-transition-class"]:null:null,t.viewTransitionClass=r==null||typeof r=="boolean"?"":(""+r).trim(),t.display==="inline-block"&&(i==null?t.display=t.margin="":(r=i.display,t.display=r==null||typeof r=="boolean"?"":r,r=i.margin,r!=null?t.margin=r:(r=i.hasOwnProperty("marginTop")?i.marginTop:i["margin-top"],t.marginTop=r==null||typeof r=="boolean"?"":r,i=i.hasOwnProperty("marginBottom")?i.marginBottom:i["margin-bottom"],t.marginBottom=i==null||typeof i=="boolean"?"":i)))}function tC(t,i,r){return r=r.ownerDocument.defaultView,{rect:t,abs:i.position==="absolute"||i.position==="fixed",clip:i.clipPath!=="none"||i.overflow!=="visible"||i.filter!=="none"||i.mask!=="none"||i.mask!=="none"||i.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=r.innerHeight&&t.left<=r.innerWidth}}function R0(t){var i=t.getBoundingClientRect(),r=getComputedStyle(t);return tC(i,r,t)}function nC(t){return t.documentElement.clientHeight}function iC(t){this.addEventListener("load",t),this.addEventListener("error",t)}function aC(t,i,r,l,f,h,M,U,Y){var oe=i.nodeType===9?i:i.ownerDocument;try{var _e=oe.startViewTransition({update:function(){var ae=oe.defaultView,pe=ae.navigation&&ae.navigation.transition,je=oe.fonts.status;l();var pt=[];if(je==="loaded"&&(nC(oe),oe.fonts.status==="loading"&&pt.push(oe.fonts.ready)),je=pt.length,t!==null)for(var Dt=t.suspenseyImages,se=0,ee=0;ee<Dt.length;ee++){var fe=Dt[ee];if(!fe.complete){var Te=fe.getBoundingClientRect();if(0<Te.bottom&&0<Te.right&&Te.top<ae.innerHeight&&Te.left<ae.innerWidth){if(se+=G1(fe),se>Gd){pt.length=je;break}fe=new Promise(iC.bind(fe)),pt.push(fe)}}}if(0<pt.length)return ae=Promise.race([Promise.all(pt),new Promise(function(at){return setTimeout(at,500)})]).then(f,f),(pe?Promise.allSettled([pe.finished,ae]):ae).then(h,h);if(f(),pe)return pe.finished.then(h,h);h()},types:r});oe.__reactViewTransition=_e;var Ae=[];return _e.ready.then(function(){for(var ae=oe.documentElement.getAnimations({subtree:!0}),pe=0;pe<ae.length;pe++){var je=ae[pe],pt=je.effect,Dt=pt.pseudoElement;if(Dt!=null&&Dt.startsWith("::view-transition")){Ae.push(je),je=pt.getKeyframes();for(var se=Dt=void 0,ee=!0,fe=0;fe<je.length;fe++){var Te=je[fe],at=Te.width;if(Dt===void 0)Dt=at;else if(Dt!==at){ee=!1;break}if(at=Te.height,se===void 0)se=at;else if(se!==at){ee=!1;break}delete Te.width,delete Te.height,Te.transform==="none"&&delete Te.transform}ee&&Dt!==void 0&&se!==void 0&&(pt.setKeyframes(je),ee=getComputedStyle(pt.target,pt.pseudoElement),ee.width!==Dt||ee.height!==se)&&(ee=je[0],ee.width=Dt,ee.height=se,ee=je[je.length-1],ee.width=Dt,ee.height=se,pt.setKeyframes(je))}}M()},function(ae){oe.__reactViewTransition===_e&&(oe.__reactViewTransition=null);try{if(typeof ae=="object"&&ae!==null)switch(ae.name){case"InvalidStateError":(ae.message==="View transition was skipped because document visibility state is hidden."||ae.message==="Skipping view transition because document visibility state has become hidden."||ae.message==="Skipping view transition because viewport size changed."||ae.message==="Transition was aborted because of invalid state")&&(ae=null)}ae!==null&&Y(ae)}finally{l(),f(),M()}}),_e.finished.finally(function(){for(var ae=0;ae<Ae.length;ae++)Ae[ae].cancel();oe.__reactViewTransition===_e&&(oe.__reactViewTransition=null),U()}),_e}catch{return l(),f(),M(),null}}function Uo(t,i){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+i+")"}Uo.prototype.animate=function(t,i){return i=typeof i=="number"?{duration:i}:w({},i),i.pseudoElement=this._selector,this._scope.animate(t,i)},Uo.prototype.getAnimations=function(){for(var t=this._scope,i=this._selector,r=t.getAnimations({subtree:!0}),l=[],f=0;f<r.length;f++){var h=r[f].effect;h!==null&&h.target===t&&h.pseudoElement===i&&l.push(r[f])}return l},Uo.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function y1(t){return{name:t,group:new Uo("group",t),imagePair:new Uo("image-pair",t),old:new Uo("old",t),new:new Uo("new",t)}}function ga(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ga.prototype.addEventListener=function(t,i,r){var l=null,f=null;if(!(r!=null&&typeof r!="boolean"&&(l=r.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(E1(h,t,i,r)===-1){var M=this,U=i;r!=null&&typeof r!="boolean"&&r.once===!0&&(U=function(Y){M.removeEventListener(t,i,r),typeof i=="function"?i.call(this,Y):i.handleEvent(Y)}),l!==null&&(f=M.removeEventListener.bind(M,t,i,r),l.addEventListener("abort",f,{once:!0}),f=l.removeEventListener.bind(l,"abort",f)),l=Vl(r),h.push({type:t,listener:i,optionsOrUseCapture:r,attachedListener:U,cleanup:f}),g(this._fragmentFiber.child,!1,rC,t,U,l)}this._eventListeners=h}};function rC(t,i,r,l){return S(t).addEventListener(i,r,l),!1}ga.prototype.removeEventListener=function(t,i,r){var l=this._eventListeners;if(l!==null&&(i=E1(l,t,i,r),i!==-1)){var f=l[i];r=f.attachedListener;var h=f.cleanup;f=Vl(f.optionsOrUseCapture),g(this._fragmentFiber.child,!1,sC,t,r,f),l.splice(i,1),h!==null&&h()}};function sC(t,i,r,l){return S(t).removeEventListener(i,r,l),!1}function Vl(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function M1(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function E1(t,i,r,l){if(t.length===0)return-1;l=M1(l);for(var f=0;f<t.length;f++){var h=t[f];if(h.type===i&&h.listener===r&&M1(h.optionsOrUseCapture)===l)return f}return-1}ga.prototype.dispatchEvent=function(t){var i=v(this._fragmentFiber);if(i===null)return!0;i=S(i);var r=this._eventListeners;if(r!==null&&0<r.length||!t.bubbles){var l=i.nodeType===9?i.createComment(""):document.createTextNode("");if(r)for(var f=0;f<r.length;f++){var h=r[f];l.addEventListener(h.type,h.attachedListener,Vl(h.optionsOrUseCapture))}if(i.appendChild(l),t=l.dispatchEvent(t),r)for(f=0;f<r.length;f++)h=r[f],l.removeEventListener(h.type,h.attachedListener,Vl(h.optionsOrUseCapture));return i.removeChild(l),t}return i.dispatchEvent(t)},ga.prototype.focus=function(t){g(this._fragmentFiber.child,!0,b1,t,void 0,void 0)};function b1(t,i){return t.tag===6?!1:(t=S(t),vC(t,i))}ga.prototype.focusLast=function(t){var i=[];g(this._fragmentFiber.child,!0,w0,i,void 0,void 0);for(var r=i.length-1;0<=r&&!b1(i[r],t);r--);};function w0(t,i){return i.push(t),!1}ga.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=S(t),t=yu(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,oC,t,void 0,void 0))};function oC(t,i){return t.tag===6?!1:(t=S(t),t===i||t.contains(i)?(i.blur(),!0):!1)}ga.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,lC,t,void 0,void 0)};function lC(t,i){return t.tag===6||(t=S(t),i.observe(t)),!1}ga.prototype.unobserveUsing=function(t){var i=this._observers;if(i!==null&&i.has(t)){i.delete(t),g(this._fragmentFiber.child,!1,cC,t,void 0,void 0);for(var r=i=0;r<nr.length;r++){var l=nr[r];l.fragmentInstance===this&&l.observer===t?t.unobserve(l.instance):nr[i++]=l}nr.length=i}};function cC(t,i){return t.tag===6||(t=S(t),i.unobserve(t)),!1}var nr=[],D0=!1;function uC(t,i,r){nr.push({fragmentInstance:t,observer:i,instance:r}),D0||(D0=!0,xC(function(){D0=!1;var l=nr;nr=[];for(var f=0;f<l.length;f++){var h=l[f];h.observer.unobserve(h.instance)}}))}ga.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,fC,t,void 0,void 0),t};function fC(t,i){if(t.tag===6){t=t.stateNode;var r=t.ownerDocument.createRange();r.selectNodeContents(t),i.push.apply(i,r.getClientRects())}else t=S(t),i.push.apply(i,t.getClientRects());return!1}ga.prototype.getRootNode=function(t){var i=v(this._fragmentFiber);return i===null?this:S(i).getRootNode(t)},ga.prototype.compareDocumentPosition=function(t){var i=v(this._fragmentFiber);if(i===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var r=[];g(this._fragmentFiber.child,!1,w0,r,void 0,void 0);var l=S(i);if(r.length===0){if(r=l,x(this._fragmentFiber)){e:{for(i=this._fragmentFiber.return;i!==null;){if(i.tag===4){i=i.stateNode.containerInfo;break e}if(i.tag===3||i.tag===5||i.tag===27)break;i=i.return}i=null}i!=null&&(r=i)}i=this._fragmentFiber;var f=l=r.compareDocumentPosition(t);return r===t?f=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(r=E(i)[1],r===null?f=Node.DOCUMENT_POSITION_PRECEDING:(t=S(r).compareDocumentPosition(t),f=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),f|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}i=S(r[0]),f=S(r[r.length-1]);var h=x(this._fragmentFiber)?i.parentElement:l;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=h.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(f)&Node.DOCUMENT_POSITION_CONTAINED_BY;var M=i.compareDocumentPosition(t),U=f.compareDocumentPosition(t),Y=M&Node.DOCUMENT_POSITION_CONTAINED_BY||U&Node.DOCUMENT_POSITION_CONTAINED_BY;return U=l&&h&&M&Node.DOCUMENT_POSITION_FOLLOWING&&U&Node.DOCUMENT_POSITION_PRECEDING,i=l&&i===t||h&&f===t||Y||U?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&i===t||!h&&f===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:M,i&Node.DOCUMENT_POSITION_DISCONNECTED||i&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||dC(i,this._fragmentFiber,r[0],r[r.length-1],t)?i:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function dC(t,i,r,l,f){var h=Mt(f);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(r=!!h)e:{for(;h!==null;){if(h.tag===7&&(h===i||h.alternate===i)){r=!0;break e}h=h.return}r=!1}return r}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=f.ownerDocument,f===h||f===h.documentElement||f===h.body;e:{for(h=i,i=v(i);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==i&&h.alternate!==i)){h=!0;break e}h=h.return}h=!1}return h}return t&Node.DOCUMENT_POSITION_PRECEDING?((i=!!h)&&!(i=h===r)&&(i=O(r,h,R),i===null?i=!1:(g(i,!0,z,h,r),h=y,y=null,i=h!==null)),i):t&Node.DOCUMENT_POSITION_FOLLOWING?((i=!!h)&&!(i=h===l)&&(i=O(l,h,R),i===null?i=!1:(g(i,!0,C,h,l),h=y,L=y=null,i=h!==null)),i):!1}function T1(t,i){var r=t.ownerDocument.createRange();r.selectNodeContents(t),t=r.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,i?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ga.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(a(566));var i=[];g(this._fragmentFiber.child,!1,w0,i,void 0,void 0);var r=t!==!1;if(i.length===0){var l=E(this._fragmentFiber);if(l=r?l[1]||l[0]||v(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){t=S(l),T1(t,r);return}if(l=S(l),l.nodeType!==9){if(l.nodeType===11){r="host"in l?l.host:null,r!==null&&r.scrollIntoView(t);return}l.scrollIntoView(t)}}for(l=r?i.length-1:0;l!==(r?-1:i.length);){var f=i[l];f.tag===6?(f=S(f),T1(f,r)):S(f).scrollIntoView(t),l+=r?-1:1}};function hC(t,i){return t=S(t),A1(t,i),!1}function A1(t,i){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(i)}function C1(t,i){var r=i._eventListeners;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l];t.addEventListener(f.type,f.attachedListener,Vl(f.optionsOrUseCapture))}t.nodeType!==3&&(r=i._observers,r!==null&&r.forEach(function(h){for(var M=0,U=0;U<nr.length;U++){var Y=nr[U];(Y.fragmentInstance!==i||Y.observer!==h||Y.instance!==t)&&(nr[M++]=Y)}nr.length=M,h.observe(t)}),A1(t,i))}function pC(t,i){var r=i._eventListeners;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l];t.removeEventListener(f.type,f.attachedListener,Vl(f.optionsOrUseCapture))}t.nodeType!==3&&(r=i._observers,r!==null&&r.forEach(function(h){typeof h.rootMargin=="string"?uC(i,h,t):h.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(i))}function N0(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":N0(r),ht(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function mC(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ze])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ba(t.nextSibling),t===null)break}return null}function _C(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ba(t.nextSibling),t===null))return null;return t}function R1(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ba(t.nextSibling),t===null))return null;return t}function L0(t){return t.data==="$?"||t.data==="$~"}function U0(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gC(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ba(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var O0=null;function w1(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return Ba(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function D1(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function vC(t,i){function r(){l=!0}if(t.ownerDocument.activeElement===t)return!0;var l=!1;try{t.ownerDocument.addEventListener("focus",r,!0),(t.focus||HTMLElement.prototype.focus).call(t,i)}finally{t.ownerDocument.removeEventListener("focus",r,!0)}return l}function xC(t){_1(function(){_1(function(i){return t(i)})})}function N1(t,i,r){switch(i=yu(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function L1(t,i,r){for(var l in r){var f=r[l];r.hasOwnProperty(l)&&f!=null&&dn(t,i,l,null,Z2,f)}r.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===_r&&(t.onclick=null),ht(t)}function P0(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ht(t)}var Ha=new Map,U1=new Set;function Mu(t){if(typeof t.getRootNode=="function"){var i=t.getRootNode();if(i.nodeType===9||i.nodeType===11)return i}return t.nodeType===9?t:t.ownerDocument}var ns=Ue.d;Ue.d={f:SC,r:yC,D:MC,C:EC,L:bC,m:TC,X:CC,S:AC,M:RC};function SC(){var t=ns.f(),i=Ld();return t||i}function yC(t){var i=At(t);i!==null&&i.tag===5&&i.type==="form"?PS(i):ns.r(t)}var kl=typeof document>"u"?null:document;function O1(t,i,r){var l=kl;if(l&&typeof i=="string"&&i){var f=La(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),U1.has(f)||(U1.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),xi(i,"link",t),Lt(i),l.head.appendChild(i)))}}function MC(t){ns.D(t),O1("dns-prefetch",t,null)}function EC(t,i){ns.C(t,i),O1("preconnect",t,i)}function bC(t,i,r){ns.L(t,i,r);var l=kl;if(l&&t&&i){var f='link[rel="preload"][as="'+La(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+La(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+La(r.imageSizes)+'"]')):f+='[href="'+La(t)+'"]';var h=f;switch(i){case"style":h=Xl(t);break;case"script":h=Wl(t)}if(!(Ha.has(h)||(t=w({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),Ha.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Eu(h))||i==="script"&&l.querySelector(bu(h))))){var M=l.createElement("link");xi(M,"link",t),i==="style"&&(M[ot]=!0,M.onload=M.onerror=function(){mn(M)}),Lt(M),l.head.appendChild(M)}}}function TC(t,i){ns.m(t,i);var r=kl;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+La(l)+'"][href="'+La(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Wl(t)}if(!Ha.has(h)&&(t=w({rel:"modulepreload",href:t},i),Ha.set(h,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(bu(h)))return}l=r.createElement("link"),xi(l,"link",t),Lt(l),r.head.appendChild(l)}}}function AC(t,i,r){ns.S(t,i,r);var l=kl;if(l&&t){var f=Ht(l).hoistableStyles,h=Xl(t);i=i||"default";var M=f.get(h);if(!M){var U={loading:0,preload:null};if(M=l.querySelector(Eu(h)))U.loading=5;else{t=w({rel:"stylesheet",href:t,"data-precedence":i},r),(r=Ha.get(h))&&I0(t,r);var Y=M=l.createElement("link");Lt(Y),xi(Y,"link",t),Y._p=new Promise(function(oe,_e){Y.onload=oe,Y.onerror=_e}),Y.addEventListener("load",function(){U.loading|=1}),Y.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Bd(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:U},f.set(h,M)}}}function CC(t,i){ns.X(t,i);var r=kl;if(r&&t){var l=Ht(r).hoistableScripts,f=Wl(t),h=l.get(f);h||(h=r.querySelector(bu(f)),h||(t=w({src:t,async:!0},i),(i=Ha.get(f))&&z0(t,i),h=r.createElement("script"),Lt(h),xi(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function RC(t,i){ns.M(t,i);var r=kl;if(r&&t){var l=Ht(r).hoistableScripts,f=Wl(t),h=l.get(f);h||(h=r.querySelector(bu(f)),h||(t=w({src:t,async:!0,type:"module"},i),(i=Ha.get(f))&&z0(t,i),h=r.createElement("script"),Lt(h),xi(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function P1(t,i,r,l){var f=(f=$e.current)?Mu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(r=Xl(r.href),i=Ht(f).hoistableStyles,l=i.get(r),l||(l={type:"style",instance:null,count:0,state:null},i.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Xl(r.href);var h=Ht(f).hoistableStyles,M=h.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=f.querySelector(Eu(t)))?h._p||(M.instance=h,M.state.loading=5):(h=Ha.get(t),h||(h={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ha.set(t,h)),wC(f,t,h,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(r=Wl(r),i=Ht(f).hoistableScripts,l=i.get(r),l||(l={type:"script",instance:null,count:0,state:null},i.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Xl(t){return'href="'+La(t)+'"'}function Eu(t){return'link[rel="stylesheet"]['+t+"]"}function I1(t){return w({},t,{"data-precedence":t.precedence,precedence:null})}function wC(t,i,r,l){if(i=t.querySelector('link[rel="preload"][as="style"]['+i+"]")){if(i[ot]!==!0){l.loading=1;return}}else i=t.createElement("link"),i[ot]=!0,i.onload=i.onerror=mn.bind(null,i),xi(i,"link",r),Lt(i),t.head.appendChild(i);l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2})}function Wl(t){return'[src="'+La(t)+'"]'}function bu(t){return"script[async]"+t}function z1(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+La(r.href)+'"]');if(l)return i.instance=l,Lt(l),l;var f=w({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Lt(l),xi(l,"style",f),Bd(l,r.precedence,t),i.instance=l;case"stylesheet":f=Xl(r.href);var h=t.querySelector(Eu(f));if(h)return i.state.loading|=4,i.instance=h,Lt(h),h;l=I1(r),(f=Ha.get(f))&&I0(l,f),h=(t.ownerDocument||t).createElement("link"),Lt(h);var M=h;return M._p=new Promise(function(U,Y){M.onload=U,M.onerror=Y}),xi(h,"link",l),i.state.loading|=4,Bd(h,r.precedence,t),i.instance=h;case"script":return h=Wl(r.src),(f=t.querySelector(bu(h)))?(i.instance=f,Lt(f),f):(l=r,(f=Ha.get(h))&&(l=w({},r),z0(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Lt(f),xi(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Bd(l,r.precedence,t));return i.instance}function Bd(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,M=0;M<l.length;M++){var U=l[M];if(U.dataset.precedence===i)h=U;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function I0(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function z0(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Hd=null;function F1(t,i,r){if(Hd===null){var l=new Map,f=Hd=new Map;f.set(r,l)}else f=Hd,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var h=r[f];if(!(h[Ze]||h[N]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(i)||"";M=t+M;var U=l.get(M);U?U.push(h):l.set(M,[h])}}return l}function F0(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function DC(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function B1(t,i){return t==="img"&&i.src!=null&&i.src!==""&&i.onLoad==null&&i.loading!=="lazy"}function H1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function G1(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function V1(t,i){typeof i.decode=="function"&&(t.imgCount++,i.complete||(t.imgBytes+=G1(i),t.suspenseyImages.push(i)),t=UC.bind(t),i.decode().then(t,t))}function NC(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Xl(l.href),h=i.querySelector(Eu(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Tu.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=h,Lt(h);return}h=i.ownerDocument||i,l=I1(l),(f=Ha.get(f))&&I0(l,f),h=h.createElement("link"),Lt(h);var M=h;M._p=new Promise(function(U,Y){M.onload=U,M.onerror=Y}),xi(h,"link",l),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Tu.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Gd=0;function LC(t,i){return t.stylesheets&&t.count===0&&kd(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&kd(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Gd===0&&(Gd=62500*K2());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kd(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Gd?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function k1(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)kd(t,t.stylesheets);else if(t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}}}function Tu(){this.count--,k1(this)}function UC(){this.imgCount--,k1(this)}var Vd=null;function kd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vd=new Map,i.forEach(OC,t),Vd=null,Tu.call(t))}function OC(t,i){if(!(i.state.loading&4)){var r=Vd.get(t);if(r)var l=r.get(null);else{r=new Map,Vd.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var M=f[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),h=r.get(M)||l,h===l&&r.set(null,f),r.set(M,f),this.count++,l=Tu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Yl={$$typeof:j,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function PC(t,i,r,l,f,h,M,U,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yn(0),this.hiddenUpdates=Yn(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.transitionTypes=null,this.incompleteTransitions=new Map}function X1(t,i,r,l,f,h,M,U,Y,oe,_e,Ae){return t=new PC(t,i,r,M,Y,oe,_e,Ae,U),i=1,h===!0&&(i|=24),h=Zi(3,null,null,i),t.current=h,h.stateNode=t,i=$p(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:r,cache:i},im(h),t}function W1(t){return t?(t=vl,t):vl}function Y1(t,i,r,l,f,h){f=W1(f),l.context===null?l.context=f:l.pendingContext=f,l=Rs(i),l.payload={element:r},h=h===void 0?null:h,h!==null&&(l.callback=h),r=ws(t,l,i),r!==null&&(Ji(r,t,i),nu(r,t,i))}function q1(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function B0(t,i){q1(t,i),(t=t.alternate)&&q1(t,i)}function Z1(t){if(t.tag===13||t.tag===31){var i=_o(t,67108864);i!==null&&Ji(i,t,67108864),B0(t,67108864)}}function j1(t){if(t.tag===13||t.tag===31){var i=_a();i=pr(i);var r=_o(t,i);r!==null&&Ji(r,t,i),B0(t,i)}}var ql=!0;function IC(t,i,r,l){var f=ve.T;ve.T=null;var h=Ue.p;try{Ue.p=2,H0(t,i,r,l)}finally{Ue.p=h,ve.T=f}}function zC(t,i,r,l){var f=ve.T;ve.T=null;var h=Ue.p;try{Ue.p=8,H0(t,i,r,l)}finally{Ue.p=h,ve.T=f}}function H0(t,i,r,l){if(ql){var f=G0(l);if(f===null)y0(t,i,l,Xd,r),Q1(t,l);else if(BC(f,t,i,r,l))l.stopPropagation();else if(Q1(t,l),i&4&&-1<FC.indexOf(t)){for(;f!==null;){var h=At(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Sn(h.pendingLanes);if(M!==0){var U=h;for(U.pendingLanes|=2,U.entangledLanes|=2;M;){var Y=1<<31-we(M);U.entanglements[1]|=Y,M&=~Y}Ar(h),(en&6)===0&&(wd=Re()+500,vu(0))}}break;case 31:case 13:U=_o(h,2),U!==null&&Ji(U,h,2),Ld(),B0(h,2)}if(h=G0(l),h===null&&y0(t,i,l,Xd,r),h===f)break;f=h}f!==null&&l.stopPropagation()}else y0(t,i,l,null,r)}}function G0(t){return t=Ap(t),V0(t)}var Xd=null;function V0(t){if(Xd=null,t=Mt(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=d(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Xd=t,null}function K1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case Ke:return 2;case $:return 8;case ze:case Me:return 32;case He:return 268435456;default:return 32}default:return 32}}var k0=!1,Gs=null,Vs=null,ks=null,Au=new Map,Cu=new Map,Xs=[],FC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q1(t,i){switch(t){case"focusin":case"focusout":Gs=null;break;case"dragenter":case"dragleave":Vs=null;break;case"mouseover":case"mouseout":ks=null;break;case"pointerover":case"pointerout":Au.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cu.delete(i.pointerId)}}function Ru(t,i,r,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=At(i),i!==null&&Z1(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function BC(t,i,r,l,f){switch(i){case"focusin":return Gs=Ru(Gs,t,i,r,l,f),!0;case"dragenter":return Vs=Ru(Vs,t,i,r,l,f),!0;case"mouseover":return ks=Ru(ks,t,i,r,l,f),!0;case"pointerover":var h=f.pointerId;return Au.set(h,Ru(Au.get(h)||null,t,i,r,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Cu.set(h,Ru(Cu.get(h)||null,t,i,r,l,f)),!0}return!1}function J1(t){var i=Mt(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,Pi(t.priority,function(){j1(r)});return}}else if(i===31){if(i=d(r),i!==null){t.blockedOn=i,Pi(t.priority,function(){j1(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wd(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=G0(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Tp=l,r.target.dispatchEvent(l),Tp=null}else return i=At(r),i!==null&&Z1(i),t.blockedOn=r,!1;i.shift()}return!0}function $1(t,i,r){Wd(t)&&r.delete(i)}function HC(){k0=!1,Gs!==null&&Wd(Gs)&&(Gs=null),Vs!==null&&Wd(Vs)&&(Vs=null),ks!==null&&Wd(ks)&&(ks=null),Au.forEach($1),Cu.forEach($1)}function Yd(t,i){t.blockedOn===i&&(t.blockedOn=null,k0||(k0=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HC)))}var qd=null;function eM(t){qd!==t&&(qd=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qd===t&&(qd=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(V0(l||r)===null)continue;break}var h=At(r);h!==null&&(t.splice(i,3),i-=3,bm(h,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Zl(t){function i(Y){return Yd(Y,t)}Gs!==null&&Yd(Gs,t),Vs!==null&&Yd(Vs,t),ks!==null&&Yd(ks,t),Au.forEach(i),Cu.forEach(i);for(var r=0;r<Xs.length;r++){var l=Xs[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Xs.length&&(r=Xs[0],r.blockedOn===null);)J1(r),r.blockedOn===null&&Xs.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],h=r[l+1],M=f[K]||null;if(typeof h=="function")M||eM(r);else if(M){var U=null;if(h&&h.hasAttribute("formAction")){if(f=h,M=h[K]||null)U=M.formAction;else if(V0(f)!==null)continue}else U=M.action;typeof U=="function"?r[l+1]=U:(r.splice(l,3),l-=3),eM(r)}}}function tM(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function X0(t){this._internalRoot=t}Zd.prototype.render=X0.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=_a();Y1(r,l,t,i,null,null)},Zd.prototype.unmount=X0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Y1(t.current,2,null,t,null,null),Ld(),i[he]=null}};function Zd(t){this._internalRoot=t}Zd.prototype.unstable_scheduleHydration=function(t){if(t){var i=An();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Xs.length&&i!==0&&i<Xs[r].priority;r++);Xs.splice(r,0,t),r===0&&J1(t)}};var nM=e.version;if(nM!=="19.3.1")throw Error(a(527,nM,"19.3.1"));Ue.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var GC={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ve,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jd.isDisabled&&jd.supportsFiber)try{Oe=jd.inject(GC),be=jd}catch{}}return Du.createRoot=function(t,i){if(!s(t))throw Error(a(299));var r=!1,l="",f=WS,h=YS,M=qS;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=X1(t,1,!1,null,null,r,l,null,f,h,M,tM),t[he]=i.current,S0(t),new X0(i)},Du.hydrateRoot=function(t,i,r){if(!s(t))throw Error(a(299));var l=!1,f="",h=WS,M=YS,U=qS,Y=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(U=r.onRecoverableError),r.formState!==void 0&&(Y=r.formState)),i=X1(t,1,!0,i,r??null,l,f,Y,h,M,U,tM),i.context=W1(null),r=i.current,l=_a(),l=pr(l),f=Rs(l),f.callback=null,ws(r,f,l),r=l,i.current.lanes=r,Vn(i,r),Ar(i),t[he]=i.current,S0(t),new Zd(i)},Du.version="19.3.1",Du}var dM;function QC(){if(dM)return q0.exports;dM=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),q0.exports=KC(),q0.exports}var JC=QC();const $C=eb(JC);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uv="186",e3=0,hM=1,t3=2,Uh=1,n3=2,Vu=3,tl=0,na=1,Lr=2,ds=0,Qu=1,pM=2,mM=3,_M=4,i3=5,hc=100,a3=101,r3=102,s3=103,o3=104,l3=200,c3=201,u3=202,f3=203,nb=204,ib=205,d3=206,h3=207,p3=208,m3=209,_3=210,g3=211,v3=212,x3=213,S3=214,j_=0,K_=1,Q_=2,ff=3,J_=4,$_=5,eg=6,tg=7,ab=0,y3=1,M3=2,Fr=0,rb=1,sb=2,ob=3,lb=4,cb=5,ub=6,fb=7,db=300,nl=301,Dc=302,Q0=303,J0=304,hp=306,ng=1e3,lr=1001,ig=1002,yi=1003,E3=1004,Kd=1005,Li=1006,$0=1007,Xo=1008,qa=1009,hb=1010,pb=1011,df=1012,fv=1013,Hr=1014,Or=1015,Gr=1016,dv=1017,hv=1018,hf=1020,mb=35902,_b=35899,gb=1021,vb=1022,cr=1023,_s=1026,Wo=1027,xb=1028,pv=1029,il=1030,mv=1031,_v=1033,Oh=33776,Ph=33777,Ih=33778,zh=33779,ag=35840,rg=35841,sg=35842,og=35843,lg=36196,cg=37492,ug=37496,fg=37488,dg=37489,jh=37490,hg=37491,pg=37808,mg=37809,_g=37810,gg=37811,vg=37812,xg=37813,Sg=37814,yg=37815,Mg=37816,Eg=37817,bg=37818,Tg=37819,Ag=37820,Cg=37821,Rg=36492,wg=36494,Dg=36495,Ng=36283,Lg=36284,Kh=36285,Ug=36286,b3=3200,gM=0,T3=1,$s="",ka="srgb",Qh="srgb-linear",Jh="linear",pn="srgb",e_=7680,A3=519,C3=512,R3=513,w3=514,gv=515,D3=516,N3=517,vv=518,L3=519,U3=35044,vM="300 es",Pr=2e3,$h=2001;function O3(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function pf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function P3(){const o=pf("canvas");return o.style.display="block",o}const xM={};function SM(...o){const e="THREE."+o.shift();console.log(e,...o)}function Sb(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Tt(...o){o=Sb(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...o)}}function Jt(...o){o=Sb(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...o)}}function yc(...o){const e=o.join(" ");e in xM||(xM[e]=!0,Tt(...o))}function I3(o,e,n){return new Promise(function(a,s){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const z3={[j_]:K_,[Q_]:eg,[J_]:tg,[ff]:$_,[K_]:j_,[eg]:Q_,[tg]:J_,[$_]:ff};class ll{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const c=s.indexOf(n);c!==-1&&s.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let c=0,u=s.length;c<u;c++)s[c].call(this,e);e.target=null}}}const Ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],t_=Math.PI/180,Og=180/Math.PI;function Cf(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ai[o&255]+Ai[o>>8&255]+Ai[o>>16&255]+Ai[o>>24&255]+"-"+Ai[e&255]+Ai[e>>8&255]+"-"+Ai[e>>16&15|64]+Ai[e>>24&255]+"-"+Ai[n&63|128]+Ai[n>>8&255]+"-"+Ai[n>>16&255]+Ai[n>>24&255]+Ai[a&255]+Ai[a>>8&255]+Ai[a>>16&255]+Ai[a>>24&255]).toLowerCase()}function Zt(o,e,n){return Math.max(e,Math.min(n,o))}function F3(o,e){return(o%e+e)%e}function n_(o,e,n){return(1-n)*o+n*e}function Nu(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $i(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jv=class jv{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,s=e.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Zt(this.x,e.x,n.x),this.y=Zt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Zt(this.x,e,n),this.y=Zt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Zt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Zt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),s=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*s+e.x,this.y=c*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jv.prototype.isVector2=!0;let nn=jv;class Bc{constructor(e=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=s}static slerpFlat(e,n,a,s,c,u,d){let p=a[s+0],m=a[s+1],_=a[s+2],g=a[s+3],v=c[u+0],x=c[u+1],E=c[u+2],b=c[u+3];if(g!==b||p!==v||m!==x||_!==E){let S=p*v+m*x+_*E+g*b;S<0&&(v=-v,x=-x,E=-E,b=-b,S=-S);let y=1-d;if(S<.9995){const L=Math.acos(S),z=Math.sin(L);y=Math.sin(y*L)/z,d=Math.sin(d*L)/z,p=p*y+v*d,m=m*y+x*d,_=_*y+E*d,g=g*y+b*d}else{p=p*y+v*d,m=m*y+x*d,_=_*y+E*d,g=g*y+b*d;const L=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=L,m*=L,_*=L,g*=L}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,s,c,u){const d=a[s],p=a[s+1],m=a[s+2],_=a[s+3],g=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[n]=d*E+_*g+p*x-m*v,e[n+1]=p*E+_*v+m*g-d*x,e[n+2]=m*E+_*x+d*v-p*g,e[n+3]=_*E-d*g-p*v-m*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,s){return this._x=e,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,s=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(a/2),_=d(s/2),g=d(c/2),v=p(a/2),x=p(s/2),E=p(c/2);switch(u){case"XYZ":this._x=v*_*g+m*x*E,this._y=m*x*g-v*_*E,this._z=m*_*E+v*x*g,this._w=m*_*g-v*x*E;break;case"YXZ":this._x=v*_*g+m*x*E,this._y=m*x*g-v*_*E,this._z=m*_*E-v*x*g,this._w=m*_*g+v*x*E;break;case"ZXY":this._x=v*_*g-m*x*E,this._y=m*x*g+v*_*E,this._z=m*_*E+v*x*g,this._w=m*_*g-v*x*E;break;case"ZYX":this._x=v*_*g-m*x*E,this._y=m*x*g+v*_*E,this._z=m*_*E-v*x*g,this._w=m*_*g+v*x*E;break;case"YZX":this._x=v*_*g+m*x*E,this._y=m*x*g+v*_*E,this._z=m*_*E-v*x*g,this._w=m*_*g-v*x*E;break;case"XZY":this._x=v*_*g-m*x*E,this._y=m*x*g-v*_*E,this._z=m*_*E+v*x*g,this._w=m*_*g+v*x*E;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],s=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],_=n[6],g=n[10],v=a+d+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(_-p)*x,this._y=(c-m)*x,this._z=(u-s)*x}else if(a>d&&a>g){const x=2*Math.sqrt(1+a-d-g);this._w=(_-p)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(c+m)/x}else if(d>g){const x=2*Math.sqrt(1+d-a-g);this._w=(c-m)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+g-a-d);this._w=(u-s)/x,this._x=(c+m)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,s=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=a*_+u*d+s*m-c*p,this._y=s*_+u*p+c*d-a*m,this._z=c*_+u*m+a*p-s*d,this._w=u*_-a*d-s*p-c*m,this._onChangeCallback(),this}slerp(e,n){let a=e._x,s=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,s=-s,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,n=Math.sin(n*m)/_,this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kv=class Kv{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yM.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yM.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,s=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*s,this.y=c[1]*n+c[4]*a+c[7]*s,this.z=c[2]*n+c[5]*a+c[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,s=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*s+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*s+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*s+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*s+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,s=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*s-d*a),_=2*(d*n-c*s),g=2*(c*a-u*n);return this.x=n+p*m+u*g-d*_,this.y=a+p*_+d*m-c*g,this.z=s+p*g+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,s=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*s,this.y=c[1]*n+c[5]*a+c[9]*s,this.z=c[2]*n+c[6]*a+c[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Zt(this.x,e.x,n.x),this.y=Zt(this.y,e.y,n.y),this.z=Zt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Zt(this.x,e,n),this.y=Zt(this.y,e,n),this.z=Zt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Zt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,s=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=s*p-c*d,this.y=c*u-a*p,this.z=a*d-s*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return i_.copy(this).projectOnVector(e),this.sub(i_)}reflect(e){return this.sub(i_.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Zt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return n*n+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const s=Math.sin(n)*e;return this.x=s*Math.sin(a),this.y=Math.cos(n)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kv.prototype.isVector3=!0;let xe=Kv;const i_=new xe,yM=new Bc,Qv=class Qv{constructor(e,n,a,s,c,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,s,c,u,d,p,m)}set(e,n,a,s,c,u,d,p,m){const _=this.elements;return _[0]=e,_[1]=s,_[2]=d,_[3]=n,_[4]=c,_[5]=p,_[6]=a,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,s=n.elements,c=this.elements,u=a[0],d=a[3],p=a[6],m=a[1],_=a[4],g=a[7],v=a[2],x=a[5],E=a[8],b=s[0],S=s[3],y=s[6],L=s[1],z=s[4],C=s[7],R=s[2],O=s[5],w=s[8];return c[0]=u*b+d*L+p*R,c[3]=u*S+d*z+p*O,c[6]=u*y+d*C+p*w,c[1]=m*b+_*L+g*R,c[4]=m*S+_*z+g*O,c[7]=m*y+_*C+g*w,c[2]=v*b+x*L+E*R,c[5]=v*S+x*z+E*O,c[8]=v*y+x*C+E*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],s=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*u*_-n*d*m-a*c*_+a*d*p+s*c*m-s*u*p}invert(){const e=this.elements,n=e[0],a=e[1],s=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],g=_*u-d*m,v=d*p-_*c,x=m*c-u*p,E=n*g+a*v+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=g*b,e[1]=(s*m-_*a)*b,e[2]=(d*a-s*u)*b,e[3]=v*b,e[4]=(_*n-s*p)*b,e[5]=(s*c-d*n)*b,e[6]=x*b,e[7]=(a*p-m*n)*b,e[8]=(u*n-a*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,s,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*u+m*d)+u+e,-s*m,s*p,-s*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return yc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(a_.makeScale(e,n)),this}rotate(e){return yc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(a_.makeRotation(-e)),this}translate(e,n){return yc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(a_.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qv.prototype.isMatrix3=!0;let Ct=Qv;const a_=new Ct,MM=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),EM=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B3(){const o={enabled:!0,workingColorSpace:Qh,spaces:{},convert:function(s,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===pn&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[c].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===pn&&(s.r=Mc(s.r),s.g=Mc(s.g),s.b=Mc(s.b))),s},workingToColorSpace:function(s,c){return this.convert(s,this.workingColorSpace,c)},colorSpaceToWorking:function(s,c){return this.convert(s,c,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$s?Jh:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,c=this.workingColorSpace){return s.fromArray(this.spaces[c].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,c,u){return s.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,c){return yc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,c)},toWorkingColorSpace:function(s,c){return yc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Qh]:{primaries:e,whitePoint:a,transfer:Jh,toXYZ:MM,fromXYZ:EM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ka},outputColorSpaceConfig:{drawingBufferColorSpace:ka}},[ka]:{primaries:e,whitePoint:a,transfer:pn,toXYZ:MM,fromXYZ:EM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ka}}}),o}const qt=B3();function hs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let jl;class H3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{jl===void 0&&(jl=pf("canvas")),jl.width=e.width,jl.height=e.height;const s=jl.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=jl}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pf("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),c=s.data;for(let u=0;u<c.length;u++)c[u]=hs(c[u]/255)*255;return a.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(hs(n[a]/255)*255):n[a]=hs(n[a]);return{data:n,width:e.width,height:e.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G3=0;class xv{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:G3++}),this.uuid=Cf(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let c;if(Array.isArray(s)){c=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?c.push(r_(s[u].image)):c.push(r_(s[u]))}else c=r_(s);a.url=c}return n||(e.images[this.uuid]=a),a}}function r_(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?H3.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}let V3=0;const s_=new xe;class Ui extends ll{constructor(e=Ui.DEFAULT_IMAGE,n=Ui.DEFAULT_MAPPING,a=lr,s=lr,c=Li,u=Xo,d=cr,p=qa,m=Ui.DEFAULT_ANISOTROPY,_=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V3++}),this.uuid=Cf(),this.name="",this.source=new xv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new nn(0,0),this.repeat=new nn(1,1),this.center=new nn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(s_).x}get height(){return this.source.getSize(s_).y}get depth(){return this.source.getSize(s_).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Tt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Tt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==db)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ng:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case ig:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ng:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case ig:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ui.DEFAULT_IMAGE=null;Ui.DEFAULT_MAPPING=db;Ui.DEFAULT_ANISOTROPY=1;const Jv=class Jv{constructor(e=0,n=0,a=0,s=1){this.x=e,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,s){return this.x=e,this.y=n,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,s=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*s+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*s+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*s+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*s+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,s,c;const p=e.elements,m=p[0],_=p[4],g=p[8],v=p[1],x=p[5],E=p[9],b=p[2],S=p[6],y=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+b)<.1&&Math.abs(E+S)<.1&&Math.abs(m+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(m+1)/2,C=(x+1)/2,R=(y+1)/2,O=(_+v)/4,w=(g+b)/4,T=(E+S)/4;return z>C&&z>R?z<.01?(a=0,s=.707106781,c=.707106781):(a=Math.sqrt(z),s=O/a,c=w/a):C>R?C<.01?(a=.707106781,s=0,c=.707106781):(s=Math.sqrt(C),a=O/s,c=T/s):R<.01?(a=.707106781,s=.707106781,c=0):(c=Math.sqrt(R),a=w/c,s=T/c),this.set(a,s,c,n),this}let L=Math.sqrt((S-E)*(S-E)+(g-b)*(g-b)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(g-b)/L,this.z=(v-_)/L,this.w=Math.acos((m+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Zt(this.x,e.x,n.x),this.y=Zt(this.y,e.y,n.y),this.z=Zt(this.z,e.z,n.z),this.w=Zt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Zt(this.x,e,n),this.y=Zt(this.y,e,n),this.z=Zt(this.z,e,n),this.w=Zt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Zt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jv.prototype.isVector4=!0;let Hn=Jv;class k3 extends ll{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Hn(0,0,e,n),this.scissorTest=!1,this.viewport=new Hn(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:a.depth},c=new Ui(s),u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let s=0,c=this.textures.length;s<c;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new xv(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends k3{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class yb extends Ui{constructor(e=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:s},this.magFilter=yi,this.minFilter=yi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X3 extends Ui{constructor(e=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:s},this.magFilter=yi,this.minFilter=yi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const dp=class dp{constructor(e,n,a,s,c,u,d,p,m,_,g,v,x,E,b,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,s,c,u,d,p,m,_,g,v,x,E,b,S)}set(e,n,a,s,c,u,d,p,m,_,g,v,x,E,b,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=s,y[1]=c,y[5]=u,y[9]=d,y[13]=p,y[2]=m,y[6]=_,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dp().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,s=1/Kl.setFromMatrixColumn(e,0).length(),c=1/Kl.setFromMatrixColumn(e,1).length(),u=1/Kl.setFromMatrixColumn(e,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,s=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),p=Math.cos(s),m=Math.sin(s),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*_,x=u*g,E=d*_,b=d*g;n[0]=p*_,n[4]=-p*g,n[8]=m,n[1]=x+E*m,n[5]=v-b*m,n[9]=-d*p,n[2]=b-v*m,n[6]=E+x*m,n[10]=u*p}else if(e.order==="YXZ"){const v=p*_,x=p*g,E=m*_,b=m*g;n[0]=v+b*d,n[4]=E*d-x,n[8]=u*m,n[1]=u*g,n[5]=u*_,n[9]=-d,n[2]=x*d-E,n[6]=b+v*d,n[10]=u*p}else if(e.order==="ZXY"){const v=p*_,x=p*g,E=m*_,b=m*g;n[0]=v-b*d,n[4]=-u*g,n[8]=E+x*d,n[1]=x+E*d,n[5]=u*_,n[9]=b-v*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const v=u*_,x=u*g,E=d*_,b=d*g;n[0]=p*_,n[4]=E*m-x,n[8]=v*m+b,n[1]=p*g,n[5]=b*m+v,n[9]=x*m-E,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*m,E=d*p,b=d*m;n[0]=p*_,n[4]=b-v*g,n[8]=E*g+x,n[1]=g,n[5]=u*_,n[9]=-d*_,n[2]=-m*_,n[6]=x*g+E,n[10]=v-b*g}else if(e.order==="XZY"){const v=u*p,x=u*m,E=d*p,b=d*m;n[0]=p*_,n[4]=-g,n[8]=m*_,n[1]=v*g+b,n[5]=u*_,n[9]=x*g-E,n[2]=E*g-x,n[6]=d*_,n[10]=b*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W3,e,Y3)}lookAt(e,n,a){const s=this.elements;return va.subVectors(e,n),va.lengthSq()===0&&(va.z=1),va.normalize(),Ys.crossVectors(a,va),Ys.lengthSq()===0&&(Math.abs(a.z)===1?va.x+=1e-4:va.z+=1e-4,va.normalize(),Ys.crossVectors(a,va)),Ys.normalize(),Qd.crossVectors(va,Ys),s[0]=Ys.x,s[4]=Qd.x,s[8]=va.x,s[1]=Ys.y,s[5]=Qd.y,s[9]=va.y,s[2]=Ys.z,s[6]=Qd.z,s[10]=va.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,s=n.elements,c=this.elements,u=a[0],d=a[4],p=a[8],m=a[12],_=a[1],g=a[5],v=a[9],x=a[13],E=a[2],b=a[6],S=a[10],y=a[14],L=a[3],z=a[7],C=a[11],R=a[15],O=s[0],w=s[4],T=s[8],D=s[12],I=s[1],V=s[5],H=s[9],q=s[13],W=s[2],j=s[6],X=s[10],G=s[14],te=s[3],ne=s[7],P=s[11],me=s[15];return c[0]=u*O+d*I+p*W+m*te,c[4]=u*w+d*V+p*j+m*ne,c[8]=u*T+d*H+p*X+m*P,c[12]=u*D+d*q+p*G+m*me,c[1]=_*O+g*I+v*W+x*te,c[5]=_*w+g*V+v*j+x*ne,c[9]=_*T+g*H+v*X+x*P,c[13]=_*D+g*q+v*G+x*me,c[2]=E*O+b*I+S*W+y*te,c[6]=E*w+b*V+S*j+y*ne,c[10]=E*T+b*H+S*X+y*P,c[14]=E*D+b*q+S*G+y*me,c[3]=L*O+z*I+C*W+R*te,c[7]=L*w+z*V+C*j+R*ne,c[11]=L*T+z*H+C*X+R*P,c[15]=L*D+z*q+C*G+R*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],s=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],_=e[2],g=e[6],v=e[10],x=e[14],E=e[3],b=e[7],S=e[11],y=e[15],L=p*x-m*v,z=d*x-m*g,C=d*v-p*g,R=u*x-m*_,O=u*v-p*_,w=u*g-d*_;return n*(b*L-S*z+y*C)-a*(E*L-S*R+y*O)+s*(E*z-b*R+y*w)-c*(E*C-b*O+S*w)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],s=e[8],c=e[1],u=e[5],d=e[9],p=e[2],m=e[6],_=e[10];return n*(u*_-d*m)-a*(c*_-d*p)+s*(c*m-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],s=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],g=e[9],v=e[10],x=e[11],E=e[12],b=e[13],S=e[14],y=e[15],L=n*d-a*u,z=n*p-s*u,C=n*m-c*u,R=a*p-s*d,O=a*m-c*d,w=s*m-c*p,T=_*b-g*E,D=_*S-v*E,I=_*y-x*E,V=g*S-v*b,H=g*y-x*b,q=v*y-x*S,W=L*q-z*H+C*V+R*I-O*D+w*T;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/W;return e[0]=(d*q-p*H+m*V)*j,e[1]=(s*H-a*q-c*V)*j,e[2]=(b*w-S*O+y*R)*j,e[3]=(v*O-g*w-x*R)*j,e[4]=(p*I-u*q-m*D)*j,e[5]=(n*q-s*I+c*D)*j,e[6]=(S*C-E*w-y*z)*j,e[7]=(_*w-v*C+x*z)*j,e[8]=(u*H-d*I+m*T)*j,e[9]=(a*I-n*H-c*T)*j,e[10]=(E*O-b*C+y*L)*j,e[11]=(g*C-_*O-x*L)*j,e[12]=(d*D-u*V-p*T)*j,e[13]=(n*V-a*D+s*T)*j,e[14]=(b*z-E*R-S*L)*j,e[15]=(_*R-g*z+v*L)*j,this}scale(e){const n=this.elements,a=e.x,s=e.y,c=e.z;return n[0]*=a,n[4]*=s,n[8]*=c,n[1]*=a,n[5]*=s,n[9]*=c,n[2]*=a,n[6]*=s,n[10]*=c,n[3]*=a,n[7]*=s,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),s=Math.sin(n),c=1-a,u=e.x,d=e.y,p=e.z,m=c*u,_=c*d;return this.set(m*u+a,m*d-s*p,m*p+s*d,0,m*d+s*p,_*d+a,_*p-s*u,0,m*p-s*d,_*p+s*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,s,c,u){return this.set(1,a,c,0,e,1,u,0,n,s,1,0,0,0,0,1),this}compose(e,n,a){const s=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,_=u+u,g=d+d,v=c*m,x=c*_,E=c*g,b=u*_,S=u*g,y=d*g,L=p*m,z=p*_,C=p*g,R=a.x,O=a.y,w=a.z;return s[0]=(1-(b+y))*R,s[1]=(x+C)*R,s[2]=(E-z)*R,s[3]=0,s[4]=(x-C)*O,s[5]=(1-(v+y))*O,s[6]=(S+L)*O,s[7]=0,s[8]=(E+z)*w,s[9]=(S-L)*w,s[10]=(1-(v+b))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,a){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Kl.set(s[0],s[1],s[2]).length();const d=Kl.set(s[4],s[5],s[6]).length(),p=Kl.set(s[8],s[9],s[10]).length();c<0&&(u=-u),ir.copy(this);const m=1/u,_=1/d,g=1/p;return ir.elements[0]*=m,ir.elements[1]*=m,ir.elements[2]*=m,ir.elements[4]*=_,ir.elements[5]*=_,ir.elements[6]*=_,ir.elements[8]*=g,ir.elements[9]*=g,ir.elements[10]*=g,n.setFromRotationMatrix(ir),a.x=u,a.y=d,a.z=p,this}makePerspective(e,n,a,s,c,u,d=Pr,p=!1){const m=this.elements,_=2*c/(n-e),g=2*c/(a-s),v=(n+e)/(n-e),x=(a+s)/(a-s);let E,b;if(p)E=c/(u-c),b=u*c/(u-c);else if(d===Pr)E=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(d===$h)E=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,a,s,c,u,d=Pr,p=!1){const m=this.elements,_=2/(n-e),g=2/(a-s),v=-(n+e)/(n-e),x=-(a+s)/(a-s);let E,b;if(p)E=1/(u-c),b=u/(u-c);else if(d===Pr)E=-2/(u-c),b=-(u+c)/(u-c);else if(d===$h)E=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};dp.prototype.isMatrix4=!0;let ei=dp;const Kl=new xe,ir=new ei,W3=new xe(0,0,0),Y3=new xe(1,1,1),Ys=new xe,Qd=new xe,va=new xe,bM=new ei,TM=new Bc;class al{constructor(e=0,n=0,a=0,s=al.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,s=this._order){return this._x=e,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const s=e.elements,c=s[0],u=s[4],d=s[8],p=s[1],m=s[5],_=s[9],g=s[2],v=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Zt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return bM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bM,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return TM.setFromEuler(this),this.setFromQuaternion(TM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}al.DEFAULT_ORDER="XYZ";class Mb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q3=0;const AM=new xe,Ql=new Bc,is=new ei,Jd=new xe,Lu=new xe,Z3=new xe,j3=new Bc,CM=new xe(1,0,0),RM=new xe(0,1,0),wM=new xe(0,0,1),DM={type:"added"},K3={type:"removed"},Jl={type:"childadded",child:null},o_={type:"childremoved",child:null};class Ra extends ll{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q3++}),this.uuid=Cf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ra.DEFAULT_UP.clone();const e=new xe,n=new al,a=new Bc,s=new xe(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ei},normalMatrix:{value:new Ct}}),this.matrix=new ei,this.matrixWorld=new ei,this.matrixAutoUpdate=Ra.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ra.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ql.setFromAxisAngle(e,n),this.quaternion.multiply(Ql),this}rotateOnWorldAxis(e,n){return Ql.setFromAxisAngle(e,n),this.quaternion.premultiply(Ql),this}rotateX(e){return this.rotateOnAxis(CM,e)}rotateY(e){return this.rotateOnAxis(RM,e)}rotateZ(e){return this.rotateOnAxis(wM,e)}translateOnAxis(e,n){return AM.copy(e).applyQuaternion(this.quaternion),this.position.add(AM.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(CM,e)}translateY(e){return this.translateOnAxis(RM,e)}translateZ(e){return this.translateOnAxis(wM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Jd.copy(e):Jd.set(e,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Lu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Lu,Jd,this.up):is.lookAt(Jd,Lu,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Ql.setFromRotationMatrix(is),this.quaternion.premultiply(Ql.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(DM),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(K3),o_.child=e,this.dispatchEvent(o_),o_.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(DM),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const s=this.children;for(let c=0,u=s.length;c<u;c++)s[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lu,e,Z3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lu,j3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,s=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*s,c[13]+=a-c[1]*n-c[5]*a-c[9]*s,c[14]+=s-c[2]*n-c[6]*a-c[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));s.material=d}else s.material=c(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];s.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=s,a;function u(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ra.DEFAULT_UP=new xe(0,1,0);Ra.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ra.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $d extends Ra{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q3={type:"move"};class l_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $d,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $d,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new xe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new xe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $d,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new xe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new xe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let s=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const b of e.hand.values()){const S=n.getJointPose(b,a),y=this._getHandJoint(m,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),x=.02,E=.005;m.inputState.pinching&&v>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=n.getPose(e.targetRaySpace,a),s===null&&c!==null&&(s=c),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Q3)))}return d!==null&&(d.visible=s!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new $d;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const Eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qs={h:0,s:0,l:0},eh={h:0,s:0,l:0};function c_(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class tn{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ka){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,s=qt.workingColorSpace){return this.r=e,this.g=n,this.b=a,qt.colorSpaceToWorking(this,s),this}setHSL(e,n,a,s=qt.workingColorSpace){if(e=F3(e,1),n=Zt(n,0,1),a=Zt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=c_(u,c,e+1/3),this.g=c_(u,c,e),this.b=c_(u,c,e-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(e,n=ka){function a(c){c!==void 0&&parseFloat(c)<1&&Tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=s[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ka){const a=Eb[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Mc(e.r),this.g=Mc(e.g),this.b=Mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ka){return qt.workingToColorSpace(Ci.copy(this),e),Math.round(Zt(Ci.r*255,0,255))*65536+Math.round(Zt(Ci.g*255,0,255))*256+Math.round(Zt(Ci.b*255,0,255))}getHexString(e=ka){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qt.workingColorSpace){qt.workingToColorSpace(Ci.copy(this),n);const a=Ci.r,s=Ci.g,c=Ci.b,u=Math.max(a,s,c),d=Math.min(a,s,c);let p,m;const _=(d+u)/2;if(d===u)p=0,m=0;else{const g=u-d;switch(m=_<=.5?g/(u+d):g/(2-u-d),u){case a:p=(s-c)/g+(s<c?6:0);break;case s:p=(c-a)/g+2;break;case c:p=(a-s)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=qt.workingColorSpace){return qt.workingToColorSpace(Ci.copy(this),n),e.r=Ci.r,e.g=Ci.g,e.b=Ci.b,e}getStyle(e=ka){qt.workingToColorSpace(Ci.copy(this),e);const n=Ci.r,a=Ci.g,s=Ci.b;return e!==ka?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,n,a){return this.getHSL(qs),this.setHSL(qs.h+e,qs.s+n,qs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(qs),e.getHSL(eh);const a=n_(qs.h,eh.h,n),s=n_(qs.s,eh.s,n),c=n_(qs.l,eh.l,n);return this.setHSL(a,s,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,s=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*s,this.g=c[1]*n+c[4]*a+c[7]*s,this.b=c[2]*n+c[5]*a+c[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ci=new tn;tn.NAMES=Eb;class J3 extends Ra{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new al,this.environmentIntensity=1,this.environmentRotation=new al,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ar=new xe,as=new xe,u_=new xe,rs=new xe,$l=new xe,ec=new xe,NM=new xe,f_=new xe,d_=new xe,h_=new xe,p_=new Hn,m_=new Hn,__=new Hn;class or{constructor(e=new xe,n=new xe,a=new xe){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,s){s.subVectors(a,n),ar.subVectors(e,n),s.cross(ar);const c=s.lengthSq();return c>0?s.multiplyScalar(1/Math.sqrt(c)):s.set(0,0,0)}static getBarycoord(e,n,a,s,c){ar.subVectors(s,n),as.subVectors(a,n),u_.subVectors(e,n);const u=ar.dot(ar),d=ar.dot(as),p=ar.dot(u_),m=as.dot(as),_=as.dot(u_),g=u*m-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,x=(m*p-d*_)*v,E=(u*_-d*p)*v;return c.set(1-x-E,E,x)}static containsPoint(e,n,a,s){return this.getBarycoord(e,n,a,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,n,a,s,c,u,d,p){return this.getBarycoord(e,n,a,s,rs)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,rs.x),p.addScaledVector(u,rs.y),p.addScaledVector(d,rs.z),p)}static getInterpolatedAttribute(e,n,a,s,c,u){return p_.setScalar(0),m_.setScalar(0),__.setScalar(0),p_.fromBufferAttribute(e,n),m_.fromBufferAttribute(e,a),__.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(p_,c.x),u.addScaledVector(m_,c.y),u.addScaledVector(__,c.z),u}static isFrontFacing(e,n,a,s){return ar.subVectors(a,n),as.subVectors(e,n),ar.cross(as).dot(s)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,s){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,a,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ar.subVectors(this.c,this.b),as.subVectors(this.a,this.b),ar.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return or.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,s,c){return or.getInterpolation(e,this.a,this.b,this.c,n,a,s,c)}containsPoint(e){return or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,s=this.b,c=this.c;let u,d;$l.subVectors(s,a),ec.subVectors(c,a),f_.subVectors(e,a);const p=$l.dot(f_),m=ec.dot(f_);if(p<=0&&m<=0)return n.copy(a);d_.subVectors(e,s);const _=$l.dot(d_),g=ec.dot(d_);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*m;if(v<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(a).addScaledVector($l,u);h_.subVectors(e,c);const x=$l.dot(h_),E=ec.dot(h_);if(E>=0&&x<=E)return n.copy(c);const b=x*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(a).addScaledVector(ec,d);const S=_*E-x*g;if(S<=0&&g-_>=0&&x-E>=0)return NM.subVectors(c,s),d=(g-_)/(g-_+(x-E)),n.copy(s).addScaledVector(NM,d);const y=1/(S+b+v);return u=b*y,d=v*y,n.copy(a).addScaledVector($l,u).addScaledVector(ec,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Rf{constructor(e=new xe(1/0,1/0,1/0),n=new xe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(rr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(rr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=rr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,rr):rr.fromBufferAttribute(c,u),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),th.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),th.copy(a.boundingBox)),th.applyMatrix4(e.matrixWorld),this.union(th)}const s=e.children;for(let c=0,u=s.length;c<u;c++)this.expandByObject(s[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uu),nh.subVectors(this.max,Uu),tc.subVectors(e.a,Uu),nc.subVectors(e.b,Uu),ic.subVectors(e.c,Uu),Zs.subVectors(nc,tc),js.subVectors(ic,nc),Oo.subVectors(tc,ic);let n=[0,-Zs.z,Zs.y,0,-js.z,js.y,0,-Oo.z,Oo.y,Zs.z,0,-Zs.x,js.z,0,-js.x,Oo.z,0,-Oo.x,-Zs.y,Zs.x,0,-js.y,js.x,0,-Oo.y,Oo.x,0];return!g_(n,tc,nc,ic,nh)||(n=[1,0,0,0,1,0,0,0,1],!g_(n,tc,nc,ic,nh))?!1:(ih.crossVectors(Zs,js),n=[ih.x,ih.y,ih.z],g_(n,tc,nc,ic,nh))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ss=[new xe,new xe,new xe,new xe,new xe,new xe,new xe,new xe],rr=new xe,th=new Rf,tc=new xe,nc=new xe,ic=new xe,Zs=new xe,js=new xe,Oo=new xe,Uu=new xe,nh=new xe,ih=new xe,Po=new xe;function g_(o,e,n,a,s){for(let c=0,u=o.length-3;c<=u;c+=3){Po.fromArray(o,c);const d=s.x*Math.abs(Po.x)+s.y*Math.abs(Po.y)+s.z*Math.abs(Po.z),p=e.dot(Po),m=n.dot(Po),_=a.dot(Po);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Qn=new xe,ah=new nn;let $3=0;class fr extends ll{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=U3,this.updateRanges=[],this.gpuType=Or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let s=0,c=this.itemSize;s<c;s++)this.array[e+s]=n.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)ah.fromBufferAttribute(this,n),ah.applyMatrix3(e),this.setXY(n,ah.x,ah.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.applyMatrix3(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.applyMatrix4(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.applyNormalMatrix(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.transformDirection(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Nu(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=$i(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Nu(n,this.array)),n}setX(e,n){return this.normalized&&(n=$i(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Nu(n,this.array)),n}setY(e,n){return this.normalized&&(n=$i(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Nu(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$i(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Nu(n,this.array)),n}setW(e,n){return this.normalized&&(n=$i(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=$i(n,this.array),a=$i(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,s){return e*=this.itemSize,this.normalized&&(n=$i(n,this.array),a=$i(a,this.array),s=$i(s,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,n,a,s,c){return e*=this.itemSize,this.normalized&&(n=$i(n,this.array),a=$i(a,this.array),s=$i(s,this.array),c=$i(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class bb extends fr{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Tb extends fr{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ps extends fr{constructor(e,n,a){super(new Float32Array(e),n,a)}}const eR=new Rf,Ou=new xe,v_=new xe;class Sv{constructor(e=new xe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):eR.setFromPoints(e).getCenter(a);let s=0;for(let c=0,u=e.length;c<u;c++)s=Math.max(s,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ou.subVectors(e,this.center);const n=Ou.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Ou,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(v_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ou.copy(e.center).add(v_)),this.expandByPoint(Ou.copy(e.center).sub(v_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tR=0;const Ga=new ei,x_=new Ra,ac=new xe,xa=new Rf,Pu=new Rf,ui=new xe;class xs extends ll{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=Cf(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O3(e)?Tb:bb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Ct().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ga.makeRotationFromQuaternion(e),this.applyMatrix4(Ga),this}rotateX(e){return Ga.makeRotationX(e),this.applyMatrix4(Ga),this}rotateY(e){return Ga.makeRotationY(e),this.applyMatrix4(Ga),this}rotateZ(e){return Ga.makeRotationZ(e),this.applyMatrix4(Ga),this}translate(e,n,a){return Ga.makeTranslation(e,n,a),this.applyMatrix4(Ga),this}scale(e,n,a){return Ga.makeScale(e,n,a),this.applyMatrix4(Ga),this}lookAt(e){return x_.lookAt(e),x_.updateMatrix(),this.applyMatrix4(x_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ac).negate(),this.translate(ac.x,ac.y,ac.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,c=e.length;s<c;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ps(a,3))}else{const a=Math.min(e.length,n.count);for(let s=0;s<a;s++){const c=e[s];n.setXYZ(s,c.x,c.y,c.z||0)}e.length>n.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new xe(-1/0,-1/0,-1/0),new xe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const c=n[a];xa.setFromBufferAttribute(c),this.morphTargetsRelative?(ui.addVectors(this.boundingBox.min,xa.min),this.boundingBox.expandByPoint(ui),ui.addVectors(this.boundingBox.max,xa.max),this.boundingBox.expandByPoint(ui)):(this.boundingBox.expandByPoint(xa.min),this.boundingBox.expandByPoint(xa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sv);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new xe,1/0);return}if(e){const a=this.boundingSphere.center;if(xa.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Pu.setFromBufferAttribute(d),this.morphTargetsRelative?(ui.addVectors(xa.min,Pu.min),xa.expandByPoint(ui),ui.addVectors(xa.max,Pu.max),xa.expandByPoint(ui)):(xa.expandByPoint(Pu.min),xa.expandByPoint(Pu.max))}xa.getCenter(a);let s=0;for(let c=0,u=e.count;c<u;c++)ui.fromBufferAttribute(e,c),s=Math.max(s,a.distanceToSquared(ui));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)ui.fromBufferAttribute(d,m),p&&(ac.fromBufferAttribute(e,m),ui.add(ac)),s=Math.max(s,a.distanceToSquared(ui))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new fr(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let T=0;T<a.count;T++)d[T]=new xe,p[T]=new xe;const m=new xe,_=new xe,g=new xe,v=new nn,x=new nn,E=new nn,b=new xe,S=new xe;function y(T,D,I){m.fromBufferAttribute(a,T),_.fromBufferAttribute(a,D),g.fromBufferAttribute(a,I),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,D),E.fromBufferAttribute(c,I),_.sub(m),g.sub(m),x.sub(v),E.sub(v);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(V),S.copy(g).multiplyScalar(x.x).addScaledVector(_,-E.x).multiplyScalar(V),d[T].add(b),d[D].add(b),d[I].add(b),p[T].add(S),p[D].add(S),p[I].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let T=0,D=L.length;T<D;++T){const I=L[T],V=I.start,H=I.count;for(let q=V,W=V+H;q<W;q+=3)y(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const z=new xe,C=new xe,R=new xe,O=new xe;function w(T){R.fromBufferAttribute(s,T),O.copy(R);const D=d[T];z.copy(D),z.sub(R.multiplyScalar(R.dot(D))).normalize(),C.crossVectors(O,D);const V=C.dot(p[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,D=L.length;T<D;++T){const I=L[T],V=I.start,H=I.count;for(let q=V,W=V+H;q<W;q+=3)w(e.getX(q+0)),w(e.getX(q+1)),w(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new fr(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const s=new xe,c=new xe,u=new xe,d=new xe,p=new xe,m=new xe,_=new xe,g=new xe;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),b=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),_.subVectors(u,c),g.subVectors(s,c),_.cross(g),d.fromBufferAttribute(a,E),p.fromBufferAttribute(a,b),m.fromBufferAttribute(a,S),d.add(_),p.add(_),m.add(_),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,x=n.count;v<x;v+=3)s.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),g.subVectors(s,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)ui.fromBufferAttribute(e,n),ui.normalize(),e.setXYZ(n,ui.x,ui.y,ui.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,g=d.normalized,v=new m.constructor(p.length*_);let x=0,E=0;for(let b=0,S=p.length;b<S;b++){d.isInterleavedBufferAttribute?x=p[b]*d.data.stride+d.offset:x=p[b]*_;for(let y=0;y<_;y++)v[E++]=m[x++]}return new fr(v,_,g)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xs,a=this.index.array,s=this.attributes;for(const d in s){const p=s[d],m=e(p,a);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,g=m.length;_<g;_++){const v=m[_],x=e(v,a);p.push(x)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const s={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,v=m.length;g<v;g++){const x=m[g];_.push(x.toJSON(e.data))}_.length>0&&(s[p]=_,c=!0)}c&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const m in s){const _=s[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],g=c[m];for(let v=0,x=g.length;v<x;v++)_.push(g[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S_=new xe,nR=new xe,iR=new Ct;class Js{constructor(e=new xe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,s){return this.normal.set(e,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const s=S_.subVectors(a,n).cross(nR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const s=e.delta(S_),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||iR.getNormalMatrix(e),s=this.coplanarPoint(S_).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let aR=0;class pp extends ll{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=Cf(),this.name="",this.type="Material",this.blending=Qu,this.side=tl,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nb,this.blendDst=ib,this.blendEquation=hc,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tn(0,0,0),this.blendAlpha=0,this.depthFunc=ff,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A3,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=e_,this.stencilZFail=e_,this.stencilZPass=e_,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Tt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Tt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector2&&a&&a.isVector2||s&&s.isEuler&&a&&a.isEuler||s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=s(e.textures),u=s(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new Js().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new nn().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nn().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let c=0;c!==s;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const os=new xe,y_=new xe,rh=new xe,sh=new xe;class rR{constructor(e=new xe,n=new xe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=os.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,n),os.distanceToSquared(e))}distanceSqToSegment(e,n,a,s){y_.copy(e).add(n).multiplyScalar(.5),rh.copy(n).sub(e).normalize(),sh.copy(this.origin).sub(y_);const c=e.distanceTo(n)*.5,u=-this.direction.dot(rh),d=sh.dot(this.direction),p=-sh.dot(rh),m=sh.lengthSq(),_=Math.abs(1-u*u);let g,v,x,E;if(_>0)if(g=u*p-d,v=u*d-p,E=c*_,g>=0)if(v>=-E)if(v<=E){const b=1/_;g*=b,v*=b,x=g*(g+u*v+2*d)+v*(u*g+v+2*p)+m}else v=c,g=Math.max(0,-(u*v+d)),x=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(u*v+d)),x=-g*g+v*(v+2*p)+m;else v<=-E?(g=Math.max(0,-(-u*c+d)),v=g>0?-c:Math.min(Math.max(-c,-p),c),x=-g*g+v*(v+2*p)+m):v<=E?(g=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+m):(g=Math.max(0,-(u*c+d)),v=g>0?c:Math.min(Math.max(-c,-p),c),x=-g*g+v*(v+2*p)+m);else v=u>0?-c:c,g=Math.max(0,-(u*v+d)),x=-g*g+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(y_).addScaledVector(rh,v),x}intersectSphere(e,n){if(e.radius<0)return null;os.subVectors(e.center,this.origin);const a=os.dot(this.direction),s=os.dot(os)-a*a,c=e.radius*e.radius;if(s>c)return null;const u=Math.sqrt(c-s),d=a-u,p=a+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,s,c,u,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(a=(e.min.x-v.x)*m,s=(e.max.x-v.x)*m):(a=(e.max.x-v.x)*m,s=(e.min.x-v.x)*m),_>=0?(c=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),a>u||c>s||((c>a||isNaN(a))&&(a=c),(u<s||isNaN(s))&&(s=u),g>=0?(d=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),a>p||d>s)||((d>a||a!==a)&&(a=d),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,n,a,s,c){const u=this.origin,d=this.direction,p=d.x,m=d.y,_=d.z,g=e.x-u.x,v=e.y-u.y,x=e.z-u.z,E=n.x-u.x,b=n.y-u.y,S=n.z-u.z,y=a.x-u.x,L=a.y-u.y,z=a.z-u.z,C=Math.abs(p),R=Math.abs(m),O=Math.abs(_);let w,T,D,I,V,H,q,W,j,X,G,te;if(C>=R&&C>=O?(D=p,H=g,j=E,te=y,p>=0?(w=m,T=_,I=v,V=x,q=b,W=S,X=L,G=z):(w=_,T=m,I=x,V=v,q=S,W=b,X=z,G=L)):R>=O?(D=m,H=v,j=b,te=L,m>=0?(w=_,T=p,I=x,V=g,q=S,W=E,X=z,G=y):(w=p,T=_,I=g,V=x,q=E,W=S,X=y,G=z)):(D=_,H=x,j=S,te=z,_>=0?(w=p,T=m,I=g,V=v,q=E,W=b,X=y,G=L):(w=m,T=p,I=v,V=g,q=b,W=E,X=L,G=y)),D===0)return null;const ne=w/D,P=T/D,me=1/D,Fe=I-ne*H,Le=V-P*H,k=q-ne*j,le=W-P*j,Ee=X-ne*te,J=G-P*te,ce=Ee*le-J*k,Ce=Fe*J-Le*Ee,Ge=k*Le-le*Fe;if(s){if(ce<0||Ce<0||Ge<0)return null}else if((ce<0||Ce<0||Ge<0)&&(ce>0||Ce>0||Ge>0))return null;const ve=ce+Ce+Ge;if(ve===0)return null;const Ue=me*(ce*H+Ce*j+Ge*te);return(ve>0?Ue<0:Ue>0)?null:this.at(Ue/ve,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yv extends pp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new al,this.combine=ab,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const LM=new ei,Io=new rR,oh=new Sv,UM=new xe,lh=new xe,ch=new xe,uh=new xe,M_=new xe,fh=new xe,OM=new xe,dh=new xe;class dr extends Ra{constructor(e=new xs,n=new yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=s.length;c<u;c++){const d=s[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,s=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(c&&d){fh.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],g=c[p];_!==0&&(M_.fromBufferAttribute(g,e),u?fh.addScaledVector(M_,_):fh.addScaledVector(M_.sub(n),_))}n.add(fh)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const a=this.geometry,s=this.material,c=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),oh.copy(a.boundingSphere),oh.applyMatrix4(c),Io.copy(e.ray).recast(e.near),!(oh.containsPoint(Io.origin)===!1&&(Io.intersectSphere(oh,UM)===null||Io.origin.distanceToSquared(UM)>(e.far-e.near)**2))&&(LM.copy(c).invert(),Io.copy(e.ray).applyMatrix4(LM),!(a.boundingBox!==null&&Io.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Io)))}_computeIntersections(e,n,a){let s;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const S=v[E],y=u[S.materialIndex],L=Math.max(S.start,x.start),z=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=L,R=z;C<R;C+=3){const O=d.getX(C),w=d.getX(C+1),T=d.getX(C+2);s=hh(this,y,e,a,m,_,g,O,w,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const L=d.getX(S),z=d.getX(S+1),C=d.getX(S+2);s=hh(this,u,e,a,m,_,g,L,z,C),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const S=v[E],y=u[S.materialIndex],L=Math.max(S.start,x.start),z=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let C=L,R=z;C<R;C+=3){const O=C,w=C+1,T=C+2;s=hh(this,y,e,a,m,_,g,O,w,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const L=S,z=S+1,C=S+2;s=hh(this,u,e,a,m,_,g,L,z,C),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function sR(o,e,n,a,s,c,u,d){let p;if(e.side===na?p=a.intersectTriangle(u,c,s,!0,d):p=a.intersectTriangle(s,c,u,e.side===tl,d),p===null)return null;dh.copy(d),dh.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(dh);return m<n.near||m>n.far?null:{distance:m,point:dh.clone(),object:o}}function hh(o,e,n,a,s,c,u,d,p,m){o.getVertexPosition(d,lh),o.getVertexPosition(p,ch),o.getVertexPosition(m,uh);const _=sR(o,e,n,a,lh,ch,uh,OM);if(_){const g=new xe;or.getBarycoord(OM,lh,ch,uh,g),s&&(_.uv=or.getInterpolatedAttribute(s,d,p,m,g,new nn)),c&&(_.uv1=or.getInterpolatedAttribute(c,d,p,m,g,new nn)),u&&(_.normal=or.getInterpolatedAttribute(u,d,p,m,g,new xe),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new xe,materialIndex:0};or.getNormal(lh,ch,uh,v.normal),_.face=v,_.barycoord=g}return _}class oR extends Ui{constructor(e=null,n=1,a=1,s,c,u,d,p,m=yi,_=yi,g,v){super(null,u,d,p,m,_,s,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zo=new Sv,lR=new nn(.5,.5),ph=new xe;class Ab{constructor(e=new Js,n=new Js,a=new Js,s=new Js,c=new Js,u=new Js){this.planes=[e,n,a,s,c,u]}set(e,n,a,s,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(s),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Pr,a=!1){const s=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],_=c[4],g=c[5],v=c[6],x=c[7],E=c[8],b=c[9],S=c[10],y=c[11],L=c[12],z=c[13],C=c[14],R=c[15];if(s[0].setComponents(m-u,x-_,y-E,R-L).normalize(),s[1].setComponents(m+u,x+_,y+E,R+L).normalize(),s[2].setComponents(m+d,x+g,y+b,R+z).normalize(),s[3].setComponents(m-d,x-g,y-b,R-z).normalize(),a)s[4].setComponents(p,v,S,C).normalize(),s[5].setComponents(m-p,x-v,y-S,R-C).normalize();else if(s[4].setComponents(m-p,x-v,y-S,R-C).normalize(),n===Pr)s[5].setComponents(m+p,x+v,y+S,R+C).normalize();else if(n===$h)s[5].setComponents(p,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zo)}intersectsSprite(e){zo.center.set(0,0,0);const n=lR.distanceTo(e.center);return zo.radius=.7071067811865476+n,zo.applyMatrix4(e.matrixWorld),this.intersectsSphere(zo)}intersectsSphere(e){const n=this.planes,a=e.center,s=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(ph.x=s.normal.x>0?e.max.x:e.min.x,ph.y=s.normal.y>0?e.max.y:e.min.y,ph.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ph)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cb extends Ui{constructor(e=[],n=nl,a,s,c,u,d,p,m,_){super(e,n,a,s,c,u,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mf extends Ui{constructor(e,n,a=Hr,s,c,u,d=yi,p=yi,m,_=_s,g=1){if(_!==_s&&_!==Wo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,s,c,u,d,p,_,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class cR extends mf{constructor(e,n=Hr,a=nl,s,c,u=yi,d=yi,p,m=_s){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,n,a,s,c,u,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rb extends Ui{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wf extends xs{constructor(e=1,n=1,a=1,s=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:s,heightSegments:c,depthSegments:u};const d=this;s=Math.floor(s),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],_=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,s,u,2),E("x","z","y",1,-1,e,a,-n,s,u,3),E("x","y","z",1,-1,e,n,a,s,c,4),E("x","y","z",-1,-1,e,n,-a,s,c,5),this.setIndex(p),this.setAttribute("position",new ps(m,3)),this.setAttribute("normal",new ps(_,3)),this.setAttribute("uv",new ps(g,2));function E(b,S,y,L,z,C,R,O,w,T,D){const I=C/w,V=R/T,H=C/2,q=R/2,W=O/2,j=w+1,X=T+1;let G=0,te=0;const ne=new xe;for(let P=0;P<X;P++){const me=P*V-q;for(let Fe=0;Fe<j;Fe++){const Le=Fe*I-H;ne[b]=Le*L,ne[S]=me*z,ne[y]=W,m.push(ne.x,ne.y,ne.z),ne[b]=0,ne[S]=0,ne[y]=O>0?1:-1,_.push(ne.x,ne.y,ne.z),g.push(Fe/w),g.push(1-P/T),G+=1}}for(let P=0;P<T;P++)for(let me=0;me<w;me++){const Fe=v+me+j*P,Le=v+me+j*(P+1),k=v+(me+1)+j*(P+1),le=v+(me+1)+j*P;p.push(Fe,Le,le),p.push(Le,k,le),te+=6}d.addGroup(x,te,D),x+=te,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nc extends xs{constructor(e=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:s};const c=e/2,u=n/2,d=Math.floor(a),p=Math.floor(s),m=d+1,_=p+1,g=e/d,v=n/p,x=[],E=[],b=[],S=[];for(let y=0;y<_;y++){const L=y*v-u;for(let z=0;z<m;z++){const C=z*g-c;E.push(C,-L,0),b.push(0,0,1),S.push(z/d),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let L=0;L<d;L++){const z=L+m*y,C=L+m*(y+1),R=L+1+m*(y+1),O=L+1+m*y;x.push(z,C,O),x.push(C,R,O)}this.setIndex(x),this.setAttribute("position",new ps(E,3)),this.setAttribute("normal",new ps(b,3)),this.setAttribute("uv",new ps(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Lc(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const s=o[n][a];if(PM(s))s.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=s.clone();else if(Array.isArray(s))if(PM(s[0])){const c=[];for(let u=0,d=s.length;u<d;u++)c[u]=s[u].clone();e[n][a]=c}else e[n][a]=s.slice();else e[n][a]=s}}return e}function ki(o){const e={};for(let n=0;n<o.length;n++){const a=Lc(o[n]);for(const s in a)e[s]=a[s]}return e}function PM(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function uR(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function wb(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qt.workingColorSpace}const fR={clone:Lc,merge:ki};var dR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends pp{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dR,this.fragmentShader=hR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lc(e.uniforms),this.uniformsGroups=uR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?n.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[s]={type:"m4",value:u.toArray()}:n.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const s=e.uniforms[a];switch(this.uniforms[a]={},s.type){case"t":this.uniforms[a].value=n[s.value]||null;break;case"c":this.uniforms[a].value=new tn().setHex(s.value);break;case"v2":this.uniforms[a].value=new nn().fromArray(s.value);break;case"v3":this.uniforms[a].value=new xe().fromArray(s.value);break;case"v4":this.uniforms[a].value=new Hn().fromArray(s.value);break;case"m3":this.uniforms[a].value=new Ct().fromArray(s.value);break;case"m4":this.uniforms[a].value=new ei().fromArray(s.value);break;default:this.uniforms[a].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pR extends hr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mR extends pp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _R extends pp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E_={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(IM(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!IM(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function IM(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class gR{constructor(e,n,a){const s=this;let c=!1,u=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(_){d++,c===!1&&s.onStart!==void 0&&s.onStart(_,u,d),c=!0},this.itemEnd=function(_){u++,s.onProgress!==void 0&&s.onProgress(_,u,d),u===d&&(c=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(_){s.onError!==void 0&&s.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,g){return m.push(_,g),this},this.removeHandler=function(_){const g=m.indexOf(_);return g!==-1&&m.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=m.length;g<v;g+=2){const x=m[g],E=m[g+1];if(x.global&&(x.lastIndex=0),x.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vR=new gR;class Mv{constructor(e){this.manager=e!==void 0?e:vR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(s,c){a.load(e,s,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Mv.DEFAULT_MATERIAL_NAME="__DEFAULT";const rc=new WeakMap;class xR extends Mv{constructor(e){super(e)}load(e,n,a,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=E_.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let g=rc.get(u);g===void 0&&(g=[],rc.set(u,g)),g.push({onLoad:n,onError:s})}return u}const d=pf("img");function p(){_(),n&&n(this);const g=rc.get(this)||[];for(let v=0;v<g.length;v++){const x=g[v];x.onLoad&&x.onLoad(this)}rc.delete(this),c.manager.itemEnd(e)}function m(g){_(),s&&s(g),E_.remove(`image:${e}`);const v=rc.get(this)||[];for(let x=0;x<v.length;x++){const E=v[x];E.onError&&E.onError(g)}rc.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),E_.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class SR extends Mv{constructor(e){super(e)}load(e,n,a,s){const c=new Ui,u=new xR(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,s),c}}const mh=new xe,_h=new Bc,Cr=new xe;class Db extends Ra{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ei,this.projectionMatrix=new ei,this.projectionMatrixInverse=new ei,this.coordinateSystem=Pr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mh,_h,Cr),Cr.x===1&&Cr.y===1&&Cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mh,_h,Cr.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(mh,_h,Cr),Cr.x===1&&Cr.y===1&&Cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mh,_h,Cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new xe,zM=new nn,FM=new nn;class Xa extends Db{constructor(e=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Og*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(t_*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Og*2*Math.atan(Math.tan(t_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,n){return this.getViewBounds(e,zM,FM),n.subVectors(FM,zM)}setViewOffset(e,n,a,s,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(t_*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,c=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*s/p,n-=u.offsetY*a/m,s*=u.width/p,a*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+s,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Nb extends Db{constructor(e=-1,n=1,a=1,s=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=s,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,s,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const sc=-90,oc=1;class yR extends Ra{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xa(sc,oc,e,n);s.layers=this.layers,this.add(s);const c=new Xa(sc,oc,e,n);c.layers=this.layers,this.add(c);const u=new Xa(sc,oc,e,n);u.layers=this.layers,this.add(u);const d=new Xa(sc,oc,e,n);d.layers=this.layers,this.add(d);const p=new Xa(sc,oc,e,n);p.layers=this.layers,this.add(p);const m=new Xa(sc,oc,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,s,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===Pr)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===$h)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,3,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),a.texture.generateMipmaps=b,e.setRenderTarget(a,5,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(g,v,x),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class MR extends Xa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ER{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=bR.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function bR(){this._document.hidden===!1&&this.reset()}const $v=class $v{constructor(e,n,a,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,s){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=s,this}};$v.prototype.isMatrix2=!0;let BM=$v;function HM(o,e,n,a){const s=TR(a);switch(n){case gb:return o*e;case xb:return o*e/s.components*s.byteLength;case pv:return o*e/s.components*s.byteLength;case il:return o*e*2/s.components*s.byteLength;case mv:return o*e*2/s.components*s.byteLength;case vb:return o*e*3/s.components*s.byteLength;case cr:return o*e*4/s.components*s.byteLength;case _v:return o*e*4/s.components*s.byteLength;case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ih:case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rg:case og:return Math.max(o,16)*Math.max(e,8)/4;case ag:case sg:return Math.max(o,8)*Math.max(e,8)/2;case lg:case cg:case fg:case dg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ug:case jh:case hg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mg:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case _g:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gg:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vg:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xg:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Sg:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case yg:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Mg:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Eg:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bg:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tg:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ag:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Cg:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rg:case wg:case Dg:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ng:case Lg:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Kh:case Ug:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TR(o){switch(o){case qa:case hb:return{byteLength:1,components:1};case df:case pb:case Gr:return{byteLength:2,components:1};case dv:case hv:return{byteLength:2,components:4};case Hr:case fv:case Or:return{byteLength:4,components:1};case mb:case _b:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uv}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lb(){let o=null,e=!1,n=null,a=null;function s(c,u){a=o.requestAnimationFrame(s),n(c,u)}return{start:function(){e!==!0&&n!==null&&o!==null&&(a=o.requestAnimationFrame(s),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function AR(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,_),d.onUploadCallback();let x;if(m instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=o.SHORT;else if(m instanceof Uint32Array)x=o.UNSIGNED_INT;else if(m instanceof Int32Array)x=o.INT;else if(m instanceof Int8Array)x=o.BYTE;else if(m instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function a(d,p,m){const _=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,_);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],b=g[x];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,g[v]=b)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const b=g[x];o.bufferSubData(m,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,d,p),m.version=d.version}}return{get:s,remove:c,update:u}}var CR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RR=`#ifdef USE_ALPHAHASH
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
#endif`,wR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UR=`#ifdef USE_AOMAP
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
#endif`,OR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PR=`#ifdef USE_BATCHING
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
#endif`,IR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HR=`#ifdef USE_IRIDESCENCE
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
#endif`,GR=`#ifdef USE_BUMPMAP
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
#endif`,VR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ZR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,KR=`#define PI 3.141592653589793
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
} // validated`,QR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JR=`vec3 transformedNormal = objectNormal;
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
#endif`,$R=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iw="gl_FragColor = linearToOutputTexel( gl_FragColor );",aw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
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
#endif`,uw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pw=`#ifdef USE_GRADIENTMAP
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
}`,mw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_w=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bw=`PhysicalMaterial material;
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
#endif`,Tw=`uniform sampler2D dfgLUT;
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
}`,Aw=`
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
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ww=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zw=`#if defined( USE_POINTS_UV )
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
#endif`,Fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`#ifdef USE_MORPHTARGETS
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
#endif`,Xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kw=`#ifdef USE_NORMALMAP
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
#endif`,Qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dD=`float getShadowMask() {
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
}`,hD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pD=`#ifdef USE_SKINNING
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
#endif`,mD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_D=`#ifdef USE_SKINNING
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
#endif`,gD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yD=`#ifdef USE_TRANSMISSION
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
#endif`,MD=`#ifdef USE_TRANSMISSION
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
#endif`,ED=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RD=`uniform sampler2D t2D;
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
}`,wD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ND=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UD=`#include <common>
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
}`,OD=`#if DEPTH_PACKING == 3200
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
}`,PD=`#define DISTANCE
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
}`,ID=`#define DISTANCE
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
}`,zD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BD=`uniform float scale;
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
}`,HD=`uniform vec3 diffuse;
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
}`,GD=`#include <common>
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
}`,VD=`uniform vec3 diffuse;
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
}`,kD=`#define LAMBERT
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
}`,XD=`#define LAMBERT
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
}`,WD=`#define MATCAP
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
}`,YD=`#define MATCAP
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
}`,qD=`#define NORMAL
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
}`,ZD=`#define NORMAL
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
}`,jD=`#define PHONG
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
}`,KD=`#define PHONG
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
}`,QD=`#define STANDARD
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
}`,JD=`#define STANDARD
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
}`,$D=`#define TOON
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
}`,eN=`#define TOON
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
}`,tN=`uniform float size;
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
}`,nN=`uniform vec3 diffuse;
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
}`,iN=`#include <common>
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
}`,aN=`uniform vec3 color;
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
}`,rN=`uniform float rotation;
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
}`,sN=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:CR,alphahash_pars_fragment:RR,alphamap_fragment:wR,alphamap_pars_fragment:DR,alphatest_fragment:NR,alphatest_pars_fragment:LR,aomap_fragment:UR,aomap_pars_fragment:OR,batching_pars_vertex:PR,batching_vertex:IR,begin_vertex:zR,beginnormal_vertex:FR,bsdfs:BR,iridescence_fragment:HR,bumpmap_pars_fragment:GR,clipping_planes_fragment:VR,clipping_planes_pars_fragment:kR,clipping_planes_pars_vertex:XR,clipping_planes_vertex:WR,color_fragment:YR,color_pars_fragment:qR,color_pars_vertex:ZR,color_vertex:jR,common:KR,cube_uv_reflection_fragment:QR,defaultnormal_vertex:JR,displacementmap_pars_vertex:$R,displacementmap_vertex:ew,emissivemap_fragment:tw,emissivemap_pars_fragment:nw,colorspace_fragment:iw,colorspace_pars_fragment:aw,envmap_fragment:rw,envmap_common_pars_fragment:sw,envmap_pars_fragment:ow,envmap_pars_vertex:lw,envmap_physical_pars_fragment:xw,envmap_vertex:cw,fog_vertex:uw,fog_pars_vertex:fw,fog_fragment:dw,fog_pars_fragment:hw,gradientmap_pars_fragment:pw,lightmap_pars_fragment:mw,lights_lambert_fragment:_w,lights_lambert_pars_fragment:gw,lights_pars_begin:vw,lights_toon_fragment:Sw,lights_toon_pars_fragment:yw,lights_phong_fragment:Mw,lights_phong_pars_fragment:Ew,lights_physical_fragment:bw,lights_physical_pars_fragment:Tw,lights_fragment_begin:Aw,lights_fragment_maps:Cw,lights_fragment_end:Rw,lightprobes_pars_fragment:ww,logdepthbuf_fragment:Dw,logdepthbuf_pars_fragment:Nw,logdepthbuf_pars_vertex:Lw,logdepthbuf_vertex:Uw,map_fragment:Ow,map_pars_fragment:Pw,map_particle_fragment:Iw,map_particle_pars_fragment:zw,metalnessmap_fragment:Fw,metalnessmap_pars_fragment:Bw,morphinstance_vertex:Hw,morphcolor_vertex:Gw,morphnormal_vertex:Vw,morphtarget_pars_vertex:kw,morphtarget_vertex:Xw,normal_fragment_begin:Ww,normal_fragment_maps:Yw,normal_pars_fragment:qw,normal_pars_vertex:Zw,normal_vertex:jw,normalmap_pars_fragment:Kw,clearcoat_normal_fragment_begin:Qw,clearcoat_normal_fragment_maps:Jw,clearcoat_pars_fragment:$w,iridescence_pars_fragment:eD,opaque_fragment:tD,packing:nD,premultiplied_alpha_fragment:iD,project_vertex:aD,dithering_fragment:rD,dithering_pars_fragment:sD,roughnessmap_fragment:oD,roughnessmap_pars_fragment:lD,shadowmap_pars_fragment:cD,shadowmap_pars_vertex:uD,shadowmap_vertex:fD,shadowmask_pars_fragment:dD,skinbase_vertex:hD,skinning_pars_vertex:pD,skinning_vertex:mD,skinnormal_vertex:_D,specularmap_fragment:gD,specularmap_pars_fragment:vD,tonemapping_fragment:xD,tonemapping_pars_fragment:SD,transmission_fragment:yD,transmission_pars_fragment:MD,uv_pars_fragment:ED,uv_pars_vertex:bD,uv_vertex:TD,worldpos_vertex:AD,background_vert:CD,background_frag:RD,backgroundCube_vert:wD,backgroundCube_frag:DD,cube_vert:ND,cube_frag:LD,depth_vert:UD,depth_frag:OD,distance_vert:PD,distance_frag:ID,equirect_vert:zD,equirect_frag:FD,linedashed_vert:BD,linedashed_frag:HD,meshbasic_vert:GD,meshbasic_frag:VD,meshlambert_vert:kD,meshlambert_frag:XD,meshmatcap_vert:WD,meshmatcap_frag:YD,meshnormal_vert:qD,meshnormal_frag:ZD,meshphong_vert:jD,meshphong_frag:KD,meshphysical_vert:QD,meshphysical_frag:JD,meshtoon_vert:$D,meshtoon_frag:eN,points_vert:tN,points_frag:nN,shadow_vert:iN,shadow_frag:aN,sprite_vert:rN,sprite_frag:sN},Je={common:{diffuse:{value:new tn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new nn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new xe},probesMax:{value:new xe},probesResolution:{value:new xe}},points:{diffuse:{value:new tn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new tn(16777215)},opacity:{value:1},center:{value:new nn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Nr={basic:{uniforms:ki([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ki([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new tn(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ki([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new tn(0)},specular:{value:new tn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ki([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new tn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ki([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new tn(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ki([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ki([Je.points,Je.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ki([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ki([Je.common,Je.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ki([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ki([Je.sprite,Je.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:ki([Je.common,Je.displacementmap,{referencePosition:{value:new xe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:ki([Je.lights,Je.fog,{color:{value:new tn(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Nr.physical={uniforms:ki([Nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new nn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new tn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new nn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new tn(0)},specularColor:{value:new tn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new nn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const gh={r:0,b:0,g:0},oN=new ei,Ub=new Ct;Ub.set(-1,0,0,0,1,0,0,0,1);function lN(o,e,n,a,s,c){const u=new tn(0);let d=s===!0?0:1,p,m,_=null,g=0,v=null;function x(L){let z=L.isScene===!0?L.background:null;if(z&&z.isTexture){const C=L.backgroundBlurriness>0;z=e.get(z,C)}return z}function E(L){let z=!1;const C=x(L);C===null?S(u,d):C&&C.isColor&&(S(C,1),z=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(o.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(L,z){const C=x(z);C&&(C.isCubeTexture||C.mapping===hp)?(m===void 0&&(m=new dr(new wf(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Lc(Nr.backgroundCube.uniforms),vertexShader:Nr.backgroundCube.vertexShader,fragmentShader:Nr.backgroundCube.fragmentShader,side:na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(R,O,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(oN.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Ub),m.material.toneMapped=qt.getTransfer(C.colorSpace)!==pn,(_!==C||g!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,_=C,g=C.version,v=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new dr(new Nc(2,2),new hr({name:"BackgroundMaterial",uniforms:Lc(Nr.background.uniforms),vertexShader:Nr.background.vertexShader,fragmentShader:Nr.background.fragmentShader,side:tl,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=qt.getTransfer(C.colorSpace)!==pn,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||g!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=C,g=C.version,v=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function S(L,z){L.getRGB(gh,wb(o)),n.buffers.color.setClear(gh.r,gh.g,gh.b,z,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,z=1){u.set(L),d=z,S(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,S(u,d)},render:E,addToRenderList:b,dispose:y}}function cN(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let c=s,u=!1;function d(V,H,q,W,j){let X=!1;const G=g(V,W,q,H);c!==G&&(c=G,m(c.object)),X=x(V,W,q,j),X&&E(V,W,q,j),j!==null&&e.update(j,o.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,C(V,H,q,W),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function p(){return o.createVertexArray()}function m(V){return o.bindVertexArray(V)}function _(V){return o.deleteVertexArray(V)}function g(V,H,q,W){const j=W.wireframe===!0;let X=a[H.id];X===void 0&&(X={},a[H.id]=X);const G=V.isInstancedMesh===!0?V.id:0;let te=X[G];te===void 0&&(te={},X[G]=te);let ne=te[q.id];ne===void 0&&(ne={},te[q.id]=ne);let P=ne[j];return P===void 0&&(P=v(p()),ne[j]=P),P}function v(V){const H=[],q=[],W=[];for(let j=0;j<n;j++)H[j]=0,q[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:W,object:V,attributes:{},index:null}}function x(V,H,q,W){const j=c.attributes,X=H.attributes;let G=0;const te=q.getAttributes();for(const ne in te)if(te[ne].location>=0){const me=j[ne];let Fe=X[ne];if(Fe===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(Fe=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(Fe=V.instanceColor)),me===void 0||me.attribute!==Fe||Fe&&me.data!==Fe.data)return!0;G++}return c.attributesNum!==G||c.index!==W}function E(V,H,q,W){const j={},X=H.attributes;let G=0;const te=q.getAttributes();for(const ne in te)if(te[ne].location>=0){let me=X[ne];me===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(me=V.instanceColor));const Fe={};Fe.attribute=me,me&&me.data&&(Fe.data=me.data),j[ne]=Fe,G++}c.attributes=j,c.attributesNum=G,c.index=W}function b(){const V=c.newAttributes;for(let H=0,q=V.length;H<q;H++)V[H]=0}function S(V){y(V,0)}function y(V,H){const q=c.newAttributes,W=c.enabledAttributes,j=c.attributeDivisors;q[V]=1,W[V]===0&&(o.enableVertexAttribArray(V),W[V]=1),j[V]!==H&&(o.vertexAttribDivisor(V,H),j[V]=H)}function L(){const V=c.newAttributes,H=c.enabledAttributes;for(let q=0,W=H.length;q<W;q++)H[q]!==V[q]&&(o.disableVertexAttribArray(q),H[q]=0)}function z(V,H,q,W,j,X,G){G===!0?o.vertexAttribIPointer(V,H,q,j,X):o.vertexAttribPointer(V,H,q,W,j,X)}function C(V,H,q,W){b();const j=W.attributes,X=q.getAttributes(),G=H.defaultAttributeValues;for(const te in X){const ne=X[te];if(ne.location>=0){let P=j[te];if(P===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(P=V.instanceColor)),P!==void 0){const me=P.normalized,Fe=P.itemSize,Le=e.get(P);if(Le===void 0)continue;const k=Le.buffer,le=Le.type,Ee=Le.bytesPerElement,J=le===o.INT||le===o.UNSIGNED_INT||P.gpuType===fv;if(P.isInterleavedBufferAttribute){const ce=P.data,Ce=ce.stride,Ge=P.offset;if(ce.isInstancedInterleavedBuffer){for(let ve=0;ve<ne.locationSize;ve++)y(ne.location+ve,ce.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<ne.locationSize;ve++)S(ne.location+ve);o.bindBuffer(o.ARRAY_BUFFER,k);for(let ve=0;ve<ne.locationSize;ve++)z(ne.location+ve,Fe/ne.locationSize,le,me,Ce*Ee,(Ge+Fe/ne.locationSize*ve)*Ee,J)}else{if(P.isInstancedBufferAttribute){for(let ce=0;ce<ne.locationSize;ce++)y(ne.location+ce,P.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ce=0;ce<ne.locationSize;ce++)S(ne.location+ce);o.bindBuffer(o.ARRAY_BUFFER,k);for(let ce=0;ce<ne.locationSize;ce++)z(ne.location+ce,Fe/ne.locationSize,le,me,Fe*Ee,Fe/ne.locationSize*ce*Ee,J)}}else if(G!==void 0){const me=G[te];if(me!==void 0)switch(me.length){case 2:o.vertexAttrib2fv(ne.location,me);break;case 3:o.vertexAttrib3fv(ne.location,me);break;case 4:o.vertexAttrib4fv(ne.location,me);break;default:o.vertexAttrib1fv(ne.location,me)}}}}L()}function R(){D();for(const V in a){const H=a[V];for(const q in H){const W=H[q];for(const j in W){const X=W[j];for(const G in X)_(X[G].object),delete X[G];delete W[j]}}delete a[V]}}function O(V){if(a[V.id]===void 0)return;const H=a[V.id];for(const q in H){const W=H[q];for(const j in W){const X=W[j];for(const G in X)_(X[G].object),delete X[G];delete W[j]}}delete a[V.id]}function w(V){for(const H in a){const q=a[H];for(const W in q){const j=q[W];if(j[V.id]===void 0)continue;const X=j[V.id];for(const G in X)_(X[G].object),delete X[G];delete j[V.id]}}}function T(V){for(const H in a){const q=a[H],W=V.isInstancedMesh===!0?V.id:0,j=q[W];if(j!==void 0){for(const X in j){const G=j[X];for(const te in G)_(G[te].object),delete G[te];delete j[X]}delete q[W],Object.keys(q).length===0&&delete a[H]}}}function D(){I(),u=!0,c!==s&&(c=s,m(c.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:D,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:S,disableUnusedAttributes:L}}function uN(o,e,n){let a;function s(p){a=p}function c(p,m){o.drawArrays(a,p,m),n.update(m,a,1)}function u(p,m,_){_!==0&&(o.drawArraysInstanced(a,p,m,_),n.update(m,a,_))}function d(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,_);let v=0;for(let x=0;x<_;x++)v+=m[x];n.update(v,a,1)}this.setMode=s,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function fN(o,e,n,a){let s;function c(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(w){return!(w!==cr&&a.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(w){const T=w===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qa&&w!==Or&&!T&&a.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(w){if(w==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(Tt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:C,maxSamples:R,samples:O}}function dN(o){const e=this;let n=null,a=0,s=!1,c=!1;const u=new Js,d=new Ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||a!==0||s;return s=v,a=g.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,b=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||E===null||E.length===0||c&&!S)c?_(null):m();else{const L=c?0:a,z=L*4;let C=y.clippingState||null;p.value=C,C=_(E,v,z,x);for(let R=0;R!==z;++R)C[R]=n[R];y.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,x,E){const b=g!==null?g.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const y=x+b*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let z=0,C=x;z!==b;++z,C+=4)u.copy(g[z]).applyMatrix4(L,d),u.normal.toArray(S,C),S[C+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}const _c=4,hN=6,pN=20,mN=256,Iu=new Nb,GM=new tn;let b_=null,T_=0,A_=0,C_=!1;const _N=new xe,Fo=new xe;class VM{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,s=100,c={}){const{size:u=256,position:d=_N}=c;b_=this._renderer.getRenderTarget(),T_=this._renderer.getActiveCubeFace(),A_=this._renderer.getActiveMipmapLevel(),C_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,s,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=WM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=XM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(b_,T_,A_),this._renderer.xr.enabled=C_,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===nl||e.mapping===Dc?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),b_=this._renderer.getRenderTarget(),T_=this._renderer.getActiveCubeFace(),A_=this._renderer.getActiveMipmapLevel(),C_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Gr,format:cr,colorSpace:Qh,depthBuffer:!1},s=kM(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kM(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gN(c)),this._blurMaterial=xN(c,e,n),this._ggxMaterial=vN(c,e,n)}return s}_compileMaterial(e){const n=new dr(new xs,e);this._renderer.compile(n,Iu)}_sceneToCubeUV(e,n,a,s,c){const p=new Xa(90,1,n,a),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(GM),g.toneMapping=Fr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dr(new wf,new yv({name:"PMREM.Background",side:na,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let y=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,y=!0):(S.color.copy(GM),y=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[z],c.y,c.z)):C===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[z]));const R=this._cubeSize;lc(s,C*R,z>2?R:0,R,R),g.setRenderTarget(s),y&&g.render(b,p),g.render(e,p)}g.toneMapping=x,g.autoClear=v,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,s=e.mapping===nl||e.mapping===Dc;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=WM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=XM());const c=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;lc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Iu)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let c=1;c<s;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const s=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const p=u.uniforms,m=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(m*m-_*_),v=m*1.25,x=g*v,{_lodMax:E}=this,b=this._sizeLods[a],S=3*b*(a>E-_c?a-E+_c:0),y=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=E-n,lc(c,S,y,3*b,2*b),s.setRenderTarget(c),s.render(d,Iu),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-a,lc(e,S,y,3*b,2*b),s.setRenderTarget(e),s.render(d,Iu)}_blur(e,n,a,s){const c=this._pingPongRenderTarget,u=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,c,n,a,u),this._blurPass(c,e,a,a,u)}_blurPass(e,n,a,s,c){const u=this._renderer,d=this._blurMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-a;const _=this._sizeLods[s],g=3*_*(s>this._lodMax-_c?s-this._lodMax+_c:0),v=4*(this._cubeSize-_);lc(n,g,v,3*_,2*_),u.setRenderTarget(n),u.render(p,Iu)}}function gN(o){const e=[],n=[];let a=o;const s=o-_c+1+hN;for(let c=0;c<s;c++){const u=Math.pow(2,a);e.push(u);const d=1/(u-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,x=3,E=new Float32Array(x*v*g),b=new Float32Array(x*v*g);for(let y=0;y<g;y++){const L=y%3*2/3-1,z=y>2?0:-1,C=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];E.set(C,x*v*y);for(let R=0;R<v;R++){const O=_[R*2]*2-1,w=_[R*2+1]*2-1;y===0?Fo.set(1,w,O):y===1?Fo.set(-O,1,-w):y===2?Fo.set(-O,w,1):y===3?Fo.set(-1,w,-O):y===4?Fo.set(-O,-1,w):Fo.set(O,w,-1),Fo.toArray(b,(y*v+R)*x)}}const S=new xs;S.setAttribute("position",new fr(E,x)),S.setAttribute("outputDirection",new fr(b,x)),n.push(new dr(S,null)),a>_c&&a--}return{lodMeshes:n,sizeLods:e}}function kM(o,e,n){const a=new ur(o,e,n);return a.texture.mapping=hp,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function lc(o,e,n,a,s){o.viewport.set(e,n,a,s),o.scissor.set(e,n,a,s)}function vN(o,e,n){return new hr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mp(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function xN(o,e,n){return new hr({name:"SphericalGaussianBlur",defines:{SAMPLES:pN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mp(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function XM(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function WM(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function mp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ob extends ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new Cb(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wf(5,5,5),c=new hr({name:"CubemapFromEquirect",uniforms:Lc(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:na,blending:ds});c.uniforms.tEquirect.value=n;const u=new dr(s,c),d=n.minFilter;return n.minFilter===Xo&&(n.minFilter=Li),new yR(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,s=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,s);e.setRenderTarget(c)}}function SN(o){let e=new WeakMap,n=new WeakMap,a=null;function s(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Q0||x===J0)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const b=new Ob(E.height);return b.fromEquirectangularTexture(o,v),e.set(v,b),v.addEventListener("dispose",m),d(b.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,E=x===Q0||x===J0,b=x===nl||x===Dc;if(E||b){let S=n.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return a===null&&(a=new VM(o)),S=E?a.fromEquirectangular(v,S):a.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const L=v.image;return E&&L&&L.height>0||b&&L&&p(L)?(a===null&&(a=new VM(o)),S=E?a.fromEquirectangular(v):a.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",_),S.texture):null}}}return v}function d(v,x){return x===Q0?v.mapping=nl:x===J0&&(v.mapping=Dc),v}function p(v){let x=0;const E=6;for(let b=0;b<E;b++)v[b]!==void 0&&x++;return x===E}function m(v){const x=v.target;x.removeEventListener("dispose",m);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function _(v){const x=v.target;x.removeEventListener("dispose",_);const E=n.get(x);E!==void 0&&(n.delete(x),E.dispose())}function g(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:g}}function yN(o){const e={};function n(a){if(e[a]!==void 0)return e[a];const s=o.getExtension(a);return e[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&yc("WebGLRenderer: "+a+" extension not supported."),s}}}function MN(o,e,n,a){const s={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete s[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(g,v){return s[v.id]===!0||(v.addEventListener("dispose",u),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const x in v)e.update(v[x],o.ARRAY_BUFFER)}function m(g){const v=[],x=g.index,E=g.attributes.position;let b=0;if(E===void 0)return;if(x!==null){const L=x.array;b=x.version;for(let z=0,C=L.length;z<C;z+=3){const R=L[z+0],O=L[z+1],w=L[z+2];v.push(R,O,O,w,w,R)}}else{const L=E.array;b=E.version;for(let z=0,C=L.length/3-1;z<C;z+=3){const R=z+0,O=z+1,w=z+2;v.push(R,O,O,w,w,R)}}const S=new(E.count>=65535?Tb:bb)(v,1);S.version=b;const y=c.get(g);y&&e.remove(y),c.set(g,S)}function _(g){const v=c.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function EN(o,e,n){let a;function s(g){a=g}let c,u;function d(g){c=g.type,u=g.bytesPerElement}function p(g,v){o.drawElements(a,v,c,g*u),n.update(v,a,1)}function m(g,v,x){x!==0&&(o.drawElementsInstanced(a,v,c,g*u,x),n.update(v,a,x))}function _(g,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,g,0,x);let b=0;for(let S=0;S<x;S++)b+=v[S];n.update(b,a,1)}this.setMode=s,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function bN(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=d*(c/3);break;case o.LINES:n.lines+=d*(c/2);break;case o.LINE_STRIP:n.lines+=d*(c-1);break;case o.LINE_LOOP:n.lines+=d*c;break;case o.POINTS:n.points+=d*c;break;default:Jt("WebGLInfo: Unknown draw mode:",u);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:a}}function TN(o,e,n){const a=new WeakMap,s=new Hn;function c(u,d,p){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(d);if(v===void 0||v.count!==g){let I=function(){T.dispose(),a.delete(d),d.removeEventListener("dispose",I)};var x=I;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let R=d.attributes.position.count*C,O=1;R>e.maxTextureSize&&(O=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*O*4*g),T=new yb(w,R,O,g);T.type=Or,T.needsUpdate=!0;const D=C*4;for(let V=0;V<g;V++){const H=y[V],q=L[V],W=z[V],j=R*O*4*V;for(let X=0;X<H.count;X++){const G=X*D;E===!0&&(s.fromBufferAttribute(H,X),w[j+G+0]=s.x,w[j+G+1]=s.y,w[j+G+2]=s.z,w[j+G+3]=0),b===!0&&(s.fromBufferAttribute(q,X),w[j+G+4]=s.x,w[j+G+5]=s.y,w[j+G+6]=s.z,w[j+G+7]=0),S===!0&&(s.fromBufferAttribute(W,X),w[j+G+8]=s.x,w[j+G+9]=s.y,w[j+G+10]=s.z,w[j+G+11]=W.itemSize===4?s.w:1)}}v={count:g,texture:T,size:new nn(R,O)},a.set(d,v),d.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function AN(o,e,n,a,s){let c=new WeakMap;function u(m){const _=s.render.frame,g=m.geometry,v=e.get(m,g);if(c.get(v)!==_&&(e.update(v),c.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(n.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const x=m.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return v}function d(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:d}}const CN={[rb]:"LINEAR_TONE_MAPPING",[sb]:"REINHARD_TONE_MAPPING",[ob]:"CINEON_TONE_MAPPING",[lb]:"ACES_FILMIC_TONE_MAPPING",[ub]:"AGX_TONE_MAPPING",[fb]:"NEUTRAL_TONE_MAPPING",[cb]:"CUSTOM_TONE_MAPPING"};function RN(o,e,n,a,s,c){const u=new ur(e,n,{type:o,depthBuffer:s,stencilBuffer:c,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new xs;m.setAttribute("position",new ps([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ps([0,2,0,0,2,0],2));const _=new pR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new dr(m,_),v=new Nb(-1,1,1,-1,0,1);let x=null,E=null,b=!1,S,y=null,L=[],z=!1;this.setSize=function(C,R){u.setSize(C,R),d!==null&&d.setSize(C,R),p!==null&&p.setSize(C,R);for(let O=0;O<L.length;O++){const w=L[O];w.setSize&&w.setSize(C,R)}},this.setEffects=function(C){L=C,z=L.length>0&&L[0].isRenderPass===!0;const R=u.width,O=u.height;L.length>0&&d===null&&(d=new ur(R,O,{type:Gr,depthBuffer:!1,stencilBuffer:!1}),p=new ur(R,O,{type:Gr,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<L.length;w++){const T=L[w];T.setSize&&T.setSize(R,O)}},this.begin=function(C,R){if(b||C.toneMapping===Fr&&L.length===0)return!1;if(y=R,R!==null){const O=R.width,w=R.height;(u.width!==O||u.height!==w)&&this.setSize(O,w)}return z===!1&&C.setRenderTarget(u),S=C.toneMapping,C.toneMapping=Fr,!0},this.hasRenderPass=function(){return z},this.end=function(C,R){C.toneMapping=S,b=!0;let O=u,w=d;for(let T=0;T<L.length;T++){const D=L[T];D.enabled!==!1&&(D.render(C,w,O,R),D.needsSwap!==!1&&(O=w,w=w===d?p:d))}if(x!==C.outputColorSpace||E!==C.toneMapping){x=C.outputColorSpace,E=C.toneMapping,_.defines={},qt.getTransfer(x)===pn&&(_.defines.SRGB_TRANSFER="");const T=CN[E];T&&(_.defines[T]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=O.texture,C.setRenderTarget(y),C.render(g,v),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const Pb=new Ui,Pg=new mf(1,1),Ib=new yb,zb=new X3,Fb=new Cb,YM=[],qM=[],ZM=new Float32Array(16),jM=new Float32Array(9),KM=new Float32Array(4);function Hc(o,e,n){const a=o[0];if(a<=0||a>0)return o;const s=e*n;let c=YM[s];if(c===void 0&&(c=new Float32Array(s),YM[s]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,o[u].toArray(c,d)}return c}function ri(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function si(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function _p(o,e){let n=qM[e];n===void 0&&(n=new Int32Array(e),qM[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function wN(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function DN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ri(n,e))return;o.uniform2fv(this.addr,e),si(n,e)}}function NN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ri(n,e))return;o.uniform3fv(this.addr,e),si(n,e)}}function LN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ri(n,e))return;o.uniform4fv(this.addr,e),si(n,e)}}function UN(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(ri(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),si(n,e)}else{if(ri(n,a))return;KM.set(a),o.uniformMatrix2fv(this.addr,!1,KM),si(n,a)}}function ON(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(ri(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),si(n,e)}else{if(ri(n,a))return;jM.set(a),o.uniformMatrix3fv(this.addr,!1,jM),si(n,a)}}function PN(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(ri(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),si(n,e)}else{if(ri(n,a))return;ZM.set(a),o.uniformMatrix4fv(this.addr,!1,ZM),si(n,a)}}function IN(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function zN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ri(n,e))return;o.uniform2iv(this.addr,e),si(n,e)}}function FN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ri(n,e))return;o.uniform3iv(this.addr,e),si(n,e)}}function BN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ri(n,e))return;o.uniform4iv(this.addr,e),si(n,e)}}function HN(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function GN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ri(n,e))return;o.uniform2uiv(this.addr,e),si(n,e)}}function VN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ri(n,e))return;o.uniform3uiv(this.addr,e),si(n,e)}}function kN(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ri(n,e))return;o.uniform4uiv(this.addr,e),si(n,e)}}function XN(o,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let c;this.type===o.SAMPLER_2D_SHADOW?(Pg.compareFunction=n.isReversedDepthBuffer()?vv:gv,c=Pg):c=Pb,n.setTexture2D(e||c,s)}function WN(o,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(e||zb,s)}function YN(o,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(e||Fb,s)}function qN(o,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(e||Ib,s)}function ZN(o){switch(o){case 5126:return wN;case 35664:return DN;case 35665:return NN;case 35666:return LN;case 35674:return UN;case 35675:return ON;case 35676:return PN;case 5124:case 35670:return IN;case 35667:case 35671:return zN;case 35668:case 35672:return FN;case 35669:case 35673:return BN;case 5125:return HN;case 36294:return GN;case 36295:return VN;case 36296:return kN;case 35678:case 36198:case 36298:case 36306:case 35682:return XN;case 35679:case 36299:case 36307:return WN;case 35680:case 36300:case 36308:case 36293:return YN;case 36289:case 36303:case 36311:case 36292:return qN}}function jN(o,e){o.uniform1fv(this.addr,e)}function KN(o,e){const n=Hc(e,this.size,2);o.uniform2fv(this.addr,n)}function QN(o,e){const n=Hc(e,this.size,3);o.uniform3fv(this.addr,n)}function JN(o,e){const n=Hc(e,this.size,4);o.uniform4fv(this.addr,n)}function $N(o,e){const n=Hc(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function eL(o,e){const n=Hc(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function tL(o,e){const n=Hc(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function nL(o,e){o.uniform1iv(this.addr,e)}function iL(o,e){o.uniform2iv(this.addr,e)}function aL(o,e){o.uniform3iv(this.addr,e)}function rL(o,e){o.uniform4iv(this.addr,e)}function sL(o,e){o.uniform1uiv(this.addr,e)}function oL(o,e){o.uniform2uiv(this.addr,e)}function lL(o,e){o.uniform3uiv(this.addr,e)}function cL(o,e){o.uniform4uiv(this.addr,e)}function uL(o,e,n){const a=this.cache,s=e.length,c=_p(n,s);ri(a,c)||(o.uniform1iv(this.addr,c),si(a,c));let u;this.type===o.SAMPLER_2D_SHADOW?u=Pg:u=Pb;for(let d=0;d!==s;++d)n.setTexture2D(e[d]||u,c[d])}function fL(o,e,n){const a=this.cache,s=e.length,c=_p(n,s);ri(a,c)||(o.uniform1iv(this.addr,c),si(a,c));for(let u=0;u!==s;++u)n.setTexture3D(e[u]||zb,c[u])}function dL(o,e,n){const a=this.cache,s=e.length,c=_p(n,s);ri(a,c)||(o.uniform1iv(this.addr,c),si(a,c));for(let u=0;u!==s;++u)n.setTextureCube(e[u]||Fb,c[u])}function hL(o,e,n){const a=this.cache,s=e.length,c=_p(n,s);ri(a,c)||(o.uniform1iv(this.addr,c),si(a,c));for(let u=0;u!==s;++u)n.setTexture2DArray(e[u]||Ib,c[u])}function pL(o){switch(o){case 5126:return jN;case 35664:return KN;case 35665:return QN;case 35666:return JN;case 35674:return $N;case 35675:return eL;case 35676:return tL;case 5124:case 35670:return nL;case 35667:case 35671:return iL;case 35668:case 35672:return aL;case 35669:case 35673:return rL;case 5125:return sL;case 36294:return oL;case 36295:return lL;case 36296:return cL;case 35678:case 36198:case 36298:case 36306:case 35682:return uL;case 35679:case 36299:case 36307:return fL;case 35680:case 36300:case 36308:case 36293:return dL;case 36289:case 36303:case 36311:case 36292:return hL}}class mL{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=ZN(n.type)}}class _L{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pL(n.type)}}class gL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const s=this.seq;for(let c=0,u=s.length;c!==u;++c){const d=s[c];d.setValue(e,n[d.id],a)}}}const R_=/(\w+)(\])?(\[|\.)?/g;function QM(o,e){o.seq.push(e),o.map[e.id]=e}function vL(o,e,n){const a=o.name,s=a.length;for(R_.lastIndex=0;;){const c=R_.exec(a),u=R_.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===s){QM(n,m===void 0?new mL(d,o,e):new _L(d,o,e));break}else{let g=n.map[d];g===void 0&&(g=new gL(d),QM(n,g)),n=g}}}class Fh{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);vL(d,p,this)}const s=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):c.push(u);s.length>0&&(this.seq=s.concat(c))}setValue(e,n,a,s){const c=this.map[n];c!==void 0&&c.setValue(e,a,s)}setOptional(e,n,a){const s=n[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,n,a,s){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=a[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,s)}}static seqWithValue(e,n){const a=[];for(let s=0,c=e.length;s!==c;++s){const u=e[s];u.id in n&&a.push(u)}return a}}function JM(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const xL=37297;let SL=0;function yL(o,e){const n=o.split(`
`),a=[],s=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=s;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const $M=new Ct;function ML(o){qt._getMatrix($M,qt.workingColorSpace,o);const e=`mat3( ${$M.elements.map(n=>n.toFixed(4))} )`;switch(qt.getTransfer(o)){case Jh:return[e,"LinearTransferOETF"];case pn:return[e,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function eE(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+yL(o.getShaderSource(e),d)}else return c}function EL(o,e){const n=ML(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const bL={[rb]:"Linear",[sb]:"Reinhard",[ob]:"Cineon",[lb]:"ACESFilmic",[ub]:"AgX",[fb]:"Neutral",[cb]:"Custom"};function TL(o,e){const n=bL[e];return n===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vh=new xe;function AL(){qt.getLuminanceCoefficients(vh);const o=vh.x.toFixed(4),e=vh.y.toFixed(4),n=vh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CL(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ku).join(`
`)}function RL(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function wL(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const c=o.getActiveAttrib(e,s),u=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:d}}return n}function ku(o){return o!==""}function tE(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nE(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ig(o){return o.replace(DL,LL)}const NL=new Map;function LL(o,e){let n=Nt[e];if(n===void 0){const a=NL.get(e);if(a!==void 0)n=Nt[a],Tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ig(n)}const UL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iE(o){return o.replace(UL,OL)}function OL(o,e,n,a){let s="";for(let c=parseInt(e);c<parseInt(n);c++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return s}function aE(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PL={[Uh]:"SHADOWMAP_TYPE_PCF",[Vu]:"SHADOWMAP_TYPE_VSM"};function IL(o){return PL[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zL={[nl]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE",[hp]:"ENVMAP_TYPE_CUBE_UV"};function FL(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":zL[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const BL={[Dc]:"ENVMAP_MODE_REFRACTION"};function HL(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":BL[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GL={[ab]:"ENVMAP_BLENDING_MULTIPLY",[y3]:"ENVMAP_BLENDING_MIX",[M3]:"ENVMAP_BLENDING_ADD"};function VL(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":GL[o.combine]||"ENVMAP_BLENDING_NONE"}function kL(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function XL(o,e,n,a){const s=o.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=IL(n),m=FL(n),_=HL(n),g=VL(n),v=kL(n),x=CL(n),E=RL(c),b=s.createProgram();let S,y,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ku).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ku).join(`
`),y.length>0&&(y+=`
`)):(S=[aE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ku).join(`
`),y=[aE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fr?"#define TONE_MAPPING":"",n.toneMapping!==Fr?Nt.tonemapping_pars_fragment:"",n.toneMapping!==Fr?TL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,EL("linearToOutputTexel",n.outputColorSpace),AL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ku).join(`
`)),u=Ig(u),u=tE(u,n),u=nE(u,n),d=Ig(d),d=tE(d,n),d=nE(d,n),u=iE(u),d=iE(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===vM?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=L+S+u,C=L+y+d,R=JM(s,s.VERTEX_SHADER,z),O=JM(s,s.FRAGMENT_SHADER,C);s.attachShader(b,R),s.attachShader(b,O),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(V){if(o.debug.checkShaderErrors){const H=s.getProgramInfoLog(b)||"",q=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(O)||"",j=H.trim(),X=q.trim(),G=W.trim();let te=!0,ne=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(te=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,b,R,O);else{const P=eE(s,R,"vertex"),me=eE(s,O,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+j+`
`+P+`
`+me)}else j!==""?Tt("WebGLProgram: Program Info Log:",j):(X===""||G==="")&&(ne=!1);ne&&(V.diagnostics={runnable:te,programLog:j,vertexShader:{log:X,prefix:S},fragmentShader:{log:G,prefix:y}})}s.deleteShader(R),s.deleteShader(O),T=new Fh(s,b),D=wL(s,b)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let D;this.getAttributes=function(){return D===void 0&&w(this),D};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(b,xL)),I},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SL++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=O,this}let WL=0;class YL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new qL(e),n.set(e,a)),a}}class qL{constructor(e){this.id=WL++,this.code=e,this.usedTimes=0}}function ZL(o){return o===il||o===jh||o===Kh}function jL(o,e,n,a,s,c){const u=new Mb,d=new YL,p=new Set,m=[],_=new Map,g=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,D,I,V,H,q){const W=V.fog,j=H.geometry,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||X,G),ne=te&&te.mapping===hp?te.image.height:null,P=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&Tt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=me!==void 0?me.length:0;let Le=0;j.morphAttributes.position!==void 0&&(Le=1),j.morphAttributes.normal!==void 0&&(Le=2),j.morphAttributes.color!==void 0&&(Le=3);let k,le,Ee,J;if(P){const st=Nr[P];k=st.vertexShader,le=st.fragmentShader}else{k=T.vertexShader,le=T.fragmentShader;const st=d.getVertexShaderStage(T),we=d.getFragmentShaderStage(T);d.update(T,st,we),Ee=st.id,J=we.id}const ce=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),Ge=H.isInstancedMesh===!0,ve=H.isBatchedMesh===!0,Ue=!!T.map,lt=!!T.matcap,ct=!!te,mt=!!T.aoMap,Be=!!T.lightMap,Z=!!T.bumpMap&&T.wireframe===!1,Ne=!!T.normalMap,dt=!!T.displacementMap,xt=!!T.emissiveMap,$e=!!T.metalnessMap,vt=!!T.roughnessMap,Q=T.anisotropy>0,yt=T.clearcoat>0,rt=T.dispersion>0,B=T.retroreflectivity>0,A=T.iridescence>0,ie=T.sheen>0,re=T.transmission>0,ge=Q&&!!T.anisotropyMap,Ie=yt&&!!T.clearcoatMap,Pe=yt&&!!T.clearcoatNormalMap,Se=yt&&!!T.clearcoatRoughnessMap,ye=A&&!!T.iridescenceMap,Ve=A&&!!T.iridescenceThicknessMap,et=ie&&!!T.sheenColorMap,Xe=ie&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Re=!!T.specularColorMap,nt=!!T.specularIntensityMap,Ke=re&&!!T.transmissionMap,$=re&&!!T.thicknessMap,ze=!!T.gradientMap,Me=!!T.alphaMap,He=T.alphaTest>0,We=!!T.alphaHash,De=!!T.extensions;let Oe=Fr;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Oe=o.toneMapping);const be={shaderID:P,shaderType:T.type,shaderName:T.name,vertexShader:k,fragmentShader:le,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:ve,batchingColor:ve&&H._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&H.instanceColor!==null,instancingMorph:Ge&&H.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ue,matcap:lt,envMap:ct,envMapMode:ct&&te.mapping,envMapCubeUVHeight:ne,aoMap:mt,lightMap:Be,bumpMap:Z,normalMap:Ne,displacementMap:dt,emissiveMap:xt,normalMapObjectSpace:Ne&&T.normalMapType===T3,normalMapTangentSpace:Ne&&T.normalMapType===gM,packedNormalMap:Ne&&T.normalMapType===gM&&ZL(T.normalMap.format),metalnessMap:$e,roughnessMap:vt,anisotropy:Q,anisotropyMap:ge,clearcoat:yt,clearcoatMap:Ie,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Se,dispersion:rt,retroreflection:B,iridescence:A,iridescenceMap:ye,iridescenceThicknessMap:Ve,sheen:ie,sheenColorMap:et,sheenRoughnessMap:Xe,specularMap:ke,specularColorMap:Re,specularIntensityMap:nt,transmission:re,transmissionMap:Ke,thicknessMap:$,gradientMap:ze,opaque:T.transparent===!1&&T.blending===Qu&&T.alphaToCoverage===!1,alphaMap:Me,alphaTest:He,alphaHash:We,combine:T.combine,mapUv:Ue&&E(T.map.channel),aoMapUv:mt&&E(T.aoMap.channel),lightMapUv:Be&&E(T.lightMap.channel),bumpMapUv:Z&&E(T.bumpMap.channel),normalMapUv:Ne&&E(T.normalMap.channel),displacementMapUv:dt&&E(T.displacementMap.channel),emissiveMapUv:xt&&E(T.emissiveMap.channel),metalnessMapUv:$e&&E(T.metalnessMap.channel),roughnessMapUv:vt&&E(T.roughnessMap.channel),anisotropyMapUv:ge&&E(T.anisotropyMap.channel),clearcoatMapUv:Ie&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&E(T.sheenRoughnessMap.channel),specularMapUv:ke&&E(T.specularMap.channel),specularColorMapUv:Re&&E(T.specularColorMap.channel),specularIntensityMapUv:nt&&E(T.specularIntensityMap.channel),transmissionMapUv:Ke&&E(T.transmissionMap.channel),thicknessMapUv:$&&E(T.thicknessMap.channel),alphaMapUv:Me&&E(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ne||Q),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Ue||Me),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&Ne===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Le,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ue&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===pn,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&qt.getTransfer(T.emissiveMap.colorSpace)===pn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Lr,flipSided:T.side===na,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return be.vertexUv1s=p.has(1),be.vertexUv2s=p.has(2),be.vertexUv3s=p.has(3),p.clear(),be}function S(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)D.push(I),D.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(y(D,T),L(D,T),D.push(o.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function y(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numSunLights),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numSunLightShadows),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function L(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const D=x[T.type];let I;if(D){const V=Nr[D];I=fR.clone(V.uniforms)}else I=T.uniforms;return I}function C(T,D){let I=_.get(D);return I!==void 0?++I.usedTimes:(I=new XL(o,D,T,s),m.push(I),_.set(D,I)),I}function R(T){if(--T.usedTimes===0){const D=m.indexOf(T);m[D]=m[m.length-1],m.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function w(){d.dispose()}return{getParameters:b,getProgramCacheKey:S,getUniforms:z,acquireProgram:C,releaseProgram:R,releaseShaderCache:O,programs:m,dispose:w}}function KL(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function a(u){o.delete(u)}function s(u,d,p){o.get(u)[d]=p}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:s,dispose:c}}function QL(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function rE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function sE(){const o=[];let e=0;const n=[],a=[],s=[];function c(){e=0,n.length=0,a.length=0,s.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,E,b,S,y){let L=o[e];return L===void 0?(L={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:b,renderOrder:v.renderOrder,z:S,group:y},o[e]=L):(L.id=v.id,L.object=v,L.geometry=x,L.material=E,L.materialVariant=u(v),L.groupOrder=b,L.renderOrder=v.renderOrder,L.z=S,L.group=y),e++,L}function p(v,x,E,b,S,y,L){L.reversedDepth===!0&&(S=-S);const z=d(v,x,E,b,S,y);E.transmission>0?a.push(z):E.transparent===!0?s.push(z):n.push(z)}function m(v,x,E,b,S,y){const L=d(v,x,E,b,S,y);E.transmission>0?a.unshift(L):E.transparent===!0?s.unshift(L):n.unshift(L)}function _(v,x){n.length>1&&n.sort(v||QL),a.length>1&&a.sort(x||rE),s.length>1&&s.sort(x||rE)}function g(){for(let v=e,x=o.length;v<x;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:s,init:c,push:p,unshift:m,finish:g,sort:_}}function JL(){let o=new WeakMap;function e(a,s){const c=o.get(a);let u;return c===void 0?(u=new sE,o.set(a,[u])):s>=c.length?(u=new sE,c.push(u)):u=c[s],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function $L(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new xe,color:new tn};break;case"SpotLight":n={position:new xe,direction:new xe,color:new tn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new xe,color:new tn,distance:0,decay:0};break;case"HemisphereLight":n={direction:new xe,skyColor:new tn,groundColor:new tn};break;case"RectAreaLight":n={color:new tn,position:new xe,halfWidth:new xe,halfHeight:new xe};break}return o[e.id]=n,n}}}function eU(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let tU=0;function nU(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iU(o){const e=new $L,n=eU(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new xe);const s=new xe,c=new ei,u=new ei;function d(m){let _=0,g=0,v=0;for(let H=0;H<9;H++)a.probe[H].set(0,0,0);let x=0,E=0,b=0,S=0,y=0,L=0,z=0,C=0,R=0,O=0,w=0,T=0,D=0,I=0;m.sort(nU);for(let H=0,q=m.length;H<q;H++){const W=m[H],j=W.color,X=W.intensity,G=W.distance;let te=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===il?te=W.shadow.map.texture:te=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)_+=j.r*X,g+=j.g*X,v+=j.b*X;else if(W.isLightProbe){for(let ne=0;ne<9;ne++)a.probe[ne].addScaledVector(W.sh.coefficients[ne],X);I++}else if(W.isSunLight){const ne=e.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const P=W.shadow,me=n.get(W);me.shadowIntensity=P.intensity,me.shadowBias=P.bias,me.shadowNormalBias=P.normalBias,me.shadowRadius=P.radius,me.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),a.sunShadow[E]=me,a.sunShadowMap[E]=te;const Fe=P.getViewportCount();for(let Le=0;Le<Fe;Le++)a.sunShadowMatrix[b+Le]=P.getMatrix(Le),a.sunShadowCascade[b+Le]=P._cascadeData[Le];b+=Fe,E++}a.sun[x]=ne,x++}else if(W.isDirectionalLight){const ne=e.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const P=W.shadow,me=n.get(W);me.shadowIntensity=P.intensity,me.shadowBias=P.bias,me.shadowNormalBias=P.normalBias,me.shadowRadius=P.radius,me.shadowMapSize=P.mapSize,a.directionalShadow[S]=me,a.directionalShadowMap[S]=te,a.directionalShadowMatrix[S]=W.shadow.matrix,R++}a.directional[S]=ne,S++}else if(W.isSpotLight){const ne=e.get(W);ne.position.setFromMatrixPosition(W.matrixWorld),ne.color.copy(j).multiplyScalar(X),ne.distance=G,ne.coneCos=Math.cos(W.angle),ne.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ne.decay=W.decay,a.spot[L]=ne;const P=W.shadow;if(W.map&&(a.spotLightMap[T]=W.map,T++,P.updateMatrices(W),W.castShadow&&D++),a.spotLightMatrix[L]=P.matrix,W.castShadow){const me=n.get(W);me.shadowIntensity=P.intensity,me.shadowBias=P.bias,me.shadowNormalBias=P.normalBias,me.shadowRadius=P.radius,me.shadowMapSize=P.mapSize,a.spotShadow[L]=me,a.spotShadowMap[L]=te,w++}L++}else if(W.isRectAreaLight){const ne=e.get(W);ne.color.copy(j).multiplyScalar(X),ne.halfWidth.set(W.width*.5,0,0),ne.halfHeight.set(0,W.height*.5,0),a.rectArea[z]=ne,z++}else if(W.isPointLight){const ne=e.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity),ne.distance=W.distance,ne.decay=W.decay,W.castShadow){const P=W.shadow,me=n.get(W);me.shadowIntensity=P.intensity,me.shadowBias=P.bias,me.shadowNormalBias=P.normalBias,me.shadowRadius=P.radius,me.shadowMapSize=P.mapSize,me.shadowCameraNear=P.camera.near,me.shadowCameraFar=P.camera.far,a.pointShadow[y]=me,a.pointShadowMap[y]=te,a.pointShadowMatrix[y]=W.shadow.matrix,O++}a.point[y]=ne,y++}else if(W.isHemisphereLight){const ne=e.get(W);ne.skyColor.copy(W.color).multiplyScalar(X),ne.groundColor.copy(W.groundColor).multiplyScalar(X),a.hemi[C]=ne,C++}}z>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Je.LTC_FLOAT_1,a.rectAreaLTC2=Je.LTC_FLOAT_2):(a.rectAreaLTC1=Je.LTC_HALF_1,a.rectAreaLTC2=Je.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const V=a.hash;(V.sunLength!==x||V.directionalLength!==S||V.pointLength!==y||V.spotLength!==L||V.rectAreaLength!==z||V.hemiLength!==C||V.numSunShadows!==E||V.numDirectionalShadows!==R||V.numPointShadows!==O||V.numSpotShadows!==w||V.numSpotMaps!==T||V.numLightProbes!==I)&&(a.sun.length=x,a.directional.length=S,a.spot.length=L,a.rectArea.length=z,a.point.length=y,a.hemi.length=C,a.sunShadow.length=E,a.sunShadowMap.length=E,a.sunShadowMatrix.length=b,a.sunShadowCascade.length=b,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.directionalShadowMatrix.length=R,a.pointShadow.length=O,a.pointShadowMap.length=O,a.pointShadowMatrix.length=O,a.spotShadow.length=w,a.spotShadowMap.length=w,a.spotLightMatrix.length=w+T-D,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=D,a.numLightProbes=I,V.sunLength=x,V.directionalLength=S,V.pointLength=y,V.spotLength=L,V.rectAreaLength=z,V.hemiLength=C,V.numSunShadows=E,V.numDirectionalShadows=R,V.numPointShadows=O,V.numSpotShadows=w,V.numSpotMaps=T,V.numLightProbes=I,a.version=tU++)}function p(m,_){let g=0,v=0,x=0,E=0,b=0,S=0;const y=_.matrixWorldInverse;for(let L=0,z=m.length;L<z;L++){const C=m[L];if(C.isSunLight){const R=a.sun[g];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),g++}else if(C.isDirectionalLight){const R=a.directional[v];R.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(y),v++}else if(C.isSpotLight){const R=a.spot[E];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(y),E++}else if(C.isRectAreaLight){const R=a.rectArea[b];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(C.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),b++}else if(C.isPointLight){const R=a.point[x];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(y),x++}else if(C.isHemisphereLight){const R=a.hemi[S];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(y),S++}}}return{setup:d,setupView:p,state:a}}function oE(o){const e=new iU(o),n=[],a=[],s=[];function c(v){g.camera=v,n.length=0,a.length=0,s.length=0}function u(v){n.push(v)}function d(v){a.push(v)}function p(v){s.push(v)}function m(){e.setup(n)}function _(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:a,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:m,setupLightsView:_,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function aU(o){let e=new WeakMap;function n(s,c=0){const u=e.get(s);let d;return u===void 0?(d=new oE(o),e.set(s,[d])):c>=u.length?(d=new oE(o),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const rU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sU=`uniform sampler2D shadow_pass;
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
}`,oU=[new xe(1,0,0),new xe(-1,0,0),new xe(0,1,0),new xe(0,-1,0),new xe(0,0,1),new xe(0,0,-1)],lU=[new xe(0,-1,0),new xe(0,-1,0),new xe(0,0,1),new xe(0,0,-1),new xe(0,-1,0),new xe(0,-1,0)],lE=new ei,zu=new xe,w_=new xe;function cU(o,e,n){let a=new Ab;const s=new nn,c=new nn,u=new Hn,d=new mR,p=new _R,m={},_=n.maxTextureSize,g={[tl]:na,[na]:tl,[Lr]:Lr},v=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nn},radius:{value:4}},vertexShader:rU,fragmentShader:sU}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new xs;E.setAttribute("position",new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new dr(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let y=this.type;this.render=function(O,w,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===n3&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Uh);const D=o.getRenderTarget(),I=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),H=o.state;H.setBlending(ds),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=y!==this.type;q&&w.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(j=>j.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,j=O.length;W<j;W++){const X=O[W],G=X.shadow;if(G===void 0){Tt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const te=G.getFrameExtents();s.multiply(te),c.copy(G.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(c.x=Math.floor(_/te.x),s.x=c.x*te.x,G.mapSize.x=c.x),s.y>_&&(c.y=Math.floor(_/te.y),s.y=c.y*te.y,G.mapSize.y=c.y));const ne=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ne,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Vu){if(X.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ur(s.x,s.y,{format:il,type:Gr,minFilter:Li,magFilter:Li,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new mf(s.x,s.y,Or),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=_s,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=yi,G.map.depthTexture.magFilter=yi}else X.isPointLight?(G.map=new Ob(s.x),G.map.depthTexture=new cR(s.x,Hr)):(G.map=new ur(s.x,s.y),G.map.depthTexture=new mf(s.x,s.y,Hr)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=_s,this.type===Uh?(G.map.depthTexture.compareFunction=ne?vv:gv,G.map.depthTexture.minFilter=Li,G.map.depthTexture.magFilter=Li):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=yi,G.map.depthTexture.magFilter=yi);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const P=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,T);for(let me=0;me<P;me++){const Fe=G.getCamera(me);if(X.isPointLight){const Le=G.camera,k=G.matrix,le=X.distance||Le.far;le!==Le.far&&(Le.far=le,Le.updateProjectionMatrix()),zu.setFromMatrixPosition(X.matrixWorld),Le.position.copy(zu),w_.copy(Le.position),w_.add(oU[me]),Le.up.copy(lU[me]),Le.lookAt(w_),Le.updateMatrixWorld(),k.makeTranslation(-zu.x,-zu.y,-zu.z),lE.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(lE,Le.coordinateSystem,Le.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,me),o.clear();else{me===0&&(o.setRenderTarget(G.map),o.clear());const Le=G.getViewport(me);u.set(c.x*Le.x,c.y*Le.y,c.x*Le.z,c.y*Le.w),H.viewport(u)}a=G.getFrustum(me),C(w,T,Fe,X,this.type)}G.isPointLightShadow!==!0&&this.type===Vu&&L(G,T),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(D,I,V)};function L(O,w){const T=e.update(b);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null?O.mapPass=new ur(s.x,s.y,{format:il,type:Gr}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),v.uniforms.shadow_pass.value=O.map.depthTexture,v.uniforms.resolution.value.set(O.map.width,O.map.height),v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(w,null,T,v,b,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value.set(O.map.width,O.map.height),x.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(w,null,T,x,b,null)}function z(O,w,T,D){let I=null;const V=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)I=V;else if(I=T.isPointLight===!0?p:d,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const H=I.uuid,q=w.uuid;let W=m[H];W===void 0&&(W={},m[H]=W);let j=W[q];j===void 0&&(j=I.clone(),W[q]=j,w.addEventListener("dispose",R)),I=j}if(I.visible=w.visible,I.wireframe=w.wireframe,D===Vu?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:g[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const H=o.properties.get(I);H.light=T}return I}function C(O,w,T,D,I){if(O.visible===!1)return;if(O.layers.test(w.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&I===Vu)&&(!O.frustumCulled||O.intersectsFrustum(a))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const q=e.update(O),W=O.material;if(Array.isArray(W)){const j=q.groups;for(let X=0,G=j.length;X<G;X++){const te=j[X],ne=W[te.materialIndex];if(ne&&ne.visible){const P=z(O,ne,D,I);O.onBeforeShadow(o,O,w,T,q,P,te),o.renderBufferDirect(T,null,q,P,O,te),O.onAfterShadow(o,O,w,T,q,P,te)}}}else if(W.visible){const j=z(O,W,D,I);O.onBeforeShadow(o,O,w,T,q,j,null),o.renderBufferDirect(T,null,q,j,O,null),O.onAfterShadow(o,O,w,T,q,j,null)}}const H=O.children;for(let q=0,W=H.length;q<W;q++)C(H[q],w,T,D,I)}function R(O){O.target.removeEventListener("dispose",R);for(const T in m){const D=m[T],I=O.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function uU(o,e){function n(){let $=!1;const ze=new Hn;let Me=null;const He=new Hn(0,0,0,0);return{setMask:function(We){Me!==We&&!$&&(o.colorMask(We,We,We,We),Me=We)},setLocked:function(We){$=We},setClear:function(We,De,Oe,be,st){st===!0&&(We*=be,De*=be,Oe*=be),ze.set(We,De,Oe,be),He.equals(ze)===!1&&(o.clearColor(We,De,Oe,be),He.copy(ze))},reset:function(){$=!1,Me=null,He.set(-1,0,0,0)}}}function a(){let $=!1,ze=!1,Me=null,He=null,We=null;return{setReversed:function(De){if(ze!==De){const Oe=e.get("EXT_clip_control");De?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ze=De;const be=We;We=null,this.setClear(be)}},getReversed:function(){return ze},setTest:function(De){De?ce(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(De){Me!==De&&!$&&(o.depthMask(De),Me=De)},setFunc:function(De){if(ze&&(De=z3[De]),He!==De){switch(De){case j_:o.depthFunc(o.NEVER);break;case K_:o.depthFunc(o.ALWAYS);break;case Q_:o.depthFunc(o.LESS);break;case ff:o.depthFunc(o.LEQUAL);break;case J_:o.depthFunc(o.EQUAL);break;case $_:o.depthFunc(o.GEQUAL);break;case eg:o.depthFunc(o.GREATER);break;case tg:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}He=De}},setLocked:function(De){$=De},setClear:function(De){We!==De&&(We=De,ze&&(De=1-De),o.clearDepth(De))},reset:function(){$=!1,Me=null,He=null,We=null,ze=!1}}}function s(){let $=!1,ze=null,Me=null,He=null,We=null,De=null,Oe=null,be=null,st=null;return{setTest:function(we){$||(we?ce(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(we){ze!==we&&!$&&(o.stencilMask(we),ze=we)},setFunc:function(we,_t,ut){(Me!==we||He!==_t||We!==ut)&&(o.stencilFunc(we,_t,ut),Me=we,He=_t,We=ut)},setOp:function(we,_t,ut){(De!==we||Oe!==_t||be!==ut)&&(o.stencilOp(we,_t,ut),De=we,Oe=_t,be=ut)},setLocked:function(we){$=we},setClear:function(we){st!==we&&(o.clearStencil(we),st=we)},reset:function(){$=!1,ze=null,Me=null,He=null,We=null,De=null,Oe=null,be=null,st=null}}}const c=new n,u=new a,d=new s,p=new WeakMap,m=new WeakMap;let _={},g={},v={},x=new WeakMap,E=[],b=null,S=!1,y=null,L=null,z=null,C=null,R=null,O=null,w=null,T=new tn(0,0,0),D=0,I=!1,V=null,H=null,q=null,W=null,j=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),G=te>=1):ne.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),G=te>=2);let P=null,me={};const Fe=o.getParameter(o.SCISSOR_BOX),Le=o.getParameter(o.VIEWPORT),k=new Hn().fromArray(Fe),le=new Hn().fromArray(Le);function Ee($,ze,Me,He){const We=new Uint8Array(4),De=o.createTexture();o.bindTexture($,De),o.texParameteri($,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri($,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Oe=0;Oe<Me;Oe++)$===o.TEXTURE_3D||$===o.TEXTURE_2D_ARRAY?o.texImage3D(ze,0,o.RGBA,1,1,He,0,o.RGBA,o.UNSIGNED_BYTE,We):o.texImage2D(ze+Oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,We);return De}const J={};J[o.TEXTURE_2D]=Ee(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ce(o.DEPTH_TEST),u.setFunc(ff),Z(!1),Ne(hM),ce(o.CULL_FACE),mt(ds);function ce($){_[$]!==!0&&(o.enable($),_[$]=!0)}function Ce($){_[$]!==!1&&(o.disable($),_[$]=!1)}function Ge($,ze){return v[$]!==ze?(o.bindFramebuffer($,ze),v[$]=ze,$===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=ze),$===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=ze),!0):!1}function ve($,ze){let Me=E,He=!1;if($){Me=x.get(ze),Me===void 0&&(Me=[],x.set(ze,Me));const We=$.textures;if(Me.length!==We.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let De=0,Oe=We.length;De<Oe;De++)Me[De]=o.COLOR_ATTACHMENT0+De;Me.length=We.length,He=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,He=!0);He&&o.drawBuffers(Me)}function Ue($){return b!==$?(o.useProgram($),b=$,!0):!1}const lt={[hc]:o.FUNC_ADD,[a3]:o.FUNC_SUBTRACT,[r3]:o.FUNC_REVERSE_SUBTRACT};lt[s3]=o.MIN,lt[o3]=o.MAX;const ct={[l3]:o.ZERO,[c3]:o.ONE,[u3]:o.SRC_COLOR,[nb]:o.SRC_ALPHA,[_3]:o.SRC_ALPHA_SATURATE,[p3]:o.DST_COLOR,[d3]:o.DST_ALPHA,[f3]:o.ONE_MINUS_SRC_COLOR,[ib]:o.ONE_MINUS_SRC_ALPHA,[m3]:o.ONE_MINUS_DST_COLOR,[h3]:o.ONE_MINUS_DST_ALPHA,[g3]:o.CONSTANT_COLOR,[v3]:o.ONE_MINUS_CONSTANT_COLOR,[x3]:o.CONSTANT_ALPHA,[S3]:o.ONE_MINUS_CONSTANT_ALPHA};function mt($,ze,Me,He,We,De,Oe,be,st,we){if($===ds){S===!0&&(Ce(o.BLEND),S=!1);return}if(S===!1&&(ce(o.BLEND),S=!0),$!==i3){if($!==y||we!==I){if((L!==hc||R!==hc)&&(o.blendEquation(o.FUNC_ADD),L=hc,R=hc),we)switch($){case Qu:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pM:o.blendFunc(o.ONE,o.ONE);break;case mM:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _M:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Jt("WebGLState: Invalid blending: ",$);break}else switch($){case Qu:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pM:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mM:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _M:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",$);break}z=null,C=null,O=null,w=null,T.set(0,0,0),D=0,y=$,I=we}return}We=We||ze,De=De||Me,Oe=Oe||He,(ze!==L||We!==R)&&(o.blendEquationSeparate(lt[ze],lt[We]),L=ze,R=We),(Me!==z||He!==C||De!==O||Oe!==w)&&(o.blendFuncSeparate(ct[Me],ct[He],ct[De],ct[Oe]),z=Me,C=He,O=De,w=Oe),(be.equals(T)===!1||st!==D)&&(o.blendColor(be.r,be.g,be.b,st),T.copy(be),D=st),y=$,I=!1}function Be($,ze){$.side===Lr?Ce(o.CULL_FACE):ce(o.CULL_FACE);let Me=$.side===na;ze&&(Me=!Me),Z(Me),$.blending===Qu&&$.transparent===!1?mt(ds):mt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),c.setMask($.colorWrite);const He=$.stencilWrite;d.setTest(He),He&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),xt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function Z($){V!==$&&($?o.frontFace(o.CW):o.frontFace(o.CCW),V=$)}function Ne($){$!==e3?(ce(o.CULL_FACE),$!==H&&($===hM?o.cullFace(o.BACK):$===t3?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),H=$}function dt($){$!==q&&(G&&o.lineWidth($),q=$)}function xt($,ze,Me){$?(ce(o.POLYGON_OFFSET_FILL),(W!==ze||j!==Me)&&(W=ze,j=Me,u.getReversed()&&(ze=-ze),o.polygonOffset(ze,Me))):Ce(o.POLYGON_OFFSET_FILL)}function $e($){$?ce(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function vt($){$===void 0&&($=o.TEXTURE0+X-1),P!==$&&(o.activeTexture($),P=$)}function Q($,ze,Me){Me===void 0&&(P===null?Me=o.TEXTURE0+X-1:Me=P);let He=me[Me];He===void 0&&(He={type:void 0,texture:void 0},me[Me]=He),(He.type!==$||He.texture!==ze)&&(P!==Me&&(o.activeTexture(Me),P=Me),o.bindTexture($,ze||J[$]),He.type=$,He.texture=ze)}function yt(){const $=me[P];$!==void 0&&$.type!==void 0&&(o.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function rt(){try{o.compressedTexImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function B(){try{o.compressedTexImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function A(){try{o.texSubImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function ie(){try{o.texSubImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function re(){try{o.compressedTexSubImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function ge(){try{o.compressedTexSubImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function Ie(){try{o.texStorage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function Pe(){try{o.texStorage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function Se(){try{o.texImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function ye(){try{o.texImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function Ve($){return g[$]!==void 0?g[$]:o.getParameter($)}function et($,ze){g[$]!==ze&&(o.pixelStorei($,ze),g[$]=ze)}function Xe($){k.equals($)===!1&&(o.scissor($.x,$.y,$.z,$.w),k.copy($))}function ke($){le.equals($)===!1&&(o.viewport($.x,$.y,$.z,$.w),le.copy($))}function Re($,ze){let Me=m.get(ze);Me===void 0&&(Me=new WeakMap,m.set(ze,Me));let He=Me.get($);He===void 0&&(He=o.getUniformBlockIndex(ze,$.name),Me.set($,He))}function nt($,ze){const He=m.get(ze).get($);p.get(ze)!==He&&(o.uniformBlockBinding(ze,He,$.__bindingPointIndex),p.set(ze,He))}function Ke(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},g={},P=null,me={},v={},x=new WeakMap,E=[],b=null,S=!1,y=null,L=null,z=null,C=null,R=null,O=null,w=null,T=new tn(0,0,0),D=0,I=!1,V=null,H=null,q=null,W=null,j=null,k.set(0,0,o.canvas.width,o.canvas.height),le.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ce,disable:Ce,bindFramebuffer:Ge,drawBuffers:ve,useProgram:Ue,setBlending:mt,setMaterial:Be,setFlipSided:Z,setCullFace:Ne,setLineWidth:dt,setPolygonOffset:xt,setScissorTest:$e,activeTexture:vt,bindTexture:Q,unbindTexture:yt,compressedTexImage2D:rt,compressedTexImage3D:B,texImage2D:Se,texImage3D:ye,pixelStorei:et,getParameter:Ve,updateUBOMapping:Re,uniformBlockBinding:nt,texStorage2D:Ie,texStorage3D:Pe,texSubImage2D:A,texSubImage3D:ie,compressedTexSubImage2D:re,compressedTexSubImage3D:ge,scissor:Xe,viewport:ke,reset:Ke}}function fU(o,e,n,a,s,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new nn,_=new WeakMap,g=new Set;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,A){return E?new OffscreenCanvas(B,A):pf("canvas")}function S(B,A,ie){let re=1;const ge=rt(B);if((ge.width>ie||ge.height>ie)&&(re=ie/Math.max(ge.width,ge.height)),re<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ie=Math.floor(re*ge.width),Pe=Math.floor(re*ge.height);v===void 0&&(v=b(Ie,Pe));const Se=A?b(Ie,Pe):v;return Se.width=Ie,Se.height=Pe,Se.getContext("2d").drawImage(B,0,0,Ie,Pe),Tt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ie+"x"+Pe+")."),Se}else return"data"in B&&Tt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),B;return B}function y(B){return B.generateMipmaps}function L(B){o.generateMipmap(B)}function z(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(B,A,ie,re,ge,Ie=!1){if(B!==null){if(o[B]!==void 0)return o[B];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Pe;re&&(Pe=e.get("EXT_texture_norm16"),Pe||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=A;if(A===o.RED&&(ie===o.FLOAT&&(Se=o.R32F),ie===o.HALF_FLOAT&&(Se=o.R16F),ie===o.UNSIGNED_BYTE&&(Se=o.R8),ie===o.UNSIGNED_SHORT&&Pe&&(Se=Pe.R16_EXT),ie===o.SHORT&&Pe&&(Se=Pe.R16_SNORM_EXT)),A===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.R8UI),ie===o.UNSIGNED_SHORT&&(Se=o.R16UI),ie===o.UNSIGNED_INT&&(Se=o.R32UI),ie===o.BYTE&&(Se=o.R8I),ie===o.SHORT&&(Se=o.R16I),ie===o.INT&&(Se=o.R32I)),A===o.RG&&(ie===o.FLOAT&&(Se=o.RG32F),ie===o.HALF_FLOAT&&(Se=o.RG16F),ie===o.UNSIGNED_BYTE&&(Se=o.RG8),ie===o.UNSIGNED_SHORT&&Pe&&(Se=Pe.RG16_EXT),ie===o.SHORT&&Pe&&(Se=Pe.RG16_SNORM_EXT)),A===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.RG8UI),ie===o.UNSIGNED_SHORT&&(Se=o.RG16UI),ie===o.UNSIGNED_INT&&(Se=o.RG32UI),ie===o.BYTE&&(Se=o.RG8I),ie===o.SHORT&&(Se=o.RG16I),ie===o.INT&&(Se=o.RG32I)),A===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(Se=o.RGB16UI),ie===o.UNSIGNED_INT&&(Se=o.RGB32UI),ie===o.BYTE&&(Se=o.RGB8I),ie===o.SHORT&&(Se=o.RGB16I),ie===o.INT&&(Se=o.RGB32I)),A===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(Se=o.RGBA16UI),ie===o.UNSIGNED_INT&&(Se=o.RGBA32UI),ie===o.BYTE&&(Se=o.RGBA8I),ie===o.SHORT&&(Se=o.RGBA16I),ie===o.INT&&(Se=o.RGBA32I)),A===o.RGB&&(ie===o.UNSIGNED_SHORT&&Pe&&(Se=Pe.RGB16_EXT),ie===o.SHORT&&Pe&&(Se=Pe.RGB16_SNORM_EXT),ie===o.UNSIGNED_INT_5_9_9_9_REV&&(Se=o.RGB9_E5),ie===o.UNSIGNED_INT_10F_11F_11F_REV&&(Se=o.R11F_G11F_B10F)),A===o.RGBA){const ye=Ie?Jh:qt.getTransfer(ge);ie===o.FLOAT&&(Se=o.RGBA32F),ie===o.HALF_FLOAT&&(Se=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(Se=ye===pn?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT&&Pe&&(Se=Pe.RGBA16_EXT),ie===o.SHORT&&Pe&&(Se=Pe.RGBA16_SNORM_EXT),ie===o.UNSIGNED_SHORT_4_4_4_4&&(Se=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(Se=o.RGB5_A1)}return(Se===o.R16F||Se===o.R32F||Se===o.RG16F||Se===o.RG32F||Se===o.RGBA16F||Se===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function R(B,A){let ie;return B?A===null||A===Hr||A===hf?ie=o.DEPTH24_STENCIL8:A===Or?ie=o.DEPTH32F_STENCIL8:A===df&&(ie=o.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Hr||A===hf?ie=o.DEPTH_COMPONENT24:A===Or?ie=o.DEPTH_COMPONENT32F:A===df&&(ie=o.DEPTH_COMPONENT16),ie}function O(B,A){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==yi&&B.minFilter!==Li?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function w(B){const A=B.target;A.removeEventListener("dispose",w),D(A),A.isVideoTexture&&_.delete(A),A.isHTMLTexture&&g.delete(A)}function T(B){const A=B.target;A.removeEventListener("dispose",T),V(A)}function D(B){const A=a.get(B);if(A.__webglInit===void 0)return;const ie=B.source,re=x.get(ie);if(re){const ge=re[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&I(B),Object.keys(re).length===0&&x.delete(ie)}a.remove(B)}function I(B){const A=a.get(B);o.deleteTexture(A.__webglTexture);const ie=B.source,re=x.get(ie);delete re[A.__cacheKey],u.memory.textures--}function V(B){const A=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let ge=0;ge<A.__webglFramebuffer[re].length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[re][ge]);else o.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)o.deleteFramebuffer(A.__webglFramebuffer[re]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=B.textures;for(let re=0,ge=ie.length;re<ge;re++){const Ie=a.get(ie[re]);Ie.__webglTexture&&(o.deleteTexture(Ie.__webglTexture),u.memory.textures--),a.remove(ie[re])}a.remove(B)}let H=0;function q(){H=0}function W(){return H}function j(B){H=B}function X(){const B=H;return B>=s.maxTextures&&Tt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,B}function G(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function te(B,A){const ie=a.get(B);if(B.isVideoTexture&&Q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ie.__version!==B.version){const re=B.image;if(re===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(ie,B,A);return}}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+A)}function ne(B,A){const ie=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){Ce(ie,B,A);return}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+A)}function P(B,A){const ie=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){Ce(ie,B,A);return}n.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+A)}function me(B,A){const ie=a.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&ie.__version!==B.version){Ge(ie,B,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+A)}const Fe={[ng]:o.REPEAT,[lr]:o.CLAMP_TO_EDGE,[ig]:o.MIRRORED_REPEAT},Le={[yi]:o.NEAREST,[E3]:o.NEAREST_MIPMAP_NEAREST,[Kd]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[$0]:o.LINEAR_MIPMAP_NEAREST,[Xo]:o.LINEAR_MIPMAP_LINEAR},k={[C3]:o.NEVER,[L3]:o.ALWAYS,[R3]:o.LESS,[gv]:o.LEQUAL,[w3]:o.EQUAL,[vv]:o.GEQUAL,[D3]:o.GREATER,[N3]:o.NOTEQUAL};function le(B,A){if(A.type===Or&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Li||A.magFilter===$0||A.magFilter===Kd||A.magFilter===Xo||A.minFilter===Li||A.minFilter===$0||A.minFilter===Kd||A.minFilter===Xo)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,Fe[A.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,Fe[A.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,Fe[A.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,Le[A.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,Le[A.minFilter]),A.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,k[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yi||A.minFilter!==Kd&&A.minFilter!==Xo||A.type===Or&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");o.texParameterf(B,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function Ee(B,A){let ie=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",w));const re=A.source;let ge=x.get(re);ge===void 0&&(ge={},x.set(re,ge));const Ie=G(A);if(Ie!==B.__cacheKey){ge[Ie]===void 0&&(ge[Ie]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),ge[Ie].usedTimes++;const Pe=ge[B.__cacheKey];Pe!==void 0&&(ge[B.__cacheKey].usedTimes--,Pe.usedTimes===0&&I(A)),B.__cacheKey=Ie,B.__webglTexture=ge[Ie].texture}return ie}function J(B,A,ie){return Math.floor(Math.floor(B/ie)/A)}function ce(B,A,ie,re){const Ie=B.updateRanges;if(Ie.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,ie,re,A.data);else{Ie.sort((et,Xe)=>et.start-Xe.start);let Pe=0;for(let et=1;et<Ie.length;et++){const Xe=Ie[Pe],ke=Ie[et],Re=Xe.start+Xe.count,nt=J(ke.start,A.width,4),Ke=J(Xe.start,A.width,4);ke.start<=Re+1&&nt===Ke&&J(ke.start+ke.count-1,A.width,4)===nt?Xe.count=Math.max(Xe.count,ke.start+ke.count-Xe.start):(++Pe,Ie[Pe]=ke)}Ie.length=Pe+1;const Se=n.getParameter(o.UNPACK_ROW_LENGTH),ye=n.getParameter(o.UNPACK_SKIP_PIXELS),Ve=n.getParameter(o.UNPACK_SKIP_ROWS);n.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let et=0,Xe=Ie.length;et<Xe;et++){const ke=Ie[et],Re=Math.floor(ke.start/4),nt=Math.ceil(ke.count/4),Ke=Re%A.width,$=Math.floor(Re/A.width),ze=nt,Me=1;n.pixelStorei(o.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(o.UNPACK_SKIP_ROWS,$),n.texSubImage2D(o.TEXTURE_2D,0,Ke,$,ze,Me,ie,re,A.data)}B.clearUpdateRanges(),n.pixelStorei(o.UNPACK_ROW_LENGTH,Se),n.pixelStorei(o.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(o.UNPACK_SKIP_ROWS,Ve)}}function Ce(B,A,ie){let re=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=o.TEXTURE_3D);const ge=Ee(B,A),Ie=A.source;n.bindTexture(re,B.__webglTexture,o.TEXTURE0+ie);const Pe=a.get(Ie);if(Ie.version!==Pe.__version||ge===!0){if(n.activeTexture(o.TEXTURE0+ie),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Me=qt.getPrimaries(qt.workingColorSpace),He=A.colorSpace===$s?null:qt.getPrimaries(A.colorSpace),We=A.colorSpace===$s||Me===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment);let ye=S(A.image,!1,s.maxTextureSize);ye=yt(A,ye);const Ve=c.convert(A.format,A.colorSpace),et=c.convert(A.type);let Xe=C(A.internalFormat,Ve,et,A.normalized,A.colorSpace,A.isVideoTexture);le(re,A);let ke;const Re=A.mipmaps,nt=A.isVideoTexture!==!0,Ke=Pe.__version===void 0||ge===!0,$=Ie.dataReady,ze=O(A,ye);if(A.isDepthTexture)Xe=R(A.format===Wo,A.type),Ke&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Xe,ye.width,ye.height):n.texImage2D(o.TEXTURE_2D,0,Xe,ye.width,ye.height,0,Ve,et,null));else if(A.isDataTexture)if(Re.length>0){nt&&Ke&&n.texStorage2D(o.TEXTURE_2D,ze,Xe,Re[0].width,Re[0].height);for(let Me=0,He=Re.length;Me<He;Me++)ke=Re[Me],nt?$&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,ke.width,ke.height,Ve,et,ke.data):n.texImage2D(o.TEXTURE_2D,Me,Xe,ke.width,ke.height,0,Ve,et,ke.data);A.generateMipmaps=!1}else nt?(Ke&&n.texStorage2D(o.TEXTURE_2D,ze,Xe,ye.width,ye.height),$&&ce(A,ye,Ve,et)):n.texImage2D(o.TEXTURE_2D,0,Xe,ye.width,ye.height,0,Ve,et,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&Ke&&n.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Xe,Re[0].width,Re[0].height,ye.depth);for(let Me=0,He=Re.length;Me<He;Me++)if(ke=Re[Me],A.format!==cr)if(Ve!==null)if(nt){if($)if(A.layerUpdates.size>0){const We=HM(ke.width,ke.height,A.format,A.type);for(const De of A.layerUpdates){const Oe=ke.data.subarray(De*We/ke.data.BYTES_PER_ELEMENT,(De+1)*We/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,De,ke.width,ke.height,1,Ve,Oe)}}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,ke.width,ke.height,ye.depth,Ve,ke.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Xe,ke.width,ke.height,ye.depth,0,ke.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?$&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,ke.width,ke.height,ye.depth,Ve,et,ke.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Me,Xe,ke.width,ke.height,ye.depth,0,Ve,et,ke.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{nt&&Ke&&n.texStorage2D(o.TEXTURE_2D,ze,Xe,Re[0].width,Re[0].height);for(let Me=0,He=Re.length;Me<He;Me++)ke=Re[Me],A.format!==cr?Ve!==null?nt?$&&n.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,ke.width,ke.height,Ve,ke.data):n.compressedTexImage2D(o.TEXTURE_2D,Me,Xe,ke.width,ke.height,0,ke.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?$&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,ke.width,ke.height,Ve,et,ke.data):n.texImage2D(o.TEXTURE_2D,Me,Xe,ke.width,ke.height,0,Ve,et,ke.data)}else if(A.isDataArrayTexture)if(nt){if(Ke&&n.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Xe,ye.width,ye.height,ye.depth),$)if(A.layerUpdates.size>0){const Me=HM(ye.width,ye.height,A.format,A.type);for(const He of A.layerUpdates){const We=ye.data.subarray(He*Me/ye.data.BYTES_PER_ELEMENT,(He+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,He,ye.width,ye.height,1,Ve,et,We)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ve,et,ye.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Xe,ye.width,ye.height,ye.depth,0,Ve,et,ye.data);else if(A.isData3DTexture)nt?(Ke&&n.texStorage3D(o.TEXTURE_3D,ze,Xe,ye.width,ye.height,ye.depth),$&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ve,et,ye.data)):n.texImage3D(o.TEXTURE_3D,0,Xe,ye.width,ye.height,ye.depth,0,Ve,et,ye.data);else if(A.isFramebufferTexture){if(Ke)if(nt)n.texStorage2D(o.TEXTURE_2D,ze,Xe,ye.width,ye.height);else{let Me=ye.width,He=ye.height;for(let We=0;We<ze;We++)n.texImage2D(o.TEXTURE_2D,We,Xe,Me,He,0,Ve,et,null),Me>>=1,He>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ye.parentNode!==Me){Me.appendChild(ye),g.add(A),Me.onpaint=He=>{const We=He.changedElements;for(const De of g)We.includes(De.image)&&(De.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,ye);else{const We=o.RGBA,De=o.RGBA,Oe=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,We,De,Oe,ye)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Re.length>0){if(nt&&Ke){const Me=rt(Re[0]);n.texStorage2D(o.TEXTURE_2D,ze,Xe,Me.width,Me.height)}for(let Me=0,He=Re.length;Me<He;Me++)ke=Re[Me],nt?$&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ve,et,ke):n.texImage2D(o.TEXTURE_2D,Me,Xe,Ve,et,ke);A.generateMipmaps=!1}else if(nt){if(Ke){const Me=rt(ye);n.texStorage2D(o.TEXTURE_2D,ze,Xe,Me.width,Me.height)}$&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ve,et,ye)}else n.texImage2D(o.TEXTURE_2D,0,Xe,Ve,et,ye);y(A)&&L(re),Pe.__version=Ie.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Ge(B,A,ie){if(A.image.length!==6)return;const re=Ee(B,A),ge=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+ie);const Ie=a.get(ge);if(ge.version!==Ie.__version||re===!0){n.activeTexture(o.TEXTURE0+ie);const Pe=qt.getPrimaries(qt.workingColorSpace),Se=A.colorSpace===$s?null:qt.getPrimaries(A.colorSpace),ye=A.colorSpace===$s||Pe===Se?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ve=A.isCompressedTexture||A.image[0].isCompressedTexture,et=A.image[0]&&A.image[0].isDataTexture,Xe=[];for(let De=0;De<6;De++)!Ve&&!et?Xe[De]=S(A.image[De],!0,s.maxCubemapSize):Xe[De]=et?A.image[De].image:A.image[De],Xe[De]=yt(A,Xe[De]);const ke=Xe[0],Re=c.convert(A.format,A.colorSpace),nt=c.convert(A.type),Ke=C(A.internalFormat,Re,nt,A.normalized,A.colorSpace),$=A.isVideoTexture!==!0,ze=Ie.__version===void 0||re===!0,Me=ge.dataReady;let He=O(A,ke);le(o.TEXTURE_CUBE_MAP,A);let We;if(Ve){$&&ze&&n.texStorage2D(o.TEXTURE_CUBE_MAP,He,Ke,ke.width,ke.height);for(let De=0;De<6;De++){We=Xe[De].mipmaps;for(let Oe=0;Oe<We.length;Oe++){const be=We[Oe];A.format!==cr?Re!==null?$?Me&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe,0,0,be.width,be.height,Re,be.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe,Ke,be.width,be.height,0,be.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Me&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe,0,0,be.width,be.height,Re,nt,be.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe,Ke,be.width,be.height,0,Re,nt,be.data)}}}else{if(We=A.mipmaps,$&&ze){We.length>0&&He++;const De=rt(Xe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,He,Ke,De.width,De.height)}for(let De=0;De<6;De++)if(et){$?Me&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Xe[De].width,Xe[De].height,Re,nt,Xe[De].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ke,Xe[De].width,Xe[De].height,0,Re,nt,Xe[De].data);for(let Oe=0;Oe<We.length;Oe++){const st=We[Oe].image[De].image;$?Me&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe+1,0,0,st.width,st.height,Re,nt,st.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe+1,Ke,st.width,st.height,0,Re,nt,st.data)}}else{$?Me&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Re,nt,Xe[De]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ke,Re,nt,Xe[De]);for(let Oe=0;Oe<We.length;Oe++){const be=We[Oe];$?Me&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe+1,0,0,Re,nt,be.image[De]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Oe+1,Ke,Re,nt,be.image[De])}}}y(A)&&L(o.TEXTURE_CUBE_MAP),Ie.__version=ge.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function ve(B,A,ie,re,ge,Ie){const Pe=c.convert(ie.format,ie.colorSpace),Se=c.convert(ie.type),ye=C(ie.internalFormat,Pe,Se,ie.normalized,ie.colorSpace),Ve=a.get(A),et=a.get(ie);if(et.__renderTarget=A,!Ve.__hasExternalTextures){const Xe=Math.max(1,A.width>>Ie),ke=Math.max(1,A.height>>Ie);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,Ie,ye,Xe,ke,A.depth,0,Pe,Se,null):n.texImage2D(ge,Ie,ye,Xe,ke,0,Pe,Se,null)}n.bindFramebuffer(o.FRAMEBUFFER,B),vt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,re,ge,et.__webglTexture,0,$e(A)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,re,ge,et.__webglTexture,Ie),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(B,A,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,B),A.depthBuffer){const re=A.depthTexture,ge=re&&re.isDepthTexture?re.type:null,Ie=R(A.stencilBuffer,ge),Pe=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;vt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e(A),Ie,A.width,A.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e(A),Ie,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ie,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,B)}else{const re=A.textures;for(let ge=0;ge<re.length;ge++){const Ie=re[ge],Pe=c.convert(Ie.format,Ie.colorSpace),Se=c.convert(Ie.type),ye=C(Ie.internalFormat,Pe,Se,Ie.normalized,Ie.colorSpace);vt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e(A),ye,A.width,A.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e(A),ye,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ye,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function lt(B,A,ie){const re=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=a.get(A.depthTexture);if(ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),le(o.TEXTURE_CUBE_MAP,A.depthTexture);const Ve=c.convert(A.depthTexture.format),et=c.convert(A.depthTexture.type);let Xe;A.depthTexture.format===_s?Xe=o.DEPTH_COMPONENT24:A.depthTexture.format===Wo&&(Xe=o.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Xe,A.width,A.height,0,Ve,et,null)}}else te(A.depthTexture,0);const Ie=ge.__webglTexture,Pe=$e(A),Se=re?o.TEXTURE_CUBE_MAP_POSITIVE_X+ie:o.TEXTURE_2D,ye=A.depthTexture.format===Wo?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===_s)vt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,Se,Ie,0,Pe):o.framebufferTexture2D(o.FRAMEBUFFER,ye,Se,Ie,0);else if(A.depthTexture.format===Wo)vt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,Se,Ie,0,Pe):o.framebufferTexture2D(o.FRAMEBUFFER,ye,Se,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(B){const A=a.get(B),ie=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const re=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),re){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,re.removeEventListener("dispose",ge)};re.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=re}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(ie)for(let re=0;re<6;re++)lt(A.__webglFramebuffer[re],B,re);else{const re=B.texture.mipmaps;re&&re.length>0?lt(A.__webglFramebuffer[0],B,0):lt(A.__webglFramebuffer,B,0)}else if(ie){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]===void 0)A.__webglDepthbuffer[re]=o.createRenderbuffer(),Ue(A.__webglDepthbuffer[re],B,!1);else{const ge=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=A.__webglDepthbuffer[re];o.bindRenderbuffer(o.RENDERBUFFER,Ie),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ie)}}else{const re=B.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Ue(A.__webglDepthbuffer,B,!1);else{const ge=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ie),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ie)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function mt(B,A,ie){const re=a.get(B);A!==void 0&&ve(re.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&ct(B)}function Be(B){const A=B.texture,ie=a.get(B),re=a.get(A);B.addEventListener("dispose",T);const ge=B.textures,Ie=B.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=A.version,u.memory.textures++),Ie){ie.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[Se]=[];for(let ye=0;ye<A.mipmaps.length;ye++)ie.__webglFramebuffer[Se][ye]=o.createFramebuffer()}else ie.__webglFramebuffer[Se]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)ie.__webglFramebuffer[Se]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let Se=0,ye=ge.length;Se<ye;Se++){const Ve=a.get(ge[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=o.createTexture(),u.memory.textures++)}if(B.samples>0&&vt(B)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Se=0;Se<ge.length;Se++){const ye=ge[Se];ie.__webglColorRenderbuffer[Se]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[Se]);const Ve=c.convert(ye.format,ye.colorSpace),et=c.convert(ye.type),Xe=C(ye.internalFormat,Ve,et,ye.normalized,ye.colorSpace,B.isXRRenderTarget===!0),ke=$e(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,ke,Xe,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Se,o.RENDERBUFFER,ie.__webglColorRenderbuffer[Se])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),Ue(ie.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ie){n.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture),le(o.TEXTURE_CUBE_MAP,A);for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)ve(ie.__webglFramebuffer[Se][ye],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ye);else ve(ie.__webglFramebuffer[Se],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);y(A)&&L(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let Se=0,ye=ge.length;Se<ye;Se++){const Ve=ge[Se],et=a.get(Ve);let Xe=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Xe=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Xe,et.__webglTexture),le(Xe,Ve),ve(ie.__webglFramebuffer,B,Ve,o.COLOR_ATTACHMENT0+Se,Xe,0),y(Ve)&&L(Xe)}n.unbindTexture()}else{let Se=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Se=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Se,re.__webglTexture),le(Se,A),A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)ve(ie.__webglFramebuffer[ye],B,A,o.COLOR_ATTACHMENT0,Se,ye);else ve(ie.__webglFramebuffer,B,A,o.COLOR_ATTACHMENT0,Se,0);y(A)&&L(Se),n.unbindTexture()}B.depthBuffer&&ct(B)}function Z(B){const A=B.textures;for(let ie=0,re=A.length;ie<re;ie++){const ge=A[ie];if(y(ge)){const Ie=z(B),Pe=a.get(ge).__webglTexture;n.bindTexture(Ie,Pe),L(Ie),n.unbindTexture()}}}const Ne=[],dt=[];function xt(B){if(B.samples>0){if(vt(B)===!1){const A=B.textures,ie=B.width,re=B.height;let ge=o.COLOR_BUFFER_BIT;const Ie=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=a.get(B),Se=A.length>1;if(Se)for(let Ve=0;Ve<A.length;Ve++)n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ye=B.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ve=0;Ve<A.length;Ve++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Se){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ve]);const et=a.get(A[Ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,et,0)}o.blitFramebuffer(0,0,ie,re,0,0,ie,re,ge,o.NEAREST),p===!0&&(Ne.length=0,dt.length=0,Ne.push(o.COLOR_ATTACHMENT0+Ve),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Ne.push(Ie),dt.push(Ie),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,dt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ne))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Se)for(let Ve=0;Ve<A.length;Ve++){n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ve]);const et=a.get(A[Ve]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,et,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&p){const A=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function $e(B){return Math.min(s.maxSamples,B.samples)}function vt(B){const A=a.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Q(B){const A=u.render.frame;_.get(B)!==A&&(_.set(B,A),B.update())}function yt(B,A){const ie=B.colorSpace,re=B.format,ge=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ie!==Qh&&ie!==$s&&(qt.getTransfer(ie)===pn?(re!==cr||ge!==qa)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",ie)),A}function rt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=W,this.setTextureUnits=j,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=P,this.setTextureCube=me,this.rebindTextures=mt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function dU(o,e){function n(a,s=$s){let c;const u=qt.getTransfer(s);if(a===qa)return o.UNSIGNED_BYTE;if(a===dv)return o.UNSIGNED_SHORT_4_4_4_4;if(a===hv)return o.UNSIGNED_SHORT_5_5_5_1;if(a===mb)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===_b)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===hb)return o.BYTE;if(a===pb)return o.SHORT;if(a===df)return o.UNSIGNED_SHORT;if(a===fv)return o.INT;if(a===Hr)return o.UNSIGNED_INT;if(a===Or)return o.FLOAT;if(a===Gr)return o.HALF_FLOAT;if(a===gb)return o.ALPHA;if(a===vb)return o.RGB;if(a===cr)return o.RGBA;if(a===_s)return o.DEPTH_COMPONENT;if(a===Wo)return o.DEPTH_STENCIL;if(a===xb)return o.RED;if(a===pv)return o.RED_INTEGER;if(a===il)return o.RG;if(a===mv)return o.RG_INTEGER;if(a===_v)return o.RGBA_INTEGER;if(a===Oh||a===Ph||a===Ih||a===zh)if(u===pn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Oh)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ph)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ih)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Oh)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ph)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ih)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zh)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ag||a===rg||a===sg||a===og)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===ag)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===rg)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===sg)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===og)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===lg||a===cg||a===ug||a===fg||a===dg||a===jh||a===hg)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===lg||a===cg)return u===pn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ug)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===fg)return c.COMPRESSED_R11_EAC;if(a===dg)return c.COMPRESSED_SIGNED_R11_EAC;if(a===jh)return c.COMPRESSED_RG11_EAC;if(a===hg)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===pg||a===mg||a===_g||a===gg||a===vg||a===xg||a===Sg||a===yg||a===Mg||a===Eg||a===bg||a===Tg||a===Ag||a===Cg)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===pg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===mg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===_g)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===gg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===vg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===xg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Sg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===yg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Mg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Eg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===bg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Tg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ag)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Cg)return u===pn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Rg||a===wg||a===Dg)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Rg)return u===pn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===wg)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Dg)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ng||a===Lg||a===Kh||a===Ug)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ng)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Lg)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Kh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ug)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hf?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const hU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pU=`
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

}`;class mU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Rb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new hr({vertexShader:hU,fragmentShader:pU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dr(new Nc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _U extends ll{constructor(e,n){super();const a=this;let s=null,c=1,u=null,d="local-floor",p=1,m=null,_=null,g=null,v=null,x=null,E=null;const b=typeof XRWebGLBinding<"u",S=new mU,y={},L=n.getContextAttributes();let z=null,C=null;const R=[],O=[],w=new nn;let T=null,D=null;const I=new Xa;I.viewport=new Hn;const V=new Xa;V.viewport=new Hn;const H=[I,V],q=new MR;let W=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=R[J];return ce===void 0&&(ce=new l_,R[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=R[J];return ce===void 0&&(ce=new l_,R[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=R[J];return ce===void 0&&(ce=new l_,R[J]=ce),ce.getHandSpace()};function X(J){const ce=O.indexOf(J.inputSource);if(ce===-1)return;const Ce=R[ce];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,m||u),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let J=0;J<R.length;J++){const ce=O[J];ce!==null&&(O[J]=null,R[J].disconnect(ce))}W=null,j=null,S.reset();for(const J in y)delete y[J];if(e.setRenderTarget(z),x=null,v=null,g=null,s=null,C=null,Ee.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),D!==null){const J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,a.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(z=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),L.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ge=null,ve=null;L.depth&&(ve=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=L.stencil?Wo:_s,Ge=L.stencil?hf:Hr);const Ue={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Ue),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new ur(v.textureWidth,v.textureHeight,{format:cr,type:qa,depthTexture:new mf(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ce={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(s,n,Ce),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ur(x.framebufferWidth,x.framebufferHeight,{format:cr,type:qa,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await s.requestReferenceSpace(d),Ee.setContext(s),Ee.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function te(J){for(let ce=0;ce<J.removed.length;ce++){const Ce=J.removed[ce],Ge=O.indexOf(Ce);Ge>=0&&(O[Ge]=null,R[Ge].disconnect(Ce))}for(let ce=0;ce<J.added.length;ce++){const Ce=J.added[ce];let Ge=O.indexOf(Ce);if(Ge===-1){for(let Ue=0;Ue<R.length;Ue++)if(Ue>=O.length){O.push(Ce),Ge=Ue;break}else if(O[Ue]===null){O[Ue]=Ce,Ge=Ue;break}if(Ge===-1)break}const ve=R[Ge];ve&&ve.connect(Ce)}}const ne=new xe,P=new xe;function me(J,ce,Ce){ne.setFromMatrixPosition(ce.matrixWorld),P.setFromMatrixPosition(Ce.matrixWorld);const Ge=ne.distanceTo(P),ve=ce.projectionMatrix.elements,Ue=Ce.projectionMatrix.elements,lt=ve[14]/(ve[10]-1),ct=ve[14]/(ve[10]+1),mt=(ve[9]+1)/ve[5],Be=(ve[9]-1)/ve[5],Z=(ve[8]-1)/ve[0],Ne=(Ue[8]+1)/Ue[0],dt=lt*Z,xt=lt*Ne,$e=Ge/(-Z+Ne),vt=$e*-Z;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(vt),J.translateZ($e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Q=lt+$e,yt=ct+$e,rt=dt-vt,B=xt+(Ge-vt),A=mt*ct/yt*Q,ie=Be*ct/yt*Q;J.projectionMatrix.makePerspective(rt,B,A,ie,Q,yt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Fe(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ce=J.near,Ce=J.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),q.near=V.near=I.near=ce,q.far=V.far=I.far=Ce,(W!==q.near||j!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),W=q.near,j=q.far),q.layers.mask=J.layers.mask|6,I.layers.mask=q.layers.mask&-5,V.layers.mask=q.layers.mask&-3;const Ge=J.parent,ve=q.cameras;Fe(q,Ge);for(let Ue=0;Ue<ve.length;Ue++)Fe(ve[Ue],Ge);ve.length===2?me(q,I,V):q.projectionMatrix.copy(I.projectionMatrix),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),Le(J,q,Ge)};function Le(J,ce,Ce){Ce===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Og*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(J){return y[J]};let k=null;function le(J,ce){if(_=ce.getViewerPose(m||u),E=ce,_!==null){const Ce=_.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let Ge=!1;Ce.length!==q.cameras.length&&(q.cameras.length=0,Ge=!0);for(let ct=0;ct<Ce.length;ct++){const mt=Ce[ct];let Be=null;if(x!==null)Be=x.getViewport(mt);else{const Ne=g.getViewSubImage(v,mt);Be=Ne.viewport,ct===0&&(e.setRenderTargetTextures(C,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(C))}let Z=H[ct];Z===void 0&&(Z=new Xa,Z.layers.enable(ct),Z.viewport=new Hn,H[ct]=Z),Z.matrix.fromArray(mt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(mt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Be.x,Be.y,Be.width,Be.height),ct===0&&(q.matrix.copy(Z.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ge===!0&&q.cameras.push(Z)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){g=a.getBinding();const ct=g.getDepthInformation(Ce[0]);ct&&ct.isValid&&ct.texture&&S.init(ct,s.renderState)}if(ve&&ve.includes("camera-access")&&b){e.state.unbindTexture(),g=a.getBinding();for(let ct=0;ct<Ce.length;ct++){const mt=Ce[ct].camera;if(mt){let Be=y[mt];Be||(Be=new Rb,y[mt]=Be);const Z=g.getCameraImage(mt);Be.sourceTexture=Z}}}}for(let Ce=0;Ce<R.length;Ce++){const Ge=O[Ce],ve=R[Ce];Ge!==null&&ve!==void 0&&ve.update(Ge,ce,m||u)}k&&k(J,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Ee=new Lb;Ee.setAnimationLoop(le),this.setAnimationLoop=function(J){k=J},this.dispose=function(){}}}const gU=new ei,Bb=new Ct;Bb.set(-1,0,0,0,1,0,0,0,1);function vU(o,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,wb(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,L,z,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),g(S,y)):y.isMeshPhongMaterial?(c(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(c(S,y),E(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),b(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?p(S,y,L,z):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===na&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===na&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),z=L.envMap,C=L.envMapRotation;z&&(S.envMap.value=z,S.envMapRotation.value.setFromMatrix4(gU.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Bb),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,L,z){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=z*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===na&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function xU(o,e,n,a){let s={},c={},u=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,R){const O=R.program;a.uniformBlockBinding(C,O)}function m(C,R){let O=s[C.id];O===void 0&&(S(C),O=_(C),s[C.id]=O,C.addEventListener("dispose",L));const w=R.program;a.updateUBOMapping(C,w);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function _(C){const R=g();C.__bindingPointIndex=R;const O=o.createBuffer(),w=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,w,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,O),O}function g(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const R=s[C.id],O=C.uniforms,w=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let T=0,D=O.length;T<D;T++){const I=O[T];if(Array.isArray(I))for(let V=0,H=I.length;V<H;V++)x(I[V],T,V,w);else x(I,T,0,w)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(C,R,O,w){if(b(C,R,O,w)===!0){const T=C.__offset,D=C.value;if(Array.isArray(D)){let I=0;for(let V=0;V<D.length;V++){const H=D[V],q=y(H);E(H,C.__data,I),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(D,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function E(C,R,O){typeof C=="number"||typeof C=="boolean"?R[0]=C:C.isMatrix3?(R[0]=C.elements[0],R[1]=C.elements[1],R[2]=C.elements[2],R[3]=0,R[4]=C.elements[3],R[5]=C.elements[4],R[6]=C.elements[5],R[7]=0,R[8]=C.elements[6],R[9]=C.elements[7],R[10]=C.elements[8],R[11]=0):ArrayBuffer.isView(C)?R.set(new C.constructor(C.buffer,C.byteOffset,R.length)):C.toArray(R,O)}function b(C,R,O,w){const T=C.value,D=R+"_"+O;if(w[D]===void 0)return typeof T=="number"||typeof T=="boolean"?w[D]=T:ArrayBuffer.isView(T)?w[D]=T.slice():w[D]=T.clone(),!0;{const I=w[D];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return w[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(I.equals(T)===!1)return I.copy(T),!0}}return!1}function S(C){const R=C.uniforms;let O=0;const w=16;for(let D=0,I=R.length;D<I;D++){const V=Array.isArray(R[D])?R[D]:[R[D]];for(let H=0,q=V.length;H<q;H++){const W=V[H],j=Array.isArray(W.value)?W.value:[W.value];for(let X=0,G=j.length;X<G;X++){const te=j[X],ne=y(te),P=O%w,me=P%ne.boundary,Fe=P+me;O+=me,Fe!==0&&w-Fe<ne.storage&&(O+=w-Fe),W.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=O,O+=ne.storage}}}const T=O%w;return T>0&&(O+=w-T),C.__size=O,C.__cache={},this}function y(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(R.boundary=16,R.storage=C.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",C),R}function L(C){const R=C.target;R.removeEventListener("dispose",L);const O=u.indexOf(R.__bindingPointIndex);u.splice(O,1),o.deleteBuffer(s[R.id]),delete s[R.id],delete c[R.id]}function z(){for(const C in s)o.deleteBuffer(s[C]);u=[],s={},c={}}return{bind:p,update:m,dispose:z}}const SU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rr=null;function yU(){return Rr===null&&(Rr=new oR(SU,16,16,il,Gr),Rr.name="DFG_LUT",Rr.minFilter=Li,Rr.magFilter=Li,Rr.wrapS=lr,Rr.wrapT=lr,Rr.generateMipmaps=!1,Rr.needsUpdate=!0),Rr}class MU{constructor(e={}){const{canvas:n=P3(),context:a=null,depth:s=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:x=qa}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const b=x,S=new Set([_v,mv,pv]),y=new Set([qa,Hr,df,hf,dv,hv]),L=new Uint32Array(4),z=new Int32Array(4),C=new xe;let R=null,O=null;const w=[],T=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let V=!1,H=null,q=null,W=null,j=null;this._outputColorSpace=ka;let X=0,G=0,te=null,ne=-1,P=null;const me=new Hn,Fe=new Hn;let Le=null;const k=new tn(0);let le=0,Ee=n.width,J=n.height,ce=1,Ce=null,Ge=null;const ve=new Hn(0,0,Ee,J),Ue=new Hn(0,0,Ee,J);let lt=!1;const ct=new Ab;let mt=!1,Be=!1;const Z=new ei,Ne=new xe,dt=new Hn,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function vt(){return te===null?ce:1}let Q=a;function yt(N,K){return n.getContext(N,K)}let rt,B,A,ie,re,ge,Ie,Pe,Se,ye,Ve,et,Xe,ke,Re,nt,Ke,$,ze,Me,He,We,De;try{const N={alpha:!0,depth:s,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uv}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",_t,!1),Q===null){const K="webgl2";if(Q=yt(K,N),Q===null)throw yt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(N){throw n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),Jt("WebGLRenderer: "+N.message),N}function Oe(){rt=new yN(Q),rt.init(),He=new dU(Q,rt),B=new fN(Q,rt,e,He),A=new uU(Q,rt),B.reversedDepthBuffer&&v&&A.buffers.depth.setReversed(!0),q=Q.createFramebuffer(),W=Q.createFramebuffer(),j=Q.createFramebuffer(),ie=new bN(Q),re=new KL,ge=new fU(Q,rt,A,re,B,He,ie),Ie=new SN(I),Pe=new AR(Q),We=new cN(Q,Pe),Se=new MN(Q,Pe,ie,We),ye=new AN(Q,Se,Pe,We,ie),$=new TN(Q,B,ge),Re=new dN(re),Ve=new jL(I,Ie,rt,B,We,Re),et=new vU(I,re),Xe=new JL,ke=new aU(rt),Ke=new lN(I,Ie,A,ye,E,p),nt=new cU(I,ye,B),De=new xU(Q,ie,B,A),ze=new uN(Q,rt,ie),Me=new EN(Q,rt,ie),ie.programs=Ve.programs,I.capabilities=B,I.extensions=rt,I.properties=re,I.renderLists=Xe,I.shadowMap=nt,I.state=A,I.info=ie}b!==qa&&(D=new RN(b,n.width,n.height,d,s,c));const be=new _U(I,Q);this.xr=be,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const N=rt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=rt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(N){N!==void 0&&(ce=N,this.setSize(Ee,J,!1))},this.getSize=function(N){return N.set(Ee,J)},this.setSize=function(N,K,he=!0){if(be.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=N,J=K,n.width=Math.floor(N*ce),n.height=Math.floor(K*ce),he===!0&&(n.style.width=N+"px",n.style.height=K+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(Ee*ce,J*ce).floor()},this.setDrawingBufferSize=function(N,K,he){Ee=N,J=K,ce=he,n.width=Math.floor(N*he),n.height=Math.floor(K*he),this.setViewport(0,0,N,K)},this.setEffects=function(N){if(b===qa){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let K=0;K<N.length;K++)if(N[K].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(me)},this.getViewport=function(N){return N.copy(ve)},this.setViewport=function(N,K,he,ue){N.isVector4?ve.set(N.x,N.y,N.z,N.w):ve.set(N,K,he,ue),A.viewport(me.copy(ve).multiplyScalar(ce).round())},this.getScissor=function(N){return N.copy(Ue)},this.setScissor=function(N,K,he,ue){N.isVector4?Ue.set(N.x,N.y,N.z,N.w):Ue.set(N,K,he,ue),A.scissor(Fe.copy(Ue).multiplyScalar(ce).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(N){A.setScissorTest(lt=N)},this.setOpaqueSort=function(N){Ce=N},this.setTransparentSort=function(N){Ge=N},this.getClearColor=function(N){return N.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(N=!0,K=!0,he=!0){let ue=0;if(N){let de=!1;if(te!==null){const Ye=te.texture.format;de=S.has(Ye)}if(de){const Ye=te.texture.type,tt=y.has(Ye),Ze=Ke.getClearColor(),ot=Ke.getClearAlpha(),ht=Ze.r,Mt=Ze.g,At=Ze.b;tt?(L[0]=ht,L[1]=Mt,L[2]=At,L[3]=ot,Q.clearBufferuiv(Q.COLOR,0,L)):(z[0]=ht,z[1]=Mt,z[2]=At,z[3]=ot,Q.clearBufferiv(Q.COLOR,0,z))}else ue|=Q.COLOR_BUFFER_BIT}K&&(ue|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&Q.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),H=N},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),Ke.dispose(),Xe.dispose(),ke.dispose(),re.dispose(),Ie.dispose(),ye.dispose(),We.dispose(),De.dispose(),Ve.dispose(),be.dispose(),be.removeEventListener("sessionstart",rn),be.removeEventListener("sessionend",Qt),It.stop()};function st(N){N.preventDefault(),SM("WebGLRenderer: Context Lost."),V=!0}function we(){SM("WebGLRenderer: Context Restored."),V=!1;const N=ie.autoReset,K=nt.enabled,he=nt.autoUpdate,ue=nt.needsUpdate,de=nt.type;Oe(),ie.autoReset=N,nt.enabled=K,nt.autoUpdate=he,nt.needsUpdate=ue,nt.type=de}function _t(N){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ut(N){const K=N.target;K.removeEventListener("dispose",ut),Et(K)}function Et(N){bn(N),re.remove(N)}function bn(N){const K=re.get(N).programs;K!==void 0&&(K.forEach(function(he){Ve.releaseProgram(he)}),N.isShaderMaterial&&Ve.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,he,ue,de,Ye){K===null&&(K=xt);const tt=de.isMesh&&de.matrixWorld.determinantAffine()<0,Ze=Pn(N,K,he,ue,de);A.setMaterial(ue,tt);let ot=he.index,ht=1;if(ue.wireframe===!0){if(ot=Se.getWireframeAttribute(he),ot===void 0)return;ht=2}const Mt=he.drawRange,At=he.attributes.position;let it=Mt.start*ht,Ht=(Mt.start+Mt.count)*ht;Ye!==null&&(it=Math.max(it,Ye.start*ht),Ht=Math.min(Ht,(Ye.start+Ye.count)*ht)),ot!==null?(it=Math.max(it,0),Ht=Math.min(Ht,ot.count)):At!=null&&(it=Math.max(it,0),Ht=Math.min(Ht,At.count));const Lt=Ht-it;if(Lt<0||Lt===1/0)return;We.setup(de,ue,Ze,he,ot);let mn,sn=ze;if(ot!==null&&(mn=Pe.get(ot),sn=Me,sn.setIndex(mn)),de.isMesh)ue.wireframe===!0?(A.setLineWidth(ue.wireframeLinewidth*vt()),sn.setMode(Q.LINES)):sn.setMode(Q.TRIANGLES);else if(de.isLine){let ti=ue.linewidth;ti===void 0&&(ti=1),A.setLineWidth(ti*vt()),de.isLineSegments?sn.setMode(Q.LINES):de.isLineLoop?sn.setMode(Q.LINE_LOOP):sn.setMode(Q.LINE_STRIP)}else de.isPoints?sn.setMode(Q.POINTS):de.isSprite&&sn.setMode(Q.TRIANGLES);if(de.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))sn.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const ti=de._multiDrawStarts,Qe=de._multiDrawCounts,In=de._multiDrawCount,Yt=ot?Pe.get(ot).bytesPerElement:1,Ii=re.get(ue).currentProgram.getUniforms();for(let ca=0;ca<In;ca++)Ii.setValue(Q,"_gl_DrawID",ca),sn.render(ti[ca]/Yt,Qe[ca])}else if(de.isInstancedMesh)sn.renderInstances(it,Lt,de.count);else if(he.isInstancedBufferGeometry){const ti=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Qe=Math.min(he.instanceCount,ti);sn.renderInstances(it,Lt,Qe)}else sn.render(it,Lt)};function Rt(N,K,he,ue){H!==null&&N.isNodeMaterial&&H.setObject(ue,N),mt===!0&&Re.setState(N,he,!1),N.transparent===!0&&N.side===Lr&&N.forceSinglePass===!1?(N.side=na,N.needsUpdate=!0,Tn(N,K,ue),N.side=tl,N.needsUpdate=!0,Tn(N,K,ue),N.side=Lr):Tn(N,K,ue)}this.compile=function(N,K,he=null){he===null&&(he=N),H!==null&&H.renderStart(N,K,he),O=ke.get(he),O.init(K),T.push(O),he.traverseVisible(function(de){de.isLight&&de.layers.test(K.layers)&&(O.pushLight(de),de.castShadow&&O.pushShadow(de))}),N!==he&&N.traverseVisible(function(de){de.isLight&&de.layers.test(K.layers)&&(O.pushLight(de),de.castShadow&&O.pushShadow(de))}),O.setupLights(),H!==null&&H.updateLights(O.state.lightsArray),Be=this.localClippingEnabled,mt=Re.init(this.clippingPlanes,Be),mt===!0&&Re.setGlobalState(this.clippingPlanes,K),H!==null&&nt.render(O.state.shadowsArray,he,K);const ue=new Set;return N.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const Ye=de.material;if(Ye)if(Array.isArray(Ye))for(let tt=0;tt<Ye.length;tt++){const Ze=Ye[tt];Rt(Ze,he,K,de),ue.add(Ze)}else Rt(Ye,he,K,de),ue.add(Ye)}),O=T.pop(),H!==null&&H.renderEnd(),ue},this.compileAsync=function(N,K,he=null){const ue=this.compile(N,K,he);return new Promise(de=>{function Ye(){if(ue.forEach(function(tt){const ot=re.get(tt).currentProgram;(ot===void 0||ot.isReady())&&ue.delete(tt)}),ue.size===0){de(N);return}setTimeout(Ye,10)}rt.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let an=null;function Sn(N){an&&an(N)}function rn(){It.stop()}function Qt(){It.start()}const It=new Lb;It.setAnimationLoop(Sn),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(N){an=N,be.setAnimationLoop(N),N===null?It.stop():It.start()},be.addEventListener("sessionstart",rn),be.addEventListener("sessionend",Qt),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;H!==null&&H.renderStart(N,K);const he=be.enabled===!0&&be.isPresenting===!0,ue=D!==null&&(te===null||he)&&D.begin(I,te);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(K),K=be.getCamera()),N.isScene===!0&&N.onBeforeRender(I,N,K,te),O=ke.get(N,T.length),O.init(K),O.state.textureUnits=ge.getTextureUnits(),T.push(O),Z.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ct.setFromProjectionMatrix(Z,Pr,K.reversedDepth),Be=this.localClippingEnabled,mt=Re.init(this.clippingPlanes,Be),R=Xe.get(N,w.length),R.init(),w.push(R),be.enabled===!0&&be.isPresenting===!0){const tt=I.xr.getDepthSensingMesh();tt!==null&&pi(tt,K,-1/0,I.sortObjects)}pi(N,K,0,I.sortObjects),R.finish(),H!==null&&H.updateLights(O.state.lightsArray),I.sortObjects===!0&&R.sort(Ce,Ge),$e=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,$e&&Ke.addToRenderList(R,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Re.beginShadows();const de=O.state.shadowsArray;if(nt.render(de,N,K),mt===!0&&Re.endShadows(),(ue&&D.hasRenderPass())===!1){const tt=R.opaque,Ze=R.transmissive;if(O.setupLights(),K.isArrayCamera){const ot=K.cameras;if(Ze.length>0)for(let ht=0,Mt=ot.length;ht<Mt;ht++){const At=ot[ht];Yn(tt,Ze,N,At)}$e&&Ke.render(N);for(let ht=0,Mt=ot.length;ht<Mt;ht++){const At=ot[ht];cn(R,N,At,At.viewport)}}else Ze.length>0&&Yn(tt,Ze,N,K),$e&&Ke.render(N),cn(R,N,K)}te!==null&&G===0&&(ge.updateMultisampleRenderTarget(te),ge.updateRenderTargetMipmap(te)),ue&&D.end(I),N.isScene===!0&&N.onAfterRender(I,N,K),We.resetDefaultState(),ne=-1,P=null,T.pop(),T.length>0?(O=T[T.length-1],ge.setTextureUnits(O.state.textureUnits),mt===!0&&Re.setGlobalState(I.clippingPlanes,O.state.camera)):O=null,w.pop(),w.length>0?R=w[w.length-1]:R=null,H!==null&&H.renderEnd()};function pi(N,K,he,ue){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLightProbeGrid)O.pushLightProbeGrid(N);else if(N.isLight)O.pushLight(N),N.castShadow&&O.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(ct)){ue&&dt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Z);const tt=ye.update(N),Ze=N.material;Ze.visible&&R.push(N,tt,Ze,he,dt.z,null,K)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(ct))){const tt=ye.update(N),Ze=N.material;if(ue&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),dt.copy(N.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),dt.copy(tt.boundingSphere.center)),dt.applyMatrix4(N.matrixWorld).applyMatrix4(Z)),Array.isArray(Ze)){const ot=tt.groups;for(let ht=0,Mt=ot.length;ht<Mt;ht++){const At=ot[ht],it=Ze[At.materialIndex];it&&it.visible&&R.push(N,tt,it,he,dt.z,At,K)}}else Ze.visible&&R.push(N,tt,Ze,he,dt.z,null,K)}}const Ye=N.children;for(let tt=0,Ze=Ye.length;tt<Ze;tt++)pi(Ye[tt],K,he,ue)}function cn(N,K,he,ue){const{opaque:de,transmissive:Ye,transparent:tt}=N;O.setupLightsView(he),mt===!0&&Re.setGlobalState(I.clippingPlanes,he),ue&&A.viewport(me.copy(ue)),de.length>0&&Vn(de,K,he),Ye.length>0&&Vn(Ye,K,he),tt.length>0&&Vn(tt,K,he),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Yn(N,K,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ue.id]===void 0){const it=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ue.id]=new ur(1,1,{generateMipmaps:!0,type:it?Gr:qa,minFilter:Xo,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const Ye=O.state.transmissionRenderTarget[ue.id],tt=ue.viewport||me;Ye.setSize(tt.z*I.transmissionResolutionScale,tt.w*I.transmissionResolutionScale);const Ze=I.getRenderTarget(),ot=I.getActiveCubeFace(),ht=I.getActiveMipmapLevel();I.setRenderTarget(Ye),I.getClearColor(k),le=I.getClearAlpha(),le<1&&I.setClearColor(16777215,.5),I.clear(),$e&&Ke.render(he);const Mt=I.toneMapping;I.toneMapping=Fr;const At=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),O.setupLightsView(ue),mt===!0&&Re.setGlobalState(I.clippingPlanes,ue),Vn(N,he,ue),ge.updateMultisampleRenderTarget(Ye),ge.updateRenderTargetMipmap(Ye),rt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ht=0,Lt=K.length;Ht<Lt;Ht++){const mn=K[Ht],{object:sn,geometry:ti,material:Qe,group:In}=mn;if(Qe.side===Lr&&sn.layers.test(ue.layers)){const Yt=Qe.side;Qe.side=na,Qe.needsUpdate=!0,Un(sn,he,ue,ti,Qe,In),Qe.side=Yt,Qe.needsUpdate=!0,it=!0}}it===!0&&(ge.updateMultisampleRenderTarget(Ye),ge.updateRenderTargetMipmap(Ye))}I.setRenderTarget(Ze,ot,ht),I.setClearColor(k,le),At!==void 0&&(ue.viewport=At),I.toneMapping=Mt}function Vn(N,K,he){const ue=K.isScene===!0?K.overrideMaterial:null;for(let de=0,Ye=N.length;de<Ye;de++){const tt=N[de],{object:Ze,geometry:ot,group:ht}=tt;let Mt=tt.material;Mt.allowOverride===!0&&ue!==null&&(Mt=ue),Ze.layers.test(he.layers)&&Un(Ze,K,he,ot,Mt,ht)}}function Un(N,K,he,ue,de,Ye){H!==null&&de.isNodeMaterial&&H.setObject(N,de),N.onBeforeRender(I,K,he,ue,de,Ye),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),de.onBeforeRender(I,K,he,ue,N,Ye),de.transparent===!0&&de.side===Lr&&de.forceSinglePass===!1?(de.side=na,de.needsUpdate=!0,I.renderBufferDirect(he,K,ue,de,N,Ye),de.side=tl,de.needsUpdate=!0,I.renderBufferDirect(he,K,ue,de,N,Ye),de.side=Lr):I.renderBufferDirect(he,K,ue,de,N,Ye),N.onAfterRender(I,K,he,ue,de,Ye)}function Tn(N,K,he){K.isScene!==!0&&(K=xt);const ue=re.get(N),de=O.state.lights,Ye=O.state.shadowsArray,tt=de.state.version,Ze=Ve.getParameters(N,de.state,Ye,K,he,O.state.lightProbeGridArray),ot=Ve.getProgramCacheKey(Ze);let ht=ue.programs;ue.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?K.environment:null,ue.fog=K.fog;const Mt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ue.envMap=Ie.get(N.envMap||ue.environment,Mt),ue.envMapRotation=ue.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,ht===void 0&&(N.addEventListener("dispose",ut),ht=new Map,ue.programs=ht);let At=ht.get(ot);if(At!==void 0){if(ue.currentProgram===At&&ue.lightsStateVersion===tt)return la(N,Ze),At}else Ze.uniforms=Ve.getUniforms(N),H!==null&&N.isNodeMaterial&&H.build(N,he,Ze),N.onBeforeCompile(Ze,I),At=Ve.acquireProgram(Ze,ot),ht.set(ot,At),ue.uniforms=Ze.uniforms;const it=ue.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(it.clippingPlanes=Re.uniform),la(N,Ze),ue.needsLights=Pi(N),ue.lightsStateVersion=tt,ue.needsLights&&(it.ambientLightColor.value=de.state.ambient,it.lightProbe.value=de.state.probe,it.sunLights.value=de.state.sun,it.sunLightShadows.value=de.state.sunShadow,it.directionalLights.value=de.state.directional,it.directionalLightShadows.value=de.state.directionalShadow,it.spotLights.value=de.state.spot,it.spotLightShadows.value=de.state.spotShadow,it.rectAreaLights.value=de.state.rectArea,it.ltc_1.value=de.state.rectAreaLTC1,it.ltc_2.value=de.state.rectAreaLTC2,it.pointLights.value=de.state.point,it.pointLightShadows.value=de.state.pointShadow,it.hemisphereLights.value=de.state.hemi,it.sunShadowMatrix.value=de.state.sunShadowMatrix,it.sunShadowCascade.value=de.state.sunShadowCascade,it.directionalShadowMatrix.value=de.state.directionalShadowMatrix,it.spotLightMatrix.value=de.state.spotLightMatrix,it.spotLightMap.value=de.state.spotLightMap,it.pointShadowMatrix.value=de.state.pointShadowMatrix),ue.lightProbeGrid=O.state.lightProbeGridArray.length>0,ue.currentProgram=At,ue.uniformsList=null,At}function On(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=Fh.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function la(N,K){const he=re.get(N);he.outputColorSpace=K.outputColorSpace,he.batching=K.batching,he.batchingColor=K.batchingColor,he.instancing=K.instancing,he.instancingColor=K.instancingColor,he.instancingMorph=K.instancingMorph,he.skinning=K.skinning,he.morphTargets=K.morphTargets,he.morphNormals=K.morphNormals,he.morphColors=K.morphColors,he.morphTargetsCount=K.morphTargetsCount,he.numClippingPlanes=K.numClippingPlanes,he.numIntersection=K.numClipIntersection,he.vertexAlphas=K.vertexAlphas,he.vertexTangents=K.vertexTangents,he.toneMapping=K.toneMapping}function pr(N,K){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;C.setFromMatrixPosition(K.matrixWorld);for(let he=0,ue=N.length;he<ue;he++){const de=N[he];if(de.texture!==null&&de.boundingBox.containsPoint(C))return de}return null}function Pn(N,K,he,ue,de){K.isScene!==!0&&(K=xt),ge.resetTextureUnits();const Ye=K.fog,tt=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?K.environment:null,Ze=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qt.workingColorSpace,ot=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,ht=Ie.get(ue.envMap||tt,ot),Mt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,At=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),it=!!he.morphAttributes.position,Ht=!!he.morphAttributes.normal,Lt=!!he.morphAttributes.color;let mn=Fr;ue.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(mn=I.toneMapping);const sn=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ti=sn!==void 0?sn.length:0,Qe=re.get(ue),In=O.state.lights;if(mt===!0&&(Be===!0||N!==P)){const kt=N===P&&ue.id===ne;Re.setState(ue,N,kt)}let Yt=!1;ue.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==In.state.version||Qe.outputColorSpace!==Ze||de.isBatchedMesh&&Qe.batching===!1||!de.isBatchedMesh&&Qe.batching===!0||de.isBatchedMesh&&Qe.batchingColor===!0&&de._colorsTexture===null||de.isBatchedMesh&&Qe.batchingColor===!1&&de._colorsTexture!==null||de.isInstancedMesh&&Qe.instancing===!1||!de.isInstancedMesh&&Qe.instancing===!0||de.isSkinnedMesh&&Qe.skinning===!1||!de.isSkinnedMesh&&Qe.skinning===!0||de.isInstancedMesh&&Qe.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&Qe.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&Qe.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&Qe.instancingMorph===!1&&de.morphTexture!==null||Qe.envMap!==ht||ue.fog===!0&&Qe.fog!==Ye||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Re.numPlanes||Qe.numIntersection!==Re.numIntersection)||Qe.vertexAlphas!==Mt||Qe.vertexTangents!==At||Qe.morphTargets!==it||Qe.morphNormals!==Ht||Qe.morphColors!==Lt||Qe.toneMapping!==mn||Qe.morphTargetsCount!==ti||!!Qe.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,Qe.__version=ue.version);let Ii=Qe.currentProgram;Yt===!0&&(Ii=Tn(ue,K,de),H&&ue.isNodeMaterial&&H.onUpdateProgram(ue,Ii,Qe));let ca=!1,mr=!1,Ut=!1;const $t=Ii.getUniforms(),yn=Qe.uniforms;if(A.useProgram(Ii.program)&&(ca=!0,mr=!0,Ut=!0),ue.id!==ne&&(ne=ue.id,mr=!0),Qe.needsLights){const kt=pr(O.state.lightProbeGridArray,de);Qe.lightProbeGrid!==kt&&(Qe.lightProbeGrid=kt,mr=!0)}if(ca||P!==N){A.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),$t.setValue(Q,"projectionMatrix",N.projectionMatrix),$t.setValue(Q,"viewMatrix",N.matrixWorldInverse);const zn=$t.map.cameraPosition;zn!==void 0&&zn.setValue(Q,Ne.setFromMatrixPosition(N.matrixWorld)),B.logarithmicDepthBuffer&&$t.setValue(Q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&$t.setValue(Q,"isOrthographic",N.isOrthographicCamera===!0),P!==N&&(P=N,mr=!0,Ut=!0)}if(Qe.needsLights&&(In.state.sunShadowMap.length>0&&$t.setValue(Q,"sunShadowMap",In.state.sunShadowMap,ge),In.state.directionalShadowMap.length>0&&$t.setValue(Q,"directionalShadowMap",In.state.directionalShadowMap,ge),In.state.spotShadowMap.length>0&&$t.setValue(Q,"spotShadowMap",In.state.spotShadowMap,ge),In.state.pointShadowMap.length>0&&$t.setValue(Q,"pointShadowMap",In.state.pointShadowMap,ge)),de.isSkinnedMesh){$t.setOptional(Q,de,"bindMatrix"),$t.setOptional(Q,de,"bindMatrixInverse");const kt=de.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),$t.setValue(Q,"boneTexture",kt.boneTexture,ge))}de.isBatchedMesh&&($t.setOptional(Q,de,"batchingTexture"),$t.setValue(Q,"batchingTexture",de._matricesTexture,ge),$t.setOptional(Q,de,"batchingIdTexture"),$t.setValue(Q,"batchingIdTexture",de._indirectTexture,ge),$t.setOptional(Q,de,"batchingColorTexture"),de._colorsTexture!==null&&$t.setValue(Q,"batchingColorTexture",de._colorsTexture,ge));const ua=he.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0)&&$.update(de,he,Ii),(mr||Qe.receiveShadow!==de.receiveShadow)&&(Qe.receiveShadow=de.receiveShadow,$t.setValue(Q,"receiveShadow",de.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&K.environment!==null&&(yn.envMapIntensity.value=K.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=yU()),mr){if($t.setValue(Q,"toneMappingExposure",I.toneMappingExposure),Qe.needsLights&&An(yn,Ut),Ye&&ue.fog===!0&&et.refreshFogUniforms(yn,Ye),et.refreshMaterialUniforms(yn,ue,ce,J,O.state.transmissionRenderTarget[N.id]),Qe.needsLights&&Qe.lightProbeGrid){const kt=Qe.lightProbeGrid;yn.probesSH.value=kt.texture,yn.probesMin.value.copy(kt.boundingBox.min),yn.probesMax.value.copy(kt.boundingBox.max),yn.probesResolution.value.copy(kt.resolution)}Fh.upload(Q,On(Qe),yn,ge)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Fh.upload(Q,On(Qe),yn,ge),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&$t.setValue(Q,"center",de.center),$t.setValue(Q,"modelViewMatrix",de.modelViewMatrix),$t.setValue(Q,"normalMatrix",de.normalMatrix),$t.setValue(Q,"modelMatrix",de.matrixWorld),ue.uniformsGroups!==void 0){const kt=ue.uniformsGroups;for(let zn=0,kr=kt.length;zn<kr;zn++){const Nf=kt[zn];De.update(Nf,Ii),De.bind(Nf,Ii)}}return Ii}function An(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.sunLights.needsUpdate=K,N.sunLightShadows.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function Pi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(N,K,he){const ue=re.get(N);ue.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),re.get(N.texture).__webglTexture=K,re.get(N.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,K){const he=re.get(N);he.__webglFramebuffer=K,he.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(N,K=0,he=0){te=N,X=K,G=he;let ue=null,de=!1,Ye=!1;if(N){const Ze=re.get(N);if(Ze.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(Q.FRAMEBUFFER,Ze.__webglFramebuffer),me.copy(N.viewport),Fe.copy(N.scissor),Le=N.scissorTest,A.viewport(me),A.scissor(Fe),A.setScissorTest(Le),ne=-1;return}else if(Ze.__webglFramebuffer===void 0)ge.setupRenderTarget(N);else if(Ze.__hasExternalTextures)ge.rebindTextures(N,re.get(N.texture).__webglTexture,re.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Mt=N.depthTexture;if(Ze.__boundDepthTexture!==Mt){if(Mt!==null&&re.has(Mt)&&(N.width!==Mt.image.width||N.height!==Mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(N)}}const ot=N.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ye=!0);const ht=re.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ht[K])?ue=ht[K][he]:ue=ht[K],de=!0):N.samples>0&&ge.useMultisampledRTT(N)===!1?ue=re.get(N).__webglMultisampledFramebuffer:Array.isArray(ht)?ue=ht[he]:ue=ht,me.copy(N.viewport),Fe.copy(N.scissor),Le=N.scissorTest}else me.copy(ve).multiplyScalar(ce).floor(),Fe.copy(Ue).multiplyScalar(ce).floor(),Le=lt;if(he!==0&&(ue=q),A.bindFramebuffer(Q.FRAMEBUFFER,ue)&&A.drawBuffers(N,ue),A.viewport(me),A.scissor(Fe),A.setScissorTest(Le),de){const Ze=re.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ze.__webglTexture,he)}else if(Ye){const Ze=K;for(let ot=0;ot<N.textures.length;ot++){const ht=re.get(N.textures[ot]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+ot,ht.__webglTexture,he,Ze)}}else if(N!==null&&he!==0){const Ze=re.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ze.__webglTexture,he)}ne=-1};function bi(N){const K=re.get(N);return(K.__readFormat!==N.format||K.__readType!==N.type)&&(K.__readFormat=N.format,K.__readType=N.type,K.__formatReadable=B.textureFormatReadable(N.format),K.__typeReadable=B.textureTypeReadable(N.type)),K}this.readRenderTargetPixels=function(N,K,he,ue,de,Ye,tt,Ze=0){if(!(N&&N.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=re.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&tt!==void 0&&(ot=ot[tt]),ot){A.bindFramebuffer(Q.FRAMEBUFFER,ot);try{const ht=N.textures[Ze],Mt=ht.format,At=ht.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ze);const it=bi(ht);if(it.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-ue&&he>=0&&he<=N.height-de&&Q.readPixels(K,he,ue,de,He.convert(Mt),He.convert(At),Ye)}finally{const ht=te!==null?re.get(te).__webglFramebuffer:null;A.bindFramebuffer(Q.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(N,K,he,ue,de,Ye,tt,Ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ot=re.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&tt!==void 0&&(ot=ot[tt]),ot)if(K>=0&&K<=N.width-ue&&he>=0&&he<=N.height-de){A.bindFramebuffer(Q.FRAMEBUFFER,ot);const ht=N.textures[Ze],Mt=ht.format,At=ht.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ze);const it=bi(ht);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ht),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ye.byteLength,Q.STREAM_READ),Q.readPixels(K,he,ue,de,He.convert(Mt),He.convert(At),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const Lt=te!==null?re.get(te).__webglFramebuffer:null;A.bindFramebuffer(Q.FRAMEBUFFER,Lt);const mn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await I3(Q,mn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ht),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ye),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Ht),Q.deleteSync(mn),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,K=null,he=0){const ue=Math.pow(2,-he),de=Math.floor(N.image.width*ue),Ye=Math.floor(N.image.height*ue),tt=K!==null?K.x:0,Ze=K!==null?K.y:0;ge.setTexture2D(N,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,he,0,0,tt,Ze,de,Ye),A.unbindTexture()},this.copyTextureToTexture=function(N,K,he=null,ue=null,de=0,Ye=0){let tt,Ze,ot,ht,Mt,At,it,Ht,Lt;const mn=N.isCompressedTexture?N.mipmaps[Ye]:N.image;if(he!==null)tt=he.max.x-he.min.x,Ze=he.max.y-he.min.y,ot=he.isBox3?he.max.z-he.min.z:1,ht=he.min.x,Mt=he.min.y,At=he.isBox3?he.min.z:0;else{const yn=Math.pow(2,-de);tt=Math.floor(mn.width*yn),Ze=Math.floor(mn.height*yn),N.isDataArrayTexture?ot=mn.depth:N.isData3DTexture?ot=Math.floor(mn.depth*yn):ot=1,ht=0,Mt=0,At=0}ue!==null?(it=ue.x,Ht=ue.y,Lt=ue.z):(it=0,Ht=0,Lt=0);const sn=He.convert(K.format),ti=He.convert(K.type);let Qe;K.isData3DTexture?(ge.setTexture3D(K,0),Qe=Q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ge.setTexture2DArray(K,0),Qe=Q.TEXTURE_2D_ARRAY):(ge.setTexture2D(K,0),Qe=Q.TEXTURE_2D),A.activeTexture(Q.TEXTURE0),A.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,K.flipY),A.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),A.pixelStorei(Q.UNPACK_ALIGNMENT,K.unpackAlignment);const In=A.getParameter(Q.UNPACK_ROW_LENGTH),Yt=A.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ii=A.getParameter(Q.UNPACK_SKIP_PIXELS),ca=A.getParameter(Q.UNPACK_SKIP_ROWS),mr=A.getParameter(Q.UNPACK_SKIP_IMAGES);A.pixelStorei(Q.UNPACK_ROW_LENGTH,mn.width),A.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,mn.height),A.pixelStorei(Q.UNPACK_SKIP_PIXELS,ht),A.pixelStorei(Q.UNPACK_SKIP_ROWS,Mt),A.pixelStorei(Q.UNPACK_SKIP_IMAGES,At);const Ut=N.isDataArrayTexture||N.isData3DTexture,$t=K.isDataArrayTexture||K.isData3DTexture;if(N.isDepthTexture){const yn=re.get(N),ua=re.get(K),kt=re.get(yn.__renderTarget),zn=re.get(ua.__renderTarget);A.bindFramebuffer(Q.READ_FRAMEBUFFER,kt.__webglFramebuffer),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kr=0;kr<ot;kr++)Ut&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,re.get(N).__webglTexture,de,At+kr),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,re.get(K).__webglTexture,Ye,Lt+kr)),Q.blitFramebuffer(ht,Mt,tt,Ze,it,Ht,tt,Ze,Q.DEPTH_BUFFER_BIT,Q.NEAREST);A.bindFramebuffer(Q.READ_FRAMEBUFFER,null),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(de!==0||N.isRenderTargetTexture||re.has(N)){const yn=re.get(N),ua=re.get(K);A.bindFramebuffer(Q.READ_FRAMEBUFFER,W),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,j);for(let kt=0;kt<ot;kt++)Ut?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,yn.__webglTexture,de,At+kt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,yn.__webglTexture,de),$t?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ua.__webglTexture,Ye,Lt+kt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ua.__webglTexture,Ye),de!==0?Q.blitFramebuffer(ht,Mt,tt,Ze,it,Ht,tt,Ze,Q.COLOR_BUFFER_BIT,Q.NEAREST):$t?Q.copyTexSubImage3D(Qe,Ye,it,Ht,Lt+kt,ht,Mt,tt,Ze):Q.copyTexSubImage2D(Qe,Ye,it,Ht,ht,Mt,tt,Ze);A.bindFramebuffer(Q.READ_FRAMEBUFFER,null),A.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else $t?N.isDataTexture||N.isData3DTexture?Q.texSubImage3D(Qe,Ye,it,Ht,Lt,tt,Ze,ot,sn,ti,mn.data):K.isCompressedArrayTexture?Q.compressedTexSubImage3D(Qe,Ye,it,Ht,Lt,tt,Ze,ot,sn,mn.data):Q.texSubImage3D(Qe,Ye,it,Ht,Lt,tt,Ze,ot,sn,ti,mn):N.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ye,it,Ht,tt,Ze,sn,ti,mn.data):N.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ye,it,Ht,mn.width,mn.height,sn,mn.data):Q.texSubImage2D(Q.TEXTURE_2D,Ye,it,Ht,tt,Ze,sn,ti,mn);A.pixelStorei(Q.UNPACK_ROW_LENGTH,In),A.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Yt),A.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ii),A.pixelStorei(Q.UNPACK_SKIP_ROWS,ca),A.pixelStorei(Q.UNPACK_SKIP_IMAGES,mr),Ye===0&&K.generateMipmaps&&Q.generateMipmap(Qe),A.unbindTexture()},this.initRenderTarget=function(N){re.get(N).__webglFramebuffer===void 0&&ge.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ge.setTextureCube(N,0):N.isData3DTexture?ge.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ge.setTexture2DArray(N,0):ge.setTexture2D(N,0),A.unbindTexture()},this.resetState=function(){X=0,G=0,te=null,A.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),n.unpackColorSpace=qt._getUnpackColorSpace()}}const EU=`
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
`,bU=`
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
`;function TU(){const o=qe.useRef(null);return qe.useEffect(()=>{const e=o.current;if(!e)return;let n,a,s,c,u=[],d,p;try{n=new MU({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"}),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),a=new J3,s=new Xa(48,window.innerWidth/window.innerHeight,.1,1e3),s.position.set(0,15,35),s.lookAt(0,5,-50);const z=new SR,C=z.load("/brand/gpc/clouds/cloud-bank-a.png"),R=z.load("/brand/gpc/clouds/cloud-bank-b.png"),O=z.load("/brand/gpc/flight/mountain-ground-cutout.png");C.wrapS=C.wrapT=lr,R.wrapS=R.wrapT=lr;const w={uTint:{value:new tn("#faf5ee")},uOpacity:{value:.95},uDotStrength:{value:.75},uDotSize:{value:5.5},uTime:{value:0},uGroundY:{value:-120},uGroundFade:{value:45}},T=q=>new hr({vertexShader:EU,fragmentShader:bU,uniforms:{...w,uTexture:{value:q}},transparent:!0,depthWrite:!1,side:Lr});d=T(C),p=T(R),[{x:-35,y:18,z:-25,scale:65,mat:d,speed:.008},{x:38,y:14,z:-35,scale:75,mat:p,speed:-.006},{x:-10,y:22,z:-55,scale:85,mat:d,speed:.005},{x:45,y:6,z:-70,scale:95,mat:p,speed:-.007},{x:-40,y:-5,z:-40,scale:70,mat:p,speed:.009},{x:25,y:-12,z:-50,scale:80,mat:d,speed:-.005},{x:-30,y:-22,z:-65,scale:90,mat:d,speed:.006},{x:35,y:-30,z:-60,scale:85,mat:p,speed:-.008},{x:-20,y:-45,z:-45,scale:80,mat:p,speed:.007},{x:30,y:-55,z:-55,scale:90,mat:d,speed:-.006},{x:-35,y:-68,z:-70,scale:95,mat:d,speed:.005},{x:20,y:-80,z:-65,scale:85,mat:p,speed:-.008}].forEach(q=>{const W=new Nc(q.scale,q.scale*.55),j=W.attributes.position.count,X=new Float32Array(j*3),G=new Float32Array(j),te=Math.random(),ne=Math.random(),P=Math.random(),me=Math.random()>.4?1:0;for(let Le=0;Le<j;Le++)X[Le*3]=te,X[Le*3+1]=ne,X[Le*3+2]=P,G[Le]=me;W.setAttribute("aVariation",new fr(X,3)),W.setAttribute("aTreatment",new fr(G,1));const Fe=new dr(W,q.mat);Fe.position.set(q.x,q.y,q.z),a.add(Fe),u.push({mesh:Fe,baseX:q.x,speed:q.speed,minX:-80,maxX:80})});const I=new Nc(160,70),V=new yv({map:O,transparent:!0,opacity:.75,depthWrite:!1}),H=new dr(I,V);H.position.set(0,-115,-60),a.add(H)}catch(z){console.error("WebGL flight canvas init failed:",z);return}let m=15,_=35;const g=()=>{const z=window.scrollY,C=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),R=Math.min(Math.max(z/C,0),1);m=15-R*120,_=35-R*25};window.addEventListener("scroll",g,{passive:!0}),g();let v=0,x=0;const E=z=>{v=(z.clientX/window.innerWidth-.5)*5,x=(z.clientY/window.innerHeight-.5)*2.5};window.addEventListener("mousemove",E,{passive:!0});const b=()=>{!n||!s||(s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",b);const S=new ER;let y=0;const L=()=>{if(c=requestAnimationFrame(L),document.documentElement.dataset.preloading&&y++%30!==0)return;S.update();const z=S.getDelta(),C=S.getElapsed();d&&(d.uniforms.uTime.value=C),p&&(p.uniforms.uTime.value=C),s.position.x+=(v-s.position.x)*.05,s.position.y+=(m-x-s.position.y)*.08,s.position.z+=(_-s.position.z)*.08,s.lookAt(v*.3,s.position.y-10,-50),u.forEach(R=>{R.mesh.position.x+=R.speed*(z*60),R.mesh.position.x>R.maxX&&(R.mesh.position.x=R.minX),R.mesh.position.x<R.minX&&(R.mesh.position.x=R.maxX)}),n.render(a,s)};return L(),()=>{cancelAnimationFrame(c),window.removeEventListener("scroll",g),window.removeEventListener("resize",b),window.removeEventListener("mousemove",E),n&&n.dispose()}},[]),F.jsxs("div",{className:"canvas-container","aria-hidden":"true",children:[F.jsx("div",{className:"flight-canvas flight-canvas--background"}),F.jsx("canvas",{ref:o,className:"flight-canvas flight-canvas--webgl"}),F.jsx("div",{className:"flight-canvas-halftone"}),F.jsx("div",{className:"flight-canvas-vignette"})]})}function AU(){const[o,e]=qe.useState(3e4),[n,a]=qe.useState("30,000 FT"),[s,c]=qe.useState(4.2),[u,d]=qe.useState(100);qe.useEffect(()=>{const m=[];window.scrollY>10?a(null):[[300,"29,800 FT"],[600,"30,250 FT"],[900,"29,950 FT"],[1200,null]].forEach(([E,b])=>{m.push(window.setTimeout(()=>{(b===null||window.scrollY<=10)&&a(b)},E))});const g=()=>{m.forEach(x=>clearTimeout(x)),m.length=0,a(null)},v=()=>{const x=window.scrollY;x>10&&m.length&&g();const E=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),b=Math.min(Math.max(x/E,0),1),S=Math.round(3e4*(1-b));e(S);const y=(4.2-b*1.35).toFixed(2);c(y),d(Math.round((1-b)*100)),document.documentElement.style.setProperty("--altitude-remaining",(S/3e4).toFixed(4))};return window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",v),v(),()=>{m.forEach(x=>clearTimeout(x)),window.removeEventListener("scroll",v),window.removeEventListener("resize",v)}},[]);const p=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return F.jsxs("aside",{className:"altitude-hud","aria-label":"Current story elevation & cell telemetry",children:[F.jsx("div",{className:"altitude-hud__track","aria-hidden":"true",children:F.jsx("span",{})}),F.jsxs("div",{className:"altitude-hud__readout",children:[F.jsx("span",{className:"altitude-hud__label",children:"Altitude"}),F.jsx("output",{className:"altitude-hud__value",children:n??`${p.format(o)} FT`}),F.jsxs("div",{className:"altitude-hud__battery-gauge",children:[F.jsxs("span",{children:["⚡ ",s,"V"]}),F.jsx("span",{children:"·"}),F.jsxs("span",{children:[u,"% SoC"]})]})]})]})}const cE=["var(--color-red)","var(--color-orange)","var(--color-purple)","var(--color-yellow)"];function CU(){const[o,e]=qe.useState(0),n=qe.useCallback(()=>{e(a=>(a+1)%cE.length)},[]);return F.jsx("header",{className:"masthead",id:"top",children:F.jsxs("div",{className:"masthead__frame",children:[F.jsxs("div",{className:"masthead__nav",children:[F.jsxs("a",{className:"masthead__brand",href:"#top","aria-label":"Battery Cell 4.0 home",onPointerEnter:n,onFocus:n,style:{"--brand-mark-hue":cE[o]},children:[F.jsx("svg",{viewBox:"0 0 357 197",role:"img","aria-label":"IBC 4.0 Brand Mark",xmlns:"http://www.w3.org/2000/svg",children:F.jsx("path",{d:"M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z",fill:"currentColor"})}),F.jsx("span",{className:"masthead__brand-tag",children:"CELL 4.0 / INDIA HACKATHON 2026"})]}),F.jsxs("nav",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[[{label:"Themes",href:"#themes"},{label:"Architecture",href:"#architecture"},{label:"Dates",href:"#timeline"},{label:"Prizes",href:"#fees"},{label:"FAQ",href:"#faq"}].map(a=>F.jsx("a",{href:a.href,className:"masthead__nav-link",children:a.label},a.label)),F.jsxs("a",{href:"#register",className:"masthead__action-btn",children:[F.jsx("span",{className:"cut-button__box"}),F.jsx("span",{children:"Register EOI"})]})]})]}),F.jsxs("div",{className:"masthead__content",children:[F.jsxs("div",{className:"masthead__badge-row",children:[F.jsx("span",{className:"masthead__badge masthead__badge--live",children:"EOI Floated (Live Now)"}),F.jsx("span",{className:"masthead__badge",children:"8 Themes"}),F.jsx("span",{className:"masthead__badge",children:"Up to ₹2 Lakh Cash Prizes"}),F.jsx("span",{className:"masthead__badge",children:"Mentoring & Incubation"})]}),F.jsxs("h1",{className:"masthead__title-semantic",children:[F.jsx("span",{children:"Intelligent"}),F.jsx("span",{children:"Battery Cell 4.0"}),F.jsx("em",{children:"Hackathon 2026"})]}),F.jsx("p",{className:"masthead__dek",children:"Bringing participants together to develop innovative solutions for the future of battery technology, using AI to advance battery safety, sustainability, and indigenous innovation."})]}),F.jsx("div",{className:"masthead__footer",children:F.jsxs("p",{className:"masthead__meta",children:[F.jsx("span",{children:"Registration Opens: 09 Oct 2026"}),F.jsx("span",{"aria-hidden":"true",children:"·"}),F.jsx("span",{children:"Deadline: 30 Oct 2026"}),F.jsx("span",{"aria-hidden":"true",children:"·"}),F.jsx("span",{children:"Grand Finale Announcement: 01 Dec 2026 (Tentative)"})]})}),F.jsx("p",{className:"scroll-cue","aria-hidden":"true",children:F.jsx("span",{className:"scroll-cue__word",children:"Scroll".split("").map((a,s)=>F.jsx("span",{className:"scroll-cue__letter",style:{"--i":s},children:F.jsx("span",{className:"scroll-cue__glyph",children:a})},s))})})]})})}const RU=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,wU=`
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
`,DU=/^#?[0-9a-fA-F]{6}$/;function uE(o,e){const a=(DU.test((o||"").trim())?o.trim():e).replace("#","");return[0,2,4].map(s=>parseInt(a.slice(s,s+2),16)/255)}const zg=o=>Math.max(0,Math.min(1,o)),NU=o=>o*o*(3-2*o),Fu=(o,e,n)=>NU(zg((o-e)/(n-e))),D_=.06,LU=.6,fE=.5;function UU({mistColor:o="#8DC0DD",coreColor:e="#ffffff"}){const n=qe.useRef(null),a=qe.useRef(null),s=qe.useRef(null),c=qe.useRef(null),u=qe.useRef({scroll:0,cover:0,wake:0,part:0,plane:[-1,.6],visible:!1});return qe.useEffect(()=>{let d=0;const p=()=>{d=0;const _=n.current;if(!_)return;const g=window.innerWidth,v=window.innerHeight,x=_.getBoundingClientRect(),E=zg(-x.top/Math.max(1,x.height-v)),b=zg((E-D_)/(LU-D_)),S=Math.min(620,Math.max(380,g*.42)),y=-S*1.1+b*(g+S*1.4),L=v*(.34+b*.1),z=c.current;if(z){const R=.88+b*.22,O=2.5-b*4;z.style.transform=`translate3d(${y}px, ${L}px, 0) translateY(-50%) rotate(${O}deg) scale(${R})`,z.style.visibility=b>0&&b<1?"visible":"hidden"}const C=u.current;C.scroll=E,C.plane=[(y+S*.18)/g,1-(L+S*.04)/v],C.wake=Fu(E,D_,.16)*(1-Fu(E,.62,.72)),C.cover=Fu(E,.28,.6)*(1-Fu(E,.7,.97)),C.part=Fu(E,.7,.97)},m=()=>{d||(d=requestAnimationFrame(p))};return window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m),p(),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m),d&&cancelAnimationFrame(d)}},[]),qe.useEffect(()=>{const d=a.current,p=s.current,m=n.current;if(!d||!p||!m)return;const _=d.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!_){console.warn("WebGL not supported for Cloudscape");return}_.enable(_.BLEND),_.blendFunc(_.ONE,_.ONE_MINUS_SRC_ALPHA);const g=(X,G)=>{const te=_.createShader(X);return _.shaderSource(te,G),_.compileShader(te),_.getShaderParameter(te,_.COMPILE_STATUS)?te:(console.error("Shader compile error:",_.getShaderInfoLog(te)),_.deleteShader(te),null)},v=g(_.VERTEX_SHADER,RU),x=g(_.FRAGMENT_SHADER,wU);if(!v||!x)return;const E=_.createProgram();if(_.attachShader(E,v),_.attachShader(E,x),_.linkProgram(E),!_.getProgramParameter(E,_.LINK_STATUS)){console.error("Program link error:",_.getProgramInfoLog(E));return}_.useProgram(E);const b=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,b),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),_.STATIC_DRAW);const S=_.getAttribLocation(E,"position");_.enableVertexAttribArray(S),_.vertexAttribPointer(S,2,_.FLOAT,!1,0,0);const y=X=>_.getUniformLocation(E,X),L=y("u_resolution"),z=y("u_time"),C=y("u_scroll"),R=y("u_cover"),O=y("u_wake"),w=y("u_part"),T=y("u_plane");_.uniform3fv(y("u_mistColor"),uE(o,"#8DC0DD")),_.uniform3fv(y("u_coreColor"),uE(e,"#ffffff"));const D=()=>{const{width:X,height:G}=p.getBoundingClientRect();d.width=Math.max(1,Math.round(X*fE)),d.height=Math.max(1,Math.round(G*fE)),_.viewport(0,0,d.width,d.height),_.uniform2f(L,d.width,d.height)};D();const I=new ResizeObserver(D);I.observe(p);let V=0,H=!1;const q=performance.now(),W=X=>{V=requestAnimationFrame(W);const G=u.current;_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),!(G.cover<.002&&G.wake<.002)&&(_.uniform1f(z,(X-q)/1e3),_.uniform1f(C,G.scroll),_.uniform1f(R,G.cover),_.uniform1f(O,G.wake),_.uniform1f(w,G.part),_.uniform2f(T,G.plane[0],G.plane[1]),_.drawArrays(_.TRIANGLE_STRIP,0,4))},j=new IntersectionObserver(([X])=>{X.isIntersecting&&!H?(H=!0,V=requestAnimationFrame(W)):!X.isIntersecting&&H&&(H=!1,cancelAnimationFrame(V),_.clear(_.COLOR_BUFFER_BIT))});return j.observe(m),()=>{j.disconnect(),cancelAnimationFrame(V),I.disconnect(),_.deleteBuffer(b),_.deleteProgram(E),_.deleteShader(v),_.deleteShader(x)}},[o,e]),F.jsx("div",{ref:n,className:"cloud-transition-zone","aria-hidden":"true",children:F.jsxs("div",{ref:s,className:"cloud-transition-zone__sticky",children:[F.jsx("canvas",{ref:a,className:"cloud-transition-canvas"}),F.jsxs("div",{ref:c,className:"cloud-transition-flight",style:{visibility:"hidden"},children:[F.jsx("div",{className:"cloud-transition-trail-wrapper",children:F.jsx("img",{src:"/brand/gpc/flight/jet-stream-magnific.png",className:"cloud-transition-trail",alt:""})}),F.jsx("img",{src:"/brand/gpc/airliner-gpc-color-block.png",className:"cloud-transition-plane",alt:""})]})]})})}function N_({text:o="",as:e="p",className:n="",highlightWord:a=""}){const s=qe.useRef(null),c=qe.useMemo(()=>o.trim().split(/\s+/),[o]);return qe.useEffect(()=>{const u=s.current;if(!u)return;const d=Array.from(u.querySelectorAll(".scroll-reveal-word"));if(!d.length)return;let p=[],m=null;const _=()=>{const E=window.scrollY,b=d.map(L=>L.getBoundingClientRect().top+E);let S=NaN,y=0;p=d.map((L,z)=>{const C=b[z];return Number.isNaN(S)||Math.abs(C-S)>3?(y=0,S=C):y+=1,{element:L,documentTop:C,wordInLine:y,lastProgress:-1}}),g()},g=()=>{const E=window.innerHeight,b=window.scrollY;p.forEach(S=>{const y=S.documentTop-b,L=.98*E-4*S.wordInLine,z=.72*E-S.wordInLine,C=Math.min(Math.max((L-y)/Math.max(L-z,1),0),1);Math.abs(C-S.lastProgress)>=.002&&(S.lastProgress=C,S.element.style.opacity=C.toFixed(4),S.element.style.filter=C>.99?"none":`blur(${((1-C)*6).toFixed(2)}px)`)})},v=()=>{cancelAnimationFrame(m),m=requestAnimationFrame(g)},x=()=>{cancelAnimationFrame(m),m=requestAnimationFrame(_)};return _(),window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",x),()=>{cancelAnimationFrame(m),window.removeEventListener("scroll",v),window.removeEventListener("resize",x)}},[c]),F.jsx(e,{ref:s,className:n,children:c.map((u,d)=>{const p=a&&u.toLowerCase().includes(a.toLowerCase());return F.jsxs(tb.Fragment,{children:[F.jsx("span",{className:"scroll-reveal-word",style:{display:"inline-block",marginRight:d<c.length-1?"0.28em":void 0,opacity:.15,filter:"blur(4px)",color:p?"var(--color-red)":void 0,fontWeight:p?500:void 0},children:u}),d<c.length-1?" ":""]},`${u}-${d}`)})})}function OU(){return F.jsx("section",{className:"statement","aria-label":"The bottleneck of modern battery development",children:F.jsx("div",{className:"statement__sticky",children:F.jsxs("div",{className:"statement__inner",style:{textAlign:"center"},children:[F.jsx("h2",{className:"statement__heading",children:"Most battery innovations never survive past academic journals."}),F.jsx("h2",{className:"statement__heading",style:{color:"var(--color-red)",marginTop:"0.4em"},children:"They stall in prototype cells before reaching gigawatt scale."}),F.jsxs("div",{className:"statement__tags-row",children:[F.jsx("p",{className:"statement__tag statement__tag--cost",children:"Thermal Runaway Risk"}),F.jsx("p",{className:"statement__tag statement__tag--effort",children:"Black-Box Cell Degradation"}),F.jsx("p",{className:"statement__tag statement__tag--tech",children:"Foreign Chemistry Dependency"})]})]})})})}const L_=[{word:"Thermal Safety",prob:45,color:"var(--color-red)",desc:"Mitigating micro-dendrite thermal runaway before catastrophic failure."},{word:"Digital Twins",prob:31,color:"var(--color-orange)",desc:"Real-time electrochemical physics simulation running on IoT edge nodes."},{word:"Second-Life Reuse",prob:17,color:"var(--color-purple)",desc:"Cascading EV battery packs into grid-scale renewable energy storage."},{word:"Indigenous Tech",prob:7,color:"var(--color-yellow)",desc:"Sovereign sodium-ion and national security storage independent of global supply."}];function PU(){const[o,e]=qe.useState(0);return F.jsx("section",{className:"probability","aria-labelledby":"prob-heading",children:F.jsx("div",{className:"probability__sticky",children:F.jsxs("div",{className:"probability__inner",children:[F.jsx("p",{className:"probability__eyebrow",children:"Electrochemical Paradigm Shift"}),F.jsxs("h2",{id:"prob-heading",className:"probability__heading",children:["The future of battery technology is"," ",F.jsxs("em",{style:{color:L_[o].color,fontStyle:"italic"},children:[L_[o].word,"."]})]}),F.jsx("ol",{className:"probability__candidates",children:L_.map((n,a)=>F.jsxs("li",{className:`probability__candidate ${o===a?"is-active":""}`,style:{"--cand-color":n.color,"--cand-fill":o===a?"1":`${n.prob/100}`},onPointerEnter:()=>e(a),onClick:()=>e(a),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e(a))},"aria-pressed":o===a,tabIndex:0,role:"button",children:[F.jsx("div",{className:"probability__candidate-bar"}),F.jsxs("div",{children:[F.jsx("span",{className:"probability__candidate-word",children:n.word}),F.jsx("p",{className:"probability__candidate-desc",children:n.desc})]}),F.jsxs("span",{className:"probability__candidate-value",children:[n.prob,"%"]})]},n.word))}),F.jsx("p",{className:"probability__takeaway",children:'"The conventional engineering choice is rarely the breakthrough that reimagines an industry."'})]})})})}function IU(){const[o,e]=qe.useState(!1),[n,a]=qe.useState(!1);return F.jsx("section",{className:"prompt-split",id:"architecture","aria-label":"Two approaches to battery innovation",children:F.jsxs("div",{className:"prompt-split__grid",children:[F.jsxs("article",{className:"prompt-split__column",children:[F.jsxs("div",{children:[F.jsx("span",{className:"prompt-split__label prompt-split__label--one",children:"Group 1: Incremental Patch"}),F.jsx("h2",{className:"prompt-split__font-source",children:'"Add an external temperature thermistor to an unmonitored lithium pack."'}),F.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The legacy way: relying on surface-level sensors that detect heat only after catastrophic internal chemical breakdown has already started."})]}),F.jsxs("div",{className:"prompt-split__paper-stage",children:[F.jsx("img",{src:"/brand/gpc/props/conventional-battery-schematic.svg",alt:"Conventional battery schematic with blind thermal core",className:`prompt-split__sketch-img ${o?"is-crumpled":""}`}),F.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>e(!o),children:[F.jsx("img",{src:"/brand/gpc/props/vintage-fountain-pen.png",alt:"",style:{width:"18px",height:"auto"}}),F.jsx("span",{children:o?"Inspect Normal View":"Highlight Thermal Hotspot"})]})]})]}),F.jsxs("article",{className:"prompt-split__column",children:[F.jsxs("div",{children:[F.jsx("span",{className:"prompt-split__label prompt-split__label--two",children:"Group 2: Intelligent Cell 4.0"}),F.jsx("h2",{className:"prompt-split__font-source",children:'"Embed in-situ optical sensors and edge neural physics directly inside the cell."'}),F.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The Hackathon 2026 challenge: predicting micro-dendrite nucleation, impedance shifts, and mechanical strain in real-time before temperature rises."})]}),F.jsxs("div",{className:"prompt-split__paper-stage",children:[F.jsx("img",{src:"/brand/gpc/props/intelligent-cell-schematic.svg",alt:"Intelligent Cell 4.0 schematic with optical fiber and edge BMS",className:`prompt-split__sketch-img ${n?"is-crumpled":""}`}),F.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>a(!n),children:[F.jsx("img",{src:"/brand/gpc/props/vintage-scissors.png",alt:"",style:{width:"18px",height:"auto"}}),F.jsx("span",{children:n?"Default Blueprint":"Activate AI Sensor Spine"})]})]})]})]})})}const xh=[{id:"01",code:"BMS",title:"Intelligent Battery Management Systems",desc:"Using AI to build intelligent battery management systems.",tag:"Battery Management",badgeColor:"#f94e2a",schematicType:"bms"},{id:"02",code:"SAFETY",title:"Battery Safety",desc:"Using AI to advance battery safety.",tag:"Safety",badgeColor:"#f66f00",schematicType:"safety"},{id:"03",code:"CHARGE",title:"Smart Charging & Second-Life Applications",desc:"Using AI for smart charging and second-life applications of batteries.",tag:"Charging & Second Life",badgeColor:"#9b338f",schematicType:"charging"},{id:"04",code:"STORAGE",title:"Renewable Energy Storage",desc:"Using AI to advance battery-based renewable energy storage.",tag:"Energy Storage",badgeColor:"#ffc013",schematicType:"grid"},{id:"05",code:"TWIN",title:"Battery Diagnostics & Digital Twins",desc:"Using AI for battery diagnostics and digital twins.",tag:"Diagnostics",badgeColor:"#f94e2a",schematicType:"twin"},{id:"06",code:"IOT",title:"IoT-Enabled Monitoring",desc:"Using AI with IoT-enabled monitoring of batteries.",tag:"IoT Monitoring",badgeColor:"#f66f00",schematicType:"iot"},{id:"07",code:"INDIGENOUS",title:"Indigenous Battery Technologies",desc:"Using AI to advance indigenous battery technologies and innovation.",tag:"Indigenous Innovation",badgeColor:"#9b338f",schematicType:"chem"},{id:"08",code:"OTHER",title:"Other Relevant Themes",desc:"Other relevant themes, including those related to the national security domain.",tag:"Open Theme",badgeColor:"#f94e2a",schematicType:"defense"}];function _f(o,e,n){return Math.min(n,Math.max(e,o))}function zU(o,e,n,a){const s=_f(o/e,0,1);return n+4*a*s*(1-s)}function FU(o,e,n,a,s=70){const c=2*Math.sqrt(s),u=e+(s*(n-o)-c*e)*a;return[o+u*a,u]}function BU(o,e,n,a,s=1){const c=e+(-38*o-4.2*e+n*.0034*s)*a;return[_f(o+c*a,-.45,.45),c]}function dE(o,e,n){return _f(Math.round(o/e),0,Math.max(0,n-1))}function hE(o){return o<10?"0"+o:String(o)}function HU(){const o=xh.length,[e,n]=qe.useState(0),[a,s]=qe.useState(!1),[c,u]=qe.useState({w:1200,h:640,cw:330}),d=qe.useRef(null),p=qe.useRef(null),m=qe.useRef([]),_=qe.useRef({off:0,vel:0,target:0,a:[],w:[]}),g=qe.useRef(null),v=qe.useRef(0),x=qe.useRef(0),E=34,b=1,S=c.cw*1.14,y=qe.useCallback(T=>{_.current.target=_f(T,0,o-1)*S},[o,S]);qe.useEffect(()=>{const T=d.current;if(!T)return;const D=new ResizeObserver(()=>{const I=T.getBoundingClientRect(),V=Math.round(Math.max(280,Math.min(350,I.width*.42,I.height*.54)));u({w:I.width,h:I.height,cw:V})});return D.observe(T),()=>D.disconnect()},[]),qe.useEffect(()=>{_.current.target=x.current*S,_.current.off=x.current*S},[S]),qe.useEffect(()=>{const T=d.current;if(!T)return;const D=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let I=!0,V=0,H=performance.now();const q=_.current,W=X=>{if(V=0,!I)return;const G=Math.min(.033,(X-H)/1e3);H=X;const{w:te,h:ne,cw:P}=c,me=Math.max(50,ne*.14),Fe=g.current;let Le=0;if(Fe&&Fe.moved)Le=Fe.v*1e3;else{const Ee=q.off;[q.off,q.vel]=FU(q.off,q.vel,q.target,G),Le=-(q.off-Ee)/Math.max(G,.001)}const k=D?0:b,le=dE(q.off,S,o);for(let Ee=0;Ee<o;Ee++){const J=m.current[Ee];if(!J)continue;const ce=te/2+Ee*S-q.off;if(ce<-P*1.5||ce>te+P*1.5){J.style.visibility="hidden";continue}J.style.visibility="visible";let Ce=q.a[Ee]||0,Ge=q.w[Ee]||0;[Ce,Ge]=BU(Ce,Ge,Le,G,k),k&&(Ce+=Math.sin(X/1300+Ee*1.7)*9e-4*k),q.a[Ee]=Ce,q.w[Ee]=Ge;const ve=zU(ce,te,me,E)-6,Ue=Ee===le;J.style.transform=`translate(${(ce-P/2).toFixed(1)}px, ${ve.toFixed(1)}px) rotate(${Ce.toFixed(4)}rad)`,J.style.zIndex=String(Ue?o+2:o-Math.abs(Ee-le))}p.current&&p.current.setAttribute("d",`M 0 ${me} Q ${te/2} ${me+2*E} ${te} ${me}`),le!==x.current&&(x.current=le,n(le)),V=requestAnimationFrame(W)},j=new IntersectionObserver(([X])=>{I=X.isIntersecting,I&&!V&&(H=performance.now(),V=requestAnimationFrame(W))});return j.observe(T),V=requestAnimationFrame(W),()=>{cancelAnimationFrame(V),j.disconnect()}},[c,S,o]),qe.useEffect(()=>{const T=setInterval(()=>{document.hidden||g.current||performance.now()-v.current<5e3||y(x.current>=o-1?0:x.current+1)},5500);return()=>clearInterval(T)},[o,y]);const L=T=>{T.target.closest(".plc-bar")||T.target.closest("button")||T.target.closest("a")||(v.current=performance.now(),g.current={x:T.clientX,off:_.current.off,lx:T.clientX,lt:T.timeStamp,v:0,moved:!1})},z=T=>{var W;const D=g.current;if(!D)return;const I=T.clientX-D.x;if(!D.moved&&Math.abs(I)>4&&(D.moved=!0,s(!0),(W=d.current)==null||W.setPointerCapture(T.pointerId)),!D.moved)return;const V=Math.max(1,T.timeStamp-D.lt);D.v=.7*((T.clientX-D.lx)/V)+.3*D.v,D.lx=T.clientX,D.lt=T.timeStamp;const H=(o-1)*S;let q=D.off-I;q<0&&(q*=.35),q>H&&(q=H+(q-H)*.35),_.current.off=q},C=T=>{const D=g.current;if(g.current=null,v.current=performance.now(),!D)return;if(D.moved){s(!1),_.current.vel=-D.v*1e3,y(dE(_.current.off-D.v*180,S,o));return}const I=T.target.closest("[data-i]");I&&y(Number(I.getAttribute("data-i")))},R=T=>{v.current=performance.now(),y(_f(x.current+T,0,o-1))},O=T=>{if(T.key==="ArrowRight")R(1);else if(T.key==="ArrowLeft")R(-1);else return;T.preventDefault()},w=xh[e]||xh[0];return F.jsxs("section",{className:"themes-section",id:"themes",children:[F.jsxs("div",{className:"themes-section__intro",children:[F.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / Hackathon Themes"}),F.jsx("h2",{className:"article-block__heading",children:"Using AI to advance battery safety, sustainability, and indigenous innovation."}),F.jsx("p",{className:"themes-section__subhead",children:"Drag the line or use the arrows to explore all 8 hackathon themes."})]}),F.jsxs("div",{ref:d,className:"plc-root","data-drag":a?"1":"0",role:"region","aria-roledescription":"carousel","aria-label":"Hackathon Themes Carousel",tabIndex:0,onKeyDown:O,onPointerDown:L,onPointerMove:z,onPointerUp:C,onPointerCancel:C,style:{"--pl-cw":`${c.cw}px`},children:[F.jsx("svg",{className:"plc-string","aria-hidden":"true",children:F.jsx("path",{ref:p,fill:"none",stroke:"var(--color-ink, #232424)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.32"})}),xh.map((T,D)=>{const I=D===e;return F.jsxs("div",{className:"plc-card","data-i":D,"data-on":I?"1":"0",ref:V=>m.current[D]=V,"aria-hidden":I?void 0:!0,children:[F.jsx("div",{className:"plc-peg","aria-hidden":"true",children:F.jsx("div",{className:"plc-peg__groove"})}),F.jsxs("div",{className:"plc-print",children:[F.jsxs("div",{className:"plc-print__header",children:[F.jsxs("span",{className:"plc-print__tag",style:{background:T.badgeColor},children:[T.id," / THEME"]}),F.jsxs("span",{className:"plc-print__serial",children:["CELL 4.0 · DOMAIN ",T.id]})]}),F.jsx("h3",{className:"plc-print__title",children:T.title}),F.jsx("p",{className:"plc-print__desc",children:T.desc}),F.jsxs("div",{className:"plc-print__footer",children:[F.jsx("span",{className:"plc-print__category",children:T.tag}),F.jsx("a",{href:"#register",className:"plc-print__action",onClick:V=>V.stopPropagation(),children:"SELECT THEME →"})]})]})]},T.id)}),F.jsxs("div",{className:"plc-bar",children:[F.jsxs("div",{className:"plc-cap","aria-hidden":"true",children:[F.jsx("div",{className:"plc-cap__meta",children:F.jsxs("span",{className:"plc-cap__tag",style:{background:w.badgeColor},children:[w.id," / ",w.tag]})}),F.jsx("span",{className:"plc-title",children:w.title}),F.jsx("span",{className:"plc-sub",children:w.desc})]},e),F.jsxs("div",{className:"plc-controls",children:[F.jsxs("span",{className:"plc-count","aria-hidden":"true",children:[F.jsx("b",{children:hE(e+1)})," / ",hE(o)]}),F.jsxs("div",{className:"plc-nav-btns",children:[F.jsx("button",{type:"button",className:"plc-btn","aria-label":"Previous Theme",onClick:()=>R(-1),children:F.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:F.jsx("path",{d:"M10 3 5 8l5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),F.jsx("button",{type:"button",className:"plc-btn","aria-label":"Next Theme",onClick:()=>R(1),children:F.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:F.jsx("path",{d:"m6 3 5 5-5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})}const pE=[{label:"18650 Legacy Li-ion Cell",note:"Commodity cell with high thermal hotspot risk"},{label:"Lead-Acid Heavy Block",note:"Low energy density, toxic electrolyte"},{label:"Rule-Based Relay BMS",note:"Rigid voltage thresholds, blind to impedance shifts"},{label:"Standard LiFePO4 Prism",note:"Safe but passive; no predictive digital twin"}],mE=[{label:"Intelligent Cell 4.0",note:"In-situ optical fiber sensor with edge AI BMS"},{label:"AI Neural Digital Twin",note:"Predicts micro-dendrites at atomic layer in real time"},{label:"Sovereign Sodium-Ion",note:"Indigenous non-lithium domestic supply chain"},{label:"Solid-State Ceramic",note:"High density but difficult to mass manufacture"}];function GU(){const[o,e]=qe.useState(50),[n,a]=qe.useState([{...pE[2],key:"init-1",isRadical:!1},{...mE[0],key:"init-2",isRadical:!0}]),s=qe.useRef(o),c=qe.useCallback(u=>{const d=Number(u.target.value);if(e(d),Math.abs(d-s.current)>=12){s.current=d;const p=d>50,m=p?mE:pE,_=m[Math.floor(Math.random()*m.length)];a(g=>[...g.slice(-4),{..._,key:`${Date.now()}-${Math.random()}`,isRadical:p}])}},[]);return F.jsx("section",{className:"loewy-maya",id:"spectrum",children:F.jsxs("div",{className:"loewy-maya__inner",children:[F.jsxs("div",{className:"loewy-maya__copy",children:[F.jsx("p",{className:"loewy-maya__label",children:"THE MAYA DESIGN PRINCIPLE IN ENERGY R&D"}),F.jsxs("h2",{className:"loewy-maya__heading",children:[F.jsx("span",{children:"Most advanced"}),F.jsxs("span",{children:[F.jsx("em",{children:"yet"})," acceptable."]})]}),F.jsx("p",{className:"loewy-maya__dek",children:"If your hackathon concept is too familiar, it creates no breakthrough. If it is too radical, it cannot be manufactured. Intelligent Battery Cell 4.0 lives precisely at the threshold of practical engineering and radical imagination."})]}),F.jsxs("section",{className:"maya-spectrum","aria-label":"Innovation spectrum slider",children:[F.jsxs("div",{className:"maya-spectrum__inner",children:[F.jsxs("div",{className:"maya-spectrum__labels",children:[F.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--familiar",children:"← Too Conventional"}),F.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--radical",children:"Too Radical →"})]}),F.jsxs("div",{className:"maya-spectrum__control",children:[F.jsx("div",{className:"maya-spectrum__track","aria-hidden":"true"}),F.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:c,className:"maya-spectrum__range","aria-label":"Spectrum from conventional to radical battery tech"})]}),F.jsx("p",{className:"maya-spectrum__drag-cue","aria-hidden":"true",children:"← Drag to explore →"})]}),F.jsx("div",{className:"maya-spectrum__stage",children:n.map(u=>F.jsxs("div",{className:`maya-spawn-card ${u.isRadical?"maya-spawn-card--radical":""}`,style:{"--spawn-rotation":`${(Math.random()-.5)*16}deg`,"--spawn-drift-x":`${(Math.random()-.5)*30}px`,"--spawn-lift-y":`${-8-Math.random()*12}px`,"--spawn-fall-y":`${20+Math.random()*15}px`},children:[F.jsx("div",{className:"maya-spawn-card__backdrop","aria-hidden":"true"}),F.jsxs("div",{className:"maya-spawn-card__image",children:[F.jsx("div",{style:{width:"100%",height:"90px",background:u.isRadical?"linear-gradient(135deg, #f94e2a22, #f66f0022)":"linear-gradient(135deg, #9b338f22, #8cb8d122)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"},"aria-hidden":"true",children:u.isRadical?"⚡":"🔋"}),F.jsx("div",{className:"maya-spawn-card__halftone","aria-hidden":"true"})]}),F.jsx("span",{children:u.label})]},u.key))})]})]})})}const VU=[{phase:"STEP 01",date:"09 OCT 2026",status:"OPEN NOW",title:"Registration Opens",desc:"Registration is open. The Expression of Interest (EOI) has been floated."},{phase:"STEP 02",date:"30 OCT 2026",status:"DEADLINE",title:"Registration Deadline",desc:"Last date to register for the hackathon."},{phase:"STEP 03",date:"IN BETWEEN",status:"BEFORE GRAND FINALE",title:"Mentoring, Product Development & Screening",desc:"Mentoring, product development and screening will be completed before the Grand Finale. Mentoring sessions are for shortlisted applicants."},{phase:"STEP 04",date:"01 DEC 2026",status:"TENTATIVE",title:"Grand Finale Announcement",desc:"The final Grand Finale will be announced on 1 December 2026 (tentative)."}];function kU(){return F.jsxs("section",{className:"timeline-section",id:"timeline",children:[F.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[F.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"02 / Important Dates"}),F.jsx("h2",{className:"article-block__heading",children:"Important Dates"}),F.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Register before 30 October 2026."})]}),F.jsx("div",{className:"timeline-grid",children:VU.map(o=>F.jsxs("div",{className:"timeline-card",children:[F.jsxs("span",{className:"timeline-card__phase",children:[o.phase," · ",o.status]}),F.jsx("h3",{className:"timeline-card__date",children:o.date}),F.jsx("h4",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:500,marginBottom:"0.6rem",color:"var(--color-neutral-500)"},children:o.title}),F.jsx("p",{className:"timeline-card__desc",children:o.desc})]},o.phase))})]})}const XU=[{icon:"🏆",title:"Up to ₹2 Lakh Cash Prizes",desc:"Attractive cash prizes and certificates for the winners, with up to ₹2 lakh in prize money."},{icon:"🔬",title:"Mentoring Sessions",desc:"Mentoring sessions for shortlisted applicants before the Grand Finale."},{icon:"🚀",title:"Incubation Opportunities",desc:"Incubation opportunities for participants."}],WU=[{tier:"STUDENTS & RESEARCH SCHOLARS",fee:"₹500/-",desc:"For students and research scholars."},{tier:"STUDENT START-UPS",fee:"₹1,500/-",desc:"For student start-ups with university/college-enrolled students.",highlight:!0},{tier:"MSMEs & REGISTERED START-UPS",fee:"₹2,000/-",desc:"For MSMEs and registered start-ups."}];function YU(){return F.jsxs("section",{className:"fees-section",id:"fees",children:[F.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[F.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"03 / Benefits & Fees"}),F.jsx("h2",{className:"article-block__heading",children:"Participant Benefits & Registration Fees"}),F.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.05rem",lineHeight:1.5,fontFamily:"var(--font-body)"},children:"Registration fee depends on your participant category."})]}),F.jsx("div",{className:"benefits-row",children:XU.map(o=>F.jsxs("div",{className:"benefit-card",children:[F.jsx("div",{className:"benefit-card__icon",children:o.icon}),F.jsx("h3",{className:"benefit-card__title",children:o.title}),F.jsx("p",{className:"benefit-card__desc",children:o.desc})]},o.title))}),F.jsx("div",{className:"fees-grid",children:WU.map(o=>F.jsxs("div",{className:`fee-card ${o.highlight?"fee-card--highlight":""}`,children:[F.jsxs("div",{children:[F.jsx("span",{className:"fee-card__tier",children:o.tier}),F.jsx("div",{className:"fee-card__amount",children:o.fee}),F.jsx("p",{className:"fee-card__desc",children:o.desc})]}),F.jsxs("a",{href:"#register",className:"cut-button",style:{textDecoration:"none",width:"auto",alignSelf:"flex-start"},children:[F.jsx("span",{className:"cut-button__box",style:{"--cut-fill":o.highlight?"var(--color-red)":"var(--color-yellow)"}}),F.jsx("span",{className:"cut-button__label",style:{color:o.highlight?"var(--color-neutral-100)":"var(--color-ink)"},children:"Select & Register"})]})]},o.tier))})]})}const qU=[{step:"STAGE 01",title:"Registration",dates:"09 Oct – 30 Oct 2026",criteria:["Registration opens on 9 October 2026 (EOI has been floated)","Registration deadline is 30 October 2026","Registration fee as per participant category (₹500/-, ₹1,500/- or ₹2,000/-)"]},{step:"STAGE 02",title:"Mentoring, Product Development & Screening",dates:"Before the Grand Finale",criteria:["Screening of applicants","Mentoring sessions for shortlisted applicants","Product development"]},{step:"STAGE 03",title:"Grand Finale",dates:"To be announced on 1 Dec 2026 (tentative)",criteria:["Cash prizes of up to ₹2 lakh for the winners","Certificates for the winners","Incubation opportunities for participants"]}];function ZU(){return F.jsxs("section",{className:"article-block split-section",id:"evaluation",children:[F.jsxs("header",{className:"split-section__intro",children:[F.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"04 / How It Works"}),F.jsxs("h2",{className:"split-section__heading",children:["Hackathon ",F.jsx("em",{children:"Stages"})]}),F.jsx("p",{className:"split-section__lede",children:"From registration to the Grand Finale: mentoring, product development and screening happen in between."}),F.jsxs("div",{className:"split-section__telemetry",children:[F.jsxs("div",{className:"split-section__metric",children:[F.jsx("span",{className:"split-section__metric-val",children:"03"}),F.jsx("span",{className:"split-section__metric-lbl",children:"Stages"})]}),F.jsxs("div",{className:"split-section__metric",children:[F.jsx("span",{className:"split-section__metric-val",children:"08"}),F.jsx("span",{className:"split-section__metric-lbl",children:"Themes"})]}),F.jsxs("div",{className:"split-section__metric",children:[F.jsx("span",{className:"split-section__metric-val",children:"₹2L"}),F.jsx("span",{className:"split-section__metric-lbl",children:"Prize Money"})]})]})]}),F.jsx("div",{className:"split-section__body",children:qU.map(o=>F.jsx("div",{className:"theme-card",style:{padding:"2.5rem"},children:F.jsxs("div",{children:[F.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:F.jsx("span",{className:"theme-card__idx",children:o.step})}),F.jsx("h3",{className:"theme-card__title",style:{fontSize:"1.4rem"},children:o.title}),F.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"var(--color-orange)",marginBottom:"1.5rem"},children:o.dates}),F.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.75rem"},children:o.criteria.map((e,n)=>F.jsxs("li",{style:{display:"flex",gap:"0.5rem",fontSize:"0.9rem",color:"var(--color-ink-muted)",lineHeight:1.5},children:[F.jsx("span",{style:{color:"var(--color-red)",fontWeight:"bold"},children:"✓"}),F.jsx("span",{children:e})]},n))})]})},o.step))})]})}const jU=[{q:"Who can participate in this Hackathon?",a:"Three participant categories can register: (1) Students and research scholars; (2) Student start-ups (with university/college-enrolled students); and (3) MSMEs and registered start-ups."},{q:"What is the focus of the event?",a:"Intelligent Battery Cell 4.0 Hackathon 2026 will bring participants together to develop innovative solutions for the future of battery technology. The event focuses on using AI to advance battery safety, sustainability, and indigenous innovation."},{q:"What are the hackathon themes?",a:"Intelligent battery management systems; Battery safety; Smart charging and second-life applications; Renewable energy storage; Battery diagnostics and digital twins; IoT-enabled monitoring; Indigenous battery technologies; and Other relevant themes, including those related to the national security domain."},{q:"What is the registration fee?",a:"Students and research scholars: ₹500/-. Student start-ups (with university/college-enrolled students): ₹1,500/-. MSMEs and registered start-ups: ₹2,000/-."},{q:"What are the important dates?",a:"Registration opens on 9 October 2026 (EOI has been floated). The registration deadline is 30 October 2026. The final Grand Finale will be announced on 1 December 2026 (tentative). Mentoring, product development and screening will be completed in between."},{q:"What do participants get?",a:"Attractive cash prizes and certificates for the winners, with up to ₹2 lakh in cash prize money; mentoring sessions for shortlisted applicants before the Grand Finale; and incubation opportunities for participants."}];function KU(){const[o,e]=qe.useState(0);return F.jsxs("section",{className:"article-block split-section",id:"faq",children:[F.jsxs("header",{className:"split-section__intro",children:[F.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"05 / Participant Clarifications"}),F.jsxs("h2",{className:"split-section__heading",children:["Frequently Asked ",F.jsx("em",{children:"Questions"})]}),F.jsx("p",{className:"split-section__lede",children:"Eligibility, themes, fees, dates and participant benefits."})]}),F.jsx("div",{className:"split-section__body faq-list",children:jU.map((n,a)=>{const s=o===a;return F.jsxs("div",{className:`faq-card${s?" is-open":""}`,children:[F.jsxs("button",{type:"button",onClick:()=>e(s?-1:a),"aria-expanded":s,"aria-controls":`faq-answer-${a}`,style:{width:"100%",padding:"1.6rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontFamily:"var(--font-serif)",fontSize:"1.25rem",color:"var(--color-neutral-500)"},children:[F.jsx("span",{children:n.q}),F.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",color:"var(--color-red)"},children:s?"—":"+"})]}),s&&F.jsx("div",{id:`faq-answer-${a}`,style:{padding:"0 2rem 1.8rem",borderTop:"1px dashed var(--color-border)"},children:F.jsx("p",{style:{marginTop:"1.2rem",fontSize:"1rem",lineHeight:1.7,color:"var(--color-ink-muted)",fontFamily:"var(--font-sans)"},children:n.a})})]},a)})})]})}/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QU=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hb=(...o)=>o.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JU={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $U=qe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:s="",children:c,iconNode:u,...d},p)=>qe.createElement("svg",{ref:p,...JU,width:e,height:e,stroke:o,strokeWidth:a?Number(n)*24/Number(e):n,className:Hb("lucide",s),...d},[...u.map(([m,_])=>qe.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=(o,e)=>{const n=qe.forwardRef(({className:a,...s},c)=>qe.createElement($U,{ref:c,iconNode:e,className:Hb(`lucide-${QU(o)}`,a),...s}));return n.displayName=`${o}`,n};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],nO=eO("Github",tO);function ls(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Gb(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wa={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gf={duration:.5,overwrite:!1,delay:0},Ev,Ei,Rn,Za=1e8,xn=1/Za,Fg=Math.PI*2,iO=Fg/4,aO=0,Vb=Math.sqrt,rO=Math.cos,sO=Math.sin,hi=function(e){return typeof e=="string"},Gn=function(e){return typeof e=="function"},gs=function(e){return typeof e=="number"},bv=function(e){return typeof e>"u"},Vr=function(e){return typeof e=="object"},ia=function(e){return e!==!1},Tv=function(){return typeof window<"u"},Sh=function(e){return Gn(e)||hi(e)},kb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Oi=Array.isArray,oO=/random\([^)]+\)/g,lO=/,\s*/g,_E=/(?:-?\.?\d|\.)+/gi,Xb=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gc=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,U_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wb=/[+-]=-?[.\d]+/,cO=/[^,'"\[\]\s]+/gi,uO=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nn,wr,Bg,Av,Da={},ep={},Yb,qb=function(e){return(ep=Uc(e,Da))&&oa},Cv=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},vf=function(e,n){return!n&&console.warn(e)},Zb=function(e,n){return e&&(Da[e]=n)&&ep&&(ep[e]=n)||Da},xf=function(){return 0},fO={suppressEvents:!0,isStart:!0,kill:!1},Bh={suppressEvents:!0,kill:!1},dO={suppressEvents:!0},Rv={},ro=[],Hg={},jb,Ma={},O_={},gE=30,Hh=[],wv="",Dv=function(e){var n=e[0],a,s;if(Vr(n)||Gn(n)||(e=[e]),!(a=(n._gsap||{}).harness)){for(s=Hh.length;s--&&!Hh[s].targetTest(n););a=Hh[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new gT(e[s],a)))||e.splice(s,1);return e},Zo=function(e){return e._gsap||Dv(ja(e))[0]._gsap},Kb=function(e,n,a){return(a=e[n])&&Gn(a)?e[n]():bv(a)&&e.getAttribute&&e.getAttribute(n)||a},aa=function(e,n){return(e=e.split(",")).forEach(n)||e},Xn=function(e){return Math.round(e*1e5)/1e5||0},Dn=function(e){return Math.round(e*1e7)/1e7||0},Ec=function(e,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return e=parseFloat(e),a==="+"?e+s:a==="-"?e-s:a==="*"?e*s:e/s},hO=function(e,n){for(var a=n.length,s=0;e.indexOf(n[s])<0&&++s<a;);return s<a},tp=function(){var e=ro.length,n=ro.slice(0),a,s;for(Hg={},ro.length=0,a=0;a<e;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Nv=function(e){return!!(e._initted||e._startAt||e.add)},Qb=function(e,n,a,s){ro.length&&!Ei&&tp(),e.render(n,a,!!(Ei&&n<0&&Nv(e))),ro.length&&!Ei&&tp()},Jb=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(cO).length<2?n:hi(e)?e.trim():e},$b=function(e){return e},Na=function(e,n){for(var a in n)a in e||(e[a]=n[a]);return e},pO=function(e){return function(n,a){for(var s in a)s in n||s==="duration"&&e||s==="ease"||(n[s]=a[s])}},Uc=function(e,n){for(var a in n)e[a]=n[a];return e},vE=function o(e,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=Vr(n[a])?o(e[a]||(e[a]={}),n[a]):n[a]);return e},np=function(e,n){var a={},s;for(s in e)s in n||(a[s]=e[s]);return a},Ju=function(e){var n=e.parent||Nn,a=e.keyframes?pO(Oi(e.keyframes)):Na;if(ia(e.inherit))for(;n;)a(e,n.vars.defaults),n=n.parent||n._dp;return e},mO=function(e,n){for(var a=e.length,s=a===n.length;s&&a--&&e[a]===n[a];);return a<0},eT=function(e,n,a,s,c){var u=e[s],d;if(c)for(d=n[c];u&&u[c]>d;)u=u._prev;return u?(n._next=u._next,u._next=n):(n._next=e[a],e[a]=n),n._next?n._next._prev=n:e[s]=n,n._prev=u,n.parent=n._dp=e,n},gp=function(e,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var c=n._prev,u=n._next;c?c._next=u:e[a]===n&&(e[a]=u),u?u._prev=c:e[s]===n&&(e[s]=c),n._next=n._prev=n.parent=null},lo=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jo=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},_O=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Gg=function(e,n,a,s){return e._startAt&&(Ei?e._startAt.revert(Bh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,s))},gO=function o(e){return!e||e._ts&&o(e.parent)},xE=function(e){return e._repeat?Oc(e._tTime,e=e.duration()+e._rDelay)*e:0},Oc=function(e,n){var a=Math.floor(e=Dn(e/n));return e&&a===e?a-1:a},ip=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},vp=function(e){return e._end=Dn(e._start+(e._tDur/Math.abs(e._ts||e._rts||xn)||0))},xp=function(e,n){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=Dn(a._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),vp(e),a._dirty||jo(a,e)),e},tT=function(e,n){var a;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(a=ip(e.rawTime(),n),(!n._dur||Df(0,n.totalDuration(),a)-n._tTime>xn)&&n.render(a,!0)),jo(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-xn}},Ur=function(e,n,a,s){return n.parent&&lo(n),n._start=Dn((gs(a)?a:a||e!==Nn?Va(e,a,n):e._time)+n._delay),n._end=Dn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),eT(e,n,"_first","_last",e._sort?"_start":0),Vg(n)||(e._recent=n),s||tT(e,n),e._ts<0&&xp(e,e._tTime),e},nT=function(e,n){return(Da.ScrollTrigger||Cv("scrollTrigger",n))&&Da.ScrollTrigger.create(n,e)},iT=function(e,n,a,s,c){if(Uv(e,n,c),!e._initted)return 1;if(!a&&e._pt&&!Ei&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jb!==ba.frame)return ro.push(e),e._lazy=[c,s],1},vO=function o(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Vg=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},xO=function(e,n,a,s){var c=e.ratio,u=n<0||!n&&(!e._start&&vO(e)&&!(!e._initted&&Vg(e))||(e._ts<0||e._dp._ts<0)&&!Vg(e))?0:1,d=e._rDelay,p=0,m,_,g;if(d&&e._repeat&&(p=Df(0,e._tDur,n),_=Oc(p,d),e._yoyo&&_&1&&(u=1-u),_!==Oc(e._tTime,d)&&(c=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==c||Ei||s||e._zTime===xn||!n&&e._zTime){if(!e._initted&&iT(e,n,s,a,p))return;for(g=e._zTime,e._zTime=n||(a?xn:0),a||(a=n&&!g),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=p,m=e._pt;m;)m.r(u,m.d),m=m._next;n<0&&Gg(e,n,a,!0),e._onUpdate&&!a&&Aa(e,"onUpdate"),p&&e._repeat&&!a&&e.parent&&Aa(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===u&&(u&&lo(e,1),!a&&!Ei&&(Aa(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},SO=function(e,n,a){var s;if(a>n)for(s=e._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=e._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Pc=function(e,n,a,s){var c=e._repeat,u=Dn(n)||0,d=e._tTime/e._tDur;return d&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=c?c<0?1e10:Dn(u*(c+1)+e._rDelay*c):u,d>0&&!s&&xp(e,e._tTime=e._tDur*d),e.parent&&vp(e),a||jo(e.parent,e),e},SE=function(e){return e instanceof ta?jo(e):Pc(e,e._dur)},yO={_start:0,endTime:xf,totalDuration:xf},Va=function o(e,n,a){var s=e.labels,c=e._recent||yO,u=e.duration()>=Za?c.endTime(!1):e._dur,d,p,m;return hi(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),m=n.substr(-1)==="%",d=n.indexOf("="),p==="<"||p===">"?(d>=0&&(n=n.replace(/=/,"")),(p==="<"?c._start:c.endTime(c._repeat>=0))+(parseFloat(n.substr(1))||0)*(m?(d<0?c:a).totalDuration()/100:1)):d<0?(n in s||(s[n]=u),s[n]):(p=parseFloat(n.charAt(d-1)+n.substr(d+1)),m&&a&&(p=p/100*(Oi(a)?a[0]:a).totalDuration()),d>1?o(e,n.substr(0,d-1),a)+p:u+p)):n==null?u:+n},$u=function(e,n,a){var s=gs(n[1]),c=(s?2:1)+(e<2?0:1),u=n[c],d,p;if(s&&(u.duration=n[1]),u.parent=a,e){for(d=u,p=a;p&&!("immediateRender"in d);)d=p.vars.defaults||{},p=ia(p.vars.inherit)&&p.parent;u.immediateRender=ia(d.immediateRender),e<2?u.runBackwards=1:u.startAt=n[c-1]}return new $n(n[0],u,n[c+1])},ho=function(e,n){return e||e===0?n(e):n},Df=function(e,n,a){return a<e?e:a>n?n:a},Di=function(e,n){return!hi(e)||!(n=uO.exec(e))?"":n[1]},MO=function(e,n,a){return ho(a,function(s){return Df(e,n,s)})},kg=[].slice,aT=function(e,n){return e&&Vr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Vr(e[0]))&&!e.nodeType&&e!==wr},EO=function(e,n,a){return a===void 0&&(a=[]),e.forEach(function(s){var c;return hi(s)&&!n||aT(s,1)?(c=a).push.apply(c,ja(s)):a.push(s)})||a},ja=function(e,n,a){return Rn&&!n&&Rn.selector?Rn.selector(e):hi(e)&&!a&&(Bg||!Ic())?kg.call((n||Av).querySelectorAll(e),0):Oi(e)?EO(e,a):aT(e)?kg.call(e,0):e?[e]:[]},Xg=function(e){return e=ja(e)[0]||vf("Invalid scope")||{},function(n){var a=e.current||e.nativeElement||e;return ja(n,a.querySelectorAll?a:a===e?vf("Invalid scope")||Av.createElement("div"):e)}},rT=function(e){return e.sort(function(){return .5-Math.random()})},sT=function(e){if(Gn(e))return e;var n=Vr(e)?e:{each:e},a=Ko(n.ease),s=n.from||0,c=parseFloat(n.base)||0,u={},d=s>0&&s<1,p=isNaN(s)||d,m=n.axis,_=s,g=s;return hi(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!d&&p&&(_=s[0],g=s[1]),function(v,x,E){var b=(E||n).length,S=u[b],y,L,z,C,R,O,w,T,D;if(!S){if(D=n.grid==="auto"?0:(n.grid||[1,Za])[1],!D){for(w=-Za;w<(w=E[D++].getBoundingClientRect().left)&&D<b;);D<b&&D--}for(S=u[b]=[],y=p?Math.min(D,b)*_-.5:s%D,L=D===Za?0:p?b*g/D-.5:s/D|0,w=0,T=Za,O=0;O<b;O++)z=O%D-y,C=L-(O/D|0),S[O]=R=m?Math.abs(m==="y"?C:z):Vb(z*z+C*C),R>w&&(w=R),R<T&&(T=R);s==="random"&&rT(S),S.max=w-T,S.min=T,S.v=b=(parseFloat(n.amount)||parseFloat(n.each)*(D>b?b-1:m?m==="y"?b/D:D:Math.max(D,b/D))||0)*(s==="edges"?-1:1),S.b=b<0?c-b:c,S.u=Di(n.amount||n.each)||0,a=a&&b<0?IO(a):a}return b=(S[v]-S.min)/S.max||0,Dn(S.b+(a?a(b):b)*S.v)+S.u}},Wg=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var s=Dn(Math.round(parseFloat(a)/e)*e*n);return(s-s%1)/n+(gs(a)?0:Di(a))}},oT=function(e,n){var a=Oi(e),s,c;return!a&&Vr(e)&&(s=a=e.radius||Za,e.values?(e=ja(e.values),(c=!gs(e[0]))&&(s*=s)):e=Wg(e.increment)),ho(n,a?Gn(e)?function(u){return c=e(u),Math.abs(c-u)<=s?c:u}:function(u){for(var d=parseFloat(c?u.x:u),p=parseFloat(c?u.y:0),m=Za,_=0,g=e.length,v,x;g--;)c?(v=e[g].x-d,x=e[g].y-p,v=v*v+x*x):v=Math.abs(e[g]-d),v<m&&(m=v,_=g);return _=!s||m<=s?e[_]:u,c||_===u||gs(u)?_:_+Di(u)}:Wg(e))},lT=function(e,n,a,s){return ho(Oi(e)?!n:a===!0?!!(a=0):!s,function(){return Oi(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(n-e+a*.99))/a)*a*s)/s})},bO=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(s){return n.reduce(function(c,u){return u(c)},s)}},TO=function(e,n){return function(a){return e(parseFloat(a))+(n||Di(a))}},AO=function(e,n,a){return uT(e,n,0,1,a)},cT=function(e,n,a){return ho(a,function(s){return e[~~n(s)]})},CO=function o(e,n,a){var s=n-e;return Oi(e)?cT(e,o(0,e.length),n):ho(a,function(c){return(s+(c-e)%s)%s+e})},RO=function o(e,n,a){var s=n-e,c=s*2;return Oi(e)?cT(e,o(0,e.length-1),n):ho(a,function(u){return u=(c+(u-e)%c)%c||0,e+(u>s?c-u:u)})},Sf=function(e){return e.replace(oO,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(lO);return lT(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},uT=function(e,n,a,s,c){var u=n-e,d=s-a;return ho(c,function(p){return a+((p-e)/u*d||0)})},wO=function o(e,n,a,s){var c=isNaN(e+n)?0:function(x){return(1-x)*e+x*n};if(!c){var u=hi(e),d={},p,m,_,g,v;if(a===!0&&(s=1)&&(a=null),u)e={p:e},n={p:n};else if(Oi(e)&&!Oi(n)){for(_=[],g=e.length,v=g-2,m=1;m<g;m++)_.push(o(e[m-1],e[m]));g--,c=function(E){E*=g;var b=Math.min(v,~~E);return _[b](E-b)},a=n}else s||(e=Uc(Oi(e)?[]:{},e));if(!_){for(p in n)Lv.call(d,e,p,"get",n[p]);c=function(E){return Iv(E,d)||(u?e.p:e)}}}return ho(a,c)},yE=function(e,n,a){var s=e.labels,c=Za,u,d,p;for(u in s)d=s[u]-n,d<0==!!a&&d&&c>(d=Math.abs(d))&&(p=u,c=d);return p},Aa=function(e,n,a){var s=e.vars,c=s[n],u=Rn,d=e._ctx,p,m,_;if(c)return p=s[n+"Params"],m=s.callbackScope||e,a&&ro.length&&tp(),d&&(Rn=d),_=p?c.apply(m,p):c.call(m),Rn=u,_},Xu=function(e){return lo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ei),e.progress()<1&&Aa(e,"onInterrupt"),e},vc,fT=[],dT=function(e){if(e)if(e=!e.name&&e.default||e,Tv()||e.headless){var n=e.name,a=Gn(e),s=n&&!a&&e.init?function(){this._props=[]}:e,c={init:xf,render:Iv,add:Lv,kill:YO,modifier:WO,rawVars:0},u={targetTest:0,get:0,getSetter:Pv,aliases:{},register:0};if(Ic(),e!==s){if(Ma[n])return;Na(s,Na(np(e,c),u)),Uc(s.prototype,Uc(c,np(e,u))),Ma[s.prop=n]=s,e.targetTest&&(Hh.push(s),Rv[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Zb(n,s),e.register&&e.register(oa,s,ra)}else fT.push(e)},vn=255,Wu={aqua:[0,vn,vn],lime:[0,vn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vn],navy:[0,0,128],white:[vn,vn,vn],olive:[128,128,0],yellow:[vn,vn,0],orange:[vn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vn,0,0],pink:[vn,192,203],cyan:[0,vn,vn],transparent:[vn,vn,vn,0]},P_=function(e,n,a){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(a-n)*e*6:e<.5?a:e*3<2?n+(a-n)*(2/3-e)*6:n)*vn+.5|0},hT=function(e,n,a){var s=e?gs(e)?[e>>16,e>>8&vn,e&vn]:0:Wu.black,c,u,d,p,m,_,g,v,x,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wu[e])s=Wu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(c=e.charAt(1),u=e.charAt(2),d=e.charAt(3),e="#"+c+c+u+u+d+d+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&vn,s&vn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&vn,e&vn]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(_E),!n)p=+s[0]%360/360,m=+s[1]/100,_=+s[2]/100,u=_<=.5?_*(m+1):_+m-_*m,c=_*2-u,s.length>3&&(s[3]*=1),s[0]=P_(p+1/3,c,u),s[1]=P_(p,c,u),s[2]=P_(p-1/3,c,u);else if(~e.indexOf("="))return s=e.match(Xb),a&&s.length<4&&(s[3]=1),s}else s=e.match(_E)||Wu.transparent;s=s.map(Number)}return n&&!E&&(c=s[0]/vn,u=s[1]/vn,d=s[2]/vn,g=Math.max(c,u,d),v=Math.min(c,u,d),_=(g+v)/2,g===v?p=m=0:(x=g-v,m=_>.5?x/(2-g-v):x/(g+v),p=g===c?(u-d)/x+(u<d?6:0):g===u?(d-c)/x+2:(c-u)/x+4,p*=60),s[0]=~~(p+.5),s[1]=~~(m*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},pT=function(e){var n=[],a=[],s=-1;return e.split(so).forEach(function(c){var u=c.match(gc)||[];n.push.apply(n,u),a.push(s+=u.length+1)}),n.c=a,n},ME=function(e,n,a){var s="",c=(e+s).match(so),u=n?"hsla(":"rgba(",d=0,p,m,_,g;if(!c)return e;if(c=c.map(function(v){return(v=hT(v,n,1))&&u+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=pT(e),p=a.c,p.join(s)!==_.c.join(s)))for(m=e.replace(so,"1").split(gc),g=m.length-1;d<g;d++)s+=m[d]+(~p.indexOf(d)?c.shift()||u+"0,0,0,0)":(_.length?_:c.length?c:a).shift());if(!m)for(m=e.split(so),g=m.length-1;d<g;d++)s+=m[d]+c[d];return s+m[g]},so=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wu)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),DO=/hsl[a]?\(/,mT=function(e){var n=e.join(" "),a;if(so.lastIndex=0,so.test(n))return a=DO.test(n),e[1]=ME(e[1],a),e[0]=ME(e[0],a,pT(e[1])),!0},yf,ba=(function(){var o=Date.now,e=500,n=33,a=o(),s=a,c=1e3/240,u=c,d=[],p,m,_,g,v,x,E=function b(S){var y=o()-s,L=S===!0,z,C,R,O;if((y>e||y<0)&&(a+=y-n),s+=y,R=s-a,z=R-u,(z>0||L)&&(O=++g.frame,v=R-g.time*1e3,g.time=R=R/1e3,u+=z+(z>=c?4:c-z),C=1),L||(p=m(b)),C)for(x=0;x<d.length;x++)d[x](R,v,O,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Yb&&(!Bg&&Tv()&&(wr=Bg=window,Av=wr.document||{},Da.gsap=oa,(wr.gsapVersions||(wr.gsapVersions=[])).push(oa.version),qb(ep||wr.GreenSockGlobals||!wr.gsap&&wr||{}),fT.forEach(dT)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),m=_||function(S){return setTimeout(S,u-g.time*1e3+1|0)},yf=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),yf=0,m=xf},lagSmoothing:function(S,y){e=S||1/0,n=Math.min(y||33,e)},fps:function(S){c=1e3/(S||240),u=g.time*1e3+c},add:function(S,y,L){var z=y?function(C,R,O,w){S(C,R,O,w),g.remove(z)}:S;return g.remove(S),d[L?"unshift":"push"](z),Ic(),z},remove:function(S,y){~(y=d.indexOf(S))&&d.splice(y,1)&&x>=y&&x--},_listeners:d},g})(),Ic=function(){return!yf&&ba.wake()},jt={},NO=/^[\d.\-M][\d.\-,\s]/,LO=/["']/g,UO=function(e){for(var n={},a=e.substr(1,e.length-3).split(":"),s=a[0],c=1,u=a.length,d,p,m;c<u;c++)p=a[c],d=c!==u-1?p.lastIndexOf(","):p.length,m=p.substr(0,d),n[s]=isNaN(m)?m.replace(LO,"").trim():+m,s=p.substr(d+1).trim();return n},OO=function(e){var n=e.indexOf("(")+1,a=e.indexOf(")"),s=e.indexOf("(",n);return e.substring(n,~s&&s<a?e.indexOf(")",a+1):a)},PO=function(e){var n=(e+"").split("("),a=jt[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[UO(n[1])]:OO(e).split(",").map(Jb)):jt._CE&&NO.test(e)?jt._CE("",e):a},IO=function(e){return function(n){return 1-e(1-n)}},Ko=function(e,n){return e&&(Gn(e)?e:jt[e]||PO(e))||n},cl=function(e,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var c={easeIn:n,easeOut:a,easeInOut:s},u;return aa(e,function(d){jt[d]=Da[d]=c,jt[u=d.toLowerCase()]=a;for(var p in c)jt[u+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=jt[d+"."+p]=c[p]}),c},_T=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},I_=function o(e,n,a){var s=n>=1?n:1,c=(a||(e?.3:.45))/(n<1?n:1),u=c/Fg*(Math.asin(1/s)||0),d=function(_){return _===1?1:s*Math.pow(2,-10*_)*sO((_-u)*c)+1},p=e==="out"?d:e==="in"?function(m){return 1-d(1-m)}:_T(d);return c=Fg/c,p.config=function(m,_){return o(e,m,_)},p},z_=function o(e,n){n===void 0&&(n=1.70158);var a=function(u){return u?--u*u*((n+1)*u+n)+1:0},s=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:_T(a);return s.config=function(c){return o(e,c)},s};aa("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var n=e<5?e+1:e;cl(o+",Power"+(n-1),e?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});jt.Linear.easeNone=jt.none=jt.Linear.easeIn;cl("Elastic",I_("in"),I_("out"),I_());(function(o,e){var n=1/e,a=2*n,s=2.5*n,c=function(d){return d<n?o*d*d:d<a?o*Math.pow(d-1.5/e,2)+.75:d<s?o*(d-=2.25/e)*d+.9375:o*Math.pow(d-2.625/e,2)+.984375};cl("Bounce",function(u){return 1-c(1-u)},c)})(7.5625,2.75);cl("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});cl("Circ",function(o){return-(Vb(1-o*o)-1)});cl("Sine",function(o){return o===1?1:-rO(o*iO)+1});cl("Back",z_("in"),z_("out"),z_());jt.SteppedEase=jt.steps=Da.SteppedEase={config:function(e,n){e===void 0&&(e=1);var a=1/e,s=e+(n?0:1),c=n?1:0,u=1-xn;return function(d){return((s*Df(0,u,d)|0)+c)*a}}};gf.ease=jt["quad.out"];aa("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return wv+=o+","+o+"Params,"});var gT=function(e,n){this.id=aO++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Kb,this.set=n?n.getSetter:Pv},Mf=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Pc(this,+n.duration,1,1),this.data=n.data,Rn&&(this._ctx=Rn,Rn.data.push(this)),yf||ba.wake()}var e=o.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,Pc(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,s){if(Ic(),!arguments.length)return this._tTime;var c=this._dp;if(c&&c.smoothChildTiming&&this._ts){for(xp(this,a),!c._dp||c.parent||tT(c,this);c&&c.parent;)c.parent._time!==c._start+(c._ts>=0?c._tTime/c._ts:(c.totalDuration()-c._tTime)/-c._ts)&&c.totalTime(c._tTime,!0),c=c.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&Ur(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===xn||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Qb(this,a,s)),this},e.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+xE(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},e.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+xE(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,s){var c=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*c,s):this._repeat?Oc(this._tTime,c)+1:1},e.timeScale=function(a,s){if(!arguments.length)return this._rts===-xn?0:this._rts;if(this._rts===a)return this;var c=this.parent&&this._ts?ip(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-xn?0:this._rts,this.totalTime(Df(-Math.abs(this._delay),this.totalDuration(),c),s!==!1),vp(this),_O(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ic(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xn&&(this._tTime-=xn)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=Dn(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Ur(s,this,this._start-this._delay),this}return this._start},e.endTime=function(a){return this._start+(ia(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ip(s.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=dO);var s=Ei;return Ei=a,Nv(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Ei=s,this},e.globalTime=function(a){for(var s=this,c=arguments.length?a:s.rawTime();s;)c=s._start+c/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):c},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,SE(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,SE(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,s){return this.totalTime(Va(this,a),ia(s))},e.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ia(s)),this._dur||(this._zTime=-xn),this},e.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},e.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-xn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xn,this},e.isActive=function(){var a=this.parent||this._dp,s=this._start,c;return!!(!a||this._ts&&this._initted&&a.isActive()&&(c=a.rawTime(!0))>=s&&c<this.endTime(!0)-xn)},e.eventCallback=function(a,s,c){var u=this.vars;return arguments.length>1?(s?(u[a]=s,c&&(u[a+"Params"]=c),a==="onUpdate"&&(this._onUpdate=s)):delete u[a],this):u[a]},e.then=function(a){var s=this,c=s._prom;return new Promise(function(u){var d=Gn(a)?a:$b,p=function(){var _=s.then;s.then=null,c&&c(),Gn(d)&&(d=d(s))&&(d.then||d===s)&&(s.then=_),u(d),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},e.kill=function(){Xu(this)},o})();Na(Mf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xn,_prom:0,_ps:!1,_rts:1});var ta=(function(o){Gb(e,o);function e(a,s){var c;return a===void 0&&(a={}),c=o.call(this,a)||this,c.labels={},c.smoothChildTiming=!!a.smoothChildTiming,c.autoRemoveChildren=!!a.autoRemoveChildren,c._sort=ia(a.sortChildren),Nn&&Ur(a.parent||Nn,ls(c),s),a.reversed&&c.reverse(),a.paused&&c.paused(!0),a.scrollTrigger&&nT(ls(c),a.scrollTrigger),c}var n=e.prototype;return n.to=function(s,c,u){return $u(0,arguments,this),this},n.from=function(s,c,u){return $u(1,arguments,this),this},n.fromTo=function(s,c,u,d){return $u(2,arguments,this),this},n.set=function(s,c,u){return c.duration=0,c.parent=this,Ju(c).repeatDelay||(c.repeat=0),c.immediateRender=!!c.immediateRender,new $n(s,c,Va(this,u),1),this},n.call=function(s,c,u){return Ur(this,$n.delayedCall(0,s,c),u)},n.staggerTo=function(s,c,u,d,p,m,_){return u.duration=c,u.stagger=u.stagger||d,u.onComplete=m,u.onCompleteParams=_,u.parent=this,new $n(s,u,Va(this,p)),this},n.staggerFrom=function(s,c,u,d,p,m,_){return u.runBackwards=1,Ju(u).immediateRender=ia(u.immediateRender),this.staggerTo(s,c,u,d,p,m,_)},n.staggerFromTo=function(s,c,u,d,p,m,_,g){return d.startAt=u,Ju(d).immediateRender=ia(d.immediateRender),this.staggerTo(s,c,d,p,m,_,g)},n.render=function(s,c,u){var d=this._time,p=this._dirty?this.totalDuration():this._tDur,m=this._dur,_=s<=0?0:Dn(s),g=this._zTime<0!=s<0&&(this._initted||!m),v,x,E,b,S,y,L,z,C,R,O,w;if(this!==Nn&&_>p&&s>=0&&(_=p),_!==this._tTime||u||g){if(d!==this._time&&m&&(_+=this._time-d,s+=this._time-d),v=_,C=this._start,z=this._ts,y=!z,g&&(m||(d=this._zTime),(s||!c)&&(this._zTime=s)),this._repeat){if(O=this._yoyo,S=m+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,c,u);if(v=Dn(_%S),_===p?(b=this._repeat,v=m):(R=Dn(_/S),b=~~R,b&&b===R&&(v=m,b--),v>m&&(v=m)),R=Oc(this._tTime,S),!d&&this._tTime&&R!==b&&this._tTime-R*S-this._dur<=0&&(R=b),O&&b&1&&(v=m-v,w=1),b!==R&&!this._lock){var T=O&&R&1,D=T===(O&&b&1);if(b<R&&(T=!T),d=T?0:_%m?m:_,this._lock=1,this.render(d||(w?0:Dn(b*S)),c,!m)._lock=0,this._tTime=_,!c&&this.parent&&Aa(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,R=b),d&&d!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,p=this._tDur,D&&(this._lock=2,d=T?m:-1e-4,this.render(d,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=SO(this,Dn(d),Dn(v)),L&&(_-=v-(v=L._start))),this._tTime=_,this._time=v,this._act=!!z,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,d=0),!d&&_&&m&&!c&&!R&&(Aa(this,"onStart"),this._tTime!==_))return this;if(v>=d&&s>=0)for(x=this._first;x;){if(E=x._next,(x._act||v>=x._start)&&x._ts&&L!==x){if(x.parent!==this)return this.render(s,c,u);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,c,u),v!==this._time||!this._ts&&!y){L=0,E&&(_+=this._zTime=-xn);break}}x=E}else{x=this._last;for(var I=s<0?s:v;x;){if(E=x._prev,(x._act||I<=x._end)&&x._ts&&L!==x){if(x.parent!==this)return this.render(s,c,u);if(x.render(x._ts>0?(I-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(I-x._start)*x._ts,c,u||Ei&&Nv(x)),v!==this._time||!this._ts&&!y){L=0,E&&(_+=this._zTime=I?-xn:xn);break}}x=E}}if(L&&!c&&(this.pause(),L.render(v>=d?0:-xn)._zTime=v>=d?1:-1,this._ts))return this._start=C,vp(this),this.render(s,c,u);this._onUpdate&&!c&&Aa(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&d)&&(C===this._start||Math.abs(z)!==Math.abs(this._ts))&&(this._lock||((s||!m)&&(_===p&&this._ts>0||!_&&this._ts<0)&&lo(this,1),!c&&!(s<0&&!d)&&(_||d||!p)&&(Aa(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,c){var u=this;if(gs(c)||(c=Va(this,c,s)),!(s instanceof Mf)){if(Oi(s))return s.forEach(function(d){return u.add(d,c)}),this;if(hi(s))return this.addLabel(s,c);if(Gn(s))s=$n.delayedCall(0,s);else return this}return this!==s?Ur(this,s,c):this},n.getChildren=function(s,c,u,d){s===void 0&&(s=!0),c===void 0&&(c=!0),u===void 0&&(u=!0),d===void 0&&(d=-Za);for(var p=[],m=this._first;m;)m._start>=d&&(m instanceof $n?c&&p.push(m):(u&&p.push(m),s&&p.push.apply(p,m.getChildren(!0,c,u)))),m=m._next;return p},n.getById=function(s){for(var c=this.getChildren(1,1,1),u=c.length;u--;)if(c[u].vars.id===s)return c[u]},n.remove=function(s){return hi(s)?this.removeLabel(s):Gn(s)?this.killTweensOf(s):(s.parent===this&&gp(this,s),s===this._recent&&(this._recent=this._last),jo(this))},n.totalTime=function(s,c){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dn(ba.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,c),this._forcing=0,this):this._tTime},n.addLabel=function(s,c){return this.labels[s]=Va(this,c),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,c,u){var d=$n.delayedCall(0,c||xf,u);return d.data="isPause",this._hasPause=1,Ur(this,d,Va(this,s))},n.removePause=function(s){var c=this._first;for(s=Va(this,s);c;)c._start===s&&c.data==="isPause"&&lo(c),c=c._next},n.killTweensOf=function(s,c,u){for(var d=this.getTweensOf(s,u),p=d.length;p--;)eo!==d[p]&&d[p].kill(s,c);return this},n.getTweensOf=function(s,c){for(var u=[],d=ja(s),p=this._first,m=gs(c),_;p;)p instanceof $n?hO(p._targets,d)&&(m?(!eo||p._initted&&p._ts)&&p.globalTime(0)<=c&&p.globalTime(p.totalDuration())>c:!c||p.isActive())&&u.push(p):(_=p.getTweensOf(d,c)).length&&u.push.apply(u,_),p=p._next;return u},n.tweenTo=function(s,c){c=c||{};var u=this,d=Va(u,s),p=c,m=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,x,E=$n.to(u,Na({ease:c.ease||"none",lazy:!1,immediateRender:!1,time:d,overwrite:"auto",duration:c.duration||Math.abs((d-(m&&"time"in m?m.time:u._time))/u.timeScale())||xn,onStart:function(){if(u.pause(),!x){var S=c.duration||Math.abs((d-(m&&"time"in m?m.time:u._time))/u.timeScale());E._dur!==S&&Pc(E,S,0,1).render(E._time,!0,!0),x=1}_&&_.apply(E,g||[])}},c));return v?E.render(0):E},n.tweenFromTo=function(s,c,u){return this.tweenTo(c,Na({startAt:{time:Va(this,s)}},u))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),yE(this,Va(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),yE(this,Va(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+xn)},n.shiftChildren=function(s,c,u){u===void 0&&(u=0);var d=this._first,p=this.labels,m;for(s=Dn(s);d;)d._start>=u&&(d._start+=s,d._end+=s),d=d._next;if(c)for(m in p)p[m]>=u&&(p[m]+=s);return jo(this)},n.invalidate=function(s){var c=this._first;for(this._lock=0;c;)c.invalidate(s),c=c._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var c=this._first,u;c;)u=c._next,this.remove(c),c=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),jo(this)},n.totalDuration=function(s){var c=0,u=this,d=u._last,p=Za,m,_,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(g=u.parent;d;)m=d._prev,d._dirty&&d.totalDuration(),_=d._start,_>p&&u._sort&&d._ts&&!u._lock?(u._lock=1,Ur(u,d,_-d._delay,1)._lock=0):p=_,_<0&&d._ts&&(c-=_,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=Dn(_/u._ts),u._time-=_,u._tTime-=_),u.shiftChildren(-_,!1,-1/0),p=0),d._end>c&&d._ts&&(c=d._end),d=m;Pc(u,u===Nn&&u._time>c?u._time:c,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Nn._ts&&(Qb(Nn,ip(s,Nn)),jb=ba.frame),ba.frame>=gE){gE+=wa.autoSleep||120;var c=Nn._first;if((!c||!c._ts)&&wa.autoSleep&&ba._listeners.length<2){for(;c&&!c._ts;)c=c._next;c||ba.sleep()}}},e})(Mf);Na(ta.prototype,{_lock:0,_hasPause:0,_forcing:0});var zO=function(e,n,a,s,c,u,d){var p=new ra(this._pt,e,n,0,1,ET,null,c),m=0,_=0,g,v,x,E,b,S,y,L;for(p.b=a,p.e=s,a+="",s+="",(y=~s.indexOf("random("))&&(s=Sf(s)),u&&(L=[a,s],u(L,e,n),a=L[0],s=L[1]),v=a.match(U_)||[];g=U_.exec(s);)E=g[0],b=s.substring(m,g.index),x?x=(x+1)%5:b.substr(-5)==="rgba("&&(x=1),E!==v[_++]&&(S=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:b||_===1?b:",",s:S,c:E.charAt(1)==="="?Ec(S,E)-S:parseFloat(E)-S,m:x&&x<4?Math.round:0},m=U_.lastIndex);return p.c=m<s.length?s.substring(m,s.length):"",p.fp=d,(Wb.test(s)||y)&&(p.e=0),this._pt=p,p},Lv=function(e,n,a,s,c,u,d,p,m,_){Gn(s)&&(s=s(c||0,e,u));var g=e[n],v=a!=="get"?a:Gn(g)?m?e[n.indexOf("set")||!Gn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](m):e[n]():g,x=Gn(g)?m?VO:yT:Ov,E;if(hi(s)&&(~s.indexOf("random(")&&(s=Sf(s)),s.charAt(1)==="="&&(E=Ec(v,s)+(Di(v)||0),(E||E===0)&&(s=E))),!_||v!==s||Yg)return!isNaN(v*s)&&s!==""?(E=new ra(this._pt,e,n,+v||0,s-(v||0),typeof g=="boolean"?XO:MT,0,x),m&&(E.fp=m),d&&E.modifier(d,this,e),this._pt=E):(!g&&!(n in e)&&Cv(n,s),zO.call(this,e,n,v,s,x,p||wa.stringFilter,m))},FO=function(e,n,a,s,c){if(Gn(e)&&(e=ef(e,c,n,a,s)),!Vr(e)||e.style&&e.nodeType||Oi(e)||kb(e))return hi(e)?ef(e,c,n,a,s):e;var u={},d;for(d in e)u[d]=ef(e[d],c,n,a,s);return u},vT=function(e,n,a,s,c,u){var d,p,m,_;if(Ma[e]&&(d=new Ma[e]).init(c,d.rawVars?n[e]:FO(n[e],s,c,u,a),a,s,u)!==!1&&(a._pt=p=new ra(a._pt,c,e,0,1,d.render,d,0,d.priority),a!==vc))for(m=a._ptLookup[a._targets.indexOf(c)],_=d._props.length;_--;)m[d._props[_]]=p;return d},eo,Yg,Uv=function o(e,n,a){var s=e.vars,c=s.ease,u=s.startAt,d=s.immediateRender,p=s.lazy,m=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,x=s.autoRevert,E=e._dur,b=e._startAt,S=e._targets,y=e.parent,L=y&&y.data==="nested"?y.vars.targets:S,z=e._overwrite==="auto"&&!Ev,C=e.timeline,R=s.easeReverse||g,O,w,T,D,I,V,H,q,W,j,X,G,te;if(C&&(!v||!c)&&(c="none"),e._ease=Ko(c,gf.ease),e._rEase=R&&(Ko(R)||e._ease),e._from=!C&&!!s.runBackwards,e._from&&(e.ratio=1),!C||v&&!s.stagger){if(q=S[0]?Zo(S[0]).harness:0,G=q&&s[q.prop],O=np(s,Rv),b&&(b._zTime<0&&b.progress(1),n<0&&_&&d&&!x?b.render(-1,!0):b.revert(_&&E?Bh:fO),b._lazy=0),u){if(lo(e._startAt=$n.set(S,Na({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!b&&ia(p),startAt:null,delay:0,onUpdate:m&&function(){return Aa(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ei||!d&&!x)&&e._startAt.revert(Bh),d&&E&&n<=0&&a<=0){n&&(e._zTime=n);return}}else if(_&&E&&!b){if(n&&(d=!1),T=Na({overwrite:!1,data:"isFromStart",lazy:d&&!b&&ia(p),immediateRender:d,stagger:0,parent:y},O),G&&(T[q.prop]=G),lo(e._startAt=$n.set(S,T)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ei?e._startAt.revert(Bh):e._startAt.render(-1,!0)),e._zTime=n,!d)o(e._startAt,xn,xn);else if(!n)return}for(e._pt=e._ptCache=0,p=E&&ia(p)||p&&!E,w=0;w<S.length;w++){if(I=S[w],H=I._gsap||Dv(S)[w]._gsap,e._ptLookup[w]=j={},Hg[H.id]&&ro.length&&tp(),X=L===S?w:L.indexOf(I),q&&(W=new q).init(I,G||O,e,X,L)!==!1&&(e._pt=D=new ra(e._pt,I,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ne){j[ne]=D}),W.priority&&(V=1)),!q||G)for(T in O)Ma[T]&&(W=vT(T,O,e,X,I,L))?W.priority&&(V=1):j[T]=D=Lv.call(e,I,T,"get",O[T],X,L,0,s.stringFilter);e._op&&e._op[w]&&e.kill(I,e._op[w]),z&&e._pt&&(eo=e,Nn.killTweensOf(I,j,e.globalTime(n)),te=!e.parent,eo=0),e._pt&&p&&(Hg[H.id]=1)}V&&bT(e),e._onInit&&e._onInit(e)}e._onUpdate=m,e._initted=(!e._op||e._pt)&&!te,v&&n<=0&&C.render(Za,!0,!0)},BO=function(e,n,a,s,c,u,d,p){var m=(e._pt&&e._ptCache||(e._ptCache={}))[n],_,g,v,x;if(!m)for(m=e._ptCache[n]=[],v=e._ptLookup,x=e._targets.length;x--;){if(_=v[x][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Yg=1,e.vars[n]="+=0",Uv(e,d),Yg=0,p?vf(n+" not eligible for reset. Try splitting into individual properties"):1;m.push(_)}for(x=m.length;x--;)g=m[x],_=g._pt||g,_.s=(s||s===0)&&!c?s:_.s+(s||0)+u*_.c,_.c=a-_.s,g.e&&(g.e=Xn(a)+Di(g.e)),g.b&&(g.b=_.s+Di(g.b))},HO=function(e,n){var a=e[0]?Zo(e[0]).harness:0,s=a&&a.aliases,c,u,d,p;if(!s)return n;c=Uc({},n);for(u in s)if(u in c)for(p=s[u].split(","),d=p.length;d--;)c[p[d]]=c[u];return c},GO=function(e,n,a,s){var c=n.ease||s||"power1.inOut",u,d;if(Oi(n))d=a[e]||(a[e]=[]),n.forEach(function(p,m){return d.push({t:m/(n.length-1)*100,v:p,e:c})});else for(u in n)d=a[u]||(a[u]=[]),u==="ease"||d.push({t:parseFloat(e),v:n[u],e:c})},ef=function(e,n,a,s,c){return Gn(e)?e.call(n,a,s,c):hi(e)&&~e.indexOf("random(")?Sf(e):e},xT=wv+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ST={};aa(xT+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return ST[o]=1});var $n=(function(o){Gb(e,o);function e(a,s,c,u){var d;typeof s=="number"&&(c.duration=s,s=c,c=null),d=o.call(this,u?s:Ju(s))||this;var p=d.vars,m=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,x=p.overwrite,E=p.keyframes,b=p.defaults,S=p.scrollTrigger,y=s.parent||Nn,L=(Oi(a)||kb(a)?gs(a[0]):"length"in s)?[a]:ja(a),z,C,R,O,w,T,D,I;if(d._targets=L.length?Dv(L):vf("GSAP target "+a+" not found. https://gsap.com",!wa.nullTargetWarn)||[],d._ptLookup=[],d._overwrite=x,E||v||Sh(m)||Sh(_)){s=d.vars;var V=s.easeReverse||s.yoyoEase;if(z=d.timeline=new ta({data:"nested",defaults:b||{},targets:y&&y.data==="nested"?y.vars.targets:L}),z.kill(),z.parent=z._dp=ls(d),z._start=0,v||Sh(m)||Sh(_)){if(O=L.length,D=v&&sT(v),Vr(v))for(w in v)~xT.indexOf(w)&&(I||(I={}),I[w]=v[w]);for(C=0;C<O;C++)R=np(s,ST),R.stagger=0,V&&(R.easeReverse=V),I&&Uc(R,I),T=L[C],R.duration=+ef(m,ls(d),C,T,L),R.delay=(+ef(_,ls(d),C,T,L)||0)-d._delay,!v&&O===1&&R.delay&&(d._delay=_=R.delay,d._start+=_,R.delay=0),z.to(T,R,D?D(C,T,L):0),z._ease=jt.none;z.duration()?m=_=0:d.timeline=0}else if(E){Ju(Na(z.vars.defaults,{ease:"none"})),z._ease=Ko(E.ease||s.ease||"none");var H=0,q,W,j;if(Oi(E))E.forEach(function(X){return z.to(L,X,">")}),z.duration();else{R={};for(w in E)w==="ease"||w==="easeEach"||GO(w,E[w],R,E.easeEach);for(w in R)for(q=R[w].sort(function(X,G){return X.t-G.t}),H=0,C=0;C<q.length;C++)W=q[C],j={ease:W.e,duration:(W.t-(C?q[C-1].t:0))/100*m},j[w]=W.v,z.to(L,j,H),H+=j.duration;z.duration()<m&&z.to({},{duration:m-z.duration()})}}m||d.duration(m=z.duration())}else d.timeline=0;return x===!0&&!Ev&&(eo=ls(d),Nn.killTweensOf(L),eo=0),Ur(y,ls(d),c),s.reversed&&d.reverse(),s.paused&&d.paused(!0),(g||!m&&!E&&d._start===Dn(y._time)&&ia(g)&&gO(ls(d))&&y.data!=="nested")&&(d._tTime=-xn,d.render(Math.max(0,-_)||0)),S&&nT(ls(d),S),d}var n=e.prototype;return n.render=function(s,c,u){var d=this._time,p=this._tDur,m=this._dur,_=s<0,g=s>p-xn&&!_?p:s<xn?0:s,v,x,E,b,S,y,L,z;if(!m)xO(this,s,c,u);else if(g!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,z=this.timeline,this._repeat){if(b=m+this._rDelay,this._repeat<-1&&_)return this.totalTime(b*100+s,c,u);if(v=Dn(g%b),g===p?(E=this._repeat,v=m):(S=Dn(g/b),E=~~S,E&&E===S?(v=m,E--):v>m&&(v=m)),y=this._yoyo&&E&1,y&&(v=m-v),S=Oc(this._tTime,b),v===d&&!u&&this._initted&&E===S)return this._tTime=g,this;E!==S&&this.vars.repeatRefresh&&!y&&!this._lock&&v!==b&&this._initted&&(this._lock=u=1,this.render(Dn(b*E),!0).invalidate()._lock=0)}if(!this._initted){if(iT(this,_?s:v,u,c,g))return this._tTime=0,this;if(d!==this._time&&!(u&&this.vars.repeatRefresh&&E!==S))return this;if(m!==this._dur)return this.render(s,c,u)}if(this._rEase){var C=v<d;if(C!==this._inv){var R=C?d:m-d;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=d,this._invRecip=R?(C?-1:1)/R:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=L=this._invRatio+this._invScale*this._invEase((v-this._invTime)*this._invRecip)}else this.ratio=L=this._ease(v/m);if(this._from&&(this.ratio=L=1-L),this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),!d&&g&&!c&&!S&&(Aa(this,"onStart"),this._tTime!==g))return this;for(x=this._pt;x;)x.r(L,x.d),x=x._next;z&&z.render(s<0?s:z._dur*z._ease(v/this._dur),c,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!c&&(_&&Gg(this,s,c,u),Aa(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!c&&this.parent&&Aa(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&Gg(this,s,!0,!0),(s||!m)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&lo(this,1),!c&&!(_&&!d)&&(g||d||y)&&(Aa(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,c,u,d,p){yf||ba.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Uv(this,m),_=this._ease(m/this._dur),BO(this,s,c,u,d,_,m,p)?this.resetTo(s,c,u,d,1):(xp(this,0),this.parent||eT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,c){if(c===void 0&&(c="all"),!s&&(!c||c==="all"))return this._lazy=this._pt=0,this.parent?Xu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ei),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,c,eo&&eo.vars.overwrite!==!0)._first||Xu(this),this.parent&&u!==this.timeline.totalDuration()&&Pc(this,this._dur*this.timeline._tDur/u,0,1),this}var d=this._targets,p=s?ja(s):d,m=this._ptLookup,_=this._pt,g,v,x,E,b,S,y;if((!c||c==="all")&&mO(d,p))return c==="all"&&(this._pt=0),Xu(this);for(g=this._op=this._op||[],c!=="all"&&(hi(c)&&(b={},aa(c,function(L){return b[L]=1}),c=b),c=HO(d,c)),y=d.length;y--;)if(~p.indexOf(d[y])){v=m[y],c==="all"?(g[y]=c,E=v,x={}):(x=g[y]=g[y]||{},E=c);for(b in E)S=v&&v[b],S&&((!("kill"in S.d)||S.d.kill(b)===!0)&&gp(this,S,"_pt"),delete v[b]),x!=="all"&&(x[b]=1)}return this._initted&&!this._pt&&_&&Xu(this),this},e.to=function(s,c){return new e(s,c,arguments[2])},e.from=function(s,c){return $u(1,arguments)},e.delayedCall=function(s,c,u,d){return new e(c,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:c,onReverseComplete:c,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:d})},e.fromTo=function(s,c,u){return $u(2,arguments)},e.set=function(s,c){return c.duration=0,c.repeatDelay||(c.repeat=0),new e(s,c)},e.killTweensOf=function(s,c,u){return Nn.killTweensOf(s,c,u)},e})(Mf);Na($n.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});aa("staggerTo,staggerFrom,staggerFromTo",function(o){$n[o]=function(){var e=new ta,n=kg.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,n)}});var Ov=function(e,n,a){return e[n]=a},yT=function(e,n,a){return e[n](a)},VO=function(e,n,a,s){return e[n](s.fp,a)},kO=function(e,n,a){return e.setAttribute(n,a)},Pv=function(e,n){return Gn(e[n])?yT:bv(e[n])&&e.setAttribute?kO:Ov},MT=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},XO=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},ET=function(e,n){var a=n._pt,s="";if(!e&&n.b)s=n.b;else if(e===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Iv=function(e,n){for(var a=n._pt;a;)a.r(e,a.d),a=a._next},WO=function(e,n,a,s){for(var c=this._pt,u;c;)u=c._next,c.p===s&&c.modifier(e,n,a),c=u},YO=function(e){for(var n=this._pt,a,s;n;)s=n._next,n.p===e&&!n.op||n.op===e?gp(this,n,"_pt"):n.dep||(a=1),n=s;return!a},qO=function(e,n,a,s){s.mSet(e,n,s.m.call(s.tween,a,s.mt),s)},bT=function(e){for(var n=e._pt,a,s,c,u;n;){for(a=n._next,s=c;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:u)?n._prev._next=n:c=n,(n._next=s)?s._prev=n:u=n,n=a}e._pt=c},ra=(function(){function o(n,a,s,c,u,d,p,m,_){this.t=a,this.s=c,this.c=u,this.p=s,this.r=d||MT,this.d=p||this,this.set=m||Ov,this.pr=_||0,this._next=n,n&&(n._prev=this)}var e=o.prototype;return e.modifier=function(a,s,c){this.mSet=this.mSet||this.set,this.set=qO,this.m=a,this.mt=c,this.tween=s},o})();aa(wv+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return Rv[o]=1});Da.TweenMax=Da.TweenLite=$n;Da.TimelineLite=Da.TimelineMax=ta;Nn=new ta({sortChildren:!1,defaults:gf,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wa.stringFilter=mT;var Qo=[],Gh={},ZO=[],EE=0,jO=0,F_=function(e){return(Gh[e]||ZO).map(function(n){return n()})},qg=function(){var e=Date.now(),n=[];e-EE>2&&(F_("matchMediaInit"),Qo.forEach(function(a){var s=a.queries,c=a.conditions,u,d,p,m;for(d in s)u=wr.matchMedia(s[d]).matches,u&&(p=1),u!==c[d]&&(c[d]=u,m=1);m&&(a.revert(),p&&n.push(a))}),F_("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),EE=e,F_("matchMedia"))},TT=(function(){function o(n,a){this.selector=a&&Xg(a),this.data=[],this._r=[],this.isReverted=!1,this.id=jO++,n&&this.add(n)}var e=o.prototype;return e.add=function(a,s,c){Gn(a)&&(c=s,s=a,a=Gn);var u=this,d=function(){var m=Rn,_=u.selector,g;return m&&m!==u&&m.data.push(u),c&&(u.selector=Xg(c)),Rn=u,g=s.apply(u,arguments),Gn(g)&&u._r.push(g),Rn=m,u.selector=_,u.isReverted=!1,g};return u.last=d,a===Gn?d(u,function(p){return u.add(null,p)}):a?u[a]=d:d},e.ignore=function(a){var s=Rn;Rn=null,a(this),Rn=s},e.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof $n&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,s){var c=this;if(a?(function(){for(var d=c.getTweens(),p=c.data.length,m;p--;)m=c.data[p],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(_){return d.splice(d.indexOf(_),1)}));for(d.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=c.data.length;p--;)m=c.data[p],m instanceof ta?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof $n)&&m.revert&&m.revert(a);c._r.forEach(function(_){return _(a,c)}),c.isReverted=!0})():this.data.forEach(function(d){return d.kill&&d.kill()}),this.clear(),s)for(var u=Qo.length;u--;)Qo[u].id===this.id&&Qo.splice(u,1)},e.revert=function(a){this.kill(a||{})},o})(),KO=(function(){function o(n){this.contexts=[],this.scope=n,Rn&&Rn.data.push(this)}var e=o.prototype;return e.add=function(a,s,c){Vr(a)||(a={matches:a});var u=new TT(0,c||this.scope),d=u.conditions={},p,m,_;Rn&&!u.selector&&(u.selector=Rn.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=a;for(m in a)m==="all"?_=1:(p=wr.matchMedia(a[m]),p&&(Qo.indexOf(u)<0&&Qo.push(u),(d[m]=p.matches)&&(_=1),p.addListener?p.addListener(qg):p.addEventListener("change",qg)));return _&&s(u,function(g){return u.add(null,g)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),ap={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];n.forEach(function(s){return dT(s)})},timeline:function(e){return new ta(e)},getTweensOf:function(e,n){return Nn.getTweensOf(e,n)},getProperty:function(e,n,a,s){hi(e)&&(e=ja(e)[0]);var c=Zo(e||{}).get,u=a?$b:Jb;return a==="native"&&(a=""),e&&(n?u((Ma[n]&&Ma[n].get||c)(e,n,a,s)):function(d,p,m){return u((Ma[d]&&Ma[d].get||c)(e,d,p,m))})},quickSetter:function(e,n,a){if(e=ja(e),e.length>1){var s=e.map(function(_){return oa.quickSetter(_,n,a)}),c=s.length;return function(_){for(var g=c;g--;)s[g](_)}}e=e[0]||{};var u=Ma[n],d=Zo(e),p=d.harness&&(d.harness.aliases||{})[n]||n,m=u?function(_){var g=new u;vc._pt=0,g.init(e,a?_+a:_,vc,0,[e]),g.render(1,g),vc._pt&&Iv(1,vc)}:d.set(e,p);return u?m:function(_){return m(e,p,a?_+a:_,d,1)}},quickTo:function(e,n,a){var s,c=oa.to(e,Na((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),u=function(p,m,_){return c.resetTo(n,p,m,_)};return u.tween=c,u},isTweening:function(e){return Nn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ko(e.ease,gf.ease)),vE(gf,e||{})},config:function(e){return vE(wa,e||{})},registerEffect:function(e){var n=e.name,a=e.effect,s=e.plugins,c=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(d){return d&&!Ma[d]&&!Da[d]&&vf(n+" effect requires "+d+" plugin.")}),O_[n]=function(d,p,m){return a(ja(d),Na(p||{},c),m)},u&&(ta.prototype[n]=function(d,p,m){return this.add(O_[n](d,Vr(p)?p:(m=p)&&{},this),m)})},registerEase:function(e,n){jt[e]=Ko(n)},parseEase:function(e,n){return arguments.length?Ko(e,n):jt},getById:function(e){return Nn.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var a=new ta(e),s,c;for(a.smoothChildTiming=ia(e.smoothChildTiming),Nn.remove(a),a._dp=0,a._time=a._tTime=Nn._time,s=Nn._first;s;)c=s._next,(n||!(!s._dur&&s instanceof $n&&s.vars.onComplete===s._targets[0]))&&Ur(a,s,s._start-s._delay),s=c;return Ur(Nn,a,0),a},context:function(e,n){return e?new TT(e,n):Rn},matchMedia:function(e){return new KO(e)},matchMediaRefresh:function(){return Qo.forEach(function(e){var n=e.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&e.revert()})||qg()},addEventListener:function(e,n){var a=Gh[e]||(Gh[e]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(e,n){var a=Gh[e],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:CO,wrapYoyo:RO,distribute:sT,random:lT,snap:oT,normalize:AO,getUnit:Di,clamp:MO,splitColor:hT,toArray:ja,selector:Xg,mapRange:uT,pipe:bO,unitize:TO,interpolate:wO,shuffle:rT},install:qb,effects:O_,ticker:ba,updateRoot:ta.updateRoot,plugins:Ma,globalTimeline:Nn,core:{PropTween:ra,globals:Zb,Tween:$n,Timeline:ta,Animation:Mf,getCache:Zo,_removeLinkedListItem:gp,reverting:function(){return Ei},context:function(e){return e&&Rn&&(Rn.data.push(e),e._ctx=Rn),Rn},suppressOverwrites:function(e){return Ev=e}}};aa("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ap[o]=$n[o]});ba.add(ta.updateRoot);vc=ap.to({},{duration:0});var QO=function(e,n){for(var a=e._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},JO=function(e,n){var a=e._targets,s,c,u;for(s in n)for(c=a.length;c--;)u=e._ptLookup[c][s],u&&(u=u.d)&&(u._pt&&(u=QO(u,s)),u&&u.modifier&&u.modifier(n[s],e,a[c],s))},B_=function(e,n){return{name:e,headless:1,rawVars:1,init:function(s,c,u){u._onInit=function(d){var p,m;if(hi(c)&&(p={},aa(c,function(_){return p[_]=1}),c=p),n){p={};for(m in c)p[m]=n(c[m]);c=p}JO(d,c)}}}},oa=ap.registerPlugin({name:"attr",init:function(e,n,a,s,c){var u,d,p;this.tween=a;for(u in n)p=e.getAttribute(u)||"",d=this.add(e,"setAttribute",(p||0)+"",n[u],s,c,0,0,u),d.op=u,d.b=p,this._props.push(u)},render:function(e,n){for(var a=n._pt;a;)Ei?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,n){for(var a=n.length;a--;)this.add(e,a,e[a]||0,n[a],0,0,0,0,0,1)}},B_("roundProps",Wg),B_("modifiers"),B_("snap",oT))||ap;$n.version=ta.version=oa.version="3.15.0";Yb=1;Tv()&&Ic();jt.Power0;jt.Power1;jt.Power2;jt.Power3;jt.Power4;jt.Linear;jt.Quad;jt.Cubic;jt.Quart;jt.Quint;jt.Strong;jt.Elastic;jt.Back;jt.SteppedEase;jt.Bounce;jt.Sine;jt.Expo;jt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bE,to,bc,zv,Yo,TE,Fv,$O=function(){return typeof window<"u"},vs={},Go=180/Math.PI,Tc=Math.PI/180,cc=Math.atan2,AE=1e8,Bv=/([A-Z])/g,eP=/(left|right|width|margin|padding|x)/i,tP=/[\s,\(]\S/,Ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zg=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},nP=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},iP=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},aP=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},rP=function(e,n){var a=n.s+n.c*e;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},AT=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},CT=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},sP=function(e,n,a){return e.style[n]=a},oP=function(e,n,a){return e.style.setProperty(n,a)},lP=function(e,n,a){return e._gsap[n]=a},cP=function(e,n,a){return e._gsap.scaleX=e._gsap.scaleY=a},uP=function(e,n,a,s,c){var u=e._gsap;u.scaleX=u.scaleY=a,u.renderTransform(c,u)},fP=function(e,n,a,s,c){var u=e._gsap;u[n]=a,u.renderTransform(c,u)},Ln="transform",sa=Ln+"Origin",dP=function o(e,n){var a=this,s=this.target,c=s.style,u=s._gsap;if(e in vs&&c){if(this.tfm=this.tfm||{},e!=="transform")e=Ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(d){return a.tfm[d]=cs(s,d)}):this.tfm[e]=u.x?u[e]:cs(s,e),e===sa&&(this.tfm.zOrigin=u.zOrigin);else return Ir.transform.split(",").forEach(function(d){return o.call(a,d,n)});if(this.props.indexOf(Ln)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(sa,n,"")),e=Ln}(c||n)&&this.props.push(e,n,c[e])},RT=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hP=function(){var e=this.props,n=this.target,a=n.style,s=n._gsap,c,u;for(c=0;c<e.length;c+=3)e[c+1]?e[c+1]===2?n[e[c]](e[c+2]):n[e[c]]=e[c+2]:e[c+2]?a[e[c]]=e[c+2]:a.removeProperty(e[c].substr(0,2)==="--"?e[c]:e[c].replace(Bv,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),c=Fv(),(!c||!c.isStart)&&!a[Ln]&&(RT(a),s.zOrigin&&a[sa]&&(a[sa]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},wT=function(e,n){var a={target:e,props:[],revert:hP,save:dP};return e._gsap||oa.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},DT,jg=function(e,n){var a=to.createElementNS?to.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):to.createElement(e);return a&&a.style?a:to.createElement(e)},Ca=function o(e,n,a){var s=getComputedStyle(e);return s[n]||s.getPropertyValue(n.replace(Bv,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(e,zc(n)||n,1)||""},CE="O,Moz,ms,Ms,Webkit".split(","),zc=function(e,n,a){var s=n||Yo,c=s.style,u=5;if(e in c&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(CE[u]+e in c););return u<0?null:(u===3?"ms":u>=0?CE[u]:"")+e},Kg=function(){$O()&&window.document&&(bE=window,to=bE.document,bc=to.documentElement,Yo=jg("div")||{style:{}},jg("div"),Ln=zc(Ln),sa=Ln+"Origin",Yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",DT=!!zc("perspective"),Fv=oa.core.reverting,zv=1)},RE=function(e){var n=e.ownerSVGElement,a=jg("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),c;s.style.display="block",a.appendChild(s),bc.appendChild(a);try{c=s.getBBox()}catch{}return a.removeChild(s),bc.removeChild(a),c},wE=function(e,n){for(var a=n.length;a--;)if(e.hasAttribute(n[a]))return e.getAttribute(n[a])},NT=function(e){var n,a;try{n=e.getBBox()}catch{n=RE(e),a=1}return n&&(n.width||n.height)||a||(n=RE(e)),n&&!n.width&&!n.x&&!n.y?{x:+wE(e,["x","cx","x1"])||0,y:+wE(e,["y","cy","y1"])||0,width:0,height:0}:n},LT=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&NT(e))},co=function(e,n){if(n){var a=e.style,s;n in vs&&n!==sa&&(n=Ln),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(Bv,"-$1").toLowerCase())):a.removeAttribute(n)}},no=function(e,n,a,s,c,u){var d=new ra(e._pt,n,a,0,1,u?CT:AT);return e._pt=d,d.b=s,d.e=c,e._props.push(a),d},DE={deg:1,rad:1,turn:1},pP={grid:1,flex:1},uo=function o(e,n,a,s){var c=parseFloat(a)||0,u=(a+"").trim().substr((c+"").length)||"px",d=Yo.style,p=eP.test(n),m=e.tagName.toLowerCase()==="svg",_=(m?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",x=s==="%",E,b,S,y;if(s===u||!c||DE[s]||DE[u])return c;if(u!=="px"&&!v&&(c=o(e,n,a,"px")),y=e.getCTM&&LT(e),(x||u==="%")&&(vs[n]||~n.indexOf("adius")))return E=y?e.getBBox()[p?"width":"height"]:e[_],Xn(x?c/E*g:c/100*E);if(d[p?"width":"height"]=g+(v?u:s),b=s!=="rem"&&~n.indexOf("adius")||s==="em"&&e.appendChild&&!m?e:e.parentNode,y&&(b=(e.ownerSVGElement||{}).parentNode),(!b||b===to||!b.appendChild)&&(b=to.body),S=b._gsap,S&&x&&S.width&&p&&S.time===ba.time&&!S.uncache)return Xn(c/S.width*g);if(x&&(n==="height"||n==="width")){var L=e.style[n];e.style[n]=g+s,E=e[_],L?e.style[n]=L:co(e,n)}else(x||u==="%")&&!pP[Ca(b,"display")]&&(d.position=Ca(e,"position")),b===e&&(d.position="static"),b.appendChild(Yo),E=Yo[_],b.removeChild(Yo),d.position="absolute";return p&&x&&(S=Zo(b),S.time=ba.time,S.width=b[_]),Xn(v?E*c/g:E&&c?g/E*c:0)},cs=function(e,n,a,s){var c;return zv||Kg(),n in Ir&&n!=="transform"&&(n=Ir[n],~n.indexOf(",")&&(n=n.split(",")[0])),vs[n]&&n!=="transform"?(c=bf(e,s),c=n!=="transformOrigin"?c[n]:c.svg?c.origin:sp(Ca(e,sa))+" "+c.zOrigin+"px"):(c=e.style[n],(!c||c==="auto"||s||~(c+"").indexOf("calc("))&&(c=rp[n]&&rp[n](e,n,a)||Ca(e,n)||Kb(e,n)||(n==="opacity"?1:0))),a&&!~(c+"").trim().indexOf(" ")?uo(e,n,c,a)+a:c},mP=function(e,n,a,s){if(!a||a==="none"){var c=zc(n,e,1),u=c&&Ca(e,c,1);u&&u!==a?(n=c,a=u):n==="borderColor"&&(a=Ca(e,"borderTopColor"))}var d=new ra(this._pt,e.style,n,0,1,ET),p=0,m=0,_,g,v,x,E,b,S,y,L,z,C,R;if(d.b=a,d.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ca(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(b=e.style[n],e.style[n]=s,s=Ca(e,n)||s,b?e.style[n]=b:co(e,n)),_=[a,s],mT(_),a=_[0],s=_[1],v=a.match(gc)||[],R=s.match(gc)||[],R.length){for(;g=gc.exec(s);)S=g[0],L=s.substring(p,g.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),S!==(b=v[m++]||"")&&(x=parseFloat(b)||0,C=b.substr((x+"").length),S.charAt(1)==="="&&(S=Ec(x,S)+C),y=parseFloat(S),z=S.substr((y+"").length),p=gc.lastIndex-z.length,z||(z=z||wa.units[n]||C,p===s.length&&(s+=z,d.e+=z)),C!==z&&(x=uo(e,n,b,z)||0),d._pt={_next:d._pt,p:L||m===1?L:",",s:x,c:y-x,m:E&&E<4||n==="zIndex"?Math.round:0});d.c=p<s.length?s.substring(p,s.length):""}else d.r=n==="display"&&s==="none"?CT:AT;return Wb.test(s)&&(d.e=0),this._pt=d,d},NE={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_P=function(e){var n=e.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(e=a,a=s,s=e),n[0]=NE[a]||a,n[1]=NE[s]||s,n.join(" ")},gP=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,c=n.u,u=a._gsap,d,p,m;if(c==="all"||c===!0)s.cssText="",p=1;else for(c=c.split(","),m=c.length;--m>-1;)d=c[m],vs[d]&&(p=1,d=d==="transformOrigin"?sa:Ln),co(a,d);p&&(co(a,Ln),u&&(u.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",bf(a,1),u.uncache=1,RT(s)))}},rp={clearProps:function(e,n,a,s,c){if(c.data!=="isFromStart"){var u=e._pt=new ra(e._pt,n,a,0,0,gP);return u.u=s,u.pr=-10,u.tween=c,e._props.push(a),1}}},Ef=[1,0,0,1,0,0],UT={},OT=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},LE=function(e){var n=Ca(e,Ln);return OT(n)?Ef:n.substr(7).match(Xb).map(Xn)},Hv=function(e,n){var a=e._gsap||Zo(e),s=e.style,c=LE(e),u,d,p,m;return a.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,c=[p.a,p.b,p.c,p.d,p.e,p.f],c.join(",")==="1,0,0,1,0,0"?Ef:c):(c===Ef&&!e.offsetParent&&e!==bc&&!a.svg&&(p=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(m=1,d=e.nextElementSibling,bc.appendChild(e)),c=LE(e),p?s.display=p:co(e,"display"),m&&(d?u.insertBefore(e,d):u?u.appendChild(e):bc.removeChild(e))),n&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Qg=function(e,n,a,s,c,u){var d=e._gsap,p=c||Hv(e,!0),m=d.xOrigin||0,_=d.yOrigin||0,g=d.xOffset||0,v=d.yOffset||0,x=p[0],E=p[1],b=p[2],S=p[3],y=p[4],L=p[5],z=n.split(" "),C=parseFloat(z[0])||0,R=parseFloat(z[1])||0,O,w,T,D;a?p!==Ef&&(w=x*S-E*b)&&(T=C*(S/w)+R*(-b/w)+(b*L-S*y)/w,D=C*(-E/w)+R*(x/w)-(x*L-E*y)/w,C=T,R=D):(O=NT(e),C=O.x+(~z[0].indexOf("%")?C/100*O.width:C),R=O.y+(~(z[1]||z[0]).indexOf("%")?R/100*O.height:R)),s||s!==!1&&d.smooth?(y=C-m,L=R-_,d.xOffset=g+(y*x+L*b)-y,d.yOffset=v+(y*E+L*S)-L):d.xOffset=d.yOffset=0,d.xOrigin=C,d.yOrigin=R,d.smooth=!!s,d.origin=n,d.originIsAbsolute=!!a,e.style[sa]="0px 0px",u&&(no(u,d,"xOrigin",m,C),no(u,d,"yOrigin",_,R),no(u,d,"xOffset",g,d.xOffset),no(u,d,"yOffset",v,d.yOffset)),e.setAttribute("data-svg-origin",C+" "+R)},bf=function(e,n){var a=e._gsap||new gT(e);if("x"in a&&!n&&!a.uncache)return a;var s=e.style,c=a.scaleX<0,u="px",d="deg",p=getComputedStyle(e),m=Ca(e,sa)||"0",_,g,v,x,E,b,S,y,L,z,C,R,O,w,T,D,I,V,H,q,W,j,X,G,te,ne,P,me,Fe,Le,k,le;return _=g=v=b=S=y=L=z=C=0,x=E=1,a.svg=!!(e.getCTM&&LT(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[Ln]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[Ln]!=="none"?p[Ln]:"")),s.scale=s.rotate=s.translate="none"),w=Hv(e,a.svg),a.svg&&(a.uncache?(te=e.getBBox(),m=a.xOrigin-te.x+"px "+(a.yOrigin-te.y)+"px",G=""):G=!n&&e.getAttribute("data-svg-origin"),Qg(e,G||m,!!G||a.originIsAbsolute,a.smooth!==!1,w)),R=a.xOrigin||0,O=a.yOrigin||0,w!==Ef&&(V=w[0],H=w[1],q=w[2],W=w[3],_=j=w[4],g=X=w[5],w.length===6?(x=Math.sqrt(V*V+H*H),E=Math.sqrt(W*W+q*q),b=V||H?cc(H,V)*Go:0,L=q||W?cc(q,W)*Go+b:0,L&&(E*=Math.abs(Math.cos(L*Tc))),a.svg&&(_-=R-(R*V+O*q),g-=O-(R*H+O*W))):(le=w[6],Le=w[7],P=w[8],me=w[9],Fe=w[10],k=w[11],_=w[12],g=w[13],v=w[14],T=cc(le,Fe),S=T*Go,T&&(D=Math.cos(-T),I=Math.sin(-T),G=j*D+P*I,te=X*D+me*I,ne=le*D+Fe*I,P=j*-I+P*D,me=X*-I+me*D,Fe=le*-I+Fe*D,k=Le*-I+k*D,j=G,X=te,le=ne),T=cc(-q,Fe),y=T*Go,T&&(D=Math.cos(-T),I=Math.sin(-T),G=V*D-P*I,te=H*D-me*I,ne=q*D-Fe*I,k=W*I+k*D,V=G,H=te,q=ne),T=cc(H,V),b=T*Go,T&&(D=Math.cos(T),I=Math.sin(T),G=V*D+H*I,te=j*D+X*I,H=H*D-V*I,X=X*D-j*I,V=G,j=te),S&&Math.abs(S)+Math.abs(b)>359.9&&(S=b=0,y=180-y),x=Xn(Math.sqrt(V*V+H*H+q*q)),E=Xn(Math.sqrt(X*X+le*le)),T=cc(j,X),L=Math.abs(T)>2e-4?T*Go:0,C=k?1/(k<0?-k:k):0),a.svg&&(G=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!OT(Ca(e,Ln)),G&&e.setAttribute("transform",G))),Math.abs(L)>90&&Math.abs(L)<270&&(c?(x*=-1,L+=b<=0?180:-180,b+=b<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-_)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+u,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+u,a.z=v+u,a.scaleX=Xn(x),a.scaleY=Xn(E),a.rotation=Xn(b)+d,a.rotationX=Xn(S)+d,a.rotationY=Xn(y)+d,a.skewX=L+d,a.skewY=z+d,a.transformPerspective=C+u,(a.zOrigin=parseFloat(m.split(" ")[2])||!n&&a.zOrigin||0)&&(s[sa]=sp(m)),a.xOffset=a.yOffset=0,a.force3D=wa.force3D,a.renderTransform=a.svg?xP:DT?PT:vP,a.uncache=0,a},sp=function(e){return(e=e.split(" "))[0]+" "+e[1]},H_=function(e,n,a){var s=Di(n);return Xn(parseFloat(n)+parseFloat(uo(e,"x",a+"px",s)))+s},vP=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,PT(e,n)},Bo="0deg",Bu="0px",Ho=") ",PT=function(e,n){var a=n||this,s=a.xPercent,c=a.yPercent,u=a.x,d=a.y,p=a.z,m=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,x=a.skewY,E=a.scaleX,b=a.scaleY,S=a.transformPerspective,y=a.force3D,L=a.target,z=a.zOrigin,C="",R=y==="auto"&&e&&e!==1||y===!0;if(z&&(g!==Bo||_!==Bo)){var O=parseFloat(_)*Tc,w=Math.sin(O),T=Math.cos(O),D;O=parseFloat(g)*Tc,D=Math.cos(O),u=H_(L,u,w*D*-z),d=H_(L,d,-Math.sin(O)*-z),p=H_(L,p,T*D*-z+z)}S!==Bu&&(C+="perspective("+S+Ho),(s||c)&&(C+="translate("+s+"%, "+c+"%) "),(R||u!==Bu||d!==Bu||p!==Bu)&&(C+=p!==Bu||R?"translate3d("+u+", "+d+", "+p+") ":"translate("+u+", "+d+Ho),m!==Bo&&(C+="rotate("+m+Ho),_!==Bo&&(C+="rotateY("+_+Ho),g!==Bo&&(C+="rotateX("+g+Ho),(v!==Bo||x!==Bo)&&(C+="skew("+v+", "+x+Ho),(E!==1||b!==1)&&(C+="scale("+E+", "+b+Ho),L.style[Ln]=C||"translate(0, 0)"},xP=function(e,n){var a=n||this,s=a.xPercent,c=a.yPercent,u=a.x,d=a.y,p=a.rotation,m=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,x=a.target,E=a.xOrigin,b=a.yOrigin,S=a.xOffset,y=a.yOffset,L=a.forceCSS,z=parseFloat(u),C=parseFloat(d),R,O,w,T,D;p=parseFloat(p),m=parseFloat(m),_=parseFloat(_),_&&(_=parseFloat(_),m+=_,p+=_),p||m?(p*=Tc,m*=Tc,R=Math.cos(p)*g,O=Math.sin(p)*g,w=Math.sin(p-m)*-v,T=Math.cos(p-m)*v,m&&(_*=Tc,D=Math.tan(m-_),D=Math.sqrt(1+D*D),w*=D,T*=D,_&&(D=Math.tan(_),D=Math.sqrt(1+D*D),R*=D,O*=D)),R=Xn(R),O=Xn(O),w=Xn(w),T=Xn(T)):(R=g,T=v,O=w=0),(z&&!~(u+"").indexOf("px")||C&&!~(d+"").indexOf("px"))&&(z=uo(x,"x",u,"px"),C=uo(x,"y",d,"px")),(E||b||S||y)&&(z=Xn(z+E-(E*R+b*w)+S),C=Xn(C+b-(E*O+b*T)+y)),(s||c)&&(D=x.getBBox(),z=Xn(z+s/100*D.width),C=Xn(C+c/100*D.height)),D="matrix("+R+","+O+","+w+","+T+","+z+","+C+")",x.setAttribute("transform",D),L&&(x.style[Ln]=D)},SP=function(e,n,a,s,c){var u=360,d=hi(c),p=parseFloat(c)*(d&&~c.indexOf("rad")?Go:1),m=p-s,_=s+m+"deg",g,v;return d&&(g=c.split("_")[1],g==="short"&&(m%=u,m!==m%(u/2)&&(m+=m<0?u:-u)),g==="cw"&&m<0?m=(m+u*AE)%u-~~(m/u)*u:g==="ccw"&&m>0&&(m=(m-u*AE)%u-~~(m/u)*u)),e._pt=v=new ra(e._pt,n,a,s,m,nP),v.e=_,v.u="deg",e._props.push(a),v},UE=function(e,n){for(var a in n)e[a]=n[a];return e},yP=function(e,n,a){var s=UE({},a._gsap),c="perspective,force3D,transformOrigin,svgOrigin",u=a.style,d,p,m,_,g,v,x,E;s.svg?(m=a.getAttribute("transform"),a.setAttribute("transform",""),u[Ln]=n,d=bf(a,1),co(a,Ln),a.setAttribute("transform",m)):(m=getComputedStyle(a)[Ln],u[Ln]=n,d=bf(a,1),u[Ln]=m);for(p in vs)m=s[p],_=d[p],m!==_&&c.indexOf(p)<0&&(x=Di(m),E=Di(_),g=x!==E?uo(a,p,m,E):parseFloat(m),v=parseFloat(_),e._pt=new ra(e._pt,d,p,g,v-g,Zg),e._pt.u=E||0,e._props.push(p));UE(d,s)};aa("padding,margin,Width,Radius",function(o,e){var n="Top",a="Right",s="Bottom",c="Left",u=(e<3?[n,a,s,c]:[n+c,n+a,s+a,s+c]).map(function(d){return e<2?o+d:"border"+d+o});rp[e>1?"border"+o:o]=function(d,p,m,_,g){var v,x;if(arguments.length<4)return v=u.map(function(E){return cs(d,E,m)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(_+"").split(" "),x={},u.forEach(function(E,b){return x[E]=v[b]=v[b]||v[(b-1)/2|0]}),d.init(p,x,g)}});var IT={name:"css",register:Kg,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,a,s,c){var u=this._props,d=e.style,p=a.vars.startAt,m,_,g,v,x,E,b,S,y,L,z,C,R,O,w,T,D;zv||Kg(),this.styles=this.styles||wT(e),T=this.styles.props,this.tween=a;for(b in n)if(b!=="autoRound"&&(_=n[b],!(Ma[b]&&vT(b,n,a,s,e,c)))){if(x=typeof _,E=rp[b],x==="function"&&(_=_.call(a,s,e,c),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=Sf(_)),E)E(this,e,b,_,a)&&(w=1);else if(b.substr(0,2)==="--")m=(getComputedStyle(e).getPropertyValue(b)+"").trim(),_+="",so.lastIndex=0,so.test(m)||(S=Di(m),y=Di(_),y?S!==y&&(m=uo(e,b,m,y)+y):S&&(_+=S)),this.add(d,"setProperty",m,_,s,c,0,0,b),u.push(b),T.push(b,0,d[b]);else if(x!=="undefined"){if(p&&b in p?(m=typeof p[b]=="function"?p[b].call(a,s,e,c):p[b],hi(m)&&~m.indexOf("random(")&&(m=Sf(m)),Di(m+"")||m==="auto"||(m+=wa.units[b]||Di(cs(e,b))||""),(m+"").charAt(1)==="="&&(m=cs(e,b))):m=cs(e,b),v=parseFloat(m),L=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),L&&(_=_.substr(2)),g=parseFloat(_),b in Ir&&(b==="autoAlpha"&&(v===1&&cs(e,"visibility")==="hidden"&&g&&(v=0),T.push("visibility",0,d.visibility),no(this,d,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),b!=="scale"&&b!=="transform"&&(b=Ir[b],~b.indexOf(",")&&(b=b.split(",")[0]))),z=b in vs,z){if(this.styles.save(b),D=_,x==="string"&&_.substring(0,6)==="var(--"){if(_=Ca(e,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=_,_=Ca(e,"perspective"),I?e.style.perspective=I:co(e,"perspective")}g=parseFloat(_)}if(C||(R=e._gsap,R.renderTransform&&!n.parseTransform||bf(e,n.parseTransform),O=n.smoothOrigin!==!1&&R.smooth,C=this._pt=new ra(this._pt,d,Ln,0,1,R.renderTransform,R,0,-1),C.dep=1),b==="scale")this._pt=new ra(this._pt,R,"scaleY",R.scaleY,(L?Ec(R.scaleY,L+g):g)-R.scaleY||0,Zg),this._pt.u=0,u.push("scaleY",b),b+="X";else if(b==="transformOrigin"){T.push(sa,0,d[sa]),_=_P(_),R.svg?Qg(e,_,0,O,0,this):(y=parseFloat(_.split(" ")[2])||0,y!==R.zOrigin&&no(this,R,"zOrigin",R.zOrigin,y),no(this,d,b,sp(m),sp(_)));continue}else if(b==="svgOrigin"){Qg(e,_,1,O,0,this);continue}else if(b in UT){SP(this,R,b,v,L?Ec(v,L+_):_);continue}else if(b==="smoothOrigin"){no(this,R,"smooth",R.smooth,_);continue}else if(b==="force3D"){R[b]=_;continue}else if(b==="transform"){yP(this,_,e);continue}}else b in d||(b=zc(b)||b);if(z||(g||g===0)&&(v||v===0)&&!tP.test(_)&&b in d)S=(m+"").substr((v+"").length),g||(g=0),y=Di(_)||(b in wa.units?wa.units[b]:S),S!==y&&(v=uo(e,b,m,y)),this._pt=new ra(this._pt,z?R:d,b,v,(L?Ec(v,L+g):g)-v,!z&&(y==="px"||b==="zIndex")&&n.autoRound!==!1?rP:Zg),this._pt.u=y||0,z&&D!==_?(this._pt.b=m,this._pt.e=D,this._pt.r=aP):S!==y&&y!=="%"&&(this._pt.b=m,this._pt.r=iP);else if(b in d)mP.call(this,e,b,m,L?L+_:_);else if(b in e)this.add(e,b,m||e[b],L?L+_:_,s,c);else if(b!=="parseTransform"){Cv(b,_);continue}z||(b in d?T.push(b,0,d[b]):typeof e[b]=="function"?T.push(b,2,e[b]()):T.push(b,1,m||e[b])),u.push(b)}}w&&bT(this)},render:function(e,n){if(n.tween._time||!Fv())for(var a=n._pt;a;)a.r(e,a.d),a=a._next;else n.styles.revert()},get:cs,aliases:Ir,getSetter:function(e,n,a){var s=Ir[n];return s&&s.indexOf(",")<0&&(n=s),n in vs&&n!==sa&&(e._gsap.x||cs(e,"x"))?a&&TE===a?n==="scale"?cP:lP:(TE=a||{})&&(n==="scale"?uP:fP):e.style&&!bv(e.style[n])?sP:~n.indexOf("-")?oP:Pv(e,n)},core:{_removeProperty:co,_getMatrix:Hv}};oa.utils.checkPrefix=zc;oa.core.getStyleSaver=wT;(function(o,e,n,a){var s=aa(o+","+e+","+n,function(c){vs[c]=1});aa(e,function(c){wa.units[c]="deg",UT[c]=1}),Ir[s[13]]=o+","+e,aa(a,function(c){var u=c.split(":");Ir[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");aa("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){wa.units[o]="px"});oa.registerPlugin(IT);var op=oa.registerPlugin(IT)||oa;op.core.Tween;function MP(o,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(o,a.key,a)}}function EP(o,e,n){return e&&MP(o.prototype,e),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi,Vh,Ta,io,ao,Ac,zT,Vo,Cc,FT,fs,sr,BT,HT=function(){return Mi||typeof window<"u"&&(Mi=window.gsap)&&Mi.registerPlugin&&Mi},GT=1,xc=[],Ft=[],Br=[],tf=Date.now,Jg=function(e,n){return n},bP=function(){var e=Cc.core,n=e.bridge||{},a=e._scrollers,s=e._proxies;a.push.apply(a,Ft),s.push.apply(s,Br),Ft=a,Br=s,Jg=function(u,d){return n[u](d)}},oo=function(e,n){return~Br.indexOf(e)&&Br[Br.indexOf(e)+1][n]},nf=function(e){return!!~FT.indexOf(e)},Vi=function(e,n,a,s,c){return e.addEventListener(n,a,{passive:s!==!1,capture:!!c})},Gi=function(e,n,a,s){return e.removeEventListener(n,a,!!s)},yh="scrollLeft",Mh="scrollTop",$g=function(){return fs&&fs.isPressed||Ft.cache++},lp=function(e,n){var a=function s(c){if(c||c===0){GT&&(Ta.history.scrollRestoration="manual");var u=fs&&fs.isPressed;c=s.v=Math.round(c)||(fs&&fs.iOS?1:0),e(c),s.cacheID=Ft.cache,u&&Jg("ss",c)}else(n||Ft.cache!==s.cacheID||Jg("ref"))&&(s.cacheID=Ft.cache,s.v=e());return s.v+s.offset};return a.offset=0,e&&a},qi={s:yh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lp(function(o){return arguments.length?Ta.scrollTo(o,ai.sc()):Ta.pageXOffset||io[yh]||ao[yh]||Ac[yh]||0})},ai={s:Mh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qi,sc:lp(function(o){return arguments.length?Ta.scrollTo(qi.sc(),o):Ta.pageYOffset||io[Mh]||ao[Mh]||Ac[Mh]||0})},ea=function(e,n){return(n&&n._ctx&&n._ctx.selector||Mi.utils.toArray)(e)[0]||(typeof e=="string"&&Mi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},TP=function(e,n){for(var a=n.length;a--;)if(n[a]===e||n[a].contains(e))return!0;return!1},fo=function(e,n){var a=n.s,s=n.sc;nf(e)&&(e=io.scrollingElement||ao);var c=Ft.indexOf(e),u=s===ai.sc?1:2;!~c&&(c=Ft.push(e)-1),Ft[c+u]||Vi(e,"scroll",$g);var d=Ft[c+u],p=d||(Ft[c+u]=lp(oo(e,a),!0)||(nf(e)?s:lp(function(m){return arguments.length?e[a]=m:e[a]})));return p.target=e,d||(p.smooth=Mi.getProperty(e,"scrollBehavior")==="smooth"),p},ev=function(e,n,a){var s=e,c=e,u=tf(),d=u,p=n||50,m=Math.max(500,p*3),_=function(E,b){var S=tf();b||S-u>p?(c=s,s=E,d=u,u=S):a?s+=E:s=c+(E-c)/(S-d)*(u-d)},g=function(){c=s=a?0:s,d=u=0},v=function(E){var b=d,S=c,y=tf();return(E||E===0)&&E!==s&&_(E),u===d||y-d>m?0:(s+(a?S:-S))/((a?y:u)-b)*1e3};return{update:_,reset:g,getVelocity:v}},Hu=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},OE=function(e){var n=Math.max.apply(Math,e),a=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(a)?n:a},VT=function(){Cc=Mi.core.globals().ScrollTrigger,Cc&&Cc.core&&bP()},kT=function(e){return Mi=e||HT(),!Vh&&Mi&&typeof document<"u"&&document.body&&(Ta=window,io=document,ao=io.documentElement,Ac=io.body,FT=[Ta,io,ao,Ac],Mi.utils.clamp,BT=Mi.core.context||function(){},Vo="onpointerenter"in Ac?"pointer":"mouse",zT=Wn.isTouch=Ta.matchMedia&&Ta.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ta||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,sr=Wn.eventTypes=("ontouchstart"in ao?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ao?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return GT=0},500),Vh=1),Cc||VT(),Vh};qi.op=ai;Ft.cache=0;var Wn=(function(){function o(n){this.init(n)}var e=o.prototype;return e.init=function(a){Vh||kT(Mi)||console.warn("Please gsap.registerPlugin(Observer)"),Cc||VT();var s=a.tolerance,c=a.dragMinimum,u=a.type,d=a.target,p=a.lineHeight,m=a.debounce,_=a.preventDefault,g=a.onStop,v=a.onStopDelay,x=a.ignore,E=a.wheelSpeed,b=a.event,S=a.onDragStart,y=a.onDragEnd,L=a.onDrag,z=a.onPress,C=a.onRelease,R=a.onRight,O=a.onLeft,w=a.onUp,T=a.onDown,D=a.onChangeX,I=a.onChangeY,V=a.onChange,H=a.onToggleX,q=a.onToggleY,W=a.onHover,j=a.onHoverEnd,X=a.onMove,G=a.ignoreCheck,te=a.isNormalizer,ne=a.onGestureStart,P=a.onGestureEnd,me=a.onWheel,Fe=a.onEnable,Le=a.onDisable,k=a.onClick,le=a.scrollSpeed,Ee=a.capture,J=a.allowClicks,ce=a.lockAxis,Ce=a.onLockAxis;this.target=d=ea(d)||ao,this.vars=a,x&&(x=Mi.utils.toArray(x)),s=s||1e-9,c=c||0,E=E||1,le=le||1,u=u||"wheel,touch,pointer",m=m!==!1,p||(p=parseFloat(Ta.getComputedStyle(Ac).lineHeight)||22);var Ge,ve,Ue,lt,ct,mt,Be,Z=this,Ne=0,dt=0,xt=a.passive||!_&&a.passive!==!1,$e=fo(d,qi),vt=fo(d,ai),Q=$e(),yt=vt(),rt=~u.indexOf("touch")&&!~u.indexOf("pointer")&&sr[0]==="pointerdown",B=nf(d),A=d.ownerDocument||io,ie=[0,0,0],re=[0,0,0],ge=0,Ie=function(){return ge=tf()},Pe=function(be,st){return(Z.event=be)&&x&&TP(be.target,x)||st&&rt&&be.pointerType!=="touch"||G&&G(be,st)},Se=function(){Z._vx.reset(),Z._vy.reset(),ve.pause(),g&&g(Z)},ye=function(){var be=Z.deltaX=OE(ie),st=Z.deltaY=OE(re),we=Math.abs(be)>=s,_t=Math.abs(st)>=s;V&&(we||_t)&&V(Z,be,st,ie,re),we&&(R&&Z.deltaX>0&&R(Z),O&&Z.deltaX<0&&O(Z),D&&D(Z),H&&Z.deltaX<0!=Ne<0&&H(Z),Ne=Z.deltaX,ie[0]=ie[1]=ie[2]=0),_t&&(T&&Z.deltaY>0&&T(Z),w&&Z.deltaY<0&&w(Z),I&&I(Z),q&&Z.deltaY<0!=dt<0&&q(Z),dt=Z.deltaY,re[0]=re[1]=re[2]=0),(lt||Ue)&&(X&&X(Z),Ue&&(S&&Ue===1&&S(Z),L&&L(Z),Ue=0),lt=!1),mt&&!(mt=!1)&&Ce&&Ce(Z),ct&&(me(Z),ct=!1),Ge=0},Ve=function(be,st,we){ie[we]+=be,re[we]+=st,Z._vx.update(be),Z._vy.update(st),m?Ge||(Ge=requestAnimationFrame(ye)):ye()},et=function(be,st){ce&&!Be&&(Z.axis=Be=Math.abs(be)>Math.abs(st)?"x":"y",mt=!0),Be!=="y"&&(ie[2]+=be,Z._vx.update(be,!0)),Be!=="x"&&(re[2]+=st,Z._vy.update(st,!0)),m?Ge||(Ge=requestAnimationFrame(ye)):ye()},Xe=function(be){if(!Pe(be,1)){be=Hu(be,_);var st=be.clientX,we=be.clientY,_t=st-Z.x,ut=we-Z.y,Et=Z.isDragging;Z.x=st,Z.y=we,(Et||(_t||ut)&&(Math.abs(Z.startX-st)>=c||Math.abs(Z.startY-we)>=c))&&(Ue||(Ue=Et?2:1),Et||(Z.isDragging=!0),et(_t,ut))}},ke=Z.onPress=function(Oe){Pe(Oe,1)||Oe&&Oe.button||(Z.axis=Be=null,ve.pause(),Z.isPressed=!0,Oe=Hu(Oe),Ne=dt=0,Z.startX=Z.x=Oe.clientX,Z.startY=Z.y=Oe.clientY,Z._vx.reset(),Z._vy.reset(),Vi(te?d:A,sr[1],Xe,xt,!0),Z.deltaX=Z.deltaY=0,z&&z(Z))},Re=Z.onRelease=function(Oe){if(!Pe(Oe,1)){Gi(te?d:A,sr[1],Xe,!0);var be=!isNaN(Z.y-Z.startY),st=Z.isDragging,we=st&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),_t=Hu(Oe);!we&&be&&(Z._vx.reset(),Z._vy.reset(),_&&J&&Mi.delayedCall(.08,function(){if(tf()-ge>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(A.createEvent){var ut=A.createEvent("MouseEvents");ut.initMouseEvent("click",!0,!0,Ta,1,_t.screenX,_t.screenY,_t.clientX,_t.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(ut)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,g&&st&&!te&&ve.restart(!0),Ue&&ye(),y&&st&&y(Z),C&&C(Z,we)}},nt=function(be){return be.touches&&be.touches.length>1&&(Z.isGesturing=!0)&&ne(be,Z.isDragging)},Ke=function(){return(Z.isGesturing=!1)||P(Z)},$=function(be){if(!Pe(be)){var st=$e(),we=vt();Ve((st-Q)*le,(we-yt)*le,1),Q=st,yt=we,g&&ve.restart(!0)}},ze=function(be){if(!Pe(be)){be=Hu(be,_),me&&(ct=!0);var st=(be.deltaMode===1?p:be.deltaMode===2?Ta.innerHeight:1)*E;Ve(be.deltaX*st,be.deltaY*st,0),g&&!te&&ve.restart(!0)}},Me=function(be){if(!Pe(be)){var st=be.clientX,we=be.clientY,_t=st-Z.x,ut=we-Z.y;Z.x=st,Z.y=we,lt=!0,g&&ve.restart(!0),(_t||ut)&&et(_t,ut)}},He=function(be){Z.event=be,W(Z)},We=function(be){Z.event=be,j(Z)},De=function(be){return Pe(be)||Hu(be,_)&&k(Z)};ve=Z._dc=Mi.delayedCall(v||.25,Se).pause(),Z.deltaX=Z.deltaY=0,Z._vx=ev(0,50,!0),Z._vy=ev(0,50,!0),Z.scrollX=$e,Z.scrollY=vt,Z.isDragging=Z.isGesturing=Z.isPressed=!1,BT(this),Z.enable=function(Oe){return Z.isEnabled||(Vi(B?A:d,"scroll",$g),u.indexOf("scroll")>=0&&Vi(B?A:d,"scroll",$,xt,Ee),u.indexOf("wheel")>=0&&Vi(d,"wheel",ze,xt,Ee),(u.indexOf("touch")>=0&&zT||u.indexOf("pointer")>=0)&&(Vi(d,sr[0],ke,xt,Ee),Vi(A,sr[2],Re),Vi(A,sr[3],Re),J&&Vi(d,"click",Ie,!0,!0),k&&Vi(d,"click",De),ne&&Vi(A,"gesturestart",nt),P&&Vi(A,"gestureend",Ke),W&&Vi(d,Vo+"enter",He),j&&Vi(d,Vo+"leave",We),X&&Vi(d,Vo+"move",Me)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=lt=Ue=!1,Z._vx.reset(),Z._vy.reset(),Q=$e(),yt=vt(),Oe&&Oe.type&&ke(Oe),Fe&&Fe(Z)),Z},Z.disable=function(){Z.isEnabled&&(xc.filter(function(Oe){return Oe!==Z&&nf(Oe.target)}).length||Gi(B?A:d,"scroll",$g),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),Gi(te?d:A,sr[1],Xe,!0)),Gi(B?A:d,"scroll",$,Ee),Gi(d,"wheel",ze,Ee),Gi(d,sr[0],ke,Ee),Gi(A,sr[2],Re),Gi(A,sr[3],Re),Gi(d,"click",Ie,!0),Gi(d,"click",De),Gi(A,"gesturestart",nt),Gi(A,"gestureend",Ke),Gi(d,Vo+"enter",He),Gi(d,Vo+"leave",We),Gi(d,Vo+"move",Me),Z.isEnabled=Z.isPressed=Z.isDragging=!1,Le&&Le(Z))},Z.kill=Z.revert=function(){Z.disable();var Oe=xc.indexOf(Z);Oe>=0&&xc.splice(Oe,1),fs===Z&&(fs=0)},xc.push(Z),te&&nf(d)&&(fs=Z),Z.enable(b)},EP(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Wn.version="3.15.0";Wn.create=function(o){return new Wn(o)};Wn.register=kT;Wn.getAll=function(){return xc.slice()};Wn.getById=function(o){return xc.filter(function(e){return e.vars.id===o})[0]};HT()&&Mi.registerPlugin(Wn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ft,pc,zt,hn,Ea,ln,Gv,cp,Tf,af,Yu,Eh,Ri,Sp,tv,Wi,PE,IE,mc,XT,G_,WT,Xi,nv,YT,qT,Qs,iv,Vv,Rc,kv,rf,av,V_,bh=1,wi=Date.now,k_=wi(),Ka=0,qu=0,zE=function(e,n,a){var s=ya(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return a["_"+n+"Clamp"]=s,s?e.substr(6,e.length-7):e},FE=function(e,n){return n&&(!ya(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},AP=function o(){return qu&&requestAnimationFrame(o)},BE=function(){return Sp=1},HE=function(){return Sp=0},Dr=function(e){return e},Zu=function(e){return Math.round(e*1e5)/1e5||0},ZT=function(){return typeof window<"u"},jT=function(){return ft||ZT()&&(ft=window.gsap)&&ft.registerPlugin&&ft},rl=function(e){return!!~Gv.indexOf(e)},KT=function(e){return(e==="Height"?kv:zt["inner"+e])||Ea["client"+e]||ln["client"+e]},QT=function(e){return oo(e,"getBoundingClientRect")||(rl(e)?function(){return qh.width=zt.innerWidth,qh.height=kv,qh}:function(){return us(e)})},CP=function(e,n,a){var s=a.d,c=a.d2,u=a.a;return(u=oo(e,"getBoundingClientRect"))?function(){return u()[s]}:function(){return(n?KT(c):e["client"+c])||0}},RP=function(e,n){return!n||~Br.indexOf(e)?QT(e):function(){return qh}},zr=function(e,n){var a=n.s,s=n.d2,c=n.d,u=n.a;return Math.max(0,(a="scroll"+s)&&(u=oo(e,a))?u()-QT(e)()[c]:rl(e)?(Ea[a]||ln[a])-KT(s):e[a]-e["offset"+s])},Th=function(e,n){for(var a=0;a<mc.length;a+=3)(!n||~n.indexOf(mc[a+1]))&&e(mc[a],mc[a+1],mc[a+2])},ya=function(e){return typeof e=="string"},Ni=function(e){return typeof e=="function"},ju=function(e){return typeof e=="number"},ko=function(e){return typeof e=="object"},Gu=function(e,n,a){return e&&e.progress(n?0:1)&&a&&e.pause()},uc=function(e,n,a){if(e.enabled){var s=e._ctx?e._ctx.add(function(){return n(e,a)}):n(e,a);s&&s.totalTime&&(e.callbackAnimation=s)}},fc=Math.abs,JT="left",$T="top",Xv="right",Wv="bottom",Jo="width",$o="height",sf="Right",of="Left",lf="Top",cf="Bottom",Jn="padding",Wa="margin",Fc="Width",Yv="Height",ii="px",Ya=function(e){return zt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},wP=function(e){var n=Ya(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},GE=function(e,n){for(var a in n)a in e||(e[a]=n[a]);return e},us=function(e,n){var a=n&&Ya(e)[tv]!=="matrix(1, 0, 0, 1, 0, 0)"&&ft.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return a&&a.progress(0).kill(),s},up=function(e,n){var a=n.d2;return e["offset"+a]||e["client"+a]||0},eA=function(e){var n=[],a=e.labels,s=e.duration(),c;for(c in a)n.push(a[c]/s);return n},DP=function(e){return function(n){return ft.utils.snap(eA(e),n)}},qv=function(e){var n=ft.utils.snap(e),a=Array.isArray(e)&&e.slice(0).sort(function(s,c){return s-c});return a?function(s,c,u){u===void 0&&(u=.001);var d;if(!c)return n(s);if(c>0){for(s-=u,d=0;d<a.length;d++)if(a[d]>=s)return a[d];return a[d-1]}else for(d=a.length,s+=u;d--;)if(a[d]<=s)return a[d];return a[0]}:function(s,c,u){u===void 0&&(u=.001);var d=n(s);return!c||Math.abs(d-s)<u||d-s<0==c<0?d:n(c<0?s-e:s+e)}},NP=function(e){return function(n,a){return qv(eA(e))(n,a.direction)}},Ah=function(e,n,a,s){return a.split(",").forEach(function(c){return e(n,c,s)})},di=function(e,n,a,s,c){return e.addEventListener(n,a,{passive:!s,capture:!!c})},fi=function(e,n,a,s){return e.removeEventListener(n,a,!!s)},Ch=function(e,n,a){a=a&&a.wheelHandler,a&&(e(n,"wheel",a),e(n,"touchmove",a))},VE={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rh={toggleActions:"play",anticipatePin:0},fp={top:0,left:0,center:.5,bottom:1,right:1},kh=function(e,n){if(ya(e)){var a=e.indexOf("="),s=~a?+(e.charAt(a-1)+1)*parseFloat(e.substr(a+1)):0;~a&&(e.indexOf("%")>a&&(s*=n/100),e=e.substr(0,a-1)),e=s+(e in fp?fp[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},wh=function(e,n,a,s,c,u,d,p){var m=c.startColor,_=c.endColor,g=c.fontSize,v=c.indent,x=c.fontWeight,E=hn.createElement("div"),b=rl(a)||oo(a,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,y=b?ln:a.tagName==="IFRAME"?a.contentDocument.body:a,L=e.indexOf("start")!==-1,z=L?m:_,C="border-color:"+z+";font-size:"+g+";color:"+z+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((S||p)&&b?"fixed;":"absolute;"),(S||p||!b)&&(C+=(s===ai?Xv:Wv)+":"+(u+parseFloat(v))+"px;"),d&&(C+="box-sizing:border-box;text-align:left;width:"+d.offsetWidth+"px;"),E._isStart=L,E.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),E.style.cssText=C,E.innerText=n||n===0?e+"-"+n:e,y.children[0]?y.insertBefore(E,y.children[0]):y.appendChild(E),E._offset=E["offset"+s.op.d2],Xh(E,0,s,L),E},Xh=function(e,n,a,s){var c={display:"block"},u=a[s?"os2":"p2"],d=a[s?"p2":"os2"];e._isFlipped=s,c[a.a+"Percent"]=s?-100:0,c[a.a]=s?"1px":0,c["border"+u+Fc]=1,c["border"+d+Fc]=0,c[a.p]=n+"px",ft.set(e,c)},Pt=[],rv={},Af,kE=function(){return wi()-Ka>34&&(Af||(Af=requestAnimationFrame(ms)))},dc=function(){(!Xi||!Xi.isPressed||Xi.startX>ln.clientWidth)&&(Ft.cache++,Xi?Af||(Af=requestAnimationFrame(ms)):ms(),Ka||ol("scrollStart"),Ka=wi())},X_=function(){qT=zt.innerWidth,YT=zt.innerHeight},Ku=function(e){Ft.cache++,(e===!0||!Ri&&!WT&&!hn.fullscreenElement&&!hn.webkitFullscreenElement&&(!nv||qT!==zt.innerWidth||Math.abs(zt.innerHeight-YT)>zt.innerHeight*.25))&&cp.restart(!0)},sl={},LP=[],tA=function o(){return fi(Bt,"scrollEnd",o)||qo(!0)},ol=function(e){return sl[e]&&sl[e].map(function(n){return n()})||LP},Sa=[],nA=function(e){for(var n=0;n<Sa.length;n+=5)(!e||Sa[n+4]&&Sa[n+4].query===e)&&(Sa[n].style.cssText=Sa[n+1],Sa[n].getBBox&&Sa[n].setAttribute("transform",Sa[n+2]||""),Sa[n+3].uncache=1)},iA=function(){return Ft.forEach(function(e){return Ni(e)&&++e.cacheID&&(e.rec=e())})},Zv=function(e,n){var a;for(Wi=0;Wi<Pt.length;Wi++)a=Pt[Wi],a&&(!n||a._ctx===n)&&(e?a.kill(1):a.revert(!0,!0));rf=!0,n&&nA(n),n||ol("revert")},aA=function(e,n){Ft.cache++,(n||!Yi)&&Ft.forEach(function(a){return Ni(a)&&a.cacheID++&&(a.rec=0)}),ya(e)&&(zt.history.scrollRestoration=Vv=e)},Yi,el=0,XE,UP=function(){if(XE!==el){var e=XE=el;requestAnimationFrame(function(){return e===el&&qo(!0)})}},rA=function(){ln.appendChild(Rc),kv=!Xi&&Rc.offsetHeight||zt.innerHeight,ln.removeChild(Rc)},WE=function(e){return Tf(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},qo=function(e,n){if(Ea=hn.documentElement,ln=hn.body,Gv=[zt,hn,Ea,ln],Ka&&!e&&!rf){di(Bt,"scrollEnd",tA);return}rA(),Yi=Bt.isRefreshing=!0,rf||iA();var a=ol("refreshInit");XT&&Bt.sort(),n||Zv(),Ft.forEach(function(s){Ni(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),Pt.slice(0).forEach(function(s){return s.refresh()}),rf=!1,Pt.forEach(function(s){if(s._subPinOffset&&s.pin){var c=s.vars.horizontal?"offsetWidth":"offsetHeight",u=s.pin[c];s.revert(!0,1),s.adjustPinSpacing(s.pin[c]-u),s.refresh()}}),av=1,WE(!0),Pt.forEach(function(s){var c=zr(s.scroller,s._dir),u=s.vars.end==="max"||s._endClamp&&s.end>c,d=s._startClamp&&s.start>=c;(u||d)&&s.setPositions(d?c-1:s.start,u?Math.max(d?c:s.start+1,c):s.end,!0)}),WE(!1),av=0,a.forEach(function(s){return s&&s.render&&s.render(-1)}),Ft.forEach(function(s){Ni(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),aA(Vv,1),cp.pause(),el++,Yi=2,ms(2),Pt.forEach(function(s){return Ni(s.vars.onRefresh)&&s.vars.onRefresh(s)}),Yi=Bt.isRefreshing=!1,ol("refresh")},sv=0,Wh=1,uf,ms=function(e){if(e===2||!Yi&&!rf){Bt.isUpdating=!0,uf&&uf.update(0);var n=Pt.length,a=wi(),s=a-k_>=50,c=n&&Pt[0].scroll();if(Wh=sv>c?-1:1,Yi||(sv=c),s&&(Ka&&!Sp&&a-Ka>200&&(Ka=0,ol("scrollEnd")),Yu=k_,k_=a),Wh<0){for(Wi=n;Wi-- >0;)Pt[Wi]&&Pt[Wi].update(0,s);Wh=1}else for(Wi=0;Wi<n;Wi++)Pt[Wi]&&Pt[Wi].update(0,s);Bt.isUpdating=!1}Af=0},ov=[JT,$T,Wv,Xv,Wa+cf,Wa+sf,Wa+lf,Wa+of,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yh=ov.concat([Jo,$o,"boxSizing","max"+Fc,"max"+Yv,"position",Wa,Jn,Jn+lf,Jn+sf,Jn+cf,Jn+of]),OP=function(e,n,a){wc(a);var s=e._gsap;if(s.spacerIsNative)wc(s.spacerState);else if(e._gsap.swappedIn){var c=n.parentNode;c&&(c.insertBefore(e,n),c.removeChild(n))}e._gsap.swappedIn=!1},W_=function(e,n,a,s){if(!e._gsap.swappedIn){for(var c=ov.length,u=n.style,d=e.style,p;c--;)p=ov[c],u[p]=a[p];u.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(u.display="inline-block"),d[Wv]=d[Xv]="auto",u.flexBasis=a.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[Jo]=up(e,qi)+ii,u[$o]=up(e,ai)+ii,u[Jn]=d[Wa]=d[$T]=d[JT]="0",wc(s),d[Jo]=d["max"+Fc]=a[Jo],d[$o]=d["max"+Yv]=a[$o],d[Jn]=a[Jn],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},PP=/([A-Z])/g,wc=function(e){if(e){var n=e.t.style,a=e.length,s=0,c,u;for((e.t._gsap||ft.core.getCache(e.t)).uncache=1;s<a;s+=2)u=e[s+1],c=e[s],u?n[c]=u:n[c]&&n.removeProperty(c.replace(PP,"-$1").toLowerCase())}},Dh=function(e){for(var n=Yh.length,a=e.style,s=[],c=0;c<n;c++)s.push(Yh[c],a[Yh[c]]);return s.t=e,s},IP=function(e,n,a){for(var s=[],c=e.length,u=a?8:0,d;u<c;u+=2)d=e[u],s.push(d,d in n?n[d]:e[u+1]);return s.t=e.t,s},qh={left:0,top:0},YE=function(e,n,a,s,c,u,d,p,m,_,g,v,x,E){Ni(e)&&(e=e(p)),ya(e)&&e.substr(0,3)==="max"&&(e=v+(e.charAt(4)==="="?kh("0"+e.substr(3),a):0));var b=x?x.time():0,S,y,L;if(x&&x.seek(0),isNaN(e)||(e=+e),ju(e))x&&(e=ft.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,v,e)),d&&Xh(d,a,s,!0);else{Ni(n)&&(n=n(p));var z=(e||"0").split(" "),C,R,O,w;L=ea(n,p)||ln,C=us(L)||{},(!C||!C.left&&!C.top)&&Ya(L).display==="none"&&(w=L.style.display,L.style.display="block",C=us(L),w?L.style.display=w:L.style.removeProperty("display")),R=kh(z[0],C[s.d]),O=kh(z[1]||"0",a),e=C[s.p]-m[s.p]-_+R+c-O,d&&Xh(d,O,s,a-O<20||d._isStart&&O>20),a-=a-O}if(E&&(p[E]=e||-.001,e<0&&(e=0)),u){var T=e+a,D=u._isStart;S="scroll"+s.d2,Xh(u,T,s,D&&T>20||!D&&(g?Math.max(ln[S],Ea[S]):u.parentNode[S])<=T+1),g&&(m=us(d),g&&(u.style[s.op.p]=m[s.op.p]-s.op.m-u._offset+ii))}return x&&L&&(S=us(L),x.seek(v),y=us(L),x._caScrollDist=S[s.p]-y[s.p],e=e/x._caScrollDist*v),x&&x.seek(b),x?e:Math.round(e)},zP=/(webkit|moz|length|cssText|inset)/i,qE=function(e,n,a,s){if(e.parentNode!==n){var c=e.style,u,d;if(n===ln){e._stOrig=c.cssText,d=Ya(e);for(u in d)!+u&&!zP.test(u)&&d[u]&&typeof c[u]=="string"&&u!=="0"&&(c[u]=d[u]);c.top=a,c.left=s}else c.cssText=e._stOrig;ft.core.getCache(e).uncache=1,n.appendChild(e)}},sA=function(e,n,a){var s=n,c=s;return function(u){var d=Math.round(e());return d!==s&&d!==c&&Math.abs(d-s)>3&&Math.abs(d-c)>3&&(u=d,a&&a()),c=s,s=Math.round(u),s}},Nh=function(e,n,a){var s={};s[n.p]="+="+a,ft.set(e,s)},ZE=function(e,n){var a=fo(e,n),s="_scroll"+n.p2,c=function u(d,p,m,_,g){var v=u.tween,x=p.onComplete,E={};m=m||a();var b=sA(a,m,function(){v.kill(),u.tween=0});return g=_&&g||0,_=_||d-m,v&&v.kill(),p[s]=d,p.inherit=!1,p.modifiers=E,E[s]=function(){return b(m+_*v.ratio+g*v.ratio*v.ratio)},p.onUpdate=function(){Ft.cache++,u.tween&&ms()},p.onComplete=function(){u.tween=0,x&&x.call(v)},v=u.tween=ft.to(e,p),v};return e[s]=a,a.wheelHandler=function(){return c.tween&&c.tween.kill()&&(c.tween=0)},di(e,"wheel",a.wheelHandler),Bt.isTouch&&di(e,"touchmove",a.wheelHandler),c},Bt=(function(){function o(n,a){pc||o.register(ft)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),iv(this),this.init(n,a)}var e=o.prototype;return e.init=function(a,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!qu){this.update=this.refresh=this.kill=Dr;return}a=GE(ya(a)||ju(a)||a.nodeType?{trigger:a}:a,Rh);var c=a,u=c.onUpdate,d=c.toggleClass,p=c.id,m=c.onToggle,_=c.onRefresh,g=c.scrub,v=c.trigger,x=c.pin,E=c.pinSpacing,b=c.invalidateOnRefresh,S=c.anticipatePin,y=c.onScrubComplete,L=c.onSnapComplete,z=c.once,C=c.snap,R=c.pinReparent,O=c.pinSpacer,w=c.containerAnimation,T=c.fastScrollEnd,D=c.preventOverlaps,I=a.horizontal||a.containerAnimation&&a.horizontal!==!1?qi:ai,V=!g&&g!==0,H=ea(a.scroller||zt),q=ft.core.getCache(H),W=rl(H),j=("pinType"in a?a.pinType:oo(H,"pinType")||W&&"fixed")==="fixed",X=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],G=V&&a.toggleActions.split(" "),te="markers"in a?a.markers:Rh.markers,ne=W?0:parseFloat(Ya(H)["border"+I.p2+Fc])||0,P=this,me=a.onRefreshInit&&function(){return a.onRefreshInit(P)},Fe=CP(H,W,I),Le=RP(H,W),k=0,le=0,Ee=0,J=fo(H,I),ce,Ce,Ge,ve,Ue,lt,ct,mt,Be,Z,Ne,dt,xt,$e,vt,Q,yt,rt,B,A,ie,re,ge,Ie,Pe,Se,ye,Ve,et,Xe,ke,Re,nt,Ke,$,ze,Me,He,We;if(P._startClamp=P._endClamp=!1,P._dir=I,S*=45,P.scroller=H,P.scroll=w?w.time.bind(w):J,ve=J(),P.vars=a,s=s||a.animation,"refreshPriority"in a&&(XT=1,a.refreshPriority===-9999&&(uf=P)),q.tweenScroll=q.tweenScroll||{top:ZE(H,ai),left:ZE(H,qi)},P.tweenTo=ce=q.tweenScroll[I.p],P.scrubDuration=function(we){nt=ju(we)&&we,nt?Re?Re.duration(we):Re=ft.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:nt,paused:!0,onComplete:function(){return y&&y(P)}}):(Re&&Re.progress(1).kill(),Re=0)},s&&(s.vars.lazy=!1,s._initted&&!P.isReverted||s.vars.immediateRender!==!1&&a.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),P.animation=s.pause(),s.scrollTrigger=P,P.scrubDuration(g),Xe=0,p||(p=s.vars.id)),C&&((!ko(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in ln.style&&ft.set(W?[ln,Ea]:H,{scrollBehavior:"auto"}),Ft.forEach(function(we){return Ni(we)&&we.target===(W?hn.scrollingElement||Ea:H)&&(we.smooth=!1)}),Ge=Ni(C.snapTo)?C.snapTo:C.snapTo==="labels"?DP(s):C.snapTo==="labelsDirectional"?NP(s):C.directional!==!1?function(we,_t){return qv(C.snapTo)(we,wi()-le<500?0:_t.direction)}:ft.utils.snap(C.snapTo),Ke=C.duration||{min:.1,max:2},Ke=ko(Ke)?af(Ke.min,Ke.max):af(Ke,Ke),$=ft.delayedCall(C.delay||nt/2||.1,function(){var we=J(),_t=wi()-le<500,ut=ce.tween;if((_t||Math.abs(P.getVelocity())<10)&&!ut&&!Sp&&k!==we){var Et=(we-lt)/$e,bn=s&&!V?s.totalProgress():Et,Rt=_t?0:(bn-ke)/(wi()-Yu)*1e3||0,an=ft.utils.clamp(-Et,1-Et,fc(Rt/2)*Rt/.185),Sn=Et+(C.inertia===!1?0:an),rn,Qt,It=C,pi=It.onStart,cn=It.onInterrupt,Yn=It.onComplete;if(rn=Ge(Sn,P),ju(rn)||(rn=Sn),Qt=Math.max(0,Math.round(lt+rn*$e)),we<=ct&&we>=lt&&Qt!==we){if(ut&&!ut._initted&&ut.data<=fc(Qt-we))return;C.inertia===!1&&(an=rn-Et),ce(Qt,{duration:Ke(fc(Math.max(fc(Sn-bn),fc(rn-bn))*.185/Rt/.05||0)),ease:C.ease||"power3",data:fc(Qt-we),onInterrupt:function(){return $.restart(!0)&&cn&&uc(P,cn)},onComplete:function(){P.update(),k=J(),s&&!V&&(Re?Re.resetTo("totalProgress",rn,s._tTime/s._tDur):s.progress(rn)),Xe=ke=s&&!V?s.totalProgress():P.progress,L&&L(P),Yn&&uc(P,Yn)}},we,an*$e,Qt-we-an*$e),pi&&uc(P,pi,ce.tween)}}else P.isActive&&k!==we&&$.restart(!0)}).pause()),p&&(rv[p]=P),v=P.trigger=ea(v||x!==!0&&x),We=v&&v._gsap&&v._gsap.stRevert,We&&(We=We(P)),x=x===!0?v:ea(x),ya(d)&&(d={targets:v,className:d}),x&&(E===!1||E===Wa||(E=!E&&x.parentNode&&x.parentNode.style&&Ya(x.parentNode).display==="flex"?!1:Jn),P.pin=x,Ce=ft.core.getCache(x),Ce.spacer?vt=Ce.pinState:(O&&(O=ea(O),O&&!O.nodeType&&(O=O.current||O.nativeElement),Ce.spacerIsNative=!!O,O&&(Ce.spacerState=Dh(O))),Ce.spacer=rt=O||hn.createElement("div"),rt.classList.add("pin-spacer"),p&&rt.classList.add("pin-spacer-"+p),Ce.pinState=vt=Dh(x)),a.force3D!==!1&&ft.set(x,{force3D:!0}),P.spacer=rt=Ce.spacer,et=Ya(x),Ie=et[E+I.os2],A=ft.getProperty(x),ie=ft.quickSetter(x,I.a,ii),W_(x,rt,et),yt=Dh(x)),te){dt=ko(te)?GE(te,VE):VE,Z=wh("scroller-start",p,H,I,dt,0),Ne=wh("scroller-end",p,H,I,dt,0,Z),B=Z["offset"+I.op.d2];var De=ea(oo(H,"content")||H);mt=this.markerStart=wh("start",p,De,I,dt,B,0,w),Be=this.markerEnd=wh("end",p,De,I,dt,B,0,w),w&&(He=ft.quickSetter([mt,Be],I.a,ii)),!j&&!(Br.length&&oo(H,"fixedMarkers")===!0)&&(wP(W?ln:H),ft.set([Z,Ne],{force3D:!0}),Se=ft.quickSetter(Z,I.a,ii),Ve=ft.quickSetter(Ne,I.a,ii))}if(w){var Oe=w.vars.onUpdate,be=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),Oe&&Oe.apply(w,be||[])})}if(P.previous=function(){return Pt[Pt.indexOf(P)-1]},P.next=function(){return Pt[Pt.indexOf(P)+1]},P.revert=function(we,_t){if(!_t)return P.kill(!0);var ut=we!==!1||!P.enabled,Et=Ri;ut!==P.isReverted&&(ut&&(ze=Math.max(J(),P.scroll.rec||0),Ee=P.progress,Me=s&&s.progress()),mt&&[mt,Be,Z,Ne].forEach(function(bn){return bn.style.display=ut?"none":"block"}),ut&&(Ri=P,P.update(ut)),x&&(!R||!P.isActive)&&(ut?OP(x,rt,vt):W_(x,rt,Ya(x),Pe)),ut||P.update(ut),Ri=Et,P.isReverted=ut)},P.refresh=function(we,_t,ut,Et){if(!((Ri||!P.enabled)&&!_t)){if(x&&we&&Ka){di(o,"scrollEnd",tA);return}!Yi&&me&&me(P),Ri=P,ce.tween&&!ut&&(ce.tween.kill(),ce.tween=0),Re&&Re.pause(),b&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(Ye){return Ye.vars.immediateRender&&Ye.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var bn=Fe(),Rt=Le(),an=w?w.duration():zr(H,I),Sn=$e<=.01||!$e,rn=0,Qt=Et||0,It=ko(ut)?ut.end:a.end,pi=a.endTrigger||v,cn=ko(ut)?ut.start:a.start||(a.start===0||!v?0:x?"0 0":"0 100%"),Yn=P.pinnedContainer=a.pinnedContainer&&ea(a.pinnedContainer,P),Vn=v&&Math.max(0,Pt.indexOf(P))||0,Un=Vn,Tn,On,la,pr,Pn,An,Pi,bi,N,K,he,ue,de;for(te&&ko(ut)&&(ue=ft.getProperty(Z,I.p),de=ft.getProperty(Ne,I.p));Un-- >0;)An=Pt[Un],An.end||An.refresh(0,1)||(Ri=P),Pi=An.pin,Pi&&(Pi===v||Pi===x||Pi===Yn)&&!An.isReverted&&(K||(K=[]),K.unshift(An),An.revert(!0,!0)),An!==Pt[Un]&&(Vn--,Un--);for(Ni(cn)&&(cn=cn(P)),cn=zE(cn,"start",P),lt=YE(cn,v,bn,I,J(),mt,Z,P,Rt,ne,j,an,w,P._startClamp&&"_startClamp")||(x?-.001:0),Ni(It)&&(It=It(P)),ya(It)&&!It.indexOf("+=")&&(~It.indexOf(" ")?It=(ya(cn)?cn.split(" ")[0]:"")+It:(rn=kh(It.substr(2),bn),It=ya(cn)?cn:(w?ft.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,lt):lt)+rn,pi=v)),It=zE(It,"end",P),ct=Math.max(lt,YE(It||(pi?"100% 0":an),pi,bn,I,J()+rn,Be,Ne,P,Rt,ne,j,an,w,P._endClamp&&"_endClamp"))||-.001,rn=0,Un=Vn;Un--;)An=Pt[Un]||{},Pi=An.pin,Pi&&An.start-An._pinPush<=lt&&!w&&An.end>0&&(Tn=An.end-(P._startClamp?Math.max(0,An.start):An.start),(Pi===v&&An.start-An._pinPush<lt||Pi===Yn)&&isNaN(cn)&&(rn+=Tn*(1-An.progress)),Pi===x&&(Qt+=Tn));if(lt+=rn,ct+=rn,P._startClamp&&(P._startClamp+=rn),P._endClamp&&!Yi&&(P._endClamp=ct||-.001,ct=Math.min(ct,zr(H,I))),$e=ct-lt||(lt-=.01)&&.001,Sn&&(Ee=ft.utils.clamp(0,1,ft.utils.normalize(lt,ct,ze))),P._pinPush=Qt,mt&&rn&&(Tn={},Tn[I.a]="+="+rn,Yn&&(Tn[I.p]="-="+J()),ft.set([mt,Be],Tn)),x&&!(av&&P.end>=zr(H,I)))Tn=Ya(x),pr=I===ai,la=J(),re=parseFloat(A(I.a))+Qt,!an&&ct>1&&(he=(W?hn.scrollingElement||Ea:H).style,he={style:he,value:he["overflow"+I.a.toUpperCase()]},W&&Ya(ln)["overflow"+I.a.toUpperCase()]!=="scroll"&&(he.style["overflow"+I.a.toUpperCase()]="scroll")),W_(x,rt,Tn),yt=Dh(x),On=us(x,!0),bi=j&&fo(H,pr?qi:ai)(),E?(Pe=[E+I.os2,$e+Qt+ii],Pe.t=rt,Un=E===Jn?up(x,I)+$e+Qt:0,Un&&(Pe.push(I.d,Un+ii),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=Un+ii)),wc(Pe),Yn&&Pt.forEach(function(Ye){Ye.pin===Yn&&Ye.vars.pinSpacing!==!1&&(Ye._subPinOffset=!0)}),j&&J(ze)):(Un=up(x,I),Un&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=Un+ii)),j&&(Pn={top:On.top+(pr?la-lt:bi)+ii,left:On.left+(pr?bi:la-lt)+ii,boxSizing:"border-box",position:"fixed"},Pn[Jo]=Pn["max"+Fc]=Math.ceil(On.width)+ii,Pn[$o]=Pn["max"+Yv]=Math.ceil(On.height)+ii,Pn[Wa]=Pn[Wa+lf]=Pn[Wa+sf]=Pn[Wa+cf]=Pn[Wa+of]="0",Pn[Jn]=Tn[Jn],Pn[Jn+lf]=Tn[Jn+lf],Pn[Jn+sf]=Tn[Jn+sf],Pn[Jn+cf]=Tn[Jn+cf],Pn[Jn+of]=Tn[Jn+of],Q=IP(vt,Pn,R),Yi&&J(0)),s?(N=s._initted,G_(1),s.render(s.duration(),!0,!0),ge=A(I.a)-re+$e+Qt,ye=Math.abs($e-ge)>1,j&&ye&&Q.splice(Q.length-2,2),s.render(0,!0,!0),N||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),G_(0)):ge=$e,he&&(he.value?he.style["overflow"+I.a.toUpperCase()]=he.value:he.style.removeProperty("overflow-"+I.a));else if(v&&J()&&!w)for(On=v.parentNode;On&&On!==ln;)On._pinOffset&&(lt-=On._pinOffset,ct-=On._pinOffset),On=On.parentNode;K&&K.forEach(function(Ye){return Ye.revert(!1,!0)}),P.start=lt,P.end=ct,ve=Ue=Yi?ze:J(),!w&&!Yi&&(ve<ze&&J(ze),P.scroll.rec=0),P.revert(!1,!0),le=wi(),$&&(k=-1,$.restart(!0)),Ri=0,s&&V&&(s._initted||Me)&&s.progress()!==Me&&s.progress(Me||0,!0).render(s.time(),!0,!0),(Sn||Ee!==P.progress||w||b||s&&!s._initted)&&(s&&!V&&(s._initted||Ee||s.vars.immediateRender!==!1)&&s.totalProgress(w&&lt<-.001&&!Ee?ft.utils.normalize(lt,ct,0):Ee,!0),P.progress=Sn||(ve-lt)/$e===Ee?0:Ee),x&&E&&(rt._pinOffset=Math.round(P.progress*ge)),Re&&Re.invalidate(),isNaN(ue)||(ue-=ft.getProperty(Z,I.p),de-=ft.getProperty(Ne,I.p),Nh(Z,I,ue),Nh(mt,I,ue-(Et||0)),Nh(Ne,I,de),Nh(Be,I,de-(Et||0))),Sn&&!Yi&&P.update(),_&&!Yi&&!xt&&(xt=!0,_(P),xt=!1)}},P.getVelocity=function(){return(J()-Ue)/(wi()-Yu)*1e3||0},P.endAnimation=function(){Gu(P.callbackAnimation),s&&(Re?Re.progress(1):s.paused()?V||Gu(s,P.direction<0,1):Gu(s,s.reversed()))},P.labelToScroll=function(we){return s&&s.labels&&(lt||P.refresh()||lt)+s.labels[we]/s.duration()*$e||0},P.getTrailing=function(we){var _t=Pt.indexOf(P),ut=P.direction>0?Pt.slice(0,_t).reverse():Pt.slice(_t+1);return(ya(we)?ut.filter(function(Et){return Et.vars.preventOverlaps===we}):ut).filter(function(Et){return P.direction>0?Et.end<=lt:Et.start>=ct})},P.update=function(we,_t,ut){if(!(w&&!ut&&!we)){var Et=Yi===!0?ze:P.scroll(),bn=we?0:(Et-lt)/$e,Rt=bn<0?0:bn>1?1:bn||0,an=P.progress,Sn,rn,Qt,It,pi,cn,Yn,Vn;if(_t&&(Ue=ve,ve=w?J():Et,C&&(ke=Xe,Xe=s&&!V?s.totalProgress():Rt)),S&&x&&!Ri&&!bh&&Ka&&(!Rt&&lt<Et+(Et-Ue)/(wi()-Yu)*S?Rt=1e-4:Rt===1&&ct>Et+(Et-Ue)/(wi()-Yu)*S&&(Rt=.9999)),Rt!==an&&P.enabled){if(Sn=P.isActive=!!Rt&&Rt<1,rn=!!an&&an<1,cn=Sn!==rn,pi=cn||!!Rt!=!!an,P.direction=Rt>an?1:-1,P.progress=Rt,pi&&!Ri&&(Qt=Rt&&!an?0:Rt===1?1:an===1?2:3,V&&(It=!cn&&G[Qt+1]!=="none"&&G[Qt+1]||G[Qt],Vn=s&&(It==="complete"||It==="reset"||It in s))),D&&(cn||Vn)&&(Vn||g||!s)&&(Ni(D)?D(P):P.getTrailing(D).forEach(function(la){return la.endAnimation()})),V||(Re&&!Ri&&!bh?(Re._dp._time-Re._start!==Re._time&&Re.render(Re._dp._time-Re._start),Re.resetTo?Re.resetTo("totalProgress",Rt,s._tTime/s._tDur):(Re.vars.totalProgress=Rt,Re.invalidate().restart())):s&&s.totalProgress(Rt,!!(Ri&&(le||we)))),x){if(we&&E&&(rt.style[E+I.os2]=Ie),!j)ie(Zu(re+ge*Rt));else if(pi){if(Yn=!we&&Rt>an&&ct+1>Et&&Et+1>=zr(H,I),R)if(!we&&(Sn||Yn)){var Un=us(x,!0),Tn=Et-lt;qE(x,ln,Un.top+(I===ai?Tn:0)+ii,Un.left+(I===ai?0:Tn)+ii)}else qE(x,rt);wc(Sn||Yn?Q:yt),ye&&Rt<1&&Sn||ie(re+(Rt===1&&!Yn?ge:0))}}C&&!ce.tween&&!Ri&&!bh&&$.restart(!0),d&&(cn||z&&Rt&&(Rt<1||!V_))&&Tf(d.targets).forEach(function(la){return la.classList[Sn||z?"add":"remove"](d.className)}),u&&!V&&!we&&u(P),pi&&!Ri?(V&&(Vn&&(It==="complete"?s.pause().totalProgress(1):It==="reset"?s.restart(!0).pause():It==="restart"?s.restart(!0):s[It]()),u&&u(P)),(cn||!V_)&&(m&&cn&&uc(P,m),X[Qt]&&uc(P,X[Qt]),z&&(Rt===1?P.kill(!1,1):X[Qt]=0),cn||(Qt=Rt===1?1:3,X[Qt]&&uc(P,X[Qt]))),T&&!Sn&&Math.abs(P.getVelocity())>(ju(T)?T:2500)&&(Gu(P.callbackAnimation),Re?Re.progress(1):Gu(s,It==="reverse"?1:!Rt,1))):V&&u&&!Ri&&u(P)}if(Ve){var On=w?Et/w.duration()*(w._caScrollDist||0):Et;Se(On+(Z._isFlipped?1:0)),Ve(On)}He&&He(-Et/w.duration()*(w._caScrollDist||0))}},P.enable=function(we,_t){P.enabled||(P.enabled=!0,di(H,"resize",Ku),W||di(H,"scroll",dc),me&&di(o,"refreshInit",me),we!==!1&&(P.progress=Ee=0,ve=Ue=k=J()),_t!==!1&&P.refresh())},P.getTween=function(we){return we&&ce?ce.tween:Re},P.setPositions=function(we,_t,ut,Et){if(w){var bn=w.scrollTrigger,Rt=w.duration(),an=bn.end-bn.start;we=bn.start+an*we/Rt,_t=bn.start+an*_t/Rt}P.refresh(!1,!1,{start:FE(we,ut&&!!P._startClamp),end:FE(_t,ut&&!!P._endClamp)},Et),P.update()},P.adjustPinSpacing=function(we){if(Pe&&we){var _t=Pe.indexOf(I.d)+1;Pe[_t]=parseFloat(Pe[_t])+we+ii,Pe[1]=parseFloat(Pe[1])+we+ii,wc(Pe)}},P.disable=function(we,_t){if(we!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,_t||Re&&Re.pause(),ze=0,Ce&&(Ce.uncache=1),me&&fi(o,"refreshInit",me),$&&($.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!W)){for(var ut=Pt.length;ut--;)if(Pt[ut].scroller===H&&Pt[ut]!==P)return;fi(H,"resize",Ku),W||fi(H,"scroll",dc)}},P.kill=function(we,_t){P.disable(we,_t),Re&&!_t&&Re.kill(),p&&delete rv[p];var ut=Pt.indexOf(P);ut>=0&&Pt.splice(ut,1),ut===Wi&&Wh>0&&Wi--,ut=0,Pt.forEach(function(Et){return Et.scroller===P.scroller&&(ut=1)}),ut||Yi||(P.scroll.rec=0),s&&(s.scrollTrigger=null,we&&s.revert({kill:!1}),_t||s.kill()),mt&&[mt,Be,Z,Ne].forEach(function(Et){return Et.parentNode&&Et.parentNode.removeChild(Et)}),uf===P&&(uf=0),x&&(Ce&&(Ce.uncache=1),ut=0,Pt.forEach(function(Et){return Et.pin===x&&ut++}),ut||(Ce.spacer=0)),a.onKill&&a.onKill(P)},Pt.push(P),P.enable(!1,!1),We&&We(P),s&&s.add&&!$e){var st=P.update;P.update=function(){P.update=st,Ft.cache++,lt||ct||P.refresh()},ft.delayedCall(.01,P.update),$e=.01,lt=ct=0}else P.refresh();x&&UP()},o.register=function(a){return pc||(ft=a||jT(),ZT()&&window.document&&o.enable(),pc=qu),pc},o.defaults=function(a){if(a)for(var s in a)Rh[s]=a[s];return Rh},o.disable=function(a,s){qu=0,Pt.forEach(function(u){return u[s?"kill":"disable"](a)}),fi(zt,"wheel",dc),fi(hn,"scroll",dc),clearInterval(Eh),fi(hn,"touchcancel",Dr),fi(ln,"touchstart",Dr),Ah(fi,hn,"pointerdown,touchstart,mousedown",BE),Ah(fi,hn,"pointerup,touchend,mouseup",HE),cp.kill(),Th(fi);for(var c=0;c<Ft.length;c+=3)Ch(fi,Ft[c],Ft[c+1]),Ch(fi,Ft[c],Ft[c+2])},o.enable=function(){if(zt=window,hn=document,Ea=hn.documentElement,ln=hn.body,ft){if(Tf=ft.utils.toArray,af=ft.utils.clamp,iv=ft.core.context||Dr,G_=ft.core.suppressOverwrites||Dr,Vv=zt.history.scrollRestoration||"auto",sv=zt.pageYOffset||0,ft.core.globals("ScrollTrigger",o),ln){qu=1,Rc=document.createElement("div"),Rc.style.height="100vh",Rc.style.position="absolute",rA(),AP(),Wn.register(ft),o.isTouch=Wn.isTouch,Qs=Wn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nv=Wn.isTouch===1,di(zt,"wheel",dc),Gv=[zt,hn,Ea,ln],ft.matchMedia?(o.matchMedia=function(_){var g=ft.matchMedia(),v;for(v in _)g.add(v,_[v]);return g},ft.addEventListener("matchMediaInit",function(){iA(),Zv()}),ft.addEventListener("matchMediaRevert",function(){return nA()}),ft.addEventListener("matchMedia",function(){qo(0,1),ol("matchMedia")}),ft.matchMedia().add("(orientation: portrait)",function(){return X_(),X_})):console.warn("Requires GSAP 3.11.0 or later"),X_(),di(hn,"scroll",dc);var a=ln.hasAttribute("style"),s=ln.style,c=s.borderTopStyle,u=ft.core.Animation.prototype,d,p;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",d=us(ln),ai.m=Math.round(d.top+ai.sc())||0,qi.m=Math.round(d.left+qi.sc())||0,c?s.borderTopStyle=c:s.removeProperty("border-top-style"),a||(ln.setAttribute("style",""),ln.removeAttribute("style")),Eh=setInterval(kE,250),ft.delayedCall(.5,function(){return bh=0}),di(hn,"touchcancel",Dr),di(ln,"touchstart",Dr),Ah(di,hn,"pointerdown,touchstart,mousedown",BE),Ah(di,hn,"pointerup,touchend,mouseup",HE),tv=ft.utils.checkPrefix("transform"),Yh.push(tv),pc=wi(),cp=ft.delayedCall(.2,qo).pause(),mc=[hn,"visibilitychange",function(){var _=zt.innerWidth,g=zt.innerHeight;hn.hidden?(PE=_,IE=g):(PE!==_||IE!==g)&&Ku()},hn,"DOMContentLoaded",qo,zt,"load",qo,zt,"resize",Ku],Th(di),Pt.forEach(function(_){return _.enable(0,1)}),p=0;p<Ft.length;p+=3)Ch(fi,Ft[p],Ft[p+1]),Ch(fi,Ft[p],Ft[p+2])}else if(hn){var m=function _(){o.enable(),hn.removeEventListener("DOMContentLoaded",_)};hn.addEventListener("DOMContentLoaded",m)}}},o.config=function(a){"limitCallbacks"in a&&(V_=!!a.limitCallbacks);var s=a.syncInterval;s&&clearInterval(Eh)||(Eh=s)&&setInterval(kE,s),"ignoreMobileResize"in a&&(nv=o.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Th(fi)||Th(di,a.autoRefreshEvents||"none"),WT=(a.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(a,s){var c=ea(a),u=Ft.indexOf(c),d=rl(c);~u&&Ft.splice(u,d?6:2),s&&(d?Br.unshift(zt,s,ln,s,Ea,s):Br.unshift(c,s))},o.clearMatchMedia=function(a){Pt.forEach(function(s){return s._ctx&&s._ctx.query===a&&s._ctx.kill(!0,!0)})},o.isInViewport=function(a,s,c){var u=(ya(a)?ea(a):a).getBoundingClientRect(),d=u[c?Jo:$o]*s||0;return c?u.right-d>0&&u.left+d<zt.innerWidth:u.bottom-d>0&&u.top+d<zt.innerHeight},o.positionInViewport=function(a,s,c){ya(a)&&(a=ea(a));var u=a.getBoundingClientRect(),d=u[c?Jo:$o],p=s==null?d/2:s in fp?fp[s]*d:~s.indexOf("%")?parseFloat(s)*d/100:parseFloat(s)||0;return c?(u.left+p)/zt.innerWidth:(u.top+p)/zt.innerHeight},o.killAll=function(a){if(Pt.slice(0).forEach(function(c){return c.vars.id!=="ScrollSmoother"&&c.kill()}),a!==!0){var s=sl.killAll||[];sl={},s.forEach(function(c){return c()})}},o})();Bt.version="3.15.0";Bt.saveStyles=function(o){return o?Tf(o).forEach(function(e){if(e&&e.style){var n=Sa.indexOf(e);n>=0&&Sa.splice(n,5),Sa.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ft.core.getCache(e),iv())}}):Sa};Bt.revert=function(o,e){return Zv(!o,e)};Bt.create=function(o,e){return new Bt(o,e)};Bt.refresh=function(o){return o?Ku(!0):(pc||Bt.register())&&qo(!0)};Bt.update=function(o){return++Ft.cache&&ms(o===!0?2:0)};Bt.clearScrollMemory=aA;Bt.maxScroll=function(o,e){return zr(o,e?qi:ai)};Bt.getScrollFunc=function(o,e){return fo(ea(o),e?qi:ai)};Bt.getById=function(o){return rv[o]};Bt.getAll=function(){return Pt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Bt.isScrolling=function(){return!!Ka};Bt.snapDirectional=qv;Bt.addEventListener=function(o,e){var n=sl[o]||(sl[o]=[]);~n.indexOf(e)||n.push(e)};Bt.removeEventListener=function(o,e){var n=sl[o],a=n&&n.indexOf(e);a>=0&&n.splice(a,1)};Bt.batch=function(o,e){var n=[],a={},s=e.interval||.016,c=e.batchMax||1e9,u=function(m,_){var g=[],v=[],x=ft.delayedCall(s,function(){_(g,v),g=[],v=[]}).pause();return function(E){g.length||x.restart(!0),g.push(E.trigger),v.push(E),c<=g.length&&x.progress(1)}},d;for(d in e)a[d]=d.substr(0,2)==="on"&&Ni(e[d])&&d!=="onRefreshInit"?u(d,e[d]):e[d];return Ni(c)&&(c=c(),di(Bt,"refresh",function(){return c=e.batchMax()})),Tf(o).forEach(function(p){var m={};for(d in a)m[d]=a[d];m.trigger=p,n.push(Bt.create(m))}),n};var jE=function(e,n,a,s){return n>s?e(s):n<0&&e(0),a>s?(s-n)/(a-n):a<0?n/(n-a):1},Y_=function o(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Wn.isTouch?" pinch-zoom":""):"none",e===Ea&&o(ln,n)},Lh={auto:1,scroll:1},FP=function(e){var n=e.event,a=e.target,s=e.axis,c=(n.changedTouches?n.changedTouches[0]:n).target,u=c._gsap||ft.core.getCache(c),d=wi(),p;if(!u._isScrollT||d-u._isScrollT>2e3){for(;c&&c!==ln&&(c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth||!(Lh[(p=Ya(c)).overflowY]||Lh[p.overflowX]));)c=c.parentNode;u._isScroll=c&&c!==a&&!rl(c)&&(Lh[(p=Ya(c)).overflowY]||Lh[p.overflowX]),u._isScrollT=d}(u._isScroll||s==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},oA=function(e,n,a,s){return Wn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:s=s&&FP,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return a&&di(hn,Wn.eventTypes[0],QE,!1,!0)},onDisable:function(){return fi(hn,Wn.eventTypes[0],QE,!0)}})},BP=/(input|label|select|textarea)/i,KE,QE=function(e){var n=BP.test(e.target.tagName);(n||KE)&&(e._gsapAllow=!0,KE=n)},HP=function(e){ko(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,a=n.normalizeScrollX,s=n.momentum,c=n.allowNestedScroll,u=n.onRelease,d,p,m=ea(e.target)||Ea,_=ft.core.globals().ScrollSmoother,g=_&&_.get(),v=Qs&&(e.content&&ea(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),x=fo(m,ai),E=fo(m,qi),b=1,S=(Wn.isTouch&&zt.visualViewport?zt.visualViewport.scale*zt.visualViewport.width:zt.outerWidth)/zt.innerWidth,y=0,L=Ni(s)?function(){return s(d)}:function(){return s||2.8},z,C,R=oA(m,e.type,!0,c),O=function(){return C=!1},w=Dr,T=Dr,D=function(){p=zr(m,ai),T=af(Qs?1:0,p),a&&(w=af(0,zr(m,qi))),z=el},I=function(){v._gsap.y=Zu(parseFloat(v._gsap.y)+x.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},V=function(){if(C){requestAnimationFrame(O);var te=Zu(d.deltaY/2),ne=T(x.v-te);if(v&&ne!==x.v+x.offset){x.offset=ne-x.v;var P=Zu((parseFloat(v&&v._gsap.y)||0)-x.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",v._gsap.y=P+"px",x.cacheID=Ft.cache,ms()}return!0}x.offset&&I(),C=!0},H,q,W,j,X=function(){D(),H.isActive()&&H.vars.scrollY>p&&(x()>p?H.progress(1)&&x(p):H.resetTo("scrollY",p))};return v&&ft.set(v,{y:"+=0"}),e.ignoreCheck=function(G){return Qs&&G.type==="touchmove"&&V()||b>1.05&&G.type!=="touchstart"||d.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){C=!1;var G=b;b=Zu((zt.visualViewport&&zt.visualViewport.scale||1)/S),H.pause(),G!==b&&Y_(m,b>1.01?!0:a?!1:"x"),q=E(),W=x(),D(),z=el},e.onRelease=e.onGestureStart=function(G,te){if(x.offset&&I(),!te)j.restart(!0);else{Ft.cache++;var ne=L(),P,me;a&&(P=E(),me=P+ne*.05*-G.velocityX/.227,ne*=jE(E,P,me,zr(m,qi)),H.vars.scrollX=w(me)),P=x(),me=P+ne*.05*-G.velocityY/.227,ne*=jE(x,P,me,zr(m,ai)),H.vars.scrollY=T(me),H.invalidate().duration(ne).play(.01),(Qs&&H.vars.scrollY>=p||P>=p-1)&&ft.to({},{onUpdate:X,duration:ne})}u&&u(G)},e.onWheel=function(){H._ts&&H.pause(),wi()-y>1e3&&(z=0,y=wi())},e.onChange=function(G,te,ne,P,me){if(el!==z&&D(),te&&a&&E(w(P[2]===te?q+(G.startX-G.x):E()+te-P[1])),ne){x.offset&&I();var Fe=me[2]===ne,Le=Fe?W+G.startY-G.y:x()+ne-me[1],k=T(Le);Fe&&Le!==k&&(W+=k-Le),x(k)}(ne||te)&&ms()},e.onEnable=function(){Y_(m,a?!1:"x"),Bt.addEventListener("refresh",X),di(zt,"resize",X),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=E.smooth=!1),R.enable()},e.onDisable=function(){Y_(m,!0),fi(zt,"resize",X),Bt.removeEventListener("refresh",X),R.kill()},e.lockAxis=e.lockAxis!==!1,d=new Wn(e),d.iOS=Qs,Qs&&!x()&&x(1),Qs&&ft.ticker.add(Dr),j=d._dc,H=ft.to(d,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sA(x,x(),function(){return H.pause()})},onUpdate:ms,onComplete:j.vars.onComplete}),d};Bt.sort=function(o){if(Ni(o))return Pt.sort(o);var e=zt.pageYOffset||0;return Bt.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+zt.innerHeight}),Pt.sort(o||function(n,a){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};Bt.observe=function(o){return new Wn(o)};Bt.normalizeScroll=function(o){if(typeof o>"u")return Xi;if(o===!0&&Xi)return Xi.enable();if(o===!1){Xi&&Xi.kill(),Xi=o;return}var e=o instanceof Wn?o:HP(o);return Xi&&Xi.target===e.target&&Xi.kill(),rl(e.target)&&(Xi=e),e};Bt.core={_getVelocityProp:ev,_inputObserver:oA,_scrollers:Ft,_proxies:Br,bridge:{ss:function(){Ka||ol("scrollStart"),Ka=wi()},ref:function(){return Ri}}};jT()&&ft.registerPlugin(Bt);op.registerPlugin(Bt);const GP=[{label:"Themes",href:"#themes"},{label:"Dates",href:"#timeline"},{label:"Prizes & Fees",href:"#fees"},{label:"FAQ",href:"#faq"}],VP=["Intelligent","Battery Cell 4.0","Hackathon 2026"];function kP(){const o=qe.useRef(null),[e,n]=qe.useState(120);return qe.useEffect(()=>{var d;const a=o.current,s=a==null?void 0:a.parentElement;if(!a||!s)return;const c=()=>{const p=parseFloat(getComputedStyle(a).fontSize)||120,m=Math.max(...Array.from(a.children).map(g=>g.offsetWidth),1),_=p*s.clientWidth/m;Math.abs(_-p)>.5&&n(_)},u=new ResizeObserver(c);return u.observe(s),(d=document.fonts)==null||d.ready.then(c),c(),()=>u.disconnect()},[]),[o,e]}function XP(o,e){qe.useEffect(()=>{const n=o.current;if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=op.context(()=>{op.fromTo(n.querySelectorAll(".site-footer__char"),{willChange:"opacity, transform",opacity:0,yPercent:120,scaleY:2.3,scaleX:.7,transformOrigin:"50% 0%"},{duration:1,ease:"back.inOut(2)",opacity:1,yPercent:0,scaleY:1,scaleX:1,stagger:.03,scrollTrigger:{trigger:n,start:"center bottom+=50%",end:"clamp(bottom bottom-=40%)",scrub:!0}})},n);return()=>a.revert()},[o]),qe.useEffect(()=>{Bt.refresh()},[e])}function WP(){const[o,e]=kP();return XP(o,e),F.jsx("div",{className:"ground",id:"register",children:F.jsxs("footer",{className:"site-footer",children:[F.jsxs("div",{className:"site-footer__bar",children:[F.jsxs("p",{className:"site-footer__credit",children:["MADE BY"," ",F.jsxs("a",{href:"https://github.com/Dubey404aasutosh",target:"_blank",rel:"noopener noreferrer",className:"site-footer__credit-link","aria-label":"DUBEYAASUTOSH on GitHub (opens in a new tab)",children:[F.jsx(nO,{size:14,strokeWidth:2,"aria-hidden":"true"}),"DUBEYAASUTOSH"]})]}),F.jsx("nav",{className:"site-footer__links","aria-label":"Footer",children:GP.map(n=>F.jsx("a",{href:n.href,className:"site-footer__link",children:n.label},n.href))})]}),F.jsx("a",{href:"#top",className:"site-footer__wordmark-link","aria-label":"Intelligent Battery Cell 4.0 Hackathon 2026, back to top",children:F.jsx("p",{className:"site-footer__wordmark",ref:o,style:{fontSize:`${e}px`},"aria-hidden":"true",children:VP.map(n=>F.jsx("span",{className:"site-footer__wordmark-line",children:Array.from(n).map((a,s)=>F.jsx("span",{className:"site-footer__char",children:a===" "?" ":a},s))},n))})})]})})}const YP={paper:"#f4e7df",ink:"#0b215d",sun:"#2f5090",core:"#0f2662",glow:"#f4e7df"},qP='"Fraunces", "Playfair Display", "Iowan Old Style", Georgia, "Times New Roman", serif',ZP='"JetBrains Mono", "SF Mono", ui-monospace, Menlo, Consolas, monospace',q_={" ":[44,[]],A:[86,["M14 88 C20 62 30 30 43 12 C56 30 66 62 72 88","M27 62 C38 60 50 60 60 62"]],B:[74,["M17 88 V12","M17 12 H35 C51 12 57 21 57 31 C57 42 48 48 33 48 H17","M17 48 H39 C55 48 62 58 62 68 C62 81 52 88 37 88 H17"]],C:[78,["M65 23 C58 15 50 12 42 12 C24 12 13 29 13 50 C13 72 25 88 43 88 C53 88 61 84 67 76"]],D:[82,["M17 88 V12","M17 12 H33 C57 12 70 29 70 50 C70 72 56 88 33 88 H17"]],E:[66,["M55 12 H17 V88 H56","M17 49 H47"]],F:[62,["M53 12 H17 V88","M17 49 H45"]],G:[84,["M67 24 C59 15 51 12 42 12 C24 12 13 29 13 50 C13 72 25 88 44 88 C61 88 71 77 71 60 V53 H47"]],H:[80,["M15 12 V88","M65 12 V88","M15 50 H65"]],I:[36,["M18 12 V88"]],J:[62,["M49 12 V63 C49 79 41 88 30 88 C21 88 14 83 12 73"]],K:[76,["M17 12 V88","M61 12 L19 55","M31 44 L63 88"]],L:[62,["M17 12 V88 H53"]],M:[100,["M14 88 C15 62 17 34 21 13 L50 57 L79 13 C83 34 85 62 86 88"]],N:[82,["M15 88 V13 L67 87 V12"]],O:[88,["M44 12 C64 12 76 29 76 50 C76 72 63 88 44 88 C25 88 12 72 12 50 C12 29 25 12 44 12 Z"]],P:[72,["M17 88 V12 H35 C52 12 60 22 60 34 C60 47 51 56 35 56 H17"]],Q:[88,["M44 12 C64 12 76 29 76 50 C76 72 63 88 44 88 C25 88 12 72 12 50 C12 29 25 12 44 12 Z","M53 65 L77 89"]],R:[76,["M17 88 V12 H35 C52 12 60 22 60 33 C60 46 51 54 35 54 H19","M37 54 C46 64 56 76 63 88"]],S:[70,["M58 22 C52 15 45 12 36 12 C23 12 14 20 14 30 C14 42 24 46 36 50 C50 54 58 59 58 70 C58 82 48 88 36 88 C26 88 17 84 12 76"]],T:[76,["M12 14 C28 13 46 13 64 14","M38 14 V88"]],U:[80,["M14 12 V57 C14 77 25 88 40 88 C56 88 66 77 66 57 V12"]],V:[80,["M12 12 C22 40 32 66 40 88 C48 66 58 40 68 12"]],W:[110,["M12 12 L30 88 L55 31 L80 88 L98 12"]],X:[76,["M14 12 L62 88","M62 12 L14 88"]],Y:[76,["M12 12 L38 50 L64 12","M38 50 V88"]],Z:[72,["M14 13 H58 L14 87 H59"]],0:[70,["M35 12 C50 12 58 28 58 50 C58 72 50 88 35 88 C20 88 12 72 12 50 C12 28 20 12 35 12 Z"]],1:[50,["M14 27 L31 12 V88"]],2:[68,["M14 28 C16 18 24 12 34 12 C46 12 56 20 56 32 C56 46 44 56 14 88 H58"]],3:[66,["M14 20 C20 14 27 12 34 12 C46 12 54 20 54 30 C54 42 44 48 30 48 C46 48 56 56 56 68 C56 80 46 88 32 88 C24 88 16 84 12 78"]],4:[70,["M45 88 V12 L12 64 H60"]],5:[66,["M54 12 H21 L17 46 C22 42 28 40 34 40 C48 40 56 50 56 64 C56 78 46 88 32 88 C24 88 16 84 12 78"]],6:[68,["M52 16 C46 13 41 12 36 12 C20 12 12 30 12 54 C12 76 22 88 36 88 C48 88 56 80 56 66 C56 52 48 44 36 44 C24 44 14 52 12 60"]],7:[66,["M12 12 H56 L26 88"]],8:[66,["M33 48 C20 48 14 40 14 30 C14 20 22 12 33 12 C44 12 52 20 52 30 C52 40 46 48 33 48 C18 48 12 58 12 68 C12 80 22 88 33 88 C44 88 54 80 54 68 C54 58 48 48 33 48 Z"]],9:[68,["M56 40 C54 50 46 56 34 56 C20 56 12 46 12 34 C12 20 22 12 34 12 C48 12 56 24 56 44 C56 70 46 88 30 88 C24 88 18 86 14 82"]],"%":[74,["M60 14 L14 86","M18 18 V21","M56 79 V82"]],"!":[36,["M18 12 V60","M18 86 V88"]],"?":[64,["M14 26 C16 16 24 12 33 12 C45 12 51 20 51 29 C51 41 33 45 33 61","M33 86 V88"]],".":[36,["M18 86 V88"]],",":[36,["M19 84 L14 96"]],"'":[32,["M16 12 V30"]],"-":[60,["M14 52 H46"]],"♥":[92,["M46 86 C30 72 12 58 12 36 C12 20 22 12 33 12 C41 12 45 18 46 27 C47 18 51 12 59 12 C70 12 80 20 80 36 C80 58 62 72 46 86 Z"]]};function lA(o){const e=o.normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase();return q_[e]??q_[o]??q_[" "]}const Sc=o=>o<=0?0:o>=1?1:o,Z_=[[0,0],[.22,.28],[.33,.31],[.6,.7],[.7,.73],[1,1]];function jP(o){if(o<=0)return 0;if(o>=1)return 1;for(let e=0;e<Z_.length-1;e++){const n=Z_[e],a=Z_[e+1];if(o<=a[0]){const s=(o-n[0])/(a[0]-n[0]);return n[1]+(a[1]-n[1])*(1-Math.pow(1-s,3))}}return 1}function KP(o,e,n){return Sc(Sc(o)*n-e)}function QP(o){return String(Math.round(Math.min(100,Math.max(0,o))))+"%"}function lv(o){const e=Math.sin(o*12.9898+78.233)*43758.5453;return e-Math.floor(e)}function Zh(o,e,n,a){const s=o.match(/[MLHVCZ]|-?\d*\.?\d+/g)||[];let c="",u="",d=0,p=0;const m=(g,v)=>{d=g,p=v;let x=e[0]*g+e[2]*v+e[4],E=e[1]*g+e[3]*v+e[5];if(n){const b=g*7.13+v*3.71+a*17.9;x+=(lv(b)-.5)*2*n,E+=(lv(b+41.3)-.5)*2*n}return x.toFixed(1)+" "+E.toFixed(1)};let _=0;for(;_<s.length;){const g=s[_];if(/[MLHVCZ]/.test(g)){u=g,_++,g==="Z"&&(c+="Z");continue}const v=x=>parseFloat(s[_+x]);if(u==="M"||u==="L")c+=(c?" ":"")+(u==="M"?"M":"L")+m(v(0),v(1)),u==="M"&&(u="L"),_+=2;else if(u==="H")c+=" L"+m(v(0),p),_+=1;else if(u==="V")c+=" L"+m(d,v(0)),_+=1;else if(u==="C"){const x=m(v(0),v(1)),E=m(v(2),v(3));c+=" C"+x+" "+E+" "+m(v(4),v(5)),_+=6}else _++}return c}function JE(o,e,n,a){const s=a/76,c=Array.from(o).map(lA),u=c.reduce((m,_)=>m+_[0],0)*s;let d=e-u/2,p="";for(const m of c){for(const _ of m[1])p+=(p?" ":"")+Zh(_,[s,0,0,s,d,n-50*s],0,0);d+=m[0]*s}return{d:p,width:u}}function JP(o,e,n,a,s){const c=Math.max(1,o.length),u=Math.min(n,Math.max(e*1.6,260)),d=n-u,p=Math.min(u*.6,e*(n>e*1.1?.66:.46)),m=Math.max(3.6,Math.min(4.8,u/e*2.6)),_=e/2,g=n+p*.02,v=e*.035,x=4,E=o.reduce((O,w)=>O+w,0)+x*(c-1),b=Math.max(.05,Math.min((e-v*2)/E,u/210)),S=22*b*a,y=E*b,L=p+u*.045,z=n-u*.035,C=[];let R=_-y/2;for(let O=0;O<c;O++){const w=o[O]*b,T=R+w/2;R+=w+x*b;const D=(T-_)/(e/2),I=d+u*(.05+.04*D*D);let V=T,H=z,q=0,W=0;for(let Le=0;Le<4;Le++){const k=V-_,le=Math.asin(Math.max(-1,Math.min(1,k/L)));q=Math.max(-.62,Math.min(.62,le*.42*s));const Ee=w/2*Math.abs(Math.sin(le-q));H=Math.min(g-Math.sqrt(Math.max(0,L*L-k*k))-Ee,z),W=(H-I)/Math.cos(q),W=Math.max(S+76*b*.6,Math.min(S+76*b*m,W)),V+=T-(V+Math.sin(q)*W/2)}const j=(W-S)/76,X=V+Math.sin(q)*W/2,G=H-Math.cos(q)*W/2,te=Math.cos(q),ne=Math.sin(q),P=-o[O]/2*b,me=-88*j-S/2,Fe=[b*te,b*ne,-j*ne,j*te,V+P*te-me*ne,H+P*ne+me*te];C.push({bx:V,by:H,t:q,sy:j,L:W,mx:X,my:G,m:Fe})}return{cx:_,cy:g,R:p,sx:b,stroke:S,top:d,F:u,letters:C}}const $P=`
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
`,e4=1700,t4=2800,n4=1500,i4=1500,a4=900,r4=125,$E=o=>o*180/Math.PI;function s4({children:o,loop:e=!1,progress:n,durationMs:a=4200,word:s="AMOUR",caption:c="loading, with love",palette:u,weight:d=1,fan:p=1,boil:m=1,sway:_=1,counter:g=!0,fontFamily:v=qP,height:x="100svh",onComplete:E,className:b=""}){const[S,y]=qe.useState("load"),[L,z]=qe.useState(0),[C,R]=qe.useState(0),[O,w]=qe.useState({w:1280,h:800}),T=qe.useId().replace(/[^a-zA-Z0-9_-]/g,""),D=qe.useRef(null),I=qe.useRef(null),V=qe.useRef([]),H=qe.useRef([]),q=qe.useRef(null),W=qe.useRef([]),j=qe.useRef(0),X=qe.useRef(!1),G=qe.useRef(n);G.current=n;const te=qe.useRef(E);te.current=E;const ne={...YP,...u},P=qe.useMemo(()=>Array.from(s.trim()||" "),[s]),me=O.w,Fe=O.h,Le=qe.useMemo(()=>{const Be=P.map(lA),Z=JP(Be.map(xt=>xt[0]),me,Fe,Math.max(.2,d),Math.max(0,p)),Ne=Z.letters.map((xt,$e)=>{const vt=xt.mx-Z.cx,Q=xt.my-Z.cy,yt=Math.hypot(vt,Q)||1,rt=Math.max(me,Fe)*.75;return{...xt,strokes:Be[$e][1],fx:vt/yt*rt,fy:Q/yt*rt,fr:$E(xt.t)*1.6}}),dt=Math.hypot(Math.max(Z.cx,me-Z.cx),Z.cy);return{...Z,letters:Ne,cover:dt/Z.R*1.04}},[P,me,Fe,d,p]),k=qe.useRef(Le);k.current=Le,Le.letters.length;const le=Le.R;qe.useEffect(()=>{const Be=D.current;if(!Be)return;const Z=()=>{const dt=Be.getBoundingClientRect();dt.width>0&&dt.height>0&&w({w:Math.round(dt.width),h:Math.round(dt.height)})};if(Z(),typeof ResizeObserver>"u")return;const Ne=new ResizeObserver(Z);return Ne.observe(Be),()=>Ne.disconnect()},[]);const Ee=qe.useCallback(Be=>{j.current=Be;const Z=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Ne=k.current;Ne.letters.forEach((dt,xt)=>{const $e=KP(Be,xt,Ne.letters.length),vt=H.current[xt]||[],Q=Math.max(1,dt.strokes.length);vt.forEach((yt,rt)=>{if(!yt)return;if(Z){yt.style.strokeDashoffset="0",yt.style.opacity=$e>0?(.25+$e*.75).toFixed(3):"0";return}const B=Sc($e*Q-rt);yt.style.strokeDashoffset=(1-B).toFixed(4),yt.style.opacity=B>.002?"1":"0"})})},[]);qe.useEffect(()=>{Ee(j.current)},[Le,Ee]),qe.useEffect(()=>{if(S!=="load"&&S!=="set")return;const Be=D.current;let Z=0,Ne=S==="load"?0:1,dt=performance.now();const xt=dt,$e=C===0&&S==="load";let vt=-1;X.current=!1;const Q=yt=>{const rt=Math.min(64,yt-dt);if(dt=yt,S==="set")Ne=1-Sc((yt-xt)/i4),Ne=Ne*Ne*(3-2*Ne);else{const re=G.current;let ge=re!==void 0?Sc(re/100):jP((yt-xt)/Math.max(400,a));X.current&&(ge=1);const Ie=X.current?.14:re!==void 0?.1:1;Ne+=(ge-Ne)*Math.min(1,Ie*(rt/16.7)),ge-Ne<.002&&(Ne=ge)}Ee(Ne);const B=$e?Sc((yt-xt)/a4):1,A=(1-Math.pow(1-B,3))*(.5+.5*(1-Math.pow(1-Ne,2)));Be==null||Be.style.setProperty("--amr-rise",A.toFixed(4));const ie=Math.round(Ne*100);if(ie!==vt&&(vt=ie,z(ie)),S==="load"&&Ne>=1&&B>=1){y("bloom");return}if(S==="set"&&Ne<=0){R(re=>re+1),y("load");return}Z=requestAnimationFrame(Q)};return Z=requestAnimationFrame(Q),()=>cancelAnimationFrame(Z)},[S,C,a,Ee]),qe.useEffect(()=>{if(S==="bloom"){const Be=setTimeout(()=>y("hold"),e4);return()=>clearTimeout(Be)}if(S==="hold"){const Be=setTimeout(()=>y(e?"set":"lift"),t4);return()=>clearTimeout(Be)}if(S==="lift"){const Be=setTimeout(()=>{var Z;y("done"),(Z=te.current)==null||Z.call(te)},n4);return()=>clearTimeout(Be)}},[S,e]);const J=qe.useCallback((Be,Z)=>{const Ne=W.current[Be];Ne&&(Ne.vs+=7*Z,Ne.va+=(lv(Be*3.1+performance.now())-.5)*160*Z)},[]);qe.useEffect(()=>{if(S!=="bloom")return;const Be=k.current.letters.map((Z,Ne)=>setTimeout(()=>J(Ne,1),80+Ne*85));return()=>Be.forEach(clearTimeout)},[S,J]),qe.useEffect(()=>{const Be=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let Z=0,Ne=performance.now(),dt=0,xt=0,$e=0,vt=0,Q=0;const yt=rt=>{var Ve;const B=Math.min(.033,(rt-Ne)/1e3);Ne=rt;const A=k.current,ie=q.current,re=(Ve=D.current)==null?void 0:Ve.getBoundingClientRect(),ge=(re==null?void 0:re.width)||1,Ie=(re==null?void 0:re.height)||1,Pe=ie?ie.x/ge*2-1:Be?0:Math.sin(rt/2600)*.35,Se=ie?ie.y/Ie*2-1:0;dt+=(Pe-dt)*.06,xt+=(Se-xt)*.06;const ye=I.current;if(ye&&(ye.setAttribute("fx",(.5-dt*.16).toFixed(4)),ye.setAttribute("fy",(.5-Math.max(-1,xt)*.08).toFixed(4))),!Be){const et=ie&&rt-ie.t<120?ie.vx:0;$e+=(Math.max(-1,Math.min(1,et/2400))-$e)*.12;const Xe=Math.min(ge,Ie)*.24,ke=Math.max(0,_);for(;W.current.length<A.letters.length;)W.current.push({a:0,va:0,s:0,vs:0});if(A.letters.forEach((Re,nt)=>{const Ke=W.current[nt];let $=Math.sin(rt/900+nt*.8)*1.4*ke;if(ie){const He=ie.x-Re.mx,We=ie.y-Re.my;$=-(He/Xe)*Math.exp(-(He*He+We*We)/(2*Xe*Xe))*16*ke}$+=$e*9*ke,Ke.va+=(-(Ke.a-$)*70-Ke.va*7.5)*B,Ke.a+=Ke.va*B,Ke.vs+=(-Ke.s*210-Ke.vs*8)*B,Ke.s=Math.max(-.35,Math.min(.35,Ke.s+Ke.vs*B));const ze=V.current[nt];if(!ze)return;const Me=$E(Re.t);ze.setAttribute("transform","translate("+Re.bx.toFixed(1)+" "+Re.by.toFixed(1)+") rotate("+(Me+Ke.a).toFixed(2)+") scale("+(1+Ke.s*.5).toFixed(4)+" "+(1-Ke.s).toFixed(4)+") rotate("+(-Me).toFixed(2)+") translate("+(-Re.bx).toFixed(1)+" "+(-Re.by).toFixed(1)+")")}),m>0&&rt-vt>r4){vt=rt,Q=(Q+1)%3;const Re=A.stroke*.05*m;A.letters.forEach((nt,Ke)=>{const $=H.current[Ke]||[];nt.strokes.forEach((ze,Me)=>{var He;(He=$[Me])==null||He.setAttribute("d",Zh(ze,nt.m,Re,Q*7+1+Ke))})})}}Z=requestAnimationFrame(yt)};return Z=requestAnimationFrame(yt),()=>cancelAnimationFrame(Z)},[m,_]);const ce=()=>{S==="load"?X.current=!0:S==="bloom"?y("hold"):S==="hold"&&y(e?"set":"lift")},Ce=Be=>{const Z=D.current;if(!Z)return;const Ne=Z.getBoundingClientRect(),dt=Be.clientX-Ne.left,xt=Be.clientY-Ne.top,$e=performance.now(),vt=q.current,Q=vt?(dt-vt.x)/Math.max(1,$e-vt.t)*1e3:0;q.current={x:dt,y:xt,vx:vt?vt.vx*.5+Q*.5:0,t:$e}},Ge=()=>{q.current=null},ve=S==="load",Ue=Le.stroke*.05*m,lt=JE(QP(L),0,-le*.6,le*.25),ct=JE("♥",0,-le*.6,le*.34),mt=s.trim()||"Page";return F.jsxs("div",{ref:D,className:"amr-root "+b,"data-phase":S,style:{height:x,"--amr-rise":0,"--amr-r":le.toFixed(1)+"px","--amr-cover":Le.cover.toFixed(3),"--amr-paper":ne.paper,"--amr-ink":ne.ink,"--amr-glow":ne.glow,"--amr-serif":v,"--amr-mono":ZP},onPointerMove:Ce,onPointerLeave:Ge,children:[F.jsx("style",{children:$P}),!e&&o?F.jsx("div",{className:"amr-dest","data-active":S==="done","aria-hidden":S!=="done",children:o}):null,S!=="done"?F.jsxs("div",{className:"amr-gate",role:"progressbar","aria-label":mt+" is loading","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":L,"aria-valuetext":ve?L+"%":"Loaded. Press Enter to continue.",tabIndex:0,onClick:ce,onKeyDown:Be=>{(Be.key==="Enter"||Be.key===" ")&&(Be.preventDefault(),ce())},children:[F.jsx("div",{className:"amr-blush"}),F.jsxs("svg",{className:"amr-stage",viewBox:"0 0 "+me+" "+Fe,preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:[F.jsx("defs",{children:F.jsxs("radialGradient",{id:T+"-sun",ref:I,cx:"0.5",cy:"0.5",r:"0.5",fx:"0.5",fy:"0.5",children:[F.jsx("stop",{offset:"0",stopColor:ne.core}),F.jsx("stop",{offset:"0.55",stopColor:ne.core,stopOpacity:"0.55"}),F.jsx("stop",{offset:"1",stopColor:ne.core,stopOpacity:"0"})]})}),F.jsx("g",{transform:"translate("+Le.cx.toFixed(1)+" "+Le.cy.toFixed(1)+")",children:F.jsxs("g",{className:"amr-rise",children:[F.jsxs("g",{className:"amr-sun-scale",children:[F.jsx("circle",{className:"amr-ring",r:le,strokeWidth:Math.max(1.5,Le.stroke*.12)}),F.jsx("circle",{className:"amr-ring amr-ring-2",r:le,strokeWidth:Math.max(1.5,Le.stroke*.09)}),F.jsx("circle",{className:"amr-ring amr-ring-3",r:le,strokeWidth:Math.max(1,Le.stroke*.06)}),F.jsxs("g",{className:"amr-sun",children:[F.jsx("circle",{r:le,fill:ne.sun}),F.jsx("circle",{r:le,fill:"url(#"+T+"-sun)"})]})]}),g?F.jsx("path",{className:"amr-count",d:lt.d,strokeWidth:Math.max(3,le*.25*.24)}):null,F.jsx("path",{className:"amr-heart",d:ct.d,pathLength:1,strokeWidth:Math.max(3,le*.34*.2)}),c?F.jsx("text",{className:"amr-caption",x:0,y:-le*.25,textAnchor:"middle",fontSize:Math.max(12,le*.075),children:c}):null,F.jsx("text",{className:"amr-hint",x:0,y:-le*.12,textAnchor:"middle",fontSize:Math.max(9,le*.036),children:e?"click to replay":"click to enter"})]})}),F.jsx("g",{className:"amr-word",strokeWidth:Le.stroke.toFixed(2),children:Le.letters.map((Be,Z)=>F.jsx("g",{className:"amr-fly",style:{"--fx":Be.fx.toFixed(1)+"px","--fy":Be.fy.toFixed(1)+"px","--fr":Be.fr.toFixed(1)+"deg"},children:F.jsxs("g",{ref:Ne=>{V.current[Z]=Ne},className:"amr-letter",onPointerEnter:()=>J(Z,.5),onClick:Ne=>{Ne.stopPropagation(),J(Z,1.1)},children:[Be.strokes.map((Ne,dt)=>F.jsx("path",{ref:xt=>{H.current[Z]||(H.current[Z]=[]),H.current[Z][dt]=xt},d:Zh(Ne,Be.m,Ue,1+Z),pathLength:1,strokeDasharray:"1 1",style:{strokeDashoffset:1,opacity:0}},dt)),Be.strokes.map((Ne,dt)=>F.jsx("path",{className:"amr-hit",d:Zh(Ne,Be.m,0,0),strokeWidth:Le.stroke*1.6},"hit"+dt))]})},Z))},C)]}),F.jsxs("svg",{className:"amr-grain","aria-hidden":"true",children:[F.jsxs("filter",{id:T+"-grain",children:[F.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.85",numOctaves:2,stitchTiles:"stitch"}),F.jsx("feColorMatrix",{type:"saturate",values:"0"})]}),F.jsx("rect",{width:"100%",height:"100%",filter:"url(#"+T+"-grain)"})]}),F.jsx("div",{className:"amr-frame"}),F.jsx("span",{className:"amr-sr","aria-live":"polite",children:ve?"":mt+" — "+c})]}):null]})}const cA="ibc4-preloader-seen";function o4(){try{return sessionStorage.getItem(cA)==="1"}catch{return!1}}function l4(){const[o,e]=qe.useState(()=>!o4());if(qe.useEffect(()=>{if(!o)return;const a=document.documentElement,s=a.style.overflow;return a.style.overflow="hidden",a.dataset.preloading="1",()=>{a.style.overflow=s,delete a.dataset.preloading}},[o]),!o)return null;const n=()=>{try{sessionStorage.setItem(cA,"1")}catch{}e(!1)};return F.jsx("div",{className:"site-preloader",children:F.jsx(s4,{className:"site-preloader__poster",word:"CELL 4.0",caption:"Intelligent Battery Hackathon 2026",durationMs:2600,palette:{paper:"#EAE0BF",ink:"#232424",sun:"#8DC0DE",core:"#3d7aa3",glow:"#EAE0BF"},fontFamily:"'Playfair Display', Georgia, serif",height:"100svh",onComplete:n})})}function c4(){return F.jsxs("div",{className:"page-shell",children:[F.jsx(l4,{}),F.jsx(TU,{}),F.jsx(AU,{}),F.jsx(CU,{}),F.jsx(UU,{}),F.jsx("section",{className:"article-intro","aria-label":"Hackathon introduction",children:F.jsxs("div",{className:"article-intro__inner",children:[F.jsx(N_,{as:"p",className:"article-intro__lead",text:"Intelligent Battery Cell 4.0 Hackathon 2026 will bring participants together to develop innovative solutions for the future of battery technology.",highlightWord:"innovative"}),F.jsx(N_,{as:"p",className:"article-intro__copy",text:"The event is focused on using AI to advance battery safety, sustainability, and indigenous innovation."}),F.jsx(N_,{as:"p",className:"article-intro__copy",text:"Open to students and research scholars, student start-ups, and MSMEs and registered start-ups. Shortlisted applicants receive mentoring before the Grand Finale, with cash prizes of up to ₹2 lakh, certificates for the winners, and incubation opportunities for participants."})]})}),F.jsx(OU,{}),F.jsx(HU,{}),F.jsx(PU,{}),F.jsx(IU,{}),F.jsx(GU,{}),F.jsx(kU,{}),F.jsx(YU,{}),F.jsx(ZU,{}),F.jsx(KU,{}),F.jsx(WP,{})]})}$C.createRoot(document.getElementById("root")).render(F.jsx(tb.StrictMode,{children:F.jsx(c4,{})}));
