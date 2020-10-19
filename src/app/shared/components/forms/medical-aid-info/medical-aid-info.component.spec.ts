import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAidInfoComponent } from './medical-aid-info.component';

describe('MedicalAidInfoComponent', () => {
  let component: MedicalAidInfoComponent;
  let fixture: ComponentFixture<MedicalAidInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAidInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAidInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
