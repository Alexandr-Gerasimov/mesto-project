import '../index.css';
import './FormValidator.js';
import './card.js';
import FormValidator from './FormValidator.js'
import Api from './Api.js';
import { api } from './Api.js';
import Section from './Section.js';
import UserInfo from './UserInfo';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    inputInvalidClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled'
};


const openProfileButton = document.querySelector(".profile-info__edit-button");
const openCardButton = document.querySelector(".profile__add-button");
const openAvatarButton = document.querySelector(".profile__redact");
const profileNameInput = document.getElementById('profile-name');
const profileStatusInput = document.getElementById("profile-status");
const avatarForm = document.getElementById('popup-avatar');
const profileElement = document.getElementById('popup-input');
const formCard = document.getElementById('popup-place');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const avatarPopup = document.querySelector('.popup_type_avatar');
const imagePopup = document.querySelector('.popup_type_image');
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

//

export const userInfo = new UserInfo(profileName, profileStatus, avatarElement)

export const validProfile = new FormValidator(validationConfig, profileElement);
validProfile.enableValidation(validationConfig)

export const validCard = new FormValidator(validationConfig, formCard);
validCard.enableValidation(validationConfig)

export const validAvatar = new FormValidator(validationConfig, avatarForm);
validAvatar.enableValidation(validationConfig)


export const popupImage = new PopupWithImage(imagePopup)
popupImage.setEventListeners();

export const popupCard = new PopupWithForm(
cardPopup,
  (data) => {
    console.log(data)
    popupCard.renderLoading(true);
    api.addNewCard(data.name, data.link)
    .then((cardData) => {
      cardList.prependItem(createCard(cadrData));
      popupCard.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupCard.renderLoading(false))
  }
)
popupCard.setEventListeners()

export const popupProfile = new PopupWithForm(
  profilePopup,
  (data) => {
    popupProfile.renderLoading(true);
    api.profileUpdate(data.name, data.status)
    .then((profile) => {
      userInfo.setUserInfo(profile)
      popupProfile.close()
    })
    .catch(err => console.log(err))
    .finally(() => popupProfile.renderLoading(false))
  }
)
popupProfile.setEventListeners();

export const popupAvatar = new PopupWithForm(
  avatarPopup,
  (data) => {
    popupAvatar.renderLoading(true);
    api.avatarUpdate(data.name)
    .then((profile) => {
      userInfo.setUserInfo(profile)
      popupAvatar.close()
    })
    .catch(err => console.log(err))
    .finally(() => popupAvatar.renderLoading(false))
  }
)
popupAvatar.setEventListeners();

openProfileButton.addEventListener('click', () => {
  const profile = userInfo.getUserInfo();
  profileNameInput.value = profile.userName;
  profileStatusInput.value = profile.userDescription;
  popupProfile.open();
})

openCardButton.addEventListener('click', () => {
  popupCard.open();
  validCard.enableValidation(validationConfig)
})

openAvatarButton.addEventListener('click', () => {
  popupAvatar.open();
})
