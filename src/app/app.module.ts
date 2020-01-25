import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortlyComponent } from './shortly/shortly.component';
import { AppRoutingModule } from './app-routing.module';
import { ShortlyService } from './services/shortly.service';

@NgModule({
  declarations: [
    AppComponent,
    ShortlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ShortlyService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
