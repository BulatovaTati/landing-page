(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let s,d=1;const a=document.querySelector(".load-more"),f=document.querySelector(".projects-list"),i=Array.from(f.children);function u(){window.innerWidth>=1280?s=3:window.innerWidth>=768?s=4:s=2,d=1,i.forEach((o,n)=>{o.style.display=n<s?"block":"none"}),a.style.display=s<i.length?"block":"none"}function p(){const o=d*s,n=o+s;for(let r=o;r<n&&r<i.length;r++)i[r].style.display="block";d++,m(),n>=i.length&&(a.style.display="none")}function m(){const{height:o}=i[0].getBoundingClientRect();window.scrollBy({top:o,behavior:"smooth"})}a.addEventListener("click",p);window.addEventListener("resize",u);u();(()=>{const o=document.querySelector(".js-menu"),n=document.querySelector(".js-menu"),r=document.querySelector(".js-menu-close"),c=document.querySelector(".nav-list");n.addEventListener("click",e),r.addEventListener("click",e);function e(){const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),o.classList.toggle("is-open"),document.body.classList.toggle("is-open")}c.addEventListener("click",t=>{t.target.nodeName==="A"&&t.target.nodeName==="A"&&(o.classList.remove("is-open"),document.body.classList.remove("is-open"))}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),n.setAttribute("aria-expanded",!1))})})();const g=document.querySelector(".scroll-to-top");g.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>y();function y(){const o=document.querySelector(".scroll-to-top");window.scrollY>60?o.classList.remove("js-transparent"):o.classList.add("js-transparent")}
//# sourceMappingURL=index.js.map