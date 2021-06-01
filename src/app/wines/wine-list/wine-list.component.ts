import { Component, OnInit } from "@angular/core";
import { Wine } from "src/app/models/wine";
import { WineQuantityChange } from "src/app/models/wine-quantity-change";
import { WineService } from "src/app/services/wine.service";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';


@Component({
  selector: "app-wine-list",
  template: `
  <div>
  <input type="text"
         placeholder="Search wines"
         name="searchBox"
         [(ngModel)]="searchTerm"
         (keyup)="search()"/>
</div>
<app-wine-item [wine]="wine"
                  (quantityChange)="onQuantityChange($event)"
                  *ngFor="let wine of wines$ | async"></app-wine-item>
  `,
  styles: []
})
export class WineListComponent implements OnInit {
  public wines$: Observable<Wine[]>;
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadWinesList
  : Subject<void> = new Subject();

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.wines$ = this.searchSubject
    .startWith(this.searchTerm)
    .debounceTime(300)
    .distinctUntilChanged()
    .merge(this.reloadWinesList)
    .switchMap((query) => this.wineService.getWines(this.searchTerm));
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onQuantityChange(change: WineQuantityChange) {
    this.wineService.changeQuantity(change.wine.id, change.changeInQuantity)
        .subscribe((res) => this.reloadWinesList
        .next());
  }

  onCreate() {
    this.reloadWinesList.next();
  }
}
