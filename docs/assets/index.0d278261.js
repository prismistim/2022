import{u as p,r as f,o as i,c as u,t as _,a as m,b as v,d as y,e as g,F as h,f as a,g as d,h as b}from"./vendor.076e85de.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};N();const x=[{id:"ca5825c96652884e772c3986391a6cdb",description:"\u4ECA\u5E74\u3082\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059"},{id:"235ae4bb0a9ec7cead61fff58d11a3f5",description:"\u4ECA\u5E74\u306F\u4F1A\u3048\u307E\u3059\u3088\u3046\u306B..."},{id:"1d9c5f01be4898ab04cbe3ab707fb8f7",description:"\u5143\u6C17\u3057\u3066\u307E\u3059\u304B\uFF1F\u307E\u305F\u304A\u8A71\u3057\u307E\u3057\u3087"}];var O={items:x};var l=(n,r)=>{const o=n.__vccOpts||n;for(const[s,e]of r)o[s]=e;return o};const A={setup(n){const r=p(),o=f("\u3042\u3051\u304A\u3081");console.log(r.query.id);const s=e=>{const t=O.items.find(c=>c.id===e);t&&(o.value=t.description)};return r.query.id&&s(r.query.id),(e,t)=>(i(),u("p",null,_(o.value),1))}};var L=l(A,[["__scopeId","data-v-20abe7da"]]);const q=[{path:"/2022/",name:"Home",component:L}];var w=m({history:v(),routes:q});const M={},k=a("h3",null,"A Happy New Year!",-1),B=a("p",{class:"notice"},[d("\u203B\u30B9\u30DE\u30DB\u3092\u3050\u308A\u3050\u308A\u3057\u305F\u308A\u632F\u3063\u305F\u308A\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"),a("br"),d("\u904E\u5EA6\u306A\u671F\u5F85\u306F\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002")],-1),F=a("p",{class:"notice"},"iOS\u3067\u304D\u306A\u3044\u304B\u3082...",-1);function H(n,r){const o=y("router-view");return i(),u(h,null,[k,g(o),B,F],64)}var S=l(M,[["render",H]]);b(S).use(w).mount("#app");