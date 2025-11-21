import { Injectable } from '@angular/core';

export interface ExerciseData {
  id: number;
  name: string;
  description: string;
  repetitions: string;
  category: string;
  icon: string; 
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private exercises: ExerciseData[] = [
    // Szyja
    { id: 1, name: 'Rozciąganie szyi', description: 'Powoli przechylaj głowę w lewo i prawo.', repetitions: '2x10s', category: 'szyja', icon: 'neck', done: false },
    { id: 2, name: 'Obroty głowy', description: 'Wykonuj powolne obroty głową w obie strony.', repetitions: '2x8', category: 'szyja', icon: 'neck', done: false },

    // Łopatki
    { id: 3, name: 'Ściąganie łopatek', description: 'Usiądź prosto, ściągnij łopatki do siebie.', repetitions: '3x15', category: 'łopatki', icon: 'shoulder-blades', done: false },
    { id: 4, name: 'Krążenia ramion', description: 'Wykonuj krążenia ramion do przodu i do tyłu.', repetitions: '2x10', category: 'łopatki', icon: 'shoulder-blades', done: false },
    { id: 5, name: 'Unoszenie ramion', description: 'Unieś ramiona do góry i opuść.', repetitions: '3x12', category: 'łopatki', icon: 'shoulder-blades', done: false },

    // Nogi
    { id: 6, name: 'Przysiady przy biurku', description: 'Stań obok biurka i wykonaj przysiady.', repetitions: '3x10', category: 'nogi', icon: 'legs', done: false },

    // Core
    { id: 7, name: 'Plank', description: 'Oprzyj się na przedramionach i utrzymaj prostą linię ciała.', repetitions: '3x30s', category: 'core', icon: 'core', done: false },
  ];

  getCategories(): string[] {
    return [...new Set(this.exercises.map(e => e.category))];
  }

  getExercisesByCategory(category: string): ExerciseData[] {
    return this.exercises.filter(e => e.category === category);
  }

  getRandomExercise(): ExerciseData {
    const randomIndex = Math.floor(Math.random() * this.exercises.length);
    return this.exercises[randomIndex];
  }
}
