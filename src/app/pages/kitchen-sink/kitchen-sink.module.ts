import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldModule } from '../../shared/components/form-field/form-field.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { SearchFieldModule } from '../../shared/components/search-field/search-field.module';



@NgModule({
  declarations: [
    KitchenSinkComponent
  ],
  imports: [
    CommonModule,
    FormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SearchFieldModule
  ],
  exports: [
    KitchenSinkComponent
  ]
})
export class KitchenSinkModule { }
