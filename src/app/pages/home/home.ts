import { Component } from '@angular/core';
import { ExerciseService } from '../../services/exercise';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class HomeComponent {
  categories: string[] = [];
  randomExercise: any;

  constructor(private exerciseService: ExerciseService, private router: Router) {}

  ngOnInit() {
    this.categories = this.exerciseService.getCategories();
  }

  goToCategory(category: string) {
    this.router.navigate(['/exercises', category]);
  }

  showRandom() {
    this.randomExercise = this.exerciseService.getRandomExercise();
  }
}
