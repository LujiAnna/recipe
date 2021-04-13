import { Component } from '@angular/core';

@Component({
  selector: 'recipe-app',
  // templateUrl: './recipe.app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<recipes-list></recipes-list>`
})
export class RecipeAppComponent {
  title = 'recipe';
}
