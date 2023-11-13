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
import { Author } from '../shared/author/author.model';
import { Twimp } from '../shared/twimp/twimp.model';

@Component({
  selector: 'tweempus-create-twimp',
  templateUrl: './create-twimp.component.html',
  styleUrls: ['./create-twimp.component.scss'],
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
      content: ['', [Validators.required, Validators.maxLength(300)]],
    });
  }

  createTwimp(form: any) {
    this.twimpS.getTwimps().subscribe((response) => {
      const twimpDate: string = new Date()
        .toLocaleDateString()
        .replace(/\//g, '-');
      const author: Author = new Author(
        this.authService.token!.idAuthor
      );
      const twimp: Twimp = new Twimp(
        response.length.toString(),
        '',
        author,
        form.value.content,
        twimpDate
      );
      this.twimpS
        .setTwimp(twimp)
        .subscribe((response) => this.router.navigate(['/dashboard']));
    });
  }
}
