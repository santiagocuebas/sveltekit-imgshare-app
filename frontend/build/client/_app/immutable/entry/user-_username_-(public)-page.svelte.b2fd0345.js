import{S as Z,i as j,s as F,y as d,z as b,A as k,g as m,d as g,B as v,w as H,Y as J,a as P,c as T,b as h,Z as K,h as _,e as y,v as z,f as C,k as w,q as V,l as N,m as B,r as Y,n as G,D as $,G as I,$ as L}from"../chunks/index.d4184e2c.js";import{B as M}from"../chunks/BoxGallery.d2547153.js";import{G as O}from"../chunks/Gallery.53b577ed.js";import{I as Q}from"../chunks/Image.bd22f5f8.js";import{N as R}from"../chunks/NavUser.d2bc60a6.js";function U(u,e,r){const a=u.slice();return a[2]=e[r],a}function W(u){let e,r,a,t,s=u[0].user&&A(u);return{c(){e=w("div"),r=w("p"),a=V("This user hasn't uploaded any image yet"),t=P(),s&&s.c(),this.h()},l(n){e=N(n,"DIV",{class:!0});var o=B(e);r=N(o,"P",{});var l=B(r);a=Y(l,"This user hasn't uploaded any image yet"),l.forEach(_),t=T(o),s&&s.l(o),o.forEach(_),this.h()},h(){G(e,"class","user-message user-column")},m(n,o){h(n,e,o),$(e,r),$(r,a),$(e,t),s&&s.m(e,null)},p(n,o){n[0].user?s?s.p(n,o):(s=A(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:I,o:I,d(n){n&&_(e),s&&s.d()}}}function X(u){let e,r,a=u[0].images,t=[];for(let n=0;n<a.length;n+=1)t[n]=D(U(u,a,n));const s=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=y()},l(n){for(let o=0;o<t.length;o+=1)t[o].l(n);e=y()},m(n,o){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,o);h(n,e,o),r=!0},p(n,o){if(o&1){a=n[0].images;let l;for(l=0;l<a.length;l+=1){const f=U(n,a,l);t[l]?(t[l].p(f,o),m(t[l],1)):(t[l]=D(f),t[l].c(),m(t[l],1),t[l].m(e.parentNode,e))}for(z(),l=a.length;l<t.length;l+=1)s(l);C()}},i(n){if(!r){for(let o=0;o<a.length;o+=1)m(t[o]);r=!0}},o(n){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)g(t[o]);r=!1},d(n){L(t,n),n&&_(e)}}}function A(u){let e,r,a;return{c(){e=w("a"),r=V("Start now"),this.h()},l(t){e=N(t,"A",{href:!0});var s=B(e);r=Y(s,"Start now"),s.forEach(_),this.h()},h(){G(e,"href",a="/user/"+u[0].user.username+"/upload")},m(t,s){h(t,e,s),$(e,r)},p(t,s){s&1&&a!==(a="/user/"+t[0].user.username+"/upload")&&G(e,"href",a)},d(t){t&&_(e)}}}function D(u){let e,r;return e=new Q({props:{image:u[2]}}),{c(){d(e.$$.fragment)},l(a){b(e.$$.fragment,a)},m(a,t){k(e,a,t),r=!0},p(a,t){const s={};t&1&&(s.image=a[2]),e.$set(s)},i(a){r||(m(e.$$.fragment,a),r=!0)},o(a){g(e.$$.fragment,a),r=!1},d(a){v(e,a)}}}function x(u){let e,r,a,t;const s=[X,W],n=[];function o(l,f){return l[0].images.length>0?0:1}return e=o(u),r=n[e]=s[e](u),{c(){r.c(),a=y()},l(l){r.l(l),a=y()},m(l,f){n[e].m(l,f),h(l,a,f),t=!0},p(l,f){let i=e;e=o(l),e===i?n[e].p(l,f):(z(),g(n[i],1,1,()=>{n[i]=null}),C(),r=n[e],r?r.p(l,f):(r=n[e]=s[e](l),r.c()),m(r,1),r.m(a.parentNode,a))},i(l){t||(m(r),t=!0)},o(l){g(r),t=!1},d(l){n[e].d(l),l&&_(a)}}}function ee(u){var l,f;let e,r,a,t,s;function n(i){u[1](i)}let o={username:u[0].foreignUser.username,role:(l=u[0].user)==null?void 0:l.role,author:(f=u[0].user)==null?void 0:f.username};return u[0].images!==void 0&&(o.images=u[0].images),e=new R({props:o}),H.push(()=>J(e,"images",n)),t=new M({props:{className:"image-cell",$$slots:{default:[x]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment),a=P(),d(t.$$.fragment)},l(i){b(e.$$.fragment,i),a=T(i),b(t.$$.fragment,i)},m(i,c){k(e,i,c),h(i,a,c),k(t,i,c),s=!0},p(i,c){var q,E;const p={};c&1&&(p.username=i[0].foreignUser.username),c&1&&(p.role=(q=i[0].user)==null?void 0:q.role),c&1&&(p.author=(E=i[0].user)==null?void 0:E.username),!r&&c&1&&(r=!0,p.images=i[0].images,K(()=>r=!1)),e.$set(p);const S={};c&33&&(S.$$scope={dirty:c,ctx:i}),t.$set(S)},i(i){s||(m(e.$$.fragment,i),m(t.$$.fragment,i),s=!0)},o(i){g(e.$$.fragment,i),g(t.$$.fragment,i),s=!1},d(i){v(e,i),i&&_(a),v(t,i)}}}function ae(u){let e,r;return e=new O({props:{className:"gallery-user",$$slots:{default:[ee]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment)},l(a){b(e.$$.fragment,a)},m(a,t){k(e,a,t),r=!0},p(a,[t]){const s={};t&33&&(s.$$scope={dirty:t,ctx:a}),e.$set(s)},i(a){r||(m(e.$$.fragment,a),r=!0)},o(a){g(e.$$.fragment,a),r=!1},d(a){v(e,a)}}}function te(u,e,r){let{data:a}=e;function t(s){u.$$.not_equal(a.images,s)&&(a.images=s,r(0,a))}return u.$$set=s=>{"data"in s&&r(0,a=s.data)},[a,t]}class ie extends Z{constructor(e){super(),j(this,e,te,ae,F,{data:0})}}export{ie as default};
