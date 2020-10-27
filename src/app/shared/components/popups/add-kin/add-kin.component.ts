import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-kin',
  templateUrl: './add-kin.component.html',
  styleUrls: ['./add-kin.component.scss']
})
export class AddKinComponent implements OnInit {

  @Input() name;
  addContactSubmitted = false;
  addContact: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addContact = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: [''],
      mobile_number: [''],
      work_number: [''],
      relationship: ['', [Validators.required]],
      is_primary: ['', [Validators.required]],
    });
  }

  get contactCtrls(): any { return this.addContact.controls; }

  public submitNewContact(): any{
    this.addContactSubmitted = true;
    const formStatus = this.addContact.status;

    if (formStatus === 'INVALID' ){
      return false;
    }

    this.activeModal.close();
    this.addContactSubmitted = true;
    this.addContact.reset();

  }

}
