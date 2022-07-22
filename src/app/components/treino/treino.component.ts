import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent implements OnInit {

  animals: Animal[] = []
  constructor(private treinoService: TreinoService) {
    this.getAnimals()

   }

  ngOnInit(): void {
  }

  getAnimals(): void{
    this.treinoService.getAllPets().subscribe((animals) => (this.animals = animals))
  }

}
