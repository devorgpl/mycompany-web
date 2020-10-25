import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './panel-pages-menu';

@Component({
  selector: 'mc-pages',
  templateUrl: './panel-pages.component.html',
  styleUrls: ['./panel-pages.component.scss'],
})
export class PanelPagesComponent implements OnInit {
  menu = MENU_ITEMS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
