import { Component } from '@angular/core';

@Component({
  selector: 'recipe-app',
  // templateUrl: './recipe.app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<h1>Hello Recipe!</h1>
  <img src="../assets/images/color_logo.png"/>
  `
})
export class RecipeAppComponent {
  title = 'recipe';
}
