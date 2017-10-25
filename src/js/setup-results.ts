import { getParameterByName, setDOMValues } from './utils';
import { Forecast, weather } from './weather';
import { search } from './search';

export function setupResults() {
  const origin = getParameterByName('origin').trim().toLowerCase();
  const destination = getParameterByName('destination').trim().toLowerCase();

  setupDOM(origin, destination);
  setupWeather(origin, destination);
  setupSearch(origin, destination);
}

function setupDOM(origin: string, destination: string) {
  setDOMValues('#title-origin', 'textContent', origin);
  setDOMValues('#title-destination', 'textContent', destination);

  setDOMValues('input[name=origin]', 'value', origin);
  setDOMValues('input[name=destination]', 'value', destination);
}

async function setupWeather(origin: string, destination: string) {
  Promise.all([
    weather.todayForecast(normalizeCity(destination)),
    weather.todayForecast(normalizeCity(origin))
  ]).then(weather => {
    updateWeatherWidget('weather-container', destination, weather[0]);
    updateWeatherWidget('weather-container', origin, weather[1]);
  }
    ).catch(() => {
      console.log('weather city not found');
    });
}

function normalizeCity(city: string): string {
  return city + ', Spain';
}

async function setupSearch(origin: string, destination: string) {
  const resultsTable = document.getElementById('table-data');
  if (!resultsTable) {
    return;
  }
  try {
    const results = await search.search(origin, destination);
    for (let item of results) {
      const el = document.createElement('tr');
      el.innerHTML = `
      <td>${item.start}</td>
      <td>${item.end}</td>
      <td>${item.duration}</td>
      <td>${item.train}</td>
      <td>${item.type}</td>
      <td>${item.price}</td>
      `;
      resultsTable.appendChild(el);
    }
  } catch (e) {
    const noTrains = document.getElementById('no-trains');
    if (noTrains) {
      noTrains.classList.add('show');
      return;
    }
  }
}

function updateWeatherWidget(id: string, city: string, forecast: Forecast) {
  const containerEl = document.getElementById(id);
  if (!containerEl) {
    return;
  }
  const el = document.createElement('div');
  const temperature = forecast.Temperature.Metric.Value;
  const text = forecast.WeatherText;
  const iconHTML = getIcon(forecast);

  el.classList.add('weather-content');
  el.innerHTML = `
  <h4>${city}</h4>
  <h3>${iconHTML} ${temperature}ºC</h3>
  `;
  containerEl.appendChild(el);
}

function getIcon(forecast: Forecast): string {
  const icon = forecast.WeatherIcon;
  let iconName = 'fa-sun-o';
  console.log(icon);
  switch (icon) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 38:
      iconName = 'fa-cloud';
      break;
    case 12:
    case 13:
    case 14:
    case 18:
    case 39:
    case 40:
      iconName = 'fa-tint';
      break;
    case 15:
    case 16:
    case 17:
    case 41:
    case 42:
      iconName = 'fa-bolt';
      break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 43:
    case 44:
      iconName = 'fa-snowflake-o';
      break;
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
      iconName = 'fa-moon-o';
      break;
  }
  return `<i class="fa ${iconName}" aria-hidden="true"></i>`;
}
