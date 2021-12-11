import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../categories/shared/categories.service';
import {CategoryDto} from '../categories/shared/category.dto';
import {AppComponent} from 'src/app/app.component';
import {ActivatedRoute, Router} from "@angular/router";
import { CartService } from '../cart/shared/cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
    console.log(this.cartService.getItems());
  }

  search() {
    this.goProducts();
  }

  cartAmount(){
    let length=this.cartService.getItems().length;
    return this.cartService.getItems().length || "";
  }

  goProducts() {
    this.router.navigate(
      ['/products/gridview'],
      {queryParams: {searchString: this.searchString}}
    );
  }
}
