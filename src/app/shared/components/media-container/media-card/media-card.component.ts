import { Component, Input, OnInit } from '@angular/core';
import { Breakpoints, IData } from '../../../services/data';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input()
  public data!: IData;

  @Input()
  public trendingCard = false;

  public breakpoints = Breakpoints;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleBookmark(): void {
    this.data.isBookmarked = !this.data.isBookmarked;
  }
}
