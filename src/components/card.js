import { popupImage } from "./index.js";
import { api } from "./Api.js";
import { closeImageButton, cardTemplate } from "../utils/constants.js";

export const createCard = (cardData, userId) => {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const imageElement = cardElement.querySelector(".element__image");
  const titleElement = cardElement.querySelector(".element__text");
  const likeElement = cardElement.querySelector(".element__like");
  const likeCounterElement = cardElement.querySelector(
    ".element__like-counter"
  );
  likeCounterElement.textContent = cardData.likes.length.toString();

  const cardId = cardData._id;
  const isLiked = Boolean(
    cardData.likes.find((userData) => userData._id === userId)
  );
  if (isLiked) {
    likeElement.classList.add("element__like_active");
  } else {
    likeElement.classList.remove("element__like_active");
  }

  likeElement.addEventListener("click", () =>
    handleCardLike(likeElement, cardId, likeCounterElement)
  );

  const deleteElement = cardElement.querySelector(".element__delete");
  const isOwner = cardData.owner._id;
  if (userId === isOwner) {
    deleteElement.classList.add("element__delete_hidden");
  }

  deleteElement.addEventListener("click", () =>
    handleDeleteClick(cardElement, cardId)
  );

  imageElement.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupImage.open(cardData.name, cardData.link);
  });

  imageElement.src = cardData.link;
  imageElement.alt = cardData.name;
  titleElement.textContent = cardData.name;
  return cardElement;
};

closeImageButton.addEventListener("click", function () {
  popupImage.close();
});

const handleCardLike = (likeElement, cardId, likeCounterElement) => {
  if (!likeElement.classList.contains("element__like_active")) {
    api
      .sendLike(cardId)
      .then((cardData) => {
        likeElement.classList.toggle("element__like_active");
        likeCounterElement.textContent = cardData.likes.length.toString();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .removeLike(cardId)
      .then((cardData) => {
        likeElement.classList.toggle("element__like_active");
        likeCounterElement.textContent = cardData.likes.length.toString();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const handleDeleteClick = (cardElement, cardId) => {
  api
    .deleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => console.log("Не удалось удалить карточку"));
};
