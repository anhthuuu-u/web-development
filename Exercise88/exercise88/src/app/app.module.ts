import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProductImageEventComponent } from './serviceproductimageevent/serviceproductimageevent.component';
import { ServiceProductImageEventDetailComponent } from './serviceproductimageeventdetail/serviceproductimageeventdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
