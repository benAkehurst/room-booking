import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import UserDataModel from '../models/userDataModel';
import BookingDataModel from '../models/bookingDataModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:3000/';
  User: UserDataModel;
  Booking: BookingDataModel;

  constructor(private http: Http) {
    this.User = new UserDataModel();
    this.Booking = new BookingDataModel();
  }

  /**
   * This function sends a booking request to the server
   */
  public bookRoom(roomId) {
    return this.http
      .post(this.baseUrl + '/api/room/book/' + roomId, { data: this.Booking }, { headers: this.headers })
      .pipe(map((response: any) => response.json()));
  }

  /**
   * This function allows a user to cancel a booking
   */
  public cancelABooking(roomId) {
    return this.http
      .post(this.baseUrl + '/api/room/cancel/' + roomId, { data: this.Booking }, { headers: this.headers })
      .pipe(map((response: any) => response.json()));
  }

}
