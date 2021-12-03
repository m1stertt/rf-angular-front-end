import { CategoryDto } from "src/app/categories/shared/category.dto";
import { ColorDto } from "src/app/colors/shared/color.dto";
import { SizeDto } from "src/app/sizes/shared/size.dto";

export interface ProductDto {
  id: number;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  categories: CategoryDto[];
  colors: ColorDto[];
  sizes: SizeDto[];
}