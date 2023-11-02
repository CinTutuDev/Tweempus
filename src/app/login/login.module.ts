import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TranslocoRootModule,
  ],
  declarations: [LoginComponent, SignupComponent],
})
export class LoginModule {}
