const daysContainer = document?.querySelector('.calendar__days');
const leftArrow = document?.querySelector('.calendar__btn.left');
const rightArrow = document?.querySelector('.calendar__btn.right');
const calendarWrapper = document.querySelector('.calendar__wrapper');

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

function renderDaysForMonth(month, year) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthContainer = document.createElement('div');
  monthContainer.classList.add('calendar__month-view');

  const monthElement = document.createElement('div');
  monthElement.classList.add('calendar__month');
  monthElement.textContent = months[month];
  monthContainer.appendChild(monthElement);

  const daysElement = document.createElement('div');
  daysElement.classList.add('calendar__days');

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
      const currentlyActiveDay = daysElement.querySelector(
        '.calendar__day.active'
      );
      if (currentlyActiveDay) {
        currentlyActiveDay.classList.remove('active');
      }
      dayElement.classList.add('active');
    });

    daysElement.appendChild(dayElement);
  }

  monthContainer.appendChild(daysElement);
  return monthContainer;
}

function renderAllMonths() {
  if (!calendarWrapper) {
    console.error('Required element is not found in the DOM.');
    return;
  }

  // Clear any existing content
  calendarWrapper.innerHTML = '';

  for (let month = 0; month < 12; month++) {
    const monthView = renderDaysForMonth(month, currentYear);
    calendarWrapper.appendChild(monthView);
  }

  // Ensure that the scroll position is updated after rendering
  requestAnimationFrame(() => {
    const currentMonthElement = calendarWrapper.children[currentMonth];
    currentMonthElement.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
    });
  });
}

function handleArrowClick(offset) {
  const newScrollPosition = calendarWrapper.scrollLeft + offset;
  calendarWrapper.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
}

leftArrow?.addEventListener('click', () =>
  handleArrowClick(-calendarWrapper.clientWidth)
);
rightArrow?.addEventListener('click', () =>
  handleArrowClick(calendarWrapper.clientWidth)
);

document.addEventListener('DOMContentLoaded', function () {
  renderAllMonths();

  let isDragging = false;
  let startX;
  let scrollLeft;

  calendarWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - calendarWrapper.offsetLeft;
    scrollLeft = calendarWrapper.scrollLeft;
    calendarWrapper.style.cursor = 'grabbing';
  });

  calendarWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    calendarWrapper.style.cursor = 'grab';
  });

  calendarWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    calendarWrapper.style.cursor = 'grab';
  });

  calendarWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - calendarWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    calendarWrapper.scrollLeft = scrollLeft - walk;
  });
});
