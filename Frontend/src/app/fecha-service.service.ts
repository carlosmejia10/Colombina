import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fecha } from './fecha';

@Injectable({
  providedIn: 'root'
})
export class FechaServiceService {
  constructor(
    private http: HttpClient
  ){}
  findById(id:number):Observable<Fecha>{
    return this.http.get<Fecha> ("http.//localhost:8080/api/tramites"+id);
  }
}
