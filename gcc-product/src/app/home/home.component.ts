
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../services/product';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HttpClientModule, CommonModule, SidebarComponent],
  providers: [ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: product[] = []; // Array to store fetched products

  constructor(
    private productService: ProductService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.searchValue$.subscribe(searchValue => {
      this.fetchData(searchValue);
    });
  }

  fetchData(searchValue: string): void {
    if (searchValue === 'all' || searchValue === '') {
      this.productService.getAllProducts().subscribe(
        (data) => {
          console.log(data);
          this.products = data; // Assign fetched data to the products array 
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      this.productService.getProductsByCategory(searchValue).subscribe(
        (data) => {
          console.log("Category wise : " + data);
          this.products = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
}