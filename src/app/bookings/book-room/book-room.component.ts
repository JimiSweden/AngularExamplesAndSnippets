
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { BookingsService, BookRoomCommand, Room } from '../bookings.service';


@Component({
  selector: 'book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit, OnDestroy {

  bookingForm: FormGroup = new FormGroup({
    checkInDate: new FormControl('', Validators.required),
    checkOutDate: new FormControl('', Validators.required),
    roomType: new FormControl(''), //only used for filtering
    room: new FormControl('', Validators.required),

    //set in onRoomSelected, not visible in form
    //todo: remove
    roomId: new FormControl('', Validators.required),
    bookingPrice: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    // paymentMethod: new FormControl('', Validators.required),
  });

  //for test, not implemented in booking.
  stayPeriod!: FormGroup;

  roomTypes: string[] = ['Single', 'Double', 'Family'];
  availableRooms: Array<Room> = [];
  filteredAvailableRooms: Room[] = [];

  minDateCheckIn!: moment.Moment;
  maxDateCheckIn!: moment.Moment;
  minDateCheckOut!: moment.Moment;
  maxDateCheckOut!: moment.Moment;
  bookRoomSubscription!: Subscription;

  constructor(private bookingsService: BookingsService) { }


  setMinMaxDates() {

    //min today
    this.minDateCheckIn = moment();
    //max 2 years from now or day before checkout
    this.maxDateCheckIn = this.bookingForm.value.checkOutDate ?
      moment(this.bookingForm.value.checkOutDate).add(-1, 'days')
      // (this.bookingForm.value.checkOutDate as moment.Moment).add(-1, 'days') //this will alter the checkOutDate
      : moment().add(2, 'years');

    //min 1 day after checkin or tomorrow
    this.minDateCheckOut = this.bookingForm.value.checkInDate ?
      moment(this.bookingForm.value.checkInDate).add(1, 'days')
      : moment().add(1, 'days');

    //max 30 days after checkin or 2 years from now
    this.maxDateCheckOut = this.bookingForm.value.checkInDate ?
      moment(this.bookingForm.value.checkInDate).add(30, 'days')
      : moment().add(2, 'years');
  }

  onBookingDateChanged(event: MatDatepickerInputEvent<Date>) {
    this.setMinMaxDates();
    //if checkin date is same or after  checkout date, clear checkout date
    if (this.bookingForm.value.checkInDate >= this.bookingForm.value.checkOutDate) {
      this.bookingForm.patchValue({ checkOutDate: null });
    }
  }

  ngOnInit() {

    this.availableRooms = this.bookingsService.getAvailableRooms();
    this.filteredAvailableRooms = this.availableRooms.slice();

    this.stayPeriod = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
      // start: new FormControl('', Validators.required),
      // end: new FormControl('', Validators.required),
    });

    this.setMinMaxDates();

  }


  roomTypeFilterOnSelected(selectedRoomType: string) {
    this.filteredAvailableRooms = this.availableRooms.filter(room => room.roomType === selectedRoomType);
  }
  onRoomSelected(selectedRoom: Room) {
    this.bookingForm.patchValue({
      roomId: selectedRoom.roomNumber,
      bookingPrice: selectedRoom.price,
      currency: selectedRoom.currency
    });
  }

  bookRoom() {
    console.log(this.bookingForm.value);

    let currentGuestId = this.bookingsService.getCurrentUserId();
    let prepaidAmount = 0;

    //todo: ugly fix day + 1, fix...
    let checkInDate = (this.bookingForm.value.checkInDate).add(1, 'days').toDate() as Date;
    let checkOutDate =(this.bookingForm.value.checkOutDate).add(1, 'days').toDate() as Date;

    let bookingPrice = this.bookingsService.calculatePrice(
      this.bookingForm.value.room,
      checkInDate,
      checkOutDate
      )

    //TODO: se även till att spara klockslag för checkin och checkout.
    let bookingCommand = new BookRoomCommand(currentGuestId,
      this.bookingForm.value.roomId,
      //dates are moment objects, convert to string to make it compatible with backend
      checkInDate,
      checkOutDate,
      bookingPrice,
      prepaidAmount,
      this.bookingForm.value.currency,
    );

    this.bookRoomSubscription = this.bookingsService.bookRoom(bookingCommand)
      .subscribe({
        next: (val: any) => { console.log(val, "room booking submitted") },
        error: (err: any) => { console.error(err) },
      })
  }

  ngOnDestroy(): void {
    this.bookRoomSubscription?.unsubscribe(); //todo: kanske inte behövs?
  }
}
