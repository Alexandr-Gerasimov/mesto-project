import './index.css';
import './components/validate.js';
import './components/modal.js';
import './components/card.js';

import { enableValidation } from './components/validate.js'

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    inputInvalidClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled'
  };

  enableValidation(validationConfig);