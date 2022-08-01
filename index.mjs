// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,n,r){return s(t)||s(n)||s(r)||!e(n)||!e(r)||n>r?NaN:t<n||t>r||!e(t)?0:1/(r-n+1)}function i(t,r){var i;return s(t)||s(r)||!e(t)||!e(r)||t>r?n(NaN):(i=1/(r-t+1),function(n){if(s(n))return NaN;if(n<t||n>r||!e(n))return 0;return i})}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
