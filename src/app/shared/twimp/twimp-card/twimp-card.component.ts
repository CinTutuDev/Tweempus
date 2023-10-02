import { Component, Input } from '@angular/core';
import { TwimpModel } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css'],
})
export class TwimpCardComponent {
  @Input() twimp!: TwimpModel;

  constructor() {}
}
