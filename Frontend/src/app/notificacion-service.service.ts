import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Notificacion } from './notificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findAll():Observable<Notificacion[]>{
    return this.http.get<Notificacion[]> ("http.//localhost:8080/api/notificaciones");
    
  }
  findById(id:number):Observable<Notificacion>{
    return this.http.post<Notificacion> ("http.//localhost:8080/api/notificaciones",id);
  }
}
