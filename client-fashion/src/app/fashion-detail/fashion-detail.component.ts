import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../fashion-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css'],
  imports: [CommonModule]
})
export class FashionDetailComponent implements OnInit {
  fashion: any = {};
  errMessage: string = '';

  constructor(
    private _service: FashionAPIService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      const fashionId = params.get('id');
      if (fashionId) {
        this.loadFashionDetail(fashionId);
      }
    });
  }

  // ✅ Lấy chi tiết sản phẩm từ API
  loadFashionDetail(fashionId: string) {
    this._service.getFashions().subscribe({
      next: (data) => { 
        this.fashion = data; 
      },
      error: (err) => { 
        this.errMessage = err.message; 
      }
    });
  }

  // ✅ Điều hướng về danh sách sản phẩm
  goBack() {
    this.router.navigate(['/home']);
  }
}
