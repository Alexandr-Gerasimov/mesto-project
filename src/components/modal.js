import { closePopup, openPopup, closeByClick } from './utils.js'

const openProfileButton = document.querySelector('.profile-info__edit-button');
const openCardButton = document.querySelector('.profile__add-button');
const closeProfileButton = document.querySelector('.popup_close_profile');
const closeCardButton = document.querySelector('.popup_close_card');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const profileElement = document.getElementById('popup-input');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');
const profileNameInput = document.getElementById('profile-name');
const profileStatusInput = document.getElementById('profile-status');

openProfileButton.addEventListener('click', function () {
  profileNameInput.value = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;
  openPopup(profilePopup);
  document.addEventListener('click', closeByClick);
});

openCardButton.addEventListener('click', function () {
  openPopup(cardPopup);
  document.addEventListener('click', closeByClick);
});

closeProfileButton.addEventListener('click', function () {
  closePopup(profilePopup)
});

closeCardButton.addEventListener('click', function () {
  closePopup(cardPopup)
});


function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileStatus.textContent = profileStatusInput.value;
  closePopup(profilePopup)
}

profileElement.addEventListener('submit', handleProfileSubmit);




