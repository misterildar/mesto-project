import {
  profileTitle,
  profileAvatar,
  profileSubtitle,
} from './data.js';


export let userId;

function updateUserData(userInfo) {
  profileTitle.textContent = userInfo.name;
  profileSubtitle.textContent = userInfo.about;
  profileAvatar.src = userInfo.avatar;
  userId = userInfo._id;
}



function renderLoading(button, isLoading, buttonText='Сохранить', loadingText='Сохранение...') {
  if (isLoading) {
    button.textContent = loadingText
  } else {
    button.textContent = buttonText
  }
}



export { updateUserData, renderLoading,};
