import { ColorDto } from "src/app/colors/shared/color.dto";
import { ImageDto } from "src/app/images/shared/image.dto";
import { SizeDto } from "src/app/sizes/shared/size.dto";

export interface CartItemDto {
  id: number;
  amount: number;
  name?:String;
  price?:number;
  color?: ColorDto;
  size?: SizeDto;
  image?: ImageDto;
}