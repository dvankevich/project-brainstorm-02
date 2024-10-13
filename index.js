/* empty css                      */import{A as L}from"./assets/vendor-CTqzIL4Y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();(()=>{const o=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),s=()=>{const e=o.querySelectorAll('a[href*="#"]'),n=r.getAttribute("aria-expanded")==="true"||!1;if(r.setAttribute("aria-expanded",!n),o.classList.toggle("is-open"),e.length!==0){if(!n){e.forEach(t=>{t.addEventListener("click",s)});return}e.forEach(t=>{t.removeEventListener("click",s)})}};r.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 375px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),r.setAttribute("aria-expanded",!1))})})();document.querySelectorAll('a[href^="#"').forEach(o=>{o.addEventListener("click",function(r){r.preventDefault();let i=this.getAttribute("href").substring(1);const s=document.getElementById(i),e=document.querySelector(".header-navigation").offsetHeight,t=s.getBoundingClientRect().top-e;window.scrollBy({top:t,behavior:"smooth"})})});let u=document.querySelector("#switch"),b=document.querySelector("body"),p=localStorage.getItem("theme");const S=()=>{p==="dark"?m():f()},k=()=>{window.matchMedia("(prefers-color-scheme: dark").addEventListener("change",()=>{v()})},v=()=>{p==null&&window.matchMedia("(prefers-color-scheme: dark").matches||p&&window.matchMedia("(prefers-color-scheme: dark").matches?m():f()},m=()=>{b.classList="dark",localStorage.setItem("theme","dark"),u.checked=!0},f=()=>{b.classList="light",localStorage.setItem("theme","light"),u.checked=!1};k();v();S();u.addEventListener("click",()=>u.checked?m():f());console.log("hero");console.log("about-me");console.log("tech-skills");const E=document.querySelector(".mp-load-more-button"),d=document.querySelectorAll(".mp-list-item");let h=3,a=6;const g=3;function q(o){o.classList.add("visually-hidden")}function I(o){o.classList.remove("visually-hidden")}E.addEventListener("click",M);function M(){for(let o=h;o<a;o++)I(d[o]);a===d.length&&q(E),h+=g,a+=g,a>d.length&&(a=d.length)}console.log("faq");const B=new L(".accordion-container");B.open(0);new Swiper(".swiper",{loop:!1,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},on:{reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("swiper-button-disabled")},reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("swiper-button-disabled")},fromEdge:function(){document.querySelector(".swiper-button-prev").classList.remove("swiper-button-disabled"),document.querySelector(".swiper-button-next").classList.remove("swiper-button-disabled")}}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".reviews-list"),r=document.getElementById("error-popup");function i(t){r.textContent=t,r.classList.remove("hidden"),setTimeout(()=>{r.classList.add("hidden")},5e3)}function s(t){if(t.length===0){o.innerHTML='<li class="not-found">Not found</li>';return}t.forEach(c=>{const l=document.createElement("li");l.classList.add("swiper-slide"),l.innerHTML=`
                <div class="reviews-items">
                    <img src="${c.img}" class="reviews-img" width="40" height="40" alt="${c.name}" />
                    <p class="reviews-list-text">${c.text}</p>
                    <h3 class="reviews-list-title">${c.name}</h3>
                </div>
            `,o.appendChild(l)})}function e(){fetch("https://your-backend-url.com/reviews").then(t=>{if(!t.ok)throw new Error("Error fetching reviews");return t.json()}).then(t=>{s(t.reviews),n()}).catch(t=>{console.error("Error:",t),i("Error fetching reviews. Please try again later."),o.innerHTML='<li class="not-found">Not found</li>'})}function n(){new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0},spaceBetween:30})}e()});console.log("work-together");document.getElementById("form").addEventListener("submit",async function(o){o.preventDefault();const r=document.getElementById("email"),i=document.getElementById("message"),s=document.getElementById("modal"),e=document.querySelector(".icon-ok"),n=document.querySelector(".send-btn"),t={email:r.value,comment:i.value};n.disabled=!0;try{const c=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!c.ok){const l=await c.json();alert(`Error: ${l.message}`);return}s.style.display="block",r.value="",i.value="",e.style.display="none"}catch(c){console.error("Error:",c),alert("Your request failed. Please try again later")}finally{n.disabled=!1}});document.querySelector(".modal-close-btn").addEventListener("click",function(){const o=document.getElementById("modal");o.style.display="none"});const y=document.getElementById("email"),w=document.querySelector(".icon-ok"),x=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;y.addEventListener("input",function(){x.test(y.value)?w.style.display="block":w.style.display="none"});console.log("footer");
//# sourceMappingURL=index.js.map
