const calendarBody = document.getElementById('calendarBody');
const monthYear = document.getElementById('monthYear');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const renderCalendar = (month, year) => {
  calendarBody.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay(); // 해당 월 첫째날의 요일
  const daysInMonth = new Date(year, month + 1, 0).getDate();


  monthYear.textContent = `${year}년 ${month + 1}월`;

  let date = 1;

  for (let i = 0; i < 6; i++) {
    // 최대 6주
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      // 최대 7일
      const cell = document.createElement('td');
      if (i === 0 && j < firstDay) {
        cell.textContent = '';
      } else if (date > daysInMonth) {
        cell.textContent = '';
      } else {
        cell.textContent = date;
        if (
          year === today.getFullYear() &&
          month === today.getMonth() &&
          date === today.getDate()
          ) {
          cell.className = 'today';
          }
          date++;
      }
     
      // 조건: 날짜를 제대로 td에 넣고, 오늘이면 today 클래스 추가
      // 힌트: firstDay, daysInMonth, today.getDate(), today.getMonth(), today.getFullYear() 등 활용

      // todo: 화이팅!!

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);

    if (date > daysInMonth) break;
  }
};
//
prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
