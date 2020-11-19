import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { WelcomeProfesorComponent } from './components/welcome-profesor/welcome-profesor.component';
import { WelcomeAlumnoComponent } from './components/welcome-alumno/welcome-alumno.component';
import { AltaAdminComponent } from './components/alta-admin/alta-admin.component';
import { MateriaComponent } from './components/materia/materia.component';
import { AltaMateriaComponent } from './components/alta-materia/alta-materia.component';
import { UsersComponent } from './components/profesors/users.component';
import { FilterRolePipe } from './filter-role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarHeaderComponent,

    FooterComponent,
    AltaUsuarioComponent,
    LoginComponent,
    WelcomeProfesorComponent,
    WelcomeAlumnoComponent,
    AltaAdminComponent,
    MateriaComponent,
    AltaMateriaComponent,
    UsersComponent,
    FilterRolePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
