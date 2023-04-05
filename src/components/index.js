import {
  cardForm,
  namePlace,
  linkPlace,
  buttonPlus,
  allElements,
  nameProfile,
  profileForm,
  popupProfile,
  popupNewCard,
  closeButtons,
  profileAvatar,
  cardsContainer,
  openPopupProfile,
  formChangeAvatar,
  openPopupNewCard,
  professionProfile,
  profileInfoButton,
  popupChangeAvatarImg,
  inputChangeAvatarImg,
  buttonSaveUbdateAvatarImg,
  profileBtnChangeAvatarImg,
} from './data.js';
import '../pages/index.css';
import { addNewCard, createCard } from './card.js';
import { openPopup, closePopup, fillProfileInputs } from './modal.js';
import { changeAvatarImg, getUserInfo, getInitialCards, editUserInfo} from './api.js';
import { enableValidation, hideInputError, disableButton } from './validate.js';
import { updateUserData, renderLoading, handleSubmit} from './utils';



enableValidation(allElements);


function updateAvatarImage(evt) {
  evt.preventDefault();
  renderLoading(evt.submitter, true);
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
    .finally(() => renderLoading(evt.submitter, false));
}


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


// Редактирование Профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(evt.submitter, true);
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
        `Произошла ошибка при редактировании данных пользователя: ${error}`
      )
    )
    .finally(() => renderLoading(evt.submitter, false));
}



profileBtnChangeAvatarImg.addEventListener('click', () => {
  openPopup(popupChangeAvatarImg);
  hideInputError(formChangeAvatar, inputChangeAvatarImg, allElements);
  formChangeAvatar.reset();
  disableButton(buttonSaveUbdateAvatarImg, allElements);
});

openPopupProfile.addEventListener('click', () => {
  fillProfileInputs();
  openPopup(popupProfile);
  hideInputError(profileForm, nameProfile, allElements);
  hideInputError(profileForm, professionProfile, allElements);
  disableButton(profileInfoButton, allElements);
});

openPopupNewCard.addEventListener('click', () => {
  openPopup(popupNewCard);
  hideInputError(cardForm, namePlace, allElements);
  hideInputError(cardForm, linkPlace, allElements);
  disableButton(buttonPlus, allElements);
  cardForm.reset();
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








