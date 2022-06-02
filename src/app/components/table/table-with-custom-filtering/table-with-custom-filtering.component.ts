import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { ISportsActivity, SportsActivitiesService, SportsActivity } from './sports-activities.service';

interface IFilterValues {
  id: string,
  name: string,
  description: string,
  availableForBooking: string,
  riskFactorLevel: string;
}
interface ISelectOptions{
  riskFactorLevels: Array<string>;
}
@Component({
  selector: 'table-with-custom-filtering',
  templateUrl: './table-with-custom-filtering.component.html',
  styleUrls: ['./table-with-custom-filtering.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableWithCustomFilteringComponent implements OnInit, OnDestroy, AfterViewInit{

  // public dataSource: MatTableDataSource<SportsActivity> = new MatTableDataSource();
  public dataSource!: MatTableDataSource<SportsActivity>;
  displayedColumns: Array<string> = ['id', 'availableForBooking','name', 'description',  'riskFactorLevel'];
  activitiesToDisplay!: SportsActivity[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

/** displays details when a row is clicked */
  expandedElement!: SportsActivity | null;

  /** for toggling the filters row visibility  */
  displayFiltersRow = true;

  /** used to handle filtering in the table */
  filterFormControls = {
    id: new FormControl(),
    subscriptionId: new Subscription(),

    availableForBooking: new FormControl(),
    subscriptionAvailableForBooking: new Subscription(),

    name: new FormControl(),
    subscriptionName: new Subscription(),

    description: new FormControl(),
    subscriptionDescription: new Subscription(),

    riskFactorLevel: new FormControl(),
    subscriptionRiskFactorLevel: new Subscription(),
  }


  /** used to map filter-control values into custom filterPredicate
   * note that they must be strings, since filterPredicate operates on strings
  */
  filterValues: IFilterValues = {
    id: '',
    name: '',
    description: '',
    availableForBooking: '',
    riskFactorLevel: '',
  }
  /** dropDownFilters */
  selectOptions: ISelectOptions = {
    riskFactorLevels : []
  };

  constructor(private tableDataService: SportsActivitiesService) { }

  /** todo: use @UntilDestroy to unsubscribe. */
  ngOnDestroy() {
    this.filterFormControls.subscriptionAvailableForBooking.unsubscribe();
    this.filterFormControls.subscriptionRiskFactorLevel.unsubscribe();
    this.filterFormControls.subscriptionId.unsubscribe();
    this.filterFormControls.subscriptionName.unsubscribe();
    this.filterFormControls.subscriptionDescription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    //load table data from service..
    this.tableDataService.getWinterSportActivities()
      .subscribe(
        {
          next: activities => this.onActivitiesFetched(activities),
          error: (e) => console.error(e),
          complete: () => console.info('complete activities')
        });

    this.subscribeToFilterControls();
  }
  onActivitiesFetched(activities: SportsActivity[]): void {

    this.activitiesToDisplay = activities;
    this.initializeTable();

    this.createSelectOptions()
  }

  /** builds a list of select options from all values available in the column
   * (only used here for riskFactorLevel)  */
  createSelectOptions(){
    let allRiskFactorEntries = this.activitiesToDisplay
    .filter(a => a.riskFactorLevel.value)
    .map(activity => {
      return activity.riskFactorLevel.value!;
      //note: adding '!' to acknowledge to TS we know what we are doing.
      // other options is need to say - value ?? '' - to fool ts we would return an empty string. but it will not happen since it is filtered out.
    });
    //get unique entries, sorted by ascending
    // note: a Set only allows unique values and ignores duplicates.
    this.selectOptions.riskFactorLevels = [...new Set(allRiskFactorEntries)].sort();

  }

  initializeTable() {
    // this.dataSource.data = this.activitiesToDisplay; //todo: use when implementing ObservableDataSource (commented out in bottom)
    this.dataSource = new MatTableDataSource(this.activitiesToDisplay);

    // Set up custom search on course name and columns with active/inactive states.
    this.dataSource.filterPredicate = this.createFilter();

    /* sorting on objects requires overriding the sortingDataAccessor,
    and this has to be "reset" after updating dataSource data.
    */
    this.dataSource.sortingDataAccessor = (sportsActivity, sortHeaderId) => {
      switch(sortHeaderId) {
        //by default sorting will look for column name as defined in 'displayColumns,

        case 'id': return sportsActivity.id;
        case 'name': return sportsActivity.name.toLowerCase();
        case 'availableForBooking': return sportsActivity.availableForBooking.available.toString();
        case 'riskFactorLevel': return sportsActivity.riskFactorLevel.value ?? '';
        case 'description': return sportsActivity.description;
        default: return ''; //sportsActivity['name'];//fallback
        //default: return sportsActivity[sortHeaderId];//this gives ts error, not sure why, works in other project
      }
    };
  }

  /**
  * Set up custom search on name and columns with boolean and other states.
  */
  private createFilter(): (sportsActivity: ISportsActivity, filter: string) => boolean {

    /**
     * The filter is passed as a string. It will look something like this: "{'name': 'hiking'}".
     * - but it is a string and therefore must be parsed,
     * this function gets called for every row in the table.
     * - && requires all filters to match,
     * - hence if you filter on two columns, they are filtered together; i.e filter1 AND filter2.
     */
    let filterFunction = function (sportsActivity: ISportsActivity, filter: any): boolean {
      let searchTerms: IFilterValues = JSON.parse(filter);

      return sportsActivity.name.toLowerCase()
        .indexOf(searchTerms.name.toLowerCase()) !== -1

        && sportsActivity.id.toString()
        .indexOf(searchTerms.id) !== -1

        && sportsActivity.description.toLowerCase()
        .indexOf(searchTerms.description.toLowerCase()) !== -1

        && sportsActivity.availableForBooking.available.toString()
          .indexOf(searchTerms.availableForBooking) !== -1

        && sportsActivity.riskFactorLevel.value?.toString()
          .indexOf(searchTerms.riskFactorLevel) !== -1
        ;
    }

    return filterFunction;
  }

  filterButtonsStepperAdvance(control: FormControl) {
    if (control.value == 'true') {
      control.setValue('false')
    } else if (control.value == 'false') {
      control.setValue('')
    } else {
      control.setValue('true')
    }
  }

  clearFilterControls() {
    this.filterFormControls.id.setValue('');
    this.filterFormControls.availableForBooking.setValue('');
    this.filterFormControls.name.setValue('');
    this.filterFormControls.description.setValue('');
    this.filterFormControls.riskFactorLevel.setValue('');
  }

  /** subscribe to Value changes on filters
   */
  private subscribeToFilterControls() {
    this.filterFormControls.subscriptionAvailableForBooking = this.filterFormControls.availableForBooking.valueChanges
      .subscribe(
        value => {
          this.filterValues.availableForBooking = value;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );

      this.filterFormControls.subscriptionRiskFactorLevel = this.filterFormControls.riskFactorLevel.valueChanges
      .subscribe(
        value => {
          this.filterValues.riskFactorLevel = value;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );

      this.filterFormControls.subscriptionName = this.filterFormControls.name.valueChanges
      .subscribe(
        value => {
          this.filterValues.name = value;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );

      this.filterFormControls.subscriptionId = this.filterFormControls.id.valueChanges
      .subscribe(
        value => {
          this.filterValues.id = value;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
      this.filterFormControls.subscriptionDescription = this.filterFormControls.description.valueChanges
      .subscribe(
        value => {
          this.filterValues.description = value;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
  }
}
