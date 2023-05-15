import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { RegistroempresaComponent } from './registroempresa/registroempresa.component';
import { AdministrarpublicacionesCComponent } from './administrarpublicaciones-c/administrarpublicaciones-c.component';
import { AdministrarpublicacionesTComponent } from './administrarpublicaciones-t/administrarpublicaciones-t.component';


const routes: Routes = [
  {
    path:'iniciosesion',
    component:IniciosesionComponent
  },
  {
    path: 'administrarpublicaciones-c',
    component: AdministrarpublicacionesCComponent
  },
  {
    path: 'administrarpublicaciones-t',
    component: AdministrarpublicacionesTComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
