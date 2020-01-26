import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortlyComponent } from './shortly/shortly.component';
import { AppRoutingModule } from './app-routing.module';
import { ShortlyService } from './services/shortly.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShortlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ShortlyService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
