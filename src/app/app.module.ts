import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RecipeAppComponent } from './recipe-app.component';
import { RecipesListComponent } from './recipes/recipes-list.component';
import { RecipeThumbnailComponent } from './recipes/recipe-thumbnail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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

  ],
  // providers: [],
  bootstrap: [RecipeAppComponent]
})
export class AppModule { }
