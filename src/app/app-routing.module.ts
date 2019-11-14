import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesForecastComponent } from 'src/app/components/sales-forecast/sales-forecast.component'
import { AboutComponent } from 'src/app/components/about/about.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SalesForecastComponent },
  { path: 'about', component : AboutComponent },
  {path: 'page-Not-Found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'page-Not-Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
