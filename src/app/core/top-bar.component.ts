import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styles: [``]
})

export class TopBarComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
