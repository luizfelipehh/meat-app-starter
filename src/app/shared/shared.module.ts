import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RaitingComponent } from "./raiting/raiting.component";

@NgModule({
    declarations: [InputComponent, RadioComponent, RaitingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, 
              RaitingComponent, CommonModule,
            FormsModule, ReactiveFormsModule]
})
export class SharedModule{}