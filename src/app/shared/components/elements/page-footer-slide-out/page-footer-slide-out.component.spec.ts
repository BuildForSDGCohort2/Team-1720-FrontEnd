import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterSlideOutComponent } from './page-footer-slide-out.component';

describe('PageFooterSlideOutComponent', () => {
  let component: PageFooterSlideOutComponent;
  let fixture: ComponentFixture<PageFooterSlideOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFooterSlideOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFooterSlideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
