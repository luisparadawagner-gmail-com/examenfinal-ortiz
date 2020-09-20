import { Component, OnInit } from '@angular/core';
import { Rutina } from 'src/app/clase/Rutina';
import { ComponentConsultarService } from 'src/app/servicio/component-consultar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabla-rutina',
  templateUrl: './tabla-rutina.component.html',
  styleUrls: ['./tabla-rutina.component.css'],
})
export class TablaRutinaComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'nombreRutina',
    'numeroDeRepeticiones',
    'pesoLevantar',
    'listarRutina',
  ];
  dataSource: Rutina[] = [];

  rutinaNuevo: any;

  constructor(
    private componentConsultarService: ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRutina();
  }

  getRutina() {
    this.componentConsultarService.getRutina().subscribe((rutinas) => {
      this.dataSource = rutinas;
      this.agregarFila();
    });
  }

  agregarFila() {
    this.rutinaNuevo = this.rutaA.snapshot.params;
    this.dataSource.push(this.rutinaNuevo);
  }

  listarRutina(element) {
    this.router.navigate(['/formulario-rutina-component', element]);
  }
}
