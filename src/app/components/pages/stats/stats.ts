import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stats',
    imports: [RouterModule],
    templateUrl: './stats.html',
    styleUrls: ['./stats.scss']
})
export class StatsComponent {
  done = 0;

  ngOnInit() {
    this.done = Number(localStorage.getItem('done') || 0);
  }
}
