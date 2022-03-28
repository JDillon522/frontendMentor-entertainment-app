import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMedia } from '../../shared/services/data';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss']
})
export class BookmarkedComponent implements OnInit {
  public movies: Observable<IMedia[]> = new Observable<IMedia[]>();
  public filteredMovies: Observable<IMedia[]> = new Observable<IMedia[]>();
  public tvSeries: Observable<IMedia[]> = new Observable<IMedia[]>();
  public filteredTVSeries: Observable<IMedia[]> = new Observable<IMedia[]>();

  public searchString = new BehaviorSubject<string>('');

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.movies = this.dataService.bookmarkedMovies$;
    this.filteredMovies = this.dataService.filterMediaStream(this.searchString, this.movies);

    this.tvSeries = this.dataService.bookmarkedTvShows$;
    this.filteredTVSeries = this.dataService.filterMediaStream(this.searchString, this.tvSeries);
  }
}
