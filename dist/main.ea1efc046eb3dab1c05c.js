(()=>{var e,t={178:(e,t,n)=>{"use strict";n(76);var r=n(236),a=n(848);new r.A(".swiper",{modules:[a.dK],pagination:{el:".swiper-pagination"},spaceBetween:8,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}}),n(314),document.addEventListener("DOMContentLoaded",(function(){var e=document.body;if(!e.getAttribute("class")){var t=window.location.pathname;t.includes("purchases")?e.classList.add("purchases"):t.includes("parents")?e.classList.add("parents"):t.includes("activity")&&e.classList.add("activity")}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".page__tabs-item");e.length>0&&e[0].classList.add("page__tabs-active"),e.forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault(),e.forEach((function(e){return e.classList.remove("page__tabs-active")})),t.classList.add("page__tabs-active");var r=t.getAttribute("href").substring(1),a=document.getElementById(r);if(a){var o=a.getBoundingClientRect().top+window.scrollY-122;window.scrollTo({top:o,behavior:"smooth"})}}))}))}))},76:()=>{var e=document.querySelector(".btn__menu"),t=document.querySelector(".btn__menu-text"),n=document.querySelector(".burger");e.addEventListener("click",(function(){n.classList.toggle("burger__visible"),e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),n.classList.contains("burger__visible")?t.textContent="Закрыть":t.textContent="Меню"}))},314:()=>{document.querySelectorAll(".rolling-text").forEach((function(e){var t=e.innerText;e.innerHTML="";var n=document.createElement("div");n.classList.add("rolling__block");var r=document.createElement("span");r.innerText=t,r.classList.add("word"),n.appendChild(r),e.appendChild(n),e.appendChild(n.cloneNode(!0))}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,a,o]=e[d],s=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var d=c(r)}for(t&&t(n);l<i.length;l++)o=i[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunkapt_center=self.webpackChunkapt_center||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[839],(()=>r(178)));a=r.O(a)})();
//# sourceMappingURL=main.ea1efc046eb3dab1c05c.js.map