import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, Observable, ReplaySubject, shareReplay, tap } from 'rxjs';
import { Category, data, IMedia as IMedia } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data$$ = new BehaviorSubject<IMedia[]>(data);
  public data$ = this.data$$.asObservable();

  public trending$ = this.data$.pipe(
    map(data => data.filter(x => x.isTrending)),
    tap(trending => {
      document.documentElement.style.setProperty(
        '--trending-count',
        trending.length.toString()
        );
    }),
    shareReplay(1)
  );

  public movies$: Observable<IMedia[]> = this.data$.pipe(
    map(data => data.filter(x => x.category === 'Movie')),
    shareReplay(1)
  );

  public tvShows$: Observable<IMedia[]> = this.data$.pipe(
    map(data => data.filter(x => x.category === 'TV Series')),
    shareReplay(1)
  );

  public bookmarkedMovies$: Observable<IMedia[]> = this.data$.pipe(
    map(data => data.filter(x => x.category === 'Movie' && x.isBookmarked)),
    shareReplay(1)
  )

  public bookmarkedTvShows$: Observable<IMedia[]> = this.data$.pipe(
    map(data => data.filter(x => x.category === 'TV Series' && x.isBookmarked)),
    shareReplay(1)
  );

  constructor() {  }

  public updateBookmark(title: string, isBookmarked: boolean) {
    const data = this.data$$.getValue();
    const updatedData = data.map(x => {
      return x.title === title ? {...x, isBookmarked } : x;
    });
    this.data$$.next(updatedData);
  }
}

export function filterMediaStream(
  searchString: Observable<string>,
  mediaStream: Observable<IMedia[]>
) {
  return combineLatest([searchString, mediaStream])
    .pipe(
      // debounceTime(250),
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
