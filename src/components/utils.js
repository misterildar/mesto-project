import {
  nameProfile,
  popupProfile,
  closeButtons,
  profileTitle,
  profileAvatar,
  profileSubtitle,
  professionProfile,
} from './data.js';
import {editUserInfo} from './api.js'
import { closePopup } from './modal.js';

// Для закрытия всех popup
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
});

export let userId;

function updateUserData(userInfo) {
  (profileTitle.textContent = userInfo.name),
    (profileSubtitle.textContent = userInfo.about);
  profileAvatar.src = userInfo.avatar;
  userId = userInfo._id;
}

// Редактирование Профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(popupProfile, true);
  editUserInfo({
    name: nameProfile.value,
    about: professionProfile.value,
  })
    .then((userInfo) => {
      updateUserData(userInfo);
      closePopup(popupProfile);
    })
    .catch((error) =>
      console.log(
        `Произошла ошибка при попытке редактировании данных пользователя: ${error}`
      )
    )
    .finally(() => renderLoading(popupProfile, false));
}

function renderLoading(popup, isLoading) {
  const button = popup.querySelector('.form__button');
  if (isLoading) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = 'Сохранить';
  }
}

export { handleProfileFormSubmit, updateUserData, renderLoading };
