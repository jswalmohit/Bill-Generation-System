import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceDataService } from '../../services/invoice-data.service';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  customerForm : FormGroup;

  constructor( private formBuilder: FormBuilder, private router: Router,  private invoiceService: InvoiceDataService) {
     this.customerForm = this.formBuilder.group({
      customerName:['',Validators.required],
      customerAddress:['',Validators.required],
      customerGSTIN: ['',Validators.required],
      customerState:['',Validators.required],
      customerStateCode:['',[Validators.required, Validators.pattern('^[0-9]{2}$')]]
    });
  }
 onSubmit()
  {
    if(this.customerForm.valid)
    {
      this.invoiceService.setCustomer(this.customerForm.value);
      this.router.navigate(['/product_details']);
      console.log(this.customerForm.valid);
    }
    else
    {
      console.log(this.customerForm.valid);
    }
    
  }
}
