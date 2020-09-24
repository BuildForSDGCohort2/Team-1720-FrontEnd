import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaymentsMiniComponent } from './card-payments-mini.component';

describe('CardPaymentsMiniComponent', () => {
  let component: CardPaymentsMiniComponent;
  let fixture: ComponentFixture<CardPaymentsMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPaymentsMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPaymentsMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
