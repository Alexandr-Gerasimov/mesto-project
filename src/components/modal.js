import { closePopup, openPopup } from './utils.js'

const openProfileButton = document.querySelector('.profile-info__edit-button');
const openCardButton = document.querySelector('.profile__add-button');
const openAvatarButton = document.querySelector('.profile__redact');
const closeProfileButton = document.querySelector('.popup_close_profile');
const closeCardButton = document.querySelector('.popup_close_card');
const closeAvatarButton = document.querySelector('.popup_close_avatar');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const avatarPopup = document.querySelector('.popup_type_avatar');
const profileElement = document.getElementById('popup-input');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');
const profileNameInput = document.getElementById('profile-name');
const profileStatusInput = document.getElementById('profile-status');
const link = document.getElementById('profile-avatar');

openProfileButton.addEventListener('click', function () {
  profileNameInput.value = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;
  openPopup(profilePopup);
});

openCardButton.addEventListener('click', function () {
  openPopup(cardPopup);
});

openAvatarButton.addEventListener('click', function () {
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


function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileStatus.textContent = profileStatusInput.value;
  closePopup(profilePopup)
}

profileElement.addEventListener('submit', handleProfileSubmit);

function changeAvatar(link) {
  const avatarElement = document.querySelector('.profile__avatar');
  avatarElement.src = link
  closePopup(avatarPopup);
}

avatarPopup.addEventListener('submit', function (evt) {
  evt.preventDefault();
  changeAvatar(link.value);
  link.value = '';
  closePopup(avatarPopup);
});
