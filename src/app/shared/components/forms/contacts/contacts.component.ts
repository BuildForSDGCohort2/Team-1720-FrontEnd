import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Popup modal content imports
import { ConfirmComponent } from '../../popups/confirm/confirm.component';
import { AddDoctorComponent } from '../../popups/add-doctor/add-doctor.component';
import { AddKinComponent } from '../../popups/add-kin/add-kin.component';
import { EditDoctorComponent } from '../../popups/edit-doctor/edit-doctor.component';
import { EditKinComponent } from '../../popups/edit-kin/edit-kin.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public hasDoctorAdded = true;
  public hasKinAdded = true;
  public closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // *****************
  // Functions
  // *****************

  // Opening the modals
  open($event, name, doctorName = null): any {
    switch (name) {
      case 'add-doctor': {
        const modalRef = this.modalService.open(AddDoctorComponent);
        modalRef.componentInstance.name = 'Add Doctor';
        break;
      }
      case 'add-kin': {
        const modalRef = this.modalService.open(AddKinComponent);
        modalRef.componentInstance.name = 'Add Kin';
        break;
      }
      case 'edit-doctor': {
        const modalRef = this.modalService.open(EditDoctorComponent);
        modalRef.componentInstance.name = 'Edit Doctor';
        break;
      }
      case 'edit-kin': {
        const modalRef = this.modalService.open(AddKinComponent);
        modalRef.componentInstance.name = 'Edit Kin';
        break;
      }
      case 'confirm-remove': {
        const modalRef = this.modalService.open(ConfirmComponent);
        modalRef.componentInstance.name = doctorName;
        break;
      }
      default: {
        break;
      }
    }
  }

}
