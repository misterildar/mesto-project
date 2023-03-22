 import {namePlace, linkPlace, cardsContainer, cardForm, cardTemplate, popupNewCard} from './data.js'
 import {openFullScreenImageCard, closePopup} from './modal.js'

 // Добавляем новую карточку через кнопку +
  function addNewCard(evt) {
    evt.preventDefault();
    const newCard = createCard(namePlace.value, linkPlace.value);
    cardsContainer.prepend(newCard);
    // Очищаем форму ввода
    cardForm.reset()
    closePopup(popupNewCard)
  }



  function createCard (name, link) {
    const newCard = cardTemplate.cloneNode(true);
    const cardTitle = newCard.querySelector('.card__title')
    cardTitle.textContent = name;
    const cardImg = newCard.querySelector('.card__img')
    cardImg.src = link;
    cardImg.alt = name;
    newCard.querySelector('.card__heart').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__heart_checked')
    })
    const resetButton = newCard.querySelector('.card__trash')
    resetButton.addEventListener('click', (evt) => {
      evt.target.closest('.card').remove()
    });
    cardImg.addEventListener('click', () => {
      openFullScreenImageCard(name, link)
    })
    return newCard;
  }




export {addNewCard, createCard}
