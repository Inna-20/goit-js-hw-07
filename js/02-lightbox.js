import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');

function createGallery(items) {
    const markup = items.map(item =>
        `<li style = "display: contents">
<a class="gallery__item" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    alt="${item.description}"
  />
</a>
</li>
`).join("");
    imagesContainer.insertAdjacentHTML('beforeend', markup);
}

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

show.simplelightbox