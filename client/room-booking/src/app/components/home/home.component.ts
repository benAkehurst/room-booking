import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from 'src/services/rooms.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allRooms: any = [];

  constructor(
    private router: Router,
    private rs: RoomsService
  ) { }

  ngOnInit() {
    this.fetchAllRoomsFromDB();
  }

  /**
   * Gets all the rooms from the DB
   */
  public fetchAllRoomsFromDB() {
    this.rs.getAllRooms().subscribe((allRooms) => {
      if (allRooms.code === 204) {
        this.openSwal(
          'Error Receiving Rooms',
          'There was a problem fetching the rooms',
          'error',
          'Ok...'
        );
      } else {
        this.allRooms = allRooms.data;
      }
      console.log(this.allRooms);
    });
  }

  /**
   * Fetchs a single room from the db and upon success, navigates to that room
   */
  public fetchSingleRoom(roomId) {
    this.rs.getSingleRoom(roomId).subscribe((room) => {
      if (room.code === 400) {
        this.openSwal(
          'Error Receiving Room',
          'There was a problem fetching the room',
          'error',
          'Ok...'
        );
      } else {
        this.rs.chosenRoom = room;
        this.router.navigateByUrl('room');
      }
    });
  }

  // Builds a basic sweet alert poput for error handling to user
  public openSwal(title, text, warning, confirmText) {
    Swal.fire({
      title: title,
      text: text,
      type: warning,
      showCancelButton: true,
      confirmButtonText: confirmText
    });
  }

}
