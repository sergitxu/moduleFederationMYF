import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { version } from 'useless-lib';


@Component({
  selector: 'app-replacement-list',
  templateUrl: './replacement-list.component.html'
})
export class ReplacementListComponent {
  constructor(private service: AuthLibService) {
    console.log('User Name taken from Shell: ', this.service.user);
    console.log('Useless lib version in replacement project: ', version);
  }
}
