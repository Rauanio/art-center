import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#phone-input').forEach((phoneInput) => {
    Inputmask({
      mask: '+7(999) 999-99-99',
    }).mask(phoneInput);
  });

  console.log(document.querySelectorAll('#application-form'), 'form');

  document.querySelectorAll('#application-form').forEach((form) => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const nameInput = form.querySelector('#name-input');
      const phoneInput = form.querySelector('#phone-input');
      const nicknameInput = form.querySelector('#nickname-input');

      const name = nameInput.value;
      const phone = phoneInput.value;
      const nickname = nicknameInput?.value;

      form.querySelectorAll('.error-message').forEach((elem) => {
        elem.textContent = '';
      });

      let isValid = true;

      if (!name) {
        showError(nameInput, 'Это поле обязательно');
        isValid = false;
      }

      if (!nickname) {
        showError(nicknameInput, 'Это поле обязательно');
        isValid = false;
      }

      if (!phone) {
        showError(phoneInput, 'Это поле обязательно');
        isValid = false;
      } else if (!isValidPhoneNumber(phone)) {
        showError(phoneInput, 'Некорректный телефон');
        isValid = false;
      }

      if (isValid) {
        console.log('Submitting...');
        form.submit();
      }
    });
  });

  function showError(input, message) {
    const errorSpan = input?.parentElement.querySelector('.error-message');
    input?.classList.add('input__error');

    if (errorSpan) {
      errorSpan.style.display = 'block';
      errorSpan.textContent = message;
    }
  }

  function isValidPhoneNumber(phone) {
    const phoneRegex = /^\+\d{1}\(\d{3}\)\s\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  }
});
