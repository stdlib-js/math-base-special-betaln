// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}function u(r){return Math.abs(r)}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var a,c="function"==typeof Symbol?Symbol.toStringTag:"";a=f&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return i.call(r);t=r[c],f=c,n=null!=(u=r)&&o.call(u,f);try{r[c]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[c]=t:delete r[c],e}:function(r){return i.call(r)};var v=a,l="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var p,s="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,n,t;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var b=p,w="function"==typeof Float64Array;var N="function"==typeof Float64Array?Float64Array:null;var A,h="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(w&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var _=A,d="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null;var U,g="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(d&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j=U,I="function"==typeof Uint16Array;var O="function"==typeof Uint16Array?Uint16Array:null;var S,E="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,H={uint16:S,uint8:j};(F=new H.uint16(1))[0]=4660;var T=52===new H.uint8(F.buffer)[0],G=!0===T?1:0,P=new _(1),k=new b(P.buffer);function M(r){return P[0]=r,k[G]}var x=!0===T?1:0,L=new _(1),V=new b(L.buffer);function W(r,n){return L[0]=r,V[x]=n>>>0,L[0]}var Y=.6931471803691238,q=1.9082149292705877e-10;function C(n){var e,u,f,i,o,a,c,v,l,y,p,s;return 0===n?t:r(n)||n<0?NaN:(o=0,(u=M(n))<1048576&&(o-=54,u=M(n*=0x40000000000000)),u>=2146435072?n+n:(o+=(u>>20)-1023|0,o+=(v=(u&=1048575)+614244&1048576|0)>>20|0,c=(n=W(n,u|1072693248^v))-1,(1048575&2+u)<3?0===c?0===o?0:o*Y+o*q:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Y-(a-o*q-c)):(v=u-398458|0,l=440401-u|0,i=(p=(s=(y=c/(2+c))*y)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),f=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=f+i,(v|=l)>0?(e=.5*c*c,0===o?c-(e-y*(e+a)):o*Y-(e-(y*(e+a)+o*q)-c)):0===o?c-y*(c-a):o*Y-(y*(c-a)-o*q-c))))}var z=Math.floor,B=Math.ceil;function D(r){return r<0?B(r):z(r)}function J(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var K=-.16666666666666632;function Q(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(K+u*t):r-(u*(.5*n-e*t)-n-e*K)}var R,X,Z=!0===T?0:1,$=new _(1),rr=new b($.buffer);!0===T?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},tr=new _(1),er=new b(tr.buffer),ur=nr.HIGH,fr=nr.LOW;function ir(r,n){return er[ur]=r,er[fr]=n,tr[0]}var or,ar;!0===T?(or=1,ar=0):(or=0,ar=1);var cr={HIGH:or,LOW:ar},vr=new _(1),lr=new b(vr.buffer),yr=cr.HIGH,pr=cr.LOW;function sr(r,n){return vr[0]=n,r[0]=lr[yr],r[1]=lr[pr],r}function br(r,n){return 1===arguments.length?sr([0,0],r):sr(r,n)}var wr=[0,0];function Nr(r,n){var t,e;return br(wr,r),t=wr[0],t&=2147483647,e=M(n),ir(t|=e&=2147483648,wr[1])}var Ar="function"==typeof Object.defineProperty?Object.defineProperty:null;var hr,_r=Object.defineProperty,dr=Object.prototype,mr=dr.toString,Ur=dr.__defineGetter__,gr=dr.__defineSetter__,jr=dr.__lookupGetter__,Ir=dr.__lookupSetter__;hr=function(){try{return Ar({},"x",{}),!0}catch(r){return!1}}()?_r:function(r,n,t){var e,u,f,i;if("object"!=typeof r||null===r||"[object Array]"===mr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===mr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(jr.call(r,n)||Ir.call(r,n)?(e=r.__proto__,r.__proto__=dr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),f="get"in t,i="set"in t,u&&(f||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&Ur&&Ur.call(r,n,t.get),i&&gr&&gr.call(r,n,t.set),r};function Or(n,t,f,i){return r(n)||e(n)?(t[i]=n,t[i+f]=0,t):0!==n&&u(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+f]=-52,t):(t[i]=n,t[i+f]=0,t)}hr((function(r){return Or(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Or});var Sr=[0,0],Er=[0,0];function Fr(u,f){var i,o;return 0===f||0===u||r(u)||e(u)?u:(Or(u,Sr,1,0),f+=Sr[1],f+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-1023|0}(u=Sr[0]),f<-1074?Nr(0,u):f>1023?u<0?t:n:(f<=-1023?(f+=52,o=2220446049250313e-31):o=1,br(Er,u),i=Er[0],i&=2148532223,o*ir(i|=f+1023<<20,Er[1])))}function Hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Tr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=5.960464477539063e-8,kr=Hr(20),Mr=Hr(20),xr=Hr(20),Lr=Hr(20);function Vr(r,n,t,e,u,f,i,o,a){var c,v,l,y,p,s,b,w,N;for(y=f,N=e[t],w=t,p=0;w>0;p++)v=Pr*N|0,Lr[p]=N-16777216*v|0,N=e[w-1]+v,w-=1;if(N=Fr(N,u),N-=8*z(.125*N),N-=b=0|N,l=0,u>0?(b+=p=Lr[t-1]>>24-u,Lr[t-1]-=p<<24-u,l=Lr[t-1]>>23-u):0===u?l=Lr[t-1]>>23:N>=.5&&(l=2),l>0){for(b+=1,c=0,p=0;p<t;p++)w=Lr[p],0===c?0!==w&&(c=1,Lr[p]=16777216-w):Lr[p]=16777215-w;if(u>0)switch(u){case 1:Lr[t-1]&=8388607;break;case 2:Lr[t-1]&=4194303}2===l&&(N=1-N,0!==c&&(N-=Fr(1,u)))}if(0===N){for(w=0,p=t-1;p>=f;p--)w|=Lr[p];if(0===w){for(s=1;0===Lr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Tr[i+p],v=0,w=0;w<=o;w++)v+=r[w]*a[o+(p-w)];e[p]=v}return Vr(r,n,t+=s,e,u,f,i,o,a)}}if(0===N)for(t-=1,u-=24;0===Lr[t];)t-=1,u-=24;else(N=Fr(N,-u))>=16777216?(v=Pr*N|0,Lr[t]=N-16777216*v|0,u+=24,Lr[t+=1]=v):Lr[t]=0|N;for(v=Fr(1,u),p=t;p>=0;p--)e[p]=v*Lr[p],v*=Pr;for(p=t;p>=0;p--){for(v=0,s=0;s<=y&&s<=t-p;s++)v+=Gr[s]*e[p+s];xr[t-p]=v}for(v=0,p=t;p>=0;p--)v+=xr[p];for(n[0]=0===l?v:-v,v=xr[0]-v,p=1;p<=t;p++)v+=xr[p];return n[1]=0===l?v:-v,7&b}function Wr(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)kr[a]=c<0?0:Tr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*kr[i+(a-c)];Mr[a]=u}return 4,Vr(r,n,4,Mr,o,4,f,i,kr)}var Yr=Math.round;function qr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Yr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(M(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(M(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Cr=1.5707963267341256,zr=6077100506506192e-26,Br=2*zr,Dr=4*zr,Jr=[0,0,0],Kr=[0,0];function Qr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?qr(r,u,n):u<=1073928572?r>0?(a=r-Cr,n[0]=a-zr,n[1]=a-n[0]-zr,1):(a=r+Cr,n[0]=a+zr,n[1]=a-n[0]+zr,-1):r>0?(a=r-2*Cr,n[0]=a-Br,n[1]=a-n[0]-Br,2):(a=r+2*Cr,n[0]=a+Br,n[1]=a-n[0]+Br,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?qr(r,u,n):r>0?(a=r-3*Cr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Cr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?qr(r,u,n):r>0?(a=r-4*Cr,n[0]=a-Dr,n[1]=a-n[0]-Dr,4):(a=r+4*Cr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-4);if(u<1094263291)return qr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return $[0]=r,rr[Z]}(r),a=ir(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Jr[i]=0|a,a=16777216*(a-Jr[i]);for(Jr[2]=a,f=3;0===Jr[f-1];)f-=1;return o=Wr(Jr,Kr,e,f),r<0?(n[0]=-Kr[0],n[1]=-Kr[1],-o):(n[0]=Kr[0],n[1]=Kr[1],o)}var Rr=[0,0];function Xr(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1044381696?1:J(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Rr)){case 0:return J(Rr[0],Rr[1]);case 1:return-Q(Rr[0],Rr[1]);case 2:return-J(Rr[0],Rr[1]);default:return Q(Rr[0],Rr[1])}}var Zr=[0,0];function $r(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Q(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Zr)){case 0:return Q(Zr[0],Zr[1]);case 1:return J(Zr[0],Zr[1]);case 2:return-Q(Zr[0],Zr[1]);default:return-J(Zr[0],Zr[1])}}var rn=3.141592653589793;var nn=1.4616321449683622,tn=1.4616321449683622;function en(t){var f,i,o,a,c,v,l,y,p,s,b,w,N;if(r(t)||e(t))return t;if(0===t)return n;if(t<0?(f=!0,t=-t):f=!1,t<8470329472543003e-37)return-C(t);if(f){if(t>=4503599627370496)return n;if(p=function(n){var t,f;return r(n)||e(n)?NaN:0===(t=u(f=n%2))||1===t?Nr(0,f):t<.25?$r(rn*f):t<.75?Nr(Xr(rn*(t=.5-t)),f):t<1.25?(f=Nr(1,f)-f,$r(rn*f)):t<1.75?-Nr(Xr(rn*(t-=1.5)),f):(f-=Nr(2,f),$r(rn*f))}(t),0===p)return n;i=C(rn/u(p*t))}if(1===t||2===t)return 0;if(t<2)switch(t<=.9?(N=-C(t),t>=nn-1+.27?(b=1-t,o=0):t>=nn-1-.27?(b=t-(tn-1),o=1):(b=t,o=2)):(N=0,t>=nn+.27?(b=2-t,o=0):t>=nn-.27?(b=t-tn,o=1):(b=t-1,o=2)),o){case 0:v=.07721566490153287+(w=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(w),c=w*(.3224670334241136+w*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(w)),N+=(l=b*v+c)-.5*b;break;case 1:v=.48383612272381005+(s=(w=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),c=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,a=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),N+=-.12148629053584961+(l=w*v-(-3638676997039505e-33-s*(c+b*a)));break;case 2:v=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),c=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),N+=-.5*b+v/c}else if(t<8)switch(l=(b=t-(o=D(t)))*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),y=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),N=.5*b+l/y,w=1,o){case 7:w*=b+6;case 6:w*=b+5;case 5:w*=b+4;case 4:w*=b+3;case 3:N+=C(w*=b+2)}else t<0x400000000000000?(p=C(t),s=.4189385332046727+(w=1/t)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=w*w),N=(t-.5)*(p-1)+s):N=t*(C(t)-1);return f&&(N=i-N),N}var un=.6931471803691238,fn=1.9082149292705877e-10;function on(e){var u,f,i,o,a,c,v,l,y,p;if(e<-1||r(e))return NaN;if(-1===e)return t;if(e===n)return e;if(0===e)return e;if(p=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(p=0,o=e,f=1)}return 0!==p&&(i<9007199254740992?(a=(p=((f=M(y=1+e))>>20)-1023)>0?1-(y-e):e-(y-1),a/=y):(p=((f=M(y=e))>>20)-1023,a=0),(f&=1048575)<434334?y=W(y,1072693248|f):(p+=1,y=W(y,1071644672|f),f=1048576-f>>2),o=y-1),u=.5*o*o,0===f?0===o?p*un+(a+=p*fn):p*un-((l=u*(1-.6666666666666666*o))-(p*fn+a)-o):(l=(v=(c=o/(2+o))*c)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(v),0===p?o-(u-c*(u+l)):p*un-(u-(c*(u+l)+(p*fn+a))-o))}function an(r){return z(r)===r}function cn(r){return 0===r&&1/r===t}function vn(r){return an(r/2)}function ln(r){return vn(r>0?r-1:r+1)}var yn=Math.sqrt,pn=!0===T?0:1,sn=new _(1),bn=new b(sn.buffer);function wn(r,n){return sn[0]=r,bn[pn]=n>>>0,sn[0]}function Nn(r){return 0|r}var An=[1,1.5],hn=[0,.5849624872207642],_n=[0,1.350039202129749e-8];var dn=1e300,mn=1e-300,Un=[0,0],gn=[0,0];function jn(f,i){var o,a,c,v,l,y,p,s,b,w,N,A,h,_;if(r(f)||r(i))return NaN;if(br(Un,i),l=Un[0],0===Un[1]){if(0===i)return 1;if(1===i)return f;if(-1===i)return 1/f;if(.5===i)return yn(f);if(-.5===i)return 1/yn(f);if(2===i)return f*f;if(3===i)return f*f*f;if(4===i)return(f*=f)*f;if(e(i))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(t===n)?0:n}(f,i)}if(br(Un,f),v=Un[0],0===Un[1]){if(0===v)return function(r,e){return e===t?n:e===n?0:e>0?ln(e)?r:0:ln(e)?Nr(n,r):n}(f,i);if(1===f)return 1;if(-1===f&&ln(i))return-1;if(e(f))return f===t?jn(-0,-i):i<0?0:n}if(f<0&&!1===an(i))return(f-f)/(f-f);if(c=u(f),o=2147483647&v|0,a=2147483647&l|0,p=l>>>31|0,y=(y=v>>>31|0)&&ln(i)?-1:1,a>1105199104){if(a>1139802112)return function(r,n){return(2147483647&M(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(f,i);if(o<1072693247)return 1===p?y*dn*dn:y*mn*mn;if(o>1072693248)return 0===p?y*dn*dn:y*mn*mn;N=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=wn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(gn,c)}else N=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p,s,b,w,N,A,h,_,d,m,U;return _=0,t<1048576&&(_-=53,t=M(n*=9007199254740992)),_+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,_+=1,t-=1048576),i=wn(u=(A=(n=W(n,t))-(c=An[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=W(0,e+=m<<18),N=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=wn(a=3+(f=i*i)+(N+=(o=h*(A-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(l=wn(l=(A=i*a)+(h=o*a+(N-(a-3-f))*u),0))+.9617966939259756*(h-(l-A))+_n[m])-((s=wn(s=(y=.9617967009544373*l)+p+(v=hn[m])+(w=_),0))-w-v-y),r[0]=s,r[1]=b,r}(gn,c,o);if(w=(i-(s=wn(i,0)))*N[0]+i*N[1],b=s*N[0],br(Un,A=w+b),h=Nn(Un[0]),_=Nn(Un[1]),h>=1083179008){if(0!=(h-1083179008|_))return y*dn*dn;if(w+8008566259537294e-32>A-b)return y*dn*dn}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|_))return y*mn*mn;if(w<=A-b)return y*mn*mn}return A=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=W(0,e)),r=Nn(r=M(c=1-((c=(i=.6931471824645996*(f=wn(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(p=f)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Fr(c,v):W(c,r)}(h,b,w),y*A}function In(e){var u;return r(e)||e===n?e:e===t?0:e>709.782712893384?n:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(r,n,t){var e,u,f,i;return Fr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(e-.6931471803691238*(u=D(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*u,u)}function On(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=In(r),2.5066282746310007*(t=r>143.01608?(e=jn(r,.5*r-.25))*(e/t):jn(r,r-.5)/t)*n}function Sn(r,n){return n/((1+.5772156649015329*r)*r)}function En(e){var f,i,o,a;if(an(e)&&e<0||e===t||r(e))return NaN;if(0===e)return cn(e)?t:n;if(e>171.61447887182297)return n;if(e<-170.5674972726612)return 0;if((i=u(e))>33)return e>=0?On(e):(f=0==(1&(o=z(i)))?-1:1,(a=i-o)>.5&&(a=i-(o+=1)),a=i*$r(rn*a),f*rn/(u(a)*On(i)));for(a=1;e>=3;)a*=e-=1;for(;e<0;){if(e>-1e-9)return Sn(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return Sn(e,a);a/=e,e+=1}return 2===e?a:a*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(e-=2)}function Fn(r){return 0===r&&1/r===n}var Hn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Tn=Hn.length;function Gn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Tn;f++)t=e,u=n*(e=u)-t+Hn[f];return.5*(u-t)}(2*jn(10/r,2)-1)/r:1/(12*r)}function Pn(e,u){var f,i,o;return i=function(e,u){var f,i,o,a;if(2===(f=arguments.length))return r(e)||r(u)?NaN:e===t||u===t?t:e===u&&0===e?cn(e)?e:u:e<u?e:u;for(i=n,a=0;a<f;a++){if(r(o=arguments[a])||o===t)return o;(o<i||o===i&&0===o&&cn(o))&&(i=o)}return i}(e,u),o=function(e,u){var f,i,o,a;if(2===(f=arguments.length))return r(e)||r(u)?NaN:e===n||u===n?n:e===u&&0===e?Fn(e)?e:u:e>u?e:u;for(i=t,a=0;a<f;a++){if(r(o=arguments[a])||o===n)return o;(o>i||o===i&&0===o&&Fn(o))&&(i=o)}return i}(e,u),i<0?NaN:0===i?n:o===n?t:i>=10?(f=Gn(i)+Gn(o)-Gn(i+o),-.5*C(o)+.9189385332046728+f+(i-.5)*C(i/(i+o))+o*on(-i/(i+o))):o>=10?(f=Gn(o)-Gn(i+o),en(i)+f+i-i*C(i+o)+(o-.5)*on(-i/(i+o))):C(En(i)*(En(o)/En(i+o)))}export{Pn as default};
//# sourceMappingURL=mod.js.map
