import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
import { AdministrarpublicacionesTComponent } from './administrarpublicaciones-t/administrarpublicaciones-t.component';
import { AdministrarpublicacionesCComponent } from './administrarpublicaciones-c/administrarpublicaciones-c.component';
import { IniciosesionAdminComponent } from './iniciosesion-admin/iniciosesion-admin.component';

@NgModule({
  declarations: [
    AppComponent,
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
    AdministrarpublicacionesTComponent,
    AdministrarpublicacionesCComponent,
    IniciosesionAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
