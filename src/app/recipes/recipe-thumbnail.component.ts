
import { Component, Input } from '@angular/core';

/**
 * @recipe-card
 */
@Component({
  selector: 'recipe-thumbnail',
  template: `
        <mat-card class='pad'>
            <mat-card-title>{{recipe?.name}}</mat-card-title>
            <img mat-card-image [src] = 'recipe.imageUrl'  />
            <mat-card-content class='ital'>
            <p>Main Dish size: {{recipe?.size.medium}}</p>
            </mat-card-content>
            <mat-card-actions>
            <button [routerLink]="['/recipes', recipe.id]" mat-raised-button click='recipe.doSth()'> Cooking instructions</button>
            </mat-card-actions>
        </mat-card>

  `,
  styles: [`
  .pad {margin: 40px;   max-width: 400px;}
  .ital {font-style: italic;}
  img {width: 200px; height: 200px}
  `]

  })
export class RecipeThumbnailComponent {
  @Input() recipe:any
   }
