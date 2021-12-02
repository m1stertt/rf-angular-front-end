import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/shared/categories.service';
import {CategoryDto} from '../categories/shared/category.dto';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private categoryService: CategoriesService,public appComponent: AppComponent) { }
  categories: CategoryDto[]=[];
  ngOnInit(): void {
    this.categoryService.getAll()
      // Not until this is called the request is sent
      .subscribe(categories => {
        this.categories = categories;
      });
  }
}
