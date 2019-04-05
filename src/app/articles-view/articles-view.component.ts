import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Articles } from '../models/articles.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.scss']
})
export class ArticlesViewComponent implements OnInit, OnDestroy {

  articles : Articles[];
  articlesSubscription: Subscription;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.articlesSubscription = this.blogService.articlesSubject.subscribe(
      (articles:Articles[]) => {
        this.articles = articles;
      }
    )
    this.blogService.getArticles();
    this.blogService.emitArticles();
  }

  ngOnDestroy(){
    this.articlesSubscription.unsubscribe();
  }

}
