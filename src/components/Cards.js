import { popupCard, popupImage } from './index.js'
import PopupWithImage from './PopupWithImage.js';

const closeImageButton = document.querySelector('.popup_close_image');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');
const cardList = document.querySelector('.elements');
const formCard = document.getElementById('popup-place');
const name = document.getElementById('card-name');
const link = document.getElementById('card-image'); 
const namePopupImage = document.querySelector('.popup-image__picture')
const namePopupTitle = document.querySelector('.popup-image__description')
const cardButtonSelector = document.querySelector ('.popup__button_place');
const avatarElement = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');
let userId = null

export default class Card {
    constructor(cardData, selector) {
        this._cardData = cardData
        this._selector = selector
    }

    _getElement() {
        const cardElement = document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _generate() {
        this._element = this._getElement();
        this._element.querySelector('.element__image').src = this._cardData.link
        this._element.querySelector('.element__text').alt = this._cardData.name
        this._element.querySelector('.element__like').textContent = this._cardData.name
        this._element.querySelector('.element__like-counter').textContent = this._cardData.likes.length.toString();
        return this._element
    }

    _setEventListeners() {
        this._element.addEventListener('click', () => {
            PopupWithImage.open();
        });
    
        closeImageButton.addEventListener('click', () => {
            popupImage.close();
        });
    }

    _likeButtonListener() {
        likeElement.addEventListener('click', () => handleCardLike(likeElement, cardId, likeCounterElement));   
    }

    _deleteCardListener() {
        deleteElement.addEventListener('click', () => handleDeleteClick(cardElement, cardId));  
    }
   
}
    const cardId = cardData._id
    const isLiked = Boolean(cardData.likes.find(userData => userData._id === userId));
      if (isLiked) {
          likeElement.classList.add('element__like_active');
      } else {
          likeElement.classList.remove('element__like_active');
      }
        
    const deleteElement = cardElement.querySelector('.element__delete');
    const isOwner = cardData.owner._id;
      if (userId === isOwner) {
          deleteElement.classList.add('element__delete_hidden')
      }

  