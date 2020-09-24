import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecentTreatmentsMiniComponent } from './card-recent-treatments-mini.component';

describe('CardRecentTreatmentsMiniComponent', () => {
  let component: CardRecentTreatmentsMiniComponent;
  let fixture: ComponentFixture<CardRecentTreatmentsMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRecentTreatmentsMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecentTreatmentsMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
