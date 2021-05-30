import {
  OnInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

import { Wine } from "../../models/wine";
import { WineQuantityChange } from "../../models/wine-quantity-change";

@Component({
  selector: "app-wine-item",
  templateUrl: "./wine-item.component.html",
  styleUrls: ["./wine-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineItemComponent {
  @Input() public wine: Wine;
  @Output() public quantityChange: EventEmitter<
    WineQuantityChange
  > = new EventEmitter();

  constructor() {}

  incrementInCart() {
    this.quantityChange.emit({ wine: this.wine, changeInQuantity: 1 });
  }

  decrementInCart() {
    if (this.wine.quantityInCart > 0) {
      this.quantityChange.emit({ wine: this.wine, changeInQuantity: -1 });
    }
  }
}
