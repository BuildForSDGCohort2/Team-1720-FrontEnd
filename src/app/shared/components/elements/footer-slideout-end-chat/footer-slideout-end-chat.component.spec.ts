import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSlideoutEndChatComponent } from './footer-slideout-end-chat.component';

describe('FooterSlideoutEndChatComponent', () => {
  let component: FooterSlideoutEndChatComponent;
  let fixture: ComponentFixture<FooterSlideoutEndChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSlideoutEndChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSlideoutEndChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
