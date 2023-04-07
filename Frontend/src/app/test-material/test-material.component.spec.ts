import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMaterialComponent } from './test-material.component';

describe('TestMaterialComponent', () => {
  let component: TestMaterialComponent;
  let fixture: ComponentFixture<TestMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
