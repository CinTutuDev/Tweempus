import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTwimpRoutingModule } from './create-twimp-routing.module';
import { CreateTwimpComponent } from './create-twimp.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTwimpComponent],
  imports: [CommonModule, CreateTwimpRoutingModule, ReactiveFormsModule],
  exports: [CreateTwimpComponent],
})
export class CreateTwimpModule {}
