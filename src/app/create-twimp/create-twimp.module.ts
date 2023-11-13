import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTwimpRoutingModule } from './create-twimp-routing.module';
import { CreateTwimpComponent } from './create-twimp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  declarations: [CreateTwimpComponent],

  imports: [
    CommonModule,
    CreateTwimpRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TranslocoRootModule
  ],
  exports: [CreateTwimpComponent],
})
export class CreateTwimpModule {}
