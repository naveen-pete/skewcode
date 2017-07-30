import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/observable';

import { Product } from '../models/product';
import { LoggingService } from '../services/logging.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number;
  product: Product;
  showMessage: boolean;
  addNew: boolean = true;
  @ViewChild('f') productForm: NgForm;

  constructor(
    private loggingService: LoggingService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.product = new Product();
    this.showMessage = false;
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        if(params['id'] === 'new') {
          this.product = new Product();
          this.addNew = true;
        } else {
          this.id = +params.id;
          this.productsService.getProduct(this.id)
            .subscribe(
              (response) => {
                this.product = response.json();
                this.addNew = this.product ? false : true;
              },
              (error) => {
                console.log(error);
              }
            );
        }
      }
    );
  }

  onSubmit() {
    this.product.name = this.productForm.value.productData.name;
    this.product.description = this.productForm.value.productData.description;
    this.product.price = +this.productForm.value.price;
    this.product.isAvailable = this.productForm.value.isAvailable;
    console.log('product:', this.product);

    if(this.addNew) {
      this.productsService.addProduct(this.product)
        .subscribe(
          (response) => {
            console.log('Product:', response.json());
            this.loggingService.log('New product created successfully.');
          },
          (error) => {
            console.log(error);
          }
        );
      this.router.navigate(['/products']);
    }
    else {

      this.productsService.updateProduct(this.id, this.product)
        .subscribe(
          (response) => {
            console.log('Product:', response.json());
            console.log('Product updated successfully!');
          },
          (error) => {
            console.log(error);
          }
        );
      this.router.navigate(['/products', this.id]);
    }
  }
}
