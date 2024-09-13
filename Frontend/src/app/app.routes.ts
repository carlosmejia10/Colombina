import { Routes } from '@angular/router';

import {ArrastrarComponent} from './arrastrar/arrastrar.component'
import {LoginComponent} from './Login/login/login.component'
import {CrearTramiteComponent} from './crear-tramite/crear-tramite.component'
import{TablaTramiteComponent} from'./tabla-tramite/tabla-tramite.component'

export const routes: Routes = [
  {
    path: 'crearTramite',
    component: CrearTramiteComponent
  },
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'arrastrar',
    component: ArrastrarComponent
  },
  {
    path: 'tramites',
    component: TablaTramiteComponent
  }
];
