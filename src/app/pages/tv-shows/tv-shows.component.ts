import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMedia } from '../../shared/services/data';
import { DataService, filterMediaStream } from '../../shared/services/data.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent {
  private searchString$$ = new BehaviorSubject<string>('');
  public searchString$ = this.searchString$$.asObservable();

  public filteredTVSeries: Observable<IMedia[]> = filterMediaStream(
    this.searchString$,
    this.dataService.tvShows$
  );


  constructor(private dataService: DataService) { }

  public updateSearchString(term: string) {
    this.searchString$$.next(term);
  }
}
