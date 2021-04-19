import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './routes';

import { RecipeAppComponent } from './recipe-app.component';
import { RecipesListComponent } from './recipes/recipes-list.component';
import { RecipeThumbnailComponent } from './recipes/recipe-thumbnail.component';
import { RecipeService } from './recipes/shared/recipe.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

import { NavBarComponent } from './nav/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    // MatSliderModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
            // AppRoutingModule
  ],
  declarations: [
    RecipeAppComponent,
    RecipesListComponent,
    RecipeThumbnailComponent,
    RecipeDetailsComponent,
    NavBarComponent


  ],
  providers: [RecipeService],
  bootstrap: [RecipeAppComponent]
})
export class AppModule { }
