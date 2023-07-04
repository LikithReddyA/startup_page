import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  private apiUrl : string = "https://api.quotable.io/random?maxLength=100";
  constructor(private httpClient: HttpClient) { 

  }

  getQuotes() {
    return this.httpClient.get(this.apiUrl);
  }
}
