import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RecipeAppComponent } from './recipe-app.component';
import { RecipesListComponent } from './recipes/recipes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule
  ],
  declarations: [
    RecipeAppComponent,
    RecipesListComponent,

  ],
  // providers: [],
  bootstrap: [RecipeAppComponent]
})
export class AppModule { }
