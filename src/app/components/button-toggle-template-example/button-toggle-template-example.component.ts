import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// @UntilDestroy()
@UntilDestroy({ checkProperties: true, blackList: ['firstControlSubscription'] })
@Component({
  selector: 'button-toggle-template-example',
  templateUrl: './button-toggle-template-example.component.html',
  styleUrls: ['./button-toggle-template-example.component.scss']
})
export class ButtonToggleTemplateExampleComponent implements OnInit, OnDestroy {


  /** form controls allows you to listen to and update values
   * here we are using them to allow user to select options in button-toggle-groups
  */
  public firstFormControl = new FormControl();
  public secondFormControl = new FormControl();
  public thirdFormControl = new FormControl();

  /** objects to be passed into the button-group-template,
   *  allowing additional data such as tooltip */
  public firstFormControlObject = {
    control : this.firstFormControl,
    tooltip : 'first tooltip'
  }

  public secondFormControlObject = {
    control : this.secondFormControl,
    tooltip : 'second tooltip'
  }

  public thirdFormControlObject = {
    control : this.thirdFormControl,
    tooltip : 'third tooltip'
  }

  /** unsubscribing is needed, from what I have found, however some things in Angular are handled internally and I'm not sure it really is needed
   * due to blacklist in @UntilDestroy() this will not be unsubscribed automagically upon component destruction
  */
  private firstControlSubscription = new Subscription();

  constructor() { }

  ngOnDestroy(): void {
    this.firstControlSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.subscribeToFormControls();

     /** another way of unsubscribing with untilDestroyed. Read https://github.com/ngneat/until-destroy for more options and how to
     * note that the Component is decorated with @UntilDestroy()
    */
      interval(1000).pipe(untilDestroyed(this)).subscribe();
  }


  clearSelectedValues() {
    this.firstFormControl.setValue(undefined);
    this.secondFormControl.setValue(undefined);
    this.thirdFormControl.setValue(undefined);
  }

  /** subscribing to value changes in the FormControls allows us to take action
   *  you can perhaps also  use registerOnChange https://angular.io/api/forms/FormControl#registeronchange,
   *  but I haven't tried it out.
   */
  private subscribeToFormControls() {

    /* firstControlSubscription is unsubscribed in the built in way */
    this.firstControlSubscription =  this.firstFormControl.valueChanges
    .subscribe(
      value => {
        console.debug(`selected first choice : ${value} | ${new Date()}`);
        // do you thing ...
      }
    );

      /* second- and thirdControlSubscription are unsubscribed using 'ngneat/until-destroy' */
    this.secondFormControl.valueChanges
    .subscribe(
      value => {
        console.debug(`selected second choice : ${value} | ${new Date()}`);
        // do you thing ...
      }
    );

    this.thirdFormControl.valueChanges
    .subscribe(
      value => {
        console.debug(`selected third choice : ${value} | ${new Date()}`);
        // do you thing ...
      }
    );
  }
}
