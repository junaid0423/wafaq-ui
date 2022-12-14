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
import { ButtonComponent } from "./button.component";

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

describe("ButtonComponent", () => {
  let fixture: any;
  let component: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        ButtonComponent,
        TranslatePipe,
        PhoneNumberPipe,
        SafeHtmlPipe,
        OneviewPermittedDirective,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [],
    })
      .overrideComponent(ButtonComponent, {})
      .compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () {};
    fixture.destroy();
  });

  it("should run #constructor()", async () => {
    expect(component).toBeTruthy();
  });

  it("should run #fire()", async () => {
    component.callBack = component.callBack || {};
    spyOn(component.callBack, "emit");
    component.fire();
    // expect(component.callBack.emit).toHaveBeenCalled();
  });
});
