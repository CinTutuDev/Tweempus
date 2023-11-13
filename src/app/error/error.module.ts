import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { SharedModule } from '../shared/shared.module';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [SharedModule, TranslocoRootModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}
