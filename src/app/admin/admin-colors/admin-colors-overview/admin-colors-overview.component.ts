import { Component, OnInit } from '@angular/core';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { ColorsService } from 'src/app/colors/shared/colors.service';
import { MenuService } from 'src/app/menu/shared/menu.service';

@Component({
  selector: 'app-admin-colors-overview',
  templateUrl: './admin-colors-overview.component.html',
  styleUrls: ['./admin-colors-overview.component.scss']
})
export class AdminColorsOverviewComponent implements OnInit {

  constructor(private menuService:MenuService,private colorsService:ColorsService) { }

  cats:ColorDto[]=[];
  cols = [
    { field: 'id', header: 'ID' },
    //{ field: 'colorString', header: ""},
    { field: 'title', header: 'Name' },
    { field: 'products', header:'Produkter'}
    //{ field: 'productPrice', header: 'Price' },
    //{ field: 'quantity', header: 'Quantity' }
  ];
  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
      {label:'Kategorier',routerLink:"/admin/categories"}
    ];
    this.colorsService.getAll().subscribe(e=>{
      console.log(e);
      this.cats=e;
    })
  }

}
