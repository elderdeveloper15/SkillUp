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
  id_empresa: number;
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
  notification_id: number = 0;

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
        console.log(this.publicaciones) 
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

  getLastNotificationId(){
    return this.http.get<any>('http://localhost:8080/api/notificacion/lastid');
  }

  notificar(id_notificar: number, id_empresa:number){
    this.getLastNotificationId().subscribe(data => {
      this.notification_id = data.ultimoID;
      console.log(this.notification_id);

      const body = {
        "id": this.notification_id + 1,
        "id_empresa": id_empresa,
        "descripcion": "Estoy interesado!",
        "id_estudiante": this.id,
        "id_curso": null,
        "id_oferta": id_notificar,
      };
      this.http.post<any>('http://localhost:8080/api/notificacion', body).subscribe(data => {
        console.log("ya jalo");
      });

    });
  }

}
