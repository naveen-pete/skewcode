import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(
        (response) => {
          console.log('response:', response);
          console.log('response.json():', response.json());
          this.products = response.json();
        },
        (error) => {
          console.log(error);
        } 
      );
  }

  onAdd() {
    this.router.navigate(['/products', 'new', 'edit']);
  }
}
