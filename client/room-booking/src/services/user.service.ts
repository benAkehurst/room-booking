import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import UserDataModel from '../models/userDataModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:3000/';
  User: UserDataModel;

  constructor(private http: Http) {
    this.User = new UserDataModel();
  }

  /**
   * Returns true if a user ID exits in local storage
   */
  public checkUserLoggedInStatus() {
    if (this.getUserId()) {
      return true;
    }
  }

  /**
   * Checks local storage if a user ID exists in local storage
   */
  public getUserId() {
    const userId = localStorage.getItem('id');
    if (userId != null ) {
      return userId;
    }
  }
}
