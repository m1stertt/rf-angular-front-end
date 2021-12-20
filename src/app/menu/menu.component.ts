import {Component, OnInit} from '@angular/core';
import {CategoryDto} from '../categories/shared/category.dto';
import {AppComponent} from 'src/app/app.component';
import {ActivatedRoute, Router} from "@angular/router";
import { CartService } from '../cart/shared/cart.service';
import { MenuService } from './shared/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(public appComponent: AppComponent, private router: Router, private route: ActivatedRoute,
    private cartService: CartService,public menuService:MenuService) {
  }

  categories: CategoryDto[] = [];
  search: string = '';


  ngOnInit(): void {
    this.menuService.categories.subscribe(categories=>{
      this.categories=categories;
    });

    this.route.queryParams
      .subscribe(params => {
        this.search = params.search || '';
      });
  }

  searchFx() {
    this.goProducts();
  }

  cartAmount(){
    return this.cartService.getAmount() || "";
  }

  goProducts() {
    this.router.navigate(
      ['/products'],
      {queryParams: {search: this.search}}
    );
  }
}
