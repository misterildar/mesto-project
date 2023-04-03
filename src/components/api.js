
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '6e5640a5-11fb-4751-8dd5-68a754a9c24b',
    'Content-Type': 'application/json'
  }
}



const checkErrorPromise = (res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json()
    .then((err) => {
      err.statusCode = res.status;
      return Promise.reject(err)
    })
};


export const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkErrorPromise)
}



export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkErrorPromise)
}


export const editUserInfo = ({name, about}) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`
    })
  })
    .then(checkErrorPromise)
}



export const addNewCardServer = ({name, link}) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`
    })
  })
    .then(checkErrorPromise)
}



export const likesCards = (id, like) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: like? 'PUT' : 'DELETE',
    headers: config.headers,
  })
    .then(checkErrorPromise)
}



export const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(checkErrorPromise)
}



export const changeAvatarImg = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(checkErrorPromise)
}




