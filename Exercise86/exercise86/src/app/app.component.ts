import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productex86Component } from './productex86/productex86.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Productex86Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercise86';
}
