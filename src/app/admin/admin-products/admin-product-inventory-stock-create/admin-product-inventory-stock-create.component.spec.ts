import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductInventoryStockCreateComponent } from './admin-product-inventory-stock-create.component';

describe('AdminProductInventoryStockCreateComponent', () => {
  let component: AdminProductInventoryStockCreateComponent;
  let fixture: ComponentFixture<AdminProductInventoryStockCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductInventoryStockCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductInventoryStockCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
