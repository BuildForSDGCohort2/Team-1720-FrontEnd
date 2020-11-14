import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }

  }

  ngOnInit(): void {

    // Creating the form
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(): any{ return this.loginForm.controls; }

  logUserIn(): any{
    // this.cookieService.set('mtibabu', JSON.stringify({ user: 'userTest' }));
    // this.router.navigate(['/dashboard']);

    this.submitted = true;
    const formVals = this.loginForm.value;
    this.error = '';

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login( formVals.username, formVals.password)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
          this.submitted = false;
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
          this.submitted = false;
          this.loginForm.reset();
        }
      });

  }

}
