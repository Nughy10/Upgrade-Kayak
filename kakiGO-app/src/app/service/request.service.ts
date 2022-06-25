import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  public getRequest(url: string) {
    return this.httpClient.get(`${environment.baseUrl}${url}`)
  }

  public postMessage(url: string, element: any) {
    return this.httpClient.post(`${environment.baseUrl}${url}`, element)
      .subscribe((data) => {
        console.log(data);
      });
  }


}
