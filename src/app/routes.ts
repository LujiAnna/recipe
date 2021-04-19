import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

export const appRoutes: Routes = [
{path: 'recipes', component: RecipesListComponent},
{path: 'recipes/:id', component: RecipeDetailsComponent},
{path: '', redirectTo: 'recipes', pathMatch: 'full' }
]
