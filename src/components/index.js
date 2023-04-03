import {
  cardForm,
  profileForm,
  allElements,
  profileAvatar,
  cardsContainer,
  formChangeAvatar,
  popupChangeAvatarImg,
  inputChangeAvatarImg,
  buttonSaveUbdateAvatarImg,
  profileBtnChangeAvatarImg,
} from './data.js';
import '../pages/index.css';
import { openPopup, closePopup } from './modal.js';
import { addNewCard, createCard } from './card.js';
import { changeAvatarImg, getUserInfo, getInitialCards} from './api.js';
import { enableValidation, hideInputError, buttonFalse } from './validate.js';
import { handleProfileFormSubmit, updateUserData, renderLoading} from './utils';

enableValidation(allElements);


function updateAvatarImage(evt) {
  evt.preventDefault();
  renderLoading(popupChangeAvatarImg, true);
  changeAvatarImg(inputChangeAvatarImg.value)
    .then((img) => {
      profileAvatar.src = img.avatar;
      closePopup(popupChangeAvatarImg);
    })
    .catch((error) =>
      console.log(
        `Произошла ошибка при попытке редактировании данных пользователя: ${error}`
      )
    )
    .finally(() => renderLoading(popupChangeAvatarImg, false));
}


profileBtnChangeAvatarImg.addEventListener('click', () => {
  openPopup(popupChangeAvatarImg);
  hideInputError(formChangeAvatar, inputChangeAvatarImg, allElements);
  formChangeAvatar.reset();
  buttonFalse(buttonSaveUbdateAvatarImg, allElements);
});


cardForm.addEventListener('submit', addNewCard);

formChangeAvatar.addEventListener('submit', updateAvatarImage);

profileForm.addEventListener('submit', handleProfileFormSubmit);




Promise.all([getUserInfo(), getInitialCards()])
  .then(([userInfo, posts]) => {
    updateUserData(userInfo);
    posts.forEach((element) => {
      const newCard = createCard(element);
      cardsContainer.append(newCard);
      });
  })
  .catch((error) => console.log(`Ошибка при загрузке приложения: ${error}`))








