//Открытие Попапа Профиль
let editButton = document.querySelector('.profile-info__edit-button');
function editProfile() {
    let popupOpen = document.getElementById('popup-input');
    popupOpen.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);

//Закрытие Попапа Профиль
let closeButton = document.getElementById('close-profile');
function closeProfile() {
    let popupOpen = document.getElementById('popup-input');
    popupOpen.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeProfile);

//Открытие Попапа Место
let addButton = document.querySelector('.profile__add-button');
function editPlace() {
    let popupOpen = document.getElementById('popup-place');
    popupOpen.classList.add('popup_opened');
}

addButton.addEventListener('click', editPlace);

//Закрытие Попапа Место
let closeAddPlace = document.getElementById('close-place');
function closePlace() {
    let popupOpen = document.getElementById('popup-place');
    popupOpen.classList.remove('popup_opened');
}

closeAddPlace.addEventListener('click', closePlace);

//Редактирование Попапа Профиль
const formElement = document.getElementById('popup-input');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameInput = document.getElementById('profile-name').value;
  const jobInput = document.getElementById('profile-status').value;
  profileName.textContent = nameInput;
  profileStatus.textContent = jobInput;
  let popupOpen = document.getElementById('popup-input');
  popupOpen.classList.remove('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler);

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

const container = document.querySelector('.elements');
const cardContainer = container.querySelector('.element');
const cardName = document.querySelector('.element__text');
const cardImage = document.querySelector('.element__image');
const formCard = document.getElementById('popup-place');

const hamdleCardRemoveClick = (event) => {
    event.target.closest('.element').remove()
}

/*
let addButton = document.querySelector('.profile__add-button');
function editPlace() {
    let popupOpen = document.getElementById('popup-place');
    popupOpen.classList.add('popup_opened');
*/

const name = document.getElementById('card-name');
const link = document.getElementById('card-image'); 
const namePopupImage = document.querySelector('.popup-image__picture')
const namePopupTitle = document.querySelector('.popup-image__description')

function addCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true)
  
    const imageElement = cardElement.querySelector('.element__image')
    const titleElement = cardElement.querySelector('.element__text')
    
    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardElement.querySelector('.element__delete').addEventListener('click', hamdleCardRemoveClick);
    cardElement.querySelector('.element__image').addEventListener('click', function (evt) {
        evt.preventDefault();
        namePopupImage.src = link
        namePopupImage.alt = name
        namePopupTitle.textContent = name
        let popupOpen = document.getElementById('popup-pic');
        popupOpen.classList.add('popup-image_opened');
    });

    imageElement.src = link
    imageElement.alt = name
    titleElement.textContent = name
  
    return cardElement
  }

const cardList = document.querySelector('.elements');

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
    let popupOpen = document.getElementById('popup-place');
    popupOpen.classList.remove('popup_opened');
});

//Закрытие Попапа с картинкой
let closeImage = document.getElementById('close-image');
function closePic() {
    let popupOpen = document.getElementById('popup-pic');
    popupOpen.classList.remove('popup-image_opened');
}

closeImage.addEventListener('click', closePic);