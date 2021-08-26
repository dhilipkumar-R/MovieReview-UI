import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie-app.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit {
  myReviewsList: any[] = [];
  userName: string;
  constructor(private movieService: MovieService, private route: Router) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('username');
    this.movieService.GetMyreviews(this.userName).subscribe((Response: any) => {
      this.myReviewsList = Response;
     }, (error: any) => {
      alert(error.message);
     });
  }
  Back() {
    this.route.navigate(['/home']);
  }

}
