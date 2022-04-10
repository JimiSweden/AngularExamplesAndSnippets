import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../mock-data.service';
import { IButtonToggleGroupData } from '../../components/models/models';

@Component({
  selector: 'button-toggle-dynamic-template-implementation-example-with-data-from-service',
  templateUrl: './button-toggle-dynamic-template-implementation-example-with-data-from-service.component.html',
  styleUrls: ['./button-toggle-dynamic-template-implementation-example-with-data-from-service.component.scss']
})
export class ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent implements OnInit {

  public listOfToggleGroupData!: Array<IButtonToggleGroupData>;
  public logChangesToConsole= false;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.listOfToggleGroupData = this.mockDataService.getListOfToggleGroupData();
  }

  /** although it is possible to have this reset in the child component (ButtonToggleDynamicTemplateComponent)
   * it is probably better to have the full logic here and not pollute the 'template'
  */
  clearSelectedValues() {
    this.listOfToggleGroupData.forEach(group =>
      group.formControl.setValue(undefined));
  }
}
