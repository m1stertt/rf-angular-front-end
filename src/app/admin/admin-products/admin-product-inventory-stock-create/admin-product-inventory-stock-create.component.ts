import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { MessageHandlingService } from 'src/app/errorHandling/shared/message-handling.service';
import { InventoryStocksService } from 'src/app/products/shared/inventory-stocks.service';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { SizeDto } from 'src/app/sizes/shared/size.dto';

@Component({
  selector: 'app-admin-product-inventory-stock-create',
  templateUrl: './admin-product-inventory-stock-create.component.html',
  styleUrls: ['./admin-product-inventory-stock-create.component.scss']
})
export class AdminProductInventoryStockCreateComponent implements OnInit {
  product:ProductDto|undefined;
  amount:number=0;
  color:ColorDto|undefined;
  size:SizeDto|undefined;
  colors: ColorDto[]=[];
  sizes: SizeDto[]=[];
  constructor(private messageHandlingService:MessageHandlingService,
    private inventoryStockService:InventoryStocksService,
    private config: DynamicDialogConfig,
    private ref:DynamicDialogRef) { 
      this.product=this.config.data.product;
    }

  ngOnInit(): void {
    console.log(this.product);
  }


  createInventoryStock(){
    if(!this.product) return this.messageHandlingService.error("Der er et problem med at indhente produktet.");
    if(this.amount<=0) return this.messageHandlingService.invalid("Mængden burde være mere end 0.");
    this.inventoryStockService.create({id:0,product:this.product,color:this.color,size:this.size,amount:this.amount}).subscribe((result)=>{
      if(result){
        this.product?.inventoryStocks.push(result);
        this.messageHandlingService.success("Inventar forhold er nu lavet. Inventar Id: "+result.id);
        this.ref.close();
      }else{
        this.messageHandlingService.error("Fejl med at indsætte inventar i databasen...");
      }
    },error=>this.messageHandlingService.error(error.statusText));
  }
}
