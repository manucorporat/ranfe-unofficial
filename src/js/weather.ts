import { http } from './http';

export interface Forecast {
  WeatherText: string;
  WeatherIcon: number;
  Temperature: {
    Metric: {
      Value: number;
    }
  };
}

export class WeatherService {

  constructor(
    private apiKey: string
  ) { }

  private async request(query: string): Promise<any> {
    const url = `http://apidev.accuweather.com/${query}&apiKey=${this.apiKey}`;
    const response = await http.GET(url);
    if (response.length > 0) {
      const result = response[0];
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
}

export const weather = new WeatherService('hoArfRosT1215');
