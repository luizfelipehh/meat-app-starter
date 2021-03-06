import { NotificationService } from './messages/notification.service';
import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart-service';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RaitingComponent } from "./raiting/raiting.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations: [InputComponent, RadioComponent, RaitingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, SnackbarComponent, 
              RaitingComponent, CommonModule,
            FormsModule, ReactiveFormsModule]
})
export class SharedModule{
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: SharedModule,
      providers:[ShoppingCartService, RestaurantsService, OrderService, NotificationService]
    }
  }
}