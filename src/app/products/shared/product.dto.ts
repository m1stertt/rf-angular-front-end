import { CategoryDto } from "src/app/categories/shared/category.dto";

export interface ProductDto {
  id: number;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  categories: CategoryDto[];
}
