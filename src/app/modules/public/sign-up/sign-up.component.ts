import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
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

    if ( form.status === 'INVALID'){
      return false;
    }

    // Form is valid, create the new user.
    

    console.log(form);
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
