import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface empresa{
  correo: string;
  nombre: string;
  telefono: number;
  domicilio: string;
  descripcion: string;
}

@Component({
  selector: 'app-perfilempresa',
  templateUrl: './perfilempresa.component.html',
  styleUrls: ['./perfilempresa.component.css']
})

export class PerfilempresaComponent {
  id: number = 0;
  
  empresas : empresa[] = [];

  constructor(private route: ActivatedRoute, private http:HttpClient, private router: Router){}

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.id = params['id'];
    });

    const body = { params:
      {
        "id_empresa": this.id
      }
    };

    this.http.get<any>('http://localhost:8080/api/empresa', body).subscribe(data => {
      this.empresas = data;
    });
  }
  
  /*irCrearPublicacion(){
    this.router.navigate()
  }
  irAdministrarPubC(){

  }
  irAdministrarPubT(){

  }*/
 
  
}
