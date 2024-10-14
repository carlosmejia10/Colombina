// tabla-tramite.component.ts
import{Tramite} from'./../tramite';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';
import { Fecha } from '../fecha';
import { Usuario } from '../usuario';
import { TramiteService } from '../tramite.service';

@Component({
  selector: 'app-tabla-tramite',
  standalone: true,
  imports: [CommonModule,LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule],
  templateUrl: './tabla-tramite.component.html',
  styleUrls: ['./tabla-tramite.component.css']
})
export class TablaTramiteComponent {
  tramites!:Tramite[];
  tramiteService!: TramiteService;
  
  mostrarTabla1: boolean = true;
  mostrarTabla2: boolean = true;

  toggleTabla(tabla: string) {
    if (tabla === 'tabla1') {
      this.mostrarTabla1 = !this.mostrarTabla1;
    } else if (tabla === 'tabla2') {
      this.mostrarTabla2 = !this.mostrarTabla2;
    }
  }
  ngOnInit():void{
    //this.getTramites();
    
    
    this.tramites=[
     {
        "id": 1,
        fecha: new Fecha,
        usuario: new Usuario,
        "titulo": "AR NO 8745F2065",
        "mensaje": "Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
        "tipo": "a",
        documento: []
      },
    {
      "titulo": "AR NO 8745F2065",
      "mensaje": "Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
      "tipo": "b",
      id: 0,
      fecha: new Fecha,
      usuario: new Usuario,
      documento: []
    },
    {
      fecha: new Fecha,
      usuario: new Usuario,
      "titulo": "AR NO 8745F2065",
      "mensaje": "Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
      "tipo": "a",
      id: 0,
      documento: []
    },
    {
      fecha: new Fecha,
      usuario: new Usuario,
      "titulo": "AR NO 8745F2065",
      "mensaje": "Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
      "tipo": "a",
      id: 0,
      documento: []
    }
  ];
  
  }
  getTramites(): void {
    this.tramiteService.findAll().subscribe({
      next: (data) => {
        this.tramites = data;
      },
      error: (err) => {
        console.error('Error fetching tramites', err);
      }
    });
  }
}
