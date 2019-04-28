!function(){"use strict";function i(t){return t==undefined||null==t}function a(t){return t!==undefined&&null!==t}function o(t){return null!==t&&"object"==(void 0==t?"undefined":e(t))}function c(t){return"object"==(void 0==t?"undefined":e(t))&&t instanceof HTMLElement}function u(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function s(t,e){for(var n in e)t[n]=e[n];return t}function t(e){var n=Object.create(null);return function(t){return n[t]||(n[t]=e(t))}}function l(t){throw new Error("Vaptcha error: "+t)}function Promise(t){var n=this;this.state="pending",this.value=undefined,this.reason=undefined,this.onResolveAsyncCallbacks=[],this.onRejectAsyncCallbacks=[];var e=function(e){"pending"==n.state&&(n.state="rejected",n.reason=e,n.onRejectAsyncCallbacks.map(function(t){return t(e)}))};try{t(function(t){"pending"==n.state&&(n.state="fulfilled",n.value=t,n.onResolveAsyncCallbacks.map(function(t){return t()}))},e)}catch(r){e(r)}}window.HTMLElement=window.HTMLElement||Element,Array.prototype.map||(Array.prototype.map=function(t,e){var n,r,o;if(null==this)throw new TypeError(" this is null or not defined");var i=Object(this),a=i.length>>>0;if("[object Function]"!=Object.prototype.toString.call(t))throw new TypeError(t+" is not a function");for(e&&(n=e),r=new Array(a),o=0;o<a;){var c;o in i&&(c=t.call(n,i[o],o,i),r[o]=c),o++}return r}),Array.prototype.includes||(Array.prototype.includes=function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0==r)return!1;for(var o=0|e,i=Math.max(0<=o?o:r-Math.abs(o),0);i<r;){if(n[i]==t)return!0;i++}return!1}),Object.create||(Object.create=function(t){var e;return(e=function(){}).prototype=t,new e});var d,r={vid:null,scene:"",container:null,type:"float",style:"dark",lang:"zh-CN",ai:!0,https:!0,aiAnimation:!0,protocol:"https://",css_version:"latest",cdn_servers:["cdn.vaptcha.com"],api_server:"api.vaptcha.com/v2",canvas_path:"/canvas.min.js"},e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor==Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=Object.prototype.toString,f=(t(function(t){for(var e={},n=(t&&-1!==t.indexOf("?")&&t.split("?")[1]||window.location.search.substring(1)).split("&"),r=0;r<n.length;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}),t(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}));(d=function(t){this.data=t,this.valiudateFuns=[],this.ruleFuns={required:function(t,e){return i(t)||0==t.length?e:null}}}).prototype={constructor:d,addValidateRules:function(t){s(this.ruleFuns,t)},add:function(t,e,n){var r=this,o=e.split(":"),i=o.shift(),a=this.ruleFuns[i];o.unshift(this.data[t]),o.push(n),a&&this.valiudateFuns.push(function(){return a.apply(r,o)})},validate:function(){for(var t,e=0;t=this.valiudateFuns[e++];){var n=t();if(n)return l(n),!1}return!0}},Promise.prototype.then=function(n){var r=this;if("fulfilled"==this.state){var t=n(this.value);if(o(t)&&"Promise"==u(t.constructor))return t}return"pending"==this.state?new Promise(function(e){r.onResolveAsyncCallbacks.push(function(){var t=n(r.value);if(o(t)&&"Promise"==u(t.constructor))return t.then(e);e(t)})}):this},Promise.prototype["catch"]=function(t){return"rejected"==this.state&&t(this.reason),"pending"==this.state&&this.onRejectAsyncCallbacks.push(t),this},Promise.resolve=function(e){return new Promise(function(t){t(e)})},Promise.reject=function(n){return new Promise(function(t,e){e(n)})};var n,h,v,m,y,g,w,b,j,C,A,S,E,O,T,k,_=(h=r.protocol,v=r.api_server,m=function(t){var e="";for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e+="&"+n+"="+encodeURIComponent(t[n]));return e.slice(1)},y=function(t,e){var n=m(e);return-1<t.indexOf("http://")||-1<t.indexOf("https://")?t+"?"+n:""+h+v+t+"?"+n},g=function(t){var e=document.getElementsByTagName("head")[0],n=document.createElement("script");return n.charset="UTF-8",n.src=t,e.appendChild(n),{remove:function(){e.removeChild(n)}}},(n=function(o,i){return i=i||{},new Promise(function(t){var e="VaptchaJsonp"+(new Date).valueOf();window[e]&&(e+="1"),s(i,{callback:e}),o=y(o,i);var n=g(o),r=setTimeout(function(){clearTimeout(r),window[e]=null,n.remove(),t({code:"0703",msg:"Time out,Refresh Again!"})},1e4);window[e]=function(){clearTimeout(r),t.apply(this,arguments),n.remove(),window[e]=null}})}).setConfig=function(t){h=t.protocol||h,v=t.api_server||v},n),R={"0201":"id empty","0202":"id error","0208":"scene error","0209":"request used up","0906":"params error","0702":"domain not match"},F=(w=!1,b=function(e){return"DownTime"==e.mode?(s(e,{js_path:"vaptcha-sdk.latest.js",css_version:"2.0.0",api_server:location.host,protocol:location.protocol+"//"}),_.setConfig(e),_(e.outage,{action:"get"}).then(function(t){return s(e,t),Promise.resolve()})):(t=e,_("/config",{id:t.vid,type:t.type,scene:t.scene||""})).then(function(t){return"0103"!==t.code?(l(R[t.msg]||t.msg),Promise.reject(t.code)):(t.type!==e.type&&(t.mode=t.type,t.type=e.type),s(e,t),Promise.resolve())});var t},j=function(t,e){return""+t.protocol+t.cdn_servers[0]+"/"+e},C=function(e){var n=document.getElementsByTagName("head")[0],r="vaptcha_style",o=document.getElementById(r);return new Promise(function(t){i(o)?(s(o=document.createElement("link"),{rel:"stylesheet",type:"text/css",href:e,id:r,onload:t}),n&&n.appendChild(o)):t()})},A=function(n){var r=document.getElementsByTagName("head")[0],o=document.querySelector("script[src='"+n+"']");return new Promise(function(t){var e;a(o)?o.loaded?t():setTimeout(function(){return A(n).then(t)}):(s(o=document.createElement("script"),{async:!0,charset:"utf-8",src:n,onerror:function(){return l("load sdk timeout")},onload:e=function(){o.readyState&&"loaded"!==o.readyState&&"complete"!==o.readyState||(t(),o.loaded=!0,o.onload=null,o.onreadystatechange=null)},onreadystatechange:e}),r.appendChild(o))})},S=function(t){var e=t.sdkName,r=t.config,n=j(r,r.js_path);return A(n).then(function(){var n=new(window["_"+f(e)+"Vaptcha"])(r);return n.vaptcha.resetCaptcha=function(t,e){s(r,e),S({sdkName:t,config:r}).then(function(t){n.destroy(),n.options=t.options,n.vaptcha=t.vaptcha,t.render(),"character"==r.mode&&["click","float","popup"].includes(r.type)&&t.vaptcha.dtClickCb({target:t.vaptcha.btnDiv})})},Promise.resolve(n)})},E=function(n){var t,e;n.https=w=!0,n.protocol="https://",_.setConfig(n),!["embed","popup","invisible"].includes(n.type)&&(n.type="popup"),t=new RegExp("MSIE (\\d+\\.\\d+);"),e=navigator.userAgent,t.test(e),(parseFloat(RegExp.$1)||Infinity)<9&&A(j(n,n.canvas_path));var r=new d(n);if(r.addValidateRules({elementOrSelector:function(t,e){if("String"==p.call(n.container).slice(8,-1)&&(n.container=document.querySelector(n.container)),o(n.container)&&c(n.container[0])&&(n.container=n.container[0]),!c(n.container))return e}}),r.add("vid","required","please configure vid"),"invisible"!==n.type&&r.add("container","elementOrSelector","please configure container with element or selector"),r.validate())return b(n).then(function(){var t=j(n,n.https?"theme_https."+n.css_version+".css":"theme."+n.css_version+".css");return C(t)}).then(function(){return w=!1,S({sdkName:n.mode||n.type,config:n})})},function N(e){return new Promise(function(t){w?setTimeout(function(){N(e).then(t)},1e3):E(e).then(t)})["catch"](function(t){})});O=function(t){var e=t.getAttribute("data-config"),n={};if(a(e))try{n=JSON.parse(e)}catch(r){l("dom config format error")}return n},T=function(t){var e=t.getAttribute("data-vid");return a(e)?{vid:e}:{}},k=function(t,e){var n=Object.create(r);n.container=t,s(n,e),a(n.vid)&&F(n).then(function(t){t.listen("mounted",function(){t.renderTokenInput()}),t.render()})},function(t){for(var e=document.querySelectorAll("[data-vid]"),n=document.querySelectorAll("[data-config]"),r=0;r<n.length;r++){var o=O(n[r]);o.mode=void 0,k(n[r],o)}for(var i=0;i<e.length;i++)if(!Array.prototype.includes.call(n,e[i])){var a=T(e[i]);a.mode=void 0,k(e[i],a)}}(),window.vaptcha=function(t){var e=Object.create(r);return s(e,t),F(e)}}();