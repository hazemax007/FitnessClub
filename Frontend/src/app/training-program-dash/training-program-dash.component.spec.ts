import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgramDASHComponent } from './training-program-dash.component';

describe('TrainingProgramDASHComponent', () => {
  let component: TrainingProgramDASHComponent;
  let fixture: ComponentFixture<TrainingProgramDASHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingProgramDASHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingProgramDASHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
