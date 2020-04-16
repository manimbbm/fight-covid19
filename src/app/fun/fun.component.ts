import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {
  tasks: Array<object>;

  constructor() {
    this.tasks = [
      {
        name: 'Cook',
        skill: 2,
        affection: 5
      },
      {
        name: 'Read',
        skill: 2,
        affection: 5
      },
      {
        name: 'Watch',
        skill: 2,
        affection: 5
      },
      {
        name: 'Build',
        skill: 2,
        affection: 5
      },
      {
        name: 'Play Games',
        skill: 2,
        affection: 5
      },
      {
        name: 'Play Instruments',
        skill: 2,
        affection: 5
      },
      {
        name: 'Share posts',
        skill: 2,
        affection: 5
      },
      {
        name: 'task2',
        skill: 2,
        affection: 5
      },
      {
        name: 'task2',
        skill: 2,
        affection: 5
      },
      {
        name: 'task2',
        skill: 2,
        affection: 5
      },
      {
        name: 'task2',
        skill: 2,
        affection: 5
      },
      {
        name: 'task2',
        skill: 2,
        affection: 5
      },
    ];
  }

  ngOnInit() {
  }

  favorite($event: MouseEvent, task) {
    console.log({$event, task});
    this.tasks.task = 'test';
  }

}
