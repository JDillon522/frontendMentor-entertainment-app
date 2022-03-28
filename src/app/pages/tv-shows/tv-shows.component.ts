import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMedia } from '../../shared/services/data';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  public tvSeries: Observable<IMedia[]> = new Observable<IMedia[]>();
  public filteredTVSeries: Observable<IMedia[]> = new Observable<IMedia[]>();

  public searchString = new BehaviorSubject<string>('');

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tvSeries = this.dataService.tvShows$;
    this.filteredTVSeries = this.dataService.filterMediaStream(this.searchString, this.tvSeries);
  }
}
