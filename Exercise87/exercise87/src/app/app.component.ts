import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productex87Component } from './productex87/productex87.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Productex87Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercise87';
}
