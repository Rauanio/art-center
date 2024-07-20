let elements = document.querySelectorAll('.rolling-text');

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = '';

  let textContainer = document.createElement('div');
  textContainer.classList.add('rolling__block');

  let span = document.createElement('span');
  span.innerText = innerText;
  span.classList.add('word');

  textContainer.appendChild(span);

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});
