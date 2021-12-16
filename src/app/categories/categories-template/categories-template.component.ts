import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-categories-template',
  templateUrl: './categories-template.component.html',
  styleUrls: ['./categories-template.component.scss']
})
export class CategoriesTemplateComponent implements OnInit {
  @Output() color = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onColorsChanged(colors: number[]) {
    this.color.emit(colors);
  }
}
