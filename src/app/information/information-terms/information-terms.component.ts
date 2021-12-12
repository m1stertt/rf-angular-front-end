import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/shared/menu.service';

@Component({
  selector: 'app-information-terms',
  templateUrl: './information-terms.component.html',
  styleUrls: ['./information-terms.component.scss']
})
export class InformationTermsComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.breadcrumb=[{icon:'pi pi-home',routerLink:"/"},{label:"Information",routerLink:"/information"},{label:"Handelsbetingelser",routerLink:"/information/terms"}];
  }

}
