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

export default class Card {
    constructor(cardData, selector) {
        this._name = cardData._name
        this._link = cardData._link
        this._likes = cardData._likes;
        this._isOwner = cardData.owner._id
        this._selector = selector;
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

        this._elementImage.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this.name;

        this._elementHeading.querySelector('.element__text');
        this._elementHeading.textContent = this._name;

        this._elementLike.querySelector('.element__like');
        
        this._elementLikeCounter.querySelector('.element__like-counter');
        this._elementLikeCounter.textContent = this._likes.length;

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
    if (userId === this._isOwner) {
        deleteElement.classList.add('element__delete_hidden')
    }