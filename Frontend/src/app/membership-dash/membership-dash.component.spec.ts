import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipDASHComponent } from './membership-dash.component';

describe('MembershipDASHComponent', () => {
  let component: MembershipDASHComponent;
  let fixture: ComponentFixture<MembershipDASHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipDASHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipDASHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
