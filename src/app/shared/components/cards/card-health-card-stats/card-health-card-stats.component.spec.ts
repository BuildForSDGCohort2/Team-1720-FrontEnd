import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHealthCardStatsComponent } from './card-health-card-stats.component';

describe('CardHealthCardStatsComponent', () => {
  let component: CardHealthCardStatsComponent;
  let fixture: ComponentFixture<CardHealthCardStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHealthCardStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHealthCardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
