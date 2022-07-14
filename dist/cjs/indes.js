"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react");function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function r(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}})),e.default=t,Object.freeze(e)}var n=r(t),o=e(t);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const d=new Map,p=new WeakMap;let y,g=0;function v(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(r=t.root,r?(p.has(r)||(g+=1,p.set(r,g.toString())),p.get(r)):"0"):t[e]}`;var r})).toString()}function h(t,e,r={},n=y){if(void 0===window.IntersectionObserver&&void 0!==n){const o=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:i,elements:a}=function(t){let e=v(t),r=d.get(e);if(!r){const n=new Map;let o;const i=new IntersectionObserver((e=>{e.forEach((e=>{var r;const i=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=i),null==(r=n.get(e.target))||r.forEach((t=>{t(i,e)}))}))}),t);o=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:i,elements:n},d.set(e,r)}return r}(r);let c=a.get(t)||[];return a.has(t)||a.set(t,c),c.push(e),i.observe(t),function(){c.splice(c.indexOf(e),1),0===c.length&&(a.delete(t),i.unobserve(t)),0===a.size&&(i.disconnect(),d.delete(o))}}var b=function(t){var e=[];if("string"==typeof t){if(4===t.length?t+="f":7===t.length&&(t+="ff"),/^#[0-9a-fA-F]{8}$/i.test(t))t.replace("#","").split(/(..)/g).filter((function(t){return t})).forEach((function(t){return e.push(Number("0x"+t))})),e[e.length-1]=e[e.length-1]/255;else{if(!/^#[0-9a-fA-F]{4}$/i.test(t))throw new Error("".concat(t," is invalid. 'Color' must be valid Hex or RGBA value. "));t.replace("#","").split(/(.)/g).filter((function(t){return t})).forEach((function(t){return e.push(17*Number("0x"+t))})),e[e.length-1]=e[e.length-1]/255}return e}return t},w=function(t,e,r,n){if(t===e)return t;var o=t<e?e*r+(t-t*r):t-t*r+e*r;return n?n(o):o},m=function(t,e,r){var n=b(t),o=b(e);return n.map((function(t,e){return w(t,o[e],r)}))},O=function(e){var r=e.startScroll,i=e.endScroll,c=e.speed,s=e.opacity,f=e.transform,d=e.offset,p=e.background,y=e.gradient,g=e.filter,v=e.disabled,b=e.children,O=function({threshold:t,delay:e,trackVisibility:r,rootMargin:o,root:i,triggerOnce:a,skip:c,initialInView:l,fallbackInView:u,onChange:s}={}){const f=n.useRef(),d=n.useRef(),[p,y]=n.useState({inView:!!l});d.current=s;const g=n.useCallback((n=>{void 0!==f.current&&(f.current(),f.current=void 0),c||n&&(f.current=h(n,((t,e)=>{y({inView:t,entry:e}),d.current&&d.current(t,e),e.isIntersecting&&a&&f.current&&(f.current(),f.current=void 0)}),{root:i,rootMargin:o,threshold:t,trackVisibility:r,delay:e},u))}),[Array.isArray(t)?t.toString():t,i,o,a,c,r,u,e]);n.useEffect((()=>{f.current||!p.entry||a||c||y({inView:!!l})}));const v=[g,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}({}),S=O.ref,j=O.inView,E=O.entry,A=null==E?void 0:E.target,x=function(e){var r=l(t.useState(0),2),n=r[0],o=r[1];return t.useLayoutEffect((function(){function t(){o(Math.floor(window.pageYOffset/e)*e)}return window.addEventListener("scroll",t),t(),function(){return window.removeEventListener("scroll",t)}}),[]),n}(1),I=l(t.useState(0),2),P=I[0],k=I[1],V=function(t){switch(t){case"top":return x;case"center":return x+window.innerHeight/2;case"bottom":return x+window.innerHeight;default:return t||x+window.innerHeight}},M=l(t.useState({startScroll:V(r||"top"),endScroll:i?i.toString().includes("%")?1e3:parseInt(i.toString()):300,speed:(c||20)/100}),2),R=M[0],C=M[1],H=function(){var t=E&&E.target;if(t){var e=t.offsetParent.offsetTop+(d||0),r=e+R.endScroll-e,n=(R.startScroll+x-e)/r;k(n<0?0:n>1?1:n)}},D=function(){if(A){if(s){var t=w.apply(void 0,u(s).concat([P]));A.style.opacity=t.toFixed(3)}if(p){var e=m.apply(void 0,u(p).concat([P]));A.style.backgroundColor="rgba(".concat(e.join(","),") ")}else if(y){var r=y.type,n=y.dir,o=y.start,i=y.end;if(o.length<2||i.length<2)throw new Error("'start' and 'end' must have at least 2 elements");if(o.length!==i.length)throw new Error("'start' and 'end' array length must be the same");for(var a=[],c=0;c<o.length;c++){var l=m(o[c],i[c],P);a.push("rgba(".concat(l.join(","),")"))}console.log(r,n,o,i),A.style.background="".concat(r||"linear","-gradient(").concat(n?n+"deg,":"").concat(a.join(","),")")}var d="";if(f){var v=f.translate,h=f.translateX,b=f.translateY,O=f.scale,S=f.rotate;if(v){var j=w.apply(void 0,u(v[0]).concat([P])),E=w.apply(void 0,u(v[1]).concat([P]));d+="translate(".concat(j,"px, ").concat(E,"px) ")}else h?d+="translateX(".concat(w.apply(void 0,u(h).concat([P])),"px "):b&&(d+="translateY(".concat(w.apply(void 0,u(b).concat([P])),"px "));O&&(d+="scale(".concat(w.apply(void 0,u(O).concat([P])),") ")),S&&(d+="rotate(".concat(w.apply(void 0,u(S).concat([P])),"deg) ")),""!==d&&(A.style.transform=d)}if(g){var x=w.apply(void 0,u(g.blur||[0,0]).concat([P]));A.style.filter="blur(".concat(x,"px) ")}}};t.useEffect((function(){if(!v)return H(),function(){}}),[x]),t.useEffect((function(){requestAnimationFrame(D)}),[P]);var L=function(){C(a(a({},R),{},{startScroll:V(r||"top")}))};return t.useEffect((function(){return function(){if(A){console.log(j);var t=null==i?void 0:i.toString(),e=t?t.includes("%")?parseInt(t)/100*A.offsetHeight:parseInt(t):A.offsetParent.offsetHeight;C(a(a({},R),{},{endScroll:e})),H(),D()}}(),function(){}}),[A]),t.useEffect((function(){return k(0),window.addEventListener("resize",L),function(){return window.removeEventListener("resize",L)}}),[]),o.default.createElement("div",{style:{position:"relative",width:"100%",height:"fit-content"}},o.default.createElement("div",{ref:S,style:{position:"relative",width:"100%",height:"fit-content",willChange:"transform, opacity, background"}},b))};exports.Parallax=O,exports.getRGBA=b;
//# sourceMappingURL=indes.js.map
