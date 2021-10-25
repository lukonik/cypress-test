import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cypress-test-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  username = '';
  password = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    if (this.username === 'admin@gmail.com' && this.password === 'admin123') {
      this.router.navigate(['success']);
    } else {
      this.router.navigate(['error']);
    }
  }
}
