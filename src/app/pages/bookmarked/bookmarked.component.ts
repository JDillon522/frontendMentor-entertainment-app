import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMedia } from '../../shared/services/data';
import { DataService, filterMediaStream } from '../../shared/services/data.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss']
})
export class BookmarkedComponent {
  private searchString$$ = new BehaviorSubject<string>('');
  public searchString$ = this.searchString$$.asObservable();

  public filteredTVSeries$: Observable<IMedia[]> = filterMediaStream(
    this.searchString$,
    this.dataService.bookmarkedTvShows$
  );

  public filteredMovies$: Observable<IMedia[]> = filterMediaStream(
    this.searchString$,
    this.dataService.bookmarkedMovies$
  );

  constructor(private dataService: DataService) { }

  public updateSearchString(term: string) {
    this.searchString$$.next(term);
  }
}

