import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorMessageSubject = new BehaviorSubject<error>({status:"",details:"",message:""});
  errorMessage$ = this.errorMessageSubject.asObservable();

  showError(error: error) {
    this.errorMessageSubject.next(error);
  }
}
export interface error{
  status:string,
  details:string,
  message:string
}
