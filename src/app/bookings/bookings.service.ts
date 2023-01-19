import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { v4 as uuidv4 } from 'uuid';

// class BookingCommands {
//   changeBooking = ChangeBooking;
//   recordPayment = RecordPayment;
//   bookRoom = BookRoom;
// }
interface BookRoom {
   bookingId: string; guestId: string; roomId: string;
   checkInDate: Date; checkOutDate: Date; bookingPrice: number;
   prepaidAmount: number; currency: string;
   bookingDate: Date;
}
interface ChangeBooking {

      bookingId: string;
      roomId: string;
      checkInDate: Date;
      checkOutDate: Date;
       bookingPrice: number;
       prepaidAmount: number;
        currency: string;
        bookingDate: Date;
}

interface RecordPayment {
  bookingId: string; paidAmount: number; currency: string; paymentId: string; paidBy: string;

}

interface BookingBooked {
  bookingId: string;
  guestId: string;
  // roomId: string; //todo
  checkInDate: Date;
  checkOutDate: Date;
  bookingPrice: number;
  // prepaidAmount: number;
  // currency: string; //todo
  // bookingDate: Date; //todo
  // paidAmount: number;
  outstandingAmount: number;
  paid: boolean;
}

export interface Payment {
  paymentId: string;
  payedAmount: Money;
}
export interface Money {
  amount: number;
  currency: string;
}
export interface BookingState {
  bookingId: string;
  guestId: string;
  roomId: {value: string};
  // stayPeriod: {
//  todo: rename in backend
  period: {
    checkIn: Date;
    checkOut: Date
  };
  price: Money;
  // prepaidAmount: number;
  // currency: string; //todo
  // bookingDate: Date; //todo
  // paidAmount: number;
  outstanding: number;
  paid: boolean;
  payments: Array<Payment>;
}

export interface Booking{
  bookingId:string;
  checkInDate: Date;
  checkOutDate: Date;
  price: number;
}
export interface MyBookings {
  bookings: Array<Booking>;
}

export class ChangeBookingCommand {
  constructor(
    public bookingId: string,
    public roomId: string,
    public checkInDate: Date,
    public checkOutDate: Date,
    public bookingPrice: number,
    public prepaidAmount: number,
    public currency: string
  ){
    this.bookingDate = new Date();
  }
  public bookingDate: Date;
}


/**dates as iso strings */
export class BookRoomCommand{
  constructor(
    public guestId: string,
    public roomId: string,
    public checkInDate: Date,
    public checkOutDate: Date,
    public bookingPrice :number,
    public prepaidAmount: number,
    public currency: string,

  ){
    let date = new Date();
    this.bookingDate = date;
    this.bookingId = uuidv4();
    // this.bookingId = date.toISOString().replace(' ','') + '-' + guestId;


  }

  // public bookingDate: string;
  public bookingDate: Date;
  public bookingId: string;
  // bookingId: string;
  // guestId: string;
  // roomId: string;
  // checkInDate: Date;
  // checkOutDate: Date;
  // bookingPrice :number
  // prepaidAmount: number;
  // currency: string;
  // bookingDate: Date;
}
export interface Room {
  notes?: string;
  roomNumber: string;
  roomId: string;
  roomType: string;
  price: number;
  currency: string;
}


@Injectable({providedIn: 'root'})
export class BookingsService {

currentGuestChangedSubject: Subject<string> = new Subject<string>();

  currentGuestChanged(selectedGuestId: string) {
    //invoke subscription
    this.currentGuestChangedSubject.next(selectedGuestId);
  }


  getAvailableGuestIds() : Array<string> {
    return [
      "jimi@lee",
      "guest1@lee",
      "guest2@lee",
      "guest3@lee",
    ].slice();
  }

