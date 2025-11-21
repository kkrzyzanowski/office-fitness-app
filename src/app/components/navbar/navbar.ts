import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
 @ViewChild('sidenav') sidenav!: MatSidenav;
}
