import { Component} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Slogan } from "./slogan/slogan";
import { Description } from "./description/description";
import { ContactForm } from "./contact-form/contact-form";
import { SharedModule } from '../../../shared/shared-module';

@Component({
    selector: 'app-home',
    imports: [SharedModule, RouterModule, Slogan, Description, ContactForm],
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
