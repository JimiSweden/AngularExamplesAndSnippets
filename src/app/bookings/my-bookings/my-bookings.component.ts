import { Component, Input, OnInit } from '@angular/core';
import { MyBookings } from '../bookings.service';

@Component({
  selector: 'my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  @Input() myBookings: MyBookings = { bookings: [] };
  @Input() loadingStatus: string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
