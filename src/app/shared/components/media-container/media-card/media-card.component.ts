import { Component, Input, OnInit } from '@angular/core';
import { Breakpoints, IMedia } from '../../../services/data';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input()
  public data!: IMedia;

  @Input()
  public trendingCard = false;

  public breakpoints = Breakpoints;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  public toggleBookmark(): void {
    this.data.isBookmarked = !this.data.isBookmarked;

    this.dataService.updateBookmark(this.data);
  }
}
