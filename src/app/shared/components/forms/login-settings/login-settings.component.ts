import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-settings',
  templateUrl: './login-settings.component.html',
  styleUrls: ['./login-settings.component.scss']
})
export class LoginSettingsComponent implements OnInit {

  revealUpdateInfo = false;
  googleLinked = false;
  facebookLinked = false;
  twitterLinked = false;
  formSubmitted = false;
  updateLoginSettings: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateLoginSettings = this.fb.group({
      username: ['', [Validators.required]],
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      newRepeatPassword: ['', [Validators.required]]
    });
  }

  showUpdateInfo(): any {
    this.revealUpdateInfo = !this.revealUpdateInfo;
  }

  // ***************
  // Forms
  // ***************

  get updateFC(): any { return this.updateLoginSettings.controls; }

  public submitUpdateLoginSettings(): any {
    const updateForm = this.updateLoginSettings;
    this.formSubmitted = true;
    console.log(updateForm.controls);

    if ( updateForm.status === 'INVALID' ){
      return false;
    }

    updateForm.reset();
    this.formSubmitted = false;
    this.revealUpdateInfo = !this.revealUpdateInfo;
  }

  public updateLoginSettingsCancel(): any {
    this.revealUpdateInfo = !this.revealUpdateInfo;
    this.updateLoginSettings.reset();
    this.formSubmitted = false;
  }

  // ***************
  // Forms
  // ***************

}
