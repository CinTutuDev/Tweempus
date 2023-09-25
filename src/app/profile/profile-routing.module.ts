import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: '/profile/my-twimps',
        pathMatch: 'full'
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
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
