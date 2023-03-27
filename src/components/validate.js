import {allElements} from './data.js'




// Функция, которая добавляет класс с ошибкой
function showInputError (formElement, inputElement, errorMessage, objectElements) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objectElements.errorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__item-error_active')
};

  // Функция, которая удаляет класс с ошибкой
function hideInputError (formElement, inputElement, objectElements) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectElements.errorClass);
  errorElement.textContent = '';
  errorElement.classList.remove('form__item-error_active');
};

function checkValidityForm (formElement, inputElement) {
  if (inputElement.validity.patternMismatch) {
      // встроенный метод setCustomValidity принимает на вход строку
      // и заменяет ею стандартное сообщение об ошибке
  inputElement.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы");
  } else {
      // если передать пустую строку, то будут доступны
      // стандартные браузерные сообщения
  inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, allElements);
  } else {
      hideInputError(formElement, inputElement, allElements);
  }
};


  // Для этого создадим функцию hasInvalidInput.
  // Она принимает массив полей формы и возвращает true,
  //  если в нём хотя бы одно поле не валидно,
  //  и false, если все валидны.
function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};



  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
function toggleButtonState (inputList, buttonElement, objectElements) {
  if (hasInvalidInput(inputList)) {
    buttonFalse(buttonElement, objectElements)
  } else {
    buttonTrue(buttonElement, objectElements)
  }
};

function buttonFalse (buttonElement, objectElements) {
  buttonElement.disabled = true;
  buttonElement.classList.add(objectElements.inactiveButtonClass);
}

function buttonTrue (buttonElement, objectElements) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(objectElements.inactiveButtonClass);
}


function setEventListeners (formElement, objectElements) {
  const inputList = Array.from(formElement.querySelectorAll(objectElements.inputSelector));
  const buttonElement = formElement.querySelector(objectElements.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, allElements);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    checkValidityForm(formElement, inputElement);
    toggleButtonState(inputList, buttonElement, allElements);
    });
  });
};


  // Найдём все формы с указанным классом в DOM,
function enableValidation (objectElements) {
  const formList = Array.from(document.querySelectorAll(objectElements.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__input'))
    fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet, allElements)
      })
  })
};




export {enableValidation, buttonFalse, hideInputError}
