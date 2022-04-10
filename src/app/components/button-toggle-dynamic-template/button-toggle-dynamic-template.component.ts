import { Component, Input, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Subscription } from 'rxjs';



export interface IToggleGroupDataButton{

    value: string | boolean | undefined;
    icon: string;
    css? : string;
    style? : string;

}
export interface IButtonToggleGroupData{

    formControl: FormControl;
    tooltip?: string;
    name?: string;
    buttons: Array<IToggleGroupDataButton>;
}

  /** imagine building the button-groups from your real backend,
   * perhaps saved from a UI building your structure
   */
@Component({
  selector: 'button-toggle-dynamic-template',
  templateUrl: './button-toggle-dynamic-template.component.html',
  styleUrls: ['./button-toggle-dynamic-template.component.scss']
})
export class ButtonToggleDynamicTemplateComponent implements OnInit, OnDestroy {

  /**giving the toggle group a name might be a good way to document the usage
   * if not set it will use toggleGroupData.name
  */
  @Input() name?: string;
  /** tooltip value is optional,
   * if not set it will use toggleGroupData.tooltip
   */
  @Input() tooltip!: string;

  /** intended for debugging purpose*/
  @Input() logChangesToConsole?: boolean;

  /** the button-toggle-group is created dynamically from this*/
  @Input() toggleGroupData! : IButtonToggleGroupData;

  /** you can read the selected group-value here,
   * or you can implement your own subscription on the FormControl being passed */
  @Output() selectedValueEventEmitter = new EventEmitter<string | boolean | undefined>();

  private formControlSubscription = new Subscription();

  constructor() { }
  ngOnDestroy(): void {
    this.formControlSubscription.unsubscribe();
  }

  ngOnInit(): void {
   /** if not set as input, use value from groupData if it exists */
    if(!this.name){
      this.name = this.toggleGroupData.name ?? '';
    }
    /** if not set as input, use value from groupData if it exists */
    if(!this.tooltip){
      this.tooltip = this.toggleGroupData.tooltip ?? '';
    }

    /** subscribe to changes for logging */
    this.formControlSubscription =  this.toggleGroupData.formControl.valueChanges
    .subscribe(
      value => {
        this.selectedValueEventEmitter.next(value);
        this.logChangedSelectedToConsole(value);
      }
    );
  }

  /** logs changes if enabled from input */
  logChangedSelectedToConsole(value:string){
    if(!this.logChangesToConsole) return;

    let logValue = value === "" ? "'' (empty string)" : value;
        console.debug(`${logValue} | selected choice from '${this.toggleGroupData.name ?? '(name not set)'}' button-toggle-group :  | ${new Date()}`);
  }
}
