import { closePopup, openPopup } from './utils.js'
import { profileUpdate, avatarUpdate } from './api.js';

const openProfileButton = document.querySelector('.profile-info__edit-button');
const openCardButton = document.querySelector('.profile__add-button');
const openAvatarButton = document.querySelector('.profile__redact');
const closeProfileButton = document.querySelector('.popup_close_profile');
const closeCardButton = document.querySelector('.popup_close_card');
const closeAvatarButton = document.querySelector('.popup_close_avatar');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarForm = document.getElementById('popup-avatar');
const profileElement = document.getElementById('popup-input');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');
const profileNameInput = document.getElementById('profile-name');
const profileStatusInput = document.getElementById('profile-status');
const link = document.getElementById('profile-avatar');
const avatarButtonSelector = document.querySelector('.popup__button_avatar');
const profileButtonSelector = document.querySelector('.popup__button_profile')
const popupButtonSubmit = document.querySelector('.popup__button');
const cardButtonSelector = document.querySelector ('.popup__button_place')

openProfileButton.addEventListener('click', function () {
  popupButtonSubmit.textContent = 'Сохранить';
  profileNameInput.value = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;
  openPopup(profilePopup);
});

openCardButton.addEventListener('click', function () {
  cardButtonSelector.textContent = 'Создать';
  openPopup(cardPopup);
});

openAvatarButton.addEventListener('click', function () {
  popupButtonSubmit.textContent = 'Сохранить';
  openPopup(avatarPopup);
})

closeProfileButton.addEventListener('click', function () {
  
  closePopup(profilePopup);
});

closeCardButton.addEventListener('click', function () {
  closePopup(cardPopup);
});

closeAvatarButton.addEventListener('click', function () {
  closePopup(avatarPopup);
});


export function handleProfileSubmit(evt) {
  evt.preventDefault();
  popupButtonSubmit.textContent = 'Сохранение...';
  profileName.textContent = profileNameInput.value;
  profileStatus.textContent = profileStatusInput.value;
  profileUpdate(profileNameInput.value, profileStatusInput.value);
  profileElement.reset();
  profileButtonSelector.classList.add('popup__button_disabled')
  profileButtonSelector.setAttribute('disabled', true);
  closePopup(profilePopup)
}

profileElement.addEventListener('submit', handleProfileSubmit);


export function changeAvatar(evt) {
  evt.preventDefault();
  const avatarElement = document.querySelector('.profile__avatar');
  avatarElement.src = link.value;
  avatarUpdate(link.value);
  popupButtonSubmit.textContent = 'Сохранение...';
  link.value = '';
  avatarForm.reset();
  avatarButtonSelector.classList.add('popup__button_disabled')
  avatarButtonSelector.setAttribute('disabled', true);
  closePopup(avatarPopup);
}

avatarPopup.addEventListener('submit', changeAvatar)
