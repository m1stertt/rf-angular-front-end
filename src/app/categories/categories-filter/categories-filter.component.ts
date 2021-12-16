import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ColorDto} from "../../colors/shared/color.dto";
import {ProductDto} from "../../products/shared/product.dto";
import {ColorsService} from "../../colors/shared/colors.service";

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent implements OnInit, AfterViewInit {
  @Output() loaded = new EventEmitter();
  @Output() color = new EventEmitter<string>();

  colorsData?: ColorDto[];
  colors: FormGroup;

  constructor(private colorService: ColorsService, fb: FormBuilder) {
    this.colors = fb.group({})
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loaded.emit();
    this.colorService.getAll().subscribe(value => this.colorsData = value);  }

}
