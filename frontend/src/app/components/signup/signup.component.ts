import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = {'email': '', 'password': ''};

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUpUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/peliculas']);
      },
      err => console.log(err)
    )
  }

}
