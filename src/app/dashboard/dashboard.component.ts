import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';
import { TwimpService } from '../shared/twimp/twimp.service';

import { TwimpModel } from '../shared/twimp/twimp.model';


@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {


  TwimList: TwimpModel[] = [];

  constructor(private authorS: AuthorService, private twimpS: TwimpService) {}

  ngOnInit(): void {
    this.twimpS.getTwimps().subscribe((twimpsL) => this.TwimList = twimpsL);
  }
}
