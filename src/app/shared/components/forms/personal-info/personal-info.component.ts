import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personalInfo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalInfo = this.fb.group({
      name: ['Allan Paul', [Validators.required]],
      surname: ['Denis', [Validators.required]],
      mobileNumber: ['0123456789', [Validators.required]],
      workNumber: ['0123456789', [Validators.required]],
      email: ['info@healthcare.co.za', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      dateOfBirth: ['1991/03/19', [Validators.required]],
      gender: ['male', [Validators.required]],
    });
  }

}
