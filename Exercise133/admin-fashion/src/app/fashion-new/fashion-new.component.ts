import { Component } from '@angular/core';
import { from } from 'rxjs';
import { FashionApiService } from '../fashion-api.service';
import { Fashion } from '../../classes/Fashion';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fashion-new',
  templateUrl: './fashion-new.component.html',
  styleUrls: ['./fashion-new.component.css'],
  imports: [CommonModule, FormsModule]
})

export class FashionNewComponent {
  fashion = new Fashion();
  errMessage: string = ''
  constructor(private _service: FashionApiService, private router: Router) {
  }
  public setFashion(f: Fashion) {
    this.fashion = f
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  // postFashion() {
  //   this.fashion.created_at = new Date(); // Giữ nguyên kiểu Date

  //   this._service.postFashion(this.fashion).subscribe({
  //     next: (data) => {
  //       alert('Thêm thành công!');

  //       this.fashion = {
  //         _id: null,
  //         style: '',
  //         fashion_subject: '',
  //         fashion_detail: '',
  //         fashion_image: '',
  //         created_at: new Date() // 🔥 Đảm bảo gán đúng kiểu Date
  //     };
  //     this.router.navigate(['/fashion']);
  //     },
  //     error: (err) => {
  //       this.errMessage = err.message;
  //     }
  //   });
  // }

  // postFashion() {
  //   this.fashion.created_at = new Date(); // Gán thời gian hiện tại trước khi gửi

  //   this._service.postFashion(this.fashion).subscribe({
  //     next: (data) => {
  //       alert('Thêm thành công!');
  //       this.fashion = new Fashion(); // Reset form sau khi thêm
  //     },
  //     error: (err) => {
  //       this.errMessage = err.message;
  //     }
  //   });
  // }



  postFashion() {
    this.fashion.created_at = new Date(); // Gán thời gian hiện tại trước khi gửi

    this._service.postFashion(this.fashion).subscribe({
      next: (data) => {
        alert('Thêm thành công!');
        this.fashion = new Fashion(); // Reset form sau khi thêm

        this.router.navigate(['/fashion']); // 🔥 Chuyển hướng về danh sách sản phẩm
      },
      error: (err) => {
        this.errMessage = err.message;
      }
    });
  }




}
