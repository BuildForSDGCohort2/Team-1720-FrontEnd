import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDisputeComponent } from './request-dispute.component';

describe('RequestDisputeComponent', () => {
  let component: RequestDisputeComponent;
  let fixture: ComponentFixture<RequestDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
