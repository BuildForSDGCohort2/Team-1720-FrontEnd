import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-page-footer-slide-out',
  templateUrl: './page-footer-slide-out.component.html',
  styleUrls: ['./page-footer-slide-out.component.scss']
})
export class PageFooterSlideOutComponent implements OnInit {

  @Input() showElement: boolean;
  @Output() closeFooterSlideOut: EventEmitter<any> = new EventEmitter<any>();
  closeResult = '';
  medicalAidForm: FormGroup;
  disputeForm: FormGroup;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.disputeForm = this.formBuilder.group({
      patient_full_name: ['', Validators.required],
      patient_email: ['', Validators.required],
      patient_mobile: ['', Validators.required],
      patient_notes: [''],
      patient_accepted_terms_and_conditions: [null, Validators.required]
    });
    this.medicalAidForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      notes: [''],
      accepted_terms_and_conditions: [null, Validators.required]
    });
  }

  closeSlideOut(): any {
    this.closeFooterSlideOut.emit({close : true});
  }

  ngOnInit(): void {
  }

  open(content): any {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-dialog-centered' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
