import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }


  ngOnInit(): void {
  }

  toggleSideNav() {
    this.navigationService.toggleSideNav();
  }
}
