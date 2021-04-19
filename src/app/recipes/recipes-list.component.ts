
import { Component, OnInit } from '@angular/core';
import {RecipeService} from './shared/recipe.service';

/**
 * @recipe-card
 */
@Component({
  // selector: 'recipes-list',
  // templateUrl: './recipe.app.component.html',
  // styleUrls: ['./app.component.css']
  templateUrl: './recipes-list.component.html',
  // styleUrls: ['button-overview-example.css'],
})
export class RecipesListComponent implements OnInit{
  // recipe1 = {
  //   id: 1,
  // name: 'Pizza',
  // imageUrl: '/assets/images/pizza.jpeg',
  // size: {
  // small: 's',
  // medium: 'm',
  // large: 'l'
  // }
  // }

  // doSth(){}

  // recipes = [
  //   {
  //     id: 1,
  //     name: 'Pizza',
  //     imageUrl: '/assets/images/pizza.jpeg',
  //     size: {
  //     small: 's',
  //     medium: 'm',
  //     large: 'l'
  //     }},
  //     {
  //       id: 1,
  //       name: 'Pizza',
  //       imageUrl: '/assets/images/pizza.jpeg',
  //       size: {
  //       small: 's',
  //       medium: 'm',
  //       large: 'l'
  //       }},
  //       {
  //         id: 1,
  //         name: 'Pizza',
  //         imageUrl: '/assets/images/pizza.jpeg',
  //         size: {
  //         small: 's',
  //         medium: 'm',
  //         large: 'l'
  //         }},
  //         {
  //           id: 1,
  //           name: 'Pizza',
  //           imageUrl: '/assets/images/pizza.jpeg',
  //           size: {
  //           small: 's',
  //           medium: 'm',
  //           large: 'l'
  //           }}
  // ]

  recipes: any []
  constructor (private recipeService: RecipeService)  {
   this.recipes = this.recipeService.getRecipes()
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

   }
