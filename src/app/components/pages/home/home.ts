import { Component, Renderer2 } from '@angular/core';
import { ExerciseService } from '../../../services/exercise';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Slogan } from "./slogan/slogan";
import { Description } from "./description/description";
import { ContactForm } from "./contact-form/contact-form";
import { filter } from 'rxjs';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule, Slogan, Description, ContactForm],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class HomeComponent {
  categories: string[] = [];
  randomExercise: any;

constructor(private route: ActivatedRoute) {}
ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
