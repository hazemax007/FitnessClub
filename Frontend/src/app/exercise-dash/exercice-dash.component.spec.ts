import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceDASHComponent } from './exercice-dash.component';

describe('ExerciceDASHComponent', () => {
  let component: ExerciceDASHComponent;
  let fixture: ComponentFixture<ExerciceDASHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceDASHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceDASHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
