import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'

@Component({
  selector: 'app-info-tramite',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent],
  templateUrl: './info-tramite.component.html',
  styleUrl: './info-tramite.component.css'
})
export class InfoTramiteComponent {

}
