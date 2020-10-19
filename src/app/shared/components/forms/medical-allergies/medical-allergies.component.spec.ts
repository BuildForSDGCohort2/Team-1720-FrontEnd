import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAllergiesComponent } from './medical-allergies.component';

describe('MedicalAllergiesComponent', () => {
  let component: MedicalAllergiesComponent;
  let fixture: ComponentFixture<MedicalAllergiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAllergiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
