import { galleryItems } from './gallery-items.js';
// Change code below this line
// import { basicLightbox } from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
initGalleryScript();
// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';


// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems, galleryContainer) {
  const galleryContent = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </li>`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', galleryContent);
}

createGalleryMarkup(galleryItems, galleryContainer);


galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
    evt.preventDefault();
    // console.dir(evt.target.dataStore);
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    };

    // console.log(evt.target);

    const bigImage = evt.target;
    bigImage.src = evt.target.dataset.source;
    const imageInstance = basicLightbox.create(
      bigImage
      //     `
      //     <img
      //         class="gallery__image"
      //         src="${evt.target.dataset.source}"

      //     />
      // `
    );
    imageInstance.show();
  //   console.log(evt);
}

function initGalleryScript() {
  const scriptCDN = document.createElement('script');
  scriptCDN.src =
    'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
    document.body.append(scriptCDN);
    console.log('script injected')
  document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css">'
    );
    console.log('css injected');
}