  getDays(checkInDate: Date, checkOutDate: Date): number {
    let timeDiff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  calculatePrice(room: Room, checkInDate: Date, checkOutDate: Date): number {
    let days = this.getDays(checkInDate, checkOutDate);
    return room.price * days;
  }

  baseUrl = 'https://localhost:44352/';
  // baseUrl = 'http://localhost:51218/';
  queryApiBookings = 'bookings';
commandApiBooking = 'booking';

  constructor(private http: HttpClient) { }

  bookRoom(command: BookRoomCommand) {
    let url = this.baseUrl + this.commandApiBooking +'/book';

    console.log('bookRoomCommand:', command);

    return this.http.post(url, command,
      { observe: 'body', responseType: 'json'   }
    );
  }

   changeBooking(command: ChangeBookingCommand) {
let url = this.baseUrl + this.commandApiBooking +'/change';

    console.log('changeBookingCommand:', command);


    return this.http.post(url, command,
      { observe: 'body', responseType: 'json'   }
    );
  }

  getMyBookings(id:string): Observable <MyBookings> {

    let url = this.baseUrl + 'bookings/guest/' + id;
    return this.http.get<MyBookings>(url,
      { observe: 'body', responseType: 'json'   }
      );
  }

  getBooking(id:string): Observable <BookingState> {

  let url = this.baseUrl + 'bookings/' + id;
  return this.http.get<BookingState>(url,
    { observe: 'body', responseType: 'json'   }
    );
}

getBookingResponse(id:string): Observable < HttpResponse < BookingBooked >> {

  let url = this.baseUrl + 'bookings/' + id;
  return this.http.get<BookingBooked>(url,
    { observe: 'response', responseType: 'json'   }
    );
}

roomTypes: string[] = ['Single', 'Double', 'Family'];
  availableRooms: Array<Room> = [
    //add 10 rooms
    { roomId: "101",  roomNumber: "101", roomType: "Single", price: 1500, currency: "SEK" },
    { roomId: "102",  roomNumber: "102", roomType: "Double", price: 2100, currency: "SEK" },
    { roomId: "103",  roomNumber: "103", roomType: "Family", price: 2900, currency: "SEK" },
    { roomId: "104",  roomNumber: "104", roomType: "Single", price: 1500, currency: "SEK" },
    { roomId: "105",  roomNumber: "105", roomType: "Double", price: 2100, currency: "SEK" },
    { roomId: "106",  roomNumber: "106", roomType: "Family", price: 2900, currency: "SEK" },
    { roomId: "107",  roomNumber: "107", roomType: "Single", price: 1400, currency: "SEK" },
    { roomId: "108",  roomNumber: "108", roomType: "Single", price: 1500, currency: "SEK" },
    { roomId: "109",  roomNumber: "109", roomType: "Double", price: 2100, currency: "SEK" },
    { roomId: "110",  roomNumber: "110", roomType: "Family", price: 2900, currency: "SEK" },
  ];

  getAvailableRooms(): Array<Room> {
    return this.availableRooms.slice();
  }

  getRoomTypes(): string[] {
    return this.roomTypes.slice();
  }

options2 = { observe: 'body', responseType: 'json'   };

options = {
  // headers: new HttpHeaders({ 'Content-Type': 'application/json' }) ,
  observe: 'body',
  responseType: 'json'
};
  /* https://angular.io/guide/http

    options: {
      headers?: HttpHeaders | {[header: string]: string | string[]},
      observe?: 'body' | 'events' | 'response',
      params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
      reportProgress?: boolean,
      responseType?: 'arraybuffer'|'blob'|'json'|'text',
      withCredentials?: boolean,
    }
    Important options include the observe and responseType properties.

  The observe option specifies how much of the response to return
  The responseType option specifies the format in which to return data
  Use the options object to configure various other aspects of an outgoing request. In Adding headers, for example, the service set the default headers using the headers option property.

  Use the params property to configure a request with HTTP URL parameters, and the reportProgress option to listen for progress events when transferring large amounts of data.
  */
}
