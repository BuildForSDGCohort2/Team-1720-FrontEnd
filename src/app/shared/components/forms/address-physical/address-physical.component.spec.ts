import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPhysicalComponent } from './address-physical.component';

describe('AddressPhysicalComponent', () => {
  let component: AddressPhysicalComponent;
  let fixture: ComponentFixture<AddressPhysicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPhysicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
