const daysContainer = document?.querySelector('.calendar__days');
const monthNameContainer = document?.querySelector('.calendar__month');
const leftArrow = document?.querySelector('.calendar__btn.left');
const rightArrow = document?.querySelector('.calendar__btn.right');
const prevDayContainer = document.querySelector('.calendar__prev-day');

const months = [
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

const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function formatDay(day) {
  return day < 10 ? `0${day}` : day;
}

function renderPrevDay(month, year) {
  if (!prevDayContainer) {
    return;
  }
  const prevMonthDate = new Date(year, month, 0);
  const day = formatDay(prevMonthDate.getDate());
  const dayOfWeek = weekdays[prevMonthDate.getDay()];
  const monthName = months[prevMonthDate.getMonth()];

  prevDayContainer.innerHTML = `
  <div class="month">${monthName}</div>
  <div class="calendar__prev-wrapper">
    <div class="weekday">${dayOfWeek}</div>
    <div class="day">${day}</div>
  </div>
  `;
}

function renderDays(month, year) {
  if (!daysContainer || !monthNameContainer) {
    console.error('Required elements are not found in the DOM.');
    return;
  }

  daysContainer.innerHTML = '';
  monthNameContainer.textContent = months[month];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayOfWeek = weekdays[date.getDay()];
    const isWeekend = dayOfWeek === 'Вс' || dayOfWeek === 'Сб';

    const dayElement = document.createElement('div');
    dayElement.classList.add('calendar__day');
    if (isWeekend) {
      dayElement.classList.add('weekend');
    }
    dayElement.setAttribute('data-day-of-week', `${dayOfWeek}`);
    dayElement.textContent = formatDay(day);

    if (
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    ) {
      dayElement.classList.add('active');
    }

    dayElement.addEventListener('click', () => {
      const currentlyActiveDay = daysContainer.querySelector(
        '.calendar__day.active'
      );
      if (currentlyActiveDay) {
        currentlyActiveDay.classList.remove('active');
      }

      dayElement.classList.add('active');
    });

    daysContainer.appendChild(dayElement);
  }
}

function changeMonth(offset) {
  currentMonth += offset;

  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  } else if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }

  renderPrevDay(currentMonth, currentYear);
  renderDays(currentMonth, currentYear);
}

leftArrow?.addEventListener('click', () => changeMonth(-1));
rightArrow?.addEventListener('click', () => changeMonth(1));

renderPrevDay(currentMonth, currentYear);
renderDays(currentMonth, currentYear);

document.addEventListener('DOMContentLoaded', function () {
  let isDragging = false;
  let startX;
  let scrollLeft;

  daysContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - daysContainer.offsetLeft;
    scrollLeft = daysContainer.scrollLeft;
    daysContainer.style.cursor = 'grabbing';
  });

  daysContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    daysContainer.style.cursor = 'grab';
  });

  daysContainer.addEventListener('mouseup', () => {
    isDragging = false;
    daysContainer.style.cursor = 'grab';
  });

  daysContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - daysContainer.offsetLeft;
    const walk = (x - startX) * 2;
    daysContainer.scrollLeft = scrollLeft - walk;
  });
});
