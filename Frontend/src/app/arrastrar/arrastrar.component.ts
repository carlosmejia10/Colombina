import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'

@Component({
  selector: 'app-arrastrar',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent],
  templateUrl: './arrastrar.component.html',
  styleUrl: './arrastrar.component.css'
})
export class ArrastrarComponent {

}
