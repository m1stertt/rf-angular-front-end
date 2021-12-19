import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColorsOverviewComponent } from './admin-colors-overview.component';

describe('AdminColorsOverviewComponent', () => {
  let component: AdminColorsOverviewComponent;
  let fixture: ComponentFixture<AdminColorsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminColorsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminColorsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
