import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-replacement-list',
  templateUrl: './replacement-list.component.html'
})
export class ReplacementListComponent {
  constructor(private service: AuthLibService) {
    console.log('User Name taken from Shell: ', this.service.user);
  }
}
