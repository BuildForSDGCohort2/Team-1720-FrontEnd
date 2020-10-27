import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKinComponent } from './add-kin.component';

describe('AddKinComponent', () => {
  let component: AddKinComponent;
  let fixture: ComponentFixture<AddKinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
