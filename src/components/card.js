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
const cardButtonSelector = document.querySelector ('.popup__button_place')

    //Добавление карточек
formCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    cardButtonSelector.textContent = 'Сохранение...';
    getAppInfo((cardData) => {
        createCard(cardData, name.value, link.value, currentUserId, cardUserId);
    })
    addNewCard(name.value, link.value);
    name.value = '';
    link.value = '';
    formCard.reset();
    cardButtonSelector.classList.add('popup__button_disabled')
    cardButtonSelector.setAttribute('disabled', true);
    closePopup(cardPopup);
});

closeImageButton.addEventListener('click', function () {
    closePopup(imagePopup);
});

export const createCard = (cardData, currentUserId, cardUserId) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageElement = cardElement.querySelector('.element__image');
  const titleElement = cardElement.querySelector('.element__text');

  const cardId = cardData._id
  const likeElement = cardElement.querySelector('.element__like');
  const likeCounterElement = cardElement.querySelector('.element__like-counter');
  likeCounterElement.textContent = cardData.likes.length.toString();
  const isLiked = Boolean(cardData.likes.find(user => user._id === currentUserId));
    if (isLiked) {
        likeElement.classList.add('element__like_active');
    } else {
        likeElement.classList.remove('element__like_active');
    }
    
  const handleCardLike = (likeCounterElement) => {
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


  likeElement.addEventListener('click', () => handleCardLike(cardElement, cardId, isLiked));
  
  const handleDeleteClick = (cardElement, cardId) => {
    deleteCard(cardId)
      .then(() => { 
        cardElement.remove();
      })
      .catch(err => console.log('Не удалось удалить карточку'));
  };

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

