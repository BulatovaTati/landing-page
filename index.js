(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu"),o=document.querySelector(".js-menu"),c=document.querySelector(".js-menu-close"),s=document.querySelector(".nav-list");o.addEventListener("click",e),c.addEventListener("click",e);function e(){const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open"),document.body.classList.toggle("is-open")}s.addEventListener("click",t=>{t.target.nodeName==="A"&&t.target.nodeName==="A"&&(n.classList.remove("is-open"),document.body.classList.remove("is-open"))})})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),c=document.querySelectorAll(".js-modal-close");n.forEach(function(s){s.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+t+'"]').classList.add("active"),o.classList.add("active"),document.body.classList.add("modal-open")})}),c.forEach(function(s){s.addEventListener("click",function(){this.closest(".modal").classList.remove("active"),o.classList.remove("active"),document.body.classList.remove("modal-open")})}),document.body.addEventListener("keyup",function(s){s.key==="Escape"&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".modal-overlay").classList.remove("active"),document.body.classList.remove("modal-open"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open")})});const l=document.querySelector(".scroll-to-top");l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>i();function i(){const n=document.querySelector(".scroll-to-top");window.scrollY>60?n.classList.remove("js-transparent"):n.classList.add("js-transparent")}
//# sourceMappingURL=index.js.map
