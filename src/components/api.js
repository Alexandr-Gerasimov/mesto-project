export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then((res) => this.getResponseData(res));
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then((res) => this.getResponseData(res));
  }

  getAppInfo() {
    return Promise.all([this.getUser(), this.getCards()]);
  }

  profileUpdate(profileName, profileStatus) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: profileName,
        about: profileStatus,
      }),
    }).then((res) => this.getResponseData(res));
  }

  avatarUpdate(name) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: name,
      }),
    }).then((res) => this.getResponseData(res));
  }

  addNewCard(name, link, currentUserId) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
        owner: currentUserId,
      }),
    }).then((res) => this.getResponseData(res));
  }

  sendLike(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => this.getResponseData(res));
  }

  removeLike(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => this.getResponseData(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => this.getResponseData(res));
  }
}

export const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-6",
  headers: {
    Authorization: "86a9bd37-314e-497d-8d30-dfc746fb3e94", // Токен
    "Content-Type": "application/json",
  },
});
