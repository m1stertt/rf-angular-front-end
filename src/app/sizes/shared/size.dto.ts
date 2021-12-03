import { ProductDto } from "src/app/products/shared/product.dto";

export interface SizeDto {
  id: number;
  title: string;
  products: ProductDto[];
}
