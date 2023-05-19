import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearpublicacion-t',
  templateUrl: './crearpublicacion-t.component.html',
  styleUrls: ['./crearpublicacion-t.component.css']
})
export class CrearpublicacionTComponent {
  id_empresa: number = 0;

  id: number = 0;
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

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id_empresa = params['id'];
    });
  }

  getLastId(){
    return this.http.get<any>('http://localhost:8080/api/oferta/lastid');
  }

  publicar(){
    this.getLastId().subscribe(data => {
      this.id = data.ultimoID;
      console.log(this.id);

      const body = {
        "id": this.id + 1,
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
        "titulo":this.titulo
      };

      this.http.post<any>('http://localhost:8080/api/oferta', body).subscribe(data => {
        console.log("ya jalo");
      });
    });
  }

  
}
