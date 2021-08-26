import { Component, OnInit , ViewChild } from '@angular/core';
import { MoviesList } from './home';
import { InputText } from 'primeng/primeng';
import { MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import {MovieService} from '../Services/movie-app.services';
import {MovieResponseModel} from '../home/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string;
  addnewmoviedialog: boolean;
  filterValue = '';
  loadgrid: boolean;
  dataSource: MoviesList[] = [];
  constructor(private router: Router , private movieService: MovieService ) { }
  @ViewChild('filter') globalFilter: InputText;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  movie?: string;
  year?: string;
  language?: string;
  genre?: string;
  country?: string;

  ngOnInit() {
    this.userName = sessionStorage.getItem('username');
    this.loadgrid = true;
    this.loadupdatedtable(this.userName);
  }
  loadupdatedtable(userName) {
    this.movieService.GetList(userName).subscribe((Response: any) => {
      this.dataSource = Response;
      this.loadgrid = false;
     }, (error: MovieResponseModel) => {
      alert('Error Fetching grid list');
      this.loadgrid = false;
     });
  }

  clearFilter() {
    this.filterValue = '';
    this.globalFilter['nativeElement'].dispatchEvent(
      new KeyboardEvent('keyup')
    );
  }

openNew() {
  // this.movie = {};
  this.movie = '';
  this.year = '';
  this.language = '';
  this.country = '';
  this.genre = '';

this.addnewmoviedialog = true;
}
Back() {
  this.router.navigate(['']);
}
onRowSelect($event) {
  const row = $event;

  this.router.navigate([
    '/title', row.data.id
  ]);
}
hideDialog() {
  this.addnewmoviedialog = false;
}
saveProduct() {
 let form = new FormData();
 const formDataObject = this.getFormDataObject();
 form.append('formObject', JSON.stringify(formDataObject));
 this.loadgrid = true;
 this.movieService.SaveMovie(form).subscribe((Response: MovieResponseModel) => {
  if (Response.status) {
    alert(Response.message);
    this.hideDialog();
    this.loadupdatedtable(this.userName);
    this.loadgrid = false;
  } else {
    alert(Response.message);
    this.hideDialog();
  }
 }, (error: MovieResponseModel) => {
  alert(error.message);
 });
}
Reviews() {
  this.router.navigate(['/reviews']);
}
 public getFormDataObject() {
  return {
    movie: this.movie,
    year  : this.year,
    country: this.country,
    language: this.language,
    genre: this.genre
  };
}

}
