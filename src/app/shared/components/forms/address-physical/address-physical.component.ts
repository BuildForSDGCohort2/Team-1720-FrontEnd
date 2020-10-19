import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-physical',
  templateUrl: './address-physical.component.html',
  styleUrls: ['./address-physical.component.scss']
})
export class AddressPhysicalComponent implements OnInit {

  homeAddressForm: FormGroup;
  workAddressForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.homeAddressForm = this.fb.group({
      streetAddress: ['123 Street Address', [Validators.required]],
      suburb: ['Randburg', [Validators.required]],
      city: ['Johannesburg', [Validators.required]],
      province: ['Gauteng', [Validators.required]],
      zipCode: ['2168', [Validators.required]],
      country: ['South Africa', [Validators.required]],
    });
    this.workAddressForm = this.fb.group({
      streetAddress: ['123 Street Address', [Validators.required]],
      suburb: ['Randburg', [Validators.required]],
      city: ['Johannesburg', [Validators.required]],
      province: ['Gauteng', [Validators.required]],
      zipCode: ['2168', [Validators.required]],
      country: ['South Africa', [Validators.required]],
    });
  }

}
