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
      .post(this.baseUrl + '/api/register', { data: this.User }, { headers: this.headers })
      .pipe(map((response: any) => response.json()));
  }

  /**
  * Logins a user
  */
  public loginUser() {
    return this.http
      .post(this.baseUrl + '/api/login', { data: this.User }, { headers: this.headers })
      .pipe(map((response: any) => {
        response.json();
        this.encryptUserId(response.data._id);
      }));
  }

  /**
   * Gets user profile data from the server
   */
  public getUserProfile() {
    const userId = this.getUserId();
    return this.http
      .get(this.baseUrl + '/api/user/' + userId, { headers: this.headers })
      .pipe(map((response: any) => response.json()));
  }

  /**
   * Checks local storage if a user ID exists in local storage
   */
  public getUserId() {
    return this.decryptUserId();
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

  /**
   * Returns true if a user ID exits in local storage
   */
  public checkUserLoggedInStatus() {
    if (this.decryptUserId != null) {
      return this.decryptUserId;
    }
  }

  public checkIfUserAdmin() {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === true) {
      return true;
    }
  }
}
