import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

interface Publicacion {
  id: number;
  area: string;
  sueldo: number;
  modalidad: string;
  ubicacion: string;
  horario: string;
  publico: string;
  date: Date;
  duracion: number;
  estatus: boolean;
  titulo: string;
  descripcion:string;
}

@Component({
  selector: 'app-inicioestudiantes-t',
  templateUrl: './inicioestudiantes-t.component.html',
  styleUrls: ['./inicioestudiantes-t.component.css']
})
export class InicioestudiantesTComponent {
  
  correo : string = "";
  password : string = "";
  id: number = 0;

  busqueda: string = "";
  area_seleccionada: string = "";

  publicaciones: Publicacion[] = [];

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.correo = params['correo'];
      this.password = params['password'];
      this.id = params['id'];
    });

    this.http.get<any>('http://localhost:8080/api/oferta').subscribe(data => {     
        this.publicaciones = data;     
      });

  }

  administrarPerfil(){
    this.router.navigate(['/perfilestudiante'],{queryParams:{id: this.id}})
  }

  irCursos(){
    this.router.navigate(['/inicioestudiantes-c'], {queryParams:{correo: this.correo, password:this.password, id: this.id}})
  }

  buscar(){
    const body = { params:
      {
        "titulo": this.busqueda
      }
    };
    this.http.get<any>('http://localhost:8080/api/oferta/search', body).subscribe(data => {     
        this.publicaciones = data;     
      });
  }

  filtrar(){
    const body = { params:
      {
        "area": this.area_seleccionada
      }
    };
    this.http.get<any>('http://localhost:8080/api/oferta/area', body).subscribe(data => {     
        this.publicaciones = data;     
      });
  }

}
