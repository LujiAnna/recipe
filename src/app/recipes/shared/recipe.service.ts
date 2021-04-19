import {Injectable} from '@angular/core'

@Injectable()
export class RecipeService {
  getRecipes () {
return RECIPES;
  }
  getRecipe (id:number ) {
    return RECIPES.find(recipe => recipe.id===id);
      }
}

const RECIPES = [
  {
    id: 1,
    name: 'Pizza',
    imageUrl: '/assets/images/pizza.jpeg',
    size: {
    small: 's',
    medium: 'm',
    large: 'l'
    }},
    {
      id: 2,
      name: 'Pasta',
      imageUrl: '/assets/images/pasta.png',
      size: {
      small: 's',
      medium: 'm',
      large: 'l'
      }},
      {
        id: 3,
        name: 'Rice',
        imageUrl: '/assets/images/rice.jpeg',
        size: {
        small: 's',
        medium: 'm',
        large: 'l'
        }},
        {
          id: 4,
          name: 'Potatoes',
          imageUrl: '/assets/images/potato.jpeg',
          size: {
          small: 's',
          medium: 'm',
          large: 'l'
          }}
]
