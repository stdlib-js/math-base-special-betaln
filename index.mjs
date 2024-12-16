// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.3.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-sqrt-two-pi@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";var o=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],p=o.length;var j=94906265.62425156,h=3745194030963158e291;function v(s){return s<10?NaN:s>=h?0:s<j?function(s){var t,e,i,n,m;if(s<-1.1||s>1.1)return NaN;for(i=0,n=0,t=2*s,m=0;m<p;m++)e=i,n=t*(i=n)-e+o[m];return.5*(n-e)}(2*l(10/s,2)-1)/s:1/(12*s)}function c(l,o){var p,j,h;return j=n(l,o),h=i(l,o),j<0?NaN:0===j?d:h===d?a:j>=10?(p=v(j)+v(h)-v(j+h),-.5*m(h)+r+p+(j-.5)*m(j/(j+h))+h*t(-j/(j+h))):h>=10?(p=v(h)-v(j+h),s(j)+p+j-j*m(j+h)+(h-.5)*t(-j/(j+h))):m(e(j)*(e(h)/e(j+h)))}export{c as default};
//# sourceMappingURL=index.mjs.map