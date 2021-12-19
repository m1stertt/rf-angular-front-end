import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ColorDto} from "../../colors/shared/color.dto";
import {ColorsService} from "../../colors/shared/colors.service";

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent implements OnInit, AfterViewInit {
  @Output() color = new EventEmitter<number[]>();

  colorsData!: ColorDto[];
  formGroup: FormGroup;

  constructor(private colorService: ColorsService, fb: FormBuilder) {
    this.formGroup = fb.group({colors: new FormArray([])})
  }

  get colorsFormArray() {
    return this.formGroup.controls.colors as FormArray;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.colorService.getAll().subscribe(value => {
      this.colorsData = value;
      this.addColorsToForm();
    });
  }

  private addColorsToForm() {
    this.colorsData.forEach(() => this.colorsFormArray.push(new FormControl(false)));
  }

  onColorChange() {
    const selectedColorIds = this.formGroup.value.colors
      .map((checked: boolean, i: number) => checked ? this.colorsData[i].id : null)
      .filter((id: number) => id !== null);
    this.color.emit(selectedColorIds);
  }
}


