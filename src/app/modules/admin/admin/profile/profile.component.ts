import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Pop up modal content
import { UploadFileComponent } from '../../../../shared/components/popups/upload-file/upload-file.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openUpload($event): any {
    const modalRef = this.modalService.open(UploadFileComponent);
    modalRef.componentInstance.name = 'Add Doctor';
  }

}
