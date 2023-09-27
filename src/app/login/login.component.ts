import { Component } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'tweempus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authenticationS: AuthenticationService) {}

  logIn() {
    this.authenticationS.login('1');
  }
}
