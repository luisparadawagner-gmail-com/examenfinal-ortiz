import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Rutina } from 'src/app/clase/Rutina';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-rutina',
  templateUrl: './formulario-rutina.component.html',
  styleUrls: ['./formulario-rutina.component.css'],
})
export class FormularioRutinaComponent implements OnInit {
  rutina: Rutina;
  registro: any;

  constructor(
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}

  rutinaForm = this.fb.group({});

  ngOnInit(): void {
    this.registro = this.rutaActiva.snapshot.params;

    if (Object.keys(this.registro).length) {
      this.rutina = this.registro;
    }

    this.initForm(this.rutina);
  }

  initForm(editarRutina: Rutina) {
    this.rutinaForm = this.fb.group({
      nombreRutina: [editarRutina ? editarRutina.nombreRutina : ''],
      numeroDeRepeticiones: [
        editarRutina ? editarRutina.numeroDeRepeticiones : '',
      ],
      pesoLevantar: [editarRutina ? editarRutina.pesoLevantar : ''],
    });
  }

  submit() {
    debugger;
    this.rutinaForm.value;

    this.rutina = this.rutinaForm.value;
    this.router.navigate(['/tabla-cliente-component', this.rutina]);
  }
}
