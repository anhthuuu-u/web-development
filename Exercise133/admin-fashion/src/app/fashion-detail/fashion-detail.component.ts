import { Component } from '@angular/core';
import { FashionApiService } from '../fashion-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fashion-detail',
  standalone: false,
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.css'
})
export class FashionDetailComponent {
  // fashionObject: any
  // errMessage: string = ''
  // constructor(private _service: FashionApiService, private activateRoute: ActivatedRoute) {
  //   activateRoute.paramMap.subscribe(
  //     (param) => {
  //       let fashionId = param.get('id')
  //       if (fashionId != null) {
  //         this._service.getFashion(fashionId).subscribe({
  //           next: (data) => { this.fashionObject = data },
  //           error: (err) => { this.errMessage = err }
  //         })
  //       }
  //     }
  //   )
  // }
  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashionObject = data },
      error: (err) => { this.errMessage = err }
    })
  }

  fashionObject: any = {}; // ✅ Tránh undefined khi chưa có dữ liệu
  errMessage: string = '';

  constructor(private _service: FashionApiService, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(
      (param) => {
        let fashionId = param.get('id');
        if (fashionId) {
          this.loadFashion(fashionId);
        }
      }
    );
  }

  loadFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashionObject = data; },
      error: (err) => { this.errMessage = err.message; }
    });
  }
}
