import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { TablaTramiteComponent } from './tabla-tramite/tabla-tramite.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tramites', component: TablaTramiteComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' } // Ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
