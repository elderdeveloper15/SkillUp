import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-registroestudiante',
  templateUrl: './registroestudiante.component.html',
  styleUrls: ['./registroestudiante.component.css']
})
export class RegistroestudianteComponent {
  id: number = 0;
  nombre: string = "";
  apellidos: string = "";
  correo: string = "";
  escolaridad: string = "";
  habilidades: string = "";
  password: string = "";
  cv: File | null = null;

  constructor(private http:HttpClient){}


  onFileSelected(event: any) {
    this.cv = event.target.files[0];
    console.log(this.cv);
    // Aquí puedes realizar acciones adicionales con el archivo seleccionado
  }

  getLastId(){
    return this.http.get<any>('http://localhost:8080/api/estudiante/lastid');
  }
  
  createStudent() {
    this.getLastId().subscribe(data => {
      this.id = data.ultimoID;
      console.log(this.id);

      const body = {
        "id": this.id + 1,
        "nombre": this.nombre,
        "apellidos": this.apellidos,
        "correo": this.correo,
        "escolaridad": this.escolaridad,
        "habilidades": this.habilidades,
        "password": this.password,
        "cv": this.cv
      };

      this.http.post<any>('http://localhost:8080/api/estudiante', body).subscribe(data => {
        console.log("ya jalo");
      });
    });
  }

}
