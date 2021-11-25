const openProfilePopup = document.querySelector('.profile-info__edit-button');
const openCardPopup = document.querySelector('.profile__add-button');
const closeProfilePopup = document.querySelector('.popup_close_profile');
const closeCardPopup = document.querySelector('.popup_close_card');
const closeImagePopup = document.querySelector('.popup_close_image');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

openProfilePopup.addEventListener('click', function () {
    openPopup(profilePopup)
});
openCardPopup.addEventListener('click', function () {
    openPopup(cardPopup)
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

closeProfilePopup.addEventListener('click', function () {
    closePopup(profilePopup)
});
closeCardPopup.addEventListener('click', function () {
    closePopup(cardPopup)
});

//Редактирование Попапа Профиль
const profileElement = document.getElementById('popup-input');
const profileName = document.querySelector('.profile-info__name');
const profileStatus = document.querySelector('.profile-info__status');

function handleProfileSubmit(evt) {
  evt.preventDefault();
  const nameInput = document.getElementById('profile-name').value;
  const jobInput = document.getElementById('profile-status').value;
  profileName.textContent = nameInput;
  profileStatus.textContent = jobInput;
  closePopup()
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
    let popupOpen = document.getElementById('popup-place');
    popupOpen.classList.remove('popup_opened');
});

closeImagePopup.addEventListener('click', function () {
    closePopup(imagePopup)
});