import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'


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

interface Payment {
  paymentId: string;
  payedAmount: Money;
}
interface Money {
  amount: number;
  currency: string;
}
interface BookingState {
  bookingId: string;
  guestId: string;
  roomId: string;
  StayPeriod: {checkInDate: Date; checkOutDate: Date}

  price: number;
  // prepaidAmount: number;
  // currency: string; //todo
  // bookingDate: Date; //todo
  // paidAmount: number;
  outstanding: number;
  paid: boolean;
  payments: Array<Payment>;
}

interface Booking{
  bookingId:string;
  checkInDate: Date;
  checkOutDate: Date;
  bookingPrice: number;
}
export interface MyBookings {
  bookings: Array<Booking>;
}


@Injectable({providedIn: 'root'})
export class BookingsService {
  baseUrl = 'https://localhost:44352/';
  // baseUrl = 'http://localhost:51218/';

  constructor(private http: HttpClient) { }


  getMyBookings(id:string): Observable <MyBookings> {

    let url = this.baseUrl + 'bookings/guest/' + id;
    return this.http.get<MyBookings>(url,
      { observe: 'body', responseType: 'json'   }
      );
  }
getBooking(id:string): Observable <BookingBooked> {

  let url = this.baseUrl + 'bookings/' + id;
  return this.http.get<BookingBooked>(url,
    { observe: 'body', responseType: 'json'   }
    );
}

getBookingResponse(id:string): Observable < HttpResponse < BookingBooked >> {

  let url = this.baseUrl + 'bookings/' + id;
  return this.http.get<BookingBooked>(url,
    { observe: 'response', responseType: 'json'   }
    );
}

options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) ,
  observe: 'response',
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
