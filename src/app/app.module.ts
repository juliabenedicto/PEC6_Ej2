import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WineItemComponent } from "./wines/wine-item/wine-item.component";
import { WineListComponent } from "./wines/wine-list/wine-list.component";
import { WineNewComponent } from "./wines/wine-new/wine-new.component";
import { WineService } from "./services/wine.service";


@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [WineService, {provide: LOCALE_ID,
    useValue:'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
