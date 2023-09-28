import { Component, Input } from '@angular/core';
import { TwimpModel } from '../twimp.model';
import { TwimpService } from '../twimp.service';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css'],
})
export class TwimpCardComponent {
  @Input() twimp!: TwimpModel;

  constructor(private twimpS: TwimpService) {}

  changeTF() {
    const authorId = '1';
    const twimpId = this.twimp.id;

    // Verificar si el twimp ya es favorito o no
    this.twimpS
      .getFavoriteByAuthor(authorId, twimpId)
      .subscribe((isFavorite) => {
        if (isFavorite) {
          // Si es favorito, eliminarlo de favoritos
          this.twimpS.removeTwimpF(authorId, twimpId).subscribe(() => {
            this.twimpS.updateTwimpF(this.twimp, false);
          });
        } else {
          // Si no es favorito, agregarlo a favoritos
          this.twimpS.addTwimpToF(authorId, twimpId).subscribe(() => {
            this.twimpS.updateTwimpF(this.twimp, true);
          });
        }
      });
  }
}
