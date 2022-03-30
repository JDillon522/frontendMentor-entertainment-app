import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { combineLatest, combineLatestAll, combineLatestWith, debounceTime, distinctUntilChanged, map, Observable, Subject, Subscription, withLatestFrom } from 'rxjs';
import { IMedia } from '../../services/data';

@Component({
  selector: 'app-search-field',
  template: `
    <div class="search-field">
      <img src="./assets/icon-search.svg" alt="">
      <input
        type="text"
        name="search"
        [(ngModel)]="search"
        (ngModelChange)="updateSearch($event)"
        [placeholder]="placeholder">
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

  @Input()
  public search: string = '';

  @Input()
  public placeholder: string = 'Search for movies or TV series';

  @Output()
  public searchChanged = new EventEmitter<string>();

  constructor() { }

  public updateSearch(term: string) {
    this.searchChanged.next(term);
  }
}


