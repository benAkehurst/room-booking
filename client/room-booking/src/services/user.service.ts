import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import UserDataModel from '../models/userDataModel';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:3000/';
  User: UserDataModel;
  decryptedUserId: any;

  constructor(
    private http: Http,
    private crypto: CryptoService
  ) {
    this.User = new UserDataModel();
  }

  public encryptUserId(userId) {
    this.crypto.encryptData(userId)
      .then(
        localStorage.setItem('id', userId)
      )
      .catch(
        console.log('error')
      );
  }

  public decryptUserId(userId) {
    this.crypto.decryptData(userId)
      .then(
        this.decryptedUserId = userId
      )
      .catch(
        console.log('error')
      );
  }

  /**
   * Returns true if a user ID exits in local storage
   */
  public checkUserLoggedInStatus() {
    if (this.getUserId()) {
      return true;
    }
  }

  public checkIfUserAdmin() {

  }

  /**
   * Checks local storage if a user ID exists in local storage
   */
  public getUserId() {
    const userId = localStorage.getItem('id');
    if (this.decryptUserId != null) {
      return this.decryptUserId;
    }
  }
}
