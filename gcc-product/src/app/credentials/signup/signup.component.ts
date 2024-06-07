import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, MatSnackBarModule],
  providers:[],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router, private snackBar: MatSnackBar,) { }
  user = {
    username: '',
    mailId: '',
    password: '',
    role: ''
  }

  onSubmit() {
    console.log("signup credential: " + this.user.username + '\n' + this.user.password + '\n' + this.user.mailId + '\n' + this.user.role)
    localStorage.setItem('user_details', JSON.stringify(this.user));
    this.snackBar.open('user signup success', 'Ok', { duration: 2000 });
    this.router.navigate(['/login']);

  }
  getUserDetails() {
    if (localStorage.getItem('user_details')) {
      const user = localStorage.getItem('user_details');
      console.log("This is coming from local storage: ", user);
      return JSON.parse(user || '{}');
    } else {
      console.log("No user details found in local storage.");
      return this.snackBar.open('User Value not available in database', 'Ok', { duration: 2000 }); // or return null; depending on how you handle this scenario
    }
  }
}
