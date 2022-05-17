import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');

function createGallery(items) {
    const markup = items.map(item =>
        `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}" 
    alt="${item.description}"
  />
</a>
</div>`
    ).join("");
    imagesContainer.insertAdjacentHTML('beforeend', markup);
}

function modalWindow(evt) {
    evt.preventDefault();
    const imageEl = evt.target.classList.contains('gallery__image');
    if (!imageEl) { return }
    const image = evt.target.getAttribute('data-source')
    const instance = basicLightbox.create(`<div class = "modal"><img src="${image}" width="800" height="600"></div>`);


    instance.show();

    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.key === "Escape" || evt.key === "Esc") {
            instance.close();
        }
    }
    document.querySelector('img').removeEventListener('click');
}

createGallery(galleryItems);
imagesContainer.addEventListener('click', modalWindow) 