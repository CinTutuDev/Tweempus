import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, TranslocoRootModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
