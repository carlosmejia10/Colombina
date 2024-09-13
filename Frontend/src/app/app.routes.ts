import { Routes } from '@angular/router';

import {ArrastrarComponent} from './arrastrar/arrastrar.component'
import {LoginComponent} from './Login/login/login.component'
import {CrearTramiteComponent} from './crear-tramite/crear-tramite.component'

export const routes: Routes = [
  {
    path: 'crear-tramite',
    component: CrearTramiteComponent
  },
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'arrastrar',
    component: ArrastrarComponent
  }
];
