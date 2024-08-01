// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(r){return r===e||r===n}function i(r){return Math.abs(r)}var a,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,f=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol:void 0,s="function"==typeof c?c.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return u.call(r);n=r[s],a=s,e=null!=(i=r)&&f.call(i,a);try{r[s]=void 0}catch(e){return u.call(r)}return t=u.call(r),e?r[s]=n:delete r[s],t}:function(r){return u.call(r)},p="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(p&&n instanceof Uint32Array||"[object Uint32Array]"===l(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var y,d=a,h="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w([1,3.14,-3.14,NaN]),n=e,r=(h&&n instanceof Float64Array||"[object Float64Array]"===l(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,N=y,A="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,256,257]),n=e,r=(A&&n instanceof Uint8Array||"[object Uint8Array]"===l(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?E:function(){throw new Error("not implemented")};var U,S=m,k="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,n;if("function"!=typeof x)return!1;try{e=new x(e=[1,3.14,-3.14,65536,65537]),n=e,r=(k&&n instanceof Uint16Array||"[object Uint16Array]"===l(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var F,j={uint16:U,uint8:S};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new N(1),$=new d(V.buffer);function G(r){return V[0]=r,$[O]}var H=!0===T?1:0,W=new N(1),C=new d(W.buffer);function L(r,e){return W[0]=r,C[H]=e>>>0,W[0]}var P=1023,M=.6931471803691238,R=1.9082149292705877e-10,Z=0x40000000000000,X=.3333333333333333,Y=1048575,q=2146435072,z=1048576,B=1072693248;function D(e){var t,i,a,o,u,f,c,s,l,p,v,g;return 0===e?n:r(e)||e<0?NaN:(u=0,(i=G(e))<z&&(u-=54,i=G(e*=Z)),i>=q?e+e:(u+=(i>>20)-P|0,u+=(s=614244+(i&=Y)&1048576|0)>>20|0,c=(e=L(e,i|s^B))-1,(Y&2+i)<3?0===c?0===u?0:u*M+u*R:(f=c*c*(.5-X*c),0===u?c-f:u*M-(f-u*R-c)):(s=i-398458|0,l=440401-i|0,o=(v=(g=(p=c/(2+c))*p)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),a=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=a+o,(s|=l)>0?(t=.5*c*c,0===u?c-(t-p*(t+f)):u*M-(t-(p*(t+f)+u*R)-c)):0===u?c-p*(c-f):u*M-(p*(c-f)-u*R-c))))}var J=Math.floor,K=Math.ceil;function Q(r){return r<0?K(r):J(r)}function rr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var er=-.16666666666666632,nr=.00833333333332249,tr=-.0001984126982985795,ir=27557313707070068e-22,ar=-2.5050760253406863e-8,or=1.58969099521155e-10;function ur(r,e){var n,t,i;return n=nr+(i=r*r)*(tr+i*ir)+i*(i*i)*(ar+i*or),t=i*r,0===e?r+t*(er+i*n):r-(i*(.5*e-t*n)-e-t*er)}var fr,cr,sr=2147483647,lr=2146435072,pr=1048575,vr=!0===T?0:1,gr=new N(1),yr=new d(gr.buffer);!0===T?(fr=1,cr=0):(fr=0,cr=1);var dr={HIGH:fr,LOW:cr},hr=new N(1),wr=new d(hr.buffer),br=dr.HIGH,mr=dr.LOW;function Nr(r,e){return wr[br]=r,wr[mr]=e,hr[0]}var Ar=1023,_r=-1023,Er=-1074,Ur=2147483648,Sr="function"==typeof Object.defineProperty?Object.defineProperty:null,kr=Object.defineProperty;function xr(r){return"number"==typeof r}function Ir(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Fr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+Ir(i):Ir(i)+r,t&&(r="-"+r)),r}var jr=String.prototype.toLowerCase,Tr=String.prototype.toUpperCase;function Or(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!xr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Fr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Fr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Tr.call(r.specifier)?Tr.call(n):jr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var Vr=Math.abs,$r=String.prototype.toLowerCase,Gr=String.prototype.toUpperCase,Hr=String.prototype.replace,Wr=/e\+(\d)$/,Cr=/e-(\d)$/,Lr=/^(\d+)$/,Pr=/^(\d+)e/,Mr=/\.0$/,Rr=/\.0*e/,Zr=/(\..*[^0])0*e/;function Xr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!xr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Vr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Hr.call(n,Zr,"$1e"),n=Hr.call(n,Rr,"e"),n=Hr.call(n,Mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Hr.call(n,Wr,"e+0$1"),n=Hr.call(n,Cr,"e-0$1"),r.alternate&&(n=Hr.call(n,Lr,"$1."),n=Hr.call(n,Pr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Gr.call(r.specifier)?Gr.call(n):$r.call(n)}function Yr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var qr=String.fromCharCode,zr=Array.isArray;function Br(r){return r!=r}function Dr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Jr(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(!zr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Dr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Br(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Br(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Or(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Br(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Br(a)?String(t.arg):qr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Xr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Fr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+Yr(v):Yr(v)+s)),o+=t.arg||"",u+=1}return o}var Kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Qr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function re(r){var e,n,t,i;for(n=[],i=0,t=Kr.exec(r);t;)(e=r.slice(i,Kr.lastIndex-t[0].length)).length&&n.push(e),n.push(Qr(t)),i=Kr.lastIndex,t=Kr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function ee(r){var e,n;if("string"!=typeof r)throw new TypeError(ee("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[re(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Jr.apply(null,e)}var ne,te,ie=Object.prototype,ae=ie.toString,oe=ie.__defineGetter__,ue=ie.__defineSetter__,fe=ie.__lookupGetter__,ce=ie.__lookupSetter__,se=function(){try{return Sr({},"x",{}),!0}catch(r){return!1}}()?kr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===ae.call(r))throw new TypeError(ee("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===ae.call(n))throw new TypeError(ee("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(fe.call(r,e)||ce.call(r,e)?(t=r.__proto__,r.__proto__=ie,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&oe&&oe.call(r,e,n.get),o&&ue&&ue.call(r,e,n.set),r};function le(r,e,n){se(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?(ne=1,te=0):(ne=0,te=1);var pe={HIGH:ne,LOW:te},ve=new N(1),ge=new d(ve.buffer),ye=pe.HIGH,de=pe.LOW;function he(r,e,n,t){return ve[0]=r,e[t]=ge[ye],e[t+n]=ge[de],e}function we(r){return he(r,[0,0],1,0)}le(we,"assign",he);var be=[0,0];function me(r,e){var n,t;return we.assign(r,be,1,0),n=be[0],n&=sr,t=G(e),Nr(n|=t&=Ur,be[1])}var Ne=22250738585072014e-324,Ae=4503599627370496;function _e(e,n,a,o){return r(e)||t(e)?(n[o]=e,n[o+a]=0,n):0!==e&&i(e)<Ne?(n[o]=e*Ae,n[o+a]=-52,n):(n[o]=e,n[o+a]=0,n)}le((function(r){return _e(r,[0,0],1,0)}),"assign",_e);var Ee=2220446049250313e-31,Ue=2148532223,Se=[0,0],ke=[0,0];function xe(i,a){var o,u;return 0===a||0===i||r(i)||t(i)?i:(_e(i,Se,1,0),i=Se[0],a+=Se[1],a+=function(r){var e=G(r);return(e=(e&lr)>>>20)-P|0}(i),a<Er?me(0,i):a>Ar?i<0?n:e:(a<=_r?(a+=52,u=Ee):u=1,we.assign(i,ke,1,0),o=ke[0],o&=Ue,u*Nr(o|=a+P<<20,ke[1])))}function Ie(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Te=16777216,Oe=5.960464477539063e-8,Ve=Ie(20),$e=Ie(20),Ge=Ie(20),He=Ie(20);function We(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,g,y,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Oe*h|0,He[v]=h-Te*s|0,h=t[d-1]+s,d-=1;if(h=xe(h,i),h-=8*J(.125*h),h-=y=0|h,l=0,i>0?(y+=v=He[n-1]>>24-i,He[n-1]-=v<<24-i,l=He[n-1]>>23-i):0===i?l=He[n-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<n;v++)d=He[v],0===c?0!==d&&(c=1,He[v]=16777216-d):He[v]=16777215-d;if(i>0)switch(i){case 1:He[n-1]&=8388607;break;case 2:He[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=xe(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=He[v];if(0===d){for(g=1;0===He[a-g];g++);for(v=n+1;v<=n+g;v++){for(f[u+v]=Fe[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return We(r,e,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===He[n];)n-=1,i-=24;else(h=xe(h,-i))>=Te?(s=Oe*h|0,He[n]=h-Te*s|0,i+=24,He[n+=1]=s):He[n]=0|h;for(s=xe(1,i),v=n;v>=0;v--)t[v]=s*He[v],s*=Oe;for(v=n;v>=0;v--){for(s=0,g=0;g<=p&&g<=n-v;g++)s+=je[g]*t[v+g];Ge[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ge[v];for(e[0]=0===l?s:-s,s=Ge[0]-s,v=1;v<=n;v++)s+=Ge[v];return e[1]=0===l?s:-s,7&y}function Ce(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Ve[f]=c<0?0:Fe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Ve[o+(f-c)];$e[f]=i}return We(r,e,4,$e,u,4,a,o,Ve)}var Le=Math.round,Pe=.6366197723675814,Me=1.5707963267341256,Re=6077100506506192e-26,Ze=6077100506303966e-26,Xe=20222662487959506e-37,Ye=20222662487111665e-37,qe=84784276603689e-45,ze=2047;function Be(r,e,n){var t,i,a,o,u;return a=r-(t=Le(r*Pe))*Me,o=t*Re,u=e>>20|0,n[0]=a-o,u-(G(n[0])>>20&ze)>16&&(o=t*Xe-((i=a)-(a=i-(o=t*Ze))-o),n[0]=a-o,u-(G(n[0])>>20&ze)>49&&(o=t*qe-((i=a)-(a=i-(o=t*Ye))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var De=0,Je=16777216,Ke=1.5707963267341256,Qe=6077100506506192e-26,rn=2*Qe,en=3*Qe,nn=4*Qe,tn=598523,an=1072243195,on=1073928572,un=1074752122,fn=1074977148,cn=1075183036,sn=1075388923,ln=1075594811,pn=1094263291,vn=[0,0,0],gn=[0,0];function yn(r,e){var n,t,i,a,o,u,f;if((i=G(r)&sr|0)<=an)return e[0]=r,e[1]=0,0;if(i<=un)return(i&pr)===tn?Be(r,i,e):i<=on?r>0?(f=r-Ke,e[0]=f-Qe,e[1]=f-e[0]-Qe,1):(f=r+Ke,e[0]=f+Qe,e[1]=f-e[0]+Qe,-1):r>0?(f=r-2*Ke,e[0]=f-rn,e[1]=f-e[0]-rn,2):(f=r+2*Ke,e[0]=f+rn,e[1]=f-e[0]+rn,-2);if(i<=ln)return i<=cn?i===fn?Be(r,i,e):r>0?(f=r-3*Ke,e[0]=f-en,e[1]=f-e[0]-en,3):(f=r+3*Ke,e[0]=f+en,e[1]=f-e[0]+en,-3):i===sn?Be(r,i,e):r>0?(f=r-4*Ke,e[0]=f-nn,e[1]=f-e[0]-nn,4):(f=r+4*Ke,e[0]=f+nn,e[1]=f-e[0]+nn,-4);if(i<pn)return Be(r,i,e);if(i>=lr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return gr[0]=r,yr[vr]}(r),f=Nr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)vn[o]=0|f,f=(f-vn[o])*Je;for(vn[2]=f,a=3;vn[a-1]===De;)a-=1;return u=Ce(vn,gn,t,a),r<0?(e[0]=-gn[0],e[1]=-gn[1],-u):(e[0]=gn[0],e[1]=gn[1],u)}var dn=[0,0],hn=2147483647,wn=1072243195,bn=1044381696,mn=2146435072;function Nn(r){var e;if(e=G(r),(e&=hn)<=wn)return e<bn?1:rr(r,0);if(e>=mn)return NaN;switch(3&yn(r,dn)){case 0:return rr(dn[0],dn[1]);case 1:return-ur(dn[0],dn[1]);case 2:return-rr(dn[0],dn[1]);default:return ur(dn[0],dn[1])}}var An=1072243195,_n=1045430272,En=[0,0];function Un(r){var e;if(e=G(r),(e&=sr)<=An)return e<_n?r:ur(r,0);if(e>=lr)return NaN;switch(3&yn(r,En)){case 0:return ur(En[0],En[1]);case 1:return rr(En[0],En[1]);case 2:return-ur(En[0],En[1]);default:return-rr(En[0],En[1])}}var Sn=3.141592653589793,kn=.07721566490153287,xn=.3224670334241136,In=1,Fn=-.07721566490153287,jn=.48383612272381005,Tn=-.1475877229945939,On=.06462494023913339,Vn=-.07721566490153287,$n=1,Gn=.4189385332046727,Hn=1.4616321449683622,Wn=4503599627370496,Cn=0x400000000000000,Ln=8470329472543003e-37,Pn=1.4616321449683622,Mn=-.12148629053584961,Rn=-3638676997039505e-33;function Zn(n){var a,o,u,f,c,s,l,p,v,g,y,d,h;if(r(n)||t(n))return n;if(0===n)return e;if(n<0?(a=!0,n=-n):a=!1,n<Ln)return-D(n);if(a){if(n>=Wn)return e;if(v=function(e){var n,a;return r(e)||t(e)?NaN:0===(n=i(a=e%2))||1===n?me(0,a):n<.25?Un(Sn*a):n<.75?me(Nn(Sn*(n=.5-n)),a):n<1.25?(a=me(1,a)-a,Un(Sn*a)):n<1.75?-me(Nn(Sn*(n-=1.5)),a):(a-=me(2,a),Un(Sn*a))}(n),0===v)return e;o=D(Sn/i(v*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(h=-D(n),n>=Hn-1+.27?(y=1-n,u=0):n>=Hn-1-.27?(y=n-(Pn-1),u=1):(y=n,u=2)):(h=0,n>=Hn+.27?(y=2-n,u=0):n>=Hn-.27?(y=n-Pn,u=1):(y=n-1,u=2)),u){case 0:s=kn+(d=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(d),c=d*(xn+d*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(d)),h+=(l=y*s+c)-.5*y;break;case 1:s=jn+(g=(d=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(g),c=Tn+g*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(g),f=On+g*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(g),h+=Mn+(l=d*s-(Rn-g*(c+y*f)));break;case 2:s=y*(Vn+y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)),c=$n+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),h+=-.5*y+s/c}else if(n<8)switch(l=(y=n-(u=Q(n)))*(Fn+y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)),p=In+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),h=.5*y+l/p,d=1,u){case 7:d*=y+6;case 6:d*=y+5;case 5:d*=y+4;case 4:d*=y+3;case 3:h+=D(d*=y+2)}else n<Cn?(v=D(n),g=Gn+(d=1/n)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=d*d),h=(n-.5)*(v-1)+g):h=n*(D(n)-1);return a&&(h=o-h),h}var Xn=.6931471803691238,Yn=1.9082149292705877e-10,qn=.41421356237309503,zn=-.2928932188134525,Bn=1.862645149230957e-9,Dn=5551115123125783e-32,Jn=9007199254740992,Kn=.6666666666666666;function Qn(t){var i,a,o,u,f,c,s,l,p,v;if(t<-1||r(t))return NaN;if(-1===t)return n;if(t===e)return t;if(0===t)return t;if(v=1,(o=t<0?-t:t)<qn){if(o<Bn)return o<Dn?t:t-t*t*.5;t>zn&&(v=0,u=t,a=1)}return 0!==v&&(o<Jn?(f=(v=((a=G(p=1+t))>>20)-P)>0?1-(p-t):t-(p-1),f/=p):(v=((a=G(p=t))>>20)-P,f=0),(a&=1048575)<434334?p=L(p,1072693248|a):(v+=1,p=L(p,1071644672|a),a=1048576-a>>2),u=p-1),i=.5*u*u,0===a?0===u?v*Xn+(f+=v*Yn):v*Xn-((l=i*(1-Kn*u))-(v*Yn+f)-u):(l=(s=(c=u/(2+u))*c)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(s),0===v?u-(i-c*(i+l)):v*Xn-(i-(c*(i+l)+(v*Yn+f))-u))}function rt(r){return J(r)===r}function et(r){return 0===r&&1/r===n}var nt=2.5066282746310007;function tt(r){return rt(r/2)}function it(r){return tt(r>0?r-1:r+1)}var at=Math.sqrt,ot=!0===T?0:1,ut=new N(1),ft=new d(ut.buffer);function ct(r,e){return ut[0]=r,ft[ot]=e>>>0,ut[0]}function st(r){return 0|r}var lt=1072693247,pt=1e300,vt=1e-300,gt=1048575,yt=1048576,dt=1072693248,ht=536870912,wt=524288,bt=20,mt=9007199254740992,Nt=.9617966939259756,At=.9617967009544373,_t=-7.028461650952758e-9,Et=[1,1.5],Ut=[0,.5849624872207642],St=[0,1.350039202129749e-8],kt=1.4426950408889634,xt=1.4426950216293335,It=1.9259629911266175e-8,Ft=.6931471805599453,jt=1048576,Tt=1071644672,Ot=20,Vt=.6931471824645996,$t=-1.904654299957768e-9,Gt=1072693247,Ht=1105199104,Wt=1139802112,Ct=1083179008,Lt=1072693248,Pt=1083231232,Mt=3230714880,Rt=31,Zt=1e300,Xt=1e-300,Yt=8008566259537294e-32,qt=[0,0],zt=[0,0];function Bt(a,o){var u,f,c,s,l,p,v,g,y,d,h,w,b,m;if(r(a)||r(o))return NaN;if(we.assign(o,qt,1,0),l=qt[0],0===qt[1]){if(0===o)return 1;if(1===o)return a;if(-1===o)return 1/a;if(.5===o)return at(a);if(-.5===o)return 1/at(a);if(2===o)return a*a;if(3===o)return a*a*a;if(4===o)return(a*=a)*a;if(t(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:i(r)<1==(n===e)?0:e}(a,o)}if(we.assign(a,qt,1,0),s=qt[0],0===qt[1]){if(0===s)return function(r,t){return t===n?e:t===e?0:t>0?it(t)?r:0:it(t)?me(e,r):e}(a,o);if(1===a)return 1;if(-1===a&&it(o))return-1;if(t(a))return a===n?Bt(-0,-o):o<0?0:e}if(a<0&&!1===rt(o))return(a-a)/(a-a);if(c=i(a),u=s&sr|0,f=l&sr|0,v=l>>>Rt|0,p=(p=s>>>Rt|0)&&it(o)?-1:1,f>Ht){if(f>Wt)return function(r,e){return(G(r)&sr)<=lt?e<0?pt*pt:vt*vt:e>0?pt*pt:vt*vt}(a,o);if(u<Gt)return 1===v?p*Zt*Zt:p*Xt*Xt;if(u>Lt)return 0===v?p*Zt*Zt:p*Xt*Xt;h=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*It-a*kt)-((t=ct(t=(o=xt*i)+u,0))-o),r[0]=t,r[1]=n,r}(zt,c)}else h=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,N,A,_;return m=0,n<yt&&(m-=53,n=G(e*=mt)),m+=(n>>bt)-P|0,n=(N=n&gt|0)|dt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=yt),o=ct(i=(w=(e=L(e,n))-(c=Et[A]))*(b=1/(e+c)),0),t=(n>>1|ht)+wt,f=L(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ct(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=ct(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=At*l,y=(v=_t*l+(b-(l-w))*Nt+St[A])-((g=ct(g=p+v+(s=Ut[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(zt,c,u);if(w=(d=(o-(g=ct(o,0)))*h[0]+o*h[1])+(y=g*h[0]),we.assign(w,qt,1,0),b=st(qt[0]),m=st(qt[1]),b>=Ct){if(0!=(b-Ct|m))return p*Zt*Zt;if(d+Yt>w-y)return p*Zt*Zt}else if((b&sr)>=Pt){if(0!=(b-Mt|m))return p*Xt*Xt;if(d<=w-y)return p*Xt*Xt}return w=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&sr|0)>>Ot)-P|0,c=0,s>Tt&&(i=L(0,((c=r+(jt>>l+1)>>>0)&~(pr>>(l=((c&sr)>>Ot)-P|0)))>>>0),c=(c&pr|jt)>>Ot-l>>>0,r<0&&(c=-c),e-=i),r=st(r=G(f=1-((f=(a=(i=ct(i=n+e,0))*Vt)+(o=(n-(i-e))*Ft+i*$t))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Ot>>>0)>>Ot<=0?xe(f,c):L(f,r)}(b,y,d),p*w}var Dt=.6931471803691238,Jt=1.9082149292705877e-10,Kt=1.4426950408889634,Qt=709.782712893384,ri=-745.1332191019411,ei=1/(1<<28),ni=-ei;function ti(t){var i;return r(t)||t===e?t:t===n?0:t>Qt?e:t<ri?0:t>ni&&t<ei?1+t:function(r,e,n){var t,i,a,o;return xe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(t-(i=Q(t<0?Kt*t-.5:Kt*t+.5))*Dt,i*Jt,i)}var ii=143.01608;function ai(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=ti(r),n=r>ii?(t=Bt(r,.5*r-.25))*(t/n):Bt(r,r-.5)/n,nt*n*e}var oi=.5772156649015329;function ui(r,e){return e/((1+oi*r)*r)}function fi(t){var a,o,u,f;if(rt(t)&&t<0||t===n||r(t))return NaN;if(0===t)return et(t)?n:e;if(t>171.61447887182297)return e;if(t<-170.5674972726612)return 0;if((o=i(t))>33)return t>=0?ai(t):(a=0==(1&(u=J(o)))?-1:1,(f=o-u)>.5&&(f=o-(u+=1)),f=o*Un(Sn*f),a*Sn/(i(f)*ai(o)));for(f=1;t>=3;)f*=t-=1;for(;t<0;){if(t>-1e-9)return ui(t,f);f/=t,t+=1}for(;t<2;){if(t<1e-9)return ui(t,f);f/=t,t+=1}return 2===t?f:f*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(t-=2)}function ci(n,t){return r(n)||r(t)?NaN:n===e||t===e?e:n===t&&0===n?function(r){return 0===r&&1/r===e}(n)?n:t:n>t?n:t}var si=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],li=si.length,pi=94906265.62425156,vi=3745194030963158e291;function gi(r){return r<10?NaN:r>=vi?0:r<pi?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<li;a++)n=t,i=e*(t=i)-n+si[a];return.5*(i-n)}(2*Bt(10/r,2)-1)/r:1/(12*r)}return function(t,i){var a,o,u,f,c;return c=i,o=r(f=t)||r(c)?NaN:f===n||c===n?n:f===c&&0===f?et(f)?f:c:f<c?f:c,u=ci(t,i),o<0?NaN:0===o?e:u===e?n:o>=10?(a=gi(o)+gi(u)-gi(o+u),-.5*D(u)+.9189385332046728+a+(o-.5)*D(o/(o+u))+u*Qn(-o/(o+u))):u>=10?(a=gi(u)-gi(o+u),Zn(o)+a+o-o*D(o+u)+(u-.5)*Qn(-o/(o+u))):D(fi(o)*(fi(u)/fi(o+u)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).betaln=e();
//# sourceMappingURL=index.js.map
