var o=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];console.log(o);const e=document.querySelector(".js-gallery"),t=o.map((({preview:o,original:e})=>`\n    <li class="gallery__item">\n    \n        <a\n          class="gallery__link"\n          href="${e}"\n        >\n          <img\n            class="gallery__image"\n            src="${o}"\n            data-source="${e}"\n            alt="Tulips"\n          />\n        </a>\n      </li>\n    `)).join("");e.insertAdjacentHTML("beforeend",t);const a={openModal:document.querySelector(".lightbox"),modalImg:document.querySelector(".lightbox__image"),closeModal:document.querySelector('[data-action="close-lightbox"]'),backdrop:document.querySelector(".lightbox__overlay")};function n(){document.querySelector(".lightbox.is-open")&&(a.openModal.classList.remove("is-open"),a.modalImg.src=""),window.removeEventListener("keydown",i)}function i(o){console.log(o),"Escape"===o.code&&n()}e.addEventListener("click",(function(o){const e=o.target;if(!e.classList.contains("gallery__image"))return;a.openModal.classList.add("is-open"),window.addEventListener("keydown",i),window.addEventListener("keydown",c),t=e.dataset.source,console.log(t),a.modalImg.src=t,c(e.dataset.source);var t})),console.log(a.openModal),a.closeModal.addEventListener("click",n),a.backdrop.addEventListener("click",(function(o){console.log(o.currentTarget),console.log(o.target),o.currentTarget===o.target&&console.log("click v bacdrop");n()}));document.querySelector(".js-gallery");function c(o){"ArrowLeft"===o.code?a.modalImg=a.modalImg.src:"ArrowRight"===o.code&&(a.modalImg=a.modalImg.src+1)}
//# sourceMappingURL=index.f8a25aab.js.map
