import { http } from './http';

export interface SearchResult {
  start: string;
  end: string;
  duration: string;
  price: string;
  train: string;
  type: string;
}

export class SearchService {

  async search(origin: string, destination: string): Promise<SearchResult[]> {
    const url = `/assets/data/${origin}.json`;
    const response = await http.GET(url);
    if (!response || !response[destination]) {
      throw new Error('no search data');
    }
    return response[destination];
  }
}

export const search = new SearchService();
