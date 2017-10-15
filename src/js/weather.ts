import { http } from './http';

export interface Forecast {
  WeatherText: string;
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

  private request(query: string): Promise<any> {
    const url = `http://apidev.accuweather.com/${query}&apiKey=${this.apiKey}`;
    return http.GET(url).then((response) => {
      if (response.length === 0) {
        throw new Error('not found');
      } else {
        return response[0];
      }
    });
  }

  private async resolveCity(cityName: string): Promise<string> {
    const city = await this.request(`locations/v1/search?q=${cityName}`);
    return city.Key;
  }

  private resolveForecast(key: string): Promise<Forecast> {
    return this.request(`currentconditions/v1/${key}.json?language=es`);
  }

  async todayForecast(city: string) {
    const key = await this.resolveCity(city);
    return this.resolveForecast(key);
  }
}

export const weather = new WeatherService('hoArfRosT1215');
