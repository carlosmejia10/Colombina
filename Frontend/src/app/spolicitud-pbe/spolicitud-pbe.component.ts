import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'

@Component({
  selector: 'app-spolicitud-pbe',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent],
  templateUrl: './spolicitud-pbe.component.html',
  styleUrl: './spolicitud-pbe.component.css'
})
export class SpolicitudPBEComponent {

}
