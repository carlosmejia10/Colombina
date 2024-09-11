// tabla-tramite.component.ts
import{Tramite} from'./../tramite';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-tramite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-tramite.component.html',
  styleUrls: ['./tabla-tramite.component.css']
})
export class TablaTramiteComponent {
  tramites!:Tramite[];
  
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
    this.tramites=[{
      "usuario":1,
      "fecha":"2018-03-16",
      "titulo":"REGISTRO NO 8745F2065",
      "mensaje":"Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
      "tipo":"a",
      "estado":true
    },
    {
      "usuario":2,
      "fecha":"2018-03-16",
      "titulo":"REGISTRO NO 8745F2065",
      "mensaje":"Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
      "tipo":"b",
      "estado":false
    },
    {
      "usuario":3,
      "fecha":"2018-03-16",
      "titulo":"REGISTRO NO 8745F2065",
      "mensaje":"Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
      "tipo":"a",
      "estado":true
    },
    {
      "usuario":4,
      "fecha":"2018-03-16",
      "titulo":"REGISTRO NO 8745F2065",
      "mensaje":"Le informamos que su tramite con el numero 8745F2065 no ha sido respondido",
      "tipo":"a",
      "estado":false
    }
  ];
  }
}
