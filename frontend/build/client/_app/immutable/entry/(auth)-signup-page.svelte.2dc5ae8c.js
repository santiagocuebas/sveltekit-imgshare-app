import{S as q,i as B,s as D,y as N,z as T,A as U,g as d,d as v,B as j,w as I,Y as S,Z as C,a as h,k as b,q as F,c as w,l as g,m as x,r as z,h as c,n as i,b as _,D as A,v as O,f as R}from"../chunks/index.d4184e2c.js";import{D as Y}from"../chunks/config.ec8b886b.js";import{C as Z}from"../chunks/ContainerForm.682ed33a.js";import{F as G,E as H}from"../chunks/ErrorBox.ddbf314d.js";function E(u){let r,o,s;function l(t){u[3](t)}let m={errors:u[0]};return u[1]!==void 0&&(m.hide=u[1]),r=new H({props:m}),I.push(()=>S(r,"hide",l)),{c(){N(r.$$.fragment)},l(t){T(r.$$.fragment,t)},m(t,f){U(r,t,f),s=!0},p(t,f){const n={};f&1&&(n.errors=t[0]),!o&&f&2&&(o=!0,n.hide=t[1],C(()=>o=!1)),r.$set(n)},i(t){s||(d(r.$$.fragment,t),s=!0)},o(t){v(r.$$.fragment,t),s=!1},d(t){j(r,t)}}}function J(u){let r,o,s,l,m,t,f,n,y,$,k,P,a=u[1]&&E(u);return{c(){a&&a.c(),r=h(),o=b("input"),s=h(),l=b("input"),m=h(),t=b("input"),f=h(),n=b("input"),y=h(),$=b("button"),k=F("Signup"),this.h()},l(e){a&&a.l(e),r=w(e),o=g(e,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),s=w(e),l=g(e,"INPUT",{type:!0,name:!0,placeholder:!0,maxlength:!0,class:!0}),m=w(e),t=g(e,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),f=w(e),n=g(e,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),y=w(e),$=g(e,"BUTTON",{class:!0});var p=x($);k=z(p,"Signup"),p.forEach(c),this.h()},h(){i(o,"type","text"),i(o,"name","username"),i(o,"placeholder","Username"),i(o,"class","svelte-jn909o"),i(l,"type","email"),i(l,"name","email"),i(l,"placeholder","Email"),i(l,"maxlength","100"),l.required=!0,i(l,"class","svelte-jn909o"),i(t,"type","password"),i(t,"name","password"),i(t,"placeholder","Password"),i(t,"class","svelte-jn909o"),i(n,"type","password"),i(n,"name","confirmPassword"),i(n,"placeholder","Confirm password"),i(n,"class","svelte-jn909o"),i($,"class","svelte-jn909o")},m(e,p){a&&a.m(e,p),_(e,r,p),_(e,o,p),_(e,s,p),_(e,l,p),_(e,m,p),_(e,t,p),_(e,f,p),_(e,n,p),_(e,y,p),_(e,$,p),A($,k),P=!0},p(e,p){e[1]?a?(a.p(e,p),p&2&&d(a,1)):(a=E(e),a.c(),d(a,1),a.m(r.parentNode,r)):a&&(O(),v(a,1,1,()=>{a=null}),R())},i(e){P||(d(a),P=!0)},o(e){v(a),P=!1},d(e){a&&a.d(e),e&&c(r),e&&c(o),e&&c(s),e&&c(l),e&&c(m),e&&c(t),e&&c(f),e&&c(n),e&&c(y),e&&c($)}}}function K(u){let r,o,s;function l(t){u[4](t)}let m={action:Y+"/api/auth/signup",prefix:"/user",errors:u[2],$$slots:{default:[J]},$$scope:{ctx:u}};return u[1]!==void 0&&(m.show=u[1]),r=new G({props:m}),I.push(()=>S(r,"show",l)),{c(){N(r.$$.fragment)},l(t){T(r.$$.fragment,t)},m(t,f){U(r,t,f),s=!0},p(t,f){const n={};f&35&&(n.$$scope={dirty:f,ctx:t}),!o&&f&2&&(o=!0,n.show=t[1],C(()=>o=!1)),r.$set(n)},i(t){s||(d(r.$$.fragment,t),s=!0)},o(t){v(r.$$.fragment,t),s=!1},d(t){j(r,t)}}}function L(u){let r,o;return r=new Z({props:{title:"Signup",$$slots:{default:[K]},$$scope:{ctx:u}}}),{c(){N(r.$$.fragment)},l(s){T(r.$$.fragment,s)},m(s,l){U(r,s,l),o=!0},p(s,[l]){const m={};l&35&&(m.$$scope={dirty:l,ctx:s}),r.$set(m)},i(s){o||(d(r.$$.fragment,s),o=!0)},o(s){v(r.$$.fragment,s),o=!1},d(s){j(r,s)}}}function M(u,r,o){let s={},l=!1;const m=n=>o(0,s=n);function t(n){l=n,o(1,l)}function f(n){l=n,o(1,l)}return[s,l,m,t,f]}class ee extends q{constructor(r){super(),B(this,r,M,L,D,{})}}export{ee as default};
