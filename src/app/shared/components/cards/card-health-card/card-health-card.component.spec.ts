import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHealthCardComponent } from './card-health-card.component';

describe('CardHealthCardComponent', () => {
  let component: CardHealthCardComponent;
  let fixture: ComponentFixture<CardHealthCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHealthCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
