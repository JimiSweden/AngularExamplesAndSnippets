import { FormControl } from "@angular/forms";

export interface IToggleGroupDataButton{

  value: string | boolean | undefined;
  tooltip?: string;
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
