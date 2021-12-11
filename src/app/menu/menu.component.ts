import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../categories/shared/categories.service';
import {CategoryDto} from '../categories/shared/category.dto';
import {AppComponent} from 'src/app/app.component';
import {ActivatedRoute, Router} from "@angular/router";
import { CartService } from '../cart/shared/cart.service';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public breadcrumb: MenuItem[] = [
    {icon:'pi pi-home',routerLink:"/"},
    {label:'Kategori/Søgning',routerLink:"/"},
    {label:'Vare',routerLink:"/"}
  ];

  constructor(private categoryService: CategoriesService, public appComponent: AppComponent, private router: Router, private route: ActivatedRoute,
    private cartService: CartService) {
  }

  categories: CategoryDto[] = [];
  searchString: string = '';

  ngOnInit(): void {
    this.categoryService.getAll()
      // Not until this is called the request is sent
      .subscribe(categories => {
        this.categories = categories;
      });

    this.route.queryParams
      .subscribe(params => {
        this.searchString = params.searchString || '';
      });
  }

  search() {
    this.goProducts();
  }

  cartAmount(){
    return this.cartService.getAmount() || "";
  }

  goProducts() {
    this.router.navigate(
      ['/products/gridview'],
      {queryParams: {searchString: this.searchString}}
    );
  }
}
