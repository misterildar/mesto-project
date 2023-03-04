
const openPopupNewCard = document.querySelector('.profile__add');
const popupNewCard = document.querySelector('#popup-new-card');
const popupProfile = document.querySelector('#profile-info');
const openPopupProfile = document.querySelector('.profile__edit');
const profileForm = document.querySelector('.form-profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputProfileName = document.querySelector('#input-name');
const inputProfileProfession = document.querySelector('#input-profession');
const cardsContainer = document.querySelector('.cards');
const cardForm = document.querySelector('.form-place');
const inputNewCardPlaceName = document.querySelector('#input-name-place');
const inputNewCardLink = document.querySelector('#input-link');
const popupImage = document.querySelector('.popup-image__background');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageText = document.querySelector('.popup-image__text');
const closeButtons = document.querySelectorAll('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;


  // Для закрытия всех popup
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});



function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}


function openFullScreenImageCard (name, link) {
  popupImageText.textContent = name;
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  openPopup(popupImage);
}


openPopupProfile.addEventListener('click', () => {
  inputProfileName.value = profileTitle.textContent ;
  inputProfileProfession.value = profileSubtitle.textContent ;
  openPopup(popupProfile);
});



          // Редактирование Профиля

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputProfileName.value;
  profileSubtitle.textContent = inputProfileProfession.value;
  closePopup(popupProfile);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);



openPopupNewCard.addEventListener('click', () => {
  openPopup(popupNewCard);
});



  // Добавляем новую карточку через кнопку +

function addNewCard(evt) {
  evt.preventDefault();
  const newCard = createCard(inputNewCardPlaceName.value, inputNewCardLink.value);
  createCard(newCard);
  cardsContainer.prepend(newCard);

  // Очищаем форму ввода
  evt.target.reset()

  closePopup(popupNewCard)
}

cardForm.addEventListener('submit', addNewCard);


function createCard (name, link) {
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title')
  cardTitle.textContent = name;
  const cardImg = newCard.querySelector('.card__img')
  cardImg.src = link;
  cardImg.alt = name;

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



