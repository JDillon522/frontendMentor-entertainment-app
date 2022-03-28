import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, take } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IData } from '../../shared/services/data';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent implements OnInit {

  public trending: Observable<IData[]> = new Observable<IData[]>();
  public bookMarked: Observable<IData[]> = new Observable<IData[]>();
  public movies: Observable<IData[]> = new Observable<IData[]>();

  public dummyForm: FormGroup = new FormGroup({
    basic: new FormControl(),
    error: new FormControl(null, Validators.required),
    search: new FormControl()
  })

  get search(): FormControl {
    return this.dummyForm.get('search') as FormControl;
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dummyForm.get('error')?.markAsDirty();

    this.trending = this.dataService.trending;
    this.bookMarked = this.dataService.bookmarked.pipe(map(media => media.slice(0, 3)));
    this.movies = this.dataService.movies.pipe(map(media => media.slice(0, 5)));

  }

}
