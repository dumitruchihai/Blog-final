import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Articles } from '../models/articles.models';

@Component({
  selector: 'app-postlistitemcomponent',
  templateUrl: './postlistitemcomponent.component.html',
  styleUrls: ['./postlistitemcomponent.component.scss']
})
export class PostlistitemcomponentComponent implements OnInit {

  article : Articles[];

  @Input() articleTitre: string;
  @Input() articleContent: string;
  @Input() articleLoveIts: number;
  @Input() articleCreatedDate: string;
  @Input() indexOfArticles : number;



  constructor(private blogService: BlogService ) { }

  ngOnInit() {
  }

  getColor(){
    if(this.articleLoveIts > 0) {
      return 'green';
    } else if(this.articleLoveIts < 0){
      return 'red';
    } 
  }

  onLoveIt(){
    this.articleLoveIts += 1;
    this.blogService.updateLike(this.indexOfArticles, this.articleLoveIts);
  }

  onDissLoveIt(){
    this.articleLoveIts -= 1;
    this.blogService.updateLike(this.indexOfArticles, this.articleLoveIts);
  }

  onDeleteArticle(index: number){
    this.blogService.removeArticle(index);
  }

  onUpdateLikes(){
    
  }
}
