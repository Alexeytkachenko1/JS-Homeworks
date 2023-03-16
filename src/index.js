import dataGallery from './app';
console.log(dataGallery);

// - Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и
//   предоставленному шаблону.
// - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
//   изображения.
// - Открытие модального окна по клику на элементе галереи.
// - Подмена значения атрибута `src` элемента `img.lightbox__image`.
// - Закрытие модального окна по клику на кнопку
//   `button[data-action="close-lightbox"]`.
// - Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
//   для того, чтобы при следующем открытии модального окна, пока грузится
//   изображение, мы не видели предыдущее.

const containerEl = document.querySelector('.js-gallery');
const cardsMarkup = createCardsMarkup(dataGallery);
containerEl.insertAdjacentHTML('beforeend', cardsMarkup);
const ref = {
  openModal: document.querySelector('.lightbox'),
  modalImg: document.querySelector('.lightbox__image'),
  closeModal: document.querySelector('[data-action="close-lightbox"]'),
  backdrop: document.querySelector('.lightbox__overlay'),
};

function createCardsMarkup(dataGallery) {
  return dataGallery
    .map(({ preview, original }) => {
      return `
    <li class="gallery__item">
    
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Tulips"
          />
        </a>
      </li>
    `;
    })
    .join('');
}
containerEl.addEventListener('click', onGetFullImg);

function onGetFullImg(event) {
  const eventEl = event.target;
  const isImg = eventEl.classList.contains('gallery__image');
  if (!isImg) {
    return;
  }

  onOpenModal();
  onModalImg(eventEl.dataset.source);
  onLeftRight(eventEl.dataset.source);
}

console.log(ref.openModal);

function onOpenModal() {
  ref.openModal.classList.add('is-open');
  window.addEventListener('keydown', onEscPress);
  window.addEventListener('keydown', onLeftRight);
}

function onModalImg(imgSet) {
  console.log(imgSet);
  ref.modalImg.src = imgSet;
}
ref.closeModal.addEventListener('click', closeModal);

function closeModal() {
  const isOpenModal = document.querySelector('.lightbox.is-open');
  if (isOpenModal) {
    ref.openModal.classList.remove('is-open');
    ref.modalImg.src = '';
  }
  window.removeEventListener('keydown', onEscPress);
}
function onEscPress(event) {
  console.log(event);
  if (event.code === 'Escape') {
    closeModal();
  }
}
ref.backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  if (event.currentTarget === event.target) {
    console.log('click v bacdrop');
  }
  closeModal();
}
const refUL = document.querySelector('.js-gallery');
// const mapUl = refUL.map(index => index);
// console.log(mapUl);
function onLeftRight(event) {
  if (event.code === 'ArrowLeft') {
    ref.modalImg = ref.modalImg.src;
  } else if (event.code === 'ArrowRight') {
    ref.modalImg = ref.modalImg.src + 1;
  }
}
