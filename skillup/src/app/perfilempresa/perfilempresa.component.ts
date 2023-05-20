import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface empresa{
  id: number;
  rfc: string;
  correo: string;
  nombre: string;
  telefono: number;
  domicilio: string;
}

@Component({
  selector: 'app-perfilempresa',
  templateUrl: './perfilempresa.component.html',
  styleUrls: ['./perfilempresa.component.css']
})

export class PerfilempresaComponent {
  id: number = 0;
  rfc: string = "";
  correo: string = "";
  nombre: string = "";
  telefono: number = 0;
  domicilio: string = "";

  empresas : empresa[] = [];

  constructor(private route: ActivatedRoute, private http:HttpClient, private router: Router){}

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.id = params['id'];
    });
    
    let id_final: string = this.id.toString();

    const url='http://localhost:8080/api/empresa/' + id_final;

    this.http.get<any>(url).subscribe(data => {
      this.empresas = data;
    });
  }
  
  modificar(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    let id_final: string = this.id.toString();

    const url='http://localhost:8080/api/empresa/' + id_final;

    this.http.get<any>(url).subscribe(data => {     
      this.empresas = data;    
      
      this.rfc = this.empresas[0].rfc;  
      this.correo = this.empresas[0].correo;
      this.nombre = this.empresas[0].nombre;
      this.telefono = this.empresas[0].telefono;
      this.domicilio = this.empresas[0].domicilio;
    });

  }

  publicar(){
    const body = {
      "id": this.id,
      "rfc": this.rfc,
      "correo": this.correo,
      "nombre": this.nombre,
      "telefono": this.telefono,
      "domicilio": this.domicilio,
    };

    let id_final: string = this.id.toString(); 
    const url = 'http://localhost:8080/api/empresa/'+id_final;

    this.http.put<any>(url, body).subscribe(data => {
      console.log("ya jalo");
    });
  }
}
