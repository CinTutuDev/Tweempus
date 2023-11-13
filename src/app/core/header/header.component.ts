import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
;

@Component({
  selector: 'tweempus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],


})
export class HeaderComponent {
  constructor(private authenticationS: AuthenticationService) {}

  checkLogin() {
    if (this.authenticationS.token != null) {
      return true;
    }
    return false;
  }

  logOut() {
    this.authenticationS.logout();
  }
}
