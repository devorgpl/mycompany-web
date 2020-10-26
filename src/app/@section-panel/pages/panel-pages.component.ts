import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './panel-pages-menu';
import { AuthService } from '../../kcauth/services/auth.service';
import { User } from '../../@commons/model/user';

@Component({
  selector: 'mc-pages',
  templateUrl: './panel-pages.component.html',
  styleUrls: ['./panel-pages.component.scss'],
})
export class PanelPagesComponent implements OnInit {
  menu = MENU_ITEMS;
  _user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.userObservable$.subscribe(user => {
      this._user = user;
    });
  }

}
