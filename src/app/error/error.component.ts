import { Component, OnInit } from '@angular/core';
import { ErrorService, error } from '../services/error.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage: any ;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.errorMessage$.subscribe((error: error) => {
      this.errorMessage = error;
    });
  }
}
