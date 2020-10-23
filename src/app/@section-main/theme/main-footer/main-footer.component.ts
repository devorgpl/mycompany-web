import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-main-footer',
  styleUrls: ['./main-footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://dev.org.pl/" target="_blank">dev.org.pl</a></b> 2020
    </span>
    <div class="socials">
      <a href="https://github.com/devorgpl/" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class MainFooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
