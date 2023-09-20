import { Component, OnInit } from '@angular/core';
import { TwimpModel } from '../twimp.model';
import { AuthorModel } from '../../author/author.model';
@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css'],
})
export class TwimpListComponent implements OnInit {
  /*  crear array de twimps y para ello le tenemos que pasar un author/array*/
  authors: AuthorModel[] = [];
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitursodales libero, sit amet posue';
  twimps: TwimpModel[] = [];

  ngOnInit(): void {
    this.authors.push(new AuthorModel('1'));
    this.twimps.push(
      /*🗳Le pasamos los componentes del modelo a los twinps: _id;_url; _author; _content; timestamp;favorite*/
      new TwimpModel('1', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new TwimpModel('2', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new TwimpModel('3', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new TwimpModel('4', '', this.authors[0], this.text, '01/01/2023')
    );
  }
}
