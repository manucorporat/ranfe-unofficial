
// Esta clase abstrae toda la gestion de peticiones web.
export class HTTPService {

  request(method: string, url: string): Promise<any> {
    // Creamos una promesa que devolvera el resultado de la peticion HTTP
    // realizada con XMLHttpRequest
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open(method, url);
      req.addEventListener('load', () => {
        if (req.status >= 200 && req.status < 400) {
          resolve(JSON.parse(req.responseText));
        } else {
          reject(req.statusText);
        }
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
    return this.request('POST', url);
  }
}

export const http = new HTTPService();
