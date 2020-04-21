import {Component, Input, OnInit} from '@angular/core';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faSkullCrossbones);

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  faSkull = faSkullCrossbones;

  constructor() { }

  ngOnInit() {
  }

}
