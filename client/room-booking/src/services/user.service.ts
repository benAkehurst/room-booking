import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import UserDataModel from '../models/userDataModel';
import { CryptoService } from './crypto.service';
import { map } from 'rxjs/operators';

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

  /**
  * Registers a new user
  */
  public registerUser() {
    return this.http
      .post(this.baseUrl + 'api/register', { data: this.User }, { headers: this.headers })
      .pipe(map((response: any) => response.json()));
  }

  /**
  * Logins a user
  */
  public loginUser(userDetails) {
    this.User = userDetails;
    return this.http
      .post(this.baseUrl + 'api/login', { data: this.User }, { headers: this.headers })
      .pipe(map((response: any) => {
        response.json();
        // TODO: CALL FUNCTION HERE TO SET LOGIN ITEM IN LOCAL STORAGE
      }));
  }

  /**
   * Gets user profile data from the server
   */
  public getUserProfile() {
    const userId = this.getUserId();
    return this.http
      .get(this.baseUrl + 'api/user/' + userId, { headers: this.headers })
      .pipe(map((response: any) => response.json()));
  }

  /**
   * Sets the login item when the user logs in
   */
  public setLoginObject(userId, userType) {
    this.encryptUserId(userId);
    this.setUserType(userType);
  }

  /**
   * Clears all the local storage items. Used when the user logs out.
   */
  public clearLocalStorage() {
    localStorage.clear();
  }

  /**
   * Checks local storage if a user ID exists in local storage
   */
  public getUserId() {
    return this.decryptUserId();
  }

  /**
   * Returns true if a user ID exits in local storage
   */
  public checkUserLoggedInStatus() {
    if (this.decryptUserId != null) {
      return this.decryptUserId;
    }
  }

  /**
   * Checks if the user is an admin
   */
  public checkIfUserAdmin() {
    const adminStatus = localStorage.getItem('isAdmin');
    const adminStatusString = JSON.parse(adminStatus);
    if (adminStatusString === 'true') {
      return true;
    } else {
      return false;
    }
  }

  public setUserType(userType) {
    localStorage.setItem('isAdmin', userType);
  }

   /**
   * Encrypts the user ID client side
   */
  public encryptUserId(userId) {
    localStorage.setItem('id', this.crypto.encryptData(userId));
  }

  /**
   * Decrypts the user ID client side
   */
  public decryptUserId() {
    const ecryptedId = localStorage.getItem('id');
    return this.crypto.decryptData(ecryptedId);
  }
}
