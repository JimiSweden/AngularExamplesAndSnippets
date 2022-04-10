import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IButtonToggleGroupData } from '../components/models/models';


@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }


  /** data for our toggleButtonGroups
   * in a real world example we would need to
   * 1. fetch data
   * 2. transform data to IButtonToggleGroupData.
   * - at least to new up the FormControl on each groupData
   */
  getListOfToggleGroupData(): Array<IButtonToggleGroupData> {

    var groupData = [
      {
        name: "Select your first winter sports activity of choice",
        tooltip: "select your activity",
        formControl: new FormControl(),
        buttons: [{
          value: 'downhill_skiing',
          icon: 'downhill_skiing',
          style: 'color: orange',
          tooltip: 'watch out for avalanches if you go offpist'
        },
        {
          value: 'hiking',
          icon: 'hiking',
          css: 'green',
          tooltip: 'remember to bring utilities and water'
        },
        {
          value: 'paragliding',
          icon: 'paragliding',
          class: 'red',
          tooltip: 'you are adventurous, enjoy the scenery'
        },
        {
          value: 'snowshoeing',
          icon: 'snowshoeing',
          css: 'color: orange'
        },
        {
          value: 'directions_walk',
          icon: 'directions_walk',
          css: 'green'
        },
        ]
      },
      {
        name: "Select how you will travel to the destination",
        tooltip: "select your traveling choice",
        formControl: new FormControl(),
        buttons: [
          {
            value: 'directions_bike',
            icon: 'directions_bike',
            css: 'green'
          },
          {
            value: 'train',
            icon: 'train',
            css: 'green'
          },
          {
            value: 'electric_car',
            icon: 'electric_car',
            css: 'green'
          },
          {
            value: 'commute',
            icon: 'commute',
            css: 'green'
          },
          {
            value: 'directions_bus',
            icon: 'directions_bus',
            css: 'orange'
          },
          {
            value: 'directions_car',
            icon: 'directions_car',
            style: 'color: orange'
          },
          {
            value: 'flight',
            icon: 'flight',
            css: 'red',
          tooltip: 'think of the environment and chose another option if possible'

          },
        ]
      }
    ];

    return groupData;
  }
}
