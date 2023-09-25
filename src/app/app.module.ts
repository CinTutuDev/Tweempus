import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Mis módulos */
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, DashboardModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
