import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SignupComponent } from '../signup/signup.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule
    , FormsModule, SignupComponent,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  providers: [SignupComponent],
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    username: '',
    password: ''
  }

  user: any;

  ngOnInit(): void {
    this.signup.getUserDetails();
  }
  constructor(
    private signup: SignupComponent,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  onSubmit() {
    // Store login data in session storage
    this.user = this.signup.getUserDetails();
    console.log("user in login component : ", this.user);
    console.log("Login credentials : " + this.login.password);
    console.log("user in login component : ", this.user.password);
    if (this.login.password === this.user.password) {
      console.log("enter into if condition");
      sessionStorage.setItem('loggedInUser', JSON.stringify(this.login));
      console.log("stored into session storage");
     return this.router.navigate(['/home']);
      // const showValue = JSON.parse(sessionStorage.getItem("show"));
     // this.authService.setLoggedInUser(this.login);
      // console.log('show : '+JSON.parse(sessionStorage.getItem("show")))
    } else {
      return this.snackBar.open('User invalid! Please create new User', 'Ok', { duration: 2000 });
    }
  }

  loginCredentials() {
    console.log("session storage data in Login component : " + sessionStorage.getItem("loggedInUser"))
    return sessionStorage.getItem("loggedInUser")
  }
}
