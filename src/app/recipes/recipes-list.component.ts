
import { Component } from '@angular/core';

/**
 * @recipe-card
 */
@Component({
  selector: 'recipes-list',
  // templateUrl: './recipe.app.component.html',
  // styleUrls: ['./app.component.css']
  templateUrl: './recipes-list.component.html',
  // styleUrls: ['button-overview-example.css'],
})
export class RecipesListComponent {
  recipe1 = {
    id: 1,
  name: 'Pizza',
  imageUrl: '/assets/images/color_logo.png',
  size: {
  small: 's',
  medium: 'm',
  large: 'l'
  }
  }
   }
