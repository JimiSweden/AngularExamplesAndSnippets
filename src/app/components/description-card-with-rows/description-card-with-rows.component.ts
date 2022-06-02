import { Component, Input, OnInit } from '@angular/core';
import { ISportsActivity, SportsActivitiesService } from '../table/table-with-custom-filtering/sports-activities.service';


export interface ICardTexts{
  text:string;
  icon?:string;
}

@Component({
  selector: 'description-card-with-rows',
  templateUrl: './description-card-with-rows.component.html',
  styleUrls: ['./description-card-with-rows.component.scss']
})
export class DescriptionCardWithRowsComponent implements OnInit {

  @Input() title!: string;
  /** use image or icon*/
  @Input() headerImagePath!: string;
  /** use image or icon*/
  @Input() headerIconName!: string;

  public activities!: Array<ISportsActivity>

  /** todo: som input,  */
  public texts : Array<ICardTexts> = [
  {
    text: `Utförsåkning är skoj, oftast på en bräda`,
    icon: 'downhill_skiing'
  },
  {
    text: `Promenader i närhet av Stockholms vatten och skogsturer`,
    icon: 'hiking'
  },
  {
    text: `Fotografering i natur och stad är intressant och rogivande`,
    icon:'photo_camera'
  },
  {
    text: `Att läsa böcker är intressant och rogivande`,
    icon:'menu_book'
  },
  {
    text: `Att umgås med nära och kära är värdefullt`,
    icon:'people'
  },
];



  constructor() { }

  ngOnInit(): void {
  }

}
