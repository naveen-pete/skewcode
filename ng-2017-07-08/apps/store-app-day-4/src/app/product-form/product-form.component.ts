import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: number;
  product: Product;
  showMessage: boolean;
  addNew: boolean = true;

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
          this.product = this.productsService.getProduct(this.id);
          this.addNew = this.product ? false : true;
        }
      }
    );
  }

  onSave() {
    if(this.addNew) {
      this.productsService.addProduct(this.product);
      this.loggingService.log('New product created successfully.');
      this.router.navigate(['/products']);
    }
    else {
      this.productsService.updateProduct(this.id, this.product);
      this.loggingService.log('Product updated successfully.');
      this.router.navigate(['/products', this.id]);
    }
  }

  onSubmit(productForm: NgForm) {
    if(this.addNew) {
      this.productsService.addProduct(productForm.value);
      this.loggingService.log('New product created successfully.');
      this.router.navigate(['/products']);
    }
    else {
      this.productsService.updateProduct(this.id, this.product);
      this.loggingService.log('Product updated successfully.');
      this.router.navigate(['/products', this.id]);
    }
  }
}
