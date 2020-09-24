import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCurrentTreatmentMiniComponent } from './card-current-treatment-mini.component';

describe('CardCurrentTreatmentMiniComponent', () => {
  let component: CardCurrentTreatmentMiniComponent;
  let fixture: ComponentFixture<CardCurrentTreatmentMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCurrentTreatmentMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCurrentTreatmentMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
