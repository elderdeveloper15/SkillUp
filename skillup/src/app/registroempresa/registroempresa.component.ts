import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.component.html',
  styleUrls: ['./registroempresa.component.css']
})
export class RegistroempresaComponent {
  id: number = 0;
  rfc: string = "";
  password: string = "";
  nombre: string = "";
  domicilio: string = "";
  correo: string = "";
  telefono: number = 0;
  verificada: boolean = false;

  constructor(private http:HttpClient){}

  getLastId(){
    return this.http.get<any>('http://localhost:8080/api/empresa/lastid');
  }
  
  createStudent() {
    this.getLastId().subscribe(data => {
      this.id = data.ultimoID;
      console.log(this.id);

      const body = {
        "id": this.id + 1,
        "rfc": this.rfc,
        "password": this.password,
        "nombre": this.nombre,
        "domicilio": this.domicilio,
        "correo": this.correo,
        "telefono": this.telefono,
        "verificada": this.verificada
      };

      this.http.post<any>('http://localhost:8080/api/empresa', body).subscribe(data => {
        console.log("ya jalo");
      });
    });
  }
}
