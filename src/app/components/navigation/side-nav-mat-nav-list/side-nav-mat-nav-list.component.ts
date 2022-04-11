import { Component, Input, OnInit } from '@angular/core';
import { ILinkObjects } from '../../models/models';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'side-nav-mat-nav-list',
  templateUrl: './side-nav-mat-nav-list.component.html',
  styleUrls: ['./side-nav-mat-nav-list.component.scss']
})
export class SideNavMatNavListComponent implements OnInit {

  /** you can provide links here or use 'linksPath' to fetch from navigationService */
  @Input() links! : Array<ILinkObjects>;

  /** the main path for the route, this is used to fetch links from navigationService */
  @Input() linksPath! : string;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {

    //get links from navigationService if not provided from input
    if(!this.links){
      if(!this.linksPath){
        throw new Error("You must provide either links or a linksPath to SideNavMatNavListComponent");
      }

      try {
        this.links = this.navigationService.getLinks(this.linksPath);
      } catch (error: any) {
        console.error(error.message);
      }

    }
  }

}
