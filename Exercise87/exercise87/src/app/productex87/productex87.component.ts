import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productex87',
  imports: [CommonModule],
  templateUrl: './productex87.component.html',
  styleUrl: './productex87.component.css'
})
export class Productex87Component {
  products=[
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/h1.png"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/h2.png"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"assets/h3.png"},
    ]
}
