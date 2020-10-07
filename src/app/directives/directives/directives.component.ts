import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  title = false;
  name = "";
  username = "";

  cities = [
    {
      id: 1,
      name: "Yozgat",
      region: "İçAnadolu",
    },
    {
      id: 3,
      name: "Samsun",
      region: "Karadeniz",
    },
    {
      id: 6,
      name: "Ankara",
      region: "İçAnadolu",
    },
    {
      id: 9,
      name: "İstanbul",
      region: "Marmara",
    }
  ]

  color = "";

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = !this.title
  }

}
