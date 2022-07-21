import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name = "José Adauto";
  age = 21;
  job = "Programador";
  hobbies = ["Estudar", "Programar", "Se desenvolver como pessoa"]
  constructor() { }

  ngOnInit(): void {
  }

}
