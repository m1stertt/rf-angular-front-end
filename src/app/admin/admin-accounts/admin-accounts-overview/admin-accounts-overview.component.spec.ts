import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountsOverviewComponent } from './admin-accounts-overview.component';

describe('AdminAccountsOverviewComponent', () => {
  let component: AdminAccountsOverviewComponent;
  let fixture: ComponentFixture<AdminAccountsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
