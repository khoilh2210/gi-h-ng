import { Component } from '@angular/core';
import { SearchComponent } from './components/search-bar/search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
