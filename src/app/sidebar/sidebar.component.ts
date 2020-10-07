import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  elements = [
    {
      name: "Home",
      routerLink: "home"
    },
    {
      name: "Role",
      routerLink: "role"
    },
    {
      name: "User",
      routerLink: "user"
    },
    {
      name: "Data Binding",
      routerLink: "data-binding"
    },
    {
      name: "Storage",
      routerLink: "storage"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
