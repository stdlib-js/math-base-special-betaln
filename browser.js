// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n=function(r){return r!=r},t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,u=t,f=e,i=function(r){return r===u||r===f},o=function(r){return Math.abs(r)},c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,y=a,l=function(r){return y.call(r)},v=Object.prototype.hasOwnProperty,s=function(r,n){return null!=r&&v.call(r,n)},N="function"==typeof Symbol?Symbol.toStringTag:"",p=s,w=N,b=a,h=l,A=function(r){var n,t,e;if(null==r)return b.call(r);t=r[w],n=p(r,w);try{r[w]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[w]=t:delete r[w],e},d=c&&"symbol"==typeof Symbol.toStringTag?A:h,U=d,m="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,g=function(r){return m&&r instanceof Uint32Array||"[object Uint32Array]"===U(r)},F=I,S=function(){var r,n;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),r=g(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},H="function"==typeof Uint32Array?Uint32Array:void 0,O=function(){throw new Error("not implemented")},T=S()?H:O,j=d,E="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,M=function(r){return E&&r instanceof Float64Array||"[object Float64Array]"===j(r)},x=G,L=function(){var r,n;if("function"!=typeof x)return!1;try{n=new x([1,3.14,-3.14,NaN]),r=M(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},W="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},P=L()?W:k,V=d,Y="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,q=function(r){return Y&&r instanceof Uint8Array||"[object Uint8Array]"===V(r)},z=_,B=function(){var r,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,256,257]),r=q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},C="function"==typeof Uint8Array?Uint8Array:void 0,D=function(){throw new Error("not implemented")},J=B()?C:D,K=d,Q="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,X=function(r){return Q&&r instanceof Uint16Array||"[object Uint16Array]"===K(r)},Z=R,$=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),r=X(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},rr="function"==typeof Uint16Array?Uint16Array:void 0,nr=function(){throw new Error("not implemented")},tr={uint16:$()?rr:nr,uint8:J};(r=new tr.uint16(1))[0]=4660;var er,ur,fr=52===new tr.uint8(r.buffer)[0],ir=T,or=!0===fr?1:0,cr=new P(1),ar=new ir(cr.buffer),yr=function(r){return cr[0]=r,ar[or]},lr=T,vr=!0===fr?1:0,sr=new P(1),Nr=new lr(sr.buffer),pr=function(r,n){return sr[0]=r,Nr[vr]=n>>>0,sr[0]},wr=pr,br=yr,hr=wr,Ar=n,dr=e,Ur=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},mr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Ir=.6931471803691238,gr=1.9082149292705877e-10,Fr=1048575,Sr=function(r){var n,t,e,u,f,i,o,c,a,y,l;return 0===r?dr:Ar(r)||r<0?NaN:(u=0,(t=br(r))<1048576&&(u-=54,t=br(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=614244+(t&=Fr)&1048576|0)>>20|0,i=(r=hr(r,t|1072693248^o))-1,(Fr&2+t)<3?0===i?0===u?0:u*Ir+u*gr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Ir-(f-u*gr-i)):(o=t-398458|0,c=440401-t|0,e=(y=(l=(a=i/(2+i))*a)*l)*Ur(y),f=l*mr(y)+e,(o|=c)>0?(n=.5*i*i,0===u?i-(n-a*(n+f)):u*Ir-(n-(a*(n+f)+u*gr)-i)):0===u?i-a*(i-f):u*Ir-(a*(i-f)-u*gr-i))))},Hr=Math.floor,Or=Math.ceil,Tr=Hr,jr=Or,Er=function(r){return r<0?jr(r):Tr(r)},Gr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Mr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7},xr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*Gr(f),e+=u*u*Mr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},Lr=-.16666666666666632,Wr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Lr+u*t):r-(u*(.5*n-e*t)-n-e*Lr)},kr=T,Pr=!0===fr?0:1,Vr=new P(1),Yr=new kr(Vr.buffer),_r=function(r){return Vr[0]=r,Yr[Pr]};!0===fr?(er=1,ur=0):(er=0,ur=1);var qr,zr,Br=T,Cr={HIGH:er,LOW:ur},Dr=new P(1),Jr=new Br(Dr.buffer),Kr=Cr.HIGH,Qr=Cr.LOW,Rr=function(r,n){return Jr[Kr]=r,Jr[Qr]=n,Dr[0]},Xr=Rr;!0===fr?(qr=1,zr=0):(qr=0,zr=1);var Zr=T,$r={HIGH:qr,LOW:zr},rn=new P(1),nn=new Zr(rn.buffer),tn=$r.HIGH,en=$r.LOW,un=function(r,n){return rn[0]=n,r[0]=nn[tn],r[1]=nn[en],r},fn=function(r,n){return 1===arguments.length?un([0,0],r):un(r,n)},on=fn,cn=on,an=yr,yn=Xr,ln=[0,0],vn=function(r,n){var t,e;return cn(ln,r),t=ln[0],t&=2147483647,e=an(n),yn(t|=e&=2147483648,ln[1])},sn=i,Nn=n,pn=o,wn=function(r,n){return Nn(n)||sn(n)?(r[0]=n,r[1]=0,r):0!==n&&pn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},bn=function(r,n){return 1===arguments.length?wn([0,0],r):wn(r,n)},hn=yr,An=function(r){var n=hn(r);return(n=(2146435072&n)>>>20)-1023|0},dn=t,Un=e,mn=n,In=i,gn=vn,Fn=bn,Sn=An,Hn=on,On=Xr,Tn=[0,0],jn=[0,0],En=function(r,n){var t,e;return 0===n||0===r||mn(r)||In(r)?r:(Fn(Tn,r),n+=Tn[1],(n+=Sn(r=Tn[0]))<-1074?gn(0,r):n>1023?r<0?Un:dn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Hn(jn,r),t=jn[0],t&=2148532223,e*On(t|=n+1023<<20,jn[1])))},Gn=En,Mn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t},xn=Hr,Ln=Gn,Wn=function(r){return Mn(0,r)},kn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Pn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vn=16777216,Yn=5.960464477539063e-8,_n=Wn(20),qn=Wn(20),zn=Wn(20),Bn=Wn(20);function Cn(r,n,t,e,u,f,i,o,c){var a,y,l,v,s,N,p,w,b;for(v=f,b=e[t],w=t,s=0;w>0;s++)y=Yn*b|0,Bn[s]=b-Vn*y|0,b=e[w-1]+y,w-=1;if(b=Ln(b,u),b-=8*xn(.125*b),b-=p=0|b,l=0,u>0?(p+=s=Bn[t-1]>>24-u,Bn[t-1]-=s<<24-u,l=Bn[t-1]>>23-u):0===u?l=Bn[t-1]>>23:b>=.5&&(l=2),l>0){for(p+=1,a=0,s=0;s<t;s++)w=Bn[s],0===a?0!==w&&(a=1,Bn[s]=16777216-w):Bn[s]=16777215-w;if(u>0)switch(u){case 1:Bn[t-1]&=8388607;break;case 2:Bn[t-1]&=4194303}2===l&&(b=1-b,0!==a&&(b-=Ln(1,u)))}if(0===b){for(w=0,s=t-1;s>=f;s--)w|=Bn[s];if(0===w){for(N=1;0===Bn[f-N];N++);for(s=t+1;s<=t+N;s++){for(c[o+s]=kn[i+s],y=0,w=0;w<=o;w++)y+=r[w]*c[o+(s-w)];e[s]=y}return Cn(r,n,t+=N,e,u,f,i,o,c)}}if(0===b)for(t-=1,u-=24;0===Bn[t];)t-=1,u-=24;else(b=Ln(b,-u))>=Vn?(y=Yn*b|0,Bn[t]=b-Vn*y|0,u+=24,Bn[t+=1]=y):Bn[t]=0|b;for(y=Ln(1,u),s=t;s>=0;s--)e[s]=y*Bn[s],y*=Yn;for(s=t;s>=0;s--){for(y=0,N=0;N<=v&&N<=t-s;N++)y+=Pn[N]*e[s+N];zn[t-s]=y}for(y=0,s=t;s>=0;s--)y+=zn[s];for(n[0]=0===l?y:-y,y=zn[0]-y,s=1;s<=t;s++)y+=zn[s];return n[1]=0===l?y:-y,7&p}var Dn=function(r,n,t,e){var u,f,i,o,c,a,y;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),a=f-(i=e-1),y=i+4,c=0;c<=y;c++)_n[c]=a<0?0:kn[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=i;a++)u+=r[a]*_n[i+(c-a)];qn[c]=u}return Cn(r,n,4,qn,o,4,f,i,_n)},Jn=Math.round,Kn=yr,Qn=yr,Rn=_r,Xn=Xr,Zn=Dn,$n=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Jn(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(Kn(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(Kn(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},rt=1.5707963267341256,nt=6077100506506192e-26,tt=2*nt,et=3*nt,ut=4*nt,ft=[0,0,0],it=[0,0],ot=function(r,n){var t,e,u,f,i,o,c;if((u=2147483647&Qn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?$n(r,u,n):u<=1073928572?r>0?(c=r-rt,n[0]=c-nt,n[1]=c-n[0]-nt,1):(c=r+rt,n[0]=c+nt,n[1]=c-n[0]+nt,-1):r>0?(c=r-2*rt,n[0]=c-tt,n[1]=c-n[0]-tt,2):(c=r+2*rt,n[0]=c+tt,n[1]=c-n[0]+tt,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?$n(r,u,n):r>0?(c=r-3*rt,n[0]=c-et,n[1]=c-n[0]-et,3):(c=r+3*rt,n[0]=c+et,n[1]=c-n[0]+et,-3):1075388923===u?$n(r,u,n):r>0?(c=r-4*rt,n[0]=c-ut,n[1]=c-n[0]-ut,4):(c=r+4*rt,n[0]=c+ut,n[1]=c-n[0]+ut,-4);if(u<1094263291)return $n(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Rn(r),c=Xn(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)ft[i]=0|c,c=16777216*(c-ft[i]);for(ft[2]=c,f=3;0===ft[f-1];)f-=1;return o=Zn(ft,it,e,f),r<0?(n[0]=-it[0],n[1]=-it[1],-o):(n[0]=it[0],n[1]=it[1],o)},ct=yr,at=xr,yt=Wr,lt=ot,vt=[0,0],st=yr,Nt=xr,pt=Wr,wt=ot,bt=[0,0],ht=function(r){var n;if(n=st(r),(n&=2147483647)<=1072243195)return n<1045430272?r:pt(r,0);if(n>=2146435072)return NaN;switch(3&wt(r,bt)){case 0:return pt(bt[0],bt[1]);case 1:return Nt(bt[0],bt[1]);case 2:return-pt(bt[0],bt[1]);default:return-Nt(bt[0],bt[1])}},At=3.141592653589793,dt=n,Ut=i,mt=function(r){var n;if(n=ct(r),(n&=2147483647)<=1072243195)return n<1044381696?1:at(r,0);if(n>=2146435072)return NaN;switch(3&lt(r,vt)){case 0:return at(vt[0],vt[1]);case 1:return-yt(vt[0],vt[1]);case 2:return-at(vt[0],vt[1]);default:return yt(vt[0],vt[1])}},It=ht,gt=o,Ft=vn,St=At,Ht=n,Ot=i,Tt=o,jt=Sr,Et=Er,Gt=function(r){var n,t;return dt(r)||Ut(r)?NaN:0===(n=gt(t=r%2))||1===n?Ft(0,t):n<.25?It(St*t):n<.75?Ft(mt(St*(n=.5-n)),t):n<1.25?(t=Ft(1,t)-t,It(St*t)):n<1.75?-Ft(mt(St*(n-=1.5)),t):(t-=Ft(2,t),It(St*t))},Mt=t,xt=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Lt=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Wt=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},kt=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Pt=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Vt=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Yt=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},_t=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},qt=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},zt=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},Bt=1.4616321449683622,Ct=1.4616321449683622,Dt=function(r){var n,t,e,u,f,i,o,c;if(Ht(r)||Ot(r))return r;if(0===r)return Mt;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-jt(r);if(n){if(r>=4503599627370496)return Mt;if(0===(u=Gt(r)))return Mt;t=jt(3.141592653589793/Tt(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(c=-jt(r),r>=Bt-1+.27?(i=1-r,e=0):r>=Bt-1-.27?(i=r-(Ct-1),e=1):(i=r,e=2)):(c=0,r>=Bt+.27?(i=2-r,e=0):r>=Bt-.27?(i=r-Ct,e=1):(i=r-1,e=2)),e){case 0:c+=i*(.07721566490153287+(o=i*i)*xt(o))+o*(.3224670334241136+o*Lt(o))-.5*i;break;case 1:c+=(o=i*i)*(.48383612272381005+(f=o*i)*Pt(f))-(-3638676997039505e-33-f*(f*Vt(f)-.1475877229945939+i*(.06462494023913339+f*Yt(f))))-.12148629053584961;break;case 2:c+=-.5*i+i*(i*_t(i)-.07721566490153287)/(1+i*qt(i))}else if(r<8)switch(c=.5*(i=r-(e=Et(r)))+i*(i*kt(i)-.07721566490153287)/(1+i*Wt(i)),o=1,e){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:c+=jt(o*=i+2)}else c=r<0x400000000000000?(r-.5)*((u=jt(r))-1)+(f=.4189385332046727+(o=1/r)*zt(i=o*o)):r*(jt(r)-1);return n&&(c=t-c),c},Jt=n,Kt=yr,Qt=wr,Rt=t,Xt=e,Zt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},$t=.6931471803691238,re=1.9082149292705877e-10,ne=function(r){var n,t,e,u,f,i,o,c,a,y;if(r<-1||Jt(r))return NaN;if(-1===r)return Xt;if(r===Rt)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(f=(y=((t=Kt(a=1+r))>>20)-1023)>0?1-(a-r):r-(a-1),f/=a):(y=((t=Kt(a=r))>>20)-1023,f=0),(t&=1048575)<434334?a=Qt(a,1072693248|t):(y+=1,a=Qt(a,1071644672|t),t=1048576-t>>2),u=a-1),n=.5*u*u,0===t?0===u?y*$t+(f+=y*re):y*$t-((c=n*(1-.6666666666666666*u))-(y*re+f)-u):(c=(o=(i=u/(2+u))*i)*Zt(o),0===y?u-(n-i*(n+c)):y*$t-(n-(i*(n+c)+(y*re+f))-u))},te=Hr,ee=function(r){return te(r)===r},ue=e,fe=function(r){return 0===r&&1/r===ue},ie=ee,oe=function(r){return ie(r/2)},ce=function(r){return oe(r>0?r-1:r+1)},ae=Math.sqrt,ye=T,le=!0===fr?0:1,ve=new P(1),se=new ye(ve.buffer),Ne=function(r,n){return ve[0]=r,se[le]=n>>>0,ve[0]},pe=function(r){return 0|r},we=ce,be=vn,he=e,Ae=t,de=yr,Ue=o,me=t,Ie=yr,ge=Ne,Fe=wr,Se=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},He=1048576,Oe=[1,1.5],Te=[0,.5849624872207642],je=[0,1.350039202129749e-8],Ee=Ne,Ge=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Me=yr,xe=wr,Le=Ne,We=pe,ke=Gn,Pe=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Ve=2147483647,Ye=1048575,_e=1048576,qe=n,ze=ce,Be=i,Ce=ee,De=ae,Je=o,Ke=on,Qe=Ne,Re=pe,Xe=e,Ze=t,$e=function(r,n){return n===he?Ae:n===Ae?0:n>0?we(n)?r:0:we(n)?be(Ae,r):Ae},ru=function(r,n){return(2147483647&de(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},nu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ue(r)<1==(n===me)?0:me},tu=function(r,n,t){var e,u,f,i,o,c,a,y,l,v,s,N,p,w,b,h,A,d,U,m;return d=0,t<He&&(d-=53,t=Ie(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?m=0:U<767610?m=1:(m=0,d+=1,t-=He),e=524288+(t>>1|536870912),o=(A=1/((n=Fe(n,t))+(a=Oe[m])))*((h=n-a)-(i=ge(u=h*A,0))*(c=Fe(0,e+=m<<18))-i*(n-(c-a))),b=(f=u*u)*f*Se(f),c=ge(c=3+(f=i*i)+(b+=o*(i+u)),0),p=(s=-7.028461650952758e-9*(l=ge(l=(h=i*c)+(A=o*c+(b-(c-3-f))*u),0))+.9617966939259756*(A-(l-h))+je[m])-((N=ge(N=(v=.9617967009544373*l)+s+(y=Te[m])+(w=d),0))-w-y-v),r[0]=N,r[1]=p,r},eu=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*Ge(u)*1.4426950408889634)-((e=Ee(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},uu=function(r,n,t){var e,u,f,i,o,c,a,y,l;return l=((y=r&Ve|0)>>20)-1023|0,a=0,y>1071644672&&(u=xe(0,((a=r+(_e>>l+1)>>>0)&~(Ye>>(l=((a&Ve)>>20)-1023|0)))>>>0),a=(a&Ye|_e)>>20-l>>>0,r<0&&(a=-a),n-=u),o=(i=.6931471805599453*(t-((u=Le(u=t+n,0))-n))+-1.904654299957768e-9*u)-((c=(f=.6931471824645996*u)+i)-f),e=c-(u=c*c)*Pe(u),r=Me(c=1-(c*e/(e-2)-(o+c*o)-c)),r=We(r),c=(r+=a<<20>>>0)>>20<=0?ke(c,a):xe(c,r)},fu=2147483647,iu=1083179008,ou=1e300,cu=1e-300,au=[0,0],yu=[0,0],lu=function r(n,t){var e,u,f,i,o,c,a,y,l,v,s,N,p,w;if(qe(n)||qe(t))return NaN;if(Ke(au,t),o=au[0],0===au[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return De(n);if(-.5===t)return 1/De(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Be(t))return nu(n,t)}if(Ke(au,n),i=au[0],0===au[1]){if(0===i)return $e(n,t);if(1===n)return 1;if(-1===n&&ze(t))return-1;if(Be(n))return n===Xe?r(-0,-t):t<0?0:Ze}if(n<0&&!1===Ce(t))return(n-n)/(n-n);if(f=Je(n),e=i&fu|0,u=o&fu|0,a=o>>>31|0,c=(c=i>>>31|0)&&ze(t)?-1:1,u>1105199104){if(u>1139802112)return ru(n,t);if(e<1072693247)return 1===a?c*ou*ou:c*cu*cu;if(e>1072693248)return 0===a?c*ou*ou:c*cu*cu;s=eu(yu,f)}else s=tu(yu,f,e);if(v=(t-(y=Qe(t,0)))*s[0]+t*s[1],l=y*s[0],Ke(au,N=v+l),p=Re(au[0]),w=Re(au[1]),p>=iu){if(0!=(p-iu|w))return c*ou*ou;if(v+8008566259537294e-32>N-l)return c*ou*ou}else if((p&fu)>=1083231232){if(0!=(p-3230714880|w))return c*cu*cu;if(v<=N-l)return c*cu*cu}return c*(N=uu(p,l,v))},vu=lu,su=Gn,Nu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},pu=n,wu=Er,bu=e,hu=t,Au=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*Nu(u),su(1-(n-e*f/(2-f)-r),t)},du=1.4426950408889634,Uu=1/(1<<28),mu=vu,Iu=function(r){var n;return pu(r)||r===hu?r:r===bu?0:r>709.782712893384?hu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Uu?1+r:(n=wu(r<0?du*r-.5:du*r+.5),Au(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},gu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))},Fu=n,Su=ee,Hu=fe,Ou=o,Tu=Hr,ju=ht,Eu=t,Gu=e,Mu=At,xu=function(r){var n,t,e;return n=1+(n=1/r)*gu(n),t=Iu(r),2.5066282746310007*(t=r>143.01608?(e=mu(r,.5*r-.25))*(e/t):mu(r,r-.5)/t)*n},Lu=function(r,n){return n/((1+.5772156649015329*r)*r)},Wu=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)},ku=function(r){var n,t,e,u;if(Su(r)&&r<0||r===Gu||Fu(r))return NaN;if(0===r)return Hu(r)?Gu:Eu;if(r>171.61447887182297)return Eu;if(r<-170.5674972726612)return 0;if((t=Ou(r))>33)return r>=0?xu(r):(n=0==(1&(e=Tu(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*ju(Mu*u),n*Mu/(Ou(u)*xu(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Lu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Lu(r,u);u/=r,r+=1}return 2===r?u:u*Wu(r-=2)},Pu=t,Vu=function(r){return 0===r&&1/r===Pu},Yu=n,_u=e,qu=t,zu=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return Yu(r)||Yu(n)?NaN:r===qu||n===qu?qu:r===n&&0===r?Vu(r)?r:n:r>n?r:n;for(e=_u,f=0;f<t;f++){if(Yu(u=arguments[f])||u===qu)return u;(u>e||u===e&&0===u&&Vu(u))&&(e=u)}return e},Bu=zu,Cu=fe,Du=n,Ju=e,Ku=t,Qu=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return Du(r)||Du(n)?NaN:r===Ju||n===Ju?Ju:r===n&&0===r?Cu(r)?r:n:r<n?r:n;for(e=Ku,f=0;f<t;f++){if(Du(u=arguments[f])||u===Ju)return u;(u<e||u===e&&0===u&&Cu(u))&&(e=u)}return e},Ru=Qu,Xu=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Zu=Xu.length;function $u(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Zu;f++)t=e,u=n*(e=u)-t+Xu[f];return.5*(u-t)}(2*vu(10/r,2)-1)/r:1/(12*r)}return function(r,n){var u,f,i;return f=Ru(r,n),i=Bu(r,n),f<0?NaN:0===f?t:i===t?e:f>=10?(u=$u(f)+$u(i)-$u(f+i),-.5*Sr(i)+.9189385332046728+u+(f-.5)*Sr(f/(f+i))+i*ne(-f/(f+i))):i>=10?(u=$u(i)-$u(f+i),Dt(f)+u+f-f*Sr(f+i)+(i-.5)*ne(-f/(f+i))):Sr(ku(f)*(ku(i)/ku(f+i)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).betaln=n();
//# sourceMappingURL=browser.js.map
