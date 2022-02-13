import { closePopup, openPopup, } from './utils.js'
import { getAppInfo, addNewCard, sendLike, removeLike, deleteCard } from './api.js';

const closeImageButton = document.querySelector('.popup_close_image');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');
const cardList = document.querySelector('.elements');
const formCard = document.getElementById('popup-place');
const name = document.getElementById('card-name');
const link = document.getElementById('card-image'); 
const namePopupImage = document.querySelector('.popup-image__picture')
const namePopupTitle = document.querySelector('.popup-image__description')
const likeCounterElement = document.querySelector('.element__like-counter');
const cardButtonSelector = document.querySelector ('.popup__button_place');
const avatarElement = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');

    //Добавление карточек
formCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    cardButtonSelector.textContent = 'Сохранение...';
    addNewCard(name.value, link.value)
    .then((cardData, userId) => {
        addCard(cardData, cardList, userId)
        name.value = '';
        link.value = '';
        formCard.reset();
        cardButtonSelector.classList.add('popup__button_disabled')
        cardButtonSelector.setAttribute('disabled', true)
        closePopup(cardPopup)
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        cardButtonSelector.textContent = 'Создать';
    })
});

export const addCard = (cardData, cardList, userId) => {
    const card = createCard(cardData, userId);
    cardList.prepend(card);
  };

closeImageButton.addEventListener('click', function () {
    closePopup(imagePopup);
});
const cardTemplate = document.querySelector('#card-template').content;

export const createCard = (cardData, userId) => { 
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageElement = cardElement.querySelector('.element__image');
  const titleElement = cardElement.querySelector('.element__text');
  const likeElement = cardElement.querySelector('.element__like');
  const likeCounterElement = cardElement.querySelector('.element__like-counter');
  likeCounterElement.textContent = cardData.likes.length.toString();
  const cardId = cardData._id
  const isLiked = Boolean(cardData.likes.find(userData => userData._id === userId));
    if (isLiked) {
        likeElement.classList.add('element__like_active');
    } else {
        likeElement.classList.remove('element__like_active');
    }
    
  likeElement.addEventListener('click', () => handleCardLike(likeElement, cardId, likeCounterElement));

  const deleteElement = cardElement.querySelector('.element__delete');
  const isOwner = cardData.owner._id === userId;
  deleteElement.classList.add(isOwner ? 'element__delete_active' : 'element__delete_hidden');
  deleteElement.addEventListener('click', () => handleDeleteClick(cardElement, cardId));

  imageElement.addEventListener('click', function (evt) {
      evt.preventDefault();
      namePopupImage.src = cardData.link
      namePopupImage.alt = cardData.name
      namePopupTitle.textContent = cardData.name
      openPopup(imagePopup);
  });

  imageElement.src = cardData.link
  imageElement.alt = cardData.name
  titleElement.textContent = cardData.name

  return cardElement
};

const handleCardLike = (likeElement, cardId, likeCounterElement) => {
    if (!likeElement.classList.contains('element__like_active')) {
        sendLike(cardId).then((cardData) => {
        likeElement.classList.toggle('element__like_active');
        likeCounterElement.textContent = cardData.likes.length.toString()
        })
        .catch((err) => {
        console.log(err)
        });
    } else {
        removeLike(cardId).then((cardData) => {
        likeElement.classList.toggle('element__like_active');
        likeCounterElement.textContent = cardData.likes.length.toString()
        })
        .catch((err) => {
        console.log(err)
        });
    }
  };

  const handleDeleteClick = (cardElement, cardId) => {
    deleteCard(cardId)
      .then(() => { 
        cardElement.remove();
      })
      .catch(err => console.log('Не удалось удалить карточку'));
  };
  

    /* formCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    cardButtonSelector.textContent = 'Сохранение...';
    addNewCard(name.value, link.value)
    .then((cardData) => {
        addCard = (cardData, cardList, currentUserId)
        name.value = '';
        link.value = '';
        formCard.reset();
        cardButtonSelector.classList.add('popup__button_disabled')
        cardButtonSelector.setAttribute('disabled', true)
        closePopup(cardPopup)
        location.reload()
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        cardButtonSelector.textContent = 'Создать';
    })
});

export const addCard = (cardData, cardList, currentUserId) => {
    const card = createCard(cardData, currentUserId);
    cardList.prepend(card);
  };

closeImageButton.addEventListener('click', function () {
    closePopup(imagePopup);
});
const cardTemplate = document.querySelector('#card-template').content;

export const createCard = (cardData, currentUserId, cardUserId) => { 
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageElement = cardElement.querySelector('.element__image');
  const titleElement = cardElement.querySelector('.element__text');
  const likeElement = cardElement.querySelector('.element__like');
  const likeCounterElement = cardElement.querySelector('.element__like-counter');
  likeCounterElement.textContent = cardData.likes.length.toString();
  const cardId = cardData._id
  const isLiked = Boolean(cardData.likes.find(user => user._id === currentUserId));
    if (isLiked) {
        likeElement.classList.add('element__like_active');
    } else {
        likeElement.classList.remove('element__like_active');
    }
    
  likeElement.addEventListener('click', () => handleCardLike(likeElement, cardId, likeCounterElement));

  const deleteElement = cardElement.querySelector('.element__delete');
  const isOwner = cardUserId === currentUserId;
  deleteElement.classList.add(isOwner ? 'element__delete_active' : 'element__delete_hidden');
  deleteElement.addEventListener('click', () => handleDeleteClick(cardElement, cardId));

  imageElement.addEventListener('click', function (evt) {
      evt.preventDefault();
      namePopupImage.src = cardData.link
      namePopupImage.alt = cardData.name
      namePopupTitle.textContent = cardData.name
      openPopup(imagePopup);
  });

  imageElement.src = cardData.link
  imageElement.alt = cardData.name
  titleElement.textContent = cardData.name

  return cardElement
};
    */