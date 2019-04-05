import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistcomponentComponent } from './postlistcomponent/postlistcomponent.component';
import { PostlistitemcomponentComponent } from './postlistitemcomponent/postlistitemcomponent.component';

import { BlogService } from './services/blog.service';
import { NewpostcomponentComponent } from './newpostcomponent/newpostcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';

const appRoutes: Routes = [
  { path: 'articles', component: ArticlesViewComponent},
  { path: 'new-articles', component: NewpostcomponentComponent},
  { path: '', component: ArticlesViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
]


@NgModule({
  declarations: [
    AppComponent,
    PostlistcomponentComponent,
    PostlistitemcomponentComponent,
    NewpostcomponentComponent,
    HeaderComponent,
    FourOhFourComponent,
    ArticlesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
