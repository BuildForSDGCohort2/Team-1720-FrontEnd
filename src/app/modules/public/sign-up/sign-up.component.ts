import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userType = 'patient';
  minDate;
  closeResult = '';

  constructor(private modalService: NgbModal) {
    this.minDate = { year: 1900, month: 1, day: 1 };
   }

  ngOnInit(): void {
  }

  changeUserType(): any {
    if (this.userType === 'patient'){
      this.userType = 'doctor';
    }else{
      this.userType = 'patient';
    }
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
