import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formDisabled: Boolean = true;
  email: String = '';
  password: String = '';
  errors: any;

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
    if (this.email && this.password) {
      this.formDisabled = false;
    }
  }

  /**
   * This function is used to login the user via the login function on the user service
   */
  public loginUser() {
    const loginObj = {
      email: this.email,
      password: this.password
    };
    console.log(loginObj);
    this.us.loginUser(loginObj).subscribe((response) => {
      console.log(response);
    },
      error => {
        this.errors = error;
        this.openSwal('Error', 'Please check your email or password');
      },
      () => {
        this.router.navigateByUrl('home');
      });
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
