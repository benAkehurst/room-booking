import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public checkUserLoggedInStatus() {
    if (this.getUserId()) {
      return true;
    }
  }

  public getUserId() {
    const userId = localStorage.getItem('id');
    if (userId != null ) {
      return userId;
    }
  }
}
