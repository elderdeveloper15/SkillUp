import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

interface Publicacion {
  id: number;
  area: string;
  costo: number;
  modalidad: string;
  ubicacion: string;
  horario: string;
  publico: string;
  date: Date;
  duracion: number;
  estatus: boolean;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-inicioestudiantes-c',
  templateUrl: './inicioestudiantes-c.component.html',
  styleUrls: ['./inicioestudiantes-c.component.css']
})
export class InicioestudiantesCComponent {
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

    this.http.get<any>('http://localhost:8080/api/curso').subscribe(data => {     
        this.publicaciones = data;     
      });

  }

  administrarPerfil(){
    this.router.navigate(['/perfilestudiante'],{queryParams:{id: this.id}})
  }

  irTrabajos(){
    this.router.navigate(['/inicioestudiantes-t'], {queryParams:{correo: this.correo, password:this.password, id: this.id}})
  }

  buscar(){
    const body = { params:
      {
        "titulo": this.busqueda
      }
    };
    this.http.get<any>('http://localhost:8080/api/curso/search', body).subscribe(data => {     
        this.publicaciones = data;     
      });
  }

  filtrar(){
    const body = { params:
      {
        "area": this.area_seleccionada
      }
    };
    this.http.get<any>('http://localhost:8080/api/curso/area', body).subscribe(data => {     
        this.publicaciones = data;     
      });
  }

}
