import { Component, OnInit } from '@angular/core';
import { GestorService } from '../shared/gestor/gestor.service';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-descargar-pdf',
  templateUrl: './descargar-pdf.component.html',
  styleUrls: ['./descargar-pdf.component.css']
})
export class DescargarPdfComponent implements OnInit {

  constructor(private http: HttpClient,private gestorService: GestorService) { }

  ngOnInit() {
  }
  public DESCARGARPDF(){
    this.gestorService.DESCARGARPDF().subscribe(data => {
      alert("lo descarga");
    });
  }
}
