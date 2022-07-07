/*
 * [js-sha512]{@link https://github.com/emn178/js-sha512}
 *
 * @version 0.3.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof window?window:{},o=!e.JS_SHA512_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;o&&(e=global);var n=!e.JS_SHA512_NO_COMMON_JS&&"object"==typeof module&&module.exports,r="function"==typeof define&&define.amd,t="0123456789abcdef".split(""),s=[-2147483648,8388608,32768,128],a=[24,16,8,0],f=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],c=[],i=function(e){return h(e,384)},u=function(e){return h(e,256)},d=function(e){return h(e,224)},h=function(e,o){var n,r,i,u,d,h,_,p,l,v,S,b,w,O,m,y,A,J,N,j,C,g,x,H,M,D,E,k,q,z,B,F,G,I,K,L,P,Q,R,T,U,V,W,X,Y=!1,Z=0,$=0,ee=0,oe=e.length;384==o?(n=3418070365,r=3238371032,i=1654270250,u=914150663,d=2438529370,h=812702999,_=355462360,p=4144912697,l=1731405415,v=4290775857,S=2394180231,b=1750603025,w=3675008525,O=1694076839,m=1203062813,y=3204075428):256==o?(n=573645204,r=4230739756,i=2673172387,u=3360449730,d=596883563,h=1867755857,_=2520282905,p=1497426621,l=2519219938,v=2827943907,S=3193839141,b=1401305490,w=721525244,O=746961066,m=246885852,y=2177182882):224==o?(n=2352822216,r=424955298,i=1944164710,u=2312950998,d=502970286,h=855612546,_=1738396948,p=1479516111,l=258812777,v=2077511080,S=2011393907,b=79989058,w=1067287976,O=1780299464,m=286451373,y=2446758561):(n=1779033703,r=4089235720,i=3144134277,u=2227873595,d=1013904242,h=4271175723,_=2773480762,p=1595750129,l=1359893119,v=2917565137,S=2600822924,b=725511199,w=528734635,O=4215389547,m=1541459225,y=327033209,o=512),A=0;do{for(c[0]=A,c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=c[16]=c[17]=c[18]=c[19]=c[20]=c[21]=c[22]=c[23]=c[24]=c[25]=c[26]=c[27]=c[28]=c[29]=c[30]=c[31]=c[32]=0,N=$;oe>Z&&128>N;++Z)J=e.charCodeAt(Z),128>J?c[N>>2]|=J<<a[3&N++]:2048>J?(c[N>>2]|=(192|J>>6)<<a[3&N++],c[N>>2]|=(128|63&J)<<a[3&N++]):55296>J||J>=57344?(c[N>>2]|=(224|J>>12)<<a[3&N++],c[N>>2]|=(128|J>>6&63)<<a[3&N++],c[N>>2]|=(128|63&J)<<a[3&N++]):(J=65536+((1023&J)<<10|1023&e.charCodeAt(++Z)),c[N>>2]|=(240|J>>18)<<a[3&N++],c[N>>2]|=(128|J>>12&63)<<a[3&N++],c[N>>2]|=(128|J>>6&63)<<a[3&N++],c[N>>2]|=(128|63&J)<<a[3&N++]);for(ee+=N-$,$=N-128,Z==oe&&(c[N>>2]|=s[3&N],++Z),A=c[32],Z>oe&&112>N&&(c[31]=ee<<3,Y=!0),j=32;160>j;j+=2)R=c[j-30],T=c[j-29],C=(R>>>1|T<<31)^(R>>>8|T<<24)^R>>>7,g=(T>>>1|R<<31)^(T>>>8|R<<24)^(T>>>7|R<<25),R=c[j-4],T=c[j-3],x=(R>>>19|T<<13)^(T>>>29|R<<3)^R>>>6,H=(T>>>19|R<<13)^(R>>>29|T<<3)^(T>>>6|R<<26),R=c[j-32],T=c[j-31],U=c[j-14],V=c[j-13],M=(65535&V)+(65535&T)+(65535&g)+(65535&H),D=(V>>>16)+(T>>>16)+(g>>>16)+(H>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(65535&C)+(65535&x)+(D>>>16),k=(U>>>16)+(R>>>16)+(C>>>16)+(x>>>16)+(E>>>16),c[j]=k<<16|65535&E,c[j+1]=D<<16|65535&M;var ne=n,re=r,te=i,se=u,ae=d,fe=h,ce=_,ie=p,ue=l,de=v,he=S,_e=b,pe=w,le=O,ve=m,Se=y;for(K=te&ae,L=se&fe,j=0;160>j;j+=8)C=(ne>>>28|re<<4)^(re>>>2|ne<<30)^(re>>>7|ne<<25),g=(re>>>28|ne<<4)^(ne>>>2|re<<30)^(ne>>>7|re<<25),x=(ue>>>14|de<<18)^(ue>>>18|de<<14)^(de>>>9|ue<<23),H=(de>>>14|ue<<18)^(de>>>18|ue<<14)^(ue>>>9|de<<23),q=ne&te,z=re&se,P=q^ne&ae^K,Q=z^re&fe^L,W=ue&he^~ue&pe,X=de&_e^~de&le,R=c[j],T=c[j+1],U=f[j],V=f[j+1],M=(65535&V)+(65535&T)+(65535&X)+(65535&H)+(65535&Se),D=(V>>>16)+(T>>>16)+(X>>>16)+(H>>>16)+(Se>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(65535&W)+(65535&x)+(65535&ve)+(D>>>16),k=(U>>>16)+(R>>>16)+(W>>>16)+(x>>>16)+(ve>>>16)+(E>>>16),R=k<<16|65535&E,T=D<<16|65535&M,M=(65535&Q)+(65535&g),D=(Q>>>16)+(g>>>16)+(M>>>16),E=(65535&P)+(65535&C)+(D>>>16),k=(P>>>16)+(C>>>16)+(E>>>16),U=k<<16|65535&E,V=D<<16|65535&M,M=(65535&ie)+(65535&T),D=(ie>>>16)+(T>>>16)+(M>>>16),E=(65535&ce)+(65535&R)+(D>>>16),k=(ce>>>16)+(R>>>16)+(E>>>16),ve=k<<16|65535&E,Se=D<<16|65535&M,M=(65535&V)+(65535&T),D=(V>>>16)+(T>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(D>>>16),k=(U>>>16)+(R>>>16)+(E>>>16),ce=k<<16|65535&E,ie=D<<16|65535&M,C=(ce>>>28|ie<<4)^(ie>>>2|ce<<30)^(ie>>>7|ce<<25),g=(ie>>>28|ce<<4)^(ce>>>2|ie<<30)^(ce>>>7|ie<<25),x=(ve>>>14|Se<<18)^(ve>>>18|Se<<14)^(Se>>>9|ve<<23),H=(Se>>>14|ve<<18)^(Se>>>18|ve<<14)^(ve>>>9|Se<<23),B=ce&ne,F=ie&re,P=B^ce&te^q,Q=F^ie&se^z,W=ve&ue^~ve&he,X=Se&de^~Se&_e,R=c[j+2],T=c[j+3],U=f[j+2],V=f[j+3],M=(65535&V)+(65535&T)+(65535&X)+(65535&H)+(65535&le),D=(V>>>16)+(T>>>16)+(X>>>16)+(H>>>16)+(le>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(65535&W)+(65535&x)+(65535&pe)+(D>>>16),k=(U>>>16)+(R>>>16)+(W>>>16)+(x>>>16)+(pe>>>16)+(E>>>16),R=k<<16|65535&E,T=D<<16|65535&M,M=(65535&Q)+(65535&g),D=(Q>>>16)+(g>>>16)+(M>>>16),E=(65535&P)+(65535&C)+(D>>>16),k=(P>>>16)+(C>>>16)+(E>>>16),U=k<<16|65535&E,V=D<<16|65535&M,M=(65535&fe)+(65535&T),D=(fe>>>16)+(T>>>16)+(M>>>16),E=(65535&ae)+(65535&R)+(D>>>16),k=(ae>>>16)+(R>>>16)+(E>>>16),pe=k<<16|65535&E,le=D<<16|65535&M,M=(65535&V)+(65535&T),D=(V>>>16)+(T>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(D>>>16),k=(U>>>16)+(R>>>16)+(E>>>16),ae=k<<16|65535&E,fe=D<<16|65535&M,C=(ae>>>28|fe<<4)^(fe>>>2|ae<<30)^(fe>>>7|ae<<25),g=(fe>>>28|ae<<4)^(ae>>>2|fe<<30)^(ae>>>7|fe<<25),x=(pe>>>14|le<<18)^(pe>>>18|le<<14)^(le>>>9|pe<<23),H=(le>>>14|pe<<18)^(le>>>18|pe<<14)^(pe>>>9|le<<23),G=ae&ce,I=fe&ie,P=G^ae&ne^B,Q=I^fe&re^F,W=pe&ve^~pe&ue,X=le&Se^~le&de,R=c[j+4],T=c[j+5],U=f[j+4],V=f[j+5],M=(65535&V)+(65535&T)+(65535&X)+(65535&H)+(65535&_e),D=(V>>>16)+(T>>>16)+(X>>>16)+(H>>>16)+(_e>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(65535&W)+(65535&x)+(65535&he)+(D>>>16),k=(U>>>16)+(R>>>16)+(W>>>16)+(x>>>16)+(he>>>16)+(E>>>16),R=k<<16|65535&E,T=D<<16|65535&M,M=(65535&Q)+(65535&g),D=(Q>>>16)+(g>>>16)+(M>>>16),E=(65535&P)+(65535&C)+(D>>>16),k=(P>>>16)+(C>>>16)+(E>>>16),U=k<<16|65535&E,V=D<<16|65535&M,M=(65535&se)+(65535&T),D=(se>>>16)+(T>>>16)+(M>>>16),E=(65535&te)+(65535&R)+(D>>>16),k=(te>>>16)+(R>>>16)+(E>>>16),he=k<<16|65535&E,_e=D<<16|65535&M,M=(65535&V)+(65535&T),D=(V>>>16)+(T>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(D>>>16),k=(U>>>16)+(R>>>16)+(E>>>16),te=k<<16|65535&E,se=D<<16|65535&M,C=(te>>>28|se<<4)^(se>>>2|te<<30)^(se>>>7|te<<25),g=(se>>>28|te<<4)^(te>>>2|se<<30)^(te>>>7|se<<25),x=(he>>>14|_e<<18)^(he>>>18|_e<<14)^(_e>>>9|he<<23),H=(_e>>>14|he<<18)^(_e>>>18|he<<14)^(he>>>9|_e<<23),K=te&ae,L=se&fe,P=K^te&ce^G,Q=L^se&ie^I,W=he&pe^~he&ve,X=_e&le^~_e&Se,R=c[j+6],T=c[j+7],U=f[j+6],V=f[j+7],M=(65535&V)+(65535&T)+(65535&X)+(65535&H)+(65535&de),D=(V>>>16)+(T>>>16)+(X>>>16)+(H>>>16)+(de>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(65535&W)+(65535&x)+(65535&ue)+(D>>>16),k=(U>>>16)+(R>>>16)+(W>>>16)+(x>>>16)+(ue>>>16)+(E>>>16),R=k<<16|65535&E,T=D<<16|65535&M,M=(65535&Q)+(65535&g),D=(Q>>>16)+(g>>>16)+(M>>>16),E=(65535&P)+(65535&C)+(D>>>16),k=(P>>>16)+(C>>>16)+(E>>>16),U=k<<16|65535&E,V=D<<16|65535&M,M=(65535&re)+(65535&T),D=(re>>>16)+(T>>>16)+(M>>>16),E=(65535&ne)+(65535&R)+(D>>>16),k=(ne>>>16)+(R>>>16)+(E>>>16),ue=k<<16|65535&E,de=D<<16|65535&M,M=(65535&V)+(65535&T),D=(V>>>16)+(T>>>16)+(M>>>16),E=(65535&U)+(65535&R)+(D>>>16),k=(U>>>16)+(R>>>16)+(E>>>16),ne=k<<16|65535&E,re=D<<16|65535&M;M=(65535&r)+(65535&re),D=(r>>>16)+(re>>>16)+(M>>>16),E=(65535&n)+(65535&ne)+(D>>>16),k=(n>>>16)+(ne>>>16)+(E>>>16),n=k<<16|65535&E,r=D<<16|65535&M,M=(65535&u)+(65535&se),D=(u>>>16)+(se>>>16)+(M>>>16),E=(65535&i)+(65535&te)+(D>>>16),k=(i>>>16)+(te>>>16)+(E>>>16),i=k<<16|65535&E,u=D<<16|65535&M,M=(65535&h)+(65535&fe),D=(h>>>16)+(fe>>>16)+(M>>>16),E=(65535&d)+(65535&ae)+(D>>>16),k=(d>>>16)+(ae>>>16)+(E>>>16),d=k<<16|65535&E,h=D<<16|65535&M,M=(65535&p)+(65535&ie),D=(p>>>16)+(ie>>>16)+(M>>>16),E=(65535&_)+(65535&ce)+(D>>>16),k=(_>>>16)+(ce>>>16)+(E>>>16),_=k<<16|65535&E,p=D<<16|65535&M,M=(65535&v)+(65535&de),D=(v>>>16)+(de>>>16)+(M>>>16),E=(65535&l)+(65535&ue)+(D>>>16),k=(l>>>16)+(ue>>>16)+(E>>>16),l=k<<16|65535&E,v=D<<16|65535&M,M=(65535&b)+(65535&_e),D=(b>>>16)+(_e>>>16)+(M>>>16),E=(65535&S)+(65535&he)+(D>>>16),k=(S>>>16)+(he>>>16)+(E>>>16),S=k<<16|65535&E,b=D<<16|65535&M,M=(65535&O)+(65535&le),D=(O>>>16)+(le>>>16)+(M>>>16),E=(65535&w)+(65535&pe)+(D>>>16),k=(w>>>16)+(pe>>>16)+(E>>>16),w=k<<16|65535&E,O=D<<16|65535&M,M=(65535&y)+(65535&Se),D=(y>>>16)+(Se>>>16)+(M>>>16),E=(65535&m)+(65535&ve)+(D>>>16),k=(m>>>16)+(ve>>>16)+(E>>>16),m=k<<16|65535&E,y=D<<16|65535&M}while(!Y);var be=t[n>>28&15]+t[n>>24&15]+t[n>>20&15]+t[n>>16&15]+t[n>>12&15]+t[n>>8&15]+t[n>>4&15]+t[15&n]+t[r>>28&15]+t[r>>24&15]+t[r>>20&15]+t[r>>16&15]+t[r>>12&15]+t[r>>8&15]+t[r>>4&15]+t[15&r]+t[i>>28&15]+t[i>>24&15]+t[i>>20&15]+t[i>>16&15]+t[i>>12&15]+t[i>>8&15]+t[i>>4&15]+t[15&i]+t[u>>28&15]+t[u>>24&15]+t[u>>20&15]+t[u>>16&15]+t[u>>12&15]+t[u>>8&15]+t[u>>4&15]+t[15&u]+t[d>>28&15]+t[d>>24&15]+t[d>>20&15]+t[d>>16&15]+t[d>>12&15]+t[d>>8&15]+t[d>>4&15]+t[15&d]+t[h>>28&15]+t[h>>24&15]+t[h>>20&15]+t[h>>16&15]+t[h>>12&15]+t[h>>8&15]+t[h>>4&15]+t[15&h]+t[_>>28&15]+t[_>>24&15]+t[_>>20&15]+t[_>>16&15]+t[_>>12&15]+t[_>>8&15]+t[_>>4&15]+t[15&_];return o>=256&&(be+=t[p>>28&15]+t[p>>24&15]+t[p>>20&15]+t[p>>16&15]+t[p>>12&15]+t[p>>8&15]+t[p>>4&15]+t[15&p]),o>=384&&(be+=t[l>>28&15]+t[l>>24&15]+t[l>>20&15]+t[l>>16&15]+t[l>>12&15]+t[l>>8&15]+t[l>>4&15]+t[15&l]+t[v>>28&15]+t[v>>24&15]+t[v>>20&15]+t[v>>16&15]+t[v>>12&15]+t[v>>8&15]+t[v>>4&15]+t[15&v]+t[S>>28&15]+t[S>>24&15]+t[S>>20&15]+t[S>>16&15]+t[S>>12&15]+t[S>>8&15]+t[S>>4&15]+t[15&S]+t[b>>28&15]+t[b>>24&15]+t[b>>20&15]+t[b>>16&15]+t[b>>12&15]+t[b>>8&15]+t[b>>4&15]+t[15&b]),512==o&&(be+=t[w>>28&15]+t[w>>24&15]+t[w>>20&15]+t[w>>16&15]+t[w>>12&15]+t[w>>8&15]+t[w>>4&15]+t[15&w]+t[O>>28&15]+t[O>>24&15]+t[O>>20&15]+t[O>>16&15]+t[O>>12&15]+t[O>>8&15]+t[O>>4&15]+t[15&O]+t[m>>28&15]+t[m>>24&15]+t[m>>20&15]+t[m>>16&15]+t[m>>12&15]+t[m>>8&15]+t[m>>4&15]+t[15&m]+t[y>>28&15]+t[y>>24&15]+t[y>>20&15]+t[y>>16&15]+t[y>>12&15]+t[y>>8&15]+t[y>>4&15]+t[15&y]),be},_=h;_.sha512=h,_.sha384=i,_.sha512_256=u,_.sha512_224=d,n?module.exports=_:(e.sha512=h,e.sha384=i,e.sha512_256=u,e.sha512_224=d,r&&define(function(){return _}))}();