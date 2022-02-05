import { closePopup, openPopup, } from './utils.js'
import { disableButton } from './validate.js'


const closeImageButton = document.querySelector('.popup_close_image');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');
const cardList = document.querySelector('.elements');
const formCard = document.getElementById('popup-place');
const name = document.getElementById('card-name');
const link = document.getElementById('card-image'); 
const namePopupImage = document.querySelector('.popup-image__picture')
const namePopupTitle = document.querySelector('.popup-image__description')
const buttonSelector = document.querySelector ('.popup__button')
const buttonDisabledClass = document.querySelector ('popup__button_disabled')

//Картинки из коробки
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

    //Добавление карточек

const handleCardRemoveClick = (event) => {
    event.target.closest('.element').remove()
}

function addCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true)
  
    const imageElement = cardElement.querySelector('.element__image')
    const titleElement = cardElement.querySelector('.element__text')
    
    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardElement.querySelector('.element__delete').addEventListener('click', handleCardRemoveClick);
    imageElement.addEventListener('click', function (evt) {
        evt.preventDefault();
        namePopupImage.src = link
        namePopupImage.alt = name
        namePopupTitle.textContent = name
        openPopup(imagePopup);
    });

    imageElement.src = link
    imageElement.alt = name
    titleElement.textContent = name
  
    return cardElement
  }

initialCards.forEach((item) => {
    cardList.prepend(addCard(item.name, item.link))
})

const renderCard = (cardList, cardElement) => {
    cardList.prepend(cardElement)
}

formCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    renderCard(cardList, addCard(name.value, link.value));
    name.value = '';
    link.value = '';
    formCard.reset();
    buttonSelector.classList.add('popup__button_inactive');
    buttonSelector.setAttribute('disabled', true)
    closePopup(cardPopup);
});

closeImageButton.addEventListener('click', function () {
    closePopup(imagePopup);
});


