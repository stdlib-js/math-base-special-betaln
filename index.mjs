// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-sqrt-two-pi@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var o=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],p=o.length;function j(s){return s<10?NaN:s>=3745194030963158e291?0:s<94906265.62425156?function(s){var t,e,i,n,m;if(s<-1.1||s>1.1)return NaN;for(i=0,n=0,t=2*s,m=0;m<p;m++)e=i,n=t*(i=n)-e+o[m];return.5*(n-e)}(2*l(10/s,2)-1)/s:1/(12*s)}function h(l,o){var p,h,c;return h=n(l,o),c=i(l,o),h<0?NaN:0===h?a:c===a?d:h>=10?(p=j(h)+j(c)-j(h+c),-.5*m(c)+r+p+(h-.5)*m(h/(h+c))+c*t(-h/(h+c))):c>=10?(p=j(c)-j(h+c),s(h)+p+h-h*m(h+c)+(c-.5)*t(-h/(h+c))):m(e(h)*(e(c)/e(h+c)))}export{h as default};
//# sourceMappingURL=index.mjs.map
