import { CommonModule } from '@angular/common';
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
  
  @Input() data: any[] = [];
  displayedColumns: string[] = [];

  ngOnChanges(): void {
    
      if(this.data.length>0){
        this.displayedColumns=Object.keys(this.data[0])
      }
      console.log("data value columns : ",this.displayedColumns)
      
    }

}
