var T=Object.defineProperty;var D=(t,e,n)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var w=(t,e,n)=>D(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function g(){}function x(t){return t()}function M(){return Object.create(null)}function _(t){t.forEach(x)}function R(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function Z(t,e){t.appendChild(e)}function ee(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function ne(){return A(" ")}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.data!==e&&(t.data=e)}let m;function p(t){m=t}function O(){if(!m)throw new Error("Function called outside component initialization");return m}function re(t){O().$$.on_mount.push(t)}function oe(t){O().$$.on_destroy.push(t)}const u=[],V=[];let h=[];const S=[],J=Promise.resolve();let b=!1;function N(){b||(b=!0,J.then(C))}function $(t){h.push(t)}const v=new Set;let d=0;function C(){if(d!==0)return;const t=m;do{try{for(;d<u.length;){const e=u[d];d++,p(e),P(e.$$)}}catch(e){throw u.length=0,d=0,e}for(p(null),u.length=0,d=0;V.length;)V.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];v.has(n)||(v.add(n),n())}h.length=0}while(u.length);for(;S.length;)S.pop()();b=!1,v.clear(),p(t)}function P(t){if(t.fragment!==null){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function B(t){const e=[],n=[];h.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),h=e}const H=new Set;function q(t,e){t&&t.i&&(H.delete(t),t.i(e))}function z(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),$(()=>{const r=t.$$.on_mount.map(x).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...r):_(r),t.$$.on_mount=[]}),i.forEach($)}function K(t,e){const n=t.$$;n.fragment!==null&&(B(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){t.$$.dirty[0]===-1&&(u.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,s,i,r,c=null,a=[-1]){const f=m;p(t);const o=t.$$={fragment:null,ctx:[],props:r,update:g,not_equal:i,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:M(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};c&&c(o.root);let I=!1;if(o.ctx=n?n(t,e.props||{},(l,E,...L)=>{const W=L.length?L[0]:E;return o.ctx&&i(o.ctx[l],o.ctx[l]=W)&&(!o.skip_bound&&o.bound[l]&&o.bound[l](W),I&&U(t,l)),E}):[],o.update(),I=!0,_(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const l=j(e.target);o.fragment&&o.fragment.l(l),l.forEach(k)}else o.fragment&&o.fragment.c();e.intro&&q(t.$$.fragment),z(t,e.target,e.anchor),C()}p(f)}class ae{constructor(){w(this,"$$");w(this,"$$set")}$destroy(){K(this,1),this.$destroy=g}$on(e,n){if(!R(n))return g;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const G="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(G);class y{constructor(){this.eventListenerMap={},this._iosResponseMap={},this._iosCntResponseId=0}_onNativeEvent(e,n){for(var s=this.eventListenerMap[e]||[],i=0;i<s.length;i++){var r=s[i],c=r&&r(n);if(c===!1)break}}_callJSFunction(e,n,s){var i=this,r=i._getResolvedFunction(n);if(r){var c=r.apply(window,s);c&&c.then?c.then(function(a){i._sendJSCallResponse(e,a)},function(a){i._sendJSCallResponse(e,a,!0)}):this._sendJSCallResponse(e,c)}}_getResolvedFunction(e){if(e&&(e=e.trim()).length){e=e.indexOf("window.")===0?e.replace("window.",""):e;for(var n=e.split("."),s=window,i=0;i<n.length;i++){if(!s[n[i]]){s=null;break}s=s[n[i]]}return s}}_sendJSCallResponse(e,n,s){var i={reqId:e,response:n||null,isError:!!s};this.emit("_jsCallResponse",i)}_createIFrame(e){var n=document.documentElement,s=document.createElement("IFRAME");return s.setAttribute("src",e),n.appendChild(s),s}_emitEventToIOS(e,n){this._iosResponseMap[++this._iosCntResponseId]=n;var s={eventName:e,resId:this._iosCntResponseId},i="js2ios:"+JSON.stringify(s),r=this._createIFrame(i);r.parentNode.removeChild(r)}_getIOSResponse(e){var n=this._iosResponseMap[e];return delete this._iosResponseMap[e],n}_emitEventToAndroid(e,n){window.androidWebViewInterface.handleEventFromWebView(e,n)}on(e,n){var s=this.eventListenerMap[e]||(this.eventListenerMap[e]=[]);s.push(n)}removeListener(e,n){const s=this.eventListenerMap[e];s&&(this.eventListenerMap[e]=s.filter(i=>i!==n))}emit(e,n){var s=typeof n=="object"?JSON.stringify(n):n;window.androidWebViewInterface?this._emitEventToAndroid(e,s):this._emitEventToIOS(e,s)}}class le{constructor(e){this.deviceId=e,this.emitter=new Q,window.nsWebViewInterface==null?(this.oWebViewInterface=new y,window.nsWebViewInterface=this.oWebViewInterface):this.oWebViewInterface=window.nsWebViewInterface,this.header=`devices/${this.deviceId}`,this.oWebViewInterface=new y,this.oWebViewInterface.on("loadLanguages",function(n){console.log("TTTTNEW",n)}),this.oWebViewInterface.on("attributeChangeEvent",n=>{this.emitter.emit(n.topic,n)}),this.oWebViewInterface.emit("loadFinished")}getDeviceInfo(e){const n=s=>{this.oWebViewInterface.removeListener("getDeviceInfo",n),e(s)};this.oWebViewInterface.on("getDeviceInfo",n.bind(this)),this.oWebViewInterface.emit("getDeviceInfo")}attributeListen(e,n,s,i){const a=`${`${this.header}/${e}/${n}`}/attributes/${s}`;console.log(a),this.emitter.on(a,i)}command(e,n,s,i,r){const f=`${`${this.header}/${e}/${n}`}/commands/${s}`,o={topic:f,destinationName:f,duplicate:!1,payloadBytes:null,payloadString:i,qos:0,retained:!1};this.oWebViewInterface.emit("command",o)}}class Q{constructor(){this.eventListenerMap={}}on(e,n){(this.eventListenerMap[e]||(this.eventListenerMap[e]=[])).push(n)}removeListener(e,n){const s=this.eventListenerMap[e];s&&(this.eventListenerMap[e]=s.filter(i=>i!==n))}emit(e,n){const s=this.eventListenerMap[e];s?s.forEach(i=>i(n)):console.log(`No listeners for event: ${e}`)}}class fe{getDevices(e){let n;window.nsWebViewInterface==null?(n=new y,window.nsWebViewInterface=n):n=window.nsWebViewInterface;const s=n.on("getDevices",i=>{n.removeListener("getDevices",s),console.log("getDevices",i),e(i)});n.emit("loadFinished"),n.emit("getDevices")}}export{le as D,fe as H,ae as S,se as a,ee as b,Z as c,k as d,te as e,ie as f,ne as g,oe as h,ce as i,V as j,g as n,re as o,Y as s,A as t};
