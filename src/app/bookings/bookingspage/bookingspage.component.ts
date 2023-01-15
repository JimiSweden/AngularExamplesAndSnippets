import { Component, OnInit } from '@angular/core';
import { BookingsService, MyBookings } from '../bookings.service';

@Component({
  selector: 'bookingspage',
  templateUrl: './bookingspage.component.html',
  styleUrls: ['./bookingspage.component.scss']
})
export class BookingsPageComponent implements OnInit {


  constructor(private bookingsService:BookingsService) { }

  guestId = "jimi@lee"; //todo: get from login

  ngOnInit(): void {

    this.bookingsService.getMyBookings(this.guestId)
    .subscribe(
      { next: this.onMyBookingsSuccess,
        error: this.onMyBookingsError,
        // complete: ...
      }
    );
  }
  onMyBookingsSuccess(myBookings: MyBookings) {
    console.log(myBookings);
  }
  onMyBookingsError(err: any) {
    console.error(err);
  };
}
