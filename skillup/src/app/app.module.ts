import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { RegistroempresaComponent } from './registroempresa/registroempresa.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    IniciosesionComponent,
    RegistroempresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
