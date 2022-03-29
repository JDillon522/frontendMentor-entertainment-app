import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { combineLatest, combineLatestAll, combineLatestWith, debounceTime, distinctUntilChanged, map, Observable, Subject, Subscription, withLatestFrom } from 'rxjs';
import { IMedia } from '../../services/data';

@Component({
  selector: 'app-search-field',
  template: `
    <div class="search-field">
      <img src="./assets/icon-search.svg" alt="">
      <input type="text" [formControl]="search" [placeholder]="placeholder">
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  public search: FormControl = new FormControl();
  private searchSub!: Subscription;

  @Input()
  public searchSubject!: Subject<string>;

  @Input()
  public placeholder: string = 'Search for movies or TV series';

  constructor() {

  }

  ngOnInit(): void {
    this.searchSub = this.search.valueChanges.pipe(
      debounceTime(250)
    ).subscribe(change => {
      this.searchSubject?.next(change)
    });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}


