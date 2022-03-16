import '../index.css';
import './FormValidator.js';
import './modal.js';
import './Card.js';
import FormValidator from './FormValidator.js'
import Popup from './Popup.js'
import Api from './Api.js';
import Section from './Section.js';
import { createCard } from './Card.js';

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


const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const avatarPopup = document.querySelector('.popup_type_avatar');
const imagePopup = document.querySelector('.popup_type_image');

export const popupProfile = new Popup(profilePopup)
export const popupCard = new Popup(cardPopup)
export const popupAvatar = new Popup(avatarPopup)
export const popupImage = new Popup(imagePopup)

export const api2 = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
  headers: {
    Authorization: '86a9bd37-314e-497d-8d30-dfc746fb3e94', // Токен
      'Content-Type': 'application/json'
  }
}); 

const avatarElement = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');

api2.getAppInfo()
  .then(([user, cards]) => {
    profileName.textContent = user.name;
    profileStatus.textContent = user.about;
    avatarElement.src = user.avatar;
    cardSection.renderItem(cards)
    userId = user._id
  })
  .catch(err => console.log(err));

const cardSection = new Section({
  renderer: (cardData) => {
      cardSection.addItem(createCard(cardData));
  }
},
    '.elements'
);