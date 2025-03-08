import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion/fashion.component'; // Import FashionComponent
import { HttpClientModule } from '@angular/common/http';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FashionEditComponent } from './fashion-edit/fashion-edit.component'; // ✅ Import QuillModule

@NgModule({
  declarations: [
    AppComponent,
    FashionDetailComponent,
    
     // Chỉ giữ lại AppComponent trong declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FashionComponent, // Thêm FashionComponent vào imports thay vì declarations
    FashionNewComponent,
    QuillModule.forRoot(),
    FashionEditComponent,
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
