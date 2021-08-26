import { Component, OnInit } from '@angular/core';
import { ReviewsList, DeletedList  } from './title-screen';
import {Router , ActivatedRoute} from '@angular/router';
import {MovieService} from '../Services/movie-app.services';
import {MovieResponseModel} from '../home/home';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent implements OnInit {
  userName: string;
  ReviewsList: any[] = [];
  SampleList: any[] = [];
  rating: number;
  MovieName: string;
  Year: string;
  Country: string;
  Language: string;
  Genre: string;
  caseId: any;
  deletedIds: any[] = [];
  constructor(private route: Router , private router: ActivatedRoute, private movieService: MovieService) {


   }

  ngOnInit() {
    this.userName = sessionStorage.getItem('username');
    this.caseId = this.router.snapshot.paramMap.get('id');
    this.movieService.GetTitle(this.caseId , this.userName).subscribe((Response: any) => {
      this.AssignValues(Response);
     }, (error: any) => {
      alert(error.message);
     });
  }

  onAdd() {
   this.ReviewsList.push(new ReviewsList('', this.userName, '', false));
  }
  onDelete(index: number) {
  this.SampleList.map((x, i) => {if (i === index) { x.isdeleted = true; }});
  this.ReviewsList.splice(index, 1);
  }
  Back() {
    this.route.navigate(['/home']);
  }
  AssignValues(Response) {
    this.MovieName = Response.movie.movieName;
    this.Year = Response.movie.year;
    this.Country = Response.movie.country;
    this.Language = Response.movie.language;
    this.Genre = Response.movie.genre;
    this.rating = Response.rating;
    this.ReviewsList = Response.reviewList;
    this.SampleList = JSON.parse(JSON.stringify(this.ReviewsList));
  }

  SaveTitleData() {
   let formData = new FormData();
   this.formatList( this.SampleList);
   formData.append('formObject', JSON.stringify(this.ReviewsList));
   formData.append('deletedIds', JSON.stringify( this.deletedIds));
   this.movieService.SaveTitle(formData, this.rating, this.caseId , this.userName).subscribe((Response: MovieResponseModel) => {
    if (Response.status) {
      alert(Response.message);
      this.Back();
    } else {
      alert(Response.message);

    }
   }, (error: MovieResponseModel) => {
    alert(error.message);
   });
  }
  formatList(oldval) {
    oldval.forEach(element => {
      if (element.isdeleted === true && element.isdeleted !== undefined) {
          this.deletedIds.push( new DeletedList(element.id));
      }
    });
  }
}
