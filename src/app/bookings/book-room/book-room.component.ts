
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingsService, BookRoomCommand } from '../bookings.service';

export interface Room{
  roomNumber: string;
  // roomId: string;
  roomType: string;
  price: number;
  currency: string;
}

@Component({
  selector: 'book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {

  bookingForm!: FormGroup;
  roomTypes: string[] = ['Single', 'Double', 'Family'];
  availableRooms: Array<Room> = [
    //add 10 rooms
    {roomNumber: "101", roomType: "Single", price: 1500, currency: "SEK"},
    {roomNumber: "102", roomType: "Double", price: 2100, currency: "SEK"},
    {roomNumber: "103", roomType: "Family", price: 2900, currency: "SEK"},
    {roomNumber: "104", roomType: "Single", price: 1500, currency: "SEK"},
    {roomNumber: "105", roomType: "Double", price: 2100, currency: "SEK"},
    {roomNumber: "106", roomType: "Family", price: 2900, currency: "SEK"},
    {roomNumber: "107", roomType: "Single", price: 1400, currency: "SEK"},
    {roomNumber: "108", roomType: "Single", price: 1500, currency: "SEK"},
    {roomNumber: "109", roomType: "Double", price: 2100, currency: "SEK"},
    {roomNumber: "110", roomType: "Family", price: 2900, currency: "SEK"},
  ];

  filteredAvailableRooms: Room[] = this.availableRooms;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.bookingForm = new FormGroup({
      checkInDate: new FormControl('', Validators.required),
      checkOutDate: new FormControl('', Validators.required),
      roomType: new FormControl(''), //only used for filtering
      room: new FormControl('', Validators.required),

      //set in onRoomSelected, not visible in form
      roomId: new FormControl('', Validators.required),
      bookingPrice: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      // paymentMethod: new FormControl('', Validators.required),
    });
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

    let bookingCommand = new BookRoomCommand(currentGuestId,
      this.bookingForm.value.roomId,
      this.bookingForm.value.checkInDate,
      this.bookingForm.value.checkOutDate,
      this.bookingForm.value.bookingPrice,
      prepaidAmount,
      this.bookingForm.value.currency,
      );

    this.bookingsService.bookRoom(bookingCommand)
    .subscribe({
      next: (val: any) => { console.log(val, "room booking submitted") },
      error: (err: any) => { console.error(err) },
    })
  }
}
