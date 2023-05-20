import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioestudiantes-t',
  templateUrl: './inicioestudiantes-t.component.html',
  styleUrls: ['./inicioestudiantes-t.component.css']
})
export class InicioestudiantesTComponent {
  
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

  administrarPerfil(){
    this.router.navigate(['/perfilestudiante'],{queryParams:{id: this.id}})
  }

  irCursos(){
    this.router.navigate(['/inicioestudiantes-c'], {queryParams:{correo: this.correo, password:this.password, id: this.id}})
  }
}
