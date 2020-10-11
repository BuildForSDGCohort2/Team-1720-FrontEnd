import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAidSubmissionComponent } from './medical-aid-submission.component';

describe('MedicalAidSubmissionComponent', () => {
  let component: MedicalAidSubmissionComponent;
  let fixture: ComponentFixture<MedicalAidSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAidSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAidSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
