const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const year = new Date().getFullYear();

const calendarYearElement = document.querySelector('.calendar2-year');

monthNames.forEach((monthName, monthIndex) => {
  const monthElement = document.createElement('div');
  monthElement.className = 'calendar2';

  const monthHeader = document.createElement('div');
  monthHeader.className = 'calendar2-header';
  monthHeader.textContent = `${monthName}`;
  monthElement.appendChild(monthHeader);

  const daysElement = document.createElement('div');
  daysElement.className = 'calendar2-days';

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const dayOfWeek = new Date(year, monthIndex, day).getDay();
    const adjustedDayOfWeek = (dayOfWeek + 6) % 7;

    const dayElement = document.createElement('div');
    dayElement.className = 'calendar2-day';

    const dayNameElement = document.createElement('span');
    dayNameElement.className = 'day-name';
    dayNameElement.textContent = dayNames[adjustedDayOfWeek];
    dayElement.appendChild(dayNameElement);

    const dayNumberElement = document.createElement('span');
    dayNumberElement.className = 'day-number';
    dayNumberElement.textContent = day < 10 ? `0${day}` : day;
    dayElement.appendChild(dayNumberElement);

    daysElement.appendChild(dayElement);
  }

  monthElement.appendChild(daysElement);

  calendarYearElement.appendChild(monthElement);
});

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const calendarWrapper = document.querySelector('.calendar2-wrapper');

leftButton.addEventListener('click', () => {
  calendarWrapper.scrollBy({
    left: -calendarWrapper.offsetWidth,
    behavior: 'smooth',
  });
});

rightButton.addEventListener('click', () => {
  const calendarWrapperWidth = calendarWrapper.offsetWidth;

  calendarWrapper.scrollBy({ left: calendarWrapperWidth, behavior: 'smooth' });
});

let isDragging = false;
let startX;
let scrollLeft;

// Mouse down event to start dragging
calendarWrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - calendarWrapper.offsetLeft;
  scrollLeft = calendarWrapper.scrollLeft;
  calendarWrapper.classList.add('active');
});

// Mouse up event to stop dragging
calendarWrapper.addEventListener('mouseup', () => {
  isDragging = false;
  calendarWrapper.classList.remove('active');
});

// Mouse leave event to stop dragging if the mouse leaves the container
calendarWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  calendarWrapper.classList.remove('active');
});

// Mouse move event to handle the dragging
calendarWrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - calendarWrapper.offsetLeft;
  const walk = x - startX;
  calendarWrapper.scrollLeft = scrollLeft - walk;
});

document.addEventListener('DOMContentLoaded', () => {
  const currentMonthIndex = new Date().getMonth();
  const calendarWrapper = document.querySelector('.calendar2-wrapper');
  const months = document.querySelectorAll('.calendar2');

  const currentMonthElement = months[currentMonthIndex];

  if (currentMonthElement) {
    const scrollTo =
      currentMonthElement.offsetLeft -
      calendarWrapper.offsetLeft -
      parseFloat(window.getComputedStyle(calendarWrapper).paddingLeft);
    calendarWrapper.scrollTo({ left: scrollTo, behavior: 'smooth' });
  }
});

