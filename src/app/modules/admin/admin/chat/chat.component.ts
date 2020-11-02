import { Component, OnInit, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

// Importing popups
import { ChatSecuritySettingsComponent } from '../../../../shared/components/popups/chat-security-settings/chat-security-settings.component';
import { InviteDoctorComponent } from '../../../../shared/components/popups/invite-doctor/invite-doctor.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() reqId: any;

  @ViewChild('scrollMe', { static: false }) scrollDiv;


  requestedId: any;
  showSlideComponent = false;
  slideOutView: string;
  slideOutRef: number;

  showInformation   = true;
  showHistory       = false;
  showAllergies     = false;
  showNotes         = false;
  showEndChat       = false;

  // Strings
  patientName       = 'Joan Rose Akoth';

  constructor(private modalService: NgbModal, private render: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    this.requestedId = this.reqId !== undefined && this.reqId.length > 0 ? this.reqId : '';
  }


  open(content, btnParentName): any {
    const modalRef = this.modalService.open(ChatSecuritySettingsComponent);

    switch (btnParentName) {
      case 'basic-information': {
        modalRef.componentInstance.name = 'Basic Information';
        break;
      }
      case 'medical-history': {
        modalRef.componentInstance.name = 'Medical History';
        break;
      }
      case 'medical-allergy': {
        modalRef.componentInstance.name = 'Medical Allergies';
        break;
      }
      default: {
        console.error('Please stop changing the code');
        break;
      }
    }

  }

  viewProfile($id, $view): any {
    this.slideOutRef = $id;
    this.slideOutView = $view;
    this.showSlideComponent = !this.showSlideComponent;
  }

  footerSlideOutData(data): any {
    console.log(data);
  }


  changeView($event, view): any{

    // Setting the new active class
    this.clearAllActiveClasses();
    this.render.addClass($event.target, 'active');

    switch (view){
      case 'information': {
        this.viewReset();
        this.showInformation = true;
        break;
      }
      case 'history': {
        this.viewReset();
        this.showHistory = true;
        break;
      }
      case 'allergies': {
        this.viewReset();
        this.showAllergies = true;
        break;
      }
      case 'notes': {
        this.viewReset();
        this.showNotes = true;
        break;
      }
      default: {
        console.error('Please stop changing the code');
        break;
      }
    }
  }

  viewReset(): any{
    this.showInformation   = false;
    this.showHistory       = false;
    this.showAllergies     = false;
    this.showNotes         = false;
  }

  clearAllActiveClasses(): any {
    const els = this.elRef.nativeElement.querySelectorAll('.mtb-icon-text-link');
    els.forEach(element => {
      this.render.removeClass(element, 'active');
    });
  }


  // ******************
  // CHAT FUNC
  // ******************

  openEndChat(): any{
    this.showEndChat = !this.showEndChat;
  }

  footerSlideOutClose($event): any {
    this.showEndChat = !this.showEndChat;
  }

  // ******************
  // END OF CHAT FUNC
  // ******************

  // ******************
  // INVITE DOCTOR FUNC
  // ******************
  inviteDoctor(): any{
    const modalRef = this.modalService.open(InviteDoctorComponent);
  }
  // ******************
  // END INVITE DOCTOR FUNC
  // ******************
}
