import { ProductDto } from "src/app/products/shared/product.dto";

export interface ColorDto {
  id: number;
  title: string;
  selected: boolean;
  disabled: boolean;
  colorString: string;
  products: ProductDto[];

}
