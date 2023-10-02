import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MyTwimpsComponent } from './profile/my-twimps/my-twimps.component';
import { FavoriteTwimpsComponent } from './profile/favorite-twimps/favorite-twimps.component';
import { SignupComponent } from './login/signup/signup.component';
import { CreateTwimpComponent } from './create-twimp/create-twimp.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: '/profile/my-twimps',
        pathMatch: 'full',
      },
      {
        path: 'my-twimps',
        component: MyTwimpsComponent,
      },
      {
        path: 'favorite-twimps',
        component: FavoriteTwimpsComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-twimp', component: CreateTwimpComponent },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
