// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e};var c=e,f=Math.floor;function p(e){return f(e)===e}function _(e){return e!=e}function d(e,t,r){return _(e)||_(t)||_(r)||!p(t)||!p(r)||t>r?NaN:e<t||e>r||!p(e)?0:1/(r-t+1)}return c(d,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t){var r,n;return _(e)||_(t)||!p(e)||!p(t)||e>t?(n=NaN,function(){return n}):(r=1/(t-e+1),function(n){return _(n)?NaN:n<e||n>t||!p(n)?0:r})}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).pmf=t();
//# sourceMappingURL=index.js.map
