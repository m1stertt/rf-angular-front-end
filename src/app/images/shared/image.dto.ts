import { ProductDto } from "src/app/products/shared/product.dto";

export interface ImageDto {
  id: number;
  title: String;
  desc: String;
  path: String;
  product: ProductDto;
}