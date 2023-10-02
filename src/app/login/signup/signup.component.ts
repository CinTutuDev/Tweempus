import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { AuthorService } from '../../shared/author/author.service';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'tweempus-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  newUserForm!: FormGroup;
  userAlreadyExist: boolean = false;

  constructor(
    private authenticationS: AuthenticationService,
    private authorS: AuthorService,
    private formB: FormBuilder
  ) {}
  ngOnInit(): void {
    this.newUserForm = this.formB.group({
      idAuthor: ['', [Validators.required, this.checkNick]],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      image: [''],
    });
  }

  checkNick(fc: FormControl): { [invalidNick: string]: boolean } | null {
    const nick = fc.value,
      // valida si una cadena está compuesta únicamente por letras en minúscula,
      //  letras en mayúscula y/o dígitos, y no contiene ningún otro carácter.
      regexp = new RegExp('^[a-zA-Z0-9]*$');
    if (regexp.test(nick)) {
      return null;
    } else {
      return { invalidNick: true };
    }
  }

  signUp(form: any) {
    if (this.userAlreadyExist) {
      this.userAlreadyExist = false;
    }
    this.authorS.getAuthor(form.value.idAuthor).subscribe(
      (author) => (this.userAlreadyExist = true),
      (error) => {
        this.authorS
          .setAuthor(form.value.idAuthor, form.value.fullName, form.value.image)
          .subscribe((response) =>
            this.authorS
              .createFavorite(response['id'])
              .subscribe((response) =>
                this.authenticationS.login(response['id'])
              )
          );
      }
    );
  }
}
