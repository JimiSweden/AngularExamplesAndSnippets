# TODO


- Signalr hubs/bookings
  - visa att bokning är slutförd (bokad, cancellerad) i bokningssidan.
  - visa betalningsstatus (pending, paid/booked, cancelled)
  - signalera till andra att rummet bokades nu för perioden från-till

- bookingsPage
  - alla bokningar (my bookings):
    -  dela upp i kommande, aktuell och historik beroende på dagens datum
    - länka till "Change" och "Cancel" > öppnas via routerLink i högersidan
  -  
  - högersida med router outlet för : 
    - ny bokning
    - ändra befintlig bokning
    - se bokningsdetaljer (samma som edit ?)

- backend: 
  - roomAvailability
  - rooms[] med ett gäng befintliga rum
  - collection Room : RoomDocument, med bokningar; bookingId, checkinDate, checkoutDate

 - ? readme med info till eventstore projektet.
 - ?  redux? eller skippa det?


