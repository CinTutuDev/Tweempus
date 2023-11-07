import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'tweempus-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  idAuthor: string | null = null;

  constructor(private authS: AuthenticationService) {}

  checkLogin() {
    if (this.authS.token != null) {
      this.idAuthor = this.authS.token.idAuthor;
      return true;
    }
    this.idAuthor = null;
    return false;
  }
}
