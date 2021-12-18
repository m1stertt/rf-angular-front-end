import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductInventoryStockViewComponent } from './admin-product-inventory-stock-view.component';

describe('AdminProductInventoryStockViewComponent', () => {
  let component: AdminProductInventoryStockViewComponent;
  let fixture: ComponentFixture<AdminProductInventoryStockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductInventoryStockViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductInventoryStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
