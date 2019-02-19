import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formDisabled: Boolean = true;
  errors: any;
  name: String = '';
  email: String = '';
  password: String = '';

  constructor(
    private router: Router,
    private us: UserService
  ) { }

  ngOnInit() {
    this.monitorForm();
  }

  /**
   * This is used to know when to turn off the login button
   */
  public monitorForm() {
    if (!this.email && !this.password) {
      this.formDisabled = true;
    }
    if (!this.email && this.password) {
      this.formDisabled = true;
    }
    if (this.email && !this.password) {
      this.formDisabled = true;
    }
    if (this.password.length < 6) {
      this.formDisabled = true;
    }
    if (this.email && this.password) {
      this.formDisabled = false;
    }
  }

  /**
   * This function registers a new user
   */
  public registerUser() {
    const regObj = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.us.registerUser(regObj).subscribe(() =>
      error => {
        this.errors = error;
        this.openSwal('Error', 'Sorrt about that, please try agian.');
      },
      () => {
        this.router.navigate(['/home']);
      });
  }

  /**
   * This function navigates the user to the login page
   */
  public goToLogin() {
    this.router.navigateByUrl('login');
  }

  // Builds a basic sweet alert poput for error handling to user
  public openSwal(title, text) {
    Swal.fire({
      title: title,
      text: text,
      confirmButtonText: 'Close'
    });
  }

}
