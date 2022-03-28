import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map, Observable, ReplaySubject } from 'rxjs';
import { Category, data, IMedia as IMedia } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allData: IMedia[] = data;
  private trending: IMedia[] = [];
  private movies: IMedia[] = [];
  private tvShows: IMedia[] = [];
  private bookmarkedMovies: IMedia[] = [];
  private bookmarkedTvShows: IMedia[] = [];

  public trending$: BehaviorSubject<IMedia[]> = new BehaviorSubject<IMedia[]>([]);
  public movies$: BehaviorSubject<IMedia[]> = new BehaviorSubject<IMedia[]>([]);
  public tvShows$: BehaviorSubject<IMedia[]> = new BehaviorSubject<IMedia[]>([]);

  public bookmarkedMovies$: BehaviorSubject<IMedia[]> = new BehaviorSubject<IMedia[]>([]);
  public bookmarkedTvShows$: BehaviorSubject<IMedia[]> = new BehaviorSubject<IMedia[]>([]);

  public all$: BehaviorSubject<IMedia[]> = new BehaviorSubject<IMedia[]>([]);

  constructor() {
    this.assignData();
  }

  private assignData(): void {
    this.trending = [];
    this.movies = [];
    this.tvShows = [];
    this.bookmarkedMovies = [];
    this.bookmarkedTvShows = [];

    this.allData.forEach(item => {
      if (item.isBookmarked && item.category === 'Movie') {
        this.bookmarkedMovies.push(item);
      }
      if (item.isBookmarked && item.category === 'TV Series') {
        this.bookmarkedTvShows.push(item);
      }
      if (item.isTrending) {
        this.trending.push(item);
      }
      if (item.category === 'Movie') {
        this.movies.push(item);
      }
      if (item.category === 'TV Series') {
        this.tvShows.push(item);
      }
    });

    this.trending$.next(this.trending);
    // --trending-count is used to set the number of grid columns
    document.documentElement.style.setProperty('--trending-count', this.trending.length.toString());

    this.movies$.next(this.movies);
    this.tvShows$.next(this.tvShows);
    this.bookmarkedMovies$.next(this.bookmarkedMovies);
    this.bookmarkedTvShows$.next(this.bookmarkedTvShows);
    this.all$.next(data);
  }

  public updateBookmark(media: IMedia) {
    const index = this.allData.findIndex(catMedia => catMedia.title === media.title);
    this.allData[index] = media;

    this.assignData();
  }

  public filterMediaStream = (searchString: Observable<string>, mediaStream: Observable<IMedia[]>) => {
    return combineLatest([searchString, mediaStream])
      .pipe(
        distinctUntilChanged(),
        map(([search, allMedia]: [string, IMedia[]]) => {
          if (!search) {
            return allMedia;
          }

          return allMedia.filter(media => {
            return new RegExp(search.toLocaleLowerCase()).test(media.title.toLocaleLowerCase())
          });
        })
      );
  }
}
