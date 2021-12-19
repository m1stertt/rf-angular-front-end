import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductImagesEditComponent } from './admin-product-images-edit.component';

describe('AdminProductImagesEditComponent', () => {
  let component: AdminProductImagesEditComponent;
  let fixture: ComponentFixture<AdminProductImagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductImagesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductImagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
