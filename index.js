/* empty css                      */import{A as b}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),c=()=>{const e=t.querySelectorAll('a[href*="#"]'),n=o.getAttribute("aria-expanded")==="true"||!1;if(o.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),e.length!==0){if(!n){e.forEach(r=>{r.addEventListener("click",c)});return}e.forEach(r=>{r.removeEventListener("click",c)})}};o.addEventListener("click",c),s.addEventListener("click",c),window.matchMedia("(min-width: 375px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))})})();document.querySelectorAll('a[href^="#"').forEach(t=>{t.addEventListener("click",function(o){o.preventDefault();let s=this.getAttribute("href").substring(1);const c=document.getElementById(s),e=document.querySelector(".header-navigation").offsetHeight,r=c.getBoundingClientRect().top-e;window.scrollBy({top:r,behavior:"smooth"})})});let a=document.querySelector("#switch"),y=document.querySelector("body"),m=localStorage.getItem("theme");const S=()=>{m==="dark"?u():h()},k=()=>{window.matchMedia("(prefers-color-scheme: dark").addEventListener("change",()=>{L()})},L=()=>{m==null&&window.matchMedia("(prefers-color-scheme: dark").matches||m&&window.matchMedia("(prefers-color-scheme: dark").matches?u():h()},u=()=>{y.classList="dark",localStorage.setItem("theme","dark"),a.checked=!0},h=()=>{y.classList="light",localStorage.setItem("theme","light"),a.checked=!1};k();L();S();a.addEventListener("click",()=>a.checked?u():h());console.log("hero");console.log("about-me");console.log("tech-skills");const v=document.querySelector(".mp-load-more-button"),d=document.querySelectorAll(".mp-list-item");let p=3,i=6;const g=3;function M(t){t.classList.add("visually-hidden")}function w(t){t.classList.remove("visually-hidden")}v.addEventListener("click",B);function B(){for(let t=p;t<i;t++)w(d[t]);i===d.length&&M(v),p+=g,i+=g,i>d.length&&(i=d.length)}console.log("benefits");console.log("faq");const I=new b(".accordion-container");I.open(0);const f=document.querySelector(".reviews-container"),q=document.getElementById("prevBtn"),x=document.getElementById("nextBtn");let l=0;q.addEventListener("click",()=>{l>0&&(l--,E())});x.addEventListener("click",()=>{l<f.children.length-1&&(l++,E())});function E(){const t=f.children[0].offsetWidth+20;f.style.transform=`translateX(-${l*t}px)`}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("form"),o=document.getElementById("modal"),s=document.querySelector(".modal-close-btn");function c(){o.style.display="flex"}function e(){o.style.display="none"}s.addEventListener("click",e),window.addEventListener("click",function(n){n.target===o&&e()}),t.addEventListener("submit",function(n){n.preventDefault(),c(),t.reset()})});console.log("footer");
//# sourceMappingURL=index.js.map
