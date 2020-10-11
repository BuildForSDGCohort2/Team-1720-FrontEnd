import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileGeneralComponent } from './card-profile-general.component';

describe('CardProfileGeneralComponent', () => {
  let component: CardProfileGeneralComponent;
  let fixture: ComponentFixture<CardProfileGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProfileGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfileGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
