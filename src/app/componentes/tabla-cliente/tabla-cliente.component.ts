import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clase/Cliente';
import { ComponentConsultarService } from 'src/app/servicio/component-consultar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrls: ['./tabla-cliente.component.css'],
})
export class TablaClienteComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'telefono',
    'direccion',
    'fechaDeNacimiento',
    'editar',
    'asociarRutina',
    'listarRutina',
  ];
  dataSource: Cliente[] = [];

  clienteNuevo: any;

  constructor(
    private componentConsultarService: ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente() {
    this.componentConsultarService.getCliente().subscribe((clientes) => {
      this.dataSource = clientes;
      this.agregarFila();
    });
  }

  agregarFila() {
    this.clienteNuevo = this.rutaA.snapshot.params;
    this.dataSource.push(this.clienteNuevo);
  }

  editar(element) {
    this.router.navigate(['/formulario-cliente-component', element]);
  }

  asociarRutina(element) {
    this.router.navigate(['/formulario-rutina-component', element]);
  }

  listarRutina(element) {
    this.router.navigate(['/tabla-rutina-component', element]);
  }
}
