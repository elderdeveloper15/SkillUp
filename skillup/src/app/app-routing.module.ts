import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarpublicacionesCComponent } from './administrarpublicaciones-c/administrarpublicaciones-c.component';
import { AdministrarpublicacionesTComponent } from './administrarpublicaciones-t/administrarpublicaciones-t.component';
import { CrearpublicacionCComponent } from './crearpublicacion-c/crearpublicacion-c.component';
import { CrearpublicacionTComponent } from './crearpublicacion-t/crearpublicacion-t.component';
import { InicioempresaComponent } from './inicioempresa/inicioempresa.component';
import { InicioestudiantesCComponent } from './inicioestudiantes-c/inicioestudiantes-c.component';
import { InicioestudiantesTComponent } from './inicioestudiantes-t/inicioestudiantes-t.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { IniciosesionAdminComponent } from './iniciosesion-admin/iniciosesion-admin.component';
import { PerfilempresaComponent } from './perfilempresa/perfilempresa.component';
import { PerfilestudianteComponent } from './perfilestudiante/perfilestudiante.component';
import { RegistroempresaComponent } from './registroempresa/registroempresa.component';
import { RegistroestudianteComponent } from './registroestudiante/registroestudiante.component';
import { VerficarempresasAComponent } from './verficarempresas-a/verficarempresas-a.component';


const routes: Routes = [
  {
    path: 'administrarpublicaciones-c',
    component: AdministrarpublicacionesCComponent
  },
  {
    path: 'administrarpublicaciones-t',
    component: AdministrarpublicacionesTComponent
  },
  {
    path: 'crearpublicacion-c',
    component: CrearpublicacionCComponent
  },
  {
    path: 'crearpublicacion-t',
    component: CrearpublicacionTComponent
  },
  {
    path: 'inicioempresa',
    component: InicioempresaComponent
  },
  {
    path: 'inicioestudiantes-c',
    component: InicioestudiantesCComponent
  },
  {
    path: 'inicioestudiantes-t',
    component: InicioestudiantesTComponent
  },
  {
    path:'iniciosesion',
    component:IniciosesionComponent
  },
  {
    path: 'iniciosesion-admin',
    component: IniciosesionAdminComponent
  },
  {
    path: 'perfilempresa',
    component: PerfilempresaComponent
  },
  {
    path: 'perfilestudiante',
    component: PerfilestudianteComponent
  },
  {
    path: 'registroempresa',
    component: RegistroempresaComponent
  },
  {
    path: 'registroestudiante',
    component: RegistroestudianteComponent
  },
  {
    path: 'verificarempresas-a',
    component: VerficarempresasAComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
