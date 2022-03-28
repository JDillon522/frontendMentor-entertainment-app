import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SearchFieldModule } from '../../shared/components/search-field/search-field.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaContainerModule } from '../../shared/components/media-container/media-container.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: HomeComponent,
        path: ''
      }
    ]),
    SearchFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MediaContainerModule
  ]
})
export class HomeModule { }
