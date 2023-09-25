import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'prueba';
  isMenuOpen = false;

  constructor(private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router){
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logOut() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
        this._snackBar.open("Se cerro la sesión", 'aceptar', {
          duration: 4 * 1000,});
      })
      .catch(error => console.log(error));
  }
}
