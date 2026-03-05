import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  customerForm : FormGroup;
  constructor( private formBuilder: FormBuilder) {
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
      console.log(this.customerForm.valid);
      alert("Hiii , Sir.")
    }
    else
    {
      console.log(this.customerForm.valid);
    }
    
  }
}
