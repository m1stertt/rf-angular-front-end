import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImagesUploadComponent } from './admin-images-upload.component';

describe('AdminImagesUploadComponent', () => {
  let component: AdminImagesUploadComponent;
  let fixture: ComponentFixture<AdminImagesUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImagesUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImagesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
