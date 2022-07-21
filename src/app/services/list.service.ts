import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((val) => animal.name !== val.name);
  }
}
