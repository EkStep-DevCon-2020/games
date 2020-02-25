import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { EndComponent } from './end/end.component';
import {TelemetryService} from './services/telemetry/telemetry.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TelemetryService],
  bootstrap: [AppComponent],
  // exports: [EndComponent]
})
export class AppModule { }
