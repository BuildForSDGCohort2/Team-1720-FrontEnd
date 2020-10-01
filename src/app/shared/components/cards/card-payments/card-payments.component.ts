import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-payments',
  templateUrl: './card-payments.component.html',
  styleUrls: ['./card-payments.component.scss']
})
export class CardPaymentsComponent implements OnInit {

  closeResult = '';
  showSlideComponent = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content): any {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-dialog-centered' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.  getDismissReason(reason)}`;
      });
  }

  openFooterSlideOut(): any{
    this.showSlideComponent = true;
  }

  footerSlideOutData(data): any{
    console.log(data);
  }

  footerSlideOutClose($event): any {
    const closeVal = $event.close;
    if (closeVal){
      this.showSlideComponent = !closeVal;
    }else{
      this.showSlideComponent = closeVal;
    }
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
