import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) {}

  url: string = 'MOCK_DATA.json';
  
  // Method to fetch all products
  public getAllProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.url);
  }

// Method to fetch products by category
public getProductsByCategory(category: string): Observable<product[]> {
  return this.getAllProducts().pipe(
    map(products => products.filter(product => product.category === category))
  );
}
}
