import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  template: `
    <div class="search-field">
      <img src="/assets/icon-search.svg" alt="">
      <input type="text" [formControl]="control" [placeholder]="placeholder">
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  @Input()
  public control!: FormControl;

  @Input()
  public placeholder: string = 'Search for movies or TV series';

  constructor() { }

  ngOnInit(): void {
  }

}
