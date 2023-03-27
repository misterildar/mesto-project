import {popupImageText, popupImagePhoto, popupImage,} from './data.js'


function handleEscUp (evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened')
    closePopup(activePopup)
  }
}

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened', 'popup_cursor-pointer');
  //  Удаляем слушатель события по кнопке Esc
  document.removeEventListener('keydown', handleEscUp);
}


function openFullScreenImageCard (name, link) {
  popupImageText.textContent = name;
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  openPopup(popupImage);
}



  export {openPopup, closePopup, openFullScreenImageCard,}
