import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user= {
    name: "Mikail",
    surname: "Esim",
    job: "Computer Engineer",
    favorite_place: "Ayasofya",
    favorite_place_image: "https://arkeofili.com/wp-content/uploads/2020/07/ayasofya1.jpg",
    isEditable: true,
  }

  type= "text";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    alert("Clicked");
  }

  inputSubmit(value:any) {
    alert(value.target.value + " geldi...")
  }

}
