import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.component.html',
  styleUrls: ['./view-chat.component.scss']
})
export class ViewChatComponent implements OnInit {

  @Input() reqId: any;

  requestedId: any;
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.requestedId = this.reqId !== undefined && this.reqId.length > 0 ? this.reqId : '';
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
