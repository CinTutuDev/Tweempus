import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

/* Libreria para uso de peticion HTTP (author.service.ts; twimp.service.ts)*/
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@NgModule({
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [AuthenticationService]
})
export class CoreModule {}
