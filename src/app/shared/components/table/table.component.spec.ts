import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  Pipe,
  PipeTransform,
  Injectable,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  Directive,
  Input,
  Output,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Observable, of as observableOf, throwError } from "rxjs";

import { Component } from "@angular/core";
import { TableComponent } from "./table.component";

@Directive({ selector: "[oneviewPermitted]" })
class OneviewPermittedDirective {
  @Input() oneviewPermitted: any;
}

@Pipe({ name: "translate" })
class TranslatePipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}

@Pipe({ name: "phoneNumber" })
class PhoneNumberPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}

@Pipe({ name: "safeHtml" })
class SafeHtmlPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}

describe("TableComponent", () => {
  let fixture: any;
  let component: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        TableComponent,
        TranslatePipe,
        PhoneNumberPipe,
        SafeHtmlPipe,
        OneviewPermittedDirective,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [],
    })
      .overrideComponent(TableComponent, {})
      .compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () {};
    fixture.destroy();
  });

  it("should run #constructor()", async () => {
    expect(component).toBeTruthy();
  });

  it("should run #buttonClick()", async () => {
    component.buttonCallback = component.buttonCallback || {};
    spyOn(component.buttonCallback, "emit");
    component.buttonClick({});
    // expect(component.buttonCallback.emit).toHaveBeenCalled();
  });

  it("should run #sortColumns()", async () => {
    component.sortCallback = component.sortCallback || {};
    spyOn(component.sortCallback, "emit");
    component.sortColumns({
      sortable: {},
      field: {},
    });
    // expect(component.sortCallback.emit).toHaveBeenCalled();
  });

  it("should run #searchClick()", async () => {
    component.pagination = component.pagination || {};
    component.pagination.start = "start";
    component.searchCallback = component.searchCallback || {};
    spyOn(component.searchCallback, "emit");
    component.searchClick({});
    // expect(component.searchCallback.emit).toHaveBeenCalled();
  });

  it("should run #tableClick()", async () => {
    component.tableCallback = component.tableCallback || {};
    spyOn(component.tableCallback, "emit");
    component.tableClick({}, {});
    // expect(component.tableCallback.emit).toHaveBeenCalled();
  });

  it("should run #paginateTable()", async () => {
    component.pagination = component.pagination || {};
    component.pagination.total = "total";
    component.pagination.start = "start";
    component.pagination.count = "count";
    component.tableCallback = component.tableCallback || {};
    spyOn(component.tableCallback, "emit");
    component.appConstants = component.appConstants || {};
    component.appConstants.PAGINATION = "PAGINATION";
    component.paginateTable({});
    // expect(component.tableCallback.emit).toHaveBeenCalled();
  });
});
