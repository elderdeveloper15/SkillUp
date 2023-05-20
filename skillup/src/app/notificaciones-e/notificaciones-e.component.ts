import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

interface Notificacion {
  id: number;
  id_empresa: number;
  descripcion: string;
  id_estudiante: number;
  id_curso: number;
  id_oferta: number;
}

@Component({
  selector: 'app-notificaciones-e',
  templateUrl: './notificaciones-e.component.html',
  styleUrls: ['./notificaciones-e.component.css']
})
export class NotificacionesEComponent implements OnInit {

  id_empresa: number = 0;


  notificaciones: Notificacion[] = [];

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id_empresa = params['id'];
    });

    const body = { params:
      {
        "id_empresa": this.id_empresa
      }
    };

    this.http.get<any>('http://localhost:8080/api/notificacion/search', body).subscribe(data => {     
        this.notificaciones = data;    
        console.log(this.notificaciones) 
      });

  }

  descargarCV(id_estudiante:number){
    
  }

}
