import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDASHComponent } from './product-dash.component';

describe('ProductDASHComponent', () => {
  let component: ProductDASHComponent;
  let fixture: ComponentFixture<ProductDASHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDASHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDASHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
