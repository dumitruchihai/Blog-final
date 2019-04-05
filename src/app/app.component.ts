import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTP4ZAZQmomevkt3TcyybAYPkd74HgovI",
    authDomain: "articles-29367.firebaseapp.com",
    databaseURL: "https://articles-29367.firebaseio.com",
    projectId: "articles-29367",
    storageBucket: "",
    messagingSenderId: "433382326824"
  };
  firebase.initializeApp(config);

  }

  ngOnInit(){
  }
}
