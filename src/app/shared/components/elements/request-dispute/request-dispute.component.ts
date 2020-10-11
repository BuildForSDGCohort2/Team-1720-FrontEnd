import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-dispute',
  templateUrl: './request-dispute.component.html',
  styleUrls: ['./request-dispute.component.scss']
})
export class RequestDisputeComponent implements OnInit {


  // Element variables.
  @Output() closePopUp = new EventEmitter();

  disputeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.disputeForm = this.formBuilder.group({
      patient_full_name: ['', Validators.required],
      patient_email: ['', Validators.required],
      patient_mobile: ['', Validators.required],
      patient_notes: [''],
      patient_accepted_terms_and_conditions: [null, Validators.required]
    });
  }

  public closeModal(): any {
    this.closePopUp.emit(true);
  }

}
