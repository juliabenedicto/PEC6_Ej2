import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Component } from "@angular/core";
import { Wine } from "src/app/models/wine";
import { wineNameValidator } from "src/app/validators/wine-name.validator";

@Component({
  selector: "app-wine-new",
  templateUrl: "./wine-new.component.html",
  styleUrls: ["./wine-new.component.css"]
})
export class WineNewComponent {
  public message = "";

  public wineForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ["", [Validators.required, wineNameValidator()]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [
        "",
        [
          Validators.required,
          Validators.pattern("^http(s?)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(/S*)?$")
        ]
      ],
      isOnSale: false
    });
  }

  createWine() {
    if (this.wineForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const wine: Wine = this.wineForm.value;
      console.log("Creating wine", wine);
    }
  }
}
