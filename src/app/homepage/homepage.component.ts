import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../products/shared/product.dto';
import { ProductsService } from '../products/shared/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  responsiveOptions =[
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];
  products:ProductDto[] =[];
  constructor(private productService:ProductsService) {
    this.productService.getFeatured().subscribe(e=>{
      this.products=e;
    });

   }

  ngOnInit(): void {
  }

}