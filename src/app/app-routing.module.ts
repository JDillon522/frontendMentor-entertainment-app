import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';

const routes: Routes = [
  {
    component: KitchenSinkComponent,
    path: 'kitchen-sink'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'tv-series',
    loadChildren: () => import('./pages/tv-shows/tv-shows.module').then(m => m.TvShowsModule)
  },
  {
    path: 'bookmarked',
    loadChildren: () => import('./pages/bookmarked/bookmarked.module').then(m => m.BookmarkedModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
