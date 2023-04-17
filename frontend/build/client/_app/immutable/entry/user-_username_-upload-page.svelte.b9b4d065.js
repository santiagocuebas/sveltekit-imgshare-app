import{S as Y,i as j,s as x,w as J,X as K,k as $,q as F,a as y,y as P,l as g,m as q,h as m,r as C,c as U,z as G,n as i,b,D as E,A as H,Y as Q,g as N,d as A,B as L,F as W,v as Z,f as ee,e as V,_ as te,C as X}from"../chunks/index.8bb6be9b.js";import{D as S}from"../chunks/config.1262d2ec.js";import{F as le,E as se}from"../chunks/ErrorBox.5adf64e3.js";import{B as ae}from"../chunks/BoxGallery.71982b39.js";import{h as re}from"../chunks/handle-image.6a2369ae.js";function z(p,t,l){const e=p.slice();return e[6]=t[l],e}function M(p){let t,l;return t=new se({props:{errors:p[1]}}),t.$on("click",p[4]),{c(){P(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,s){H(t,e,s),l=!0},p(e,s){const o={};s&2&&(o.errors=e[1]),t.$set(o)},i(e){l||(N(t.$$.fragment,e),l=!0)},o(e){A(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function oe(p){let t,l,e,s,o,a,f,_,c,v,w,I,T,k,u=p[2]&&M(p);return{c(){u&&u.c(),t=y(),l=$("label"),e=$("input"),s=y(),o=$("input"),a=y(),f=$("textarea"),_=y(),c=$("button"),v=$("i"),w=F(`\r
			Upload`),this.h()},l(r){u&&u.l(r),t=U(r),l=g(r,"LABEL",{class:!0});var h=q(l);e=g(h,"INPUT",{type:!0,name:!0,class:!0}),h.forEach(m),s=U(r),o=g(r,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,spellcheck:!0,autocomplete:!0}),a=U(r),f=g(r,"TEXTAREA",{class:!0,name:!0,placeholder:!0,rows:!0,spellcheck:!0,autocomplete:!0}),q(f).forEach(m),_=U(r),c=g(r,"BUTTON",{class:!0});var n=q(c);v=g(n,"I",{class:!0}),q(v).forEach(m),w=C(n,`\r
			Upload`),n.forEach(m),this.h()},h(){i(e,"type","file"),i(e,"name","image"),i(e,"class","svelte-17d4s3q"),i(l,"class","svelte-17d4s3q"),i(o,"class","upload-input svelte-17d4s3q"),i(o,"type","text"),i(o,"name","title"),i(o,"placeholder","Title"),i(o,"spellcheck","false"),i(o,"autocomplete","off"),i(f,"class","upload-input svelte-17d4s3q"),i(f,"name","description"),i(f,"placeholder","Description"),i(f,"rows","3"),i(f,"spellcheck","false"),i(f,"autocomplete","off"),i(v,"class","fa-solid fa-upload"),i(c,"class","svelte-17d4s3q")},m(r,h){u&&u.m(r,h),b(r,t,h),b(r,l,h),E(l,e),b(r,s,h),b(r,o,h),b(r,a,h),b(r,f,h),b(r,_,h),b(r,c,h),E(c,v),E(c,w),I=!0,T||(k=W(e,"change",re),T=!0)},p(r,h){r[2]?u?(u.p(r,h),h&4&&N(u,1)):(u=M(r),u.c(),N(u,1),u.m(t.parentNode,t)):u&&(Z(),A(u,1,1,()=>{u=null}),ee())},i(r){I||(N(u),I=!0)},o(r){A(u),I=!1},d(r){u&&u.d(r),r&&m(t),r&&m(l),r&&m(s),r&&m(o),r&&m(a),r&&m(f),r&&m(_),r&&m(c),T=!1,k()}}}function O(p){let t,l,e,s,o,a;return{c(){t=$("a"),l=$("img"),o=y(),this.h()},l(f){t=g(f,"A",{href:!0,class:!0});var _=q(t);l=g(_,"IMG",{src:!0,alt:!0,class:!0}),o=U(_),_.forEach(m),this.h()},h(){X(l.src,e=S+"/uploads/"+p[6].filename)||i(l,"src",e),i(l,"alt",s=p[6].title),i(l,"class","svelte-17d4s3q"),i(t,"href",a="/gallery/"+p[6].id),i(t,"class","svelte-17d4s3q")},m(f,_){b(f,t,_),E(t,l),E(t,o)},p(f,_){_&1&&!X(l.src,e=S+"/uploads/"+f[6].filename)&&i(l,"src",e),_&1&&s!==(s=f[6].title)&&i(l,"alt",s),_&1&&a!==(a="/gallery/"+f[6].id)&&i(t,"href",a)},d(f){f&&m(t)}}}function ie(p){let t,l=p[0].images,e=[];for(let s=0;s<l.length;s+=1)e[s]=O(z(p,l,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=V()},l(s){for(let o=0;o<e.length;o+=1)e[o].l(s);t=V()},m(s,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(s,o);b(s,t,o)},p(s,o){if(o&1){l=s[0].images;let a;for(a=0;a<l.length;a+=1){const f=z(s,l,a);e[a]?e[a].p(f,o):(e[a]=O(f),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(s){te(e,s),s&&m(t)}}}function fe(p){let t,l,e,s,o,a,f,_,c,v,w,I,T,k,u;function r(n){p[5](n)}let h={action:S+"/api/image/upload",prefix:"/gallery",errors:p[3],$$slots:{default:[oe]},$$scope:{ctx:p}};return p[2]!==void 0&&(h.show=p[2]),a=new le({props:h}),J.push(()=>K(a,"show",r)),k=new ae({props:{className:"image-upload",$$slots:{default:[ie]},$$scope:{ctx:p}}}),{c(){t=$("div"),l=$("h2"),e=$("i"),s=F(`\r
		Upload Image`),o=y(),P(a.$$.fragment),_=y(),c=$("div"),v=$("h2"),w=$("i"),I=F(`\r
		Recent Uploads`),T=y(),P(k.$$.fragment),this.h()},l(n){t=g(n,"DIV",{class:!0});var d=q(t);l=g(d,"H2",{class:!0});var B=q(l);e=g(B,"I",{class:!0}),q(e).forEach(m),s=C(B,`\r
		Upload Image`),B.forEach(m),o=U(d),G(a.$$.fragment,d),d.forEach(m),_=U(n),c=g(n,"DIV",{class:!0});var D=q(c);v=g(D,"H2",{class:!0});var R=q(v);w=g(R,"I",{class:!0}),q(w).forEach(m),I=C(R,`\r
		Recent Uploads`),R.forEach(m),T=U(D),G(k.$$.fragment,D),D.forEach(m),this.h()},h(){i(e,"class","fa-solid fa-image title-icon"),i(l,"class","title"),i(t,"class","svelte-17d4s3q"),i(w,"class","fa-solid fa-images title-icon"),i(v,"class","title"),i(c,"class","svelte-17d4s3q")},m(n,d){b(n,t,d),E(t,l),E(l,e),E(l,s),E(t,o),H(a,t,null),b(n,_,d),b(n,c,d),E(c,v),E(v,w),E(v,I),E(c,T),H(k,c,null),u=!0},p(n,[d]){const B={};d&518&&(B.$$scope={dirty:d,ctx:n}),!f&&d&4&&(f=!0,B.show=n[2],Q(()=>f=!1)),a.$set(B);const D={};d&513&&(D.$$scope={dirty:d,ctx:n}),k.$set(D)},i(n){u||(N(a.$$.fragment,n),N(k.$$.fragment,n),u=!0)},o(n){A(a.$$.fragment,n),A(k.$$.fragment,n),u=!1},d(n){n&&m(t),L(a),n&&m(_),n&&m(c),L(k)}}}function ne(p,t,l){let{data:e}=t,s={},o=!1;const a=c=>l(1,s=c),f=()=>l(2,o=!1);function _(c){o=c,l(2,o)}return p.$$set=c=>{"data"in c&&l(0,e=c.data)},[e,s,o,a,f,_]}class he extends Y{constructor(t){super(),j(this,t,ne,fe,x,{data:0})}}export{he as default};