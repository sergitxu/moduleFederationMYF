import { Component } from '@angular/core';
import { version } from 'useless-lib';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor() {
    console.log('Useless version in Shell: ', version);
  }
}
