import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';

const routes: Routes = [
  {
    component: KitchenSinkComponent,
    path: 'kitchen-sink'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
