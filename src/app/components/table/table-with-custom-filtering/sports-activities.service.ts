import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface ISportsActivity {
  id: number;
  name: string;
  description: string;
  availableForBooking: BookingStatus;
  riskFactorLevel: RiskFactorLevel;
}



/**
 *  TODO: class of activity texts.
 *  name, icon?, description, warning/note : remember to bring utilities and water
 */

export class SportsActivity implements ISportsActivity {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public availableForBooking: BookingStatus,
    public riskFactorLevel: RiskFactorLevel
  ) {

  }
}

class BookingStatus {
  constructor(public available: boolean) {
  }
}

export class RiskFactorLevel {
  value?:string;
  // low?: { name: string };
  // high?: { name: string };
  // medium?: { name: string };
  //todo: lab with Pick<T> ; https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
  constructor(level: "low" | "medium" | "high") {
    // this[level] = { name: RiskFactorLevelsWithDescription[level] };
    this.value = RiskFactorLevelsWithDescription[level] ;
  }
}

export const RiskFactorLevelsWithDescription = {
  low: "low risk, low premium",
  high: "high risk, high premium",
  medium: "medium risk, medium premium"
}



const winterSportActivities: Array<ISportsActivity> = [
  new SportsActivity(1, "downhill skiing", "fun fast and still under control", //watch out for avalanches if you go offpist
    new BookingStatus(true), new RiskFactorLevel('medium')),
  new SportsActivity(2, "cross-country skiing", "meeting with nature ❄ 🌲, it's nice to go on a tour in the forest as well as in the tracks", //remember to bring utilities and water
    new BookingStatus(true), new RiskFactorLevel('low')),
  new SportsActivity(3, "hiking", "nature is at your feet", // remember to bring utilities and water
    new BookingStatus(true), new RiskFactorLevel('medium')),
  new SportsActivity(4, "paragliding", "you are adventurous! Enjoy the scenery", //- watch out for birds and power-lines
    new BookingStatus(false), new RiskFactorLevel('high')),
  new SportsActivity(5, "snowshoeing", "I bet most of your friends have never tried this. Walk like the Yeti!", //- watch out for birds and power-lines
    new BookingStatus(false), new RiskFactorLevel('low')),
];

@Injectable({
  providedIn: 'root'
})
export class SportsActivitiesService {


  constructor() { }



  /**
   * notes:
   * Observable.from iterates the array and emits each item separately
   * Observable.of only emits once.
   */

  getWinterSportActivities(): Observable<Array<ISportsActivity>> {
    return of(winterSportActivities);
  }


}
