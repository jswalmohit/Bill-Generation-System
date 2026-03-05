import { Routes } from '@angular/router';
import { CustomerDetailsComponent } from './billing-details/customer-details/customer-details.component';
import { ProductDetailsComponent } from './billing-details/product-details/product-details.component';

export const routes: Routes = [
    { path: 'customer_details',   component: CustomerDetailsComponent },
    { path: 'product_details',   component: ProductDetailsComponent }
];
