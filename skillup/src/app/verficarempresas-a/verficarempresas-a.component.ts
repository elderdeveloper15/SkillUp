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


}
