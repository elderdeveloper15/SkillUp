import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface estudiante{
  nombre: string;
  apellidos: string;
  correo: string;
  escolaridad: string;
  habilidades: string;
  cv: File;
}

@Component({
  selector: 'app-perfilestudiante',
  templateUrl: './perfilestudiante.component.html',
  styleUrls: ['./perfilestudiante.component.css']
})

export class PerfilestudianteComponent {
  id: number = 0;

  estudiantes: estudiante[] = [];

  constructor(private route: ActivatedRoute, private http:HttpClient, private router: Router){}

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.id = params['id'];
    });

    const body = { params:
      {
        "id_estudiante": this.id
      }
    };

    this.http.get<any>('http://localhost:8080/api/estudiante', body).subscribe(data => {
      this.estudiantes = data;
    });
  }

}
