import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ExerciseService, ExerciseData } from '../../services/exercise';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-exercises',
    imports: [CommonModule, RouterModule, MatIconModule],
    templateUrl: './exercises.html',
    styleUrls: ['./exercises.scss']
})
export class ExercisesComponent {
  category!: string;
  exercises: ExerciseData[] = [];

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.exercises = this.exerciseService.getExercisesByCategory(this.category);
  }

  markAsDone(ex: ExerciseData) {
    let done = Number(localStorage.getItem('done') || 0);
    localStorage.setItem('done', String(done + 1));
    ex.done = true;
    alert(`Super! Ukończyłeś ćwiczenie: ${ex.name}`);
  }
}
