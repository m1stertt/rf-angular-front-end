import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../shared/categories.service';
import {CategoryDto} from '../shared/category.dto';
import {Router} from "@angular/router";
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: CategoryDto[]=[];

  constructor(private _categoryService: CategoriesService,
              private router: Router,private appComponent:AppComponent) {
  }

  ngOnInit(): void {
    this.updateList()
  }

  updateList(): void {
    this._categoryService.getAll()
      // Not until this is called the request is sent
      .subscribe(categories => {
        this.categories = categories;
      });
  }
}
