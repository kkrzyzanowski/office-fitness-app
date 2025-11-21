import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
imports: [
  RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 80],
    scrollPositionRestoration: 'enabled'
  })
],
exports: [RouterModule]
})
export class AppRoutingModule {}