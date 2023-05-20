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
  selector: 'app-administrarpublicaciones-c',
  templateUrl: './administrarpublicaciones-c.component.html',
  styleUrls: ['./administrarpublicaciones-c.component.css']
})
export class AdministrarpublicacionesCComponent {
  id_empresa: number = 0;

  publicaciones: Publicacion[] = [];

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id_empresa = params['id'];
    });

    const body = { params:
      {
        "id_empresa": this.id_empresa
      }
    };

    this.http.get<any>('http://localhost:8080/api/curso/search', body).subscribe(data => {     
        this.publicaciones = data;     
      });
  }

  irATrabajos(){
    this.router.navigate(['/administrarpublicaciones-t'],{queryParams:{id: this.id_empresa}})
  }

}
