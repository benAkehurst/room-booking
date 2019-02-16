import { Component, OnInit } from '@angular/core';
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
    private rs: RoomsService
  ) { }

  ngOnInit() {
    this.test();
  }

  public test() {
    this.rs.getAllRooms().subscribe((result) => {
      if (result.code === 204) {
        this.openSwal(
          'Error Receiving Rooms',
          'There was a problem fetching the rooms',
          'error',
          'Ok...'
        );
      } else {
        this.allRooms = result.data;
      }
      console.log(this.allRooms);
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
