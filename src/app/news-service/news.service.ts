import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<any> {
    const url = "https://localhost:5001/api/get_news";
    return this.http.get(url);
  }
}