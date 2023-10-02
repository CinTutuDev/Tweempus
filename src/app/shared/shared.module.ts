import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* Mis Componentes */
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
/* Importacion de los servicios */
import { AuthorService } from './author/author.service';
import { TwimpService } from './twimp/twimp.service';
import { SortByPipe } from './sort-by.pipe';


@NgModule({
  declarations: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent, SortByPipe],
  imports: [CommonModule, RouterModule],
  exports: [
    TwimpCardComponent,
    TwimpListComponent,
    AuthorCardComponent,
    RouterModule,
  ],
  /* Array de los servicios */
  providers: [AuthorService, TwimpService],
})
export class SharedModule {}
