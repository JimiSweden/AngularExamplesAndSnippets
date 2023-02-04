# This (Bookings) section is used together with 
a backend project implementing Event Sourcing using EventStoreDB and the package Eventuous (helper library to "simplify" the use of Event Sourcing)
found at https://github.com/JimiSweden/eventuous-dotnet-sample 

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
    - ✅ ny bokning
    - ✅ ändra befintlig bokning
    - se bokningsdetaljer (samma som edit ?)

  -   redux/flux

- backend: 
  - roomAvailability
  - rooms[] med ett gäng befintliga rum
  - collection Room : RoomDocument, med bokningar; bookingId, checkinDate, checkoutDate


