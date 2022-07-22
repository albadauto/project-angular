import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
