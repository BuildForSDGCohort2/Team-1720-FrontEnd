import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical-aid-info',
  templateUrl: './medical-aid-info.component.html',
  styleUrls: ['./medical-aid-info.component.scss']
})
export class MedicalAidInfoComponent implements OnInit {

  medicalAidInfo: FormGroup;
  medicalAidInfoSaved = {};
  showMedicalAidForm = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medicalAidInfo = this.fb.group({
      medical_aid_name: ['', [Validators.required]],
      medical_aid_user_full_name: ['', [Validators.required]],
      medical_aid_number: ['', [Validators.required]],
      medical_aid_memeber_number: ['', [Validators.required]],
      medical_aid_original_registation_date: ['', [Validators.required]]
    });
  }

  get fv(): any { console.log(this.medicalAidInfo.controls); return this.medicalAidInfo.controls; }

  openMedicalAidInfo(): any{
    this.showMedicalAidForm = !this.showMedicalAidForm;
  }

}
