var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in i){var l=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,l.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequired7c6=l),l("jKXAZ");var s=l("7JhjK"),n=l("8mK9U");const a={libraryUl:document.querySelector("#library"),BtnWatched:document.querySelector("#watched"),BtnQueue:document.querySelector("#queue")},r=localStorage.getItem("watched"),o=localStorage.getItem("queue");function f(){const e=JSON.parse(r);if(console.log(e),e&&e.length)return e.map((({id:e,poster_path:t,title:i,name:l,vote_average:a,original_title:r,genres:o,overview:f,release_date:c,first_air_date:_})=>`<li class="films-list__item" data-id="${e}">\n  <img class="films-list__img" src="https://image.tmdb.org/t/p/w500${t}" alt="${(0,n.default)(i,l)}" />\n  <h2 class="films-list__title">${(0,n.default)(r,l)}</h2>\n    <span class="films-list__info films-list__ganre">${d(o)}\n  </span> <span class="films-list__info">&#10072;</span> <span class="films-list__info release-date">${(0,s.default)(c,_)}\n<span class="films-list__info films-rating "> ${a.toFixed(1)}</span>\n</li>`)).join("")}function c(){const e=JSON.parse(o);if(console.log(watched),e&&e.length)return e.map((({id:e,poster_path:t,title:i,name:l,vote_average:a,original_title:r,genres:o,overview:f,release_date:c,first_air_date:_})=>`<li class="films-list__item" data-id="${e}">\n  <img class="films-list__img" src="https://image.tmdb.org/t/p/w500${t}" alt="${(0,n.default)(i,l)}" />\n  <h2 class="films-list__title">${(0,n.default)(r,l)}</h2>\n    <span class="films-list__info films-list__ganre">${d(o)}\n  </span> <span class="films-list__info">&#10072;</span> <span class="films-list__info release-date">${(0,s.default)(c,_)}\n<span class="films-list__info films-rating "> ${a.toFixed(1)}</span>\n</li>`)).join("")}function d(e){const t=e.map((({name:e})=>e));return 0===t.length&&t.push("Other"),t.length>2?[t[0],t[1],"Other"].join(", "):t.join(", ")}function _(e){a.libraryUl.innerHTML=e}a.BtnWatched.addEventListener("click",(()=>{_(f())})),a.BtnQueue.addEventListener("click",(()=>{a.libraryUl.innerHTML="",_(c())})),console.log(c(queue)),_(f()),l("1XfFS"),l("ljYpv"),l("c30xx"),l("epvLZ");
//# sourceMappingURL=library.59811746.js.map
