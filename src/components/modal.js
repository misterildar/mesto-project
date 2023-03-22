
import {popupImageText, popupImagePhoto, popupImage} from './data.js'


  function openPopup (popupElement) {
    popupElement.classList.add('popup_opened', 'popup_cursor-pointer');
  }

  function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened', 'popup_cursor-pointer');
    //  Удаляем слушатель события по кнопке Esc
    document.removeEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
       closePopup(popup)

      }
     })
  }

  function openFullScreenImageCard (name, link) {
    popupImageText.textContent = name;
    popupImagePhoto.src = link;
    popupImagePhoto.alt = name;
    openPopup(popupImage);
  }

  export {openPopup, closePopup, openFullScreenImageCard}

