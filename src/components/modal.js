import {
  popupImage,
  nameProfile,
  profileTitle,
  popupImageText,
  popupImagePhoto,
  profileSubtitle,
  professionProfile,
} from './data.js';



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
  popupElement.classList.remove('popup_opened');
  //  Удаляем слушатель события по кнопке Esc
  document.removeEventListener('keydown', handleEscUp);
}

function openFullScreenImageCard(name, link) {
  popupImageText.textContent = name;
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  openPopup(popupImage);
}

function fillProfileInputs() {
  nameProfile.value = profileTitle.textContent;
  professionProfile.value = profileSubtitle.textContent;
}



export { openPopup, closePopup, openFullScreenImageCard, fillProfileInputs };
