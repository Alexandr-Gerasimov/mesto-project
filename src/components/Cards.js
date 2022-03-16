import { popupCard, popupImage } from './index.js'
import PopupWithImage from './PopupWithImage.js';

const closeImageButton = document.querySelector('.popup_close_image');

export default class Card {
    constructor(cardData, selector) {
        this._name = cardData._name
        this._link = cardData._link
        this._likes = cardData._likes;
        this._isOwner = cardData.owner._id
        this._cardId = cardData._id;
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

        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this.name;

        this._elementHeading = this._element.querySelector('.element__text');
        this._elementHeading.textContent = this._name;

        this._elementLike = this.element.querySelector('.element__like');

        this._elementLikeCounter = this_element.querySelector('.element__like-counter');
        this._elementLikeCounter.textContent = this._likes.length;

        this._elementRemove = this._element.querySelector('.element__delete');

        this._setLikesState();
        this.__likeButtonListener();
        this._setRemoveButtonState();
        this._deleteCardListener();

        return this._element
    }

    _setEventListeners() {
        this._elementImage.addEventListener('click', () => {
            PopupWithImage.open();
        });
    
        closeImageButton.addEventListener('click', () => {
            popupImage.close();
        });
    }

    _setLikesState() {
        this._isLiked = Boolean(this._likes.find(userData => userData._id === userId));

        if (isLiked) {
        this._elementLike.classList.add('element__like_active');
        } else {
            this._elementLike.classList.remove('element__like_active');
        }
    }

    _likeButtonListener() {
        this._elementLike.
            addEventListener('click', () => handleCardLike(likeElement, this._cardId, likeCounterElement));   
    }

    _setRemoveButtonState() {
        if (userId === this._isOwner) {
          this._elementRemove.classList.add("element__delete_hidden");
        }
    }
    
    _deleteCardListener() {
        this._elementRemove
            .addEventListener('click', () => handleDeleteClick(cardElement, this._cardId));
    }
}