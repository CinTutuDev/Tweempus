import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  declarations: [
    ProfileComponent,
    FavoriteTwimpsComponent,
    MyTwimpsComponent,
    EditProfileComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    TranslocoRootModule
  ],
})
export class ProfileModule {}
