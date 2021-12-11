import { CategoryDto } from "src/app/categories/shared/category.dto";
import { ColorDto } from "src/app/colors/shared/color.dto";
import { ImageDto } from "src/app/images/shared/image.dto";
import { SizeDto } from "src/app/sizes/shared/size.dto";

export interface ProductDto {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImageUrl: string;

  
  categories: CategoryDto[];
  colors: ColorDto[];
  sizes: SizeDto[];
  images: ImageDto[];
}