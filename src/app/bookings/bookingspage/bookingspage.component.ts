import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BookingsService, MyBookings } from '../bookings.service';

@Component({
  selector: 'bookingspage',
  templateUrl: './bookingspage.component.html',
  styleUrls: ['./bookingspage.component.scss']
})
export class BookingsPageComponent implements OnInit, OnDestroy {


  constructor(private bookingsService: BookingsService) { }


  guestId = "jimi@lee"; //todo: get from login
  public myBookings: MyBookings = { bookings: [] };
  public loadingStatus: string = "Loading...";

  subscriptionMyBookings: Subscription = new Subscription();
  ngOnInit(): void {

    //TODO ? move to my-bookings.component.ts
    this.subscriptionMyBookings = this.bookingsService.getMyBookings(this.guestId)
      .subscribe(
        {
          next: (val: MyBookings) => { this.onMyBookingsSuccess(val) },
          error: (err: any) => { this.onMyBookingsError(err) },
          //https://rxjs.dev/api/index/class/Subscriber
          // complete: () => {console.log("Completed!")} //The complete callback of an Observer.
        }
      );

      /** this style "works" as expected in updating the props and logging to console in
       * onMyBookingsSuccess. However, the template (UI) is not updated/rerendered.
      this.bookingsService.getMyBookings(this.guestId)
      .subscribe(
        {
          next: this.onMyBookingsSuccess,
          error: this.onMyBookingsError,
          }
      );
       */

  }

  onMyBookingsSuccess(myBookings: MyBookings) {
    console.log(myBookings);
    this.loadingStatus = "";

    this.myBookings = myBookings;
  }

  onMyBookingsError(err: any) {
    console.error(err);
    this.loadingStatus = "Error";
  };


  ngOnDestroy(): void {
    this.subscriptionMyBookings.unsubscribe();
  }
}
