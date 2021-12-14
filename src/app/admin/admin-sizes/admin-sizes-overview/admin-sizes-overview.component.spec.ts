import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSizesOverviewComponent } from './admin-sizes-overview.component';

describe('AdminSizesOverviewComponent', () => {
  let component: AdminSizesOverviewComponent;
  let fixture: ComponentFixture<AdminSizesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSizesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSizesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
