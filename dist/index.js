"use strict";var o=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var s=o(function(B,f){
var c=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],b=c.length;function L(a){var i,t,r,e,v;if(a<-1.1||a>1.1)return NaN;for(r=0,e=0,i=2*a,v=0;v<b;v++)t=r,r=e,e=i*r-t+c[v];return(e-t)*.5}f.exports=L
});var m=o(function(E,N){
var X=require('@stdlib/math-base-special-pow/dist'),_=s(),d=9490626562425156e-8,w=3745194030963158e291;function A(a){return a<10?NaN:a>=w?0:a<d?_(2*X(10/a,2)-1)/a:1/(a*12)}N.exports=A
});var I=o(function(O,g){
var C=require('@stdlib/math-base-special-gammaln/dist'),l=require('@stdlib/math-base-special-log1p/dist'),q=require('@stdlib/math-base-special-gamma/dist'),F=require('@stdlib/math-base-special-max/dist'),G=require('@stdlib/math-base-special-min/dist'),n=require('@stdlib/math-base-special-ln/dist'),M=require('@stdlib/constants-float64-ln-sqrt-two-pi/dist'),P=require('@stdlib/constants-float64-ninf/dist'),p=require('@stdlib/constants-float64-pinf/dist'),u=m();function S(a,i){var t,r,e;return r=G(a,i),e=F(a,i),r<0?NaN:r===0?p:e===p?P:r>=10?(t=u(r)+u(e)-u(r+e),-.5*n(e)+M+t+(r-.5)*n(r/(r+e))+e*l(-r/(r+e))):e>=10?(t=u(e)-u(r+e),C(r)+t+r-r*n(r+e)+(e-.5)*l(-r/(r+e))):n(q(r)*(q(e)/q(r+e)))}g.exports=S
});var T=I();module.exports=T;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
