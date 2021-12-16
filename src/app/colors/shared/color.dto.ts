import { ProductDto } from "src/app/products/shared/product.dto";

export interface ColorDto {
  id: number;
  title: string;
  colorString: string;
  products: ProductDto[];

}
