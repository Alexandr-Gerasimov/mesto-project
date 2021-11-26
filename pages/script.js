const openProfileButton = document.querySelector('.profile-info__edit-button');
const openCardButton = document.querySelector('.profile__add-button');
const closeProfileButton = document.querySelector('.popup_close_profile');
const closeCardButton = document.querySelector('.popup_close_card');
const closeImageButton = document.querySelector('.popup_close_image');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');
const profileElement = document.getElementById('popup-input');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');
const profileNameInput = document.getElementById('profile-name');
const profileStatusInput = document.getElementById('profile-status');


function openPopup(popup) {
    popup.classList.add('popup_opened');
}

openProfileButton.addEventListener('click', function () {
    profileNameInput.value = profileName.textContent;
    profileStatusInput.value = profileStatus.textContent;
    openPopup(profilePopup)
});
openCardButton.addEventListener('click', function () {
    openPopup(cardPopup)
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

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

const cardName = document.querySelector('.element__text');
const cardImage = document.querySelector('.element__image');
const formCard = document.getElementById('popup-place');

const handleCardRemoveClick = (event) => {
    event.target.closest('.element').remove()
}

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

    cardElement.querySelector('.element__delete').addEventListener('click', handleCardRemoveClick);
    imageElement.addEventListener('click', function (evt) {
        evt.preventDefault();
        namePopupImage.src = link
        namePopupImage.alt = name
        namePopupTitle.textContent = name
        openPopup(imagePopup)
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
    closePopup(cardPopup);
});

closeImageButton.addEventListener('click', function () {
    closePopup(imagePopup)
});