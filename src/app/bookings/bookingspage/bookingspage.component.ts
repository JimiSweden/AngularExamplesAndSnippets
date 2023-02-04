import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppConfiguration, BookingsService, MyBookings } from '../bookings.service';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
@Component({
  selector: 'bookingspage',
  templateUrl: './bookingspage.component.html',
  styleUrls: ['./bookingspage.component.scss']
})
export class BookingsPageComponent implements OnInit, OnDestroy {


  //add signalr subscription to update myBookings
  hubConnection!: HubConnection;

  currentGuestChangedSubscription!: Subscription;


  constructor(private bookingsService: BookingsService,
    private router: Router,
    private route: ActivatedRoute,
    private hubConnectionBuilder: HubConnectionBuilder,
    private appConfiguration: AppConfiguration) { }


  guestId!: string;
  selectedGuestId!: string; //for dropdown
  availableGuests: Array<string> = [];

  public myBookings: MyBookings = { bookings: [] };
  subscriptionMyBookings: Subscription = new Subscription();

  public loadingStatus: string = "Loading...";

  hubConnectionStartSuccess(): any {
    console.log('SignalR: connection started');
  }

  hubConnectionRegisterCallbacks(): any {

    //todo : set reconnect etc..

    //connection.send userId, to add to signalr group

    /**var message = new
            {
                Title = "Room reserved",
                bookingChanged.RoomId,
                bookingChanged.CheckInDate,
                bookingChanged.CheckOutDate,
            }; */
    this.hubConnection.on('bookingChanged', (message: any) => {
      console.log('SignalR message BookingChanged : ', message)
    });

    this.hubConnection.on('roomBooked', (bookingId: string) => {
      console.log('SignalR message RoomBooked : ', bookingId)
    });

    this.hubConnection.on('loggedIn', (message: string) => {
      console.log('SignalR message loggedIn : ', message)
    });

    this.hubConnection.on('timedCounterChanged', (count: string) => {
      console.log('timed counter : ', count)
    });




    //------------------ SignalR connection events ------------------

    this.hubConnection.on('clientConnected', (message: string) => {
      console.log('SignalR message : clientConnected : ', message)
    });

    this.hubConnection.on('clientDisconnected', (message: string) => {
      console.log('SignalR message : clientDisconnected : ', message)
    });


    this.hubConnection.onclose((err) => {
      console.log('SignalR: connection Closed: ', err);
    });

    this.hubConnection.onreconnected((connectionId) => {
      console.log('SignalR: connection reconnected: ', connectionId);
    });

    this.hubConnection.onreconnecting((err) => {
      console.log('SignalR: connection reconnecting: ', err);
    });
  }



  ngOnInit(): void {


    this.hubConnection = this.hubConnectionBuilder
      .withAutomaticReconnect()
      .withUrl(this.appConfiguration.signalr.bookingHubUrl,
        {
          /*
       * A note on Signalr and CORS
       * "WebSockets and CORS are not compatible " says Brennan on the signalR team : skipNegotiation will skip the HTTP negotiate that does transport fallback and will only run WebSockets. WebSockets and CORS are not compatible so you end up skipping CORS when using that.
         https://github.com/dotnet/aspnetcore/issues/4457#issuecomment-444738776 -
       */
          skipNegotiation: true, //due to CORS issue.
          transport: 1, //only use HttpTransportType.WebSockets
        })
        //loggs to console : https://learn.microsoft.com/en-us/aspnet/core/signalr/configuration?view=aspnetcore-7.0&tabs=dotnet#configure-logging-6
        //.configureLogging(signalR.LogLevel.Trace)
       .configureLogging(signalR.LogLevel.Information)
        .build();


    this.hubConnectionRegisterCallbacks();

    this.hubConnection.start()
      .then(() => this.hubConnectionStartSuccess())
      .catch((err) => console.log('error while establishing signalr connection: ' + err));

    this.availableGuests = this.bookingsService.getAvailableGuestIds();

    //TODO ? move loading to my-bookings.component.ts

    if (this.guestId) {
      this.loadMyBookings();
    }

    this.currentGuestChangedSubscription = this.bookingsService
      .currentGuestChangedSubject
      .subscribe(
        {
          next: (guestId: string) => {
            if (guestId !== this.guestId) {
              this.guestId = guestId;
            }

            this.loadMyBookings();
          }
        }
      );



  }

  loadMyBookings() {
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

