import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressWorkComponent } from './address-work.component';

describe('AddressWorkComponent', () => {
  let component: AddressWorkComponent;
  let fixture: ComponentFixture<AddressWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
