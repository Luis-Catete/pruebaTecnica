import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-numeros',
  templateUrl: './ejercicio-numeros.component.html',
  styleUrls: ['./ejercicio-numeros.component.scss']
})
export class EjercicioNumerosComponent implements OnInit {

  formulario: FormGroup | any;

  numeroString: string = '';
  resultados: { numero: number; repeticiones: number }[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cadena: ['', [Validators.required, Validators.pattern('^[0-9,]+$')]],
      resultado: new FormControl(''),

    });
  }

  validarNumeroString(input: string): boolean {
    // Utiliza una expresión regular para verificar si la cadena contiene solo números y comas.
    const pattern = /^[0-9,]+$/;
    return pattern.test(input);
  }

  contarRepeticiones() {
    this.numeroString=this.formulario.controls.cadena.value;

    //Dividir la cadena de números en un arreglo y convertirlos a números.
    const numeros = this.numeroString.split(',').map(Number);

    //Crear un mapa para contar las repeticiones de cada número.
    const contador = new Map<number, number>();

    // Iterar a través del arreglo de números y contar las repeticiones.
    numeros.forEach((numero) => {
      contador.set(numero, (contador.get(numero) || 0) + 1);
    });

    //Transformar el mapa en un arreglo de objetos para facilitar la ordenación y la visualización.
    this.resultados = Array.from(contador.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([numero, repeticiones]) => ({ numero, repeticiones }));
  }

}
