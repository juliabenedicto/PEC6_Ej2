import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { Wine } from "src/app/models/wine";
import { wineNameValidator } from "src/app/validators/wine-name.validator";
import { WineService } from "src/app/services/wine.service";

@Component({
  selector: "app-wine-new",
  templateUrl: "./wine-new.component.html",
  styleUrls: ["./wine-new.component.css"]
})
export class WineNewComponent {
  public message = "";

  public wineForm: FormGroup;

  constructor (private wineService: WineService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ["", [Validators.required, wineNameValidator()]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ["", [Validators.required]],
      isOnSale: false
    });
  }

  //Eliminado para permitir url interna: Validators.pattern("^http(s?)://[a-zA-Z0-9-.]+[a-zA-Z]{2,3}/(/S*)?$")

  createWine() {
    if (this.wineForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const wine: Wine = this.wineForm.value;
      this.wineService.create(wine)
    }
  }
  onSubmit() {
    console.log('Wine Form Value', this.wineForm.value);
  }

}
