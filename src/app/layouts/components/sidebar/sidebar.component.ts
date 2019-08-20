import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  children?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Home', icon: 'fa fa-home', class: '' },
  { path: '/users', title: 'Users', icon: 'fa fa-user', class: '' },
  {
    path: 'osef', title: 'Utils', icon: 'fa fa-cogs', class: '',
    children: [
      { path: '/404', title: '404', icon: 'fa fa-unlink', class: '' },
    ]
  }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
