import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: MoviesComponent,
        path: ''
      }
    ])
  ]
})
export class MoviesModule { }
