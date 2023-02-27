import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
   //new api url 
   api_key = '1db857dd8194457aba5df231c86c533f';
   newsApiUrl = ' https://newsapi.org/v2/everything?q=tesla&from=2023-01-27&sortBy=publishedAt&apiKey=' 
  constructor(private http :HttpClient) { }

  topHeading():Observable<any>
  {
     return this.http.get(this.newsApiUrl + this.api_key);
  }
}