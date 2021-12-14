import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ColorDto} from "../../colors/shared/color.dto";
import {ProductDto} from "../../products/shared/product.dto";

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent implements OnInit, AfterViewInit {
  @Output() loaded = new EventEmitter();
  // colorFormGroup: FormGroup;

  // colorsData: ColorDto[] = [
  //   {id: 1, title: 'red', colorString: 'red', disabled: false, selected: false, products: []},
  //   {id: 2, title: 'blue', colorString: 'blue', disabled: false, selected: false, products: []},
  //   {id: 3, title: 'red', colorString: 'red', disabled: false, selected: false, products: []},
  //   {id: 4, title: 'red', colorString: 'red', disabled: false, selected: false, products: []},
  // ];


  // constructor(fb: FormBuilder) {
  //   this.colorFormGroup = fb.group({
  //     colors: []
  //   });
  // }
  toppings: FormGroup;

  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loaded.emit();
  }

}
