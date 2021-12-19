import { ProductDto } from "src/app/products/shared/product.dto";

export interface CategoryDto {
  id: number;
  name: string;
  products: ProductDto[];
}
