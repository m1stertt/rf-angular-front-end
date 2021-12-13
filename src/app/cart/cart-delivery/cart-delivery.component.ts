import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-delivery',
  templateUrl: './cart-delivery.component.html',
  styleUrls: ['./cart-delivery.component.scss']
})
export class CartDeliveryComponent implements OnInit {

  steps=[
    {label: 'Kurv',routerLink:"/cart"},
    {label: 'Levering'},
    {label: 'Bekræftelse'}
  ];
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  saveData():void{

  }

  userManagementForm = new FormGroup({

    firstName: new FormControl('',
      []),
    lastName: new FormControl('', []),
    email: new FormControl('', []),
    streetAndNumber: new FormControl('', []),
    postalCode: new FormControl('', []),
    city: new FormControl('', []),
    phoneNumber: new FormControl('', []),

  });

}
