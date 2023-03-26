  import {closeButtons, popupImageCloseClick} from './data.js'
  import {closePopup} from './modal.js'

  // Для закрытия всех popup
  closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => closePopup(popup));
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        closePopup(popup)
      }
    });

    document.addEventListener('keydown', (evt) => {
     if (evt.key === 'Escape') {
      closePopup(popup)
     }
    })
  });
