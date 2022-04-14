import '../index.css';
import './FormValidator.js';
import './card.js';
import FormValidator from './FormValidator.js'
import { api } from './Api.js';
import Section from './Section.js';
import UserInfo from './UserInfo';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import { createCard } from './card.js';
import { 
  validationConfig,
  openProfileButton,
  openCardButton,
  openAvatarButton,
  profileNameInput,
  profileStatusInput,
  avatarForm,
  profileElement,
  formCard,
  profilePopup,
  cardPopup,
  avatarPopup,
  imagePopup,
  avatarElement,
  profileName,
  profileStatus,
 } from '../utils/constants.js'

const cardSection = new Section(createCard, '.elements');

let userId = null

api.getAppInfo()
  .then(([user, cards]) => {
    profileName.textContent = user.name;
    profileStatus.textContent = user.about;
    avatarElement.src = user.avatar;
    userInfo.setUserInfo(user);
    const userData = user._id
    const initialCards = cards
    initialCards.forEach((cardData) => {
      cardSection.addItem(createCard(cardData, userData))
    })
    userId = user._id
  })
  .catch(err => console.log(err));

export const userInfo = new UserInfo(profileName, profileStatus, avatarElement)

export const validProfile = new FormValidator(validationConfig, profileElement);
validProfile.enableValidation()

export const validCard = new FormValidator(validationConfig, formCard);
validCard.enableValidation()

export const validAvatar = new FormValidator(validationConfig, avatarForm);
validAvatar.enableValidation()


export const popupImage = new PopupWithImage(imagePopup)
popupImage.setEventListeners();

export const popupCard = new PopupWithForm(
cardPopup,
  (data) => {
    popupCard.renderLoading(true);
    api.addNewCard(data.name, data.link)
    .then((data) => {
      cardSection.addItem(createCard(data, userId));
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
  validCard.resetValidation()
})

openAvatarButton.addEventListener('click', () => {
  popupAvatar.open();
  validAvatar.resetValidation()
})
