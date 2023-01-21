import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BookingsService, MyBookings } from '../bookings.service';

@Component({
  selector: 'bookingspage',
  templateUrl: './bookingspage.component.html',
  styleUrls: ['./bookingspage.component.scss']
})
export class BookingsPageComponent implements OnInit, OnDestroy {


  currentGuestChangedSubscription!: Subscription;


  constructor(private bookingsService: BookingsService,
    private router : Router,
    private route: ActivatedRoute) { }


  guestId!:string;
  selectedGuestId!: string; //for dropdown
  availableGuests: Array<string> = [];

  public myBookings: MyBookings = { bookings: [] };
  public loadingStatus: string = "Loading...";

  subscriptionMyBookings: Subscription = new Subscription();
  ngOnInit(): void {

    this.availableGuests = this.bookingsService.getAvailableGuestIds();

    //TODO ? move loading to my-bookings.component.ts

    if(this.guestId){
      this.loadMyBookings();
    }

      this.currentGuestChangedSubscription = this.bookingsService
    .currentGuestChangedSubject
    .subscribe(
      {
        next: (guestId: string) => {
          if(guestId !== this.guestId){
            this.guestId = guestId;
          }

          this.loadMyBookings();
      }
      }
    );



  }

  loadMyBookings(){
    this.subscriptionMyBookings = this.bookingsService.getMyBookings(this.guestId)
      .subscribe(
        {
          next: (val: MyBookings) => { this.onMyBookingsSuccess(val) },
          error: (err: any) => { this.onMyBookingsError(err) },
          //https://rxjs.dev/api/index/class/Subscriber
          // complete: () => {console.log("Completed!")} //The complete callback of an Observer.
        }
      );
      /** Note: this style "works" as expected in updating the props and logging to console in
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

    this.myBookings = myBookings ?? { bookings: [] };
  }

  onMyBookingsError(err: any) {
    console.error(err);
    this.loadingStatus = "Error";
  };


  // [compareWith]="comparGuestSelection"
  comparGuestSelection(object1: any, object2: any) {
    return object1 && object2 && object1 == object2;
  }
  onGuestSelected(selectedGuestId: string) {
    // this.selectedGuestId = selectedGuestId;
    this.bookingsService.currentGuestChanged(selectedGuestId);
    //navigate to /bookings to unload the bookings or edit component
    this.router.navigate(['/examples/bookings']);
    // this.router.navigate(['../'], { relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscriptionMyBookings.unsubscribe();
    this.currentGuestChangedSubscription.unsubscribe();
  }
}
