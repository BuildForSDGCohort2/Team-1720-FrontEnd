import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RegistrationService } from '../../../core/services/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userType = 'patient';
  minDate;
  closeResult = '';
  registerForm: FormGroup;
  formSubmitted = false;
  loading = false;
  error = '';

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
    this.minDate = { year: 1900, month: 1, day: 1 };
   }

  ngOnInit(): void {
    // Creating the login form
    if (this.userType === 'patient') {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        accepted_terms_and_conditions: [null, Validators.required]
      });
    } else if (this.userType === 'doctor'){
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        medicalId: ['', Validators.required],
        accepted_terms_and_conditions: [null, Validators.required]
      });
    }
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

  // Handling the form controls
  get f(): any { return this.registerForm.controls; }

  // Handling the user login
  registerUser(): any{
    const form = this.registerForm;
    this.formSubmitted = true;

    if ( form.invalid){
      return false;
    }

    const newUser = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      fullName: form.value.firstName + '' + form.value.lastName,
      gender: form.value.gender,
      userStatus: 'new',
      verified: false,
      termsAndConditions: form.value.accepted_terms_and_conditions,
      dateOfBirth: form.value.dateOfBirth.day + '/' + form.value.dateOfBirth.month + '/' + form.value.dateOfBirth.year,
      mobile: form.value.mobile,
      email: form.value.email,
    };

    // console.log(form.value.dateOfBirth);
    // return false;

    // Form is valid, create the new user.
    this.registrationService.register(newUser)
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
          this.formSubmitted = false;
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
          this.formSubmitted = false;
          // this.registerForm.reset();
        }
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
