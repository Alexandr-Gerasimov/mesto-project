import { popupProfile, popupAvatar } from './index.js'
import { api } from './Api.js';

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

export function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileStatus.textContent = profileStatusInput.value;
  popupButtonSubmit.textContent = 'Сохранение...';
  api.profileUpdate(profileName.textContent, profileStatus.textContent)
  .then(() => {
    profileElement.reset();
    profileButtonSelector.classList.add('popup__button_disabled')
    profileButtonSelector.setAttribute('disabled', true);
    popupProfile.close();
  })
  .catch((err) => {
      console.log(err);
  })
  .finally(() => {
    popupButtonSubmit.textContent = 'Сохранить';
  })
      
}

profileElement.addEventListener('submit', handleProfileSubmit);


export function changeAvatar(evt) {
  evt.preventDefault();
  const avatarElement = document.querySelector('.profile__avatar');
  avatarElement.src = link.value;
  popupButtonSubmit.textContent = 'Сохранение...';
  api.avatarUpdate(link.value)
  .then(() => {
    link.value = '';
    avatarForm.reset();
    avatarButtonSelector.classList.add('popup__button_disabled')
    avatarButtonSelector.setAttribute('disabled', true);
    popupAvatar.close();
  })
  .catch((err) => {
      console.log(err);
  })
  .finally(() => {
    popupButtonSubmit.textContent = 'Сохранить';
  })
}

avatarPopup.addEventListener('submit', changeAvatar)
