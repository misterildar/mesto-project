import {initialCards, openPopupProfile, profileForm, openPopupNewCard, popupNewCard, allElements, cardsContainer, cardForm, nameProfile, profileTitle, professionProfile, profileSubtitle, popupProfile } from  './components/data.js'
import {openPopup, closePopup} from './components/modal.js'
import {createCard, addNewCard} from './components/card.js';
import {enableValidation} from './components/validate.js';
import {} from './components/utils';
import '../src/index.css';

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


openPopupProfile.addEventListener('click', () => {
  nameProfile.value = profileTitle.textContent ;
  professionProfile.value = profileSubtitle.textContent ;
  openPopup(popupProfile);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);


openPopupNewCard.addEventListener('click', () => {
  openPopup(popupNewCard);
});



