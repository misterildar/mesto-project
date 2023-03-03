
const openPopupNewCard = document.querySelector('.profile__add');
const closePopupNewCard = document.querySelector('#close-new-card')
const popupNewCard = document.querySelector('#popup-new-card');
const popupProfile = document.querySelector('#profile-info');
const openPopupProfile = document.querySelector('.profile__edit');
const closePopupProfile = document.querySelector('.popup-container__close-icon');
const buttonSaveProfileInfo = document.querySelector('.form-profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputProfileName = document.querySelector('#input-name');
const inputProfileProfession = document.querySelector('#input-profession');
const cardsContainer = document.querySelector('.cards');
const buttonAddNewCard = document.querySelector('.form-place');
const inputNewCardPlaceName = document.querySelector('#input-name-place');
const inputNewCardLink = document.querySelector('#input-link');
const popupImage = document.querySelector('.popup-image__background');
const closePopupImage = document.querySelector('.popup-image__close');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageText = document.querySelector('.popup-image__text');

const cardTemplate = document.querySelector('#card-template').content;


function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}




function openFullScreenImageCard (name, link) {
  const cardName = popupImageText;
  cardName.textContent = name;
  const cardImage = popupImagePhoto;
  cardImage.src = link;
  cardImage.alt = name;
  openPopup(popupImage);
}

closePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
})



openPopupProfile.addEventListener('click', () => {
  inputProfileName.value = profileTitle.textContent ;
  inputProfileProfession.value = profileSubtitle.textContent ;
  openPopup(popupProfile);
});

closePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});



function renameProfileName(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputProfileName.value;
  profileSubtitle.textContent = inputProfileProfession.value;
  closePopup(popupProfile);
}
buttonSaveProfileInfo.addEventListener('submit', renameProfileName);



openPopupNewCard.addEventListener('click', () => {
  openPopup(popupNewCard);
});

closePopupNewCard.addEventListener('click', () => {
  closePopup(popupNewCard);
});






function addNewCardPopup(evt) {
  evt.preventDefault();
  const newCard = createCard(inputNewCardPlaceName.value, inputNewCardLink.value);

  createCard(newCard);
  cardsContainer.prepend(newCard);

  inputNewCardPlaceName.value = ''
  inputNewCardLink.value = ''


  closePopup(popupNewCard)
}

buttonAddNewCard.addEventListener('submit', addNewCardPopup);


function createCard (name, link) {
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title')
  cardTitle.textContent = name;
  const cardImg = newCard.querySelector('.card__img')
  cardImg.src = link;

  newCard.querySelector('.card__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__heart_checked')
  })
  const resetButton = newCard.querySelector('.card__trash')

  resetButton.addEventListener('click', () => {
    document.querySelector('.card').remove()
  });

  cardImg.addEventListener('click', () => {
    openFullScreenImageCard(name, link)
  })
  return newCard;
}




initialCards.forEach((element) => {
  const newCard = createCard(element.name, element.link)
  cardsContainer.append(newCard)
});



