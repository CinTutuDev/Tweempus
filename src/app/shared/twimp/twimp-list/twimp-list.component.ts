import { Component, Input } from '@angular/core';
import { TwimpModel } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css'],
})
export class TwimpListComponent {
  /* se usa en componente hijo para recibir valores desde el padre */
  @Input() twimpsL!: TwimpModel[];
}
