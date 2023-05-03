import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { LandingComponent } from './landing/landing.component';
import { RegistroempresaComponent } from './registroempresa/registroempresa.component';

const routes: Routes = [
  {
    path:'iniciosesion',
    component:IniciosesionComponent
  },
  {
    path:'registroempresa',
    component:LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
