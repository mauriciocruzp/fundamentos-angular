import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.css']
})
export class EstructuralComponent implements OnInit {
  isError = false;

  sections = [
    { id: 1, name: "Introducción", duration: "10:34"},
    { id: 2, name: "Usos de Angular", duration: "20:00"},
    { id: 3, name: "Instalación del entorno", duration: "30:32"},
    { id: 4, name: "Componentes", duration: "40:34"},
    { id: 5, name: "Directivas", duration: "50:02"}
  ]

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isError = true;
    // }, 4000);
  }

  showError() {
    this.isError = true;
  }
}
