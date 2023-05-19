import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilestudiante',
  templateUrl: './perfilestudiante.component.html',
  styleUrls: ['./perfilestudiante.component.css']
})
export class PerfilestudianteComponent {

  constructor(private http:HttpClient, private router: Router){}

}
