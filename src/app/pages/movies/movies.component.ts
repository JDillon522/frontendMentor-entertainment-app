import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMedia } from '../../shared/services/data';
import { DataService, filterMediaStream } from '../../shared/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent  {
  private searchString$$ = new BehaviorSubject<string>('');
  public searchString$ = this.searchString$$.asObservable();

  public filteredMovies: Observable<IMedia[]> = filterMediaStream(
    this.searchString$,
    this.dataService.movies$
  );


  constructor(private dataService: DataService) { }

  public updateSearchString(term: string) {
    this.searchString$$.next(term);
  }
}
