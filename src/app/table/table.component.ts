import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';

interface Column {
  key: string;
  title: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

   data: any[] = [];
  displayedColumns: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('MOCK_DATA.json').subscribe(response => {
      this.data = response;
      if (this.data.length > 0) {
        this.displayedColumns = Object.keys(this.data[0]);
      }
    });
  }

}
