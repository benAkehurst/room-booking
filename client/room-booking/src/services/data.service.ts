import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import UserDataModel from '../models/userDataModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:3000/';
  User: UserDataModel;

  constructor(private http: Http) {
    this.User = new UserDataModel();
  }

  // /**
  // * Registers a new user
  // */
  // public registerUser() {
  //   return this.http
  //     .post(this.baseUrl + '/api/register', { data: this.User }, { headers: this.headers })
  //     .pipe(map((response: any) => response.json()));
  // }

  // /**
  // * Logins a user
  // */
  // public loginUser() {
  //   return this.http
  //     .post(this.baseUrl + '/api/login', { data: this.User }, { headers: this.headers })
  //     .pipe(map((response: any) => response.json()));
  // }

  // /**
  //  * Gets user profile data from the server
  //  */
  // public getUserProfile() {
  //   const userId = this.getUserId();
  //   return this.http
  //     .get(this.baseUrl + '/api/user/' + userId, { headers: this.headers })
  //     .pipe(map((response: any) => response.json()));
  // }

  // /**
  //  * Gets the User ID from local storage item
  //  */
  // public getUserId() {
  //   const userId = localStorage.getItem('id');
  //   return userId;
  // }
}
