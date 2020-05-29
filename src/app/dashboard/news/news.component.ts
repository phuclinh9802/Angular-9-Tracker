import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news-service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any;
  index: number = this.getRandomInt(19);
  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data) => {
      this.news = data.articles;
    })
  }

  getNews(news: any): void {
    this.news = news;
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  

}