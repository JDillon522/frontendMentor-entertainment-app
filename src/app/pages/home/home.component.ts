import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field.component';
import { IMedia } from '../../shared/services/data';
import { DataService, filterMediaStream } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  private searchString$$ = new BehaviorSubject<string>('');
  public searchString$ = this.searchString$$.asObservable();

  public trending$: Observable<IMedia[]> = this.dataService.trending$;
  public filteredAll: Observable<IMedia[]> = filterMediaStream(
    this.searchString$,
    this.dataService.data$
  );

  constructor(private dataService: DataService) { }

  public updateSearchString(term: string) {
    this.searchString$$.next(term);
  }
}
