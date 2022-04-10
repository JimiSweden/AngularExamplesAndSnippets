import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IButtonToggleGroupData } from '../../components/button-toggle-dynamic-template/button-toggle-dynamic-template.component';

@Component({
  selector: 'button-toggle-dynamic-template-implementation-example',
  templateUrl: './button-toggle-dynamic-template-implementation-example.component.html',
  styleUrls: ['./button-toggle-dynamic-template-implementation-example.component.scss']
})
export class ButtonToggleDynamicTemplateImplementationExampleComponent implements OnInit {

  public firstToggleGroupData! : IButtonToggleGroupData

  constructor() {

  }

  ngOnInit(): void {

    /** here we create our toggle-group-buttons
     * if you want to you can listen (subscribe) to the formControl.valueChanges
    */
    this.firstToggleGroupData = {
      name: "Publishing actions",
      tooltip: "select your action",
      formControl: new FormControl(),
      buttons:[{
        value: 'schedule',
        icon: 'schedule',
        style: 'color: orange'
      },
      {
        value: 'published',
        icon: 'check_circle',
        css: 'green'
      },
      {
        value: 'unpublished',
        icon: 'unpublished',
        css: 'red'
      },
      {
        value: '',
        icon: 'radio_button_unchecked',
        css: 'gray'
      },
    ]
    }
  }

  /** although it is possible to have this reset in the child component (ButtonToggleDynamicTemplateComponent)
   * it is probably better to have the full logic here and not pollute the 'template'
  */
  clearSelectedValues() {
    this.firstToggleGroupData.formControl.setValue(undefined);

  }
}
