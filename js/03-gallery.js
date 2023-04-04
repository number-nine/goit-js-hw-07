import { galleryItems } from './gallery-items.js';
// Change code below this line

let myLightbox;
const galleryContainer = document.querySelector('.gallery');
createGalleryMarkup(galleryItems, galleryContainer);
galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  const currentElement = evt.target;

  evt.preventDefault();

  if (!currentElement.classList.contains('gallery__image')) {
    return;
  }
  currentElement.tab;
  myLightbox = basicLightbox.create(
    composeFullscreenImgElement(
      currentElement.dataset.source,
      currentElement.alt
    ),
    {
      onShow: () => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );
  myLightbox.show();
}

function onEscPress(event) {
  // console.log(event);
  if (!(event.code === 'Escape')) {
    return;
  }
  myLightbox.close();
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
