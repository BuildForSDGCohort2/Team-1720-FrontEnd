import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileSettingsComponent } from './card-profile-settings.component';

describe('CardProfileSettingsComponent', () => {
  let component: CardProfileSettingsComponent;
  let fixture: ComponentFixture<CardProfileSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProfileSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
