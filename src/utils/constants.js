export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    inputInvalidClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled'
};

export const openProfileButton = document.querySelector(".profile-info__edit-button");
export const openCardButton = document.querySelector(".profile__add-button");
export const openAvatarButton = document.querySelector(".profile__redact");
export const profileNameInput = document.getElementById('profile-name');
export const profileStatusInput = document.getElementById("profile-status");
export const avatarForm = document.getElementById('popup-avatar');
export const profileElement = document.getElementById('popup-input');
export const formCard = document.getElementById('popup-place');
export const profilePopup = document.querySelector('.popup_type_profile');
export const cardPopup = document.querySelector('.popup_type_card');
export const avatarPopup = document.querySelector('.popup_type_avatar');
export const imagePopup = document.querySelector('.popup_type_image');
export const avatarElement = document.querySelector('.profile__avatar');
export const profileName = document.querySelector('.profile-info__name');
export const profileStatus = document.querySelector('.profile-info__status');
export const closeImageButton = document.querySelector('.popup_close_image');
export const cardTemplate = document.querySelector('#card-template').content;