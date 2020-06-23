import { Component, Prop, State, h } from "@stencil/core";

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
  @Prop() city: string;

  async componentDidLoad() {
    try {
      const forecast = await this.todayForecast(normalizeCity(this.city));
      this.temperature = forecast.Temperature.Metric.Value;

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
    return (
      <div class='weather-content'>
        <h4>{this.city}</h4>
        <h3>
          {this.temperature}ºC
        </h3>
      </div>
    );
  }
}

function normalizeCity(city: string): string {
  return city + ', Spain';
}
