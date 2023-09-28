import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthorService } from '../shared/author/author.service';

@Component({
  selector: 'tweempus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /*  nuevo user */
  userForm!: FormGroup;
  userNoExist: boolean = false;

  constructor(
    private authenticationS: AuthenticationService,
    private authorS: AuthorService,
    private FormB: FormBuilder
  ) {}
  ngOnInit(): void {
    this.userForm = this.FormB.group({
      idAuthor: ['', Validators.required],
    });
  }

  logIn(form: any) {
    if (this.userNoExist) {
      this.userNoExist = false;
    }
    this.authorS.getAuthor(form.value.idAuthor).subscribe(
      (author) => {
        console.log('Author:', author);
        this.authenticationS.login(form.value.idAuthor);
      },
      (error) => {
        console.error('Error:', error);
        this.userNoExist = true;
      }
    );
  }
}
