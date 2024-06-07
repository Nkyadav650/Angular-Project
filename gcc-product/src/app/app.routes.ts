import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './credentials/signup/signup.component';
import { LoginComponent } from './credentials/login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'', component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'cart' , component:CartComponent},
    {path:'profile' , component:ProfileComponent}

];
