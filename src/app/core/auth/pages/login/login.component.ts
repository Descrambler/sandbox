import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '@app/core/auth/shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from '@app/core/logger/logger.service';

/**
 * the login page of user
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * form to log an user
   */
  loginForm: FormGroup;
  /**
   * To say if form is currently in treatment
   */
  loading = false;
  /**
   * To say if form is currently submit
   */
  submitted = false;
  /**
   * last url
   */
  returnUrl: string;

  /**
   * @ignore
   */
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: ToastrService,
    private logger: LoggerService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      // this.router.navigate(['/']);
    }
  }

  /**
   * initialize login form
   */
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['']
    });

    // get return url from route parameters or default to '/'
    const returnUrlParam = 'returnUrl';
    this.returnUrl = this.route.snapshot.queryParams[returnUrlParam] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  /**
   * Log user on form submit
   */
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          if (!data) {
            throw new Error(('Received Data is null'));
          }
          this.router.navigate([this.returnUrl]).then((e) => {
            if (e) {
              this.logger.info('Redirect to Home page..');
            } else {
              this.logger.error('Failed to redirect to Home page!');
            }
          });
        },
        error => {
          this.alertService.error(error.message);
          this.loading = false;
        });
  }
}
