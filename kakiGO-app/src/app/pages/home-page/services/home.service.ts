import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
   
  private endPoint = "home";

  constructor(private httpClient: HttpClient) { }

  public getHome() {
    return this.httpClient.get(`${environment.baseUrl}${this.endPoint}`)
  }
}


