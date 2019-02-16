import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/services/rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  room: any;

  constructor(
    private rs: RoomsService
  ) { }

  ngOnInit() {
    this.fetchRoomFromRoomService();
  }

  /**
   * Fetchs the chosen room from the Room Service
   */
  public fetchRoomFromRoomService() {
    this.room = this.rs.chosenRoom;
    console.log(this.room);
  }

}
