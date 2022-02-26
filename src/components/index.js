import '../index.css';
import './validate.js';
import './modal.js';
import './card.js';
import { getAppInfo, api } from './api.js';
import { enableValidation } from './validate.js'
import { createCard } from './card';

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    inputInvalidClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled'
  };

  enableValidation(validationConfig);
