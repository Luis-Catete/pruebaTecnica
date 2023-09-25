import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formLogin: FormGroup | any;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
     private router: Router) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.isLoading = true;
      this.errorMessage = ''; // Limpiar errores previos
      this.userService.login(this.formLogin.value)
        .then(response => {
          console.log(response);
          // Redirigir a la página principal o realizar acciones necesarias en caso de éxito
          this.router.navigate(['/main']);
          this._snackBar.open("Se inicio sesión con éxito", 'aceptar', {
            duration: 4 * 1000,});
        })
        .catch(error => {
          console.error('Error durante el inicio de sesión:', error);
          this.errorMessage = 'Ocurrió un error durante el inicio de sesión. Por favor, verifica tus credenciales e inténtalo nuevamente.';
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }

  onLoginWithGoogle() {
    this.isLoading = true;
    this.errorMessage = ''; // Limpiar errores previos
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        // Redirigir a la página principal o realizar acciones necesarias en caso de éxito
        this.router.navigate(['/pokemon']);
      })
      .catch(error => {
        console.error('Error durante el inicio de sesión con Google:', error);
        this.errorMessage = 'Ocurrió un error durante el inicio de sesión con Google. Por favor, inténtalo nuevamente más tarde.';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
