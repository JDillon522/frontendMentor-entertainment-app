import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookmarkedComponent } from './bookmarked.component';



@NgModule({
  declarations: [
    BookmarkedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: BookmarkedComponent,
        path: ''
      }
    ])
  ]
})
export class BookmarkedModule { }
