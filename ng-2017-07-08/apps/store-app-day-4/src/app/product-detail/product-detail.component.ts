import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.product = this.productsService.getProduct(this.id);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/products', this.id, 'edit']);
  }

  onDelete() {
    this.productsService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }
}
