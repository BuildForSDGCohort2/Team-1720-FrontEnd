import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical-aid-submission',
  templateUrl: './medical-aid-submission.component.html',
  styleUrls: ['./medical-aid-submission.component.scss']
})
export class MedicalAidSubmissionComponent implements OnInit {

  // Element variables.
  @Output() closePopUp = new EventEmitter();

  medicalAidForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.medicalAidForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      notes: [''],
      accepted_terms_and_conditions: [null, Validators.required]
    });
  }

  public closeModal(): any{
    this.closePopUp.emit(true);
  }

}
