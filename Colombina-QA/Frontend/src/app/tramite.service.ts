import { HttpClient } from "@angular/common/http";
import { Tramite } from "./tramite";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class TramiteService{
    constructor(
        private http: HttpClient
    ){}

    findAll(): Observable<Tramite[]>{
        return this.http.get<Tramite[]> ("http.//localhost:8080/api/tramites");
    }

    findById(id:number):Observable<Tramite>{
        return this.http.get<Tramite> ("http.//localhost:8080/api/tramites"+id);
    }

    addTramite(tramite:Tramite){
        this.http.post("http.//localhost:8080/api/tramites",tramite).subscribe;
    }
}