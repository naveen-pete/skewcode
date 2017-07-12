import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products: Product[];

    constructor() {
        this.products = [];
    }

    onProductCreated(newProduct: Product) {
        this.products.push(newProduct);
    }
}
