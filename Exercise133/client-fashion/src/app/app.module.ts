import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFashionComponent } from './client-fashion/client-fashion.component';
import { ClientFashionDetailComponent } from './client-fashion-detail/client-fashion-detail.component';
import { ClientFashionStyleComponent } from './client-fashion-style/client-fashion-style.component';
import { CkeditorFormatPipe } from './pipes/ckeditor-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientFashionStyleComponent,
    ClientFashionComponent,
    ClientFashionDetailComponent,
    HttpClientModule,
    CommonModule,
    FormsModule,
    CkeditorFormatPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
