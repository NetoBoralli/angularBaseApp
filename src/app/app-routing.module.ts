import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { DashboardComponent } from 'src/app/shared/dashboard/dashboard.component';
import { HeroComponent } from 'src/app/heroes/hero/hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero/:id', component: HeroComponent },


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
