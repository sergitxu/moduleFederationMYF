import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { version } from 'useless-lib';

@Component({
  selector: 'app-replacement-list',
  templateUrl: './replacement-list.component.html'
})
export class ReplacementListComponent {
  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
    console.log("mfe1 useless-lib version:" + version);
  }
}
