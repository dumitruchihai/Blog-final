import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './postlistcomponent.component.html',
  styleUrls: ['./postlistcomponent.component.scss']
})
export class PostlistcomponentComponent implements OnInit {

  @Input() articlesList: string;

  constructor() { }

  ngOnInit() {
  }

}
 