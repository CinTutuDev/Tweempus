import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTwimpComponent } from './create-twimp.component';
import { AuthGuard } from './../core/auth-guard';

const createTwimpRoutes: Routes = [
  {
      path: 'create-twimp',
      component: CreateTwimpComponent,
      canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(createTwimpRoutes)],

})
export class CreateTwimpRoutingModule { }
