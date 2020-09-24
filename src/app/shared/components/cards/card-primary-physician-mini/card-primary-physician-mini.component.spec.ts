import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrimaryPhysicianMiniComponent } from './card-primary-physician-mini.component';

describe('CardPrimaryPhysicianMiniComponent', () => {
  let component: CardPrimaryPhysicianMiniComponent;
  let fixture: ComponentFixture<CardPrimaryPhysicianMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPrimaryPhysicianMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrimaryPhysicianMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
