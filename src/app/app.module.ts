import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Mis módulos */
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
