import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Documento } from './documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoServiceService {

  constructor(
    private http: HttpClient
  ) { }
  findAll():Observable<Documento[]>{
    return this.http.get<Documento[]> ("http.//localhost:8080/api/documentos");
  }
  findById(id:number):Observable<Documento>{
    return this.http.get<Documento> ("http.//localhost:8080/api/Documento"+id);
  }
}
