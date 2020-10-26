import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../@commons/model/user';

@Component({
  selector: 'mc-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.scss'],
})
export class PanelHeaderComponent implements OnInit {

  constructor() {
  }

  _user: User;

  @Input()
  set user(user: User) {
    this._user = user;
  }

  ngOnInit(): void {
  }

}
