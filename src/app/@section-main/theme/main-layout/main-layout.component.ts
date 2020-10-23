import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-main-layout',
  styleUrls: ['./main-layout.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <mc-main-header style="width: 100%;"></mc-main-header>
      </nb-layout-header>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <mc-main-footer></mc-main-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
