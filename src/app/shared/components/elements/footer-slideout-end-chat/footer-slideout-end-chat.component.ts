import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-footer-slideout-end-chat',
  templateUrl: './footer-slideout-end-chat.component.html',
  styleUrls: ['./footer-slideout-end-chat.component.scss']
})
export class FooterSlideoutEndChatComponent implements OnInit, OnChanges {

  // Inputs
  @Input() showElement: boolean;
  @Input() endChatData: Array<any>;

  // Output emits
  @Output() closeFooterSlideOut: EventEmitter<any> = new EventEmitter<any>();

  // Variables
  inputData: Array<any>;
  patientName: string;
  endChatForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Setting the input variables.
    this.inputData = this.endChatData !== undefined && !isEmpty(this.endChatData) ? this.endChatData : [];
    this.patientName = this.inputData['name'] !== undefined && !isEmpty(this.inputData['name']) ? this.inputData['name'] : '';

    // Declaring the form group
    this.endChatForm = this.formBuilder.group({
      doctorsNotes: ['', [Validators.required]],
      reasonForEndingChat: ['', [Validators.required]],
      patientReferalDoctor: [''],
      patientConsultationDate: [''],
      patientOtherReason: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.refId.currentValue);
    console.log(changes);
    if (this.showElement) {
    }
  }

  get endDateForm(): any { return this.endChatForm.controls; }
  get endDateFormVals(): any { return this.endChatForm.value; }

  closeSlideOut(): any {
    this.closeFooterSlideOut.emit({ close: true });
  }

  // Submitting the form
  onEndChatFormSubmitted(): any {
    this.submitted = true;

    const endChatForm = this.endChatForm;

    if (endChatForm.status === 'INVALID' ){
      return false;
    }

  }


}
