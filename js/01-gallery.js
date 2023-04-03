import { galleryItems } from './gallery-items.js';
// Change code below this line

// initGalleryScript();
const galleryContainer = document.querySelector('.gallery');
createGalleryMarkup(galleryItems, galleryContainer);
galleryContainer.addEventListener('click', onGalleryClick);

// function initGalleryScript() {
//   const scriptCDN = document.createElement('script');
//   scriptCDN.src =
//     'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
//   document.body.appendChild(scriptCDN);
//   document.head.insertAdjacentHTML(
//     'beforeend',
//     '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css">'
//   );
// }

function onGalleryClick(evt) {
  const controller = new AbortController();
  const currentElement = evt.target;

  evt.preventDefault();

  if (!currentElement.classList.contains('gallery__image')) {
    return;
  }
  basicLightbox
    .create(
      composeFullscreenImgElement(currentElement.dataset.source, currentElement.alt),
      {
        onShow: (inst, ctrl = controller) => {
          onFullscreenImageShow(inst, ctrl)
        },
        onClose: (inst, ctrl = controller) => {
          ctrl.abort();
        },
      }
    )
    .show();
}

function onFullscreenImageShow(inst, ctrl){
  document.body.addEventListener(
    'keydown',
    evt => {
      if (!(evt.code === 'Escape')) {
        return;
      }
      inst.close();
    },
    { signal: ctrl.signal }
  );
}

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

function composeFullscreenImgElement(original, description) {
  return `<img
            src="${original}"
            alt="${description}"
          />`;
}
