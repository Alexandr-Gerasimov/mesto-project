import '../index.css';
import './validate.js';
import './modal.js';
import './card.js';
import { getAppInfo, api } from './api.js';
import FormValidator from './validate.js'
import { createCard } from './card';

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    inputInvalidClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled'
};

const avatarForm = document.getElementById('popup-avatar');
const profileElement = document.getElementById('popup-input');
const formCard = document.getElementById('popup-place');

export const validProfile = new FormValidator(validationConfig, profileElement);
export const validCard = new FormValidator(validationConfig, formCard);
export const validAvatar = new FormValidator(validationConfig, avatarForm);

validProfile.enableValidation(validationConfig)
validCard.enableValidation(validationConfig)
validAvatar.enableValidation(validationConfig)