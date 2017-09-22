import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  logIn(login: string, password: string) {
    this.message = "Wait please";
    this.authService.login(login, password)
      .subscribe(() => {
        this.router.navigate([this.authService.redirectUrl]);
      });
  }

  logOut() {
    this.authService.logout();
  }
}
