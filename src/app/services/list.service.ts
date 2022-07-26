import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../Animal';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  public remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
  }

  public getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }

  public getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
