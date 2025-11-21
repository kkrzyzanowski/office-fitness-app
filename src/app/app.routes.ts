import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { Achievements } from './components/pages/achievements/achievements';
import { Gallery } from './components/pages/gallery/gallery';
import { AboutMe} from './components/pages/about-me/about-me';
import { BookTraining } from './components/pages/book-training/book-training';
import { Transformations } from './components/pages/transformations/transformations';
import { Contact } from './components/pages/contact/contact';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'achievements', component: Achievements },
    { path: 'gallery', component: Gallery },
    { path: 'about-me', component: AboutMe },
    { path: 'book-training', component: BookTraining },
    { path: 'transformations', component: Transformations }
];