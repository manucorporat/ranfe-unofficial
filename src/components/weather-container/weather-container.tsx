import { Component, Prop, State } from "@stencil/core";

export interface Forecast {
  WeatherText: string;
  WeatherIcon: number;
  Temperature: {
    Metric: {
      Value: number;
    }
  };
}

@Component({
  tag: 'weather-container',
  styleUrl: 'weather-container.scss'
})
export class WeatherContainer {

  private apiKey = 'hoArfRosT1215';

  @State() temperature: number;
  @State() icon: string;
  @Prop() city: string;

  async componentDidLoad() {
    try {
      const forecast = await this.todayForecast(normalizeCity(this.city));
      this.temperature = forecast.Temperature.Metric.Value;
      this.icon = getIcon(forecast);

    } catch (e) {
      console.error(e);
    }
  }

  private async request(query: string): Promise<any> {
    const url = `http://apidev.accuweather.com/${query}&apiKey=${this.apiKey}`;
    const response = await fetch(url);
    const json = await response.json();
    if (json.length > 0) {
      const result = json[0];
      if (typeof result !== 'object') {
        throw new Error('response is not an object');
      }
      return result;
    } else {
      throw new Error('empty response');
    }
  }

  private async resolveCity(cityName: string): Promise<string> {
    const query = `locations/v1/search?q=${cityName}`;
    const city = await this.request(query);
    const key = city.Key;
    if (!key) {
      throw new Error('city key is null');
    }
    return key;
  }

  private resolveForecast(key: string): Promise<Forecast> {
    const query = `currentconditions/v1/${key}.json?language=es`;
    return this.request(query);
  }

  async todayForecast(city: string): Promise<Forecast> {
    const key = await this.resolveCity(city);
    return this.resolveForecast(key);
  }

  hostData() {
    return {
      'role': 'footer'
    };
  }
  render() {
    const iconClass = {
      'fa': true,
      [this.icon]: true,
    };
    return (
      <div class='weather-content'>
        <h4>{this.city}</h4>
        <h3>
          <i class={iconClass} aria-hidden="true"></i> {this.temperature}ºC
        </h3>
      </div>
    );
  }
}

function getIcon(forecast: Forecast): string {
  const icon = forecast.WeatherIcon;
  switch (icon) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 38:
      return 'fa-cloud';
    case 12:
    case 13:
    case 14:
    case 18:
    case 39:
    case 40:
      return 'fa-tint';
    case 15:
    case 16:
    case 17:
    case 41:
    case 42:
      return 'fa-bolt';
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
      return 'fa-snowflake-o';
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
      return 'fa-moon-o';
    default:
      return 'fa-sun-o';
  }
}


function normalizeCity(city: string): string {
  return city + ', Spain';
}
