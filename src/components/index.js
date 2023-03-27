import {initialCards, openPopupProfile, profileForm, openPopupNewCard, popupNewCard, allElements, cardsContainer, cardForm, nameProfile, profileTitle, professionProfile, profileSubtitle, popupProfile, cangeAvatarImg, popupChangeAvatarImg, namePlace, linkPlace } from  './data.js'
import {openPopup, closePopup, } from './modal.js'
import {createCard, addNewCard} from './card.js';
import {enableValidation, hideInputError, buttonFalse} from './validate.js';
import {} from './utils';
import '../pages/index.css';



initialCards.forEach((element) => {
  const newCard = createCard(element.name, element.link)
  cardsContainer.append(newCard)
});

enableValidation(allElements);


cardForm.addEventListener('submit', addNewCard);


cangeAvatarImg.addEventListener('click', () => {
  openPopup(popupChangeAvatarImg)
})


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
  hideInputError(profileForm, nameProfile, allElements);
  hideInputError(profileForm, professionProfile, allElements);


});



openPopupNewCard.addEventListener('click', () => {
  openPopup(popupNewCard);
  hideInputError(cardForm, namePlace, allElements);
  hideInputError(cardForm, linkPlace, allElements);
  const buttonPlus = document.querySelector('#create-new-card')
  buttonFalse (buttonPlus, allElements)
  cardForm.reset()
});









