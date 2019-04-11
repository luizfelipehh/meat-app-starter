import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=> RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  //é um metodo quando queremos passar um valor para o componente
  writeValue(obj: any): void{
    this.value = obj
  }

  //metodo que passa valor sempre que o componente mudar
  registerOnChange(fn: any): void{
    this.onChange = fn  
  }
   
  //usuario entrou no componente
  registerOnTouched(fn: any): void{

  }
    
  setDisabledState?(isDisabled: boolean): void {

  }
}
