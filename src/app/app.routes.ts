import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ExercisesComponent } from './pages/exercises/exercises';
import { StatsComponent } from './pages/stats/stats';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'exercises/:category', component: ExercisesComponent },
    { path: 'stats', component: StatsComponent },
];