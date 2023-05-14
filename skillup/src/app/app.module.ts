import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { RegistroempresaComponent } from './registroempresa/registroempresa.component';
import { RegistroestudianteComponent } from './registroestudiante/registroestudiante.component';
import { PerfilempresaComponent } from './perfilempresa/perfilempresa.component';
import { PerfilestudianteComponent } from './perfilestudiante/perfilestudiante.component';
import { InicioempresaComponent } from './inicioempresa/inicioempresa.component';
import { InicioestudiantesTComponent } from './inicioestudiantes-t/inicioestudiantes-t.component';
import { InicioestudiantesCComponent } from './inicioestudiantes-c/inicioestudiantes-c.component';
import { CrearpublicacionTComponent } from './crearpublicacion-t/crearpublicacion-t.component';
import { CrearpublicacionCComponent } from './crearpublicacion-c/crearpublicacion-c.component';
import { VerficarempresasAComponent } from './verficarempresas-a/verficarempresas-a.component';
import { AdministrarpublicacionesAComponent } from './administrarpublicaciones-a/administrarpublicaciones-a.component';
import { AdministrarpublicacionesTComponent } from './administrarpublicaciones-t/administrarpublicaciones-t.component';
import { AdministrarpublicacionesCComponent } from './administrarpublicaciones-c/administrarpublicaciones-c.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    IniciosesionComponent,
    RegistroempresaComponent,
    RegistroestudianteComponent,
    PerfilempresaComponent,
    PerfilestudianteComponent,
    InicioempresaComponent,
    InicioestudiantesTComponent,
    InicioestudiantesCComponent,
    CrearpublicacionTComponent,
    CrearpublicacionCComponent,
    VerficarempresasAComponent,
    AdministrarpublicacionesAComponent,
    AdministrarpublicacionesTComponent,
    AdministrarpublicacionesCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
