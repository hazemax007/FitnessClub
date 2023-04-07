import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDASHComponent } from './post-dash.component';

describe('PostDASHComponent', () => {
  let component: PostDASHComponent;
  let fixture: ComponentFixture<PostDASHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDASHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDASHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
