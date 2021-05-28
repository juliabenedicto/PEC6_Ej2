import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { WineItemComponent } from "./wines/wine-item/wine-item.component";
import { WineListComponent } from "./wines/wine-list/wine-list.component";
import { WineNewComponent } from "./wines/wine-new/wine-new.component";

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
