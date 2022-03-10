import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProduct(): Observable<Product[]>{ 
    //To DO: Populate products from an API and return an Observable
    return this.http.get<Product[]>(productsUrl);
  }
}
