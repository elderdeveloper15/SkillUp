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
    
    let id_final: string = this.id.toString();

    const url='http://localhost:8080/api/empresa/' + id_final;

    this.http.get<any>(url).subscribe(data => {
      this.empresas = data;
    });
  }
  
}
