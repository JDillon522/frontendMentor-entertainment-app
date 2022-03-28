import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MediaContainerModule } from '../../shared/components/media-container/media-container.module';
import { SearchFieldModule } from '../../shared/components/search-field/search-field.module';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MediaContainerModule,
    SearchFieldModule,
    RouterModule.forChild([
      {
        component: MoviesComponent,
        path: ''
      }
    ])
  ]
})
export class MoviesModule { }
