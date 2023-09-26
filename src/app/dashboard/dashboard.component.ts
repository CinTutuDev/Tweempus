import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authorS: AuthorService) {}
  ngOnInit(): void {
    this.authorS.getAuthor('1').subscribe((author) => console.log(author));
  }
}
