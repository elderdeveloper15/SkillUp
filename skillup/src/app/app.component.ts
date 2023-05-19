import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http:HttpClient,private router: Router){}


  irInicioSesion(){
    this.router.navigate(['/iniciosesion'])
  }

  irRegistroEmpresa(){
    this.router.navigate(['/registroempresa'])
  }

  irRegistroEstudiante(){
    this.router.navigate(['/registroestudiante'])
  }

}
