import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-other',
  template: '<p>User: </p>',
  // styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  // user = 'A';
  // user = this.service.user;
  constructor() { }

  ngOnInit(): void {
  }

}
