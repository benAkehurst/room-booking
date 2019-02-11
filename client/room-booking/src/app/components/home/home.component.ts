import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/services/rooms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private rs: RoomsService
  ) { }

  ngOnInit() {
    this.test();
  }

  public test() {
    this.rs.getAllRooms().subscribe((result) => {
      console.log(result);
    });
  }

}
