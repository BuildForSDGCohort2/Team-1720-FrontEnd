import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { find, get, pull } from 'lodash';

@Component({
  selector: 'app-medical-allergies',
  templateUrl: './medical-allergies.component.html',
  styleUrls: ['./medical-allergies.component.scss']
})
export class MedicalAllergiesComponent implements OnInit {

  @ViewChild('tagInput') tagInputRef: ElementRef;
  allergyTags: string[] = [];
  vaccinationTags: string[] = [];
  medicalAllergiesForm: FormGroup;
  medicalVaccinationsForm: FormGroup;
  editAllergies = false;
  editVaccinations = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medicalAllergiesForm = this.fb.group({
      allergies: [undefined],
    });
    this.medicalVaccinationsForm = this.fb.group({
      vaccinations: [undefined],
    });
  }

  // Tags Functionality.
  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.medicalAllergiesForm.controls.allergies.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.medicalAllergiesForm.controls.allergies.setValue('');
      }
    }
  }

  addTag(allergy: string): void {
    if (allergy[allergy.length - 1] === ',' || allergy[allergy.length - 1] === ' ') {
      allergy = allergy.slice(0, -1);
    }
    if (allergy.length > 0 && !find(this.allergyTags, allergy)) {
      this.allergyTags.push(allergy);
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.allergyTags, tag);
    } else {
      this.allergyTags.splice(-1);
    }
  }

  // Vaccinations Functions
  onVaccinationKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.medicalVaccinationsForm.controls.vaccinations.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeVaccinationTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addVaccinationTag(inputValue);
        this.medicalVaccinationsForm.controls.vaccinations.setValue('');
      }
    }
  }

  addVaccinationTag(vaccination: string): void {
    if (vaccination[vaccination.length - 1] === ',' || vaccination[vaccination.length - 1] === ' ') {
      vaccination = vaccination.slice(0, -1);
    }
    if (vaccination.length > 0 && !find(this.vaccinationTags, vaccination)) {
      this.vaccinationTags.push(vaccination);
    }
  }

  removeVaccinationTag(tag?: string): void {
    if (!!tag) {
      pull(this.vaccinationTags, tag);
    } else {
      this.vaccinationTags.splice(-1);
    }
  }


  // Tags Functionality.

  ExpandAllergiesEdit(): void{
    this.editAllergies = !this.editAllergies;
  }

  ExpandAllVaccinationsEdit(): void{
    this.editVaccinations = !this.editVaccinations;
  }

}
