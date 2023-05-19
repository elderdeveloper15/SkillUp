import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioempresa',
  templateUrl: './inicioempresa.component.html',
  styleUrls: ['./inicioempresa.component.css']
})
export class InicioempresaComponent {

  correo : string = "";
  password : string = "";
  id: number = 0;

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.correo = params['correo'];
      this.password = params['password'];
      this.id = params['id'];
    });
  }

  crearPublicacionC(){
    console.log("jaja");
    this.router.navigate(['/crearpublicacion-c'],{queryParams:{id: this.id}})
  }

  crearPublicacionT(){
    console.log("jaja");
    this.router.navigate(['/crearpublicacion-t'],{queryParams:{id: this.id}})
  }

  administrarPublicaciones(){
    this.router.navigate(['/administrarpublicaciones-t'],{queryParams:{id: this.id}})
  }

}
