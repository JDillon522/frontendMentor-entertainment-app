import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaContainerComponent } from './media-container.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MediaCardComponent,
    MediaContainerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MediaContainerComponent
  ]
})
export class MediaContainerModule { }
