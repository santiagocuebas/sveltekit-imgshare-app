import{S as se,i as ie,s as re,k as n,a as h,q as A,l as f,m as _,c as m,r as H,h as u,C as te,n as a,b as oe,D as e,u as M,G as ae}from"./index.4c08a5a5.js";import{D as le}from"./config.c392556e.js";function ne(o){let t,r,v,p,Q,i,k,C=o[0].title+"",R,T,d,D,U,P=o[0].totalComments+"",V,W,g,b,X,q=o[0].like.length+"",j,Y,E,w,Z,G=o[0].dislike.length+"",y,$,I,S,x,z=o[0].views+"",B,F,J;return{c(){t=n("a"),r=n("img"),Q=h(),i=n("div"),k=n("h2"),R=A(C),T=h(),d=n("p"),D=n("i"),U=h(),V=A(P),W=h(),g=n("p"),b=n("i"),X=h(),j=A(q),Y=h(),E=n("p"),w=n("i"),Z=h(),y=A(G),$=h(),I=n("p"),S=n("i"),x=h(),B=A(z),this.h()},l(s){t=f(s,"A",{href:!0,title:!0,class:!0});var l=_(t);r=f(l,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),Q=m(l),i=f(l,"DIV",{class:!0});var c=_(i);k=f(c,"H2",{class:!0});var ee=_(k);R=H(ee,C),ee.forEach(u),T=m(c),d=f(c,"P",{});var K=_(d);D=f(K,"I",{class:!0}),_(D).forEach(u),U=m(K),V=H(K,P),K.forEach(u),W=m(c),g=f(c,"P",{});var L=_(g);b=f(L,"I",{class:!0}),_(b).forEach(u),X=m(L),j=H(L,q),L.forEach(u),Y=m(c),E=f(c,"P",{});var N=_(E);w=f(N,"I",{class:!0}),_(w).forEach(u),Z=m(N),y=H(N,G),N.forEach(u),$=m(c),I=f(c,"P",{});var O=_(I);S=f(O,"I",{class:!0}),_(S).forEach(u),x=m(O),B=H(O,z),O.forEach(u),c.forEach(u),l.forEach(u),this.h()},h(){te(r.src,v=le+"/uploads/"+o[0].filename)||a(r,"src",v),a(r,"alt",p=o[0].title),a(r,"loading","lazy"),a(r,"class","svelte-1t0kvsa"),a(k,"class","svelte-1t0kvsa"),a(D,"class","fa-solid fa-message"),a(b,"class","fa-solid fa-thumbs-up"),a(w,"class","fa-solid fa-thumbs-down"),a(S,"class","fa-solid fa-eye"),a(i,"class","svelte-1t0kvsa"),a(t,"href",F="/gallery/"+o[0].id),a(t,"title",J=o[0].title),a(t,"class","svelte-1t0kvsa")},m(s,l){oe(s,t,l),e(t,r),e(t,Q),e(t,i),e(i,k),e(k,R),e(i,T),e(i,d),e(d,D),e(d,U),e(d,V),e(i,W),e(i,g),e(g,b),e(g,X),e(g,j),e(i,Y),e(i,E),e(E,w),e(E,Z),e(E,y),e(i,$),e(i,I),e(I,S),e(I,x),e(I,B)},p(s,[l]){l&1&&!te(r.src,v=le+"/uploads/"+s[0].filename)&&a(r,"src",v),l&1&&p!==(p=s[0].title)&&a(r,"alt",p),l&1&&C!==(C=s[0].title+"")&&M(R,C),l&1&&P!==(P=s[0].totalComments+"")&&M(V,P),l&1&&q!==(q=s[0].like.length+"")&&M(j,q),l&1&&G!==(G=s[0].dislike.length+"")&&M(y,G),l&1&&z!==(z=s[0].views+"")&&M(B,z),l&1&&F!==(F="/gallery/"+s[0].id)&&a(t,"href",F),l&1&&J!==(J=s[0].title)&&a(t,"title",J)},i:ae,o:ae,d(s){s&&u(t)}}}function fe(o,t,r){let{image:v}=t;return o.$$set=p=>{"image"in p&&r(0,v=p.image)},[v]}class ce extends se{constructor(t){super(),ie(this,t,fe,ne,re,{image:0})}}export{ce as I};
