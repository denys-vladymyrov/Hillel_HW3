import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { rangeValidator } from './validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string;

  formErrors = {
    login: '',
    password: ''
  }

  validationMessages = {
    login: {
      required: 'login is required',
    },
    password: {
      required: 'password is required',
      rangeValidator: 'from 4 to 6 words, please'
    }
  }

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, rangeValidator(4, 6)]]
    });

    this.loginForm.valueChanges.subscribe(data => this.valueChange(data));
  }

  valueChange(data) {
    for (let field in this.formErrors) {
      this.formErrors[field] = '';

      const control = this.loginForm.get(field);

      if (control.dirty && control.invalid) {
        const res = [];

        for (let key in control.errors) {
          res.push(this.validationMessages[field][key]);
        }

        this.formErrors[field] = res.join(' | ');
      }

      
    }
  }

  logOut() {
    this.authService.logout();
  }

  onSubmit(form: FormGroup) {
    console.log(form.valid);
    console.log(form.value);

    this.message = "Wait please";
    this.authService.login(form.value.login, form.value.password)
      .subscribe(() => {
        this.router.navigate([this.authService.redirectUrl]);
      });
  }
}
