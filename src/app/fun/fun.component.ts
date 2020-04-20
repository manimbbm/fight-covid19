import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent {
  tasks: object[];
  // @Output() open: EventEmitter<any> = new EventEmitter();

  profile = [];

  constructor() {
    this.tasks = [
      {
        id: 0,
        name: 'Cook',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 1,
        name: 'Read',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 2,
        name: 'Watch',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 3,
        name: 'Build',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 4,
        name: 'Play Games',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 5,
        name: 'Play Instruments',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 6,
        name: 'Share posts',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 7,
        name: 'task2',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 8,
        name: 'task2',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 9,
        name: 'task2',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 10,
        name: 'task2',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
      {
        id: 11,
        name: 'task2',
        skill: 2,
        affection: {
          level: 3,
          value: 'Love it'
        }
      },
    ];
  }

  addProfileTask($event: MouseEvent, task) {
    console.log({$event, task});
    this.profile.push(task.id);
  }

}
