
export class HTTPService {

  request(method: string, url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open(method, url);
      req.addEventListener('load', () => {
        resolve(JSON.parse(req.responseText));
      });
      req.addEventListener('error', (ev) => {
        reject(ev);
      });
      req.send();
    });
  }

  GET(url: string): Promise<any> {
    return this.request('GET', url);
  }

  POST(url: string): Promise<any> {
    return this.request('GET', url);
  }
}

export const http = new HTTPService();
