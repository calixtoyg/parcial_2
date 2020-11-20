import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AltaUsuarioComponent} from './components/alta-usuario/alta-usuario.component';
import {AuthGuardService} from './services/auth-guard.service';
import {WelcomeProfesorComponent} from './components/welcome-profesor/welcome-profesor.component';
import {WelcomeAlumnoComponent} from './components/welcome-alumno/welcome-alumno.component';
import {LoginComponent} from './components/login/login.component';
import {AdminGuardService} from './services/admin-guard.service';
import {AltaMateriaComponent} from './components/alta-materia/alta-materia.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuardService]},
  {path: 'welcome/profesor', component: WelcomeProfesorComponent, canActivate: [AuthGuardService]},
  {path: 'welcome/alumno', component: WelcomeAlumnoComponent, canActivate: [AuthGuardService]},
  {path: 'alta/usuario', component: AltaUsuarioComponent, canActivate: [AuthGuardService]},
  {path: 'alta/materia', component: AltaMateriaComponent, canActivate: [AuthGuardService, AdminGuardService]},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
