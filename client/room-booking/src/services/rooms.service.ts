import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private baseUrl: String = 'http://localhost:3000';

  constructor(
    private http: Http
  ) { }

  /**
   * THIS WILL DEAL WITH TALKING TO THE API TO CALL ROOMS ACTIONS - FETCH ALL/FETCH SINGLE ROOM
   */

  public getAllRooms() {
    return this.http.get(this.baseUrl + '/api/rooms').pipe(map((response: any) => response.json()));
  }

}
