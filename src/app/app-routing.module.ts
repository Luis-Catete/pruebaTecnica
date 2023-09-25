import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTableComponent } from './pages/pokemon-table/pokemon-table.component';
import { EjercicioNumerosComponent } from './pages/ejercicio-numeros/ejercicio-numeros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  //{ path: 'home', component: InicioComponent },
  {
    path: 'home', component: InicioComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'pokemon', component: PokemonTableComponent,...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ejercicio', component: EjercicioNumerosComponent,...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
