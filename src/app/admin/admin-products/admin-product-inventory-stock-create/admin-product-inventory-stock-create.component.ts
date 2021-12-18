import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { ColorsService } from 'src/app/colors/shared/colors.service';
import { ErrorHandlingMessageService } from 'src/app/errorHandling/shared/error-handling-message.service';
import { InventoryStocksService } from 'src/app/products/shared/inventory-stocks.service';
import { InventoryStockDto } from 'src/app/products/shared/inventoryStock.dto';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { SizesService } from 'src/app/sizes/shared/sizes.service';

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
  constructor(private errorHandlingMessageService:ErrorHandlingMessageService,private inventoryStockService:InventoryStocksService,private config: DynamicDialogConfig,private colorsService:ColorsService,private sizesService:SizesService) { }

  ngOnInit(): void {
    this.product=this.config.data.product;
    console.log(this.product);
  }


  createInventoryStock(){
    if(!this.product) return this.errorHandlingMessageService.error("Der er et problem med at indhente produktet.");
    if(this.amount<=0) return this.errorHandlingMessageService.error("Mængden burde være mere end 0.");
    //if(color==undefined&&size==undefined) return this.errorHandlingMessageService.error("Du skal vælge mindst en farve eller størrelse.");
    this.inventoryStockService.create({id:0,product:this.product,color:this.color,size:this.size,amount:this.amount}).subscribe((result)=>{
      if(result){
        this.product?.inventoryStocks.push(result);
        this.errorHandlingMessageService.success("Inventar forhold er nu lavet. Inventar Id: "+result.id);
      }else{
        this.errorHandlingMessageService.error("Fejl med at indsætte inventar i databasen...");
      }
    },this.errorHandlingMessageService.error);
  }
}
