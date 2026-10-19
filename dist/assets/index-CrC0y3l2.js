(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function fx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ah={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function NM(){if(ev)return nl;ev=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return nl.Fragment=t,nl.jsx=i,nl.jsxs=i,nl}var tv;function DM(){return tv||(tv=1,ah.exports=NM()),ah.exports}var T=DM(),rh={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function UM(){if(nv)return ot;nv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function C(B){return B===null||typeof B!="object"?null:(B=E&&B[E]||B["@@iterator"],typeof B=="function"?B:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function I(B,me,Ae){this.props=B,this.context=me,this.refs=S,this.updater=Ae||U}I.prototype.isReactComponent={},I.prototype.setState=function(B,me){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,me,"setState")},I.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function Y(){}Y.prototype=I.prototype;function w(B,me,Ae){this.props=B,this.context=me,this.refs=S,this.updater=Ae||U}var L=w.prototype=new Y;L.constructor=w,y(L,I.prototype),L.isPureReactComponent=!0;var D=Array.isArray;function P(){}var b={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function H(B,me,Ae){var j=Ae.ref;return{$$typeof:o,type:B,key:me,ref:j!==void 0?j:null,props:Ae}}function V(B,me){return H(B.type,me,B.props)}function $(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function ne(B){var me={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ae){return me[Ae]})}var K=/\/+/g;function ee(B,me){return typeof B=="object"&&B!==null&&B.key!=null?ne(""+B.key):me.toString(36)}function X(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(me){B.status==="pending"&&(B.status="fulfilled",B.value=me)},function(me){B.status==="pending"&&(B.status="rejected",B.reason=me)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function q(B,me,Ae,j,de){var be=typeof B;(be==="undefined"||be==="boolean")&&(B=null);var Ce=!1;if(B===null)Ce=!0;else switch(be){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(B.$$typeof){case o:case t:Ce=!0;break;case x:return Ce=B._init,q(Ce(B._payload),me,Ae,j,de)}}if(Ce)return de=de(B),Ce=j===""?"."+ee(B,0):j,D(de)?(Ae="",Ce!=null&&(Ae=Ce.replace(K,"$&/")+"/"),q(de,me,Ae,"",function(Vt){return Vt})):de!=null&&($(de)&&(de=V(de,Ae+(de.key==null||B&&B.key===de.key?"":(""+de.key).replace(K,"$&/")+"/")+Ce)),me.push(de)),1;Ce=0;var ve=j===""?".":j+":";if(D(B))for(var we=0;we<B.length;we++)j=B[we],be=ve+ee(j,we),Ce+=q(j,me,Ae,be,de);else if(we=C(B),typeof we=="function")for(B=we.call(B),we=0;!(j=B.next()).done;)j=j.value,be=ve+ee(j,we++),Ce+=q(j,me,Ae,be,de);else if(be==="object"){if(typeof B.then=="function")return q(X(B),me,Ae,j,de);throw me=String(B),Error("Objects are not valid as a React child (found: "+(me==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":me)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function ue(B,me,Ae){if(B==null)return B;var j=[],de=0;return q(B,j,"","",function(be){return me.call(Ae,be,de++)}),j}function le(B){if(B._status===-1){var me=B._result,Ae=me();Ae.then(function(j){(B._status===0||B._status===-1)&&(B._status=1,B._result=j,Ae.status===void 0&&(Ae.status="fulfilled",Ae.value=j))},function(j){(B._status===0||B._status===-1)&&(B._status=2,B._result=j,Ae.status===void 0&&(Ae.status="rejected",Ae.reason=j))}),B._status===-1&&(B._status=0,B._result=Ae)}if(B._status===1)return B._result.default;throw B._result}var ce=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var me=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(me))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function xe(B){var me=b.T,Ae={};Ae.types=me!==null?me.types:null,b.T=Ae;try{var j=B(),de=b.S;de!==null&&de(Ae,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(P,ce)}catch(be){ce(be)}finally{me!==null&&Ae.types!==null&&(me.types=Ae.types),b.T=me}}function Xe(B){var me=b.T;if(me!==null){var Ae=me.types;Ae===null?me.types=[B]:Ae.indexOf(B)===-1&&Ae.push(B)}else xe(Xe.bind(null,B))}var Ve={map:ue,forEach:function(B,me,Ae){ue(B,function(){me.apply(this,arguments)},Ae)},count:function(B){var me=0;return ue(B,function(){me++}),me},toArray:function(B){return ue(B,function(me){return me})||[]},only:function(B){if(!$(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ot.Activity=_,ot.Children=Ve,ot.Component=I,ot.Fragment=i,ot.Profiler=c,ot.PureComponent=w,ot.StrictMode=s,ot.Suspense=g,ot.ViewTransition=v,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,ot.__COMPILER_RUNTIME={__proto__:null,c:function(B){return b.H.useMemoCache(B)}},ot.addTransitionType=Xe,ot.cache=function(B){return function(){return B.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(B,me,Ae){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var j=y({},B.props),de=B.key;if(me!=null)for(be in me.key!==void 0&&(de=""+me.key),me)!N.call(me,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&me.ref===void 0||(j[be]=me[be]);var be=arguments.length-2;if(be===1)j.children=Ae;else if(1<be){for(var Ce=Array(be),ve=0;ve<be;ve++)Ce[ve]=arguments[ve+2];j.children=Ce}return H(B.type,de,j)},ot.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},ot.createElement=function(B,me,Ae){var j,de={},be=null;if(me!=null)for(j in me.key!==void 0&&(be=""+me.key),me)N.call(me,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(de[j]=me[j]);var Ce=arguments.length-2;if(Ce===1)de.children=Ae;else if(1<Ce){for(var ve=Array(Ce),we=0;we<Ce;we++)ve[we]=arguments[we+2];de.children=ve}if(B&&B.defaultProps)for(j in Ce=B.defaultProps,Ce)de[j]===void 0&&(de[j]=Ce[j]);return H(B,be,de)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(B){return{$$typeof:h,render:B}},ot.isValidElement=$,ot.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:le}},ot.memo=function(B,me){return{$$typeof:p,type:B,compare:me===void 0?null:me}},ot.startTransition=xe,ot.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},ot.use=function(B){return b.H.use(B)},ot.useActionState=function(B,me,Ae){return b.H.useActionState(B,me,Ae)},ot.useCallback=function(B,me){return b.H.useCallback(B,me)},ot.useContext=function(B){return b.H.useContext(B)},ot.useDebugValue=function(){},ot.useDeferredValue=function(B,me){return b.H.useDeferredValue(B,me)},ot.useEffect=function(B,me){return b.H.useEffect(B,me)},ot.useEffectEvent=function(B){return b.H.useEffectEvent(B)},ot.useId=function(){return b.H.useId()},ot.useImperativeHandle=function(B,me,Ae){return b.H.useImperativeHandle(B,me,Ae)},ot.useInsertionEffect=function(B,me){return b.H.useInsertionEffect(B,me)},ot.useLayoutEffect=function(B,me){return b.H.useLayoutEffect(B,me)},ot.useMemo=function(B,me){return b.H.useMemo(B,me)},ot.useOptimistic=function(B,me){return b.H.useOptimistic(B,me)},ot.useReducer=function(B,me,Ae){return b.H.useReducer(B,me,Ae)},ot.useRef=function(B){return b.H.useRef(B)},ot.useState=function(B){return b.H.useState(B)},ot.useSyncExternalStore=function(B,me,Ae){return b.H.useSyncExternalStore(B,me,Ae)},ot.useTransition=function(){return b.H.useTransition()},ot.version="19.3.1",ot}var iv;function Lp(){return iv||(iv=1,rh.exports=UM()),rh.exports}var gt=Lp();const dx=fx(gt);var sh={exports:{}},il={},oh={exports:{}},lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function LM(){return av||(av=1,(function(o){function t(X,q){var ue=X.length;X.push(q);e:for(;0<ue;){var le=ue-1>>>1,ce=X[le];if(0<c(ce,q))X[le]=q,X[ue]=ce,ue=le;else break e}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var q=X[0],ue=X.pop();if(ue!==q){X[0]=ue;e:for(var le=0,ce=X.length,xe=ce>>>1;le<xe;){var Xe=2*(le+1)-1,Ve=X[Xe],B=Xe+1,me=X[B];if(0>c(Ve,ue))B<ce&&0>c(me,Ve)?(X[le]=me,X[B]=ue,le=B):(X[le]=Ve,X[Xe]=ue,le=Xe);else if(B<ce&&0>c(me,ue))X[le]=me,X[B]=ue,le=B;else break e}}return q}function c(X,q){var ue=X.sortIndex-q.sortIndex;return ue!==0?ue:X.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],p=[],x=1,_=null,v=3,E=!1,C=!1,U=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function w(X){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=X)s(p),q.sortIndex=q.expirationTime,t(g,q);else break;q=i(p)}}function L(X){if(U=!1,w(X),!C)if(i(g)!==null)C=!0,D||(D=!0,$());else{var q=i(p);q!==null&&ee(L,q.startTime-X)}}var D=!1,P=-1,b=5,N=-1;function H(){return y?!0:!(o.unstable_now()-N<b)}function V(){if(y=!1,D){var X=o.unstable_now();N=X;var q=!0;try{e:{C=!1,U&&(U=!1,I(P),P=-1),E=!0;var ue=v;try{t:{for(w(X),_=i(g);_!==null&&!(_.expirationTime>X&&H());){var le=_.callback;if(typeof le=="function"){_.callback=null,v=_.priorityLevel;var ce=le(_.expirationTime<=X);if(X=o.unstable_now(),typeof ce=="function"){_.callback=ce,w(X),q=!0;break t}_===i(g)&&s(g),w(X)}else s(g);_=i(g)}if(_!==null)q=!0;else{var xe=i(p);xe!==null&&ee(L,xe.startTime-X),q=!1}}break e}finally{_=null,v=ue,E=!1}q=void 0}}finally{q?$():D=!1}}}var $;if(typeof Y=="function")$=function(){Y(V)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,K=ne.port2;ne.port1.onmessage=V,$=function(){K.postMessage(null)}}else $=function(){S(V,0)};function ee(X,q){P=S(function(){X(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var ue=v;v=q;try{return X()}finally{v=ue}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(X,q){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ue=v;v=X;try{return q()}finally{v=ue}},o.unstable_scheduleCallback=function(X,q,ue){var le=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?le+ue:le):ue=le,X){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ue+ce,X={id:x++,callback:q,priorityLevel:X,startTime:ue,expirationTime:ce,sortIndex:-1},ue>le?(X.sortIndex=ue,t(p,X),i(g)===null&&X===i(p)&&(U?(I(P),P=-1):U=!0,ee(L,ue-le))):(X.sortIndex=ce,t(g,X),C||E||(C=!0,D||(D=!0,$()))),X},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(X){var q=v;return function(){var ue=v;v=q;try{return X.apply(this,arguments)}finally{v=ue}}}})(lh)),lh}var rv;function OM(){return rv||(rv=1,oh.exports=LM()),oh.exports}var ch={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function PM(){if(sv)return Dn;sv=1;var o=Lp();function t(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,_,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:E===d?d:""+E,children:x,containerInfo:_,implementation:v}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(x){return{$$typeof:f,_reason:x}},Dn.createPortal=function(x,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return h(x,_,null,v)},Dn.flushSync=function(x){var _=g.T,v=s.p;try{if(g.T=null,s.p=2,x)return x()}finally{g.T=_,s.p=v,s.d.f()}},Dn.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(x,_))},Dn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Dn.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var v=_.as,E=p(v,_.crossOrigin),C=typeof _.integrity=="string"?_.integrity:void 0,U=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:C,fetchPriority:U}):v==="script"&&s.d.X(x,{crossOrigin:E,integrity:C,fetchPriority:U,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Dn.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=p(_.as,_.crossOrigin);s.d.M(x,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(x)},Dn.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,E=p(v,_.crossOrigin);s.d.L(x,v,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Dn.preloadModule=function(x,_){if(typeof x=="string")if(_){var v=p(_.as,_.crossOrigin);s.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(x)},Dn.requestFormReset=function(x){s.d.r(x)},Dn.unstable_batchedUpdates=function(x,_){return x(_)},Dn.useFormState=function(x,_,v){return g.H.useFormState(x,_,v)},Dn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var ov;function IM(){if(ov)return ch.exports;ov=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ch.exports=PM(),ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function zM(){if(lv)return il;lv=1;var o=OM(),t=Lp(),i=IM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return g(l),e;if(u===r)return g(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=u;else{for(var m=!1,R=l.child;R;){if(R===a){m=!0,a=l,r=u;break}if(R===r){m=!0,r=l,a=u;break}R=R.sibling}if(!m){for(R=u.child;R;){if(R===a){m=!0,a=u,r=l;break}if(R===r){m=!0,r=u,a=l;break}R=R.sibling}if(!m)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,r,l,u))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function C(e){var n=[null,null],a=v(e);return a===null||U(n,e,a.child,{foundSelf:!1}),n}function U(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&U(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,I=null;function Y(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function w(e,n,a){return e===a?(I=e,!1):e===n?(I!==null&&(S=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function D(e,n,a){for(var r=0,l=e;l;l=a(l))r++;l=0;for(var u=n;u;u=a(u))l++;for(;0<r-l;)e=a(e),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,b=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),Xe=Symbol.for("react.legacy_hidden"),Ve=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),me=Symbol.for("react.recoverable"),Ae=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=Ae&&e[Ae]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case ne:return"Profiler";case $:return"StrictMode";case q:return"Suspense";case ue:return"SuspenseList";case xe:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ee:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return n=e.displayName||null,n!==null?n:be(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return be(e(n))}catch{}}return null}var Ce=Array.isArray,ve=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt={pending:!1,data:null,method:null,action:null},pt=[],_t=-1;function yt(e){return{current:e}}function tt(e){0>_t||(e.current=pt[_t],pt[_t]=null,_t--)}function it(e,n){_t++,pt[_t]=e.current,e.current=n}var kt=yt(null),fn=yt(null),Ot=yt(null),en=yt(null);function W(e,n){switch(it(Ot,n),it(fn,e),it(kt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=c_(n),e=u_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(kt),it(kt,e)}function nn(){tt(kt),tt(fn),tt(Ot)}function Lt(e){var n=e.memoizedState;n!==null&&(Is._currentValue=n.memoizedState,it(en,e)),n=kt.current;var a=u_(n,e.type);n!==a&&(it(fn,e),it(kt,a))}function O(e){fn.current===e&&(tt(kt),tt(fn)),en.current===e&&(tt(en),Is._currentValue=Vt)}var M,te;function oe(e){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+te}var ge=!1;function Re(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(Pe){var Z=Pe}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(Pe){Z=Pe}ye=!1;try{var se=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ye=!0,new e}finally{ye&&(se!==void 0?Object.defineProperty(e.prototype,"props",se):delete e.prototype.props)}}}else{try{throw Error()}catch(Pe){Z=Pe}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(Pe){if(Pe&&Z&&typeof Pe.stack=="string")return[Pe.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),m=u[0],R=u[1];if(m&&R){var z=m.split(`
`),J=R.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<J.length&&!J[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===J.length)for(r=z.length-1,l=J.length-1;1<=r&&0<=l&&z[r]!==J[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==J[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==J[l]){var fe=`
`+z[r].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=r&&0<=l);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return oe("Activity");case 30:return oe("ViewTransition");default:return""}}function _e(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ee=Object.prototype.hasOwnProperty,De=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,ze=o.unstable_shouldYield,Ie=o.unstable_requestPaint,We=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,k=o.unstable_UserBlockingPriority,Ne=o.unstable_NormalPriority,Me=o.unstable_LowPriority,Le=o.unstable_IdlePriority,ke=o.log,Te=o.unstable_setDisableYieldValue,Je=null,Ge=null;function Ct(e){if(typeof ke=="function"&&Te(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Je,e)}catch{}}var ct=Math.clz32?Math.clz32:Uu,Qn=Math.log,fi=Math.LN2;function Uu(e){return e>>>=0,e===0?32:31-(Qn(e)/fi|0)|0}var Jr=256,_r=262144,Pa=4194304;function ua(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~u,r!==0?l=ua(r):(m&=R,m!==0?l=ua(m):a||(a=R&~e,a!==0&&(l=ua(a))))):(R=r&~u,R!==0?l=ua(R):m!==0?l=ua(m):a||(a=r&~e,a!==0&&(l=ua(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Ia(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Gi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ct(a),l=1<<r;n|=e[r],a&=~l}return n}function oo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lo(){var e=Pa;return Pa<<=1,(Pa&62914560)===0&&(Pa=4194304),e}function $r(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bl(e,n,a,r,l,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(a=m&~a;0<a;){var fe=31-ct(a),ye=1<<fe;R[fe]=0,z[fe]=-1;var Z=J[fe];if(Z!==null)for(J[fe]=null,fe=0;fe<Z.length;fe++){var se=Z[fe];se!==null&&(se.lane&=-536870913)}a&=~ye}r!==0&&xr(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~n))}function xr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ct(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function co(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ct(a),l=1<<r;l&n|e[r]&n&&(e[r]|=n),a&=~l}}function uo(e,n){var a=n&-n;return a=(a&42)!==0?1:fo(a),(a&(e.suspendedLanes|n))!==0?0:a}function fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ho(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tl(){var e=we.p;return e!==0?e:(e=window.event,e===void 0?32:Y_(e.type))}function Al(e,n){var a=we.p;try{return we.p=e,n()}finally{we.p=a}}var di=Math.random().toString(36).slice(2),A="__reactFiber$"+di,F="__reactProps$"+di,he="__reactContainer$"+di,ae="__reactEvents$"+di,re="__reactListeners$"+di,Be="__reactHandles$"+di,qe="__reactResources$"+di,Oe="__reactMarker$"+di,Ze="__reactLoad$"+di;function Ke(e){delete e[A],delete e[F],delete e[re],delete e[Be]}function rt(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[he]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=R_(e);e!==null;){if(a=e[A])return a;e=R_(e)}return n}e=a,a=e.parentNode}return null}function ut(e){if(e=e[A]||e[he]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ye(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Mt(e){var n=e[qe];return n||(n=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Oe]=!0}function jt(e){e[Ze]=void 0}var Ht=new Set,vn={};function Fe(e,n){rn(e,n),rn(e+"Capture",n)}function rn(e,n){for(vn[e]=n,e=0;e<n.length;e++)Ht.add(n[e])}var wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},Jn={};function ki(e){return Ee.call(Jn,e)?!0:Ee.call(Bn,e)?!1:wt.test(e)?Jn[e]=!0:(Bn[e]=!0,!1)}var xt=!1;function It(){var e=xt;return xt=!1,e}function Qt(e,n,a){if(ki(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function $n(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Tt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Lu(e){if(!e._valueTracker){var n=fa(e)?"checked":"value";e._valueTracker=Rl(e,n,""+e[n])}}function Qp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var Qx=/[\n"\\]/g;function hi(e){return e.replace(Qx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ou(e,n,a,r,l,u,m,R){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?m==="number"&&e.value==n?Pu(e,sn(e.value)):Pu(e,sn(n)):a!=null?Pu(e,sn(a)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+sn(R):e.removeAttribute("name")}function Jp(e,n,a,r,l,u,m,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Lu(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Lu(e)}function Pu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function es(e,n,a,r){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function $p(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function em(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ce(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Lu(e)}function ts(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Jx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Jx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function nm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",xt=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(tm(e,l,r),xt=!0)}else for(var u in n)n.hasOwnProperty(u)&&tm(e,u,n[u])}function Iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $x=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(e){return eS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var zu=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,is=null;function im(e){var n=ut(e);if(n&&(e=n.stateNode)){var a=e[F]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ou(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var l=r[F]||null;if(!l)throw Error(s(90));Ou(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Qp(r)}break e;case"textarea":$p(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&es(e,!!a.multiple,n,!1)}}}var Fu=!1;function am(e,n,a){if(Fu)return e(n,a);Fu=!0;try{var r=e(n);return r}finally{if(Fu=!1,(ns!==null||is!==null)&&(Cc(),ns&&(n=ns,e=is,is=ns=null,im(n),e)))for(n=0;n<e.length;n++)im(e[n])}}function po(e,n){var a=e.stateNode;if(a===null)return null;var r=a[F]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=!1;if(da)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Hu=!1}var za=null,Gu=null,wl=null;function rm(){if(wl)return wl;var e,n=Gu,a=n.length,r,l="value"in za?za.value:za.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var m=a-e;for(r=1;r<=m&&n[a-r]===l[u-r];r++);return wl=l.slice(e,1<r?1-r:void 0)}function Nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function sm(){return!1}function Fn(e){function n(a,r,l,u,m){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Dl:sm,this.isPropagationStopped=sm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Fn(Ba),go=P({},Ba,{view:0,detail:0}),tS=Fn(go),Vu,ku,_o,Ll=P({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Vu=e.screenX-_o.screenX,ku=e.screenY-_o.screenY):ku=Vu=0,_o=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),om=Fn(Ll),nS=P({},Ll,{dataTransfer:0}),iS=Fn(nS),aS=P({},go,{relatedTarget:0}),Xu=Fn(aS),rS=P({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=Fn(rS),oS=P({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lS=Fn(oS),cS=P({},Ba,{data:0}),lm=Fn(cS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dS[e])?!!n[e]:!1}function Wu(){return hS}var pS=P({},go,{key:function(e){if(e.key){var n=uS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mS=Fn(pS),gS=P({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=Fn(gS),_S=P({},Ba,{submitter:0}),vS=Fn(_S),xS=P({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),SS=Fn(xS),yS=P({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=Fn(yS),ES=P({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bS=Fn(ES),TS=P({},Ba,{newState:0,oldState:0,source:0}),AS=Fn(TS),RS=[9,13,27,32],qu=da&&"CompositionEvent"in window,vo=null;da&&"documentMode"in document&&(vo=document.documentMode);var CS=da&&"TextEvent"in window&&!vo,um=da&&(!qu||vo&&8<vo&&11>=vo),fm=" ",dm=!1;function hm(e,n){switch(e){case"keyup":return RS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var as=!1;function wS(e,n){switch(e){case"compositionend":return pm(n);case"keypress":return n.which!==32?null:(dm=!0,fm);case"textInput":return e=n.data,e===fm&&dm?null:e;default:return null}}function NS(e,n){if(as)return e==="compositionend"||!qu&&hm(e,n)?(e=rm(),wl=Gu=za=null,as=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return um&&n.locale!=="ko"?null:n.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!DS[e.type]:n==="textarea"}function gm(e,n,a,r){ns?is?is.push(r):is=[r]:ns=r,n=Oc(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var xo=null,So=null;function US(e){i_(e,0)}function Ol(e){var n=Ye(e);if(Qp(n))return e}function _m(e,n){if(e==="change")return n}var vm=!1;if(da){var Yu;if(da){var ju="oninput"in document;if(!ju){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),ju=typeof xm.oninput=="function"}Yu=ju}else Yu=!1;vm=Yu&&(!document.documentMode||9<document.documentMode)}function Sm(){xo&&(xo.detachEvent("onpropertychange",ym),So=xo=null)}function ym(e){if(e.propertyName==="value"&&Ol(So)){var n=[];gm(n,So,e,Bu(e)),am(US,n)}}function LS(e,n,a){e==="focusin"?(Sm(),xo=n,So=a,xo.attachEvent("onpropertychange",ym)):e==="focusout"&&Sm()}function OS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ol(So)}function PS(e,n){if(e==="click")return Ol(n)}function IS(e,n){if(e==="input"||e==="change")return Ol(n)}function zS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:zS;function yo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Ee.call(n,l)||!ei(e[l],n[l]))return!1}return!0}function Zu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Em(e,n){var a=Mm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mm(a)}}function bm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zu(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zu(e.document)}return n}function Ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var BS=da&&"documentMode"in document&&11>=document.documentMode,rs=null,Qu=null,Mo=null,Ju=!1;function Am(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ju||rs==null||rs!==Zu(r)||(r=rs,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&yo(Mo,r)||(Mo=r,r=Oc(Qu,"onSelect"),0<r.length&&(n=new Ul("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=rs)))}function Sr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ss={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},$u={},Rm={};da&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function yr(e){if($u[e])return $u[e];if(!ss[e])return e;var n=ss[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rm)return $u[e]=n[a];return e}var Cm=yr("animationend"),wm=yr("animationiteration"),Nm=yr("animationstart"),FS=yr("transitionrun"),HS=yr("transitionstart"),GS=yr("transitioncancel"),Dm=yr("transitionend"),Um=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Ai(e,n){Um.set(e,n),Fe(n,[e])}var VS=0;function ha(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ni.identifierPrefix;var a=VS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Lm(e){if(e==null||typeof e=="string")return e;var n=null,a=As;if(a!==null)for(var r=0;r<a.length;r++){var l=e[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function pa(e,n){return e=Lm(e),n=Lm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],os=0,tf=0;function Il(){for(var e=os,n=tf=os=0;n<e;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var l=pi[n];pi[n++]=null;var u=pi[n];if(pi[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}u!==0&&Om(a,l,u)}}function zl(e,n,a,r){pi[os++]=e,pi[os++]=n,pi[os++]=a,pi[os++]=r,tf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function nf(e,n,a,r){return zl(e,n,a,r),Bl(e)}function Mr(e,n){return zl(e,null,null,n),Bl(e)}function Om(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-ct(a),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=a|536870912),u):null}function Bl(e){if(50<Xo)throw Xo=0,Rc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ls={};function kS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,r){return new kS(e,n,a,r)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Fl(e,n,a,r,l,u){var m=0;if(r=e,typeof r=="function")af(r)&&(m=1);else if(typeof r=="string")m=_M(e,a,kt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case xe:return e=Xn(31,a,n,l),e.elementType=xe,e.lanes=u,e;case V:return Er(a.children,l,u,n);case $:m=8,l|=24;break;case ne:return e=Xn(12,a,n,l|2),e.elementType=ne,e.lanes=u,e;case q:return e=Xn(13,a,n,l),e.elementType=q,e.lanes=u,e;case ue:return e=Xn(19,a,n,l),e.elementType=ue,e.lanes=u,e;case Xe:case B:return e=l|32,e=Xn(30,a,n,e),e.elementType=B,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ee:m=10;break e;case K:m=9;break e;case X:m=11;break e;case le:m=14;break e;case ce:m=16,r=null;break e}m=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Xn(m,a,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function Er(e,n,a,r){return e=Xn(7,e,r,n),e.lanes=a,e}function rf(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function Im(e){var n=Xn(18,null,null,0);return n.stateNode=e,n}function sf(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zm=new WeakMap;function mi(e,n){if(typeof e=="object"&&e!==null){var a=zm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:_e(n)},zm.set(e,n),n)}return{value:e,source:n,stack:_e(n)}}var cs=[],us=0,Hl=null,Eo=0,gi=[],_i=0,Fa=null,Wi=1,qi="";function ga(e,n){cs[us++]=Eo,cs[us++]=Hl,Hl=e,Eo=n}function Bm(e,n,a){gi[_i++]=Wi,gi[_i++]=qi,gi[_i++]=Fa,Fa=e;var r=Wi;e=qi;var l=32-ct(r)-1;r&=~(1<<l),a+=1;var u=32-ct(n)+l;if(30<u){var m=l-l%5;u=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Wi=1<<32-ct(n)+l|a<<l|r,qi=u+e}else Wi=1<<u|a<<l|r,qi=e}function Gl(e){e.return!==null&&(ga(e,1),Bm(e,1,0))}function of(e){for(;e===Hl;)Hl=cs[--us],cs[us]=null,Eo=cs[--us],cs[us]=null;for(;e===Fa;)Fa=gi[--_i],gi[_i]=null,qi=gi[--_i],gi[_i]=null,Wi=gi[--_i],gi[_i]=null}function Fm(e,n){gi[_i++]=Wi,gi[_i++]=qi,gi[_i++]=Fa,Wi=n.id,qi=n.overflow,Fa=e}var Mn=null,Jt=null,St=!1,Ha=null,vi=!1,lf=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(mi(n,e)),lf}function Hm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[F]=r,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<qo.length;a++)bt(qo[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Jp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),em(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||o_(n.textContent,a)?(r.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),r.onScroll!=null&&bt("scroll",n),r.onScrollEnd!=null&&bt("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ga(e,!0)}function Vl(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Mn=Mn.return}}function fs(e){if(e!==Mn)return!1;if(!St)return Vl(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bd(e.type,e.memoizedProps)),a=!a),a&&Jt&&Ga(e),Vl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Jt=A_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Jt=A_(e)}else n===27?(n=Jt,ir(e.type)?(e=Yd,Yd=null,Jt=e):Jt=n):Jt=Mn?Si(e.stateNode.nextSibling):null;return!0}function br(){Jt=Mn=null,St=!1}function cf(){var e=Ha;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ha=null),e}function bo(e){Ha===null?Ha=[e]:Ha.push(e)}var uf=yt(null),Tr=null,_a=null;function Va(e,n,a){it(uf,n._currentValue),n._currentValue=a}function va(e){e._currentValue=uf.current,tt(uf)}function kl(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function ff(e,n,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=l;for(var z=0;z<n.length;z++)if(R.context===n[z]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),kl(u.return,a,e),r||(m=null);break e}u=R.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),kl(m,a,e),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,m=l.alternate,m!==null&&(m.lanes|=a),kl(l.return,a,e),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Ar(e,n,a,r){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var R=l.type;ei(l.pendingProps.value,m.value)||(e!==null?e.push(R):e=[R])}}else if(l===en.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Is):e=[Is])}l=l.return}return e!==null&&ff(n,e,a,r),n.flags|=262144,e!==null}function Xl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rr(e){Tr=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Gm(Tr,e)}function Wl(e,n){return Tr===null&&Rr(e),Gm(e,n)}function Gm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(s(308));_a=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _a=_a.next=n;return a}var XS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},WS=o.unstable_scheduleCallback,qS=o.unstable_NormalPriority,dn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new XS,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&WS(qS,function(){e.controller.abort()})}function Vm(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Ao=null;function YS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Ro=null,hf=0,Cr=0,ds=null;function jS(e,n){if(Ro===null){var a=Ro=[];hf=0,Cr=wd(),ds={status:"pending",value:void 0,then:function(r){a.push(r)}}}return hf++,n.then(km,km),n}function km(){if(--hf===0&&(Ao=null,Ro!==null)){ds!==null&&(ds.status="fulfilled");var e=Ro;Ro=null,Cr=0,ds=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ZS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Xm=ve.S;ve.S=function(e,n){if(I0=We(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jS(e,n),Ao!==null)for(var a=Ns;a!==null;)Vm(a,Ao),a=a.next;if(a=e.types,a!==null){for(var r=Ns;r!==null;)Vm(r,a),r=r.next;if(Cr!==0){r=Ao,r===null&&(r=Ao=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}Xm!==null&&Xm(e,n)};var wr=yt(null);function pf(){var e=wr.current;return e!==null?e:Kt.pooledCache}function ql(e,n){n===null?it(wr,wr.current):it(wr,n.pool)}function Wm(){var e=pf();return e===null?null:{parent:dn._currentValue,pool:e}}var hs=Error(s(460)),mf=Error(s(474)),Yl=Error(s(542)),jl={then:function(){}};function qm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zm(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=Kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zm(e),e}throw Dr=n,hs}}function Nr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,hs):a}}var Dr=null;function jm(){if(Dr===null)throw Error(s(459));var e=Dr;return Dr=null,e}function Zm(e){if(e===hs||e===Yl)throw Error(s(483))}var ps=null,Co=0;function Zl(e){var n=Co;return Co+=1,ps===null&&(ps=[]),Ym(ps,e,n)}function ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Kl(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Km(e){function n(Q,G){if(e){var ie=Q.deletions;ie===null?(Q.deletions=[G],Q.flags|=16):ie.push(G)}}function a(Q,G){if(!e)return null;for(;G!==null;)n(Q,G),G=G.sibling;return null}function r(Q){for(var G=new Map;Q!==null;)Q.key===null?G.set(Q.index,Q):G.set(Q.key,Q),Q=Q.sibling;return G}function l(Q,G){return Q=ma(Q,G),Q.index=0,Q.sibling=null,Q}function u(Q,G,ie){return Q.index=ie,e?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<G?(Q.flags|=2,G):ie):(Q.flags|=134217730,G)):(Q.flags|=1048576,G)}function m(Q){return e&&Q.alternate===null&&(Q.flags|=134217730),Q}function R(Q,G,ie,Se){return G===null||G.tag!==6?(G=rf(ie,Q.mode,Se),G.return=Q,G):(G=l(G,ie),G.return=Q,G)}function z(Q,G,ie,Se){var je=ie.type;return je===V?(Q=fe(Q,G,ie.props.children,Se,ie.key),ka(Q,ie),Q):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ce&&Nr(je)===G.type)?(G=l(G,ie.props),ka(G,ie),G.return=Q,G):(G=Fl(ie.type,ie.key,ie.props,null,Q.mode,Se),ka(G,ie),G.return=Q,G)}function J(Q,G,ie,Se){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=sf(ie,Q.mode,Se),G.return=Q,G):(G=l(G,ie.children||[]),G.return=Q,G)}function fe(Q,G,ie,Se,je){return G===null||G.tag!==7?(G=Er(ie,Q.mode,Se,je),G.return=Q,G):(G=l(G,ie),G.return=Q,G)}function ye(Q,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=rf(""+G,Q.mode,ie),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return ie=Fl(G.type,G.key,G.props,null,Q.mode,ie),ka(ie,G),ie.return=Q,ie;case H:return G=sf(G,Q.mode,ie),G.return=Q,G;case ce:return G=Nr(G),ye(Q,G,ie)}if(Ce(G)||j(G))return G=Er(G,Q.mode,ie,null),G.return=Q,G;if(typeof G.then=="function")return ye(Q,Zl(G),ie);if(G.$$typeof===ee)return ye(Q,Wl(Q,G),ie);Kl(Q,G)}return null}function Z(Q,G,ie,Se){var je=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return je!==null?null:R(Q,G,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:return ie.key===je?z(Q,G,ie,Se):null;case H:return ie.key===je?J(Q,G,ie,Se):null;case ce:return ie=Nr(ie),Z(Q,G,ie,Se)}if(Ce(ie)||j(ie))return je!==null?null:fe(Q,G,ie,Se,null);if(typeof ie.then=="function")return Z(Q,G,Zl(ie),Se);if(ie.$$typeof===ee)return Z(Q,G,Wl(Q,ie),Se);Kl(Q,ie)}return null}function se(Q,G,ie,Se,je){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ie)||null,R(G,Q,""+Se,je);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case N:return Q=Q.get(Se.key===null?ie:Se.key)||null,z(G,Q,Se,je);case H:return Q=Q.get(Se.key===null?ie:Se.key)||null,J(G,Q,Se,je);case ce:return Se=Nr(Se),se(Q,G,ie,Se,je)}if(Ce(Se)||j(Se))return Q=Q.get(ie)||null,fe(G,Q,Se,je,null);if(typeof Se.then=="function")return se(Q,G,ie,Zl(Se),je);if(Se.$$typeof===ee)return se(Q,G,ie,Wl(G,Se),je);Kl(G,Se)}return null}function Pe(Q,G,ie,Se){for(var je=null,Rt=null,et=G,at=G=0,mn=null;et!==null&&at<ie.length;at++){et.index>at?(mn=et,et=null):mn=et.sibling;var Ut=Z(Q,et,ie[at],Se);if(Ut===null){et===null&&(et=mn);break}e&&et&&Ut.alternate===null&&n(Q,et),G=u(Ut,G,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut,et=mn}if(at===ie.length)return a(Q,et),St&&ga(Q,at),je;if(et===null){for(;at<ie.length;at++)et=ye(Q,ie[at],Se),et!==null&&(G=u(et,G,at),Rt===null?je=et:Rt.sibling=et,Rt=et);return St&&ga(Q,at),je}for(et=r(et);at<ie.length;at++)mn=se(et,Q,at,ie[at],Se),mn!==null&&(e&&(Ut=mn.alternate,Ut!==null&&et.delete(Ut.key===null?at:Ut.key)),G=u(mn,G,at),Rt===null?je=mn:Rt.sibling=mn,Rt=mn);return e&&et.forEach(function(lr){return n(Q,lr)}),St&&ga(Q,at),je}function Qe(Q,G,ie,Se){if(ie==null)throw Error(s(151));for(var je=null,Rt=null,et=G,at=G=0,mn=null,Ut=ie.next();et!==null&&!Ut.done;at++,Ut=ie.next()){et.index>at?(mn=et,et=null):mn=et.sibling;var lr=Z(Q,et,Ut.value,Se);if(lr===null){et===null&&(et=mn);break}e&&et&&lr.alternate===null&&n(Q,et),G=u(lr,G,at),Rt===null?je=lr:Rt.sibling=lr,Rt=lr,et=mn}if(Ut.done)return a(Q,et),St&&ga(Q,at),je;if(et===null){for(;!Ut.done;at++,Ut=ie.next())Ut=ye(Q,Ut.value,Se),Ut!==null&&(G=u(Ut,G,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut);return St&&ga(Q,at),je}for(et=r(et);!Ut.done;at++,Ut=ie.next())Ut=se(et,Q,at,Ut.value,Se),Ut!==null&&(e&&(mn=Ut.alternate,mn!==null&&et.delete(mn.key===null?at:mn.key)),G=u(Ut,G,at),Rt===null?je=Ut:Rt.sibling=Ut,Rt=Ut);return e&&et.forEach(function(wM){return n(Q,wM)}),St&&ga(Q,at),je}function ht(Q,G,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===V&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:e:{for(var je=ie.key;G!==null;){if(G.key===je){if(je=ie.type,je===V){if(G.tag===7){a(Q,G.sibling),Se=l(G,ie.props.children),ka(Se,ie),Se.return=Q,Q=Se;break e}}else if(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ce&&Nr(je)===G.type){a(Q,G.sibling),Se=l(G,ie.props),ka(Se,ie),Se.return=Q,Q=Se;break e}a(Q,G);break}else n(Q,G);G=G.sibling}ie.type===V?(Se=Er(ie.props.children,Q.mode,Se,ie.key),ka(Se,ie),Se.return=Q,Q=Se):(Se=Fl(ie.type,ie.key,ie.props,null,Q.mode,Se),ka(Se,ie),Se.return=Q,Q=Se)}return m(Q);case H:e:{for(je=ie.key;G!==null;){if(G.key===je)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){a(Q,G.sibling),Se=l(G,ie.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,G);break}else n(Q,G);G=G.sibling}Se=sf(ie,Q.mode,Se),Se.return=Q,Q=Se}return m(Q);case ce:return ie=Nr(ie),ht(Q,G,ie,Se)}if(Ce(ie))return Pe(Q,G,ie,Se);if(j(ie)){if(je=j(ie),typeof je!="function")throw Error(s(150));return ie=je.call(ie),Qe(Q,G,ie,Se)}if(typeof ie.then=="function")return ht(Q,G,Zl(ie),Se);if(ie.$$typeof===ee)return ht(Q,G,Wl(Q,ie),Se);Kl(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,G!==null&&G.tag===6?(a(Q,G.sibling),Se=l(G,ie),Se.return=Q,Q=Se):(a(Q,G),Se=rf(ie,Q.mode,Se),Se.return=Q,Q=Se),m(Q)):a(Q,G)}return function(Q,G,ie,Se){try{Co=0;var je=ht(Q,G,ie,Se);return ps=null,je}catch(et){if(et===hs||et===Yl)throw et;var Rt=Xn(29,et,null,Q.mode);return Rt.lanes=Se,Rt.return=Q,Rt}finally{}}}var Ur=Km(!0),Qm=Km(!1),Xa=!1;function gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zt&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Bl(e),Om(e,null,a),n}return zl(e,r,n,a),Bl(e)}function wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,co(e,a)}}function vf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xf=!1;function No(){if(xf){var e=ds;if(e!==null)throw e}}function Do(e,n,a,r){xf=!1;var l=e.updateQueue;Xa=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var z=R,J=z.next;z.next=null,m===null?u=J:m.next=J,m=z;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,R=fe.lastBaseUpdate,R!==m&&(R===null?fe.firstBaseUpdate=J:R.next=J,fe.lastBaseUpdate=z))}if(u!==null){var ye=l.baseState;m=0,fe=J=z=null,R=u;do{var Z=R.lane&-536870913,se=Z!==R.lane;if(se?(At&Z)===Z:(r&Z)===Z){Z!==0&&Z===Cr&&(xf=!0),fe!==null&&(fe=fe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Pe=e,Qe=R;Z=n;var ht=a;switch(Qe.tag){case 1:if(Pe=Qe.payload,typeof Pe=="function"){ye=Pe.call(ht,ye,Z);break e}ye=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Qe.payload,Z=typeof Pe=="function"?Pe.call(ht,ye,Z):Pe,Z==null)break e;ye=P({},ye,Z);break e;case 2:Xa=!0}}Z=R.callback,Z!==null&&(e.flags|=64,se&&(e.flags|=8192),se=l.callbacks,se===null?l.callbacks=[Z]:se.push(Z))}else se={lane:Z,tag:R.tag,payload:R.payload,callback:R.callback,next:null},fe===null?(J=fe=se,z=ye):fe=fe.next=se,m|=Z;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;se=R,R=se.next,se.next=null,l.lastBaseUpdate=se,l.shared.pending=null}}while(!0);fe===null&&(z=ye),l.baseState=z,l.firstBaseUpdate=J,l.lastBaseUpdate=fe,u===null&&(l.shared.lanes=0),$a|=m,e.lanes=m,e.memoizedState=ye}}function Jm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function $m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jm(a[e],n)}var Ya=yt(null),Ql=yt(0);function eg(e,n){e=Ea,it(Ql,e),it(Ya,n),Ea=e|n.baseLanes}function Sf(){it(Ql,Ea),it(Ya,Ya.current)}function yf(){Ea=Ql.current,tt(Ya),tt(Ql)}var Rn=yt(null),Ln=null;function ja(e){var n=e.alternate;it(Cn,Cn.current&1),it(Rn,e),Ln===null&&(n===null||Ya.current!==null||n.memoizedState!==null)&&(Ln=e)}function Mf(e){it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)}function tg(e){e.tag===22?(it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)):Za()}function Za(){it(Cn,Cn.current),it(Rn,Rn.current)}function ti(e){tt(Rn),Ln===e&&(Ln=null),tt(Cn)}var Cn=yt(0);function Uo(e,n){it(Rn,Rn.current),it(Cn,n)}function Ef(e){tt(Cn),tt(Rn),Ln===e&&(Ln=null)}function Jl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wd(a)||qd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,dt=null,Zt=null,hn=null,$l=!1,ms=!1,Lr=!1,ec=0,Lo=0,gs=null,KS=0;function on(){throw Error(s(321))}function bf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Tf(e,n,a,r,l,u){return xa=u,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ve.H=e===null||e.memoizedState===null?Bg:Fg,Lr=!1,u=a(r,l),Lr=!1,ms&&(u=ig(n,a,r,l)),ng(e),u}function ng(e){ve.H=oc;var n=Zt!==null&&Zt.next!==null;if(xa=0,hn=Zt=dt=null,$l=!1,Lo=0,gs=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Xl(e)&&(pn=!0))}function ig(e,n,a,r){dt=e;var l=0;do{if(ms&&(gs=null),Lo=0,ms=!1,25<=l)throw Error(s(301));if(l+=1,hn=Zt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}ve.H=ay,u=n(a,r)}while(ms);return u}function QS(){var e=ve.H,n=e.useState()[0];return n=typeof n.then=="function"?Oo(n):n,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(dt.flags|=1024),n}function Af(){var e=ec!==0;return ec=0,e}function Rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cf(e){if($l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}$l=!1}xa=0,hn=Zt=dt=null,ms=!1,Lo=ec=0,gs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?dt.memoizedState=hn=e:hn=hn.next=e,hn}function un(){if(Zt===null){var e=dt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var n=hn===null?dt.memoizedState:hn.next;if(n!==null)hn=n,Zt=e;else{if(e===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},hn===null?dt.memoizedState=hn=e:hn=hn.next=e}return hn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(e){var n=Lo;return Lo+=1,gs===null&&(gs=[]),e=Ym(gs,e,n),n=dt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,ve.H=n===null||n.memoizedState===null?Bg:Fg),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oo(e);if(e.$$typeof===me)return;if(e.$$typeof===ee)return An(e)}throw Error(s(438,String(e)))}function wf(e){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=dt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tc(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Ve;return n.index++,a}function Sa(e,n){return typeof n=="function"?n(e):n}function ic(e){var n=un();return Nf(n,Zt,e)}function Nf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}n.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var R=m=null,z=null,J=n,fe=!1;do{var ye=J.lane&-536870913;if(ye!==J.lane?(At&ye)===ye:(xa&ye)===ye){var Z=J.revertLane;if(Z===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ye===Cr&&(fe=!0);else if((xa&Z)===Z){J=J.next,Z===Cr&&(fe=!0);continue}else ye={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(R=z=ye,m=u):z=z.next=ye,dt.lanes|=Z,$a|=Z;ye=J.action,Lr&&a(u,ye),u=J.hasEagerState?J.eagerState:a(u,ye)}else Z={lane:ye,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(R=z=Z,m=u):z=z.next=Z,dt.lanes|=ye,$a|=ye;J=J.next}while(J!==null&&J!==n);if(z===null?m=u:z.next=R,!ei(u,e.memoizedState)&&(pn=!0,fe&&(a=ds,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=z,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Df(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do u=e(u,m.action),m=m.next;while(m!==l);ei(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function ag(e,n,a){var r=dt,l=un(),u=St;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var m=!ei((Zt||l).memoizedState,a);if(m&&(l.memoizedState=a,pn=!0),l=l.queue,Of(og.bind(null,r,l,e),[e]),e=l.getSnapshot!==n||m||hn!==null&&(hn.memoizedState.tag&1)!==0,_s(e?9:8,{destroy:void 0},sg.bind(null,r,l,a,n),null),e){if(r.flags|=2048,Kt===null)throw Error(s(349));u||(xa&127)!==0||rg(r,n,a)}return a}function rg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=tc(),dt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sg(e,n,a,r){n.value=a,n.getSnapshot=r,lg(n)&&cg(e)}function og(e,n,a){return a(function(){lg(n)&&cg(e)})}function lg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function cg(e){var n=Mr(e,2);n!==null&&jn(n,e,2)}function Uf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Lr){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n}function ug(e,n,a,r){return e.baseState=a,Nf(e,Zt,typeof r=="function"?r:Sa)}function JS(e,n,a,r,l){if(sc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};ve.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,fg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function fg(e,n){var a=n.action,r=n.payload,l=e.state;if(n.isTransition){var u=ve.T,m={};m.types=u!==null?u.types:null,ve.T=m;try{var R=a(l,r),z=ve.S;z!==null&&z(m,R),dg(e,n,R)}catch(J){Lf(e,n,J)}finally{u!==null&&m.types!==null&&(u.types=m.types),ve.T=u}}else try{u=a(l,r),dg(e,n,u)}catch(J){Lf(e,n,J)}}function dg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){hg(e,n,r)},function(r){return Lf(e,n,r)}):hg(e,n,a)}function hg(e,n,a){n.status="fulfilled",n.value=a,pg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fg(e,a)))}function Lf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,pg(n),n=n.next;while(n!==r)}e.action=null}function pg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mg(e,n){return n}function gg(e,n){if(St){var a=Kt.formState;if(a!==null){e:{var r=dt;if(St){if(Jt){t:{for(var l=Jt,u=vi;l.nodeType!==8;){if(!u){l=null;break t}if(l=Si(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Jt=Si(l.nextSibling),r=l.data==="F!";break e}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mg,lastRenderedState:n},a.queue=r,a=Pg.bind(null,dt,r),r.dispatch=a,r=Uf(!1),u=Ff.bind(null,dt,!1,r.queue),r=Hn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,a=JS.bind(null,dt,l,u,a),l.dispatch=a,r.memoizedState=e,[n,a,!1]}function _g(e){var n=un();return vg(n,Zt,e)}function vg(e,n,a){if(n=Nf(e,n,mg)[0],e=ic(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Oo(n)}catch(m){throw m===hs?Yl:m}else r=n;n=un();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,_s(9,{destroy:void 0},$S.bind(null,l,a),null)),[r,u,e]}function $S(e,n){e.action=n}function xg(e){var n=un(),a=Zt;if(a!==null)return vg(n,a,e);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function _s(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=dt.updateQueue,n===null&&(n=tc(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Sg(){return un().memoizedState}function ac(e,n,a,r){var l=Hn();dt.flags|=e,l.memoizedState=_s(1|n,{destroy:void 0},a,r===void 0?null:r)}function rc(e,n,a,r){var l=un();r=r===void 0?null:r;var u=l.memoizedState.inst;Zt!==null&&r!==null&&bf(r,Zt.memoizedState.deps)?l.memoizedState=_s(n,u,a,r):(dt.flags|=e,l.memoizedState=_s(1|n,u,a,r))}function yg(e,n){ac(8390656,8,e,n)}function Of(e,n){rc(2048,8,e,n)}function ey(e){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=tc(),dt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Mg(e){var n=un().memoizedState;return ey({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Eg(e,n){return rc(4,2,e,n)}function bg(e,n){return rc(4,4,e,n)}function Tg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ag(e,n,a){a=a!=null?a.concat([e]):null,rc(4,4,Tg.bind(null,n,e),a)}function Pf(){}function Rg(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&bf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Cg(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&bf(n,r[1]))return r[0];if(r=e(),Lr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r}function If(e,n,a){return a===void 0||(xa&1073741824)!==0&&(At&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=B0(),dt.lanes|=e,$a|=e,a)}function wg(e,n,a,r){return ei(a,n)?a:Ya.current!==null?(e=If(e,a,r),ei(e,n)||(pn=!0),e):(xa&106)===0||(xa&1073741824)!==0&&(At&261930)===0?(pn=!0,e.memoizedState=a):(e=B0(),dt.lanes|=e,$a|=e,n)}function Ng(e,n,a,r,l){var u=we.p;we.p=u!==0&&8>u?u:8;var m=ve.T,R={};R.types=m!==null?m.types:null,ve.T=R,Ff(e,!1,n,a);try{var z=l(),J=ve.S;if(J!==null&&J(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var fe=ZS(z,r);Po(e,n,fe,ri(e))}else Po(e,n,r,ri(e))}catch(ye){Po(e,n,{then:function(){},status:"rejected",reason:ye},ri())}finally{we.p=u,m!==null&&R.types!==null&&(m.types=R.types),ve.T=m}}function ty(){}function zf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var l=Dg(e).queue;Ng(e,l,n,Vt,a===null?ty:function(){return Ug(e),a(r)})}function Dg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Vt,baseState:Vt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Vt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ug(e){var n=Dg(e);n.next===null&&(n=e.alternate.memoizedState),Po(e,n.next.queue,{},ri())}function Bf(){return An(Is)}function Lg(){return un().memoizedState}function Og(){return un().memoizedState}function ny(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Wa(a);var r=qa(n,e,a);r!==null&&(jn(r,n,a),wo(r,n,a)),n={cache:df()},e.payload=n;return}n=n.return}}function iy(e,n,a){var r=ri();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sc(e)?Ig(n,a):(a=nf(e,n,a,r),a!==null&&(jn(a,e,r),zg(a,n,r)))}function Pg(e,n,a){var r=ri();Po(e,n,a,r)}function Po(e,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sc(e))Ig(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,R=u(m,a);if(l.hasEagerState=!0,l.eagerState=R,ei(R,m))return zl(e,n,l,0),Kt===null&&Il(),!1}catch{}finally{}if(a=nf(e,n,l,r),a!==null)return jn(a,e,r),zg(a,n,r),!0}return!1}function Ff(e,n,a,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(n)throw Error(s(479))}else n=nf(e,a,r,2),n!==null&&jn(n,e,2)}function sc(e){var n=e.alternate;return e===dt||n!==null&&n===dt}function Ig(e,n){ms=$l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function zg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,co(e,a)}}var oc={readContext:An,use:nc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},Bg={readContext:An,use:nc,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:yg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ac(4194308,4,Tg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ac(4194308,4,e,n)},useInsertionEffect:function(e,n){ac(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var r=e();if(Lr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Hn();if(a!==void 0){var l=a(n);if(Lr){Ct(!0);try{a(n)}finally{Ct(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=iy.bind(null,dt,e),[r.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Uf(e);var n=e.queue,a=Pg.bind(null,dt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pf,useDeferredValue:function(e,n){var a=Hn();return If(a,e,n)},useTransition:function(){var e=Uf(!1);return e=Ng.bind(null,dt,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=dt,l=Hn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(At&127)!==0||rg(r,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,yg(og.bind(null,r,u,e),[e]),r.flags|=2048,_s(9,{destroy:void 0},sg.bind(null,r,u,a,n),null),a},useId:function(){var e=Hn(),n=Kt.identifierPrefix;if(St){var a=qi,r=Wi;a=(r&~(1<<32-ct(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=KS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bf,useFormState:gg,useActionState:gg,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ff.bind(null,dt,!0,a),a.dispatch=n,[e,n]},useMemoCache:wf,useCacheRefresh:function(){return Hn().memoizedState=ny.bind(null,dt)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Fg={readContext:An,use:nc,useCallback:Rg,useContext:An,useEffect:Of,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:bg,useMemo:Cg,useReducer:ic,useRef:Sg,useState:function(){return ic(Sa)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=un();return wg(a,Zt.memoizedState,e,n)},useTransition:function(){var e=ic(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),n]},useSyncExternalStore:ag,useId:Lg,useHostTransitionStatus:Bf,useFormState:_g,useActionState:_g,useOptimistic:function(e,n){var a=un();return ug(a,Zt,e,n)},useMemoCache:wf,useCacheRefresh:Og,useEffectEvent:Mg},ay={readContext:An,use:nc,useCallback:Rg,useContext:An,useEffect:Of,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:bg,useMemo:Cg,useReducer:Df,useRef:Sg,useState:function(){return Df(Sa)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=un();return Zt===null?If(a,e,n):wg(a,Zt.memoizedState,e,n)},useTransition:function(){var e=Df(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Oo(e),n]},useSyncExternalStore:ag,useId:Lg,useHostTransitionStatus:Bf,useFormState:xg,useActionState:xg,useOptimistic:function(e,n){var a=un();return Zt!==null?ug(a,Zt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wf,useCacheRefresh:Og,useEffectEvent:Mg};function Hf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(jn(n,e,r),wo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ri(),l=Wa(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=qa(e,l,r),n!==null&&(jn(n,e,r),wo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),r=Wa(a);r.tag=2,n!=null&&(r.callback=n),n=qa(e,r,a),n!==null&&(jn(n,e,a),wo(n,e,a))}};function Hg(e,n,a,r,l,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,m):n.prototype&&n.prototype.isPureReactComponent?!yo(a,r)||!yo(l,u):!0}function Gg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Gf.enqueueReplaceState(n,n.state,null)}function Or(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Vg(e){Pl(e)}function kg(e){console.error(e)}function Xg(e){Pl(e)}function lc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Wg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Vf(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){lc(e,n)},a}function qg(e){return e=Wa(e),e.tag=3,e}function Yg(e,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){Wg(n,a,r)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Wg(n,a,r),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function ry(e,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ar(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?wc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ad(e,r,l)),!1;case 22:return a.flags|=65536,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ad(e,r,l)),!1}throw Error(s(435,a.tag))}return Ad(e,r,l),wc(),!1}if(St)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==lf&&(e=Error(s(422),{cause:r}),bo(mi(e,a)))):(r!==lf&&(n=Error(s(423),{cause:r}),bo(mi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=mi(r,a),l=Vf(e.stateNode,r,l),vf(e,l),ln!==4&&(ln=2)),!1;var u=Error(s(520),{cause:r});if(u=mi(u,a),ko===null?ko=[u]:ko.push(u),ln!==4&&(ln=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Vf(a.stateNode,r,e),vf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=qg(l),Yg(l,e,a,r),vf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var kf=Error(s(461)),pn=!1;function xn(e,n,a,r){n.child=e===null?Qm(n,null,a,r):Ur(n,e.child,a,r)}function jg(e,n,a,r,l){a=a.render;var u=n.ref;if("ref"in r){var m={};for(var R in r)R!=="ref"&&(m[R]=r[R])}else m=r;return Rr(n),r=Tf(e,n,a,m,u,l),R=Af(),e!==null&&!pn?(Rf(e,n,l),ya(e,n,l)):(St&&R&&Gl(n),n.flags|=1,xn(e,n,r,l),n.child)}function Zg(e,n,a,r,l){if(e===null){var u=a.type;return typeof u=="function"&&!af(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,Kg(e,n,u,r,l)):(e=Fl(a.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!Qf(e,l)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(m,r)&&e.ref===n.ref)return ya(e,n,l)}return n.flags|=1,e=ma(u,r),e.ref=n.ref,e.return=n,n.child=e}function Kg(e,n,a,r,l){if(e!==null){var u=e.memoizedProps;if(yo(u,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=u,Qf(e,l))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ya(e,n,l)}return Xf(e,n,a,r,l)}function Qg(e,n,a,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,n.child=null;return Jg(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ql(n,u!==null?u.cachePool:null),u!==null?eg(n,u):Sf(),tg(n);else return r=n.lanes=536870912,Jg(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(ql(n,u.cachePool),eg(n,u),Za(),n.memoizedState=null):(e!==null&&ql(n,null),Sf(),Za());return xn(e,n,l,a),n.child}function Io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jg(e,n,a,r,l){var u=pf();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ql(n,null),Sf(),tg(n),e!==null&&Ar(e,n,r,!0),n.childLanes=l,null}function cc(e,n){return n=uc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function $g(e,n,a){return Ur(n,e.child,null,a),e=cc(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function sy(e,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(r.mode==="hidden")return e=cc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Io(null,e);if(Mf(n),(e=Jt)?(e=T_(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Im(e),a.return=n,n.child=a,Mn=n,Jt=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return cc(n,r)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(Mf(n),l)if(n.flags&256)n.flags&=-257,n=$g(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ar(e,n,a,!1),l=(a&e.childLanes)!==0,pn||l){if(Ya.current===null){if(r=Kt,r!==null&&(m=uo(r,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,Mr(e,m),jn(r,e,m),kf;wc()}n=$g(e,n,a)}else e=u.treeContext,Jt=Si(m.nextSibling),Mn=n,St=!0,Ha=null,vi=!1,e!==null&&Fm(n,e),n=cc(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function vs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xf(e,n,a,r,l){return Rr(n),a=Tf(e,n,a,r,void 0,l),r=Af(),e!==null&&!pn?(Rf(e,n,l),ya(e,n,l)):(St&&r&&Gl(n),n.flags|=1,xn(e,n,a,l),n.child)}function e0(e,n,a,r,l,u){return Rr(n),n.updateQueue=null,a=ig(n,r,a,l),ng(e),r=Af(),e!==null&&!pn?(Rf(e,n,u),ya(e,n,u)):(St&&r&&Gl(n),n.flags|=1,xn(e,n,a,u),n.child)}function t0(e,n,a,r,l){if(Rr(n),n.stateNode===null){var u=ls,m=a.contextType;typeof m=="object"&&m!==null&&(u=An(m)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Gf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},gf(n),m=a.contextType,u.context=typeof m=="object"&&m!==null?An(m):ls,u.state=n.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Hf(n,a,m,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Gf.enqueueReplaceState(u,u.state,null),Do(n,r,u,l),No(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var R=n.memoizedProps,z=Or(a,R);u.props=z;var J=u.context,fe=a.contextType;m=ls,typeof fe=="object"&&fe!==null&&(m=An(fe));var ye=a.getDerivedStateFromProps;fe=typeof ye=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,fe||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||J!==m)&&Gg(n,u,r,m),Xa=!1;var Z=n.memoizedState;u.state=Z,Do(n,r,u,l),No(),J=n.memoizedState,R||Z!==J||Xa?(typeof ye=="function"&&(Hf(n,a,ye,r),J=n.memoizedState),(z=Xa||Hg(n,a,z,r,Z,J,m))?(fe||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),u.props=r,u.state=J,u.context=m,r=z):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,_f(e,n),m=n.memoizedProps,fe=Or(a,m),u.props=fe,ye=n.pendingProps,Z=u.context,J=a.contextType,z=ls,typeof J=="object"&&J!==null&&(z=An(J)),R=a.getDerivedStateFromProps,(J=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==ye||Z!==z)&&Gg(n,u,r,z),Xa=!1,Z=n.memoizedState,u.state=Z,Do(n,r,u,l),No();var se=n.memoizedState;m!==ye||Z!==se||Xa||e!==null&&e.dependencies!==null&&Xl(e.dependencies)?(typeof R=="function"&&(Hf(n,a,R,r),se=n.memoizedState),(fe=Xa||Hg(n,a,fe,r,Z,se,z)||e!==null&&e.dependencies!==null&&Xl(e.dependencies))?(J||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,se,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,se,z)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=se),u.props=r,u.state=se,u.context=z,r=fe):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,vs(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Ur(n,e.child,null,l),n.child=Ur(n,null,a,l)):xn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=ya(e,n,l),e}function n0(e,n,a,r){return br(),n.flags|=256,xn(e,n,a,r),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(e){return{baseLanes:e,cachePool:Wm()}}function Yf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function i0(e,n,a){var r=n.pendingProps,l=!1,u=(n.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(l?ja(n):Za(),(e=Jt)?(e=T_(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Im(e),a.return=n,n.child=a,Mn=n,Jt=null)):e=null,e===null)throw Ga(n);return qd(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Za(),l=n.mode,u=uc({mode:"hidden",children:u},l),r=Er(r,l,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=qf(a),r.childLanes=Yf(e,m,a),n.memoizedState=Wf,Io(null,r)):(ja(n),jf(n,u))}var R=e.memoizedState;if(R!==null){var z=R.dehydrated;if(z!==null)return oy(e,n,u,m,r,z,R,a)}return l?(Za(),l=r.fallback,u=n.mode,R=e.child,z=R.sibling,r=ma(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,z!==null?l=ma(z,l):(l=Er(l,u,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Io(null,r),r=n.child,l=e.child.memoizedState,l===null?l=qf(a):(u=l.cachePool,u!==null?(R=dn._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=Wm(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=Yf(e,m,a),n.memoizedState=Wf,Io(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=a,n.memoizedState=null,a)}function jf(e,n){return n=uc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function uc(e,n){return e=Xn(22,e,null,n),e.lanes=0,e}function fc(e,n,a){return Ur(n,e.child,null,a),e=jf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function oy(e,n,a,r,l,u,m,R){if(a)return n.flags&256?(ja(n),n.flags&=-257,fc(e,n,R)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,null):(Za(),u=l.fallback,m=n.mode,l=uc({mode:"visible",children:l.children},m),u=Er(u,m,R,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ur(n,e.child,null,R),l=n.child,l.memoizedState=qf(R),l.childLanes=Yf(e,r,R),n.memoizedState=Wf,Io(null,l));if(ja(n),qd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,bo({value:l,source:null,stack:null})),fc(e,n,R)}if(pn||Ar(e,n,R,!1),r=(R&e.childLanes)!==0,pn||r){if(Ya.current!==null)return fc(e,n,R);if(r=Kt,r!==null&&(l=uo(r,R),l!==0&&l!==m.retryLane))throw m.retryLane=l,Mr(e,l),jn(r,e,l),kf;return Wd(u)||wc(),fc(e,n,R)}return Wd(u)?(n.flags|=192,n.child=e.child,null):(e=m.treeContext,Jt=Si(u.nextSibling),Mn=n,St=!0,Ha=null,vi=!1,e!==null&&Fm(n,e),n=jf(n,l.children),n.flags|=134221824,n)}function a0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),kl(e.return,n,a)}function r0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Jl(a)===null&&(n=e),e=e.sibling}return n}function dc(e,n,a,r,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=a,m.tailMode=l,m.treeForkCount=u)}function Zf(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Kf(e,n,a){var r=n.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var m=Cn.current;if(n.flags&128)return Uo(n,m),null;var R=(m&2)!==0;if(R?(m=m&1|2,n.flags|=128):m&=1,Uo(n,m),l==="backwards"&&e!==null?(Zf(e),xn(e,n,r,a),Zf(e)):xn(e,n,r,a),r=St?Eo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a0(e,a,n);else if(e.tag===19)a0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=r0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Zf(n)),dc(n,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Jl(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}dc(n,!0,a,null,u,r);break;case"together":dc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=r0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),dc(n,!1,l,a,u,r)}return n.child}function s0(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),xn(e,n,r.children,a),n.child}function ya(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Xl(e)))}function ly(e,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),Va(n,dn,e.memoizedState.cache),br();break;case 27:case 5:Lt(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Ar(e,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?i0(e,n,a):(ja(n),e=ya(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return Kf(e,n,a);if(l=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ar(e,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return Kf(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,Qg(e,n,a,n.pendingProps);case 24:Va(n,dn,e.memoizedState.cache)}return ya(e,n,a)}function o0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Qf(e,a)&&(n.flags&128)===0)return pn=!1,ly(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,St&&(n.flags&1048576)!==0&&Bm(n,Eo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Nr(n.elementType),n.type=e,typeof e=="function")af(e)?(r=Or(e,r),n.tag=1,n=t0(null,n,e,r,a)):(n.tag=0,n=Xf(null,n,e,r,a));else{if(e!=null){var l=e.$$typeof;if(l===X){n.tag=11,n=jg(null,n,e,r,a);break e}else if(l===le){n.tag=14,n=Zg(null,n,e,r,a);break e}else if(l===ee){n.tag=10,n.type=e,n=s0(null,n,a);break e}}throw n=be(e)||e,Error(s(306,n,""))}}return n;case 0:return Xf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Or(r,n.pendingProps),t0(e,n,r,l,a);case 3:e:{if(W(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;l=u.element,_f(e,n),Do(n,r,null,a);var m=n.memoizedState;if(r=m.cache,Va(n,dn,r),r!==u.cache&&ff(n,[dn],a,!0),No(),r=m.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=n0(e,n,r,a);break e}else if(r!==l){l=mi(Error(s(424)),n),bo(l),n=n0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Jt=Si(e.firstChild),Mn=n,St=!0,Ha=null,vi=!0,a=Qm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(br(),r===l){n=ya(e,n,a);break e}xn(e,n,r,a)}n=n.child}return n;case 26:return vs(e,n),e===null?(a=U_(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(n.stateNode=f_(n.type,n.pendingProps,Ot.current,n)):n.memoizedState=U_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Lt(n),e===null&&St&&(r=n.stateNode=C_(n.type,n.pendingProps,Ot.current),Mn=n,vi=!0,l=Jt,ir(n.type)?(Yd=l,Jt=Si(r.firstChild)):Jt=l),xn(e,n,n.pendingProps.children,a),vs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((l=r=Jt)&&(r=nM(r,n.type,n.pendingProps,vi),r!==null?(n.stateNode=r,Mn=n,Jt=Si(r.firstChild),vi=!1,l=!0):l=!1),l||Ga(n)),Lt(n),l=n.type,u=n.pendingProps,m=e!==null?e.memoizedProps:null,r=u.children,Bd(l,u)?r=null:m!==null&&Bd(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=Tf(e,n,QS,null,null,a),Is._currentValue=l),vs(e,n),xn(e,n,r,a),n.child;case 6:return e===null&&St&&((e=a=Jt)&&(a=iM(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Mn=n,Jt=null,e=!0):e=!1),e||Ga(n)),null;case 13:return i0(e,n,a);case 4:return W(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ur(n,null,r,a):xn(e,n,r,a),n.child;case 11:return jg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,vs(e,n),xn(e,n,r,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return s0(e,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Rr(n),l=An(l),r=r(l),n.flags|=1,xn(e,n,r,a),n.child;case 14:return Zg(e,n,n.type,n.pendingProps,a);case 15:return Kg(e,n,n.type,n.pendingProps,a);case 19:return Kf(e,n,a);case 31:return sy(e,n,a);case 22:return Qg(e,n,a,n.pendingProps);case 24:return Rr(n),r=An(dn),e===null?(l=pf(),l===null&&(l=Kt,u=df(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:r,cache:l},gf(n),Va(n,dn,l)):((e.lanes&a)!==0&&(_f(e,n),Do(n,null,null,a),No()),l=e.memoizedState,u=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Va(n,dn,r)):(r=u.cache,Va(n,dn,r),r!==l.cache&&ff(n,[dn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:St&&Gl(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:vs(e,n),xn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function Jf(e,n,a,r,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?I_(n,r):I_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(V0())e.flags|=8192;else throw Dr=jl,mf}else e.flags&=-16777217}function l0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!z_(n))if(V0())e.flags|=8192;else throw Dr=jl,mf}function hc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?lo():536870912,e.lanes|=n,Es|=n)}function zo(e,n){if(!St)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $t(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function cy(e,n,a){var r=n.pendingProps;switch(of(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fs(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),$t(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Ma(n),u!==null?($t(n),l0(n,u)):($t(n),Jf(n,l,null,r,a))):u?u!==e.memoizedState?(Ma(n),$t(n),l0(n,u)):($t(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),$t(n),Jf(n,l,e,r,a)),null;case 27:if(O(n),a=Ot.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $t(n),n.subtreeFlags&=-33554433,null}e=kt.current,fs(n)?Hm(n):(e=C_(l,r,a),n.stateNode=e,Ma(n))}return $t(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $t(n),n.subtreeFlags&=-33554433,null}if(u=kt.current,fs(n))Hm(n);else{var m=jo(Ot.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}u[A]=n,u[F]=r;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=u;e:switch(Nn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(n)}}return $t(n),n.subtreeFlags&=-33554433,Jf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ot.current,fs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||o_(e.nodeValue,a)),e||Ga(n,!0)}else e=jo(e).createTextNode(r),e[A]=n,n.stateNode=e}return $t(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=fs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),e=!1}else a=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[A]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),l=!1}else l=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),hc(n,n.updateQueue),$t(n),null);case 4:return nn(),e===null&&Ld(n.stateNode.containerInfo),n.flags|=67108864,$t(n),null;case 10:return va(n.type),$t(n),null;case 19:if(Ef(n),r=n.memoizedState,r===null)return $t(n),null;if(l=(n.flags&128)!==0,u=r.rendering,u===null)if(l)zo(r,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=Jl(e),u!==null){for(n.flags|=128,zo(r,!1),e=u.updateQueue,n.updateQueue=e,hc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pm(a,e),a=a.sibling;return Uo(n,Cn.current&1|2),St&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&We()>Tc&&(n.flags|=128,l=!0,zo(r,!1),n.lanes=4194304)}else{if(!l)if(e=Jl(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,hc(n,e),zo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!St)return $t(n),null}else 2*We()-r.renderingStartTime>Tc&&a!==536870912&&(n.flags|=128,l=!0,zo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=We(),e.sibling=null,u=Cn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||St?Uo(n,u):(a=u,it(Rn,n),it(Cn,a),Ln===null&&(Ln=n)),St&&ga(n,r.treeForkCount),e}return $t(n),null;case 22:case 23:return ti(n),yf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&hc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(wr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(dn),$t(n),null;case 25:return null;case 30:return n.flags|=33554432,$t(n),null}throw Error(s(156,n.tag))}function uy(e,n){switch(of(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(dn),nn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ef(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return va(n.type),null;case 22:case 23:return ti(n),yf(),e!==null&&tt(wr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function c0(e,n){switch(of(n),n.tag){case 3:va(dn),nn();break;case 26:case 27:case 5:O(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Ef(n);break;case 10:va(n.type);break;case 22:case 23:ti(n),yf(),e!==null&&tt(wr);break;case 24:va(dn)}}function Bo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var u=a.create,m=a.inst;r=u(),m.destroy=r}a=a.next}while(a!==l)}}catch(R){Wt(n,n.return,R)}}function Ka(e,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var m=r.inst,R=m.destroy;if(R!==void 0){m.destroy=void 0,l=n;var z=a,J=R;try{J()}catch(fe){Wt(l,z,fe)}}}r=r.next}while(r!==u)}}catch(fe){Wt(n,n.return,fe)}}function u0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$m(n,a)}catch(r){Wt(e,e.return,r)}}}function f0(e,n,a){a.props=Or(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Wt(e,n,r)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ha(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=v_(u)),r=l.ref;break;case 7:if(e.stateNode===null){var m=new si(e);_(e.child,!1,eM,m,void 0,void 0),e.stateNode=m}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(R){Wt(e,n,R)}}function wn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Wt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Wt(e,n,l)}else a.current=null}function pc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)b_(e.stateNode,n[a])}function d0(e){for(var n=e.return;n!==null&&(ed(n)&&b_(e.stateNode,n.stateNode),!$f(n));)n=n.return}function Fo(e){for(var n=e.return;n!==null&&(ed(n)&&tM(e.stateNode,n.stateNode),!$f(n));)n=n.return}function $f(e){return e.tag===5||e.tag===3||e.tag===27}function ed(e){return e&&e.tag===7&&e.stateNode!==null}function td(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Wt(e,e.return,l)}}function nd(e,n,a){try{var r=e.stateNode;Iy(r,e.type,a,n),r[F]=n}catch(l){Wt(e,e.return,l)}}function h0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ir(e.type)||e.tag===4}function id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||h0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),pc(e,r),xt=!0;else if(l!==4&&(l===27&&(pc(e,r),r=null,ir(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(ad(e,n,a,r),e=e.sibling;e!==null;)ad(e,n,a,r),e=e.sibling}function mc(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),pc(e,r),xt=!0;else if(l!==4&&(l===27&&(pc(e,r),r=null,ir(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(mc(e,n,a,r),e=e.sibling;e!==null;)mc(e,n,a,r),e=e.sibling}function p0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[A]=e,n[F]=a}catch(u){Wt(e,e.return,u)}}var gc=!1,ni=null;function m0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(gc=!0)}var ji=null;function g0(){var e=ji;return ji=null,e}var Wn=0;function xs(e,n,a,r,l){return Wn=0,_0(e.child,n,a,r,l)}function _0(e,n,a,r,l){for(var u=!1;e!==null;){if(e.tag===5){var m=e.stateNode;if(r!==null){var R=Gd(m);r.push(R),R.view&&(u=!0)}else u||Gd(m).view&&(u=!0);gc=!0,g_(m,Wn===0?n:n+"_"+Wn,a),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||_0(e.child,n,a,r,l)&&(u=!0));e=e.sibling}return u}function Zi(e,n){for(;e!==null;)e.tag===5?__(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Zi(e.child,n)),e=e.sibling}function _c(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(_c(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(xs(e,a,n,null,!1)||Zi(e.child,!1))}e=e.sibling}}function rd(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,l=ha(r,a),u=pa(r.default,a.paired?r.share:r.enter);u!=="none"?xs(e,l,u,null,!1)?(_c(e),a.paired||n||Rs(e,r.onEnter)):Zi(e.child,!1):_c(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)rd(e,n),e=e.sibling;else _c(e)}function sd(e){if(ni!==null&&ni.size!==0){var n=ni;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var u=pa(a.default,a.share);if(u!=="none"&&(xs(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,Rs(e,a.onShare)):Zi(e.child,!1)),n.delete(r),n.size===0)break}}}sd(e)}e=e.sibling}}}function od(e){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode),r=ni!==null?ni.get(a):void 0,l=pa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(xs(e,a,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ni.delete(a),Rs(e,n.onShare)):Rs(e,n.onExit):Zi(e.child,!1)),ni!==null&&sd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)od(e),e=e.sibling;else ni!==null&&sd(e)}function v0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&xs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&v0(e);e=e.sibling}}function ld(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Zi(e.child,!1))}ld(e)}e=e.sibling}}function vc(e){if(e.tag===30)e.stateNode.paired=null,Zi(e.child,!1),ld(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)vc(e),e=e.sibling;else ld(e)}function x0(e){for(e=e.child;e!==null;)e.tag===30?Zi(e.child,!1):(e.subtreeFlags&33554432)!==0&&x0(e),e=e.sibling}function cd(e,n,a,r,l,u,m){for(var R=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(u!==null&&Wn<u.length){var J=u[Wn],fe=Gd(z);(J.view||fe.view)&&(R=!0);var ye;if(ye=(e.flags&4)===0)if(fe.clip)ye=!0;else{ye=J.rect;var Z=fe.rect;ye=ye.y!==Z.y||ye.x!==Z.x||ye.height!==Z.height||ye.width!==Z.width}ye&&(e.flags|=4),fe.abs?fe=!J.abs:(J=J.rect,fe=fe.rect,fe=J.height!==fe.height||J.width!==fe.width),fe&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&g_(z,Wn===0?a:a+"_"+Wn,l),R&&(e.flags&4)!==0||(ji===null&&(ji=[]),ji.push(z,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?e.flags|=n.flags&32:cd(e,n.child,a,r,l,u,m)&&(R=!0));n=n.sibling}return R}function S0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,l=ha(a,r),u=pa(a.default,a.update),m;m=e.memoizedState,e.memoizedState=null,r=e;var R=e.child;Wn=0,l=cd(r,R,l,l,u,m,!1),(e.flags&4)!==0&&l&&Rs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&S0(e);e=e.sibling}}var En=!1,Gt=!1,Ki=!1,ud=!1,y0=typeof WeakSet=="function"?WeakSet:Set,bn=null,Qi=!1,Ho=!1,xc=!1,fd=!1;function fy(e,n,a){if(e=e.containerInfo,Id=zs,e=Tm(e),Ku(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var R=0,z=-1,J=-1,fe=0,ye=0,Z=e,se=null;t:for(;;){for(var Pe;Z!==r||u!==0&&Z.nodeType!==3||(z=R+u),Z!==m||l!==0&&Z.nodeType!==3||(J=R+l),Z.nodeType===3&&(R+=Z.nodeValue.length),(Pe=Z.firstChild)!==null;)se=Z,Z=Pe;for(;;){if(Z===e)break t;if(se===r&&++fe===u&&(z=R),se===m&&++ye===l&&(J=R),(Pe=Z.nextSibling)!==null)break;Z=se,se=Z.parentNode}Z=Pe}r=z===-1||J===-1?null:{start:z,end:J}}else r=null}r=r||{start:0,end:0}}else r=null;for(zd={focusedElem:e,selectionRange:r},zs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(e=bn,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&od(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&m0(e),Sc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&od(r),Sc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&m0(e),Sc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,bn=r):(a&&v0(e),Sc(a))}}ni=null}function Sc(e){for(;bn!==null;){var n=bn,a=e,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var m=Or(n.type,l);a=u.getSnapshotBeforeUpdate(m,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){Wt(n,n.return,R)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Xd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Xd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ha(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=pa(l.default,l.update),l!=="none"&&xs(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function M0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),r&4&&Bo(5,a);break;case 1:if(Ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(m){Wt(a,a.return,m)}else{var l=Or(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Wt(a,a.return,m)}}r&64&&u0(a),r&512&&Yi(a,a.return);break;case 3:if(Ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$m(e,n)}catch(m){Wt(a,a.return,m)}}break;case 27:n===null&&r&4&&p0(a);case 26:case 5:Ji(e,a),n===null&&r&4&&td(a),r&512&&Yi(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),r&4&&A0(e,a);break;case 13:Ji(e,a),r&4&&R0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ey.bind(null,a),aM(e,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||Gt;n=En,l=Gt,En=r,(Gt=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),wi(e,a,r)):Ji(e,a),En=n,Gt=l}break;case 30:Ji(e,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:Ji(e,a)}}function dd(e,n){for(e=e.child;e!==null;)E0(e,n),e=e.sibling}function E0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,m=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(z){Wt(e,e.return,z)}hd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,xt=!0}catch(z){Wt(e,e.return,z)}break;case 18:try{var R=e.stateNode;n?m_(R,!0):m_(e.stateNode,!1)}catch(z){Wt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&dd(e,n);break;default:dd(e,n)}}function hd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:E0(a,r);break e;case 22:a.memoizedState===null&&hd(a,r);break e;default:hd(a,r)}}e=e.sibling}}function b0(e){var n=e.alternate;n!==null&&(e.alternate=null,b0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ke(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,qn=!1;function Ri(e,n,a){for(a=a.child;a!==null;)T0(e,n,a),a=a.sibling}function T0(e,n,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Gt||wn(a,n),Ri(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Gt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gt||wn(a,n),Fo(a);var r=tn,l=qn;ir(a.type)&&(tn=a.stateNode,qn=!1),Ri(e,n,a),w_(a.stateNode,a.type,a.memoizedProps),tn=r,qn=l;break;case 5:Gt||wn(a,n),Fo(a);case 6:if(a.tag===6&&Fo(a),r=tn,l=qn,tn=null,Ri(e,n,a),tn=r,qn=l,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),xt=!0}catch(u){Wt(a,n,u)}else try{tn.removeChild(a.stateNode),xt=!0}catch(u){Wt(a,n,u)}break;case 18:tn!==null&&(qn?(e=tn,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bs(e)):p_(tn,a.stateNode));break;case 4:r=tn,l=qn,tn=a.stateNode.containerInfo,qn=!0,Ri(e,n,a),tn=r,qn=l;break;case 0:case 11:case 14:case 15:Ka(2,a,n),Gt||Ka(4,a,n),Ri(e,n,a);break;case 1:Gt||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&f0(a,n,r)),Ri(e,n,a);break;case 21:Ri(e,n,a);break;case 22:Gt=(r=Gt)||a.memoizedState!==null,Ri(e,n,a),Gt=r;break;case 30:wn(a,n),Ri(e,n,a);break;case 7:Gt||wn(a,n),Ri(e,n,a);break;default:Ri(e,n,a)}}function A0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bs(e)}catch(a){Wt(n,n.return,a)}}}function R0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bs(e)}catch(a){Wt(n,n.return,a)}}function dy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new y0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new y0),n;default:throw Error(s(435,e.tag))}}function yc(e,n){var a=dy(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=by.bind(null,e,r);r.then(l,l)}})}function Gn(e,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],m=e,R=n,z=R;e:for(;z!==null;){switch(z.tag){case 27:if(ir(z.type)){tn=z.stateNode,qn=!1;break e}break;case 5:tn=z.stateNode,qn=!1;break e;case 3:case 4:tn=z.stateNode.containerInfo,qn=!0;break e}z=z.return}if(tn===null)throw Error(s(160));T0(m,R,u),tn=null,qn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)C0(n,e,a),n=n.sibling}var Ci=null;function C0(e,n,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var m=r[u];m.ref.impl=m.nextImpl}Gn(n,e,a),Vn(e),l&4&&(Ka(3,e,e.return),Bo(3,e),Ka(5,e,e.return));break;case 1:Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ci,Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(En)e.stateNode=f_(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Oe]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[A]=e,vt(r),n=r;break e;case"link":if(u=P_("link","href",l).get(n+(a.href||""))){for(m=0;m<u.length;m++)if(r=u[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(m,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(u=P_("meta","content",l).get(n+(a.content||""))){for(m=0;m<u.length;m++)if(r=u[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(m,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,vt(r),n=r}e.stateNode=n}else En||Qd(u,e.type,e.stateNode);else e.stateNode=O_(u,a,e.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Gt||n.parentNode.removeChild(n)):l.count--,a===null?En||Qd(u,e.type,e.stateNode):O_(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&nd(e,e.memoizedProps,r.memoizedProps);break;case 27:Gn(n,e,a),Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),r!==null&&l&4&&nd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Ki,Ki=!1,Gn(n,e,a),Ki=u,Vn(e),l&512&&(Gt||r===null||wn(r,r.return)),e.flags&32){n=e.stateNode;try{ts(n,""),xt=!0}catch(fe){Wt(e,e.return,fe)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,nd(e,n,r!==null?r.memoizedProps:n)),l&1024&&(ud=!0);break;case 6:if(Gn(n,e,a),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,xt=!0}catch(fe){Wt(e,e.return,fe)}}break;case 3:if(xt=!1,Ic=null,u=Ci,Ci=Zo(n.containerInfo),Gn(n,e,a),Ci=u,Vn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Bs(n.containerInfo)}catch(fe){Wt(e,e.return,fe)}ud&&(ud=!1,w0(e)),xt=!1;break;case 4:l=Ki,Ki=En,r=It(),u=Ci,Ci=Zo(e.stateNode.containerInfo),Gn(n,e,a),Vn(e),Ci=u,xt&&Ho&&(xc=!0),xt=r,Ki=l;break;case 12:Gn(n,e,a),Vn(e);break;case 31:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 13:Gn(n,e,a),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(bc=We()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 22:u=e.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var R=En,z=Gt,J=Ki;En=R||u,Ki=J||u,Gt=z||m,Gn(n,e,a),Gt=z,Ki=J,En=R,Vn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||m||En||Gt||(n=m||Gt,a=En,r=Gt,En=u||En,Gt=n,Qa(e,2),En=a,Gt=r),!u&&Ki||dd(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,yc(e,a))));break;case 19:Gn(n,e,a),Vn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 30:l&512&&(Gt||r===null||wn(r,r.return)),l=It(),u=Ho,m=(a&335544064)===a,R=e.memoizedProps,Ho=m&&pa(R.default,R.update)!=="none",Gn(n,e,a),Vn(e),m&&r!==null&&xt&&(e.flags|=4),Ho=u,xt=l;break;case 21:break;case 7:l&512&&(Gt||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Gn(n,e,a),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(h0(r)){a=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(ed(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if($f(l))break;l=l.return}var m=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,z=id(e);mc(e,z,R,m);break;case 5:var J=a.stateNode;a.flags&32&&(ts(J,""),a.flags&=-33);var fe=id(e);mc(e,fe,J,m);break;case 3:case 4:var ye=a.stateNode.containerInfo,Z=id(e);ad(e,Z,ye,m);break;default:throw Error(s(161))}}catch(se){Wt(e,e.return,se)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;w0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),e=e.sibling}}function Ss(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)N0(n,e),n=n.sibling;else S0(n)}function N0(e,n){var a=e.alternate;if(a===null)rd(e,!1);else switch(e.tag){case 3:if(fd=Qi=!1,g0(),Ss(n,e),!Qi&&!xc){if(e=ji,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var l=e[r+1];__(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),fd=!0}ji=null;break;case 5:Ss(n,e);break;case 4:r=Qi,Qi=!1,Ss(n,e),Qi&&(xc=!0),Qi=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?rd(e,!1):Ss(n,e));break;case 30:r=Qi,l=g0(),Qi=!1,Ss(n,e),Qi&&(e.flags|=4);var u=e.memoizedProps,m=e.stateNode;n=ha(u,m),m=ha(a.memoizedProps,m);var R=pa(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Wn=0,n=cd(e,a,n,m,R,u,!0),Wn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Rs(e,e.memoizedProps.onUpdate),ji=l):l!==null&&(l.push.apply(l,ji),ji=l),Qi=(e.flags&32)!==0?!0:r;break;default:Ss(n,e)}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M0(e,n.alternate,n),n=n.sibling}function Qa(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ka(4,a,a.return),Qa(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&f0(a,a.return,l),Qa(a,r);break;case 27:(r&2)!==0&&w_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Fo(a),Qa(a,r);break;case 6:Fo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Gt||l.parentNode.removeChild(l),Qa(a,r);break;case 22:a.memoizedState===null&&Qa(a,r);break;case 30:wn(a,a.return),Qa(a,r);break;case 7:wn(a,a.return);default:Qa(a,r)}e=e.sibling}}function wi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=e,u=n,m=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:wi(l,u,a),Bo(4,u);break;case 1:if(wi(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(fe){Wt(r,r.return,fe)}if(r=u,l=r.updateQueue,l!==null){var z=r.stateNode;try{var J=l.shared.hiddenCallbacks;if(J!==null)for(l.shared.hiddenCallbacks=null,l=0;l<J.length;l++)Jm(J[l],z)}catch(fe){Wt(r,r.return,fe)}}R&&m&64&&u0(u),Yi(u,u.return);break;case 27:(a&2)!==0&&p0(u);case 5:u.tag!==5&&u.tag!==27||d0(u),wi(l,u,a),R&&r===null&&m&4&&td(u),Yi(u,u.return);break;case 6:d0(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||En||Qd(Zo(z.ownerDocument),u.type,z),wi(l,u,a),R&&r===null&&m&4&&td(u),Yi(u,u.return);break;case 12:wi(l,u,a);break;case 31:wi(l,u,a),R&&m&4&&A0(l,u);break;case 13:wi(l,u,a),R&&m&4&&R0(l,u);break;case 22:u.memoizedState===null&&wi(l,u,a),Yi(u,u.return);break;case 30:wi(l,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:wi(l,u,a)}n=n.sibling}}function pd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&To(a))}function md(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e))}function xi(e,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)D0(e,n,a,r),n=n.sibling;else l&&x0(n)}function D0(e,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&vc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,r),u&2048&&Bo(9,n);break;case 1:xi(e,n,a,r);break;case 3:xi(e,n,a,r),l&&fd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&To(u)));break;case 12:if(u&2048){xi(e,n,a,r),u=n.stateNode;try{var m=n.memoizedProps,R=m.id,z=m.onPostCommit;typeof z=="function"&&z(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(J){Wt(n,n.return,J)}}else xi(e,n,a,r);break;case 31:xi(e,n,a,r);break;case 13:xi(e,n,a,r);break;case 23:break;case 22:m=n.stateNode,R=n.alternate,n.memoizedState!==null?(l&&R!==null&&R.memoizedState===null&&vc(R),m._visibility&2?xi(e,n,a,r):Go(e,n)):(l&&R!==null&&R.memoizedState!==null&&vc(n),m._visibility&2?xi(e,n,a,r):(m._visibility|=2,ys(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&pd(R,n);break;case 24:xi(e,n,a,r),u&2048&&md(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Zi(u.child,!0),Zi(n.child,!0))),xi(e,n,a,r);break;default:xi(e,n,a,r)}}function ys(e,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,m=n,R=a,z=r,J=m.flags;switch(m.tag){case 0:case 11:case 15:ys(u,m,R,z,l),Bo(8,m);break;case 23:break;case 22:var fe=m.stateNode;m.memoizedState!==null?fe._visibility&2?ys(u,m,R,z,l):Go(u,m):(fe._visibility|=2,ys(u,m,R,z,l)),l&&J&2048&&pd(m.alternate,m);break;case 24:ys(u,m,R,z,l),l&&J&2048&&md(m.alternate,m);break;default:ys(u,m,R,z,l)}n=n.sibling}}function Go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,l=r.flags;switch(r.tag){case 22:Go(a,r),l&2048&&pd(r.alternate,r);break;case 24:Go(a,r),l&2048&&md(r.alternate,r);break;default:Go(a,r)}n=n.sibling}}var Pr=8192;function Ir(e,n,a){if(e.subtreeFlags&Pr)for(e=e.child;e!==null;)U0(e,n,a),e=e.sibling}function U0(e,n,a){switch(e.tag){case 26:Ir(e,n,a),e.flags&Pr&&(e.memoizedState!==null?vM(a,Ci,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&F_(a,e)));break;case 5:Ir(e,n,a),e.flags&Pr&&(e=e.stateNode,(n&335544128)===n&&F_(a,e));break;case 3:case 4:var r=Ci;Ci=Zo(e.stateNode.containerInfo),Ir(e,n,a),Ci=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pr,Pr=16777216,Ir(e,n,a),Pr=r):Ir(e,n,a));break;case 30:if((e.flags&Pr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(r,l)}Ir(e,n,a);break;default:Ir(e,n,a)}}function L0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,P0(r,e)}L0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)O0(e),e=e.sibling}function O0(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Mc(e)):Vo(e);break;default:Vo(e)}}function Mc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,P0(r,e)}L0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),Mc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Mc(n));break;default:Mc(n)}e=e.sibling}}function P0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:To(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var l=r.sibling,u=r.return;if(b0(r),r===a){bn=null;break e}if(l!==null){l.return=u,bn=l;break e}bn=u}}}var hy={getCacheForType:function(e){var n=An(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(dn).controller.signal}},py=typeof WeakMap=="function"?WeakMap:Map,zt=0,Kt=null,Et=null,At=0,Xt=0,ii=null,Ja=!1,Ms=!1,gd=!1,Ea=0,ln=0,$a=0,zr=0,Ec=0,ai=0,Es=0,ko=null,Yn=null,_d=!1,bc=0,I0=0,Tc=1/0,Ac=null,er=null,an=0,Ni=null,Br=null,$i=0,vd=0,xd=null,z0=null,bs=null,Ts=null,As=null,Xo=0,Rc=null;function ri(){return(zt&2)!==0&&At!==0?At&-At:ve.T!==null?wd():Tl()}function B0(){if(ai===0)if((At&536870912)===0||St){var e=_r;_r<<=1,(_r&3932160)===0&&(_r=262144),ai=e}else ai=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ai}function Rs(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=v_(ha(e.memoizedProps,a))),Ts===null&&(Ts=[]),Ts.push(n.bind(null,r))}}function jn(e,n,a){(e===Kt&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Cs(e,0),tr(e,At,ai,!1)),Vi(e,a),((zt&2)===0||e!==Kt)&&(e===Kt&&((zt&2)===0&&(zr|=a),ln===4&&tr(e,At,ai,!1)),ea(e))}function F0(e,n,a){if((zt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ia(e,n),l=r?_y(e,n):yd(e,n,!0),u=r;do{if(l===0){Ms&&!r&&tr(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!my(a)){l=yd(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var R=e;l=ko;var z=R.current.memoizedState.isDehydrated;if(z&&(Cs(R,m).flags|=256),m=yd(R,m,!1),m!==2&&m!==6){if(gd&&!z){R.errorRecoveryDisabledLanes|=u,zr|=u,l=4;break e}u=Yn,Yn=l,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){Cs(e,0),tr(e,n,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:tr(r,n,ai,!Ja);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=bc+300-We(),10<l)){if(tr(r,n,ai,!Ja),vr(r,0,!0)!==0)break e;$i=n,r.timeoutHandle=Hd(H0.bind(null,r,a,Yn,Ac,_d,n,ai,zr,Es,Ja,u,"Throttled",-0,0),l);break e}H0(r,a,Yn,Ac,_d,n,ai,zr,Es,Ja,u,null,-0,0)}}break}while(!0);ea(e)}function H0(e,n,a,r,l,u,m,R,z,J,fe,ye,Z,se){e.timeoutHandle=-1;var Pe=n.subtreeFlags,Qe=(u&335544064)===u;if(ye=null,(Qe||Pe&8192||(Pe&16785408)===16785408)&&(ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ni=null,U0(n,u,ye),Qe&&(Pe=ye,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(Pe.count++,Pe.waitingForViewTransition=!0,Pe=Jo.bind(Pe),Qe.finished.then(Pe,Pe))),Pe=(u&62914560)===u?bc-We():(u&4194048)===u?I0-We():0,Pe=xM(ye,Pe),Pe!==null)){$i=u,e.cancelPendingCommit=Pe(j0.bind(null,e,n,u,a,r,l,m,R,z,J,fe,ye,null,Z,se)),tr(e,u,m,!J);return}j0(e,n,u,a,r,l,m,R,z,J,fe,ye)}function my(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!ei(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(e,n,a,r){n=Gi(e,n),n&=~Ec,n&=~zr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var u=31-ct(l),m=1<<u;r[u]=-1,l&=~m}a!==0&&xr(e,a,n)}function Cc(){return(zt&6)===0?(Wo(0),!1):!0}function Sd(){if(Et!==null){if(Xt===0)var e=Et.return;else e=Et,_a=Tr=null,Cf(e),ps=null,Co=0,e=Et;for(;e!==null;)c0(e.alternate,e),e=e.return;Et=null}}function Cs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Fy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,Sd(),Kt=e,Et=a=ma(e.current,null),At=n,Xt=0,ii=null,Ja=!1,Ms=Ia(e,n),gd=!1,Es=ai=Ec=zr=$a=ln=0,Yn=ko=null,_d=!1,Ea=Gi(e,n),Il(),a}function G0(e,n){dt=null,ve.H=oc,n===hs||n===Yl?(n=jm(),Xt=3):n===mf?(n=jm(),Xt=4):Xt=n===kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Et===null&&(ln=1,lc(e,mi(n,e.current)))}function V0(){var e=Rn.current;return e===null?!0:(At&4194048)===At?Ln===null:(At&62914560)===At||(At&536870912)!==0?e===Ln:!1}function k0(){var e=ve.H;return ve.H=oc,e===null?oc:e}function X0(){var e=ve.A;return ve.A=hy,e}function wc(){ln=4,Ja||(At&4194048)!==At&&Rn.current!==null||(Ms=!0),($a&134217727)===0&&(zr&134217727)===0||Kt===null||tr(Kt,At,ai,!1)}function yd(e,n,a){var r=zt;zt|=2;var l=k0(),u=X0();(Kt!==e||At!==n)&&(Ac=null,Cs(e,n)),n=!1;var m=ln;e:do try{if(Xt!==0&&Et!==null){var R=Et,z=ii;switch(Xt){case 8:Sd(),m=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var J=Xt;if(Xt=0,ii=null,ws(e,R,z,J),a&&Ms){m=0;break e}break;default:J=Xt,Xt=0,ii=null,ws(e,R,z,J)}}gy(),m=ln;break}catch(fe){G0(e,fe)}while(!0);return n&&e.shellSuspendCounter++,_a=Tr=null,zt=r,ve.H=l,ve.A=u,Et===null&&(Kt=null,At=0,Il()),m}function gy(){for(;Et!==null;)W0(Et)}function _y(e,n){var a=zt;zt|=2;var r=k0(),l=X0();Kt!==e||At!==n?(Ac=null,Tc=We()+500,Cs(e,n)):Ms=Ia(e,n);e:do try{if(Xt!==0&&Et!==null){n=Et;var u=ii;t:switch(Xt){case 1:Xt=0,ii=null,ws(e,n,u,1);break;case 2:case 9:if(qm(u)){Xt=0,ii=null,q0(n);break}n=function(){Xt!==2&&Xt!==9||Kt!==e||(Xt=7),ea(e)},u.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:qm(u)?(Xt=0,ii=null,q0(n)):(Xt=0,ii=null,ws(e,n,u,7));break;case 5:var m=null;switch(Et.tag){case 26:m=Et.memoizedState;case 5:case 27:var R=Et;if(m?z_(m):R.stateNode.complete){Xt=0,ii=null;var z=R.sibling;if(z!==null)Et=z;else{var J=R.return;J!==null?(Et=J,Nc(J)):Et=null}break t}}Xt=0,ii=null,ws(e,n,u,5);break;case 6:Xt=0,ii=null,ws(e,n,u,6);break;case 8:Sd(),ln=6;break e;default:throw Error(s(462))}}vy();break}catch(fe){G0(e,fe)}while(!0);return _a=Tr=null,ve.H=r,ve.A=l,zt=a,Et!==null?0:(Kt=null,At=0,Il(),ln)}function vy(){for(;Et!==null&&!ze();)W0(Et)}function W0(e){var n=o0(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?Nc(e):Et=n}function q0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=e0(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=e0(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Cf(n);var r=n;r===Mn&&(St?(Vl(r),r.tag===5&&r.stateNode!=null&&(Jt=r.stateNode)):(Vl(r),St=!0));default:c0(a,n),n=Et=Pm(n,Ea),n=o0(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?Nc(e):Et=n}function ws(e,n,a,r){_a=Tr=null,Cf(n),ps=null,Co=0;var l=n.return;try{if(ry(e,l,n,a,At)){ln=1,lc(e,mi(a,e.current)),Et=null;return}}catch(u){if(l!==null)throw Et=l,u;ln=1,lc(e,mi(a,e.current)),Et=null;return}n.flags&32768?(St||r===1?e=!0:Ms||(At&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Y0(n,e)):Nc(n)}function Nc(e){var n=e;do{if((n.flags&32768)!==0){Y0(n,Ja);return}e=n.return;var a=cy(n.alternate,n,Ea);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=e}while(n!==null);ln===0&&(ln=5)}function Y0(e,n){do{var a=uy(e.alternate,e);if(a!==null){a.flags&=32767,Et=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Et=e;return}Et=e=a}while(e!==null);ln=6,Et=null}function j0(e,n,a,r,l,u,m,R,z,J,fe,ye){e.cancelPendingCommit=null;do Dc();while(an!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Kt&&(Et=Kt=null,At=0),Br=n,Ni=e,$i=a,xd=l,z0=r,xy(e,n,a,m,R,z,ye)}}function xy(e,n,a,r,l,u,m){var R=n.lanes|n.childLanes;if(vd=R,R|=tf,bl(e,a,R,r,l,u),Ts=null,(a&335544064)===a?(As=YS(e),r=10262):(As=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Ty(Ne,function(){return Td(),null})):(e.callbackNode=null,e.callbackPriority=0),gc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null,l=we.p,we.p=2,u=zt,zt|=4;try{fy(e,n,a)}finally{zt=u,we.p=l,ve.T=r}}an=1,gc?bs=Wy(m,e.containerInfo,As,Md,Ed,yy,bd,Td,Sy):(Md(),Ed(),bd())}function Sy(e){if(an!==0){var n=Ni.onRecoverableError;n(e,{componentStack:null})}}function yy(){an===3&&(an=0,N0(Br,Ni),an=4)}function Md(){if(an===1){an=0;var e=Ni,n=Br,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null;var l=we.p;we.p=2;var u=zt;zt|=4;try{Ho=xc=!1,C0(n,e,a),a=zd;var m=Tm(e.containerInfo),R=a.focusedElem,z=a.selectionRange;if(m!==R&&R&&R.ownerDocument&&bm(R.ownerDocument.documentElement,R)){if(z!==null&&Ku(R)){var J=z.start,fe=z.end;if(fe===void 0&&(fe=J),"selectionStart"in R)R.selectionStart=J,R.selectionEnd=Math.min(fe,R.value.length);else{var ye=R.ownerDocument||document,Z=ye&&ye.defaultView||window;if(Z.getSelection){var se=Z.getSelection(),Pe=R.textContent.length,Qe=Math.min(z.start,Pe),ht=z.end===void 0?Qe:Math.min(z.end,Pe);!se.extend&&Qe>ht&&(m=ht,ht=Qe,Qe=m);var Q=Em(R,Qe),G=Em(R,ht);if(Q&&G&&(se.rangeCount!==1||se.anchorNode!==Q.node||se.anchorOffset!==Q.offset||se.focusNode!==G.node||se.focusOffset!==G.offset)){var ie=ye.createRange();ie.setStart(Q.node,Q.offset),se.removeAllRanges(),Qe>ht?(se.addRange(ie),se.extend(G.node,G.offset)):(ie.setEnd(G.node,G.offset),se.addRange(ie))}}}}for(ye=[],se=R;se=se.parentNode;)se.nodeType===1&&ye.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}zs=!!Id,zd=Id=null}finally{zt=u,we.p=l,ve.T=r}}e.current=n,an=2}}function Ed(){if(an===2){an=0;var e=Ni,n=Br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ve.T,ve.T=null;var r=we.p;we.p=2;var l=zt;zt|=4;try{M0(e,n.alternate,n)}finally{zt=l,we.p=r,ve.T=a}}an=3}}function bd(){if(an===4||an===3){an=0;var e=bs;bs=null,Ie();var n=Ni,a=Br,r=$i,l=z0,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?an=5:(an=0,Br=Ni=null,Z0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(er=null),ho(r),a=a.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Je,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=ve.T,u=we.p,we.p=2,ve.T=null;try{for(var m=n.onRecoverableError,R=0;R<l.length;R++){var z=l[R];m(z.value,{componentStack:z.stack})}}finally{ve.T=a,we.p=u}}if(l=Ts,m=As,As=null,l!==null&&(Ts=null,m===null&&(m=[]),e!==null))for(z=0;z<l.length;z++)a=(0,l[z])(m),a!==void 0&&e.finished.finally(a);($i&3)!==0&&Dc(),ea(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Rc?Xo++:(Xo=0,Rc=n):(Xo=0,Rc=null),Wo(0)}}function Z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,To(n)))}function Dc(){return bs!==null&&(bs.skipTransition(),bs=null),Md(),Ed(),bd(),Td()}function Td(){if(an!==5)return!1;var e=Ni,n=vd;vd=0;var a=ho($i),r=ve.T,l=we.p;try{we.p=32>a?32:a,ve.T=null,a=xd,xd=null;var u=Ni,m=$i;if(an=0,Br=Ni=null,$i=0,(zt&6)!==0)throw Error(s(331));var R=zt;if(zt|=4,O0(u.current),D0(u,u.current,m,a),zt=R,Wo(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Je,u)}catch{}return!0}finally{we.p=l,ve.T=r,Z0(e,n)}}function K0(e,n,a){n=mi(a,n),n=Vf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(Vi(e,2),ea(e))}function Wt(e,n,a){if(e.tag===3)K0(e,e,a);else for(;n!==null;){if(n.tag===3){K0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){e=mi(a,e),a=qg(2),r=qa(n,a,2),r!==null&&(Yg(a,r,n,e),Vi(r,2),ea(r));break}}n=n.return}}function Ad(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new py;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(gd=!0,l.add(a),e=My.bind(null,e,n,a),n.then(e,e))}function My(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Kt===e&&(At&a)===a&&((ln===4||ln===3&&(At&62914560)===At&&300>We()-bc)&&(zt&2)===0?Cs(e,0):Ec|=a,Es===At&&(Es=0)),ea(e)}function Q0(e,n){n===0&&(n=lo()),e=Mr(e,n),e!==null&&(Vi(e,n),ea(e))}function Ey(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Q0(e,a)}function by(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Q0(e,a)}function Ty(e,n){return De(e,n)}var Ns=null,Ds=null,Rd=!1,Uc=!1,Cd=!1,nr=0;function ea(e){e!==Ds&&e.next===null&&(Ds===null?Ns=Ds=e:Ds=Ds.next=e),Uc=!0,Rd||(Rd=!0,Ry())}function Wo(e,n){if(!Cd&&Uc){Cd=!0;do for(var a=!1,r=Ns;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var m=r.suspendedLanes,R=r.pingedLanes;u=(1<<31-ct(42|e)+1)-1,u&=l&~(m&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,t_(r,u))}else u=At,u=vr(r,r===Kt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ia(r,u)||(a=!0,t_(r,u));r=r.next}while(a);Cd=!1}}function Ay(){J0()}function J0(){Uc=Rd=!1;var e=0;nr!==0&&By()&&(e=nr);for(var n=We(),a=null,r=Ns;r!==null;){var l=r.next,u=$0(r,n);u===0?(r.next=null,a===null?Ns=l:a.next=l,l===null&&(Ds=a)):(a=r,(e!==0||(u&3)!==0)&&(Uc=!0)),r=l}an!==0&&an!==5||Wo(e),nr!==0&&(nr=0)}function $0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-ct(u),R=1<<m,z=l[m];z===-1?((R&a)===0||(R&r)!==0)&&(l[m]=oo(R,n)):z<=n&&(e.expiredLanes|=R),u&=~R}if(n=Kt,a=At,a=vr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ia(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),ho(a)){case 2:case 8:a=k;break;case 32:a=Ne;break;case 268435456:a=Le;break;default:a=Ne}return r=e_.bind(null,e),a=De(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dc()&&e.callbackNode!==a)return null;var r=At;return r=vr(e,e===Kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(F0(e,r,n),$0(e,We()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function t_(e,n){if(Dc())return null;F0(e,n,!0)}function Ry(){Hy(function(){(zt&6)!==0?De(lt,Ay):J0()})}function wd(){if(nr===0){var e=Cr;e===0&&(e=Jr,Jr<<=1,(Jr&261888)===0&&(Jr=256)),nr=e}return nr}function n_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cl(e)}function Cy(e,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var u=n_((l[F]||null).action),m=r.submitter;m&&(n=(n=m[F]||null)?n_(n.formAction):m.getAttribute("formAction"),n!==null&&(u=n,m=null));var R=new Ul("action","action",null,r,l);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nr!==0){var z=new FormData(l,m);zf(a,{pending:!0,data:z,method:l.method,action:u},null,z)}}else typeof u=="function"&&(R.preventDefault(),z=new FormData(l,m),zf(a,{pending:!0,data:z,method:l.method,action:u},u,z))},currentTarget:l}]})}}for(var Nd=0;Nd<ef.length;Nd++){var Dd=ef[Nd],wy=Dd.toLowerCase(),Ny=Dd[0].toUpperCase()+Dd.slice(1);Ai(wy,"on"+Ny)}Ai(Cm,"onAnimationEnd"),Ai(wm,"onAnimationIteration"),Ai(Nm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(FS,"onTransitionRun"),Ai(HS,"onTransitionStart"),Ai(GS,"onTransitionCancel"),Ai(Dm,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function i_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var m=r.length-1;0<=m;m--){var R=r[m],z=R.instance,J=R.currentTarget;if(R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=J;try{u(l)}catch(fe){Pl(fe)}l.currentTarget=null,u=z}else for(m=0;m<r.length;m++){if(R=r[m],z=R.instance,J=R.currentTarget,R=R.listener,z!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=J;try{u(l)}catch(fe){Pl(fe)}l.currentTarget=null,u=z}}}}function bt(e,n){var a=n[ae];a===void 0&&(a=n[ae]=new Set);var r=e+"__bubble";a.has(r)||(a_(n,e,2,!1),a.add(r))}function Ud(e,n,a){var r=0;n&&(r|=4),a_(a,e,r,n)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Ld(e){if(!e[Lc]){e[Lc]=!0,Ht.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||Ud(a,!1,e),Ud(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lc]||(n[Lc]=!0,Ud("selectionchange",!1,n))}}function a_(e,n,a,r){switch(Y_(n)){case 2:var l=EM;break;case 8:l=bM;break;default:l=$d}a=l.bind(null,n,a,e),l=void 0,!Hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Od(e,n,a,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var R=r.stateNode.containerInfo;if(R===l)break;if(m===4)for(m=r.return;m!==null;){var z=m.tag;if((z===3||z===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;R!==null;){if(m=rt(R),m===null)return;if(z=m.tag,z===5||z===6||z===26||z===27){r=u=m;continue e}R=R.parentNode}}r=r.return}am(function(){var J=u,fe=Bu(a),ye=[];e:{var Z=Um.get(e);if(Z!==void 0){var se=Ul,Pe=e;switch(e){case"keypress":if(Nl(a)===0)break e;case"keydown":case"keyup":se=mS;break;case"focusin":Pe="focus",se=Xu;break;case"focusout":Pe="blur",se=Xu;break;case"beforeblur":case"afterblur":se=Xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=SS;break;case Cm:case wm:case Nm:se=sS;break;case Dm:se=MS;break;case"scroll":case"scrollend":se=tS;break;case"wheel":se=bS;break;case"copy":case"cut":case"paste":se=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=cm;break;case"submit":se=vS;break;case"toggle":case"beforetoggle":se=AS}var Qe=(n&4)!==0,ht=!Qe&&(e==="scroll"||e==="scrollend"),Q=Qe?Z!==null?Z+"Capture":null:Z;Qe=[];for(var G=J,ie;G!==null;){var Se=G;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||Q===null||(Se=po(G,Q),Se!=null&&Qe.push(Yo(G,Se,ie))),ht)break;G=G.return}0<Qe.length&&(Z=new se(Z,Pe,null,a,fe),ye.push({event:Z,listeners:Qe}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",se&&a!==zu&&(Pe=a.relatedTarget||a.fromElement)&&(rt(Pe)||Pe[he]))break e;(Z||se)&&(Pe=fe.window===fe?fe:(se=fe.ownerDocument)?se.defaultView||se.parentWindow:window,Z?(se=a.relatedTarget||a.toElement,Z=J,se=se?rt(se):null,se!==null&&(ht=f(se),Qe=se.tag,se!==ht||Qe!==5&&Qe!==27&&Qe!==6)&&(se=null)):(Z=null,se=J),Z!==se&&(Qe=om,Se="onMouseLeave",Q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=cm,Se="onPointerLeave",Q="onPointerEnter",G="pointer"),ht=Z==null?Pe:Ye(Z),ie=se==null?Pe:Ye(se),Pe=new Qe(Se,G+"leave",Z,a,fe),Pe.target=ht,Pe.relatedTarget=ie,Se=null,rt(fe)===J&&(Qe=new Qe(Q,G+"enter",se,a,fe),Qe.target=ie,Qe.relatedTarget=ht,Se=Qe),ht=Se,Qe=Z&&se?D(Z,se,Uy):null,Z!==null&&r_(ye,Pe,Z,Qe,!1),se!==null&&ht!==null&&r_(ye,ht,se,Qe,!0)))}e:{if(Z=J?Ye(J):window,se=Z.nodeName&&Z.nodeName.toLowerCase(),se==="select"||se==="input"&&Z.type==="file")var je=_m;else if(mm(Z))if(vm)je=IS;else{je=OS;var Rt=LS}else se=Z.nodeName,!se||se.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?J&&Iu(J.elementType)&&(je=_m):je=PS;if(je&&(je=je(e,J))){gm(ye,je,a,fe);break e}Rt&&Rt(e,Z,J)}switch(Rt=J?Ye(J):window,e){case"focusin":(mm(Rt)||Rt.contentEditable==="true")&&(rs=Rt,Qu=J,Mo=null);break;case"focusout":Mo=Qu=rs=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Am(ye,a,fe);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":Am(ye,a,fe)}var et;if(qu)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else as?hm(e,a)&&(at="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(um&&a.locale!=="ko"&&(as||at!=="onCompositionStart"?at==="onCompositionEnd"&&as&&(et=rm()):(za=fe,Gu="value"in za?za.value:za.textContent,as=!0)),Rt=Oc(J,at),0<Rt.length&&(at=new lm(at,e,null,a,fe),ye.push({event:at,listeners:Rt}),et?at.data=et:(et=pm(a),et!==null&&(at.data=et)))),(et=CS?wS(e,a):NS(e,a))&&(at=Oc(J,"onBeforeInput"),0<at.length&&(Rt=new lm("onBeforeInput","beforeinput",null,a,fe),ye.push({event:Rt,listeners:at}),Rt.data=et)),Cy(ye,e,J,a,fe)}i_(ye,n)})}function Yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Oc(e,n){for(var a=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=po(e,a),l!=null&&r.unshift(Yo(e,l,u)),l=po(e,n),l!=null&&r.push(Yo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function Uy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,n,a,r,l){for(var u=n._reactName,m=[];a!==null&&a!==r;){var R=a,z=R.alternate,J=R.stateNode;if(R=R.tag,z!==null&&z===r)break;R!==5&&R!==26&&R!==27||J===null||(z=J,l?(J=po(a,u),J!=null&&m.unshift(Yo(a,J,z))):l||(J=po(a,u),J!=null&&m.push(Yo(a,J,z)))),a=a.return}m.length!==0&&e.push({event:n,listeners:m})}var Ly=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(Ly,`
`).replace(Oy,"")}function o_(e,n){return n=s_(n),s_(e)===n}function qt(e,n,a,r,l,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ts(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ts(e,""+r);else return;break;case"className":$n(e,"class",r);break;case"tabIndex":$n(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,r);break;case"style":nm(e,r,u);return;case"data":if(n!=="object"){$n(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Cl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&qt(e,n,"name",l.name,l,null),qt(e,n,"formEncType",l.formEncType,l,null),qt(e,n,"formMethod",l.formMethod,l,null),qt(e,n,"formTarget",l.formTarget,l,null)):(qt(e,n,"encType",l.encType,l,null),qt(e,n,"method",l.method,l,null),qt(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Cl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Xi);return;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Cl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":bt("beforetoggle",e),bt("toggle",e),Qt(e,"popover",r);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Qt(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=$x.get(a)||a,Qt(e,a,r);else return}xt=!0}function Pd(e,n,a,r,l,u){switch(a){case"style":nm(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")ts(e,r);else if(typeof r=="number"||typeof r=="bigint")ts(e,""+r);else return;break;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[F]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,l);break e}xt=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Qt(e,a,r)}return}xt=!0}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",e),bt("load",e);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,u,m,a,null)}}l&&qt(e,n,"srcSet",a.srcSet,a,null),r&&qt(e,n,"src",a.src,a,null);return;case"input":bt("invalid",e);var R=u=m=l=null,z=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var fe=a[r];if(fe!=null)switch(r){case"name":l=fe;break;case"type":m=fe;break;case"checked":z=fe;break;case"defaultChecked":J=fe;break;case"value":u=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:qt(e,n,r,fe,a,null)}}Jp(e,u,R,z,J,m,l,!1);return;case"select":bt("invalid",e),r=m=u=null;for(l in a)if(a.hasOwnProperty(l)&&(R=a[l],R!=null))switch(l){case"value":u=R;break;case"defaultValue":m=R;break;case"multiple":r=R;default:qt(e,n,l,R,a,null)}n=u,a=m,e.multiple=!!r,n!=null?es(e,!!r,n,!1):a!=null&&es(e,!!r,a,!0);return;case"textarea":bt("invalid",e),u=l=r=null;for(m in a)if(a.hasOwnProperty(m)&&(R=a[m],R!=null))switch(m){case"value":r=R;break;case"defaultValue":l=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qt(e,n,m,R,a,null)}em(e,r,l,u);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qt(e,n,z,r,a,null)}return;case"dialog":bt("beforetoggle",e),bt("toggle",e),bt("cancel",e),bt("close",e);break;case"iframe":case"object":bt("load",e);break;case"video":case"audio":for(r=0;r<qo.length;r++)bt(qo[r],e);break;case"image":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"embed":case"source":case"link":bt("error",e),bt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,J,r,a,null)}return;default:if(Iu(n)){for(fe in a)a.hasOwnProperty(fe)&&(r=a[fe],r!==void 0&&Pd(e,n,fe,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&qt(e,n,R,r,a,null))}var Py={};function Iy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,R=null,z=null,J=null,fe=null;for(se in a){var ye=a[se];if(a.hasOwnProperty(se)&&ye!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":z=ye;default:r.hasOwnProperty(se)||qt(e,n,se,null,r,ye)}}for(var Z in r){var se=r[Z];if(ye=a[Z],r.hasOwnProperty(Z)&&(se!=null||ye!=null))switch(Z){case"type":se!==ye&&(xt=!0),u=se;break;case"name":se!==ye&&(xt=!0),l=se;break;case"checked":se!==ye&&(xt=!0),J=se;break;case"defaultChecked":se!==ye&&(xt=!0),fe=se;break;case"value":se!==ye&&(xt=!0),m=se;break;case"defaultValue":se!==ye&&(xt=!0),R=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==ye&&qt(e,n,Z,se,r,ye)}}Ou(e,m,R,z,J,fe,u,l);return;case"select":se=m=R=Z=null;for(u in a)if(z=a[u],a.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":se=z;default:r.hasOwnProperty(u)||qt(e,n,u,null,r,z)}for(l in r)if(u=r[l],z=a[l],r.hasOwnProperty(l)&&(u!=null||z!=null))switch(l){case"value":u!==z&&(xt=!0),Z=u;break;case"defaultValue":u!==z&&(xt=!0),R=u;break;case"multiple":u!==z&&(xt=!0),m=u;default:u!==z&&qt(e,n,l,u,r,z)}n=R,a=m,r=se,Z!=null?es(e,!!a,Z,!1):!!r!=!!a&&(n!=null?es(e,!!a,n,!0):es(e,!!a,a?[]:"",!1));return;case"textarea":se=Z=null;for(R in a)if(l=a[R],a.hasOwnProperty(R)&&l!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(e,n,R,null,r,l)}for(m in r)if(l=r[m],u=a[m],r.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":l!==u&&(xt=!0),Z=l;break;case"defaultValue":l!==u&&(xt=!0),se=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&qt(e,n,m,l,r,u)}$p(e,Z,se);return;case"option":for(var Pe in a)if(Z=a[Pe],a.hasOwnProperty(Pe)&&Z!=null&&!r.hasOwnProperty(Pe))switch(Pe){case"selected":e.selected=!1;break;default:qt(e,n,Pe,null,r,Z)}for(z in r)if(Z=r[z],se=a[z],r.hasOwnProperty(z)&&Z!==se&&(Z!=null||se!=null))switch(z){case"selected":Z!==se&&(xt=!0),e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:qt(e,n,z,Z,r,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)Z=a[Qe],a.hasOwnProperty(Qe)&&Z!=null&&!r.hasOwnProperty(Qe)&&qt(e,n,Qe,null,r,Z);for(J in r)if(Z=r[J],se=a[J],r.hasOwnProperty(J)&&Z!==se&&(Z!=null||se!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:qt(e,n,J,Z,r,se)}return;default:if(Iu(n)){for(var ht in a)Z=a[ht],a.hasOwnProperty(ht)&&Z!==void 0&&!r.hasOwnProperty(ht)&&Pd(e,n,ht,void 0,r,Z);for(fe in r)Z=r[fe],se=a[fe],!r.hasOwnProperty(fe)||Z===se||Z===void 0&&se===void 0||Pd(e,n,fe,Z,r,se);return}}for(var Q in a)Z=a[Q],a.hasOwnProperty(Q)&&Z!=null&&!r.hasOwnProperty(Q)&&qt(e,n,Q,null,r,Z);for(ye in r)Z=r[ye],se=a[ye],!r.hasOwnProperty(ye)||Z===se||Z==null&&se==null||qt(e,n,ye,Z,r,se)}function l_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,m=l.initiatorType,R=l.duration;if(u&&R&&l_(m)){for(m=0,R=l.responseEnd,r+=1;r<a.length;r++){var z=a[r],J=z.startTime;if(J>R)break;var fe=z.transferSize,ye=z.initiatorType;fe&&l_(ye)&&(z=z.responseEnd,m+=fe*(z<R?1:(R-J)/(z-J)))}if(--r,n+=8*(u+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Id=null,zd=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function f_(e,n,a,r){return a=jo(a).createElement(e),a[A]=r,a[F]=n,Nn(a,e,n),vt(a),a}function Bd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fd=null;function By(){var e=window.event;return e&&e.type==="popstate"?e===Fd?!1:(Fd=e,!0):(Fd=null,!1)}var Hd=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,h_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hd,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(Gy)}:Hd;function Gy(e){setTimeout(function(){throw e})}function ir(e){return e==="head"}function p_(e,n){var a=n,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(l),Bs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")jd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,jd(a);for(var u=a.firstChild;u;){var m=u.nextSibling,R=u.nodeName;u[Oe]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&jd(e.ownerDocument.body);a=l}while(a);Bs(n)}function m_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function g_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function __(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Vy(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Gd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return Vy(n,a,e)}function ky(e){return e.documentElement.clientHeight}function Xy(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Wy(e,n,a,r,l,u,m,R,z){var J=n.nodeType===9?n:n.ownerDocument;try{var fe=J.startViewTransition({update:function(){var Z=J.defaultView,se=Z.navigation&&Z.navigation.transition,Pe=J.fonts.status;r();var Qe=[];if(Pe==="loaded"&&(ky(J),J.fonts.status==="loading"&&Qe.push(J.fonts.ready)),Pe=Qe.length,e!==null)for(var ht=e.suspenseyImages,Q=0,G=0;G<ht.length;G++){var ie=ht[G];if(!ie.complete){var Se=ie.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<Z.innerHeight&&Se.left<Z.innerWidth){if(Q+=B_(ie),Q>zc){Qe.length=Pe;break}ie=new Promise(Xy.bind(ie)),Qe.push(ie)}}}if(0<Qe.length)return Z=Promise.race([Promise.all(Qe),new Promise(function(je){return setTimeout(je,500)})]).then(l,l),(se?Promise.allSettled([se.finished,Z]):Z).then(u,u);if(l(),se)return se.finished.then(u,u);u()},types:a});J.__reactViewTransition=fe;var ye=[];return fe.ready.then(function(){for(var Z=J.documentElement.getAnimations({subtree:!0}),se=0;se<Z.length;se++){var Pe=Z[se],Qe=Pe.effect,ht=Qe.pseudoElement;if(ht!=null&&ht.startsWith("::view-transition")){ye.push(Pe),Pe=Qe.getKeyframes();for(var Q=ht=void 0,G=!0,ie=0;ie<Pe.length;ie++){var Se=Pe[ie],je=Se.width;if(ht===void 0)ht=je;else if(ht!==je){G=!1;break}if(je=Se.height,Q===void 0)Q=je;else if(Q!==je){G=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}G&&ht!==void 0&&Q!==void 0&&(Qe.setKeyframes(Pe),G=getComputedStyle(Qe.target,Qe.pseudoElement),G.width!==ht||G.height!==Q)&&(G=Pe[0],G.width=ht,G.height=Q,G=Pe[Pe.length-1],G.width=ht,G.height=Q,Qe.setKeyframes(Pe))}}m()},function(Z){J.__reactViewTransition===fe&&(J.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&z(Z)}finally{r(),l(),m()}}),fe.finished.finally(function(){for(var Z=0;Z<ye.length;Z++)ye[Z].cancel();J.__reactViewTransition===fe&&(J.__reactViewTransition=null),R()}),fe}catch{return r(),l(),m(),null}}function Fr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Fr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Fr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[l])}return r},Fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function v_(e){return{name:e,group:new Fr("group",e),imagePair:new Fr("image-pair",e),old:new Fr("old",e),new:new Fr("new",e)}}function si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(e,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(S_(u,e,n,a)===-1){var m=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(z){m.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(l=m.removeEventListener.bind(m,e,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Us(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:l}),_(this._fragmentFiber.child,!1,qy,e,R,r)}this._eventListeners=u}};function qy(e,n,a,r){return y(e).addEventListener(n,a,r),!1}si.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=S_(r,e,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var u=l.cleanup;l=Us(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,Yy,e,a,l),r.splice(n,1),u!==null&&u()}};function Yy(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Us(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function x_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function S_(e,n,a,r){if(e.length===0)return-1;r=x_(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&x_(u.optionsOrUseCapture)===r)return l}return-1}si.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,Us(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,Us(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},si.prototype.focus=function(e){_(this._fragmentFiber.child,!0,y_,e,void 0,void 0)};function y_(e,n){return e.tag===6?!1:(e=y(e),rM(e,n))}si.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,Vd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!y_(n[a],e);a--);};function Vd(e,n){return n.push(e),!1}si.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=y(e),e=jo(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,jy,e,void 0,void 0))};function jy(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,Zy,e,void 0,void 0)};function Zy(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}si.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,Ky,e,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Di[n++]=r}Di.length=n}};function Ky(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Di=[],kd=!1;function Qy(e,n,a){Di.push({fragmentInstance:e,observer:n,instance:a}),kd||(kd=!0,sM(function(){kd=!1;var r=Di;Di=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}si.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,Jy,e,void 0,void 0),e};function Jy(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}si.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},si.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Vd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=C(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(e),R=l.compareDocumentPosition(e),z=m&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&u&&m&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&l===e||z||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$y(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $y(e,n,a,r,l){var u=rt(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=v(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=D(a,u,L),n===null?n=!1:(_(n,!0,Y,u,a),u=S,S=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=D(r,u,L),n===null?n=!1:(_(n,!0,w,u,r),u=S,I=S=null,n=u!==null)),n):!1}function M_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Vd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=C(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),M_(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),M_(l,a)):y(l).scrollIntoView(e),r+=a?-1:1}};function eM(e,n){return e=y(e),E_(e,n),!1}function E_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function b_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.addEventListener(l.type,l.attachedListener,Us(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var m=0,R=0;R<Di.length;R++){var z=Di[R];(z.fragmentInstance!==n||z.observer!==u||z.instance!==e)&&(Di[m++]=z)}Di.length=m,u.observe(e)}),E_(e,n))}function tM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.removeEventListener(l.type,l.attachedListener,Us(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?Qy(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Xd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xd(a),Ke(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function nM(e,n,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function iM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function T_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function Wd(e){return e.data==="$?"||e.data==="$~"}function qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yd=null;function A_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function R_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function rM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function sM(e){h_(function(){h_(function(n){return e(n)})})}function C_(e,n,a){switch(n=jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function w_(e,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&qt(e,n,r,null,Py,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Xi&&(e.onclick=null),Ke(e)}function jd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ke(e)}var yi=new Map,N_=new Set;function Zo(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ba=we.d;we.d={f:oM,r:lM,D:cM,C:uM,L:fM,m:dM,X:pM,S:hM,M:mM};function oM(){var e=ba.f(),n=Cc();return e||n}function lM(e){var n=ut(e);n!==null&&n.tag===5&&n.type==="form"?Ug(n):ba.r(e)}var Ls=typeof document>"u"?null:document;function D_(e,n,a){var r=Ls;if(r&&typeof n=="string"&&n){var l=hi(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),N_.has(l)||(N_.add(l),e={rel:e,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",e),vt(n),r.head.appendChild(n)))}}function cM(e){ba.D(e),D_("dns-prefetch",e,null)}function uM(e,n){ba.C(e,n),D_("preconnect",e,n)}function fM(e,n,a){ba.L(e,n,a);var r=Ls;if(r&&e&&n){var l='link[rel="preload"][as="'+hi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+hi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+hi(a.imageSizes)+'"]')):l+='[href="'+hi(e)+'"]';var u=l;switch(n){case"style":u=Os(e);break;case"script":u=Ps(e)}if(!(yi.has(u)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(u,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Ko(u))||n==="script"&&r.querySelector(Qo(u))))){var m=r.createElement("link");Nn(m,"link",e),n==="style"&&(m[Ze]=!0,m.onload=m.onerror=function(){jt(m)}),vt(m),r.head.appendChild(m)}}}function dM(e,n){ba.m(e,n);var a=Ls;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+hi(r)+'"][href="'+hi(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ps(e)}if(!yi.has(u)&&(e=P({rel:"modulepreload",href:e},n),yi.set(u,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qo(u)))return}r=a.createElement("link"),Nn(r,"link",e),vt(r),a.head.appendChild(r)}}}function hM(e,n,a){ba.S(e,n,a);var r=Ls;if(r&&e){var l=Mt(r).hoistableStyles,u=Os(e);n=n||"default";var m=l.get(u);if(!m){var R={loading:0,preload:null};if(m=r.querySelector(Ko(u)))R.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(u))&&Zd(e,a);var z=m=r.createElement("link");vt(z),Nn(z,"link",e),z._p=new Promise(function(J,fe){z.onload=J,z.onerror=fe}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Pc(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:R},l.set(u,m)}}}function pM(e,n){ba.X(e,n);var a=Ls;if(a&&e){var r=Mt(a).hoistableScripts,l=Ps(e),u=r.get(l);u||(u=a.querySelector(Qo(l)),u||(e=P({src:e,async:!0},n),(n=yi.get(l))&&Kd(e,n),u=a.createElement("script"),vt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function mM(e,n){ba.M(e,n);var a=Ls;if(a&&e){var r=Mt(a).hoistableScripts,l=Ps(e),u=r.get(l);u||(u=a.querySelector(Qo(l)),u||(e=P({src:e,async:!0,type:"module"},n),(n=yi.get(l))&&Kd(e,n),u=a.createElement("script"),vt(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function U_(e,n,a,r){var l=(l=Ot.current)?Zo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Os(a.href),n=Mt(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Os(a.href);var u=Mt(l).hoistableStyles,m=u.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=l.querySelector(Ko(e)))?u._p||(m.instance=u,m.state.loading=5):(u=yi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,u)),gM(l,e,u,m.state))),n&&r===null)throw Error(s(528,""));return m}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ps(a),n=Mt(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Os(e){return'href="'+hi(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function gM(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ze]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Ze]=!0,n.onload=n.onerror=jt.bind(null,n),Nn(n,"link",a),vt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ps(e){return'[src="'+hi(e)+'"]'}function Qo(e){return"script[async]"+e}function O_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+hi(a.href)+'"]');if(r)return n.instance=r,vt(r),r;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),Nn(r,"style",l),Pc(r,a.precedence,e),n.instance=r;case"stylesheet":l=Os(a.href);var u=e.querySelector(Ko(l));if(u)return n.state.loading|=4,n.instance=u,vt(u),u;r=L_(a),(l=yi.get(l))&&Zd(r,l),u=(e.ownerDocument||e).createElement("link"),vt(u);var m=u;return m._p=new Promise(function(R,z){m.onload=R,m.onerror=z}),Nn(u,"link",r),n.state.loading|=4,Pc(u,a.precedence,e),n.instance=u;case"script":return u=Ps(a.src),(l=e.querySelector(Qo(u)))?(n.instance=l,vt(l),l):(r=a,(l=yi.get(u))&&(r=P({},a),Kd(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),vt(l),Nn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Pc(r,a.precedence,e));return n.instance}function Pc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,m=0;m<r.length;m++){var R=r[m];if(R.dataset.precedence===n)u=R;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ic=null;function P_(e,n,a){if(Ic===null){var r=new Map,l=Ic=new Map;l.set(a,r)}else l=Ic,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Oe]||u[A]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(n)||"";m=e+m;var R=r.get(m);R?R.push(u):r.set(m,[u])}}return r}function Qd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _M(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function I_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function z_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function F_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=B_(n),e.suspenseyImages.push(n)),e=SM.bind(e),n.decode().then(e,e))}function vM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Os(r.href),u=n.querySelector(Ko(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,vt(u);return}u=n.ownerDocument||n,r=L_(r),(l=yi.get(l))&&Zd(r,l),u=u.createElement("link"),vt(u);var m=u;m._p=new Promise(function(R,z){m.onload=R,m.onerror=z}),Nn(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zc=0;function xM(e,n){return e.stylesheets&&e.count===0&&Fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&zc===0&&(zc=62500*zy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>zc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function H_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Fc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Jo(){this.count--,H_(this)}function SM(){this.imgCount--,H_(this)}var Bc=null;function Fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,n.forEach(yM,e),Bc=null,Jo.call(e))}function yM(e,n){if(!(n.state.loading&4)){var a=Bc.get(e);if(a)var r=a.get(null);else{a=new Map,Bc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),r=m)}r&&a.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),u=a.get(m)||r,u===r&&a.set(null,l),a.set(m,l),this.count++,r=Jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Is={$$typeof:ee,Provider:null,Consumer:null,_currentValue:Vt,_currentValue2:Vt,_threadCount:0};function MM(e,n,a,r,l,u,m,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function G_(e,n,a,r,l,u,m,R,z,J,fe,ye){return e=new MM(e,n,a,m,z,J,fe,ye,R),n=1,u===!0&&(n|=24),u=Xn(3,null,null,n),e.current=u,u.stateNode=e,n=df(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},gf(u),e}function V_(e){return e?(e=ls,e):ls}function k_(e,n,a,r,l,u){l=V_(l),r.context===null?r.context=l:r.pendingContext=l,r=Wa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=qa(e,r,n),a!==null&&(jn(a,e,n),wo(a,e,n))}function X_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jd(e,n){X_(e,n),(e=e.alternate)&&X_(e,n)}function W_(e){if(e.tag===13||e.tag===31){var n=Mr(e,67108864);n!==null&&jn(n,e,67108864),Jd(e,67108864)}}function q_(e){if(e.tag===13||e.tag===31){var n=ri();n=fo(n);var a=Mr(e,n);a!==null&&jn(a,e,n),Jd(e,n)}}var zs=!0;function EM(e,n,a,r){var l=ve.T;ve.T=null;var u=we.p;try{we.p=2,$d(e,n,a,r)}finally{we.p=u,ve.T=l}}function bM(e,n,a,r){var l=ve.T;ve.T=null;var u=we.p;try{we.p=8,$d(e,n,a,r)}finally{we.p=u,ve.T=l}}function $d(e,n,a,r){if(zs){var l=eh(r);if(l===null)Od(e,n,r,Hc,a),j_(e,r);else if(AM(l,e,n,a,r))r.stopPropagation();else if(j_(e,r),n&4&&-1<TM.indexOf(e)){for(;l!==null;){var u=ut(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ua(u.pendingLanes);if(m!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;m;){var z=1<<31-ct(m);R.entanglements[1]|=z,m&=~z}ea(u),(zt&6)===0&&(Tc=We()+500,Wo(0))}}break;case 31:case 13:R=Mr(u,2),R!==null&&jn(R,u,2),Cc(),Jd(u,2)}if(u=eh(r),u===null&&Od(e,n,r,Hc,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else Od(e,n,r,null,a)}}function eh(e){return e=Bu(e),th(e)}var Hc=null;function th(e){if(Hc=null,e=rt(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hc=e,null}function Y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case lt:return 2;case k:return 8;case Ne:case Me:return 32;case Le:return 268435456;default:return 32}default:return 32}}var nh=!1,ar=null,rr=null,sr=null,$o=new Map,el=new Map,or=[],TM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function tl(e,n,a,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=ut(n),n!==null&&W_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function AM(e,n,a,r,l){switch(n){case"focusin":return ar=tl(ar,e,n,a,r,l),!0;case"dragenter":return rr=tl(rr,e,n,a,r,l),!0;case"mouseover":return sr=tl(sr,e,n,a,r,l),!0;case"pointerover":var u=l.pointerId;return $o.set(u,tl($o.get(u)||null,e,n,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,el.set(u,tl(el.get(u)||null,e,n,a,r,l)),!0}return!1}function Z_(e){var n=rt(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Al(e.priority,function(){q_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Al(e.priority,function(){q_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);zu=r,a.target.dispatchEvent(r),zu=null}else return n=ut(a),n!==null&&W_(n),e.blockedOn=a,!1;n.shift()}return!0}function K_(e,n,a){Gc(e)&&a.delete(n)}function RM(){nh=!1,ar!==null&&Gc(ar)&&(ar=null),rr!==null&&Gc(rr)&&(rr=null),sr!==null&&Gc(sr)&&(sr=null),$o.forEach(K_),el.forEach(K_)}function Vc(e,n){e.blockedOn===n&&(e.blockedOn=null,nh||(nh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,RM)))}var kc=null;function Q_(e){kc!==e&&(kc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kc===e&&(kc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(th(r||a)===null)continue;break}var u=ut(a);u!==null&&(e.splice(n,3),n-=3,zf(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Bs(e){function n(z){return Vc(z,e)}ar!==null&&Vc(ar,e),rr!==null&&Vc(rr,e),sr!==null&&Vc(sr,e),$o.forEach(n),el.forEach(n);for(var a=0;a<or.length;a++){var r=or[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<or.length&&(a=or[0],a.blockedOn===null);)Z_(a),a.blockedOn===null&&or.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],m=l[F]||null;if(typeof u=="function")m||Q_(a);else if(m){var R=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[F]||null)R=m.formAction;else if(th(l)!==null)continue}else R=m.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Q_(a)}}}function J_(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ih(e){this._internalRoot=e}Xc.prototype.render=ih.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ri();k_(a,r,e,n,null,null)},Xc.prototype.unmount=ih.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;k_(e.current,2,null,e,null,null),Cc(),n[he]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<or.length&&n!==0&&n<or[a].priority;a++);or.splice(a,0,e),a===0&&Z_(e)}};var $_=t.version;if($_!=="19.3.1")throw Error(s(527,$_,"19.3.1"));we.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var CM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ve,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{Je=Wc.inject(CM),Ge=Wc}catch{}}return il.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",l=Vg,u=kg,m=Xg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=G_(e,1,!1,null,null,a,r,null,l,u,m,J_),e[he]=n.current,Ld(e),new ih(n)},il.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,l="",u=Vg,m=kg,R=Xg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=G_(e,1,!0,n,a??null,r,l,z,u,m,R,J_),n.context=V_(null),a=n.current,r=ri(),r=fo(r),l=Wa(r),l.callback=null,qa(a,l,r),a=r,n.current.lanes=a,Vi(n,a),ea(n),e[he]=n.current,Ld(e),new Xc(n)},il.version="19.3.1",il}var cv;function BM(){if(cv)return sh.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),sh.exports=zM(),sh.exports}var FM=BM();const HM=fx(FM);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Op="186",GM=0,uv=1,VM=2,gu=1,kM=2,fl=3,Yr=0,Kn=1,aa=2,Na=0,hl=1,fv=2,dv=3,hv=4,XM=5,$s=100,WM=101,qM=102,YM=103,jM=104,ZM=200,KM=201,QM=202,JM=203,hx=204,px=205,$M=206,eE=207,tE=208,nE=209,iE=210,aE=211,rE=212,sE=213,oE=214,Wh=0,qh=1,Yh=2,ml=3,jh=4,Zh=5,Kh=6,Qh=7,mx=0,lE=1,cE=2,oa=0,gx=1,_x=2,vx=3,xx=4,Sx=5,yx=6,Mx=7,Ex=300,jr=301,io=302,uh=303,fh=304,Cu=306,Jh=1e3,Ii=1001,$h=1002,Un=1003,uE=1004,qc=1005,In=1006,dh=1007,Wr=1008,Ti=1009,bx=1010,Tx=1011,gl=1012,Pp=1013,la=1014,ra=1015,ca=1016,Ip=1017,zp=1018,_l=1020,Ax=35902,Rx=35899,Cx=1021,wx=1022,zi=1023,La=1026,qr=1027,Nx=1028,Bp=1029,Zr=1030,Fp=1031,Hp=1033,_u=33776,vu=33777,xu=33778,Su=33779,ep=35840,tp=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37488,lp=37489,Mu=37490,cp=37491,up=37808,fp=37809,dp=37810,hp=37811,pp=37812,mp=37813,gp=37814,_p=37815,vp=37816,xp=37817,Sp=37818,yp=37819,Mp=37820,Ep=37821,bp=36492,Tp=36494,Ap=36495,Rp=36283,Cp=36284,Eu=36285,wp=36286,fE=3200,pv=0,dE=1,mr="",Ei="srgb",bu="srgb-linear",Tu="linear",Yt="srgb",hh=7680,hE=519,pE=512,mE=513,gE=514,Gp=515,_E=516,vE=517,Vp=518,xE=519,SE=35044,mv="300 es",sa=2e3,Au=2001;function yE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function vl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ME(){const o=vl("canvas");return o.style.display="block",o}const gv={};function _v(...o){const t="THREE."+o.shift();console.log(t,...o)}function Dx(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function st(...o){o=Dx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Pt(...o){o=Dx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function to(...o){const t=o.join(" ");t in gv||(gv[t]=!0,st(...o))}function EE(o,t,i){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const bE={[Wh]:qh,[Yh]:Kh,[jh]:Qh,[ml]:Zh,[qh]:Wh,[Kh]:Yh,[Qh]:jh,[Zh]:ml};class Qr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const c=s[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,Np=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Dt(o,t,i){return Math.max(t,Math.min(i,o))}function TE(o,t){return(o%t+t)%t}function mh(o,t,i){return(1-i)*o+i*t}function al(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qp=class qp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*c+t.x,this.y=f*c+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qp.prototype.isVector2=!0;let Ft=qp;class ro{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,f,d,h){let g=s[c+0],p=s[c+1],x=s[c+2],_=s[c+3],v=f[d+0],E=f[d+1],C=f[d+2],U=f[d+3];if(_!==U||g!==v||p!==E||x!==C){let y=g*v+p*E+x*C+_*U;y<0&&(v=-v,E=-E,C=-C,U=-U,y=-y);let S=1-h;if(y<.9995){const I=Math.acos(y),Y=Math.sin(I);S=Math.sin(S*I)/Y,h=Math.sin(h*I)/Y,g=g*S+v*h,p=p*S+E*h,x=x*S+C*h,_=_*S+U*h}else{g=g*S+v*h,p=p*S+E*h,x=x*S+C*h,_=_*S+U*h;const I=1/Math.sqrt(g*g+p*p+x*x+_*_);g*=I,p*=I,x*=I,_*=I}}t[i]=g,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,c,f,d){const h=s[c],g=s[c+1],p=s[c+2],x=s[c+3],_=f[d],v=f[d+1],E=f[d+2],C=f[d+3];return t[i]=h*C+x*_+g*E-p*v,t[i+1]=g*C+x*v+p*_-h*E,t[i+2]=p*C+x*E+h*v-g*_,t[i+3]=x*C-h*_-g*v-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,g=Math.sin,p=h(s/2),x=h(c/2),_=h(f/2),v=g(s/2),E=g(c/2),C=g(f/2);switch(d){case"XYZ":this._x=v*x*_+p*E*C,this._y=p*E*_-v*x*C,this._z=p*x*C+v*E*_,this._w=p*x*_-v*E*C;break;case"YXZ":this._x=v*x*_+p*E*C,this._y=p*E*_-v*x*C,this._z=p*x*C-v*E*_,this._w=p*x*_+v*E*C;break;case"ZXY":this._x=v*x*_-p*E*C,this._y=p*E*_+v*x*C,this._z=p*x*C+v*E*_,this._w=p*x*_-v*E*C;break;case"ZYX":this._x=v*x*_-p*E*C,this._y=p*E*_+v*x*C,this._z=p*x*C-v*E*_,this._w=p*x*_+v*E*C;break;case"YZX":this._x=v*x*_+p*E*C,this._y=p*E*_+v*x*C,this._z=p*x*C-v*E*_,this._w=p*x*_-v*E*C;break;case"XZY":this._x=v*x*_-p*E*C,this._y=p*E*_-v*x*C,this._z=p*x*C+v*E*_,this._w=p*x*_+v*E*C;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],f=i[8],d=i[1],h=i[5],g=i[9],p=i[2],x=i[6],_=i[10],v=s+h+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(x-g)*E,this._y=(f-p)*E,this._z=(d-c)*E}else if(s>h&&s>_){const E=2*Math.sqrt(1+s-h-_);this._w=(x-g)/E,this._x=.25*E,this._y=(c+d)/E,this._z=(f+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-s-_);this._w=(f-p)/E,this._x=(c+d)/E,this._y=.25*E,this._z=(g+x)/E}else{const E=2*Math.sqrt(1+_-s-h);this._w=(d-c)/E,this._x=(f+p)/E,this._y=(g+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,f=t._z,d=t._w,h=i._x,g=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+c*p-f*g,this._y=c*x+d*g+f*h-s*p,this._z=f*x+d*p+s*g-c*h,this._w=d*x-s*h-c*g-f*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,c=-c,f=-f,d=-d,h=-h);let g=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);g=Math.sin(g*p)/x,i=Math.sin(i*p)/x,this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yp=class Yp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,f=t.x,d=t.y,h=t.z,g=t.w,p=2*(d*c-h*s),x=2*(h*i-f*c),_=2*(f*s-d*i);return this.x=i+g*p+d*_-h*x,this.y=s+g*x+h*p-f*_,this.z=c+g*_+f*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,f=t.z,d=i.x,h=i.y,g=i.z;return this.x=c*g-f*h,this.y=f*d-s*g,this.z=s*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return gh.copy(this).projectOnVector(t),this.sub(gh)}reflect(t){return this.sub(gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yp.prototype.isVector3=!0;let pe=Yp;const gh=new pe,vv=new ro,jp=class jp{constructor(t,i,s,c,f,d,h,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,g,p)}set(t,i,s,c,f,d,h,g,p){const x=this.elements;return x[0]=t,x[1]=c,x[2]=h,x[3]=i,x[4]=f,x[5]=g,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[3],g=s[6],p=s[1],x=s[4],_=s[7],v=s[2],E=s[5],C=s[8],U=c[0],y=c[3],S=c[6],I=c[1],Y=c[4],w=c[7],L=c[2],D=c[5],P=c[8];return f[0]=d*U+h*I+g*L,f[3]=d*y+h*Y+g*D,f[6]=d*S+h*w+g*P,f[1]=p*U+x*I+_*L,f[4]=p*y+x*Y+_*D,f[7]=p*S+x*w+_*P,f[2]=v*U+E*I+C*L,f[5]=v*y+E*Y+C*D,f[8]=v*S+E*w+C*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-s*f*x+s*h*g+c*f*p-c*d*g}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],p=t[7],x=t[8],_=x*d-h*p,v=h*g-x*f,E=p*f-d*g,C=i*_+s*v+c*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/C;return t[0]=_*U,t[1]=(c*p-x*s)*U,t[2]=(h*s-c*d)*U,t[3]=v*U,t[4]=(x*i-c*g)*U,t[5]=(c*f-h*i)*U,t[6]=E*U,t[7]=(s*g-p*i)*U,t[8]=(d*i-s*f)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,f,d,h){const g=Math.cos(f),p=Math.sin(f);return this.set(s*g,s*p,-s*(g*d+p*h)+d+t,-c*p,c*g,-c*(-p*d+g*h)+h+i,0,0,1),this}scale(t,i){return to("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_h.makeScale(t,i)),this}rotate(t){return to("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return to("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jp.prototype.isMatrix3=!0;let ft=jp;const _h=new ft,xv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AE(){const o={enabled:!0,workingColorSpace:bu,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Yt&&(c.r=Da(c.r),c.g=Da(c.g),c.b=Da(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Yt&&(c.r=no(c.r),c.g=no(c.g),c.b=no(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===mr?Tu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[bu]:{primaries:t,whitePoint:s,transfer:Tu,toXYZ:xv,fromXYZ:Sv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:s,transfer:Yt,toXYZ:xv,fromXYZ:Sv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),o}const Nt=AE();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Fs;class RE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Fs===void 0&&(Fs=vl("canvas")),Fs.width=t.width,Fs.height=t.height;const c=Fs.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),s=Fs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=vl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Da(f[d]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let CE=0;class kp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=yl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(vh(c[d].image)):f.push(vh(c[d]))}else f=vh(c);s.url=f}return i||(t.images[this.uuid]=s),s}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?RE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let wE=0;const xh=new pe;class zn extends Qr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Ii,c=Ii,f=In,d=Wr,h=zi,g=Ti,p=zn.DEFAULT_ANISOTROPY,x=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=yl(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ex)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jh:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jh:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Ex;zn.DEFAULT_ANISOTROPY=1;const Zp=class Zp{constructor(t=0,i=0,s=0,c=1){this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,f;const g=t.elements,p=g[0],x=g[4],_=g[8],v=g[1],E=g[5],C=g[9],U=g[2],y=g[6],S=g[10];if(Math.abs(x-v)<.01&&Math.abs(_-U)<.01&&Math.abs(C-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(_+U)<.1&&Math.abs(C+y)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const Y=(p+1)/2,w=(E+1)/2,L=(S+1)/2,D=(x+v)/4,P=(_+U)/4,b=(C+y)/4;return Y>w&&Y>L?Y<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(Y),c=D/s,f=P/s):w>L?w<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(w),s=D/c,f=b/c):L<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(L),s=P/f,c=b/f),this.set(s,c,f,i),this}let I=Math.sqrt((y-C)*(y-C)+(_-U)*(_-U)+(v-x)*(v-x));return Math.abs(I)<.001&&(I=1),this.x=(y-C)/I,this.y=(_-U)/I,this.z=(v-x)/I,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this.w=Dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this.w=Dt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zp.prototype.isVector4=!0;let cn=Zp;class NE extends Qr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:s.depth},f=new zn(c),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new kp(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends NE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Ux extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DE extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ru=class Ru{constructor(t,i,s,c,f,d,h,g,p,x,_,v,E,C,U,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,g,p,x,_,v,E,C,U,y)}set(t,i,s,c,f,d,h,g,p,x,_,v,E,C,U,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=c,S[1]=f,S[5]=d,S[9]=h,S[13]=g,S[2]=p,S[6]=x,S[10]=_,S[14]=v,S[3]=E,S[7]=C,S[11]=U,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,c=1/Hs.setFromMatrixColumn(t,0).length(),f=1/Hs.setFromMatrixColumn(t,1).length(),d=1/Hs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,f=t.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(c),p=Math.sin(c),x=Math.cos(f),_=Math.sin(f);if(t.order==="XYZ"){const v=d*x,E=d*_,C=h*x,U=h*_;i[0]=g*x,i[4]=-g*_,i[8]=p,i[1]=E+C*p,i[5]=v-U*p,i[9]=-h*g,i[2]=U-v*p,i[6]=C+E*p,i[10]=d*g}else if(t.order==="YXZ"){const v=g*x,E=g*_,C=p*x,U=p*_;i[0]=v+U*h,i[4]=C*h-E,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=E*h-C,i[6]=U+v*h,i[10]=d*g}else if(t.order==="ZXY"){const v=g*x,E=g*_,C=p*x,U=p*_;i[0]=v-U*h,i[4]=-d*_,i[8]=C+E*h,i[1]=E+C*h,i[5]=d*x,i[9]=U-v*h,i[2]=-d*p,i[6]=h,i[10]=d*g}else if(t.order==="ZYX"){const v=d*x,E=d*_,C=h*x,U=h*_;i[0]=g*x,i[4]=C*p-E,i[8]=v*p+U,i[1]=g*_,i[5]=U*p+v,i[9]=E*p-C,i[2]=-p,i[6]=h*g,i[10]=d*g}else if(t.order==="YZX"){const v=d*g,E=d*p,C=h*g,U=h*p;i[0]=g*x,i[4]=U-v*_,i[8]=C*_+E,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=E*_+C,i[10]=v-U*_}else if(t.order==="XZY"){const v=d*g,E=d*p,C=h*g,U=h*p;i[0]=g*x,i[4]=-_,i[8]=p*x,i[1]=v*_+U,i[5]=d*x,i[9]=E*_-C,i[2]=C*_-E,i[6]=h*x,i[10]=U*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UE,t,LE)}lookAt(t,i,s){const c=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),cr.crossVectors(s,oi),cr.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),cr.crossVectors(s,oi)),cr.normalize(),Yc.crossVectors(oi,cr),c[0]=cr.x,c[4]=Yc.x,c[8]=oi.x,c[1]=cr.y,c[5]=Yc.y,c[9]=oi.y,c[2]=cr.z,c[6]=Yc.z,c[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[4],g=s[8],p=s[12],x=s[1],_=s[5],v=s[9],E=s[13],C=s[2],U=s[6],y=s[10],S=s[14],I=s[3],Y=s[7],w=s[11],L=s[15],D=c[0],P=c[4],b=c[8],N=c[12],H=c[1],V=c[5],$=c[9],ne=c[13],K=c[2],ee=c[6],X=c[10],q=c[14],ue=c[3],le=c[7],ce=c[11],xe=c[15];return f[0]=d*D+h*H+g*K+p*ue,f[4]=d*P+h*V+g*ee+p*le,f[8]=d*b+h*$+g*X+p*ce,f[12]=d*N+h*ne+g*q+p*xe,f[1]=x*D+_*H+v*K+E*ue,f[5]=x*P+_*V+v*ee+E*le,f[9]=x*b+_*$+v*X+E*ce,f[13]=x*N+_*ne+v*q+E*xe,f[2]=C*D+U*H+y*K+S*ue,f[6]=C*P+U*V+y*ee+S*le,f[10]=C*b+U*$+y*X+S*ce,f[14]=C*N+U*ne+y*q+S*xe,f[3]=I*D+Y*H+w*K+L*ue,f[7]=I*P+Y*V+w*ee+L*le,f[11]=I*b+Y*$+w*X+L*ce,f[15]=I*N+Y*ne+w*q+L*xe,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[12],d=t[1],h=t[5],g=t[9],p=t[13],x=t[2],_=t[6],v=t[10],E=t[14],C=t[3],U=t[7],y=t[11],S=t[15],I=g*E-p*v,Y=h*E-p*_,w=h*v-g*_,L=d*E-p*x,D=d*v-g*x,P=d*_-h*x;return i*(U*I-y*Y+S*w)-s*(C*I-y*L+S*D)+c*(C*Y-U*L+S*P)-f*(C*w-U*D+y*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[1],d=t[5],h=t[9],g=t[2],p=t[6],x=t[10];return i*(d*x-h*p)-s*(f*x-h*g)+c*(f*p-d*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],p=t[7],x=t[8],_=t[9],v=t[10],E=t[11],C=t[12],U=t[13],y=t[14],S=t[15],I=i*h-s*d,Y=i*g-c*d,w=i*p-f*d,L=s*g-c*h,D=s*p-f*h,P=c*p-f*g,b=x*U-_*C,N=x*y-v*C,H=x*S-E*C,V=_*y-v*U,$=_*S-E*U,ne=v*S-E*y,K=I*ne-Y*$+w*V+L*H-D*N+P*b;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/K;return t[0]=(h*ne-g*$+p*V)*ee,t[1]=(c*$-s*ne-f*V)*ee,t[2]=(U*P-y*D+S*L)*ee,t[3]=(v*D-_*P-E*L)*ee,t[4]=(g*H-d*ne-p*N)*ee,t[5]=(i*ne-c*H+f*N)*ee,t[6]=(y*w-C*P-S*Y)*ee,t[7]=(x*P-v*w+E*Y)*ee,t[8]=(d*$-h*H+p*b)*ee,t[9]=(s*H-i*$-f*b)*ee,t[10]=(C*D-U*w+S*I)*ee,t[11]=(_*w-x*D-E*I)*ee,t[12]=(h*N-d*V-g*b)*ee,t[13]=(i*V-s*N+c*b)*ee,t[14]=(U*Y-C*L-y*I)*ee,t[15]=(x*L-_*Y+v*I)*ee,this}scale(t){const i=this.elements,s=t.x,c=t.y,f=t.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,d=t.x,h=t.y,g=t.z,p=f*d,x=f*h;return this.set(p*d+s,p*h-c*g,p*g+c*h,0,p*h+c*g,x*h+s,x*g-c*d,0,p*g-c*h,x*g+c*d,f*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,f,d){return this.set(1,s,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,f=i._x,d=i._y,h=i._z,g=i._w,p=f+f,x=d+d,_=h+h,v=f*p,E=f*x,C=f*_,U=d*x,y=d*_,S=h*_,I=g*p,Y=g*x,w=g*_,L=s.x,D=s.y,P=s.z;return c[0]=(1-(U+S))*L,c[1]=(E+w)*L,c[2]=(C-Y)*L,c[3]=0,c[4]=(E-w)*D,c[5]=(1-(v+S))*D,c[6]=(y+I)*D,c[7]=0,c[8]=(C+Y)*P,c[9]=(y-I)*P,c[10]=(1-(v+U))*P,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Hs.set(c[0],c[1],c[2]).length();const h=Hs.set(c[4],c[5],c[6]).length(),g=Hs.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Ui.copy(this);const p=1/d,x=1/h,_=1/g;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=x,Ui.elements[5]*=x,Ui.elements[6]*=x,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),s.x=d,s.y=h,s.z=g,this}makePerspective(t,i,s,c,f,d,h=sa,g=!1){const p=this.elements,x=2*f/(i-t),_=2*f/(s-c),v=(i+t)/(i-t),E=(s+c)/(s-c);let C,U;if(g)C=f/(d-f),U=d*f/(d-f);else if(h===sa)C=-(d+f)/(d-f),U=-2*d*f/(d-f);else if(h===Au)C=-d/(d-f),U=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,c,f,d,h=sa,g=!1){const p=this.elements,x=2/(i-t),_=2/(s-c),v=-(i+t)/(i-t),E=-(s+c)/(s-c);let C,U;if(g)C=1/(d-f),U=d/(d-f);else if(h===sa)C=-2/(d-f),U=-(d+f)/(d-f);else if(h===Au)C=-1/(d-f),U=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=C,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Ru.prototype.isMatrix4=!0;let _n=Ru;const Hs=new pe,Ui=new _n,UE=new pe(0,0,0),LE=new pe(1,1,1),cr=new pe,Yc=new pe,oi=new pe,yv=new _n,Mv=new ro;class Kr{constructor(t=0,i=0,s=0,c=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],g=c[1],p=c[5],x=c[9],_=c[2],v=c[6],E=c[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Dt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return yv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Mv.setFromEuler(this),this.setFromQuaternion(Mv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class Lx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OE=0;const Ev=new pe,Gs=new ro,Ta=new _n,jc=new pe,rl=new pe,PE=new pe,IE=new ro,bv=new pe(1,0,0),Tv=new pe(0,1,0),Av=new pe(0,0,1),Rv={type:"added"},zE={type:"removed"},Vs={type:"childadded",child:null},Sh={type:"childremoved",child:null};class ui extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new pe,i=new Kr,s=new ro,c=new pe(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new _n},normalMatrix:{value:new ft}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Gs.setFromAxisAngle(t,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,i){return Gs.setFromAxisAngle(t,i),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(bv,t)}rotateY(t){return this.rotateOnAxis(Tv,t)}rotateZ(t){return this.rotateOnAxis(Av,t)}translateOnAxis(t,i){return Ev.copy(t).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bv,t)}translateY(t){return this.translateOnAxis(Tv,t)}translateZ(t){return this.translateOnAxis(Av,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?jc.copy(t):jc.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(rl,jc,this.up):Ta.lookAt(jc,rl,this.up),this.quaternion.setFromRotationMatrix(Ta),c&&(Ta.extractRotation(c.matrixWorld),Gs.setFromRotationMatrix(Ta),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rv),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zE),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rv),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,t,PE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,IE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*c,f[13]+=s-f[1]*i-f[5]*s-f[9]*c,f[14]+=c-f[2]*i-f[6]*s-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let p=0,x=g.length;p<x;p++){const _=g[p];f(t.shapes,_)}else f(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,p=this.material.length;g<p;g++)h.push(f(t.materials,this.material[g]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];c.animations.push(f(t.animations,g))}}if(i){const h=d(t.geometries),g=d(t.materials),p=d(t.textures),x=d(t.images),_=d(t.shapes),v=d(t.skeletons),E=d(t.animations),C=d(t.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),E.length>0&&(s.animations=E),C.length>0&&(s.nodes=C)}return s.object=c,s;function d(h){const g=[];for(const p in h){const x=h[p];delete x.metadata,g.push(x)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ui.DEFAULT_UP=new pe(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,f=null,d=null;const h=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const U of t.hand.values()){const y=i.getJointPose(U,s),S=this._getHandJoint(p,U);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=x.position.distanceTo(_.position),E=.02,C=.005;p.inputState.pinching&&v>E+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=E-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return h!==null&&(h.visible=c!==null),g!==null&&(g.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Zc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Mh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,c=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,c),this}setHSL(t,i,s,c=Nt.workingColorSpace){if(t=TE(t,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Mh(d,f,t+1/3),this.g=Mh(d,f,t),this.b=Mh(d,f,t-1/3)}return Nt.colorSpaceToWorking(this,c),this}setStyle(t,i=Ei){function s(f){f!==void 0&&parseFloat(f)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ei){const s=Ox[t.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return Nt.workingToColorSpace(Pn.copy(this),t),Math.round(Dt(Pn.r*255,0,255))*65536+Math.round(Dt(Pn.g*255,0,255))*256+Math.round(Dt(Pn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let g,p;const x=(h+d)/2;if(h===d)g=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case s:g=(c-f)/_+(c<f?6:0);break;case c:g=(f-s)/_+2;break;case f:g=(s-c)/_+4;break}g/=6}return t.h=g,t.s=p,t.l=x,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Ei){Nt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,c=Pn.b;return t!==Ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Kc);const s=mh(ur.h,Kc.h,i),c=mh(ur.s,Kc.s,i),f=mh(ur.l,Kc.l,i);return this.setHSL(s,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Bt;Bt.NAMES=Ox;class FE extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new pe,Aa=new pe,Eh=new pe,Ra=new pe,ks=new pe,Xs=new pe,Cv=new pe,bh=new pe,Th=new pe,Ah=new pe,Rh=new cn,Ch=new cn,wh=new cn;class Pi{constructor(t=new pe,i=new pe,s=new pe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),Li.subVectors(t,i),c.cross(Li);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,s,c,f){Li.subVectors(c,i),Aa.subVectors(s,i),Eh.subVectors(t,i);const d=Li.dot(Li),h=Li.dot(Aa),g=Li.dot(Eh),p=Aa.dot(Aa),x=Aa.dot(Eh),_=d*p-h*h;if(_===0)return f.set(0,0,0),null;const v=1/_,E=(p*g-h*x)*v,C=(d*x-h*g)*v;return f.set(1-E-C,C,E)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,i,s,c,f,d,h,g){return this.getBarycoord(t,i,s,c,Ra)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Ra.x),g.addScaledVector(d,Ra.y),g.addScaledVector(h,Ra.z),g)}static getInterpolatedAttribute(t,i,s,c,f,d){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,s),wh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Rh,f.x),d.addScaledVector(Ch,f.y),d.addScaledVector(wh,f.z),d}static isFrontFacing(t,i,s,c){return Li.subVectors(s,i),Aa.subVectors(t,i),Li.cross(Aa).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Li.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,f){return Pi.getInterpolation(t,this.a,this.b,this.c,i,s,c,f)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,f=this.c;let d,h;ks.subVectors(c,s),Xs.subVectors(f,s),bh.subVectors(t,s);const g=ks.dot(bh),p=Xs.dot(bh);if(g<=0&&p<=0)return i.copy(s);Th.subVectors(t,c);const x=ks.dot(Th),_=Xs.dot(Th);if(x>=0&&_<=x)return i.copy(c);const v=g*_-x*p;if(v<=0&&g>=0&&x<=0)return d=g/(g-x),i.copy(s).addScaledVector(ks,d);Ah.subVectors(t,f);const E=ks.dot(Ah),C=Xs.dot(Ah);if(C>=0&&E<=C)return i.copy(f);const U=E*p-g*C;if(U<=0&&p>=0&&C<=0)return h=p/(p-C),i.copy(s).addScaledVector(Xs,h);const y=x*C-E*_;if(y<=0&&_-x>=0&&E-C>=0)return Cv.subVectors(f,c),h=(_-x)/(_-x+(E-C)),i.copy(c).addScaledVector(Cv,h);const S=1/(y+U+v);return d=U*S,h=v*S,i.copy(s).addScaledVector(ks,d).addScaledVector(Xs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ml{constructor(t=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Oi):Oi.fromBufferAttribute(f,d),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Qc.copy(s.boundingBox)),Qc.applyMatrix4(t.matrixWorld),this.union(Qc)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sl),Jc.subVectors(this.max,sl),Ws.subVectors(t.a,sl),qs.subVectors(t.b,sl),Ys.subVectors(t.c,sl),fr.subVectors(qs,Ws),dr.subVectors(Ys,qs),Hr.subVectors(Ws,Ys);let i=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Hr.z,Hr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Hr.z,0,-Hr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Hr.y,Hr.x,0];return!Nh(i,Ws,qs,Ys,Jc)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,Ws,qs,Ys,Jc))?!1:($c.crossVectors(fr,dr),i=[$c.x,$c.y,$c.z],Nh(i,Ws,qs,Ys,Jc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Oi=new pe,Qc=new Ml,Ws=new pe,qs=new pe,Ys=new pe,fr=new pe,dr=new pe,Hr=new pe,sl=new pe,Jc=new pe,$c=new pe,Gr=new pe;function Nh(o,t,i,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Gr.fromArray(o,f);const h=c.x*Math.abs(Gr.x)+c.y*Math.abs(Gr.y)+c.z*Math.abs(Gr.z),g=t.dot(Gr),p=i.dot(Gr),x=s.dot(Gr);if(Math.max(-Math.max(g,p,x),Math.min(g,p,x))>h)return!1}return!0}const gn=new pe,eu=new Ft;let HE=0;class Fi extends Qr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=SE,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(t),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=al(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=al(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=al(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=al(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=al(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,f){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array),f=Zn(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Px extends Fi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ix extends Fi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ua extends Fi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const GE=new Ml,ol=new pe,Dh=new pe;class Xp{constructor(t=new pe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):GE.setFromPoints(t).getCenter(s);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(ol,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(Dh)),this.expandByPoint(ol.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let VE=0;const Mi=new _n,Uh=new ui,js=new pe,li=new Ml,ll=new Ml,Tn=new pe;class Oa extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yE(t)?Ix:Px)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ft().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,s){return Mi.makeTranslation(t,i,s),this.applyMatrix4(Mi),this}scale(t,i,s){return Mi.makeScale(t,i,s),this.applyMatrix4(Mi),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ua(s,3))}else{const s=Math.min(t.length,i.count);for(let c=0;c<s;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];ll.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(li.min,ll.min),li.expandByPoint(Tn),Tn.addVectors(li.max,ll.max),li.expandByPoint(Tn)):(li.expandByPoint(ll.min),li.expandByPoint(ll.max))}li.getCenter(s);let c=0;for(let f=0,d=t.count;f<d;f++)Tn.fromBufferAttribute(t,f),c=Math.max(c,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],g=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Tn.fromBufferAttribute(h,p),g&&(js.fromBufferAttribute(t,p),Tn.add(js)),c=Math.max(c,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Fi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],g=[];for(let b=0;b<s.count;b++)h[b]=new pe,g[b]=new pe;const p=new pe,x=new pe,_=new pe,v=new Ft,E=new Ft,C=new Ft,U=new pe,y=new pe;function S(b,N,H){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,N),_.fromBufferAttribute(s,H),v.fromBufferAttribute(f,b),E.fromBufferAttribute(f,N),C.fromBufferAttribute(f,H),x.sub(p),_.sub(p),E.sub(v),C.sub(v);const V=1/(E.x*C.y-C.x*E.y);isFinite(V)&&(U.copy(x).multiplyScalar(C.y).addScaledVector(_,-E.y).multiplyScalar(V),y.copy(_).multiplyScalar(E.x).addScaledVector(x,-C.x).multiplyScalar(V),h[b].add(U),h[N].add(U),h[H].add(U),g[b].add(y),g[N].add(y),g[H].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let b=0,N=I.length;b<N;++b){const H=I[b],V=H.start,$=H.count;for(let ne=V,K=V+$;ne<K;ne+=3)S(t.getX(ne+0),t.getX(ne+1),t.getX(ne+2))}const Y=new pe,w=new pe,L=new pe,D=new pe;function P(b){L.fromBufferAttribute(c,b),D.copy(L);const N=h[b];Y.copy(N),Y.sub(L.multiplyScalar(L.dot(N))).normalize(),w.crossVectors(D,N);const V=w.dot(g[b])<0?-1:1;d.setXYZW(b,Y.x,Y.y,Y.z,V)}for(let b=0,N=I.length;b<N;++b){const H=I[b],V=H.start,$=H.count;for(let ne=V,K=V+$;ne<K;ne+=3)P(t.getX(ne+0)),P(t.getX(ne+1)),P(t.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,E=s.count;v<E;v++)s.setXYZ(v,0,0,0);const c=new pe,f=new pe,d=new pe,h=new pe,g=new pe,p=new pe,x=new pe,_=new pe;if(t)for(let v=0,E=t.count;v<E;v+=3){const C=t.getX(v+0),U=t.getX(v+1),y=t.getX(v+2);c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,U),d.fromBufferAttribute(i,y),x.subVectors(d,f),_.subVectors(c,f),x.cross(_),h.fromBufferAttribute(s,C),g.fromBufferAttribute(s,U),p.fromBufferAttribute(s,y),h.add(x),g.add(x),p.add(x),s.setXYZ(C,h.x,h.y,h.z),s.setXYZ(U,g.x,g.y,g.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,E=i.count;v<E;v+=3)c.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,f),_.subVectors(c,f),x.cross(_),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,g){const p=h.array,x=h.itemSize,_=h.normalized,v=new p.constructor(g.length*x);let E=0,C=0;for(let U=0,y=g.length;U<y;U++){h.isInterleavedBufferAttribute?E=g[U]*h.data.stride+h.offset:E=g[U]*x;for(let S=0;S<x;S++)v[C++]=p[E++]}return new Fi(v,x,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oa,s=this.index.array,c=this.attributes;for(const h in c){const g=c[h],p=t(g,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const g=[],p=f[h];for(let x=0,_=p.length;x<_;x++){const v=p[x],E=t(v,s);g.push(E)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const c={};let f=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],x=[];for(let _=0,v=p.length;_<v;_++){const E=p[_];x.push(E.toJSON(t.data))}x.length>0&&(c[g]=x,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const c=t.attributes;for(const p in c){const x=c[p];this.setAttribute(p,x.clone(i))}const f=t.morphAttributes;for(const p in f){const x=[],_=f[p];for(let v=0,E=_.length;v<E;v++)x.push(_[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new pe,kE=new pe,XE=new ft;class pr{constructor(t=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=Lh.subVectors(s,i).cross(kE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const c=t.delta(Lh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||XE.getNormalMatrix(t),c=this.coplanarPoint(Lh).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let WE=0;class wu extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=hl,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hx,this.blendDst=px,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hh,this.stencilZFail=hh,this.stencilZPass=hh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new pr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ft().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new pe,Oh=new pe,tu=new pe,nu=new pe;class qE{constructor(t=new pe,i=new pe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=wa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){Oh.copy(t).add(i).multiplyScalar(.5),tu.copy(i).sub(t).normalize(),nu.copy(this.origin).sub(Oh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(tu),h=nu.dot(this.direction),g=-nu.dot(tu),p=nu.lengthSq(),x=Math.abs(1-d*d);let _,v,E,C;if(x>0)if(_=d*g-h,v=d*h-g,C=f*x,_>=0)if(v>=-C)if(v<=C){const U=1/x;_*=U,v*=U,E=_*(_+d*v+2*h)+v*(d*_+v+2*g)+p}else v=f,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*g)+p;else v=-f,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*g)+p;else v<=-C?(_=Math.max(0,-(-d*f+h)),v=_>0?-f:Math.min(Math.max(-f,-g),f),E=-_*_+v*(v+2*g)+p):v<=C?(_=0,v=Math.min(Math.max(-f,-g),f),E=v*(v+2*g)+p):(_=Math.max(0,-(d*f+h)),v=_>0?f:Math.min(Math.max(-f,-g),f),E=-_*_+v*(v+2*g)+p);else v=d>0?-f:f,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),c&&c.copy(Oh).addScaledVector(tu,v),E}intersectSphere(t,i){if(t.radius<0)return null;wa.subVectors(t.center,this.origin);const s=wa.dot(this.direction),c=wa.dot(wa)-s*s,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,f,d,h,g;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,c=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,c=(t.min.x-v.x)*p),x>=0?(f=(t.min.y-v.y)*x,d=(t.max.y-v.y)*x):(f=(t.max.y-v.y)*x,d=(t.min.y-v.y)*x),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),_>=0?(h=(t.min.z-v.z)*_,g=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,g=(t.min.z-v.z)*_),s>g||h>c)||((h>s||s!==s)&&(s=h),(g<c||c!==c)&&(c=g),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,i,s,c,f){const d=this.origin,h=this.direction,g=h.x,p=h.y,x=h.z,_=t.x-d.x,v=t.y-d.y,E=t.z-d.z,C=i.x-d.x,U=i.y-d.y,y=i.z-d.z,S=s.x-d.x,I=s.y-d.y,Y=s.z-d.z,w=Math.abs(g),L=Math.abs(p),D=Math.abs(x);let P,b,N,H,V,$,ne,K,ee,X,q,ue;if(w>=L&&w>=D?(N=g,$=_,ee=C,ue=S,g>=0?(P=p,b=x,H=v,V=E,ne=U,K=y,X=I,q=Y):(P=x,b=p,H=E,V=v,ne=y,K=U,X=Y,q=I)):L>=D?(N=p,$=v,ee=U,ue=I,p>=0?(P=x,b=g,H=E,V=_,ne=y,K=C,X=Y,q=S):(P=g,b=x,H=_,V=E,ne=C,K=y,X=S,q=Y)):(N=x,$=E,ee=y,ue=Y,x>=0?(P=g,b=p,H=_,V=v,ne=C,K=U,X=S,q=I):(P=p,b=g,H=v,V=_,ne=U,K=C,X=I,q=S)),N===0)return null;const le=P/N,ce=b/N,xe=1/N,Xe=H-le*$,Ve=V-ce*$,B=ne-le*ee,me=K-ce*ee,Ae=X-le*ue,j=q-ce*ue,de=Ae*me-j*B,be=Xe*j-Ve*Ae,Ce=B*Ve-me*Xe;if(c){if(de<0||be<0||Ce<0)return null}else if((de<0||be<0||Ce<0)&&(de>0||be>0||Ce>0))return null;const ve=de+be+Ce;if(ve===0)return null;const we=xe*(de*$+be*ee+Ce*ue);return(ve>0?we<0:we>0)?null:this.at(we/ve,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pl extends wu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wv=new _n,Vr=new qE,iu=new Xp,Nv=new pe,au=new pe,ru=new pe,su=new pe,Ph=new pe,ou=new pe,Dv=new pe,lu=new pe;class ci extends ui{constructor(t=new Oa,i=new pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){ou.set(0,0,0);for(let g=0,p=f.length;g<p;g++){const x=h[g],_=f[g];x!==0&&(Ph.fromBufferAttribute(_,t),d?ou.addScaledVector(Ph,x):ou.addScaledVector(Ph.sub(i),x))}i.add(ou)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(f),Vr.copy(t.ray).recast(t.near),!(iu.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(iu,Nv)===null||Vr.origin.distanceToSquared(Nv)>(t.far-t.near)**2))&&(wv.copy(f).invert(),Vr.copy(t.ray).applyMatrix4(wv),!(s.boundingBox!==null&&Vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Vr)))}_computeIntersections(t,i,s){let c;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,p=f.attributes.uv,x=f.attributes.uv1,_=f.attributes.normal,v=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let C=0,U=v.length;C<U;C++){const y=v[C],S=d[y.materialIndex],I=Math.max(y.start,E.start),Y=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let w=I,L=Y;w<L;w+=3){const D=h.getX(w),P=h.getX(w+1),b=h.getX(w+2);c=cu(this,S,t,s,p,x,_,D,P,b),c&&(c.faceIndex=Math.floor(w/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const C=Math.max(0,E.start),U=Math.min(h.count,E.start+E.count);for(let y=C,S=U;y<S;y+=3){const I=h.getX(y),Y=h.getX(y+1),w=h.getX(y+2);c=cu(this,d,t,s,p,x,_,I,Y,w),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(d))for(let C=0,U=v.length;C<U;C++){const y=v[C],S=d[y.materialIndex],I=Math.max(y.start,E.start),Y=Math.min(g.count,Math.min(y.start+y.count,E.start+E.count));for(let w=I,L=Y;w<L;w+=3){const D=w,P=w+1,b=w+2;c=cu(this,S,t,s,p,x,_,D,P,b),c&&(c.faceIndex=Math.floor(w/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const C=Math.max(0,E.start),U=Math.min(g.count,E.start+E.count);for(let y=C,S=U;y<S;y+=3){const I=y,Y=y+1,w=y+2;c=cu(this,d,t,s,p,x,_,I,Y,w),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}}}function YE(o,t,i,s,c,f,d,h){let g;if(t.side===Kn?g=s.intersectTriangle(d,f,c,!0,h):g=s.intersectTriangle(c,f,d,t.side===Yr,h),g===null)return null;lu.copy(h),lu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lu);return p<i.near||p>i.far?null:{distance:p,point:lu.clone(),object:o}}function cu(o,t,i,s,c,f,d,h,g,p){o.getVertexPosition(h,au),o.getVertexPosition(g,ru),o.getVertexPosition(p,su);const x=YE(o,t,i,s,au,ru,su,Dv);if(x){const _=new pe;Pi.getBarycoord(Dv,au,ru,su,_),c&&(x.uv=Pi.getInterpolatedAttribute(c,h,g,p,_,new Ft)),f&&(x.uv1=Pi.getInterpolatedAttribute(f,h,g,p,_,new Ft)),d&&(x.normal=Pi.getInterpolatedAttribute(d,h,g,p,_,new pe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:g,c:p,normal:new pe,materialIndex:0};Pi.getNormal(au,ru,su,v.normal),x.face=v,x.barycoord=_}return x}class jE extends zn{constructor(t=null,i=1,s=1,c,f,d,h,g,p=Un,x=Un,_,v){super(null,d,h,g,p,x,c,f,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kr=new Xp,ZE=new Ft(.5,.5),uu=new pe;class zx{constructor(t=new pr,i=new pr,s=new pr,c=new pr,f=new pr,d=new pr){this.planes=[t,i,s,c,f,d]}set(t,i,s,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],g=f[2],p=f[3],x=f[4],_=f[5],v=f[6],E=f[7],C=f[8],U=f[9],y=f[10],S=f[11],I=f[12],Y=f[13],w=f[14],L=f[15];if(c[0].setComponents(p-d,E-x,S-C,L-I).normalize(),c[1].setComponents(p+d,E+x,S+C,L+I).normalize(),c[2].setComponents(p+h,E+_,S+U,L+Y).normalize(),c[3].setComponents(p-h,E-_,S-U,L-Y).normalize(),s)c[4].setComponents(g,v,y,w).normalize(),c[5].setComponents(p-g,E-v,S-y,L-w).normalize();else if(c[4].setComponents(p-g,E-v,S-y,L-w).normalize(),i===sa)c[5].setComponents(p+g,E+v,S+y,L+w).normalize();else if(i===Au)c[5].setComponents(g,v,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(t){kr.center.set(0,0,0);const i=ZE.distanceTo(t.center);return kr.radius=.7071067811865476+i,kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(uu.x=c.normal.x>0?t.max.x:t.min.x,uu.y=c.normal.y>0?t.max.y:t.min.y,uu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(uu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bx extends zn{constructor(t=[],i=jr,s,c,f,d,h,g,p,x){super(t,i,s,c,f,d,h,g,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xl extends zn{constructor(t,i,s=la,c,f,d,h=Un,g=Un,p,x=La,_=1){if(x!==La&&x!==qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,c,f,d,h,g,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class KE extends xl{constructor(t,i=la,s=jr,c,f,d=Un,h=Un,g,p=La){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,s,c,f,d,h,g,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fx extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class El extends Oa{constructor(t=1,i=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const g=[],p=[],x=[],_=[];let v=0,E=0;C("z","y","x",-1,-1,s,i,t,d,f,0),C("z","y","x",1,-1,s,i,-t,d,f,1),C("x","z","y",1,1,t,s,i,c,d,2),C("x","z","y",1,-1,t,s,-i,c,d,3),C("x","y","z",1,-1,t,i,s,c,f,4),C("x","y","z",-1,-1,t,i,-s,c,f,5),this.setIndex(g),this.setAttribute("position",new Ua(p,3)),this.setAttribute("normal",new Ua(x,3)),this.setAttribute("uv",new Ua(_,2));function C(U,y,S,I,Y,w,L,D,P,b,N){const H=w/P,V=L/b,$=w/2,ne=L/2,K=D/2,ee=P+1,X=b+1;let q=0,ue=0;const le=new pe;for(let ce=0;ce<X;ce++){const xe=ce*V-ne;for(let Xe=0;Xe<ee;Xe++){const Ve=Xe*H-$;le[U]=Ve*I,le[y]=xe*Y,le[S]=K,p.push(le.x,le.y,le.z),le[U]=0,le[y]=0,le[S]=D>0?1:-1,x.push(le.x,le.y,le.z),_.push(Xe/P),_.push(1-ce/b),q+=1}}for(let ce=0;ce<b;ce++)for(let xe=0;xe<P;xe++){const Xe=v+xe+ee*ce,Ve=v+xe+ee*(ce+1),B=v+(xe+1)+ee*(ce+1),me=v+(xe+1)+ee*ce;g.push(Xe,Ve,me),g.push(Ve,B,me),ue+=6}h.addGroup(E,ue,N),E+=ue,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gr extends Oa{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(s),g=Math.floor(c),p=h+1,x=g+1,_=t/h,v=i/g,E=[],C=[],U=[],y=[];for(let S=0;S<x;S++){const I=S*v-d;for(let Y=0;Y<p;Y++){const w=Y*_-f;C.push(w,-I,0),U.push(0,0,1),y.push(Y/h),y.push(1-S/g)}}for(let S=0;S<g;S++)for(let I=0;I<h;I++){const Y=I+p*S,w=I+p*(S+1),L=I+1+p*(S+1),D=I+1+p*S;E.push(Y,w,D),E.push(w,L,D)}this.setIndex(E),this.setAttribute("position",new Ua(C,3)),this.setAttribute("normal",new Ua(U,3)),this.setAttribute("uv",new Ua(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}function ao(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const c=o[i][s];if(Uv(c))c.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone();else if(Array.isArray(c))if(Uv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][s]=f}else t[i][s]=c.slice();else t[i][s]=c}}return t}function kn(o){const t={};for(let i=0;i<o.length;i++){const s=ao(o[i]);for(const c in s)t[c]=s[c]}return t}function Uv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function QE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Hx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const JE={clone:ao,merge:kn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends wu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=QE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const c=t.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new Bt().setHex(c.value);break;case"v2":this.uniforms[s].value=new Ft().fromArray(c.value);break;case"v3":this.uniforms[s].value=new pe().fromArray(c.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(c.value);break;case"m3":this.uniforms[s].value=new ft().fromArray(c.value);break;case"m4":this.uniforms[s].value=new _n().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class t1 extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class n1 extends wu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i1 extends wu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ih={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Lv(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Lv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Lv(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class a1{constructor(t,i,s){const c=this;let f=!1,d=0,h=0,g;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(x){h++,f===!1&&c.onStart!==void 0&&c.onStart(x,d,h),f=!0},this.itemEnd=function(x){d++,c.onProgress!==void 0&&c.onProgress(x,d,h),d===h&&(f=!1,c.onLoad!==void 0&&c.onLoad())},this.itemError=function(x){c.onError!==void 0&&c.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),g?g(x):x},this.setURLModifier=function(x){return g=x,this},this.addHandler=function(x,_){return p.push(x,_),this},this.removeHandler=function(x){const _=p.indexOf(x);return _!==-1&&p.splice(_,2),this},this.getHandler=function(x){for(let _=0,v=p.length;_<v;_+=2){const E=p[_],C=p[_+1];if(E.global&&(E.lastIndex=0),E.test(x))return C}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const r1=new a1;class Wp{constructor(t){this.manager=t!==void 0?t:r1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(c,f){s.load(t,c,i,f)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Wp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zs=new WeakMap;class s1 extends Wp{constructor(t){super(t)}load(t,i,s,c){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const f=this,d=Ih.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(t),setTimeout(function(){i&&i(d),f.manager.itemEnd(t)},0);else{let _=Zs.get(d);_===void 0&&(_=[],Zs.set(d,_)),_.push({onLoad:i,onError:c})}return d}const h=vl("img");function g(){x(),i&&i(this);const _=Zs.get(this)||[];for(let v=0;v<_.length;v++){const E=_[v];E.onLoad&&E.onLoad(this)}Zs.delete(this),f.manager.itemEnd(t)}function p(_){x(),c&&c(_),Ih.remove(`image:${t}`);const v=Zs.get(this)||[];for(let E=0;E<v.length;E++){const C=v[E];C.onError&&C.onError(_)}Zs.delete(this),f.manager.itemError(t),f.manager.itemEnd(t)}function x(){h.removeEventListener("load",g,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",g,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ih.add(`image:${t}`,h),f.manager.itemStart(t),h.src=t,h}}class o1 extends Wp{constructor(t){super(t)}load(t,i,s,c){const f=new zn,d=new s1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},s,c),f}}const fu=new pe,du=new ro,ta=new pe;class Gx extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fu,du,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,ta.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(fu,du,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new pe,Ov=new Ft,Pv=new Ft;class bi extends Gx{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Np*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Np*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,i){return this.getViewBounds(t,Ov,Pv),i.subVectors(Pv,Ov)}setViewOffset(t,i,s,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ph*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;f+=d.offsetX*c/g,i-=d.offsetY*s/p,c*=d.width/g,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Vx extends Gx{constructor(t=-1,i=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-t,d=s+t,h=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=x*this.view.offsetY,g=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ks=-90,Qs=1;class l1 extends ui{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new bi(Ks,Qs,t,i);c.layers=this.layers,this.add(c);const f=new bi(Ks,Qs,t,i);f.layers=this.layers,this.add(f);const d=new bi(Ks,Qs,t,i);d.layers=this.layers,this.add(d);const h=new bi(Ks,Qs,t,i);h.layers=this.layers,this.add(h);const g=new bi(Ks,Qs,t,i);g.layers=this.layers,this.add(g);const p=new bi(Ks,Qs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,f,d,h,g]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Au)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,p,x]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(_,v,E),t.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class c1 extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class u1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const Kp=class Kp{constructor(t,i,s,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=c,this}};Kp.prototype.isMatrix2=!0;let Iv=Kp;function zv(o,t,i,s){const c=f1(s);switch(i){case Cx:return o*t;case Nx:return o*t/c.components*c.byteLength;case Bp:return o*t/c.components*c.byteLength;case Zr:return o*t*2/c.components*c.byteLength;case Fp:return o*t*2/c.components*c.byteLength;case wx:return o*t*3/c.components*c.byteLength;case zi:return o*t*4/c.components*c.byteLength;case Hp:return o*t*4/c.components*c.byteLength;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xu:case Su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case tp:case ip:return Math.max(o,16)*Math.max(t,8)/4;case ep:case np:return Math.max(o,8)*Math.max(t,8)/2;case ap:case rp:case op:case lp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case sp:case Mu:case cp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case up:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case hp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case pp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case mp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case gp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case _p:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case xp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Mp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ep:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bp:case Tp:case Ap:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Rp:case Cp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Eu:case wp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function f1(o){switch(o){case Ti:case bx:return{byteLength:1,components:1};case gl:case Tx:case ca:return{byteLength:2,components:1};case Ip:case zp:return{byteLength:2,components:4};case la:case Pp:case ra:return{byteLength:4,components:1};case Ax:case Rx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kx(){let o=null,t=!1,i=null,s=null;function c(f,d){s=o.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function d1(o){const t=new WeakMap;function i(h,g){const p=h.array,x=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(g,v),o.bufferData(g,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,g,p){const x=g.array,_=g.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((E,C)=>E.start-C.start);let v=0;for(let E=1;E<_.length;E++){const C=_[v],U=_[E];U.start<=C.start+C.count+1?C.count=Math.max(C.count,U.start+U.count-C.start):(++v,_[v]=U)}_.length=v+1;for(let E=0,C=_.length;E<C;E++){const U=_[E];o.bufferSubData(p,U.start*x.BYTES_PER_ELEMENT,x,U.start,U.count)}g.clearUpdateRanges()}g.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=t.get(h);g&&(o.deleteBuffer(g.buffer),t.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,g));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,g),p.version=h.version}}return{get:c,remove:f,update:d}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
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
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x1=`#ifdef USE_AOMAP
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
#endif`,S1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1=`#ifdef USE_BATCHING
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
#endif`,M1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A1=`#ifdef USE_IRIDESCENCE
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
#endif`,R1=`#ifdef USE_BUMPMAP
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
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I1=`#define PI 3.141592653589793
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
} // validated`,z1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B1=`vec3 transformedNormal = objectNormal;
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
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",X1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
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
}`,tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ab=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rb=`#ifdef USE_ENVMAP
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
#endif`,sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
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
#endif`,fb=`uniform sampler2D dfgLUT;
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
}`,db=`
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eb=`#if defined( USE_POINTS_UV )
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
#endif`,bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`#ifdef USE_MORPHTARGETS
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
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ib=`#ifdef USE_NORMALMAP
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
#endif`,zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jb=`float getShadowMask() {
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
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
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
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
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
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
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
}`,ST=`#if DEPTH_PACKING == 3200
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
}`,yT=`#define DISTANCE
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
}`,MT=`#define DISTANCE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
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
}`,AT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,CT=`uniform vec3 diffuse;
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
}`,wT=`#define LAMBERT
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
}`,NT=`#define LAMBERT
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
}`,DT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,LT=`#define NORMAL
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
}`,OT=`#define NORMAL
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
}`,PT=`#define PHONG
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
}`,IT=`#define PHONG
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
}`,zT=`#define STANDARD
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
}`,BT=`#define STANDARD
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
}`,FT=`#define TOON
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
}`,HT=`#define TOON
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
}`,GT=`uniform float size;
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
}`,VT=`uniform vec3 diffuse;
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
}`,kT=`#include <common>
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
}`,XT=`uniform vec3 color;
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
}`,WT=`uniform float rotation;
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
}`,qT=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:h1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:_1,alphatest_pars_fragment:v1,aomap_fragment:x1,aomap_pars_fragment:S1,batching_pars_vertex:y1,batching_vertex:M1,begin_vertex:E1,beginnormal_vertex:b1,bsdfs:T1,iridescence_fragment:A1,bumpmap_pars_fragment:R1,clipping_planes_fragment:C1,clipping_planes_pars_fragment:w1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:D1,color_fragment:U1,color_pars_fragment:L1,color_pars_vertex:O1,color_vertex:P1,common:I1,cube_uv_reflection_fragment:z1,defaultnormal_vertex:B1,displacementmap_pars_vertex:F1,displacementmap_vertex:H1,emissivemap_fragment:G1,emissivemap_pars_fragment:V1,colorspace_fragment:k1,colorspace_pars_fragment:X1,envmap_fragment:W1,envmap_common_pars_fragment:q1,envmap_pars_fragment:Y1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:rb,envmap_vertex:Z1,fog_vertex:K1,fog_pars_vertex:Q1,fog_fragment:J1,fog_pars_fragment:$1,gradientmap_pars_fragment:eb,lightmap_pars_fragment:tb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:ab,lights_toon_fragment:sb,lights_toon_pars_fragment:ob,lights_phong_fragment:lb,lights_phong_pars_fragment:cb,lights_physical_fragment:ub,lights_physical_pars_fragment:fb,lights_fragment_begin:db,lights_fragment_maps:hb,lights_fragment_end:pb,lightprobes_pars_fragment:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:xb,map_fragment:Sb,map_pars_fragment:yb,map_particle_fragment:Mb,map_particle_pars_fragment:Eb,metalnessmap_fragment:bb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:Ab,morphcolor_vertex:Rb,morphnormal_vertex:Cb,morphtarget_pars_vertex:wb,morphtarget_vertex:Nb,normal_fragment_begin:Db,normal_fragment_maps:Ub,normal_pars_fragment:Lb,normal_pars_vertex:Ob,normal_vertex:Pb,normalmap_pars_fragment:Ib,clearcoat_normal_fragment_begin:zb,clearcoat_normal_fragment_maps:Bb,clearcoat_pars_fragment:Fb,iridescence_pars_fragment:Hb,opaque_fragment:Gb,packing:Vb,premultiplied_alpha_fragment:kb,project_vertex:Xb,dithering_fragment:Wb,dithering_pars_fragment:qb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Qb,shadowmask_pars_fragment:Jb,skinbase_vertex:$b,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:aT,tonemapping_fragment:rT,tonemapping_pars_fragment:sT,transmission_fragment:oT,transmission_pars_fragment:lT,uv_pars_fragment:cT,uv_pars_vertex:uT,uv_vertex:fT,worldpos_vertex:dT,background_vert:hT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:_T,cube_frag:vT,depth_vert:xT,depth_frag:ST,distance_vert:yT,distance_frag:MT,equirect_vert:ET,equirect_frag:bT,linedashed_vert:TT,linedashed_frag:AT,meshbasic_vert:RT,meshbasic_frag:CT,meshlambert_vert:wT,meshlambert_frag:NT,meshmatcap_vert:DT,meshmatcap_frag:UT,meshnormal_vert:LT,meshnormal_frag:OT,meshphong_vert:PT,meshphong_frag:IT,meshphysical_vert:zT,meshphysical_frag:BT,meshtoon_vert:FT,meshtoon_frag:HT,points_vert:GT,points_frag:VT,shadow_vert:kT,shadow_frag:XT,sprite_vert:WT,sprite_frag:qT},He={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new pe},probesMax:{value:new pe},probesResolution:{value:new pe}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ia={basic:{uniforms:kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:kn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:kn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:kn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:kn([He.points,He.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:kn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:kn([He.common,He.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:kn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:kn([He.sprite,He.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:kn([He.common,He.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:kn([He.lights,He.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ia.physical={uniforms:kn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const hu={r:0,b:0,g:0},YT=new _n,Xx=new ft;Xx.set(-1,0,0,0,1,0,0,0,1);function jT(o,t,i,s,c,f){const d=new Bt(0);let h=c===!0?0:1,g,p,x=null,_=0,v=null;function E(I){let Y=I.isScene===!0?I.background:null;if(Y&&Y.isTexture){const w=I.backgroundBlurriness>0;Y=t.get(Y,w)}return Y}function C(I){let Y=!1;const w=E(I);w===null?y(d,h):w&&w.isColor&&(y(w,1),Y=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||Y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function U(I,Y){const w=E(Y);w&&(w.isCubeTexture||w.mapping===Cu)?(p===void 0&&(p=new ci(new El(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ao(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=Y.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=Y.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(Y.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Xx),p.material.toneMapped=Nt.getTransfer(w.colorSpace)!==Yt,(x!==w||_!==w.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=w,_=w.version,v=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(g===void 0&&(g=new ci(new gr(2,2),new Hi({name:"BackgroundMaterial",uniforms:ao(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=w,g.material.uniforms.backgroundIntensity.value=Y.backgroundIntensity,g.material.toneMapped=Nt.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),g.material.uniforms.uvTransform.value.copy(w.matrix),(x!==w||_!==w.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,x=w,_=w.version,v=o.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null))}function y(I,Y){I.getRGB(hu,Hx(o)),i.buffers.color.setClear(hu.r,hu.g,hu.b,Y,f)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,Y=1){d.set(I),h=Y,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(d,h)},render:C,addToRenderList:U,dispose:S}}function ZT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=v(null);let f=c,d=!1;function h(V,$,ne,K,ee){let X=!1;const q=_(V,K,ne,$);f!==q&&(f=q,p(f.object)),X=E(V,K,ne,ee),X&&C(V,K,ne,ee),ee!==null&&t.update(ee,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,w(V,$,ne,K),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function g(){return o.createVertexArray()}function p(V){return o.bindVertexArray(V)}function x(V){return o.deleteVertexArray(V)}function _(V,$,ne,K){const ee=K.wireframe===!0;let X=s[$.id];X===void 0&&(X={},s[$.id]=X);const q=V.isInstancedMesh===!0?V.id:0;let ue=X[q];ue===void 0&&(ue={},X[q]=ue);let le=ue[ne.id];le===void 0&&(le={},ue[ne.id]=le);let ce=le[ee];return ce===void 0&&(ce=v(g()),le[ee]=ce),ce}function v(V){const $=[],ne=[],K=[];for(let ee=0;ee<i;ee++)$[ee]=0,ne[ee]=0,K[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ne,attributeDivisors:K,object:V,attributes:{},index:null}}function E(V,$,ne,K){const ee=f.attributes,X=$.attributes;let q=0;const ue=ne.getAttributes();for(const le in ue)if(ue[le].location>=0){const xe=ee[le];let Xe=X[le];if(Xe===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(Xe=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(Xe=V.instanceColor)),xe===void 0||xe.attribute!==Xe||Xe&&xe.data!==Xe.data)return!0;q++}return f.attributesNum!==q||f.index!==K}function C(V,$,ne,K){const ee={},X=$.attributes;let q=0;const ue=ne.getAttributes();for(const le in ue)if(ue[le].location>=0){let xe=X[le];xe===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(xe=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(xe=V.instanceColor));const Xe={};Xe.attribute=xe,xe&&xe.data&&(Xe.data=xe.data),ee[le]=Xe,q++}f.attributes=ee,f.attributesNum=q,f.index=K}function U(){const V=f.newAttributes;for(let $=0,ne=V.length;$<ne;$++)V[$]=0}function y(V){S(V,0)}function S(V,$){const ne=f.newAttributes,K=f.enabledAttributes,ee=f.attributeDivisors;ne[V]=1,K[V]===0&&(o.enableVertexAttribArray(V),K[V]=1),ee[V]!==$&&(o.vertexAttribDivisor(V,$),ee[V]=$)}function I(){const V=f.newAttributes,$=f.enabledAttributes;for(let ne=0,K=$.length;ne<K;ne++)$[ne]!==V[ne]&&(o.disableVertexAttribArray(ne),$[ne]=0)}function Y(V,$,ne,K,ee,X,q){q===!0?o.vertexAttribIPointer(V,$,ne,ee,X):o.vertexAttribPointer(V,$,ne,K,ee,X)}function w(V,$,ne,K){U();const ee=K.attributes,X=ne.getAttributes(),q=$.defaultAttributeValues;for(const ue in X){const le=X[ue];if(le.location>=0){let ce=ee[ue];if(ce===void 0&&(ue==="instanceMatrix"&&V.instanceMatrix&&(ce=V.instanceMatrix),ue==="instanceColor"&&V.instanceColor&&(ce=V.instanceColor)),ce!==void 0){const xe=ce.normalized,Xe=ce.itemSize,Ve=t.get(ce);if(Ve===void 0)continue;const B=Ve.buffer,me=Ve.type,Ae=Ve.bytesPerElement,j=me===o.INT||me===o.UNSIGNED_INT||ce.gpuType===Pp;if(ce.isInterleavedBufferAttribute){const de=ce.data,be=de.stride,Ce=ce.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<le.locationSize;ve++)S(le.location+ve,de.meshPerAttribute);V.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<le.locationSize;ve++)y(le.location+ve);o.bindBuffer(o.ARRAY_BUFFER,B);for(let ve=0;ve<le.locationSize;ve++)Y(le.location+ve,Xe/le.locationSize,me,xe,be*Ae,(Ce+Xe/le.locationSize*ve)*Ae,j)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<le.locationSize;de++)S(le.location+de,ce.meshPerAttribute);V.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<le.locationSize;de++)y(le.location+de);o.bindBuffer(o.ARRAY_BUFFER,B);for(let de=0;de<le.locationSize;de++)Y(le.location+de,Xe/le.locationSize,me,xe,Xe*Ae,Xe/le.locationSize*de*Ae,j)}}else if(q!==void 0){const xe=q[ue];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(le.location,xe);break;case 3:o.vertexAttrib3fv(le.location,xe);break;case 4:o.vertexAttrib4fv(le.location,xe);break;default:o.vertexAttrib1fv(le.location,xe)}}}}I()}function L(){N();for(const V in s){const $=s[V];for(const ne in $){const K=$[ne];for(const ee in K){const X=K[ee];for(const q in X)x(X[q].object),delete X[q];delete K[ee]}}delete s[V]}}function D(V){if(s[V.id]===void 0)return;const $=s[V.id];for(const ne in $){const K=$[ne];for(const ee in K){const X=K[ee];for(const q in X)x(X[q].object),delete X[q];delete K[ee]}}delete s[V.id]}function P(V){for(const $ in s){const ne=s[$];for(const K in ne){const ee=ne[K];if(ee[V.id]===void 0)continue;const X=ee[V.id];for(const q in X)x(X[q].object),delete X[q];delete ee[V.id]}}}function b(V){for(const $ in s){const ne=s[$],K=V.isInstancedMesh===!0?V.id:0,ee=ne[K];if(ee!==void 0){for(const X in ee){const q=ee[X];for(const ue in q)x(q[ue].object),delete q[ue];delete ee[X]}delete ne[K],Object.keys(ne).length===0&&delete s[$]}}}function N(){H(),d=!0,f!==c&&(f=c,p(f.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:N,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:U,enableAttribute:y,disableUnusedAttributes:I}}function KT(o,t,i){let s;function c(g){s=g}function f(g,p){o.drawArrays(s,g,p),i.update(p,s,1)}function d(g,p,x){x!==0&&(o.drawArraysInstanced(s,g,p,x),i.update(p,s,x))}function h(g,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,x);let v=0;for(let E=0;E<x;E++)v+=p[E];i.update(v,s,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function QT(o,t,i,s){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(P){return!(P!==zi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const b=P===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ti&&P!==ra&&!b&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=g(p);x!==p&&(st("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),Y=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:C,maxTextureSize:U,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:I,maxVaryings:Y,maxFragmentUniforms:w,maxSamples:L,samples:D}}function JT(o){const t=this;let i=null,s=0,c=!1,f=!1;const d=new pr,h=new ft,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||s!==0||c;return c=v,s=_.length,E},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,v){i=x(_,v,0)},this.setState=function(_,v,E){const C=_.clippingPlanes,U=_.clipIntersection,y=_.clipShadows,S=o.get(_);if(!c||C===null||C.length===0||f&&!y)f?x(null):p();else{const I=f?0:s,Y=I*4;let w=S.clippingState||null;g.value=w,w=x(C,v,Y,E);for(let L=0;L!==Y;++L)w[L]=i[L];S.clippingState=w,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=I}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(_,v,E,C){const U=_!==null?_.length:0;let y=null;if(U!==0){if(y=g.value,C!==!0||y===null){const S=E+U*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<S)&&(y=new Float32Array(S));for(let Y=0,w=E;Y!==U;++Y,w+=4)d.copy(_[Y]).applyMatrix4(I,h),d.normal.toArray(y,w),y[w+3]=d.constant}g.value=y,g.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,y}}const eo=4,$T=6,eA=20,tA=256,cl=new Vx,Bv=new Bt;let zh=null,Bh=0,Fh=0,Hh=!1;const nA=new pe,Xr=new pe;class Fv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,c=100,f={}){const{size:d=256,position:h=nA}=f;zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,c,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Bh,Fh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===jr||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ca,format:zi,colorSpace:bu,depthBuffer:!1},c=Hv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=iA(f)),this._blurMaterial=rA(f,t,i),this._ggxMaterial=aA(f,t,i)}return c}_compileMaterial(t){const i=new ci(new Oa,t);this._renderer.compile(i,cl)}_sceneToCubeUV(t,i,s,c,f){const g=new bi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,E=_.toneMapping;_.getClearColor(Bv),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(c),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new El,new pl({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,y=U.material;let S=!1;const I=t.background;I?I.isColor&&(y.color.copy(I),t.background=null,S=!0):(y.color.copy(Bv),S=!0);for(let Y=0;Y<6;Y++){const w=Y%3;w===0?(g.up.set(0,p[Y],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+x[Y],f.y,f.z)):w===1?(g.up.set(0,0,p[Y]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+x[Y],f.z)):(g.up.set(0,p[Y],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+x[Y]));const L=this._cubeSize;Js(c,w*L,Y>2?L:0,L,L),_.setRenderTarget(c),S&&_.render(U,g),_.render(t,g)}_.toneMapping=E,_.autoClear=v,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===jr||t.mapping===io;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const g=this._cubeSize;Js(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,cl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),v=p*1.25,E=_*v,{_lodMax:C}=this,U=this._sizeLods[s],y=3*U*(s>C-eo?s-C+eo:0),S=4*(this._cubeSize-U);g.envMap.value=t.texture,g.roughness.value=E,g.mipInt.value=C-i,Js(f,y,S,3*U,2*U),c.setRenderTarget(f),c.render(h,cl),g.envMap.value=f.texture,g.roughness.value=0,g.mipInt.value=C-s,Js(t,y,S,3*U,2*U),c.setRenderTarget(t),c.render(h,cl)}_blur(t,i,s,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,s,d),this._blurPass(f,t,s,s,d)}_blurPass(t,i,s,c,f){const d=this._renderer,h=this._blurMaterial,g=this._lodMeshes[c];g.material=h;const p=h.uniforms;p.envMap.value=t.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const x=this._sizeLods[c],_=3*x*(c>this._lodMax-eo?c-this._lodMax+eo:0),v=4*(this._cubeSize-x);Js(i,_,v,3*x,2*x),d.setRenderTarget(i),d.render(g,cl)}}function iA(o){const t=[],i=[];let s=o;const c=o-eo+1+$T;for(let f=0;f<c;f++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),g=-h,p=1+h,x=[g,g,p,g,p,p,g,g,p,p,g,p],_=6,v=6,E=3,C=new Float32Array(E*v*_),U=new Float32Array(E*v*_);for(let S=0;S<_;S++){const I=S%3*2/3-1,Y=S>2?0:-1,w=[I,Y,0,I+2/3,Y,0,I+2/3,Y+1,0,I,Y,0,I+2/3,Y+1,0,I,Y+1,0];C.set(w,E*v*S);for(let L=0;L<v;L++){const D=x[L*2]*2-1,P=x[L*2+1]*2-1;S===0?Xr.set(1,P,D):S===1?Xr.set(-D,1,-P):S===2?Xr.set(-D,P,1):S===3?Xr.set(-1,P,-D):S===4?Xr.set(-D,-1,P):Xr.set(D,P,-1),Xr.toArray(U,(S*v+L)*E)}}const y=new Oa;y.setAttribute("position",new Fi(C,E)),y.setAttribute("outputDirection",new Fi(U,E)),i.push(new ci(y,null)),s>eo&&s--}return{lodMeshes:i,sizeLods:t}}function Hv(o,t,i){const s=new Bi(o,t,i);return s.texture.mapping=Cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(o,t,i,s,c){o.viewport.set(t,i,s,c),o.scissor.set(t,i,s,c)}function aA(o,t,i){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function rA(o,t,i){return new Hi({name:"SphericalGaussianBlur",defines:{SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Gv(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Vv(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

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
	`}class Wx extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new Bx(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new El(5,5,5),f=new Hi({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Na});f.uniforms.tEquirect.value=i;const d=new ci(c,f),h=i.minFilter;return i.minFilter===Wr&&(i.minFilter=In),new l1(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,c);t.setRenderTarget(f)}}function sA(o){let t=new WeakMap,i=new WeakMap,s=null;function c(v,E=!1){return v==null?null:E?d(v):f(v)}function f(v){if(v&&v.isTexture){const E=v.mapping;if(E===uh||E===fh)if(t.has(v)){const C=t.get(v).texture;return h(C,v.mapping)}else{const C=v.image;if(C&&C.height>0){const U=new Wx(C.height);return U.fromEquirectangularTexture(o,v),t.set(v,U),v.addEventListener("dispose",p),h(U.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,C=E===uh||E===fh,U=E===jr||E===io;if(C||U){let y=i.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new Fv(o)),y=C?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return C&&I&&I.height>0||U&&I&&g(I)?(s===null&&(s=new Fv(o)),y=C?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",x),y.texture):null}}}return v}function h(v,E){return E===uh?v.mapping=jr:E===fh&&(v.mapping=io),v}function g(v){let E=0;const C=6;for(let U=0;U<C;U++)v[U]!==void 0&&E++;return E===C}function p(v){const E=v.target;E.removeEventListener("dispose",p);const C=t.get(E);C!==void 0&&(t.delete(E),C.dispose())}function x(v){const E=v.target;E.removeEventListener("dispose",x);const C=i.get(E);C!==void 0&&(i.delete(E),C.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:_}}function oA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const c=o.getExtension(s);return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&to("WebGLRenderer: "+s+" extension not supported."),c}}}function lA(o,t,i,s){const c={},f=new WeakMap;function d(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const C in v.attributes)t.remove(v.attributes[C]);v.removeEventListener("dispose",d),delete c[v.id];const E=f.get(v);E&&(t.remove(E),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return c[v.id]===!0||(v.addEventListener("dispose",d),c[v.id]=!0,i.memory.geometries++),v}function g(_){const v=_.attributes;for(const E in v)t.update(v[E],o.ARRAY_BUFFER)}function p(_){const v=[],E=_.index,C=_.attributes.position;let U=0;if(C===void 0)return;if(E!==null){const I=E.array;U=E.version;for(let Y=0,w=I.length;Y<w;Y+=3){const L=I[Y+0],D=I[Y+1],P=I[Y+2];v.push(L,D,D,P,P,L)}}else{const I=C.array;U=C.version;for(let Y=0,w=I.length/3-1;Y<w;Y+=3){const L=Y+0,D=Y+1,P=Y+2;v.push(L,D,D,P,P,L)}}const y=new(C.count>=65535?Ix:Px)(v,1);y.version=U;const S=f.get(_);S&&t.remove(S),f.set(_,y)}function x(_){const v=f.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&p(_)}else p(_);return f.get(_)}return{get:h,update:g,getWireframeAttribute:x}}function cA(o,t,i){let s;function c(_){s=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function g(_,v){o.drawElements(s,v,f,_*d),i.update(v,s,1)}function p(_,v,E){E!==0&&(o.drawElementsInstanced(s,v,f,_*d,E),i.update(v,s,E))}function x(_,v,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,_,0,E);let U=0;for(let y=0;y<E;y++)U+=v[y];i.update(U,s,1)}this.setMode=c,this.setIndex=h,this.render=g,this.renderInstances=p,this.renderMultiDraw=x}function uA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Pt("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function fA(o,t,i){const s=new WeakMap,c=new cn;function f(d,h,g){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let H=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",H)};var E=H;v!==void 0&&v.texture.dispose();const C=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],Y=h.morphAttributes.color||[];let w=0;C===!0&&(w=1),U===!0&&(w=2),y===!0&&(w=3);let L=h.attributes.position.count*w,D=1;L>t.maxTextureSize&&(D=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*D*4*_),b=new Ux(P,L,D,_);b.type=ra,b.needsUpdate=!0;const N=w*4;for(let V=0;V<_;V++){const $=S[V],ne=I[V],K=Y[V],ee=L*D*4*V;for(let X=0;X<$.count;X++){const q=X*N;C===!0&&(c.fromBufferAttribute($,X),P[ee+q+0]=c.x,P[ee+q+1]=c.y,P[ee+q+2]=c.z,P[ee+q+3]=0),U===!0&&(c.fromBufferAttribute(ne,X),P[ee+q+4]=c.x,P[ee+q+5]=c.y,P[ee+q+6]=c.z,P[ee+q+7]=0),y===!0&&(c.fromBufferAttribute(K,X),P[ee+q+8]=c.x,P[ee+q+9]=c.y,P[ee+q+10]=c.z,P[ee+q+11]=K.itemSize===4?c.w:1)}}v={count:_,texture:b,size:new Ft(L,D)},s.set(h,v),h.addEventListener("dispose",H)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let C=0;for(let y=0;y<p.length;y++)C+=p[y];const U=h.morphTargetsRelative?1:1-C;g.getUniforms().setValue(o,"morphTargetBaseInfluence",U),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function dA(o,t,i,s,c){let f=new WeakMap;function d(p){const x=c.render.frame,_=p.geometry,v=t.get(p,_);if(f.get(v)!==x&&(t.update(v),f.set(v,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),f.get(p)!==x&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,x))),p.isSkinnedMesh){const E=p.skeleton;f.get(E)!==x&&(E.update(),f.set(E,x))}return v}function h(){f=new WeakMap}function g(p){const x=p.target;x.removeEventListener("dispose",g),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const hA={[gx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[vx]:"CINEON_TONE_MAPPING",[xx]:"ACES_FILMIC_TONE_MAPPING",[yx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function pA(o,t,i,s,c,f){const d=new Bi(t,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,g=null;const p=new Oa;p.setAttribute("position",new Ua([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ua([0,2,0,0,2,0],2));const x=new t1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new ci(p,x),v=new Vx(-1,1,1,-1,0,1);let E=null,C=null,U=!1,y,S=null,I=[],Y=!1;this.setSize=function(w,L){d.setSize(w,L),h!==null&&h.setSize(w,L),g!==null&&g.setSize(w,L);for(let D=0;D<I.length;D++){const P=I[D];P.setSize&&P.setSize(w,L)}},this.setEffects=function(w){I=w,Y=I.length>0&&I[0].isRenderPass===!0;const L=d.width,D=d.height;I.length>0&&h===null&&(h=new Bi(L,D,{type:ca,depthBuffer:!1,stencilBuffer:!1}),g=new Bi(L,D,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<I.length;P++){const b=I[P];b.setSize&&b.setSize(L,D)}},this.begin=function(w,L){if(U||w.toneMapping===oa&&I.length===0)return!1;if(S=L,L!==null){const D=L.width,P=L.height;(d.width!==D||d.height!==P)&&this.setSize(D,P)}return Y===!1&&w.setRenderTarget(d),y=w.toneMapping,w.toneMapping=oa,!0},this.hasRenderPass=function(){return Y},this.end=function(w,L){w.toneMapping=y,U=!0;let D=d,P=h;for(let b=0;b<I.length;b++){const N=I[b];N.enabled!==!1&&(N.render(w,P,D,L),N.needsSwap!==!1&&(D=P,P=P===h?g:h))}if(E!==w.outputColorSpace||C!==w.toneMapping){E=w.outputColorSpace,C=w.toneMapping,x.defines={},Nt.getTransfer(E)===Yt&&(x.defines.SRGB_TRANSFER="");const b=hA[C];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=D.texture,w.setRenderTarget(S),w.render(_,v),S=null,U=!1},this.isCompositing=function(){return U},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),g!==null&&g.dispose(),p.dispose(),x.dispose()}}const qx=new zn,Dp=new xl(1,1),Yx=new Ux,jx=new DE,Zx=new Bx,kv=[],Xv=[],Wv=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function so(o,t,i){const s=o[0];if(s<=0||s>0)return o;const c=t*i;let f=kv[c];if(f===void 0&&(f=new Float32Array(c),kv[c]=f),t!==0){s.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function yn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Du(o,t){let i=Xv[t];i===void 0&&(i=new Int32Array(t),Xv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function mA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function gA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2fv(this.addr,t),yn(i,t)}}function _A(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;o.uniform3fv(this.addr,t),yn(i,t)}}function vA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4fv(this.addr,t),yn(i,t)}}function xA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Yv.set(s),o.uniformMatrix2fv(this.addr,!1,Yv),yn(i,s)}}function SA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;qv.set(s),o.uniformMatrix3fv(this.addr,!1,qv),yn(i,s)}}function yA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Wv.set(s),o.uniformMatrix4fv(this.addr,!1,Wv),yn(i,s)}}function MA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function EA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2iv(this.addr,t),yn(i,t)}}function bA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3iv(this.addr,t),yn(i,t)}}function TA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4iv(this.addr,t),yn(i,t)}}function AA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function RA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2uiv(this.addr,t),yn(i,t)}}function CA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3uiv(this.addr,t),yn(i,t)}}function wA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4uiv(this.addr,t),yn(i,t)}}function NA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(Dp.compareFunction=i.isReversedDepthBuffer()?Vp:Gp,f=Dp):f=qx,i.setTexture2D(t||f,c)}function DA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||jx,c)}function UA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||Zx,c)}function LA(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||Yx,c)}function OA(o){switch(o){case 5126:return mA;case 35664:return gA;case 35665:return _A;case 35666:return vA;case 35674:return xA;case 35675:return SA;case 35676:return yA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return bA;case 35669:case 35673:return TA;case 5125:return AA;case 36294:return RA;case 36295:return CA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return LA}}function PA(o,t){o.uniform1fv(this.addr,t)}function IA(o,t){const i=so(t,this.size,2);o.uniform2fv(this.addr,i)}function zA(o,t){const i=so(t,this.size,3);o.uniform3fv(this.addr,i)}function BA(o,t){const i=so(t,this.size,4);o.uniform4fv(this.addr,i)}function FA(o,t){const i=so(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function HA(o,t){const i=so(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function GA(o,t){const i=so(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function VA(o,t){o.uniform1iv(this.addr,t)}function kA(o,t){o.uniform2iv(this.addr,t)}function XA(o,t){o.uniform3iv(this.addr,t)}function WA(o,t){o.uniform4iv(this.addr,t)}function qA(o,t){o.uniform1uiv(this.addr,t)}function YA(o,t){o.uniform2uiv(this.addr,t)}function jA(o,t){o.uniform3uiv(this.addr,t)}function ZA(o,t){o.uniform4uiv(this.addr,t)}function KA(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Dp:d=qx;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function QA(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||jx,f[d])}function JA(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||Zx,f[d])}function $A(o,t,i){const s=this.cache,c=t.length,f=Du(i,c);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||Yx,f[d])}function e3(o){switch(o){case 5126:return PA;case 35664:return IA;case 35665:return zA;case 35666:return BA;case 35674:return FA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return kA;case 35668:case 35672:return XA;case 35669:case 35673:return WA;case 5125:return qA;case 36294:return YA;case 36295:return jA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return $A}}class t3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=OA(i.type)}}class n3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=e3(i.type)}}class i3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],s)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function jv(o,t){o.seq.push(t),o.map[t.id]=t}function a3(o,t,i){const s=o.name,c=s.length;for(Gh.lastIndex=0;;){const f=Gh.exec(s),d=Gh.lastIndex;let h=f[1];const g=f[2]==="]",p=f[3];if(g&&(h=h|0),p===void 0||p==="["&&d+2===c){jv(i,p===void 0?new t3(h,o,t):new n3(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new i3(h),jv(i,_)),i=_}}}class yu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),g=t.getUniformLocation(i,h.name);a3(h,g,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],g=s[h.id];g.needsUpdate!==!1&&h.setValue(t,g.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&s.push(d)}return s}}function Zv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const r3=37297;let s3=0;function o3(o,t){const i=o.split(`
`),s=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Kv=new ft;function l3(o){Nt._getMatrix(Kv,Nt.workingColorSpace,o);const t=`mat3( ${Kv.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(o)){case Tu:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Qv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+o3(o.getShaderSource(t),h)}else return f}function c3(o,t){const i=l3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const u3={[gx]:"Linear",[_x]:"Reinhard",[vx]:"Cineon",[xx]:"ACESFilmic",[yx]:"AgX",[Mx]:"Neutral",[Sx]:"Custom"};function f3(o,t){const i=u3[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pu=new pe;function d3(){Nt.getLuminanceCoefficients(pu);const o=pu.x.toFixed(4),t=pu.y.toFixed(4),i=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function p3(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function m3(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(t,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function dl(o){return o!==""}function Jv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $v(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(o){return o.replace(g3,v3)}const _3=new Map;function v3(o,t){let i=mt[t];if(i===void 0){const s=_3.get(t);if(s!==void 0)i=mt[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Up(i)}const x3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ex(o){return o.replace(x3,S3)}function S3(o,t,i,s){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function tx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const y3={[gu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function M3(o){return y3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E3={[jr]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function b3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":E3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const T3={[io]:"ENVMAP_MODE_REFRACTION"};function A3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":T3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R3={[mx]:"ENVMAP_BLENDING_MULTIPLY",[lE]:"ENVMAP_BLENDING_MIX",[cE]:"ENVMAP_BLENDING_ADD"};function C3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":R3[o.combine]||"ENVMAP_BLENDING_NONE"}function w3(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function N3(o,t,i,s){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=M3(i),p=b3(i),x=A3(i),_=C3(i),v=w3(i),E=h3(i),C=p3(f),U=c.createProgram();let y,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(dl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(dl).join(`
`),S.length>0&&(S+=`
`)):(y=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),S=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?mt.tonemapping_pars_fragment:"",i.toneMapping!==oa?f3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,c3("linearToOutputTexel",i.outputColorSpace),d3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),d=Up(d),d=Jv(d,i),d=$v(d,i),h=Up(h),h=Jv(h,i),h=$v(h,i),d=ex(d),h=ex(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const Y=I+y+d,w=I+S+h,L=Zv(c,c.VERTEX_SHADER,Y),D=Zv(c,c.FRAGMENT_SHADER,w);c.attachShader(U,L),c.attachShader(U,D),i.index0AttributeName!==void 0?c.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(U,0,"position"),c.linkProgram(U);function P(V){if(o.debug.checkShaderErrors){const $=c.getProgramInfoLog(U)||"",ne=c.getShaderInfoLog(L)||"",K=c.getShaderInfoLog(D)||"",ee=$.trim(),X=ne.trim(),q=K.trim();let ue=!0,le=!0;if(c.getProgramParameter(U,c.LINK_STATUS)===!1)if(ue=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,U,L,D);else{const ce=Qv(c,L,"vertex"),xe=Qv(c,D,"fragment");Pt("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(U,c.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ee+`
`+ce+`
`+xe)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(X===""||q==="")&&(le=!1);le&&(V.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:X,prefix:y},fragmentShader:{log:q,prefix:S}})}c.deleteShader(L),c.deleteShader(D),b=new yu(c,U),N=m3(c,U)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let H=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=c.getProgramParameter(U,r3)),H},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=s3++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=L,this.fragmentShader=D,this}let D3=0;class U3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new L3(t),i.set(t,s)),s}}class L3{constructor(t){this.id=D3++,this.code=t,this.usedTimes=0}}function O3(o){return o===Zr||o===Mu||o===Eu}function P3(o,t,i,s,c,f){const d=new Lx,h=new U3,g=new Set,p=[],x=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(b){return g.add(b),b===0?"uv":`uv${b}`}function U(b,N,H,V,$,ne){const K=V.fog,ee=$.geometry,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ue=t.get(b.envMap||X,q),le=ue&&ue.mapping===Cu?ue.image.height:null,ce=E[b.type];b.precision!==null&&(v=s.getMaxPrecision(b.precision),v!==b.precision&&st("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const xe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Xe=xe!==void 0?xe.length:0;let Ve=0;ee.morphAttributes.position!==void 0&&(Ve=1),ee.morphAttributes.normal!==void 0&&(Ve=2),ee.morphAttributes.color!==void 0&&(Ve=3);let B,me,Ae,j;if(ce){const Ct=ia[ce];B=Ct.vertexShader,me=Ct.fragmentShader}else{B=b.vertexShader,me=b.fragmentShader;const Ct=h.getVertexShaderStage(b),ct=h.getFragmentShaderStage(b);h.update(b,Ct,ct),Ae=Ct.id,j=ct.id}const de=o.getRenderTarget(),be=o.state.buffers.depth.getReversed(),Ce=$.isInstancedMesh===!0,ve=$.isBatchedMesh===!0,we=!!b.map,Vt=!!b.matcap,pt=!!ue,_t=!!b.aoMap,yt=!!b.lightMap,tt=!!b.bumpMap&&b.wireframe===!1,it=!!b.normalMap,kt=!!b.displacementMap,fn=!!b.emissiveMap,Ot=!!b.metalnessMap,en=!!b.roughnessMap,W=b.anisotropy>0,nn=b.clearcoat>0,Lt=b.dispersion>0,O=b.retroreflectivity>0,M=b.iridescence>0,te=b.sheen>0,oe=b.transmission>0,ge=W&&!!b.anisotropyMap,Re=nn&&!!b.clearcoatMap,Ue=nn&&!!b.clearcoatNormalMap,_e=nn&&!!b.clearcoatRoughnessMap,Ee=M&&!!b.iridescenceMap,De=M&&!!b.iridescenceThicknessMap,$e=te&&!!b.sheenColorMap,ze=te&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,We=!!b.specularColorMap,nt=!!b.specularIntensityMap,lt=oe&&!!b.transmissionMap,k=oe&&!!b.thicknessMap,Ne=!!b.gradientMap,Me=!!b.alphaMap,Le=b.alphaTest>0,ke=!!b.alphaHash,Te=!!b.extensions;let Je=oa;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=o.toneMapping);const Ge={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:B,fragmentShader:me,defines:b.defines,customVertexShaderID:Ae,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:ve,batchingColor:ve&&$._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&$.instanceColor!==null,instancingMorph:Ce&&$.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:Vt,envMap:pt,envMapMode:pt&&ue.mapping,envMapCubeUVHeight:le,aoMap:_t,lightMap:yt,bumpMap:tt,normalMap:it,displacementMap:kt,emissiveMap:fn,normalMapObjectSpace:it&&b.normalMapType===dE,normalMapTangentSpace:it&&b.normalMapType===pv,packedNormalMap:it&&b.normalMapType===pv&&O3(b.normalMap.format),metalnessMap:Ot,roughnessMap:en,anisotropy:W,anisotropyMap:ge,clearcoat:nn,clearcoatMap:Re,clearcoatNormalMap:Ue,clearcoatRoughnessMap:_e,dispersion:Lt,retroreflection:O,iridescence:M,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:te,sheenColorMap:$e,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:We,specularIntensityMap:nt,transmission:oe,transmissionMap:lt,thicknessMap:k,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===hl&&b.alphaToCoverage===!1,alphaMap:Me,alphaTest:Le,alphaHash:ke,combine:b.combine,mapUv:we&&C(b.map.channel),aoMapUv:_t&&C(b.aoMap.channel),lightMapUv:yt&&C(b.lightMap.channel),bumpMapUv:tt&&C(b.bumpMap.channel),normalMapUv:it&&C(b.normalMap.channel),displacementMapUv:kt&&C(b.displacementMap.channel),emissiveMapUv:fn&&C(b.emissiveMap.channel),metalnessMapUv:Ot&&C(b.metalnessMap.channel),roughnessMapUv:en&&C(b.roughnessMap.channel),anisotropyMapUv:ge&&C(b.anisotropyMap.channel),clearcoatMapUv:Re&&C(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&C(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&C(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&C(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&C(b.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&C(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(b.sheenRoughnessMap.channel),specularMapUv:Ie&&C(b.specularMap.channel),specularColorMapUv:We&&C(b.specularColorMap.channel),specularIntensityMapUv:nt&&C(b.specularIntensityMap.channel),transmissionMapUv:lt&&C(b.transmissionMap.channel),thicknessMapUv:k&&C(b.thicknessMap.channel),alphaMapUv:Me&&C(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(it||W),vertexNormals:!!ee.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ee.attributes.uv&&(we||Me),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ee.attributes.normal===void 0&&it===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:be,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:Ve,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Je,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===Yt,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(b.emissiveMap.colorSpace)===Yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===aa,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Te&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&b.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ge.vertexUv1s=g.has(1),Ge.vertexUv2s=g.has(2),Ge.vertexUv3s=g.has(3),g.clear(),Ge}function y(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)N.push(H),N.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(S(N,b),I(N,b),N.push(o.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function S(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numSunLights),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numSunLightShadows),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function I(b,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function Y(b){const N=E[b.type];let H;if(N){const V=ia[N];H=JE.clone(V.uniforms)}else H=b.uniforms;return H}function w(b,N){let H=x.get(N);return H!==void 0?++H.usedTimes:(H=new N3(o,N,b,c),p.push(H),x.set(N,H)),H}function L(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function D(b){h.remove(b)}function P(){h.dispose()}return{getParameters:U,getProgramCacheKey:y,getUniforms:Y,acquireProgram:w,releaseProgram:L,releaseShaderCache:D,programs:p,dispose:P}}function I3(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,g){o.get(d)[h]=g}function f(){o=new WeakMap}return{has:t,get:i,remove:s,update:c,dispose:f}}function z3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function nx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ix(){const o=[];let t=0;const i=[],s=[],c=[];function f(){t=0,i.length=0,s.length=0,c.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function h(v,E,C,U,y,S){let I=o[t];return I===void 0?(I={id:v.id,object:v,geometry:E,material:C,materialVariant:d(v),groupOrder:U,renderOrder:v.renderOrder,z:y,group:S},o[t]=I):(I.id=v.id,I.object=v,I.geometry=E,I.material=C,I.materialVariant=d(v),I.groupOrder=U,I.renderOrder=v.renderOrder,I.z=y,I.group=S),t++,I}function g(v,E,C,U,y,S,I){I.reversedDepth===!0&&(y=-y);const Y=h(v,E,C,U,y,S);C.transmission>0?s.push(Y):C.transparent===!0?c.push(Y):i.push(Y)}function p(v,E,C,U,y,S){const I=h(v,E,C,U,y,S);C.transmission>0?s.unshift(I):C.transparent===!0?c.unshift(I):i.unshift(I)}function x(v,E){i.length>1&&i.sort(v||z3),s.length>1&&s.sort(E||nx),c.length>1&&c.sort(E||nx)}function _(){for(let v=t,E=o.length;v<E;v++){const C=o[v];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:g,unshift:p,finish:_,sort:x}}function B3(){let o=new WeakMap;function t(s,c){const f=o.get(s);let d;return f===void 0?(d=new ix,o.set(s,[d])):c>=f.length?(d=new ix,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function F3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new pe,color:new Bt};break;case"SpotLight":i={position:new pe,direction:new pe,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return o[t.id]=i,i}}}function H3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let G3=0;function V3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function k3(o){const t=new F3,i=H3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new pe);const c=new pe,f=new _n,d=new _n;function h(p){let x=0,_=0,v=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let E=0,C=0,U=0,y=0,S=0,I=0,Y=0,w=0,L=0,D=0,P=0,b=0,N=0,H=0;p.sort(V3);for(let $=0,ne=p.length;$<ne;$++){const K=p[$],ee=K.color,X=K.intensity,q=K.distance;let ue=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===Zr?ue=K.shadow.map.texture:ue=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)x+=ee.r*X,_+=ee.g*X,v+=ee.b*X;else if(K.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(K.sh.coefficients[le],X);H++}else if(K.isSunLight){const le=t.get(K);if(le.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ce=K.shadow,xe=i.get(K);xe.shadowIntensity=ce.intensity,xe.shadowBias=ce.bias,xe.shadowNormalBias=ce.normalBias,xe.shadowRadius=ce.radius,xe.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[C]=xe,s.sunShadowMap[C]=ue;const Xe=ce.getViewportCount();for(let Ve=0;Ve<Xe;Ve++)s.sunShadowMatrix[U+Ve]=ce.getMatrix(Ve),s.sunShadowCascade[U+Ve]=ce._cascadeData[Ve];U+=Xe,C++}s.sun[E]=le,E++}else if(K.isDirectionalLight){const le=t.get(K);if(le.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ce=K.shadow,xe=i.get(K);xe.shadowIntensity=ce.intensity,xe.shadowBias=ce.bias,xe.shadowNormalBias=ce.normalBias,xe.shadowRadius=ce.radius,xe.shadowMapSize=ce.mapSize,s.directionalShadow[y]=xe,s.directionalShadowMap[y]=ue,s.directionalShadowMatrix[y]=K.shadow.matrix,L++}s.directional[y]=le,y++}else if(K.isSpotLight){const le=t.get(K);le.position.setFromMatrixPosition(K.matrixWorld),le.color.copy(ee).multiplyScalar(X),le.distance=q,le.coneCos=Math.cos(K.angle),le.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),le.decay=K.decay,s.spot[I]=le;const ce=K.shadow;if(K.map&&(s.spotLightMap[b]=K.map,b++,ce.updateMatrices(K),K.castShadow&&N++),s.spotLightMatrix[I]=ce.matrix,K.castShadow){const xe=i.get(K);xe.shadowIntensity=ce.intensity,xe.shadowBias=ce.bias,xe.shadowNormalBias=ce.normalBias,xe.shadowRadius=ce.radius,xe.shadowMapSize=ce.mapSize,s.spotShadow[I]=xe,s.spotShadowMap[I]=ue,P++}I++}else if(K.isRectAreaLight){const le=t.get(K);le.color.copy(ee).multiplyScalar(X),le.halfWidth.set(K.width*.5,0,0),le.halfHeight.set(0,K.height*.5,0),s.rectArea[Y]=le,Y++}else if(K.isPointLight){const le=t.get(K);if(le.color.copy(K.color).multiplyScalar(K.intensity),le.distance=K.distance,le.decay=K.decay,K.castShadow){const ce=K.shadow,xe=i.get(K);xe.shadowIntensity=ce.intensity,xe.shadowBias=ce.bias,xe.shadowNormalBias=ce.normalBias,xe.shadowRadius=ce.radius,xe.shadowMapSize=ce.mapSize,xe.shadowCameraNear=ce.camera.near,xe.shadowCameraFar=ce.camera.far,s.pointShadow[S]=xe,s.pointShadowMap[S]=ue,s.pointShadowMatrix[S]=K.shadow.matrix,D++}s.point[S]=le,S++}else if(K.isHemisphereLight){const le=t.get(K);le.skyColor.copy(K.color).multiplyScalar(X),le.groundColor.copy(K.groundColor).multiplyScalar(X),s.hemi[w]=le,w++}}Y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=v;const V=s.hash;(V.sunLength!==E||V.directionalLength!==y||V.pointLength!==S||V.spotLength!==I||V.rectAreaLength!==Y||V.hemiLength!==w||V.numSunShadows!==C||V.numDirectionalShadows!==L||V.numPointShadows!==D||V.numSpotShadows!==P||V.numSpotMaps!==b||V.numLightProbes!==H)&&(s.sun.length=E,s.directional.length=y,s.spot.length=I,s.rectArea.length=Y,s.point.length=S,s.hemi.length=w,s.sunShadow.length=C,s.sunShadowMap.length=C,s.sunShadowMatrix.length=U,s.sunShadowCascade.length=U,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=D,s.pointShadowMap.length=D,s.pointShadowMatrix.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+b-N,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=H,V.sunLength=E,V.directionalLength=y,V.pointLength=S,V.spotLength=I,V.rectAreaLength=Y,V.hemiLength=w,V.numSunShadows=C,V.numDirectionalShadows=L,V.numPointShadows=D,V.numSpotShadows=P,V.numSpotMaps=b,V.numLightProbes=H,s.version=G3++)}function g(p,x){let _=0,v=0,E=0,C=0,U=0,y=0;const S=x.matrixWorldInverse;for(let I=0,Y=p.length;I<Y;I++){const w=p[I];if(w.isSunLight){const L=s.sun[_];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(S),_++}else if(w.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(w.matrixWorld),c.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(S),v++}else if(w.isSpotLight){const L=s.spot[C];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(w.matrixWorld),c.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(c),L.direction.transformDirection(S),C++}else if(w.isRectAreaLight){const L=s.rectArea[U];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),d.identity(),f.copy(w.matrixWorld),f.premultiply(S),d.extractRotation(f),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),U++}else if(w.isPointLight){const L=s.point[E];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),E++}else if(w.isHemisphereLight){const L=s.hemi[y];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(S),y++}}}return{setup:h,setupView:g,state:s}}function ax(o){const t=new k3(o),i=[],s=[],c=[];function f(v){_.camera=v,i.length=0,s.length=0,c.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function g(v){c.push(v)}function p(){t.setup(i)}function x(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:g}}function X3(o){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new ax(o),t.set(c,[h])):f>=d.length?(h=new ax(o),d.push(h)):h=d[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const W3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q3=`uniform sampler2D shadow_pass;
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
}`,Y3=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],j3=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],rx=new _n,ul=new pe,Vh=new pe;function Z3(o,t,i){let s=new zx;const c=new Ft,f=new Ft,d=new cn,h=new n1,g=new i1,p={},x=i.maxTextureSize,_={[Yr]:Kn,[Kn]:Yr,[aa]:aa},v=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:W3,fragmentShader:q3}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const C=new Oa;C.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new ci(C,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let S=this.type;this.render=function(D,P,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===kM&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gu);const N=o.getRenderTarget(),H=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Na),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ne=S!==this.type;ne&&P.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(ee=>ee.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,ee=D.length;K<ee;K++){const X=D[K],q=X.shadow;if(q===void 0){st("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;c.copy(q.mapSize);const ue=q.getFrameExtents();c.multiply(ue),f.copy(q.mapSize),(c.x>x||c.y>x)&&(c.x>x&&(f.x=Math.floor(x/ue.x),c.x=f.x*ue.x,q.mapSize.x=f.x),c.y>x&&(f.y=Math.floor(x/ue.y),c.y=f.y*ue.y,q.mapSize.y=f.y));const le=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=le,q.map===null||ne===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===fl){if(X.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Bi(c.x,c.y,{format:Zr,type:ca,minFilter:In,magFilter:In,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new xl(c.x,c.y,ra),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=La,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un}else X.isPointLight?(q.map=new Wx(c.x),q.map.depthTexture=new KE(c.x,la)):(q.map=new Bi(c.x,c.y),q.map.depthTexture=new xl(c.x,c.y,la)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=La,this.type===gu?(q.map.depthTexture.compareFunction=le?Vp:Gp,q.map.depthTexture.minFilter=In,q.map.depthTexture.magFilter=In):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==c.x||q.map.height!==c.y)&&q.map.setSize(c.x,c.y);const ce=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,b);for(let xe=0;xe<ce;xe++){const Xe=q.getCamera(xe);if(X.isPointLight){const Ve=q.camera,B=q.matrix,me=X.distance||Ve.far;me!==Ve.far&&(Ve.far=me,Ve.updateProjectionMatrix()),ul.setFromMatrixPosition(X.matrixWorld),Ve.position.copy(ul),Vh.copy(Ve.position),Vh.add(Y3[xe]),Ve.up.copy(j3[xe]),Ve.lookAt(Vh),Ve.updateMatrixWorld(),B.makeTranslation(-ul.x,-ul.y,-ul.z),rx.multiplyMatrices(Ve.projectionMatrix,Ve.matrixWorldInverse),q._frustum.setFromProjectionMatrix(rx,Ve.coordinateSystem,Ve.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,xe),o.clear();else{xe===0&&(o.setRenderTarget(q.map),o.clear());const Ve=q.getViewport(xe);d.set(f.x*Ve.x,f.y*Ve.y,f.x*Ve.z,f.y*Ve.w),$.viewport(d)}s=q.getFrustum(xe),w(P,b,Xe,X,this.type)}q.isPointLightShadow!==!0&&this.type===fl&&I(q,b),q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(N,H,V)};function I(D,P){const b=t.update(U);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,E.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),D.mapPass===null?D.mapPass=new Bi(c.x,c.y,{format:Zr,type:ca}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value.set(D.map.width,D.map.height),v.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(P,null,b,v,U,null),E.uniforms.shadow_pass.value=D.mapPass.texture,E.uniforms.resolution.value.set(D.map.width,D.map.height),E.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(P,null,b,E,U,null)}function Y(D,P,b,N){let H=null;const V=b.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)H=V;else if(H=b.isPointLight===!0?g:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=H.uuid,ne=P.uuid;let K=p[$];K===void 0&&(K={},p[$]=K);let ee=K[ne];ee===void 0&&(ee=H.clone(),K[ne]=ee,P.addEventListener("dispose",L)),H=ee}if(H.visible=P.visible,H.wireframe=P.wireframe,N===fl?H.side=P.shadowSide!==null?P.shadowSide:P.side:H.side=P.shadowSide!==null?P.shadowSide:_[P.side],H.alphaMap=P.alphaMap,H.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,H.map=P.map,H.clipShadows=P.clipShadows,H.clippingPlanes=P.clippingPlanes,H.clipIntersection=P.clipIntersection,H.displacementMap=P.displacementMap,H.displacementScale=P.displacementScale,H.displacementBias=P.displacementBias,H.wireframeLinewidth=P.wireframeLinewidth,H.linewidth=P.linewidth,b.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const $=o.properties.get(H);$.light=b}return H}function w(D,P,b,N,H){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&H===fl)&&(!D.frustumCulled||D.intersectsFrustum(s))){D.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,D.matrixWorld);const ne=t.update(D),K=D.material;if(Array.isArray(K)){const ee=ne.groups;for(let X=0,q=ee.length;X<q;X++){const ue=ee[X],le=K[ue.materialIndex];if(le&&le.visible){const ce=Y(D,le,N,H);D.onBeforeShadow(o,D,P,b,ne,ce,ue),o.renderBufferDirect(b,null,ne,ce,D,ue),D.onAfterShadow(o,D,P,b,ne,ce,ue)}}}else if(K.visible){const ee=Y(D,K,N,H);D.onBeforeShadow(o,D,P,b,ne,ee,null),o.renderBufferDirect(b,null,ne,ee,D,null),D.onAfterShadow(o,D,P,b,ne,ee,null)}}const $=D.children;for(let ne=0,K=$.length;ne<K;ne++)w($[ne],P,b,N,H)}function L(D){D.target.removeEventListener("dispose",L);for(const b in p){const N=p[b],H=D.target.uuid;H in N&&(N[H].dispose(),delete N[H])}}}function K3(o,t){function i(){let k=!1;const Ne=new cn;let Me=null;const Le=new cn(0,0,0,0);return{setMask:function(ke){Me!==ke&&!k&&(o.colorMask(ke,ke,ke,ke),Me=ke)},setLocked:function(ke){k=ke},setClear:function(ke,Te,Je,Ge,Ct){Ct===!0&&(ke*=Ge,Te*=Ge,Je*=Ge),Ne.set(ke,Te,Je,Ge),Le.equals(Ne)===!1&&(o.clearColor(ke,Te,Je,Ge),Le.copy(Ne))},reset:function(){k=!1,Me=null,Le.set(-1,0,0,0)}}}function s(){let k=!1,Ne=!1,Me=null,Le=null,ke=null;return{setReversed:function(Te){if(Ne!==Te){const Je=t.get("EXT_clip_control");Te?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ne=Te;const Ge=ke;ke=null,this.setClear(Ge)}},getReversed:function(){return Ne},setTest:function(Te){Te?de(o.DEPTH_TEST):be(o.DEPTH_TEST)},setMask:function(Te){Me!==Te&&!k&&(o.depthMask(Te),Me=Te)},setFunc:function(Te){if(Ne&&(Te=bE[Te]),Le!==Te){switch(Te){case Wh:o.depthFunc(o.NEVER);break;case qh:o.depthFunc(o.ALWAYS);break;case Yh:o.depthFunc(o.LESS);break;case ml:o.depthFunc(o.LEQUAL);break;case jh:o.depthFunc(o.EQUAL);break;case Zh:o.depthFunc(o.GEQUAL);break;case Kh:o.depthFunc(o.GREATER);break;case Qh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=Te}},setLocked:function(Te){k=Te},setClear:function(Te){ke!==Te&&(ke=Te,Ne&&(Te=1-Te),o.clearDepth(Te))},reset:function(){k=!1,Me=null,Le=null,ke=null,Ne=!1}}}function c(){let k=!1,Ne=null,Me=null,Le=null,ke=null,Te=null,Je=null,Ge=null,Ct=null;return{setTest:function(ct){k||(ct?de(o.STENCIL_TEST):be(o.STENCIL_TEST))},setMask:function(ct){Ne!==ct&&!k&&(o.stencilMask(ct),Ne=ct)},setFunc:function(ct,Qn,fi){(Me!==ct||Le!==Qn||ke!==fi)&&(o.stencilFunc(ct,Qn,fi),Me=ct,Le=Qn,ke=fi)},setOp:function(ct,Qn,fi){(Te!==ct||Je!==Qn||Ge!==fi)&&(o.stencilOp(ct,Qn,fi),Te=ct,Je=Qn,Ge=fi)},setLocked:function(ct){k=ct},setClear:function(ct){Ct!==ct&&(o.clearStencil(ct),Ct=ct)},reset:function(){k=!1,Ne=null,Me=null,Le=null,ke=null,Te=null,Je=null,Ge=null,Ct=null}}}const f=new i,d=new s,h=new c,g=new WeakMap,p=new WeakMap;let x={},_={},v={},E=new WeakMap,C=[],U=null,y=!1,S=null,I=null,Y=null,w=null,L=null,D=null,P=null,b=new Bt(0,0,0),N=0,H=!1,V=null,$=null,ne=null,K=null,ee=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ue=0;const le=o.getParameter(o.VERSION);le.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(le)[1]),q=ue>=1):le.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),q=ue>=2);let ce=null,xe={};const Xe=o.getParameter(o.SCISSOR_BOX),Ve=o.getParameter(o.VIEWPORT),B=new cn().fromArray(Xe),me=new cn().fromArray(Ve);function Ae(k,Ne,Me,Le){const ke=new Uint8Array(4),Te=o.createTexture();o.bindTexture(k,Te),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Je=0;Je<Me;Je++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,ke):o.texImage2D(Ne+Je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ke);return Te}const j={};j[o.TEXTURE_2D]=Ae(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=Ae(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=Ae(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=Ae(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),de(o.DEPTH_TEST),d.setFunc(ml),tt(!1),it(uv),de(o.CULL_FACE),_t(Na);function de(k){x[k]!==!0&&(o.enable(k),x[k]=!0)}function be(k){x[k]!==!1&&(o.disable(k),x[k]=!1)}function Ce(k,Ne){return v[k]!==Ne?(o.bindFramebuffer(k,Ne),v[k]=Ne,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ne),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ve(k,Ne){let Me=C,Le=!1;if(k){Me=E.get(Ne),Me===void 0&&(Me=[],E.set(Ne,Me));const ke=k.textures;if(Me.length!==ke.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let Te=0,Je=ke.length;Te<Je;Te++)Me[Te]=o.COLOR_ATTACHMENT0+Te;Me.length=ke.length,Le=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Le=!0);Le&&o.drawBuffers(Me)}function we(k){return U!==k?(o.useProgram(k),U=k,!0):!1}const Vt={[$s]:o.FUNC_ADD,[WM]:o.FUNC_SUBTRACT,[qM]:o.FUNC_REVERSE_SUBTRACT};Vt[YM]=o.MIN,Vt[jM]=o.MAX;const pt={[ZM]:o.ZERO,[KM]:o.ONE,[QM]:o.SRC_COLOR,[hx]:o.SRC_ALPHA,[iE]:o.SRC_ALPHA_SATURATE,[tE]:o.DST_COLOR,[$M]:o.DST_ALPHA,[JM]:o.ONE_MINUS_SRC_COLOR,[px]:o.ONE_MINUS_SRC_ALPHA,[nE]:o.ONE_MINUS_DST_COLOR,[eE]:o.ONE_MINUS_DST_ALPHA,[aE]:o.CONSTANT_COLOR,[rE]:o.ONE_MINUS_CONSTANT_COLOR,[sE]:o.CONSTANT_ALPHA,[oE]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(k,Ne,Me,Le,ke,Te,Je,Ge,Ct,ct){if(k===Na){y===!0&&(be(o.BLEND),y=!1);return}if(y===!1&&(de(o.BLEND),y=!0),k!==XM){if(k!==S||ct!==H){if((I!==$s||L!==$s)&&(o.blendEquation(o.FUNC_ADD),I=$s,L=$s),ct)switch(k){case hl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fv:o.blendFunc(o.ONE,o.ONE);break;case dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Pt("WebGLState: Invalid blending: ",k);break}else switch(k){case hl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dv:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hv:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",k);break}Y=null,w=null,D=null,P=null,b.set(0,0,0),N=0,S=k,H=ct}return}ke=ke||Ne,Te=Te||Me,Je=Je||Le,(Ne!==I||ke!==L)&&(o.blendEquationSeparate(Vt[Ne],Vt[ke]),I=Ne,L=ke),(Me!==Y||Le!==w||Te!==D||Je!==P)&&(o.blendFuncSeparate(pt[Me],pt[Le],pt[Te],pt[Je]),Y=Me,w=Le,D=Te,P=Je),(Ge.equals(b)===!1||Ct!==N)&&(o.blendColor(Ge.r,Ge.g,Ge.b,Ct),b.copy(Ge),N=Ct),S=k,H=!1}function yt(k,Ne){k.side===aa?be(o.CULL_FACE):de(o.CULL_FACE);let Me=k.side===Kn;Ne&&(Me=!Me),tt(Me),k.blending===hl&&k.transparent===!1?_t(Na):_t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const Le=k.stencilWrite;h.setTest(Le),Le&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),fn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):be(o.SAMPLE_ALPHA_TO_COVERAGE)}function tt(k){V!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),V=k)}function it(k){k!==GM?(de(o.CULL_FACE),k!==$&&(k===uv?o.cullFace(o.BACK):k===VM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):be(o.CULL_FACE),$=k}function kt(k){k!==ne&&(q&&o.lineWidth(k),ne=k)}function fn(k,Ne,Me){k?(de(o.POLYGON_OFFSET_FILL),(K!==Ne||ee!==Me)&&(K=Ne,ee=Me,d.getReversed()&&(Ne=-Ne),o.polygonOffset(Ne,Me))):be(o.POLYGON_OFFSET_FILL)}function Ot(k){k?de(o.SCISSOR_TEST):be(o.SCISSOR_TEST)}function en(k){k===void 0&&(k=o.TEXTURE0+X-1),ce!==k&&(o.activeTexture(k),ce=k)}function W(k,Ne,Me){Me===void 0&&(ce===null?Me=o.TEXTURE0+X-1:Me=ce);let Le=xe[Me];Le===void 0&&(Le={type:void 0,texture:void 0},xe[Me]=Le),(Le.type!==k||Le.texture!==Ne)&&(ce!==Me&&(o.activeTexture(Me),ce=Me),o.bindTexture(k,Ne||j[k]),Le.type=k,Le.texture=Ne)}function nn(){const k=xe[ce];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Lt(){try{o.compressedTexImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function M(){try{o.texSubImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function te(){try{o.texSubImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function ge(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Re(){try{o.texStorage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Ue(){try{o.texStorage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function _e(){try{o.texImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Ee(){try{o.texImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function De(k){return _[k]!==void 0?_[k]:o.getParameter(k)}function $e(k,Ne){_[k]!==Ne&&(o.pixelStorei(k,Ne),_[k]=Ne)}function ze(k){B.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),B.copy(k))}function Ie(k){me.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),me.copy(k))}function We(k,Ne){let Me=p.get(Ne);Me===void 0&&(Me=new WeakMap,p.set(Ne,Me));let Le=Me.get(k);Le===void 0&&(Le=o.getUniformBlockIndex(Ne,k.name),Me.set(k,Le))}function nt(k,Ne){const Le=p.get(Ne).get(k);g.get(Ne)!==Le&&(o.uniformBlockBinding(Ne,Le,k.__bindingPointIndex),g.set(Ne,Le))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},_={},ce=null,xe={},v={},E=new WeakMap,C=[],U=null,y=!1,S=null,I=null,Y=null,w=null,L=null,D=null,P=null,b=new Bt(0,0,0),N=0,H=!1,V=null,$=null,ne=null,K=null,ee=null,B.set(0,0,o.canvas.width,o.canvas.height),me.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:de,disable:be,bindFramebuffer:Ce,drawBuffers:ve,useProgram:we,setBlending:_t,setMaterial:yt,setFlipSided:tt,setCullFace:it,setLineWidth:kt,setPolygonOffset:fn,setScissorTest:Ot,activeTexture:en,bindTexture:W,unbindTexture:nn,compressedTexImage2D:Lt,compressedTexImage3D:O,texImage2D:_e,texImage3D:Ee,pixelStorei:$e,getParameter:De,updateUBOMapping:We,uniformBlockBinding:nt,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:te,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:ze,viewport:Ie,reset:lt}}function Q3(o,t,i,s,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,x=new WeakMap,_=new Set;let v;const E=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(O,M){return C?new OffscreenCanvas(O,M):vl("canvas")}function y(O,M,te){let oe=1;const ge=Lt(O);if((ge.width>te||ge.height>te)&&(oe=te/Math.max(ge.width,ge.height)),oe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Re=Math.floor(oe*ge.width),Ue=Math.floor(oe*ge.height);v===void 0&&(v=U(Re,Ue));const _e=M?U(Re,Ue):v;return _e.width=Re,_e.height=Ue,_e.getContext("2d").drawImage(O,0,0,Re,Ue),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Re+"x"+Ue+")."),_e}else return"data"in O&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function S(O){return O.generateMipmaps}function I(O){o.generateMipmap(O)}function Y(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(O,M,te,oe,ge,Re=!1){if(O!==null){if(o[O]!==void 0)return o[O];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ue;oe&&(Ue=t.get("EXT_texture_norm16"),Ue||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=M;if(M===o.RED&&(te===o.FLOAT&&(_e=o.R32F),te===o.HALF_FLOAT&&(_e=o.R16F),te===o.UNSIGNED_BYTE&&(_e=o.R8),te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.R16_EXT),te===o.SHORT&&Ue&&(_e=Ue.R16_SNORM_EXT)),M===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.R8UI),te===o.UNSIGNED_SHORT&&(_e=o.R16UI),te===o.UNSIGNED_INT&&(_e=o.R32UI),te===o.BYTE&&(_e=o.R8I),te===o.SHORT&&(_e=o.R16I),te===o.INT&&(_e=o.R32I)),M===o.RG&&(te===o.FLOAT&&(_e=o.RG32F),te===o.HALF_FLOAT&&(_e=o.RG16F),te===o.UNSIGNED_BYTE&&(_e=o.RG8),te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RG16_EXT),te===o.SHORT&&Ue&&(_e=Ue.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.RG8UI),te===o.UNSIGNED_SHORT&&(_e=o.RG16UI),te===o.UNSIGNED_INT&&(_e=o.RG32UI),te===o.BYTE&&(_e=o.RG8I),te===o.SHORT&&(_e=o.RG16I),te===o.INT&&(_e=o.RG32I)),M===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.RGB8UI),te===o.UNSIGNED_SHORT&&(_e=o.RGB16UI),te===o.UNSIGNED_INT&&(_e=o.RGB32UI),te===o.BYTE&&(_e=o.RGB8I),te===o.SHORT&&(_e=o.RGB16I),te===o.INT&&(_e=o.RGB32I)),M===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(_e=o.RGBA16UI),te===o.UNSIGNED_INT&&(_e=o.RGBA32UI),te===o.BYTE&&(_e=o.RGBA8I),te===o.SHORT&&(_e=o.RGBA16I),te===o.INT&&(_e=o.RGBA32I)),M===o.RGB&&(te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGB16_EXT),te===o.SHORT&&Ue&&(_e=Ue.RGB16_SNORM_EXT),te===o.UNSIGNED_INT_5_9_9_9_REV&&(_e=o.RGB9_E5),te===o.UNSIGNED_INT_10F_11F_11F_REV&&(_e=o.R11F_G11F_B10F)),M===o.RGBA){const Ee=Re?Tu:Nt.getTransfer(ge);te===o.FLOAT&&(_e=o.RGBA32F),te===o.HALF_FLOAT&&(_e=o.RGBA16F),te===o.UNSIGNED_BYTE&&(_e=Ee===Yt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGBA16_EXT),te===o.SHORT&&Ue&&(_e=Ue.RGBA16_SNORM_EXT),te===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function L(O,M){let te;return O?M===null||M===la||M===_l?te=o.DEPTH24_STENCIL8:M===ra?te=o.DEPTH32F_STENCIL8:M===gl&&(te=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===la||M===_l?te=o.DEPTH_COMPONENT24:M===ra?te=o.DEPTH_COMPONENT32F:M===gl&&(te=o.DEPTH_COMPONENT16),te}function D(O,M){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function P(O){const M=O.target;M.removeEventListener("dispose",P),N(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&_.delete(M)}function b(O){const M=O.target;M.removeEventListener("dispose",b),V(M)}function N(O){const M=s.get(O);if(M.__webglInit===void 0)return;const te=O.source,oe=E.get(te);if(oe){const ge=oe[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&H(O),Object.keys(oe).length===0&&E.delete(te)}s.remove(O)}function H(O){const M=s.get(O);o.deleteTexture(M.__webglTexture);const te=O.source,oe=E.get(te);delete oe[M.__cacheKey],d.memory.textures--}function V(O){const M=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let ge=0;ge<M.__webglFramebuffer[oe].length;ge++)o.deleteFramebuffer(M.__webglFramebuffer[oe][ge]);else o.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)o.deleteFramebuffer(M.__webglFramebuffer[oe]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const te=O.textures;for(let oe=0,ge=te.length;oe<ge;oe++){const Re=s.get(te[oe]);Re.__webglTexture&&(o.deleteTexture(Re.__webglTexture),d.memory.textures--),s.remove(te[oe])}s.remove(O)}let $=0;function ne(){$=0}function K(){return $}function ee(O){$=O}function X(){const O=$;return O>=c.maxTextures&&st("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+c.maxTextures),$+=1,O}function q(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function ue(O,M){const te=s.get(O);if(O.isVideoTexture&&W(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&te.__version!==O.version){const oe=O.image;if(oe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{be(te,O,M);return}}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+M)}function le(O,M){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){be(te,O,M);return}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+M)}function ce(O,M){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){be(te,O,M);return}i.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+M)}function xe(O,M){const te=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&te.__version!==O.version){Ce(te,O,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+M)}const Xe={[Jh]:o.REPEAT,[Ii]:o.CLAMP_TO_EDGE,[$h]:o.MIRRORED_REPEAT},Ve={[Un]:o.NEAREST,[uE]:o.NEAREST_MIPMAP_NEAREST,[qc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[dh]:o.LINEAR_MIPMAP_NEAREST,[Wr]:o.LINEAR_MIPMAP_LINEAR},B={[pE]:o.NEVER,[xE]:o.ALWAYS,[mE]:o.LESS,[Gp]:o.LEQUAL,[gE]:o.EQUAL,[Vp]:o.GEQUAL,[_E]:o.GREATER,[vE]:o.NOTEQUAL};function me(O,M){if(M.type===ra&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===dh||M.magFilter===qc||M.magFilter===Wr||M.minFilter===In||M.minFilter===dh||M.minFilter===qc||M.minFilter===Wr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Xe[M.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Xe[M.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Xe[M.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Ve[M.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Ve[M.minFilter]),M.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==qc&&M.minFilter!==Wr||M.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,c.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(O,M){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",P));const oe=M.source;let ge=E.get(oe);ge===void 0&&(ge={},E.set(oe,ge));const Re=q(M);if(Re!==O.__cacheKey){ge[Re]===void 0&&(ge[Re]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,te=!0),ge[Re].usedTimes++;const Ue=ge[O.__cacheKey];Ue!==void 0&&(ge[O.__cacheKey].usedTimes--,Ue.usedTimes===0&&H(M)),O.__cacheKey=Re,O.__webglTexture=ge[Re].texture}return te}function j(O,M,te){return Math.floor(Math.floor(O/te)/M)}function de(O,M,te,oe){const Re=O.updateRanges;if(Re.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,te,oe,M.data);else{Re.sort(($e,ze)=>$e.start-ze.start);let Ue=0;for(let $e=1;$e<Re.length;$e++){const ze=Re[Ue],Ie=Re[$e],We=ze.start+ze.count,nt=j(Ie.start,M.width,4),lt=j(ze.start,M.width,4);Ie.start<=We+1&&nt===lt&&j(Ie.start+Ie.count-1,M.width,4)===nt?ze.count=Math.max(ze.count,Ie.start+Ie.count-ze.start):(++Ue,Re[Ue]=Ie)}Re.length=Ue+1;const _e=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),De=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let $e=0,ze=Re.length;$e<ze;$e++){const Ie=Re[$e],We=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),lt=We%M.width,k=Math.floor(We/M.width),Ne=nt,Me=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,lt,k,Ne,Me,te,oe,M.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_e),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,De)}}function be(O,M,te){let oe=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=o.TEXTURE_3D);const ge=Ae(O,M),Re=M.source;i.bindTexture(oe,O.__webglTexture,o.TEXTURE0+te);const Ue=s.get(Re);if(Re.version!==Ue.__version||ge===!0){if(i.activeTexture(o.TEXTURE0+te),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Me=Nt.getPrimaries(Nt.workingColorSpace),Le=M.colorSpace===mr?null:Nt.getPrimaries(M.colorSpace),ke=M.colorSpace===mr||Me===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let Ee=y(M.image,!1,c.maxTextureSize);Ee=nn(M,Ee);const De=f.convert(M.format,M.colorSpace),$e=f.convert(M.type);let ze=w(M.internalFormat,De,$e,M.normalized,M.colorSpace,M.isVideoTexture);me(oe,M);let Ie;const We=M.mipmaps,nt=M.isVideoTexture!==!0,lt=Ue.__version===void 0||ge===!0,k=Re.dataReady,Ne=D(M,Ee);if(M.isDepthTexture)ze=L(M.format===qr,M.type),lt&&(nt?i.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,De,$e,null));else if(M.isDataTexture)if(We.length>0){nt&&lt&&i.texStorage2D(o.TEXTURE_2D,Ne,ze,We[0].width,We[0].height);for(let Me=0,Le=We.length;Me<Le;Me++)Ie=We[Me],nt?k&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,De,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,De,$e,Ie.data);M.generateMipmaps=!1}else nt?(lt&&i.texStorage2D(o.TEXTURE_2D,Ne,ze,Ee.width,Ee.height),k&&de(M,Ee,De,$e)):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,De,$e,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,ze,We[0].width,We[0].height,Ee.depth);for(let Me=0,Le=We.length;Me<Le;Me++)if(Ie=We[Me],M.format!==zi)if(De!==null)if(nt){if(k)if(M.layerUpdates.size>0){const ke=zv(Ie.width,Ie.height,M.format,M.type);for(const Te of M.layerUpdates){const Je=Ie.data.subarray(Te*ke/Ie.data.BYTES_PER_ELEMENT,(Te+1)*ke/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,Te,Ie.width,Ie.height,1,De,Je)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,De,Ie.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,Ie.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,De,$e,Ie.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,De,$e,Ie.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{nt&&lt&&i.texStorage2D(o.TEXTURE_2D,Ne,ze,We[0].width,We[0].height);for(let Me=0,Le=We.length;Me<Le;Me++)Ie=We[Me],M.format!==zi?De!==null?nt?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,De,Ie.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ie.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?k&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,De,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,De,$e,Ie.data)}else if(M.isDataArrayTexture)if(nt){if(lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,ze,Ee.width,Ee.height,Ee.depth),k)if(M.layerUpdates.size>0){const Me=zv(Ee.width,Ee.height,M.format,M.type);for(const Le of M.layerUpdates){const ke=Ee.data.subarray(Le*Me/Ee.data.BYTES_PER_ELEMENT,(Le+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Le,Ee.width,Ee.height,1,De,$e,ke)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,$e,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,De,$e,Ee.data);else if(M.isData3DTexture)nt?(lt&&i.texStorage3D(o.TEXTURE_3D,Ne,ze,Ee.width,Ee.height,Ee.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,$e,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,De,$e,Ee.data);else if(M.isFramebufferTexture){if(lt)if(nt)i.texStorage2D(o.TEXTURE_2D,Ne,ze,Ee.width,Ee.height);else{let Me=Ee.width,Le=Ee.height;for(let ke=0;ke<Ne;ke++)i.texImage2D(o.TEXTURE_2D,ke,ze,Me,Le,0,De,$e,null),Me>>=1,Le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Ee.parentNode!==Me){Me.appendChild(Ee),_.add(M),Me.onpaint=Le=>{const ke=Le.changedElements;for(const Te of _)ke.includes(Te.image)&&(Te.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const ke=o.RGBA,Te=o.RGBA,Je=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,ke,Te,Je,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(We.length>0){if(nt&&lt){const Me=Lt(We[0]);i.texStorage2D(o.TEXTURE_2D,Ne,ze,Me.width,Me.height)}for(let Me=0,Le=We.length;Me<Le;Me++)Ie=We[Me],nt?k&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,De,$e,Ie):i.texImage2D(o.TEXTURE_2D,Me,ze,De,$e,Ie);M.generateMipmaps=!1}else if(nt){if(lt){const Me=Lt(Ee);i.texStorage2D(o.TEXTURE_2D,Ne,ze,Me.width,Me.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,De,$e,Ee)}else i.texImage2D(o.TEXTURE_2D,0,ze,De,$e,Ee);S(M)&&I(oe),Ue.__version=Re.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Ce(O,M,te){if(M.image.length!==6)return;const oe=Ae(O,M),ge=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+te);const Re=s.get(ge);if(ge.version!==Re.__version||oe===!0){i.activeTexture(o.TEXTURE0+te);const Ue=Nt.getPrimaries(Nt.workingColorSpace),_e=M.colorSpace===mr?null:Nt.getPrimaries(M.colorSpace),Ee=M.colorSpace===mr||Ue===_e?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,ze=[];for(let Te=0;Te<6;Te++)!De&&!$e?ze[Te]=y(M.image[Te],!0,c.maxCubemapSize):ze[Te]=$e?M.image[Te].image:M.image[Te],ze[Te]=nn(M,ze[Te]);const Ie=ze[0],We=f.convert(M.format,M.colorSpace),nt=f.convert(M.type),lt=w(M.internalFormat,We,nt,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,Ne=Re.__version===void 0||oe===!0,Me=ge.dataReady;let Le=D(M,Ie);me(o.TEXTURE_CUBE_MAP,M);let ke;if(De){k&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,lt,Ie.width,Ie.height);for(let Te=0;Te<6;Te++){ke=ze[Te].mipmaps;for(let Je=0;Je<ke.length;Je++){const Ge=ke[Je];M.format!==zi?We!==null?k?Me&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,Ge.width,Ge.height,We,Ge.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,lt,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,Ge.width,Ge.height,We,nt,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,lt,Ge.width,Ge.height,0,We,nt,Ge.data)}}}else{if(ke=M.mipmaps,k&&Ne){ke.length>0&&Le++;const Te=Lt(ze[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,lt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if($e){k?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ze[Te].width,ze[Te].height,We,nt,ze[Te].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,lt,ze[Te].width,ze[Te].height,0,We,nt,ze[Te].data);for(let Je=0;Je<ke.length;Je++){const Ct=ke[Je].image[Te].image;k?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,Ct.width,Ct.height,We,nt,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,lt,Ct.width,Ct.height,0,We,nt,Ct.data)}}else{k?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,We,nt,ze[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,lt,We,nt,ze[Te]);for(let Je=0;Je<ke.length;Je++){const Ge=ke[Je];k?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,We,nt,Ge.image[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,lt,We,nt,Ge.image[Te])}}}S(M)&&I(o.TEXTURE_CUBE_MAP),Re.__version=ge.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function ve(O,M,te,oe,ge,Re){const Ue=f.convert(te.format,te.colorSpace),_e=f.convert(te.type),Ee=w(te.internalFormat,Ue,_e,te.normalized,te.colorSpace),De=s.get(M),$e=s.get(te);if($e.__renderTarget=M,!De.__hasExternalTextures){const ze=Math.max(1,M.width>>Re),Ie=Math.max(1,M.height>>Re);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?i.texImage3D(ge,Re,Ee,ze,Ie,M.depth,0,Ue,_e,null):i.texImage2D(ge,Re,Ee,ze,Ie,0,Ue,_e,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,oe,ge,$e.__webglTexture,0,Ot(M)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,oe,ge,$e.__webglTexture,Re),i.bindFramebuffer(o.FRAMEBUFFER,null)}function we(O,M,te){if(o.bindRenderbuffer(o.RENDERBUFFER,O),M.depthBuffer){const oe=M.depthTexture,ge=oe&&oe.isDepthTexture?oe.type:null,Re=L(M.stencilBuffer,ge),Ue=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;en(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot(M),Re,M.width,M.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot(M),Re,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Re,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ue,o.RENDERBUFFER,O)}else{const oe=M.textures;for(let ge=0;ge<oe.length;ge++){const Re=oe[ge],Ue=f.convert(Re.format,Re.colorSpace),_e=f.convert(Re.type),Ee=w(Re.internalFormat,Ue,_e,Re.normalized,Re.colorSpace);en(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot(M),Ee,M.width,M.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot(M),Ee,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(O,M,te){const oe=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),oe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),me(o.TEXTURE_CUBE_MAP,M.depthTexture);const De=f.convert(M.depthTexture.format),$e=f.convert(M.depthTexture.type);let ze;M.depthTexture.format===La?ze=o.DEPTH_COMPONENT24:M.depthTexture.format===qr&&(ze=o.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ze,M.width,M.height,0,De,$e,null)}}else ue(M.depthTexture,0);const Re=ge.__webglTexture,Ue=Ot(M),_e=oe?o.TEXTURE_CUBE_MAP_POSITIVE_X+te:o.TEXTURE_2D,Ee=M.depthTexture.format===qr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===La)en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,_e,Re,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,_e,Re,0);else if(M.depthTexture.format===qr)en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,_e,Re,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,_e,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(O){const M=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const oe=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",ge)};oe.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=oe}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(te)for(let oe=0;oe<6;oe++)Vt(M.__webglFramebuffer[oe],O,oe);else{const oe=O.texture.mipmaps;oe&&oe.length>0?Vt(M.__webglFramebuffer[0],O,0):Vt(M.__webglFramebuffer,O,0)}else if(te){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=o.createRenderbuffer(),we(M.__webglDepthbuffer[oe],O,!1);else{const ge=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer[oe];o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Re)}}else{const oe=O.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),we(M.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Re)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _t(O,M,te){const oe=s.get(O);M!==void 0&&ve(oe.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&pt(O)}function yt(O){const M=O.texture,te=s.get(O),oe=s.get(M);O.addEventListener("dispose",b);const ge=O.textures,Re=O.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture()),oe.__version=M.version,d.memory.textures++),Re){te.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)te.__webglFramebuffer[_e][Ee]=o.createFramebuffer()}else te.__webglFramebuffer[_e]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)te.__webglFramebuffer[_e]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Ue)for(let _e=0,Ee=ge.length;_e<Ee;_e++){const De=s.get(ge[_e]);De.__webglTexture===void 0&&(De.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&en(O)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const Ee=ge[_e];te.__webglColorRenderbuffer[_e]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[_e]);const De=f.convert(Ee.format,Ee.colorSpace),$e=f.convert(Ee.type),ze=w(Ee.internalFormat,De,$e,Ee.normalized,Ee.colorSpace,O.isXRRenderTarget===!0),Ie=Ot(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,ze,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,te.__webglColorRenderbuffer[_e])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),we(te.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Re){i.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture),me(o.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ve(te.__webglFramebuffer[_e][Ee],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else ve(te.__webglFramebuffer[_e],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(M)&&I(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let _e=0,Ee=ge.length;_e<Ee;_e++){const De=ge[_e],$e=s.get(De);let ze=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ze=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,$e.__webglTexture),me(ze,De),ve(te.__webglFramebuffer,O,De,o.COLOR_ATTACHMENT0+_e,ze,0),S(De)&&I(ze)}i.unbindTexture()}else{let _e=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(_e=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_e,oe.__webglTexture),me(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ve(te.__webglFramebuffer[Ee],O,M,o.COLOR_ATTACHMENT0,_e,Ee);else ve(te.__webglFramebuffer,O,M,o.COLOR_ATTACHMENT0,_e,0);S(M)&&I(_e),i.unbindTexture()}O.depthBuffer&&pt(O)}function tt(O){const M=O.textures;for(let te=0,oe=M.length;te<oe;te++){const ge=M[te];if(S(ge)){const Re=Y(O),Ue=s.get(ge).__webglTexture;i.bindTexture(Re,Ue),I(Re),i.unbindTexture()}}}const it=[],kt=[];function fn(O){if(O.samples>0){if(en(O)===!1){const M=O.textures,te=O.width,oe=O.height;let ge=o.COLOR_BUFFER_BIT;const Re=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=s.get(O),_e=M.length>1;if(_e)for(let De=0;De<M.length;De++)i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ee=O.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<M.length;De++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),_e){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const $e=s.get(M[De]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$e,0)}o.blitFramebuffer(0,0,te,oe,0,0,te,oe,ge,o.NEAREST),g===!0&&(it.length=0,kt.length=0,it.push(o.COLOR_ATTACHMENT0+De),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(it.push(Re),kt.push(Re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,kt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<M.length;De++){i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const $e=s.get(M[De]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,$e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&g){const M=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Ot(O){return Math.min(c.maxSamples,O.samples)}function en(O){const M=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(O){const M=d.render.frame;x.get(O)!==M&&(x.set(O,M),O.update())}function nn(O,M){const te=O.colorSpace,oe=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==bu&&te!==mr&&(Nt.getTransfer(te)===Yt?(oe!==zi||ge!==Ti)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",te)),M}function Lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=ne,this.getTextureUnits=K,this.setTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=le,this.setTexture3D=ce,this.setTextureCube=xe,this.rebindTextures=_t,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function J3(o,t){function i(s,c=mr){let f;const d=Nt.getTransfer(c);if(s===Ti)return o.UNSIGNED_BYTE;if(s===Ip)return o.UNSIGNED_SHORT_4_4_4_4;if(s===zp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ax)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Rx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===bx)return o.BYTE;if(s===Tx)return o.SHORT;if(s===gl)return o.UNSIGNED_SHORT;if(s===Pp)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ca)return o.HALF_FLOAT;if(s===Cx)return o.ALPHA;if(s===wx)return o.RGB;if(s===zi)return o.RGBA;if(s===La)return o.DEPTH_COMPONENT;if(s===qr)return o.DEPTH_STENCIL;if(s===Nx)return o.RED;if(s===Bp)return o.RED_INTEGER;if(s===Zr)return o.RG;if(s===Fp)return o.RG_INTEGER;if(s===Hp)return o.RGBA_INTEGER;if(s===_u||s===vu||s===xu||s===Su)if(d===Yt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===_u)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Su)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===_u)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Su)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===tp||s===np||s===ip)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===ep)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===np)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ip)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ap||s===rp||s===sp||s===op||s===lp||s===Mu||s===cp)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===ap||s===rp)return d===Yt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===sp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===op)return f.COMPRESSED_R11_EAC;if(s===lp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Mu)return f.COMPRESSED_RG11_EAC;if(s===cp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===up||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===up)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_p)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mp)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ep)return d===Yt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bp||s===Tp||s===Ap)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===bp)return d===Yt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ap)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rp||s===Cp||s===Eu||s===wp)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Rp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Cp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_l?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const $3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
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

}`;class t2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Fx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Hi({vertexShader:$3,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new gr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n2 extends Qr{constructor(t,i){super();const s=this;let c=null,f=1,d=null,h="local-floor",g=1,p=null,x=null,_=null,v=null,E=null,C=null;const U=typeof XRWebGLBinding<"u",y=new t2,S={},I=i.getContextAttributes();let Y=null,w=null;const L=[],D=[],P=new Ft;let b=null,N=null;const H=new bi;H.viewport=new cn;const V=new bi;V.viewport=new cn;const $=[H,V],ne=new c1;let K=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=L[j];return de===void 0&&(de=new yh,L[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=L[j];return de===void 0&&(de=new yh,L[j]=de),de.getGripSpace()},this.getHand=function(j){let de=L[j];return de===void 0&&(de=new yh,L[j]=de),de.getHandSpace()};function X(j){const de=D.indexOf(j.inputSource);if(de===-1)return;const be=L[de];be!==void 0&&(be.update(j.inputSource,j.frame,p||d),be.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){c.removeEventListener("select",X),c.removeEventListener("selectstart",X),c.removeEventListener("selectend",X),c.removeEventListener("squeeze",X),c.removeEventListener("squeezestart",X),c.removeEventListener("squeezeend",X),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",ue);for(let j=0;j<L.length;j++){const de=D[j];de!==null&&(D[j]=null,L[j].disconnect(de))}K=null,ee=null,y.reset();for(const j in S)delete S[j];if(t.setRenderTarget(Y),E=null,v=null,_=null,c=null,w=null,Ae.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),N!==null){const j=N.camera;j.fov=N.fov,j.zoom=N.zoom,j.updateProjectionMatrix(),N=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){f=j,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(c,i)),_},this.getFrame=function(){return C},this.getSession=function(){return c},this.setSession=async function(j){if(c=j,c!==null){if(Y=t.getRenderTarget(),c.addEventListener("select",X),c.addEventListener("selectstart",X),c.addEventListener("selectend",X),c.addEventListener("squeeze",X),c.addEventListener("squeezestart",X),c.addEventListener("squeezeend",X),c.addEventListener("end",q),c.addEventListener("inputsourceschange",ue),I.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ce=null,ve=null;I.depth&&(ve=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=I.stencil?qr:La,Ce=I.stencil?_l:la);const we={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:f};_=this.getBinding(),v=_.createProjectionLayer(we),c.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),w=new Bi(v.textureWidth,v.textureHeight,{format:zi,type:Ti,depthTexture:new xl(v.textureWidth,v.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(c,i,be),c.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new Bi(E.framebufferWidth,E.framebufferHeight,{format:zi,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await c.requestReferenceSpace(h),Ae.setContext(c),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ue(j){for(let de=0;de<j.removed.length;de++){const be=j.removed[de],Ce=D.indexOf(be);Ce>=0&&(D[Ce]=null,L[Ce].disconnect(be))}for(let de=0;de<j.added.length;de++){const be=j.added[de];let Ce=D.indexOf(be);if(Ce===-1){for(let we=0;we<L.length;we++)if(we>=D.length){D.push(be),Ce=we;break}else if(D[we]===null){D[we]=be,Ce=we;break}if(Ce===-1)break}const ve=L[Ce];ve&&ve.connect(be)}}const le=new pe,ce=new pe;function xe(j,de,be){le.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(be.matrixWorld);const Ce=le.distanceTo(ce),ve=de.projectionMatrix.elements,we=be.projectionMatrix.elements,Vt=ve[14]/(ve[10]-1),pt=ve[14]/(ve[10]+1),_t=(ve[9]+1)/ve[5],yt=(ve[9]-1)/ve[5],tt=(ve[8]-1)/ve[0],it=(we[8]+1)/we[0],kt=Vt*tt,fn=Vt*it,Ot=Ce/(-tt+it),en=Ot*-tt;if(de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(en),j.translateZ(Ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ve[10]===-1)j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const W=Vt+Ot,nn=pt+Ot,Lt=kt-en,O=fn+(Ce-en),M=_t*pt/nn*W,te=yt*pt/nn*W;j.projectionMatrix.makePerspective(Lt,O,M,te,W,nn),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Xe(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(c===null)return;let de=j.near,be=j.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(be=y.depthFar)),ne.near=V.near=H.near=de,ne.far=V.far=H.far=be,(K!==ne.near||ee!==ne.far)&&(c.updateRenderState({depthNear:ne.near,depthFar:ne.far}),K=ne.near,ee=ne.far),ne.layers.mask=j.layers.mask|6,H.layers.mask=ne.layers.mask&-5,V.layers.mask=ne.layers.mask&-3;const Ce=j.parent,ve=ne.cameras;Xe(ne,Ce);for(let we=0;we<ve.length;we++)Xe(ve[we],Ce);ve.length===2?xe(ne,H,V):ne.projectionMatrix.copy(H.projectionMatrix),N===null&&j.isPerspectiveCamera&&(N={camera:j,fov:j.fov,zoom:j.zoom}),Ve(j,ne,Ce)};function Ve(j,de,be){be===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Np*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(v===null&&E===null))return g},this.setFoveation=function(j){g=j,v!==null&&(v.fixedFoveation=j),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(j){return S[j]};let B=null;function me(j,de){if(x=de.getViewerPose(p||d),C=de,x!==null){const be=x.views;E!==null&&(t.setRenderTargetFramebuffer(w,E.framebuffer),t.setRenderTarget(w));let Ce=!1;be.length!==ne.cameras.length&&(ne.cameras.length=0,Ce=!0);for(let pt=0;pt<be.length;pt++){const _t=be[pt];let yt=null;if(E!==null)yt=E.getViewport(_t);else{const it=_.getViewSubImage(v,_t);yt=it.viewport,pt===0&&(t.setRenderTargetTextures(w,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(w))}let tt=$[pt];tt===void 0&&(tt=new bi,tt.layers.enable(pt),tt.viewport=new cn,$[pt]=tt),tt.matrix.fromArray(_t.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(_t.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(ne.matrix.copy(tt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ce===!0&&ne.cameras.push(tt)}const ve=c.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const pt=_.getDepthInformation(be[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,c.renderState)}if(ve&&ve.includes("camera-access")&&U){t.state.unbindTexture(),_=s.getBinding();for(let pt=0;pt<be.length;pt++){const _t=be[pt].camera;if(_t){let yt=S[_t];yt||(yt=new Fx,S[_t]=yt);const tt=_.getCameraImage(_t);yt.sourceTexture=tt}}}}for(let be=0;be<L.length;be++){const Ce=D[be],ve=L[be];Ce!==null&&ve!==void 0&&ve.update(Ce,de,p||d)}B&&B(j,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),C=null}const Ae=new kx;Ae.setAnimationLoop(me),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}const i2=new _n,Kx=new ft;Kx.set(-1,0,0,0,1,0,0,0,1);function a2(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Hx(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function c(y,S,I,Y,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(y,S):S.isMeshLambertMaterial?(f(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(y,S),_(y,S)):S.isMeshPhongMaterial?(f(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(y,S),v(y,S),S.isMeshPhysicalMaterial&&E(y,S,w)):S.isMeshMatcapMaterial?(f(y,S),C(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),U(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?g(y,S,I,Y):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const I=t.get(S),Y=I.envMap,w=I.envMapRotation;Y&&(y.envMap.value=Y,y.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(w)).transpose(),Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Kx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function g(y,S,I,Y){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*I,y.scale.value=Y*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,I){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,S){S.matcap&&(y.matcap.value=S.matcap)}function U(y,S){const I=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function r2(o,t,i,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(w,L){const D=L.program;s.uniformBlockBinding(w,D)}function p(w,L){let D=c[w.id];D===void 0&&(y(w),D=x(w),c[w.id]=D,w.addEventListener("dispose",I));const P=L.program;s.updateUBOMapping(w,P);const b=t.render.frame;f[w.id]!==b&&(v(w),f[w.id]=b)}function x(w){const L=_();w.__bindingPointIndex=L;const D=o.createBuffer(),P=w.__size,b=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function _(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const L=c[w.id],D=w.uniforms,P=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let b=0,N=D.length;b<N;b++){const H=D[b];if(Array.isArray(H))for(let V=0,$=H.length;V<$;V++)E(H[V],b,V,P);else E(H,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(w,L,D,P){if(U(w,L,D,P)===!0){const b=w.__offset,N=w.value;if(Array.isArray(N)){let H=0;for(let V=0;V<N.length;V++){const $=N[V],ne=S($);C($,w.__data,H),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else C(N,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,w.__data)}}function C(w,L,D){typeof w=="number"||typeof w=="boolean"?L[0]=w:w.isMatrix3?(L[0]=w.elements[0],L[1]=w.elements[1],L[2]=w.elements[2],L[3]=0,L[4]=w.elements[3],L[5]=w.elements[4],L[6]=w.elements[5],L[7]=0,L[8]=w.elements[6],L[9]=w.elements[7],L[10]=w.elements[8],L[11]=0):ArrayBuffer.isView(w)?L.set(new w.constructor(w.buffer,w.byteOffset,L.length)):w.toArray(L,D)}function U(w,L,D,P){const b=w.value,N=L+"_"+D;if(P[N]===void 0)return typeof b=="number"||typeof b=="boolean"?P[N]=b:ArrayBuffer.isView(b)?P[N]=b.slice():P[N]=b.clone(),!0;{const H=P[N];if(typeof b=="number"||typeof b=="boolean"){if(H!==b)return P[N]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(H.equals(b)===!1)return H.copy(b),!0}}return!1}function y(w){const L=w.uniforms;let D=0;const P=16;for(let N=0,H=L.length;N<H;N++){const V=Array.isArray(L[N])?L[N]:[L[N]];for(let $=0,ne=V.length;$<ne;$++){const K=V[$],ee=Array.isArray(K.value)?K.value:[K.value];for(let X=0,q=ee.length;X<q;X++){const ue=ee[X],le=S(ue),ce=D%P,xe=ce%le.boundary,Xe=ce+xe;D+=xe,Xe!==0&&P-Xe<le.storage&&(D+=P-Xe),K.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=le.storage}}}const b=D%P;return b>0&&(D+=P-b),w.__size=D,w.__cache={},this}function S(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):st("WebGLRenderer: Unsupported uniform value type.",w),L}function I(w){const L=w.target;L.removeEventListener("dispose",I);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(c[L.id]),delete c[L.id],delete f[L.id]}function Y(){for(const w in c)o.deleteBuffer(c[w]);d=[],c={},f={}}return{bind:g,update:p,dispose:Y}}const s2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function o2(){return na===null&&(na=new jE(s2,16,16,Zr,ca),na.name="DFG_LUT",na.minFilter=In,na.magFilter=In,na.wrapS=Ii,na.wrapT=Ii,na.generateMipmaps=!1,na.needsUpdate=!0),na}class l2{constructor(t={}){const{canvas:i=ME(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:E=Ti}=t;this.isWebGLRenderer=!0;let C;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=s.getContextAttributes().alpha}else C=d;const U=E,y=new Set([Hp,Fp,Bp]),S=new Set([Ti,la,gl,_l,Ip,zp]),I=new Uint32Array(4),Y=new Int32Array(4),w=new pe;let L=null,D=null;const P=[],b=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let V=!1,$=null,ne=null,K=null,ee=null;this._outputColorSpace=Ei;let X=0,q=0,ue=null,le=-1,ce=null;const xe=new cn,Xe=new cn;let Ve=null;const B=new Bt(0);let me=0,Ae=i.width,j=i.height,de=1,be=null,Ce=null;const ve=new cn(0,0,Ae,j),we=new cn(0,0,Ae,j);let Vt=!1;const pt=new zx;let _t=!1,yt=!1;const tt=new _n,it=new pe,kt=new cn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function en(){return ue===null?de:1}let W=s;function nn(A,F){return i.getContext(A,F)}let Lt,O,M,te,oe,ge,Re,Ue,_e,Ee,De,$e,ze,Ie,We,nt,lt,k,Ne,Me,Le,ke,Te;try{const A={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Op}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",ct,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),W===null){const F="webgl2";if(W=nn(F,A),W===null)throw nn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(A){throw i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ct,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),Pt("WebGLRenderer: "+A.message),A}function Je(){Lt=new oA(W),Lt.init(),Le=new J3(W,Lt),O=new QT(W,Lt,t,Le),M=new K3(W,Lt),O.reversedDepthBuffer&&v&&M.buffers.depth.setReversed(!0),ne=W.createFramebuffer(),K=W.createFramebuffer(),ee=W.createFramebuffer(),te=new uA(W),oe=new I3,ge=new Q3(W,Lt,M,oe,O,Le,te),Re=new sA(H),Ue=new d1(W),ke=new ZT(W,Ue),_e=new lA(W,Ue,te,ke),Ee=new dA(W,_e,Ue,ke,te),k=new fA(W,O,ge),We=new JT(oe),De=new P3(H,Re,Lt,O,ke,We),$e=new a2(H,oe),ze=new B3,Ie=new X3(Lt),lt=new jT(H,Re,M,Ee,C,g),nt=new Z3(H,Ee,O),Te=new r2(W,te,O,M),Ne=new KT(W,Lt,te),Me=new cA(W,Lt,te),te.programs=De.programs,H.capabilities=O,H.extensions=Lt,H.properties=oe,H.renderLists=ze,H.shadowMap=nt,H.state=M,H.info=te}U!==Ti&&(N=new pA(U,i.width,i.height,h,c,f));const Ge=new n2(H,W);this.xr=Ge,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(Ae,j,!1))},this.getSize=function(A){return A.set(Ae,j)},this.setSize=function(A,F,he=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=A,j=F,i.width=Math.floor(A*de),i.height=Math.floor(F*de),he===!0&&(i.style.width=A+"px",i.style.height=F+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Ae*de,j*de).floor()},this.setDrawingBufferSize=function(A,F,he){Ae=A,j=F,de=he,i.width=Math.floor(A*he),i.height=Math.floor(F*he),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(U===Ti){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(xe)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,F,he,ae){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,F,he,ae),M.viewport(xe.copy(ve).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,F,he,ae){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,F,he,ae),M.scissor(Xe.copy(we).multiplyScalar(de).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(A){M.setScissorTest(Vt=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Ce=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,he=!0){let ae=0;if(A){let re=!1;if(ue!==null){const Be=ue.texture.format;re=y.has(Be)}if(re){const Be=ue.texture.type,qe=S.has(Be),Oe=lt.getClearColor(),Ze=lt.getClearAlpha(),Ke=Oe.r,rt=Oe.g,ut=Oe.b;qe?(I[0]=Ke,I[1]=rt,I[2]=ut,I[3]=Ze,W.clearBufferuiv(W.COLOR,0,I)):(Y[0]=Ke,Y[1]=rt,Y[2]=ut,Y[3]=Ze,W.clearBufferiv(W.COLOR,0,Y))}else ae|=W.COLOR_BUFFER_BIT}F&&(ae|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ct,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),lt.dispose(),ze.dispose(),Ie.dispose(),oe.dispose(),Re.dispose(),Ee.dispose(),ke.dispose(),Te.dispose(),De.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",vr),Ge.removeEventListener("sessionend",Ia),Gi.stop()};function Ct(A){A.preventDefault(),_v("WebGLRenderer: Context Lost."),V=!0}function ct(){_v("WebGLRenderer: Context Restored."),V=!1;const A=te.autoReset,F=nt.enabled,he=nt.autoUpdate,ae=nt.needsUpdate,re=nt.type;Je(),te.autoReset=A,nt.enabled=F,nt.autoUpdate=he,nt.needsUpdate=ae,nt.type=re}function Qn(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fi(A){const F=A.target;F.removeEventListener("dispose",fi),Uu(F)}function Uu(A){Jr(A),oe.remove(A)}function Jr(A){const F=oe.get(A).programs;F!==void 0&&(F.forEach(function(he){De.releaseProgram(he)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,he,ae,re,Be){F===null&&(F=fn);const qe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=ho(A,F,he,ae,re);M.setMaterial(ae,qe);let Ze=he.index,Ke=1;if(ae.wireframe===!0){if(Ze=_e.getWireframeAttribute(he),Ze===void 0)return;Ke=2}const rt=he.drawRange,ut=he.attributes.position;let Ye=rt.start*Ke,Mt=(rt.start+rt.count)*Ke;Be!==null&&(Ye=Math.max(Ye,Be.start*Ke),Mt=Math.min(Mt,(Be.start+Be.count)*Ke)),Ze!==null?(Ye=Math.max(Ye,0),Mt=Math.min(Mt,Ze.count)):ut!=null&&(Ye=Math.max(Ye,0),Mt=Math.min(Mt,ut.count));const vt=Mt-Ye;if(vt<0||vt===1/0)return;ke.setup(re,ae,Oe,he,Ze);let jt,Ht=Ne;if(Ze!==null&&(jt=Ue.get(Ze),Ht=Me,Ht.setIndex(jt)),re.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*en()),Ht.setMode(W.LINES)):Ht.setMode(W.TRIANGLES);else if(re.isLine){let vn=ae.linewidth;vn===void 0&&(vn=1),M.setLineWidth(vn*en()),re.isLineSegments?Ht.setMode(W.LINES):re.isLineLoop?Ht.setMode(W.LINE_LOOP):Ht.setMode(W.LINE_STRIP)}else re.isPoints?Ht.setMode(W.POINTS):re.isSprite&&Ht.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const vn=re._multiDrawStarts,Fe=re._multiDrawCounts,rn=re._multiDrawCount,wt=Ze?Ue.get(Ze).bytesPerElement:1,Bn=oe.get(ae).currentProgram.getUniforms();for(let Jn=0;Jn<rn;Jn++)Bn.setValue(W,"_gl_DrawID",Jn),Ht.render(vn[Jn]/wt,Fe[Jn])}else if(re.isInstancedMesh)Ht.renderInstances(Ye,vt,re.count);else if(he.isInstancedBufferGeometry){const vn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Fe=Math.min(he.instanceCount,vn);Ht.renderInstances(Ye,vt,Fe)}else Ht.render(Ye,vt)};function _r(A,F,he,ae){$!==null&&A.isNodeMaterial&&$.setObject(ae,A),_t===!0&&We.setState(A,he,!1),A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,xr(A,F,ae),A.side=Yr,A.needsUpdate=!0,xr(A,F,ae),A.side=aa):xr(A,F,ae)}this.compile=function(A,F,he=null){he===null&&(he=A),$!==null&&$.renderStart(A,F,he),D=Ie.get(he),D.init(F),b.push(D),he.traverseVisible(function(re){re.isLight&&re.layers.test(F.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),A!==he&&A.traverseVisible(function(re){re.isLight&&re.layers.test(F.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),D.setupLights(),$!==null&&$.updateLights(D.state.lightsArray),yt=this.localClippingEnabled,_t=We.init(this.clippingPlanes,yt),_t===!0&&We.setGlobalState(this.clippingPlanes,F),$!==null&&nt.render(D.state.shadowsArray,he,F);const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Be=re.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){const Oe=Be[qe];_r(Oe,he,F,re),ae.add(Oe)}else _r(Be,he,F,re),ae.add(Be)}),D=b.pop(),$!==null&&$.renderEnd(),ae},this.compileAsync=function(A,F,he=null){const ae=this.compile(A,F,he);return new Promise(re=>{function Be(){if(ae.forEach(function(qe){const Ze=oe.get(qe).currentProgram;(Ze===void 0||Ze.isReady())&&ae.delete(qe)}),ae.size===0){re(A);return}setTimeout(Be,10)}Lt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Pa=null;function ua(A){Pa&&Pa(A)}function vr(){Gi.stop()}function Ia(){Gi.start()}const Gi=new kx;Gi.setAnimationLoop(ua),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(A){Pa=A,Ge.setAnimationLoop(A),A===null?Gi.stop():Gi.start()},Ge.addEventListener("sessionstart",vr),Ge.addEventListener("sessionend",Ia),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;$!==null&&$.renderStart(A,F);const he=Ge.enabled===!0&&Ge.isPresenting===!0,ae=N!==null&&(ue===null||he)&&N.begin(H,ue);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(F),F=Ge.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,F,ue),D=Ie.get(A,b.length),D.init(F),D.state.textureUnits=ge.getTextureUnits(),b.push(D),tt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pt.setFromProjectionMatrix(tt,sa,F.reversedDepth),yt=this.localClippingEnabled,_t=We.init(this.clippingPlanes,yt),L=ze.get(A,P.length),L.init(),P.push(L),Ge.enabled===!0&&Ge.isPresenting===!0){const qe=H.xr.getDepthSensingMesh();qe!==null&&oo(qe,F,-1/0,H.sortObjects)}oo(A,F,0,H.sortObjects),L.finish(),$!==null&&$.updateLights(D.state.lightsArray),H.sortObjects===!0&&L.sort(be,Ce),Ot=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Ot&&lt.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&We.beginShadows();const re=D.state.shadowsArray;if(nt.render(re,A,F),_t===!0&&We.endShadows(),(ae&&N.hasRenderPass())===!1){const qe=L.opaque,Oe=L.transmissive;if(D.setupLights(),F.isArrayCamera){const Ze=F.cameras;if(Oe.length>0)for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ut=Ze[Ke];$r(qe,Oe,A,ut)}Ot&&lt.render(A);for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ut=Ze[Ke];lo(L,A,ut,ut.viewport)}}else Oe.length>0&&$r(qe,Oe,A,F),Ot&&lt.render(A),lo(L,A,F)}ue!==null&&q===0&&(ge.updateMultisampleRenderTarget(ue),ge.updateRenderTargetMipmap(ue)),ae&&N.end(H),A.isScene===!0&&A.onAfterRender(H,A,F),ke.resetDefaultState(),le=-1,ce=null,b.pop(),b.length>0?(D=b[b.length-1],ge.setTextureUnits(D.state.textureUnits),_t===!0&&We.setGlobalState(H.clippingPlanes,D.state.camera)):D=null,P.pop(),P.length>0?L=P[P.length-1]:L=null,$!==null&&$.renderEnd()};function oo(A,F,he,ae){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)he=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(pt)){ae&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(tt);const qe=Ee.update(A),Oe=A.material;Oe.visible&&L.push(A,qe,Oe,he,kt.z,null,F)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(pt))){const qe=Ee.update(A),Oe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),kt.copy(qe.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(tt)),Array.isArray(Oe)){const Ze=qe.groups;for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ut=Ze[Ke],Ye=Oe[ut.materialIndex];Ye&&Ye.visible&&L.push(A,qe,Ye,he,kt.z,ut,F)}}else Oe.visible&&L.push(A,qe,Oe,he,kt.z,null,F)}}const Be=A.children;for(let qe=0,Oe=Be.length;qe<Oe;qe++)oo(Be[qe],F,he,ae)}function lo(A,F,he,ae){const{opaque:re,transmissive:Be,transparent:qe}=A;D.setupLightsView(he),_t===!0&&We.setGlobalState(H.clippingPlanes,he),ae&&M.viewport(xe.copy(ae)),re.length>0&&Vi(re,F,he),Be.length>0&&Vi(Be,F,he),qe.length>0&&Vi(qe,F,he),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function $r(A,F,he,ae){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ae.id]===void 0){const Ye=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ae.id]=new Bi(1,1,{generateMipmaps:!0,type:Ye?ca:Ti,minFilter:Wr,samples:Math.max(4,O.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Be=D.state.transmissionRenderTarget[ae.id],qe=ae.viewport||xe;Be.setSize(qe.z*H.transmissionResolutionScale,qe.w*H.transmissionResolutionScale);const Oe=H.getRenderTarget(),Ze=H.getActiveCubeFace(),Ke=H.getActiveMipmapLevel();H.setRenderTarget(Be),H.getClearColor(B),me=H.getClearAlpha(),me<1&&H.setClearColor(16777215,.5),H.clear(),Ot&&lt.render(he);const rt=H.toneMapping;H.toneMapping=oa;const ut=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),D.setupLightsView(ae),_t===!0&&We.setGlobalState(H.clippingPlanes,ae),Vi(A,he,ae),ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Mt=0,vt=F.length;Mt<vt;Mt++){const jt=F[Mt],{object:Ht,geometry:vn,material:Fe,group:rn}=jt;if(Fe.side===aa&&Ht.layers.test(ae.layers)){const wt=Fe.side;Fe.side=Kn,Fe.needsUpdate=!0,bl(Ht,he,ae,vn,Fe,rn),Fe.side=wt,Fe.needsUpdate=!0,Ye=!0}}Ye===!0&&(ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be))}H.setRenderTarget(Oe,Ze,Ke),H.setClearColor(B,me),ut!==void 0&&(ae.viewport=ut),H.toneMapping=rt}function Vi(A,F,he){const ae=F.isScene===!0?F.overrideMaterial:null;for(let re=0,Be=A.length;re<Be;re++){const qe=A[re],{object:Oe,geometry:Ze,group:Ke}=qe;let rt=qe.material;rt.allowOverride===!0&&ae!==null&&(rt=ae),Oe.layers.test(he.layers)&&bl(Oe,F,he,Ze,rt,Ke)}}function bl(A,F,he,ae,re,Be){$!==null&&re.isNodeMaterial&&$.setObject(A,re),A.onBeforeRender(H,F,he,ae,re,Be),A.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(H,F,he,ae,A,Be),re.transparent===!0&&re.side===aa&&re.forceSinglePass===!1?(re.side=Kn,re.needsUpdate=!0,H.renderBufferDirect(he,F,ae,re,A,Be),re.side=Yr,re.needsUpdate=!0,H.renderBufferDirect(he,F,ae,re,A,Be),re.side=aa):H.renderBufferDirect(he,F,ae,re,A,Be),A.onAfterRender(H,F,he,ae,re,Be)}function xr(A,F,he){F.isScene!==!0&&(F=fn);const ae=oe.get(A),re=D.state.lights,Be=D.state.shadowsArray,qe=re.state.version,Oe=De.getParameters(A,re.state,Be,F,he,D.state.lightProbeGridArray),Ze=De.getProgramCacheKey(Oe);let Ke=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,ae.fog=F.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Re.get(A.envMap||ae.environment,rt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",fi),Ke=new Map,ae.programs=Ke);let ut=Ke.get(Ze);if(ut!==void 0){if(ae.currentProgram===ut&&ae.lightsStateVersion===qe)return uo(A,Oe),ut}else Oe.uniforms=De.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,he,Oe),A.onBeforeCompile(Oe,H),ut=De.acquireProgram(Oe,Ze),Ke.set(Ze,ut),ae.uniforms=Oe.uniforms;const Ye=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=We.uniform),uo(A,Oe),ae.needsLights=Al(A),ae.lightsStateVersion=qe,ae.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.sunLights.value=re.state.sun,Ye.sunLightShadows.value=re.state.sunShadow,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.sunShadowMatrix.value=re.state.sunShadowMatrix,Ye.sunShadowCascade.value=re.state.sunShadowCascade,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=D.state.lightProbeGridArray.length>0,ae.currentProgram=ut,ae.uniformsList=null,ut}function co(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=yu.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function uo(A,F){const he=oe.get(A);he.outputColorSpace=F.outputColorSpace,he.batching=F.batching,he.batchingColor=F.batchingColor,he.instancing=F.instancing,he.instancingColor=F.instancingColor,he.instancingMorph=F.instancingMorph,he.skinning=F.skinning,he.morphTargets=F.morphTargets,he.morphNormals=F.morphNormals,he.morphColors=F.morphColors,he.morphTargetsCount=F.morphTargetsCount,he.numClippingPlanes=F.numClippingPlanes,he.numIntersection=F.numClipIntersection,he.vertexAlphas=F.vertexAlphas,he.vertexTangents=F.vertexTangents,he.toneMapping=F.toneMapping}function fo(A,F){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(F.matrixWorld);for(let he=0,ae=A.length;he<ae;he++){const re=A[he];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function ho(A,F,he,ae,re){F.isScene!==!0&&(F=fn),ge.resetTextureUnits();const Be=F.fog,qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?F.environment:null,Oe=ue===null?H.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Nt.workingColorSpace,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ke=Re.get(ae.envMap||qe,Ze),rt=ae.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ut=!!he.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!he.morphAttributes.position,Mt=!!he.morphAttributes.normal,vt=!!he.morphAttributes.color;let jt=oa;ae.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(jt=H.toneMapping);const Ht=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,vn=Ht!==void 0?Ht.length:0,Fe=oe.get(ae),rn=D.state.lights;if(_t===!0&&(yt===!0||A!==ce)){const Tt=A===ce&&ae.id===le;We.setState(ae,A,Tt)}let wt=!1;ae.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rn.state.version||Fe.outputColorSpace!==Oe||re.isBatchedMesh&&Fe.batching===!1||!re.isBatchedMesh&&Fe.batching===!0||re.isBatchedMesh&&Fe.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Fe.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Fe.instancing===!1||!re.isInstancedMesh&&Fe.instancing===!0||re.isSkinnedMesh&&Fe.skinning===!1||!re.isSkinnedMesh&&Fe.skinning===!0||re.isInstancedMesh&&Fe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Fe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Fe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Fe.instancingMorph===!1&&re.morphTexture!==null||Fe.envMap!==Ke||ae.fog===!0&&Fe.fog!==Be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==We.numPlanes||Fe.numIntersection!==We.numIntersection)||Fe.vertexAlphas!==rt||Fe.vertexTangents!==ut||Fe.morphTargets!==Ye||Fe.morphNormals!==Mt||Fe.morphColors!==vt||Fe.toneMapping!==jt||Fe.morphTargetsCount!==vn||!!Fe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Fe.__version=ae.version);let Bn=Fe.currentProgram;wt===!0&&(Bn=xr(ae,F,re),$&&ae.isNodeMaterial&&$.onUpdateProgram(ae,Bn,Fe));let Jn=!1,ki=!1,xt=!1;const It=Bn.getUniforms(),Qt=Fe.uniforms;if(M.useProgram(Bn.program)&&(Jn=!0,ki=!0,xt=!0),ae.id!==le&&(le=ae.id,ki=!0),Fe.needsLights){const Tt=fo(D.state.lightProbeGridArray,re);Fe.lightProbeGrid!==Tt&&(Fe.lightProbeGrid=Tt,ki=!0)}if(Jn||ce!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(W,"projectionMatrix",A.projectionMatrix),It.setValue(W,"viewMatrix",A.matrixWorldInverse);const sn=It.map.cameraPosition;sn!==void 0&&sn.setValue(W,it.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&It.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,ki=!0,xt=!0)}if(Fe.needsLights&&(rn.state.sunShadowMap.length>0&&It.setValue(W,"sunShadowMap",rn.state.sunShadowMap,ge),rn.state.directionalShadowMap.length>0&&It.setValue(W,"directionalShadowMap",rn.state.directionalShadowMap,ge),rn.state.spotShadowMap.length>0&&It.setValue(W,"spotShadowMap",rn.state.spotShadowMap,ge),rn.state.pointShadowMap.length>0&&It.setValue(W,"pointShadowMap",rn.state.pointShadowMap,ge)),re.isSkinnedMesh){It.setOptional(W,re,"bindMatrix"),It.setOptional(W,re,"bindMatrixInverse");const Tt=re.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),It.setValue(W,"boneTexture",Tt.boneTexture,ge))}re.isBatchedMesh&&(It.setOptional(W,re,"batchingTexture"),It.setValue(W,"batchingTexture",re._matricesTexture,ge),It.setOptional(W,re,"batchingIdTexture"),It.setValue(W,"batchingIdTexture",re._indirectTexture,ge),It.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&It.setValue(W,"batchingColorTexture",re._colorsTexture,ge));const $n=he.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&k.update(re,he,Bn),(ki||Fe.receiveShadow!==re.receiveShadow)&&(Fe.receiveShadow=re.receiveShadow,It.setValue(W,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&F.environment!==null&&(Qt.envMapIntensity.value=F.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=o2()),ki){if(It.setValue(W,"toneMappingExposure",H.toneMappingExposure),Fe.needsLights&&Tl(Qt,xt),Be&&ae.fog===!0&&$e.refreshFogUniforms(Qt,Be),$e.refreshMaterialUniforms(Qt,ae,de,j,D.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.lightProbeGrid){const Tt=Fe.lightProbeGrid;Qt.probesSH.value=Tt.texture,Qt.probesMin.value.copy(Tt.boundingBox.min),Qt.probesMax.value.copy(Tt.boundingBox.max),Qt.probesResolution.value.copy(Tt.resolution)}yu.upload(W,co(Fe),Qt,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(yu.upload(W,co(Fe),Qt,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(W,"center",re.center),It.setValue(W,"modelViewMatrix",re.modelViewMatrix),It.setValue(W,"normalMatrix",re.normalMatrix),It.setValue(W,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const Tt=ae.uniformsGroups;for(let sn=0,fa=Tt.length;sn<fa;sn++){const Rl=Tt[sn];Te.update(Rl,Bn),Te.bind(Rl,Bn)}}return Bn}function Tl(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Al(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(A,F,he){const ae=oe.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=F,oe.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:he,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const he=oe.get(A);he.__webglFramebuffer=F,he.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,he=0){ue=A,X=F,q=he;let ae=null,re=!1,Be=!1;if(A){const Oe=oe.get(A);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,Oe.__webglFramebuffer),xe.copy(A.viewport),Xe.copy(A.scissor),Ve=A.scissorTest,M.viewport(xe),M.scissor(Xe),M.setScissorTest(Ve),le=-1;return}else if(Oe.__webglFramebuffer===void 0)ge.setupRenderTarget(A);else if(Oe.__hasExternalTextures)ge.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Oe.__boundDepthTexture!==rt){if(rt!==null&&oe.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Be=!0);const Ke=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[F])?ae=Ke[F][he]:ae=Ke[F],re=!0):A.samples>0&&ge.useMultisampledRTT(A)===!1?ae=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?ae=Ke[he]:ae=Ke,xe.copy(A.viewport),Xe.copy(A.scissor),Ve=A.scissorTest}else xe.copy(ve).multiplyScalar(de).floor(),Xe.copy(we).multiplyScalar(de).floor(),Ve=Vt;if(he!==0&&(ae=ne),M.bindFramebuffer(W.FRAMEBUFFER,ae)&&M.drawBuffers(A,ae),M.viewport(xe),M.scissor(Xe),M.setScissorTest(Ve),re){const Oe=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+F,Oe.__webglTexture,he)}else if(Be){const Oe=F;for(let Ze=0;Ze<A.textures.length;Ze++){const Ke=oe.get(A.textures[Ze]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ze,Ke.__webglTexture,he,Oe)}}else if(A!==null&&he!==0){const Oe=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Oe.__webglTexture,he)}le=-1};function di(A){const F=oe.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=O.textureFormatReadable(A.format),F.__typeReadable=O.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,he,ae,re,Be,qe,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze){M.bindFramebuffer(W.FRAMEBUFFER,Ze);try{const Ke=A.textures[Oe],rt=Ke.format,ut=Ke.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Oe);const Ye=di(Ke);if(Ye.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-ae&&he>=0&&he<=A.height-re&&W.readPixels(F,he,ae,re,Le.convert(rt),Le.convert(ut),Be)}finally{const Ke=ue!==null?oe.get(ue).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,F,he,ae,re,Be,qe,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze)if(F>=0&&F<=A.width-ae&&he>=0&&he<=A.height-re){M.bindFramebuffer(W.FRAMEBUFFER,Ze);const Ke=A.textures[Oe],rt=Ke.format,ut=Ke.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Oe);const Ye=di(Ke);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.bufferData(W.PIXEL_PACK_BUFFER,Be.byteLength,W.STREAM_READ),W.readPixels(F,he,ae,re,Le.convert(rt),Le.convert(ut),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const vt=ue!==null?oe.get(ue).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,vt);const jt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await EE(W,jt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Be),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Mt),W.deleteSync(jt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,he=0){const ae=Math.pow(2,-he),re=Math.floor(A.image.width*ae),Be=Math.floor(A.image.height*ae),qe=F!==null?F.x:0,Oe=F!==null?F.y:0;ge.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,he,0,0,qe,Oe,re,Be),M.unbindTexture()},this.copyTextureToTexture=function(A,F,he=null,ae=null,re=0,Be=0){let qe,Oe,Ze,Ke,rt,ut,Ye,Mt,vt;const jt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(he!==null)qe=he.max.x-he.min.x,Oe=he.max.y-he.min.y,Ze=he.isBox3?he.max.z-he.min.z:1,Ke=he.min.x,rt=he.min.y,ut=he.isBox3?he.min.z:0;else{const Qt=Math.pow(2,-re);qe=Math.floor(jt.width*Qt),Oe=Math.floor(jt.height*Qt),A.isDataArrayTexture?Ze=jt.depth:A.isData3DTexture?Ze=Math.floor(jt.depth*Qt):Ze=1,Ke=0,rt=0,ut=0}ae!==null?(Ye=ae.x,Mt=ae.y,vt=ae.z):(Ye=0,Mt=0,vt=0);const Ht=Le.convert(F.format),vn=Le.convert(F.type);let Fe;F.isData3DTexture?(ge.setTexture3D(F,0),Fe=W.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ge.setTexture2DArray(F,0),Fe=W.TEXTURE_2D_ARRAY):(ge.setTexture2D(F,0),Fe=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,F.unpackAlignment);const rn=M.getParameter(W.UNPACK_ROW_LENGTH),wt=M.getParameter(W.UNPACK_IMAGE_HEIGHT),Bn=M.getParameter(W.UNPACK_SKIP_PIXELS),Jn=M.getParameter(W.UNPACK_SKIP_ROWS),ki=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,jt.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,jt.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,Ke),M.pixelStorei(W.UNPACK_SKIP_ROWS,rt),M.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);const xt=A.isDataArrayTexture||A.isData3DTexture,It=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const Qt=oe.get(A),$n=oe.get(F),Tt=oe.get(Qt.__renderTarget),sn=oe.get($n.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,Tt.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let fa=0;fa<Ze;fa++)xt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,re,ut+fa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,Be,vt+fa)),W.blitFramebuffer(Ke,rt,qe,Oe,Ye,Mt,qe,Oe,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||oe.has(A)){const Qt=oe.get(A),$n=oe.get(F);M.bindFramebuffer(W.READ_FRAMEBUFFER,K),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,ee);for(let Tt=0;Tt<Ze;Tt++)xt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qt.__webglTexture,re,ut+Tt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qt.__webglTexture,re),It?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$n.__webglTexture,Be,vt+Tt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,$n.__webglTexture,Be),re!==0?W.blitFramebuffer(Ke,rt,qe,Oe,Ye,Mt,qe,Oe,W.COLOR_BUFFER_BIT,W.NEAREST):It?W.copyTexSubImage3D(Fe,Be,Ye,Mt,vt+Tt,Ke,rt,qe,Oe):W.copyTexSubImage2D(Fe,Be,Ye,Mt,Ke,rt,qe,Oe);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Fe,Be,Ye,Mt,vt,qe,Oe,Ze,Ht,vn,jt.data):F.isCompressedArrayTexture?W.compressedTexSubImage3D(Fe,Be,Ye,Mt,vt,qe,Oe,Ze,Ht,jt.data):W.texSubImage3D(Fe,Be,Ye,Mt,vt,qe,Oe,Ze,Ht,vn,jt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Be,Ye,Mt,qe,Oe,Ht,vn,jt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Be,Ye,Mt,jt.width,jt.height,Ht,jt.data):W.texSubImage2D(W.TEXTURE_2D,Be,Ye,Mt,qe,Oe,Ht,vn,jt);M.pixelStorei(W.UNPACK_ROW_LENGTH,rn),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,wt),M.pixelStorei(W.UNPACK_SKIP_PIXELS,Bn),M.pixelStorei(W.UNPACK_SKIP_ROWS,Jn),M.pixelStorei(W.UNPACK_SKIP_IMAGES,ki),Be===0&&F.generateMipmaps&&W.generateMipmap(Fe),M.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&ge.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ge.setTextureCube(A,0):A.isData3DTexture?ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ge.setTexture2DArray(A,0):ge.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){X=0,q=0,ue=null,M.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}const c2=`
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
`,u2=`
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
`;function f2(){const o=gt.useRef(null);return gt.useEffect(()=>{const t=o.current;if(!t)return;let i,s,c,f,d=[],h,g,p,x;try{i=new l2({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),s=new FE,c=new bi(48,window.innerWidth/window.innerHeight,.1,1e3),c.position.set(0,15,35),c.lookAt(0,5,-50);const w=new o1,L=w.load("/brand/gpc/clouds/cloud-bank-a.png"),D=w.load("/brand/gpc/clouds/cloud-bank-b.png"),P=w.load("/brand/gpc/flight/mountain-ground-cutout.png");L.wrapS=L.wrapT=Ii,D.wrapS=D.wrapT=Ii;const b={uTint:{value:new Bt("#faf5ee")},uOpacity:{value:.95},uDotStrength:{value:.75},uDotSize:{value:5.5},uTime:{value:0},uGroundY:{value:-120},uGroundFade:{value:45}},N=ce=>new Hi({vertexShader:c2,fragmentShader:u2,uniforms:{...b,uTexture:{value:ce}},transparent:!0,depthWrite:!1,side:aa});h=N(L),g=N(D),[{x:-35,y:18,z:-25,scale:65,mat:h,speed:.008},{x:38,y:14,z:-35,scale:75,mat:g,speed:-.006},{x:-10,y:22,z:-55,scale:85,mat:h,speed:.005},{x:45,y:6,z:-70,scale:95,mat:g,speed:-.007},{x:-40,y:-5,z:-40,scale:70,mat:g,speed:.009},{x:25,y:-12,z:-50,scale:80,mat:h,speed:-.005},{x:-30,y:-22,z:-65,scale:90,mat:h,speed:.006},{x:35,y:-30,z:-60,scale:85,mat:g,speed:-.008},{x:-20,y:-45,z:-45,scale:80,mat:g,speed:.007},{x:30,y:-55,z:-55,scale:90,mat:h,speed:-.006},{x:-35,y:-68,z:-70,scale:95,mat:h,speed:.005},{x:20,y:-80,z:-65,scale:85,mat:g,speed:-.008}].forEach(ce=>{const xe=new gr(ce.scale,ce.scale*.55),Xe=xe.attributes.position.count,Ve=new Float32Array(Xe*3),B=new Float32Array(Xe),me=Math.random(),Ae=Math.random(),j=Math.random(),de=Math.random()>.4?1:0;for(let Ce=0;Ce<Xe;Ce++)Ve[Ce*3]=me,Ve[Ce*3+1]=Ae,Ve[Ce*3+2]=j,B[Ce]=de;xe.setAttribute("aVariation",new Fi(Ve,3)),xe.setAttribute("aTreatment",new Fi(B,1));const be=new ci(xe,ce.mat);be.position.set(ce.x,ce.y,ce.z),s.add(be),d.push({mesh:be,baseX:ce.x,speed:ce.speed,minX:-80,maxX:80})});const V=new gr(160,70),$=new pl({map:P,transparent:!0,opacity:.75,depthWrite:!1}),ne=new ci(V,$);ne.position.set(0,-115,-60),s.add(ne);const K=w.load("/brand/gpc/airliner-gpc-color-block.png"),ee=w.load("/brand/gpc/flight/jet-stream-magnific.png"),X=new gr(24,9.6),q=new pl({map:K,transparent:!0,opacity:.95,depthWrite:!1});p=new ci(X,q),p.position.set(-8,19,-20),p.rotation.z=.02,s.add(p);const ue=new gr(42,8.5),le=new pl({map:ee,transparent:!0,opacity:.75,depthWrite:!1});x=new ci(ue,le),x.scale.x=-1,x.position.set(-34,18.2,-21),x.rotation.z=.02,s.add(x)}catch(w){console.error("WebGL flight canvas init failed:",w);return}let _=15,v=35;const E=()=>{const w=window.scrollY,L=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),D=Math.min(Math.max(w/L,0),1);_=15-D*120,v=35-D*25};window.addEventListener("scroll",E,{passive:!0}),E();let C=0,U=0;const y=w=>{C=(w.clientX/window.innerWidth-.5)*5,U=(w.clientY/window.innerHeight-.5)*2.5};window.addEventListener("mousemove",y,{passive:!0});const S=()=>{!i||!c||(c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",S);let I=new u1;const Y=()=>{f=requestAnimationFrame(Y);const w=I.getDelta(),L=I.getElapsedTime();h&&(h.uniforms.uTime.value=L),g&&(g.uniforms.uTime.value=L),c.position.x+=(C-c.position.x)*.05,c.position.y+=(_-U-c.position.y)*.08,c.position.z+=(v-c.position.z)*.08,c.lookAt(C*.3,c.position.y-10,-50),d.forEach(D=>{D.mesh.position.x+=D.speed*(w*60),D.mesh.position.x>D.maxX&&(D.mesh.position.x=D.minX),D.mesh.position.x<D.minX&&(D.mesh.position.x=D.maxX)}),p&&x&&(p.position.x+=.012*(w*60),x.position.x=p.position.x-26,p.position.x>80&&(p.position.x=-80,x.position.x=-106)),i.render(s,c)};return Y(),()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",E),window.removeEventListener("resize",S),window.removeEventListener("mousemove",y),i&&i.dispose()}},[]),T.jsxs("div",{className:"canvas-container","aria-hidden":"true",children:[T.jsx("div",{className:"flight-canvas flight-canvas--background"}),T.jsx("canvas",{ref:o,className:"flight-canvas flight-canvas--webgl"}),T.jsx("div",{className:"flight-canvas-halftone"}),T.jsx("div",{className:"flight-canvas-vignette"})]})}function d2(){const[o,t]=gt.useState(3e4),[i,s]=gt.useState("30,000 FT"),[c,f]=gt.useState(4.2),[d,h]=gt.useState(100);gt.useEffect(()=>{const p=[];window.scrollY>10?s(null):[[300,"29,800 FT"],[600,"30,250 FT"],[900,"29,950 FT"],[1200,null]].forEach(([E,C])=>{p.push(window.setTimeout(()=>{window.scrollY<=10&&s(C)},E))});const _=()=>{const v=window.scrollY,E=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),C=Math.min(Math.max(v/E,0),1),U=Math.round(3e4*(1-C));t(U);const y=(4.2-C*1.35).toFixed(2);f(y),h(Math.round((1-C)*100)),document.documentElement.style.setProperty("--altitude-remaining",(U/3e4).toFixed(4))};return window.addEventListener("scroll",_,{passive:!0}),_(),()=>{p.forEach(v=>clearTimeout(v)),window.removeEventListener("scroll",_)}},[]);const g=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return T.jsxs("aside",{className:"altitude-hud","aria-label":"Current story elevation & cell telemetry",children:[T.jsx("div",{className:"altitude-hud__track","aria-hidden":"true",children:T.jsx("span",{})}),T.jsxs("div",{className:"altitude-hud__readout",children:[T.jsx("span",{className:"altitude-hud__label",children:"Altitude"}),T.jsx("output",{className:"altitude-hud__value",children:i??`${g.format(o)} FT`}),T.jsxs("div",{className:"altitude-hud__battery-gauge",children:[T.jsxs("span",{children:["⚡ ",c,"V"]}),T.jsx("span",{children:"·"}),T.jsxs("span",{children:[d,"% SoC"]})]})]})]})}const sx=["var(--color-red)","var(--color-orange)","var(--color-purple)","var(--color-yellow)"];function h2(){const[o,t]=gt.useState(0),i=gt.useCallback(()=>{t(s=>(s+1)%sx.length)},[]);return T.jsx("header",{className:"masthead",id:"top",children:T.jsxs("div",{className:"masthead__frame",children:[T.jsxs("div",{className:"masthead__nav",children:[T.jsxs("a",{className:"masthead__brand",href:"#top","aria-label":"Battery Cell 4.0 home",onPointerEnter:i,onFocus:i,style:{"--brand-mark-hue":sx[o]},children:[T.jsx("svg",{viewBox:"0 0 357 197",role:"img","aria-label":"IBC 4.0 Brand Mark",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{d:"M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z",fill:"currentColor"})}),T.jsx("span",{className:"masthead__brand-tag",children:"CELL 4.0 / INDIA HACKATHON 2026"})]}),T.jsxs("nav",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[[{label:"Themes",href:"#themes"},{label:"Architecture",href:"#architecture"},{label:"Dates",href:"#timeline"},{label:"Prizes",href:"#fees"},{label:"FAQ",href:"#faq"}].map(s=>T.jsx("a",{href:s.href,className:"masthead__nav-link",children:s.label},s.label)),T.jsxs("a",{href:"#register",className:"masthead__action-btn",children:[T.jsx("span",{className:"cut-button__box"}),T.jsx("span",{children:"Register EOI"})]})]})]}),T.jsxs("div",{className:"masthead__content",children:[T.jsxs("div",{className:"masthead__badge-row",children:[T.jsx("span",{className:"masthead__badge masthead__badge--live",children:"EOI Floated (Live Now)"}),T.jsx("span",{className:"masthead__badge",children:"National Security Domain"}),T.jsx("span",{className:"masthead__badge",children:"Up to ₹2,00,000 Cash Prizes"}),T.jsx("span",{className:"masthead__badge",children:"Lab Incubation"})]}),T.jsxs("h1",{className:"masthead__title-semantic",children:[T.jsx("span",{children:"Intelligent"}),T.jsx("span",{children:"Battery Cell 4.0"}),T.jsx("em",{children:"Hackathon 2026"})]}),T.jsx("p",{className:"masthead__dek",children:"Bringing together India's sharpest students, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology using Artificial Intelligence."})]}),T.jsx("div",{className:"masthead__footer",children:T.jsxs("p",{className:"masthead__meta",children:[T.jsx("span",{children:"Registration Opens: 09 Oct 2026"}),T.jsx("span",{"aria-hidden":"true",children:"·"}),T.jsx("span",{children:"Deadline: 30 Oct 2026"}),T.jsx("span",{"aria-hidden":"true",children:"·"}),T.jsx("span",{children:"Grand Finale: 01 Dec 2026"})]})}),T.jsx("p",{className:"scroll-cue","aria-hidden":"true",children:T.jsx("span",{className:"scroll-cue__word",children:"Scroll".split("").map((s,c)=>T.jsx("span",{className:"scroll-cue__letter",style:{"--i":c},children:T.jsx("span",{className:"scroll-cue__glyph",children:s})},c))})})]})})}function kh({text:o="",as:t="p",className:i="",highlightWord:s=""}){const c=gt.useRef(null),f=gt.useMemo(()=>o.trim().split(/\s+/),[o]);return gt.useEffect(()=>{const d=c.current;if(!d)return;const h=Array.from(d.querySelectorAll(".scroll-reveal-word"));if(!h.length)return;let g=[],p=null;const x=()=>{const C=window.scrollY,U=h.map(I=>I.getBoundingClientRect().top+C);let y=NaN,S=0;g=h.map((I,Y)=>{const w=U[Y];return Number.isNaN(y)||Math.abs(w-y)>3?(S=0,y=w):S+=1,{element:I,documentTop:w,wordInLine:S,lastProgress:-1}}),_()},_=()=>{const C=window.innerHeight,U=window.scrollY;g.forEach(y=>{const S=y.documentTop-U,I=.98*C-4*y.wordInLine,Y=.72*C-y.wordInLine,w=Math.min(Math.max((I-S)/Math.max(I-Y,1),0),1);Math.abs(w-y.lastProgress)>=.002&&(y.lastProgress=w,y.element.style.opacity=w.toFixed(4),y.element.style.filter=w>.99?"none":`blur(${((1-w)*6).toFixed(2)}px)`)})},v=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(_)},E=()=>{cancelAnimationFrame(p),p=requestAnimationFrame(x)};return x(),window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",E),()=>{cancelAnimationFrame(p),window.removeEventListener("scroll",v),window.removeEventListener("resize",E)}},[f]),T.jsx(t,{ref:c,className:i,children:f.map((d,h)=>{const g=s&&d.toLowerCase().includes(s.toLowerCase());return T.jsxs(dx.Fragment,{children:[T.jsx("span",{className:"scroll-reveal-word",style:{display:"inline-block",marginRight:h<f.length-1?"0.28em":void 0,opacity:.15,filter:"blur(4px)",color:g?"var(--color-red)":void 0,fontWeight:g?500:void 0},children:d}),h<f.length-1?" ":""]},`${d}-${h}`)})})}function p2(){return T.jsx("section",{className:"statement","aria-label":"The bottleneck of modern battery development",children:T.jsx("div",{className:"statement__sticky",children:T.jsxs("div",{className:"statement__inner",style:{textAlign:"center"},children:[T.jsx("h2",{className:"statement__heading",children:"Most battery innovations never survive past academic journals."}),T.jsx("h2",{className:"statement__heading",style:{color:"var(--color-red)",marginTop:"0.4em"},children:"They stall in prototype cells before reaching gigawatt scale."}),T.jsxs("div",{className:"statement__tags-row",children:[T.jsx("p",{className:"statement__tag statement__tag--cost",children:"Thermal Runaway Risk"}),T.jsx("p",{className:"statement__tag statement__tag--effort",children:"Black-Box Cell Degradation"}),T.jsx("p",{className:"statement__tag statement__tag--tech",children:"Foreign Chemistry Dependency"})]})]})})})}function m2(){const[o,t]=gt.useState(!1);return gt.useEffect(()=>{const i=()=>{const s=document.getElementById("battery-chart");if(!s)return;s.getBoundingClientRect().top<window.innerHeight*.75&&t(!0)};return window.addEventListener("scroll",i,{passive:!0}),i(),()=>window.removeEventListener("scroll",i)},[]),T.jsxs("figure",{className:"imagination-chart",id:"battery-chart",children:[T.jsxs("div",{className:"imagination-chart__header",children:[T.jsx("h3",{className:"imagination-chart__title",children:"Battery Cycle Life vs. AI Optimization Fidelity"}),T.jsx("p",{className:"imagination-chart__subtitle",children:"Comparing unmonitored degradation, rule-based BMS, and AI-driven Digital Twin 4.0 retention."})]}),T.jsxs("div",{className:"imagination-chart__plot",children:[T.jsx("div",{className:"halftone-overlay","aria-hidden":"true"}),T.jsxs("svg",{className:"imagination-chart__svg",viewBox:"0 0 1000 520","aria-hidden":"true",children:[T.jsxs("g",{className:"imagination-chart__grid",children:[[450,360,270,180,90].map(i=>T.jsx("line",{x1:"80",x2:"960",y1:i,y2:i},i)),[180,320,460,600,740,880].map(i=>T.jsx("line",{x1:i,x2:i,y1:"50",y2:"450"},i))]}),T.jsxs("g",{className:"imagination-chart__axis",children:[T.jsx("line",{x1:"80",x2:"960",y1:"450",y2:"450"}),T.jsx("line",{x1:"80",x2:"80",y1:"50",y2:"450"})]}),T.jsxs("g",{className:"imagination-chart__ticks",children:[T.jsx("text",{x:"65",y:"450",textAnchor:"end",dominantBaseline:"middle",children:"0%"}),T.jsx("text",{x:"65",y:"360",textAnchor:"end",dominantBaseline:"middle",children:"25%"}),T.jsx("text",{x:"65",y:"270",textAnchor:"end",dominantBaseline:"middle",children:"50%"}),T.jsx("text",{x:"65",y:"180",textAnchor:"end",dominantBaseline:"middle",children:"75%"}),T.jsx("text",{x:"65",y:"90",textAnchor:"end",dominantBaseline:"middle",children:"100%"}),T.jsx("text",{x:"80",y:"488",textAnchor:"middle",children:"0"}),T.jsx("text",{x:"240",y:"488",textAnchor:"middle",children:"400"}),T.jsx("text",{x:"440",y:"488",textAnchor:"middle",children:"800"}),T.jsx("text",{x:"640",y:"488",textAnchor:"middle",children:"1,200"}),T.jsx("text",{x:"840",y:"488",textAnchor:"middle",children:"1,600"}),T.jsx("text",{x:"960",y:"488",textAnchor:"middle",children:"2,000"})]}),T.jsxs("g",{className:"imagination-chart__axis-title",children:[T.jsx("text",{x:"520",y:"510",textAnchor:"middle",children:"Charge Cycles"}),T.jsx("text",{x:"30",y:"270",textAnchor:"middle",transform:"rotate(-90, 30, 270)",children:"Capacity Retention"})]}),T.jsxs("g",{children:[T.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 110 L 360 160 L 500 280 L 640 400 L 780 440 L 960 450",pathLength:"1",style:{"--line-accent":"var(--color-red)","--line-draw":o?"1":"0"}}),T.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 105 L 360 140 L 500 185 L 640 240 L 780 310 L 960 380",pathLength:"1",style:{"--line-accent":"var(--color-yellow)","--line-draw":o?"1":"0",transitionDelay:"0.3s"}}),T.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 92 L 360 95 L 500 102 L 640 112 L 780 120 L 960 130",pathLength:"1",style:{"--line-accent":"var(--color-purple)","--line-draw":o?"1":"0",transitionDelay:"0.6s"}})]})]})]}),T.jsx("ul",{className:"imagination-chart__legend",children:[{color:"var(--color-purple)",label:"Cell 4.0 (AI Digital Twin)",offset:"0s"},{color:"var(--color-yellow)",label:"Rule-based Standard BMS",offset:"0.16s"},{color:"var(--color-red)",label:"Unmonitored Li-Ion Pack",offset:"0.33s"}].map(i=>T.jsxs("li",{className:"imagination-chart__legend-item",style:{"--line-accent":i.color,"--legend-offset":i.offset},children:[T.jsx("span",{className:"imagination-chart__legend-box","aria-hidden":"true"}),T.jsx("span",{className:"imagination-chart__legend-label",children:i.label})]},i.label))}),T.jsx("figcaption",{className:"imagination-chart__caption",children:"Figure 1.0 — Predictive digital twins prevent micro-dendrite formation, preserving state-of-health up to 3× longer than traditional cut-off thresholds."})]})}const Xh=[{word:"Thermal Safety",prob:45,color:"var(--color-red)",desc:"Mitigating micro-dendrite thermal runaway before catastrophic failure."},{word:"Digital Twins",prob:31,color:"var(--color-orange)",desc:"Real-time electrochemical physics simulation running on IoT edge nodes."},{word:"Second-Life Reuse",prob:17,color:"var(--color-purple)",desc:"Cascading EV battery packs into grid-scale renewable energy storage."},{word:"Indigenous Tech",prob:7,color:"var(--color-yellow)",desc:"Sovereign sodium-ion and national security storage independent of global supply."}];function g2(){const[o,t]=gt.useState(0);return T.jsx("section",{className:"probability","aria-labelledby":"prob-heading",children:T.jsx("div",{className:"probability__sticky",children:T.jsxs("div",{className:"probability__inner",children:[T.jsx("p",{className:"probability__eyebrow",children:"Electrochemical Paradigm Shift"}),T.jsxs("h2",{id:"prob-heading",className:"probability__heading",children:["The future of battery technology is"," ",T.jsxs("em",{style:{color:Xh[o].color,fontStyle:"italic"},children:[Xh[o].word,"."]})]}),T.jsx("ol",{className:"probability__candidates",children:Xh.map((i,s)=>T.jsxs("li",{className:`probability__candidate ${o===s?"is-active":""}`,style:{"--cand-color":i.color,"--cand-fill":o===s?"1":`${i.prob/100}`},onPointerEnter:()=>t(s),onClick:()=>t(s),tabIndex:0,role:"button",children:[T.jsx("div",{className:"probability__candidate-bar"}),T.jsxs("div",{children:[T.jsx("span",{className:"probability__candidate-word",children:i.word}),T.jsx("p",{className:"probability__candidate-desc",children:i.desc})]}),T.jsxs("span",{className:"probability__candidate-value",children:[i.prob,"%"]})]},i.word))}),T.jsx("p",{className:"probability__takeaway",children:'"The conventional engineering choice is rarely the breakthrough that reimagines an industry."'})]})})})}function _2(){const[o,t]=gt.useState(!1),[i,s]=gt.useState(!1);return T.jsx("section",{className:"prompt-split",id:"architecture","aria-label":"Two approaches to battery innovation",children:T.jsxs("div",{className:"prompt-split__grid",children:[T.jsxs("article",{className:"prompt-split__column",children:[T.jsxs("div",{children:[T.jsx("span",{className:"prompt-split__label prompt-split__label--one",children:"Group 1: Incremental Patch"}),T.jsx("h2",{className:"prompt-split__font-source",children:'"Add an external temperature thermistor to an unmonitored lithium pack."'}),T.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The legacy way: relying on surface-level sensors that detect heat only after catastrophic internal chemical breakdown has already started."})]}),T.jsxs("div",{className:"prompt-split__paper-stage",children:[T.jsx("img",{src:"/brand/gpc/props/conventional-battery-schematic.svg",alt:"Conventional battery schematic with blind thermal core",className:`prompt-split__sketch-img ${o?"is-crumpled":""}`}),T.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>t(!o),children:[T.jsx("img",{src:"/brand/gpc/props/vintage-fountain-pen.png",alt:"",style:{width:"18px",height:"auto"}}),T.jsx("span",{children:o?"Inspect Normal View":"Highlight Thermal Hotspot"})]})]})]}),T.jsxs("article",{className:"prompt-split__column",children:[T.jsxs("div",{children:[T.jsx("span",{className:"prompt-split__label prompt-split__label--two",children:"Group 2: Intelligent Cell 4.0"}),T.jsx("h2",{className:"prompt-split__font-source",children:'"Embed in-situ optical sensors and edge neural physics directly inside the cell."'}),T.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The Hackathon 2026 challenge: predicting micro-dendrite nucleation, impedance shifts, and mechanical strain in real-time before temperature rises."})]}),T.jsxs("div",{className:"prompt-split__paper-stage",children:[T.jsx("img",{src:"/brand/gpc/props/intelligent-cell-schematic.svg",alt:"Intelligent Cell 4.0 schematic with optical fiber and edge BMS",className:`prompt-split__sketch-img ${i?"is-crumpled":""}`}),T.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>s(!i),children:[T.jsx("img",{src:"/brand/gpc/props/vintage-scissors.png",alt:"",style:{width:"18px",height:"auto"}}),T.jsx("span",{children:i?"Default Blueprint":"Activate AI Sensor Spine"})]})]})]})]})})}const mu=[{id:"01",code:"BMS-AI",title:"Intelligent Battery Management Systems (BMS)",subtitle:"Edge AI State Estimation & Embedded Microcontrollers",desc:"Next-generation algorithmic state estimation (SoC, SoH, SoP) with adaptive machine learning models on edge microcontrollers.",tag:"Core AI Track",badgeColor:"#f94e2a",metricLabel:"TARGET ACCURACY",metricVal:"> 98.8% SoC",schematicType:"bms"},{id:"02",code:"THM-RUN",title:"Battery Safety & Thermal Runaway Mitigation",subtitle:"Multi-Physics Early Warning & Gas Vent Detection",desc:"Multi-physics early-warning detection systems, vapor pressure venting triggers, and passive/active propagation barriers.",tag:"Safety Critical",badgeColor:"#f66f00",metricLabel:"VENT DETECTION",metricVal:"< 250ms",schematicType:"safety"},{id:"03",code:"CHG-CYC",title:"Smart Charging & Second-Life Cascading",subtitle:"Dynamic Pulse Protocols & Stationary Storage",desc:"Dynamic pulse charging protocols, health-conscious fast charging, and algorithmic sorting of retired EV modules for stationary storage.",tag:"Circular Economy",badgeColor:"#9b338f",metricLabel:"CYCLE LIFE GAIN",metricVal:"+35% Life",schematicType:"charging"},{id:"04",code:"GRD-STG",title:"Renewable Energy Grid Storage",subtitle:"High-Inertia Buffer Storage & Microgrid Integration",desc:"High-inertia buffer storage algorithms, microgrid coordination, and utility-scale integration with solar and wind variability.",tag:"Grid Infrastructure",badgeColor:"#ffc013",metricLabel:"FREQUENCY LOCK",metricVal:"50.00 Hz",schematicType:"grid"},{id:"05",code:"DIG-TWN",title:"Battery Diagnostics & Physics Digital Twins",subtitle:"Electrochemical PDE Coupling & Neural Surrogates",desc:"Coupling electrochemical partial differential equations with neural surrogate models for non-invasive degradation mapping.",tag:"Digital Twin",badgeColor:"#f94e2a",metricLabel:"SOLVER SPEEDUP",metricVal:"10,000x",schematicType:"twin"},{id:"06",code:"IOT-EIS",title:"IoT-Enabled Wireless Monitoring",subtitle:"Cell-Level EIS & Ultra-Low Power Sensor Mesh",desc:"Cell-level impedance spectroscopy, ultra-low power wireless sensor mesh networks, and cloud telemetry pipelines.",tag:"Hardware & IoT",badgeColor:"#f66f00",metricLabel:"MESH LATENCY",metricVal:"< 12ms",schematicType:"iot"},{id:"07",code:"NAT-MAT",title:"Indigenous Battery Chemistries",subtitle:"Domestic Sodium-Ion & Non-Critical Supply Chains",desc:"Sodium-ion, iron-redox, and zinc-air architectures built entirely using domestic, non-critical raw material supply chains.",tag:"Atmanirbhar R&D",badgeColor:"#9b338f",metricLabel:"DOMESTIC SOURCING",metricVal:"100% India",schematicType:"chem"},{id:"08",code:"DEF-EMP",title:"National Security & Defense Storage",subtitle:"Sub-Zero Combat Packs & Tactical EMP Shielding",desc:"Sub-zero military drone propulsion, resilient combat vehicle packs, and tactical EMP-hardened energy repositories.",tag:"Strategic Defense",badgeColor:"#f94e2a",metricLabel:"OPERATING RANGE",metricVal:"-40°C to +65°C",schematicType:"defense"}];function Sl(o,t,i){return Math.min(i,Math.max(t,o))}function v2(o,t,i,s){const c=Sl(o/t,0,1);return i+4*s*c*(1-c)}function x2(o,t,i,s,c=70){const f=2*Math.sqrt(c),d=t+(c*(i-o)-f*t)*s;return[o+d*s,d]}function S2(o,t,i,s,c=1){const f=t+(-38*o-4.2*t+i*.0034*c)*s;return[Sl(o+f*s,-.45,.45),f]}function ox(o,t,i){return Sl(Math.round(o/t),0,Math.max(0,i-1))}function lx(o){return o<10?"0"+o:String(o)}function y2({type:o,active:t}){const i=t?"#232424":"#6b7280",s=t?"#f94e2a":"#9ca3af",c=t?"rgba(35,36,36,0.08)":"rgba(35,36,36,0.04)";return T.jsx("div",{className:"plc-shot",children:T.jsxs("svg",{viewBox:"0 0 280 200",className:"plc-shot__svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[T.jsx("defs",{children:T.jsx("pattern",{id:`tech-grid-${o}`,width:"20",height:"20",patternUnits:"userSpaceOnUse",children:T.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:c,strokeWidth:"0.8"})})}),T.jsx("rect",{width:"280",height:"200",fill:"#f4efe6"}),T.jsx("rect",{width:"280",height:"200",fill:`url(#tech-grid-${o})`}),T.jsx("path",{d:"M 12 24 V 12 H 24 M 268 24 V 12 H 256 M 12 176 V 188 H 24 M 268 176 V 188 H 256",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),o==="bms"&&T.jsxs("g",{transform:"translate(40, 30)",children:[T.jsx("rect",{x:"20",y:"20",width:"160",height:"100",rx:"3",stroke:i,strokeWidth:"1.5",fill:"#faf7f2"}),T.jsx("rect",{x:"55",y:"45",width:"90",height:"50",rx:"2",stroke:s,strokeWidth:"1.5",strokeDasharray:"3 2",fill:"rgba(249,78,42,0.05)"}),T.jsx("circle",{cx:"100",cy:"70",r:"14",stroke:s,strokeWidth:"2"}),T.jsx("path",{d:"M 94 70 L 98 74 L 108 64",stroke:s,strokeWidth:"2",strokeLinecap:"round"}),T.jsx("line",{x1:"0",y1:"50",x2:"20",y2:"50",stroke:i,strokeWidth:"1.5"}),T.jsx("line",{x1:"0",y1:"90",x2:"20",y2:"90",stroke:i,strokeWidth:"1.5"}),T.jsx("line",{x1:"180",y1:"50",x2:"200",y2:"50",stroke:i,strokeWidth:"1.5"}),T.jsx("line",{x1:"180",y1:"90",x2:"200",y2:"90",stroke:i,strokeWidth:"1.5"}),T.jsx("path",{d:"M 40 30 H 70 M 130 30 H 160",stroke:i,strokeWidth:"1",strokeDasharray:"2 2"}),T.jsx("text",{x:"100",y:"110",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"EDGE-AI SoC/SoH"})]}),o==="safety"&&T.jsxs("g",{transform:"translate(40, 25)",children:[T.jsx("circle",{cx:"100",cy:"75",r:"55",stroke:i,strokeWidth:"1.2",strokeDasharray:"4 3"}),T.jsx("circle",{cx:"100",cy:"75",r:"38",stroke:s,strokeWidth:"1.8",fill:"rgba(246,111,0,0.06)"}),T.jsx("circle",{cx:"100",cy:"75",r:"16",fill:s,opacity:"0.85"}),T.jsx("line",{x1:"100",y1:"10",x2:"100",y2:"30",stroke:s,strokeWidth:"2"}),T.jsx("line",{x1:"100",y1:"120",x2:"100",y2:"140",stroke:s,strokeWidth:"2"}),T.jsx("line",{x1:"35",y1:"75",x2:"55",y2:"75",stroke:s,strokeWidth:"2"}),T.jsx("line",{x1:"145",y1:"75",x2:"165",y2:"75",stroke:s,strokeWidth:"2"}),T.jsx("path",{d:"M 75 50 L 125 100 M 75 100 L 125 50",stroke:i,strokeWidth:"1",strokeDasharray:"2 2"}),T.jsx("text",{x:"100",y:"146",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"THERMAL VENT < 250ms"})]}),o==="charging"&&T.jsxs("g",{transform:"translate(40, 30)",children:[T.jsx("line",{x1:"10",y1:"110",x2:"190",y2:"110",stroke:i,strokeWidth:"1.2"}),T.jsx("line",{x1:"10",y1:"20",x2:"10",y2:"110",stroke:i,strokeWidth:"1.2"}),T.jsx("path",{d:"M 10 100 Q 40 20 75 60 T 140 40 T 190 25",stroke:s,strokeWidth:"2.5",fill:"none",strokeLinecap:"round"}),T.jsx("path",{d:"M 10 100 L 40 60 L 60 75 L 90 35 L 115 55 L 150 20 L 190 25",stroke:i,strokeWidth:"1",strokeDasharray:"3 2",fill:"none"}),T.jsx("path",{d:"M 98 62 L 106 50 L 102 62 L 112 62 L 96 82 L 100 68 Z",fill:s,stroke:i,strokeWidth:"0.8"}),T.jsx("text",{x:"100",y:"128",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"DYNAMIC PULSE +35%"})]}),o==="grid"&&T.jsxs("g",{transform:"translate(40, 25)",children:[T.jsx("path",{d:"M 45 125 L 80 30 L 115 125",stroke:i,strokeWidth:"1.8"}),T.jsx("path",{d:"M 95 125 L 130 30 L 165 125",stroke:i,strokeWidth:"1.8"}),T.jsx("line",{x1:"55",y1:"75",x2:"105",y2:"75",stroke:s,strokeWidth:"1.5"}),T.jsx("line",{x1:"105",y1:"75",x2:"155",y2:"75",stroke:s,strokeWidth:"1.5"}),T.jsx("line",{x1:"65",y1:"100",x2:"95",y2:"100",stroke:i,strokeWidth:"1.2"}),T.jsx("line",{x1:"115",y1:"100",x2:"145",y2:"100",stroke:i,strokeWidth:"1.2"}),T.jsx("circle",{cx:"80",cy:"30",r:"4.5",fill:s}),T.jsx("circle",{cx:"130",cy:"30",r:"4.5",fill:s}),T.jsx("path",{d:"M 20 135 Q 100 135 190 135",stroke:i,strokeWidth:"1"}),T.jsx("text",{x:"100",y:"146",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"GRID BUFFER 50.00Hz"})]}),o==="twin"&&T.jsxs("g",{transform:"translate(40, 30)",children:[T.jsx("rect",{x:"15",y:"25",width:"65",height:"70",rx:"2",stroke:i,strokeWidth:"1.5",fill:"#faf7f2"}),T.jsx("rect",{x:"120",y:"25",width:"65",height:"70",rx:"2",stroke:s,strokeWidth:"1.5",strokeDasharray:"3 2",fill:"rgba(249,78,42,0.04)"}),T.jsx("path",{d:"M 85 60 H 115",stroke:s,strokeWidth:"2"}),T.jsx("polygon",{points:"115,60 108,56 108,64",fill:s}),T.jsx("path",{d:"M 25 75 C 38 45 55 45 70 75",stroke:i,strokeWidth:"1.6",fill:"none"}),T.jsx("path",{d:"M 130 75 C 143 45 160 45 175 75",stroke:s,strokeWidth:"2",fill:"none"}),T.jsx("text",{x:"100",y:"118",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"PDE ⇄ NEURAL 10,000x"})]}),o==="iot"&&T.jsxs("g",{transform:"translate(40, 25)",children:[T.jsx("circle",{cx:"100",cy:"75",r:"14",fill:s}),T.jsx("path",{d:"M 100 48 A 27 27 0 0 1 127 75",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),T.jsx("path",{d:"M 73 75 A 27 27 0 0 1 100 48",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),T.jsx("path",{d:"M 100 30 A 45 45 0 0 1 145 75",stroke:i,strokeWidth:"1.8",strokeLinecap:"round",strokeDasharray:"4 3"}),T.jsx("path",{d:"M 55 75 A 45 45 0 0 1 100 30",stroke:i,strokeWidth:"1.8",strokeLinecap:"round",strokeDasharray:"4 3"}),T.jsx("circle",{cx:"45",cy:"115",r:"5",stroke:i,strokeWidth:"1.5",fill:"#faf7f2"}),T.jsx("circle",{cx:"155",cy:"115",r:"5",stroke:i,strokeWidth:"1.5",fill:"#faf7f2"}),T.jsx("line",{x1:"45",y1:"115",x2:"90",y2:"82",stroke:i,strokeWidth:"1",strokeDasharray:"2 2"}),T.jsx("line",{x1:"155",y1:"115",x2:"110",y2:"82",stroke:i,strokeWidth:"1",strokeDasharray:"2 2"}),T.jsx("text",{x:"100",y:"146",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"WIRELESS EIS < 12ms"})]}),o==="chem"&&T.jsxs("g",{transform:"translate(40, 25)",children:[T.jsx("polygon",{points:"100,25 145,50 145,100 100,125 55,100 55,50",stroke:i,strokeWidth:"1.8",fill:"#faf7f2"}),T.jsx("polygon",{points:"100,40 130,57 130,93 100,110 70,93 70,57",stroke:s,strokeWidth:"1.5",strokeDasharray:"3 2",fill:"rgba(155,51,143,0.06)"}),T.jsx("circle",{cx:"100",cy:"75",r:"18",fill:s}),T.jsx("text",{x:"100",y:"81",textAnchor:"middle",fill:"#fff",fontSize:"13",fontWeight:"bold",fontFamily:"sans-serif",children:"Na⁺"}),T.jsx("text",{x:"100",y:"146",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"SODIUM-ION 100% INDIA"})]}),o==="defense"&&T.jsxs("g",{transform:"translate(40, 25)",children:[T.jsx("path",{d:"M 100 25 L 150 45 V 85 C 150 112 100 130 100 130 C 100 130 50 112 50 85 V 45 Z",stroke:i,strokeWidth:"1.8",fill:"#faf7f2"}),T.jsx("path",{d:"M 100 38 L 135 52 V 80 C 135 100 100 114 100 114 C 100 114 65 100 65 80 V 52 Z",stroke:s,strokeWidth:"1.5",fill:"rgba(249,78,42,0.06)"}),T.jsx("path",{d:"M 90 75 L 97 82 L 112 65",stroke:s,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),T.jsx("text",{x:"100",y:"146",textAnchor:"middle",fill:i,fontSize:"8",fontFamily:"monospace",letterSpacing:"1",children:"EMP SHIELD · -40°C"})]}),T.jsxs("text",{x:"16",y:"24",fill:i,fontSize:"7",fontFamily:"monospace",opacity:"0.7",children:["FIG-",o.toUpperCase()]}),T.jsx("text",{x:"264",y:"24",textAnchor:"end",fill:s,fontSize:"7",fontFamily:"monospace",fontWeight:"bold",children:"REF.08"})]})})}function M2(){const o=mu.length,[t,i]=gt.useState(0),[s,c]=gt.useState(!1),[f,d]=gt.useState({w:1200,h:620,cw:290}),h=gt.useRef(null),g=gt.useRef(null),p=gt.useRef([]),x=gt.useRef({off:0,vel:0,target:0,a:[],w:[]}),_=gt.useRef(null),v=gt.useRef(0),E=gt.useRef(0),C=38,U=1,y=f.cw*1.12,S=gt.useCallback(b=>{x.current.target=Sl(b,0,o-1)*y},[o,y]);gt.useEffect(()=>{const b=h.current;if(!b)return;const N=new ResizeObserver(()=>{const H=b.getBoundingClientRect(),V=Math.round(Math.max(240,Math.min(310,H.width*.38,H.height*.48)));d({w:H.width,h:H.height,cw:V})});return N.observe(b),()=>N.disconnect()},[]),gt.useEffect(()=>{x.current.target=E.current*y,x.current.off=E.current*y},[y]),gt.useEffect(()=>{const b=h.current;if(!b)return;const N=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let H=!0,V=0,$=performance.now();const ne=x.current,K=X=>{if(V=0,!H)return;const q=Math.min(.033,(X-$)/1e3);$=X;const{w:ue,h:le,cw:ce}=f,xe=Math.max(45,le*.16),Xe=_.current;let Ve=0;if(Xe&&Xe.moved)Ve=Xe.v*1e3;else{const Ae=ne.off;[ne.off,ne.vel]=x2(ne.off,ne.vel,ne.target,q),Ve=-(ne.off-Ae)/Math.max(q,.001)}const B=N?0:U,me=ox(ne.off,y,o);for(let Ae=0;Ae<o;Ae++){const j=p.current[Ae];if(!j)continue;const de=ue/2+Ae*y-ne.off;if(de<-ce*1.5||de>ue+ce*1.5){j.style.visibility="hidden";continue}j.style.visibility="visible";let be=ne.a[Ae]||0,Ce=ne.w[Ae]||0;[be,Ce]=S2(be,Ce,Ve,q,B),B&&(be+=Math.sin(X/1300+Ae*1.7)*9e-4*B),ne.a[Ae]=be,ne.w[Ae]=Ce;const ve=v2(de,ue,xe,C)-6,we=Ae===me;j.style.transform=`translate(${(de-ce/2).toFixed(1)}px, ${ve.toFixed(1)}px) rotate(${be.toFixed(4)}rad)`,j.style.zIndex=String(we?o+2:o-Math.abs(Ae-me))}g.current&&g.current.setAttribute("d",`M 0 ${xe} Q ${ue/2} ${xe+2*C} ${ue} ${xe}`),me!==E.current&&(E.current=me,i(me)),V=requestAnimationFrame(K)},ee=new IntersectionObserver(([X])=>{H=X.isIntersecting,H&&!V&&($=performance.now(),V=requestAnimationFrame(K))});return ee.observe(b),V=requestAnimationFrame(K),()=>{cancelAnimationFrame(V),ee.disconnect()}},[f,y,o]),gt.useEffect(()=>{const b=setInterval(()=>{document.hidden||_.current||performance.now()-v.current<5e3||S(E.current>=o-1?0:E.current+1)},5500);return()=>clearInterval(b)},[o,S]);const I=b=>{b.target.closest(".plc-bar")||b.target.closest("button")||b.target.closest("a")||(v.current=performance.now(),_.current={x:b.clientX,off:x.current.off,lx:b.clientX,lt:b.timeStamp,v:0,moved:!1})},Y=b=>{var K;const N=_.current;if(!N)return;const H=b.clientX-N.x;if(!N.moved&&Math.abs(H)>4&&(N.moved=!0,c(!0),(K=h.current)==null||K.setPointerCapture(b.pointerId)),!N.moved)return;const V=Math.max(1,b.timeStamp-N.lt);N.v=.7*((b.clientX-N.lx)/V)+.3*N.v,N.lx=b.clientX,N.lt=b.timeStamp;const $=(o-1)*y;let ne=N.off-H;ne<0&&(ne*=.35),ne>$&&(ne=$+(ne-$)*.35),x.current.off=ne},w=b=>{const N=_.current;if(_.current=null,v.current=performance.now(),!N)return;if(N.moved){c(!1),x.current.vel=-N.v*1e3,S(ox(x.current.off-N.v*180,y,o));return}const H=b.target.closest("[data-i]");H&&S(Number(H.getAttribute("data-i")))},L=b=>{v.current=performance.now(),S(Sl(E.current+b,0,o-1))},D=b=>{if(b.key==="ArrowRight")L(1);else if(b.key==="ArrowLeft")L(-1);else return;b.preventDefault()},P=mu[t]||mu[0];return T.jsxs("section",{className:"themes-section",id:"themes",children:[T.jsxs("div",{className:"themes-section__intro",children:[T.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / Core Problem Statements"}),T.jsx("h2",{className:"article-block__heading",children:"Eight strategic domains shaping the next energy century."}),T.jsx("p",{className:"themes-section__subhead",children:"Drag the suspended dossier line or use navigation arrows to explore all 8 official hackathon challenges. All submissions are benchmarked against these engineering pillars."})]}),T.jsxs("div",{ref:h,className:"plc-root","data-drag":s?"1":"0",role:"region","aria-roledescription":"carousel","aria-label":"Hackathon Problem Statements Carousel",tabIndex:0,onKeyDown:D,onPointerDown:I,onPointerMove:Y,onPointerUp:w,onPointerCancel:w,style:{"--pl-cw":`${f.cw}px`},children:[T.jsx("svg",{className:"plc-string","aria-hidden":"true",children:T.jsx("path",{ref:g,fill:"none",stroke:"var(--color-ink, #232424)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.32"})}),mu.map((b,N)=>{const H=N===t;return T.jsxs("div",{className:"plc-card","data-i":N,"data-on":H?"1":"0",ref:V=>p.current[N]=V,"aria-hidden":H?void 0:!0,children:[T.jsx("div",{className:"plc-peg","aria-hidden":"true",children:T.jsx("div",{className:"plc-peg__groove"})}),T.jsxs("div",{className:"plc-print",children:[T.jsx(y2,{type:b.schematicType,active:H}),T.jsxs("div",{className:"plc-note",children:[T.jsx("span",{className:"plc-note__tag",style:{background:b.badgeColor},children:b.id}),T.jsx("span",{className:"plc-note__title",children:b.title})]})]})]},b.id)}),T.jsxs("div",{className:"plc-bar",children:[T.jsxs("div",{className:"plc-cap","aria-hidden":"true",children:[T.jsxs("div",{className:"plc-cap__meta",children:[T.jsxs("span",{className:"plc-cap__tag",style:{background:P.badgeColor},children:[P.id," / ",P.tag]}),T.jsxs("span",{className:"plc-cap__metric",children:["BENCHMARK: ",T.jsx("b",{children:P.metricVal})]})]}),T.jsx("span",{className:"plc-title",children:P.title}),T.jsx("span",{className:"plc-sub",children:P.desc})]},t),T.jsxs("div",{className:"plc-controls",children:[T.jsxs("span",{className:"plc-count","aria-hidden":"true",children:[T.jsx("b",{children:lx(t+1)})," / ",lx(o)]}),T.jsxs("div",{className:"plc-nav-btns",children:[T.jsx("button",{type:"button",className:"plc-btn","aria-label":"Previous Theme",onClick:()=>L(-1),children:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:T.jsx("path",{d:"M10 3 5 8l5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),T.jsx("button",{type:"button",className:"plc-btn","aria-label":"Next Theme",onClick:()=>L(1),children:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:T.jsx("path",{d:"m6 3 5 5-5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})}const cx=[{label:"18650 Legacy Li-ion Cell",note:"Commodity cell with high thermal hotspot risk"},{label:"Lead-Acid Heavy Block",note:"Low energy density, toxic electrolyte"},{label:"Rule-Based Relay BMS",note:"Rigid voltage thresholds, blind to impedance shifts"},{label:"Standard LiFePO4 Prism",note:"Safe but passive; no predictive digital twin"}],ux=[{label:"Intelligent Cell 4.0",note:"In-situ optical fiber sensor with edge AI BMS"},{label:"AI Neural Digital Twin",note:"Predicts micro-dendrites at atomic layer in real time"},{label:"Sovereign Sodium-Ion",note:"Indigenous non-lithium domestic supply chain"},{label:"Solid-State Ceramic",note:"High density but difficult to mass manufacture"}];function E2(){const[o,t]=gt.useState(50),[i,s]=gt.useState([{...cx[2],key:"init-1",isRadical:!1},{...ux[0],key:"init-2",isRadical:!0}]),c=gt.useRef(o),f=gt.useCallback(d=>{const h=Number(d.target.value);if(t(h),Math.abs(h-c.current)>=12){c.current=h;const g=h>50,p=g?ux:cx,x=p[Math.floor(Math.random()*p.length)];s(_=>[..._.slice(-4),{...x,key:`${Date.now()}-${Math.random()}`,isRadical:g}])}},[]);return T.jsx("section",{className:"loewy-maya",id:"spectrum",children:T.jsxs("div",{className:"loewy-maya__inner",children:[T.jsxs("div",{className:"loewy-maya__copy",children:[T.jsx("p",{className:"loewy-maya__label",children:"THE MAYA DESIGN PRINCIPLE IN ENERGY R&D"}),T.jsxs("h2",{className:"loewy-maya__heading",children:[T.jsx("span",{children:"Most advanced"}),T.jsxs("span",{children:[T.jsx("em",{children:"yet"})," acceptable."]})]}),T.jsx("p",{className:"loewy-maya__dek",children:"If your hackathon concept is too familiar, it creates no breakthrough. If it is too radical, it cannot be manufactured. Intelligent Battery Cell 4.0 lives precisely at the threshold of practical engineering and radical imagination."})]}),T.jsxs("section",{className:"maya-spectrum","aria-label":"Innovation spectrum slider",children:[T.jsxs("div",{className:"maya-spectrum__inner",children:[T.jsxs("div",{className:"maya-spectrum__labels",children:[T.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--familiar",children:"← Too Conventional"}),T.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--radical",children:"Too Radical →"})]}),T.jsxs("div",{className:"maya-spectrum__control",children:[T.jsx("div",{className:"maya-spectrum__track","aria-hidden":"true"}),T.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:f,className:"maya-spectrum__range","aria-label":"Spectrum from conventional to radical battery tech"})]}),T.jsx("p",{className:"maya-spectrum__drag-cue","aria-hidden":"true",children:"← Drag to explore →"})]}),T.jsx("div",{className:"maya-spectrum__stage",children:i.map(d=>T.jsxs("div",{className:`maya-spawn-card ${d.isRadical?"maya-spawn-card--radical":""}`,style:{"--spawn-rotation":`${(Math.random()-.5)*16}deg`,"--spawn-drift-x":`${(Math.random()-.5)*30}px`,"--spawn-lift-y":`${-8-Math.random()*12}px`,"--spawn-fall-y":`${20+Math.random()*15}px`},children:[T.jsx("div",{className:"maya-spawn-card__backdrop","aria-hidden":"true"}),T.jsxs("div",{className:"maya-spawn-card__image",children:[T.jsx("div",{style:{width:"100%",height:"90px",background:d.isRadical?"linear-gradient(135deg, #f94e2a22, #f66f0022)":"linear-gradient(135deg, #9b338f22, #8cb8d122)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"},"aria-hidden":"true",children:d.isRadical?"⚡":"🔋"}),T.jsx("div",{className:"maya-spawn-card__halftone","aria-hidden":"true"})]}),T.jsx("span",{children:d.label})]},d.key))})]})]})})}const b2=[{phase:"PHASE 01",date:"09 OCT 2026",status:"ACTIVE NOW",title:"Registration & EOI Opens",desc:"Expression of Interest (EOI) is officially floated across national universities, research labs, and startups. Portal open for team submissions."},{phase:"PHASE 02",date:"30 OCT 2026",status:"HARD DEADLINE",title:"Registration Deadline",desc:"Final cutoff for initial abstract proposals, team rosters, and theme domain selections. Screening of applications begins immediately."},{phase:"PHASE 03",date:"NOV 2026",status:"INCUBATION & DEV",title:"Mentoring & Rapid Prototyping",desc:"Shortlisted applicants receive technical mentoring from leading battery scientists, digital twin architects, and electrochemical patent holders."},{phase:"PHASE 04",date:"01 DEC 2026",status:"TENTATIVE ANNOUNCEMENT",title:"Grand Finale Showcase",desc:"Final live prototype evaluation, investor jury pitches, award of ₹2 Lakh prize money, and incubation partner onboarding."}];function T2(){return T.jsxs("section",{className:"timeline-section",id:"timeline",children:[T.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[T.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"02 / Important Milestones"}),T.jsx("h2",{className:"article-block__heading",children:"Critical Timeline & Roadmap"}),T.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Mark these mandatory deadlines to ensure your team qualifies for mentorship and finale consideration."})]}),T.jsx("div",{className:"timeline-grid",children:b2.map(o=>T.jsxs("div",{className:"timeline-card",children:[T.jsxs("span",{className:"timeline-card__phase",children:[o.phase," · ",o.status]}),T.jsx("h3",{className:"timeline-card__date",children:o.date}),T.jsx("h4",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:500,marginBottom:"0.6rem",color:"var(--color-neutral-500)"},children:o.title}),T.jsx("p",{className:"timeline-card__desc",children:o.desc})]},o.phase))})]})}const A2=[{icon:"🏆",title:"Up to ₹2,00,000 Cash Prizes",desc:"Direct grant-style cash prize pool distributed across top category winners, alongside official national certificates."},{icon:"🔬",title:"Pre-Finale Scientist Mentorship",desc:"Dedicated 1-on-1 weekly mentoring sessions with premier battery researchers, simulation engineers, and hardware builders."},{icon:"🚀",title:"Incubation & Lab Access Opportunities",desc:"Fast-track incubation support, venture funding introductions, and access to advanced battery cycler & testing infrastructure."}],R2=[{tier:"STUDENTS & SCHOLARS",fee:"₹500",desc:"Enrolled undergraduate, postgraduate, and PhD scholars from accredited academic institutions."},{tier:"STUDENT START-UPS",fee:"₹1,500",desc:"Early-stage venture teams founded and driven by currently enrolled university students.",highlight:!0},{tier:"MSMEs & REGISTERED ENTITIES",fee:"₹2,000",desc:"Registered micro, small, and medium enterprises, spin-offs, and commercial technology companies."}];function C2(){return T.jsxs("section",{className:"fees-section",id:"fees",children:[T.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[T.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"03 / Value & Investment"}),T.jsx("h2",{className:"article-block__heading",children:"Prizes, Incubation & Registration Tiers"}),T.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.05rem",lineHeight:1.5,fontFamily:"var(--font-body)"},children:"Transparent fee structure dedicated to fueling world-class jury evaluation, compute grants, and cash prize distribution."})]}),T.jsx("div",{className:"benefits-row",children:A2.map(o=>T.jsxs("div",{className:"benefit-card",children:[T.jsx("div",{className:"benefit-card__icon",children:o.icon}),T.jsx("h3",{className:"benefit-card__title",children:o.title}),T.jsx("p",{className:"benefit-card__desc",children:o.desc})]},o.title))}),T.jsx("div",{className:"fees-grid",children:R2.map(o=>T.jsxs("div",{className:`fee-card ${o.highlight?"fee-card--highlight":""}`,children:[T.jsxs("div",{children:[T.jsx("span",{className:"fee-card__tier",children:o.tier}),T.jsx("div",{className:"fee-card__amount",children:o.fee}),T.jsx("p",{className:"fee-card__desc",children:o.desc})]}),T.jsxs("a",{href:"#register",className:"cut-button",style:{textDecoration:"none",width:"auto",alignSelf:"flex-start"},children:[T.jsx("span",{className:"cut-button__box",style:{"--cut-fill":o.highlight?"var(--color-red)":"var(--color-yellow)"}}),T.jsx("span",{className:"cut-button__label",style:{color:o.highlight?"var(--color-neutral-100)":"var(--color-ink)"},children:"Select & Register"})]})]},o.tier))})]})}const w2=[{step:"ROUND 01",title:"Abstract & Feasibility Screening",dates:"Submission by 30 Oct 2026",weight:"30% Weightage",criteria:["Originality & depth of understanding of electrochemical bottlenecks","Clear choice and mapping to one of the 8 Hackathon themes","Realistic technical feasibility and domestic supply chain awareness","Competency and interdisciplinary balance of the applicant team"]},{step:"ROUND 02",title:"Pre-Finale Mentoring & Prototyping Sprint",dates:"Completed throughout November 2026",weight:"35% Weightage",criteria:["Active participation in weekly 1-on-1 scientist mentoring sessions","Implementation of AI/ML digital twin models or embedded BMS code","Progress on hardware simulation, battery cycler data, or physical cell assembly","Response to technical jury checkpoints and edge-case stress testing"]},{step:"ROUND 03",title:"Grand Finale & National Jury Pitch",dates:"Grand Finale on 01 Dec 2026",weight:"35% Weightage",criteria:["Live functional demonstration of the software, algorithm, or hardware prototype","Validation of safety enhancements (thermal mitigation, state estimation accuracy)","Potential for commercial incubation, patentability, and defense deployment","Jury defense on unit economics, manufacturing scalability, and second-life viability"]}];function N2(){return T.jsxs("section",{className:"article-block",id:"evaluation",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[T.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[T.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"04 / Rigorous Evaluation"}),T.jsx("h2",{className:"article-block__heading",children:"Evaluation Criteria & Hackathon Stages"}),T.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Every submission is evaluated against rigorous academic, industrial, and national security benchmarks by leading battery electrochemists."})]}),T.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem"},children:w2.map(o=>T.jsx("div",{className:"theme-card",style:{padding:"2.5rem"},children:T.jsxs("div",{children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[T.jsx("span",{className:"theme-card__idx",children:o.step}),T.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--color-red)"},children:o.weight})]}),T.jsx("h3",{className:"theme-card__title",style:{fontSize:"1.4rem"},children:o.title}),T.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"var(--color-orange)",marginBottom:"1.5rem"},children:o.dates}),T.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.75rem"},children:o.criteria.map((t,i)=>T.jsxs("li",{style:{display:"flex",gap:"0.5rem",fontSize:"0.9rem",color:"var(--color-ink-muted)",lineHeight:1.5},children:[T.jsx("span",{style:{color:"var(--color-red)",fontWeight:"bold"},children:"✓"}),T.jsx("span",{children:t})]},i))})]})},o.step))})]})}const D2=[{q:"Who is eligible to participate in this Hackathon?",a:"Participation is open across three categories: (1) Students & Research Scholars enrolled in undergraduate, postgraduate, or doctoral programs; (2) Student Start-ups led by enrolled students; and (3) Registered MSMEs and deeptech startups. Cross-institutional and multidisciplinary teams (chemists + computer scientists + electrical engineers) are strongly encouraged."},{q:"Is a physical cell hardware prototype strictly mandatory?",a:"No. Submissions can be purely software algorithms (e.g. edge AI BMS firmware, SoC/SoH neural networks), physics-based digital twins, CAD/simulation models, or physical hardware setups. Teams working on hardware will be provided guidance and lab testing protocols during the November mentoring phase."},{q:"What is the exact registration fee structure?",a:"Registration fees are tiered to ensure equitable access: Students & Research Scholars pay ₹500/-; Student Start-ups pay ₹1,500/-; and MSMEs/Registered Start-ups pay ₹2,000/-. Fees are payable upon abstract shortlisting and directly support compute grants, laboratory testing infrastructure, and prize disbursals."},{q:"What are the key dates and milestones?",a:"Registration & Expression of Interest (EOI) opened on 9 October 2026. The final deadline for abstract submissions is 30 October 2026. During November 2026, shortlisted applicants undergo intensive technical mentoring, screening, and product development. The Grand Finale is tentatively announced for 1 December 2026."},{q:"Who owns the Intellectual Property (IP) developed during the event?",a:"All intellectual property, patents, source code, and hardware designs developed by participants remain 100% their own exclusive property. Organizers and incubation partners provide acceleration support without taking premature equity or non-consensual IP rights."},{q:"How will the ₹2,00,000 cash prize and incubation be disbursed?",a:"Cash prizes totaling up to ₹2,00,000 will be awarded directly to the top winning teams across student, startup, and technical domain categories during the Grand Finale on 1 December 2026, accompanied by official certificates of achievement and fast-track incubation offers."}];function U2(){const[o,t]=gt.useState(0);return T.jsxs("section",{className:"article-block",id:"faq",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[T.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[T.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"05 / Participant Clarifications"}),T.jsx("h2",{className:"article-block__heading",children:"Frequently Asked Questions"}),T.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Everything you need to know about team eligibility, submission requirements, mentoring, and prizes."})]}),T.jsx("div",{style:{maxWidth:"56rem",margin:"0 auto",display:"flex",flexDirection:"column",gap:"1.2rem"},children:D2.map((i,s)=>{const c=o===s;return T.jsxs("div",{style:{background:"rgba(250, 245, 238, 0.90)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",border:"1px solid var(--color-border)",borderRadius:"2px",overflow:"hidden",transition:"border-color 0.2s ease, box-shadow 0.2s ease",boxShadow:"0 4px 16px rgba(35, 36, 36, 0.04)"},children:[T.jsxs("button",{type:"button",onClick:()=>t(c?-1:s),style:{width:"100%",padding:"1.6rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontFamily:"var(--font-serif)",fontSize:"1.25rem",color:"var(--color-neutral-500)"},children:[T.jsx("span",{children:i.q}),T.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",color:"var(--color-red)"},children:c?"—":"+"})]}),c&&T.jsx("div",{style:{padding:"0 2rem 1.8rem",borderTop:"1px dashed var(--color-border)"},children:T.jsx("p",{style:{marginTop:"1.2rem",fontSize:"1rem",lineHeight:1.7,color:"var(--color-ink-muted)",fontFamily:"var(--font-sans)"},children:i.a})})]},s)})})]})}function L2(){const[o,t]=gt.useState(!1),[i,s]=gt.useState({name:"",email:"",category:"students",theme:"bms",message:""}),c=f=>{f.preventDefault(),!(!i.name||!i.email)&&t(!0)};return T.jsxs("div",{className:"ground",id:"register",children:[T.jsx("div",{className:"ground__contact",children:T.jsxs("form",{className:`ground-form ${o?"ground-form--sent":""}`,onSubmit:c,children:[o&&T.jsxs("div",{className:"ground-form__success",children:[T.jsx("p",{className:"ground-form__success-label",children:"Confirmed"}),T.jsx("h3",{className:"ground-form__success-heading",children:"Expression of Interest Received"}),T.jsxs("p",{className:"ground-form__success-copy",children:["Thank you, ",i.name,". Your preliminary registration for the Intelligent Battery Cell 4.0 Hackathon has been logged. Our technical screening committee will reach out to ",i.email," with next steps before October 30, 2026."]}),T.jsxs("button",{type:"button",className:"cut-button",style:{width:"auto"},onClick:()=>t(!1),children:[T.jsx("span",{className:"cut-button__box",style:{"--cut-fill":"var(--color-yellow)"}}),T.jsx("span",{className:"cut-button__label",style:{color:"var(--color-ink)"},children:"Register Another Team"})]})]}),T.jsxs("div",{className:"ground-form__content",children:[T.jsxs("div",{className:"ground-form__lede",children:[T.jsx("h2",{className:"ground-form__heading",children:"Ready to deploy your battery innovation at national scale?"}),T.jsx("p",{className:"ground-form__intro",children:"Submit your team's Expression of Interest (EOI). Open to students, research scholars, student startups, and registered MSMEs."})]}),T.jsxs("div",{className:"ground-form__field",children:[T.jsx("label",{className:"ground-form__label",htmlFor:"lead-name",children:"Lead Applicant Name / Team Leader"}),T.jsx("input",{id:"lead-name",type:"text",required:!0,placeholder:"e.g. Dr. A. Sharma / Alex Mercer",className:"ground-form__input",value:i.name,onChange:f=>s({...i,name:f.target.value})})]}),T.jsxs("div",{className:"ground-form__field",children:[T.jsx("label",{className:"ground-form__label",htmlFor:"lead-email",children:"Institutional / Corporate Email"}),T.jsx("input",{id:"lead-email",type:"email",required:!0,placeholder:"you@university.edu or founder@startup.in",className:"ground-form__input",value:i.email,onChange:f=>s({...i,email:f.target.value})})]}),T.jsxs("div",{className:"ground-form__field",children:[T.jsx("label",{className:"ground-form__label",htmlFor:"category-select",children:"Registration Category"}),T.jsxs("select",{id:"category-select",className:"ground-form__input ground-form__input--select",value:i.category,onChange:f=>s({...i,category:f.target.value}),children:[T.jsx("option",{value:"students",children:"Students & Research Scholars — ₹500/-"}),T.jsx("option",{value:"student-startups",children:"Student Start-ups (Enrolled) — ₹1,500/-"}),T.jsx("option",{value:"msme",children:"MSMEs & Registered Start-ups — ₹2,000/-"})]})]}),T.jsxs("div",{className:"ground-form__field",children:[T.jsx("label",{className:"ground-form__label",htmlFor:"theme-select",children:"Primary Hackathon Theme"}),T.jsxs("select",{id:"theme-select",className:"ground-form__input ground-form__input--select",value:i.theme,onChange:f=>s({...i,theme:f.target.value}),children:[T.jsx("option",{value:"bms",children:"Intelligent Battery Management Systems (BMS)"}),T.jsx("option",{value:"safety",children:"Battery Safety & Thermal Runaway Mitigation"}),T.jsx("option",{value:"second-life",children:"Smart Charging & Second-Life Storage"}),T.jsx("option",{value:"renewable",children:"Renewable Energy Grid Integration"}),T.jsx("option",{value:"digital-twin",children:"Battery Diagnostics & AI Digital Twins"}),T.jsx("option",{value:"iot",children:"IoT-Enabled Wireless Monitoring"}),T.jsx("option",{value:"indigenous",children:"Indigenous Battery Chemistries"}),T.jsx("option",{value:"defense",children:"National Security & Strategic Storage"})]})]}),T.jsxs("div",{className:"ground-form__field",children:[T.jsxs("label",{className:"ground-form__label",htmlFor:"note-message",children:["Abstract / Proposed Technical Approach",T.jsx("span",{className:"ground-form__optional",children:"(Optional)"})]}),T.jsx("textarea",{id:"note-message",rows:3,placeholder:"Summarize your cell chemistry, algorithm, or hardware prototype concept...",className:"ground-form__input ground-form__input--area",value:i.message,onChange:f=>s({...i,message:f.target.value})})]}),T.jsx("div",{className:"ground-form__trap","aria-hidden":"true",children:T.jsx("input",{id:"note-website",type:"text",tabIndex:-1,autoComplete:"off"})}),T.jsxs("button",{type:"submit",className:"cut-button ground-form__submit",style:{"--cut-fill":"var(--color-red)","--cut-fill-hover":"var(--color-orange)"},children:[T.jsx("span",{className:"cut-button__box"}),T.jsx("span",{className:"cut-button__label",children:"Submit Expression of Interest (EOI)"})]})]})]})}),T.jsxs("footer",{className:"ground__footer",children:[T.jsx("a",{className:"ground__maker",href:"#top",children:T.jsx("span",{children:"Built for India's Battery Future — Hackathon 2026"})}),T.jsxs("p",{className:"ground__copyright",children:[T.jsx("span",{children:"© 2026 Intelligent Battery Cell 4.0 Hackathon"}),T.jsx("a",{className:"ground__privacy",href:"#top",children:"Back to Altitude"})]})]})]})}function O2(){return T.jsxs("div",{className:"page-shell",children:[T.jsx(f2,{}),T.jsx(d2,{}),T.jsx(h2,{}),T.jsx("section",{className:"article-intro","aria-label":"Hackathon introduction",children:T.jsxs("div",{className:"article-intro__inner",children:[T.jsx(kh,{as:"p",className:"article-intro__lead",text:"Intelligent Battery Cell 4.0 Hackathon 2026 brings together India's sharpest students, research scholars, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology.",highlightWord:"innovative"}),T.jsx(kh,{as:"p",className:"article-intro__copy",text:"The event is focused on using Artificial Intelligence to advance battery safety, sustainability, and indigenous innovation. From mitigating thermal runaway hazards in electric vehicles to building gigawatt-hour grid storage and extreme-climate defense energy systems, the era of passive chemical batteries is over."}),T.jsx(kh,{as:"p",className:"article-intro__copy",text:"Whether you are writing AI neural digital twin algorithms, engineering embedded firmware for edge BMS microcontrollers, testing sodium-ion cathode formulations, or designing circular second-life cascading models — this is the premier national platform to showcase your breakthrough."})]})}),T.jsx(p2,{}),T.jsx(M2,{}),T.jsx(m2,{}),T.jsx(g2,{}),T.jsx(_2,{}),T.jsx(E2,{}),T.jsx(T2,{}),T.jsx(C2,{}),T.jsx(N2,{}),T.jsx(U2,{}),T.jsx(L2,{})]})}HM.createRoot(document.getElementById("root")).render(T.jsx(dx.StrictMode,{children:T.jsx(O2,{})}));
