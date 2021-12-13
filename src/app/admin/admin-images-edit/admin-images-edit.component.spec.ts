import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImagesEditComponent } from './admin-images-edit.component';

describe('AdminImagesEditComponent', () => {
  let component: AdminImagesEditComponent;
  let fixture: ComponentFixture<AdminImagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImagesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
