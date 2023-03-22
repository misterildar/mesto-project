const openPopupNewCard = document.querySelector('.profile__add');
const popupNewCard = document.querySelector('#popup-new-card');
const popupProfile = document.querySelector('#profile-info');
const openPopupProfile = document.querySelector('.profile__edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.cards');
const popupImage = document.querySelector('.popup-image__background');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageText = document.querySelector('.popup-image__text');
const closeButtons = document.querySelectorAll('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;
const popupImageCloseClick = document.querySelector('.popup-image');
const profileForm = document.querySelector('.form-profile');
const nameProfile = profileForm.querySelector('#input-name')
const professionProfile = profileForm.querySelector('#input-profession');
const cardForm = document.querySelector('.form-place');
const namePlace = cardForm.querySelector('#input-name-place');
const linkPlace = cardForm.querySelector('#input-link');



const allElements = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item-error',
  errorClass: 'form__item_border-bottom-red'
};


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {openPopupProfile, profileForm, openPopupNewCard, initialCards, popupNewCard, popupProfile, profileTitle, profileSubtitle, cardsContainer, popupImage, popupImagePhoto, popupImageText, closeButtons,cardTemplate, popupImageCloseClick, nameProfile, professionProfile, namePlace, linkPlace, allElements, cardForm};
