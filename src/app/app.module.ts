import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RecipeAppComponent } from './recipe-app.component';

@NgModule({
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  declarations: [
    RecipeAppComponent
  ],
  // providers: [],
  bootstrap: [RecipeAppComponent]
})
export class AppModule { }
