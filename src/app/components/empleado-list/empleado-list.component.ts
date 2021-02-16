import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000},
    {legajo: 2, nombre: 'Marcos', apellido: 'Gonzalez', sexo: 'Masculino', salario: 65000},
    {legajo: 3, nombre: 'Marta', apellido: 'Garcia', sexo: 'Femenino', salario: 75000},
    {legajo: 4, nombre: 'Ignacio', apellido: 'Cortes', sexo: 'Masculino', salario: 55000},
    {legajo: 5, nombre: 'Maria', apellido: 'Navarro', sexo: 'Femenino', salario: 80000},
    {legajo: 6, nombre: 'Joaquin', apellido: 'Marquez', sexo: 'Masculino', salario: 80000}
  ]
  radioButtonSeleccionado: string = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  cantidadEmpleados(rbSelec: string): void {
    this.radioButtonSeleccionado = rbSelec;
  }
}
