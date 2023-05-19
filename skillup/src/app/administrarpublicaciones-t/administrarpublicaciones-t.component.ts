import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrarpublicaciones-t',
  templateUrl: './administrarpublicaciones-t.component.html',
  styleUrls: ['./administrarpublicaciones-t.component.css']
})
export class AdministrarpublicacionesTComponent {
  id_empresa: number = 0;

  id: number = 0;
  area: string = "";
  sueldo: number = 0;
  modalidad: string = "";
  ubicacion: string = "";
  horario: string = "";
  publico: string = "";
  date: Date = new Date();
  duracion: number = 0;
  estatus: boolean = true;
  titulo: string = "";

  constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

  
}
