import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {
  tasks = [
    {
      task: 'Cook',
      skill: 2,
      affection: 5
    },
    {
      task: 'Read',
      skill: 2,
      affection: 5
    },
    {
      task: 'Watch',
      skill: 2,
      affection: 5
    },
    {
      task: 'Build',
      skill: 2,
      affection: 5
    },
    {
      task: 'Play Games',
      skill: 2,
      affection: 5
    },
    {
      task: 'Play Instruments',
      skill: 2,
      affection: 5
    },
    {
      task: 'Share posts',
      skill: 2,
      affection: 5
    },
    {
      task: 'task2',
      skill: 2,
      affection: 5
    },
    {
      task: 'task2',
      skill: 2,
      affection: 5
    },
    {
      task: 'task2',
      skill: 2,
      affection: 5
    },
    {
      task: 'task2',
      skill: 2,
      affection: 5
    },
    {
      task: 'task2',
      skill: 2,
      affection: 5
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
