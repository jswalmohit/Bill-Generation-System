import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTable } from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
  CommonModule,
  ReactiveFormsModule,
  MatTableModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule   
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements AfterViewInit{

  // Columns for mat-table
  displayedColumns: string[] = ['sno', 'productName', 'quantity', 'amount', 'total_amount', 'action'];

  // Dropdown Data
  productList: string[] = ['Laptop', 'Mobile', 'Keyboard', 'Mouse'];
  quantityList: number[] = [1,2,3,4,5,6,7,8,9,10];
  @ViewChild(MatTable) table!: MatTable<any>;
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      products: this.fb.array([])
    });

    // Add first row automatically
    // this.addProduct();
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // Getter for FormArray
  get products(): FormArray {
    return this.productForm.get('products') as FormArray;
  }

  // Add new row
  addProduct(): void {
    console.log("dkmcdknckdnkd");
    const productGroup = this.fb.group({
      productName: ['', Validators.required],
      quantity: ['', Validators.required],
      amount:['',Validators.required],
      total_amount:['', Validators.required]
    });

    // this.products.push(productGroup);
      this.table.renderRows();
  }

  // Remove row
  removeProduct(index: number): void {
    this.products.removeAt(index);
      this.table.renderRows();
  }

  trackByIndex(index: number): number {
  return index;
}

  // Submit
  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Form Value:', this.productForm.value);
    } else {
      this.productForm.markAllAsTouched();
    }
  } 
}
