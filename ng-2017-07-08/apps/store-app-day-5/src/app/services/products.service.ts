import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { Product } from '../models/product';
import { LoggingService } from './logging.service';

@Injectable()
export class ProductsService {
    private apiUrl: string = 'http://localhost:3000/products';

    constructor(
        private loggingService: LoggingService,
        private http: Http
    ) {}

    getProducts(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    getProduct(id: number): Observable<any> {
        return this.http.get(this.apiUrl + '/' + id);
    }

    addProduct(product: Product): Observable<any> {
        return this.http.post(this.apiUrl, product);
    }

    updateProduct(id: number, productInfo: Product): Observable<any> {
        return this.http.patch(this.apiUrl + '/' + id, productInfo);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(this.apiUrl + '/' + id);
    }
}
