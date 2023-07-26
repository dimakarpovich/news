const date =  () => {
  let dateClock  = document.querySelector('.date__clock');
  let dateDay = document.querySelector('.date__day');
  console.log(dateClock, dateDay);

  const daysWeekend = [
    'Monday',
    'Thuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Suturday',
    'Sunday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Desember',
  ];

  const clock = setInterval (function dateTime () {
    const today = new Date();
    let date = today.getDate();
    let day = daysWeekend[today.getDay()];
    let month = months[today.getMonth()];

    let hours = today.getHours();
    let minutes = today.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes ;

    dateDay.innerHTML = `
    <p class="date__weekend">${day}</p>
    <p class="date__number">${date}</p>
    <p class="date__month">${month}</p>
    `;
    dateClock.innerHTML = `${hours}:${minutes}`;


  },1000)



}
export default date;
