import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';
import { TwimpService } from '../shared/twimp/twimp.service';

import { TwimpModel } from '../shared/twimp/twimp.model';
import { from } from 'rxjs';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  TwimList: TwimpModel[] = [];

  constructor(private authorS: AuthorService, private twimpS: TwimpService) {}

  ngOnInit(){
    this.twimpS.getTwimps().subscribe((twimps) => {
      from(twimps).subscribe((twimp) => {
        this.authorS.getAuthor(twimp.author.id).subscribe((author) => {
          twimp.author = author;
          this.twimpS
            .getFavoriteByAuthor('1', twimp.id)
            .subscribe((favorite) => {
              twimp.favorite = favorite;
              this.TwimList.push(twimp);
            });
        });
      });
    });
  }
}
