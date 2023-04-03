import {
  cardForm,
  namePlace,
  linkPlace,
  popupNewCard,
  cardTemplate,
  cardsContainer,
} from './data.js';
import { renderLoading, userId } from './utils';
import { openFullScreenImageCard, closePopup } from './modal.js';
import { getInitialCards, addNewCardServer, likesCards, deleteCard, } from './api.js';

// Добавляем новую карточку через кнопку +
function addNewCard(evt) {
  evt.preventDefault();
  renderLoading(popupNewCard, true);
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
    .finally(() => renderLoading(popupNewCard, false));
}



function createCard(card) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  const cardImg = newCard.querySelector('.card__img');
  const cardTrash = newCard.querySelector('.card__trash');
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
    cardTrash.classList.add('card__trash_visible');
  }


 if (card.likes.map(item => item._id).includes(userId)) {
  likeCard.classList.add('card__heart_checked')
 }


  newCard.querySelector('.card__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__heart_checked');
    checkLikes(likeCard, newCard.getAttribute('id'))
  });

  const resetButton = newCard.querySelector('.card__trash');
  resetButton.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
    deleteCard(newCard.getAttribute('id'))
  });

  cardImg.addEventListener('click', () => {
    openFullScreenImageCard(card.name, card.link);
  });
  return newCard;
}


function changeLike (element, like) {
  element.closest('.card').querySelector('.card__number-like').textContent = like.likes.length;
}

function checkLikes (element, id) {
  if (element.classList.contains('card__heart_checked')) {
    likesCards(id, 'like')
    .then(like => {
      changeLike(element, like)
    })
    .catch((error) => console.log(`Произошла ошибка добавления лайка: ${error}`))
  } else {
    likesCards(id)
    .then(like => {
      changeLike(element, like)
    })
    .catch((error) => console.log(`Произошла ошибка удаления лайка: ${error}`))
  }
}



export { addNewCard, createCard, getInitialCards };



