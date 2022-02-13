import '../index.css';
import './validate.js';
import './modal.js';
import './card.js';
import { getAppInfo, } from './api.js';
import { enableValidation } from './validate.js'
import { createCard } from './card';

const avatarElement = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');
const cardList = document.querySelector('.elements');

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    inputInvalidClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled'
  };

  enableValidation(validationConfig);

getAppInfo()
  .then(([user, cards]) => {
    profileName.textContent = user.name;
    profileStatus.textContent = user.about;
    avatarElement.src = user.avatar;
    const currentUserId = user._id;
    const initialCards = cards
    initialCards.forEach((cardData) => {
      cardList.prepend(createCard(cardData, currentUserId, cardData.owner._id))
    })
  })
  .catch(err => console.log(err));

  