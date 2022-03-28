import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenSinkModule } from './pages/kitchen-sink/kitchen-sink.module';
import { NavModule } from './shared/components/nav/nav.module';
import { DataService } from './shared/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KitchenSinkModule,
    NavModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
