import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHealthCardDailyComponent } from './card-health-card-daily.component';

describe('CardHealthCardDailyComponent', () => {
  let component: CardHealthCardDailyComponent;
  let fixture: ComponentFixture<CardHealthCardDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHealthCardDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHealthCardDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
