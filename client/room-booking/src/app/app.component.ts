import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { RoomsService } from 'src/services/rooms.service';

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
    private user: UserService,
    private rs: RoomsService
  ) { }

  ngOnInit() {
    this.checkUserState();
  }

  /**
   * Checks if a user is logged in to show login or register links
   */
  public checkUserState() {
    const status = this.user.checkUserLoggedInStatus();
    if (status === true) {
      this.showLoginLink = false;
      this.showRegisterLink = true;
    }
  }

  /**
   * Returns the user to the home page
   * Also clears the single room variable in the Room Service
   */
  public goHome() {
    this.router.navigateByUrl('home');
    this.rs.clearChosenRoomVariable();
  }

  /**
   * Goes to the user booking page
   */
  public goToMyBookings() {
    this.router.navigateByUrl('my-bookings');
  }

  /**
   * Goes to the login page
   */
  public goToLogin() {
    this.router.navigateByUrl('login');
  }

  /**
   * Goes to the register page
   */
  public goToRegister() {
    this.router.navigateByUrl('register');
  }
}
