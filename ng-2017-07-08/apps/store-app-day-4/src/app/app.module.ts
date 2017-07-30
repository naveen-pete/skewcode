import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Services
import { LoggingService } from './services/logging.service';
import { ProductsService } from './services/products.service';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { AppNavComponent } from './app-nav/app-nav.component';

// Application Routes
const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: ':id', component: ProductDetailComponent },
    { path: ':id/edit', component: ProductFormComponent }
  ] },
  { path: 'customers', component: CustomersComponent },
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductDetailComponent,
    ProductListComponent,
    NotFoundComponent,
    HomeComponent,
    CustomersComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
