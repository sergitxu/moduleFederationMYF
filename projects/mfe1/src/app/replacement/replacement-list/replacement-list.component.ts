import { Component } from '@angular/core';
import { version } from 'useless-lib';


@Component({
  selector: 'app-replacement-list',
  templateUrl: './replacement-list.component.html'
})
export class ReplacementListComponent {
  constructor() {
    console.log('Useless version in Replacement list: ', version);
  }
}
