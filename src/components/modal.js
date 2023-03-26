import {popupImageText, popupImagePhoto, popupImage, allElements} from './data.js'
import {buttonFalse} from './validate.js'


function removeListenerEscape (evt) {
  if (evt.key === 'Escape') {
    closePopup(popup)
  }
}

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', removeListenerEscape);
  const buttonPlus = document.querySelector('#create-new-card')
  buttonFalse (buttonPlus, allElements)
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened', 'popup_cursor-pointer');
  //  Удаляем слушатель события по кнопке Esc
  document.removeEventListener('keydown', removeListenerEscape);
}


function openFullScreenImageCard (name, link) {
  popupImageText.textContent = name;
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  openPopup(popupImage);
}

  export {openPopup, closePopup, openFullScreenImageCard}
