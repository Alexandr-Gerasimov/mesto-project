export { closePopup, openPopup, closeByClick };

import { enableValidation } from './validate.js'
import { validationConfig } from '../index.js'

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened')
      closePopup(openedPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
    document.addEventListener('click', closeByClick);
}
  
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
    document.removeEventListener('click', closeByClick);
}

function closeByClick(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
    }
  }