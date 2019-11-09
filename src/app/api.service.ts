import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getImages(){
    console.log("hello");
    // return this.httpClient.get('/api');
    return this.httpClient.get('/api');
  }
}
