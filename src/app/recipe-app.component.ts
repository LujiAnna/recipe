import { Component } from '@angular/core';

@Component({
  selector: 'recipe-app',
  // templateUrl: './recipe.app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <nav-bar></nav-bar>
  <!-- <recipes-list></recipes-list> -->
  <router-outlet></router-outlet>
  `
})
export class RecipeAppComponent {
  title = 'recipe';
}
