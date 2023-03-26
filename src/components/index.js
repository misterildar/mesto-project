import {initialCards, openPopupProfile, profileForm, openPopupNewCard, popupNewCard, allElements, cardsContainer, cardForm, nameProfile, profileTitle, professionProfile, profileSubtitle, popupProfile, namePlace } from  './data.js'
import {openPopup, closePopup} from './modal.js'
import {createCard, addNewCard} from './card.js';
import {enableValidation} from './validate.js';
import {} from './utils';
import '../pages/index.css';



initialCards.forEach((element) => {
  const newCard = createCard(element.name, element.link)
  cardsContainer.append(newCard)
});

enableValidation(allElements);

cardForm.addEventListener('submit', addNewCard);


// Редактирование Профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameProfile.value;
  profileSubtitle.textContent = professionProfile.value;
  closePopup(popupProfile);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);


openPopupProfile.addEventListener('click', () => {
  nameProfile.value = profileTitle.textContent ;
  professionProfile.value = profileSubtitle.textContent ;
  openPopup(popupProfile);
  clearErrorPopup(allElements)
});



openPopupNewCard.addEventListener('click', () => {
  openPopup(popupNewCard);
  clearErrorPopup(allElements)
});


function clearErrorPopup (el) {
  const formInput = Array.from(document.querySelectorAll('.form__item'))
  const formError = Array.from(document.querySelectorAll('.form__item-error'))
  formInput.forEach((formElement) => {
    formElement.classList.remove(el.errorClass)
  })
  formError.forEach((errorElement) => {
    errorElement.textContent = ''
  })
}



