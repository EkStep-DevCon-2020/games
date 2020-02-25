import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
   {
  path: 'home', component: HomeComponent, data: {
  },
},
{
  path: 'landing', component: LandingComponent, data: {
  },
},
{
  path: 'end', component: EndComponent, data: {
  },
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
