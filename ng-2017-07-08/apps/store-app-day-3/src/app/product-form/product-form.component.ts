import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from '../models/product';
import { LoggingService } from '../services/logging.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  showMessage: boolean;

  constructor(
    private loggingService: LoggingService,
    private productsService: ProductsService
  ) { 
    this.product = new Product();
    this.showMessage = false;
  }

  ngOnInit() {
    this.product = this.productsService.getProduct(2);
  }

  onSave() {
    let newProduct = new Product();
    newProduct.name = this.product.name;
    newProduct.description = this.product.description;
    newProduct.price = this.product.price;
    newProduct.isAvailable = this.product.isAvailable;

    this.product = new Product();
    this.showMessage = true;

    this.loggingService.log('New product created successfully.');

    setTimeout(
        () => {
            this.showMessage = false;
        }, 3000
    );
  }

  onSubmit(productForm: NgForm) {
    console.log(productForm);
  }
}
