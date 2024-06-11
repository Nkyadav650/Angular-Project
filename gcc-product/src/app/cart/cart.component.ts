import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  tableData = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'San Francisco' },
    { name: 'Mike', age: 35, city: 'Chicago' }
  ];
  tableColumns = [
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'city', title: 'City' }
  ];
}
