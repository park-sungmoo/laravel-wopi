!function(){"use strict";var e,t,n,r,o,f={},u={};function a(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return f[e].call(n.exports,n,n.exports,a),n.exports}a.m=f,e=[],a.O=function(t,n,r,o){if(!n){var f=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var u=!0,i=0;i<n.length;i++)(!1&o||f>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(u=!1,o<f&&(f=o));if(u){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var f={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(t){f[t]=function(){return e[t]}}));return f.default=function(){return e},a.d(o,f),o},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return"assets/js/"+({53:"935f2afb",85:"1f391b9e",128:"a09c2993",152:"54f44165",195:"c4f5d8e4",305:"a7835cdd",414:"393be207",436:"009f1e98",514:"1be78505",592:"common",608:"9e4087bc",653:"64261dca",918:"17896441",973:"59ad4bcd"}[e]||e)+"."+{53:"730fda5c",75:"bfb955e2",85:"d9b23a8c",128:"ad21a319",152:"59db656c",195:"65137d8d",305:"41e94643",414:"973513e6",436:"d8b29476",514:"cbc88e2b",592:"4f4d91e9",608:"23676620",653:"22bc1e10",914:"69c04032",918:"db021caa",973:"e4c8b714"}[e]+".js"},a.miniCssF=function(e){return"assets/css/styles.932a6adb.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="laravel-wopi-docs:",a.l=function(e,t,n,f){if(r[e])r[e].push(t);else{var u,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+n){u=l;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",o+n),u.src=e),r[e]=[t];var s=function(t,n){u.onerror=u.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),i&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/laravel-wopi/",a.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",a09c2993:"128","54f44165":"152",c4f5d8e4:"195",a7835cdd:"305","393be207":"414","009f1e98":"436","1be78505":"514",common:"592","9e4087bc":"608","64261dca":"653","59ad4bcd":"973"}[e]||e,a.p+a.u(e)},function(){var e={303:0,532:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var f=a.p+a.u(t),u=new Error;a.l(f,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",u.name="ChunkLoadError",u.type=o,u.request=f,r[1](u)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,f=n[0],u=n[1],i=n[2],c=0;if(f.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(i)var d=i(a)}for(t&&t(n);c<f.length;c++)o=f[c],a.o(e,o)&&e[o]&&e[o][0](),e[f[c]]=0;return a.O(d)},n=self.webpackChunklaravel_wopi_docs=self.webpackChunklaravel_wopi_docs||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();