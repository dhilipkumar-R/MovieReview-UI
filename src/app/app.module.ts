import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {DataTableModule, ToolbarModule , DialogModule, AccordionModule , RatingModule} from 'primeng/primeng';
import {MatIconModule, MatButtonModule, MatInputModule , MatRippleModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoAccessComponent } from './no-access/no-access.component';
import {TitleScreenComponent} from './title-screen/title-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MovieService } from './Services/movie-app.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoAccessComponent,
    TitleScreenComponent,
    LoginComponent,
    MyReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,  ReactiveFormsModule, RatingModule, FormsModule, DataTableModule, ToolbarModule, AccordionModule, DialogModule, MatIconModule, MatButtonModule , MatInputModule , MatRippleModule , BrowserAnimationsModule ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
