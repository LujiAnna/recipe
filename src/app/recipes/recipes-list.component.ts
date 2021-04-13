
import { Component } from '@angular/core';

@Component({
  selector: 'recipes-list',
  // templateUrl: './recipe.app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<div>
<h1>Recipes</h1>
<hr>
<h2>{{recipe.name}}</h2>
  </div>
  `
})
export class RecipesListComponent {
  recipe = {
    id: 1,
  name: 'Pizza',
  imageUrl: '/assets/images/',
  size: {
  small: 's',
  medium: 'm',
  large: 'l'
  }
  }
   }
