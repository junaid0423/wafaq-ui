import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../models/button.model';
import { TableData } from '../../models/table.model';
import { AppConstants } from '../../utils/app-constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  math = Math;
  @Input() buttons: Button[];
  @Input() tableData: TableData;
  @Input() pagination: any;
  @Output() buttonCallback: EventEmitter<any> = new EventEmitter(); //this will emit top right button's event with its index
  @Output() searchCallback: EventEmitter<any> = new EventEmitter(); //this will emit top let search-bar's event
  @Output() tableCallback: EventEmitter<any> = new EventEmitter(); //this will emit any clickable event from the table with it's action name and row object
  @Output() sortCallback: EventEmitter<any> = new EventEmitter(); //this will emit any sort information

  appConstants = AppConstants;
  constructor() {}
  searchKey: any;
  descendingOrder: boolean = false;

  buttonClick(index: number) {
    this.buttonCallback.emit(index);
  }

  sortColumns(element: any) {
    if (element.sortable) {
      this.descendingOrder = !this.descendingOrder;
      let response: any = {
        key: element.field,
        order: this.descendingOrder ? 'desc' : 'asc',
      };
      this.sortCallback.emit(response);
    }
  }
  searchClick(event: any) {
    this.pagination.start = 1;
    this.searchCallback.emit(this.searchKey);
  }
  tableClick(key: string, object: any) {
    let response: any = {
      key: key,
      object: object,
    };
    this.tableCallback.emit(response);
  }
  paginateTable(direction: boolean) {
    if (
      direction &&
      this.pagination?.count * this.pagination?.start < this.pagination?.total
    ) {
      this.tableCallback.emit({
        key: this.appConstants.PAGINATION,
        object: this.pagination.start + 1,
      });
    } else if (
      !direction &&
      this.pagination?.count * this.pagination?.start > this.pagination?.count
    ) {
      this.tableCallback.emit({
        key: this.appConstants.PAGINATION,
        object: this.pagination.start - 1,
      });
    }
  }
}
