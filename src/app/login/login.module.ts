import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { TranslocoRootModule } from '../transloco-root.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslocoRootModule,
    ReactiveFormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignupComponent],
})
export class LoginModule {}
