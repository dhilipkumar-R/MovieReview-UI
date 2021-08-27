import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emailregex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public userName: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  saveusername() {

    if( this.userName != undefined || this.userName != null) {
      if (this.userName.match(this.emailregex)) {
        sessionStorage.setItem('username', this.userName);
        this.route.navigate(['/home']);
      } else {
        alert('Invalid mailID');
        return false;
      }
    } else {
      alert('mailID Should not be empty!');
      return false;
    }


  }
}

