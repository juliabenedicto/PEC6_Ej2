import { Injectable } from '@angular/core';
import { Wine } from '../models/wine';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


@Injectable(
 { providedIn: 'root'}
 )
export class WineService {

  public wines: Wine[];
  constructor() {

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

  getWines(): Observable<Wine[]> {
    return Observable.of(this.wines);
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<Wine> {
    const wine = this.wines
        .find(wine => wine.id === id);
    wine.quantityInCart += changeInQuantity;
    return Observable.of(wine);
  }

  create(wine: Wine): Observable<any> {
    let wineClone = Object.assign({}, wine);;
    wineClone.id = this.wines.length + 1;
    wineClone.quantityInCart = 0;
    this.wines.push(wineClone);
    return Observable.of(wineClone);
  }

}

