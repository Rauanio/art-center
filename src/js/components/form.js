import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('phone-input');
  const nameInput = document.getElementById('name-input');

  Inputmask({
    mask: '+1(999) 999-9999',
  }).mask(phoneInput);

  const form = document.getElementById('application-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const phone = phoneInput.value;

    document
      .querySelectorAll('.error-message')
      .forEach((elem) => (elem.textContent = ''));

    let isValid = true;

    if (!name) {
      showError('name-input', 'Это поле обязательно');
      isValid = false;
    }

    if (!phone) {
      showError('phone-input', 'Это поле обязательно');
      isValid = false;
    } else if (!isValidPhoneNumber(phone)) {
      showError('phone-input', 'Некорректный телефон');
      isValid = false;
    }

    if (isValid) {
      console.log('Submitting...');
      form.submit();
    }
  });

  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorSpan = document.querySelector(`#${inputId}-error`);
    errorSpan.textContent = message;
  }

  function isValidPhoneNumber(phone) {
    const phoneRegex = /^\+\d{1}\(\d{3}\)\s\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  }
});
