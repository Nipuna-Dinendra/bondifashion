//import { Component, signal } from '@angular/core';
/*import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-site');
}*/
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.html',
})
export class AppComponent {
  showPromo = true;
  readonly year = new Date().getFullYear();
    showSearch = false;
  cartCount = 2; // set from your cart logic later

  toggleSearch() {
    this.showSearch = !this.showSearch;
}}
