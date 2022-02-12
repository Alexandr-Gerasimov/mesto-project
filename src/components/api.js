const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
    headers: {
      Authorization: '86a9bd37-314e-497d-8d30-dfc746fb3e94', // Токен
      'Content-Type': 'application/json'
    }
  };
  
const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};


const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
    .then(res => getResponseData(res));
};
  
const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
    .then(res => getResponseData(res))
};

export const getAppInfo = () => {
    return Promise.all([getUser(), getCards()]);
    
};

export const profileUpdate = (profileName, profileStatus) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileName,
      about: profileStatus
    })
  })
  .then((res) => {
    return getResponseData(res);
  })
};

export const avatarUpdate = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .catch((err) => {
    console.log(err);
  })
};

export const addNewCard = (name, link, currentUserId) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
      owner: currentUserId
    }),
  }).then((res) => {
    return getResponseData(res);
  });
};  

export const sendLike = (cardId) => {
  return fetch (`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then((res) => {
    return getResponseData(res);
  })
}

export const removeLike = (cardId) => {
  return fetch (`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => {
    return getResponseData(res);
  })
}

export const deleteCard = (cardId) => {
  return fetch (`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => {
    return getResponseData(res);
  })
}