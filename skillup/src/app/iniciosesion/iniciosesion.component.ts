import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  correo : string = "";
  password : string = "";
  quien : string = "";
  id : number = 0;

  constructor(private http:HttpClient,private router: Router){}

  iniciarSesion(){

    const bodyEstudiante = { params:
      {
        "correo": this.correo,
        "password": this.password 
      }
    };

    const bodyEmpresa = { params:
      {
        "correo": this.correo,
        "password": this.password,
        "verificada": true
      }
    };

    if(this.quien == "estudiante"){
      this.http.get<any>('http://localhost:8080/api/estudiante/account',bodyEstudiante).subscribe(data => {
        if (data.verificada == true){
          this.router.navigate(['/inicioestudiantes-t'],{queryParams:{correo:this.correo,password:this.password,id: data.id}})
        }
      });

    }
    else if (this.quien == "empresa"){
      this.http.get<any>('http://localhost:8080/api/empresa/account',bodyEmpresa).subscribe(data => {
        if (data.verificada == true){
          this.router.navigate(['/inicioempresa'],{queryParams:{correo:this.correo,password:this.password,id: data.id}})
        }
      });
    }
  }



}
