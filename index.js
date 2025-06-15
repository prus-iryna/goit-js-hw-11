import{a as h,S as g,i as a}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",L="50785102-9c13520f9ca563685942e67a3";function v(i){const o={key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return h.get(y,{params:o}).then(r=>r.data).catch(r=>{r.message})}const u=document.querySelector(".gallery"),p=document.querySelector(".loader");let b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="gallery-item">
  <a href="${s}">
    <img loading="lazy" width="360" height=200px src="${r}" alt="${e}">
  </a>
  <div class="info">
  <div class="row">
    <p>Likes</p>
    <p>Views</p>
    <p>Comments</p>
    <p>Downloads</p>
  </div>
  <div class=" value">
    <p>${t}</p>
    <p>${n}</p>
    <p>${f}</p>
    <p>${m}</p>
  </div>
</div>

  

</li>`).join("");u.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){u.innerHTML=""}function q(){p.classList.remove("hidden")}function c(){p.classList.add("hidden")}const d=document.querySelector("form"),l=d.querySelector('input[name="search-text"]');d.addEventListener("submit",P);function P(i){i.preventDefault();const o=l.value.trim();if(o===""){a.warning({message:"Please enter a search term before submitting.",position:"topRight"});return}w(),q(),v(o).then(r=>{if(c(),r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(r.hits)}).catch(r=>{c(),a.error({message:"Something went wrong.Please try again.",position:"topRight"})}).finally(()=>{l.value=""})}
//# sourceMappingURL=index.js.map
