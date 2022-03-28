import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './tv-shows.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TvShowsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: TvShowsComponent,
        path: ''
      }
    ])
  ]
})
export class TvShowsModule { }
