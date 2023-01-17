import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import {
  BookingsService, BookingState, ChangeBookingCommand, Payment, Room
  ,
} from '../bookings.service';

@Component({
  selector: 'edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit, OnDestroy {

  //get bookingId from route
  bookingId!: string;

  bookingForm: FormGroup = new FormGroup({
    // checkInDate: new FormControl('', Validators.required),
    // checkOutDate: new FormControl('', Validators.required),
    stayPeriod: new FormGroup({
      checkInDate: new FormControl('', Validators.required),
      checkOutDate: new FormControl('', Validators.required),
      // start: new FormControl('', Validators.required),
      // end: new FormControl('', Validators.required),
    }),
    roomType: new FormControl(''), //only used for filtering
    room: new FormControl('', Validators.required),
    //set in onRoomSelected (control 'room'), not visible in form
    // roomId: new FormControl('', Validators.required),

    //note: bookingPrice can be other than the roomPrice from current roomsAvailable
    bookingPrice: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    // paymentMethod: new FormControl('', Validators.required),
  });

  // this.stayPeriod = new FormGroup({
  //   start: new FormControl(),
  //   end: new FormControl(),
  //   // start: new FormControl('', Validators.required),
  //   // end: new FormControl('', Validators.required),
  // });

  //for test, not implemented in booking.
  stayPeriod!: FormGroup;

  roomTypes!: string[];
  availableRooms!: Array<Room>;
  selectedRoom: Room | undefined;

  filteredAvailableRooms: Room[] = [];

  minDateCheckIn!: moment.Moment;
  maxDateCheckIn!: moment.Moment;
  minDateCheckOut!: moment.Moment;
  maxDateCheckOut!: moment.Moment;
  changeBookingSubscription!: Subscription;
  booking!: BookingState;
  outstandingBalance!: number;
  paid!: boolean;
  payments: Payment[] = new Array<Payment>();

  bookingPriceCurrentSelected: number = 0;
  //subscribe to route params

  constructor(
    private bookingsService: BookingsService,
    private route: ActivatedRoute) { }


  onBookingFormChange() {
    // console.log('onBookingFormChange');
    this.bookingPriceCurrentSelected = this.bookingsService.calculatePrice(
      this.bookingForm.value.room,
      this.bookingForm.value.stayPeriod.checkInDate,
      this.bookingForm.value.stayPeriod.checkOutDate);

    //set bookingPrice from calculated price
    this.bookingForm.patchValue({
      bookingPrice: this.bookingPriceCurrentSelected
    });
  }

  setMinMaxDates() {

    //min today
    this.minDateCheckIn = moment();
    //max 2 years from now or day before checkout
    this.maxDateCheckIn = this.bookingForm.value.stayPeriod.checkOutDate ?
      moment(this.bookingForm.value.stayPeriod.checkOutDate).add(-1, 'days')
      // (this.bookingForm.value.checkOutDate as moment.Moment).add(-1, 'days') //this will alter the checkOutDate
      : moment().add(2, 'years');

    //min 1 day after checkin or tomorrow
    this.minDateCheckOut = this.bookingForm.value.stayPeriod.checkInDate ?
      moment(this.bookingForm.value.stayPeriod.checkInDate).add(1, 'days')
      : moment().add(1, 'days');

    //max 30 days after checkin or 2 years from now
    this.maxDateCheckOut = this.bookingForm.value.stayPeriod.checkInDate ?
      moment(this.bookingForm.value.stayPeriod.checkInDate).add(30, 'days')
      : moment().add(2, 'years');
  }

  onBookingDateChanged(event: MatDatepickerInputEvent<Date>) {
    this.setMinMaxDates();
    //if checkin date is same or after  checkout date, clear checkout date
    if (this.bookingForm.value.stayPeriod.checkInDate >= this.bookingForm.value.stayPeriod.checkOutDate) {
      this.bookingForm.patchValue({ stayPeriod: { checkOutDate: null } }); //todo. behöver man patcha hela objektet?
    }
  }

  ngOnInit() {

    this.roomTypes = this.bookingsService.getRoomTypes();
    this.availableRooms = this.bookingsService.getAvailableRooms();
    this.filteredAvailableRooms = this.availableRooms.slice();

    this.route.params.subscribe((params: Params) => {
      this.bookingId = params['bookingId'];
      // this.editMode = params['id'] != null;
      this.loadBooking(this.bookingId);
    })


    this.setMinMaxDates();

  }

  loadBooking(bookingId: string) {
    this.changeBookingSubscription = this.bookingsService.getBooking(bookingId)
      .subscribe({
        next: (booking: BookingState) => {
          console.log('booking loaded : ', booking)
          this.onBookingLoaded(booking);
        },
        error: (err: any) => console.log(err)
      });
  }

  onBookingLoaded(booking: BookingState) {
    this.booking = booking;
    //todo: (available on booking) - display below form
    this.outstandingBalance = booking.outstanding;
    this.paid = booking.paid;
    this.payments = booking.payments;

    this.selectedRoom = this.availableRooms.find(room => room.roomNumber === booking.roomId.value);
    // this.selectedRoom = {
    //   roomId: booking.roomId.value,
    //   roomNumber: booking.roomId.value,
    //   //todo: roomType from backend : and BokingStateViewModel
    //   roomType: this.availableRooms.find(room => room.roomNumber === booking.roomId.value)?.roomType ?? 'unknown',
    //   price: booking.price.amount,
    //   currency: booking.price.currency
    // };

    this.bookingForm.patchValue({
      room: this.selectedRoom,
      // roomId: booking.roomId.value,
      // room:{
      //   roomNumber: this.selectedRoom?.roomNumber,
      //   // roomId: booking.roomId.value,
      //   // roomType: booking.roomType,
      //   price: booking.price.amount,
      //   currency: booking.price.currency
      // },
      // room: this.availableRooms.find(room => room.roomNumber === booking.roomId),
      // roomType: this.availableRooms.find(room => room.roomNumber === booking.roomId)?.roomType,
      bookingPrice: booking.price.amount,
      currency: booking.price.currency,
      stayPeriod: {
        checkInDate: moment(booking.period.checkIn),
        checkOutDate: moment(booking.period.checkOut)
      }


    });

    console.log('bookingForm after patch/load : ', this.bookingForm.value);
    console.log('selectedRoom after patch/load : ', this.selectedRoom);
  }



  roomTypeFilterOnSelected(selectedRoomType: string) {
    this.filteredAvailableRooms = this.availableRooms.filter(room => room.roomType === selectedRoomType);
  }

  onRoomSelected(selectedRoom: Room) {

    this.selectedRoom = selectedRoom;

    this.bookingForm.patchValue({
      room: selectedRoom,
      //update prices when new room is selected
      bookingPrice: selectedRoom.price,
      currency: selectedRoom.currency
    });
  }

  // [compareWith]="comparerRoomsSelection"
  comparerRoomsSelection(object1: Room, object2: Room) {
    return object1 && object2
      && object1.roomNumber == object2.roomNumber
      // && object1.price == object2.price
      // && object1.currency == object2.currency
      // && object1.notes == object2.notes
      ;
  }

  updateBooking() {
    console.log(this.bookingForm.value);

    //todo: ugly fix day + 1, fix...
    let checkInDate = (this.bookingForm.value.stayPeriod.checkInDate).add(1, 'days').toDate() as Date;
    let checkOutDate = (this.bookingForm.value.stayPeriod.checkOutDate).add(1, 'days').toDate() as Date;

    let bookingPrice = this.bookingsService.calculatePrice(
      this.bookingForm.value.room,
      checkInDate,
      checkOutDate
    )

    // let currentGuestId = this.bookingsService.getCurrentUserId();
    let prepaidAmount = 0;

    //todo: se även till att spara klockslag för checkin och checkout.
    let bookingCommand = new ChangeBookingCommand(
      this.bookingId,
      this.bookingForm.value.room.roomId,
      //dates are moment objects, convert to string to make it compatible with backend
      checkInDate,
      checkOutDate,
      bookingPrice,
      prepaidAmount,
      this.bookingForm.value.currency,
    );

    this.changeBookingSubscription = this.bookingsService.changeBooking(bookingCommand)
      .subscribe({
        next: (val: any) => { console.log(val, "room booking submitted") },
        error: (err: any) => { console.error(err) },
      })
  }

  ngOnDestroy(): void {
    this.changeBookingSubscription?.unsubscribe();//todo: kanske inte behövs?
  }
}
