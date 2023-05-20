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
  selector: 'app-administrarpublicaciones-t',
  templateUrl: './administrarpublicaciones-t.component.html',
  styleUrls: ['./administrarpublicaciones-t.component.css']
})


export class AdministrarpublicacionesTComponent {
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

    this.http.get<any>('http://localhost:8080/api/oferta/search', body).subscribe(data => {     
        this.publicaciones = data;     
      });
  }

  irACursos(){
    this.router.navigate(['/administrarpublicaciones-c'],{queryParams:{id: this.id_empresa}})
  }

}
