import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxAllComponent } from './inbox-all.component';

describe('InboxAllComponent', () => {
  let component: InboxAllComponent;
  let fixture: ComponentFixture<InboxAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
