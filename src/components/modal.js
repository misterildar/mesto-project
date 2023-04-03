import {
  cardForm,
  linkPlace,
  namePlace,
  buttonPlus,
  allElements,
  popupImage,
  nameProfile,
  profileForm,
  popupNewCard,
  popupProfile,
  profileTitle,
  popupImageText,
  popupImagePhoto,
  openPopupProfile,
  openPopupNewCard,
  profileSubtitle,
  professionProfile,
  profileInfoButton,
} from './data.js';
import { hideInputError, buttonFalse } from './validate.js';



function handleEscUp(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened', 'popup_cursor-pointer');
  //  Удаляем слушатель события по кнопке Esc
  document.removeEventListener('keydown', handleEscUp);
}

function openFullScreenImageCard(name, link) {
  popupImageText.textContent = name;
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  openPopup(popupImage);
}

function inputProfileValue() {
  nameProfile.value = profileTitle.textContent;
  professionProfile.value = profileSubtitle.textContent;
}

openPopupProfile.addEventListener('click', () => {
  inputProfileValue();
  openPopup(popupProfile);
  hideInputError(profileForm, nameProfile, allElements);
  hideInputError(profileForm, professionProfile, allElements);
  buttonFalse(profileInfoButton, allElements);
});

openPopupNewCard.addEventListener('click', () => {
  openPopup(popupNewCard);
  hideInputError(cardForm, namePlace, allElements);
  hideInputError(cardForm, linkPlace, allElements);
  buttonFalse(buttonPlus, allElements);
  cardForm.reset();
});

export { openPopup, closePopup, openFullScreenImageCard };
