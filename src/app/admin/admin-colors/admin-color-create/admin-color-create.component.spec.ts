import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColorCreateComponent } from './admin-color-create.component';

describe('AdminColorCreateComponent', () => {
  let component: AdminColorCreateComponent;
  let fixture: ComponentFixture<AdminColorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminColorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminColorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
