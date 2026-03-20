import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  constructor(private http: HttpClient) {}

 customerData: any;
  productData: any;

  setCustomer(data: any) {
    this.customerData = data;
  }

  getCustomer() {
    return this.customerData;
  }

  setProducts(data: any) {
    this.productData = data;
  }

  getProducts() {
    return this.productData;
  }

  // saveCustomer(data: any)
  // {
  //   return this.http.post("'http://localhost:8080/billing/customer/addCustomer", data);
  // }
}
