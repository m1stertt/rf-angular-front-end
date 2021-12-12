import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidepanel',
  templateUrl: './admin-sidepanel.component.html',
  styleUrls: ['./admin-sidepanel.component.scss']
})
export class AdminSidepanelComponent implements OnInit {
  items = [
    {
      label: 'Brugere',
      icon: 'pi pi-pw pi-user',
      items: [
        { label: 'Ny bruger', icon: 'pi pi-fw pi-user-plus' },
        {label: 'Se/Rediger brugere', icon: 'pi pi-fw pi-users'}
      ]
    },
    {
      label: 'Ordre',
      icon: 'pi pi-pw pi-clone',
      items: [
        { label: 'Ny ordre', icon: 'pi pi-fw pi-plus' },
        {label: 'Se/Rediger ordre', icon: 'pi pi-fw pi-pencil'}
      ]
    },
      {
        label: 'Produkter',
        icon: 'pi pi-pw pi-file',
        items: [
          { label: 'Nyt produkt', icon: 'pi pi-fw pi-plus',routerLink:"/admin/products/create" },
          {label: 'Se/Rediger produkter', icon: 'pi pi-fw pi-pencil'}
        ]
    },{
      label: 'Kategorier',
      icon: 'pi pi-pw pi-tags',
      items: [
        { label: 'Ny kategory', icon: 'pi pi-fw pi-plus' },
        {label: 'Se/Rediger kategorier', icon: 'pi pi-fw pi-pencil'}
      ]
    },{
      label: 'Billeder',
      icon: 'pi pi-pw pi-image',
      items: [
        { label: 'Nyt billede', icon: 'pi pi-fw pi-plus' },
        {label: 'Se/Rediger billeder', icon: 'pi pi-fw pi-pencil'}
      ]
    },{
      label: 'Størrelser',
      icon: 'pi pi-pw pi-sort-amount-up',
      items: [
        { label: 'Ny størrelse', icon: 'pi pi-fw pi-plus' },
        {label: 'Se/Rediger størrelser', icon: 'pi pi-fw pi-pencil'}
      ]
    },{
      label: 'Farver',
      icon: 'pi pi-pw pi-sliders-v',
      items: [
        { label: 'Ny farve', icon: 'pi pi-fw pi-plus' },
        {label: 'Se/Rediger farver', icon: 'pi pi-fw pi-pencil'}
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
