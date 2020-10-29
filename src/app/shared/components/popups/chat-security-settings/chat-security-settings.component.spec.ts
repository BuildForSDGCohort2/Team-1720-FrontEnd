import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSecuritySettingsComponent } from './chat-security-settings.component';

describe('ChatSecuritySettingsComponent', () => {
  let component: ChatSecuritySettingsComponent;
  let fixture: ComponentFixture<ChatSecuritySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSecuritySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSecuritySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
