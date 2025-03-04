import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './serviceproductimageevent/serviceproductimageevent.component';
import { ServiceProductImageEventDetailComponent } from './serviceproductimageeventdetail/serviceproductimageeventdetail.component';

const routes: Routes = [{path:'service-product-image-event',
  component:ServiceProductImageEventComponent},
  {path:'service-product-image-event/:id',
  component:ServiceProductImageEventDetailComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
