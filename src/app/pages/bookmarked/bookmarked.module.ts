import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookmarkedComponent } from './bookmarked.component';
import { SearchFieldModule } from '../../shared/components/search-field/search-field.module';
import { MediaContainerModule } from '../../shared/components/media-container/media-container.module';



@NgModule({
  declarations: [
    BookmarkedComponent
  ],
  imports: [
    CommonModule,
    SearchFieldModule,
    MediaContainerModule,
    RouterModule.forChild([
      {
        component: BookmarkedComponent,
        path: ''
      }
    ])
  ]
})
export class BookmarkedModule { }
