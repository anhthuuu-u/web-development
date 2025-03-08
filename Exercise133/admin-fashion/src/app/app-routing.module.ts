import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import{FashionEditComponent} from './fashion-edit/fashion-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'fashion', pathMatch: 'full' }, // Trang mặc định
  { path: 'fashion', component: FashionComponent }, // Trang danh sách Fashion
  { path: 'fashion-detail/:id', component: FashionDetailComponent }, // Trang chi tiết Fashion
  { path: 'fashion-add', component: FashionNewComponent }, // 🚀 Đổi tên path từ "fashion-add/:id" thành "fashion-add"
  { path: 'fashion-edit/:id', component: FashionEditComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
