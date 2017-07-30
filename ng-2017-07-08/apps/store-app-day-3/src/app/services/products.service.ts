import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { LoggingService } from './logging.service';

@Injectable()
export class ProductsService {
    private products: Product[];

    constructor(private loggingService: LoggingService) {
        this.products = [
            { id: 1, name: 'Data Structures and Algorithms', description: 'An ideal book for first course on data structures and algorithms, its text ensures a style and content relevant to present-day programming.', isAvailable: true, price: 285 },
            { id: 2, name: 'Premsons 608 Four Bearing Fidget Spinner', description: 'Perfect toy for fidgeters.', isAvailable: false, price: 160 },
            { id: 3, name: 'Bahubali', description: 'Raised in a remote tribal village, Shivudu grows up a carefree young man who relentlessly pursues his heart\'s desire.', isAvailable: true, price: 268 }
        ];
    }

    getProducts() {
        this.loggingService.log('Returning all products.');

        return this.products;
    }

    getProduct(id: number) {
        const product = this.products.find(
            product => product.id === id
        );

        this.loggingService.log('Returning a single product for product id: ' + id);
        return product; 
    }
}