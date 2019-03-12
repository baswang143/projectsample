import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe name', ' Just a test for description', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg?resize=980:*'),
    new Recipe('Test Recipe name', ' Just a test for description', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg?resize=980:*')
  ];
  constructor() { }

  ngOnInit() {
  }

}
