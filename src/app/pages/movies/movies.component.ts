import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IMedia } from '../../shared/services/data';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements  OnInit {
  public movies: Observable<IMedia[]> = new Observable<IMedia[]>();
  public filteredMovies: Observable<IMedia[]> = new Observable<IMedia[]>();

  public searchString = new BehaviorSubject<string>('');

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.movies = this.dataService.movies$;
    this.filteredMovies = this.dataService.filterMediaStream(this.searchString, this.movies);
  }

}
