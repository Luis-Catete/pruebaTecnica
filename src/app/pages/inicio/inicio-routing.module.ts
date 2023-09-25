import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PokemonTableComponent } from '../pokemon-table/pokemon-table.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemon', component: PokemonTableComponent },
  { path: 'pokemonDetail/:id', component: PokemonDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
