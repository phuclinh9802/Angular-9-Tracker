import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<any> {
    const url = "http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=25acb99ee9c14efa9cbc84ee5761722b";
    return this.http.get(url);
  }
}