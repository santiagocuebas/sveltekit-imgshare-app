import{S as x,i as J,s as K,w as Y,Y as Z,k as g,q as F,a as y,y as P,l as $,m as q,h as _,r as C,c as U,z as G,n as f,b,D as E,A as H,Z as j,g as N,d as A,B as L,F as Q,v as W,f as ee,e as V,$ as te,C as z}from"../chunks/index.d4184e2c.js";import{D as S}from"../chunks/config.6f2f33d8.js";import{F as le,E as se}from"../chunks/ErrorBox.ddbf314d.js";import{B as ae}from"../chunks/BoxGallery.d2547153.js";import{h as re}from"../chunks/handle-image.6a2369ae.js";function M(u,t,s){const l=u.slice();return l[6]=t[s],l}function O(u){let t,s,l;function a(e){u[4](e)}let r={errors:u[1]};return u[2]!==void 0&&(r.hide=u[2]),t=new se({props:r}),Y.push(()=>Z(t,"hide",a)),{c(){P(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,i){H(t,e,i),l=!0},p(e,i){const p={};i&2&&(p.errors=e[1]),!s&&i&4&&(s=!0,p.hide=e[2],j(()=>s=!1)),t.$set(p)},i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){A(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function oe(u){let t,s,l,a,r,e,i,p,n,v,w,I,T,k,m=u[2]&&O(u);return{c(){m&&m.c(),t=y(),s=g("label"),l=g("input"),a=y(),r=g("input"),e=y(),i=g("textarea"),p=y(),n=g("button"),v=g("i"),w=F(`\r
			Upload`),this.h()},l(o){m&&m.l(o),t=U(o),s=$(o,"LABEL",{class:!0});var h=q(s);l=$(h,"INPUT",{type:!0,name:!0,class:!0}),h.forEach(_),a=U(o),r=$(o,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,spellcheck:!0,autocomplete:!0}),e=U(o),i=$(o,"TEXTAREA",{class:!0,name:!0,placeholder:!0,rows:!0,spellcheck:!0,autocomplete:!0}),q(i).forEach(_),p=U(o),n=$(o,"BUTTON",{class:!0});var c=q(n);v=$(c,"I",{class:!0}),q(v).forEach(_),w=C(c,`\r
			Upload`),c.forEach(_),this.h()},h(){f(l,"type","file"),f(l,"name","image"),f(l,"class","svelte-17d4s3q"),f(s,"class","svelte-17d4s3q"),f(r,"class","upload-input svelte-17d4s3q"),f(r,"type","text"),f(r,"name","title"),f(r,"placeholder","Title"),f(r,"spellcheck","false"),f(r,"autocomplete","off"),f(i,"class","upload-input svelte-17d4s3q"),f(i,"name","description"),f(i,"placeholder","Description"),f(i,"rows","3"),f(i,"spellcheck","false"),f(i,"autocomplete","off"),f(v,"class","fa-solid fa-upload"),f(n,"class","svelte-17d4s3q")},m(o,h){m&&m.m(o,h),b(o,t,h),b(o,s,h),E(s,l),b(o,a,h),b(o,r,h),b(o,e,h),b(o,i,h),b(o,p,h),b(o,n,h),E(n,v),E(n,w),I=!0,T||(k=Q(l,"change",re),T=!0)},p(o,h){o[2]?m?(m.p(o,h),h&4&&N(m,1)):(m=O(o),m.c(),N(m,1),m.m(t.parentNode,t)):m&&(W(),A(m,1,1,()=>{m=null}),ee())},i(o){I||(N(m),I=!0)},o(o){A(m),I=!1},d(o){m&&m.d(o),o&&_(t),o&&_(s),o&&_(a),o&&_(r),o&&_(e),o&&_(i),o&&_(p),o&&_(n),T=!1,k()}}}function X(u){let t,s,l,a,r,e;return{c(){t=g("a"),s=g("img"),r=y(),this.h()},l(i){t=$(i,"A",{href:!0,class:!0});var p=q(t);s=$(p,"IMG",{src:!0,alt:!0,class:!0}),r=U(p),p.forEach(_),this.h()},h(){z(s.src,l=S+"/uploads/"+u[6].filename)||f(s,"src",l),f(s,"alt",a=u[6].title),f(s,"class","svelte-17d4s3q"),f(t,"href",e="/gallery/"+u[6].id),f(t,"class","svelte-17d4s3q")},m(i,p){b(i,t,p),E(t,s),E(t,r)},p(i,p){p&1&&!z(s.src,l=S+"/uploads/"+i[6].filename)&&f(s,"src",l),p&1&&a!==(a=i[6].title)&&f(s,"alt",a),p&1&&e!==(e="/gallery/"+i[6].id)&&f(t,"href",e)},d(i){i&&_(t)}}}function ie(u){let t,s=u[0].images,l=[];for(let a=0;a<s.length;a+=1)l[a]=X(M(u,s,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();t=V()},l(a){for(let r=0;r<l.length;r+=1)l[r].l(a);t=V()},m(a,r){for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(a,r);b(a,t,r)},p(a,r){if(r&1){s=a[0].images;let e;for(e=0;e<s.length;e+=1){const i=M(a,s,e);l[e]?l[e].p(i,r):(l[e]=X(i),l[e].c(),l[e].m(t.parentNode,t))}for(;e<l.length;e+=1)l[e].d(1);l.length=s.length}},d(a){te(l,a),a&&_(t)}}}function fe(u){let t,s,l,a,r,e,i,p,n,v,w,I,T,k,m;function o(c){u[5](c)}let h={action:S+"/api/image/upload",prefix:"/gallery",errors:u[3],$$slots:{default:[oe]},$$scope:{ctx:u}};return u[2]!==void 0&&(h.show=u[2]),e=new le({props:h}),Y.push(()=>Z(e,"show",o)),k=new ae({props:{className:"image-upload",$$slots:{default:[ie]},$$scope:{ctx:u}}}),{c(){t=g("div"),s=g("h2"),l=g("i"),a=F(`\r
		Upload Image`),r=y(),P(e.$$.fragment),p=y(),n=g("div"),v=g("h2"),w=g("i"),I=F(`\r
		Recent Uploads`),T=y(),P(k.$$.fragment),this.h()},l(c){t=$(c,"DIV",{class:!0});var d=q(t);s=$(d,"H2",{class:!0});var B=q(s);l=$(B,"I",{class:!0}),q(l).forEach(_),a=C(B,`\r
		Upload Image`),B.forEach(_),r=U(d),G(e.$$.fragment,d),d.forEach(_),p=U(c),n=$(c,"DIV",{class:!0});var D=q(n);v=$(D,"H2",{class:!0});var R=q(v);w=$(R,"I",{class:!0}),q(w).forEach(_),I=C(R,`\r
		Recent Uploads`),R.forEach(_),T=U(D),G(k.$$.fragment,D),D.forEach(_),this.h()},h(){f(l,"class","fa-solid fa-image title-icon"),f(s,"class","title"),f(t,"class","svelte-17d4s3q"),f(w,"class","fa-solid fa-images title-icon"),f(v,"class","title"),f(n,"class","svelte-17d4s3q")},m(c,d){b(c,t,d),E(t,s),E(s,l),E(s,a),E(t,r),H(e,t,null),b(c,p,d),b(c,n,d),E(n,v),E(v,w),E(v,I),E(n,T),H(k,n,null),m=!0},p(c,[d]){const B={};d&518&&(B.$$scope={dirty:d,ctx:c}),!i&&d&4&&(i=!0,B.show=c[2],j(()=>i=!1)),e.$set(B);const D={};d&513&&(D.$$scope={dirty:d,ctx:c}),k.$set(D)},i(c){m||(N(e.$$.fragment,c),N(k.$$.fragment,c),m=!0)},o(c){A(e.$$.fragment,c),A(k.$$.fragment,c),m=!1},d(c){c&&_(t),L(e),c&&_(p),c&&_(n),L(k)}}}function ne(u,t,s){let{data:l}=t,a={},r=!1;const e=n=>s(1,a=n);function i(n){r=n,s(2,r)}function p(n){r=n,s(2,r)}return u.$$set=n=>{"data"in n&&s(0,l=n.data)},[l,a,r,e,i,p]}class he extends x{constructor(t){super(),J(this,t,ne,fe,K,{data:0})}}export{he as default};