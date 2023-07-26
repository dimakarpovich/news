import { API_KEY, FADE_IN } from "./constans";
import imgLocal from "../image/location.svg";



let town = document.querySelector('.location');


const getWeather = async ({latitude,longitude}) => {

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  const json = await data.json();
  if (data.ok) {
    console.log(json);
    const {name, main, weather, wind} = json;
    const {feels_like, humidity, temp_max, temp_min, temp} = main;

    let temprutare = temp > 0 ? `+${Math.floor(temp)}&#8451;` : `-${Math.floor(temp)}`;

    let townLink = document.querySelector('.location__link');
    townLink.innerHTML = `${name} ${temprutare}`;

    const icon  = document.createElement('img');
    icon.setAttribute('src', imgLocal);
    townLink.prepend(icon);

    townLink.addEventListener('click', (e)=>{
      e.preventDefault();
      const weatherList = document.querySelector('.weather');
      weatherList.classList.toggle('weather_active');

      const {description, icon} = weather[0];
      const {gust, speed} = wind;
      const img = document.querySelector('.weather__img');
      img.setAttribute('src', `https://openweathermap.org/img/wn/${icon}.png`);
      const descr = document.querySelector('.weather__descr');
      descr.innerText = `${description}`;

      const tempMax = document.querySelector('.weather__max');
      tempMax.innerText = `Max :${temp_max} °C`;
      const tempMin = document.querySelector('.weather__min');
      tempMin.innerText = `Min: ${temp_min} °C`;
      const temprutare = document.querySelector('.weather__temperature');
      temprutare.innerText = `${Math.floor(temp)}°C`;
      const tempFeels = document.querySelector('.weather__feels');
      tempFeels.innerText = `Feels like: ${feels_like}°C`
      const hum = document.querySelector('.weather__humidity');
      hum.innerText = `Humidity: ${humidity}%`;
      const maxWind = document.querySelector('.weather__wind-max');
      maxWind.innerText = `Wind gusts up to: ${gust} m/s`;
      const speedWind = document.querySelector('.weather__wind');
      speedWind.innerText = `Wind speed: ${speed} m/s`;

    });


  } else {
    town.innerHTML = `city not found`;
  }
  await new Promise(resolve => setInterval(resolve,60000));
  await getWeather({latitude,longitude});
}

export default getWeather;
