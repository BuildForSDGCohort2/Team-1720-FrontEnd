import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-security-settings',
  templateUrl: './chat-security-settings.component.html',
  styleUrls: ['./chat-security-settings.component.scss']
})
export class ChatSecuritySettingsComponent implements OnInit {

  // Imports from parent
  @Input() name;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
