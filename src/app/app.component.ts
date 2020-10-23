import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mc-app',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
