import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './tv-shows.component';
import { RouterModule } from '@angular/router';
import { SearchFieldModule } from '../../shared/components/search-field/search-field.module';
import { MediaContainerModule } from '../../shared/components/media-container/media-container.module';



@NgModule({
  declarations: [
    TvShowsComponent
  ],
  imports: [
    CommonModule,
    SearchFieldModule,
    MediaContainerModule,
    RouterModule.forChild([
      {
        component: TvShowsComponent,
        path: ''
      }
    ])
  ]
})
export class TvShowsModule { }
