import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';

@NgModule({
  declarations: [TwimpCardComponent],
  imports: [CommonModule],
  exports: [TwimpCardComponent],
})
export class SharedModule {}
