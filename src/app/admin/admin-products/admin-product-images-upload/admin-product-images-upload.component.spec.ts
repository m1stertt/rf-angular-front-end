import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductImagesUploadComponent } from './admin-product-images-upload.component';

describe('AdminImagesUploadComponent', () => {
  let component: AdminProductImagesUploadComponent;
  let fixture: ComponentFixture<AdminProductImagesUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductImagesUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductImagesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
