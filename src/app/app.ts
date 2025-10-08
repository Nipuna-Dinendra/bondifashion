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
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.html',
})


export class AppComponent implements OnInit {
    showPromo = true;
  readonly year = new Date().getFullYear();
    showSearch = false;
  cartCount = 2; // set from your cart logic later

  toggleSearch() {
    this.showSearch = !this.showSearch;
}
  promoText = '';                          // from promo.txt
  promoLink = '/new-arrivals';             // where the ticker should go
  repeat = Array.from({ length: 12 });     // how many times to repeat (tune as needed)

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/promo.txt', { responseType: 'text' })
      .subscribe({
        next: txt => this.promoText = (txt || '').trim(),
        error: () => this.promoText = 'New Arrivals – Limited Pieces Available'
      });
  }
}

