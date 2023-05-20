import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface estudiante{
  id: number;
  nombre: string;
  apellidos: string;
  correo: string;
  escolaridad: string;
  habilidades: string;
  cv: File;
}

@Component({
  selector: 'app-perfilestudiante',
  templateUrl: './perfilestudiante.component.html',
  styleUrls: ['./perfilestudiante.component.css']
})

export class PerfilestudianteComponent {
  id: number = 0;
  nombre: string = "";
  apellidos: string = "";
  correo: string = "";
  escolaridad: string = "";
  habilidades: string = "";
  cv: File | null = null;

  estudiantes: estudiante[] = [];

  constructor(private route: ActivatedRoute, private http:HttpClient, private router: Router){}

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.id = params['id'];
    });
    
    let id_final: string = this.id.toString();

    const url='http://localhost:8080/api/estudiante/' + id_final;

    this.http.get<any>(url).subscribe(data => {
      this.estudiantes = data;
      console.log(this.estudiantes);
    });
  }
  
  modificar(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    let id_final: string = this.id.toString();

    const url='http://localhost:8080/api/estudiante/' + id_final;

    this.http.get<any>(url).subscribe(data => {     
      this.estudiantes = data;    
      
      this.nombre = this.estudiantes[0].nombre;  
      this.apellidos = this.estudiantes[0].apellidos;
      this.correo = this.estudiantes[0].correo;
      this.escolaridad = this.estudiantes[0].escolaridad;
      this.habilidades = this.estudiantes[0].habilidades;
      this.cv = this.estudiantes[0].cv;
    });

  }

  publicar(){
    const body = {
      "id": this.id,
      "nombre": this.nombre,
      "apellidos": this.apellidos,
      "correo": this.correo,
      "escolaridad": this.escolaridad,
      "habilidades": this.habilidades,
      "cv": this.cv
    };

    let id_final: string = this.id.toString(); 
    const url = 'http://localhost:8080/api/estudiante/'+id_final;

    this.http.put<any>(url, body).subscribe(data => {
      console.log("ya jalo");
    });
  }

  onFileSelected(event: any) {
    this.cv = event.target.files[0];
    console.log(this.cv);
    // Aquí puedes realizar acciones adicionales con el archivo seleccionado
  }
}
