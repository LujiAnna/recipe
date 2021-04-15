
import { Component, Input } from '@angular/core';

/**
 * @recipe-card
 */
@Component({
  selector: 'recipe-thumbnail',
  template: `
        <mat-card class='pad'>
            <mat-card-title>{{recipe.name}}</mat-card-title>
            <mat-card-content class='ital'>Size: {{recipe.size.small}} </mat-card-content>
            <button mat-raised-button> Details <mat-icon>open_in_new</mat-icon></button>
        </mat-card>
  `,
  styles: [`.pad {margin: 40px;}
  .ital {font-style: italic;}
  `]

  })
export class RecipeThumbnailComponent {
  @Input() recipe:any
   }
