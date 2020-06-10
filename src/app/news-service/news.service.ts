import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<any> {
    const url = "https://practice-753392935.us-east-2.elb.amazonaws.com/api/get_news";
    return this.http.get(url);
  }
}