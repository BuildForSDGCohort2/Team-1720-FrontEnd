import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-page-footer-slide-out',
  templateUrl: './page-footer-slide-out.component.html',
  styleUrls: ['./page-footer-slide-out.component.scss']
})
export class PageFooterSlideOutComponent implements OnInit, OnChanges {

  @Input() showElement: boolean;
  @Input() elementToShow: string;
  @Input() elementData: any;
  @Input() refId: number;
  @Output() closeFooterSlideOut: EventEmitter<any> = new EventEmitter<any>();


  closeResult = '';
  medicalAidForm: FormGroup;
  disputeForm: FormGroup;

  title: string;
  id: any;
  viewName: string;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {

    if ( this.elementData !== undefined ){
      this.title = this.elementData.title !== undefined && this.elementData.title.length > 0 ? this.elementData.title : '';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.refId.currentValue);
    if (this.showElement){
      this.id = changes.refId !== undefined && changes.refId.currentValue !== undefined ? this.refId : this.id;

      // Updating the view when it changes.
      if (changes.elementToShow !== undefined){
        this.viewName = changes.elementToShow.currentValue !== undefined ? this.elementToShow : this.viewName;
      }

    }
  }

  closeSlideOut(): any {
    this.closeFooterSlideOut.emit({ close: true });
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
