var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n),n("h7M65");var a=n("7JhjK"),l=n("8mK9U");function r(e){const t=e.map((({name:e})=>e));return t.length||t.push("Other"),t.length>2?[t[0],t[1],"Other"].join(", "):t.join(", ")}var s=n("CjjGD");function o(e){if(e||e.length)return e.map((({id:e,poster_path:t,title:i,name:n,vote_average:o,original_title:c,genres:d,overview:u,release_date:f,first_air_date:p})=>`<li class="films-list__item" data-id="${e}">\n  <img class="films-list__img" src="${(0,s.default)(t)}" alt="${(0,l.default)(i,n)}" />\n  <div class="film-list__data">\n  <h2 class="films-list__title">${(0,l.default)(c,n)}</h2>\n    <span class="films-list__info films-list__ganre">${r(d)}\n  </span> <span class="films-list__info">&#10072;</span> <span class="films-list__info release-date">${(0,a.default)(f,p)}\n<span class="films-list__info films-rating "> ${o.toFixed(1)}</span></div>\n</li>`)).join("")}var c=n("dekjU");const d={libraryUl:document.querySelector("#library"),BtnWatched:document.querySelector("#watched1"),BtnQueue:document.querySelector("#queue1")},u=document.querySelector(".pagination");let f;window.onload=()=>{if(u.classList.add("hide-pagination"),d.BtnWatched.classList.add("library-filter-btn--active"),d.BtnQueue.classList.remove("library-filter-btn--active"),f=JSON.parse(localStorage.getItem("watched")),!f)return void(d.libraryUl.innerHTML="");const e=f.slice(0,20);d.libraryUl.innerHTML=o(e);const t=Math.ceil(f.length/20);(0,c.default)(1,t)},d.BtnWatched.addEventListener("click",(()=>{if(u.classList.add("hide-pagination"),d.BtnWatched.classList.add("library-filter-btn--active"),d.BtnQueue.classList.remove("library-filter-btn--active"),f=JSON.parse(localStorage.getItem("watched")),!f)return void(d.libraryUl.innerHTML="");const e=f.slice(0,20);d.libraryUl.innerHTML=o(e);const t=Math.ceil(f.length/20);(0,c.default)(1,t)})),d.BtnQueue.addEventListener("click",(()=>{if(u.classList.add("hide-pagination"),d.BtnWatched.classList.remove("library-filter-btn--active"),d.BtnQueue.classList.add("library-filter-btn--active"),f=JSON.parse(localStorage.getItem("queue")),!f)return void(d.libraryUl.innerHTML="");const e=f.slice(0,20);d.libraryUl.innerHTML=o(e);const t=Math.ceil(f.length/20);(0,c.default)(1,t)})),u.addEventListener("click",(e=>{if(""===e.target.innerText||"button"!==e.target.type)return;let t=document.querySelector(".current-btn").innerText;t="+1"===e.target.innerText?parseInt(t)+1:"-1"===e.target.innerText?parseInt(t)-1:e.target.innerText;const i=[],n=20*t-20,a=n+20;for(let e=n;e<a&&f[e];e+=1)i.push(f[e]);d.libraryUl.innerHTML=o(i);const l=Math.ceil(f.length/20);(0,c.default)(parseInt(t),l),window.scrollTo({top:270,behavior:"smooth"})})),n("2sCHQ"),n("c30xx"),n("epvLZ"),n("37wlI");
//# sourceMappingURL=library.1b37f17e.js.map
