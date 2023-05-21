import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

interface Empresa {
  id: number;
  rfc: string;
  telefono: number;
  nombre: string;
  domicilio: string;
  correo: string;
  password: string;
  verificada: boolean;
}

@Component({
  selector: 'app-verficarempresas-a',
  templateUrl: './verficarempresas-a.component.html',
  styleUrls: ['./verficarempresas-a.component.css']
})
export class VerficarempresasAComponent {

  empresas: Empresa[] = [];

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  ngOnInit(){

    this.http.get<any>('http://localhost:8080/api/empresa/verificados').subscribe(data => {     
        this.empresas = data;  
        console.log(this.empresas)   
      });
  }

  verificar(id_empresa:number){
    const body = { params:
      {
        "id": id_empresa
      }
    };
    console.log(body)
    this.http.get<any>('http://localhost:8080/api/empresa/activate',body).subscribe(data => {
      console.log("ya jalo");
    });
  }

}
