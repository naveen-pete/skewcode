import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  showMessage: boolean;
  @Output() productCreated: EventEmitter<Product>;

  constructor() { 
    this.product = new Product();
    this.showMessage = false;
    this.productCreated = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  onSave() {
    let newProduct = new Product();
    newProduct.name = this.product.name;
    newProduct.description = this.product.description;
    newProduct.price = this.product.price;
    newProduct.isAvailable = this.product.isAvailable;

    this.productCreated.emit(newProduct);

    this.product = new Product();
    this.showMessage = true;

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
