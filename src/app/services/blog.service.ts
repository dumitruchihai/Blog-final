import { Injectable } from '@angular/core';
import { Articles } from '../models/articles.models';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable()


export class BlogService{

    articles : Articles[] = [];
    articlesSubject = new Subject<Articles[]>();

    emitArticles(){
      this.articlesSubject.next(this.articles);
    }

    saveArticles(){
      firebase.database().ref('/articles').set(this.articles);
    }

    getArticles() {
      firebase.database().ref('/articles')
        .on('value', (data) => {
            this.articles = data.val() ? data.val() : [];
            this.emitArticles();
          }
        );
    }

    createNewArticle(newArticle: Articles){
      this.articles.push(newArticle);
      this.saveArticles();
      this.emitArticles();
    }

    removeArticle(index: number) {
      const articleIndexToRemove = index;
      this.articles.splice(articleIndexToRemove, 1);
      this.saveArticles();
      this.emitArticles();
    }

    updateLike(index:number, likes :number){
      this.articles[index].loveIts = likes;
      this.saveArticles();
      this.emitArticles();
    }
}