import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioNumerosComponent } from './ejercicio-numeros.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSortModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [EjercicioNumerosComponent],
  exports:[EjercicioNumerosComponent]
})
export class EjercicioNumerosModule { }
