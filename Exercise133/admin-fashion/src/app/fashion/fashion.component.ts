import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  imports: [CommonModule],
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
  fashionObject: any = {}; // ✅ Phải gán giá trị mặc định
  errMessage: string = '';
  fashions: any;
  

  constructor(public _service: FashionApiService, private router: Router) {
    this.loadFashions();
  }

  // ✅ Lấy danh sách Fashion từ API
  // loadFashions() {
  //   this._service.getFashions().subscribe({
  //     next: (data) => { this.fashions = data },
  //     error: (err) => { this.errMessage = err }
  //   });
  // }

  loadFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { 
        console.log("Dữ liệu danh sách Fashion:", data); // 🚀 Debug dữ liệu
        this.fashions = data; 
      },
      error: (err) => { this.errMessage = err }
    });
  }
  

  // ✅ Xem chi tiết Fashion
  showDetail(fashionId: string) {
    this.router.navigate(["/fashion-detail", fashionId]); // ✅ Đảm bảo có dấu `/`
  }

  
  

  // ✅ Xóa Fashion (có xác nhận)
  deleteFashion(fashionId: string) {
    if (confirm("Bạn có chắc chắn muốn xóa Fashion này không?")) {
      this._service.deleteFashion(fashionId).subscribe({
        next: () => {
          alert("Xóa thành công!");
          this.loadFashions(); // Load lại danh sách sau khi xóa
        },
        error: (err) => {
          alert("Xóa thất bại: " + err.message);
        }
      });
    }
  } 
  addFashion() {
    this.router.navigate(['/fashion-add']); // 🚀 Điều hướng đến trang thêm mới
  }

  editFashion(fashionId: string) {
    this.router.navigate(["fashion-edit", fashionId]);
  }


}
