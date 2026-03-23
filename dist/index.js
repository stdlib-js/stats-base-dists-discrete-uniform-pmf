"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=a(function(F,c){
var i=require('@stdlib/math-base-assert-is-integer/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function y(e,r,t){return u(e)||u(r)||u(t)||!i(r)||!i(t)||r>t?NaN:e<r||e>t||!i(e)?0:1/(t-r+1)}c.exports=y
});var q=a(function(O,v){
var m=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-integer/dist'),f=require('@stdlib/math-base-assert-is-nan/dist');function g(e,r){var t;if(f(e)||f(r)||!s(e)||!s(r)||e>r)return m(NaN);return t=1/(r-e+1),p;function p(n){return f(n)?NaN:n<e||n>r||!s(n)?0:t}}v.exports=g
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=o(),d=q();I(N,"factory",d);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
