import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field.component';
import { IMedia } from '../../shared/services/data';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public trending: Observable<IMedia[]> = new Observable<IMedia[]>();
  public all: Observable<IMedia[]> = new Observable<IMedia[]>();
  public filteredAll: Observable<IMedia[]> = new Observable<IMedia[]>();

  public searchString = new BehaviorSubject<string>('');

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.trending = this.dataService.trending$;
    this.all = this.dataService.all$;
    this.filteredAll = this.dataService.filterMediaStream(this.searchString, this.all);
  }
}
