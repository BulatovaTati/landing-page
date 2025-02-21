(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="/landing-page/assets/movies-CLVAyphv.png",m="/landing-page/assets/jet-BrykDBRl.jpg",f="/landing-page/assets/chocolate-DOSuxY4E.png",b="/landing-page/assets/veges-BTbOeECa.jpg",v="/landing-page/assets/food-iSwVDB7N.png",y="/landing-page/assets/barber-CA405Yto.jpg",L="/landing-page/assets/ice-B92vxtL_.jpg",j="/landing-page/assets/donuts-BhKw_mz1.jpg",w="/landing-page/assets/landing-BTWjPI0J.jpg",k="/landing-page/assets/filmoteka-yeQUJuLf.jpg",B=[{title:"Filmoteka",image:k,alt:"Landing Page",description:"A user-friendly movie library where you can search for films, view details, and add favorites to your collection.",codeLink:"https://github.com/BulatovaTati/filmoteka",projectLink:"https://filmoteka-nine.vercel.app/"},{title:"Landing Page",image:w,alt:"Landing Page",description:"This website is Lloyd`s  personal portfolio where He can not only demonstrate his skillset, but also talk about his experiences and past projects that have brought him to where He is now.",codeLink:"https://github.com/BulatovaTati/landing-page-2.0",projectLink:"https://bulatovatati.github.io/landing-page-2.0/"},{title:"Yacht Jet",image:m,alt:"Yacht Jet",description:"A luxury yacht rental platform showcasing various yachts available for rent.",codeLink:"https://github.com/BulatovaTati/Yacht-Jet",projectLink:"https://bulatovatati.github.io/Yacht-Jet/"},{title:"Movies Source",image:h,alt:"Movies Source",description:"A movie information platform that pulls data from a public API for movie details.",codeLink:"https://github.com/BulatovaTati/movies-source",projectLink:"https://bulatovatati.github.io/movies-source/"},{title:"SIMPLY CHOCOLATE",image:f,alt:"SIMPLY-CHOCOLATE",description:"A responsive website for a chocolate brand, featuring smooth scroll for navigation.",codeLink:"https://github.com/BulatovaTati/Simply-Chocolate",projectLink:"https://bulatovatati.github.io/SIMPLY-CHOCOLATE/"},{title:"Green Harvest",image:b,alt:"Green Harvest",description:"A project focused on promoting healthy eating with engaging content and resources.",codeLink:"https://github.com/BulatovaTati/GreenHarvest",projectLink:"https://bulatovatati.github.io/GreenHarvest/"},{title:"Food Delivery",image:v,alt:"Food Delivery",description:"A food delivery app that allows users to browse menus, place orders, and track deliveries.",codeLink:"https://github.com/BulatovaTati/food-delivery",projectLink:"https://bulatovatati.github.io/food-delivery/"},{title:"Barber Shop",image:y,alt:"Barber Shop",description:"A stylish and functional website for a barbershop, featuring a booking system.",codeLink:"https://github.com/BulatovaTati/BarberShop",projectLink:"https://bulatovatati.github.io/BarberShop/"},{title:"Ice Cream",image:L,alt:"Ice Cream",description:"A visually appealing website showcasing a range of ice cream products.",codeLink:"https://github.com/BulatovaTati/IceCream",projectLink:"https://bulatovatati.github.io/IceCream/"},{title:"Donats",image:j,alt:"Donats",description:"A fun and interactive website for ordering donuts online.",codeLink:"https://github.com/BulatovaTati/Donats",projectLink:"https://bulatovatati.github.io/Donats/"}];let n,c=1;const l=document.querySelector(".load-more"),S=document.querySelector(".projects-list");function d(){window.innerWidth>=1280?n=3:window.innerWidth>=768?n=4:n=2,c=1;const o=document.querySelectorAll(".projects-item");o.forEach((i,s)=>{i.style.display=s<n?"flex":"none"}),l.style.display=n<o.length?"block":"none"}function A(){const o=document.querySelectorAll(".projects-item"),i=c*n,s=i+n;for(let a=i;a<s&&a<o.length;a++)o[a].style.display="flex";c++,T(),s>=o.length&&(l.style.display="none")}function T(){const{height:o}=document.querySelector(".projects-list").firstElementChild.getBoundingClientRect();window.scrollBy({top:o,behavior:"smooth"})}l.addEventListener("click",A);window.addEventListener("resize",d);S.insertAdjacentHTML("beforeend",P(B,0,n));d();function P(o,i,s){return o.slice(i,s).reduce((a,{title:e,image:t,alt:r,description:p,codeLink:u,projectLink:g})=>a+` <li class="projects-item">
        <img
          class="projects-img"
          src="${t}"
          alt="${r}"
        />
        <h3 class="projects-item-title">${e}</h3>
        <p class="projects-item-text">
         ${p}
        </p>
        <div class="btn-wrapper">
        <a
          href="${u}"
          class="projects-code-link"
          target="_blank"
          >View Code</a
        >
        <a
         href="${g}"
          class="projects-project-link"
          target="_blank"
          >View Project</a
        >
        </div>
      </li>`,"")}(()=>{const o=document.querySelector(".js-menu"),i=document.querySelector(".js-menu"),s=document.querySelector(".js-menu-close"),a=document.querySelector(".nav-list");i.addEventListener("click",e),s.addEventListener("click",e);function e(){const t=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!t),o.classList.toggle("is-open"),document.body.classList.toggle("is-open")}a.addEventListener("click",t=>{t.target.nodeName==="A"&&t.target.nodeName==="A"&&(o.classList.remove("is-open"),document.body.classList.remove("is-open"))}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),i.setAttribute("aria-expanded",!1))})})();const C=document.querySelector(".scroll-to-top");C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>E();function E(){const o=document.querySelector(".scroll-to-top");window.scrollY>60?o.classList.remove("js-transparent"):o.classList.add("js-transparent")}
//# sourceMappingURL=index.js.map
