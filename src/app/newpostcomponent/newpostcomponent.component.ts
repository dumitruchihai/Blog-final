import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';
import { Articles } from '../models/articles.models';

@Component({
  selector: 'app-newpostcomponent',
  templateUrl: './newpostcomponent.component.html',
  styleUrls: ['./newpostcomponent.component.scss']
})
export class NewpostcomponentComponent implements OnInit {

  articleForm : FormGroup;

  dateCreate = Date.now();

  constructor(private formBuilder : FormBuilder,
              private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.articleForm = this.formBuilder.group({
      title : ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSaveArticle(){
    const title = this.articleForm.get('title').value;
    const content = this.articleForm.get('content').value;
    const newArticle = new Articles(title,content);
    newArticle.loveIts = 0;
    newArticle.created_at = this.dateCreate;
    this.blogService.createNewArticle(newArticle);
    this.router.navigate(['/articles']);
  }

}
