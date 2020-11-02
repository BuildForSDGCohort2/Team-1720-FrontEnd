import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-doctor',
  templateUrl: './invite-doctor.component.html',
  styleUrls: ['./invite-doctor.component.scss']
})
export class InviteDoctorComponent implements OnInit {

  @Input() name;
  addContactSubmitted = false;
  addDoctor: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addDoctor = this.fb.group({
      doctor_id: ['', [Validators.required]]
    });
  }

  public submitNewDoctor(): any {
    return false;
  }

}
