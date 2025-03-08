import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../../classes/Fashion';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule để dùng *ngIf

@Component({
  selector: 'app-fashion-edit',
  templateUrl: './fashion-edit.component.html',
  styleUrls: ['./fashion-edit.component.css'],
  standalone: true,
  imports: [CommonModule] // ✅ Thêm CommonModule để sử dụng *ngIf
})
export class FashionEditComponent {
  fashion: Fashion = new Fashion();
  errMessage: string = '';

  constructor(private _service: FashionApiService, private activateRoute: ActivatedRoute, private router: Router) {
    activateRoute.paramMap.subscribe(
      (param) => {
        let fashionId = param.get('id');
        if (fashionId) {
          this._service.getFashion(fashionId).subscribe({
            next: (data) => { this.fashion = data },
            error: (err) => { this.errMessage = err }
          })
        }
      }
    )
  }

  onFileSelected(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fashion.fashion_image = reader.result!.toString();
    };
  }

  // updateFashion() {
  //   this._service.updateFashion(this.fashion).subscribe({
  //     next: () => {
  //       alert("Cập nhật thành công!");
  //       this.router.navigate(['/fashion']); // ✅ Quay về danh sách sau khi cập nhật
  //     },
  //     error: (err) => {
  //       alert("Cập nhật thất bại: " + err.message);
  //     }
  //   });
  // }

//   updateFashion() {
//     console.log("🟢 Dữ liệu gửi lên API:", this.fashion); // 🛠 Kiểm tra dữ liệu trước khi gửi

//     this._service.updateFashion(this.fashion).subscribe({
//       next: (data) => {
//         console.log("🟢 Dữ liệu trả về từ API:", data); // 🛠 Kiểm tra dữ liệu sau khi cập nhật
//         alert("Cập nhật thành công!");
//         this.router.navigate(['/fashion']); // ✅ Quay về danh sách sau khi cập nhật
//       },
//       error: (err) => {
//         console.error("🔴 Lỗi khi cập nhật:", err); // 🛠 In lỗi nếu có
//         alert("Cập nhật thất bại: " + err.message);
//       }
//     });
// }

updateFashion() {
  this._service.updateFashion(this.fashion).subscribe({
    next: () => {
      alert("Cập nhật thành công!");
      this.router.navigate(['/fashion']); 
    },
    error: (err) => {
      alert("Cập nhật thất bại: " + err.message);
    }
  });
}


}
