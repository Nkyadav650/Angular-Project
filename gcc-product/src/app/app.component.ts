import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './credentials/login/login.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './credentials/signup/signup.component';
import { AuthService } from './services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    RouterLink,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
   
   
  ],
  providers:[LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'gcc-product';
  loggedInUser: any=null;

  //constructor(private singup: SignupComponent,private router: Router,
   // private snackBar: MatSnackBar){ }

  //loginDetails: LoginComponent = new LoginComponent(this.singup,this.router,this.snackBar);

  ngOnInit(): void {
    //this.loginDetails.loginCredentials();
  }
  // constructor(private authService: AuthService) {
  //   this.loggedInUser = this.authService.getLoggedInUser();
  // }

 // constructor(private loginDetails:LoginComponent,private router:Router){}
  
  // fetchLogin(){
  //   this.loggedInUser=this.loginDetails.loginCredentials();
  //   console.log("login data in app component : ",this.loggedInUser)
  //   if(this.loggedInUser){
  //     this.router.navigate([""]);
  //   }else{
  //     this.router.navigate(['/login'])
  //   }
 
  // }
}
