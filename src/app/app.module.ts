import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingCardComponent } from './greeting-card/greeting-card.component';
import { CardpipePipe } from './cardpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetingCardComponent,
    CardpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
