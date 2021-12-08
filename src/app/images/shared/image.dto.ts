import { CategoryDto } from "src/app/categories/shared/category.dto";
import { ColorDto } from "src/app/colors/shared/color.dto";
import { SizeDto } from "src/app/sizes/shared/size.dto";

export interface ImageDto {
  id: number;
  title: String;
  path: String;
}