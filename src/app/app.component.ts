import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart';
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login'; // Adjust this according to your routing setup
  }
  isRegisterPage(): boolean {
    return this.router.url === '/register'; // Adjust this according to your routing setup
  }
}
