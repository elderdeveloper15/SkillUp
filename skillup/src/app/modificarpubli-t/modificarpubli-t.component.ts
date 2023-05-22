import { Component, OnInit } from '@angular/core';
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
  selector: 'app-modificarpubli-t',
  templateUrl: './modificarpubli-t.component.html',
  styleUrls: ['./modificarpubli-t.component.css']
})
export class ModificarpubliTComponent implements OnInit {
  id_empresa: number = 0;
  id_modificar: number = 0;

  area: string = "";
  sueldo: number = 0;
  modalidad: string = "";
  ubicacion: string = "";
  horario: string = "";
  publico: string = "";
  date: Date = new Date();
  duracion: number = 0;
  estatus: boolean = true;
  titulo: string = "";
  descripcion: string = "";
  showMessage: boolean = false;

  publicaciones: Publicacion[] = [];

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id_empresa = params['id_empresa'];
      this.id_modificar = params['id_modificar'];
    });

    let id_final: string = this.id_modificar.toString(); 
    const url = 'http://localhost:8080/api/oferta/'+id_final;

    this.http.get<any>(url).subscribe(data => {     
        this.publicaciones = data;    
        
        this.area = this.publicaciones[0].area;  
        this.sueldo = this.publicaciones[0].sueldo;
        this.modalidad = this.publicaciones[0].modalidad;
        this.ubicacion = this.publicaciones[0].ubicacion;
        this.horario = this.publicaciones[0].horario;
        this.publico = this.publicaciones[0].publico;
        this.date = this.publicaciones[0].date;
        this.duracion = this.publicaciones[0].duracion;
        this.estatus = this.publicaciones[0].estatus;
        this.titulo = this.publicaciones[0].titulo;
        this.descripcion = this.publicaciones[0].descripcion;
      });
    
    
  }

  publicar(){
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
      const body = {
        "id": this.id_modificar,
        "sueldo": this.sueldo,
        "duracion": this.duracion,
        "modalidad": this.modalidad,
        "publico": this.publico,
        "area": this.area,
        "estatus":this.estatus,
        "date":this.date,
        "horario":this.horario,
        "id_empresa":this.id_empresa,
        "ubicacion": this.ubicacion,
        "titulo":this.titulo,
        "descripcion":this.descripcion
      };

      let id_final: string = this.id_modificar.toString(); 
      const url = 'http://localhost:8080/api/oferta/'+id_final;

      this.http.put<any>(url, body).subscribe(data => {
        console.log("ya jalo");
      });
  }

}
