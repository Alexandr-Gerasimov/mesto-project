import '../index.css';
import './FormValidator.js';
import './modal.js';
import './Card.js';
import FormValidator from './FormValidator.js'
import Popup from './Popup.js'
import Api from './Api.js';
import Section from './Section.js';
import UserInfo from './UserInfo';
import { createCard } from './Card.js';

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    inputInvalidClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled'
};

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
  headers: {
    Authorization: '86a9bd37-314e-497d-8d30-dfc746fb3e94', // Токен
      'Content-Type': 'application/json'
  }
}); 

const openProfileButton = document.querySelector(".profile-info__edit-button");
const openCardButton = document.querySelector(".profile__add-button");
const openAvatarButton = document.querySelector(".profile__redact");
const profileNameInput = document.getElementById("profile-name");
const profileStatusInput = document.getElementById("profile-status");

openProfileButton.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;
  popupProfile.open();
  popupProfile.setEventListeners();
});

openCardButton.addEventListener("click", function () {
  popupCard.open();
  popupCard.setEventListeners();
});

openAvatarButton.addEventListener("click", function () {
  popupAvatar.open();
  popupAvatar.setEventListeners();
});

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
 
const avatarElement = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');
const cardTemplate = document.querySelector('#card-template');

const cardSection = new Section({
  renderer: (cardData) => {
      cardSection.addItem(createCard(cardData, cardTemplate));
  }
},
    '.elements'
);

const userInfo = new UserInfo()