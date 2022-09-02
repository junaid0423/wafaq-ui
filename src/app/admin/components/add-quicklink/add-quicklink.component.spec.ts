import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuicklinkComponent } from './add-quicklink.component';

describe('AddQuicklinkComponent', () => {
  let component: AddQuicklinkComponent;
  let fixture: ComponentFixture<AddQuicklinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuicklinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuicklinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
