import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenSinkModule } from './pages/kitchen-sink/kitchen-sink.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KitchenSinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
