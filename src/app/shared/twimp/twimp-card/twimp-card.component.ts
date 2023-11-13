import { Component, Input } from '@angular/core';
import { Twimp } from '../twimp.model';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { TwimpService } from '../twimp.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.scss'],
})
export class TwimpCardComponent {
  @Input() twimp!: Twimp;

  constructor(
    private authService: AuthenticationService,
    private twimpService: TwimpService,
    private translocoService: TranslocoService) { }

  setFavoriteTwimp() {
    this.twimpService.getFavoritesTwimps(this.authService.token!.idAuthor).subscribe(
      twimps => {
        const successMessage = this.twimp.favorite
      ? this.translocoService.translate('FavoriteAdded')
      : this.translocoService.translate('FavoriteRemoved')
        console.log(twimps);
        if (twimps.indexOf(this.twimp.id) != -1) {
          twimps = twimps.filter((value: any) => {
            if (value != this.twimp.id) {
              return value;
            }
          });
          this.twimp.favorite = false;
        } else {
          twimps.push(this.twimp.id);
          this.twimp.favorite = true;
        }
        this.twimpService.setFavoriteTwimps(this.authService.token!.idAuthor, twimps).subscribe(
          response => console.log(response),

        );
      }
    );
  }
}
