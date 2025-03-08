import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFashionService } from './client-fashion.service';
import { ClientFashionComponent } from './client-fashion/client-fashion.component';
import { ClientFashionDetailComponent } from './client-fashion-detail/client-fashion-detail.component';
import { ClientFashionStyleComponent } from './client-fashion-style/client-fashion-style.component';
const routes: Routes = [
  { path:"", redirectTo:"client-fashion", pathMatch:"full"},
  { path:"client-fashion", component:ClientFashionComponent},
  { path:"client-fashion-detail/:id", component:ClientFashionDetailComponent},
  { path:"client-fashion-style/:style", component:ClientFashionStyleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
