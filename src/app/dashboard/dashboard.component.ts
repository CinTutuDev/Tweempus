import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';
import { TwimpService } from '../shared/twimp/twimp.service';

import { TwimpModel } from '../shared/twimp/twimp.model';
import { from } from 'rxjs';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  twimpList: TwimpModel[] = [];

  constructor(
    private authorS: AuthorService,
    private twimpS: TwimpService,
    private authenticationS: AuthenticationService
  ) {}

  ngOnInit() {
    this.twimpS.getTwimps().subscribe((twimps) => {
      from(twimps).subscribe((twimp) => {
        this.authorS.getAuthor(twimp.author.id).subscribe((author) => {
          twimp.author = author;
          if (this.authenticationS.token) {
            this.twimpS
              .getFavoriteByAuthor(
                this.authenticationS.token.idAuthor,
                twimp.id
              )
              .subscribe((favorite) => {
                twimp.favorite = favorite;
                this.twimpList.push(twimp);
              });
          } else {
            // Manejar el caso en que authenticationS.token sea null
          }
        });
      });
    });
  }
}
