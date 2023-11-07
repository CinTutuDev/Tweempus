import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable, from } from 'rxjs';

import { TwimpService } from '../../shared/twimp/twimp.service';
import { AuthorService } from '../../shared/author/author.service';
import { AuthenticationService } from '../../core/authentication.service';
import { Twimp } from 'src/app/shared/twimp/twimp.model';

@Component({
  selector: 'tweempus-my-twimps',
  templateUrl: './my-twimps.component.html',
  styleUrls: ['./my-twimps.component.scss'],
})
export class MyTwimpsComponent implements OnInit {
  twimpList: Twimp[] = [];
  idAuthor: string | null = null;

  constructor(
    private activatedR: ActivatedRoute,
    private authorS: AuthorService,
    private twimpS: TwimpService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.idAuthor = this.route.parent!.snapshot.params['id'];
    this.twimpS.getAuthorTwimps(this.idAuthor!).subscribe(twimps => {
      from(twimps).subscribe(twimp => {
        this.authorS.getAuthor(twimp.author.id).subscribe(author => {
          twimp.author = author;
          this.twimpS.getFavoritesByAuthor(author.id, twimp.id).subscribe(favorite => {
            twimp.favorite = favorite;
            this.twimpList.push(twimp);
          })
        })
      })
    });
  }
}
