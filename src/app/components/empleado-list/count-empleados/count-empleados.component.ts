import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;

  @Output() cambioRadioButton = new EventEmitter<string>();

  radioButtonSeleccionado: string = 'Todos';
  
  constructor() {
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;

  }

  ngOnInit(): void {
    console.log(this.todos);
  }

  radioChange(): void {
    this.cambioRadioButton.emit(this.radioButtonSeleccionado);
  }
}
