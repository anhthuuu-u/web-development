import { Component, OnInit } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  fashions: any[] = []; // Danh sách tất cả Fashion
  groupedFashions: any[] = []; // 🛠 Khai báo biến để chứa danh sách đã nhóm theo Style
  searchQuery: string = ''; // Từ khóa tìm kiếm
  errMessage: string = '';

  constructor(private fashionService: FashionAPIService, private router: Router) { }

  ngOnInit(): void {
    this.loadFashions();
  }

  // ✅ Lấy danh sách Fashion từ API
  loadFashions() {
    this.fashionService.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
        this.groupByStyle(); // Nhóm sản phẩm theo Style
      },
      error: (err) => { this.errMessage = err }
    });
  }

  // ✅ Nhóm sản phẩm theo Style
  groupByStyle(filteredFashions?: any[]) {
    const data = filteredFashions || this.fashions;
    const grouped = data.reduce((acc: { style: string, items: any[] }[], fashion) => {
      let styleGroup = acc.find((group: { style: string, items: any[] }) => group.style === fashion.style);
      
      if (!styleGroup) {
        styleGroup = { style: fashion.style, items: [] };
        acc.push(styleGroup);
      }
      
      styleGroup.items.push(fashion);
      return acc;
    }, []);
  
    this.groupedFashions = grouped; // ✅ Gán danh sách đã nhóm vào biến groupedFashions
  }
  viewDetail(id: string) {
    this.router.navigate([`/fashion-detail/${id}`]);
  }
  
}

