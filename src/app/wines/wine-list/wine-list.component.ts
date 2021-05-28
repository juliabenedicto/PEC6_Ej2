import { Component, OnInit } from "@angular/core";

import { Wine } from "src/app/models/wine";
import { WineQuantityChange } from "src/app/models/wine-quantity-change";

@Component({
  selector: "app-wine-list",
  template: `
    <app-wine-item
      [wine]="wine"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let wine of wines"
    ></app-wine-item>
  `,
  styles: []
})
export class WineListComponent implements OnInit {
  public wines: Wine[];
  constructor() {}

  ngOnInit() {
    this.wines = [
      {
        id: 1,
        name: "Domaine de la Butte La Pied de la Butte",
        imageUrl: "assets/images/wine1.jpg",
        price: 19.95,
        foodPairing: [
          {
            name: "Embutidos",
            glutten: false,
            kcal: 600,
            vegan: false
          },
          {
            name: "Patés",
            glutten: false,
            kcal: 200,
            vegan: false
          }
        ],
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 2,
        name: "Lolo",
        imageUrl: "assets/images/wine2.jpg",
        price: 6.15,
        foodPairing: [
          {
            name: "Arroces caldosos",
            glutten: true,
            kcal: 455,
            vegan: true
          },
          {
            name: "Arroces de pescado",
            glutten: true,
            kcal: 564,
            vegan: false
          }
        ],
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 3,
        name: "Pago de Carraovejas",
        imageUrl: "assets/images/wine3.jpg",
        price: 31.9,
        foodPairing: [
          {
            name: "Carnes rojas asadas",
            glutten: false,
            kcal: 532,
            vegan: false
          },
          {
            name: "Quesos curados",
            glutten: false,
            kcal: 330,
            vegan: true
          }
        ],
        isOnSale: false,
        quantityInCart: 0
      }
    ];
  }
  onQuantityChange(change: WineQuantityChange) {
    const wine = this.wines.find(({ id }) => change.wine.id === id);
    wine.quantityInCart += change.changeInQuantity;
  }
}
