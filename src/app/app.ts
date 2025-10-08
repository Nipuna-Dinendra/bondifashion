import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';          // <-- add NgFor
import { FormsModule } from '@angular/forms';            // <-- add FormsModule
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink, RouterLinkActive,
    NgIf, NgFor,                                     // <-- here
    FormsModule,                                     // <-- and here
  ],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {
  showPromo = true;
  readonly year = new Date().getFullYear();

  showSearch = false;
  cartCount = 2;

  toggleSearch() { this.showSearch = !this.showSearch; }

  showPrefs = false;
  togglePrefs() { this.showPrefs = !this.showPrefs; }
  applyPrefs() { this.showPrefs = false; }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    if (!this.showPrefs) return;
    const t = ev.target as HTMLElement;
    const panel = document.getElementById('prefs-panel');
    const pill  = document.querySelector('.prefs-pill');
    if (panel && pill && !panel.contains(t) && !pill.contains(t)) {
      this.showPrefs = false;
    }
  }
  get currencyLabel() {
  return this.currencies.find(c => c.code === this.selectedCurrency)?.label ?? 'Currency';
  }

  countries = ['Australia','New Zealand','United States','United Kingdom','Canada','Sri Lanka','India','Singapore'];
  currencies = [
    { code: 'AUD', label: 'Australian Dollar' },
    { code: 'USD', label: 'US Dollar' },
    { code: 'NZD', label: 'New Zealand Dollar' },
    { code: 'GBP', label: 'Pound Sterling' },
    { code: 'EUR', label: 'Euro' },
    { code: 'LKR', label: 'Sri Lankan Rupee' },
    { code: 'INR', label: 'Indian Rupee' },
    { code: 'SGD', label: 'Singapore Dollar' },
  ];
  languages = ['English (AU)','English (US)','English (UK)','සිංහල','தமிழ்'];

  selectedCountry  = 'Australia';
  selectedCurrency = 'AUD';
  selectedLanguage = 'English (AU)';

  promoText = '';
  promoLink = '/new-arrivals';
  repeat = Array.from({ length: 12 });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/promo.txt', { responseType: 'text' }).subscribe({
      next: txt => this.promoText = (txt || '').trim(),
      error: () => this.promoText = 'New Arrivals – Limited Pieces Available'
    });
  }




}
