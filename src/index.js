import dataGallery from './app';
console.log(dataGallery);
import {
  createCardsMarkup,
  onGetFullImg,
  onOpenModal,
  onModalImg,
  closeModal,
  onEscPress,
  onLeftRight,
} from './task-01';

const containerEl = document.querySelector('.js-gallery');
const cardsMarkup = createCardsMarkup(dataGallery);
containerEl.insertAdjacentHTML('beforeend', cardsMarkup);
const ref = {
  openModal: document.querySelector('.lightbox'),
  modalImg: document.querySelector('.lightbox__image'),
  closeModal: document.querySelector('[data-action="close-lightbox"]'),
  backdrop: document.querySelector('.lightbox__overlay'),
};
createCardsMarkup(dataGallery);
onGetFullImg();
onOpenModal();
onModalImg();
closeModal();
onEscPress();
onLeftRight();
