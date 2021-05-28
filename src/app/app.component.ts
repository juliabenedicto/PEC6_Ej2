import { Component } from "@angular/core";
import { Wine } from "./models/wine";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pizzeria";
  wine: Wine = {} as Wine;
  onNew(wine: Wine) {}
}
