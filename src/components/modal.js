//Открытие Попапа Профиль
let editButton = document.querySelector('.profile-info__edit-button');
const popupOpen = document.getElementById('popup-input');
function editProfile() {
    popupOpen.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);

//Закрытие Попапа Профиль
let closeButton = document.getElementById('close-profile');
function closeProfile() {
    popupOpen.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeProfile);
document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closeProfile();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closeProfile();
  }
});

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

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePlace();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePlace();
  }
});

//Редактирование Попапа Профиль
const formElement = document.querySelector('.popup__container');
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




