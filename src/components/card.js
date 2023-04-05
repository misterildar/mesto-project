import {
  cardForm,
  namePlace,
  linkPlace,
  cardTemplate,
  popupNewCard,
  cardsContainer,
} from './data.js';
import { renderLoading, userId } from './utils';
import { openFullScreenImageCard, closePopup } from './modal.js';
import { getInitialCards, addNewCardServer, likesCards, deleteCardServer, } from './api.js';


// Добавляем новую карточку через кнопку +
function addNewCard(evt) {
  evt.preventDefault();
  renderLoading(evt.submitter, true);
  addNewCardServer({
    name: namePlace.value,
    link: linkPlace.value,
  })
    .then((card) => {
      cardsContainer.prepend(createCard(card));
      cardForm.reset();
      closePopup(popupNewCard);
    })
    .catch((error) => console.log(`Ошибка при добовлении карточки: ${error}`))
    .finally(() => renderLoading(evt.submitter, false));
}



function createCard(card) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  const cardImg = newCard.querySelector('.card__img');
  const buttonDeleteCard = newCard.querySelector('.card__trash');
  const numberLikeCard = newCard.querySelector('.card__number-like');
  const likeCard = newCard.querySelector('.card__heart');

  cardTitle.textContent = card.name;
  if (card.likes.length > 0) {
    numberLikeCard.textContent = card.likes.length;
  }
  cardImg.src = card.link;
  cardImg.alt = card.name;
  newCard.setAttribute('id', card._id);
  newCard.setAttribute('owner', card.owner._id);

  if (userId === newCard.getAttribute('owner')) {
    buttonDeleteCard.classList.add('card__trash_visible');
  }

 if (card.likes.map(item => item._id).includes(userId)) {
  likeCard.classList.add('card__heart_checked')
 }

  likeCard.addEventListener('click', (evt) => {
    checkLikes(likeCard, newCard.getAttribute('id'), evt.target)
  });

  buttonDeleteCard.addEventListener('click', (evt) => {
    deleteCard(newCard.getAttribute('id'), evt)
  });

  cardImg.addEventListener('click', () => {
    openFullScreenImageCard(card.name, card.link);
  });
  return newCard;
}


function deleteCard (idCard, evt) {
  deleteCardServer(idCard)
  .then(() => {
    evt.target.closest('.card').remove();
  })
  .catch((error) => console.log(`Произошла ошибка удаления карточки: ${error}`))
}


function changeLike (element, like, evt) {
  element.closest('.card').querySelector('.card__number-like').textContent = like.likes.length;
  evt.classList.toggle('card__heart_checked')
}

function checkLikes (element, id, evt) {
  if (evt.classList.contains('card__heart_checked')) {
    likesCards(id)
    .then(like => {
      changeLike(element, like, evt)
    })
    .catch((error) => console.log(`Произошла ошибка удаления лайка: ${error}`))
  } else {
    likesCards(id, 'like')
    .then(like => {
      changeLike(element, like, evt)
    })
    .catch((error) => console.log(`Произошла ошибка при добавлении лайка: ${error}`))
  }
}



export { addNewCard, createCard, getInitialCards };



