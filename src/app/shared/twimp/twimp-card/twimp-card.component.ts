import { Component, Input } from '@angular/core';
import { TwimpModel } from '../twimp.model';
@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css'],
})
export class TwimpCardComponent {
  @Input() twimp!: TwimpModel;
  esClick: boolean = false;

  cambiarFavorite(twimp: TwimpModel) {
    twimp.favorite = !twimp.favorite;
    this.esClick = true;
  }
}
