import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavComponent],
})
export class CoreModule {}
