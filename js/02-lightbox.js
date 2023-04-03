import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
createGalleryMarkup(galleryItems, galleryContainer);

initGalleryInstance();




// function initGallery() {
//   const scriptCDN = document.createElement('script');
//   scriptCDN.src =
//     'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.13.0/simple-lightbox.min.js';
//   scriptCDN.integrity =
//     'sha512-va85zLd+1szc8k3CyJ26pBSluqH+c3H+SOf4cBWhpHFU3ZI331gE6nqLUIm0kd1e0HcZq5YYwdHuSed8IhACAA==';
//   scriptCDN.crossOrigin = 'anonymous';
//   scriptCDN.referrerpolicy = 'no-referrer';
//   document.body.appendChild(scriptCDN);
//   scriptCDN.onload = initGalleryInstance;
//   document.head.insertAdjacentHTML(
//     'beforeend',
//     '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.13.0/simple-lightbox.css" integrity="sha512-t+hNIFYF5a+PkEcq/FJdJ8oobIvrcn+ut6DabKGfsKnAP9KaODT3vzS9EKcWflSjxxl7FhkCR7qeqv4eUxLAkg==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
//   );
// }

function createGalleryMarkup(galleryItems, galleryContainer) {
  const galleryContent = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
       </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryContent);
}

function initGalleryInstance() {
    new SimpleLightbox('.gallery .gallery__link', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}
