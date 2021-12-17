import { ColorDto } from "src/app/colors/shared/color.dto";
import { SizeDto } from "src/app/sizes/shared/size.dto";
import { ProductDto } from "./product.dto";

export interface InventoryStockDto {
  id: number;
  product: ProductDto;
  Color: ColorDto;
  Size: SizeDto;
  amount:number;
}