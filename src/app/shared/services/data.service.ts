import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { data, IData } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public trending: BehaviorSubject<IData[]> = new BehaviorSubject<IData[]>([]);
  public movies: BehaviorSubject<IData[]> = new BehaviorSubject<IData[]>([]);
  public tvShows: BehaviorSubject<IData[]> = new BehaviorSubject<IData[]>([]);
  public bookmarked: BehaviorSubject<IData[]> = new BehaviorSubject<IData[]>([]);

  constructor() {
    this.filterData();
  }

  private filterData(): void {
    const trending: IData[] = [];
    const movies: IData[] = [];
    const tvShows: IData[] = [];
    const bookmarked: IData[] = [];

    data.forEach(item => {
      if (item.isBookmarked) {
        bookmarked.push(item);
      }
      if (item.isTrending) {
        trending.push(item);
      }
      if (item.category === 'Movie') {
        movies.push(item);
      }
      if (item.category === 'TV Series') {
        tvShows.push(item);
      }
    });

    this.trending.next(trending);
    document.documentElement.style.setProperty('--trending-count', trending.length.toString());

    this.movies.next(movies);
    this.tvShows.next(tvShows);
    this.bookmarked.next(bookmarked);
  }
}
