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
    let popupOpen = document.getElementById('popup-pic');
    popupOpen.classList.remove('popup-image_opened');
});

//Закрытие Попапа с картинкой
let closeImage = document.getElementById('close-image');
function closePic() {
    let popupOpen = document.getElementById('popup-pic');
    popupOpen.classList.remove('popup-image_opened');
}

closeImage.addEventListener('click', closePic);

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup-image_opened')) {
    closePic();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePic();
  }
});
