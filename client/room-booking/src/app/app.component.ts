import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: Boolean;
  showLoginLink: Boolean = false;
  showRegisterLink: Boolean = true;

  constructor(
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit() {
    this.checkUserState();
  }

  public checkUserState() {
    const status = this.user.checkUserLoggedInStatus();
    if (status === true) {
      this.showLoginLink = false;
      this.showRegisterLink = true;
    }
  }

  public goHome() {
    this.router.navigateByUrl('home');
  }

  public goToMyBookings() {
    this.router.navigateByUrl('my-bookings');
  }

  public goToLogin() {
    this.router.navigateByUrl('login');
  }

  public goToRegister() {
    this.router.navigateByUrl('register');
  }
}
