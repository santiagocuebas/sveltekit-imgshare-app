import{a as o}from"./axios.aba6f0e0.js";import{D as r}from"./config.c392556e.js";const s=async({url:a})=>{const e=a.searchParams.get("q");return{images:(await o.get(`${r}/api/search/${e}`).then(t=>t.data)).images}},m=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{m as _,s as l};
