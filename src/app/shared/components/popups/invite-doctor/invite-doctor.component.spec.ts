import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteDoctorComponent } from './invite-doctor.component';

describe('InviteDoctorComponent', () => {
  let component: InviteDoctorComponent;
  let fixture: ComponentFixture<InviteDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
