import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';
import { TwimpService } from '../shared/twimp/twimp.service';
import { AuthorModel } from '../shared/author/author.model';
import { TwimpModel } from '../shared/twimp/twimp.model';

@Component({
  selector: 'tweempus-create-twimp',
  templateUrl: './create-twimp.component.html',
  styleUrls: ['./create-twimp.component.css'],
})
export class CreateTwimpComponent implements OnInit {
  newTwimpForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private twimpS: TwimpService,
    private router: Router,
    private formB: FormBuilder
  ) {}
  ngOnInit(): void {
    this.newTwimpForm = this.formB.group({
      content: ['', [Validators.required, Validators.maxLength(140)]],
    });
  }

  createTwimp(form: any) {
    this.twimpS.getTwimps().subscribe(response => {
      let twimpDate: string = new Date().toLocaleDateString().replace(/\//g, '-');
      let author: AuthorModel = new AuthorModel(this.authService.token!.idAuthor);
      let twimp: TwimpModel = new TwimpModel(response.length.toString(), '', author, form.value.content, twimpDate);
      this.twimpS.setTwimp(twimp).subscribe(
        response => this.router.navigate(['/dashboard'])
      )
    });
  }

}
