import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  constructor(private listService: ListService) { }

  animals: Animal[] = [
    {name: "Turca", type:"Dog", age: 2},
    {name: "Tom", type:"Cat", age: 3},
    {name: "Frida", type:"Dog", age: 9},
    {name: "Bob", type:"Horse", age: 2}

  
  ]

  animalDetails = ''

  ngOnInit(): void {
  }
  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal...")
    this.animals = this.listService.remove(this.animals, animal)
  }

}
