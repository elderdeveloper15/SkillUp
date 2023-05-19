import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion-admin',
  templateUrl: './iniciosesion-admin.component.html',
  styleUrls: ['./iniciosesion-admin.component.css']
})
export class IniciosesionAdminComponent {
  usuario : string = "";
  password : string = "";

  constructor(private http:HttpClient,private router: Router){}

  iniciarSesion(){

    const body = { params:
      {
        "usuario": this.usuario,
        "password": this.password 
      }
    };

    this.http.get<any>('http://localhost:8080/api/administrador/account',body).subscribe(data => {
      if (data == true){
        this.router.navigate(['/verificarempresas-a'])
      }
    });

  }
}
