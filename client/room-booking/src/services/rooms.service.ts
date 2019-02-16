import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl: String = 'http://localhost:3000';

  constructor(
    private http: Http
  ) { }

  /**
   * Gets all the rooms in the DB
   */
  public getAllRooms() {
    return this.http.get(this.baseUrl + '/api/rooms').pipe(map((response: any) => response.json()));
  }

  /**
   * Gets a single room from the DB using the Room ID as a paramater
   */
  public getSingleRoom(roomId) {
    return this.http
      .get(this.baseUrl + '/api/room/' + roomId)
      .pipe(map((response: any) => response.json()));
  }

}
