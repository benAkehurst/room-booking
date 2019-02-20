import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/services/rooms.service';
import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  room: any;
  macLab: Boolean = false;
  projector: Boolean = false;
  teleconfrence: Boolean = false;
  tv: Boolean = false;
  whiteboard: Boolean = false;
  inUse: Boolean = false;

  constructor(
    private router: Router,
    private rs: RoomsService
  ) { }

  ngOnInit() {
    this.fetchRoomFromRoomService();
    this.isInUseNow();
  }

  /**
   * Fetchs the chosen room from the Room Service
   */
  public fetchRoomFromRoomService() {
    this.room = this.rs.chosenRoom.data;
    if (this.room !== undefined) {
      this.checkRoomFacilities();
    }
  }

  /**
   * This function sets a boolean value for each room asset
   */
  public checkRoomFacilities() {
    this.macLab = this.room.assets.macLab;
    this.projector = this.room.assets.projector;
    this.teleconfrence = this.room.assets.teleconfrence;
    this.tv = this.room.assets.tv;
    this.whiteboard = this.room.assets.whiteboard;
  }

  public isInUseNow() {
    const currentDate = moment().format('DD-MM-YYYY');
    console.log(currentDate);
    this.room.bookings.forEach(element => {
      console.log(currentDate);
      if (element.bookingStart === currentDate && element.startHour) {
        console.log(element);
      }
    });
  }

  /**
   * Function to take the user to the home page
   */
  public goToHome() {
    this.router.navigateByUrl('home');
  }

}
