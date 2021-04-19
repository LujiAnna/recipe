import {Component} from '@angular/core';
import {RecipeService} from '../shared/recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
templateUrl: './recipe-details.component.html',
styles: [`
.container {padding: 0 20px;}
.recipe-image {height: 100px;}

`]
})

export class RecipeDetailsComponent {
  recipe: any
  constructor (private recipeService: RecipeService, private route: ActivatedRoute)  {
  //  this.recipe = this.recipeService.getRecipe(1)
  }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipe(1)
    this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id'])
  }
}


