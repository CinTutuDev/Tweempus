import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTwimpRoutingModule } from './create-twimp-routing.module';
import { CreateTwimpComponent } from './create-twimp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreateTwimpComponent],

  imports: [
    CommonModule,
    CreateTwimpRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [CreateTwimpComponent],
})
export class CreateTwimpModule {}
