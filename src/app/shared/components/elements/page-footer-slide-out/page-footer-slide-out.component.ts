import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-footer-slide-out',
  templateUrl: './page-footer-slide-out.component.html',
  styleUrls: ['./page-footer-slide-out.component.scss']
})
export class PageFooterSlideOutComponent implements OnInit {

  @Input() showElement: boolean;
  @Output() closeFooterSlideOut: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log(this.showElement);
  }

  closeSlideOut(): any {
    this.closeFooterSlideOut.emit({close : true});
  }

  ngOnInit(): void {
  }

}
